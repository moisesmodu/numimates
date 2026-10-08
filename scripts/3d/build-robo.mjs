// Empaqueta l'arena 3D de Tech Robòtica (scripts/3d/robo3d.mjs + three.js) en un sol fitxer: tech-robo3d.js (mòdul ES, minificat).
// Ús: node scripts/3d/build-robo.mjs   (cal haver fet `npm install`; three i esbuild són devDependencies)
import { build } from 'esbuild';
const root = new URL('../../', import.meta.url).pathname;
await build({ entryPoints: [root + 'scripts/3d/robo3d.mjs'], bundle: true, format: 'esm', minify: true, target: 'es2020', outfile: root + 'tech-robo3d.js', legalComments: 'eof', logLevel: 'info' });
