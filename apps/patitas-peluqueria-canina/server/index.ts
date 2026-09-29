import { createApp, startDailyCron } from "@app-server";
import { authRoutes, sessions } from "./context";
import { env } from "./env";
import { processReminders } from "./cron";
import { toUser, type User } from "./db";
import { appointmentRoutes } from "./routes/appointments";
import { notificationRoutes } from "./routes/notifications";
import { petRoutes } from "./routes/pets";
import { reviewRoutes } from "./routes/reviews";
import { userRoutes } from "./routes/users";

/**
 * App de Hono de Patitas.
 *
 * La base (CORS, sesión, errores, health, rutas de acceso) viene de
 * `@app-server`; aquí solo se monta el dominio de la peluquería.
 */
export const app = createApp<User>({
  sessions,
  devOrigin: env.devOrigin,
  toUser,
});

app.route("/api/auth", authRoutes);
app.route("/api/pets", petRoutes);
app.route("/api/appointments", appointmentRoutes);
app.route("/api/notifications", notificationRoutes);
app.route("/api/reviews", reviewRoutes);
app.route("/api/users", userRoutes);

/**
 * Gong para despliegues que no mantienen el proceso vivo (serverless,
 * preview). Reproduce el cron diario de Convex; en un proceso normal el
 * `setTimeout` de `startDailyCron` ya se encarga.
 */
app.post("/api/cron/reminders", async (c) => {
  return c.json({ sent: await processReminders() });
});

if (import.meta.main) {
  Bun.serve({ port: env.port, fetch: app.fetch });
  startDailyCron({
    name: "recordatorios",
    hourUTC: 9,
    minuteUTC: 0,
    run: async () => ({ enviados: await processReminders() }),
  });
  console.log(`Patitas API en http://localhost:${env.port}`);
  console.log(`SQLite en ${env.databaseUrl}`);
}
