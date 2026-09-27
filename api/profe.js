import { sql, ok } from './_lib.js';
import { timingSafeEqual } from 'crypto';
const same = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); };
export default async function handler(req, res) {
  const pass = req.headers['x-profe'] || '';
  if (!process.env.PROFE_PASS || !same(pass, process.env.PROFE_PASS)) { await new Promise(r => setTimeout(r, 600)); return ok(res, { error: 'contrasenya' }, 401); }
  const rows = await sql`SELECT code, name, course, survey, xp, streak, best, last_day, lessons, answers, correct, created_at, updated_at,
    state->'srw' AS srw, state->'badges' AS badges FROM mates.alumnes WHERE active ORDER BY streak DESC, xp DESC`;
  return ok(res, { rows });
}
