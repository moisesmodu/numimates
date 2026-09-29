import { createHmac, createHash, timingSafeEqual } from 'crypto';
import { sql, blocked, fail } from './_lib.js';
// Qui fa la petició al panell:
//  · administrador (el Moisés): entra amb PROFE_PASS i rep un testimoni signat d'administrador (8 h) → ho veu i ho gestiona tot.
//    La contrasenya no es guarda al navegador. (La capçalera x-profe = PROFE_PASS continua servint per a scripts.)
//    També pot ser un docent amb rol «admin» (entra amb usuari i contrasenya com els altres).
//  · docent: capçalera x-docent = testimoni signat (12 h) → només els seus grups (o tot el centre si és admin de centre)
const same = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); };
const b64 = s => Buffer.from(s).toString('base64url');
const sign = s => createHmac('sha256', process.env.SESSION_SECRET || '').update(s).digest('base64url');
// pv = empremta de la contrasenya: si el docent la canvia (o l'admin la reinicia), els testimonis anteriors deixen de valer
const pvOf = h => createHash('sha256').update(String(h || '')).digest('base64url').slice(0, 12);
export function makeToken(d) { const p = b64(JSON.stringify({ id: d.id, pv: pvOf(d.pass_hash), exp: Date.now() + 12 * 3600e3 })); return p + '.' + sign(p); }
// sessió de la zona de famílies (60 dies): només identifica la família; no dona accés al panell
export function famToken(id) { const p = b64(JSON.stringify({ fam: id, exp: Date.now() + 60 * 864e5 })); return p + '.' + sign(p); }
export function famOf(t) { const d = readToken(t); return d && Number.isInteger(d.fam) ? d.fam : null; }
export function adminToken() { const p = b64(JSON.stringify({ adm: 1, exp: Date.now() + 8 * 3600e3 })); return p + '.' + sign(p); }
// comprova la contrasenya d'administrador amb límit d'intents
export async function adminPass(req, p) {
  if (!p || !process.env.PROFE_PASS) return false;
  if (await blocked(req, 'admin', 6, 30, 'admin', 40)) return false;
  if (same(p, process.env.PROFE_PASS)) return true;
  await fail(req, 'admin', 'admin'); return false;
}
function readToken(t) {
  const [p, s] = String(t || '').split('.'); if (!p || !s || !process.env.SESSION_SECRET || !same(s, sign(p))) return null;
  try { const d = JSON.parse(Buffer.from(p, 'base64url').toString()); return d.exp > Date.now() ? d : null; } catch { return null; }
}
export async function who(req) {
  const pp = req.headers['x-profe'];
  if (pp) return (await adminPass(req, pp)) ? { admin: true } : null;
  const d = readToken(req.headers['x-docent']); if (!d || d.fam) return null;
  if (d.adm === 1) return { admin: true };
  const r = (await sql`SELECT d.id, d.nom, d.email, d.rol, d.centre_id, d.pass_hash, c.nom AS centre FROM mates.docents d LEFT JOIN mates.centres c ON c.id = d.centre_id WHERE d.id = ${d.id} AND d.actiu`)[0];
  if (!r || (d.pv && d.pv !== pvOf(r.pass_hash))) return null;
  delete r.pass_hash;
  return r.rol === 'admin' ? { admin: true, docent: r } : { docent: r };
}
// grups que pot veure un docent: els seus, o tots els del centre si és admin de centre
export async function groupsOf(me) {
  if (me.admin) return sql`SELECT g.*, c.nom AS centre, d.nom AS docent FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id LEFT JOIN mates.docents d ON d.id = g.docent_id WHERE g.actiu ORDER BY c.nom, g.nom`;
  const d = me.docent;
  return d.rol === 'admin_centre'
    ? sql`SELECT g.*, c.nom AS centre, dd.nom AS docent FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id LEFT JOIN mates.docents dd ON dd.id = g.docent_id WHERE g.actiu AND g.centre_id = ${d.centre_id} ORDER BY g.nom`
    : sql`SELECT g.*, c.nom AS centre, ${d.nom} AS docent FROM mates.grups g JOIN mates.centres c ON c.id = g.centre_id WHERE g.actiu AND g.docent_id = ${d.id} ORDER BY g.nom`;
}
