/* ===== Numi Tech · Tech Digital: tipus de pas propis i teoria animada =====
   Ciutadania digital per a 8-14 anys. Tot és contingut propi de Numi: personatges, titulars, imatges i dades són
   INVENTATS i es marquen com a exemples. No es demana ni es desa mai cap dada real de l'alumne.
   · digStory  història amb escenes digitals (aula, casa, nit, ciutat, redacció, laboratori, parc, plaça)
   · digSort   classificar targetes en caixes (públic/privat, amable/ofensiu…)
   · digPass   laboratori de contrasenyes INVENTADES: mesurador i per què (no es guarda res)
   · digChat   xat simulat: l'alumne decideix què fer amb cada missatge
   · digPriv   simulador de configuració de privadesa amb la vista d'un desconegut
   · digFake   detectiu de bulos: titulars il·lustrats inventats, pistes i veredicte
   · digPhoto  imatges retocades (trobar els canvis) i retallades (què hi havia fora?)
   · digAI     una IA de joguina que aprèn dels exemples de l'alumne (veí més proper) i s'equivoca
   · digFoot   l'empremta digital: línia de temps de decisions i què en queda a la xarxa
   · digDay    planificador de la tarda: pantalles en equilibri
   · digTone   construir un missatge amable amb el termòmetre de com se sentirà qui el rep
   · digMake   projecte: pòster/decàleg/campanya/fitxa que es desa al portafoli (kind: 'dig')
   Globals amb prefix dig/DIG. TANI_DIG s'afegeix a TANI en carregar. */

/* ---------- Icones ---------- */
const DIG_ICO = {
  shield: '<svg viewBox="0 0 24 24"><path d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6z" fill="currentColor"/><path d="M8 12l3 3 5-6" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="4.5" y="10" width="15" height="11" rx="3" fill="currentColor"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="12" cy="15.5" r="1.8" fill="#fff"/></svg>',
  key: '<svg viewBox="0 0 24 24"><circle cx="8" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M12.5 12H21M18 12v3.5M15.5 12v2.5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  lupa: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M14.5 14.5L20 20" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20.5s-8-4.6-8-10.4A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 8 2.5c0 5.8-8 10.4-8 10.4z" fill="currentColor"/></svg>',
  mega: '<svg viewBox="0 0 24 24"><path d="M3.5 10v4h3l8 4.5v-13l-8 4.5z" fill="currentColor"/><path d="M18 9a4 4 0 0 1 0 6M20 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M6.5 14l1.5 5h2.5l-1-5" fill="currentColor"/></svg>',
  brain: '<svg viewBox="0 0 24 24"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h1V4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-1V4z" fill="currentColor"/><path d="M7 10h3M14 14h3M14 9h2" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M4 5h16a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 17H10l-5 4v-4H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 5z" fill="currentColor"/><circle cx="8" cy="11" r="1.4" fill="#fff"/><circle cx="12" cy="11" r="1.4" fill="#fff"/><circle cx="16" cy="11" r="1.4" fill="#fff"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" fill="currentColor"/><circle cx="12" cy="12" r="3.6" fill="#fff"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" fill="currentColor"/></svg>',
  sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.6" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  moon: '<svg viewBox="0 0 24 24"><path d="M15.5 3.5A8.5 8.5 0 1 0 20.5 15 7 7 0 0 1 15.5 3.5z" fill="currentColor"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="3" fill="currentColor"/><rect x="8" y="5" width="8" height="12" rx="1" fill="#fff" opacity=".85"/><circle cx="12" cy="19.2" r="1" fill="#fff"/></svg>',
  people: '<svg viewBox="0 0 24 24"><circle cx="8.5" cy="8" r="3.2" fill="currentColor"/><circle cx="16.5" cy="9" r="2.6" fill="currentColor" opacity=".7"/><path d="M2.5 19c0-3.6 2.7-6 6-6s6 2.4 6 6zM13.5 19c.3-2.8 1.4-4.6 3-4.6 2.4 0 4 1.9 4 4.6z" fill="currentColor"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  block: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M6 18L18 6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  adult: '<svg viewBox="0 0 24 24"><circle cx="9" cy="6" r="3" fill="currentColor"/><path d="M4.5 21v-7a4.5 4.5 0 0 1 9 0v7z" fill="currentColor"/><circle cx="17.5" cy="11" r="2.2" fill="currentColor" opacity=".7"/><path d="M14.5 21v-4a3 3 0 0 1 6 0v4z" fill="currentColor" opacity=".7"/></svg>',
  share: '<svg viewBox="0 0 24 24"><circle cx="18" cy="5.5" r="3" fill="currentColor"/><circle cx="6" cy="12" r="3" fill="currentColor"/><circle cx="18" cy="18.5" r="3" fill="currentColor"/><path d="M8.5 10.7l7-3.9M8.5 13.3l7 3.9" stroke="currentColor" stroke-width="2"/></svg>',
  mute: '<svg viewBox="0 0 24 24"><path d="M4 5h16a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 17H10l-5 4v-4H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 5z" fill="currentColor" opacity=".35"/><path d="M8 8l8 6M16 8l-8 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  flag: '<svg viewBox="0 0 24 24"><path d="M5 21V4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M6 4.5h11l-2.5 4 2.5 4H6z" fill="currentColor"/></svg>',
  camera: '<svg viewBox="0 0 24 24"><path d="M4 7.5h3.5L9 5h6l1.5 2.5H20a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18V9A1.5 1.5 0 0 1 4 7.5z" fill="currentColor"/><circle cx="12" cy="13" r="3.8" fill="#fff"/><circle cx="12" cy="13" r="2" fill="currentColor"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.6 7-12a7 7 0 0 0-14 0c0 5.4 7 12 7 12z" fill="currentColor"/><circle cx="12" cy="10" r="2.6" fill="#fff"/></svg>',
  school: '<svg viewBox="0 0 24 24"><path d="M2.5 9L12 4l9.5 5-9.5 5z" fill="currentColor"/><path d="M6 11.5v5c2 2 10 2 12 0v-5l-6 3.2z" fill="currentColor" opacity=".7"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 21a8 8 0 0 1 16 0z" fill="currentColor"/></svg>',
  tag: '<svg viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8z" fill="currentColor"/><circle cx="7.5" cy="8" r="1.8" fill="#fff"/></svg>',
  spark: '<svg viewBox="0 0 24 24"><path d="M12 2l2.2 6.3L20.5 10l-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-1.7z" fill="currentColor"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" fill="currentColor"/></svg>',
  book: '<svg viewBox="0 0 24 24"><path d="M3 5.5C6 4 9 4 12 6c3-2 6-2 9-.5V19c-3-1.5-6-1.5-9 .5-3-2-6-2-9-.5z" fill="currentColor"/><path d="M12 6v13.5" stroke="#fff" stroke-width="1.6"/></svg>',
  ball: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="currentColor"/><path d="M12 7l3.5 2.5-1.3 4.1H9.8L8.5 9.5zM12 3v4M20.5 9.5l-5 0M3.5 9.5l5 0M7 19.5l2.8-5.9M17 19.5l-2.8-5.9" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-7.5 9 7.5v9.5a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" fill="currentColor"/></svg>',
  palette: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 1.5-2.2-.6-1.4.3-2.8 1.8-2.8H18a3 3 0 0 0 3-3c0-5.5-4-10-9-10z" fill="currentColor"/><circle cx="7.5" cy="11" r="1.6" fill="#fff"/><circle cx="10" cy="7" r="1.6" fill="#fff"/><circle cx="15" cy="7.2" r="1.6" fill="#fff"/></svg>',
  bath: '<svg viewBox="0 0 24 24"><path d="M3 12h18v2.5a5.5 5.5 0 0 1-5.5 5.5h-7A5.5 5.5 0 0 1 3 14.5z" fill="currentColor"/><path d="M6 12V6a2 2 0 0 1 3.6-1.2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 21l-1 1.5M17 21l1 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  food: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="7.5" fill="currentColor"/><circle cx="12" cy="13" r="4.3" fill="#fff" opacity=".85"/><path d="M3 3v6M5 3v6M4 9v12M20 3c-2 2-2 6 0 7v11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
};
const digI = (k, cls = '') => `<span class="dgi ${cls}">${DIG_ICO[k] || DIG_ICO.star}</span>`;

