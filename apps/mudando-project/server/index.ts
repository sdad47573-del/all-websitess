import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";

import { getDb, nextId } from "./db.js";
import { sendQuoteEmail } from "./email.js";
import {
  calcularPresupuesto,
  extrasFromList,
  EXTRAS,
  VIVIENDAS,
  type ExtraKey,
} from "./quote.js";

/**
 * This app's HTTP API.
 *
 * The app used to run on Convex, with quotes, reviews and call-back leads in
 * Convex tables scoped to the signed-in user, and a `role === "admin"` check in
 * front of the moderation routes. That is replaced by Hono routes over SQLite.
 *
 * Auth is gone, which removes both the per-user scoping and the role checks.
 * See `server/README.md` for why that is acceptable here and what it means if
 * this is ever exposed beyond localhost.
 *
 * Routes are declared in one chained expression on purpose: Hono carries each
 * route in a type parameter, and only the value returned by the chain has it.
 * Declaring them separately would leave `AppType` empty and the frontend client
 * untyped.
 */

// ---------------------------------------------------------------------------
// Domain vocabulary
// ---------------------------------------------------------------------------

export const QUOTE_STATUSES = [
  "pendiente",
  "confirmado",
  "completado",
  "cancelado",
] as const;
export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

export const REVIEW_STATUSES = ["pendiente", "aprobada", "rechazada"] as const;
export type ReviewStatus = (typeof REVIEW_STATUSES)[number];

export const CALLBACK_STATUSES = ["nuevo", "llamado", "descartado"] as const;
export type CallbackStatus = (typeof CALLBACK_STATUSES)[number];

/** A quote, as the API returns it. */
export interface Quote {
  id: string;
  contact: string | null;
  email: string | null;
  vivienda: string;
  distanciaKm: number;
  pisoOrigen: number;
  pisoDestino: number;
  volumen: number;
  finesDeSemana: number;
  extras: ExtraKey[];
  total: number;
  status: QuoteStatus;
  scheduledDate: string | null;
  checklistState: string[];
  emailedAt: number | null;
  createdAt: number;
}

export interface Review {
  id: string;
  author: string;
  fromCity: string | null;
  toCity: string | null;
  rating: number;
  text: string;
  status: ReviewStatus;
  createdAt: number;
}

