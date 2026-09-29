import { Hono } from "hono";
import type { Context } from "hono";
import type { MiddlewareHandler } from "hono";
import { cors } from "hono/cors";
import type { BaseEnv } from "./types";
import { HttpError, ValidationError } from "./validation";
import type { Session } from "./auth/session";
import type { Row } from "./db";

/**
 * App de Hono con lo que es igual en todas las apps: CORS en desarrollo,
 * resolución de la sesión, traducción de errores a JSON y el health check.
 *
 * Cada app monta después sus propias rutas encima.
 */

export type CreateAppConfig<User> = {
  sessions: Session;
  devOrigin: string;
  /**
   * Convierte la fila de `users` en el objeto que ve el cliente. También
   * sirve para las rutas de auth compartidas.
   */
  toUser: (row: Row) => User;
};

export type App<User> = Hono<BaseEnv<User>>;

export function createApp<User>(config: CreateAppConfig<User>): App<User> {
  const app = new Hono<BaseEnv<User>>();

  // En desarrollo el frontend lo sirve Vite en otro puerto, así que hace falta
  // CORS con credenciales. En producción el mismo origen sirve la API y el
  // bundle, y el navegador no aplica CORS.
  app.use(
    "/api/*",
    cors({
      origin: config.devOrigin,
      credentials: true,
      allowHeaders: ["Content-Type", "Authorization"],
      allowMethods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    }),
  );

  // Adjunta `c.get("user")` en todas las rutas. Nunca falla: las rutas
  // protegidas usan `requireUser`, que sí responde 401.
  app.use("/api/*", async (c, next) => {
    const cookieToken = config.sessions.readCookie(c.req.raw);
    // El header Authorization permite llamadas desde la CLI o los tests sin
    // arrastrar cookies.
    const bearer = c.req.header("Authorization")?.replace(/^Bearer\s+/i, "");

    const userId = await config.sessions.resolveUserId(cookieToken ?? bearer);
    const row = userId ? config.sessions.findUser(userId) : null;
    c.set("user", row ? config.toUser(row) : null);
    await next();
  });

  app.get("/api/health", (c) => c.json({ ok: true }));

  app.onError((error, c) => {
    // Los errores de dominio llevan su propio código y su mensaje en español,
    // que el cliente muestra tal cual.
    if (error instanceof HttpError) return c.json({ error: error.message }, error.status as 400);
    if (error instanceof ValidationError) return c.json({ error: error.message }, 400);

    console.error("[api] error no controlado", error);
    return c.json({ error: "Error interno del servidor." }, 500);
  });

  app.notFound((c) => c.json({ error: "Ruta no encontrada." }, 404));

  return app;
}

/**
 * Guard de las rutas que exigen sesión. Se registra dentro de cada sub-app,
 * no globalmente, porque cada API tiene rutas públicas.
 */
export const requireUser: MiddlewareHandler<BaseEnv<unknown>> = async (c, next) => {
  if (!c.get("user")) {
    return c.json({ error: "Inicia sesión primero." }, 401);
  }
  await next();
};

/** El usuario de la sesión. Solo para rutas con `requireUser` delante. */
export function currentUser<User>(c: Context<BaseEnv<User>>): NonNullable<User> {
  const user = c.get("user");
  if (!user) throw new Error("currentUser() en una ruta sin requireUser");
  return user as NonNullable<User>;
}
