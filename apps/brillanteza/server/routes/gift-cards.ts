import { Hono } from "hono";
import {
  HttpError,
  currentUser,
  optionalString,
  requireString,
  requireUser,
  unwrap,
} from "@app-server";
import type { Env } from "../context";
import { db, newId, toGiftCard, transaction } from "../db";

export const giftCardRoutes = new Hono<Env>();

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const DENOMINATIONS = [50, 100, 200];

function randomCode(length: number): string {
  let out = "";
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  for (let i = 0; i < length; i++) {
    out += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  }
  return out;
}

const formatCode = () => `BRIL-${randomCode(4)}-${randomCode(4)}`;

const asGiftCard = (r: unknown) => toGiftCard(r as Record<string, string | number | null>);

/**
 * Valida una tarjeta y devuelve su saldo. Público: es el campo que rellena el
 * cliente al pagar, y no revela nada más que el importe disponible.
 */
giftCardRoutes.get("/validate", (c) => {
  const normalized = (c.req.query("code") ?? "").trim().toUpperCase();
  if (!/^BRIL-[A-Z2-9]{4}-[A-Z2-9]{4}$/.test(normalized)) {
    return c.json({ valid: false, remainingCents: 0, message: "Formato no válido" });
  }

  const card = db.query("SELECT * FROM gift_cards WHERE code = ?").get(normalized) as
    | { status: string; remaining_cents: number }
    | null;
  if (!card) {
    return c.json({ valid: false, remainingCents: 0, message: "Tarjeta no encontrada" });
  }
  if (card.status === "exhausted" || card.remaining_cents <= 0) {
    return c.json({ valid: false, remainingCents: 0, message: "Tarjeta sin saldo" });
  }
  return c.json({
    valid: true,
    remainingCents: card.remaining_cents,
    message: `Saldo disponible: ${(card.remaining_cents / 100).toFixed(2).replace(".", ",")} €`,
  });
});

giftCardRoutes.use("*", requireUser);

/** Tarjetas compradas por el usuario. */
giftCardRoutes.get("/mine", (c) => {
  const rows = db
    .query("SELECT * FROM gift_cards WHERE buyer_id = ? ORDER BY created_at DESC")
    .all(currentUser(c)._id) as Record<string, string | number | null>[];
  return c.json(rows.map(asGiftCard));
});

/** Importes disponibles, en euros. */
giftCardRoutes.get("/denominations", (c) => c.json(DENOMINATIONS));

/**
 * Compra (generación) de tarjeta regalo. En producción conectaría con un pago
 * real; aquí se genera al instante y queda asociada al comprador.
 */
giftCardRoutes.post("/", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const amount = Number(body.amountEuros);
  if (!DENOMINATIONS.includes(amount)) {
    return c.json({ error: "Importe no disponible" }, 400);
  }
  const message = unwrap(optionalString(body, "message", { max: 300 }));

  // Código único con reintentos; el índice único es la garantía real.
  let code = formatCode();
  for (let attempt = 0; attempt < 5; attempt++) {
    if (!db.query("SELECT 1 FROM gift_cards WHERE code = ?").get(code)) break;
    code = formatCode();
  }

  const id = newId("gft");
  db.query(
    `INSERT INTO gift_cards
       (id, code, amount_cents, remaining_cents, buyer_id, buyer_email, recipient_message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'active', ?)`,
  ).run(
    id,
    code,
    amount * 100,
    amount * 100,
    user._id,
    user.email ?? null,
    message ?? null,
    Date.now(),
  );

  return c.json({ id, code });
});

/**
 * Canje: aplica el saldo a una reserva. Si el saldo cubre el precio entero, la
 * reserva sale a coste cero; si no, lo cubre parcialmente. El descuento se
 * calcula y se descuenta dentro de una transacción, para que dos canjes
 * simultáneos no gasten el mismo saldo.
 */
giftCardRoutes.post("/redeem", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const code = unwrap(requireString(body, "code", { max: 40 })).toUpperCase();
  const bookingPrice = Number(body.bookingPrice);
  if (!Number.isFinite(bookingPrice) || bookingPrice < 0) {
    return c.json({ error: "Precio no válido" }, 400);
  }

  const result = transaction(() => {
    const card = db.query("SELECT * FROM gift_cards WHERE code = ?").get(code) as
      | { id: string; status: string; remaining_cents: number; redeemed_by_user_id: string | null }
      | null;
    if (!card) return { ok: false as const, discount: 0, message: "Tarjeta no encontrada" };
    if (card.status === "exhausted" || card.remaining_cents <= 0) {
      return { ok: false as const, discount: 0, message: "Tarjeta sin saldo" };
    }

    const discount = Math.min(card.remaining_cents / 100, bookingPrice);
    const newRemaining = Math.max(0, card.remaining_cents - Math.round(discount * 100));

    db.query(
      `UPDATE gift_cards SET remaining_cents = ?, status = ?, redeemed_by_user_id = ? WHERE id = ?`,
    ).run(
      newRemaining,
      newRemaining === 0 ? "exhausted" : "active",
      card.redeemed_by_user_id ?? user._id,
      card.id,
    );

    return { ok: true as const, discount };
  });

  if (!result.ok) return c.json({ ...result }, 400);
  return c.json(result);
});

void HttpError;
