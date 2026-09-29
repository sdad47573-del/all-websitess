import { Hono } from "hono";
import type { Database } from "bun:sqlite";
import type { FreebuffVerifier } from "./freebuff";
import type { Otp } from "./otp";
import type { Session } from "./session";
import { requireString, unwrap } from "../validation";
import type { BaseEnv } from "../types";
import type { Row } from "../db";

/**
 * Rutas de acceso, iguales en todas las apps: código por email, invitado,
 * canje de token de freebuff.com, estado de la sesión y cierre.
 *
 * Lo único que cada app aporta es la tabla de usuarios, cómo se mapea a un
 * objeto y el prefijo de sus ids.
 */

export type AuthRoutesConfig = {
  db: Database;
  usersTable: string;
  /** Columna con el subject de freebuff, o `null` si la app no lo usa. */
  freebuffColumn: string | null;
  idPrefix: string;
  sessions: Session;
  otp: Otp;
  freebuff: FreebuffVerifier | null;
  /** Devuelve el usuario ya con la forma que espera el cliente. */
  toUser: (row: Row) => unknown;
};

export function createAuthRoutes<User>(
  config: AuthRoutesConfig,
): Hono<BaseEnv<User>> {
  const { db, usersTable, sessions, idPrefix } = config;
  const routes = new Hono<BaseEnv<User>>();

  const newUserId = () => `${idPrefix}_${Date.now().toString(36)}${crypto.randomUUID().replace(/-/g, "").slice(0, 12)}`;

  const findByEmail = (email: string) =>
    db
      .query(`SELECT * FROM ${usersTable} WHERE email = ?`)
      .get(email.trim().toLowerCase()) as Row | null;

  const findById = (id: string) =>
    db.query(`SELECT * FROM ${usersTable} WHERE id = ?`).get(id) as
      | Row
      | null;

  /** Crea la fila de usuario si el email es nuevo, y devuelve el usuario. */
  const upsertByEmail = (email: string) => {
    const existing = findByEmail(email);
    if (existing) return existing;

    const id = newUserId();
    db.query(
      `INSERT INTO ${usersTable} (id, email, email_verification_time, is_anonymous, role, created_at)
       VALUES (?, ?, ?, 0, 'user', ?)`,
    ).run(id, email.trim().toLowerCase(), Date.now(), Date.now());
    return findById(id)!;
  };

  const openSession = async (userRow: Row) => {
    const { token } = await sessions.createFor(userRow.id as string);
    return { user: config.toUser(userRow), token };
  };

  /** Paso 1 del login por email: genera el código y lo envía. */
  routes.post("/otp/send", async (c) => {
    const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
    const email = unwrap(requireString(body, "email", { max: 320 }));

    const result = await config.otp.send(email);
    if (!result.ok) return c.json({ error: result.error }, 502);

    // No revelamos si el email ya tenía cuenta: da igual para quien entra.
    return c.json({ ok: true });
  });

  /** Paso 2: verifica el código y abre sesión. */
  routes.post("/otp/verify", async (c) => {
    const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
    const email = unwrap(requireString(body, "email", { max: 320 }));
    const code = unwrap(requireString(body, "code", { max: 10 }));

    const result = await config.otp.verify(email, code);
    if (!result.ok) return c.json({ error: result.error }, 400);

    const { user, token } = await openSession(upsertByEmail(email));
    sessions.setCookie(c.res.headers, token);
    return c.json({ user });
  });

  /** Acceso como invitado, equivalente al provider `Anonymous` de Convex Auth. */
  routes.post("/anonymous", async (c) => {
    const id = newUserId();
    db.query(`INSERT INTO ${usersTable} (id, is_anonymous, role, created_at) VALUES (?, 1, 'user', ?)`).run(
      id,
      Date.now(),
    );

    const { user, token } = await openSession(findById(id)!);
    sessions.setCookie(c.res.headers, token);
    return c.json({ user });
  });

  /**
   * Canjea un token de freebuff.com por una sesión propia. Sustituye al
   * provider `customJwt` de Convex Auth.
   */
  routes.post("/freebuff", async (c) => {
    if (!config.freebuff || !config.freebuffColumn) {
      return c.json({ error: "Este acceso no está disponible." }, 404);
    }

    const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
    const token = unwrap(requireString(body, "token", { max: 4000 }));

    const claims = await config.freebuff.verify(token);
    if (!claims) return c.json({ error: "Token no válido o caducado." }, 401);

    // Se identifica por el `sub` de freebuff, no por el email: así el vínculo
    // entre las dos identidades no depende de que el email coincida.
    const column = config.freebuffColumn;
    const existing = db
      .query(`SELECT * FROM ${usersTable} WHERE ${column} = ?`)
      .get(claims.sub) as Row | null;

    let row = existing;
    if (!row) {
      const id = newUserId();
      db.query(
        `INSERT INTO ${usersTable} (id, name, image, email, ${column}, is_anonymous, role, created_at)
         VALUES (?, ?, ?, ?, ?, 0, 'user', ?)`,
      ).run(
        id,
        claims.name ?? null,
        claims.image ?? null,
        claims.email ?? null,
        claims.sub,
        Date.now(),
      );
      row = findById(id)!;
    } else {
      // Se refrescan los datos de perfil por si el usuario los cambió allí.
      db.query(`UPDATE ${usersTable} SET name = ?, image = ?, email = ? WHERE id = ?`).run(
        claims.name ?? row.name ?? null,
        claims.image ?? row.image ?? null,
        claims.email ?? row.email ?? null,
        row.id,
      );
      row = findById(row.id as string)!;
    }

    const { user, token: sessionToken } = await openSession(row);
    sessions.setCookie(c.res.headers, sessionToken);
    return c.json({ user });
  });

  /** Estado de la sesión. La usa el cliente para saber si hay que pedir login. */
  routes.get("/session", (c) => {
    return c.json({ user: c.get("user") ?? null });
  });

  routes.post("/signout", async (c) => {
    const token = sessions.readCookie(c.req.raw);
    // Si el token ya caducó o es inválido no hay sesión que revocar, pero la
    // cookie se limpia igualmente.
    if (token) {
      const claims = await sessions.jwt.verify(token);
      if (claims) sessions.revoke(claims.sid);
    }
    sessions.clearCookie(c.res.headers);
    return c.json({ ok: true });
  });

  return routes;
}
