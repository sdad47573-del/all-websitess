import { Hono } from "hono";
import {
  HttpError,
  currentUser,
  optionalString,
  requireDate,
  requireNumber,
  requireOneOf,
  requireString,
  requireStringArray,
  requireUser,
  unwrap,
} from "@app-server";
import { calculateQuoteServer } from "../../src/lib/pricing";
import { requireAdmin, type Env } from "../context";
import { db, newId, toBooking, transaction } from "../db";
import { sendBookingEmail, type EmailKind } from "../email";
import { recordReferral, settleRewardForEmail } from "./referrals";

export const bookingRoutes = new Hono<Env>();

const asBooking = (r: unknown) => toBooking(r as Record<string, string | number | null>);

/** Dos equipos por franja: el mismo límite que usaba el Convex original. */
const MAX_PER_SLOT = 2;

const ADMIN_STATUSES = ["pending", "confirmed", "in_progress", "completed", "cancelled"] as const;
const SLOTS = ["morning", "afternoon", "evening"] as const;

/* ---------- Disponibilidad (pública) ---------- */

/*
 * Cuántas plazas quedan por franja en una fecha. Es pública, como la query de
 * Convex: solo revela horas libres, ningún dato de clientes, y el selector de
 * franja la necesita antes de que el usuario haya iniciado sesión.
 */
bookingRoutes.get("/availability/:date", (c) => {
  const date = c.req.param("date");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return c.json({ error: "Fecha no válida." }, 400);

  const rows = db
    .query(
      "SELECT preferred_slot FROM bookings WHERE preferred_date = ? AND status != 'cancelled'",
    )
    .all(date) as { preferred_slot: string }[];

  const taken: Record<string, number> = {};
  for (const row of rows) {
    taken[row.preferred_slot] = (taken[row.preferred_slot] ?? 0) + 1;
  }
  return c.json(taken);
});

/* A partir de aquí, sesión obligatoria. */
bookingRoutes.use("*", requireUser);

/* ---------- Consultas ---------- */

/** Reservas del usuario autenticado, más recientes primero. */
bookingRoutes.get("/", (c) => {
  const rows = db
    .query("SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC")
    .all(currentUser(c)._id) as Record<string, string | number | null>[];
  return c.json(rows.map(asBooking));
});

/** Todas las reservas. Solo para admins. */
bookingRoutes.get("/all", (c) => {
  const user = currentUser(c);
  if (user.role !== "admin") return c.json([]);
  const rows = db
    .query("SELECT * FROM bookings ORDER BY created_at DESC")
    .all() as Record<string, string | number | null>[];
  return c.json(rows.map(asBooking));
});

/** Reservas del usuario, agregadas, para el resumen del dashboard. */
bookingRoutes.get("/stats", (c) => {
  const rows = db
    .query("SELECT status, price FROM bookings WHERE user_id = ?")
    .all(currentUser(c)._id) as { status: string; price: number }[];

  const active = rows.filter((b) => b.status !== "cancelled");
  return c.json({
    total: rows.length,
    upcoming: active.filter((b) => b.status === "pending" || b.status === "confirmed").length,
    completed: active.filter((b) => b.status === "completed").length,
    totalSpent:
      Math.round(
        active.filter((b) => b.status === "completed").reduce((sum, b) => sum + b.price, 0) * 100,
      ) / 100,
  });
});

/** Progreso hacia la próxima recompensa de fidelidad. */
bookingRoutes.get("/loyalty", (c) => {
  const user = currentUser(c);
  const count = user.loyaltyCount ?? 0;
  return c.json({
    count,
    rewardReady: user.loyaltyRewardReady === true,
    cleaningsToReward: 6 - (count % 6),
  });
});

/** Una reserva propia, para el flujo de pago. */
bookingRoutes.get("/:id", (c) => {
  const user = currentUser(c);
  const row = db.query("SELECT * FROM bookings WHERE id = ?").get(c.req.param("id")) as
    | Record<string, string | number | null>
    | null;
  if (!row) return c.json(null);
  if (row.user_id !== user._id) throw new HttpError(403, "No autorizado");
  return c.json(asBooking(row));
});

