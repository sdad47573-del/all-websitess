/**
 * Sending the quote by email, with Resend.
 *
 * This is server-only: `RESEND_API_KEY` never leaves the API process. The
 * Convex version read the key from the deployment's environment and quietly
 * returned `{ skipped: true }` when it was missing; this keeps that behaviour
 * so a local checkout works without an account, and says so in the response
 * rather than failing.
 */

import { Resend } from "resend";

import { formatEuros, VIVIENDA_META, type Vivienda } from "./quote.js";

/** The bit of a quote the email needs. */
export type EmailableQuote = {
  id: string;
  vivienda: string;
  distanciaKm: number;
  pisoOrigen: number;
  pisoDestino: number;
  volumen: number;
  extras: string[];
  total: number;
};

const FROM = "Mudando <onboarding@resend.dev>";

/** True when a key is present, so the UI can explain why nothing was sent. */
export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

/**
 * Renders the quote email.
 *
 * Everything interpolated here comes from a validated quote: the housing type
 * is one of a fixed set, the numbers are numbers and the extras are known keys.
 * `fromCity`/`toCity` are not part of a quote, so there is no free text in the
 * body to have to escape.
 */
function renderHtml(
  quote: EmailableQuote,
  recipientName: string | null,
): string {
  const label =
    VIVIENDA_META[quote.vivienda as Vivienda]?.label ?? quote.vivienda;
  const totalFormateado = formatEuros(quote.total);
  const extrasTexto =
    quote.extras.length > 0 ? quote.extras.join(", ") : "Sin extras";
  const greeting = recipientName ? `, ${recipientName}` : "";

  return `
    <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; color: #243050;">
      <p style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #EF7C4D; margin: 0 0 4px;">
        Presupuesto Mudando
      </p>
      <h1 style="font-size: 22px; margin: 0 0 16px;">Tu precio cerrado${greeting}</h1>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 6px 0; color: #6b7280;">Tipo de mudanza</td><td style="text-align: right; font-weight: bold;">${label}</td></tr>
        <tr><td style="padding: 6px 0; color: #6b7280;">Distancia</td><td style="text-align: right; font-weight: bold;">${quote.distanciaKm} km</td></tr>
        <tr><td style="padding: 6px 0; color: #6b7280;">Plantas</td><td style="text-align: right; font-weight: bold;">${quote.pisoOrigen}ª → ${quote.pisoDestino}ª</td></tr>
        <tr><td style="padding: 6px 0; color: #6b7280;">Volumen</td><td style="text-align: right; font-weight: bold;">${quote.volumen} m³</td></tr>
        <tr><td style="padding: 6px 0; color: #6b7280;">Extras</td><td style="text-align: right; font-weight: bold;">${extrasTexto}</td></tr>
      </table>
      <p style="background: #243050; color: #ffffff; font-size: 24px; font-weight: bold; text-align: center; padding: 14px; border-radius: 12px; margin: 18px 0;">
        ${totalFormateado} <span style="font-size: 12px; font-weight: normal; opacity: .8;">IVA incluido · válido 30 días</span>
      </p>
      <p style="font-size: 13px; color: #6b7280;">
        Precio cerrado: si no cambian las condiciones, no cambia la factura.
      </p>
    </div>
  `;
}

export type SendResult = { skipped: true; reason: string } | { skipped: false };

/** Sends the quote, or explains why it could not be sent. */
export async function sendQuoteEmail(
  to: string,
  quote: EmailableQuote,
  recipientName: string | null,
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      skipped: true,
      reason: "El envío de emails no está configurado (falta RESEND_API_KEY).",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject: `Tu presupuesto Mudando: ${formatEuros(quote.total)}`,
    html: renderHtml(quote, recipientName),
  });

  if (error) {
    throw new Error(`No se pudo enviar el email: ${error.message}`);
  }

  return { skipped: false };
}
