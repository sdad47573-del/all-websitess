import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import {
  BOOKING_STATUSES,
  computePrice,
  EXTRA_IDS,
  generateGiftCode,
  MAX_DAYS_AHEAD,
  normaliseGiftCode,
  PASS_CATALOG,
  PASS_TYPES,
  SERVICE_IDS,
  SLOT_CAPACITY,
  TIME_SLOTS,
  VEHICLE_TYPES,
  type BookingStatus,
  type ExtraId,
  type TimeSlot,
} from "./catalog.js";
import { getDb, nextId } from "./db.js";

/**
 * This app's HTTP API.
 *
 * The app used to run on Convex, with bookings, passes, gift vouchers, reviews
 * and contact messages in Convex tables scoped to the signed-in user, and an
 * admin role in front of the workshop and moderation routes. That is replaced by
 * Hono routes over SQLite.
 *
 * The pricing already lived on the server and still does: `POST /api/bookings`
 * does not accept a `price`, it computes one from `server/catalog.ts`. That part
 * of the original design was correct and is kept.
 *
 * See `server/README.md` for what removing auth costs, chiefly the two checks
 * that needed an identity: "not your booking" and "not your own voucher".
 *
 * Routes are declared in one chained expression on purpose: Hono carries each
 * route in a type parameter, and only the value returned by the chain has it.
 * Declaring them separately would leave `AppType` empty and the frontend client
 * untyped.
 */

// ---------------------------------------------------------------------------
// Shapes returned to the client
// ---------------------------------------------------------------------------

export interface Booking {
  id: string;
  customerName: string;
  customerPhone: string;
  serviceId: string;
  vehicleType: string;
  vehiclePlate: string | null;
  date: string;
  timeSlot: string;
  price: number;
  status: BookingStatus;
  notes: string | null;
  extras: ExtraId[];
  discount: number;
  usedPassId: string | null;
  pickup: boolean;
  giftCode: string | null;
  createdAt: number;
}

export interface Pass {
  id: string;
  serviceId: string;
  washesTotal: number;
  washesUsed: number;
  pricePaid: number;
  purchasedAt: number;
  /** Washes still available. Derived, so the client never has to subtract. */
  washesLeft: number;
}

export interface Gift {
  id: string;
  code: string;
  amount: number;
  status: "active" | "redeemed";
  createdAt: number;
  redeemedBy: string | null;
  redeemedAt: number | null;
}

export interface Review {
  id: string;
  bookingId: string;
  author: string;
  rating: number;
  comment: string | null;
  createdAt: number;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  body: string;
  status: "new" | "read";
  createdAt: number;
}

export interface Availability {
  timeSlot: TimeSlot;
  taken: number;
  free: boolean;
}

