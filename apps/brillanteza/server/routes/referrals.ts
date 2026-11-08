import { Hono } from "hono";
import { currentUser, requireUser } from "@app-server";
import type { Env } from "../context";
import { db, newId, type User } from "../db";

/**
 * Programa de referidos: 15 € para quien invita cuando su invitado completa la
 * primera limpieza, y 10 € de descuento para el invitado en su primera reserva.
 *
 * Las dos funciones puras (`recordReferral`, `settleRewardForEmail`) las
 * reutiliza la creación de reservas; las rutas cuelgan de ellas.
 */

export const REFERRAL_REWARD = 15;
export const REFERRAL_DISCOUNT = 10;

const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

/** Código corto derivado del id: mismo resultado que antes, sin estado extra. */
function generateCode(userId: string): string {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = (hash * 31 + userId.charCodeAt(i)) >>> 0;
  }
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += ALPHABET[hash % ALPHABET.length];
    hash = Math.floor(hash / ALPHABET.length) + 7919 * (i + 1);
  }
  return code;
}

/**
 * Registra un referido. Idempotente por email: si ya había una relación, no
 * inserta otra y devuelve el descuento según si ya se liquidó o no.
 */
export function recordReferral(
  callerId: string,
  code: string,
  email: string,
): { ok: boolean; discount: number } {
  const normalizedCode = code.trim().toUpperCase();
  const normalizedEmail = email.trim().toLowerCase();

  const owner = db
    .query("SELECT id FROM users WHERE referral_code = ?")
    .get(normalizedCode) as { id: string } | null;
  if (!owner) return { ok: false, discount: 0 };

  // Auto-referido: no permitido.
  if (owner.id === callerId) return { ok: false, discount: 0 };

  const existing = db
    .query("SELECT reward_status FROM referrals WHERE referred_email = ?")
    .get(normalizedEmail) as { reward_status: string } | null;
  if (existing) {
    return {
      ok: true,
      discount: existing.reward_status === "rewarded" ? 0 : REFERRAL_DISCOUNT,
    };
  }

  db.query(
    `INSERT INTO referrals (id, referrer_id, referred_email, reward_status, reward_amount, created_at)
     VALUES (?, ?, ?, 'pending', ?, ?)`,
  ).run(newId("ref"), owner.id, normalizedEmail, REFERRAL_REWARD, Date.now());

  return { ok: true, discount: REFERRAL_DISCOUNT };
}

/**
 * Cuando una reserva del invitado se completa, la primera relación pendiente de
 * ese email pasa a "rewarded" y se liga al usuario, para poder mostrarle
 * después que ya cobró.
 */
export function settleRewardForEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  const pending = db
    .query(
      "SELECT id FROM referrals WHERE referred_email = ? AND reward_status = 'pending'",
    )
    .get(normalized) as { id: string; referrer_id: string } | null;
  if (!pending) return false;

  db.query("UPDATE referrals SET reward_status = 'rewarded' WHERE id = ?").run(pending.id);

  const invited = db.query("SELECT id FROM users WHERE email = ?").get(normalized) as
    | { id: string }
    | null;
  if (invited) {
    db.query("UPDATE referrals SET referred_user_id = ? WHERE id = ?").run(invited.id, pending.id);
  }
  return true;
}

export const referralRoutes = new Hono<Env>();

/**
 * Código de referido del usuario, con sus estadísticas.
 *
 * El guard va aquí y no al principio a propósito: en Hono los handlers corren
 * en orden de registro, así que las rutas públicas de abajo responden sin
 * sesión.
 */
referralRoutes.get("/validate", (c) => {
  const code = (c.req.query("code") ?? "").trim().toUpperCase();
  if (!code) return c.json({ valid: false, message: "" });

  const owner = db.query("SELECT id FROM users WHERE referral_code = ?").get(code);
  if (!owner) return c.json({ valid: false, message: "Código no válido" });

  return c.json({
    valid: true,
    message: `¡Código válido! ${REFERRAL_DISCOUNT} € de descuento en tu primera reserva`,
  });
});

/** Reseñas verificadas recientes para la landing. */
referralRoutes.get("/reviews", (c) => {
  const requested = Number(c.req.query("limit") ?? 6);
  const max = Math.min(Number.isFinite(requested) ? requested : 6, 12);

  const rows = db
    .query(
      `SELECT user_id, city, rating, comment, service_type
       FROM bookings
       WHERE status = 'completed' AND rating IS NOT NULL
       ORDER BY created_at DESC
       LIMIT 80`,
    )
    .all() as {
    user_id: string;
    city: string;
    rating: number;
    comment: string | null;
    service_type: string;
  }[];

  const reviews = [];
  for (const row of rows) {
    const user = db.query("SELECT name FROM users WHERE id = ?").get(row.user_id) as
      | { name: string | null }
      | null;
    const parts = (user?.name ?? "Cliente").trim().split(/\s+/);
    reviews.push({
      name: parts.length > 1 ? `${parts[0]} ${parts[1][0]?.toUpperCase() ?? ""}.` : parts[0],
      city: row.city,
      rating: row.rating,
      comment: row.comment ?? "Servicio completado y valorado.",
      serviceType: row.service_type,
    });
    if (reviews.length >= max) break;
  }
  return c.json(reviews);
});

/** Estadísticas globales reales para la landing. */
referralRoutes.get("/stats", (c) => {
  const total = (db.query("SELECT COUNT(*) AS n FROM bookings").get() as { n: number }).n;
  const completed = (
    db.query("SELECT COUNT(*) AS n FROM bookings WHERE status = 'completed'").get() as {
      n: number;
    }
  ).n;
  const rated = db
    .query(
      "SELECT AVG(rating) AS avg FROM bookings WHERE status = 'completed' AND rating IS NOT NULL",
    )
    .get() as { avg: number | null };

  return c.json({ totalBookings: total, completed, averageRating: rated.avg });
});

// A partir de aquí, sesión obligatoria.
referralRoutes.use("*", requireUser);

/** Código de referido del usuario, con sus estadísticas. */
referralRoutes.get("/mine", (c) => {
  const user = currentUser(c);
  const code = ensureReferralCode(user);
  if (!code) return c.json(null);

  const rows = db
    .query("SELECT reward_status, reward_amount FROM referrals WHERE referrer_id = ?")
    .all(user._id) as { reward_status: string; reward_amount: number }[];

  const rewarded = rows.filter((r) => r.reward_status === "rewarded");
  return c.json({
    code,
    totalInvited: rows.length,
    totalRewarded: rewarded.length,
    earned: rewarded.reduce((sum, r) => sum + r.reward_amount, 0),
  });
});

/** Garantiza que el usuario tenga código y lo persiste si no lo tenía. */
function ensureReferralCode(user: User): string | null {
  if (user.referralCode) return user.referralCode;

  let code = generateCode(user._id);
  const clash = db.query("SELECT id FROM users WHERE referral_code = ?").get(code);
  if (clash) {
    code = `${code}${user._id.slice(-1)[0] ?? "0"}`.slice(0, 8);
  }

  db.query("UPDATE users SET referral_code = ? WHERE id = ?").run(code, user._id);
  return code;
}
