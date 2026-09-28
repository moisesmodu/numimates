import { sql, body, ok, validPass, hashPass, checkPass, slow } from './_lib.js';
import { makeToken, who } from './_auth.js';
// Entrada dels docents al panell (correu + contrasenya) i canvi de la pròpia contrasenya.
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req);
  if (b.action === 'login') {
    // es pot entrar amb el correu o amb el nom d'usuari
    const id = String(b.email || b.usuari || '').trim().toLowerCase();
    const d = id && (await sql`SELECT id, nom, pass_hash, actiu FROM mates.docents WHERE email = ${id} OR usuari = ${id}`)[0];
    if (!d || !d.actiu || !checkPass(String(b.password || ''), d.pass_hash)) { await slow(); return ok(res, { error: 'credencials' }, 401); }
    await sql`UPDATE mates.docents SET last_login = now() WHERE id = ${d.id}`;
    return ok(res, { token: makeToken(d), nom: d.nom });
  }
  if (b.action === 'setpass') {
    const me = await who(req); if (!me || !me.docent) return ok(res, { error: 'sessio' }, 401);
    if (!validPass(b.password) || String(b.password).length < 8) return ok(res, { error: 'contrasenya-format' }, 400);
    await sql`UPDATE mates.docents SET pass_hash = ${hashPass(b.password)} WHERE id = ${me.docent.id}`;
    return ok(res, { ok: true });
  }
  return ok(res, { error: 'acció' }, 400);
}
