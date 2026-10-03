import { C } from '../base.mjs';
// Dígits: un rellotge-marcador de pales (split-flap) de fusta amb quatre xifres; l'última pala està caient
const DIG = ['3', '8', '5', '2'];
export default () => {
  const x0 = 560, x1 = 1320, y0 = 262, y1 = 628, dx = 26, dy = -20, r = 30; // cos frontal + profunditat obliqua
  const FONT = `font-family="DIN Condensed, 'Avenir Next Condensed', 'Helvetica Neue', Arial" font-weight="700"`;
  const mw = 156, mh = 284, gap = 20, pad = (x1 - x0 - 4 * mw - 3 * gap) / 2, my0 = y0 + (y1 - y0 - mh) / 2 - 4;
  let mods = '';
  DIG.forEach((d, i) => {
    const mx = x0 + pad + i * (mw + gap), mid = my0 + mh / 2, cx = mx + mw / 2;
    const id = 'dig-c' + i;
    mods += `<clipPath id="${id}t"><rect x="${mx}" y="${my0}" width="${mw}" height="${mh / 2 - 3}" rx="12"/></clipPath><clipPath id="${id}b"><rect x="${mx}" y="${mid + 3}" width="${mw}" height="${mh / 2 - 3}" rx="12"/></clipPath>
    <rect x="${mx - 8}" y="${my0 - 8}" width="${mw + 16}" height="${mh + 16}" rx="18" fill="#0F2A25"/>
    <rect x="${mx}" y="${my0}" width="${mw}" height="${mh / 2 - 3}" rx="12" fill="url(#dig-top)"/>
    <rect x="${mx}" y="${mid + 3}" width="${mw}" height="${mh / 2 - 3}" rx="12" fill="url(#dig-bot)"/>
    ${i === 3 ? '' : `<g clip-path="url(#${id}t)"><text x="${cx}" y="${mid + 116}" text-anchor="middle" font-size="322" ${FONT} fill="${C.cream}">${d}</text></g>`}
    <g clip-path="url(#${id}b)"><text x="${cx}" y="${mid + 116}" text-anchor="middle" font-size="322" ${FONT} fill="#E9E1CF">${i === 3 ? '9' : d}</text></g>
    <rect x="${mx}" y="${mid + 3}" width="${mw}" height="14" fill="#0F2A25" opacity=".22"/>
    <rect x="${mx - 6}" y="${mid - 3}" width="${mw + 12}" height="6" fill="#0B201C"/>
    <rect x="${mx - 12}" y="${mid - 9}" width="10" height="18" rx="3" fill="${C.gold2}"/><rect x="${mx + mw + 2}" y="${mid - 9}" width="10" height="18" rx="3" fill="${C.gold2}"/>
    <rect x="${mx + 10}" y="${my0 + 8}" width="${mw - 20}" height="6" rx="3" fill="#fff" opacity=".10"/>`;
    if (i === 3) {
      // pala que cau: la meitat de dalt de la nova xifra («2») girant cap endavant, i darrere la meitat de dalt de l'anterior («9»)
      mods += `<g clip-path="url(#${id}t)"><text x="${cx}" y="${mid + 116}" text-anchor="middle" font-size="322" ${FONT} fill="${C.cream}">${d}</text></g>`;
      const h = 84, w2 = 12, hy = mid - 3, sy = h / (mh / 2 - 3);
      mods += `<path d="M${mx - w2} ${hy - h} L ${mx + mw + w2} ${hy - h} L ${mx + mw} ${my0} L ${mx} ${my0}Z" fill="#0B201C" opacity=".0"/>
      <rect x="${mx}" y="${hy - h - 4}" width="${mw}" height="${h}" fill="#0B201C" opacity=".35" filter="url(#dig-b6)"/>
      <path d="M${mx} ${hy} L ${mx + mw} ${hy} L ${mx + mw + w2} ${hy - h} L ${mx - w2} ${hy - h}Z" fill="url(#dig-flap)"/>
      <clipPath id="dig-fl"><path d="M${mx} ${hy} L ${mx + mw} ${hy} L ${mx + mw + w2} ${hy - h} L ${mx - w2} ${hy - h}Z"/></clipPath>
      <g clip-path="url(#dig-fl)"><g transform="translate(${cx} ${hy}) scale(1.08 ${sy}) translate(${-cx} ${-hy})"><g clip-path="url(#${id}t)"><text x="${cx}" y="${mid + 116}" text-anchor="middle" font-size="322" ${FONT} fill="${C.cream}">9</text></g></g></g>
      <path d="M${mx - w2} ${hy - h} L ${mx + mw + w2} ${hy - h}" stroke="#fff" stroke-width="4" opacity=".35"/>`;
    }
  });
  return `<defs>
    <linearGradient id="dig-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F6A5F"/><stop offset="1" stop-color="#245A50"/></linearGradient>
    <linearGradient id="dig-bot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1C463F"/><stop offset="1" stop-color="#173C35"/></linearGradient>
    <linearGradient id="dig-flap" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2A6359"/><stop offset="1" stop-color="#3D7C70"/></linearGradient><linearGradient id="dig-front" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#CF9455"/><stop offset="1" stop-color="#B57A3F"/></linearGradient>
    <filter id="dig-b18" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="18"/></filter>
    <filter id="dig-b6" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter>
  </defs>
  <path d="M${x0 + 40} ${y1 - 4} L ${x1 + dx} ${y1 + dy} L ${x1 - 120} ${y1 + 60} L ${x0 - 210} ${y1 + 82}Z" fill="${C.ink2}" opacity=".42" filter="url(#dig-b18)"/>
  <rect x="${x0 + 10}" y="${y1 - 14}" width="${x1 - x0 - 4}" height="22" rx="10" fill="${C.ink2}" opacity=".5" filter="url(#dig-b6)"/>
  <rect x="${x0 + 50}" y="${y1 - 6}" width="70" height="20" rx="6" fill="#5E3D1C"/><rect x="${x1 - 120}" y="${y1 - 6}" width="70" height="20" rx="6" fill="#5E3D1C"/>
  ${[...Array(15).keys()].map(k => { const t = 1 - k / 14; return `<rect x="${x0 + dx * t}" y="${y0 + dy * t}" width="${x1 - x0}" height="${y1 - y0}" rx="${r}" fill="#D9A262"/>`; }).join('')}
  ${[...Array(15).keys()].map(k => { const t = 1 - k / 14; return `<line x1="${x0 + r * .7 + dx * t}" y1="${y0 + 2 + dy * t}" x2="${x1 - r * .7 + dx * t}" y2="${y0 + 2 + dy * t}" stroke="#E9C28C" stroke-width="4"/>`; }).join('')}
  <rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" rx="${r}" fill="url(#dig-front)"/>
  <path d="M${x0 + r} ${y0 + 3} L ${x1 - r} ${y0 + 3}" stroke="#F0CF9F" stroke-width="5" stroke-linecap="round" opacity=".8"/>
  <rect x="${x0 + 22}" y="${y0 + 20}" width="${x1 - x0 - 44}" height="${y1 - y0 - 40}" rx="18" fill="none" stroke="${C.wood2}" stroke-width="3" opacity=".45"/>
  <circle cx="${x1 + dx * .55}" cy="${(y0 + y1) / 2 + dy * .5}" r="15" fill="${C.gold2}"/><circle cx="${x1 + dx * .55 + 2}" cy="${(y0 + y1) / 2 + dy * .5 - 2}" r="9" fill="${C.gold}"/>
  ${mods}`;
};