export interface Stats {
  total: number;
  pending: number;
  confirmed: number;
  done: number;
  cancelled: number;
  todayCount: number;
  revenueDone: number;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato AAAA-MM-DD");

const serviceId = z.enum(SERVICE_IDS);
const vehicleType = z.enum(VEHICLE_TYPES);
const extra = z.enum(EXTRA_IDS);
const bookingStatus = z.enum(BOOKING_STATUSES);

/** A phone number, loose enough for the spaces and dashes people actually type. */
const phone = z
  .string()
  .trim()
  .min(9, "Introduce un teléfono válido.")
  .max(18)
  .regex(/^[+0-9 ()-]+$/, "Introduce un teléfono válido.");

const bookingInput = z.object({
  customerName: z.string().trim().min(2, "Indica tu nombre.").max(80),
  customerPhone: phone,
  serviceId,
  vehicleType,
  vehiclePlate: z
    .string()
    .trim()
    // Plates are Latin-ish: letters and digits, spaces and hyphens only.
    .regex(/^[A-Za-z0-9 -]{0,12}$/, "La matrícula no parece válida.")
    .optional(),
  date: isoDate,
  timeSlot: z.enum(TIME_SLOTS),
  notes: z.string().trim().max(300).optional(),
  extras: z.array(extra).default([]),
  promoCode: z.string().trim().max(20).optional(),
  usePassId: z.string().max(60).optional(),
  pickup: z.boolean().optional(),
  giftCode: z.string().trim().max(20).optional(),
});

/** Normalises validation failures to the same `{ error }` shape as everything else. */
function validationMessage(error: z.core.$ZodError): string {
  return error.issues
    .map((issue) => {
      const field = issue.path.join(".");
      return field ? `${field}: ${issue.message}` : issue.message;
    })
    .join(" ");
}

/**
 * A query validator that reports failures as `{ error }`.
 *
 * `zValidator`'s default is to return the raw `ZodError`, which the frontend's
 * `errorMessage` cannot read. Body validators pass the same handler inline, so
 * this keeps the two from drifting apart.
 */
function query<T extends z.ZodTypeAny>(schema: T) {
  return zValidator("query", schema, (result, c) => {
    if (!result.success) {
      return c.json({ error: validationMessage(result.error) }, 400);
    }
  });
}

/** A JSON body validator that reports failures as `{ error }`. */
function body<T extends z.ZodTypeAny>(schema: T) {
  return zValidator("json", schema, (result, c) => {
    if (!result.success) {
      return c.json({ error: validationMessage(result.error) }, 400);
    }
  });
}

// ---------------------------------------------------------------------------
// Row mapping
// ---------------------------------------------------------------------------

type BookingRow = {
  id: string;
  customer_name: string;
  customer_phone: string;
  service_id: string;
  vehicle_type: string;
  vehicle_plate: string | null;
  date: string;
  time_slot: string;
  price: number;
  status: string;
  notes: string | null;
  extras: string;
  discount: number;
  used_pass_id: string | null;
  pickup: number;
  gift_code: string | null;
  created_at: number;
};

const BOOKING_COLUMNS = `id, customer_name, customer_phone, service_id, vehicle_type,
	vehicle_plate, date, time_slot, price, status, notes, extras, discount,
	used_pass_id, pickup, gift_code, created_at`;

/** Parses a JSON array column, falling back to empty if it is somehow corrupt. */
function jsonArray(raw: string): string[] {
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((v): v is string => typeof v === "string")
      : [];
  } catch {
    return [];
  }
}

function toBooking(row: BookingRow): Booking {
  return {
    id: row.id,
    customerName: row.customer_name,
    customerPhone: row.customer_phone,
    serviceId: row.service_id,
    vehicleType: row.vehicle_type,
    vehiclePlate: row.vehicle_plate,
    date: row.date,
    timeSlot: row.time_slot,
    price: row.price,
    status: row.status as BookingStatus,
    notes: row.notes,
    extras: jsonArray(row.extras) as ExtraId[],
    discount: row.discount,
    usedPassId: row.used_pass_id,
    // SQLite has no boolean type; it stores 0 and 1.
    pickup: row.pickup === 1,
    giftCode: row.gift_code,
    createdAt: row.created_at,
  };
}

type PassRow = {
  id: string;
  service_id: string;
  washes_total: number;
  washes_used: number;
  price_paid: number;
  purchased_at: number;
};

const PASS_COLUMNS =
  "id, service_id, washes_total, washes_used, price_paid, purchased_at";

function toPass(row: PassRow): Pass {
  return {
    id: row.id,
    serviceId: row.service_id,
    washesTotal: row.washes_total,
    washesUsed: row.washes_used,
    pricePaid: row.price_paid,
    purchasedAt: row.purchased_at,
    washesLeft: row.washes_total - row.washes_used,
  };
}

type GiftRow = {
  id: string;
  code: string;
  amount: number;
  status: string;
  created_at: number;
  redeemed_by: string | null;
  redeemed_at: number | null;
};

const GIFT_COLUMNS =
  "id, code, amount, status, created_at, redeemed_by, redeemed_at";

function toGift(row: GiftRow): Gift {
  return {
    id: row.id,
    code: row.code,
    amount: row.amount,
    status: row.status as Gift["status"],
    createdAt: row.created_at,
    redeemedBy: row.redeemed_by,
    redeemedAt: row.redeemed_at,
  };
}

