import { C } from '../base.mjs';
// Igual que abans?: cartes grans dretes en un faristol de fusta, ventall amb K i R darrere i una R gran al davant; un feix de cartes a la taula
const SERIF = `font-family="'Bodoni 72', Didot, 'Playfair Display', Georgia, serif" font-weight="700"`;
const CW = 300, CH = 430;
const card = (L, { big = true, tone = C.white, letterCol = C.ink } = {}) => `
  <rect x="${-CW / 2 + 6}" y="${-CH}" width="${CW}" height="${CH}" rx="20" fill="#D9CFBC"/>
  <rect x="${-CW / 2}" y="${-CH}" width="${CW}" height="${CH}" rx="20" fill="${tone}"/>
  <rect x="${-CW / 2}" y="${-CH * .42}" width="${CW}" height="${CH * .42}" rx="20" fill="url(#nbk-sh)"/>
  <rect x="${-CW / 2 + 16}" y="${-CH + 16}" width="${CW - 32}" height="${CH - 32}" rx="12" fill="none" stroke="${C.gold}" stroke-width="3"/>
  <text x="${-CW / 2 + 40}" y="${-CH + 72}" text-anchor="middle" font-size="50" ${SERIF} fill="${letterCol}">${L}</text>
  <path d="M${-CW / 2 + 40} ${-CH + 86} l 9 13 l -9 13 l -9 -13z" fill="${C.coral}"/>
  <g transform="rotate(180 0 ${-CH / 2})"><text x="${-CW / 2 + 40}" y="${-CH + 72}" text-anchor="middle" font-size="50" ${SERIF} fill="${letterCol}">${L}</text><path d="M${-CW / 2 + 40} ${-CH + 86} l 9 13 l -9 13 l -9 -13z" fill="${C.coral}"/></g>
  ${big ? `<text x="0" y="${-CH / 2 + 92}" text-anchor="middle" font-size="260" ${SERIF} fill="${letterCol}">${L}</text>` : ''}`;
export default () => {
  const px = 985, py = 640; // base del ventall (dins el faristol)
  // faristol: bloc de fusta amb ranura
  const sx0 = px - 290, sx1 = px + 290, sy = py + 4, sh = 54, dd = 40;
  const standTop = `<path d="M${sx0} ${sy} L ${sx1} ${sy} L ${sx1 + 34} ${sy - dd} L ${sx0 + 34} ${sy - dd}Z" fill="#DDAE77"/>`;
  const stand = `<path d="M${sx1} ${sy} L ${sx1 + 34} ${sy - dd} L ${sx1 + 34} ${sy - dd + sh} L ${sx1} ${sy + sh}Z" fill="#D49C5E"/>
    <rect x="${sx0}" y="${sy}" width="${sx1 - sx0}" height="${sh}" fill="${C.wood}"/><rect x="${sx0}" y="${sy + sh - 12}" width="${sx1 - sx0}" height="12" fill="${C.wood2}" opacity=".5"/>
    <path d="M${sx0 + 20} ${sy + 18} q 160 -6 300 4 t 240 -2" stroke="${C.wood2}" stroke-width="2" fill="none" opacity=".35"/><path d="M${sx0 + 60} ${sy + 34} q 200 6 380 -4" stroke="${C.wood2}" stroke-width="2" fill="none" opacity=".3"/>`;
  const slot = `<path d="M${sx0 + 26} ${sy - 14} L ${sx1 - 6} ${sy - 14} L ${sx1 + 6} ${sy - 26} L ${sx0 + 38} ${sy - 26}Z" fill="#6E4722"/>`;
  // ombres
  const shadows = `<path d="M${sx0 - 10} ${sy + sh} L ${sx1 + 30} ${sy + sh - 10} L ${sx1 - 120} ${sy + sh + 70} L ${sx0 - 260} ${sy + sh + 80}Z" fill="${C.ink2}" opacity=".42" filter="url(#nbk-b18)"/>
    <path d="M${px - 200} ${py - 380} L ${px + 120} ${py - 420} L ${px + 80} ${py} L ${px - 320} ${py}Z" fill="${C.ink2}" opacity=".0"/>`;
  // feix de cartes a la taula (en perspectiva obliqua)
  const deck = (() => { const x = 520, y = 690; let s = `<ellipse cx="${x - 30}" cy="${y + 20}" rx="190" ry="34" fill="${C.ink2}" opacity=".45" filter="url(#nbk-b10)"/>`;
    for (let i = 0; i < 9; i++) { const yy = y - i * 4; s += `<path d="M${x - 150} ${yy} L ${x + 110} ${yy - 14} L ${x + 160} ${yy - 82} L ${x - 90} ${yy - 70}Z" fill="${i % 2 ? '#E9E1CF' : '#D9CFBC'}"/>`; }
    const yt = y - 36; s += `<path d="M${x - 150} ${yt} L ${x + 110} ${yt - 14} L ${x + 160} ${yt - 82} L ${x - 90} ${yt - 70}Z" fill="${C.em2}"/>
      <path d="M${x - 130} ${yt - 6} L ${x + 102} ${yt - 19} L ${x + 145} ${yt - 76} L ${x - 85} ${yt - 64}Z" fill="none" stroke="${C.gold}" stroke-width="3"/>
      <path d="M${x + 5} ${yt - 58} L ${x + 30} ${yt - 42} L ${x + 5} ${yt - 26} L ${x - 20} ${yt - 42}Z" fill="${C.gold}"/>`; return s; })();
  return `<defs><linearGradient id="nbk-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.ink}" stop-opacity="0"/><stop offset="1" stop-color="${C.ink}" stop-opacity=".10"/></linearGradient>
    <filter id="nbk-b18" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="18"/></filter><filter id="nbk-b10" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter><filter id="nbk-b8" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter></defs>
  ${shadows}${deck}${standTop}${slot}<clipPath id="nbk-clip"><rect x="0" y="0" width="1600" height="${sy - 18}"/></clipPath><g clip-path="url(#nbk-clip)">
  <g transform="translate(${px - 60} ${py - 18}) rotate(-15)"><g transform="translate(-12 10)" opacity=".35" filter="url(#nbk-b8)"><rect x="${-CW / 2}" y="${-CH}" width="${CW}" height="${CH}" rx="20" fill="${C.ink2}"/></g>${card('K', { tone: '#F7F2E6' })}</g>
  <g transform="translate(${px + 64} ${py - 22}) rotate(13)"><g transform="translate(-14 10)" opacity=".35" filter="url(#nbk-b8)"><rect x="${-CW / 2}" y="${-CH}" width="${CW}" height="${CH}" rx="20" fill="${C.ink2}"/></g>${card('R', { tone: '#F7F2E6' })}</g>
  <g transform="translate(${px} ${py - 6}) rotate(-1.5)"><g transform="translate(-22 12)" opacity=".4" filter="url(#nbk-b8)"><rect x="${-CW / 2}" y="${-CH}" width="${CW}" height="${CH}" rx="20" fill="${C.ink2}"/></g>${card('R')}
    <path d="M${-CW / 2 + 30} ${-CH + 30} L ${-CW / 2 + 120} ${-CH + 30} L ${-CW / 2 + 30} ${-CH + 160}Z" fill="#fff" opacity=".25"/></g></g>
  ${stand}`;
};
