import type { Database } from "bun:sqlite";
import { createJwt, type Jwt } from "./jwt";
import type { Row } from "../db";

/**
 * Ciclo de vida de la sesión.
 *
 * El token es un JWT firmado, y además cada sesión tiene una fila en
 * `sessions`. Gracias a esa fila, cerrar sesión revoca de verdad en lugar de
 * solo borrar la cookie: el token sigue siendo criptográficamente válido, pero
 * ya no encuentra su fila y se rechaza.
 *
 * Cada app decide los nombres de sus tablas y qué campos tiene su usuario, así
 * que la configuración entra por parámetro en lugar de estar cableada.
 */

export const DEFAULT_COOKIE = "app_session";

export type SessionConfig = {
  db: Database;
  /** Nombre de la tabla de sesiones. */
  sessionsTable: string;
  /** Nombre de la tabla de usuarios. */
  usersTable: string;
  /** Nombre de la cookie. Distinto por app para no compartir sesión. */
  cookieName?: string;
  /** Prefijo de los ids de sesión, para que se reconozcan de un vistazo. */
  idPrefix?: string;
  secret: string;
  ttlSeconds: number;
  /** Añade `Secure` a la cookie. Actívalo en producción. */
  secureCookies: boolean;
};

export type Session = {
  createFor: (userId: string) => Promise<{ token: string; sessionId: string }>;
  /** Resuelve un token a id de usuario, o `null` si no vale. */
  resolveUserId: (token: string | undefined) => Promise<string | null>;
  revoke: (sessionId: string) => void;
  pruneExpired: () => number;
  jwt: Jwt;
  /** El usuario de una sesión, o `null`. */
  findUser: (userId: string) => Row | null;
  setCookie: (headers: Headers, token: string) => void;
  clearCookie: (headers: Headers) => void;
  readCookie: (request: Request) => string | undefined;
};

export function createSessions(config: SessionConfig): Session {
  const { db, sessionsTable, usersTable } = config;
  const idPrefix = config.idPrefix ?? "ses";
  const cookieName = config.cookieName ?? DEFAULT_COOKIE;

  const jwt = createJwt(config.secret);

  const createFor = async (userId: string) => {
    const sessionId = `${idPrefix}_${crypto.randomUUID().replace(/-/g, "")}`;
    const now = Date.now();
    db.query(
      `INSERT INTO ${sessionsTable} (id, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)`,
    ).run(sessionId, userId, now, now + config.ttlSeconds * 1000);

    const token = await jwt.sign({ sub: userId, sid: sessionId }, config.ttlSeconds);
    return { token, sessionId };
  };

  const resolveUserId = async (token: string | undefined): Promise<string | null> => {
    if (!token) return null;

    const claims = await jwt.verify(token);
    if (!claims) return null;

    const session = db
      .query(`SELECT expires_at FROM ${sessionsTable} WHERE id = ?`)
      .get(claims.sid) as { expires_at: number } | null;
    if (!session || session.expires_at <= Date.now()) return null;

    return claims.sub;
  };

  const findUser = (userId: string): Row | null =>
    db.query(`SELECT * FROM ${usersTable} WHERE id = ?`).get(userId) as Row | null;

  const revoke = (sessionId: string) => {
    db.query(`DELETE FROM ${sessionsTable} WHERE id = ?`).run(sessionId);
  };

  const pruneExpired = () =>
    db.query(`DELETE FROM ${sessionsTable} WHERE expires_at <= ?`).run(Date.now()).changes;

  const setCookie = (headers: Headers, token: string) => {
    const parts = [
      `${cookieName}=${token}`,
      "Path=/",
      "HttpOnly",
      "SameSite=Lax",
      `Max-Age=${config.ttlSeconds}`,
    ];
    if (config.secureCookies) parts.push("Secure");
    headers.append("Set-Cookie", parts.join("; "));
  };

  const clearCookie = (headers: Headers) => {
    headers.append("Set-Cookie", `${cookieName}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
  };

  const readCookie = (request: Request): string | undefined =>
    request.headers
      .get("Cookie")
      ?.split(";")
      .map((part) => part.trim())
      .find((part) => part.startsWith(`${cookieName}=`))
      ?.slice(cookieName.length + 1);

  return {
    createFor,
    resolveUserId,
    revoke,
    pruneExpired,
    jwt,
    findUser,
    setCookie,
    clearCookie,
    readCookie,
  };
}
