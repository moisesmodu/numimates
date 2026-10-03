import { sql, body, cleanCode, ok, blocked, fail, tooMany, alumneGuard, consentGuard } from './_lib.js';
import { tables, lligaOf, weekId, monthId, aliasOf, premisMes, LLIGUES, CAP } from './_lliga.js';
// POST /api/lliga { code, period: 'w'|'m', lliga? } → rànquing (20 primers, amb àlies) i la posició de l'alumne
//      { code, action: 'medalles' } → medalles guanyades
export default async function handler(req, res) {
  if (req.method !== 'POST') return ok(res, { error: 'method' }, 405);
  const b = body(req), code = cleanCode(b.code);
  if (await blocked(req, 'codi', 40)) return tooMany(res);
  await tables();
  try { await premisMes(); } catch (e) { console.error('premis', e.message); }
  let me = null;
  if (code) {
    me = (await sql`SELECT code, state, active FROM mates.alumnes WHERE code = ${code}`)[0];
    if (!me) { await fail(req, 'codi'); return ok(res, { error: 'no trobat' }, 404); }
    if (!(await alumneGuard(req, res, code))) return;
    if (!(await consentGuard(res, code))) return;   // menors: cal el sí de la família
  }
  if (b.action === 'medalles') {
    if (!me) return ok(res, { list: [] });
    const r = await sql`SELECT periode, lliga, pos, premium FROM mates.lliga_premis WHERE code = ${code} ORDER BY periode DESC LIMIT 24`;
    return ok(res, { list: r });
  }
  const lg = me ? lligaOf(me.state) : LLIGUES.includes(b.lliga) ? b.lliga : 'mates-34';
  const per = b.period === 'm' ? 'M' + monthId() : 'W' + weekId();
  const top = await sql`SELECT l.code, l.punts FROM mates.lliga l JOIN mates.alumnes a USING (code)
    WHERE l.periode = ${per} AND l.lliga = ${lg} AND a.active AND COALESCE(a.state->>'lliga', 'true') <> 'false'
    ORDER BY l.punts DESC, l.updated_at ASC LIMIT 20`;
  const rows = top.map(r => ({ a: aliasOf(r.code), p: r.punts, me: !!me && r.code === code }));
  let mine = null;
  if (me) {
    const m = (await sql`SELECT punts FROM mates.lliga WHERE code = ${code} AND periode = ${per}`)[0], p = m ? m.punts : 0;
    const pos = p ? (await sql`SELECT count(*)::int AS n FROM mates.lliga l JOIN mates.alumnes a USING (code) WHERE l.periode = ${per} AND l.lliga = ${lg} AND a.active AND COALESCE(a.state->>'lliga', 'true') <> 'false' AND l.punts > ${p}`)[0].n + 1 : null;
    mine = { a: aliasOf(code), p, pos, hidden: !!(me.state && me.state.lliga === false) };
  }
  const n = (await sql`SELECT count(*)::int AS n FROM mates.lliga WHERE periode = ${per} AND lliga = ${lg} AND punts > 0`)[0].n;
  res.setHeader('Cache-Control', 'no-store');
  return ok(res, { lliga: lg, period: per, rows, me: mine, n, cap: CAP.dia });
}
