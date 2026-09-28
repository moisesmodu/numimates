import { sql, ok, body, cleanCode, validPass, hashPass } from './_lib.js';
import { who, groupsOf } from './_auth.js';
import { randomInt } from 'crypto';
// Panell /profe.html. L'administrador ho veu tot i gestiona centres, docents, grups i plans.
// Un docent només veu (i gestiona) els alumnes dels seus grups; l'admin de centre, tots els del seu centre.
const L = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newCode = () => 'AULA-' + Array.from({ length: 4 }, () => L[randomInt(L.length)]).join('');
const tmpPass = () => Array.from({ length: 10 }, () => 'abcdefghjkmnpqrstuvwxyz23456789'[randomInt(31)]).join('');
const int = v => (v === '' || v == null || isNaN(+v)) ? null : +v;
const date = v => /^\d{4}-\d{2}-\d{2}$/.test(String(v || '')) ? v : null;
const PLANS = ['free', 'premium', 'escola'];

export default async function handler(req, res) {
  const me = await who(req);
  if (!me) { await new Promise(r => setTimeout(r, 600)); return ok(res, { error: 'contrasenya' }, 401); }
  const groups = await groupsOf(me), gids = groups.map(g => g.id);
  const mine = async code => me.admin || !!(await sql`SELECT 1 FROM mates.alumnes WHERE code = ${code} AND grup_id = ANY(${gids})`).length;

  if (req.method === 'POST') {
    const b = body(req), code = cleanCode(b.code);
    // --- accions sobre un alumne (admin o el seu docent) ---
    if (['setpass', 'unlock', 'off', 'treure'].includes(b.action)) {
      if (!(await mine(code))) return ok(res, { error: 'permís' }, 403);
      if (b.action === 'setpass') {
        if (!validPass(b.password)) return ok(res, { error: 'contrasenya-format' }, 400);
        const r = await sql`UPDATE mates.alumnes SET pass_hash = ${hashPass(b.password)} WHERE code = ${code} AND username IS NOT NULL RETURNING code`;
        return ok(res, r.length ? { ok: true } : { error: 'sense usuari' }, r.length ? 200 : 404);
      }
      if (b.action === 'unlock') { await sql`UPDATE mates.alumnes SET state = jsonb_set(state, '{unlockAll}', to_jsonb(${!!b.value}::boolean)) WHERE code = ${code}`; return ok(res, { ok: true }); }
      if (b.action === 'treure') { await sql`UPDATE mates.alumnes SET grup_id = NULL, pla = CASE WHEN pla = 'escola' THEN 'free' ELSE pla END WHERE code = ${code}`; return ok(res, { ok: true }); }
      if (b.action === 'off') { if (!me.admin) return ok(res, { error: 'permís' }, 403); await sql`UPDATE mates.alumnes SET active = false WHERE code = ${code}`; return ok(res, { ok: true }); }
    }
    // --- grups: l'admin a qualsevol centre; el docent al seu ---
    if (b.action === 'grup_save') {
      const nom = String(b.nom || '').trim().slice(0, 60), curs = int(b.curs);
      if (!nom) return ok(res, { error: 'nom' }, 400);
      let centre = int(b.centre_id), docent = int(b.docent_id);
      if (!me.admin) { centre = me.docent.centre_id; if (me.docent.rol !== 'admin_centre') docent = me.docent.id; }
      if (!centre) return ok(res, { error: 'centre' }, 400);
      if (b.id) {
        if (!gids.includes(+b.id)) return ok(res, { error: 'permís' }, 403);
        await sql`UPDATE mates.grups SET nom = ${nom}, curs = ${curs}, docent_id = ${docent} WHERE id = ${+b.id}`;
        return ok(res, { ok: true });
      }
      for (let t = 0; t < 8; t++) {
        const r = await sql`INSERT INTO mates.grups (centre_id, docent_id, nom, curs, codi) VALUES (${centre}, ${docent}, ${nom}, ${curs}, ${newCode()}) ON CONFLICT (codi) DO NOTHING RETURNING id, codi`;
        if (r.length) return ok(res, { ok: true, grup: r[0] });
      }
      return ok(res, { error: 'codi' }, 500);
    }
    if (b.action === 'grup_codi' || b.action === 'grup_off') {
      if (!gids.includes(+b.id)) return ok(res, { error: 'permís' }, 403);
      if (b.action === 'grup_off') { await sql`UPDATE mates.grups SET actiu = false WHERE id = ${+b.id}`; await sql`UPDATE mates.alumnes SET grup_id = NULL, pla = CASE WHEN pla = 'escola' THEN 'free' ELSE pla END WHERE grup_id = ${+b.id}`; return ok(res, { ok: true }); }
      for (let t = 0; t < 8; t++) { try { const r = await sql`UPDATE mates.grups SET codi = ${newCode()} WHERE id = ${+b.id} RETURNING codi`; return ok(res, { ok: true, codi: r[0].codi }); } catch (e) { /* codi repetit: en provem un altre */ } }
      return ok(res, { error: 'codi' }, 500);
    }
    // --- només l'administrador: centres, docents, plans ---
    if (!me.admin) return ok(res, { error: 'permís' }, 403);
    if (b.action === 'centre_save') {
      const f = { nom: String(b.nom || '').trim().slice(0, 100), tipus: ['escola', 'institut', 'academia'].includes(b.tipus) ? b.tipus : 'escola', pla: ['pilot', 'escola', 'gratuit'].includes(b.pla) ? b.pla : 'pilot', places: int(b.places), inici: date(b.inici), fi: date(b.fi), notes: String(b.notes || '').slice(0, 500) };
      if (!f.nom) return ok(res, { error: 'nom' }, 400);
      if (b.id) await sql`UPDATE mates.centres SET nom = ${f.nom}, tipus = ${f.tipus}, pla = ${f.pla}, places = ${f.places}, inici = ${f.inici}, fi = ${f.fi}, notes = ${f.notes} WHERE id = ${+b.id}`;
      else await sql`INSERT INTO mates.centres (nom, tipus, pla, places, inici, fi, notes) VALUES (${f.nom}, ${f.tipus}, ${f.pla}, ${f.places}, ${f.inici}, ${f.fi}, ${f.notes})`;
      return ok(res, { ok: true });
    }
    if (b.action === 'docent_save') {
      const nom = String(b.nom || '').trim().slice(0, 80), email = String(b.email || '').trim().toLowerCase(), rol = b.rol === 'admin_centre' ? 'admin_centre' : 'docent', centre = int(b.centre_id);
      if (!nom || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !centre) return ok(res, { error: 'dades' }, 400);
      if (b.id) { await sql`UPDATE mates.docents SET nom = ${nom}, email = ${email}, rol = ${rol}, centre_id = ${centre}, actiu = ${b.actiu !== false} WHERE id = ${+b.id}`; return ok(res, { ok: true }); }
      const p = tmpPass();
      const r = await sql`INSERT INTO mates.docents (nom, email, rol, centre_id, pass_hash) VALUES (${nom}, ${email}, ${rol}, ${centre}, ${hashPass(p)}) ON CONFLICT (email) DO NOTHING RETURNING id`;
      return r.length ? ok(res, { ok: true, password: p }) : ok(res, { error: 'ja existeix' }, 409);
    }
    if (b.action === 'docent_pass') { const p = tmpPass(); await sql`UPDATE mates.docents SET pass_hash = ${hashPass(p)} WHERE id = ${+b.id}`; return ok(res, { ok: true, password: p }); }
    if (b.action === 'pla') {
      const pla = PLANS.includes(b.pla) ? b.pla : 'free';
      await sql`UPDATE mates.alumnes SET pla = ${pla}, pla_fins = ${date(b.fins)} WHERE code = ${code}`; return ok(res, { ok: true });
    }
    if (b.action === 'assign') {
      const g = int(b.grup_id);
      await sql`UPDATE mates.alumnes SET grup_id = ${g}, pla = CASE WHEN ${g}::int IS NULL AND pla = 'escola' THEN 'free' WHEN ${g}::int IS NOT NULL THEN 'escola' ELSE pla END WHERE code = ${code}`;
      return ok(res, { ok: true });
    }
    return ok(res, { error: 'acció' }, 400);
  }

  // --- lectura ---
  const rows = await sql`SELECT code, username, name, course, survey, xp, streak, best, last_day, lessons, answers, correct, created_at, updated_at, grup_id, pla, pla_fins,
    state->'srw' AS srw, state->'tests' AS tests, state->'lang' AS lang, state->'stats'->'bests' AS bests, state->'unlockAll' AS unlock_all, state->'week' AS week, state->'stats'->'sk' AS sk, state->'reco' AS reco, state->'school' AS school, state->'album' AS album, state->'stats'->'bwins' AS bwins, state->'crowns' AS crowns, state->'exams' AS exams, state->'season' AS season
    FROM mates.alumnes WHERE active AND (${!!me.admin} OR grup_id = ANY(${gids})) ORDER BY streak DESC, xp DESC`;
  if (!me.admin) return ok(res, { me: me.docent, rows, grups: groups });
  const battles = await sql`SELECT b.code, b.kind, b.course, b.status, b.created_at, b.start_at,
    COALESCE(json_agg(json_build_object('name', j.name, 'correct', j.correct, 'ms', j.ms, 'done', j.done, 'finished', j.finished, 'card', j.card) ORDER BY j.correct DESC, j.ms) FILTER (WHERE j.sid IS NOT NULL), '[]') AS players
    FROM mates.batalles b LEFT JOIN mates.batalla_jug j USING (code) WHERE b.created_at > now() - interval '30 days' GROUP BY b.code ORDER BY b.created_at DESC LIMIT 60`;
  const trades = await sql`SELECT code, a_name, a_card, b_name, b_card, status, created_at FROM mates.canvis WHERE created_at > now() - interval '30 days' ORDER BY created_at DESC LIMIT 60`;
  let contacts = [];
  try { contacts = await sql`SELECT nom, centre, mail, cursos, lang, created_at FROM mates.contactes ORDER BY created_at DESC LIMIT 100`; } catch (e) { /* la taula es crea amb la primera petició del web */ }
  const centres = await sql`SELECT c.*, (SELECT count(*)::int FROM mates.alumnes a JOIN mates.grups g ON g.id = a.grup_id WHERE g.centre_id = c.id AND a.active) AS alumnes FROM mates.centres c ORDER BY c.nom`;
  const docents = await sql`SELECT id, nom, email, rol, centre_id, actiu, last_login FROM mates.docents ORDER BY nom`;
  return ok(res, { admin: true, rows, battles, trades, contacts, centres, docents, grups: groups });
}
