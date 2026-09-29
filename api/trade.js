import { sql, body, cleanCode, ok, blocked, fail, tooMany } from './_lib.js';
import { randomInt } from 'crypto';
// Intercanvi de cartes entre alumnes amb un codi. Només cartes repetides (ho controla l'app) i 1 per 1.
// Estats: open (A ofereix) → offered (B proposa la seva) → done (A accepta) · reject · cancel · expired.
// Cada app aplica la seva part quan veu l'estat final (les cartes ofertes queden «guardades» mentrestant).
const WORDS = ['CANVI', 'TRUC', 'PACTE', 'OFERTA', 'MERCAT', 'AGORA'];
const HOURS = 48;
const first = n => String(n || '').replace(/[<>&"'`\\]/g, '').trim().split(/\s+/)[0].slice(0, 20) || 'Alumne';
const cleanT = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 14);
const cleanCard = c => (typeof c === 'string' && /^[a-z]{2,12}$/.test(c)) ? c : null;
const view = (t, sid) => {
  const expired = ['open', 'offered'].includes(t.status) && Date.now() > new Date(t.created_at).getTime() + HOURS * 3600e3;
  return { code: t.code, status: expired ? 'expired' : t.status, role: t.a_sid === sid ? 'a' : t.b_sid === sid ? 'b' : null, a_name: t.a_name, a_card: t.a_card, b_name: t.b_name, b_card: t.b_card, created: t.created_at };
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), sid = cleanCode(b.code), act = b.action;
  if (!sid) return ok(res, { error: 'codi' }, 400);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  const me = (await sql`SELECT a.name, g.opts FROM mates.alumnes a LEFT JOIN mates.grups g ON g.id = a.grup_id AND g.actiu WHERE a.code = ${sid} AND a.active`)[0];
  if (!me) { await fail(req, 'codi'); return ok(res, { error: 'alumne' }, 404); }
  // «mode escola»: el docent pot apagar els intercanvis del grup (també aquí, no només a l'app)
  if (me.opts && me.opts.intercanvis === false && (act === 'create' || act === 'offer')) return ok(res, { error: 'escola-off' }, 403);
  const name = first(b.name || me.name);

  if (act === 'create') {
    const card = cleanCard(b.card); if (!card) return ok(res, { error: 'carta' }, 400);
    const open = await sql`SELECT count(*)::int AS n FROM mates.canvis WHERE a_sid = ${sid} AND status IN ('open', 'offered') AND created_at > now() - interval '48 hours'`;
    if (open[0].n >= 5) return ok(res, { error: 'massa' }, 429);
    for (let t = 0; t < 8; t++) {
      const code = WORDS[randomInt(WORDS.length)] + '-' + randomInt(1000, 10000);
      const r = await sql`INSERT INTO mates.canvis (code, a_sid, a_name, a_card) VALUES (${code}, ${sid}, ${name}, ${card}) ON CONFLICT DO NOTHING RETURNING *`;
      if (r.length) return ok(res, view(r[0], sid));
    }
    return ok(res, { error: 'codi' }, 500);
  }
  if (act === 'mine') {
    const rows = await sql`SELECT * FROM mates.canvis WHERE (a_sid = ${sid} OR b_sid = ${sid}) AND created_at > now() - interval '30 days' ORDER BY created_at DESC LIMIT 20`;
    return ok(res, { list: rows.map(t => view(t, sid)) });
  }
  // un codi d'intercanvi que no existeix compta com a intent fallit (no es poden anar provant codis)
  if (await blocked(req, 'canvi', 60)) return tooMany(res);
  const code = cleanT(b.tcode);
  const t = code && (await sql`SELECT * FROM mates.canvis WHERE code = ${code}`)[0];
  if (!t) { await fail(req, 'canvi'); return ok(res, { error: 'no-existeix' }, 404); }
  const v = view(t, sid);
  if (act === 'view') return ok(res, v);
  if (v.status === 'expired') return ok(res, { error: 'caducat' }, 410);

  if (act === 'offer') {
    const card = cleanCard(b.card); if (!card) return ok(res, { error: 'carta' }, 400);
    if (t.a_sid === sid) return ok(res, { error: 'teu' }, 409);
    const r = await sql`UPDATE mates.canvis SET b_sid = ${sid}, b_name = ${name}, b_card = ${card}, status = 'offered', updated_at = now() WHERE code = ${code} AND status = 'open' RETURNING *`;
    return r.length ? ok(res, view(r[0], sid)) : ok(res, { error: 'ocupat' }, 409);
  }
  if (act === 'accept' || act === 'reject') {
    if (t.a_sid !== sid) return ok(res, { error: 'no-teu' }, 403);
    const r = await sql`UPDATE mates.canvis SET status = ${act === 'accept' ? 'done' : 'reject'}, updated_at = now() WHERE code = ${code} AND status = 'offered' RETURNING *`;
    return r.length ? ok(res, view(r[0], sid)) : ok(res, { error: 'estat' }, 409);
  }
  if (act === 'cancel') {
    if (t.a_sid !== sid) return ok(res, { error: 'no-teu' }, 403);
    const r = await sql`UPDATE mates.canvis SET status = 'cancel', updated_at = now() WHERE code = ${code} AND status IN ('open', 'offered') RETURNING *`;
    return r.length ? ok(res, view(r[0], sid)) : ok(res, { error: 'estat' }, 409);
  }
  return ok(res, { error: 'acció' }, 400);
}
