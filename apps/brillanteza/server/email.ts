import { frequencyLabel, serviceLabel, slotLabel } from "../src/lib/pricing";
import { db, toBooking } from "./db";
import { env } from "./env";

/**
 * Emails de reserva. Mismas plantillas que usaba la action de Convex; aquí se
 * llaman directamente por HTTP.
 *
 * Sin `RESEND_API_KEY` no se envía nada: se registra en consola y la app sigue
 * funcionando.
 */

const FROM = "Brillanteza <reservas@brillanteza.es>";

export type EmailKind = "confirmation" | "reminder" | "cancellation" | "review";

type SendResult = { sent: boolean; configured: boolean };

async function sendEmail(to: string, subject: string, html: string): Promise<SendResult> {
  if (!env.resendApiKey) {
    // Degradación elegante: sin clave, los emails se omiten.
    return { sent: false, configured: false };
  }
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.resendApiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [to], subject, html }),
    });
    if (!response.ok) {
      console.error(`[emails] Resend respondió ${response.status}: ${(await response.text()).slice(0, 200)}`);
      return { sent: false, configured: true };
    }
    return { sent: true, configured: true };
  } catch (error) {
    console.error("[emails] fallo de red con Resend", error);
    return { sent: false, configured: true };
  }
}

const euro = (amount: number) => `${amount.toFixed(2).replace(".", ",")} €`;

function emailShell(title: string, body: string): string {
  return `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;background:#f4faf9;padding:24px;margin:0">
  <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2efec">
    <div style="background:#0f766e;padding:20px 24px">
      <span style="color:#ffffff;font-size:18px;font-weight:bold">✨ Brillanteza</span>
    </div>
    <div style="padding:24px;color:#0f2e2b;font-size:14px;line-height:1.6">
      <h2 style="margin:0 0 12px;font-size:18px">${title}</h2>
      ${body}
    </div>
    <div style="padding:16px 24px;background:#f0f7f6;color:#5d7a76;font-size:12px">
      Brillanteza · Limpieza profesional con precio cerrado · Garantía 48 h
    </div>
  </div>
</body></html>`;
}

function bookingSummary(booking: {
  serviceType: string;
  frequency: string;
  preferredDate: string;
  preferredSlot: string;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  extras: string[];
  price: number;
}): string {
  return [
    `Servicio: ${serviceLabel(booking.serviceType)}`,
    `Frecuencia: ${frequencyLabel(booking.frequency)}`,
    `Fecha: ${booking.preferredDate} · ${slotLabel(booking.preferredSlot)}`,
    `Dirección: ${booking.address}, ${booking.city}`,
    `${booking.bedrooms} hab. · ${booking.bathrooms} baños${
      booking.extras.length ? ` · ${booking.extras.length} extra(s)` : ""
    }`,
    `Precio: ${euro(booking.price)}`,
  ].join("\n");
}

function bookingHtml(booking: Parameters<typeof bookingSummary>[0], title: string, note: string): string {
  const lines = bookingSummary(booking)
    .split("\n")
    .map(
      (line) =>
        `<p style="margin:0 0 6px">${line.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</p>`,
    )
    .join("");
  return emailShell(title, `${lines}<p style="margin:16px 0 0">${note}</p>`);
}

/** Envía el email que corresponda al estado de la reserva. */
export async function sendBookingEmail(
  to: string,
  bookingId: string,
  kind: EmailKind,
): Promise<SendResult> {
  const row = db.query("SELECT * FROM bookings WHERE id = ?").get(bookingId);
  if (!row) return { sent: false, configured: Boolean(env.resendApiKey) };

  const b = toBooking(row as Record<string, string | number | null>);
  const data = {
    serviceType: b.serviceType,
    frequency: b.frequency,
    preferredDate: b.preferredDate,
    preferredSlot: b.preferredSlot,
    address: b.address,
    city: b.city,
    bedrooms: b.bedrooms,
    bathrooms: b.bathrooms,
    extras: b.extras,
    price: b.price,
  };

  switch (kind) {
    case "confirmation":
      return sendEmail(
        to,
        `Reserva confirmada · ${b.preferredDate}`,
        bookingHtml(
          data,
          "¡Reserva confirmada!",
          `Te avisaremos el día anterior. Gestiona tu reserva en <a href="${env.appUrl}/dashboard">tu área</a>.`,
        ),
      );
    case "reminder":
      return sendEmail(
        to,
        `Mañana te limpiamos la casa`,
        bookingHtml(
          data,
          "Te recordamos tu limpieza",
          `Mañana ${b.preferredDate} en la franja de ${slotLabel(b.preferredSlot)}.`,
        ),
      );
    case "cancellation":
      return sendEmail(
        to,
        `Reserva cancelada · ${b.preferredDate}`,
        bookingHtml(data, "Tu reserva se ha cancelado", "Puedes reservar de nuevo cuando quieras."),
      );
    case "review":
      return sendEmail(
        to,
        "¿Qué tal el servicio?",
        emailShell(
          "Tu opinión nos ayuda",
          `<p>¿Qué te pareció la limpieza?</p>
           <p><a href="${env.appUrl}/dashboard">Valorar el servicio</a> y cuéntanos cómo ha ido.</p>`,
        ),
      );
  }
}