/* ---------- Crear ---------- */

bookingRoutes.post("/", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const serviceType = unwrap(requireString(body, "serviceType", { max: 40 }));
  const frequency = unwrap(requireString(body, "frequency", { max: 40 }));
  const bedrooms = unwrap(requireNumber(body, "bedrooms", { min: 1, max: 6 }));
  const bathrooms = unwrap(requireNumber(body, "bathrooms", { min: 1, max: 4 }));
  const extras = unwrap(requireStringArray(body, "extras"));
  const address = unwrap(requireString(body, "address", { max: 300 }));
  const city = unwrap(requireString(body, "city", { max: 120 }));
  const preferredDate = unwrap(requireDate(body, "preferredDate"));
  const preferredSlot = unwrap(
    requireOneOf(body, "preferredSlot", SLOTS, "Franja no válida."),
  );
  const postalCode = unwrap(optionalString(body, "postalCode", { max: 20 }));
  const notes = unwrap(optionalString(body, "notes", { max: 2000 }));
  const referralCode = unwrap(optionalString(body, "referralCode", { max: 40 }));

  const bookingId = transaction(() => {
    // 1) Capacidad de la franja. Se comprueba dentro de la transacción para
    // que dos reservas simultáneas no se cuelen en el mismo hueco.
    const taken = db
      .query(
        `SELECT COUNT(*) AS n FROM bookings
         WHERE preferred_date = ? AND preferred_slot = ?
           AND status IN ('pending', 'confirmed')`,
      )
      .get(preferredDate, preferredSlot) as { n: number };
    if (taken.n >= MAX_PER_SLOT) {
      throw new HttpError(409, "Lo sentimos, esa franja horaria acaba de llenarse. Elige otra.");
    }

    // 2) El precio se recalcula aquí: el cliente no es la fuente de verdad, y
    //    los campos `price`/`durationHours` que mandaba se ignoran.
    const quote = calculateQuoteServer({
      serviceType: serviceType as Parameters<typeof calculateQuoteServer>[0]["serviceType"],
      frequency: frequency as Parameters<typeof calculateQuoteServer>[0]["frequency"],
      bedrooms,
      bathrooms,
      extras: extras as Parameters<typeof calculateQuoteServer>[0]["extras"],
    });

    let finalPrice = quote.price;

    // 3) Referido: registra la relación y aplica el descuento si procede.
    if (referralCode && user.email) {
      const result = recordReferral(user._id, referralCode, user.email);
      finalPrice = Math.max(25, finalPrice - result.discount);
    }

    // 3b) Fidelidad: si hay recompensa lista, esta limpieza sale al 50 %.
    const loyaltyApplied = user.loyaltyRewardReady === true;
    if (loyaltyApplied) {
      finalPrice = Math.max(25, Math.round(finalPrice * 0.5 * 100) / 100);
    }

    const id = newId("bkg");
    db.query(
      `INSERT INTO bookings
         (id, user_id, service_type, frequency, bedrooms, bathrooms, extras, address, city, postal_code,
          preferred_date, preferred_slot, price, duration_hours, status, payment_status, notes, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', 'unpaid', ?, ?)`,
    ).run(
      id,
      user._id,
      serviceType,
      frequency,
      bedrooms,
      bathrooms,
      JSON.stringify(extras),
      address,
      city,
      postalCode ?? null,
      preferredDate,
      preferredSlot,
      finalPrice,
      quote.durationHours,
      notes ?? null,
      Date.now(),
    );

    // 3c) Consume la recompensa si se aplicó.
    if (loyaltyApplied) {
      db.query("UPDATE users SET loyalty_reward_ready = 0 WHERE id = ?").run(user._id);
    }

    return id;
  });

  queueEmail(user.email ?? null, bookingId, "confirmation");

  return c.json(bookingId);
});

/* ---------- Acciones del cliente ---------- */

