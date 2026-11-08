import { createApp, startDailyCron } from "@app-server";
import { Hono } from "hono";
import { currentUser, requireUser } from "@app-server";
import { authRoutes, env, sessions, type Env } from "./context";
import { processReminderSweep } from "./cron";
import { toUser, type User } from "./db";
import { addressRoutes } from "./routes/addresses";
import { bookingRoutes } from "./routes/bookings";
import { giftCardRoutes } from "./routes/gift-cards";
import { leadRoutes } from "./routes/leads";
import { paymentRoutes } from "./routes/payments";
import { referralRoutes } from "./routes/referrals";

/**
 * App de Hono de Brilliantza. La base viene de `@app-server`; aquí se monta el
 * dominio de limpieza del hogar.
 */
export const app = createApp<User>({ sessions, devOrigin: env.devOrigin, toUser });

/** Perfil del usuario de la sesión. Equivale a `users.currentUser` en Convex. */
const userRoutes = new Hono<Env>();
userRoutes.use("*", requireUser);
userRoutes.get("/me", (c) => c.json({ user: currentUser(c) }));

app.route("/api/auth", authRoutes);
app.route("/api/users", userRoutes);
app.route("/api/bookings", bookingRoutes);
app.route("/api/addresses", addressRoutes);
app.route("/api/gift-cards", giftCardRoutes);
app.route("/api/referrals", referralRoutes);
app.route("/api/leads", leadRoutes);
app.route("/api/payments", paymentRoutes);

/**
 * Gong para despliegues que no mantienen el proceso vivo. En un proceso normal
 * los manda el barrido diario de `startDailyCron`.
 */
app.post("/api/cron/reminders", async (c) => {
  return c.json({ sent: await processReminderSweep() });
});

if (import.meta.main) {
  Bun.serve({ port: env.port, fetch: app.fetch });
  // Los recordatorios 24 h antes ya no los hace el planificador de Convex: se
  // barren una vez al día las reservas confirmadas de mañana.
  startDailyCron({
    name: "recordatorios de reservas",
    hourUTC: 8,
    minuteUTC: 0,
    run: async () => ({ enviados: await processReminderSweep() }),
  });
  console.log(`Brillanteza API en http://localhost:${env.port}`);
  console.log(`SQLite en ${env.databaseUrl}`);
}
