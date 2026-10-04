/* ===== Numi Tech · Creadors: personatges, objectes i fons de l'escenari =====
   Dibuixos propis de Numi (SVG). Cada personatge té un o més «vestits» (disfressa/costume: un dibuix diferent per
   animar-lo). r = radi per als xocs (en punts de l'escenari, a mida 100 %); w = amplada del dibuix a mida 100 %.
   Els fons fan 480 × 360. Les zones de color de cada fons (per al bloc «toca el color») són a STG_BGREG en
   coordenades de l'escenari (x, y des de baix a l'esquerra del rectangle; el (0, 0) és el centre). */

const stgSv = (vb, body) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
const stgLg = (id, a, b, x2 = 0, y2 = 1) => `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const stgRg = (id, a, b) => `<radialGradient id="${id}" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>`;
const stgEye = (x, y, r = 5, look = 1) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x + look * r * .3}" cy="${y}" r="${r * .55}" fill="#1B1D2E"/><circle cx="${x + look * r * .45}" cy="${y - r * .3}" r="${r * .2}" fill="#fff"/>`;
const STG_CHAR = (id, moods) => ({ n: moods.length, r: 34, w: 96, numi: true, svg: i => (typeof charSVG === 'function' ? charSVG(id, moods[i % moods.length]) : stgSv('0 0 120 120', '<circle cx="60" cy="60" r="40" fill="#8B5CF6"/>')).replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ') });
const STG_ART = {
  // els personatges de Numi (amb cares diferents com a vestits)
  numi: { name: 'Numi|Numi', ...STG_CHAR('numi', ['idle', 'happy', 'think', 'sad']) },
  guida: { name: 'Guida|Guida', ...STG_CHAR('guida', ['idle', 'happy', 'think', 'sad']) },
  vuit: { name: 'Vuit|Vuit', ...STG_CHAR('vuit', ['idle', 'happy', 'think', 'sad']) },
  tuga: { name: 'Tuga|Tuga', ...STG_CHAR('tuga', ['idle', 'happy', 'think', 'sad']) },
  flama: { name: 'Flama|Flama', ...STG_CHAR('flama', ['idle', 'happy', 'think', 'sad']) },
  estel: { name: 'Estel|Estel', ...STG_CHAR('estel', ['idle', 'happy', 'think', 'sad']) },
  cavaller: { name: 'Cavaller|Caballero', ...STG_CHAR('cavaller', ['idle', 'happy', 'think', 'sad']) },
  // en Bit (els retrats 3D)
  bit: { name: 'Bit|Bit', n: 4, r: 34, w: 84, svg: i => `<svg viewBox="-64 -78 128 156" xmlns="http://www.w3.org/2000/svg"><image href="img/tech/bit-${['idle', 'happy', 'wave', 'dance'][i]}.webp" x="-64" y="-78" width="128" height="156"/></svg>` },
  peix: { name: 'Peix|Pez', n: 2, r: 26, w: 84, svg: i => stgSv('0 0 100 70', `<defs>${stgLg('sgPx', '#FFB24A', '#F0601F')}${stgLg('sgPx2', '#FFD36B', '#FF9A2E')}</defs>
    <path d="M78 35 L98 ${i ? 18 : 22} L94 35 L98 ${i ? 52 : 48} Z" fill="url(#sgPx2)" stroke="#B4400F" stroke-width="2.4" stroke-linejoin="round"/>
    <ellipse cx="46" cy="35" rx="36" ry="24" fill="url(#sgPx)" stroke="#B4400F" stroke-width="2.6"/>
    <path d="M40 12 Q52 2 64 14" fill="#FF9A2E" stroke="#B4400F" stroke-width="2.4"/><path d="M44 58 Q52 66 60 57" fill="#FF9A2E" stroke="#B4400F" stroke-width="2.4"/>
    <path d="M52 16 Q60 35 52 54 M64 18 Q71 35 64 52" fill="none" stroke="#fff" stroke-width="3.4" opacity=".75"/>
    ${stgEye(26, 30, 7, -1)}<path d="M14 42 Q19 ${i ? 47 : 45} 24 42" fill="none" stroke="#7A2A08" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M${i ? 36 : 34} 44 q8 ${i ? 4 : 6} 14 0" fill="none" stroke="#FFE7B0" stroke-width="2" opacity=".7"/>`) },
  cranc: { name: 'Cranc|Cangrejo', n: 2, r: 28, w: 90, svg: i => stgSv('0 0 110 80', `<defs>${stgRg('sgCr', '#FF7F6B', '#D63A2A')}</defs>
    <g stroke="#8E1E14" stroke-width="2.4" stroke-linecap="round">${[0, 1, 2].map(k => `<path d="M${30 - k * 6} ${50 + k * 5} l-14 ${i ? 8 : 10}" /><path d="M${80 + k * 6} ${50 + k * 5} l14 ${i ? 10 : 8}"/>`).join('')}</g>
    <path d="M22 30 Q10 ${i ? 8 : 12} 26 10 Q30 20 22 30Z" fill="url(#sgCr)" stroke="#8E1E14" stroke-width="2.4"/><path d="M88 30 Q100 ${i ? 12 : 8} 84 10 Q80 20 88 30Z" fill="url(#sgCr)" stroke="#8E1E14" stroke-width="2.4"/>
    <ellipse cx="55" cy="48" rx="34" ry="22" fill="url(#sgCr)" stroke="#8E1E14" stroke-width="2.6"/>
    <path d="M45 28v-12M65 28v-12" stroke="#8E1E14" stroke-width="2.4"/>${stgEye(45, 14, 6)}${stgEye(65, 14, 6)}<path d="M48 54q7 6 14 0" fill="none" stroke="#8E1E14" stroke-width="2.6" stroke-linecap="round"/>`) },
  medusa: { name: 'Medusa|Medusa', n: 2, r: 26, w: 70, svg: i => stgSv('0 0 80 100', `<defs>${stgRg('sgMe', '#F6C8FF', '#B26BE8')}</defs>
    ${[14, 28, 42, 56, 66].map((x, k) => `<path d="M${x} 46 q${i ? 6 : -6} 12 0 24 q${i ? -6 : 6} 12 0 24" fill="none" stroke="#C88BF0" stroke-width="3.2" stroke-linecap="round" opacity=".85"/>`).join('')}
    <path d="M6 48 Q6 6 40 6 Q74 6 74 48 Q66 ${i ? 42 : 52} 57 48 Q48 ${i ? 54 : 44} 40 50 Q31 ${i ? 44 : 54} 23 48 Q14 ${i ? 52 : 42} 6 48Z" fill="url(#sgMe)" stroke="#8B3FC4" stroke-width="2.4"/>
    <ellipse cx="26" cy="18" rx="8" ry="5" fill="#fff" opacity=".55"/>${stgEye(30, 30, 5)}${stgEye(50, 30, 5)}<path d="M34 38q6 4 12 0" fill="none" stroke="#6A2A9A" stroke-width="2.2" stroke-linecap="round"/>`) },
  papallona: { name: 'Papallona|Mariposa', n: 2, r: 26, w: 80, svg: i => stgSv('0 0 100 80', `<defs>${stgLg('sgPa', '#7DE3FF', '#3D7BF4', 1, 1)}${stgLg('sgPa2', '#FFB6E1', '#E5489A', 1, 1)}</defs>
    <g transform="translate(50 40) scale(${i ? .45 : 1} 1)"><path d="M0 0 C-10 -38 -48 -40 -44 -8 C-42 8 -16 8 0 0Z" fill="url(#sgPa)" stroke="#1C3FB8" stroke-width="2.4"/><path d="M0 0 C10 -38 48 -40 44 -8 C42 8 16 8 0 0Z" fill="url(#sgPa)" stroke="#1C3FB8" stroke-width="2.4"/>
      <path d="M0 2 C-10 28 -36 30 -32 12 C-30 4 -14 2 0 2Z" fill="url(#sgPa2)" stroke="#A3205E" stroke-width="2.2"/><path d="M0 2 C10 28 36 30 32 12 C30 4 14 2 0 2Z" fill="url(#sgPa2)" stroke="#A3205E" stroke-width="2.2"/>
      <circle cx="-24" cy="-16" r="6" fill="#fff" opacity=".7"/><circle cx="24" cy="-16" r="6" fill="#fff" opacity=".7"/></g>
    <rect x="46" y="18" width="8" height="46" rx="4" fill="#3B2A55"/><path d="M48 20 q-6 -12 -12 -14 M52 20 q6 -12 12 -14" fill="none" stroke="#3B2A55" stroke-width="2.2" stroke-linecap="round"/>`) },
  ocell: { name: 'Ocell|Pájaro', n: 2, r: 26, w: 84, svg: i => stgSv('0 0 100 80', `<defs>${stgRg('sgOc', '#7FD1FF', '#2E86DE')}</defs>
    <path d="M20 44 L4 ${i ? 30 : 52} L18 50Z" fill="#1F6FB2"/><ellipse cx="48" cy="44" rx="30" ry="24" fill="url(#sgOc)" stroke="#155A94" stroke-width="2.6"/>
    <path d="M40 ${i ? 30 : 44} Q20 ${i ? 4 : 64} 56 ${i ? 32 : 50}Z" fill="#5BB8F5" stroke="#155A94" stroke-width="2.4" stroke-linejoin="round"/>
    <ellipse cx="54" cy="56" rx="14" ry="9" fill="#FFF3D6"/>${stgEye(64, 34, 7)}<path d="M76 40 L94 44 L76 50Z" fill="#FFB020" stroke="#B46A00" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M40 66l-4 10M52 68l2 10" stroke="#B46A00" stroke-width="3" stroke-linecap="round"/>`) },
  gat: { name: 'Gat|Gato', n: 2, r: 30, w: 92, svg: i => stgSv('0 0 110 100', `<defs>${stgLg('sgGa', '#FFC67A', '#E38B2C')}</defs>
    <path d="M86 70 Q108 ${i ? 46 : 60} 96 ${i ? 30 : 40}" fill="none" stroke="#C26F18" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="62" cy="70" rx="30" ry="22" fill="url(#sgGa)" stroke="#9A5410" stroke-width="2.6"/>
    ${i ? '<path d="M42 86l-6 12M56 90l2 10M72 90l-2 10M84 84l6 12" stroke="#9A5410" stroke-width="6" stroke-linecap="round"/>' : '<path d="M44 88v10M56 90v10M70 90v10M82 88v10" stroke="#9A5410" stroke-width="6" stroke-linecap="round"/>'}
    <circle cx="34" cy="40" r="26" fill="url(#sgGa)" stroke="#9A5410" stroke-width="2.6"/><path d="M14 26 L12 4 L30 16Z M54 26 L56 4 L38 16Z" fill="#E38B2C" stroke="#9A5410" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M17 20 L16 10 L25 16Z M51 20 L52 10 L43 16Z" fill="#FFB0B8"/>${stgEye(25, 38, 6)}${stgEye(44, 38, 6)}<path d="M32 48 l3 3 l3 -3Z" fill="#E5489A"/><path d="M29 54 q6 5 12 0" fill="none" stroke="#9A5410" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M10 46h12M10 52h12M48 46h12M48 52h12" stroke="#9A5410" stroke-width="1.6" stroke-linecap="round"/><path d="M40 62 q20 -10 40 0" fill="none" stroke="#C26F18" stroke-width="5" opacity=".5"/>`) },
  drac: { name: 'Drac|Dragón', n: 2, r: 34, w: 110, svg: i => stgSv('0 0 130 100', `<defs>${stgLg('sgDr', '#8EE07A', '#2FA35A')}${stgLg('sgDw', '#C9F2A6', '#5BC46A')}</defs>
    <path d="M60 46 Q${i ? 40 : 30} ${i ? 6 : 0} ${i ? 86 : 90} ${i ? 8 : 4} Q78 30 70 48Z" fill="url(#sgDw)" stroke="#1E7A42" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M24 70 Q2 74 4 54 Q12 64 24 60" fill="url(#sgDr)" stroke="#1E7A42" stroke-width="2.4"/><ellipse cx="54" cy="66" rx="34" ry="22" fill="url(#sgDr)" stroke="#1E7A42" stroke-width="2.6"/>
    <ellipse cx="56" cy="74" rx="20" ry="11" fill="#FFF0B8"/><path d="M40 86v10M66 86v10" stroke="#1E7A42" stroke-width="7" stroke-linecap="round"/>
    <path d="M78 52 Q96 26 118 40 Q124 54 108 60 Q96 62 84 64Z" fill="url(#sgDr)" stroke="#1E7A42" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M96 30 l4 -10 l4 10 M106 32 l6 -8 l2 10" fill="#FFD54A" stroke="#B46A00" stroke-width="1.8"/>${stgEye(104, 42, 6)}<circle cx="118" cy="50" r="2" fill="#1E7A42"/>
    <path d="M40 46 l6 -8 l4 8 l6 -8 l4 8" fill="#FFD54A" stroke="#B46A00" stroke-width="1.8" stroke-linejoin="round"/>${i ? '<path d="M120 54 q10 0 8 -6 q8 4 2 10 q6 6 -6 6 z" fill="#FF8A1F" opacity=".9"/>' : ''}`) },
  cotxe: { name: 'Cotxe|Coche', n: 2, r: 30, w: 110, svg: i => stgSv('0 0 130 70', `<defs>${stgLg('sgCo', '#FF6B5B', '#C62828')}${stgLg('sgCw', '#CDEBFF', '#7FB8E8')}</defs>
    <path d="M8 46 Q8 30 26 30 L38 12 Q42 8 50 8 L84 8 Q92 8 96 14 L106 30 Q122 30 122 46 L122 52 L8 52Z" fill="url(#sgCo)" stroke="#7E1414" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M44 14 L84 14 L94 30 L36 30Z" fill="url(#sgCw)" stroke="#7E1414" stroke-width="2"/><path d="M66 14v16" stroke="#7E1414" stroke-width="2.4"/>
    <rect x="112" y="36" width="10" height="6" rx="2" fill="#FFE27A"/><rect x="8" y="38" width="8" height="6" rx="2" fill="#FFB0A8"/>
    ${[34, 96].map(x => `<g transform="translate(${x} 54) rotate(${i ? 45 : 0})"><circle r="12" fill="#1F2230"/><circle r="5" fill="#C9CFDA"/><path d="M-9 0h18M0 -9v18" stroke="#8C93A6" stroke-width="2"/></g>`).join('')}`) },
  nau: { name: 'Nau espacial|Nave espacial', face: 0, n: 2, r: 30, w: 70, svg: i => stgSv('0 0 80 120', `<defs>${stgLg('sgNa', '#F4F7FF', '#B9C6E8', 1, 0)}</defs>
    <path d="M28 92 Q40 ${i ? 122 : 112} 52 92Z" fill="#FFC531"/><path d="M33 92 Q40 ${i ? 112 : 104} 47 92Z" fill="#FF6B1F"/>
    <path d="M16 70 L2 96 L22 88Z M64 70 L78 96 L58 88Z" fill="#EF5A5A" stroke="#8E1E14" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M40 4 Q66 28 62 80 Q62 92 40 92 Q18 92 18 80 Q14 28 40 4Z" fill="url(#sgNa)" stroke="#20306A" stroke-width="2.6"/>
    <circle cx="40" cy="44" r="11" fill="#3D8BFF" stroke="#20306A" stroke-width="2.6"/><circle cx="36" cy="40" r="3.5" fill="#fff" opacity=".8"/><path d="M28 18 Q40 4 52 18" fill="#EF5A5A"/>`) },
  meteorit: { name: 'Meteorit|Meteorito', n: 1, r: 26, w: 70, svg: () => stgSv('0 0 80 80', `<defs>${stgRg('sgMt', '#B9A79A', '#6B5B52')}</defs>
    <path d="M60 8 Q74 2 76 10 Q66 18 58 22Z M66 22 Q80 22 78 30 Q66 30 60 30Z" fill="#FF9A2E" opacity=".75"/>
    <path d="M10 40 Q8 18 30 14 Q52 8 62 28 Q72 50 54 64 Q34 76 18 62 Q8 52 10 40Z" fill="url(#sgMt)" stroke="#4A3C34" stroke-width="2.6"/>
    <circle cx="30" cy="34" r="7" fill="#7E6B60"/><circle cx="48" cy="52" r="5" fill="#7E6B60"/><circle cx="26" cy="54" r="3.5" fill="#7E6B60"/><path d="M24 22 q8 -4 16 0" stroke="#D9CABF" stroke-width="3" fill="none" stroke-linecap="round"/>`) },
  estrella: { name: 'Estrella|Estrella', n: 1, r: 24, w: 60, svg: () => stgSv('-30 -30 60 60', `<defs>${stgRg('sgEs', '#FFF6C2', '#F29A12')}</defs><path d="M0 -26L7.6 -9.5L25.6 -7.6L12 4.4L16 22.4L0 13.4L-16 22.4L-12 4.4L-25.6 -7.6L-7.6 -9.5Z" fill="url(#sgEs)" stroke="#C9780E" stroke-width="2.6" stroke-linejoin="round"/><path d="M-4 -10 l3 -7" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`) },
  poma: { name: 'Poma|Manzana', n: 1, r: 22, w: 56, svg: () => stgSv('0 0 60 66', `<defs>${stgRg('sgPo', '#FF8A80', '#C62828')}</defs><path d="M30 18 Q14 6 6 22 Q-2 44 18 60 Q24 64 30 60 Q36 64 42 60 Q62 44 54 22 Q46 6 30 18Z" fill="url(#sgPo)" stroke="#7E1414" stroke-width="2.4"/>
    <path d="M30 18 q2 -10 6 -14" stroke="#6B3F20" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M33 10 q10 -8 18 -2 q-8 8 -18 2Z" fill="#3CC47C" stroke="#1E7A42" stroke-width="1.6"/><ellipse cx="18" cy="28" rx="5" ry="8" fill="#fff" opacity=".45"/>`) },
  platan: { name: 'Plàtan|Plátano', n: 1, r: 22, w: 64, svg: () => stgSv('0 0 70 60', `<defs>${stgLg('sgPl', '#FFF1A1', '#F5C518')}</defs><path d="M8 14 Q14 50 52 48 Q66 46 64 40 Q36 40 22 12 Q16 4 8 14Z" fill="url(#sgPl)" stroke="#9A7A00" stroke-width="2.4" stroke-linejoin="round"/><path d="M8 14 l-4 -6" stroke="#6B5200" stroke-width="4" stroke-linecap="round"/><path d="M20 22 Q30 38 50 42" fill="none" stroke="#D9A800" stroke-width="2"/>`) },
  cistella: { name: 'Cistella|Cesta', n: 1, r: 32, w: 100, svg: () => stgSv('0 0 110 70', `<defs>${stgLg('sgCi', '#E0A866', '#9A6538')}</defs><path d="M20 26 Q55 -10 90 26" fill="none" stroke="#8A5A33" stroke-width="6" stroke-linecap="round"/>
    <path d="M6 26 H104 L94 64 Q92 68 86 68 H24 Q18 68 16 64Z" fill="url(#sgCi)" stroke="#6B3F20" stroke-width="2.6" stroke-linejoin="round"/>${[22, 40, 58, 76, 92].map(x => `<path d="M${x} 28 L${x + (x < 55 ? 4 : -4)} 66" stroke="#B57536" stroke-width="2.4"/>`).join('')}<path d="M10 40 H100 M13 52 H97" stroke="#B57536" stroke-width="2.4"/>`) },
  pilota: { name: 'Pilota|Pelota', n: 1, r: 22, w: 54, svg: () => stgSv('-30 -30 60 60', `<defs>${stgRg('sgPi', '#FFFFFF', '#C9D2E6')}</defs><circle r="27" fill="url(#sgPi)" stroke="#20306A" stroke-width="2.4"/><path d="M0 -10 L10 -3 L6 9 L-6 9 L-10 -3Z" fill="#20306A"/><path d="M0 -10 V-27 M10 -3 L25 -9 M6 9 L14 22 M-6 9 L-14 22 M-10 -3 L-25 -9" stroke="#20306A" stroke-width="2.2"/>`) },
  moneda: { name: 'Moneda|Moneda', n: 4, r: 20, w: 50, svg: i => { const sx = [1, .62, .18, .62][i]; return stgSv('-30 -30 60 60', `<defs>${stgRg('sgMo', '#FFF3A1', '#E8A317')}</defs><g transform="scale(${sx} 1)"><circle r="26" fill="url(#sgMo)" stroke="#9A6A00" stroke-width="2.6"/><circle r="18" fill="none" stroke="#C98A00" stroke-width="2.4"/>${sx > .5 ? '<text y="9" text-anchor="middle" font-size="26" font-weight="900" font-family="Lexend,sans-serif" fill="#9A6A00">N</text>' : ''}</g>`); } },
  cor: { name: 'Cor|Corazón', n: 1, r: 22, w: 56, svg: () => stgSv('0 0 60 54', `<defs>${stgRg('sgCo2', '#FF9DB3', '#E5304F')}</defs><path d="M30 50 C-6 26 4 -2 30 14 C56 -2 66 26 30 50Z" fill="url(#sgCo2)" stroke="#9E1430" stroke-width="2.6"/><ellipse cx="18" cy="16" rx="5" ry="7" fill="#fff" opacity=".5"/>`) },
  bombolla: { name: 'Bombolla|Burbuja', n: 1, r: 18, w: 44, svg: () => stgSv('-25 -25 50 50', `<circle r="22" fill="#BDEBFF" fill-opacity=".35" stroke="#7FD3F7" stroke-width="2.4"/><path d="M-10 -10 q6 -8 14 -6" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round"/><circle cx="9" cy="10" r="3" fill="#fff" opacity=".6"/>`) },
  globus: { name: 'Globus|Globo', n: 1, r: 24, w: 56, svg: () => stgSv('0 0 60 100', `<defs>${stgRg('sgGl', '#B79CFF', '#6D3FE0')}</defs><path d="M30 64 q-6 12 2 20 q6 8 -2 16" fill="none" stroke="#56628A" stroke-width="2"/><path d="M30 4 C2 4 2 46 30 64 C58 46 58 4 30 4Z" fill="url(#sgGl)" stroke="#45229E" stroke-width="2.4"/><path d="M26 64 h8 l-4 6z" fill="#6D3FE0"/><ellipse cx="20" cy="20" rx="5" ry="9" fill="#fff" opacity=".45"/>`) },
  boto: { name: 'Botó|Botón', n: 2, r: 30, w: 120, svg: i => stgSv('0 0 140 60', `<rect x="4" y="${i ? 10 : 4}" width="132" height="${i ? 44 : 46}" rx="22" fill="${i ? '#1E8A50' : '#3CC47C'}" stroke="#155A34" stroke-width="2.6"/>${i ? '' : '<rect x="4" y="44" width="132" height="10" rx="5" fill="#155A34"/>'}<path d="M50 ${i ? 22 : 16} l18 ${i ? 10 : 11} l-18 ${i ? 10 : 11}z" fill="#fff"/><text x="${i ? 92 : 92}" y="${i ? 40 : 35}" text-anchor="middle" font-size="18" font-weight="900" font-family="Lexend,sans-serif" fill="#fff">GO</text>`) },
  fletxa: { name: 'Fletxa|Flecha', n: 1, r: 22, w: 70, svg: () => stgSv('0 0 80 50', `<path d="M4 18 H48 V6 L76 25 L48 44 V32 H4Z" fill="#FFC531" stroke="#B46A00" stroke-width="2.6" stroke-linejoin="round"/>`) },
  roca: { name: 'Roca|Roca', n: 1, r: 26, w: 72, svg: () => stgSv('0 0 80 60', `<defs>${stgRg('sgRo', '#D5DAE6', '#7E879C')}</defs><path d="M6 56 Q2 30 22 16 Q40 2 58 14 Q78 28 74 56Z" fill="url(#sgRo)" stroke="#4E566A" stroke-width="2.6"/><path d="M24 24 q10 -8 20 -4" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>`) },
  bandera: { name: 'Bandera|Bandera', n: 2, r: 26, w: 56, svg: i => stgSv('0 0 60 90', `<rect x="10" y="6" width="5" height="82" rx="2.5" fill="#6B4E36"/><circle cx="12.5" cy="6" r="5" fill="#FFC531"/><path d="M15 10 Q30 ${i ? 4 : 14} 54 10 Q46 22 54 34 Q30 ${i ? 40 : 30} 15 34Z" fill="#EF5A5A" stroke="#8E1E14" stroke-width="2.2" stroke-linejoin="round"/>`) },
  regal: { name: 'Regal|Regalo', n: 1, r: 26, w: 64, svg: () => stgSv('0 0 70 70', `<rect x="6" y="26" width="58" height="40" rx="5" fill="#3D8BFF" stroke="#1C3FB8" stroke-width="2.6"/><rect x="2" y="18" width="66" height="14" rx="4" fill="#5BA0FF" stroke="#1C3FB8" stroke-width="2.6"/><path d="M35 18v48" stroke="#FFC531" stroke-width="8"/><path d="M35 18 q-18 -16 -20 -4 q2 8 20 4 q18 -16 20 -4 q-2 8 -20 4" fill="#FFC531" stroke="#B46A00" stroke-width="2"/>`) },
  alga: { name: 'Alga|Alga', n: 2, r: 20, w: 50, svg: i => stgSv('0 0 50 110', `<path d="M24 108 Q${i ? 10 : 34} 80 24 56 Q${i ? 38 : 12} 32 26 6" fill="none" stroke="#2FA35A" stroke-width="10" stroke-linecap="round"/><path d="M24 90 q-14 -6 -16 -18 M26 66 q14 -6 16 -18 M24 40 q-12 -4 -14 -14" fill="none" stroke="#5BC46A" stroke-width="5" stroke-linecap="round"/>`) },
  mascota: { name: 'Mascota|Mascota', n: 4, r: 34, w: 100, svg: i => { const mood = ['happy', 'hungry', 'sleep', 'sad'][i];
    return stgSv('0 0 120 110', `<defs>${stgRg('sgMa', '#9FE6C0', '#2FA35A')}</defs><ellipse cx="60" cy="102" rx="34" ry="6" fill="#0B2A12" opacity=".15"/>
      <path d="M30 40 L20 10 L44 28Z M90 40 L100 10 L76 28Z" fill="#2FA35A" stroke="#1E6B3A" stroke-width="2.4" stroke-linejoin="round"/>
      <path d="M18 64 Q18 26 60 26 Q102 26 102 64 Q102 100 60 100 Q18 100 18 64Z" fill="url(#sgMa)" stroke="#1E6B3A" stroke-width="2.8"/>
      <ellipse cx="60" cy="74" rx="24" ry="18" fill="#E2FFF0" opacity=".8"/>
      ${mood === 'sleep' ? '<path d="M38 56 q6 5 12 0 M70 56 q6 5 12 0" stroke="#1E3A2A" stroke-width="3" fill="none" stroke-linecap="round"/><text x="92" y="30" font-size="16" font-weight="900" fill="#3D8BFF">z</text><text x="102" y="18" font-size="12" font-weight="900" fill="#3D8BFF">z</text>' : stgEye(44, 54, 8) + stgEye(76, 54, 8)}
      ${mood === 'happy' ? '<path d="M46 74 q14 14 28 0" fill="#E5489A" stroke="#1E3A2A" stroke-width="2.4"/>' : mood === 'hungry' ? '<ellipse cx="60" cy="78" rx="9" ry="7" fill="#7A2A3A" stroke="#1E3A2A" stroke-width="2.4"/><path d="M84 70 q6 8 2 14" stroke="#7FD3F7" stroke-width="3" fill="none"/>' : mood === 'sad' ? '<path d="M46 82 q14 -10 28 0" fill="none" stroke="#1E3A2A" stroke-width="2.6" stroke-linecap="round"/><path d="M40 64 q-2 8 2 10" stroke="#7FD3F7" stroke-width="3" fill="none"/>' : '<path d="M52 78 h16" stroke="#1E3A2A" stroke-width="2.6" stroke-linecap="round"/>'}
      <circle cx="34" cy="70" r="5" fill="#FF9DB3" opacity=".7"/><circle cx="86" cy="70" r="5" fill="#FF9DB3" opacity=".7"/>`); } }
};
/* ---------- Fons (480 × 360) ---------- */
const STG_BG = {
  aquari: { name: 'Aquari|Acuario', svg: () => stgSv('0 0 480 360', `<defs>${stgLg('sbA1', '#3FC6F2', '#0F5FA8')}${stgLg('sbA2', '#F7E2A8', '#E2BE76')}</defs><rect width="480" height="360" fill="url(#sbA1)"/>
    ${[60, 170, 300, 420].map((x, k) => `<path d="M${x} 0 L${x - 40} 360 L${x + 10} 360Z" fill="#fff" opacity=".06"/>`).join('')}
    <path d="M0 310 Q80 290 160 306 T320 300 T480 304 V360 H0Z" fill="url(#sbA2)"/>${[40, 120, 380, 440].map((x, k) => `<path d="M${x} 312 q${k % 2 ? -14 : 14} -40 0 -80 q${k % 2 ? 14 : -14} -30 0 -60" fill="none" stroke="#2FA35A" stroke-width="9" stroke-linecap="round"/>`).join('')}
    <ellipse cx="250" cy="318" rx="26" ry="10" fill="#C9A06A"/><circle cx="320" cy="318" r="12" fill="#E8A3C6"/><path d="M200 330 l6 -10 l6 10 l8 -6 l-2 10Z" fill="#FF8A80"/>${[[90, 200, 6], [110, 150, 4], [400, 120, 7], [380, 80, 4], [250, 60, 5]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#fff" stroke-width="2" opacity=".6"/>`).join('')}`) },
  bosc: { name: 'Bosc|Bosque', svg: () => stgSv('0 0 480 360', `<defs>${stgLg('sbB1', '#9FDBFF', '#E6F6FF')}${stgLg('sbB2', '#7CC456', '#5FA841')}</defs><rect width="480" height="360" fill="url(#sbB1)"/>
    <circle cx="400" cy="70" r="34" fill="#FFD54A"/><path d="M0 230 Q120 170 240 220 T480 200 V360 H0Z" fill="#A6DB8A"/><path d="M0 270 Q140 230 280 268 T480 256 V360 H0Z" fill="url(#sbB2)"/>
    ${[[40, 250, 1], [110, 236, .8], [380, 240, 1.1], [450, 252, .8], [300, 250, .7]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-6" y="-10" width="12" height="40" fill="#8A5A33"/><circle cy="-30" r="30" fill="#3E9A3A"/><circle cx="-20" cy="-12" r="20" fill="#4FAE45"/><circle cx="20" cy="-14" r="22" fill="#4FAE45"/></g>`).join('')}
    <path d="M0 330 Q240 300 480 330 V360 H0Z" fill="#4C9E3A"/>${[[70, 70], [190, 50], [300, 90]].map(([x, y]) => `<g transform="translate(${x} ${y})"><ellipse rx="30" ry="12" fill="#fff"/><ellipse cx="-16" cy="-6" rx="16" ry="12" fill="#fff"/><ellipse cx="12" cy="-9" rx="18" ry="14" fill="#fff"/></g>`).join('')}`) },
  espai: { name: 'Espai|Espacio', svg: () => stgSv('0 0 480 360', `<defs>${stgRg('sbE1', '#2A2F7A', '#06081E')}${stgRg('sbE2', '#FFB27A', '#C2410C')}${stgRg('sbE3', '#9FD8FF', '#2E6BD8')}</defs><rect width="480" height="360" fill="url(#sbE1)"/>
    ${Array.from({ length: 70 }, (_, k) => `<circle cx="${(k * 137.5) % 480}" cy="${(k * 89.3) % 360}" r="${k % 7 ? 1.2 : 2.2}" fill="#fff" opacity="${.4 + (k % 5) / 8}"/>`).join('')}
    <circle cx="390" cy="80" r="42" fill="url(#sbE2)"/><ellipse cx="390" cy="80" rx="66" ry="12" fill="none" stroke="#FFD9B8" stroke-width="5" opacity=".8"/><circle cx="70" cy="300" r="90" fill="url(#sbE3)"/><path d="M20 280 q30 -20 50 0 q20 20 60 0" stroke="#fff" stroke-width="6" fill="none" opacity=".25"/>`) },
  ciutat: { name: 'Ciutat|Ciudad', svg: () => stgSv('0 0 480 360', `<defs>${stgLg('sbC1', '#FFD6A5', '#FFB3C7')}</defs><rect width="480" height="360" fill="url(#sbC1)"/><circle cx="240" cy="160" r="60" fill="#FFF0B8" opacity=".7"/>
    ${[[0, 120, 70, '#7A6FB0'], [60, 160, 60, '#9B8FD0'], [120, 90, 80, '#6A5FA0'], [200, 140, 70, '#8C80C4'], [270, 100, 90, '#7468AE'], [360, 150, 60, '#9B8FD0'], [420, 110, 60, '#6A5FA0']].map(([x, y, w, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${300 - y}" fill="${c}"/>${Array.from({ length: Math.floor((280 - y) / 26) }, (_, r) => [0, 1, 2].map(k => `<rect x="${x + 10 + k * (w - 20) / 3}" y="${y + 14 + r * 26}" width="${(w - 40) / 3}" height="12" fill="#FFE27A" opacity="${(r + k) % 3 ? .9 : .35}"/>`).join('')).join('')}`).join('')}
    <rect y="300" width="480" height="60" fill="#3A3F50"/><path d="M0 330 H480" stroke="#fff" stroke-width="4" stroke-dasharray="26 18"/>`) },
  platja: { name: 'Platja|Playa', svg: () => stgSv('0 0 480 360', `<defs>${stgLg('sbP1', '#7FD3F7', '#D9F2FF')}${stgLg('sbP2', '#3DB4E8', '#1E86C8')}${stgLg('sbP3', '#FBE7B7', '#EFCF8C')}</defs><rect width="480" height="360" fill="url(#sbP1)"/>
    <circle cx="90" cy="80" r="40" fill="#FFD54A"/><path d="M0 200 H480 V260 H0Z" fill="url(#sbP2)"/><path d="M0 214 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#fff" stroke-width="3" opacity=".6"/>
    <path d="M0 250 Q240 230 480 252 V360 H0Z" fill="url(#sbP3)"/><g transform="translate(400 250)"><path d="M0 0 Q4 -60 -10 -110" stroke="#8A5A33" stroke-width="9" fill="none"/><g transform="translate(-10 -110)"><path d="M0 0 q-40 -10 -60 14 M0 0 q40 -16 62 8 M0 0 q-14 -30 -40 -36 M0 0 q16 -32 44 -32" stroke="#3E8E3A" stroke-width="12" fill="none" stroke-linecap="round"/></g></g>`) },
  escenari: { name: 'Teatre|Teatro', svg: () => stgSv('0 0 480 360', `<defs>${stgLg('sbT1', '#3A1E5A', '#1A0E2E')}${stgLg('sbT2', '#D63A5A', '#8E1E3A', 1, 0)}${stgLg('sbT3', '#C98A4B', '#8A5A33')}</defs><rect width="480" height="360" fill="url(#sbT1)"/>
    <ellipse cx="240" cy="300" rx="200" ry="40" fill="#FFF3C4" opacity=".18"/><rect y="290" width="480" height="70" fill="url(#sbT3)"/>
    <path d="M0 0 H90 Q70 160 90 360 H0Z" fill="url(#sbT2)"/><path d="M480 0 H390 Q410 160 390 360 H480Z" fill="url(#sbT2)"/><path d="M0 0 H480 V40 Q240 70 0 40Z" fill="#B0244A"/>${[30, 60].map(x => `<path d="M${x} 0 Q${x - 10} 180 ${x} 360" stroke="#7A1430" stroke-width="3" fill="none"/><path d="M${480 - x} 0 Q${490 - x} 180 ${480 - x} 360" stroke="#7A1430" stroke-width="3" fill="none"/>`).join('')}`) },
  cel: { name: 'Cel|Cielo', svg: () => stgSv('0 0 480 360', `<defs>${stgLg('sbS1', '#5BB6F5', '#CDEBFF')}</defs><rect width="480" height="360" fill="url(#sbS1)"/>${[[80, 70, 1], [300, 50, 1.3], [200, 180, .9], [420, 200, 1.1], [60, 260, 1], [330, 300, .8]].map(([x, y, s]) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="42" ry="16" fill="#fff"/><ellipse cx="-22" cy="-8" rx="22" ry="16" fill="#fff"/><ellipse cx="16" cy="-12" rx="26" ry="20" fill="#fff"/></g>`).join('')}`) },
  parc: { name: 'Parc|Parque', svg: () => stgSv('0 0 480 360', `<defs>${stgLg('sbK1', '#AEE3FF', '#F0FAFF')}${stgLg('sbK2', '#8FD36C', '#6DB24C')}</defs><rect width="480" height="360" fill="url(#sbK1)"/><path d="M0 240 H480 V360 H0Z" fill="url(#sbK2)"/>
    <path d="M140 360 Q220 290 240 240 Q260 290 340 360Z" fill="#E8D5A8"/><g transform="translate(80 236)"><rect x="-6" y="-60" width="12" height="62" fill="#8A5A33"/><circle cy="-80" r="38" fill="#4FAE45"/></g><g transform="translate(410 230)"><rect x="-6" y="-50" width="12" height="52" fill="#8A5A33"/><circle cy="-72" r="34" fill="#62C152"/></g>
    <rect x="300" y="196" width="80" height="10" rx="3" fill="#B57536"/><rect x="306" y="206" width="6" height="30" fill="#8A5A33"/><rect x="368" y="206" width="6" height="30" fill="#8A5A33"/>${[[40, 300], [200, 320], [440, 310], [120, 330]].map(([x, y]) => `<g transform="translate(${x} ${y})"><circle r="4" fill="#FF8FB1"/><circle cx="7" r="4" fill="#FFD54A"/><circle cx="3" cy="-6" r="4" fill="#fff"/></g>`).join('')}`) },
  laberint: { name: 'Laberint|Laberinto', svg: () => { const R = STG_BGREG.laberint; return stgSv('0 0 480 360', `<rect width="480" height="360" fill="#F3F6FF"/><path d="M0 0H480V360H0Z" fill="none" stroke="#DCE4FA" stroke-width="2"/>${Array.from({ length: 12 }, (_, i) => `<path d="M${i * 40} 0V360" stroke="#E6ECFB"/>`).join('')}${Array.from({ length: 9 }, (_, i) => `<path d="M0 ${i * 40}H480" stroke="#E6ECFB"/>`).join('')}
    ${R.map(g => `<rect x="${g.r[0] + 240}" y="${180 - g.r[1] - g.r[3]}" width="${g.r[2]}" height="${g.r[3]}" rx="6" fill="${{ blue: '#3D7BF4', green: '#3CC47C', red: '#EF5A5A', yellow: '#FFC531' }[g.c]}"/>`).join('')}`); } },
  nit: { name: 'Nit|Noche', svg: () => stgSv('0 0 480 360', `<defs>${stgLg('sbN1', '#14204A', '#3A2E7A')}</defs><rect width="480" height="360" fill="url(#sbN1)"/>${Array.from({ length: 40 }, (_, k) => `<circle cx="${(k * 97.3) % 480}" cy="${(k * 41.7) % 220}" r="${k % 5 ? 1.2 : 2}" fill="#fff" opacity=".8"/>`).join('')}<circle cx="380" cy="70" r="30" fill="#FFF3C4"/><circle cx="392" cy="62" r="26" fill="#2A2560"/>
    <path d="M0 280 Q120 240 240 270 T480 260 V360 H0Z" fill="#1E3A2A"/><path d="M0 310 Q240 290 480 316 V360 H0Z" fill="#16301F"/>`) }
};
// zones de color dels fons (en coordenades de l'escenari: [x, y, amplada, alçada], amb y des de baix)
const STG_BGREG = {
  laberint: [ { c: 'blue', r: [-240, 140, 480, 40] }, { c: 'blue', r: [-240, -180, 480, 40] }, { c: 'blue', r: [-240, -140, 30, 280] }, { c: 'blue', r: [210, -140, 30, 280] },
    { c: 'blue', r: [-140, -60, 30, 200] }, { c: 'blue', r: [-40, -140, 30, 200] }, { c: 'blue', r: [60, -60, 30, 200] }, { c: 'green', r: [130, -140, 80, 50] }, { c: 'red', r: [-110, 100, 30, 40] } ],
  aquari: [ { c: 'yellow', r: [-240, -180, 480, 50] } ],
  platja: [ { c: 'blue', r: [-240, -80, 480, 60] }, { c: 'yellow', r: [-240, -180, 480, 100] } ],
  bosc: [ { c: 'green', r: [-240, -180, 480, 80] } ],
  parc: [ { c: 'green', r: [-240, -180, 480, 120] } ],
  ciutat: [ { c: 'grey', r: [-240, -180, 480, 60] } ]
};
const STG_SND = { pop: [880, .08, 'sine'], boing: [220, .25, 'triangle'], moneda: [1320, .12, 'square'], xoc: [110, .2, 'sawtooth'], victoria: [660, .4, 'triangle'], miol: [520, .3, 'sine'], timbre: [990, .3, 'sine'], laser: [1500, .15, 'sawtooth'] };
const STG_SND_N = { pop: ['pop', 'pop'], boing: ['boing', 'boing'], moneda: ['moneda', 'moneda'], xoc: ['xoc', 'choque'], victoria: ['victòria', 'victoria'], miol: ['miol', 'maullido'], timbre: ['timbre', 'timbre'], laser: ['làser', 'láser'] };
// el peix i el gat estan dibuixats mirant a l'esquerra: els girem perquè, com tots els altres, mirin cap a la dreta (direcció 90)
for (const k of ['peix', 'gat']) { const f = STG_ART[k].svg; STG_ART[k].svg = i => f(i).replace(/^(<svg[^>]*viewBox="0 0 (\d+(?:\.\d+)?) [^"]*"[^>]*>)([\s\S]*)(<\/svg>)$/, (m, a, w, body, z) => `${a}<g transform="matrix(-1 0 0 1 ${w} 0)">${body}</g>${z}`); }
// Il·lustracions 3D de Numi (img/ic, les mateixes que fa servir tota l'app): els objectes d'un sol vestit les fan servir
// en lloc del dibuix pla, i n'hi ha de noves per triar. Mides: w = amplada a l'escenari; r = radi per a «toca».
// gir per defecte: els animals es giren de costat (lr); la resta d'objectes no giren (none), com una enganxina
const STG_IC_LR = ['dog', 'fox', 'owl', 'lion', 'rabbit', 'mouse', 'chick', 'crocodile', 'eagle', 'turtle', 'racecar'];
const STG_IC = (name, ic, r, w) => ({ name, n: 1, r, w, ic, rot: STG_IC_LR.includes(ic) ? 'lr' : 'none', svg: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><image href="img/ic/${ic}.webp" x="0" y="0" width="100" height="100"/></svg>` });
Object.assign(STG_ART, {
  poma: STG_IC('Poma|Manzana', 'apple', 22, 58), platan: STG_IC('Plàtan|Plátano', 'banana', 22, 62), estrella: STG_IC('Estrella|Estrella', 'star', 24, 60),
  pilota: STG_IC('Pilota|Pelota', 'football', 22, 54), globus: STG_IC('Globus|Globo', 'balloon', 24, 62), meteorit: STG_IC('Meteorit|Meteorito', 'comet', 26, 76),
  // personatges i objectes nous
  gos: STG_IC('Gos|Perro', 'dog', 30, 84), guineu: STG_IC('Guineu|Zorro', 'fox', 30, 84), mussol: STG_IC('Mussol|Búho', 'owl', 30, 80), lleo: STG_IC('Lleó|León', 'lion', 32, 88),
  conill: STG_IC('Conill|Conejo', 'rabbit', 28, 78), ratoli: STG_IC('Ratolí|Ratón', 'mouse', 24, 66), pollet: STG_IC('Pollet|Pollito', 'chick', 24, 64), cocodril: STG_IC('Cocodril|Cocodrilo', 'crocodile', 30, 86),
  aguila: STG_IC('Àguila|Águila', 'eagle', 30, 84), tortuga: STG_IC('Tortuga|Tortuga', 'turtle', 28, 80), coet: STG_IC('Coet|Cohete', 'rocket', 30, 80), cotxecursa: STG_IC('Cotxe de curses|Coche de carreras', 'racecar', 30, 90),
  maduixa: STG_IC('Maduixa|Fresa', 'strawberry', 20, 52), raim: STG_IC('Raïm|Uvas', 'grapes', 22, 56), taronja: STG_IC('Taronja|Naranja', 'orange', 20, 52), pastis: STG_IC('Pastís|Pastel', 'cupcake', 22, 58),
  galeta: STG_IC('Galeta|Galleta', 'cookie', 20, 52), trofeu: STG_IC('Trofeu|Trofeo', 'trophy', 26, 66), diamant: STG_IC('Diamant|Diamante', 'diamond', 22, 56), clau: STG_IC('Clau|Llave', 'key', 20, 56),
  cofre: STG_IC('Cofre|Cofre', 'chest', 28, 76), corona: STG_IC('Corona|Corona', 'crown', 22, 60), bombeta: STG_IC('Bombeta|Bombilla', 'bulb', 22, 56), basquet: STG_IC('Pilota de bàsquet|Balón de baloncesto', 'basketball', 22, 54),
  llamp: STG_IC('Llamp|Rayo', 'bolt', 22, 56), foc: STG_IC('Foc|Fuego', 'fire', 24, 60), sol: STG_IC('Sol|Sol', 'sun', 30, 80), lluna: STG_IC('Lluna|Luna', 'moon', 26, 70), nuvol: STG_IC('Núvol|Nube', 'cloud', 30, 90), floc: STG_IC('Floc de neu|Copo de nieve', 'snowflake', 20, 52)
});
