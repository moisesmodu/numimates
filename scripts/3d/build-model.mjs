// Empaqueta el renderitzador del taller 3D (scripts/3d/model3d.mjs + three.js + three-mesh-bvh + three-bvh-csg) en un sol
// fitxer: tech-model3d.js (mòdul ES, minificat; es carrega en diferit des de tech-model.js amb import('./tech-model3d.js')).
// Ús: node scripts/3d/build-model.mjs   (cal haver fet `npm install`; three, three-mesh-bvh, three-bvh-csg i esbuild són devDependencies)
import { build } from 'esbuild';
const root = new URL('../../', import.meta.url).pathname;
await build({ entryPoints: [root + 'scripts/3d/model3d.mjs'], bundle: true, format: 'esm', minify: true, target: 'es2020', outfile: root + 'tech-model3d.js', legalComments: 'eof', logLevel: 'info' });
