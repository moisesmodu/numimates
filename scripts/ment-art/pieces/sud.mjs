import { C, shadowEl } from '../base.mjs';
// Sudoku: un full de sudoku en un porta-papers, un llapis i una tassa de cafè
const f = n => +n.toFixed(1);
const FONT = `font-family="Montserrat, 'Helvetica Neue', Arial, sans-serif"`;
export default () => {
  // PORTA-PAPERS (lleugerament inclinat, recolzat a la paret)
  const bx = 640, by = 120, bw = 470, bh = 590, rot = -3;
  const px = bx + 28, py = by + 70, pw = bw - 56, ph = bh - 98;
  const cell = 42, gs = cell * 9, gx = px + (pw - gs) / 2, gy = py + 52;
  const PM = [5, 3, 8, 1, 9, 2, 7, 4, 6], RP = [1, 2, 0, 5, 3, 4, 7, 6, 8], CP = [2, 0, 1, 4, 5, 3, 7, 8, 6];
  const sol = (r, c) => PM[(RP[r] * 3 + Math.floor(RP[r] / 3) + CP[c]) % 9];
  const mask = ['101001010', '010110001', '001000110', '100010100', '010101010', '001010001', '011000100', '100011010', '010100101'];
  const pencil = { '0,1': 1, '2,3': 1, '4,4': 1 };
  let cells = '', digits = '';
  for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) {
    const x = gx + c * cell, y = gy + r * cell;
    if (r === 4 && c === 6) cells += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${C.gold}" opacity=".55"/>`;
    if (mask[r][c] === '1') digits += `<text x="${x + cell / 2}" y="${y + cell / 2 + 9}" text-anchor="middle" font-size="25" font-weight="600" fill="${C.ink}" ${FONT}>${sol(r, c)}</text>`;
    else if (pencil[`${r},${c}`]) digits += `<text x="${x + cell / 2}" y="${y + cell / 2 + 9}" text-anchor="middle" font-size="24" font-weight="500" font-style="italic" fill="#7C8B87" ${FONT}>${sol(r, c)}</text>`;
  }
  let lines = '';
  for (let i = 0; i <= 9; i++) {
    const w = i % 3 === 0 ? 3.5 : 1.3, o = i % 3 === 0 ? 1 : .55;
    lines += `<line x1="${gx}" y1="${gy + i * cell}" x2="${gx + gs}" y2="${gy + i * cell}" stroke="${C.ink}" stroke-width="${w}" opacity="${o}"/><line x1="${gx + i * cell}" y1="${gy}" x2="${gx + i * cell}" y2="${gy + gs}" stroke="${C.ink}" stroke-width="${w}" opacity="${o}"/>`;
  }
  const board = `<g transform="rotate(${rot} ${bx + bw / 2} ${by + bh})">
    <rect x="${bx + 10}" y="${by + 10}" width="${bw}" height="${bh}" rx="22" fill="${C.wood2}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="22" fill="${C.wood}"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="22" fill="none" stroke="#fff" stroke-width="2" opacity=".2"/>
    <path d="M${bx + 30} ${by + 40} q 10 200 -4 520 M${bx + bw - 22} ${by + 120} q -8 200 4 440" stroke="${C.wood2}" stroke-width="3" fill="none" opacity=".35"/>
    <rect x="${px + 8}" y="${py + 10}" width="${pw}" height="${ph}" fill="${C.ink2}" opacity=".18"/>
    <rect x="${px}" y="${py}" width="${pw}" height="${ph}" fill="${C.white}"/>
    <path d="M${px + pw - 46} ${py + ph} L${px + pw} ${py + ph - 40} V${py + ph}z" fill="#E9E1CF"/>
    <path d="M${px + pw - 46} ${py + ph} L${px + pw} ${py + ph - 40} L${px + pw - 40} ${py + ph - 44}z" fill="#D9CFB8"/>
    ${cells}${lines}${digits}
    <rect x="${gx}" y="${gy + gs + 34}" width="190" height="8" rx="4" fill="${C.ink}" opacity=".14"/>
    <rect x="${gx}" y="${gy + gs + 52}" width="120" height="8" rx="4" fill="${C.ink}" opacity=".1"/>
    <!-- pinça -->
    <rect x="${bx + bw / 2 - 96}" y="${by + 30}" width="192" height="64" rx="16" fill="#8E9894"/>
    <rect x="${bx + bw / 2 - 96}" y="${by + 26}" width="192" height="62" rx="16" fill="#C3CBC8"/>
    <rect x="${bx + bw / 2 - 80}" y="${by + 34}" width="160" height="10" rx="5" fill="#fff" opacity=".6"/>
    <rect x="${bx + bw / 2 - 96}" y="${by + 70}" width="192" height="18" rx="9" fill="#A8B1AE"/>
    <path d="M${bx + bw / 2 - 40} ${by + 28} v-16 a40 26 0 0 1 80 0 v16" stroke="#A8B1AE" stroke-width="9" fill="none"/>
    <circle cx="${bx + bw / 2 - 66}" cy="${by + 58}" r="6" fill="#8E9894"/><circle cx="${bx + bw / 2 + 66}" cy="${by + 58}" r="6" fill="#8E9894"/>
  </g>`;
  // LLAPIS (estirat a la taula, davant)
  const pen = `<g transform="translate(560 748) rotate(-9)">
    ${shadowEl(170, 26, 220, 10, .55)}
    <path d="M0 -13 h300 v26 h-300z" fill="${C.gold}"/><path d="M0 -13 h300 v8 h-300z" fill="#F3D58E"/><path d="M0 5 h300 v8 h-300z" fill="${C.gold2}"/>
    <path d="M300 -13 L362 0 L300 13z" fill="#E8C49A"/><path d="M300 5 L362 0 L300 13z" fill="#C9A276"/><path d="M344 -4 L362 0 L344 4z" fill="${C.ink}"/>
    <rect x="-36" y="-14" width="38" height="28" fill="#BFC6C4"/><rect x="-30" y="-14" width="4" height="28" fill="#8E9894"/><rect x="-18" y="-14" width="4" height="28" fill="#8E9894"/>
    <rect x="-70" y="-13" width="36" height="26" rx="8" fill="${C.coral}"/><rect x="-70" y="-13" width="36" height="8" rx="4" fill="#fff" opacity=".25"/>
  </g>`;
  // TASSA DE CAFÈ
  const cx = 1255, cb = 690;
  const cup = `${shadowEl(cx - 30, cb + 6, 120, 14, .55)}
    <ellipse cx="${cx}" cy="${cb}" rx="118" ry="24" fill="#D9CFB8"/><ellipse cx="${cx}" cy="${cb - 6}" rx="118" ry="22" fill="${C.white}"/><ellipse cx="${cx}" cy="${cb - 8}" rx="70" ry="12" fill="#E9E1CF"/>
    <path d="M${cx + 62} ${cb - 120} c 58 -6 62 74 0 72" stroke="${C.cream}" stroke-width="20" fill="none"/><path d="M${cx + 62} ${cb - 120} c 58 -6 62 74 0 72" stroke="#D9CFB8" stroke-width="6" fill="none" transform="translate(4 4)" opacity=".7"/>
    <path d="M${cx - 80} ${cb - 150} h160 l-10 112 a30 30 0 0 1 -30 26 h-80 a30 30 0 0 1 -30 -26z" fill="${C.white}"/>
    <path d="M${cx - 80} ${cb - 150} h52 l6 138 h-18 a30 30 0 0 1 -30 -26z" fill="#E9E1CF"/>
    <path d="M${cx - 78} ${cb - 126} h156 l-2 20 h-152z" fill="${C.em}"/>
    <ellipse cx="${cx}" cy="${cb - 150}" rx="80" ry="15" fill="#E9E1CF"/><ellipse cx="${cx}" cy="${cb - 148}" rx="70" ry="11" fill="#5A3324"/><ellipse cx="${cx + 14}" cy="${cb - 150}" rx="30" ry="4" fill="#8A5A3A" opacity=".7"/>
    <path d="M${cx + 50} ${cb - 100} l-6 70" stroke="#fff" stroke-width="9" opacity=".8" stroke-linecap="round"/>
    <path d="M${cx - 24} ${cb - 180} c -18 -26 18 -40 0 -70 M${cx + 18} ${cb - 176} c -18 -26 18 -40 0 -70" stroke="#fff" stroke-width="8" fill="none" opacity=".65" stroke-linecap="round"/>`;
  return `<filter id="sudB" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <path d="M${bx + bw} ${by + bh - 8} L${bx + 10} ${by + bh - 8} L${bx - 260} ${by + bh + 64} L${bx + bw - 260} ${by + bh + 64}Z" fill="${C.ink2}" opacity=".34" filter="url(#sudB)"/>
  <path d="M${bx - 6} ${by + 30} L${bx + bw - 30} ${by + 20} L${bx + bw - 60} ${by + bh - 160} L${bx - 50} ${by + bh - 150}Z" fill="${C.ink2}" opacity=".16" filter="url(#sudB)" transform="translate(-34 26)"/>
  ${shadowEl(bx + bw / 2 - 10, by + bh + 4, bw / 2 + 10, 12, .55)}
  ${board}${cup}${pen}`;
};
