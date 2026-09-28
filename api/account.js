import { sql, body, cleanCode, cleanUser, validUser, validPass, hashPass, checkPass, ok, blocked, fail, tooMany } from './_lib.js';
// Crea o canvia l'usuari i la contrasenya d'un alumne (el codi fa de clau) · o comprova si un usuari està lliure.
// Si l'alumne ja té contrasenya, per canviar-la cal la contrasenya actual (o que la canviï el docent des del panell).
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), user = cleanUser(b.username);
  if (b.check) return ok(res, { free: validUser(user) && !(await sql`SELECT 1 FROM mates.alumnes WHERE username = ${user}`).length });
  const code = cleanCode(b.code);
  if (!code || !validUser(user)) return ok(res, { error: 'usuari-format' }, 400);
  if (!validPass(b.password)) return ok(res, { error: 'contrasenya-format' }, 400);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  const al = (await sql`SELECT code, pass_hash FROM mates.alumnes WHERE code = ${code} AND active`)[0];
  if (!al) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
  if (al.pass_hash) {
    if (await blocked(req, 'alumne-pass', 30, 15, code)) return tooMany(res);
    if (!checkPass(String(b.old || ''), al.pass_hash)) { await fail(req, 'alumne-pass', code); return ok(res, { error: 'contrasenya-actual' }, 403); }
  }
  const taken = await sql`SELECT code FROM mates.alumnes WHERE username = ${user}`;
  if (taken.length && taken[0].code !== code) return ok(res, { error: 'usuari-ocupat' }, 409);
  await sql`UPDATE mates.alumnes SET username = ${user}, pass_hash = ${hashPass(b.password)}, state = jsonb_set(state, '{username}', to_jsonb(${user}::text)) WHERE code = ${code} AND active`;
  return ok(res, { ok: true, username: user });
}
