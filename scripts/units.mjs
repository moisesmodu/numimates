// Regenera api/_units.js a partir de panel-units.js (els títols de les unitats que fan servir el panell i els informes)
import fs from 'fs';
const s = fs.readFileSync(new URL('../panel-units.js', import.meta.url), 'utf8'), m = s.match(/const UNIT_T = (\{.*\});/);
JSON.parse(m[1]);
fs.writeFileSync(new URL('../api/_units.js', import.meta.url), '// Títols de les unitats (ca|es) per als informes del servidor. Generat per scripts/units.mjs a partir de panel-units.js\nexport const UNIT_T = ' + m[1] + ';\n');
console.log('api/_units.js fet');
