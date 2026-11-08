import { db } from "./db";
import { sendBookingEmail } from "./email";

/**
 * Recordatorios 24 h antes del servicio.
 *
 * Convex lo hacía con `ctx.scheduler.runAt` al confirmar una reserva, que es un
 * planificador que no tenemos aquí. El equivalente barato es un barrido
 * diario: se buscan las reservas confirmadas de mañana a las que aún no se
 * les ha escrito el marcador y se les manda el email.
 *
 * Se marca `email_sent_at` en vez de confiar en que el barrido no se repita, y
 * el UPDATE lo comprueba para que dos ejecuciones solapadas no dupliquen el
 * envío.
 */

/** Fecha de mañana en `YYYY-MM-DD`, en hora local. */
export function tomorrowISO(now = new Date()): string {
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  return `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, "0")}-${String(tomorrow.getDate()).padStart(2, "0")}`;
}

export async function processReminderSweep(now = new Date()): Promise<number> {
  const iso = tomorrowISO(now);
  const rows = db
    .query(
      `SELECT b.id, u.email AS user_email
       FROM bookings b
       JOIN users u ON u.id = b.user_id
       WHERE b.preferred_date = ? AND b.status = 'confirmed' AND b.email_sent_at IS NULL`,
    )
    .all(iso) as { id: string; user_email: string | null }[];

  let sent = 0;
  for (const row of rows) {
    const claimed = db
      .query("UPDATE bookings SET email_sent_at = ? WHERE id = ? AND email_sent_at IS NULL")
      .run(Date.now(), row.id);
    if (claimed.changes === 0) continue;

    if (row.user_email) {
      await sendBookingEmail(row.user_email, row.id, "reminder").catch((error) => {
        console.error("[cron] fallo en el email de recordatorio", error);
      });
    }
    sent++;
  }

  return sent;
}
