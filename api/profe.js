import { sql, ok, body, cleanCode, validPass, hashPass, dropToks } from './_lib.js';
import { who, groupsOf } from './_auth.js';
import { STRIPE_KEY, stripe, stripeMode, setCancel, setupStripe } from './_stripe.js';
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
        const r = await sql`UPDATE mates.alumnes SET pass_hash = ${hashPass(b.password)} WHERE code = ${code} AND username IS NOT NULL RETURNING code`; if (r.length) await dropToks(code);
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
      // la coordinació només pot donar el grup a un docent del seu centre (si no, un docent d'un altre centre en veuria els alumnes)
      if (!me.admin && docent && docent !== me.docent.id && !(await sql`SELECT 1 FROM mates.docents WHERE id = ${docent} AND centre_id = ${centre}`).length) return ok(res, { error: 'permís' }, 403);
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
    // tema que es treballa ara a classe (l'app el posa a la pantalla principal i hi barreja un 30 % de repàs)
    // i «mode escola»: el docent pot apagar les batalles i els intercanvis de cartes per al seu grup
    if (b.action === 'grup_tema' || b.action === 'grup_opts') {
      if (!gids.includes(+b.id)) return ok(res, { error: 'permís' }, 403);
      if (b.action === 'grup_tema') {
        const tema = /^c\d{1,2}-\d{1,2}$/.test(String(b.tema || '')) ? b.tema : null;
        await sql`UPDATE mates.grups SET tema = ${tema}, tema_at = ${tema ? new Date().toISOString() : null} WHERE id = ${+b.id}`;
        return ok(res, { ok: true, tema });
      }
      const o = b.opts || {}, opts = Object.fromEntries(['batalles', 'intercanvis', 'xat'].map(k => [k, o[k] !== false]));
      await sql`UPDATE mates.grups SET opts = ${JSON.stringify(opts)}::jsonb WHERE id = ${+b.id}`;
      return ok(res, { ok: true, opts });
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
      // nom d'usuari: el que posi l'admin o, si no, la part del correu abans de l'arrova
      const usuari = (String(b.usuari || '').trim().toLowerCase() || email.split('@')[0]).replace(/[^a-z0-9._-]/g, '').slice(0, 30) || null;
      if (!nom || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !centre) return ok(res, { error: 'dades' }, 400);
      try {
        // el rol «admin» no es pot posar ni treure des del panell (i un administrador no es pot desactivar)
        if (b.id) { await sql`UPDATE mates.docents SET nom = ${nom}, email = ${email}, usuari = ${usuari}, rol = CASE WHEN rol = 'admin' THEN 'admin' ELSE ${rol} END, centre_id = ${centre}, actiu = (rol = 'admin' OR ${b.actiu !== false}) WHERE id = ${+b.id}`; return ok(res, { ok: true }); }
        const p = tmpPass();
        const r = await sql`INSERT INTO mates.docents (nom, email, usuari, rol, centre_id, pass_hash) VALUES (${nom}, ${email}, ${usuari}, ${rol}, ${centre}, ${hashPass(p)}) ON CONFLICT (email) DO NOTHING RETURNING id, usuari`;
        return r.length ? ok(res, { ok: true, password: p, usuari: r[0].usuari }) : ok(res, { error: 'ja existeix' }, 409);
      } catch (e) { return ok(res, { error: 'usuari ocupat' }, 409); }
    }
    if (b.action === 'docent_pass') { const p = tmpPass(); await sql`UPDATE mates.docents SET pass_hash = ${hashPass(p)} WHERE id = ${+b.id}`; return ok(res, { ok: true, password: p }); }
    // subscripció de Stripe d'un alumne: cancel·lar al final del període o desfer-ho (només l'administrador)
    if ((b.action === 'sub_cancel' || b.action === 'sub_resume') && me.admin) {
      if (!STRIPE_KEY) return ok(res, { error: 'sense subscripció' }, 409);
      let c; try { c = await setCancel(code, b.action === 'sub_resume'); } catch (e) { return ok(res, { error: 'stripe' }, 502); }
      if (c.error) return ok(res, { error: c.error }, c.error === 'sense subscripció' ? 409 : 502);
      return ok(res, { ok: true });
    }
    // supressió de veritat (dret de supressió o final del contracte amb un centre): només l'administrador.
    // S'esborra l'alumne i el que el vincula a famílies; a batalles i intercanvis s'hi treu el nom i el codi.
    if (b.action === 'esborra' && me.admin) {
      const a = (await sql`SELECT stripe_sub FROM mates.alumnes WHERE code = ${code}`)[0];
      if (!a) return ok(res, { error: 'no trobat' }, 404);
      if (a.stripe_sub) return ok(res, { error: 'subscripció' }, 409);
      await sql`DELETE FROM mates.batalla_jug WHERE sid = ${code}`;
      await sql`UPDATE mates.canvis SET a_sid = NULL, a_name = '—' WHERE a_sid = ${code}`;
      await sql`UPDATE mates.canvis SET b_sid = NULL, b_name = '—' WHERE b_sid = ${code}`;
      try { await sql`DELETE FROM mates.familia_fills WHERE code = ${code}`; await sql`DELETE FROM mates.familia_links WHERE code = ${code}`; } catch (e) { }
      try { await sql`DELETE FROM mates.xat_us WHERE code = ${code}`; await sql`DELETE FROM mates.fails WHERE k = ${'ac:' + code}`; } catch (e) { }
      try { await sql`UPDATE mates.batalles SET host = NULL WHERE host = ${code}`; } catch (e) { }
      await sql`DELETE FROM mates.alumnes WHERE code = ${code}`;
      return ok(res, { ok: true });
    }
    // prepara el compte de Stripe (producte, preus, portal i webhook) amb la clau que hi hagi a Vercel
    if (b.action === 'stripe_setup' && me.admin) {
      if (!STRIPE_KEY) return ok(res, { error: 'sense clau' }, 409);
      try { return ok(res, { ok: true, ...(await setupStripe()) }); } catch (e) { return ok(res, { error: e.message }, 502); }
    }
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

  // --- panell de control de l'administrador: tots els usuaris (també els de baixa), plans i cobraments ---
  if (me.admin && req.query && req.query.v === 'usuaris') {
    const users = await sql`SELECT a.code, a.username, a.name, a.course, a.xp, a.lessons, a.answers, a.correct, a.streak, a.last_day, a.created_at, a.active, a.grup_id,
      a.pla, a.pla_fins, a.pla_periode, a.stripe_status, a.pla_cancel, a.pla_des, a.stripe_customer, (a.stripe_sub IS NOT NULL) AS stripe, a.survey->>'curs' AS curs, CASE WHEN a.state->>'variant' = 'ment' THEN 'ment' WHEN a.state->>'variant' = 'pro' OR COALESCE((a.state->>'maxCourse')::numeric, a.course, 0) >= 6 THEN 'pro' ELSE 'mates' END AS variant, g.nom AS grup, c.nom AS centre
      FROM mates.alumnes a LEFT JOIN mates.grups g ON g.id = a.grup_id LEFT JOIN mates.centres c ON c.id = g.centre_id ORDER BY a.created_at DESC`;
    let cobrat = null;
    if (STRIPE_KEY) {
      try {
        // factures pagades dels últims 31 dies (i del mes en curs), directament de Stripe
        const now = new Date(), m0 = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1) / 1000, d30 = Math.floor(Date.now() / 1000) - 30 * 86400;
        const inv = await stripe(`invoices?status=paid&limit=100&created[gte]=${Math.min(m0, d30)}`);
        const sum = f => inv.data.filter(f).reduce((t, i) => t + (i.amount_paid || 0), 0);
        cobrat = { d30: sum(i => i.created >= d30), mes: sum(i => i.created >= m0), n30: inv.data.filter(i => i.created >= d30).length, mes_n: inv.data.filter(i => i.created >= m0).length, mes_inici: new Date(m0 * 1000).toISOString().slice(0, 10) };
      } catch (e) { cobrat = { error: true }; }
    }
    // famílies de la zona de famílies (les taules es creen amb el primer ús)
    let families = null;
    try {
      const fam = await sql`SELECT code, count(*)::int AS n FROM mates.familia_fills GROUP BY code`, m = new Map(fam.map(r => [r.code, r.n]));
      users.forEach(u => u.fam = m.get(u.code) || 0);
      families = (await sql`SELECT count(*)::int AS n, count(*) FILTER (WHERE EXISTS (SELECT 1 FROM mates.familia_fills ff WHERE ff.familia_id = f.id))::int AS amb FROM mates.families f`)[0];
    } catch (e) { }
    return ok(res, { users, families, stripe: { mode: stripeMode(), cobrat } });
  }
  // --- lectura ---
  const rows = await sql`SELECT code, username, name, course, survey, xp, streak, best, last_day, lessons, answers, correct, created_at, updated_at, grup_id, pla, pla_fins,
    state->'tests' AS tests, state->'lang' AS lang, state->'unlockAll' AS unlock_all, state->'week' AS week, state->'stats'->'sk' AS sk, state->'reco' AS reco, state->'school' AS school, state->'album' AS album, state->'stats'->'bwins' AS bwins, state->'crowns' AS crowns, state->'exams' AS exams, state->'days' AS days
    FROM mates.alumnes WHERE active AND (${!!me.admin} OR grup_id = ANY(${gids})) ORDER BY streak DESC, xp DESC`;
  if (!me.admin) return ok(res, { me: me.docent, rows, grups: groups });
  const battles = await sql`SELECT b.code, b.kind, b.course, b.status, b.created_at, b.start_at,
    COALESCE(json_agg(json_build_object('name', j.name, 'correct', j.correct, 'ms', j.ms, 'done', j.done, 'finished', j.finished, 'card', j.card) ORDER BY j.correct DESC, j.ms) FILTER (WHERE j.sid IS NOT NULL), '[]') AS players
    FROM mates.batalles b LEFT JOIN mates.batalla_jug j USING (code) WHERE b.created_at > now() - interval '30 days' GROUP BY b.code ORDER BY b.created_at DESC LIMIT 60`;
  const trades = await sql`SELECT code, a_name, a_card, b_name, b_card, status, created_at FROM mates.canvis WHERE created_at > now() - interval '30 days' ORDER BY created_at DESC LIMIT 60`;
  let contacts = [];
  try { contacts = await sql`SELECT nom, centre, mail, cursos, lang, created_at FROM mates.contactes ORDER BY created_at DESC LIMIT 100`; } catch (e) { /* la taula es crea amb la primera petició del web */ }
  const centres = await sql`SELECT c.*, (SELECT count(*)::int FROM mates.alumnes a JOIN mates.grups g ON g.id = a.grup_id WHERE g.centre_id = c.id AND a.active) AS alumnes FROM mates.centres c ORDER BY c.nom`;
  const docents = await sql`SELECT id, nom, email, usuari, rol, centre_id, actiu, last_login FROM mates.docents ORDER BY nom`;
  return ok(res, { admin: true, me: me.docent || null, rows, battles, trades, contacts, centres, docents, grups: groups });
}
