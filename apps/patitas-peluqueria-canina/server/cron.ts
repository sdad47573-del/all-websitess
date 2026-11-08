import { sessions } from "./context";
import { db, newId } from "./db";
import { sendAppointmentEmail } from "./email";

/**
 * Equivalente al `cronJobs().daily(...)` de Convex: cada día a las 09:00 UTC
 * (~11:00 en Madrid en verano) crea la notificación de recordatorio para las
 * citas confirmadas de mañana y envía el email.
 *
 * Aquí no hay scheduler gestionado, así que el proceso se auto-programa con
 * `setTimeout` al arrancar. Si el proceso se reinicia, `startCron` lo vuelve a
 * programar; para despliegues que lo maten entre ejecuciones, un ping externo
 * a `/api/cron/reminders` hace el mismo trabajo.
 */

/** Fecha de mañana en formato `yyyy-mm-dd`, en hora local. */
export function tomorrowISO(now = new Date()): string {
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  return `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, "0")}-${String(tomorrow.getDate()).padStart(2, "0")}`;
}

export async function processReminders(now = new Date()): Promise<number> {
  const iso = tomorrowISO(now);
  const rows = db
    .query(
      `SELECT * FROM appointments
       WHERE date = ? AND status = 'confirmed' AND reminded_at IS NULL`,
    )
    .all(iso) as Record<string, string | number | null>[];

  let sent = 0;
  for (const appt of rows) {
    // El `reminded_at IS NULL` del SELECT cubre la mayoría de los casos, pero
    // se vuelve a comprobar dentro del UPDATE para que dos ejecuciones
    // solapadas no dupliquen el recordatorio.
    const result = db
      .query("UPDATE appointments SET reminded_at = ? WHERE id = ? AND reminded_at IS NULL")
      .run(Date.now(), appt.id);
    if (result.changes === 0) continue;

    db.query(
      `INSERT INTO notifications (id, user_id, appointment_id, type, title, body, created_at, read_at)
       VALUES (?, ?, ?, 'reminder', ?, ?, ?, NULL)`,
    ).run(
      newId("ntf"),
      appt.user_id,
      appt.id,
      "Mañana toca peluquería",
      `${appt.pet_name} · ${appt.service_name} · ${appt.start}`,
      Date.now(),
    );

    void sendAppointmentEmail({
      userId: appt.user_id as string,
      appointmentId: appt.id as string,
      kind: "reminder",
    }).catch((error) => console.error("[cron] fallo en el email de recordatorio", error));

    sent++;
  }

  // De paso, limpiamos lo que ya no sirve: códigos OTP caducados y sesiones
  // expiradas.
  db.query("DELETE FROM verification_codes WHERE expires_at <= ?").run(Date.now());
  sessions.pruneExpired();

  return sent;
}

/** Programa la siguiente ejecución a las 09:00 UTC. */
export function startCron(): void {
  const scheduleNext = () => {
    const now = new Date();
    const next = new Date(now);
    next.setUTCHours(9, 0, 0, 0);
    if (next <= now) next.setUTCDate(next.getUTCDate() + 1);

    const delay = next.getTime() - now.getTime();
    console.log(`[cron] próximo recordatorio en ${Math.round(delay / 60000)} min`);

    setTimeout(() => {
      void processReminders()
        .then((sent) => console.log(`[cron] ${sent} recordatorios enviados`))
        .catch((error) => console.error("[cron] fallo en processReminders", error))
        .finally(scheduleNext);
    }, delay);

    // `unref` evita que este temporizador mantenga vivo el proceso en tests.
  };

  scheduleNext();
}
