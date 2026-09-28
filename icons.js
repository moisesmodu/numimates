/* ---------- Icones pròpies ----------
   Les dades i els textos continuen fent servir emojis; aquest fitxer només canvia com es veuen.
   Cada emoji conegut que surt a la pantalla es converteix en una il·lustració 3D del mateix estil
   que els personatges (img/ic/<nom>.webp). Les formes de colors dels exercicis es dibuixen en SVG.
   Si cal tornar als emojis del sistema: ?ic=0 */
const ICONS_ON = (() => { try { const q = new URLSearchParams(location.search).get('ic'); if (q !== null) localStorage.setItem('numi-ic', q); return localStorage.getItem('numi-ic') !== '0'; } catch (e) { return true; } })();
const IC = {
  '💎': 'diamond', '⭐': 'star', '🔥': 'fire', '🏆': 'trophy', '🎁': 'chest', '👑': 'crown', '⚔': 'swords', '🔒': 'lock', '⏳': 'hourglass', '🏅': 'medal', '📖': 'book', '💡': 'bulb', '🍎': 'apple', '🍪': 'cookie', '🎲': 'die', '🏰': 'castle',
  '🌟': 'star2', '✨': 'sparkles', '🥇': 'gold', '🥈': 'silver', '🥉': 'bronze', '🎯': 'target', '💯': 'hundred', '🎉': 'party', '🎴': 'cards', '🧊': 'ice', '⚡': 'bolt', '🔑': 'key', '🗝': 'oldkey', '🏟': 'arena', '⌛': 'hourglass2', '⏱': 'stopwatch',
  '📨': 'envelope', '🔔': 'bell', '🔄': 'refresh', '🔁': 'repeat', '🤝': 'handshake', '🛍': 'bag', '🔓': 'unlock', '🏛': 'temple', '🛡': 'shield', '✏': 'pencil', '🎓': 'cap', '📚': 'books', '🧪': 'flask', '🧠': 'brain', '🧮': 'abacus', '📐': 'setsquare',
  '📏': 'ruler', '🔢': 'numbers', '🧩': 'puzzle', '🗺': 'map', '🧭': 'compass', '🚀': 'rocket', '🔗': 'link', '📈': 'chart', '👁': 'eye', '🕵': 'detective', '🔎': 'magnifier', '🔧': 'wrench', '📅': 'calendar', '📘': 'bluebook', '✅': 'check', '🚩': 'flag',
  '🏁': 'finish', '🤖': 'robot', '🍓': 'strawberry', '🍌': 'banana', '🍊': 'orange', '🍐': 'pear', '🍇': 'grapes', '🍋': 'lemon', '🧁': 'cupcake', '🍬': 'candy', '🍩': 'donut', '🌰': 'chestnut', '⚽': 'football', '🏀': 'basketball', '🎈': 'balloon', '🌸': 'flower',
  '🐱': 'cat', '🐶': 'dog', '🐭': 'mouse', '🐰': 'rabbit', '🐊': 'crocodile', '🚗': 'car', '🖍': 'crayon', '☀': 'sun', '☁': 'cloud', '🌙': 'moon', '🪞': 'mirror', '🍂': 'leaf', '❄': 'snowflake', '🎭': 'masks', '🎩': 'tophat', '🎧': 'headphones',
  '😍': 'love', '🙂': 'good', '😐': 'meh', '😟': 'worried', '👋': 'wave', '👤': 'person', '👧': 'girl', '👦': 'boy', '🧒': 'child', '🧑': 'adult', '🏊': 'swimmer', '🚴': 'cyclist', '🏋': 'lifter', '🏫': 'school', '🌪': 'tornado', '☄': 'comet',
  '🐣': 'hatch', '🐥': 'chick', '🦊': 'fox', '🐙': 'octopus', '🐢': 'turtle', '🐉': 'dragon', '🦉': 'owl', '🦅': 'eagle', '🐺': 'wolf', '🦁': 'lion', '🌋': 'volcano', '💫': 'dizzy', '🏎': 'racecar'
};
// formes planes dels exercicis: en vector, amb els colors de l'app
const SHP_IC = (() => {
  const svg = b => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">${b}</svg>`);
  const hi = '<ellipse cx="14" cy="13" rx="5" ry="3.2" fill="#fff" opacity=".45" transform="rotate(-30 14 13)"/>';
  const circ = (c, d) => svg(`<circle cx="20" cy="20" r="16" fill="${c}" stroke="${d}" stroke-width="2.5"/>${hi}`);
  const sq = (c, d) => svg(`<rect x="5" y="5" width="30" height="30" rx="6" fill="${c}" stroke="${d}" stroke-width="2.5"/>${hi}`);
  return {
    '🔴': circ('#FF5A5F', '#C73A40'), '🔵': circ('#36A9E1', '#1F7FB0'), '🟢': circ('#3CC46A', '#2A9C50'), '🟡': circ('#FFC93C', '#D9A200'), '⚪': circ('#FFFFFF', '#B9ACC6'),
    '🟦': sq('#36A9E1', '#1F7FB0'), '🟪': sq('#8A4FB0', '#602B7A'),
    '🔺': svg(`<path d="M20 5L36 34H4Z" fill="#FF5A5F" stroke="#C73A40" stroke-width="2.5" stroke-linejoin="round"/>${hi}`),
    '🔶': svg(`<path d="M20 3L37 20L20 37L3 20Z" fill="#FF9A3C" stroke="#D0701A" stroke-width="2.5" stroke-linejoin="round"/>${hi}`)
  };
})();
const icSrc = e => { e = e.replace(/️/g, ''); return IC[e] ? `img/ic/${IC[e]}.webp` : SHP_IC[e] || null; };
const IC_RE = new RegExp('(' + [...Object.keys(IC), ...Object.keys(SHP_IC)].sort((a, b) => b.length - a.length).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\uFE0F?', 'gu');
const IC_SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'OPTION', 'SELECT', 'TITLE', 'NOSCRIPT']);
const SVGNS = 'http://www.w3.org/2000/svg';
function icText(node) {
  const t = node.nodeValue; IC_RE.lastIndex = 0;
  if (!t || !IC_RE.test(t)) return;
  const p = node.parentNode; if (!p || IC_SKIP.has(p.nodeName) || p.closest?.('.noic')) return;
  // dins d'un SVG: <text> amb un sol emoji → <image> al mateix lloc
  if (p.namespaceURI === SVGNS) {
    const e = t.trim(), src = icSrc(e);
    if (p.nodeName !== 'text' || !src || e.replace(IC_RE, '') !== '') return;
    const fs = parseFloat(p.getAttribute('font-size')) || 16, s = fs * 1.15, anc = p.getAttribute('text-anchor');
    let x = parseFloat(p.getAttribute('x')) || 0; const y = parseFloat(p.getAttribute('y')) || 0;
    x = anc === 'middle' ? x - s / 2 : anc === 'end' ? x - s : x;
    const im = document.createElementNS(SVGNS, 'image');
    im.setAttribute('href', src); im.setAttribute('x', x); im.setAttribute('y', y - fs * .92); im.setAttribute('width', s); im.setAttribute('height', s);
    p.replaceWith(im); return;
  }
  const frag = document.createDocumentFragment(); let last = 0; IC_RE.lastIndex = 0; let m;
  while ((m = IC_RE.exec(t))) {
    if (m.index > last) frag.append(t.slice(last, m.index));
    const img = document.createElement('img'); img.className = 'ic'; img.src = icSrc(m[0]); img.alt = m[0]; img.draggable = false;
    frag.append(img); last = m.index + m[0].length;
  }
  if (last < t.length) frag.append(t.slice(last));
  p.replaceChild(frag, node);
}
function icScan(root) {
  if (!root) return;
  if (root.nodeType === 3) return icText(root);
  if (root.nodeType !== 1 || IC_SKIP.has(root.nodeName)) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), list = [];
  while (w.nextNode()) list.push(w.currentNode);
  list.forEach(icText);
}
if (ICONS_ON) {
  icScan(document.body);
  new MutationObserver(ms => ms.forEach(m => m.type === 'characterData' ? icText(m.target) : m.addedNodes.forEach(icScan)))
    .observe(document.body, { childList: true, subtree: true, characterData: true });
}
