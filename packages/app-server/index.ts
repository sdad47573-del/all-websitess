/**
 * Base común de las APIs de este monorepo: Hono sobre Bun, SQLite, sesiones
 * JWT y utilidades de validación.
 *
 * Cada app aporta lo suyo: su `schema.sql`, sus rutas de dominio, sus
 * plantillas de email y su trabajo programado. Todo lo que se repite entre
 * apps vive aquí.
 */

/* Sesión y acceso */
export { createJwt, type Jwt, type SessionClaims } from "./auth/jwt";
export { createOtp, type Otp, type OtpStore, type OtpTransport, type OtpResult } from "./auth/otp";
export { createFreebuffVerifier, type FreebuffClaims, type FreebuffVerifier } from "./auth/freebuff";
export {
  createSessions,
  DEFAULT_COOKIE,
  type Session,
  type SessionConfig,
} from "./auth/session";
export { createAuthRoutes, type AuthRoutesConfig } from "./auth/routes";

/* Base de datos */
export { openDatabase, migrate, transaction, newId, json, str, num, bool, type Row } from "./db";

/* Configuración */
export { readEnv, type AppEnv, type ExtraEnv } from "./env";

/* Validación y errores */
export {
  HttpError,
  ValidationError,
  unwrap,
  firstError,
  requireString,
  optionalString,
  requireId,
  requireOneOf,
  requireSize,
  requireStringArray,
  requireDate,
  requireTime,
  requireNumber,
  optionalNumber,
  optionalBoolean,
  type Result,
  type Valid,
  type Invalid,
  type SizeKey,
} from "./validation";

/* App */
export { createApp, requireUser, currentUser, type App, type CreateAppConfig } from "./create-app";
export { startDailyCron, msUntilNext, type DailyCronOptions } from "./cron";
export type { BaseEnv } from "./types";
