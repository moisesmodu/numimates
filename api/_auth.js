import { createHmac, timingSafeEqual } from 'crypto';
import { sql } from './_lib.js';
// Qui fa la petició al panell:
//  · administrador (el Moisés): capçalera x-profe = PROFE_PASS → ho veu i ho gestiona tot
//  · docent: capçalera x-docent = testimoni signat (12 h) → només els seus grups (o tot el centre si és admin de centre)
const same = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); };
const b64 = s => Buffer.from(s).toString('base64url');
const sign = s => createHmac('sha256', process.env.SESSION_SECRET || '').update(s).digest('base64url');
export function makeToken(d) { const p = b64(JSON.stringify({ id: d.id, exp: Date.now() + 12 * 3600e3 })); return p + '.' + sign(p); }
function readToken(t) {
  const [p, s] = String(t || '').split('.'); if (!p || !s || !process.env.SESSION_SECRET || !same(s, sign(p))) return null;
  try { const d = JSON.parse(Buffer.from(p, 'base64url').toString()); return d.exp > Date.now() ? d : null; } catch { return null; }
}
export async function who(req) {
  const pp = req.headers['x-profe'];
  if (pp && process.env.PROFE_PASS && same(pp, process.env.PROFE_PASS)) return { admin: true };
  const d = readToken(req.headers['x-docent']); if (!d) return null;
  const r = (await sql`SELECT d.id, d.nom, d.email, d.rol, d.centre_id, c.nom AS centre FROM mates.docents d LEFT JOIN mates.centres c ON c.id = d.centre_id WHERE d.id = ${d.id} AND d.actiu`)[0];
  return r ? { docent: r } : null;
}
// grups que pot veure un docent: els seus, o tots els del centre si és admin de centre
export async function groupsOf(me) {
  if (me.admin) return sql`SELECT g.*, c.nom AS centre, d.nom AS docent FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id LEFT JOIN mates.docents d ON d.id = g.docent_id WHERE g.actiu ORDER BY c.nom, g.nom`;
  const d = me.docent;
  return d.rol === 'admin_centre'
    ? sql`SELECT g.*, c.nom AS centre, dd.nom AS docent FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id LEFT JOIN mates.docents dd ON dd.id = g.docent_id WHERE g.actiu AND g.centre_id = ${d.centre_id} ORDER BY g.nom`
    : sql`SELECT g.*, c.nom AS centre, ${d.nom} AS docent FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id WHERE g.actiu AND g.docent_id = ${d.id} ORDER BY g.nom`;
}
