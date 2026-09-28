import { sql, body, cleanCode, cleanUser, checkPass, ok, blocked, fail, tooMany } from './_lib.js';
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req);
  if (b.username) {
    const user = cleanUser(b.username);
    if (await blocked(req, 'alumne-pass', 30, 15, user)) return tooMany(res);
    const r = await sql`SELECT code, name, state, pass_hash FROM mates.alumnes WHERE username = ${user} AND active`;
    if (!r.length || !checkPass(b.password, r[0].pass_hash)) { await fail(req, 'alumne-pass', user); return ok(res, { error: 'credencials' }, 401); }
    return ok(res, { code: r[0].code, name: r[0].name, state: r[0].state });
  }
  const code = cleanCode(b.code);
  if (!code) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  const r = await sql`SELECT name, state, username, active, xp FROM mates.alumnes WHERE code = ${code}`;
  if (!r.length) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
  if (!r[0].active) return ok(res, { error: 'baixa' }, 410);
  return ok(res, { code, name: r[0].name, state: { ...r[0].state, xp: Math.max(r[0].xp | 0, (r[0].state || {}).xp | 0) }, username: r[0].username });
}