bookingRoutes.post("/:id/cancel", (c) => {
  const id = c.req.param("id");
  const user = currentUser(c);

  const row = db.query("SELECT * FROM bookings WHERE id = ?").get(id) as
    | Record<string, string | number | null>
    | null;
  if (!row) throw new HttpError(404, "Reserva no encontrada.");
  if (row.user_id !== user._id) throw new HttpError(403, "No autorizado");
  if (row.status !== "pending" && row.status !== "confirmed") {
    throw new HttpError(400, "Esta reserva ya no puede cancelarse");
  }

  db.query("UPDATE bookings SET status = 'cancelled' WHERE id = ?").run(id);
  queueEmail(user.email ?? null, id, "cancellation");

  return c.json({ ok: true });
});

bookingRoutes.post("/:id/rate", async (c) => {
  const id = c.req.param("id");
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const row = db.query("SELECT * FROM bookings WHERE id = ?").get(id) as
    | Record<string, string | number | null>
    | null;
  if (!row) throw new HttpError(404, "Reserva no encontrada.");
  if (row.user_id !== user._id) throw new HttpError(403, "No autorizado");
  if (row.status !== "completed") {
    throw new HttpError(400, "Solo se pueden valorar servicios completados");
  }

  const rating = unwrap(requireNumber(body, "rating", { min: 1, max: 5 }));
  const comment = unwrap(optionalString(body, "comment", { max: 2000 }));

  db.query("UPDATE bookings SET rating = ?, comment = ? WHERE id = ?").run(
    rating,
    comment ?? null,
    id,
  );
  return c.json({ ok: true });
});

/**
 * Marca la reserva como pagada. El pago se verifica antes contra Stripe (ver
 * `payments.ts`); aquí solo se refleja el resultado ya comprobado.
 */
bookingRoutes.post("/:id/mark-paid", (c) => {
  const id = c.req.param("id");
  const user = currentUser(c);

  const row = db.query("SELECT * FROM bookings WHERE id = ?").get(id) as
    | { user_id: string; payment_status: string | null }
    | null;
  if (!row) throw new HttpError(404, "Reserva no encontrada.");
  if (row.user_id !== user._id) throw new HttpError(403, "No autorizado");
  if (row.payment_status === "paid") return c.json({ ok: true });

  db.query("UPDATE bookings SET payment_status = 'paid' WHERE id = ?").run(id);
  return c.json({ ok: true });
});

/* ---------- Gestión (admin) ---------- */

bookingRoutes.post("/:id/status", async (c) => {
  const id = c.req.param("id");
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  requireAdmin(currentUser(c));

  const status = unwrap(requireOneOf(body, "status", ADMIN_STATUSES, "Estado no válido."));

  const row = db.query("SELECT * FROM bookings WHERE id = ?").get(id) as
    | Record<string, string | number | null>
    | null;
  if (!row) throw new HttpError(404, "Reserva no encontrada.");
  if (row.status === status) return c.json({ ok: true });
  if (row.status === "cancelled" && status !== "cancelled") {
    throw new HttpError(400, "Una reserva cancelada no se puede reactivar");
  }

  db.query("UPDATE bookings SET status = ? WHERE id = ?").run(status, id);

  const client = db.query("SELECT * FROM users WHERE id = ?").get(row.user_id) as
    | { id: string; email: string | null; loyalty_count: number | null }
    | null;
  const clientEmail = client?.email ?? null;

  if (status === "completed") {
    // Liquida la recompensa del referido que sigue pendiente de este cliente.
    if (clientEmail) settleRewardForEmail(clientEmail);

    // Fidelidad: cada 6 limpiezas se abre una recompensa al 50 %.
    if (client) {
      const count = (client.loyalty_count ?? 0) + 1;
      db.query("UPDATE users SET loyalty_count = ?, loyalty_reward_ready = ? WHERE id = ?").run(
        count,
        count % 6 === 0 ? 1 : 0,
        client.id,
      );
    }
    queueEmail(clientEmail, id, "review");
  }
  if (status === "cancelled") {
    queueEmail(clientEmail, id, "cancellation");
  }

  return c.json({ ok: true });
});

/* ---------- Emails ---------- */

function queueEmail(to: string | null, bookingId: string, kind: EmailKind): void {
  if (!to) return;
  void sendBookingEmail(to, bookingId, kind).catch((error) => {
    console.error("[emails] fallo enviando", kind, error);
  });
}
