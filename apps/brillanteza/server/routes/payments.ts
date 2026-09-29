import { Hono } from "hono";
import { HttpError, currentUser, requireUser, unwrap, requireString } from "@app-server";
import type { Env } from "../context";
import { db } from "../db";
import { env } from "../env";

export const paymentRoutes = new Hono<Env>();

/**
 * Pago con Stripe Checkout vía REST, sin SDK.
 *
 * Sin `STRIPE_SECRET_KEY` configurada todo responde `{ configured: false }` y
 * la app sigue funcionando sin pago online, que es como se comportaba la
 * action de Convex.
 */

paymentRoutes.use("*", requireUser);

/** Crea la sesión de checkout para una reserva propia. */
paymentRoutes.post("/checkout", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const bookingId = unwrap(requireString(body, "bookingId", { max: 60 }));
  const bookingSummary = unwrap(requireString(body, "bookingSummary", { max: 400 }));

  // El precio lo pone el servidor, nunca el cliente: se lee de la reserva.
  const booking = db
    .query("SELECT user_id, price, payment_status FROM bookings WHERE id = ?")
    .get(bookingId) as { user_id: string; price: number; payment_status: string | null } | null;
  if (!booking) throw new HttpError(404, "Reserva no encontrada.");
  if (booking.user_id !== user._id) throw new HttpError(403, "No autorizado");

  if (!env.stripeSecretKey) return c.json({ url: null, configured: false });

  const successUrl =
    (body.successUrl as string | undefined) ?? `${env.appUrl}/dashboard?pago=ok`;
  const cancelUrl = (body.cancelUrl as string | undefined) ?? `${env.appUrl}/dashboard?pago=cancel`;

  const form = new URLSearchParams();
  form.set("mode", "payment");
  form.set("success_url", successUrl);
  form.set("cancel_url", cancelUrl);
  form.set("client_reference_id", bookingId);
  form.set("line_items[0][quantity]", "1");
  form.set("line_items[0][price_data][currency]", "eur");
  form.set("line_items[0][price_data][unit_amount]", String(Math.round(booking.price * 100)));
  form.set("line_items[0][price_data][product_data][name]", "Brillanteza · Limpieza profesional");
  form.set("line_items[0][price_data][product_data][description]", bookingSummary.slice(0, 300));

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("[stripe] checkout respondió", response.status, text.slice(0, 200));
    throw new HttpError(502, "No se pudo iniciar el pago. Inténtalo de nuevo.");
  }

  const session = (await response.json()) as { url: string | null; id: string };
  db.query("UPDATE bookings SET stripe_session_id = ? WHERE id = ?").run(session.id, bookingId);

  return c.json({ url: session.url, configured: true });
});

/**
 * Confirma el pago tras el retorno de Stripe. Verifica la sesión contra la API
 * de Stripe antes de marcar nada: el `sessionId` viene del navegador y no es de
 * fiar por sí solo.
 */
paymentRoutes.post("/confirm", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const sessionId = unwrap(requireString(body, "sessionId", { max: 200 }));

  if (!env.stripeSecretKey) return c.json({ paid: false });

  const response = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
    { headers: { Authorization: `Bearer ${env.stripeSecretKey}` } },
  );
  if (!response.ok) return c.json({ paid: false });

  const session = (await response.json()) as {
    payment_status?: string;
    client_reference_id?: string;
  };
  const paid = session.payment_status === "paid";

  // Solo se marca pagada si además la sesión pertenece a una reserva de este
  // usuario: si no, el cliente podría confirmar el pago de otra reserva.
  if (paid && session.client_reference_id) {
    const user = currentUser(c);
    const booking = db
      .query("SELECT user_id FROM bookings WHERE id = ?")
      .get(session.client_reference_id) as { user_id: string } | null;
    if (booking?.user_id === user._id) {
      db.query("UPDATE bookings SET payment_status = 'paid' WHERE id = ?").run(
        session.client_reference_id,
      );
    }
  }

  return c.json({ paid });
});