export interface Callback {
  id: string;
  name: string;
  phone: string;
  comment: string | null;
  status: CallbackStatus;
  createdAt: number;
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato AAAA-MM-DD");

const email = z
  .string()
  .trim()
  // Deliberately loose: the only way to know an address is real is to send to
  // it, and a stricter pattern rejects valid addresses more often than not.
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Introduce un email válido.");

const vivienda = z.enum(VIVIENDAS);
const extra = z.enum(EXTRAS);

/** The inputs of a quote. Note there is no `total`: the server computes it. */
const quoteInput = z.object({
  vivienda,
  distanciaKm: z
    .number()
    .nonnegative("La distancia no puede ser negativa.")
    .max(2000),
  pisoOrigen: z.number().int().min(0).max(60),
  pisoDestino: z.number().int().min(0).max(60),
  volumen: z.number().nonnegative("El volumen no puede ser negativo.").max(500),
  finesDeSemana: z.number().int().min(0).max(2),
  extras: z.array(extra),
  contact: z.string().trim().max(120).optional(),
});

/** Normalises validation failures to the same `{ error }` shape as everything else. */
function validationMessage(error: z.ZodError): string {
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
//
// The columns are snake_case and two of them hold JSON arrays, so every read
// goes through here rather than spreading a row straight into the response.
// ---------------------------------------------------------------------------

type QuoteRow = {
  id: string;
  contact: string | null;
  email: string | null;
  vivienda: string;
  distancia_km: number;
  piso_origen: number;
  piso_destino: number;
  volumen: number;
  fines_de_semana: number;
  extras: string;
  total: number;
  status: string;
  scheduled_date: string | null;
  checklist_state: string;
  emailed_at: number | null;
  created_at: number;
};

const QUOTE_COLUMNS = `id, contact, email, vivienda, distancia_km, piso_origen,
	piso_destino, volumen, fines_de_semana, extras, total, status,
	scheduled_date, checklist_state, emailed_at, created_at`;

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

function toQuote(row: QuoteRow): Quote {
  return {
    id: row.id,
    contact: row.contact,
    email: row.email,
    vivienda: row.vivienda,
    distanciaKm: row.distancia_km,
    pisoOrigen: row.piso_origen,
    pisoDestino: row.piso_destino,
    volumen: row.volumen,
    finesDeSemana: row.fines_de_semana,
    extras: jsonArray(row.extras) as ExtraKey[],
    total: row.total,
    status: row.status as QuoteStatus,
    scheduledDate: row.scheduled_date,
    checklistState: jsonArray(row.checklist_state),
    emailedAt: row.emailed_at,
    createdAt: row.created_at,
  };
}

type ReviewRow = {
  id: string;
  author: string;
  from_city: string | null;
  to_city: string | null;
  rating: number;
  text: string;
  status: string;
  created_at: number;
};

const REVIEW_COLUMNS =
  "id, author, from_city, to_city, rating, text, status, created_at";

function toReview(row: ReviewRow): Review {
  return {
    id: row.id,
    author: row.author,
    fromCity: row.from_city,
    toCity: row.to_city,
    rating: row.rating,
    text: row.text,
    status: row.status as ReviewStatus,
    createdAt: row.created_at,
  };
}

type CallbackRow = {
  id: string;
  name: string;
  phone: string;
  comment: string | null;
  status: string;
  created_at: number;
};

const CALLBACK_COLUMNS = "id, name, phone, comment, status, created_at";

function toCallback(row: CallbackRow): Callback {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    comment: row.comment,
    status: row.status as CallbackStatus,
    createdAt: row.created_at,
  };
}

/** Reads one quote, or `null` if there is no such id. */
function readQuote(id: string): Quote | null {
  const row = getDb()
    .query<
      QuoteRow,
      [string]
    >(`SELECT ${QUOTE_COLUMNS} FROM quotes WHERE id = ?`)
    .get(id);
  return row ? toQuote(row) : null;
}

/** Reads a quote or throws a 404, so handlers do not repeat the check. */
function requireQuote(id: string): Quote {
  const quote = readQuote(id);
  if (!quote)
    throw new HTTPException(404, { message: "Presupuesto no encontrado." });
  return quote;
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
  .get("/api/health", (c) =>
    c.json({ ok: true, email: Boolean(process.env.RESEND_API_KEY) }),
  )
  // -------------------------------------------------------------------------
  // Quotes
  // -------------------------------------------------------------------------
  /** Every quote, newest first, optionally filtered by status. */
  .get(
    "/api/quotes",
    query(z.object({ status: z.enum(QUOTE_STATUSES).optional() })),
    (c) => {
      const { status } = c.req.valid("query");
      const rows = status
        ? getDb()
            .query<QuoteRow, [string]>(
              `SELECT ${QUOTE_COLUMNS} FROM quotes WHERE status = ?
							 ORDER BY created_at DESC, rowid DESC`,
            )
            .all(status)
        : getDb()
            .query<
              QuoteRow,
              []
            >(`SELECT ${QUOTE_COLUMNS} FROM quotes ORDER BY created_at DESC, rowid DESC`)
            .all();
      return c.json(rows.map(toQuote));
    },
  )
  /**
   * Saves a quote from the public calculator.
   *
   * The body carries the inputs and no price: `total` is computed here from
   * `calcularPresupuesto`, so a client cannot ask for a number of its choosing.
   */
  .post("/api/quotes", body(quoteInput), (c) => {
    const input = c.req.valid("json");
    const { total } = calcularPresupuesto({
      vivienda: input.vivienda,
      distanciaKm: input.distanciaKm,
      pisoOrigen: input.pisoOrigen,
      pisoDestino: input.pisoDestino,
      volumen: input.volumen,
      finesDeSemana: input.finesDeSemana,
      extras: extrasFromList(input.extras),
    });

    const db = getDb();
    const id = nextId(db, "quotes");
    const createdAt = Date.now();

    db.query(
      `INSERT INTO quotes
			   (id, contact, vivienda, distancia_km, piso_origen, piso_destino,
			    volumen, fines_de_semana, extras, total, status, scheduled_date,
			    checklist_state, emailed_at, created_at)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pendiente', NULL, '[]', NULL, ?)`,
    ).run(
      id,
      input.contact ?? null,
      input.vivienda,
      input.distanciaKm,
      input.pisoOrigen,
      input.pisoDestino,
      input.volumen,
      input.finesDeSemana,
      JSON.stringify(input.extras),
      total,
      createdAt,
    );

    return c.json(requireQuote(id), 201);
  })
  /** One quote. */
  .get("/api/quotes/:id", (c) => c.json(requireQuote(c.req.param("id"))))
  /** Confirms the booking with a date the visitor chose. */
  .post(
    "/api/quotes/:id/confirm",
    body(z.object({ scheduledDate: isoDate })),
    (c) => {
      const quote = requireQuote(c.req.param("id"));
      const { scheduledDate } = c.req.valid("json");

      if (quote.status !== "pendiente") {
        throw new HTTPException(409, {
          message: "Solo se pueden confirmar presupuestos pendientes.",
        });
      }
      // Yesterday is allowed, so a move booked earlier today is not rejected
      // by the time the request lands.
      const chosen = new Date(`${scheduledDate}T00:00:00`).getTime();
      if (Number.isNaN(chosen) || chosen < Date.now() - 86_400_000) {
        throw new HTTPException(400, { message: "Elige una fecha válida." });
      }

      getDb()
        .query(
          "UPDATE quotes SET status = 'confirmado', scheduled_date = ? WHERE id = ?",
        )
        .run(scheduledDate, quote.id);
      return c.json(requireQuote(quote.id));
    },
  )
  /** Cancels a quote. */
  .post("/api/quotes/:id/cancel", (c) => {
    const quote = requireQuote(c.req.param("id"));
    if (quote.status === "completado") {
      throw new HTTPException(409, {
        message: "Una mudanza completada no se puede cancelar.",
      });
    }

    getDb()
      .query("UPDATE quotes SET status = 'cancelado' WHERE id = ?")
      .run(quote.id);
    return c.json(requireQuote(quote.id));
  })
  /** Saves which checklist steps the visitor has ticked off. */
  .put(
    "/api/quotes/:id/checklist",
    body(z.object({ checklistState: z.array(z.string().max(40)) })),
    (c) => {
      const quote = requireQuote(c.req.param("id"));
      const { checklistState } = c.req.valid("json");

      getDb()
        .query("UPDATE quotes SET checklist_state = ? WHERE id = ?")
        .run(JSON.stringify(checklistState), quote.id);
      return c.json(requireQuote(quote.id));
    },
  )
  /**
   * Emails the quote to an address the visitor types in.
   *
   * The address is collected here rather than at save time, because saving a
   * quote from the public calculator must not require handing over an email.
   */
  .post(
    "/api/quotes/:id/email",
    body(z.object({ email, name: z.string().trim().max(80).optional() })),
    async (c) => {
      const quote = requireQuote(c.req.param("id"));
      const { email: to, name } = c.req.valid("json");

      // A quote the visitor cancelled has nothing worth sending.
      if (quote.status === "cancelado") {
        throw new HTTPException(409, {
          message: "Este presupuesto está cancelado.",
        });
      }

      const result = await sendQuoteEmail(to, quote, name ?? null);
      if (result.skipped) return c.json(result);

      const db = getDb();
      db.query("UPDATE quotes SET emailed_at = ?, email = ? WHERE id = ?").run(
        Date.now(),
        to,
        quote.id,
      );
      return c.json({ skipped: false as const });
    },
  )
  // -------------------------------------------------------------------------
  // Call-back leads
  // -------------------------------------------------------------------------
  /** Every lead, newest first. */
  .get("/api/callbacks", (c) => {
    const rows = getDb()
      .query<CallbackRow, []>(
        `SELECT ${CALLBACK_COLUMNS} FROM callbacks
				 ORDER BY created_at DESC, rowid DESC`,
      )
      .all();
    return c.json(rows.map(toCallback));
  })
  /** Records a call-back request from the landing page. */
  .post(
    "/api/callbacks",
    body(
      z.object({
        name: z.string().trim().min(2, "Dinos tu nombre.").max(80),
        // Spaces, brackets and dashes are normal in a written phone number.
        phone: z
          .string()
          .trim()
          .regex(/^[+0-9 ()-]{9,18}$/, "Introduce un teléfono válido."),
        comment: z.string().trim().max(500).optional(),
      }),
    ),
    (c) => {
      const input = c.req.valid("json");
      const db = getDb();
      const id = nextId(db, "callbacks");

      db.query(
        `INSERT INTO callbacks (id, name, phone, comment, status, created_at)
				 VALUES (?, ?, ?, ?, 'nuevo', ?)`,
      ).run(id, input.name, input.phone, input.comment ?? null, Date.now());

      const row = db
        .query<
          CallbackRow,
          [string]
        >(`SELECT ${CALLBACK_COLUMNS} FROM callbacks WHERE id = ?`)
        .get(id);

      return c.json(row ? toCallback(row) : null, 201);
    },
  )
  /** Moves a lead along its funnel. */
  .put(
    "/api/callbacks/:id",
    body(z.object({ status: z.enum(CALLBACK_STATUSES) })),
    (c) => {
      const { id } = c.req.param();
      const { status } = c.req.valid("json");

      const result = getDb()
        .query("UPDATE callbacks SET status = ? WHERE id = ?")
        .run(status, id);
      if (result.changes === 0) {
        throw new HTTPException(404, { message: "Solicitud no encontrada." });
      }
      return c.json({ id, status });
    },
  )
  // -------------------------------------------------------------------------
  // Reviews
  // -------------------------------------------------------------------------
  /** Approved reviews, for the landing page. */
  .get("/api/reviews", (c) => {
    const rows = getDb()
      .query<ReviewRow, []>(
        `SELECT ${REVIEW_COLUMNS} FROM reviews WHERE status = 'aprobada'
				 ORDER BY created_at DESC, rowid DESC LIMIT 6`,
      )
      .all();
    return c.json(rows.map(toReview));
  })
  /** The moderation queue. */
  .get("/api/reviews/pending", (c) => {
    const rows = getDb()
      .query<ReviewRow, []>(
        `SELECT ${REVIEW_COLUMNS} FROM reviews WHERE status = 'pendiente'
				 ORDER BY created_at DESC, rowid DESC`,
      )
      .all();
    return c.json(rows.map(toReview));
  })
  /** Submits a review, which waits for moderation before it is shown. */
  .post(
    "/api/reviews",
    body(
      z.object({
        author: z.string().trim().min(2, "Dinos tu nombre.").max(60),
        // The original Convex rule was one Spanish message for any out-of-range
        // rating, so every bound says the same thing rather than Zod's English.
        rating: z
          .number({ invalid_type_error: "Valoración no válida." })
          .int("Valoración no válida.")
          .min(1, "Valoración no válida.")
          .max(5, "Valoración no válida."),
        // The original rules, kept: too short reads as spam, too long is a
        // testimonial nobody finishes.
        text: z
          .string()
          .trim()
          .min(
            20,
            "Cuéntanos algo más: la reseña debe tener al menos 20 caracteres.",
          )
          .max(600, "La reseña no puede superar los 600 caracteres."),
        fromCity: z.string().trim().max(60).optional(),
        toCity: z.string().trim().max(60).optional(),
      }),
    ),
    (c) => {
      const input = c.req.valid("json");
      const db = getDb();
      const id = nextId(db, "reviews");

      db.query(
        `INSERT INTO reviews (id, author, from_city, to_city, rating, text, status, created_at)
				 VALUES (?, ?, ?, ?, ?, ?, 'pendiente', ?)`,
      ).run(
        id,
        input.author,
        input.fromCity ?? null,
        input.toCity ?? null,
        input.rating,
        input.text,
        Date.now(),
      );

      return c.json(
        {
          id,
          author: input.author,
          rating: input.rating,
          status: "pendiente" as const,
        },
        201,
      );
    },
  )
  /** Approves or rejects a review. */
  .put(
    "/api/reviews/:id",
    body(z.object({ status: z.enum(["aprobada", "rechazada"]) })),
    (c) => {
      const { id } = c.req.param();
      const { status } = c.req.valid("json");

      const result = getDb()
        .query("UPDATE reviews SET status = ? WHERE id = ?")
        .run(status, id);
      if (result.changes === 0) {
        throw new HTTPException(404, { message: "Reseña no encontrada." });
      }
      return c.json({ id, status });
    },
  );

export default app;

/** The API's shape, for the frontend to build a typed client. */
export type AppType = typeof app;
