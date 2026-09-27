import { sql, body, cleanCode, cleanUser, checkPass, slow, ok } from './_lib.js';
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req);
  if (b.username) {
    const r = await sql`SELECT code, name, state, pass_hash FROM mates.alumnes WHERE username = ${cleanUser(b.username)} AND active`;
    if (!r.length || !checkPass(b.password, r[0].pass_hash)) { await slow(); return ok(res, { error: 'credencials' }, 401); }
    return ok(res, { code: r[0].code, name: r[0].name, state: r[0].state });
  }
  const code = cleanCode(b.code);
  if (!code) return ok(res, { error: 'codi' }, 400);
  const r = await sql`SELECT name, state, username FROM mates.alumnes WHERE code = ${code} AND active`;
  if (!r.length) { await slow(); return ok(res, { error: 'no trobat' }, 404); }
  return ok(res, { code, name: r[0].name, state: r[0].state, username: r[0].username });
}