type ReviewRow = {
  id: string;
  booking_id: string;
  author: string;
  rating: number;
  comment: string | null;
  created_at: number;
};

const REVIEW_COLUMNS = "id, booking_id, author, rating, comment, created_at";

function toReview(row: ReviewRow): Review {
  return {
    id: row.id,
    bookingId: row.booking_id,
    author: row.author,
    rating: row.rating,
    comment: row.comment,
    createdAt: row.created_at,
  };
}

type MessageRow = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  body: string;
  status: string;
  created_at: number;
};

const MESSAGE_COLUMNS = "id, name, email, phone, body, status, created_at";

function toMessage(row: MessageRow): Message {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    body: row.body,
    status: row.status as Message["status"],
    createdAt: row.created_at,
  };
}

/** Reads one booking or throws a 404, so handlers do not repeat the check. */
function requireBooking(id: string): Booking {
  const row = getDb()
    .query<
      BookingRow,
      [string]
    >(`SELECT ${BOOKING_COLUMNS} FROM bookings WHERE id = ?`)
    .get(id);
  if (!row) throw new HTTPException(404, { message: "Reserva no encontrada." });
  return toBooking(row);
}

/** Today as YYYY-MM-DD, in the same timezone the browser sees. */
function todayISO(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Booking creation
// ---------------------------------------------------------------------------

/**
 * Books a slot.
 *
 * This is one SQLite transaction because it reads the day's capacity, decides
 * what a pass or voucher is worth, consumes them and writes the booking. Under
 * Convex a single mutation was serialisable for free; here, without the
 * transaction, two requests arriving together could both see a free slot, or
 * both spend the same voucher.
 */
function bookSlot(input: z.infer<typeof bookingInput>): Booking {
  const db = getDb();

  const run = db.transaction((): string => {
    // --- date window ---
    const today = todayISO();
    if (input.date < today) {
      throw new HTTPException(400, {
        message: "No puedes reservar en fechas pasadas.",
      });
    }
    const daysAhead = Math.floor(
      (new Date(`${input.date}T00:00:00`).getTime() -
        new Date(`${today}T00:00:00`).getTime()) /
        86_400_000,
    );
    if (daysAhead > MAX_DAYS_AHEAD) {
      throw new HTTPException(400, {
        message: `Solo se puede reservar con ${MAX_DAYS_AHEAD} días de antelación.`,
      });
    }

    // --- capacity, counting only bookings that still hold the slot ---
    const taken = db
      .query<{ total: number }, [string, string]>(
        `SELECT COUNT(*) AS total FROM bookings
				 WHERE date = ? AND time_slot = ? AND status != 'cancelled'`,
      )
      .get(input.date, input.timeSlot);
    if ((taken?.total ?? 0) >= SLOT_CAPACITY) {
      throw new HTTPException(409, {
        message: "Esa franja horaria está completa. Elige otra.",
      });
    }

    // --- resolve the pass ---
    let coveredByPass = false;
    if (input.usePassId) {
      const pass = db
        .query<
          PassRow,
          [string]
        >(`SELECT ${PASS_COLUMNS} FROM passes WHERE id = ?`)
        .get(input.usePassId);
      if (!pass) throw new HTTPException(404, { message: "Bono no válido." });
      if (pass.washes_used >= pass.washes_total) {
        throw new HTTPException(400, {
          message: "Tu bono no tiene lavados restantes.",
        });
      }
      if (pass.service_id !== input.serviceId) {
        throw new HTTPException(400, {
          message: "Este bono es para otro tipo de servicio.",
        });
      }
      coveredByPass = true;

      // The CHECK on the table would also catch this, but saying so
      // explicitly keeps the failure readable if the check ever moves.
      db.query(
        "UPDATE passes SET washes_used = washes_used + 1 WHERE id = ?",
      ).run(pass.id);
    }

    // --- resolve the voucher ---
    let giftAmount = 0;
    let giftRow: GiftRow | null = null;
    if (input.giftCode) {
      const code = normaliseGiftCode(input.giftCode);
      giftRow = db
        .query<
          GiftRow,
          [string]
        >(`SELECT ${GIFT_COLUMNS} FROM gifts WHERE code = ?`)
        .get(code);
      if (!giftRow) {
        throw new HTTPException(400, {
          message: "Código de bono regalo no válido.",
        });
      }
      if (giftRow.status === "redeemed") {
        throw new HTTPException(400, {
          message: "Este bono regalo ya ha sido canjeado.",
        });
      }
      giftAmount = giftRow.amount;

      db.query(
        "UPDATE gifts SET status = 'redeemed', redeemed_by = ?, redeemed_at = ? WHERE id = ?",
      ).run(input.customerName, Date.now(), giftRow.id);
    }

    // --- the price is ours, not the caller's ---
    const { price, discount } = computePrice({
      serviceId: input.serviceId,
      vehicleType: input.vehicleType,
      extras: input.extras,
      pickup: input.pickup,
      coveredByPass,
      giftAmount,
      promoCode: input.promoCode,
    });

    const id = nextId(db, "bookings");
    db.query(
      `INSERT INTO bookings
			   (id, customer_name, customer_phone, service_id, vehicle_type, vehicle_plate,
			    date, time_slot, price, status, notes, extras, discount, used_pass_id,
			    pickup, gift_code, created_at)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?, ?, ?, ?, ?)`,
    ).run(
      id,
      input.customerName,
      input.customerPhone,
      input.serviceId,
      input.vehicleType,
      input.vehiclePlate || null,
      input.date,
      input.timeSlot,
      price,
      input.notes || null,
      JSON.stringify(input.extras),
      discount,
      input.usePassId ?? null,
      input.pickup ? 1 : 0,
      giftRow?.code ?? null,
      Date.now(),
    );

    return id;
  });

  const id = run();
  return requireBooking(id);
}

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

const app = new Hono()
  // The Vite dev server runs on another port, so the browser needs CORS in
  // development. In production everything is served from one origin.
  .use(
    "/api/*",
    cors({
      origin: (origin) => origin ?? "*",
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    }),
  )
  .onError((error, c) => {
    if (error instanceof HTTPException) {
      return c.json({ error: error.message }, error.status as 400);
    }
    console.error("[api] unhandled error:", error);
    return c.json({ error: "Internal server error" }, 500);
  })
  /** Health check. */
  .get("/api/health", (c) => c.json({ ok: true }))
  // -------------------------------------------------------------------------
  // Bookings
  // -------------------------------------------------------------------------
  /** How full each slot is on a given day. Cancelled bookings do not count. */
  .get(
    "/api/bookings/availability",
    query(z.object({ date: isoDate })),
    (c) => {
      const { date } = c.req.valid("query");
      const rows = getDb()
        .query<{ time_slot: string; total: number }, [string]>(
          `SELECT time_slot, COUNT(*) AS total FROM bookings
				 WHERE date = ? AND status != 'cancelled' GROUP BY time_slot`,
        )
        .all(date);

      const counts = new Map(rows.map((row) => [row.time_slot, row.total]));
      const availability: Availability[] = TIME_SLOTS.map((timeSlot) => {
        const taken = counts.get(timeSlot) ?? 0;
        return { timeSlot, taken, free: taken < SLOT_CAPACITY };
      });
      return c.json(availability);
    },
  )
  /** Totals for the workshop dashboard. */
  .get("/api/bookings/stats", (c) => {
    const rows = getDb()
      .query<{ status: string; total: number; revenue: number }, []>(
        `SELECT status, COUNT(*) AS total, COALESCE(SUM(price), 0) AS revenue
				 FROM bookings GROUP BY status`,
      )
      .all();

    const byStatus = new Map(rows.map((row) => [row.status, row]));
    const at = (status: BookingStatus) =>
      byStatus.get(status) ?? { total: 0, revenue: 0 };

    const today = todayISO();
    const todayCount =
      getDb()
        .query<
          { total: number },
          [string]
        >(`SELECT COUNT(*) AS total FROM bookings WHERE date = ? AND status != 'cancelled'`)
        .get(today)?.total ?? 0;

    const stats: Stats = {
      total: rows.reduce((sum, row) => sum + row.total, 0),
      pending: at("pending").total,
      confirmed: at("confirmed").total,
      done: at("done").total,
      cancelled: at("cancelled").total,
      todayCount,
      // Only finished services count as revenue, as in the original.
      revenueDone: at("done").revenue,
    };
    return c.json(stats);
  })
  /** Every booking, newest first, optionally filtered by status. */
  .get(
    "/api/bookings",
    query(z.object({ status: bookingStatus.optional() })),
    (c) => {
      const { status } = c.req.valid("query");
      const rows = status
        ? getDb()
            .query<BookingRow, [string]>(
              `SELECT ${BOOKING_COLUMNS} FROM bookings WHERE status = ?
							 ORDER BY date DESC, time_slot DESC, rowid DESC`,
            )
            .all(status)
        : getDb()
            .query<BookingRow, []>(
              `SELECT ${BOOKING_COLUMNS} FROM bookings
							 ORDER BY date DESC, time_slot DESC, rowid DESC`,
            )
            .all();
      return c.json(rows.map(toBooking));
    },
  )
  /** Books a slot. The body carries no price; the server computes it. */
  .post("/api/bookings", body(bookingInput), (c) =>
    c.json(bookSlot(c.req.valid("json")), 201),
  )
  /** One booking. */
  .get("/api/bookings/:id", (c) => c.json(requireBooking(c.req.param("id"))))
  /**
   * Cancels a booking, handing the wash back if it used a pass.
   *
   * The "not your booking" check is gone: there is no customer identity to
   * compare against. See `server/README.md`.
   */
  .post("/api/bookings/:id/cancel", (c) => {
    const booking = requireBooking(c.req.param("id"));

    if (booking.status === "done") {
      throw new HTTPException(400, {
        message: "No puedes cancelar un servicio ya finalizado.",
      });
    }
    if (booking.status === "cancelled") {
      throw new HTTPException(400, {
        message: "Esta reserva ya estaba cancelada.",
      });
    }

    const db = getDb();
    const run = db.transaction(() => {
      db.query("UPDATE bookings SET status = 'cancelled' WHERE id = ?").run(
        booking.id,
      );

      // Give the wash back, so cancelling does not cost the customer a wash.
      if (booking.usedPassId) {
        db.query(
          `UPDATE passes SET washes_used = washes_used - 1
					 WHERE id = ? AND washes_used > 0`,
        ).run(booking.usedPassId);
      }
    });
    run();

    return c.json(requireBooking(booking.id));
  })
  /** The workshop moves a booking along. */
  .put(
    "/api/bookings/:id/status",
    body(z.object({ status: bookingStatus })),
    (c) => {
      const booking = requireBooking(c.req.param("id"));
      const { status } = c.req.valid("json");

      getDb()
        .query("UPDATE bookings SET status = ? WHERE id = ?")
        .run(status, booking.id);
      return c.json(requireBooking(booking.id));
    },
  )
  // -------------------------------------------------------------------------
  // Passes
  // -------------------------------------------------------------------------
  /** Every pass, newest first. */
  .get("/api/passes", (c) => {
    const rows = getDb()
      .query<
        PassRow,
        []
      >(`SELECT ${PASS_COLUMNS} FROM passes ORDER BY purchased_at DESC, rowid DESC`)
      .all();
    return c.json(rows.map(toPass));
  })
  /** Buys a pass. The price comes from the catalogue, not the request. */
  .post(
    "/api/passes",
    body(z.object({ passType: z.enum(PASS_TYPES) })),
    (c) => {
      const { passType } = c.req.valid("json");
      const def = PASS_CATALOG[passType];
      const db = getDb();
      const id = nextId(db, "passes");
      db.query(
        `INSERT INTO passes (id, service_id, washes_total, washes_used, price_paid, purchased_at)
			 VALUES (?, ?, ?, 0, ?, ?)`,
      ).run(id, def.serviceId, def.washesTotal, def.pricePaid, Date.now());

      const row = db
        .query<
          PassRow,
          [string]
        >(`SELECT ${PASS_COLUMNS} FROM passes WHERE id = ?`)
        .get(id);
      return c.json(toPass(row!), 201);
    },
  )
  // -------------------------------------------------------------------------
  // Gift vouchers
  // -------------------------------------------------------------------------
  /** Every voucher, newest first. */
  .get("/api/gifts", (c) => {
    const rows = getDb()
      .query<
        GiftRow,
        []
      >(`SELECT ${GIFT_COLUMNS} FROM gifts ORDER BY created_at DESC, rowid DESC`)
      .all();
    return c.json(rows.map(toGift));
  })
  /** Buys a voucher and returns its code. Payment happens at the workshop. */
  .post(
    "/api/gifts",
    body(
      z.object({
        amount: z.union([z.literal(25), z.literal(50), z.literal(100)]),
      }),
    ),
    (c) => {
      const { amount } = c.req.valid("json");

      const db = getDb();
      // `code` is UNIQUE, so a collision has to be handled rather than left
      // to surface as a 500. Eight random characters from a 32-symbol
      // alphabet makes one vanishingly unlikely, but not impossible.
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const code = generateGiftCode();
        const taken = db
          .query<
            { id: string },
            [string]
          >("SELECT id FROM gifts WHERE code = ?")
          .get(code);
        if (taken) continue;

        const id = nextId(db, "gifts");
        db.query(
          `INSERT INTO gifts (id, code, amount, status, created_at)
					 VALUES (?, ?, ?, 'active', ?)`,
        ).run(id, code, amount, Date.now());
        return c.json({ code, amount }, 201);
      }
      throw new HTTPException(500, {
        message: "No se pudo generar un código único.",
      });
    },
  )
  /**
   * Checks a voucher before it is offered at checkout.
   *
   * The original also refused to let the buyer redeem their own voucher. There
   * is no buyer identity to compare against now, so only "already spent" is
   * checked here; `POST /api/bookings` re-checks it inside the transaction.
   */
  .get(
    "/api/gifts/validate",
    query(z.object({ code: z.string().min(1).max(20) })),
    (c) => {
      const code = normaliseGiftCode(c.req.valid("query").code);

      const gift = getDb()
        .query<
          GiftRow,
          [string]
        >(`SELECT ${GIFT_COLUMNS} FROM gifts WHERE code = ?`)
        .get(code);
      if (!gift)
        return c.json({
          valid: false as const,
          reason: "Código no encontrado",
        });
      if (gift.status === "redeemed") {
        return c.json({
          valid: false as const,
          reason: "Este bono ya ha sido canjeado",
        });
      }
      return c.json({
        valid: true as const,
        amount: gift.amount,
        code: gift.code,
      });
    },
  )
  // -------------------------------------------------------------------------
  // Reviews
  // -------------------------------------------------------------------------
  /** Verified reviews for the landing page: a finished booking with a comment. */
  .get("/api/reviews", (c) => {
    const rows = getDb()
      .query<ReviewRow, []>(
        `SELECT ${REVIEW_COLUMNS} FROM reviews
				 WHERE comment IS NOT NULL AND TRIM(comment) != ''
				 ORDER BY created_at DESC, rowid DESC LIMIT 6`,
      )
      .all();
    return c.json(rows.map(toReview));
  })
  /** Average rating and total, for the admin panel. */
  .get("/api/reviews/summary", (c) => {
    const row = getDb()
      .query<
        { total: number; avg: number | null },
        []
      >("SELECT COUNT(*) AS total, AVG(rating) AS avg FROM reviews")
      .get();

    const total = row?.total ?? 0;
    if (total === 0) return c.json({ avg: 0, total: 0 });
    return c.json({ avg: Math.round((row!.avg ?? 0) * 10) / 10, total });
  })
  /**
   * Reviews a finished booking.
   *
   * Two checks survive from the original and are the real integrity guarantee:
   * the booking must be `done`, and it can only be reviewed once. Both are
   * enforced by the database as well, `done` by the handler and the single
   * review by the UNIQUE index on `booking_id`.
   */
  .post(
    "/api/reviews",
    body(
      z.object({
        bookingId: z.string().min(1),
        rating: z
          .number({ error: "Valoración entre 1 y 5." })
          .int("Valoración entre 1 y 5.")
          .min(1, "Valoración entre 1 y 5.")
          .max(5, "Valoración entre 1 y 5."),
        comment: z.string().trim().max(600).optional(),
      }),
    ),
    (c) => {
      const { bookingId, rating, comment } = c.req.valid("json");
      const booking = requireBooking(bookingId);

      if (booking.status !== "done") {
        throw new HTTPException(400, {
          message:
            "Solo puedes valorar servicios finalizados (reseñas verificadas).",
        });
      }

      const already = getDb()
        .query<
          { id: string },
          [string]
        >("SELECT id FROM reviews WHERE booking_id = ?")
        .get(bookingId);
      if (already) {
        throw new HTTPException(409, {
          message: "Ya has valorado este servicio.",
        });
      }

      // The author's first name only, which is what the landing page showed
      // when it read the name off the account.
      const author = booking.customerName.split(" ")[0] || "Cliente";

      const db = getDb();
      const id = nextId(db, "reviews");
      db.query(
        "INSERT INTO reviews (id, booking_id, author, rating, comment, created_at) VALUES (?, ?, ?, ?, ?, ?)",
      ).run(id, bookingId, author, rating, comment || null, Date.now());

      return c.json({ id, bookingId, author, rating }, 201);
    },
  )
  // -------------------------------------------------------------------------
  // Contact messages
  // -------------------------------------------------------------------------
  /** The contact form. Public, as it always was. */
  .post(
    "/api/messages",
    body(
      z.object({
        name: z.string().trim().min(1, "Indica tu nombre.").max(80),
        email: z
          .string()
          .trim()
          // Loose on purpose: the only way to know an address is real is
          // to write to it.
          .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email no válido."),
        phone: phone.optional(),
        body: z
          .string()
          .trim()
          .min(10, "Cuéntanos algo más (mínimo 10 caracteres).")
          .max(2000),
      }),
    ),
    (c) => {
      const input = c.req.valid("json");
      const db = getDb();
      const id = nextId(db, "messages");

      db.query(
        `INSERT INTO messages (id, name, email, phone, body, status, created_at)
				 VALUES (?, ?, ?, ?, ?, 'new', ?)`,
      ).run(
        id,
        input.name,
        input.email,
        input.phone ?? null,
        input.body,
        Date.now(),
      );

      return c.json({ id, status: "new" as const }, 201);
    },
  )
  /** The inbox, newest first. */
  .get("/api/messages", (c) => {
    const rows = getDb()
      .query<
        MessageRow,
        []
      >(`SELECT ${MESSAGE_COLUMNS} FROM messages ORDER BY created_at DESC, rowid DESC`)
      .all();
    return c.json(rows.map(toMessage));
  })
  /** Marks a message as read. */
  .put("/api/messages/:id", (c) => {
    const { id } = c.req.param();
    const result = getDb()
      .query("UPDATE messages SET status = 'read' WHERE id = ?")
      .run(id);
    if (result.changes === 0) {
      throw new HTTPException(404, { message: "Mensaje no encontrado." });
    }
    return c.json({ id, status: "read" as const });
  });

export default app;

/** The API's shape, for the frontend to build a typed client. */
export type AppType = typeof app;

/** Re-exported so `src/api.ts` can offer the status union to the client. */
export type { BookingStatus };

/**
 * The catalogue's value unions and lists, re-exported so the booking wizard
 * types its state from the same definitions the API validates against. Without
 * this the wizard holds `string` and every call site needs a cast.
 */
export {
  EXTRA_IDS,
  GIFT_AMOUNTS,
  SERVICE_IDS,
  TIME_SLOTS,
  VEHICLE_TYPES,
} from "./catalog.js";
export type {
  ExtraId,
  GiftAmount,
  PassType,
  ServiceId,
  TimeSlot,
  VehicleType,
} from "./catalog.js";
