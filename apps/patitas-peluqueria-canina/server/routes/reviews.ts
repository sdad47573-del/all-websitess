import { Hono } from "hono";
import type { Env } from "../context";
import { currentUser, requireUser } from "@app-server";
import { db, newId, toAppointment, toReview, transaction } from "../db";

export const reviewRoutes = new Hono<Env>();

reviewRoutes.get("/public", (c) => {
  const rows = db
    .query("SELECT * FROM reviews WHERE published = 1 ORDER BY created_at DESC LIMIT 24")
    .all() as Record<string, string | number | null>[];
  return c.json(rows.map(toReview));
});

// A partir de aquí todo requiere sesión. Se registra DESPUÉS de `/public` a
// propósito: en Hono los handlers se ejecutan en orden de registro, así que la
// lista pública responde antes de necesitar el guard.
reviewRoutes.use("*", requireUser);

/** Reseña de una cita concreta, solo si es del usuario propietario. */
reviewRoutes.get("/appointment/:id", (c) => {
  const user = currentUser(c);
  const appointmentId = c.req.param("id");

  const row = db
    .query("SELECT user_id FROM appointments WHERE id = ?")
    .get(appointmentId) as { user_id: string } | null;
  if (!row || row.user_id !== user._id) return c.json(null);

  const review = db
    .query("SELECT * FROM reviews WHERE appointment_id = ?")
    .get(appointmentId) as Record<string, string | number | null> | null;
  return c.json(review ? toReview(review) : null);
});

reviewRoutes.post("/", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const appointmentId = typeof body.appointmentId === "string" ? body.appointmentId : "";
  if (!appointmentId) return c.json({ error: "Cita no encontrada." }, 400);

  const stars = Number(body.stars);
  if (!Number.isFinite(stars) || stars < 1 || stars > 5) {
    return c.json({ error: "La valoración debe ser entre 1 y 5." }, 400);
  }

  const text = typeof body.text === "string" ? body.text.trim() : "";
  if (!text) return c.json({ error: "Escribe tu reseña." }, 400);
  if (text.length > 2000) return c.json({ error: "La reseña es demasiado larga." }, 400);

  const apptRow = db.query("SELECT * FROM appointments WHERE id = ?").get(appointmentId) as
    | Record<string, string | number | null>
    | null;
  if (!apptRow || apptRow.user_id !== user._id) {
    return c.json({ error: "Cita no encontrada." }, 404);
  }

  const appointment = toAppointment(apptRow);
  if (appointment.status !== "completed") {
    return c.json({ error: "Solo se pueden valorar citas completadas." }, 400);
  }
  if (appointment.reviewId) {
    return c.json({ error: "Esta cita ya tiene reseña." }, 409);
  }

  const authorName = user.name?.trim() || "Cliente Patitas";
  const id = newId("rev");

  try {
    transaction(() => {
      db.query(
        `INSERT INTO reviews
           (id, user_id, author_name, pet_name, appointment_id, rating, text, service_key, published, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`,
      ).run(
        id,
        user._id,
        authorName,
        appointment.petName,
        appointmentId,
        stars,
        text,
        appointment.serviceKey,
        Date.now(),
      );
      db.query("UPDATE appointments SET review_id = ? WHERE id = ?").run(id, appointmentId);
    });
  } catch (error) {
    // El índice único sobre appointment_id impide la doble reseña aunque dos
    // peticiones lleguen a la vez.
    if (error instanceof Error && error.message.includes("UNIQUE")) {
      return c.json({ error: "Esta cita ya tiene reseña." }, 409);
    }
    throw error;
  }

  return c.json(id);
});
