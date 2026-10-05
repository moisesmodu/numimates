import { readFileSync } from 'fs';
import { join } from 'path';
import { who } from './_auth.js';
// Material del professor de Numi Tech (guies de les sessions i solucionari). Només per a docents amb sessió al panell:
// els fitxers no es poden baixar directament (vercel.json els redirigeix) i aquí es lliuren amb el testimoni x-docent.
const FILES = { c1: 'tech-guide-c1.js', c2: 'tech-guide-c2.js', c3: 'tech-guide-c3.js', c5: 'tech-guide-c5.js', sol: 'tech-sol.js' };
export default async function handler(req, res) {
  const q = String((req.query && req.query.f) || '');
  // «vista d'alumne» de l'app: només comprova que el testimoni del docent és vàlid
  if (q === 'me') { const me = await who(req); res.setHeader('cache-control', 'private, no-store'); res.setHeader('content-type', 'application/json'); res.statusCode = me ? 200 : 401; return res.end(JSON.stringify({ ok: !!me })); }
  const f = FILES[q];
  if (!f) { res.statusCode = 404; return res.end('// no existeix'); }
  const me = await who(req);
  if (!me) { await new Promise(r => setTimeout(r, 400)); res.statusCode = 401; res.setHeader('content-type', 'application/javascript; charset=utf-8'); return res.end('// cal entrar al panell del professor'); }
  res.setHeader('content-type', 'application/javascript; charset=utf-8');
  res.setHeader('cache-control', 'private, no-store');
  res.end(readFileSync(join(process.cwd(), f), 'utf8'));
}
