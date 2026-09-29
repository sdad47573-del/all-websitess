import {
  createAuthRoutes,
  createFreebuffVerifier,
  createOtp,
  createSessions,
  type BaseEnv,
} from "@app-server";
import { db, toUser, type User } from "./db";
import { env } from "./env";

/**
 * Todo lo que las apps comparten sobre sesiones y acceso, montado una vez.
 *
 * Cada app llama a `createAppAuth` con sus nombres de tabla y su mappers, y ya
 * tiene sesiones, OTP, invitado y canje de freebuff funcionando.
 */

export type Env = BaseEnv<User>;

export const sessions = createSessions({
  db,
  sessionsTable: "sessions",
  usersTable: "users",
  cookieName: "patitas_session",
  idPrefix: "ses",
  secret: env.authSecret,
  ttlSeconds: env.sessionTtlSeconds,
  secureCookies: env.isProd,
});

export const authRoutes = createAuthRoutes<User>({
  db,
  usersTable: "users",
  freebuffColumn: "freebuff_subject",
  idPrefix: "usr",
  sessions,
  toUser,
  otp: createOtp(
    {
      deleteFor: (identifier) =>
        db.query("DELETE FROM verification_codes WHERE identifier = ?").run(identifier),
      insert: (identifier, codeHash, salt, expiresAt) =>
        db
          .query(
            `INSERT INTO verification_codes (id, identifier, salt, code_hash, attempts, created_at, expires_at)
             VALUES (?, ?, ?, ?, 0, ?, ?)`,
          )
          .run(
            `vrf_${Date.now().toString(36)}${crypto.randomUUID().replace(/-/g, "").slice(0, 12)}`,
            identifier,
            salt,
            codeHash,
            Date.now(),
            expiresAt,
          ),
      latest: (identifier) => {
        const row = db
          .query(
            `SELECT id, salt, code_hash, attempts FROM verification_codes
             WHERE identifier = ? AND expires_at > ?
             ORDER BY created_at DESC LIMIT 1`,
          )
          .get(identifier, Date.now()) as
          | { id: string; salt: string; code_hash: string; attempts: number }
          | null;
        return row
          ? { id: row.id, salt: row.salt, codeHash: row.code_hash, attempts: row.attempts }
          : null;
      },
      markFailed: (id) =>
        db.query("UPDATE verification_codes SET attempts = attempts + 1 WHERE id = ?").run(id),
      deleteById: (id) => db.query("DELETE FROM verification_codes WHERE id = ?").run(id),
      pruneExpired: () =>
        db.query("DELETE FROM verification_codes WHERE expires_at <= ?").run(Date.now()).changes,
    },
    {
      apiUrl: env.otpApiUrl,
      apiKey: env.otpApiKey,
      appName: env.appName,
      ttlSeconds: env.otpTtlSeconds,
    },
  ),
  freebuff: createFreebuffVerifier({
    issuer: env.freebuffIssuer,
    jwksUrl: env.freebuffJwksUrl,
  }),
});