/* ---------- Personatges inventats (avatars il·lustrats, diversos) ---------- */
const DIG_SKIN = ['#F9D9BE', '#EFC09A', '#D29B6E', '#A76E46', '#6E452B'];
const DIG_PPL = {
  aina: { n: 'Aina', sk: 2, h: '#2A1A12', st: 'curly', bg: '#FFD9E8', sh: '#F0568C' },
  nil: { n: 'Nil', sk: 0, h: '#C4612A', st: 'short', bg: '#D6E6FF', sh: '#3D7BF4' },
  jana: { n: 'Jana', sk: 1, h: '#14A3B8', st: 'hijab', bg: '#E1F6EA', sh: '#1FA463' },
  pau: { n: 'Pau', sk: 4, h: '#17100B', st: 'buzz', gl: 1, bg: '#FFF0C4', sh: '#F08A24' },
  leo: { n: 'Leo', sk: 1, h: '#14141E', st: 'straight', bg: '#ECE4FF', sh: '#8B5CF6' },
  iris: { n: 'Iris', sk: 0, h: '#E3B94E', st: 'pony', bg: '#D7F3F6', sh: '#14A3B8' },
  omar: { n: 'Omar', sk: 3, h: '#120C08', st: 'short', bg: '#FFE2CC', sh: '#EF5A5A' },
  sara: { n: 'Sara', sk: 3, h: '#1E120C', st: 'long', bg: '#E7EEFF', sh: '#2F5BEA' },
  marc: { n: 'Marc', sk: 2, h: '#6B3F20', st: 'straight', gl: 1, bg: '#E4F4D8', sh: '#3CC47C' },
  avi: { n: 'Avi|Abuelo', sk: 1, h: '#D9DDE6', st: 'bald', gl: 1, bg: '#F3E9DC', sh: '#8E6A3A' },
  mare: { n: 'Mare|Madre', sk: 2, h: '#3A2416', st: 'long', bg: '#FFE7D6', sh: '#E5489A' },
  profe: { n: 'Profe', sk: 3, h: '#241710', st: 'pony', gl: 1, bg: '#E8EEFF', sh: '#1B2B6B' },
  desc: { n: 'Desconegut|Desconocido', unk: 1, bg: '#E3E7F0' },
  grup: { n: 'Grup|Grupo', grp: 1, bg: '#DDF5E6' },
  bot: { n: 'Xatbot|Chatbot', bot: 1, bg: '#EDE6FF' },
  diari: { n: 'Diari|Diario', news: 1, bg: '#FFF1D6' }
};
function digAva(id, cls = '') {
  const p = DIG_PPL[id] || DIG_PPL.desc;
  let b = '';
  if (p.unk) b = `<circle cx="24" cy="20" r="9" fill="#AEB6C8"/><path d="M9 46c0-9 6.7-15 15-15s15 6 15 15z" fill="#AEB6C8"/><text x="24" y="25" text-anchor="middle" font-size="12" font-weight="900" fill="#fff" font-family="Lexend,sans-serif">?</text>`;
  else if (p.grp) b = `<circle cx="16" cy="21" r="6.5" fill="#F0568C"/><circle cx="32" cy="21" r="6.5" fill="#3D7BF4"/><circle cx="24" cy="17" r="7.5" fill="#1FA463"/><path d="M6 44c0-7 4.5-12 10-12s10 5 10 12zM22 44c0-7 4.5-12 10-12s10 5 10 12z" fill="#7FB8F7"/><path d="M13 45c0-8 5-13.5 11-13.5S35 37 35 45z" fill="#3CC47C"/>`;
  else if (p.bot) b = `<rect x="11" y="13" width="26" height="22" rx="8" fill="#8B5CF6"/><rect x="15" y="17" width="18" height="11" rx="5" fill="#1B2B6B"/><circle cx="20" cy="22.5" r="2.2" fill="#7DF3FF"/><circle cx="28" cy="22.5" r="2.2" fill="#7DF3FF"/><path d="M24 13V8" stroke="#8B5CF6" stroke-width="2.4"/><circle cx="24" cy="7" r="2.6" fill="#FFC531"/><path d="M12 46c0-6 5-9 12-9s12 3 12 9z" fill="#B49AF8"/>`;
  else if (p.news) b = `<rect x="10" y="10" width="28" height="30" rx="4" fill="#fff" stroke="#C98A4B" stroke-width="2"/><rect x="14" y="15" width="20" height="5" rx="1.5" fill="#F08A24"/><path d="M14 25h20M14 29h20M14 33h13" stroke="#C9B48A" stroke-width="2" stroke-linecap="round"/>`;
  else {
    const sk = DIG_SKIN[p.sk], h = p.h, back = p.st === 'long' ? `<path d="M11 22q0-13 13-13t13 13v17h-26z" fill="${h}"/>` : p.st === 'hijab' ? `<path d="M8 46q-1-20 3-28q5-10 13-10t13 10q4 8 3 28z" fill="${h}"/>` : '';
    const top = { short: `<path d="M12.5 22q0-12 11.5-12t11.5 12q-3-6.5-11.5-6.5T12.5 22z" fill="${h}"/>`,
      curly: [[14, 16], [19, 12], [25, 10.5], [31, 12.5], [35, 17.5], [13, 22], [36, 23]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.4" fill="${h}"/>`).join(''),
      straight: `<path d="M12 24q-1-14 12-14t12 14l-2-1q-2-6-6-7q-5 5-14 8z" fill="${h}"/>`,
      pony: `<path d="M12.5 22q0-12 11.5-12t11.5 12q-4-7-11.5-7t-11.5 7z" fill="${h}"/><ellipse cx="38" cy="18" rx="4.5" ry="7" fill="${h}" transform="rotate(25 38 18)"/>`,
      long: `<path d="M12 23q0-13 12-13t12 13q-6-8-12-6q-6-2-12 6z" fill="${h}"/>`,
      buzz: `<path d="M13 21q1-10 11-10t11 10q-4-5-11-5t-11 5z" fill="${h}"/>`,
      hijab: `<path d="M13.5 20q2-9 10.5-9t10.5 9q-3-4-10.5-4t-10.5 4z" fill="${h}" opacity=".9"/>`,
      bald: `<path d="M12.5 24q0-5 2-7M35.5 24q0-5-2-7" stroke="${h}" stroke-width="3.5" stroke-linecap="round"/>` }[p.st] || '';
    b = `${back}<path d="M8 47q0-11 16-11t16 11z" fill="${p.sh}"/><rect x="20.5" y="31" width="7" height="6" fill="${sk}"/><circle cx="24" cy="23.5" r="11.5" fill="${sk}"/>${top}
      <circle cx="20" cy="24" r="1.7" fill="#2B1A38"/><circle cx="28" cy="24" r="1.7" fill="#2B1A38"/><path d="M20.5 28.5q3.5 3 7 0" stroke="#2B1A38" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="17" cy="27.5" r="2" fill="#FF8FA3" opacity=".35"/><circle cx="31" cy="27.5" r="2" fill="#FF8FA3" opacity=".35"/>${p.gl ? `<g fill="none" stroke="#2B1A38" stroke-width="1.4"><circle cx="20" cy="24" r="3.6"/><circle cx="28" cy="24" r="3.6"/><path d="M23.6 24h.8"/></g>` : ''}`;
  }
  return `<svg class="dgava ${cls}" viewBox="0 0 48 48" aria-hidden="true"><defs><clipPath id="dgc-${id}"><circle cx="24" cy="24" r="24"/></clipPath></defs><circle cx="24" cy="24" r="24" fill="${p.bg}"/><g clip-path="url(#dgc-${id})">${b}</g></svg>`;
}
const digName = id => tx((DIG_PPL[id] || {}).n || id);

/* ---------- Escenes il·lustrades (mateix format que tScene: 320×180, amb en Numi i en Bit) ---------- */
function digScene(kind, who, mood) {
  const F = '#E9C08F';
  const bubbles = n => [...Array(n).keys()].map(i => `<g class="dgfloat" style="--d:${-i * 1.7}s;--x:${30 + i * 62}px"><rect x="0" y="0" width="${30 + (i % 3) * 8}" height="16" rx="8" fill="${['#fff', '#DDF5E6', '#FFE9C7', '#E8EEFF', '#FFE0EC'][i % 5]}"/><circle cx="9" cy="8" r="2" fill="#9AA6C8"/><circle cx="15" cy="8" r="2" fill="#9AA6C8"/><circle cx="21" cy="8" r="2" fill="#9AA6C8"/></g>`).join('');
  const win = (x, y, w, h, night) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${night ? '#24306B' : '#BFE6FF'}" stroke="#fff" stroke-width="4"/><path d="M${x + w / 2} ${y}v${h}M${x} ${y + h / 2}h${w}" stroke="#fff" stroke-width="3"/>${night ? `<circle cx="${x + w * .7}" cy="${y + h * .3}" r="7" fill="#FFE9A8"/><circle cx="${x + w * .7 + 3}" cy="${y + h * .3 - 2}" r="6" fill="#24306B"/>${[[.2, .2], [.35, .7], [.85, .75]].map(([a, b], i) => `<circle class="dgtw" style="--d:${i * .7}s" cx="${x + w * a}" cy="${y + h * b}" r="1.6" fill="#fff"/>`).join('')}` : `<g class="tcloud" style="--d:-3s"><ellipse cx="${x + 14}" cy="${y + 14}" rx="10" ry="5" fill="#fff"/></g>`}`;
  const laptop = (x, y, c = '#3D7BF4') => `<g transform="translate(${x} ${y})"><rect x="-17" y="-24" width="34" height="22" rx="3" fill="#1B2B6B"/><rect x="-14" y="-21" width="28" height="16" rx="2" fill="${c}" class="dgscr"/><path d="M-22 -2h44l-3 4h-38z" fill="#9AA6C8"/></g>`;
  let bg = '';
  if (kind === 'aula') bg = `<rect width="320" height="180" fill="url(#dgW1)"/>${win(14, 20, 70, 56)}<rect x="104" y="16" width="120" height="66" rx="6" fill="#fff" stroke="#3CC47C" stroke-width="5"/>
      <g transform="translate(140 26)" class="dgpulse"><path d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10v-6z" fill="#3CC47C" transform="scale(1.6)"/><path d="M12 19l5 5 9-10" stroke="#fff" stroke-width="3.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <path d="M186 40h26M186 50h20M186 60h24" stroke="#C9D6FB" stroke-width="4" stroke-linecap="round"/><rect x="0" y="138" width="320" height="42" fill="${F}"/><rect x="0" y="136" width="320" height="5" fill="#D7A86F"/>
      <rect x="240" y="96" width="70" height="8" rx="3" fill="#B57536"/>${laptop(275, 96, '#3CC47C')}<g transform="translate(296 138)"><rect x="-9" y="-16" width="18" height="16" rx="3" fill="#E5489A"/><circle cy="-24" r="10" fill="#4FA83E"/><circle cx="-8" cy="-20" r="7" fill="#5DBB48"/><circle cx="8" cy="-21" r="7" fill="#3E9A34"/></g>`;
  else if (kind === 'casa' || kind === 'nit') { const n = kind === 'nit';
    bg = `<rect width="320" height="180" fill="${n ? 'url(#dgW3)' : 'url(#dgW2)'}"/>${win(220, 18, 76, 60, n)}<rect x="0" y="140" width="320" height="40" fill="${n ? '#3B3F6E' : '#D8B88E'}"/>
      <g transform="translate(18 112)"><rect x="0" y="10" width="92" height="22" rx="5" fill="${n ? '#5866B0' : '#7FA7F7'}"/><rect x="0" y="0" width="30" height="14" rx="6" fill="#fff" opacity="${n ? .7 : 1}"/><rect x="-4" y="-18" width="8" height="52" rx="3" fill="#8A5A33"/><rect x="88" y="0" width="8" height="34" rx="3" fill="#8A5A33"/></g>
      <rect x="28" y="22" width="40" height="52" rx="4" fill="${n ? '#6A5BAE' : '#FFC531'}" opacity=".9"/><path d="M48 34l4 8 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1z" fill="#fff" opacity=".8"/>
      ${n ? `<rect x="244" y="118" width="40" height="22" rx="3" fill="#6B4A2E"/><g transform="translate(264 116)"><rect x="-7" y="-12" width="14" height="12" rx="2.5" fill="#20306A"/><rect x="-5.5" y="-10.5" width="11" height="9" rx="1.5" fill="#7DF3FF" class="dgglow"/></g><ellipse cx="264" cy="104" rx="40" ry="26" fill="#7DF3FF" opacity=".12" class="dgglow"/>`
        : `<rect x="236" y="104" width="70" height="7" rx="3" fill="#B57536"/><rect x="242" y="111" width="5" height="29" fill="#8A5A33"/><rect x="295" y="111" width="5" height="29" fill="#8A5A33"/><g transform="translate(272 104)"><rect x="-13" y="-20" width="26" height="19" rx="3" fill="#1B2B6B"/><rect x="-11" y="-18" width="22" height="15" rx="2" fill="#E5489A" class="dgscr"/></g>`}`; }
  else if (kind === 'ciutat') bg = `<rect width="320" height="180" fill="url(#dgW4)"/><g class="tcloud" style="--d:-8s"><ellipse cx="60" cy="30" rx="22" ry="9" fill="#fff"/><ellipse cx="74" cy="24" rx="12" ry="9" fill="#fff"/></g>
      ${[[0, 70, 46, '#7E8FD8'], [44, 50, 40, '#5D72C9'], [82, 84, 50, '#8E9EE0'], [208, 60, 44, '#5D72C9'], [250, 40, 36, '#7E8FD8'], [284, 76, 40, '#6A7ED0']].map(([x, y, w, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${150 - y}" fill="${c}"/>${[...Array(Math.floor((150 - y) / 18)).keys()].map(r => [0, 1].map(k => `<rect x="${x + 8 + k * (w / 2 - 2)}" y="${y + 8 + r * 18}" width="${w / 2 - 14}" height="9" rx="2" fill="#FFE9A8" opacity="${(r + k + x) % 3 ? .9 : .35}"/>`).join('')).join('')}`).join('')}
      <g transform="translate(160 40)"><path d="M0 0v42" stroke="#1B2B6B" stroke-width="4"/>${[10, 18, 26].map((r, i) => `<path class="dgwave" style="--d:${i * .35}s" d="M${-r} ${-r * .6}a${r} ${r} 0 0 1 ${2 * r} 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`).join('')}<circle r="4" fill="#FFC531"/></g>
      ${bubbles(5)}<rect x="0" y="146" width="320" height="34" fill="#4B556E"/><path d="M0 162h320" stroke="#FFD54A" stroke-width="3" stroke-dasharray="16 12"/>`;
  else if (kind === 'redaccio') bg = `<rect width="320" height="180" fill="url(#dgW5)"/><rect x="88" y="14" width="146" height="84" rx="8" fill="#1B2B6B"/><rect x="95" y="21" width="132" height="70" rx="4" fill="#fff"/>
      <rect x="103" y="29" width="78" height="9" rx="3" fill="#EF5A5A"/><path d="M103 46h110M103 54h96M103 62h104" stroke="#D5DEF7" stroke-width="5" stroke-linecap="round"/><rect x="103" y="69" width="40" height="16" rx="3" fill="#C9D6FB"/>
      <g class="dglupa2"><circle cx="196" cy="70" r="12" fill="#E8F4FF" fill-opacity=".6" stroke="#F08A24" stroke-width="4"/><path d="M205 79l9 9" stroke="#F08A24" stroke-width="5" stroke-linecap="round"/></g>
      <rect x="150" y="98" width="22" height="20" fill="#5B6A9A"/><rect x="0" y="136" width="320" height="44" fill="#C7CFE6"/><rect x="18" y="104" width="62" height="34" rx="4" fill="#FFF8E6" stroke="#E2BE76" stroke-width="2" transform="rotate(-6 49 121)"/><rect x="246" y="108" width="58" height="30" rx="4" fill="#FFF8E6" stroke="#E2BE76" stroke-width="2" transform="rotate(5 275 123)"/>`;
  else if (kind === 'lab') bg = `<rect width="320" height="180" fill="url(#dgW6)"/>${[...Array(9).keys()].map(i => `<circle cx="${(i * 37) % 320}" cy="${(i * 53) % 120 + 10}" r="1.5" fill="#7DF3FF" opacity=".5"/>`).join('')}
      <rect x="84" y="12" width="152" height="92" rx="10" fill="#0B2340" stroke="#7DF3FF" stroke-width="2.5"/>
      ${(() => { const L1 = [[110, 34], [110, 58], [110, 82]], L2 = [[160, 28], [160, 50], [160, 72], [160, 94]], L3 = [[210, 46], [210, 76]]; const ln = (A, B) => A.flatMap(a => B.map(b => `<path d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}" stroke="#7DF3FF" stroke-width="1.2" opacity=".35"/>`)).join('');
        return ln(L1, L2) + ln(L2, L3) + [...L1, ...L2, ...L3].map(([x, y], i) => `<circle class="dgnode" style="--d:${(i % 5) * .3}s" cx="${x}" cy="${y}" r="6" fill="#8B5CF6" stroke="#C8B6FF" stroke-width="2"/>`).join(''); })()}
      <rect x="0" y="138" width="320" height="42" fill="#0E2A44"/><rect x="0" y="136" width="320" height="4" fill="#7DF3FF" opacity=".5"/>
      <rect x="10" y="98" width="62" height="6" rx="2" fill="#2C5A7A"/><g transform="translate(26 96) scale(.5)">${digCreSVG({ h: 0, s: .9, z: .5 })}</g><g transform="translate(56 96) scale(.5)">${digCreSVG({ h: 210, s: .1, z: .5 })}</g>
      <rect x="250" y="98" width="62" height="6" rx="2" fill="#2C5A7A"/><g transform="translate(266 96) scale(.5)">${digCreSVG({ h: 120, s: .15, z: .5 })}</g><g transform="translate(296 96) scale(.5)">${digCreSVG({ h: 40, s: .85, z: .5 })}</g>`;
  else if (kind === 'parc') bg = `<rect width="320" height="180" fill="url(#dgW4)"/><g transform="translate(286 38)"><g class="tsunr">${[...Array(10).keys()].map(i => `<rect x="-2" y="-32" width="4" height="9" rx="2" fill="#FFC531" transform="rotate(${i * 36})"/>`).join('')}</g><circle r="17" fill="#FFD54A"/></g>
      <g class="dgkite"><path d="M80 20l14 14-14 14-14-14z" fill="#E5489A"/><path d="M80 20v28M66 34h28" stroke="#fff" stroke-width="1.5"/><path d="M80 48q-6 20 10 40q10 14 4 34" fill="none" stroke="#fff" stroke-width="1.4"/></g>
      <path d="M0 120q80-26 160-8t160-6v74H0z" fill="#8FD16A"/><path d="M0 140q90-18 170-4t150-2v46H0z" fill="#7CC456"/>
      ${[[30, 128, 1], [262, 124, .9]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-3 0V-22h6V0z" fill="#8A5A33"/><circle cx="-10" cy="-28" r="13" fill="url(#bwLeaf)"/><circle cx="10" cy="-30" r="13" fill="url(#bwLeaf)"/><circle cy="-42" r="15" fill="url(#bwLeaf2)"/></g>`).join('')}
      <g transform="translate(212 150)"><rect x="-26" y="-14" width="52" height="6" rx="2" fill="#B57536"/><rect x="-26" y="-24" width="52" height="5" rx="2" fill="#C98A4B"/><path d="M-22 -8v10M22 -8v10" stroke="#7A4A1E" stroke-width="4"/></g>`;
  else if (kind === 'placa') bg = `<rect width="320" height="180" fill="url(#dgW4)"/><path d="M0 30Q80 52 160 30T320 30" fill="none" stroke="#fff" stroke-width="1.5"/>${[...Array(12).keys()].map(i => { const x = 10 + i * 27, y = 30 + Math.sin((i * 27 + 10) / 320 * Math.PI * 2) * -11 + 6; return `<path class="dgflag" style="--d:${i * .15}s" d="M${x} ${y}l8 0l-4 12z" fill="${['#EF5A5A', '#FFC531', '#3CC47C', '#3D7BF4', '#E5489A', '#8B5CF6'][i % 6]}"/>`; }).join('')}
      <rect x="16" y="60" width="70" height="80" fill="#F4E4C8"/><path d="M12 62L51 40l39 22z" fill="#C9443A"/><rect x="242" y="56" width="66" height="84" fill="#FDEBD8"/><path d="M238 58l37-20 37 20z" fill="#E07A3F"/>
      <g transform="translate(116 52) rotate(-4)"><rect width="88" height="62" rx="6" fill="#fff" stroke="#E5489A" stroke-width="4"/><text x="44" y="26" text-anchor="middle" font-family="Lexend,sans-serif" font-weight="900" font-size="13" fill="#E5489A">${L('RESPECTE', 'RESPETO')}</text><path d="M44 50s-10-6-10-12a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 6-10 12-10 12z" fill="#EF5A5A"/></g>
      <rect x="0" y="140" width="320" height="40" fill="#D7C2A0"/><path d="M0 150h320M0 164h320" stroke="#C4AB86" stroke-width="2"/>`;
  else bg = `<rect width="320" height="180" fill="url(#dgW4)"/>`;
  const both = who === 'both', yN = 56, numi = who !== 'bit' && who !== 'none' ? `<svg x="${both ? 40 : 98}" y="${yN}" width="100" height="100" viewBox="0 0 120 120">${charSVG('numi', mood || 'happy').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg>` : '';
  const bit = who === 'bit' || both ? `<svg x="${both ? 170 : 116}" y="${both ? 62 : 50}" width="${both ? 78 : 92}" height="${both ? 96 : 112}" viewBox="-64 -78 128 156">${bitChar(mood || 'happy').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</svg>` : '';
  return `<div class="tscene dgscene k-${kind}"><svg viewBox="0 0 320 180" aria-hidden="true">${typeof bitDefs === 'function' ? bitDefs() : ''}<defs>
    <linearGradient id="dgW1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6E4"/><stop offset="1" stop-color="#FDE3C0"/></linearGradient>
    <linearGradient id="dgW2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F1ECFF"/><stop offset="1" stop-color="#DCD3FB"/></linearGradient>
    <linearGradient id="dgW3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2F63"/><stop offset="1" stop-color="#454C8E"/></linearGradient>
    <linearGradient id="dgW4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9FDBFF"/><stop offset="1" stop-color="#DDF3FF"/></linearGradient>
    <linearGradient id="dgW5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EAF1FF"/><stop offset="1" stop-color="#D7E2FB"/></linearGradient>
    <linearGradient id="dgW6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0F3557"/><stop offset="1" stop-color="#1A5878"/></linearGradient></defs>
    ${bg}<g class="tactors">${numi}${bit}</g></svg></div>`;
}

/* ---------- Utilitats comunes ---------- */
const digQ = (st, mood) => st.who ? tBubble(st.who, tval(st.q), mood) : `<div class="tqh"><span class="tqbit">${bitChar(mood || 'think')}</span><h2 class="tsq">${tval(st.q)}</h2></div>`;
const digFb = (ok, html, el = 'tfb') => { const e = document.getElementById(el); if (e) e.innerHTML = `<div class="tfbox ${ok ? 'ok' : 'ko'}">${html}</div>`; };
const digSnd = ok => { ok ? SFX.ok && SFX.ok() : SFX.ko && SFX.ko(); };
const digTap = () => { SFX.tap && SFX.tap(); };
const digEx = () => `<span class="dgex">${L('Exemple inventat', 'Ejemplo inventado')}</span>`;

if (typeof TSTEP !== 'undefined') Object.assign(TSTEP, {
  // història amb escena digital
  digStory(st) {
    const art = st.art ? `<div class="tart">${typeof st.art === 'function' ? st.art() : st.art}</div>` : '';
    $('#tsb').innerHTML = `<div class="tcol">${st.title ? `<h2 class="tsh">${tval(st.title)}</h2>` : ''}${digScene(st.scene || 'aula', st.who || 'numi', st.mood)}<div class="bubble big tsbub">${tval(st.t)}</div>${art}${st.box ? `<div class="tbox">${tval(st.box)}</div>` : ''}${st.help ? digHelpCard() : ''}</div>`;
    tContinue();
  }
});

/* targeta de telèfons d'ajuda (Espanya). Verificats: ANAR (menors, gratuït, confidencial, 24 h), 017 d'INCIBE
   (ciberseguretat, també famílies i docents, gratuït i confidencial, de 8 a 23 h) i 112 (emergències). */
function digHelpCard() {
  return `<div class="dghelp"><div class="dghh">${digI('heart')}<b>${L("Si alguna cosa et fa mal o et preocupa, no estàs sol/a", 'Si algo te hace daño o te preocupa, no estás solo/a')}</b></div>
    <div class="dghl"><div class="dghn"><b>900 20 20 10</b><span>${L('Telèfon ANAR per a nens, nenes i adolescents · gratuït, confidencial, 24 hores (també 116 111)', 'Teléfono ANAR para niños, niñas y adolescentes · gratuito, confidencial, 24 horas (también 116 111)')}</span></div>
    <div class="dghn"><b>017</b><span>${L("Ajuda en ciberseguretat d'INCIBE · per a menors, famílies i docents · gratuït i confidencial", 'Ayuda en ciberseguridad de INCIBE · para menores, familias y docentes · gratuito y confidencial')}</span></div>
    <div class="dghn sos"><b>112</b><span>${L('Emergències: si algú és en perill ara mateix', 'Emergencias: si alguien está en peligro ahora mismo')}</span></div></div>
    <p>${L('I sempre pots parlar amb la teva família, el teu professor/a o un adult de confiança.', 'Y siempre puedes hablar con tu familia, tu profesor/a o un adulto de confianza.')}</p></div>`;
}

/* ---------- digSort: classificar targetes en caixes ---------- */
// { q, bins:[{t, ico, c}], items:[{t, ico?, ava?, b, ex?}] }  (b = caixa bona; si n'hi ha més d'una de bona: b:[0,2])
function digSortStep(st) {
  const items = st.keep ? st.items.map((_, i) => i) : shuffle(st.items.map((_, i) => i));
  let k = 0, good = 0; const put = st.bins.map(() => []);
  const okBin = (it, b) => Array.isArray(it.b) ? it.b.includes(b) : it.b === b;
  const card = i => { const it = st.items[i]; return `<div class="dgsc" id="dgsc">${it.ava ? digAva(it.ava) : it.ico ? `<span class="dgsci" style="--c:${(st.bins[Array.isArray(it.b) ? it.b[0] : it.b] || {}).c || '#2F5BEA'}">${DIG_ICO[it.ico] ? digI(it.ico) : `<em>${it.ico}</em>`}</span>` : ''}<p>${tval(it.t)}</p></div>`; };
  const draw = () => {
    $('#tsb').innerHTML = `<div class="tcol dgsort">${digQ(st)}
      <div class="dgdeck">${k < items.length ? `<span class="dgcnt">${k + 1} / ${items.length}</span>${card(items[k])}<span class="dgsh1"></span><span class="dgsh2"></span>` : `<div class="dgsdone">${bitChar(good === items.length ? 'win' : 'happy')}<p><b>${good} / ${items.length}</b> ${L('a la primera', 'a la primera')}</p></div>`}</div>
      <div class="dgbins n${st.bins.length}">${st.bins.map((b, j) => `<button class="dgbin" data-j="${j}" style="--c:${b.c}" ${k >= items.length ? 'disabled' : ''}><span class="dgbh">${b.ico ? digI(b.ico) : ''}<b>${tval(b.t)}</b></span><span class="dgbc">${put[j].map(([i, ok]) => `<i class="${ok ? '' : 'fix'}" title="${esc(tval(st.items[i].t).replace(/<[^>]+>/g, ''))}"></i>`).join('')}</span></button>`).join('')}</div>
      <div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.dgbin').forEach(b => b.onclick = () => pick(+b.dataset.j));
  };
  const pick = j => {
    if (TSS.ready || k >= items.length) return; TSS.ready = true;
    const i = items[k], it = st.items[i], ok = okBin(it, j), right = Array.isArray(it.b) ? (ok ? j : it.b[0]) : it.b;
    const c = document.getElementById('dgsc'), bin = document.querySelector(`.dgbin[data-j="${right}"]`);
    if (c && bin) { const a = c.getBoundingClientRect(), z = bin.getBoundingClientRect(); c.style.setProperty('--tx', `${z.left + z.width / 2 - a.left - a.width / 2}px`); c.style.setProperty('--ty', `${z.top + z.height / 2 - a.top - a.height / 2}px`); c.classList.add(ok ? 'fly' : 'nope'); }
    if (!ok) document.querySelector(`.dgbin[data-j="${j}"]`).classList.add('shake');
    digSnd(ok); if (ok) good++;
    put[right].push([i, ok]);
    const ex = it.ex ? ' ' + tval(it.ex) : '';
    setTimeout(() => {
      k++; TSS.ready = false; draw();
      digFb(ok, `<b>${ok ? tx(st.yes || 'Ben classificat!|¡Bien clasificado!') : L(`Va a «${tval(st.bins[right].t)}».`, `Va en «${tval(st.bins[right].t)}».`)}</b>${ex}`);
      if (k >= items.length) { if (good === items.length) TSS.ok++; tContinue(); }
    }, ok ? 520 : 900);
  };
  draw();
  tFoot(L('Classifica totes les targetes', 'Clasifica todas las tarjetas'), () => { }, false);
}

/* ---------- digPass: laboratori de contrasenyes (inventades) ---------- */
const DIG_COMMON = ['1234', '2345', '3456', '4567', '5678', '6789', '0000', '1111', '2222', 'abcd', 'qwer', 'asdf', 'zxcv', 'password', 'contrasenya', 'contrasena', 'contraseña', 'clave', 'secret', 'hola', 'adeu', 'iloveyou', 'teestimo', 'tequiero', 'admin', 'barca', 'barça', 'madrid', 'messi', 'minecraft', 'roblox', 'fortnite', 'pokemon', 'gato', 'gat', 'perro', 'gos', 'mama', 'papa', 'numi', 'bit'];
const DIG_LV = [['Molt feble|Muy débil', '#EF5A5A'], ['Feble|Débil', '#F08A24'], ['Millorable|Mejorable', '#F2B21B'], ['Forta|Fuerte', '#3CC47C'], ['Molt forta|Muy fuerte', '#1FA463']];
function digPwScore(pw, name) {
  const s = pw || '', low = s.toLowerCase(), len = [...s].length;
  const cl = [/[a-zà-ÿ]/.test(s), /[A-ZÀ-Ý]/.test(s), /\d/.test(s), /[^\p{L}\d]/u.test(s)].filter(Boolean).length;
  const words = low.split(/[^\p{L}]+/u).filter(w => w.length >= 3), phrase = words.length >= 3 && len >= 14;
  const common = DIG_COMMON.find(c => low.includes(c) && (c.length >= 4 || low.replace(/[^\p{L}]/gu, '') === c));
  const nm = name && name.length >= 3 && low.includes(name.toLowerCase());
  const date = /(19|20)\d\d/.test(s) || /\d{1,2}[/.-]\d{1,2}/.test(s);
  const rep = /(.)\1\1/.test(s) || /^\d+$/.test(s) || /^[\p{L}]+$/u.test(s) && words.length <= 1;
  let sc = len < 6 ? 0 : len < 8 ? 1 : len < 12 ? 1 + (cl >= 3 ? 1 : 0) : len < 16 ? 2 + (cl >= 3 ? 1 : 0) : 3 + (cl >= 3 || phrase ? 1 : 0);
  if (phrase) sc = Math.max(sc, cl >= 3 || len >= 20 ? 4 : 3);
  if (common || nm) sc = Math.min(sc, 1); else if (rep) sc = Math.min(sc, 2);
  if (date) sc = Math.max(0, sc - 1);
  return { sc: Math.max(0, Math.min(4, sc)), len, cl, phrase, common, nm, date, rep };
}
const DIG_WORDS = { ca: ['pingüí', 'tomàquet', 'núvol', 'cohet', 'maduixa', 'violí', 'cactus', 'iglú', 'tortuga', 'galàxia', 'paraigua', 'globus', 'llapis', 'volcà', 'xiulet', 'pastanaga'], es: ['pingüino', 'tomate', 'nube', 'cohete', 'fresa', 'violín', 'cactus', 'iglú', 'tortuga', 'galaxia', 'paraguas', 'globo', 'lápiz', 'volcán', 'silbato', 'zanahoria'] };
function digPassStep(st) {
  const goal = st.goal == null ? 3 : st.goal, name = (P && P.name || '').trim();
  let reached = false;
  const lock = (sc, empty) => { const c = empty ? '#C9D0DE' : DIG_LV[sc][1], up = sc < 3;
    return `<svg viewBox="0 0 120 130" class="dglock">${'<defs><linearGradient id="dglk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>'}
      <path d="M34 ${up ? 44 : 58}V40a26 26 0 0 1 52 0v${up ? 0 : 18}" fill="none" stroke="#9AA6C8" stroke-width="12" stroke-linecap="round" class="dgshk ${up ? 'up' : ''}"/>
      <rect x="18" y="56" width="84" height="66" rx="16" fill="${c}"/><rect x="18" y="56" width="84" height="30" rx="16" fill="url(#dglk)"/>
      <circle cx="60" cy="84" r="9" fill="#fff"/><rect x="56" y="88" width="8" height="18" rx="4" fill="#fff"/>
      ${[...Array(5).keys()].map(i => `<circle cx="${32 + i * 14}" cy="114" r="3.2" fill="${i <= sc ? '#fff' : 'rgba(255,255,255,.3)'}"/>`).join('')}</svg>`; };
  const how = sc => [L('Un ordinador que prova contrasenyes l’endevinaria en un moment.', 'Un ordenador que prueba contraseñas la adivinaría en un momento.'), L('Es pot endevinar massa de pressa.', 'Se puede adivinar demasiado deprisa.'),
    L('Va millorant, però encara es pot endevinar.', 'Va mejorando, pero todavía se puede adivinar.'), L('Costaria molt endevinar-la.', 'Costaría mucho adivinarla.'), L('Gairebé impossible d’endevinar. Molt bé!', 'Casi imposible de adivinar. ¡Muy bien!')][sc];
  $('#tsb').innerHTML = `<div class="tcol dgpass">${digQ(st)}
    <div class="dgwarn">${digI('shield')}<span>${tx(st.warn || "<b>Laboratori de proves.</b> Inventa-te-la: no escriguis mai aquí cap contrasenya de veritat. El que escrius no es guarda ni s'envia enlloc.|<b>Laboratorio de pruebas.</b> Invéntatela: no escribas nunca aquí ninguna contraseña de verdad. Lo que escribes no se guarda ni se envía a ningún sitio.")}</span></div>
    <div class="dgpbox"><div class="dgpl" id="dglock">${lock(0, 1)}</div>
      <div class="dgpr"><label class="dgplab" for="dgpw">${L('Contrasenya inventada', 'Contraseña inventada')}</label>
        <div class="dgpin"><input id="dgpw" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" data-lpignore="true" data-1p-ignore maxlength="40" placeholder="${L('Escriu una contrasenya inventada', 'Escribe una contraseña inventada')}"><button class="dgeye" id="dgeye" aria-label="${L('Amaga o mostra', 'Oculta o muestra')}">${digI('eye')}</button></div>
        <div class="dgmeter" id="dgmeter">${[0, 1, 2, 3, 4].map(i => `<i data-i="${i}"></i>`).join('')}</div>
        <p class="dglv" id="dglv"><b>${L('Escriu per començar', 'Escribe para empezar')}</b></p>
        <ul class="dgchk" id="dgchk"></ul>
        <button class="btn ghost dgdice" id="dgdice">🎲 ${L('Idea: tres paraules a l’atzar', 'Idea: tres palabras al azar')}</button></div></div>
    <div class="tfb" id="tfb"></div></div>`;
  const inp = $('#dgpw');
  const upd = () => {
    const v = inp.value, r = digPwScore(v, name), lv = DIG_LV[r.sc];
    $('#dglock').innerHTML = lock(v ? r.sc : 0, !v);
    document.querySelectorAll('#dgmeter i').forEach((e, i) => { e.style.background = v && i <= r.sc ? lv[1] : ''; });
    $('#dglv').innerHTML = v ? `<b style="color:${lv[1]}">${tx(lv[0])}</b> · ${how(r.sc)}` : `<b>${L('Escriu per començar', 'Escribe para empezar')}</b>`;
    const it = [[r.len >= 12, L(`Llarga: 12 caràcters o més (ara ${r.len})`, `Larga: 12 caracteres o más (ahora ${r.len})`)],
      [r.cl >= 3, L('Barreja: minúscules, majúscules, números o símbols', 'Mezcla: minúsculas, mayúsculas, números o símbolos')],
      [v && !r.common && !r.rep, L('No és una paraula típica ni un patró (1234, aaa, qwerty…)', 'No es una palabra típica ni un patrón (1234, aaa, qwerty…)')],
      [v && !r.nm && !r.date, L('No porta el teu nom ni dates', 'No lleva tu nombre ni fechas')],
      [r.phrase, L('Extra: és una frase de pas (3 paraules o més)', 'Extra: es una frase de paso (3 palabras o más)')]];
    $('#dgchk').innerHTML = it.map(([ok, t], i) => `<li class="${ok ? 'ok' : ''} ${i === 4 ? 'xtra' : ''}">${ok ? DIG_ICO.check : '<i></i>'}<span>${t}</span></li>`).join('');
    const tip = r.nm ? L('Has posat el teu nom: és el primer que provaria algú que et coneix.', 'Has puesto tu nombre: es lo primero que probaría alguien que te conoce.') : r.common ? L(`«${esc(r.common)}» és massa fàcil d'endevinar: és de les primeres coses que es proven.`, `«${esc(r.common)}» es demasiado fácil de adivinar: es de lo primero que se prueba.`) : r.date ? L('Les dates (com l’any que vas néixer) són fàcils d’esbrinar.', 'Las fechas (como el año en que naciste) son fáciles de averiguar.') : '';
    const bit = document.querySelector('.dgpass .tqbit'); if (bit) bit.innerHTML = bitChar(!v ? 'think' : r.sc >= 4 ? 'win' : r.sc >= 3 ? 'happy' : r.sc >= 2 ? 'think' : 'sad');
    if (v && r.sc >= goal) { if (!reached) { reached = true; SFX.ok && SFX.ok(); TSS.ok++; } digFb(true, `<b>${L('Aconseguit!', '¡Conseguido!')}</b> ${tval(st.yes || "Recorda: una contrasenya de veritat es fa així, però no s'ensenya a ningú (només a la família, si ets petit/a).|Recuerda: una contraseña de verdad se hace así, pero no se enseña a nadie (solo a la familia, si eres pequeño/a).")}`); tContinue(); }
    else $('#tfb').innerHTML = tip ? `<div class="tfbox ko">${tip}</div>` : '';
  };
  inp.oninput = upd;
  $('#dgeye').onclick = () => { inp.type = inp.type === 'text' ? 'password' : 'text'; digTap(); };
  $('#dgdice').onclick = () => { const w = shuffle(DIG_WORDS[LANG === 'es' ? 'es' : 'ca']).slice(0, 3), sy = '!?#@*+'[Math.floor(Math.random() * 6)];
    inp.value = w.map((x, i) => i === 1 ? x[0].toUpperCase() + x.slice(1) : x).join('-') + (10 + Math.floor(Math.random() * 89)) + sy; upd(); digTap();
    toast(L('És un exemple: per a una de veritat, inventa\'n una de teva.', 'Es un ejemplo: para una de verdad, inventa una tuya.')); };
  upd();
  tFoot(L('Continua', 'Continúa'), tNext, false);
  setTimeout(() => inp.focus && window.innerWidth > 700 && inp.focus(), 300);
}

/* ---------- digChat: xat simulat amb decisions ---------- */
// { q?, chat:{n, ava, sub?}, flow:[ {f:'aina', t} | {me:t} | {sys:t} | {f, img:'clau DIG_PIC'|link:{t,u}} | {ask, opts:[{t, ico, ok, fb, me?}]} ] }
function digChatStep(st) {
  const ch = st.chat || {}, fl = st.flow.slice(); let i = 0, first = 0, asks = 0;
  $('#tsb').innerHTML = `<div class="tcol dgchat">${st.q ? digQ(st, 'idle') : ''}<div class="dgchw"><div class="dgphone"><div class="dgphh">${digAva(ch.ava || 'grup')}<div><b>${tval(ch.n || '')}</b><small>${tval(ch.sub || L('en línia', 'en línea'))}</small></div>${digEx()}</div>
    <div class="dgmsgs" id="dgmsgs"></div></div><div class="dgdec" id="dgdec"></div></div><div class="tfb" id="tfb"></div></div>`;
  const box = $('#dgmsgs');
  const bubble = m => {
    if (m.sys) return `<div class="dgsys">${tval(m.sys)}</div>`;
    const me = m.me != null, who = m.f;
    const body = m.img ? `<div class="dgmimg">${digPic(m.img)}</div>${m.t ? `<p>${tval(m.t)}</p>` : ''}` : m.link ? `<p>${tval(m.t || '')}</p><div class="dglink">${digI('globe')}<div><b>${tval(m.link.t)}</b><small>${esc(m.link.u)}</small></div></div>` : `<p>${tval(me ? m.me : m.t)}</p>`;
    return `<div class="dgm ${me ? 'me' : ''} ${m.fwd ? 'fwd' : ''}">${me ? '' : digAva(who)}<div class="dgmb">${!me && ch.group ? `<em style="color:${(DIG_PPL[who] || {}).sh || '#56628A'}">${digName(who)}</em>` : ''}${m.fwd ? `<span class="dgfwd">↪ ${L('Reenviat moltes vegades', 'Reenviado muchas veces')}</span>` : ''}${body}</div></div>`;
  };
  const scroll = () => { box.scrollTop = box.scrollHeight; };
  const step = () => {
    if (!document.body.contains(box)) return;
    if (i >= fl.length) { if (first === asks) TSS.ok++; tContinue(); return; }
    const m = fl[i];
    if (m.ask) return ask(m);
    const typing = document.createElement('div'); typing.className = 'dgm typing' + (m.me != null ? ' me' : ''); typing.innerHTML = m.me != null || m.sys ? '' : `${digAva(m.f)}<div class="dgmb"><span class="dgdots"><i></i><i></i><i></i></span></div>`;
    if (!m.sys && m.me == null) { box.appendChild(typing); scroll(); }
    setTimeout(() => { typing.remove(); box.insertAdjacentHTML('beforeend', bubble(m)); SFX.tap && SFX.tap(); scroll(); i++; setTimeout(step, m.me != null ? 450 : 650); }, m.me != null || m.sys ? 250 : 750);
  };
  const ask = m => {
    asks++; let tries = 0;
    const d = $('#dgdec');
    d.innerHTML = `<p class="dgask">${digI('chat')} ${tval(m.ask)}</p><div class="dgopts">${m.opts.map((o, k) => `<button class="dgopt" data-k="${k}">${o.ico ? digI(o.ico) : ''}<span>${tval(o.t)}</span></button>`).join('')}</div>`;
    d.classList.add('on'); d.scrollIntoView && window.innerWidth < 900 && d.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    d.querySelectorAll('.dgopt').forEach(b => b.onclick = () => {
      if (b.disabled) return; const o = m.opts[+b.dataset.k]; tries++;
      digSnd(o.ok); b.classList.add(o.ok ? 'ok' : 'ko');
      digFb(o.ok, `<b>${o.ok ? L('Bona decisió!', '¡Buena decisión!') : L('Pensa-ho una altra vegada.', 'Piénsalo otra vez.')}</b> ${tval(o.fb || '')}`);
      if (!o.ok) { b.disabled = true; return; }
      if (tries === 1) first++;
      d.querySelectorAll('.dgopt').forEach(x => x.disabled = true);
      setTimeout(() => { d.classList.remove('on'); d.innerHTML = ''; if (o.me) fl.splice(i + 1, 0, { me: o.me }); if (o.then) fl.splice(i + 1, 0, ...o.then); i++; step(); }, 1100);
    });
  };
  tFoot(L('Continua', 'Continúa'), tNext, false);
  setTimeout(step, 400);
}

/* ---------- Il·lustracions inventades (fotos d'exemple dels xats, bulos i imatges retocades) · 240×150 ---------- */
const dgSky = (a = '#8FD3FF', b = '#E2F5FF') => `<defs><linearGradient id="dgsk${a.slice(1)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="240" height="150" fill="url(#dgsk${a.slice(1)})"/>`;
const dgHouse = (x, y, w, h, c = '#F4E4C8', r = '#C9443A') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/><path d="M${x - 4} ${y + 2}L${x + w / 2} ${y - h * .45}L${x + w + 4} ${y + 2}z" fill="${r}"/><rect x="${x + w * .2}" y="${y + h * .3}" width="${w * .22}" height="${h * .22}" fill="#8CC8F0"/><rect x="${x + w * .58}" y="${y + h * .5}" width="${w * .22}" height="${h * .5}" fill="#9A6538"/>`;
const dgTree = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-2.5 0V-16h5V0z" fill="#8A5A33"/><circle cx="-8" cy="-20" r="10" fill="#4FA83E"/><circle cx="8" cy="-21" r="10" fill="#3E9A34"/><circle cy="-30" r="12" fill="#5DBB48"/></g>`;
const dgKid = (x, y, c = '#3D7BF4', sk = '#EFC09A', hair = '#3A2416', s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-6 0v-12M6 0v-12" stroke="#34405E" stroke-width="5" stroke-linecap="round"/><rect x="-10" y="-30" width="20" height="20" rx="7" fill="${c}"/><circle cy="-38" r="9" fill="${sk}"/><path d="M-9 -40q0-9 9-9t9 9q-4-4-9-4t-9 4z" fill="${hair}"/><circle cx="-3" cy="-38" r="1.2" fill="#2B1A38"/><circle cx="3" cy="-38" r="1.2" fill="#2B1A38"/><path d="M-3 -34q3 2 6 0" stroke="#2B1A38" stroke-width="1.2" fill="none" stroke-linecap="round"/></g>`;
const DIG_PIC = {
  riu: e => `${dgSky()}<path d="M0 70q60-26 120-6t120-10v40H0z" fill="#9ED37A"/>${e ? `<g opacity=".85">${['#EF5A5A', '#FFC531', '#3CC47C', '#3D7BF4'].map((c, i) => `<path d="M118 ${74 - i * 0}a${52 - i * 6} ${46 - i * 6} 0 0 1 ${104 - i * 12} 0" transform="translate(${i * 6} 0)" fill="none" stroke="${c}" stroke-width="5"/>`).join('')}</g>` : ''}
    <circle cx="200" cy="26" r="13" fill="#FFD54A"/>${dgHouse(20, 54, 30, 24)}${dgHouse(58, 50, 26, 28, '#FDEBD8', '#E07A3F')}<rect x="96" y="30" width="16" height="48" fill="#E8D3B0"/><path d="M93 32l11-14 11 14z" fill="#C9443A"/><circle cx="104" cy="44" r="5" fill="#fff" stroke="#8E6A3A" stroke-width="1.5"/>
    <path d="M0 96q60-10 120 0t120-4v24q-60 10-120 2T0 118z" fill="#4FB4E8"/><path d="M10 104q10-3 20 0M70 108q10-3 20 0M150 104q10-3 20 0" stroke="#C9F1FF" stroke-width="2" fill="none"/>
    <path d="M128 96q22-26 46 0" fill="none" stroke="#C98A4B" stroke-width="7"/><path d="M122 92h58" stroke="#B57536" stroke-width="5"/><path d="M0 118q60 8 120 0t120 2v30H0z" fill="#7CC456"/>${dgTree(30, 140)}${dgTree(220, 138, .9)}
    ${e ? `<g transform="translate(62 108)"><path d="M0 0q-4-10 -14-14q8 0 14 6q6-6 14-6q-10 4-14 14z" fill="#3D5A80"/></g><g transform="translate(196 92)"><path d="M0 0V-26" stroke="#8A5A33" stroke-width="3.5"/><path d="M0 -26q-12-2-17 6M0 -26q12-3 17 4M0 -26q-4-10-14-9M0 -26q6-11 16-8" stroke="#3E8E3A" stroke-width="4.5" fill="none" stroke-linecap="round"/></g>` : ''}`,
  pati: e => `${dgSky('#A7DEFF')}<rect x="60" y="34" width="120" height="60" fill="#F6D7A8"/><path d="M54 36L120 12l66 24z" fill="#C9443A"/>
    ${[0, 1, 2, 3].map(i => `<rect x="${70 + i * 28}" y="46" width="18" height="14" rx="2" fill="#8CC8F0"/>`).join('')}<rect x="108" y="66" width="24" height="28" fill="#9A6538"/><circle cx="120" cy="25" r="7" fill="#fff" stroke="#8E6A3A" stroke-width="1.5"/><path d="M120 25v-5M120 25h4" stroke="#20306A" stroke-width="1.5" stroke-linecap="round"/>
    ${e ? `<g transform="translate(196 44)"><path d="M-14 26q-4-22 8-34q10-8 20-2q8 6 4 14q-2 4-8 4h-6q-4 0-6 6z" fill="#3CC47C"/><circle cx="4" cy="-4" r="2.2" fill="#14204A"/><path d="M-12 -4l-3-5M-6 -9l-2-6M2 -11l0-6" stroke="#2C8F57" stroke-width="3" stroke-linecap="round"/></g>` : ''}
    <rect x="0" y="94" width="240" height="56" fill="#C8B49A"/><path d="M20 132h200" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/><g transform="translate(212 94)"><path d="M0 0V-46" stroke="#5E667A" stroke-width="3"/><rect x="-14" y="-52" width="16" height="12" fill="#fff" stroke="#5E667A" stroke-width="1.5"/><path d="M-12 -40h12l-2 6h-8z" fill="none" stroke="#EF5A5A" stroke-width="1.5"/></g>
    ${dgTree(28, 96, 1.1)}${dgKid(90, 132, '#E5489A', '#D29B6E', '#1E120C', .9)}${dgKid(150, 136, '#3D7BF4', '#F9D9BE', '#C4612A', .9)}<circle cx="168" cy="132" r="5" fill="#F08A24"/>
    ${e ? `<g transform="translate(54 140)"><circle cy="-10" r="11" fill="#fff" stroke="#C9D6FB" stroke-width="1.5"/><circle cy="-28" r="8" fill="#fff" stroke="#C9D6FB" stroke-width="1.5"/><path d="M0 -27l7 2-7 1z" fill="#F08A24"/><circle cx="-3" cy="-30" r="1.2" fill="#14204A"/><circle cx="3" cy="-30" r="1.2" fill="#14204A"/></g>` : ''}<circle cx="34" cy="22" r="11" fill="#FFD54A"/>${e ? '<path d="M24 20h20M25 20q0 6 4.5 6t4.5-6M34 20q0 6 4.5 6t4.5-6" fill="#14204A" stroke="#14204A" stroke-width="1.5"/>' : ''}`,
  carrer: () => `${dgSky()}<circle cx="210" cy="24" r="12" fill="#FFD54A"/>${dgHouse(10, 50, 44, 50)}${dgHouse(62, 44, 40, 56, '#FDEBD8', '#E07A3F')}${dgHouse(150, 48, 40, 52, '#E3EEFF', '#5D72C9')}${dgHouse(196, 54, 38, 46)}
    <rect x="0" y="100" width="240" height="50" fill="#B9BFCC"/><path d="M0 108h240" stroke="#9AA2B2" stroke-width="2"/><ellipse cx="120" cy="126" rx="26" ry="8" fill="#5FB6E8"/><ellipse cx="116" cy="124" rx="14" ry="3" fill="#C9F1FF" opacity=".8"/>
    <g transform="translate(114 124)"><path d="M-6 -2h12l-3 4h-6z" fill="#fff" stroke="#9AA6C8" stroke-width=".8"/><path d="M0 -2v-8l5 6z" fill="#fff" stroke="#9AA6C8" stroke-width=".8"/></g>
    ${dgKid(150, 128, '#F08A24', '#A76E46', '#17100B', .75)}<path d="M143 126h6v3h-6zM151 126h6v3h-6z" fill="#FFC531"/>${[0, 1, 2].map(i => `<circle cx="${138 + i * 5}" cy="${118 - i * 3}" r="1.6" fill="#5FB6E8"/>`).join('')}`,
  ombra: () => `<rect width="240" height="150" fill="#3B3F6E"/><rect x="0" y="0" width="240" height="112" fill="#E8DFC8"/><ellipse cx="120" cy="60" rx="110" ry="60" fill="#FFF3C4" opacity=".55"/>
    <path d="M40 104q-6-40 14-60l-8-24 18 16q14-6 28 0l18-16-8 24q20 20 14 60z" fill="#4A4060" opacity=".85"/><circle cx="68" cy="58" r="5" fill="#E8DFC8" opacity=".5"/><circle cx="96" cy="58" r="5" fill="#E8DFC8" opacity=".5"/>
    <rect x="0" y="112" width="240" height="38" fill="#C98A4B"/><g transform="translate(170 112)"><path d="M-12 0q-2-14 4-18l-2-7 6 5h8l6-5-2 7q6 4 4 18z" fill="#F08A24"/><circle cx="-3" cy="-12" r="1.4" fill="#14204A"/><circle cx="5" cy="-12" r="1.4" fill="#14204A"/><path d="M12 -4q10 -2 8 -12" stroke="#F08A24" stroke-width="3" fill="none" stroke-linecap="round"/></g>
    <g transform="translate(222 112)"><path d="M0 0v-36" stroke="#5E667A" stroke-width="3"/><path d="M-10 -36h20l-4 -12h-12z" fill="#FFC531"/><circle cy="-34" r="4" fill="#FFF7C2"/></g>`,
  ovni: () => `${dgSky('#1C2456', '#3D4A8F')}${[[20, 20], [60, 40], [200, 16], [170, 50], [100, 12], [226, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff"/>`).join('')}<path d="M100 54l-34 70h88l-34-70z" fill="#B7F5FF" opacity=".28"/>
    <ellipse cx="120" cy="50" rx="40" ry="10" fill="#B6C2E0"/><ellipse cx="120" cy="44" rx="18" ry="12" fill="#7DF3FF" opacity=".85"/>${[-26, -9, 9, 26].map(x => `<circle cx="${120 + x}" cy="53" r="2.6" fill="#FFC531"/>`).join('')}
    ${dgHouse(20, 100, 40, 36, '#5D6390', '#2B2F55')}${dgHouse(180, 96, 44, 40, '#5D6390', '#2B2F55')}<rect x="0" y="134" width="240" height="16" fill="#23284A"/>`,
  xoco: () => `<rect width="240" height="150" fill="#FFE9D6"/><g transform="translate(46 30) rotate(-8)"><rect width="70" height="96" rx="6" fill="#6B3F20"/>${[0, 1, 2].map(r => [0, 1].map(c => `<rect x="${8 + c * 30}" y="${10 + r * 28}" width="24" height="22" rx="3" fill="#7E4B27" stroke="#4E2C15" stroke-width="1.5"/>`).join('')).join('')}<rect y="56" width="70" height="40" rx="4" fill="#E5489A"/><text x="35" y="80" text-anchor="middle" font-family="Lexend,sans-serif" font-weight="900" font-size="11" fill="#fff">XOCO</text></g>
    <g transform="translate(150 140)"><rect x="-4" y="-130" width="12" height="130" fill="#FFC531"/>${[...Array(13).keys()].map(i => `<path d="M-4 ${-10 - i * 10}h${i % 2 ? 4 : 7}" stroke="#7A4A00" stroke-width="1.2"/>`).join('')}</g>${dgKid(196, 140, '#3CC47C', '#EFC09A', '#6B3F20', 1.6)}<path d="M176 34l8-10 8 10M184 24v18" stroke="#EF5A5A" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  robot: () => `<rect width="240" height="150" fill="#FFF4E0"/><rect x="40" y="16" width="160" height="70" rx="6" fill="#2E5D4B" stroke="#B57536" stroke-width="5"/><path d="M56 34h60M56 48h80M56 62h50" stroke="#E8F5EC" stroke-width="3" stroke-linecap="round" opacity=".8"/><text x="170" y="60" font-family="Lexend,sans-serif" font-weight="900" font-size="22" fill="#FFE9A8">2+2</text>
    <g transform="translate(120 140) scale(1.25)">${typeof bitBot === 'function' ? bitBot(2) : ''}</g><rect x="0" y="132" width="240" height="18" fill="#E9C08F"/>`,
  premi: () => `<defs><radialGradient id="dgprz"><stop offset="0" stop-color="#FFF5B8"/><stop offset="1" stop-color="#FFB13B"/></radialGradient></defs><rect width="240" height="150" fill="url(#dgprz)"/>${[...Array(18).keys()].map(i => `<rect x="${(i * 53) % 240}" y="${(i * 37) % 150}" width="6" height="10" rx="2" fill="${['#EF5A5A', '#3D7BF4', '#3CC47C', '#8B5CF6'][i % 4]}" transform="rotate(${i * 40} ${(i * 53) % 240} ${(i * 37) % 150})"/>`).join('')}
    <g transform="translate(120 96)"><rect x="-40" y="-26" width="80" height="54" rx="6" fill="#EF5A5A"/><rect x="-46" y="-38" width="92" height="16" rx="5" fill="#F26B5B"/><path d="M-6 -38v66h12v-66z" fill="#FFC531"/><path d="M0 -38q-24-20-26-4q4 8 26 4q22 4 26-4q-2-16-26 4z" fill="#FFC531"/></g>
    <text x="120" y="32" text-anchor="middle" font-family="Lexend,sans-serif" font-weight="900" font-size="20" fill="#8E2A22">${L('HAS GUANYAT!!!', '¡¡¡HAS GANADO!!!')}</text>`,
  gos: () => `${dgSky('#BFE7FF')}<rect x="0" y="104" width="240" height="46" fill="#9ED37A"/><g transform="translate(96 114)"><ellipse cx="0" cy="-16" rx="30" ry="18" fill="#D29B6E"/><circle cx="28" cy="-36" r="16" fill="#D29B6E"/><path d="M18 -50q-8-6-4-18q8 4 10 14zM38 -50q8-6 4-18q-8 4-10 14z" fill="#8A5A33"/><circle cx="24" cy="-38" r="2.2" fill="#14204A"/><circle cx="34" cy="-38" r="2.2" fill="#14204A"/><ellipse cx="30" cy="-30" rx="4" ry="3" fill="#14204A"/><path d="M-26 -8v12M-12 -4v12M10 -4v12M22 -8v12" stroke="#B57536" stroke-width="6" stroke-linecap="round"/><path d="M-30 -22q-14-6-12-18" stroke="#D29B6E" stroke-width="6" fill="none" stroke-linecap="round"/></g>
    ${dgKid(176, 128, '#1FA463', '#6E452B', '#17100B', 1.3)}<path d="M150 40s-10-6-10-12a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 6-10 12-10 12z" fill="#EF5A5A"/>`,
  platja: () => `${dgSky('#C9D6E8', '#EEF2F8')}<rect x="0" y="80" width="240" height="30" fill="#5FB6E8"/><path d="M0 104q60 10 120 2t120 4v40H0z" fill="#F2DDA9"/><path d="M0 108q60 8 120 1t120 5v8q-60 4-120 0T0 120z" fill="#fff" opacity=".9"/>
    <g transform="translate(190 108)"><path d="M0 0q-4-30 4-52" stroke="#8A5A33" stroke-width="4" fill="none"/><path d="M4 -52q-16-4-22 6M4 -52q14-6 22 4M4 -52q-4-12-16-12M4 -52q8-12 18-8" stroke="#3E8E3A" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M-12 -46q14-10 28-2" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></g>
    <g transform="translate(70 126)"><circle cy="-8" r="10" fill="#fff"/><circle cy="-24" r="7" fill="#fff"/><path d="M0 -23l6 2-6 1z" fill="#F08A24"/></g>${[...Array(24).keys()].map(i => `<circle cx="${(i * 41) % 240}" cy="${(i * 29) % 100}" r="2" fill="#fff"/>`).join('')}`,
  pont: () => `${dgSky()}<path d="M0 104h240v46H0z" fill="#4FB4E8"/><path d="M0 70h60v40H0zM180 70h60v40h-60z" fill="#9ED37A"/><path d="M50 74h140" stroke="#F4F4F4" stroke-width="6"/><path d="M60 74q60-50 120 0" fill="none" stroke="#EF5A5A" stroke-width="5"/>${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${72 + i * 19} 74V${74 - Math.sin((i + .5) / 6 * Math.PI) * 34}" stroke="#EF5A5A" stroke-width="1.5"/>`).join('')}
    ${dgKid(96, 72, '#3D7BF4', '#EFC09A', '#3A2416', .55)}${dgKid(134, 72, '#E5489A', '#6E452B', '#17100B', .55)}${dgKid(146, 72, '#FFC531', '#F9D9BE', '#E3B94E', .45)}${dgTree(24, 72, .8)}${dgTree(214, 72, .8)}<circle cx="210" cy="24" r="11" fill="#FFD54A"/>`,
  caiguda: () => `<rect width="240" height="150" fill="#EAF1FF"/><rect x="0" y="108" width="240" height="42" fill="#D9C7A8"/>${[0, 1, 2].map(i => `<rect x="${20 + i * 76}" y="20" width="44" height="60" rx="4" fill="#C9D6FB"/>`).join('')}
    <g transform="translate(120 118) rotate(-24)"><path d="M-6 0l-10 10M6 -2l14 -6" stroke="#34405E" stroke-width="6" stroke-linecap="round"/><rect x="-11" y="-30" width="22" height="22" rx="7" fill="#8B5CF6"/><circle cy="-40" r="10" fill="#EFC09A"/><path d="M-10 -42q0-10 10-10t10 10q-5-4-10-4t-10 4z" fill="#C4612A"/><path d="M-11 -24l-14 -10M11 -24l12 -14" stroke="#8B5CF6" stroke-width="5" stroke-linecap="round"/></g>
    <path d="M150 126q8-10 14-2q-6-2-8 6z" fill="#FFD54A" stroke="#C99A00" stroke-width="1.5"/>${[0, 1, 2].map(i => `<path d="M${88 + i * 8} ${66 - i * 4}l4-8" stroke="#F08A24" stroke-width="2.5" stroke-linecap="round"/>`).join('')}`,
  selfie: () => `${dgSky('#FFD9A8', '#FFF1DC')}<circle cx="200" cy="34" r="16" fill="#FFB13B"/><path d="M0 110q80-20 160-6t80-4v50H0z" fill="#8FD16A"/>
    ${[[70, '#E5489A', 2, '#2A1A12'], [120, '#3D7BF4', 0, '#C4612A'], [170, '#1FA463', 4, '#17100B']].map(([x, c, sk, h]) => `<g transform="translate(${x} 150)"><path d="M-24 0q0-30 24-30t24 30z" fill="${c}"/><circle cy="-50" r="20" fill="${DIG_SKIN[sk]}"/><path d="M-20 -54q0-20 20-20t20 20q-8-9-20-9t-20 9z" fill="${h}"/><circle cx="-7" cy="-50" r="2.4" fill="#2B1A38"/><circle cx="7" cy="-50" r="2.4" fill="#2B1A38"/><path d="M-8 -42q8 7 16 0" stroke="#2B1A38" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>`).join('')}`,
  dibuix: () => `<rect width="240" height="150" fill="#fff"/><rect x="10" y="10" width="220" height="130" rx="6" fill="#FFFBEA" stroke="#F1D9A4" stroke-width="2"/><path d="M40 112q30-60 60-30t60-20t40 30" fill="none" stroke="#3D7BF4" stroke-width="5" stroke-linecap="round"/><circle cx="180" cy="40" r="14" fill="#FFC531"/><path d="M60 120l10-30 10 30zM120 120l14-40 14 40z" fill="#3CC47C"/><text x="120" y="34" text-anchor="middle" font-family="Lexend,sans-serif" font-weight="900" font-size="13" fill="#E5489A">${L('El meu còmic', 'Mi cómic')}</text>`,
  astro: () => `<rect width="240" height="150" fill="#10163A"/>${[[20, 20], [60, 50], [200, 16], [150, 30], [100, 12], [226, 60], [40, 80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff"/>`).join('')}<circle cx="196" cy="40" r="20" fill="#3D8BFF"/><path d="M184 32q8-6 14 2t12 0M182 46q10 4 18-2" stroke="#3CC47C" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M0 116q60-16 120-6t120-4v44H0z" fill="#B9BFCC"/><ellipse cx="50" cy="128" rx="14" ry="4" fill="#9AA2B2"/><ellipse cx="190" cy="132" rx="10" ry="3" fill="#9AA2B2"/>
    <g transform="translate(110 118)"><rect x="-18" y="-30" width="36" height="30" rx="10" fill="#fff" stroke="#C9D0DE" stroke-width="2"/><path d="M-14 0v8M14 0v8" stroke="#fff" stroke-width="7" stroke-linecap="round"/><circle cy="-46" r="20" fill="#7DF3FF" opacity=".3" stroke="#fff" stroke-width="2.5"/><circle cy="-46" r="13" fill="#D29B6E"/><path d="M-12 -56q-6-8-2-14q6 4 6 12zM12 -56q6-8 2-14q-6 4-6 12z" fill="#8A5A33"/><circle cx="-4" cy="-48" r="1.8" fill="#14204A"/><circle cx="5" cy="-48" r="1.8" fill="#14204A"/><ellipse cx="0" cy="-41" rx="3" ry="2.2" fill="#14204A"/><path d="M26 -10V-40" stroke="#C9D0DE" stroke-width="2"/><path d="M26 -40h18v12H26z" fill="#EF5A5A"/></g>`,
  uniforme: () => `${dgSky()}${dgHouse(140, 50, 80, 60, '#F6D7A8')}<rect x="150" y="30" width="60" height="12" rx="3" fill="#1B2B6B"/><text x="180" y="39" text-anchor="middle" font-family="Lexend,sans-serif" font-weight="900" font-size="7.5" fill="#fff">${L('ESCOLA DEL ROURE', 'ESCUELA DEL ROBLE')}</text><rect x="0" y="110" width="240" height="40" fill="#B9BFCC"/>
    <g transform="translate(40 70)"><rect x="0" y="0" width="70" height="16" rx="3" fill="#1F6FD1"/><text x="35" y="11.5" text-anchor="middle" font-family="Lexend,sans-serif" font-weight="800" font-size="8" fill="#fff">${L('C/ dels Til·lers, 12', 'C/ de los Tilos, 12')}</text><path d="M35 16v40" stroke="#5E667A" stroke-width="3"/></g>${dgKid(92, 136, '#1B2B6B', '#EFC09A', '#C4612A', 1.5)}<path d="M84 96h16" stroke="#FFC531" stroke-width="3"/>`
};
const digPic = (k, o = {}) => `<svg viewBox="${o.vb || '0 0 240 150'}" class="dgpic" aria-hidden="true" preserveAspectRatio="xMidYMid slice">${(DIG_PIC[k] || DIG_PIC.dibuix)(o.e)}</svg>`;

/* ---------- digPriv: simulador de privadesa ---------- */
const DIG_PRIV = {
  perfil: { t: 'Qui pot veure el meu perfil|Quién puede ver mi perfil', ico: 'globe', o: [['Tothom (públic)|Todo el mundo (público)', 2], ['Només amics que accepto|Solo amigos que acepto', 0]], why: 'Un perfil públic el pot mirar qualsevol persona, també gent que no coneixes.|Un perfil público lo puede mirar cualquier persona, también gente que no conoces.' },
  nom: { t: 'Com em dic al perfil|Cómo me llamo en el perfil', ico: 'user', o: [['Nom i cognoms|Nombre y apellidos', 2], ['Només el nom o un àlies|Solo el nombre o un alias', 0]], why: 'Amb el nom i els cognoms és fàcil trobar-te fora de la xarxa.|Con el nombre y los apellidos es fácil encontrarte fuera de la red.' },
  foto: { t: 'Foto del perfil|Foto del perfil', ico: 'camera', o: [['Una foto de la meva cara|Una foto de mi cara', 1], ['Un dibuix o un avatar|Un dibujo o un avatar', 0]], why: 'Un avatar et representa sense ensenyar la teva cara a desconeguts.|Un avatar te representa sin enseñar tu cara a desconocidos.' },
  escola: { t: 'La meva escola|Mi escuela', ico: 'school', o: [['La mostro|La muestro', 2], ['No la mostro|No la muestro', 0]], why: "Dir a quina escola vas és dir on ets cada dia.|Decir a qué escuela vas es decir dónde estás cada día." },
  ubi: { t: 'Compartir on soc|Compartir dónde estoy', ico: 'pin', o: [['Sempre|Siempre', 2], ['Mai|Nunca', 0]], why: 'La ubicació, millor només amb la família i quan cal.|La ubicación, mejor solo con la familia y cuando hace falta.' },
  msg: { t: "Qui em pot enviar missatges|Quién me puede enviar mensajes", ico: 'chat', o: [['Tothom|Todo el mundo', 2], ['Només amics|Solo amigos', 0], ['Ningú|Nadie', 0]], why: 'Si et pot escriure tothom, et poden arribar missatges de desconeguts.|Si te puede escribir todo el mundo, te pueden llegar mensajes de desconocidos.' },
  etiq: { t: "Fotos on m'etiqueten|Fotos en las que me etiquetan", ico: 'tag', o: [['Surten sense preguntar|Salen sin preguntar', 1], ['Les reviso abans|Las reviso antes', 0]], why: "Revisar les etiquetes et deixa decidir quines fotos teves es veuen.|Revisar las etiquetas te deja decidir qué fotos tuyas se ven." },
  edat: { t: 'Data de naixement|Fecha de nacimiento', ico: 'star', o: [['La mostro|La muestro', 1], ["L'amago|La oculto", 0]], why: "La data de naixement és una dada personal: millor amagada.|La fecha de nacimiento es un dato personal: mejor oculta." }
};
function digPrivStep(st) {
  const ids = st.only || Object.keys(DIG_PRIV), who = st.ava || 'aina', v = {};
  ids.forEach(id => v[id] = st.d && st.d[id] != null ? st.d[id] : 0);
  const max = ids.reduce((a, id) => a + Math.max(...DIG_PRIV[id].o.map(o => o[1])), 0);
  let done = false;
  const risk = () => ids.reduce((a, id) => a + DIG_PRIV[id].o[v[id]][1], 0);
  const rk = id => DIG_PRIV[id].o[v[id]][1], has = id => ids.includes(id);
  const view = () => {
    const pub = !has('perfil') || rk('perfil'), nm = has('nom') && rk('nom') ? L('Aina Puig Serra', 'Aina Puig Serra') : 'Aina ✦';
    const face = has('foto') && rk('foto') ? digAva(who) : `<svg class="dgava" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#FFE7A0"/><path d="M24 8l4.6 9.4 10.4 1.5-7.5 7.3 1.8 10.3L24 31.6l-9.3 4.9 1.8-10.3L9 18.9l10.4-1.5z" fill="#F08A24"/><circle cx="20.5" cy="24" r="1.6" fill="#7A4A00"/><circle cx="27.5" cy="24" r="1.6" fill="#7A4A00"/><path d="M21 28q3 2.4 6 0" stroke="#7A4A00" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`;
    const chips = [has('escola') && rk('escola') ? `<span class="dgch r">${digI('school')} ${L('Escola del Roure', 'Escuela del Roble')}</span>` : '', has('ubi') && rk('ubi') ? `<span class="dgch r">${digI('pin')} ${L('Ara: parc de la Mitjana', 'Ahora: parque de la Mitjana')}</span>` : '', has('edat') && rk('edat') ? `<span class="dgch y">${digI('star')} 12/03/2015</span>` : ''].join('');
    const can = !has('msg') || rk('msg');
    return `<div class="dgprof"><div class="dgpfh">${face}<div><b>${nm}</b><small>@aina_${pub ? 'art' : '✦'}</small></div></div>${chips ? `<div class="dgchips">${chips}</div>` : ''}
      ${pub ? `<div class="dgposts">${['dibuix', 'selfie', 'gos'].map(k => `<span>${digPic(k)}</span>`).join('')}</div>` : `<div class="dgpriv">${digI('lock')}<b>${L('Aquest compte és privat', 'Esta cuenta es privada')}</b><small>${L('Només en veuen les fotos els amics que l’Aina accepta.', 'Solo ven las fotos los amigos que Aina acepta.')}</small></div>`}
      <button class="dgmsgb ${can ? '' : 'off'}" tabindex="-1">${digI(can ? 'chat' : 'lock')} ${can ? L('Envia un missatge', 'Envía un mensaje') : L('No pots enviar-li missatges', 'No puedes enviarle mensajes')}</button></div>`;
  };
  const draw = () => {
    const r = risk(), pct = max ? r / max : 0, col = pct > .5 ? '#EF5A5A' : pct > 0 ? '#F2B21B' : '#3CC47C';
    $('#tsb').innerHTML = `<div class="tcol dgprivw">${digQ(st, r ? 'think' : 'happy')}
      <div class="dgpg"><div class="dgset"><div class="dgseth">${digI('lock')}<b>${L('Configuració de privadesa', 'Configuración de privacidad')}</b></div>
        ${ids.map(id => { const s = DIG_PRIV[id]; return `<div class="dgrow ${rk(id) ? 'risk' + rk(id) : ''}"><div class="dgrl">${digI(s.ico)}<span>${tx(s.t)}</span></div><div class="dgseg n${s.o.length}">${s.o.map((o, k) => `<button class="${v[id] === k ? 'on' : ''}" data-id="${id}" data-k="${k}">${tx(o[0])}</button>`).join('')}</div>${rk(id) ? `<p class="dgwhy">${tx(s.why)}</p>` : ''}</div>`; }).join('')}</div>
      <div class="dgview"><div class="dgvh">${digI('eye')}<b>${L('El que veu una persona desconeguda', 'Lo que ve una persona desconocida')}</b></div>${view()}
        <div class="dgexp"><span>${L('Exposició', 'Exposición')}</span><div class="dgexpb"><i style="width:${Math.max(6, pct * 100)}%;background:${col}"></i></div><b style="color:${col}">${r === 0 ? L('Protegida', 'Protegida') : pct > .5 ? L('Molt exposada', 'Muy expuesta') : L('Una mica exposada', 'Algo expuesta')}</b></div></div></div>
      <div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.dgseg button').forEach(b => b.onclick = () => { v[b.dataset.id] = +b.dataset.k; digTap(); const y = $('#tsb').scrollTop; draw(); $('#tsb').scrollTop = y; });
    if (r <= (st.goal || 0)) { if (!done) { done = true; TSS.ok++; SFX.ok && SFX.ok(); } digFb(true, `<b>${L('Perfil protegit!', '¡Perfil protegido!')}</b> ${tval(st.yes || "Ara només et coneix qui tu vols. Revisa la configuració de tant en tant, amb la família.|Ahora solo te conoce quien tú quieres. Revisa la configuración de vez en cuando, con la familia.")}`); tContinue(); }
    else tFoot(L('Protegeix el perfil', 'Protege el perfil'), () => { }, false);
  };
  draw();
}

/* ---------- digFake: el detectiu de bulos ---------- */
// items: [{kind:'news'|'msg'|'post', src, who?, date, h, sub?, pic, clues:[t], v:0 fiable|1 cal comprovar|2 bulo, ex}]
const DIG_VERD = [['Sembla fiable|Parece fiable', '#3CC47C', 'check'], ['Cal comprovar-ho|Hay que comprobarlo', '#F2B21B', 'lupa'], ['És un bulo|Es un bulo', '#EF5A5A', 'block']];
function digFakeStep(st) {
  let k = 0, nc = 0, good = 0;
  const draw = () => {
    const it = st.items[k];
    const card = it.kind === 'msg' ? `<div class="dgfc msg"><div class="dgfch">${digAva(it.who || 'desc')}<b>${tval(it.src)}</b><span class="dgfwd">↪ ${L('Reenviat moltes vegades', 'Reenviado muchas veces')}</span></div>${it.pic ? `<div class="dgfimg">${digPic(it.pic)}</div>` : ''}<p class="dgfh">${tval(it.h)}</p>${it.sub ? `<p class="dgfs">${tval(it.sub)}</p>` : ''}</div>`
      : `<div class="dgfc ${it.kind || 'news'}"><div class="dgfch">${digAva(it.who || 'diari')}<div><b>${tval(it.src)}</b><small>${tval(it.date || '')}</small></div></div>${it.pic ? `<div class="dgfimg">${digPic(it.pic)}</div>` : ''}<p class="dgfh">${tval(it.h)}</p>${it.sub ? `<p class="dgfs">${tval(it.sub)}</p>` : ''}</div>`;
    $('#tsb').innerHTML = `<div class="tcol dgfake">${digQ(st)}<div class="dgfk"><span class="dgcnt">${k + 1} / ${st.items.length}</span><div class="dgfwrap">${digEx()}${card}<div class="dgstamp" id="dgstamp"></div></div>
      <div class="dgclues" id="dgclues">${it.clues.slice(0, nc).map(c => `<div class="dgclue">${digI('lupa')}<span>${tval(c)}</span></div>`).join('')}</div>
      ${nc < it.clues.length ? `<button class="btn ghost dgcbtn" id="dgcbtn">${digI('lupa')} ${nc ? L('Una altra pista', 'Otra pista') : L('Busca pistes', 'Busca pistas')} (${nc}/${it.clues.length})</button>` : ''}
      <div class="dgverd">${DIG_VERD.map(([t, c, ic], j) => `<button class="dgvb" data-j="${j}" style="--c:${c}">${digI(ic)}<span>${tx(t)}</span></button>`).join('')}</div></div><div class="tfb" id="tfb"></div></div>`;
    const cb = $('#dgcbtn'); if (cb) cb.onclick = () => { nc++; digTap(); draw(); };
    document.querySelectorAll('.dgvb').forEach(b => b.onclick = () => verdict(+b.dataset.j));
  };
  const verdict = j => {
    if (TSS.ready) return; TSS.ready = true;
    const it = st.items[k], ok = j === it.v; if (ok) good++;
    nc = it.clues.length;
    document.querySelectorAll('.dgvb').forEach(b => { b.disabled = true; const x = +b.dataset.j; b.classList.add(x === it.v ? 'ok' : x === j ? 'ko' : 'x'); });
    $('#dgclues').innerHTML = it.clues.map(c => `<div class="dgclue">${digI('lupa')}<span>${tval(c)}</span></div>`).join(''); const cb = $('#dgcbtn'); if (cb) cb.remove();
    const s = $('#dgstamp'); s.style.setProperty('--c', DIG_VERD[it.v][1]); s.innerHTML = `<span>${tx(DIG_VERD[it.v][0])}</span>`; s.classList.add('on');
    digSnd(ok);
    digFb(ok, `<b>${ok ? L('Bona investigació!', '¡Buena investigación!') : L('Mira-ho bé.', 'Míralo bien.')}</b> ${tval(it.ex)}`);
    const last = k >= st.items.length - 1;
    tFoot(last ? L('Continua', 'Continúa') : L('Següent cas', 'Siguiente caso'), () => { if (last) { if (good === st.items.length) TSS.ok++; return tNext(); } k++; nc = 0; TSS.ready = false; draw(); tFoot(L('Tria un veredicte', 'Elige un veredicto'), () => { }, false); $('#tsb').scrollTop = 0; });
  };
  draw();
  tFoot(L('Tria un veredicte', 'Elige un veredicto'), () => { }, false);
}

/* ---------- digPhoto: imatges retocades i retallades ---------- */
// mode 'diff': {pic, diffs:[{x,y,r,t}]}  ·  mode 'crop': {pic, crop:'x y w h', opts:[t], a, ex}
function digPhotoStep(st) {
  if (st.mode === 'crop') {
    let pick = null;
    $('#tsb').innerHTML = `<div class="tcol dgphoto">${digQ(st)}<div class="dgcrop" id="dgcrop"><div class="dgcf">${digPic(st.pic, { vb: st.crop })}</div><span class="dgctag">${L('La foto que circula', 'La foto que circula')}</span></div>
      <div class="topts">${st.opts.map((o, i) => `<button class="topt" data-i="${i}"><span class="tol">${'ABC'[i]}</span><span class="tot">${tval(o)}</span></button>`).join('')}</div><div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.topt').forEach(b => b.onclick = () => { if (TSS.ready) return; pick = +b.dataset.i; document.querySelectorAll('.topt').forEach(x => x.classList.toggle('on', x === b)); digTap(); tFoot(L('Mostra la foto sencera', 'Muestra la foto entera'), check); });
    const check = () => {
      TSS.ready = true; const ok = pick === st.a;
      document.querySelectorAll('.topt').forEach(x => { const i = +x.dataset.i; x.disabled = true; if (i === st.a) x.classList.add('ok'); else if (i === pick) x.classList.add('ko'); });
      const c = $('#dgcrop'); c.innerHTML = `<div class="dgcf full">${digPic(st.pic)}</div><span class="dgctag ok">${L('La foto sencera', 'La foto entera')}</span><svg class="dgcbox" viewBox="0 0 240 150" preserveAspectRatio="none"><rect x="${st.crop.split(' ')[0]}" y="${st.crop.split(' ')[1]}" width="${st.crop.split(' ')[2]}" height="${st.crop.split(' ')[3]}" fill="none" stroke="#FFC531" stroke-width="3" stroke-dasharray="6 4" rx="4"/></svg>`;
      c.classList.add('rev'); digSnd(ok); if (ok) TSS.ok++;
      digFb(ok, `<b>${ok ? L('Ben pensat!', '¡Bien pensado!') : L('Ara ho veus?', '¿Ahora lo ves?')}</b> ${tval(st.ex)}`); tContinue();
    };
    return tFoot(L('Tria una resposta', 'Elige una respuesta'), () => { }, false);
  }
  const found = new Set(); let miss = 0;
  $('#tsb').innerHTML = `<div class="tcol dgphoto">${digQ(st)}<div class="dgdiff"><figure><figcaption>${L('Original', 'Original')}</figcaption>${digPic(st.pic)}</figure>
    <figure class="ed" id="dged"><figcaption>${L('Retocada: toca els canvis', 'Retocada: toca los cambios')}</figcaption>${digPic(st.pic, { e: 1 })}<svg class="dghit" viewBox="0 0 240 150" preserveAspectRatio="xMidYMid slice" id="dghit"></svg></figure></div>
    <p class="dgfound" id="dgfound"></p><div class="tfb" id="tfb"></div></div>`;
  const upd = () => { $('#dgfound').innerHTML = `${st.diffs.map((d, i) => `<span class="${found.has(i) ? 'on' : ''}">${found.has(i) ? DIG_ICO.check : i + 1}</span>`).join('')} <b>${found.size} / ${st.diffs.length}</b> ${L('canvis trobats', 'cambios encontrados')}`;
    $('#dghit').innerHTML = st.diffs.map((d, i) => found.has(i) ? `<circle class="dgring" cx="${d.x}" cy="${d.y}" r="${d.r}" fill="none" stroke="#FFC531" stroke-width="3.5"/>` : miss >= 3 && i === [...Array(st.diffs.length).keys()].find(j => !found.has(j)) ? `<circle class="dghint" cx="${d.x}" cy="${d.y}" r="${d.r + 6}" fill="#FFC531" opacity=".25"/>` : '').join(''); };
  const svg = $('#dged svg.dgpic');
  $('#dged').onclick = e => {
    const r = svg.getBoundingClientRect(), sc = Math.max(r.width / 240, r.height / 150), ox = (r.width - 240 * sc) / 2, oy = (r.height - 150 * sc) / 2;
    const x = (e.clientX - r.left - ox) / sc, y = (e.clientY - r.top - oy) / sc;
    const i = st.diffs.findIndex((d, j) => !found.has(j) && Math.hypot(d.x - x, d.y - y) < d.r + 10);
    if (i < 0) { miss++; SFX.ko && SFX.ko(); upd(); return; }
    found.add(i); SFX.ok && SFX.ok(); miss = 0; upd(); digFb(true, `<b>${L('Trobat!', '¡Encontrado!')}</b> ${tval(st.diffs[i].t)}`);
    if (found.size === st.diffs.length) { TSS.ok++; setTimeout(() => digFb(true, `<b>${L('Els has trobat tots!', '¡Los has encontrado todos!')}</b> ${tval(st.ex || '')}`), 900); tContinue(); }
  };
  upd();
  tFoot(L('Troba tots els canvis', 'Encuentra todos los cambios'), () => { }, false);
}

/* ---------- digAI: una IA de joguina que aprèn d'exemples (veí més proper) ---------- */
// Criatures inventades: h = color (0 vermell … 260 lila), s = punxes (0 rodona … 1 amb punxes), z = mida (0 … 1)
function digCreSVG(it, ring) {
  const n = 12, R = 18 * (.78 + .44 * (it.z == null ? .5 : it.z)), dep = .12 + .5 * it.s, pts = [];
  for (let i = 0; i < 2 * n; i++) { const a = i * Math.PI / n - Math.PI / 2, r = i % 2 ? R * (1 - dep) : R; pts.push([Math.cos(a) * r, Math.sin(a) * r + 2]); }
  const m = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], f = v => v.toFixed(1);
  let d;
  if (it.s >= .5) d = 'M' + pts.map(p => p.map(f).join(' ')).join('L') + 'Z';
  else { const s0 = m(pts[0], pts[1]); d = `M${f(s0[0])} ${f(s0[1])}`; for (let i = 1; i <= 2 * n; i++) { const p = pts[i % (2 * n)], q = m(p, pts[(i + 1) % (2 * n)]); d += `Q${f(p[0])} ${f(p[1])} ${f(q[0])} ${f(q[1])}`; } d += 'Z'; }
  const c = `hsl(${it.h} 78% 60%)`, cd = `hsl(${it.h} 62% 38%)`, e = R * .3;
  return `${ring ? `<circle r="${R + 7}" fill="none" stroke="${ring}" stroke-width="4"/>` : ''}<ellipse cx="0" cy="${R + 5}" rx="${R * .8}" ry="3.5" fill="#0B1838" opacity=".14"/><path d="${d}" fill="${c}" stroke="${cd}" stroke-width="2.4" stroke-linejoin="round"/>
    <ellipse cx="${-R * .3}" cy="${-R * .25}" rx="${R * .32}" ry="${R * .18}" fill="#fff" opacity=".35"/><circle cx="${-e}" cy="0" r="${R * .19}" fill="#fff"/><circle cx="${e}" cy="0" r="${R * .19}" fill="#fff"/><circle cx="${-e + 1}" cy="1" r="${R * .1}" fill="#14204A"/><circle cx="${e + 1}" cy="1" r="${R * .1}" fill="#14204A"/><path d="M${-R * .2} ${R * .32}q${R * .2} ${R * .16} ${R * .4} 0" stroke="#14204A" stroke-width="2" fill="none" stroke-linecap="round"/>`;
}
const digCre = (it, cls = '', ring) => `<svg class="dgcre ${cls}" viewBox="-34 -34 68 72" aria-hidden="true">${digCreSVG(it, ring)}</svg>`;
const DIG_AIW = { h: 1.6, s: 1, z: 0 };
const digDist = (a, b, w) => Math.hypot(w.h * (a.h - b.h) / 260, w.s * (a.s - b.s), w.z * ((a.z == null ? .5 : a.z) - (b.z == null ? .5 : b.z)));
// el veí més proper: la IA diu l'etiqueta de l'exemple que més s'assembla. conf: com de segura n'està
function digNN(train, x, w = DIG_AIW) {
  let best = null; train.forEach((t, j) => { const d = digDist(t, x, w); if (!best || d < best.d) best = { j, d, y: t.l }; });
  if (!best) return null;
  const other = train.filter(t => t.l !== best.y).reduce((m, t) => Math.min(m, digDist(t, x, w)), Infinity);
  return { ...best, conf: other === Infinity ? 1 : Math.max(0, Math.min(1, (other - best.d) / (other + best.d + 1e-9))) };
}
const DIG_RULE = { s: it => it.s >= .5 ? 1 : 0, h: it => it.h <= 90 ? 0 : 1, z: it => (it.z == null ? .5 : it.z) >= .5 ? 1 : 0 };
function digAIStep(st) {
  const S = { ph: st.rules ? 'pick' : 'train', rule: st.rules ? null : { f: st.f || 's', labels: st.labels, t: st.rule, w: st.w || DIG_AIW }, train: [], ti: 0, xi: 0, res: [], fixed: false };
  const truth = it => it.y != null && !st.rules ? it.y : DIG_RULE[S.rule.f](it);
  const lab = y => S.rule.labels[y];
  const mx = it => 30 + it.h / 260 * 260, my = it => 168 - it.s * 140;
  const map = (cur, nn) => `<svg viewBox="0 0 320 200" class="dgmap" aria-hidden="true"><defs><linearGradient id="dghue" x1="0" x2="1">${[0, 30, 60, 90, 120, 150, 180, 210, 240, 260].map(h => `<stop offset="${h / 260}" stop-color="hsl(${h} 78% 60%)"/>`).join('')}</linearGradient></defs>
    <rect x="22" y="14" width="276" height="164" rx="14" fill="#F7F9FF" stroke="#DCE4FA" stroke-width="2"/>${[1, 2, 3].map(i => `<path d="M22 ${14 + i * 41}h276M${22 + i * 69} 14v164" stroke="#E8EEFA" stroke-width="1.5"/>`).join('')}
    <rect x="30" y="184" width="260" height="8" rx="4" fill="url(#dghue)"/><text x="160" y="12" text-anchor="middle" class="dgmt">${L('El cervell de la IA: el mapa dels exemples', 'El cerebro de la IA: el mapa de los ejemplos')}</text>
    <g transform="translate(10 40) scale(.32)">${digCreSVG({ h: 200, s: .95, z: .4 })}</g><g transform="translate(10 160) scale(.32)">${digCreSVG({ h: 200, s: .05, z: .4 })}</g>
    ${nn && cur ? `<path d="M${mx(cur)} ${my(cur)}L${mx(S.train[nn.j])} ${my(S.train[nn.j])}" stroke="#14204A" stroke-width="2.5" stroke-dasharray="5 5" class="ta-dash dgnnl"/>` : ''}
    ${S.train.map((t, j) => `<g transform="translate(${mx(t)} ${my(t)}) scale(.42)" class="dgpt ${nn && nn.j === j ? 'near' : ''}">${digCreSVG(t, lab(t.l).c)}</g>`).join('')}
    ${cur ? `<g transform="translate(${mx(cur)} ${my(cur)})"><circle r="17" fill="none" stroke="#FFC531" stroke-width="4" class="dgping"/><g transform="scale(.42)">${digCreSVG(cur)}</g></g>` : ''}</svg>`;
  const legend = () => `<div class="dglabs">${S.rule.labels.map(l => `<span style="--c:${l.c}"><i></i>${tval(l.t)} <b>${S.train.filter(t => lab(t.l) === l).length}</b></span>`).join('')}</div>`;
  const draw = () => {
    let panel = '';
    if (S.ph === 'pick') panel = `<div class="dgaih"><b>${L('1. Tria què li ensenyaràs', '1. Elige qué le enseñarás')}</b></div><div class="dgrules">${st.rules.map((r, i) => `<button class="dgrule" data-i="${i}"><span>${r.labels.map(l => `<i style="background:${l.c}"></i>`).join('')}</span><b>${tval(r.t)}</b><small>${r.labels.map(l => tval(l.t)).join(' / ')}</small></button>`).join('')}</div>`;
    else if (S.ph === 'train' || S.ph === 'fix') {
      const set = S.ph === 'fix' ? st.extra : st.train, it = set[S.ti];
      panel = `<div class="dgaih"><b>${S.ph === 'fix' ? L('Ensenya-li exemples nous', 'Enséñale ejemplos nuevos') : L('Ensenya a la IA', 'Enseña a la IA')}</b><span>${S.ti + 1} / ${set.length}</span></div>${S.rule.t ? `<p class="dgrl2">${tval(S.rule.t)}</p>` : ''}
        <div class="dgaic">${digCre(it, 'big pop')}</div><p class="dgaiq">${L('Què és?', '¿Qué es?')}</p><div class="dgaib">${S.rule.labels.map((l, y) => `<button class="dglb" data-y="${y}" style="--c:${l.c}">${tval(l.t)}</button>`).join('')}</div>`;
    } else if (S.ph === 'ready') panel = `<div class="dgaih"><b>${L('La IA ha après', 'La IA ha aprendido')}</b></div><div class="dgaic">${bitChar('think')}</div><p class="dgrl2">${L(`Ha guardat ${S.train.length} exemples al seu mapa. Ara la posarem a prova amb criatures que <b>no ha vist mai</b>.`, `Ha guardado ${S.train.length} ejemplos en su mapa. Ahora la pondremos a prueba con criaturas que <b>no ha visto nunca</b>.`)}</p><button class="btn big" id="dggo">${digI('brain')} ${L('Posa a prova la IA', 'Pon a prueba la IA')}</button>`;
    else if (S.ph === 'test') { const it = st.test[S.xi], r = S.cur;
      panel = `<div class="dgaih"><b>${L('Prova', 'Prueba')}</b><span>${S.xi + 1} / ${st.test.length}</span></div><div class="dgaic">${digCre(it, 'big')}</div>
        ${r ? `<div class="dgpred" style="--c:${lab(r.y).c}"><small>${L('La IA diu', 'La IA dice')}</small><b>${tval(lab(r.y).t)}</b><span class="dgconf">${r.conf > .35 ? L("n'està segura", 'está segura') : L('dubta', 'duda')}<i style="width:${Math.round(20 + r.conf * 80)}%"></i></span></div>
        <div class="dgwhy2">${digCre(S.train[r.j], 'sm')}<span>${L("Perquè s'assembla molt a aquest exemple que li vas ensenyar", 'Porque se parece mucho a este ejemplo que le enseñaste')}</span></div>
        ${S.judged == null ? `<p class="dgaiq">${L('Ha encertat?', '¿Ha acertado?')}</p><div class="dgaib"><button class="dglb" data-j="1" style="--c:#3CC47C">${digI('check')} ${L('Sí', 'Sí')}</button><button class="dglb" data-j="0" style="--c:#EF5A5A">${digI('block')} ${L("S'ha equivocat", 'Se ha equivocado')}</button></div>` : ''}` : `<p class="dgthink"><span class="dgdots"><i></i><i></i><i></i></span> ${L('La IA busca l’exemple més semblant…', 'La IA busca el ejemplo más parecido…')}</p>`}`; }
    else if (S.ph === 'end') { const ok = S.res.filter(Boolean).length;
      panel = `<div class="dgaih"><b>${S.fixed ? L('Després d’ensenyar-li més', 'Después de enseñarle más') : L('Resultat', 'Resultado')}</b></div><div class="dgres">${st.test.map((it, i) => `<span class="${S.res[i] ? 'ok' : 'ko'}">${digCre(it, 'sm')}<i>${S.res[i] ? DIG_ICO.check : DIG_ICO.block}</i></span>`).join('')}</div>
        <p class="dgscore"><b>${ok} / ${st.test.length}</b> ${L('encerts', 'aciertos')}</p><p class="dgrl2">${tval(ok === st.test.length ? (st.allOk || "Ha encertat totes les proves. Però compte: amb criatures noves encara es podria equivocar.|Ha acertado todas las pruebas. Pero cuidado: con criaturas nuevas todavía se podría equivocar.") : st.extra && !S.fixed ? (st.someKo || "S'ha equivocat en alguna. Fixa't en quins exemples li faltaven.|Se ha equivocado en alguna. Fíjate en qué ejemplos le faltaban.") : (st.koEnd || "Una IA aprèn dels exemples: si són pocs o s'assemblen massa, s'equivoca.|Una IA aprende de los ejemplos: si son pocos o se parecen demasiado, se equivoca."))}</p>
        ${st.extra && !S.fixed && ok < st.test.length ? `<button class="btn big" id="dgfix">${digI('spark')} ${L('Ensenya-li més exemples', 'Enséñale más ejemplos')}</button>` : ''}`; }
    $('#tsb').innerHTML = `<div class="tcol dgaiw">${digQ(st, 'think')}<div class="dgai"><div class="dgaim">${map(S.ph === 'test' ? st.test[S.xi] : null, S.ph === 'test' ? S.cur : null)}${S.rule ? legend() : ''}</div><div class="dgaip">${panel}</div></div><div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.dgrule').forEach(b => b.onclick = () => { const r = st.rules[+b.dataset.i]; S.rule = { f: r.f, labels: r.labels, t: r.hint, w: st.w || { h: 1, s: 1, z: 1 } }; S.ph = 'train'; digTap(); draw(); });
    document.querySelectorAll('.dglb[data-y]').forEach(b => b.onclick = () => {
      const set = S.ph === 'fix' ? st.extra : st.train, it = set[S.ti], y = +b.dataset.y;
      S.train.push({ ...it, l: y }); digTap();
      if (y !== truth(it)) digFb(false, L(`Compte: segons la regla, aquesta és «${tval(lab(truth(it)).t)}». La IA aprendrà el que li ensenyis, també els errors!`, `Cuidado: según la regla, esta es «${tval(lab(truth(it)).t)}». ¡La IA aprenderá lo que le enseñes, también los errores!`));
      else $('#tfb').innerHTML = '';
      S.ti++; if (S.ti >= set.length) { S.ti = 0; if (S.ph === 'fix') { S.fixed = true; S.res = st.test.map(t => digNN(S.train, t, S.rule.w).y === truth(t)); S.ph = 'end'; finish(); } else S.ph = 'ready'; }
      draw();
    });
    const g = $('#dggo'); if (g) g.onclick = () => { S.ph = 'test'; S.xi = 0; S.cur = null; S.judged = null; draw(); think(); };
    const fx = $('#dgfix'); if (fx) fx.onclick = () => { S.ph = 'fix'; S.ti = 0; draw(); };
    document.querySelectorAll('.dglb[data-j]').forEach(b => b.onclick = () => {
      const it = st.test[S.xi], right = S.cur.y === truth(it), said = b.dataset.j === '1';
      S.judged = said; S.res[S.xi] = right; digSnd(said === right);
      digFb(said === right, said === right ? `<b>${L('Ben revisat!', '¡Bien revisado!')}</b> ${right ? L(`És «${tval(lab(truth(it)).t)}».`, `Es «${tval(lab(truth(it)).t)}».`) : L(`Era «${tval(lab(truth(it)).t)}»: la IA s'ha equivocat.`, `Era «${tval(lab(truth(it)).t)}»: la IA se ha equivocado.`)}` : `<b>${L('Mira-ho bé.', 'Míralo bien.')}</b> ${L(`Segons la regla és «${tval(lab(truth(it)).t)}», i la IA ha dit «${tval(lab(S.cur.y).t)}».`, `Según la regla es «${tval(lab(truth(it)).t)}», y la IA ha dicho «${tval(lab(S.cur.y).t)}».`)}`);
      draw();
      tFoot(S.xi < st.test.length - 1 ? L('Següent prova', 'Siguiente prueba') : L('Mira el resultat', 'Mira el resultado'), () => { $('#tfb').innerHTML = ''; if (S.xi < st.test.length - 1) { S.xi++; S.cur = null; S.judged = null; draw(); think(); tFoot(L('La IA pensa…', 'La IA piensa…'), () => { }, false); } else { S.ph = 'end'; finish(); draw(); } });
    });
  };
  const think = () => setTimeout(() => { if (S.ph !== 'test' || !document.querySelector('.dgaiw')) return; S.cur = digNN(S.train, st.test[S.xi], S.rule.w); SFX.tap && SFX.tap(); draw(); }, 900);
  const finish = () => {
    const ok = S.res.filter(Boolean).length; TSS.digAI = { acc: ok, n: st.test.length, ex: S.train.length, rule: S.rule.t || '' };
    if (ok === st.test.length || S.fixed || !st.extra) { if (ok >= st.test.length - 1) TSS.ok++; tContinue(); }
    else tFoot(L('Continua', 'Continúa'), tNext, !st.mustFix);
  };
  draw();
  tFoot(L('Continua', 'Continúa'), tNext, false);
}

/* ---------- digFoot: l'empremta digital ---------- */
// { q, who, moments:[{age, t, pic?, opts:[{t, ico, ok, pub, fb, res?}]}], search }
function digFootStep(st) {
  let k = 0; const ch = [];
  const path = () => `<svg viewBox="0 0 60 ${Math.max(1, st.moments.length) * 70}" class="dgfpath" preserveAspectRatio="xMidYMin meet"><path d="M30 10V${st.moments.length * 70 - 10}" stroke="#DCE4FA" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 12"/>
    ${st.moments.map((m, i) => { const c = ch[i]; const col = c == null ? '#C9D6FB' : c.ok ? '#3CC47C' : '#EF5A5A'; return `<g transform="translate(${i % 2 ? 36 : 24} ${30 + i * 70}) rotate(${i % 2 ? 12 : -12})" class="${c ? 'dgstep' : ''}"><path d="M0 -14c-7 0-9 9-7 17s5 12 7 12 5-4 7-12-0-17-7-17z" fill="${col}"/>${[[-5, -20], [-1, -23], [3, -23], [7, -20]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="${col}"/>`).join('')}</g>`; }).join('')}</svg>`;
  const draw = () => {
    const m = st.moments[k];
    const body = k < st.moments.length ? `<div class="dgmom"><div class="dgmh">${digAva(st.who)}<div><small>${digName(st.who)} · ${tval(m.age)}</small><b>${tval(m.t)}</b></div></div>${m.pic ? `<div class="dgmpic">${digPic(m.pic)}${digEx()}</div>` : ''}
      <p class="dgaiq">${tval(st.ask || 'Què hauria de fer?|¿Qué debería hacer?')}</p><div class="dgopts">${m.opts.map((o, i) => `<button class="dgopt" data-i="${i}">${o.ico ? digI(o.ico) : ''}<span>${tval(o.t)}</span></button>`).join('')}</div></div>`
      : `<div class="dgsearch"><div class="dgbar">${digI('lupa')}<span>${tval(st.search || digName(st.who))}</span></div><p class="dgsr0">${L('El que qualsevol persona pot trobar d’aquí a uns anys:', 'Lo que cualquier persona puede encontrar dentro de unos años:')}</p>
        ${ch.map((c, i) => c.pub ? `<div class="dgsr ${c.ok ? 'ok' : 'ko'}"><span>${digI(c.ok ? 'star' : 'eye')}</span><div><b>${tval(c.res || st.moments[i].t)}</b><small>${tval(st.moments[i].age)} · ${c.ok ? L('Deixa bona empremta', 'Deja buena huella') : L('Millor que no hi fos', 'Mejor que no estuviera')}</small></div></div>` : '').join('') || `<p class="dgsr0">${L('No hi surt res.', 'No sale nada.')}</p>`}
        <p class="dgsr0">${L(`<b>${ch.filter(c => !c.pub).length}</b> moments es van quedar en privat o no es van publicar.`, `<b>${ch.filter(c => !c.pub).length}</b> momentos se quedaron en privado o no se publicaron.`)}</p></div>`;
    $('#tsb').innerHTML = `<div class="tcol dgfoot">${digQ(st)}<div class="dgfg"><div class="dgfl">${path()}</div><div class="dgfr">${body}</div></div><div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.dgfoot .dgopt').forEach(b => b.onclick = () => {
      if (TSS.ready) return; TSS.ready = true;
      const o = m.opts[+b.dataset.i]; ch[k] = o; b.classList.add(o.ok ? 'ok' : 'ko'); document.querySelectorAll('.dgfoot .dgopt').forEach(x => x.disabled = true); digSnd(o.ok);
      digFb(o.ok, `<b>${o.ok ? L('Bona empremta!', '¡Buena huella!') : L('Aquesta petjada es queda.', 'Esta huella se queda.')}</b> ${tval(o.fb)}`);
      tFoot(k < st.moments.length - 1 ? L('Següent moment', 'Siguiente momento') : L('Mira què en queda', 'Mira qué queda'), () => { k++; TSS.ready = false; draw(); $('#tsb').scrollTop = 0; if (k >= st.moments.length) { if (ch.every(c => c.ok)) TSS.ok++; tContinue(); } else tFoot(L('Tria una opció', 'Elige una opción'), () => { }, false); });
    });
  };
  draw();
  tFoot(L('Tria una opció', 'Elige una opción'), () => { }, false);
}

/* ---------- digDay: la tarda en equilibri ---------- */
const DIG_ACT = {
  deures: { t: 'Deures|Deberes', ico: 'book', c: '#3D7BF4' }, pantalla: { t: 'Pantalla|Pantalla', ico: 'phone', c: '#8B5CF6' }, moure: { t: "Moure's a fora|Moverse fuera", ico: 'ball', c: '#3CC47C' },
  familia: { t: 'Família|Familia', ico: 'home', c: '#F08A24' }, amics: { t: 'Amics en persona|Amigos en persona', ico: 'people', c: '#E5489A' }, llegir: { t: 'Llegir|Leer', ico: 'book', c: '#14A3B8' },
  crear: { t: 'Dibuixar o música|Dibujar o música', ico: 'palette', c: '#F2B21B' }, sopar: { t: 'Sopar|Cenar', ico: 'food', c: '#C9443A' }, descans: { t: 'Dutxa i pijama|Ducha y pijama', ico: 'bath', c: '#5D72C9' }
};
function digDayStep(st) {
  const n = st.slots || 8, t0 = st.from || 17, acts = st.acts || Object.keys(DIG_ACT), plan = Array(n).fill(null); let brush = acts[0], done = false;
  if (st.pre) Object.entries(st.pre).forEach(([i, a]) => plan[i] = a);
  const hh = i => { const m = t0 * 60 + i * 30; return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`; };
  const need = st.need || ['all', 'move', 'social', 'half', 'last', 'deures'], end = st.end || { t: 'A dormir|A dormir', ico: 'moon' };
  const checks = () => { const c = a => plan.filter(x => x === a).length;
    return [['all', plan.every(Boolean), L('Totes les estones tenen un pla', 'Todos los ratos tienen un plan')], ['move', c('moure') >= 1, L("Una estona per moure't", 'Un rato para moverte')],
      ['social', c('familia') + c('amics') + c('sopar') >= 1, L('Temps amb la família o els amics', 'Tiempo con la familia o los amigos')], ['half', c('pantalla') >= 1 && c('pantalla') <= n / 2, L('Pantalla sí, però no la major part del temps', 'Pantalla sí, pero no la mayor parte del tiempo')],
      ['last', plan[n - 1] && plan[n - 1] !== 'pantalla', L("L'última estona abans de dormir, sense pantalles", 'El último rato antes de dormir, sin pantallas')], ['deures', !acts.includes('deures') || c('deures') >= 1, L('Els deures tenen el seu temps', 'Los deberes tienen su tiempo')],
      ['create', c('crear') + c('llegir') >= 1, L('Una estona per crear o llegir', 'Un rato para crear o leer')]].filter(x => need.includes(x[0])).map(x => [x[1], x[2]]); };
  const draw = () => {
    const ck = checks(), all = ck.every(x => x[0]);
    $('#tsb').innerHTML = `<div class="tcol dgday">${digQ(st, all ? 'happy' : 'think')}
      <div class="dgpal">${acts.map(a => `<button class="dgact ${brush === a ? 'on' : ''}" data-a="${a}" style="--c:${DIG_ACT[a].c}">${digI(DIG_ACT[a].ico)}<span>${tx(DIG_ACT[a].t)}</span></button>`).join('')}</div>
      <div class="dgsky"><div class="dgslots n${n}">${plan.map((a, i) => `<button class="dgslot ${a ? 'on' : ''}" data-i="${i}" style="${a ? `--c:${DIG_ACT[a].c}` : ''}"><small>${hh(i)}</small>${a ? `${digI(DIG_ACT[a].ico)}<b>${tx(DIG_ACT[a].t)}</b>` : `<em>+</em>`}</button>`).join('')}<div class="dgbed">${digI(end.ico)}<small>${hh(n)}</small><b>${tx(end.t)}</b></div></div></div>
      <ul class="dgchk">${ck.map(([ok, t]) => `<li class="${ok ? 'ok' : ''}">${ok ? DIG_ICO.check : '<i></i>'}<span>${t}</span></li>`).join('')}</ul><div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.dgact').forEach(b => b.onclick = () => { brush = b.dataset.a; digTap(); draw(); });
    document.querySelectorAll('.dgslot').forEach(b => b.onclick = () => { const i = +b.dataset.i; plan[i] = plan[i] === brush ? null : brush; digTap(); draw(); });
    if (all) { if (!done) { done = true; TSS.ok++; SFX.ok && SFX.ok(); } digFb(true, `<b>${L('Una tarda equilibrada!', '¡Una tarde equilibrada!')}</b> ${tval(st.yes || "Hi ha temps per a tot: aprendre, moure's, la gent que estimes… i també les pantalles.|Hay tiempo para todo: aprender, moverse, la gente que quieres… y también las pantallas.")}`); tContinue(); }
    else tFoot(L('Completa la tarda', 'Completa la tarde'), () => { }, false);
  };
  draw();
}

/* ---------- digTone: el missatge amable ---------- */
// { q, to:'nil', ctx?:{f, t}, parts:[[{t, v:-2..2}…]…], min }
function digToneStep(st) {
  const sel = st.parts.map(() => null); let done = false;
  const face = v => { const m = Math.max(-2, Math.min(2, v)), c = m >= 1 ? '#3CC47C' : m >= 0 ? '#F2B21B' : '#EF5A5A';
    return `<svg viewBox="0 0 80 80" class="dgface"><circle cx="40" cy="40" r="34" fill="${c}"/><circle cx="40" cy="40" r="34" fill="url(#dgfg)" opacity=".5"/><defs><radialGradient id="dgfg" cx=".35" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="29" cy="34" rx="4" ry="5.5" fill="#14204A"/><ellipse cx="51" cy="34" rx="4" ry="5.5" fill="#14204A"/>${m < -1 ? '<path d="M24 22l10 5M56 22l-10 5" stroke="#14204A" stroke-width="3" stroke-linecap="round"/>' : ''}<path d="M26 ${54 - m * 2}q14 ${m * 7} 28 0" stroke="#14204A" stroke-width="4" fill="none" stroke-linecap="round"/>${m <= -1 ? '<path d="M56 42q4 8 0 10q-4-2 0-10z" fill="#7DF3FF"/>' : ''}</svg>`; };
  const draw = () => {
    const ch = sel.filter(x => x != null), avg = ch.length ? ch.reduce((a, [i, k]) => a + st.parts[i][k].v, 0) / ch.length : 0, all = sel.every(x => x != null);
    const msg = sel.map((x, i) => x ? tval(st.parts[i][x[1]].t) : '<span class="dgblank">…</span>').join(' ');
    $('#tsb').innerHTML = `<div class="tcol dgtone">${digQ(st)}<div class="dgtg"><div class="dgphone sm"><div class="dgphh">${digAva(st.to || 'nil')}<div><b>${digName(st.to || 'nil')}</b><small>${L('en línia', 'en línea')}</small></div></div><div class="dgmsgs">
      ${st.ctx ? `<div class="dgm">${digAva(st.ctx.f || st.to)}<div class="dgmb"><p>${tval(st.ctx.t)}</p></div></div>` : ''}<div class="dgm me"><div class="dgmb"><p>${msg}</p></div></div></div></div>
      <div class="dgmeter2"><small>${L(`Com se sentirà ${digName(st.to || 'nil')}?`, `¿Cómo se sentirá ${digName(st.to || 'nil')}?`)}</small>${face(ch.length ? avg : 0)}<div class="dgtherm"><i style="left:${(Math.max(-2, Math.min(2, avg)) + 2) / 4 * 100}%"></i></div></div></div>
      ${st.parts.map((p, i) => `<div class="dgpart"><small>${i + 1}</small><div>${p.map((o, k) => `<button class="dgpb ${sel[i] && sel[i][1] === k ? 'on' : ''}" data-i="${i}" data-k="${k}">${tval(o.t)}</button>`).join('')}</div></div>`).join('')}<div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.dgpb').forEach(b => b.onclick = () => { sel[+b.dataset.i] = [+b.dataset.i, +b.dataset.k]; digTap(); const y = $('#tsb').scrollTop; draw(); $('#tsb').scrollTop = y; });
    if (all && avg >= (st.min == null ? 1.2 : st.min)) { if (!done) { done = true; TSS.ok++; SFX.ok && SFX.ok(); } digFb(true, `<b>${L('Missatge amable!', '¡Mensaje amable!')}</b> ${tval(st.yes || "Es pot dir el que penses i, alhora, cuidar l'altra persona.|Se puede decir lo que piensas y, a la vez, cuidar a la otra persona.")}`); tContinue(); }
    else { if (all) digFb(false, tval(st.no || "Encara pot fer mal. Canvia algun tros: com ho diries si el tinguessis al davant?|Todavía puede hacer daño. Cambia algún trozo: ¿cómo lo dirías si lo tuvieras delante?")); tFoot(L('Construeix el missatge', 'Construye el mensaje'), () => { }, false); }
  };
  draw();
}

/* ---------- digFeed: una xarxa social simulada («Mosaic», inventada) ---------- */
// { q, posts:[{f, pic?, t, when, likes?, comments:[{f,t}], ask, opts:[{t, ico, ok, fb, act:'like'|'comment'|'report'|'share'|'skip'|'block'|'tell', me?}]}] }
function digFeedStep(st) {
  let k = 0, first = 0; const acts = [];
  const post = (p, i) => { const a = acts[i];
    return `<article class="dgpost ${a ? 'a-' + a.act : ''} ${i === k ? 'cur' : ''}"><header>${digAva(p.f)}<div><b>${digName(p.f)}</b><small>${tval(p.when || L('fa 1 h', 'hace 1 h'))}</small></div><span class="dgdots3">•••</span></header>
      ${p.pic ? `<div class="dgpimg">${digPic(p.pic)}${a && a.act === 'like' ? `<span class="dgbigheart">${DIG_ICO.heart}</span>` : ''}</div>` : `<div class="dgptxt">${tval(p.big || p.t)}</div>`}
      <div class="dgpact"><span class="${a && a.act === 'like' ? 'liked' : ''}">${DIG_ICO.heart}</span><span>${DIG_ICO.chat}</span><span>${DIG_ICO.share}</span>${a && (a.act === 'report' || a.act === 'block') ? `<em>${digI('flag')} ${a.act === 'block' ? L('Bloquejat', 'Bloqueado') : L('Ho has denunciat', 'Lo has denunciado')}</em>` : ''}${a && a.act === 'tell' ? `<em class="g">${digI('adult')} ${L('Ho has explicat', 'Lo has contado')}</em>` : ''}</div>
      ${p.pic ? `<p class="dgcap"><b>${digName(p.f)}</b> ${tval(p.t)}</p>` : ''}${(p.comments || []).map(c => `<p class="dgcom"><b>${digName(c.f)}</b> ${tval(c.t)}</p>`).join('')}${a && a.me ? `<p class="dgcom me"><b>${L('Tu', 'Tú')}</b> ${tval(a.me)}</p>` : ''}</article>`; };
  const draw = () => {
    const p = st.posts[k];
    $('#tsb').innerHTML = `<div class="tcol dgfeed">${digQ(st, 'idle')}<div class="dgchw"><div class="dgphone"><div class="dgapp"><b class="dglogo">mosaic</b>${digEx()}<span>${DIG_ICO.heart}</span><span>${DIG_ICO.chat}</span></div>
      <div class="dgstories">${['aina', 'nil', 'jana', 'pau', 'leo', 'iris'].map(x => `<span>${digAva(x)}<small>${digName(x)}</small></span>`).join('')}</div>
      <div class="dgmsgs dgfeedb" id="dgfeedb">${st.posts.slice(0, k + 1).map(post).join('')}</div></div>
      <div class="dgdec on" id="dgdec">${p && !acts[k] ? `<p class="dgask">${digI('chat')} ${tval(p.ask)}</p><div class="dgopts">${p.opts.map((o, j) => `<button class="dgopt" data-j="${j}">${o.ico ? digI(o.ico) : ''}<span>${tval(o.t)}</span></button>`).join('')}</div>` : ''}</div></div><div class="tfb" id="tfb"></div></div>`;
    const fb = $('#dgfeedb'); const cur = fb.querySelector('.dgpost.cur'); if (cur) fb.scrollTop = cur.offsetTop - 8;
    let tries = 0;
    document.querySelectorAll('.dgfeed .dgopt').forEach(b => b.onclick = () => {
      if (b.disabled) return; const o = p.opts[+b.dataset.j]; tries++; digSnd(o.ok); b.classList.add(o.ok ? 'ok' : 'ko');
      digFb(o.ok, `<b>${o.ok ? L('Bona decisió!', '¡Buena decisión!') : L('Pensa-ho una altra vegada.', 'Piénsalo otra vez.')}</b> ${tval(o.fb || '')}`);
      if (!o.ok) { b.disabled = true; return; }
      if (tries === 1) first++; acts[k] = o;
      setTimeout(() => { const msg = $('#tfb').innerHTML; draw(); $('#tfb').innerHTML = msg;
        const last = k >= st.posts.length - 1;
        tFoot(last ? L('Continua', 'Continúa') : L('Següent publicació', 'Siguiente publicación'), () => { if (last) { if (first === st.posts.length) TSS.ok++; return tNext(); } k++; $('#tfb').innerHTML = ''; draw(); tFoot(L('Decideix què fas', 'Decide qué haces'), () => { }, false); }); }, 700);
    });
  };
  draw();
  tFoot(L('Decideix què fas', 'Decide qué haces'), () => { }, false);
}

/* ---------- digTalk: «Parlem-ne», un dilema per comentar a classe ---------- */
// { q, pic?|scene?, stances:[{t, ico}], voices:[{f, t}], prompt }
function digTalkStep(st) {
  let pick = null;
  const draw = () => {
    $('#tsb').innerHTML = `<div class="tcol dgtalk"><div class="dgtk"><span class="dgtkk">${digI('people')} ${L('Parlem-ne', 'Hablemos')}</span>${st.scene ? digScene(st.scene, st.who || 'none', st.mood) : st.pic ? `<div class="dgmpic">${digPic(st.pic)}${digEx()}</div>` : ''}<h2>${tval(st.q)}</h2>${st.x ? `<p>${tval(st.x)}</p>` : ''}</div>
      <div class="dgstan">${st.stances.map((s, i) => `<button class="dgst ${pick === i ? 'on' : ''}" data-i="${i}">${s.ico ? digI(s.ico) : ''}<span>${tval(s.t)}</span></button>`).join('')}</div>
      ${pick != null ? `<div class="dgvoices">${st.voices.map((v, i) => `<div class="dgvo" style="--d:${i * .35}s">${digAva(v.f)}<div class="dgmb"><em style="color:${(DIG_PPL[v.f] || {}).sh || '#56628A'}">${digName(v.f)}</em><p>${tval(v.t)}</p></div></div>`).join('')}</div>
        <div class="dgprompt">${digI('chat')}<div><b>${L('Parleu-ne a classe', 'Habladlo en clase')}</b><p>${tval(st.prompt)}</p></div></div>` : ''}<div class="tfb" id="tfb"></div></div>`;
    document.querySelectorAll('.dgst').forEach(b => b.onclick = () => { pick = +b.dataset.i; digTap(); draw(); if (st.a != null) { const ok = st.a === pick || (Array.isArray(st.a) && st.a.includes(pick)); if (ok) TSS.ok++; } tContinue(); setTimeout(() => { const v = document.querySelector('.dgvoices'); v && v.scrollIntoView && v.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200); });
  };
  draw();
  tFoot(L('Tria la teva postura', 'Elige tu postura'), () => { }, false);
}

/* ---------- digMake: projectes (pòsters, decàleg, campanya, fitxes) que es desen al portafoli ---------- */
const DIG_TH = { verd: ['#1FA463', '#E4F7EC', '#0F5C35'], blau: ['#2F5BEA', '#E8EEFF', '#1B2B6B'], lila: ['#8B5CF6', '#F0EAFF', '#4B2A9E'], rosa: ['#E5489A', '#FFE6F2', '#8E1F57'], taronja: ['#F08A24', '#FFF0DE', '#8A4A00'], nit: ['#1B2B6B', '#E3E8FA', '#0B1640'] };
const DIG_STK = ['shield', 'lock', 'key', 'lupa', 'heart', 'mega', 'brain', 'star', 'people', 'sun', 'chat', 'spark'];
// d: {title, sub, items[], slogan, cta, theme, stk, pose, by, verdict, stats}
function digPoster(tpl, d, cls = '') {
  const th = DIG_TH[d.theme] || DIG_TH.verd, it = (d.items || []).filter(Boolean), E = s => esc(s || '');
  const stk = `<span class="dgpstk">${DIG_ICO[d.stk] || DIG_ICO.star}</span>`, bot = `<span class="dgpbot">${bitChar(d.pose || 'happy')}</span>`;
  let inner = '';
  const hd = (t, k) => `<div class="dgphd"><div>${k ? `<p class="dgpk">${E(k)}</p>` : ''}<h3>${E(t)}</h3></div>${stk}</div>`;
  if (tpl === 'campanya') inner = `<div class="dgpcam">${hd(d.slogan || d.title, d.sub)}<ul>${it.map(x => `<li>${digI('check')}<span>${E(x)}</span></li>`).join('')}</ul>${d.cta ? `<p class="dgpcta">${E(d.cta)}</p>` : ''}${bot}</div>`;
  else if (tpl === 'decaleg') inner = `<div class="dgpdec">${hd(d.title, d.sub)}<ol>${it.map(x => `<li><span>${E(x)}</span></li>`).join('')}</ol>${bot}</div>`;
  else if (tpl === 'verifica' || tpl === 'ia') inner = `<div class="dgpfit">${hd(d.title, d.sub)}${d.stats ? `<div class="dgpst">${d.stats.map(([a, b]) => `<span><b>${E(a)}</b><small>${E(b)}</small></span>`).join('')}</div>` : ''}<ul>${it.map(x => `<li>${digI('check')}<span>${E(x)}</span></li>`).join('')}</ul>${d.verdict ? `<p class="dgpver">${E(d.verdict)}</p>` : ''}${bot}</div>`;
  else inner = `<div class="dgpcard">${hd(d.title, d.sub)}<ul>${it.map(x => `<li>${digI('check')}<span>${E(x)}</span></li>`).join('')}</ul>${bot}</div>`;
  return `<div class="dgposter t-${tpl} ${cls}" style="--pc:${th[0]};--pb:${th[1]};--pd:${th[2]}">${inner}${d.by ? `<p class="dgpby">${L('Fet per', 'Hecho por')} ${E(d.by)}</p>` : ''}<span class="dgplogo">Numi Tech · Digital</span></div>`;
}
function digMakeStep(st) {
  const V = {};
  st.parts.forEach(p => { V[p.id] = p.def != null ? p.def : p.k === 'multi' ? [] : p.k === 'own' ? Array(p.max || 2).fill('') : p.k === 'theme' ? 'verd' : p.k === 'stk' ? 'shield' : p.k === 'pose' ? 'happy' : p.k === 'pick' ? null : ''; });
  const val = p => { const v = V[p.id];
    if (p.k === 'pick') return v == null ? '' : tval(p.opts[v]);
    if (p.k === 'multi') return v.map(i => tval(p.opts[i]));
    if (p.k === 'own') return v.map(s => s.trim()).filter(Boolean);
    return typeof v === 'string' ? v.trim() : v; };
  const data = () => { const d = { items: [] };
    st.parts.forEach(p => { const v = val(p); if (p.to === 'items') d.items.push(...(Array.isArray(v) ? v : v ? [v] : [])); else d[p.to] = v; });
    if (st.tpl === 'ia' && TSS.digAI) d.stats = [[String(TSS.digAI.ex), L('exemples', 'ejemplos')], [`${TSS.digAI.acc}/${TSS.digAI.n}`, L('encerts a la prova', 'aciertos en la prueba')]];
    if (st.fixed) Object.assign(d, typeof st.fixed === 'function' ? st.fixed() : Object.fromEntries(Object.entries(st.fixed).map(([k, v]) => [k, tval(v)])));
    return d; };
  const miss = () => st.parts.filter(p => { const v = val(p); if (p.k === 'multi') return v.length < (p.min || 1); if (p.k === 'pick') return v === ''; if (p.k === 'text') return p.req && v.length < 3; return false; });
  const own = () => st.parts.filter(p => p.k === 'own').reduce((a, p) => a + val(p).length, 0);
  const total = () => data().items.length;
  const ok = () => !miss().length && (!st.minItems || total() >= st.minItems) && (!st.maxItems || total() <= st.maxItems);
  const field = p => {
    const lab = `<label class="dgfl">${tval(p.t)}${p.k === 'multi' ? ` <small>${V[p.id].length}${p.max ? '/' + p.max : ''}</small>` : ''}</label>`;
    if (p.k === 'text') return `${lab}<input class="dgin" data-id="${p.id}" maxlength="${p.len || 60}" placeholder="${esc(tval(p.ph || ''))}" value="${esc(V[p.id])}" autocomplete="off">`;
    if (p.k === 'own') return `${lab}${V[p.id].map((s, i) => `<input class="dgin" data-id="${p.id}" data-i="${i}" maxlength="${p.len || 70}" placeholder="${esc(tval(p.ph || ''))}" value="${esc(s)}" autocomplete="off">`).join('')}`;
    if (p.k === 'pick' || p.k === 'multi') return `${lab}<div class="dgchoose">${p.opts.map((o, i) => { const on = p.k === 'pick' ? V[p.id] === i : V[p.id].includes(i); return `<button class="dgco ${on ? 'on' : ''}" data-id="${p.id}" data-i="${i}">${on ? DIG_ICO.check : '<i></i>'}<span>${tval(o)}</span></button>`; }).join('')}</div>`;
    if (p.k === 'theme') return `${lab}<div class="dgsw">${Object.entries(DIG_TH).map(([k, c]) => `<button class="${V[p.id] === k ? 'on' : ''}" data-id="${p.id}" data-v="${k}" style="--c:${c[0]};--b:${c[1]}" aria-label="${k}"></button>`).join('')}</div>`;
    if (p.k === 'stk') return `${lab}<div class="dgstks">${(p.opts || DIG_STK).map(k => `<button class="${V[p.id] === k ? 'on' : ''}" data-id="${p.id}" data-v="${k}">${DIG_ICO[k]}</button>`).join('')}</div>`;
    if (p.k === 'pose') return `${lab}<div class="dgposes">${['happy', 'wave', 'win', 'dance', 'think'].map(k => `<button class="${V[p.id] === k ? 'on' : ''}" data-id="${p.id}" data-v="${k}">${bitChar(k)}</button>`).join('')}</div>`;
    return '';
  };
  const prev = () => { $('#dgprev').innerHTML = digPoster(st.tpl, data()); const m = miss(), n = total();
    $('#dgstat').innerHTML = (st.crit || []).map(c => `<li>${tval(c)}</li>`).join('') + (st.minItems ? `<li class="${n >= st.minItems ? 'ok' : ''}">${L(`${n} punts (mínim ${st.minItems}${st.maxItems ? `, màxim ${st.maxItems}` : ''})`, `${n} puntos (mínimo ${st.minItems}${st.maxItems ? `, máximo ${st.maxItems}` : ''})`)}</li>` : '');
    tFoot(ok() ? L('Desa-ho al portafoli', 'Guárdalo en el portafolio') : (m.length ? L(`Falta: ${tval(m[0].t).replace(/<[^>]+>/g, '')}`, `Falta: ${tval(m[0].t).replace(/<[^>]+>/g, '')}`) : L('Revisa el nombre de punts', 'Revisa el número de puntos')), keep, ok()); };
  const keep = () => {
    if (!ok()) return; const t = TS_();
    t.port.push({ id: 'pj' + Date.now().toString(36), sid: TSS.id, t: st.name || TSS.s.t, kind: 'dig', tpl: st.tpl, data: data(), d: today() });
    if (t.port.length > 60) t.port.shift(); save(); TSS.ok++; addXPsafe(5);
    toast(L('Projecte desat a «Projectes»!', '¡Proyecto guardado en «Proyectos»!')); SFX.win && SFX.win(); typeof confetti === 'function' && confetti(80); tNext();
  };
  $('#tsb').innerHTML = `<div class="tcol dgmake">${st.q ? digQ(st, 'happy') : ''}<div class="dgmk"><div class="dged">${st.parts.map(p => `<div class="dgfield">${field(p)}</div>`).join('')}</div>
    <div class="dgpv"><p class="dgpvh">${digI('eye')} ${L('Vista prèvia', 'Vista previa')}</p><div id="dgprev"></div><ul class="tcrit dgstat" id="dgstat"></ul></div></div></div>`;
  const ed = $('#tsb .dged');
  ed.oninput = e => { const x = e.target; if (!x.dataset.id) return; if (x.dataset.i != null) V[x.dataset.id][+x.dataset.i] = x.value; else V[x.dataset.id] = x.value; prev(); };
  ed.onclick = e => { const b = e.target.closest('button'); if (!b || !b.dataset.id) return; const p = st.parts.find(q => q.id === b.dataset.id);
    if (p.k === 'pick') V[p.id] = +b.dataset.i; else if (p.k === 'multi') { const i = +b.dataset.i, a = V[p.id]; if (a.includes(i)) a.splice(a.indexOf(i), 1); else if (!p.max || a.length < p.max) a.push(i); else return toast(L(`Com a màxim ${p.max}`, `Como máximo ${p.max}`)); } else V[p.id] = b.dataset.v;
    digTap(); const f = b.closest('.dgfield'); f.innerHTML = field(p); prev(); };
  prev();
}
// portafoli: miniatura i vista (per integrar a techProjectes / tPortOpen quan p.kind === 'dig')
const digPortThumb = p => `<span class="tpimg dgthumb">${digPoster(p.tpl, p.data || {}, 'mini')}</span>`;
function digPortOpen(id) {
  const p = TS_().port.find(x => x.id === id); if (!p) return; VIEW = 'tport';
  app.innerHTML = `<div class="tsess"><div class="tstop"><button class="xbtn" onclick="go('projectes')" aria-label="${L('Tanca', 'Cierra')}">✕</button><b class="tsph">${esc(tx(p.t))}</b><span></span></div>
    <div class="tsbody"><div class="dgportv">${digPoster(p.tpl, p.data || {})}</div></div><div class="tsfoot"><button class="link" onclick="tPortDel('${p.id}')">${L('Esborra el projecte', 'Borra el proyecto')}</button></div></div>`;
}

if (typeof TSTEP !== 'undefined') Object.assign(TSTEP, { digSort: digSortStep, digPass: digPassStep, digChat: digChatStep, digPriv: digPrivStep, digFake: digFakeStep, digPhoto: digPhotoStep, digAI: digAIStep, digFoot: digFootStep, digDay: digDayStep, digTone: digToneStep, digFeed: digFeedStep, digTalk: digTalkStep, digMake: digMakeStep });

/* ---------- Teoria animada de Tech Digital (s'afegeix a TANI) ---------- */
const dgAv = (id, x, y, s = 40, extra = '') => `<g transform="translate(${x} ${y}) scale(${s / 48})" ${extra}>${digAva(id).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`;
const dgIc = (k, x, y, s = 24, col = '#2F5BEA', extra = '') => `<g transform="translate(${x} ${y}) scale(${s / 24})" color="${col}" ${extra}>${(DIG_ICO[k] || '').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>`;
const dgLock = (x, y, col, open, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-12 ${open ? -8 : 0}v-8a12 12 0 0 1 24 0${open ? 'v-2' : 'v8'}" fill="none" stroke="#9AA6C8" stroke-width="6" stroke-linecap="round"/><rect x="-18" y="0" width="36" height="30" rx="8" fill="${col}"/><circle cy="13" r="4" fill="#fff"/><rect x="-2" y="14" width="4" height="8" rx="2" fill="#fff"/></g>`;
const dgPh = (x, y, s, inner, col = '#1B2B6B') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-22" y="-40" width="44" height="80" rx="9" fill="${col}"/><rect x="-18" y="-33" width="36" height="62" rx="4" fill="#fff"/>${inner}<circle cy="34" r="2.4" fill="#fff" opacity=".6"/></g>`;
const dgCre = (it, x, y, s = .5, extra = '') => `<g transform="translate(${x} ${y}) scale(${s})" ${extra}>${digCreSVG(it)}</g>`;
const dgPill = (x, y, w, txt, col, t, cls = 'ta-in', tc = 'w') => `<g ${tA(t, cls)}><rect x="${x}" y="${y}" width="${w}" height="30" rx="15" fill="${col}"/><text x="${x + w / 2}" y="${y + 20}" text-anchor="middle" class="tat s ${tc}">${txt}</text></g>`;
const TANI_DIG = {
  // on trobem IA cada dia
  digAIEvery() {
    const it = [['globe', L('Traductors', 'Traductores'), '#3D7BF4'], ['chat', L('Assistents de veu', 'Asistentes de voz'), '#8B5CF6'], ['star', L('Recomanacions de vídeos', 'Recomendaciones de vídeos'), '#E5489A'], ['camera', L('Filtres de fotos', 'Filtros de fotos'), '#F08A24'], ['pin', L('Mapes i trànsit', 'Mapas y tráfico'), '#1FA463'], ['spark', L('Xatbots', 'Chatbots'), '#14A3B8']];
    return tSvg(214, `${dgPh(160, 104, 1.6, `<rect x="-16" y="-30" width="32" height="56" rx="3" fill="#F0EAFF"/>${dgIc('brain', -9, -12, 18, '#8B5CF6')}`)}${it.map(([ic, t, c], i) => { const a = -Math.PI / 2 + i * Math.PI / 3, x = 160 + Math.cos(a) * 118, y = 104 + Math.sin(a) * 82; return `<g ${tA(.3 + i * .4, 'ta-pop')}><circle cx="${x}" cy="${y - 6}" r="17" fill="${c}"/>${dgIc(ic, x - 10, y - 16, 20, '#fff')}<text x="${x}" y="${y + 24}" text-anchor="middle" class="tat s" style="font-size:10.5px">${t}</text></g>`; }).join('')}`);
  },
  // el cos avisa: ulls cansats, coll rígid, nervis… pausa
  digBody() {
    return tSvg(214, `<g transform="translate(110 200)"><path d="M-40 0q0-60 40-60t40 60z" fill="#3D7BF4"/><rect x="-9" y="-72" width="18" height="16" fill="#EFC09A"/><circle cy="-100" r="34" fill="#EFC09A"/><path d="M-34 -104q0-34 34-34t34 34q-10-14-34-14t-34 14z" fill="#3A2416"/>
      <g class="dgtw"><path d="M-20 -100q6-4 12 0M8 -100q6-4 12 0" stroke="#2B1A38" stroke-width="3" fill="none" stroke-linecap="round"/></g><path d="M-8 -82q8 4 16 0" stroke="#2B1A38" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
      ${[[L('Ulls cansats', 'Ojos cansados'), 200, 40, '#F08A24'], [L('Coll rígid', 'Cuello rígido'), 200, 92, '#EF5A5A'], [L('Nervis o mal humor', 'Nervios o mal humor'), 200, 144, '#8B5CF6']].map(([t, x, y, c], i) => `<g ${tA(.4 + i * .6, 'ta-in')}><path d="M150 ${[100, 140, 170][i]}L${x} ${y + 14}" stroke="${c}" stroke-width="2.5" stroke-dasharray="4 4"/><rect x="${x}" y="${y}" width="112" height="30" rx="12" fill="${c}"/><text x="${x + 56}" y="${y + 20}" text-anchor="middle" class="tat w s" style="font-size:11.5px">${t}</text></g>`).join('')}
      <g ${tA(2.6, 'ta-pop')}><rect x="14" y="10" width="116" height="34" rx="17" fill="#1FA463"/><text x="72" y="32" text-anchor="middle" class="tat w s">${L('Pausa i mira lluny', 'Pausa y mira lejos')}</text></g>`);
  },
  // longitud i barreja: tres contrasenyes, tres cadenats
  digPwLen() {
    const rows = [['gat', '#EF5A5A', 1, L('molt feble', 'muy débil')], ['Gat2015', '#F08A24', 2, L('feble', 'débil')], ['pingüí-Núvol-cohet-47!', '#1FA463', 5, L('molt forta', 'muy fuerte')]];
    return tSvg(214, rows.map(([p, c, n, lab], i) => `<g ${tA(.3 + i * 1.1, 'ta-in')}><rect x="14" y="${14 + i * 66}" width="292" height="56" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${dgLock(46, 26 + i * 66, c, n < 4, .8)}
      <text x="78" y="${38 + i * 66}" class="tat" style="font-family:monospace">${p}</text>${[0, 1, 2, 3, 4].map(k => `<rect x="${78 + k * 30}" y="${48 + i * 66}" width="26" height="8" rx="4" fill="${k < n ? c : '#E3E9FA'}"/>`).join('')}<text x="296" y="${56 + i * 66}" text-anchor="end" class="tat s" fill="${c}" style="fill:${c}">${lab}</text></g>`).join(''));
  },
  // frase de pas: tres paraules que no tenen res a veure + número + símbol
  digPwPhrase() {
    const w = [[L('pingüí', 'pingüino'), '#3D7BF4'], [L('Núvol', 'Nube'), '#8B5CF6'], [L('cohet', 'cohete'), '#E5489A'], ['47', '#F08A24'], ['!', '#1FA463']];
    return tSvg(214, `${w.map(([t, c], i) => `<g ${tA(.3 + i * .45, 'ta-pop')}><rect x="${10 + i * 62}" y="20" width="${i > 2 ? 40 : 58}" height="38" rx="12" fill="${c}"/><text x="${10 + i * 62 + (i > 2 ? 20 : 29)}" y="45" text-anchor="middle" class="tat w s">${t}</text></g>`).join('')}
      <g ${tA(2.6, 'ta-in')}><path d="M160 66v22" stroke="#9AA6C8" stroke-width="4" stroke-linecap="round"/><path d="M150 82l10 10 10-10" fill="none" stroke="#9AA6C8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="22" y="100" width="276" height="44" rx="14" fill="#14204A"/><text x="160" y="128" text-anchor="middle" class="tat w" style="font-family:monospace">${L('pingüí-Núvol-cohet47!', 'pingüino-Nube-cohete47!')}</text></g>
      <g ${tA(3.4, 'ta-wob')}>${dgLock(160, 160, '#1FA463', false, .8)}</g><text x="210" y="190" class="tat s" ${tA(3.8, 'ta-fade')}>${L('Llarga i fàcil de recordar', 'Larga y fácil de recordar')}</text>`);
  },
  // la contrasenya és secreta: només amb la família
  digPwSecret() {
    return tSvg(214, `${dgAv('iris', 132, 70, 56)}<g ${tA(.4, 'ta-pop')}>${dgIc('key', 146, 132, 28, '#F2B21B')}</g>
      <g ${tA(1.2, 'ta-in')}><path d="M128 100Q80 80 66 60" fill="none" stroke="#3CC47C" stroke-width="4" stroke-dasharray="6 6" class="ta-dash"/>${dgAv('mare', 30, 20, 50)}<circle cx="74" cy="64" r="13" fill="#3CC47C"/><path d="M68 64l4 4 8-8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><text x="55" y="88" text-anchor="middle" class="tat s">${L('família', 'familia')}</text></g>
      <g ${tA(2.2, 'ta-in')}><path d="M192 100Q240 80 254 60" fill="none" stroke="#EF5A5A" stroke-width="4" stroke-dasharray="6 6"/>${dgAv('nil', 240, 20, 50)}<circle cx="246" cy="64" r="13" fill="#EF5A5A"/><path d="M241 59l10 10M251 59l-10 10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><text x="265" y="88" text-anchor="middle" class="tat s">${L('amics', 'amigos')}</text></g>
      <g ${tA(3, 'ta-in')}><path d="M190 140Q240 150 250 170" fill="none" stroke="#EF5A5A" stroke-width="4" stroke-dasharray="6 6"/>${dgAv('desc', 238, 160, 44)}<circle cx="236" cy="198" r="11" fill="#EF5A5A"/><path d="M232 194l8 8M240 194l-8 8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></g>
      <text x="80" y="190" text-anchor="middle" class="tat b" ${tA(3.6, 'ta-fade')}>${L('És teva i secreta', 'Es tuya y secreta')}</text>`);
  },
  // una clau per a tot obre totes les portes
  digPwMany() {
    const door = (x, lab, c, t) => `<g ${tA(t, 'ta-in')}><rect x="${x}" y="40" width="70" height="100" rx="8" fill="${c}"/><rect x="${x + 8}" y="48" width="54" height="84" rx="5" fill="#fff" opacity=".22"/><circle cx="${x + 56}" cy="92" r="4" fill="#FFC531"/><text x="${x + 35}" y="160" text-anchor="middle" class="tat s">${lab}</text></g>`;
    return tSvg(214, `${door(20, L('música', 'música'), '#8B5CF6', .2)}${door(125, L('correu', 'correo'), '#3D7BF4', .5)}${door(230, L('escola', 'escuela'), '#1FA463', .8)}
      <g class="dg-keyrun">${dgIc('key', -14, -14, 30, '#F2B21B')}</g>${[55, 160, 265].map((x, i) => `<g ${tA(1.6 + i * .5, 'ta-pop')}><circle cx="${x}" cy="30" r="13" fill="#EF5A5A"/><text x="${x}" y="35" text-anchor="middle" class="tat w s">!</text></g>`).join('')}
      <text x="160" y="198" text-anchor="middle" class="tat b" ${tA(3.4, 'ta-fade')}>${L('Si una clau ho obre tot… millor una per a cada porta', 'Si una llave lo abre todo… mejor una para cada puerta')}</text>`);
  },
  // dades personals: a la caixa forta; coses que pots compartir
  digData() {
    const priv = [['user', L('Nom i cognoms', 'Nombre y apellidos')], ['home', L('Adreça', 'Dirección')], ['phone', L('Telèfon', 'Teléfono')], ['school', L('Escola', 'Escuela')], ['key', L('Contrasenyes', 'Contraseñas')], ['pin', L('On soc', 'Dónde estoy')]];
    return tSvg(220, `<rect x="10" y="10" width="190" height="200" rx="18" fill="#FFECEC" stroke="#F4B7B7" stroke-width="2"/><text x="105" y="34" text-anchor="middle" class="tat b">${L('Privat', 'Privado')}</text>
      ${priv.map(([ic, t], i) => `<g ${tA(.3 + i * .35, 'ta-in')}>${dgIc(ic, 24 + (i % 2) * 90, 50 + Math.floor(i / 2) * 52, 22, '#C9443A')}<text x="${52 + (i % 2) * 90}" y="${66 + Math.floor(i / 2) * 52}" class="tat s" style="font-size:11.5px">${t}</text></g>`).join('')}
      <rect x="210" y="10" width="100" height="200" rx="18" fill="#E4F7EC" stroke="#A8E0C0" stroke-width="2"/><text x="260" y="34" text-anchor="middle" class="tat b">${L('Es pot', 'Se puede')}</text>
      ${[['palette', L('Un dibuix', 'Un dibujo')], ['star', L('Un hobby', 'Un hobby')], ['heart', L('Color preferit', 'Color favorito')]].map(([ic, t], i) => `<g ${tA(2.6 + i * .35, 'ta-in')}>${dgIc(ic, 248, 50 + i * 52, 24, '#1FA463')}<text x="260" y="${92 + i * 52}" text-anchor="middle" class="tat s" style="font-size:11.5px">${t}</text></g>`).join('')}`);
  },
  // cercles: qui veu el que publico
  digCircles() {
    const R = [[90, '#E8EEFF', L('tothom', 'todo el mundo')], [68, '#D6E2FF', L('coneguts', 'conocidos')], [46, '#B9CDFF', L('amics', 'amigos')], [24, '#3D7BF4', '']];
    return tSvg(214, `${R.map(([r, c, t], i) => `<g ${tA(.2 + i * .3, 'ta-pop')}><circle cx="110" cy="108" r="${r}" fill="${c}"/>${t ? `<text x="110" y="${108 - r + 15}" text-anchor="middle" class="tat s">${t}</text>` : ''}</g>`).join('')}${dgAv('aina', 92, 90, 36)}
      <g class="dg-ripple"><circle cx="110" cy="108" r="24" fill="none" stroke="#F08A24" stroke-width="4"/></g>
      <g ${tA(1.8, 'ta-in')}><rect x="214" y="40" width="96" height="40" rx="12" fill="#1FA463"/><text x="262" y="65" text-anchor="middle" class="tat w s">${L('Privat', 'Privado')}</text><path d="M214 60h-60" stroke="#1FA463" stroke-width="3" stroke-dasharray="4 4"/></g>
      <g ${tA(2.6, 'ta-in')}><rect x="214" y="130" width="96" height="40" rx="12" fill="#EF5A5A"/><text x="262" y="155" text-anchor="middle" class="tat w s">${L('Públic', 'Público')}</text><path d="M214 150h-14" stroke="#EF5A5A" stroke-width="3" stroke-dasharray="4 4"/></g>`);
  },
  // no sempre saps qui hi ha darrere d'un perfil
  digStranger() {
    return tSvg(214, `<g class="dg-flip"><g class="dg-f1"><rect x="90" y="16" width="140" height="150" rx="18" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${dgAv('leo', 130, 30, 60)}<text x="160" y="116" text-anchor="middle" class="tat b">Leo_11 ⚽</text><text x="160" y="138" text-anchor="middle" class="tat s">${L('«Tinc 11 anys»', '«Tengo 11 años»')}</text></g>
      <g class="dg-f2"><rect x="90" y="16" width="140" height="150" rx="18" fill="#EEF1F7" stroke="#C9D0DE" stroke-width="2"/>${dgAv('desc', 130, 30, 60)}<text x="160" y="116" text-anchor="middle" class="tat b">???</text><text x="160" y="138" text-anchor="middle" class="tat s">${L('No ho pots saber', 'No lo puedes saber')}</text></g></g>
      <text x="160" y="196" text-anchor="middle" class="tat b">${L('A la xarxa, una foto i un nom no demostren qui és algú', 'En la red, una foto y un nombre no demuestran quién es alguien')}</text>`);
  },
  // configuració: els interruptors passen a privat
  digSettings() {
    const row = (y, ic, t, d) => `<g transform="translate(40 ${y})">${dgIc(ic, 0, 0, 22, '#2F5BEA')}<text x="34" y="17" class="tat s">${t}</text><g class="dg-tog" style="--t:${d}s"><rect x="186" y="1" width="46" height="24" rx="12" class="dg-tbg"/><circle cx="199" cy="13" r="9" fill="#fff" class="dg-tk"/></g></g>`;
    return tSvg(214, `<rect x="24" y="10" width="272" height="194" rx="20" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${row(26, 'globe', L('Perfil privat', 'Perfil privado'), .4)}${row(70, 'pin', L('Ubicació apagada', 'Ubicación apagada'), 1.1)}${row(114, 'chat', L('Missatges: només amics', 'Mensajes: solo amigos'), 1.8)}${row(158, 'tag', L('Reviso les etiquetes', 'Reviso las etiquetas'), 2.5)}`);
  },
  // l'empremta: cada cosa que fem deixa una petjada
  digFootprint() {
    const its = ['camera', 'chat', 'heart', 'star', 'share'];
    return tSvg(214, `<path d="M20 180Q100 170 130 120T300 40" fill="none" stroke="#E3E9FA" stroke-width="22" stroke-linecap="round"/>
      ${its.map((ic, i) => { const x = 36 + i * 62, y = 176 - i * 34; return `<g ${tA(.3 + i * .6, 'ta-pop')}><g transform="translate(${x} ${y}) rotate(${i % 2 ? 20 : -10})"><path d="M0 -12c-6 0-8 8-6 14s4 10 6 10 4-4 6-10-0-14-6-14z" fill="#3D7BF4"/>${[[-4, -17], [0, -19], [4, -18]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="2.2" fill="#3D7BF4"/>`).join('')}</g>${dgIc(ic, x + 10, y - 44, 22, ['#E5489A', '#14A3B8', '#EF5A5A', '#F2B21B', '#8B5CF6'][i])}</g>`; }).join('')}
      <text x="20" y="34" class="tat b" ${tA(3.4, 'ta-fade')}>${L('El que fem a la xarxa deixa rastre', 'Lo que hacemos en la red deja rastro')}</text>`);
  },
  // una captura i ja no ho controles: es copia
  digCopy() {
    const ph = (x, y, t) => `<g ${tA(t, 'ta-pop')}>${dgPh(x, y, .62, `<rect x="-14" y="-26" width="28" height="22" rx="3" fill="#FFC531"/><circle cx="-6" cy="-18" r="3" fill="#fff"/><path d="M-12 -6l8-8 6 6 4-4 6 6" fill="none" stroke="#fff" stroke-width="2"/><rect x="-14" y="0" width="22" height="4" rx="2" fill="#DCE4FA"/>`)}</g>`;
    return tSvg(214, `${ph(60, 100, .2)}<g ${tA(.9, 'ta-pop')}><circle cx="60" cy="30" r="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${dgIc('camera', 48, 18, 24, '#E5489A')}</g>
      ${[[170, 50], [230, 60], [290, 50], [170, 150], [230, 160], [290, 150]].map(([x, y], i) => `<path d="M90 100L${x - 30} ${y}" stroke="#C9D6FB" stroke-width="2.5" ${tA(1.4 + i * .3, 'ta-fade')}/>${ph(x, y, 1.5 + i * .3)}`).join('')}
      <text x="60" y="160" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L('Esborrar-la', 'Borrarla')}</text><text x="60" y="178" text-anchor="middle" class="tat s" ${tA(3.6, 'ta-fade')}>${L('no esborra les còpies', 'no borra las copias')}</text>`);
  },
  // l'empremta també pot ser positiva
  digPositive() {
    const it = [['star', L('Un projecte del que estàs orgullós/a', 'Un proyecto del que estás orgulloso/a'), '#F2B21B'], ['heart', L('Un comentari amable', 'Un comentario amable'), '#E5489A'], ['people', L('Ajudar algú', 'Ayudar a alguien'), '#1FA463']];
    return tSvg(214, `${dgAv('pau', 20, 70, 70)}${it.map(([ic, t, c], i) => `<g ${tA(.4 + i * .7, 'ta-in')}><rect x="104" y="${18 + i * 62}" width="200" height="50" rx="16" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="130" cy="${43 + i * 62}" r="16" fill="${c}"/>${dgIc(ic, 120, 33 + i * 62, 20, '#fff')}<text x="154" y="${48 + i * 62}" class="tat s" style="font-size:12px">${t}</text></g>`).join('')}`);
  },
  // abans de publicar: tres preguntes
  digThinkPost() {
    const q = [L('Ho ensenyaria a la meva família?', '¿Lo enseñaría a mi familia?'), L('Hi surt algú que no m’ha dit que sí?', '¿Sale alguien que no me ha dicho que sí?'), L('Em sabria greu que ho veiés tothom?', '¿Me sabría mal que lo viera todo el mundo?')];
    return tSvg(214, `${dgPh(46, 104, 1.1, `<rect x="-14" y="-26" width="28" height="30" rx="3" fill="#8FD3FF"/><circle cx="0" cy="-12" r="6" fill="#FFC531"/><rect x="-14" y="10" width="28" height="10" rx="5" fill="#3D7BF4"/><text x="0" y="17.5" text-anchor="middle" font-size="6" fill="#fff" font-weight="900">${L('PUBLICA', 'PUBLICA')}</text>`)}
      ${q.map((t, i) => `<g ${tA(.4 + i * .8, 'ta-in')}><rect x="96" y="${20 + i * 60}" width="214" height="48" rx="14" fill="#FFF8E6" stroke="#F1D9A4" stroke-width="2"/><text x="110" y="${49 + i * 60}" class="tat s" style="font-size:11.5px">${i + 1}. ${t}</text></g>`).join('')}
      <g ${tA(3.4, 'ta-pop')}><circle cx="46" cy="188" r="14" fill="#3CC47C"/><path d="M40 188l4 4 8-8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/></g>`);
  },
  // un bulo s'escampa: 1 → 2 → 4 → 8
  digHoaxSpread() {
    const lv = [[160], [100, 220], [60, 130, 190, 260], [30, 70, 110, 150, 170, 210, 250, 290]];
    return tSvg(214, lv.map((xs, i) => xs.map((x, j) => `${i ? `<path d="M${lv[i - 1][Math.floor(j / 2)]} ${22 + (i - 1) * 54 + 18}L${x} ${22 + i * 54 - 14}" stroke="#F4B7B7" stroke-width="2" ${tA(.3 + i * .9, 'ta-fade')}/>` : ''}<g ${tA(.4 + i * .9, 'ta-pop')}>${dgPh(x, 22 + i * 54, i === 3 ? .34 : .4, `<rect x="-14" y="-24" width="28" height="18" rx="4" fill="#EF5A5A"/><text x="0" y="-10" text-anchor="middle" font-size="12" fill="#fff" font-weight="900">!!</text>`, '#5D6390')}</g>`).join('')).join('')
      + `<text x="160" y="210" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('Cada «reenviar» el fa arribar més lluny', 'Cada «reenviar» lo hace llegar más lejos')}</text>`);
  },
  // pistes d'un bulo
  digClues() {
    return tSvg(220, `<rect x="16" y="14" width="200" height="190" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><g transform="translate(26 24) scale(.75)">${digAva('desc').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g><text x="70" y="46" class="tat s">${L('Algú', 'Alguien')} · ???</text>
      <text x="28" y="84" class="tat b" style="fill:#C9443A">${L('URGENT!!! ALERTA!!!', '¡¡¡URGENTE!!! ¡¡¡ALERTA!!!')}</text><text x="28" y="106" class="tat s">${L('Els gelats fan tornar', 'Los helados vuelven')}</text><text x="28" y="124" class="tat s">${L('blau el cabell!!', 'azul el pelo!!')}</text>
      <rect x="28" y="140" width="176" height="28" rx="14" fill="#EF5A5A"/><text x="116" y="159" text-anchor="middle" class="tat w s">${L('COMPARTEIX-HO JA!', '¡COMPÁRTELO YA!')}</text>
      ${[[L('Sense font', 'Sin fuente'), 40], [L('Majúscules i !!!', 'Mayúsculas y !!!'), 78], [L('Ho vol tot ràpid', 'Lo quiere todo rápido'), 154], [L('Sense data', 'Sin fecha'), 46]].map(([t, y], i) => `<g ${tA(.6 + i * .7, 'ta-in')}><path d="M216 ${y}h20" stroke="#F08A24" stroke-width="3"/><rect x="236" y="${y - 14}" width="78" height="28" rx="10" fill="#FFF0DE" stroke="#F08A24" stroke-width="2"/><text x="275" y="${y + 5}" text-anchor="middle" class="tat s" style="font-size:10.5px">${t}</text></g>`).join('')}
      <g class="ta-lupa" style="--lx:0">${''}</g>`);
  },
  // cinc passos per comprovar
  digCheck() {
    const st = [['block', L('Atura’t', 'Párate'), '#EF5A5A'], ['user', L('Qui ho diu?', '¿Quién lo dice?'), '#F08A24'], ['globe', L('Ho diuen altres?', '¿Lo dicen otros?'), '#F2B21B'], ['star', L('De quan és?', '¿De cuándo es?'), '#3D7BF4'], ['adult', L('Pregunta', 'Pregunta'), '#1FA463']];
    return tSvg(214, `${st.map(([ic, t, c], i) => `<g ${tA(.3 + i * .55, 'ta-pop')}><circle cx="${36 + i * 62}" cy="80" r="26" fill="${c}"/>${dgIc(ic, 24 + i * 62, 68, 24, '#fff')}<text x="${36 + i * 62}" y="128" text-anchor="middle" class="tat s" style="font-size:11px">${t}</text><text x="${36 + i * 62}" y="40" text-anchor="middle" class="tat b">${i + 1}</text></g>${i < 4 ? `<path d="M${64 + i * 62} 80h8" stroke="#C9D6FB" stroke-width="3" ${tA(.5 + i * .55, 'ta-fade')}/>` : ''}`).join('')}
      <text x="160" y="176" text-anchor="middle" class="tat b" ${tA(3.4, 'ta-fade')}>${L('Si no ho pots comprovar, no ho comparteixis', 'Si no lo puedes comprobar, no lo compartas')}</text>`);
  },
  // quan una notícia et fa enfadar molt o fa por: pausa
  digEmotion() {
    return tSvg(214, `<rect x="20" y="20" width="150" height="100" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><rect x="34" y="36" width="122" height="14" rx="4" fill="#EF5A5A"/><path d="M34 64h110M34 78h96M34 92h104" stroke="#E3E9FA" stroke-width="7" stroke-linecap="round"/>
      <g transform="translate(240 70)"><rect x="-14" y="-56" width="28" height="112" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><rect x="-8" y="-50" width="16" height="100" rx="8" fill="#FDEBEB"/><rect x="-8" y="-50" width="16" height="100" rx="8" fill="#EF5A5A" class="dg-therm"/><circle cy="58" r="14" fill="#EF5A5A"/></g>
      <g ${tA(2.6, 'ta-wob')}><rect x="60" y="140" width="200" height="50" rx="25" fill="#1FA463"/><text x="160" y="171" text-anchor="middle" class="tat w b">${L('Pausa: respira i comprova', 'Pausa: respira y comprueba')}</text></g>`);
  },
  // una foto es pot retocar
  digEdit() {
    return tSvg(214, `<g transform="translate(20 20) scale(.75)"><rect width="240" height="150" fill="#fff"/>${DIG_PIC.riu(false)}</g><g transform="translate(20 20) scale(.75)" class="dg-layer"><g transform="translate(62 108)"><path d="M0 0q-4-10 -14-14q8 0 14 6q6-6 14-6q-10 4-14 14z" fill="#3D5A80"/></g></g>
      <rect x="20" y="20" width="180" height="112.5" fill="none" stroke="#DCE4FA" stroke-width="2"/>
      <g ${tA(.4, 'ta-in')}><rect x="214" y="20" width="96" height="140" rx="14" fill="#14204A"/>${[['palette', L('Colors', 'Colores')], ['spark', L('Afegir', 'Añadir')], ['lupa', L('Retallar', 'Recortar')]].map(([ic, t], i) => `${dgIc(ic, 226, 34 + i * 40, 20, ['#FFC531', '#7DF3FF', '#FF8FB1'][i])}<text x="254" y="50 " class="tat w s" transform="translate(0 ${i * 40})">${t}</text>`).join('')}</g>
      <text x="110" y="168" text-anchor="middle" class="tat b" ${tA(2.8, 'ta-fade')}>${L('Retocada en un minut', 'Retocada en un minuto')}</text><text x="110" y="192" text-anchor="middle" class="tat s" ${tA(3.2, 'ta-fade')}>${L('Una foto no és una prova si no saps d’on surt', 'Una foto no es una prueba si no sabes de dónde sale')}</text>`);
  },
  // retallar canvia el que sembla
  digCrop() {
    return tSvg(214, `<g transform="translate(40 14) scale(1)"><svg x="0" y="0" width="240" height="150" viewBox="0 0 240 150">${DIG_PIC.carrer()}</svg></g><g class="dg-crop"><path d="M40 14h240v150H40zM${40 + 88} ${14 + 104}h56v34h-56z" fill="#14204A" fill-rule="evenodd" opacity=".72"/><rect x="128" y="118" width="56" height="34" fill="none" stroke="#FFC531" stroke-width="3" stroke-dasharray="6 4"/></g>
      <text x="160" y="190" text-anchor="middle" class="tat b">${L('Un tros de la foto pot explicar una altra història', 'Un trozo de la foto puede contar otra historia')}</text>`);
  },
  // publicitat: algú paga perquè ho vegis
  digAd() {
    return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="14" y="16" width="140" height="160" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${dgAv('diari', 26, 26, 30)}<text x="64" y="46" class="tat s">${L('Notícia', 'Noticia')}</text><path d="M28 72h112M28 88h96M28 104h104M28 120h80" stroke="#E3E9FA" stroke-width="7" stroke-linecap="round"/></g>
      <g ${tA(1, 'ta-in')}><rect x="166" y="16" width="140" height="160" rx="16" fill="#FFF8E6" stroke="#F2B21B" stroke-width="3"/><rect x="178" y="26" width="70" height="20" rx="10" fill="#F2B21B"/><text x="213" y="40" text-anchor="middle" class="tat s">${L('Publicitat', 'Publicidad')}</text>
      <g transform="translate(236 104)"><rect x="-30" y="-36" width="60" height="44" rx="8" fill="#8B5CF6"/><text x="0" y="-8" text-anchor="middle" class="tat w b">NOU!</text></g><rect x="186" y="140" width="100" height="24" rx="12" fill="#EF5A5A"/><text x="236" y="156" text-anchor="middle" class="tat w s">${L('Compra', 'Compra')}</text></g>
      <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(2.4, 'ta-fade')}>${L('Un anunci vol que compris o facis clic: busca l’etiqueta', 'Un anuncio quiere que compres o hagas clic: busca la etiqueta')}</text>`);
  },
  // titulars esquer: molta promesa, poc contingut
  digClickbait() {
    return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="14" y="20" width="180" height="80" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="28" y="50" class="tat b">${L('No creuràs el que', 'No creerás lo que')}</text><text x="28" y="72" class="tat b">${L('va passar després… 😱', 'pasó después… 😱')}</text></g>
      <g ${tA(1, 'ta-in')}><path d="M104 104v30" stroke="#9AA6C8" stroke-width="4"/><path d="M96 128l8 10 8-10" fill="none" stroke="#9AA6C8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
      <g ${tA(1.8, 'ta-in')}><rect x="14" y="146" width="180" height="50" rx="14" fill="#F3F6FF"/><text x="28" y="176" class="tat s">${L('…es va menjar un entrepà.', '…se comió un bocadillo.')}</text></g>
      <g transform="translate(250 100)" class="dg-deflate"><ellipse cx="0" cy="-20" rx="36" ry="42" fill="#EF5A5A"/><path d="M0 22l-5 8h10z" fill="#C9443A"/><path d="M0 30q-6 20 4 40" stroke="#9AA6C8" stroke-width="2" fill="none"/></g>`);
  },
  // la IA aprèn d'exemples
  digAILearn() {
    const ex = [[{ h: 0, s: .9 }, '#E5489A'], [{ h: 210, s: .1 }, '#14A3B8'], [{ h: 120, s: .85 }, '#E5489A'], [{ h: 40, s: .15 }, '#14A3B8']];
    return tSvg(214, `${ex.map(([it, c], i) => `<g ${tA(.2 + i * .4, 'ta-in')}>${dgCre(it, 30, 30 + i * 46, .5)}<rect x="52" y="${20 + i * 46}" width="44" height="20" rx="10" fill="${c}"/><text x="74" y="${34 + i * 46}" text-anchor="middle" class="tat w s" style="font-size:10px">${c === '#E5489A' ? 'Zic' : 'Pufi'}</text><path d="M100 ${30 + i * 46}Q130 ${30 + i * 46} 140 100" stroke="#C9D6FB" stroke-width="2" fill="none"/></g>`).join('')}
      <g ${tA(1.9, 'ta-pop')}><rect x="136" y="64" width="72" height="72" rx="20" fill="#8B5CF6"/>${dgIc('brain', 152, 80, 40, '#fff')}<text x="172" y="156" text-anchor="middle" class="tat s">${L('aprèn', 'aprende')}</text></g>
      <g ${tA(2.6, 'ta-in')}>${dgCre({ h: 240, s: .9 }, 250, 70, .6)}<text x="250" y="40" text-anchor="middle" class="tat s">${L('nova', 'nueva')}</text></g><path d="M208 100h18" stroke="#8B5CF6" stroke-width="3" ${tA(3, 'ta-fade')}/>
      <g ${tA(3.4, 'ta-pop')}><rect x="222" y="112" width="56" height="26" rx="13" fill="#E5489A"/><text x="250" y="130" text-anchor="middle" class="tat w s">Zic!</text></g>`);
  },
  // com decideix: busca l'exemple més semblant
  digAINear() {
    const pts = [[{ h: 10, s: .9 }, 70, 50, '#E5489A'], [{ h: 120, s: .85 }, 180, 56, '#E5489A'], [{ h: 220, s: .1 }, 250, 160, '#14A3B8'], [{ h: 40, s: .1 }, 90, 166, '#14A3B8'], [{ h: 160, s: .2 }, 200, 150, '#14A3B8']];
    return tSvg(214, `<rect x="30" y="16" width="270" height="180" rx="14" fill="#F7F9FF" stroke="#DCE4FA" stroke-width="2"/><text x="20" y="40" class="tat s" transform="rotate(-90 20 40)" text-anchor="end">${L('punxes', 'pinchos')}</text>
      ${pts.map(([it, x, y, c], i) => `<g ${tA(.2 + i * .2, 'ta-pop')}><circle cx="${x}" cy="${y}" r="17" fill="none" stroke="${c}" stroke-width="3"/>${dgCre(it, x, y, .38)}</g>`).join('')}
      <path d="M150 74L180 56" stroke="#14204A" stroke-width="3" stroke-dasharray="5 5" class="ta-dash" ${tA(2.4, 'ta-fade')}/>
      <g ${tA(1.6, 'ta-pop')}><circle cx="150" cy="80" r="18" fill="none" stroke="#FFC531" stroke-width="4" class="dgping"/>${dgCre({ h: 150, s: .8 }, 150, 80, .38)}</g>
      <g ${tA(3, 'ta-in')}><rect x="96" y="104" width="128" height="26" rx="13" fill="#E5489A"/><text x="160" y="122" text-anchor="middle" class="tat w s">${L('El més semblant és Zic', 'El más parecido es Zic')}</text></g>`);
  },
  // exemples poc variats: la IA s'equivoca
  digAIBias() {
    return tSvg(214, `<rect x="14" y="14" width="140" height="130" rx="16" fill="#FDEBF3"/><text x="84" y="34" text-anchor="middle" class="tat s">${L('Zics que ha vist', 'Zics que ha visto')}</text>${[0, 1, 2].map(i => dgCre({ h: i * 14, s: .9 }, 40 + i * 44, 84, .5)).join('')}
      <rect x="166" y="14" width="140" height="130" rx="16" fill="#E2F6F8"/><text x="236" y="34" text-anchor="middle" class="tat s">${L('Pufis que ha vist', 'Pufis que ha visto')}</text>${[0, 1, 2].map(i => dgCre({ h: 205 + i * 14, s: .1 }, 192 + i * 44, 84, .5)).join('')}
      <g ${tA(1.6, 'ta-pop')}>${dgCre({ h: 215, s: .9 }, 110, 178, .55)}</g><g ${tA(2.4, 'ta-in')}><text x="150" y="176" class="tat s">${L('La IA diu: Pufi (és blau!)', 'La IA dice: Pufi (¡es azul!)')}</text></g>
      <g ${tA(3.1, 'ta-pop')}><circle cx="290" cy="178" r="15" fill="#EF5A5A"/><path d="M284 172l12 12M296 172l-12 12" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>`);
  },
  // un xatbot prediu paraules: no pensa com tu
  digAIWords() {
    const o = [[L('arbre', 'árbol'), 120], [L('teulada', 'tejado'), 76], [L('lluna', 'luna'), 18]];
    return tSvg(214, `<rect x="14" y="16" width="292" height="44" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="28" y="44" class="tat">${L('El gat s’enfila a l’…', 'El gato se sube al…')}</text><rect x="244" y="28" width="3" height="20" fill="#2F5BEA" class="dg-caret"/>
      ${o.map(([t, w], i) => `<g ${tA(.6 + i * .5, 'ta-in')}><text x="28" y="${98 + i * 34}" class="tat s">${t}</text><rect x="110" y="${84 + i * 34}" width="${w}" height="18" rx="9" fill="${i ? '#C9B6FF' : '#8B5CF6'}" class="dg-bar"/></g>`).join('')}
      <text x="160" y="200" text-anchor="middle" class="tat s" ${tA(2.8, 'ta-fade')}>${L('Tria la paraula més probable. No sap si és veritat.', 'Elige la palabra más probable. No sabe si es verdad.')}</text>`);
  },
  // la IA pot dir coses falses amb molta seguretat
  digAIWrong() {
    return tSvg(214, `${dgAv('bot', 16, 18, 40)}<g ${tA(.3, 'ta-in')}><rect x="64" y="16" width="240" height="56" rx="16" fill="#F0EAFF"/><text x="78" y="40" class="tat s">${L('És clar! Les tortugues', '¡Claro! Las tortugas')}</text><text x="78" y="60" class="tat s">${L('poden volar ben alt. 🐢✈️', 'pueden volar muy alto. 🐢✈️')}</text></g>
      <g ${tA(1.4, 'ta-pop')}><circle cx="294" cy="20" r="14" fill="#EF5A5A"/><path d="M288 14l12 12M300 14l-12 12" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g>
      <g ${tA(2.2, 'ta-in')}>${dgAv('jana', 16, 96, 40)}<rect x="64" y="94" width="240" height="44" rx="16" fill="#E4F7EC"/>${dgIc('book', 78, 104, 24, '#1FA463')}<text x="110" y="121" class="tat s">${L('Ho comprovo en un llibre', 'Lo compruebo en un libro')}</text></g>
      <text x="160" y="180" text-anchor="middle" class="tat b" ${tA(3.2, 'ta-fade')}>${L('Que soni segur no vol dir que sigui cert', 'Que suene seguro no quiere decir que sea cierto')}</text>`);
  },
  // amb un xatbot, cap dada personal
  digAIPriv() {
    return tSvg(214, `${dgPh(70, 110, 1.9, `<rect x="-16" y="-30" width="26" height="9" rx="4" fill="#F0EAFF"/><rect x="-6" y="-16" width="20" height="9" rx="4" fill="#DCE4FA"/><rect x="-16" y="10" width="32" height="12" rx="4" fill="#fff" stroke="#DCE4FA"/>`)}
      <g ${tA(.4, 'ta-in')}><rect x="132" y="24" width="176" height="40" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="146" y="49" class="tat s">${L('Em dic Aina Puig i visc a…', 'Me llamo Aina Puig y vivo en…')}</text></g>
      <g ${tA(1.4, 'ta-wob')}>${dgIc('shield', 190, 74, 60, '#1FA463')}</g><path d="M132 44h-10" stroke="#EF5A5A" stroke-width="4" ${tA(1.4, 'ta-fade')}/>
      <text x="220" y="160" text-anchor="middle" class="tat b" ${tA(2.2, 'ta-fade')}>${L('Nom, adreça, escola, fotos…', 'Nombre, dirección, escuela, fotos…')}</text><text x="220" y="184" text-anchor="middle" class="tat s" ${tA(2.6, 'ta-fade')}>${L('no els escriguis en un xat amb IA', 'no los escribas en un chat con IA')}</text>`);
  },
  // imatges fetes amb IA
  digAIImg() {
    return tSvg(214, `<g ${tA(.2, 'ta-in')}><rect x="14" y="20" width="150" height="40" rx="12" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="26" y="45" class="tat s">${L('«un gos astronauta»', '«un perro astronauta»')}</text><rect x="148" y="30" width="3" height="20" fill="#2F5BEA" class="dg-caret"/></g>
      <g ${tA(1.1, 'ta-pop')}><rect x="180" y="12" width="128" height="128" rx="14" fill="#1C2456"/>${[[200, 30], [290, 40], [230, 120], [296, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.5" fill="#fff"/>`).join('')}<g transform="translate(244 104)"><ellipse cx="0" cy="-16" rx="22" ry="14" fill="#fff"/><circle cx="18" cy="-34" r="14" fill="#D29B6E"/><circle cx="18" cy="-34" r="18" fill="#7DF3FF" opacity=".35" stroke="#fff" stroke-width="2"/><circle cx="22" cy="-36" r="2" fill="#14204A"/></g></g>
      <g ${tA(2.2, 'ta-wob')}><rect x="196" y="148" width="96" height="26" rx="13" fill="#8B5CF6"/><text x="244" y="166" text-anchor="middle" class="tat w s">${L('Feta amb IA', 'Hecha con IA')}</text></g>
      <text x="90" y="110" text-anchor="middle" class="tat s" ${tA(2.8, 'ta-fade')}>${L('Sembla una foto…', 'Parece una foto…')}</text><text x="90" y="132" text-anchor="middle" class="tat s" ${tA(3.1, 'ta-fade')}>${L('però no ha passat mai', 'pero no ha pasado nunca')}</text>`);
  },
  // dubtes? pregunta a un adult
  digAskAdult() {
    return tSvg(214, `${dgAv('leo', 50, 60, 64)}${dgAv('profe', 206, 54, 70)}<g ${tA(.5, 'ta-in')}><rect x="40" y="14" width="110" height="36" rx="14" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="95" y="37" text-anchor="middle" class="tat s">${L('Això és cert?', '¿Esto es cierto?')}</text></g>
      <g ${tA(1.5, 'ta-in')}><rect x="170" y="10" width="140" height="36" rx="14" fill="#E4F7EC"/><text x="240" y="33" text-anchor="middle" class="tat s">${L('Ho mirem junts!', '¡Lo miramos juntos!')}</text></g>
      <g ${tA(2.4, 'ta-pop')}><path d="M120 150h80" stroke="#3CC47C" stroke-width="5" stroke-linecap="round"/><circle cx="160" cy="150" r="16" fill="#3CC47C"/><path d="M153 150l5 5 9-10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/></g>
      <text x="160" y="196" text-anchor="middle" class="tat b" ${tA(3, 'ta-fade')}>${L('Preguntar és de valents', 'Preguntar es de valientes')}</text>`);
  },
  // el to: les mateixes paraules poden sonar diferent
  digTone() {
    return tSvg(214, `${dgAv('omar', 14, 22, 40)}<g ${tA(.3, 'ta-in')}><rect x="62" y="22" width="150" height="40" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="78" y="47" class="tat">${L('Molt bé, eh 🙄', 'Muy bien, eh 🙄')}</text></g>
      <g ${tA(1, 'ta-in')}><rect x="222" y="22" width="88" height="40" rx="14" fill="#FFECEC"/><text x="266" y="47" text-anchor="middle" class="tat s">${L('burla?', '¿burla?')}</text></g>
      ${dgAv('omar', 14, 92, 40)}<g ${tA(1.8, 'ta-in')}><rect x="62" y="92" width="150" height="40" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="78" y="117" class="tat">${L('Molt bé!! 🎉', '¡¡Muy bien!! 🎉')}</text></g>
      <g ${tA(2.4, 'ta-in')}><rect x="222" y="92" width="88" height="40" rx="14" fill="#E4F7EC"/><text x="266" y="117" text-anchor="middle" class="tat s">${L('felicita', 'felicita')}</text></g>
      <text x="160" y="180" text-anchor="middle" class="tat b" ${tA(3, 'ta-fade')}>${L('Per escrit no se’t veu la cara: explica’t bé', 'Por escrito no se te ve la cara: explícate bien')}</text>`);
  },
  // el filtre: és cert? és amable? cal dir-ho?
  digFilter() {
    return tSvg(214, `<g class="dg-drop">${['😡', '🙂', '💬'].map((e, i) => `<text x="${110 + i * 50}" y="0" font-size="22" class="dg-drop${i}">${e}</text>`).join('')}</g>
      <path d="M60 70h200l-50 60h-100z" fill="#E8EEFF" stroke="#2F5BEA" stroke-width="3"/>${[L('Cert?', '¿Cierto?'), L('Amable?', '¿Amable?'), L('Cal?', '¿Hace falta?')].map((t, i) => `<text x="${100 + i * 60}" y="94" text-anchor="middle" class="tat s">${t}</text>`).join('')}
      <path d="M160 130v20" stroke="#2F5BEA" stroke-width="4"/><g ${tA(2.4, 'ta-pop')}><rect x="104" y="152" width="112" height="34" rx="17" fill="#3CC47C"/><text x="160" y="174" text-anchor="middle" class="tat w s">${L('Ara sí, envia', 'Ahora sí, envía')}</text></g>`);
  },
  // què és el ciberassetjament: fer mal, a propòsit, i repetit
  digBully() {
    const days = [L('dl', 'lu'), L('dt', 'ma'), L('dc', 'mi'), L('dj', 'ju'), L('dv', 'vi')];
    return tSvg(214, `${days.map((d, i) => `<g ${tA(.2 + i * .35, 'ta-pop')}><rect x="${20 + i * 58}" y="16" width="50" height="58" rx="10" fill="#fff" stroke="#DCE4FA" stroke-width="2"/><text x="${45 + i * 58}" y="34" text-anchor="middle" class="tat s">${d}</text>${dgIc('chat', 33 + i * 58, 42, 24, '#EF5A5A')}</g>`).join('')}
      ${[['spark', L('Es repeteix', 'Se repite'), '#EF5A5A'], ['block', L('Vol fer mal', 'Quiere hacer daño'), '#F08A24'], ['people', L('Costa defensar-se', 'Cuesta defenderse'), '#8B5CF6']].map(([ic, t, c], i) => `<g ${tA(2.2 + i * .5, 'ta-in')}><rect x="${14 + i * 100}" y="104" width="94" height="66" rx="14" fill="${c}"/>${dgIc(ic, 49 + i * 100, 112, 24, '#fff')}<text x="${61 + i * 100}" y="156" text-anchor="middle" class="tat w s" style="font-size:11px">${t}</text></g>`).join('')}
      <text x="160" y="200" text-anchor="middle" class="tat s" ${tA(3.8, 'ta-fade')}>${L('No és una broma: és ciberassetjament', 'No es una broma: es ciberacoso')}</text>`);
  },
  // què fer: no responguis, guarda proves, bloqueja i denuncia, explica-ho
  digBullySteps() {
    const st = [['mute', L('No responguis', 'No respondas'), '#5D72C9'], ['camera', L('Guarda proves', 'Guarda pruebas'), '#F08A24'], ['block', L('Bloqueja i denuncia', 'Bloquea y denuncia'), '#EF5A5A'], ['adult', L('Explica-ho a un adult', 'Cuéntaselo a un adulto'), '#1FA463']];
    return tSvg(214, st.map(([ic, t, c], i) => `<g ${tA(.3 + i * .6, 'ta-in')}><rect x="20" y="${10 + i * 50}" width="280" height="42" rx="21" fill="#fff" stroke="${c}" stroke-width="3"/><circle cx="42" cy="${31 + i * 50}" r="17" fill="${c}"/>${dgIc(ic, 31, 20 + i * 50, 22, '#fff')}<text x="70" y="${37 + i * 50}" class="tat">${i + 1}. ${t}</text></g>`).join(''));
  },
  // qui ho veu també pot ajudar
  digUpstander() {
    return tSvg(214, `${dgAv('jana', 136, 20, 50)}<text x="161" y="86" text-anchor="middle" class="tat s">${L('rep missatges dolents', 'recibe mensajes feos')}</text>
      ${[['nil', 30], ['iris', 90], ['pau', 190], ['omar', 250]].map(([id, x], i) => `<g ${tA(.6 + i * .5, 'ta-in')}>${dgAv(id, x, 120, 44)}<g ${tA(1.2 + i * .5, 'ta-pop')}>${dgIc('heart', x + 12, 104, 20, '#E5489A')}<path d="M${x + 22} 102Q${(x + 161) / 2} 80 161 74" fill="none" stroke="#E5489A" stroke-width="2.5" stroke-dasharray="4 4"/></g></g>`).join('')}
      <text x="160" y="196" text-anchor="middle" class="tat b" ${tA(3.4, 'ta-fade')}>${L('No riguis la gràcia: dona suport i avisa', 'No le rías la gracia: apoya y avisa')}</text>`);
  },
  // telèfons d'ajuda
  digHelp() {
    const n = [['900 20 20 10', L('ANAR · nens i adolescents · 24 h', 'ANAR · niños y adolescentes · 24 h'), '#1FA463'], ['017', L('Ajuda en ciberseguretat', 'Ayuda en ciberseguridad'), '#3D7BF4'], ['112', L('Emergències', 'Emergencias'), '#EF5A5A']];
    return tSvg(214, `${dgIc('heart', 140, 6, 40, '#E5489A', 'class="dg-beat"')}${n.map(([num, t, c], i) => `<g ${tA(.4 + i * .5, 'ta-in')}><rect x="20" y="${56 + i * 52}" width="280" height="44" rx="14" fill="#fff" stroke="${c}" stroke-width="3"/>${dgIc('phone', 32, 66 + i * 52, 24, c)}<text x="64" y="${84 + i * 52}" class="tat b" style="fill:${c}">${num}</text><text x="178" y="${84 + i * 52}" class="tat s" style="font-size:11px">${t}</text></g>`).join('')}`);
  },
  // l'equilibri: pantalles i la resta
  digBalance() {
    return tSvg(214, `<path d="M160 60v120M120 186h80" stroke="#5E667A" stroke-width="6" stroke-linecap="round"/><g class="dg-scale"><path d="M50 60h220" stroke="#5E667A" stroke-width="6" stroke-linecap="round"/><circle cx="160" cy="60" r="8" fill="#5E667A"/>
      <g transform="translate(70 60)"><path d="M0 0l-30 50h60z" fill="none" stroke="#9AA6C8" stroke-width="2"/><ellipse cy="52" rx="40" ry="8" fill="#8B5CF6"/>${dgIc('phone', -12, 18, 26, '#8B5CF6')}</g>
      <g transform="translate(250 60)"><path d="M0 0l-30 50h60z" fill="none" stroke="#9AA6C8" stroke-width="2"/><ellipse cy="52" rx="40" ry="8" fill="#1FA463"/>${['ball', 'book', 'people', 'moon'].map((k, i) => dgIc(k, -32 + i * 16, 22 + (i % 2) * 4, 18, ['#1FA463', '#3D7BF4', '#E5489A', '#5D72C9'][i])).join('')}</g></g>
      <text x="160" y="24" text-anchor="middle" class="tat b">${L('Pantalles sí, però en equilibri', 'Pantallas sí, pero en equilibrio')}</text>`);
  },
  // abans de dormir, sense pantalles
  digSleep() {
    return tSvg(214, `<rect x="0" y="0" width="320" height="214" rx="20" fill="#2A2F63"/>${[[30, 30], [80, 60], [290, 26], [250, 70], [160, 20]].map(([x, y], i) => `<circle class="dgtw" style="--d:${i * .5}s" cx="${x}" cy="${y}" r="2" fill="#fff"/>`).join('')}<g transform="translate(270 54)"><circle r="22" fill="#FFE9A8"/><circle cx="9" cy="-6" r="19" fill="#2A2F63"/></g>
      <g transform="translate(70 150)"><rect x="-30" y="-8" width="150" height="34" rx="10" fill="#5866B0"/><rect x="-30" y="-24" width="40" height="20" rx="8" fill="#fff" opacity=".8"/><path d="M-34 -30v60M124 0v30" stroke="#8A5A33" stroke-width="7"/></g>
      <g transform="translate(232 158)"><rect x="-22" y="0" width="56" height="30" rx="4" fill="#6B4A2E"/><g class="dg-phoff">${dgPh(6, -14, .42, `<rect x="-18" y="-33" width="36" height="62" rx="4" fill="#7DF3FF" class="dg-scr"/>`)}</g></g>
      <text x="96" y="110" class="tat w b" ${tA(1.8, 'ta-fade')}>Z</text><text x="112" y="94" class="tat w b" ${tA(2.2, 'ta-fade')}>z</text><text x="124" y="80" class="tat w s" ${tA(2.6, 'ta-fade')}>z</text>`);
  },
  // notificacions: et criden l'atenció; les pots silenciar
  digNotif() {
    return tSvg(214, `${dgPh(90, 110, 1.9, `<rect x="-16" y="-30" width="32" height="54" rx="3" fill="#E8EEFF"/>`)}${[0, 1, 2, 3].map(i => `<g class="dg-notif" style="--d:${i * .45}s"><rect x="${40 + (i % 2) * 10}" y="${50 + i * 26}" width="${110 - (i % 2) * 20}" height="20" rx="8" fill="#fff" stroke="#DCE4FA"/><circle cx="${52 + (i % 2) * 10}" cy="${60 + i * 26}" r="5" fill="${['#EF5A5A', '#3D7BF4', '#F08A24', '#8B5CF6'][i]}"/></g>`).join('')}
      <g ${tA(2.6, 'ta-in')}><rect x="190" y="70" width="120" height="64" rx="16" fill="#fff" stroke="#DCE4FA" stroke-width="2"/>${dgIc('moon', 202, 90, 24, '#5D72C9')}<text x="232" y="98" class="tat s">${L('Silenci', 'Silencio')}</text><g class="dg-tog" style="--t:3s"><rect x="234" y="104" width="46" height="22" rx="11" class="dg-tbg"/><circle cx="246" cy="115" r="8" fill="#fff" class="dg-tk"/></g></g>
      <text x="160" y="204" text-anchor="middle" class="tat s" ${tA(3.4, 'ta-fade')}>${L('Tu decideixes quan mires el mòbil, no el mòbil', 'Tú decides cuándo miras el móvil, no el móvil')}</text>`);
  },
  // «un vídeo més»: la cadena que no s'acaba
  digAutoplay() {
    return tSvg(214, `${[0, 1, 2, 3, 4].map(i => `<g ${tA(.2 + i * .45, 'ta-in')}><rect x="${14 + i * 60}" y="40" width="52" height="80" rx="10" fill="#14204A"/><path d="M${34 + i * 60} 70v20l16-10z" fill="#fff"/><text x="${40 + i * 60}" y="140" text-anchor="middle" class="tat s">${i < 4 ? L('un més', 'uno más') : '…'}</text></g>`).join('')}
      <g ${tA(3, 'ta-wob')}><rect x="100" y="156" width="120" height="40" rx="20" fill="#EF5A5A"/><rect x="128" y="168" width="16" height="16" rx="3" fill="#fff"/><text x="178" y="182" text-anchor="middle" class="tat w b">${L('Prou!', '¡Basta!')}</text></g>`);
  },
  // una campanya: un missatge clar que arriba a molta gent
  digCampaign() {
    return tSvg(214, `${dgIc('mega', 20, 60, 90, '#E5489A')}${[0, 1, 2].map(i => `<path class="dgwave" style="--d:${i * .35}s" d="M${120 + i * 16} ${80 - i * 12}q${14 + i * 4} ${25 + i * 12} 0 ${50 + i * 24}" fill="none" stroke="#E5489A" stroke-width="4" stroke-linecap="round"/>`).join('')}
      ${[['aina', 210, 20], ['pau', 262, 50], ['jana', 214, 90], ['nil', 266, 130], ['iris', 214, 156]].map(([id, x, y], i) => `<g ${tA(.6 + i * .3, 'ta-pop')}>${dgAv(id, x, y, 40)}</g>`).join('')}
      <g ${tA(2.6, 'ta-in')}><rect x="14" y="166" width="180" height="34" rx="12" fill="#14204A"/><text x="104" y="188" text-anchor="middle" class="tat w s">${L('Un missatge · una imatge · una acció', 'Un mensaje · una imagen · una acción')}</text></g>`);
  }
};
if (typeof TANI !== 'undefined') Object.assign(TANI, TANI_DIG);
