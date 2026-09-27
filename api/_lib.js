import { neon } from '@neondatabase/serverless';
export const sql = neon(process.env.DATABASE_URL);
export const cleanCode = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 20);
export function body(req) { try { return typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); } catch { return {}; } }
export function summary(s) {
  const st = s.stats || {};
  return { xp: s.xp | 0, streak: s.streak | 0, best: s.best | 0, last_day: s.lastDay || null, lessons: st.lessons | 0, answers: st.answers | 0, correct: st.correct | 0, course: s.course | 0 };
}
export function ok(res, data, status = 200) { res.setHeader('Cache-Control', 'no-store'); res.status(status).json(data); }
import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';
export const cleanUser = u => String(u || '').trim().toLowerCase();
export const validUser = u => /^[a-z0-9._-]{3,20}$/.test(u);
export const validPass = p => typeof p === 'string' && p.length >= 4 && p.length <= 60;
export function hashPass(p) { const salt = randomBytes(16).toString('hex'); return salt + ':' + scryptSync(p, salt, 32).toString('hex'); }
export function checkPass(p, h) {
  if (!h || typeof p !== 'string') return false;
  const [salt, hex] = h.split(':'), a = Buffer.from(hex, 'hex'), b = scryptSync(p, salt, 32);
  return a.length === b.length && timingSafeEqual(a, b);
}
export const slow = () => new Promise(r => setTimeout(r, 700));
