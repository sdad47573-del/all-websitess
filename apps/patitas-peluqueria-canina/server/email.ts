import { env } from "./env";
import { db, toAppointment, toUser, toWaitlistEntry, type Appointment } from "./db";

/**
 * Envío de emails de citas. La plantilla es la misma que usaba la action
 * `convex/emails.ts`; aquí se llama directamente por HTTP, sin pasar por un
 * scheduler.
 *
 * Si no hay `RESEND_API_KEY` se registra en consola y se devuelve `sent:false`:
 * la app sigue funcionando con las notificaciones in-app.
 */

const BRAND = "#C4622D";

export type EmailKind =
  | "confirmation"
  | "reminder"
  | "reschedule"
  | "cancellation"
  | "slot-freed";

type EmailData = {
  petName: string;
  serviceName: string;
  date: string;
  start: string;
  end?: string;
  price?: number;
};

function htmlEmail(kind: EmailKind, d: EmailData): string {
  const titles: Record<EmailKind, string> = {
    confirmation: "¡Cita confirmada! 🐾",
    reminder: "Mañana toca peluquería 🛁",
    reschedule: "Tu cita ha cambiado de hora 📅",
    cancellation: "Tu cita ha sido cancelada",
    "slot-freed": "¡Se ha liberado un hueco! ✨",
  };

  const rows = [
    ["Peludo", d.petName],
    ["Servicio", d.serviceName],
    ["Fecha", d.date],
    ["Hora", d.end ? `${d.start} – ${d.end}` : d.start],
    ...(d.price !== undefined ? ([["Precio", `${d.price} €`]] as [string, string][]) : []),
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 0;color:#8a7a6d;font-size:13px;">${k}</td><td style="padding:6px 0;font-weight:600;color:#3d2f26;font-size:13px;">${v}</td></tr>`,
    )
    .join("");

  return `<!doctype html><html><body style="margin:0;padding:24px;background:#faf6f0;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #eee2d4;">
    <div style="background:${BRAND};padding:20px 24px;">
      <span style="color:#fff7ed;font-weight:700;font-size:18px;">Patitas · peluquería canina</span>
    </div>
    <div style="padding:24px;">
      <h1 style="margin:0 0 12px;font-size:19px;color:#3d2f26;">${titles[kind]}</h1>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
      <p style="margin:18px 0 0;font-size:13px;color:#8a7a6d;">
        Gestiona tu cita desde <a href="{APP_URL}/dashboard" style="color:${BRAND};">tu área de cliente</a>.
      </p>
    </div>
    <div style="padding:14px 24px;background:#faf6f0;font-size:11px;color:#8a7a6d;">
      Calle del Rosal 14, Chamberí · Madrid · +34 612 345 678
    </div>
  </div></body></html>`;
}

function subjectFor(kind: EmailKind, d: EmailData): string {
  switch (kind) {
    case "confirmation":
      return `Cita confirmada para ${d.petName} · ${d.date}`;
    case "reminder":
      return `Mañana: ${d.petName} tiene cita en Patitas`;
    case "reschedule":
      return `Cambio de cita · ${d.petName}`;
    case "cancellation":
      return `Tu cita ha sido cancelada · ${d.petName}`;
    case "slot-freed":
      return "¡Se ha liberado un hueco en Patitas!";
  }
}

async function sendWithResend(to: string, subject: string, html: string): Promise<boolean> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Patitas <citas@resend.dev>",
      to,
      subject,
      html,
    }),
  });
  if (!response.ok) {
    console.error("[emails] Resend respondió", response.status, await response.text());
    return false;
  }
  return true;
}

function userEmail(userId: string): string | null {
  const row = db.query("SELECT * FROM users WHERE id = ?").get(userId) as
    | Record<string, string | number | null>
    | null;
  if (!row) return null;
  return toUser(row).email ?? null;
}

function appointmentData(appointmentId: string): Appointment | null {
  const row = db.query("SELECT * FROM appointments WHERE id = ?").get(appointmentId) as
    | Record<string, string | number | null>
    | null;
  return row ? toAppointment(row) : null;
}

export type SendArgs = {
  userId: string;
  kind: EmailKind;
  appointmentId?: string;
  waitlistId?: string;
};

export async function sendAppointmentEmail({
  userId,
  kind,
  appointmentId,
  waitlistId,
}: SendArgs): Promise<{ sent: boolean }> {
  const to = userEmail(userId);
  if (!to) return { sent: false };

  let data: EmailData;
  if (kind === "slot-freed") {
    const row = waitlistId
      ? (db.query("SELECT * FROM waitlist WHERE id = ?").get(waitlistId) as
          | Record<string, string | number | null>
          | null)
      : null;
    const entry = row ? toWaitlistEntry(row) : null;
    data = {
      petName: entry?.petName ?? "tu peludo",
      serviceName: entry?.serviceName ?? "su servicio",
      date: entry?.date ?? "",
      start: "varios huecos",
    };
  } else {
    if (!appointmentId) return { sent: false };
    const appointment = appointmentData(appointmentId);
    if (!appointment) return { sent: false };
    data = {
      petName: appointment.petName,
      serviceName: appointment.serviceName,
      date: appointment.date,
      start: appointment.start,
      end: appointment.end,
      price: appointment.price,
    };
  }

  const html = htmlEmail(kind, data).replace(/\{APP_URL\}/g, env.appUrl);
  const subject = subjectFor(kind, data);

  if (!env.resendApiKey) {
    console.log(`[emails] RESEND_API_KEY no configurada. Email "${subject}" a ${to} no enviado.`);
    return { sent: false };
  }

  return { sent: await sendWithResend(to, subject, html) };
}
