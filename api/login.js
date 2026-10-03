import { sql, body, cleanCode, cleanUser, checkPass, ok, blocked, fail, tooMany, plaOf, issueTok, alumneOk, consentOk, consentCols, isMinor } from './_lib.js';
import { subOf } from './_stripe.js';
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req);
  if (b.username) {
    const user = cleanUser(b.username);
    // per compte: 15 errors cada 15 min i, a més, 40 al dia (contrasenyes curtes dels infants)
    if (await blocked(req, 'alumne-pass', 30, 15, user) || await blocked(req, 'alumne-pass', 1e6, 1440, user, 40)) return tooMany(res);
    const r = await sql`SELECT code, name, state, pass_hash, pla, pla_fins, grup_id, stripe_sub, pla_periode, pla_cancel, stripe_status, consent, survey FROM mates.alumnes WHERE username = ${user} AND active`;
    if (!r.length || !checkPass(b.password, r[0].pass_hash)) { await fail(req, 'alumne-pass', user); return ok(res, { error: 'credencials' }, 401); }
    await issueTok(res, r[0].code);
    return ok(res, { code: r[0].code, name: r[0].name, state: r[0].state, pla: plaOf(r[0]), sub: subOf(r[0]), consent: !isMinor(r[0]) || r[0].consent === 'ok' ? 'ok' : 'needed' });
  }
  const code = cleanCode(b.code);
  if (!code) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  await consentCols();
  const r = await sql`SELECT name, state, username, pass_hash, active, xp, pla, pla_fins, grup_id, stripe_sub, pla_periode, pla_cancel, stripe_status, consent, survey FROM mates.alumnes WHERE code = ${code}`;
  if (!r.length) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
  if (!r[0].active) return ok(res, { error: 'baixa' }, 410);
  if (!(await alumneOk(req, res, code, r[0].pass_hash))) return;
  // permís de la família: 'ok' (o no cal), 'pending' (encara no) o 'needed' (compte d'abans que aviat el necessitarà)
  const a = r[0], cons = !isMinor(a) || a.consent === 'ok' ? 'ok' : a.consent === 'pending' || !consentOk(a) ? 'pending' : 'needed';
  if (cons === 'pending') return ok(res, { code, consent: cons, pla: plaOf(a) });
  return ok(res, { code, name: a.name, state: { ...a.state, xp: Math.max(a.xp | 0, (a.state || {}).xp | 0) }, username: a.username, pla: plaOf(a), sub: subOf(a), consent: cons });
}
