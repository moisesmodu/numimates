import { neon } from '@neondatabase/serverless';
export const sql = neon(process.env.DATABASE_URL);
export const cleanCode = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 20);
export function body(req) { try { return typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); } catch { return {}; } }
export function summary(s) {
  const st = s.stats || {};
  return { xp: s.xp | 0, streak: s.streak | 0, best: s.best | 0, last_day: s.lastDay || null, lessons: st.lessons | 0, answers: st.answers | 0, correct: st.correct | 0, course: s.course | 0 };
}
export function ok(res, data, status = 200) { res.setHeader('Cache-Control', 'no-store'); res.status(status).json(data); }
