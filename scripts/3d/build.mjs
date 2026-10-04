// Empaqueta el món 3D d'en Bit (scripts/3d/bit3d.mjs + three.js) en un sol fitxer: tech-3d.js (mòdul ES, minificat).
// Ús: node scripts/3d/build.mjs   (cal haver fet `npm install`; three i esbuild són devDependencies)
import { build } from 'esbuild';
const root = new URL('../../', import.meta.url).pathname;
await build({ entryPoints: [root + 'scripts/3d/bit3d.mjs'], bundle: true, format: 'esm', minify: true, target: 'es2020', outfile: root + 'tech-3d.js', legalComments: 'eof', logLevel: 'info' });
