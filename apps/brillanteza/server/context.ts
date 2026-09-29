import {
  HttpError,
  createAuthRoutes,
  createFreebuffVerifier,
  createOtp,
  createSessions,
  newId,
  type BaseEnv,
} from "@app-server";
import { db, toUser, type User } from "./db";
import { env } from "./env";

/**
 * Sesiones y acceso de Brilliantza, montados una vez. La mecánica viene de
 * `@app-server`; aquí solo los nombres de tabla y el almacenamiento de los
 * códigos de verificación.
 */

export { env };

export type Env = BaseEnv<User>;

export const sessions = createSessions({
  db,
  sessionsTable: "sessions",
  usersTable: "users",
  cookieName: "brillanteza_session",
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
          .run(newId("vrf"), identifier, salt, codeHash, Date.now(), expiresAt),
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

/**
 * Lanza si quien llama no es admin. Un `HttpError` y no un `Error` a propósito:
 * el manejador global traduce los errores de dominio a su código, y negarle
 * el paso a un usuario normal es un 403, no un fallo del servidor.
 */
export function requireAdmin(user: User): void {
  if (user.role !== "admin") {
    throw new HttpError(403, "Solo un administrador puede hacer esto");
  }
}
