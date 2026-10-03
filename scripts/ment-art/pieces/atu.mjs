import { C, shadowEl } from '../base.mjs';
// Verd sí, vermell no: un semàfor de sobretaula amb el llum verd encès i brillant; el vermell i l'ambre apagats
export default () => {
  const cx = 985, w = 250, top = 48, step = 182, r = 74;
  const x0 = cx - w / 2, x1 = cx + w / 2, bottom = top + step * 3 + 22;
  const H0 = '#24524A', H1 = '#30665C', H2 = '#163A34';
  const ly = i => top + 102 + i * step;
  const hood = (y) => {
    const R = r + 24, ri = r + 4, yb = y + 14;
    return `<path d="M${cx - R} ${yb} A ${R} ${R} 0 0 1 ${cx + R} ${yb} H${cx + ri} A ${ri} ${ri} 0 0 0 ${cx - ri} ${yb}Z" fill="#102B26"/>
    <path d="M${cx + 4} ${y - R} A ${R} ${R} 0 0 1 ${cx + R} ${yb} H${cx + R - 12} A ${R - 12} ${R - 12} 0 0 0 ${cx + 4} ${y - R + 12}Z" fill="${H1}"/>
    <path d="M${cx - R + 6} ${y - 10} A ${R - 6} ${R - 6} 0 0 1 ${cx + 10} ${y - R + 6}" stroke="#3E7A6E" stroke-width="4" fill="none" opacity=".6" stroke-linecap="round"/>`;
  };
  const off = (y, base, dark, hi) => `
    <circle cx="${cx}" cy="${y}" r="${r + 6}" fill="${H2}"/>
    <circle cx="${cx}" cy="${y}" r="${r}" fill="${base}"/>
    <path d="M${cx - r} ${y} A ${r} ${r} 0 0 1 ${cx + r} ${y} A ${r} ${r * .55} 0 0 0 ${cx - r} ${y}Z" fill="${dark}" opacity=".8"/>
    <path d="M${cx + 14} ${y - r + 18} A ${r - 16} ${r - 16} 0 0 1 ${cx + r - 16} ${y - 6}" stroke="${hi}" stroke-width="8" fill="none" stroke-linecap="round" opacity=".45"/>`;
  const gy = ly(2);
  const on = `
    <circle cx="${cx}" cy="${gy}" r="${r + 6}" fill="${H2}"/>
    <circle cx="${cx}" cy="${gy}" r="${r}" fill="url(#agreen)"/>
    <path d="M${cx - r} ${gy} A ${r} ${r} 0 0 1 ${cx + r} ${gy} A ${r} ${r * .7} 0 0 0 ${cx - r} ${gy}Z" fill="#3E8E3E" opacity=".35"/>
    ${[0, 1, 2, 3].map(i => `<circle cx="${cx}" cy="${gy}" r="${18 + i * 16}" fill="none" stroke="#F1FFE9" stroke-width="2" opacity="${.35 - i * .07}"/>`).join('')}
    <path d="M${cx + 14} ${gy - r + 18} A ${r - 16} ${r - 16} 0 0 1 ${cx + r - 16} ${gy - 6}" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" opacity=".8"/>`;
  return `<defs>
    <radialGradient id="agreen" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#F3FFE8"/><stop offset=".35" stop-color="#B9F2A2"/><stop offset=".8" stop-color="#6CCB62"/><stop offset="1" stop-color="#4FA84A"/></radialGradient>
    <radialGradient id="ahalo"><stop offset="0" stop-color="#9FE88C" stop-opacity=".95"/><stop offset=".3" stop-color="#9FE88C" stop-opacity=".45"/><stop offset="1" stop-color="#A8EC93" stop-opacity="0"/></radialGradient>
  </defs>
  <!-- halo verd -->
  <ellipse cx="${cx}" cy="${gy - 60}" rx="430" ry="300" fill="url(#ahalo)"/>
  <!-- ombra a la paret i a la taula -->
  <rect x="${x0 - 70}" y="${top + 30}" width="${w + 40}" height="${bottom - top - 40}" rx="40" fill="${C.ink2}" opacity=".2" filter="url(#soft)"/>
  ${shadowEl(cx - 60, 692, 230, 24, .6)}
  <!-- peu -->
  <ellipse cx="${cx}" cy="684" rx="132" ry="26" fill="${H2}"/>
  <path d="M${cx - 132} 672 A132 26 0 0 0 ${cx + 132} 672 V684 A132 26 0 0 1 ${cx - 132} 684Z" fill="${H2}"/>
  <ellipse cx="${cx}" cy="670" rx="132" ry="26" fill="${H0}"/>
  <path d="M${cx + 10} 645 A132 26 0 0 1 ${cx + 132} 670 A 132 26 0 0 1 ${cx + 60} 694 Z" fill="${H1}" opacity=".7"/>
  <rect x="${cx - 26}" y="${bottom - 10}" width="52" height="${672 - bottom + 10}" fill="${H2}"/>
  <rect x="${cx + 2}" y="${bottom - 10}" width="24" height="${672 - bottom + 10}" fill="${H0}"/>
  <!-- placa del darrere -->
  <rect x="${x0 - 40}" y="${top - 26}" width="${w + 80}" height="${bottom - top + 52}" rx="34" fill="${C.gold2}"/>
  <rect x="${x0 - 34}" y="${top - 26}" width="${w + 74}" height="${bottom - top + 46}" rx="32" fill="${C.gold}"/>
  <rect x="${x0 - 22}" y="${top - 14}" width="${w + 50}" height="${bottom - top + 22}" rx="24" fill="none" stroke="${C.gold2}" stroke-width="3" opacity=".5"/>
  <!-- caixa -->
  <rect x="${x0 + 10}" y="${top}" width="${w}" height="${bottom - top}" rx="30" fill="${H2}"/>
  <rect x="${x0}" y="${top}" width="${w}" height="${bottom - top}" rx="30" fill="${H0}"/>
  <path d="M${x1 - 70} ${top} H${x1 - 30} a30 30 0 0 1 30 30 V${bottom - 30} a30 30 0 0 1 -30 30 H${x1 - 70}Z" fill="${H1}"/>
  <rect x="${x0 + 26}" y="${top + 10}" width="${w - 52}" height="8" rx="4" fill="#fff" opacity=".18"/>
  ${off(ly(0), '#6F2E28', '#4E1E1A', '#E9A79C')}
  ${off(ly(1), '#76591F', '#523D14', '#F0D58F')}
  ${on}
  ${hood(ly(0))}${hood(ly(1))}${hood(ly(2))}
  <ellipse cx="${cx}" cy="${gy + 6}" rx="150" ry="130" fill="url(#ahalo)" opacity=".55"/>
  <!-- llum verda a la taula -->
  <ellipse cx="${cx + 30}" cy="610" rx="230" ry="34" fill="#B5F09F" opacity=".14" filter="url(#soft)"/>`;
};
