import { C } from '../base.mjs';
// Sudoku de sumes (killer): full amb una graella 6×6 de gàbies de colors pastel, vores puntejades i sumes petites, sobre un tauler de dibuix; un llapis davant
const f = n => +n.toFixed(1);
let GROUND = [];
const shadowEl = (cx, cy, rx, ry = 22, op = .35) => (GROUND.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.ink2}" opacity="${op}" filter="url(#kilS)"/>`), '');
const FONT = `font-family="Montserrat, 'Helvetica Neue', Arial, sans-serif"`;
const SOL = ['123456', '456123', '231564', '564231', '312645', '645312'];
const CAGE = ['AABBCC', 'DAEBFC', 'DEEGFF', 'HHGGIJ', 'KLLIIJ', 'KKLMMJ'];
const TINT = ['#CFE8DE', '#F6E2B0', '#F4CCBE', '#DDD3EC'];
const DASH = ['#24806E', '#B5852B', '#B85A43', '#6E5296'];
const FILLED = { '0,3': 1, '1,1': 1, '2,4': 1, '3,2': 1, '4,5': 1, '5,0': 1, '3,0': 1 };
const render = () => {
  const bx = 640, by = 112, bw = 560, bh = 610, rot = -2.5;
  const px = bx + 32, py = by + 52, pw = bw - 64, ph = bh - 82;
  const cell = 74, gs = cell * 6, gx = px + (pw - gs) / 2, gy = py + 30;
  const at = (r, c) => (r < 0 || c < 0 || r > 5 || c > 5) ? null : CAGE[r][c];
  // colors de les gàbies (veïnes diferents)
  const ids = [...new Set(CAGE.join(''))], col = {};
  ids.forEach((id, i) => {
    const adj = new Set();
    for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) if (CAGE[r][c] === id) [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dr, dc]) => { const o = at(r + dr, c + dc); if (o && o !== id && col[o] !== undefined) adj.add(col[o]); });
    for (let k = 0; k < 4; k++) { const t = (i + k) % 4; if (!adj.has(t)) { col[id] = t; break; } }
  });
  let fills = '', dashes = '', labels = '', digits = '';
  const ins = 6, seen = new Set();
  for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) {
    const id = CAGE[r][c], x = gx + c * cell, y = gy + r * cell, t = col[id];
    fills += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${TINT[t]}"/>`;
    const same = (dr, dc) => at(r + dr, c + dc) === id;
    // T, B, L, R
    const sides = [
      { n: [-1, 0], p: [0, -1], q: [0, 1], dp: [-1, -1], dq: [-1, 1], seg: (s, e) => [x + s, y + ins, x + e, y + ins] },
      { n: [1, 0], p: [0, -1], q: [0, 1], dp: [1, -1], dq: [1, 1], seg: (s, e) => [x + s, y + cell - ins, x + e, y + cell - ins] },
      { n: [0, -1], p: [-1, 0], q: [1, 0], dp: [-1, -1], dq: [1, -1], seg: (s, e) => [x + ins, y + s, x + ins, y + e] },
      { n: [0, 1], p: [-1, 0], q: [1, 0], dp: [-1, 1], dq: [1, 1], seg: (s, e) => [x + cell - ins, y + s, x + cell - ins, y + e] }];
    for (const sd of sides) {
      if (same(...sd.n)) continue;
      const s = same(...sd.p) ? (same(...sd.dp) ? -ins : 0) : ins;
      const e = same(...sd.q) ? (same(...sd.dq) ? cell + ins : cell) : cell - ins;
      const [x1, y1, x2, y2] = sd.seg(s, e);
      dashes += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${DASH[t]}" stroke-width="2.6" stroke-dasharray="7 5" stroke-linecap="round"/>`;
    }
    if (!seen.has(id)) {
      seen.add(id);
      let sum = 0; for (let rr = 0; rr < 6; rr++) for (let cc = 0; cc < 6; cc++) if (CAGE[rr][cc] === id) sum += +SOL[rr][cc];
      labels += `<rect x="${x + 3}" y="${y + 3}" width="${sum > 9 ? 30 : 20}" height="22" rx="4" fill="${TINT[t]}"/><text x="${x + 8}" y="${y + 21}" font-size="17" font-weight="700" fill="${C.ink}" ${FONT}>${sum}</text>`;
    }
    if (FILLED[`${r},${c}`]) digits += `<text x="${x + cell / 2 + 3}" y="${y + cell / 2 + 15}" text-anchor="middle" font-size="40" font-weight="600" fill="${C.ink}" ${FONT}>${SOL[r][c]}</text>`;
  }
  let lines = '';
  for (let i = 0; i <= 6; i++) {
    const wv = i % 3 === 0 ? 3.6 : 1.2, wh = i % 2 === 0 ? 3.6 : 1.2;
    lines += `<line x1="${gx + i * cell}" y1="${gy}" x2="${gx + i * cell}" y2="${gy + gs}" stroke="${C.ink}" stroke-width="${wv}" opacity="${wv > 2 ? .95 : .35}"/>`;
    lines += `<line x1="${gx}" y1="${gy + i * cell}" x2="${gx + gs}" y2="${gy + i * cell}" stroke="${C.ink}" stroke-width="${wh}" opacity="${wh > 2 ? .95 : .35}"/>`;
  }
  const clip = (x) => `<g transform="translate(${x} ${by + 18})">
      <rect x="-34" y="0" width="68" height="40" rx="8" fill="#8E9894"/><rect x="-34" y="-4" width="68" height="40" rx="8" fill="#C3CBC8"/>
      <rect x="-26" y="2" width="52" height="7" rx="3.5" fill="#fff" opacity=".6"/>
      <path d="M-20 -2 v-16 a20 14 0 0 1 40 0 v16" stroke="#A8B1AE" stroke-width="6" fill="none"/></g>`;
  const board = `<g transform="rotate(${rot} ${bx + bw / 2} ${by + bh})">
    <rect x="${bx + 10}" y="${by + 10}" width="${bw}" height="${bh}" rx="18" fill="${C.wood2}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="18" fill="${C.wood}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="18" fill="none" stroke="#fff" stroke-width="2" opacity=".2"/>
    <path d="M${bx + 18} ${by + 60} q 8 220 -2 520 M${bx + bw - 16} ${by + 100} q -8 200 4 460" stroke="${C.wood2}" stroke-width="3" fill="none" opacity=".35"/>
    <rect x="${px + 8}" y="${py + 10}" width="${pw}" height="${ph}" fill="${C.ink2}" opacity=".18"/>
    <rect x="${px}" y="${py}" width="${pw}" height="${ph}" fill="${C.white}"/>
    <path d="M${px + pw - 46} ${py + ph} L${px + pw} ${py + ph - 40} V${py + ph}z" fill="#E9E1CF"/>
    <path d="M${px + pw - 46} ${py + ph} L${px + pw} ${py + ph - 40} L${px + pw - 40} ${py + ph - 44}z" fill="#D9CFB8"/>
    ${fills}${lines}${dashes}${labels}${digits}
    <rect x="${gx}" y="${gy + gs + 22}" width="160" height="8" rx="4" fill="${C.ink}" opacity=".14"/>
    ${clip(px + 70)}${clip(px + pw - 70)}
  </g>`;
  // llapis estirat a la taula
  shadowEl(640, 768, 220, 10, .55);
  const pen = `<g transform="translate(470 752) rotate(-7)">
    
    <path d="M0 -13 h300 v26 h-300z" fill="${C.ink}"/><path d="M0 -13 h300 v8 h-300z" fill="#3B6B62"/><path d="M0 5 h300 v8 h-300z" fill="${C.ink2}"/>
    <path d="M300 -13 L362 0 L300 13z" fill="#E8C49A"/><path d="M300 5 L362 0 L300 13z" fill="#C9A276"/><path d="M344 -4 L362 0 L344 4z" fill="${C.ink}"/>
    <rect x="-36" y="-14" width="38" height="28" fill="${C.gold}"/><rect x="-30" y="-14" width="4" height="28" fill="${C.gold2}"/><rect x="-18" y="-14" width="4" height="28" fill="${C.gold2}"/>
    <rect x="-70" y="-13" width="36" height="26" rx="8" fill="${C.coral}"/><rect x="-70" y="-13" width="36" height="8" rx="4" fill="#fff" opacity=".25"/>
  </g>`;
  GROUND.push(`<filter id="kilS" x="-60%" y="-400%" width="220%" height="900%"><feGaussianBlur stdDeviation="14"/></filter><filter id="kilB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <path d="M${bx + bw} ${by + bh - 8} L${bx + 10} ${by + bh - 8} L${bx - 260} ${by + bh + 64} L${bx + bw - 260} ${by + bh + 64}Z" fill="${C.ink2}" opacity=".34" filter="url(#kilB)"/>
  <path d="M${bx - 6} ${by + 30} L${bx + bw - 30} ${by + 20} L${bx + bw - 60} ${by + bh - 160} L${bx - 50} ${by + bh - 150}Z" fill="${C.ink2}" opacity=".16" filter="url(#kilB)" transform="translate(-34 26)"/>
  ${shadowEl(bx + bw / 2 - 10, by + bh + 4, bw / 2 + 10, 12, .55)}`);
  return `${board}${pen}`;
};
const build = () => { GROUND = []; const objs = render(); return { objs, ground: GROUND.join('') }; };
export const opts = { extra: build().ground };
export default () => build().objs;
