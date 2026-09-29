import { beforeEach, describe, expect, test } from "bun:test";

import { getDb } from "./db.js";
import app, { type Callback, type Quote, type Review } from "./index.js";
import { calcularPresupuesto, extrasFromList } from "./quote.js";

/**
 * API tests.
 *
 * Run with `bun test`. Bun's built-in runner is used rather than vitest
 * because `bun:sqlite` is a Bun builtin that only resolves under Bun.
 *
 * The database is in-memory and the rows are cleared between tests, so each
 * test starts from a known state without reloading modules.
 */

process.env.DATABASE_PATH ??= ":memory:";

beforeEach(() => {
  getDb().exec(
    "DELETE FROM quotes; DELETE FROM reviews; DELETE FROM callbacks; DELETE FROM id_sequence;",
  );
});

/** Sends a request to the API and returns the raw response. */
function call(path: string, init?: RequestInit): Response | Promise<Response> {
  return app.request(`/api${path}`, init);
}

/** Sends a JSON body. */
function sendJson(
  method: string,
  path: string,
  body: unknown,
): Response | Promise<Response> {
  return call(path, {
    method,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

const postJson = (path: string, body: unknown) => sendJson("POST", path, body);
const putJson = (path: string, body: unknown) => sendJson("PUT", path, body);

/** A valid quote request, spread over to test one field at a time. */
const validQuote = {
  vivienda: "piso",
  distanciaKm: 25,
  pisoOrigen: 2,
  pisoDestino: 1,
  volumen: 25,
  finesDeSemana: 0,
  extras: ["embalaje"],
} as const;

/** Tomorrow, as YYYY-MM-DD, which `confirm` should accept. */
const tomorrow = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10);

describe("health", () => {
  test("reports ok", async () => {
    const response = await call("/health");

    expect(response.status).toBe(200);
    expect((await response.json()) as { ok: boolean }).toMatchObject({
      ok: true,
    });
  });
});

describe("quotes", () => {
  test("starts empty", async () => {
    const response = await call("/quotes");

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual([]);
  });

  test("computes the total instead of trusting the client", async () => {
    const response = await postJson("/quotes", validQuote);

    expect(response.status).toBe(201);
    const quote = (await response.json()) as Quote;
    const expected = calcularPresupuesto({
      ...validQuote,
      extras: extrasFromList(validQuote.extras),
    });
    expect(quote.total).toBe(expected.total);
  });

  test("ignores a total sent by the client", async () => {
    // The old API accepted `total` and stored it. If it ever comes back, a
    // visitor could name their own price.
    const response = await postJson("/quotes", { ...validQuote, total: 1 });
    const quote = (await response.json()) as Quote;

    expect(quote.total).not.toBe(1);
    expect(quote.total).toBeGreaterThan(300);
  });

  test("a quote with more extras costs more", async () => {
    const cheap = (await (
      await postJson("/quotes", { ...validQuote, extras: [] })
    ).json()) as Quote;
    const dear = (await (
      await postJson("/quotes", {
        ...validQuote,
        extras: ["embalaje", "muebles"],
      })
    ).json()) as Quote;

    expect(dear.total).toBeGreaterThan(cheap.total);
  });

  test("a weekend move costs more", async () => {
    const weekday = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;
    const weekend = (await (
      await postJson("/quotes", { ...validQuote, finesDeSemana: 2 })
    ).json()) as Quote;

    expect(weekend.total).toBeGreaterThan(weekday.total);
  });

  test("stores the extras and comes back as a list", async () => {
    const response = await postJson("/quotes", {
      ...validQuote,
      extras: ["embalaje", "guardamuebles"],
    });

    const quote = (await response.json()) as Quote;
    expect(quote.extras).toEqual(["embalaje", "guardamuebles"]);
    expect(quote.checklistState).toEqual([]);
  });

  test("starts pending with no date", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    expect(quote.status).toBe("pendiente");
    expect(quote.scheduledDate).toBeNull();
    expect(quote.emailedAt).toBeNull();
    expect(quote.id).toBe("quotes_1");
  });

  test("trims the contact", async () => {
    const quote = (await (
      await postJson("/quotes", { ...validQuote, contact: "  Lucía  " })
    ).json()) as Quote;

    expect(quote.contact).toBe("Lucía");
  });

  test("rejects an unknown housing type", async () => {
    const response = await postJson("/quotes", {
      ...validQuote,
      vivienda: "chalet",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "vivienda",
    );
  });

  test("rejects an unknown extra", async () => {
    const response = await postJson("/quotes", {
      ...validQuote,
      extras: ["piano"],
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "extras",
    );
  });

  test("rejects a negative distance", async () => {
    const response = await postJson("/quotes", {
      ...validQuote,
      distanciaKm: -5,
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "distanciaKm",
    );
  });

  test("errors are an { error } object, never a raw ZodError", async () => {
    const response = await postJson("/quotes", {});

    expect(response.status).toBe(400);
    const body = (await response.json()) as Record<string, unknown>;
    expect(typeof body.error).toBe("string");
    expect(body.issues).toBeUndefined();
  });

  test("filters by status", async () => {
    const pending = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;
    await postJson(`/quotes/${pending.id}/cancel`, {});

    const confirmed = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    const cancelled = (await (
      await call("/quotes?status=cancelado")
    ).json()) as Quote[];
    expect(cancelled).toHaveLength(1);
    expect(cancelled[0]?.id).toBe(pending.id);

    const all = (await (await call("/quotes")).json()) as Quote[];
    expect(all).toHaveLength(2);
    expect(all.map((q) => q.id)).toEqual([confirmed.id, pending.id]);
  });

  test("a bad status filter is an { error } object", async () => {
    const response = await call("/quotes?status=inventado");

    expect(response.status).toBe(400);
    const body = (await response.json()) as Record<string, unknown>;
    expect(typeof body.error).toBe("string");
    expect(body.issues).toBeUndefined();
  });

  test("404s on an unknown quote", async () => {
    const response = await call("/quotes/quotes_999");

    expect(response.status).toBe(404);
    expect(((await response.json()) as { error: string }).error).toBe(
      "Presupuesto no encontrado.",
    );
  });
});

describe("quote lifecycle", () => {
  test("confirms with a date", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    const response = await postJson(`/quotes/${quote.id}/confirm`, {
      scheduledDate: tomorrow,
    });
    expect(response.status).toBe(200);

    const confirmed = (await response.json()) as Quote;
    expect(confirmed.status).toBe("confirmado");
    expect(confirmed.scheduledDate).toBe(tomorrow);
  });

  test("rejects a malformed date", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    const response = await postJson(`/quotes/${quote.id}/confirm`, {
      scheduledDate: "25/12/2026",
    });
    expect(response.status).toBe(400);
  });

  test("rejects a date in the past", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    const response = await postJson(`/quotes/${quote.id}/confirm`, {
      scheduledDate: "2020-01-01",
    });
    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toBe(
      "Elige una fecha válida.",
    );
  });

  test("will not confirm a quote that is not pending", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;
    await postJson(`/quotes/${quote.id}/cancel`, {});

    const response = await postJson(`/quotes/${quote.id}/confirm`, {
      scheduledDate: tomorrow,
    });
    expect(response.status).toBe(409);
    expect(((await response.json()) as { error: string }).error).toContain(
      "pendientes",
    );
  });

  test("cancels a quote", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    const response = await postJson(`/quotes/${quote.id}/cancel`, {});
    expect(response.status).toBe(200);
    expect(((await response.json()) as Quote).status).toBe("cancelado");
  });

  test("will not cancel a completed move", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;
    getDb()
      .query("UPDATE quotes SET status = 'completado' WHERE id = ?")
      .run(quote.id);

    const response = await postJson(`/quotes/${quote.id}/cancel`, {});
    expect(response.status).toBe(409);
  });
});

describe("checklist", () => {
  test("saves the ticked steps", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    const response = await putJson(`/quotes/${quote.id}/checklist`, {
      checklistState: ["cajas", "filtro"],
    });

    expect(response.status).toBe(200);
    expect(((await response.json()) as Quote).checklistState).toEqual([
      "cajas",
      "filtro",
    ]);
  });

  test("accepts an empty list, to un-tick everything", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;
    await putJson(`/quotes/${quote.id}/checklist`, {
      checklistState: ["cajas"],
    });

    const response = await putJson(`/quotes/${quote.id}/checklist`, {
      checklistState: [],
    });
    expect(((await response.json()) as Quote).checklistState).toEqual([]);
  });

  test("404s on an unknown quote", async () => {
    const response = await putJson("/quotes/quotes_999/checklist", {
      checklistState: [],
    });
    expect(response.status).toBe(404);
  });
});

describe("email", () => {
  test("reports that it skipped when Resend is not configured", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    // No RESEND_API_KEY in the test environment, so this is the local path.
    const response = await postJson(`/quotes/${quote.id}/email`, {
      email: "lucia@example.com",
    });

    expect(response.status).toBe(200);
    const body = (await response.json()) as {
      skipped: boolean;
      reason: string;
    };
    expect(body.skipped).toBe(true);
    expect(body.reason).toContain("RESEND_API_KEY");
  });

  test("does not store the address when nothing was sent", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;
    await postJson(`/quotes/${quote.id}/email`, { email: "lucia@example.com" });

    const stored = (await (await call(`/quotes/${quote.id}`)).json()) as Quote;
    expect(stored.email).toBeNull();
    expect(stored.emailedAt).toBeNull();
  });

  test("rejects a malformed address before attempting to send", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;

    const response = await postJson(`/quotes/${quote.id}/email`, {
      email: "not-an-email",
    });
    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "email",
    );
  });

  test("will not email a cancelled quote", async () => {
    const quote = (await (
      await postJson("/quotes", validQuote)
    ).json()) as Quote;
    await postJson(`/quotes/${quote.id}/cancel`, {});

    const response = await postJson(`/quotes/${quote.id}/email`, {
      email: "lucia@example.com",
    });
    expect(response.status).toBe(409);
  });
});

describe("callbacks", () => {
  test("records a lead from the landing page", async () => {
    const response = await postJson("/callbacks", {
      name: "  Rosa Iglesias  ",
      phone: " +34 655 010 203 ",
      comment: "  Pregunta por Valencia  ",
    });

    expect(response.status).toBe(201);
    const lead = (await response.json()) as Callback;
    expect(lead.name).toBe("Rosa Iglesias");
    expect(lead.phone).toBe("+34 655 010 203");
    expect(lead.comment).toBe("Pregunta por Valencia");
    expect(lead.status).toBe("nuevo");
  });

  test("rejects a name that is too short", async () => {
    const response = await postJson("/callbacks", {
      name: "R",
      phone: "655010203",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "Dinos tu nombre",
    );
  });

  test("rejects a phone number that is not a phone number", async () => {
    const response = await postJson("/callbacks", {
      name: "Rosa",
      phone: "llámame",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "teléfono",
    );
  });

  test("lists leads newest first", async () => {
    await postJson("/callbacks", { name: "Primero", phone: "655010201" });
    await postJson("/callbacks", { name: "Segundo", phone: "655010202" });

    const leads = (await (await call("/callbacks")).json()) as Callback[];
    expect(leads.map((l) => l.name)).toEqual(["Segundo", "Primero"]);
  });

  test("moves a lead along the funnel", async () => {
    const lead = (await (
      await postJson("/callbacks", { name: "Rosa", phone: "655010203" })
    ).json()) as Callback;

    const response = await putJson(`/callbacks/${lead.id}`, {
      status: "llamado",
    });
    expect(response.status).toBe(200);

    const leads = (await (await call("/callbacks")).json()) as Callback[];
    expect(leads[0]?.status).toBe("llamado");
  });

  test("rejects an unknown status", async () => {
    const lead = (await (
      await postJson("/callbacks", { name: "Rosa", phone: "655010203" })
    ).json()) as Callback;

    const response = await putJson(`/callbacks/${lead.id}`, {
      status: "contestado",
    });
    expect(response.status).toBe(400);
  });

  test("404s when moving an unknown lead", async () => {
    const response = await putJson("/callbacks/callbacks_999", {
      status: "llamado",
    });
    expect(response.status).toBe(404);
  });
});

describe("reviews", () => {
  const validReview = {
    author: "Sara L.",
    rating: 5,
    text: "Me dieron precio cerrado y llegaron puntuales a la hora acordada.",
    fromCity: "Barcelona",
    toCity: "Tarragona",
  };

  test("a new review waits for moderation", async () => {
    const response = await postJson("/reviews", validReview);

    expect(response.status).toBe(201);
    expect((await response.json()) as { status: string }).toMatchObject({
      status: "pendiente",
    });
  });

  test("an approved review shows on the landing, a pending one does not", async () => {
    const pending = (await (
      await postJson("/reviews", validReview)
    ).json()) as Review;
    expect(await (await call("/reviews")).json()).toEqual([]);

    await putJson(`/reviews/${pending.id}`, { status: "aprobada" });

    const approved = (await (await call("/reviews")).json()) as Review[];
    expect(approved).toHaveLength(1);
    expect(approved[0]?.text).toBe(validReview.text);
  });

  test("the moderation queue holds only pending reviews", async () => {
    const first = (await (
      await postJson("/reviews", validReview)
    ).json()) as Review;
    await postJson("/reviews", { ...validReview, author: "Otro" });
    await putJson(`/reviews/${first.id}`, { status: "rechazada" });

    const queue = (await (await call("/reviews/pending")).json()) as Review[];
    expect(queue).toHaveLength(1);
    expect(queue[0]?.author).toBe("Otro");
  });

  test("a rejected review does not show on the landing", async () => {
    const review = (await (
      await postJson("/reviews", validReview)
    ).json()) as Review;
    await putJson(`/reviews/${review.id}`, { status: "rechazada" });

    expect(await (await call("/reviews")).json()).toEqual([]);
  });

  test("rejects a rating outside 1 to 5", async () => {
    const response = await postJson("/reviews", { ...validReview, rating: 9 });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "Valoración",
    );
  });

  test("rejects a review that is too short to be useful", async () => {
    const response = await postJson("/reviews", {
      ...validReview,
      text: "BBBB",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "20 caracteres",
    );
  });

  test("rejects a review over 600 characters", async () => {
    const response = await postJson("/reviews", {
      ...validReview,
      text: "a".repeat(601),
    });

    expect(response.status).toBe(400);
  });

  test("the landing shows at most six approved reviews", async () => {
    for (let i = 0; i < 8; i += 1) {
      const review = (await (
        await postJson("/reviews", { ...validReview, author: `Cliente ${i}` })
      ).json()) as Review;
      await putJson(`/reviews/${review.id}`, { status: "aprobada" });
    }

    const approved = (await (await call("/reviews")).json()) as Review[];
    expect(approved).toHaveLength(6);
    // Newest first, so the six most recent are the ones that survive.
    expect(approved[0]?.author).toBe("Cliente 7");
  });

  test("404s when moderating an unknown review", async () => {
    const response = await putJson("/reviews/reviews_999", {
      status: "aprobada",
    });
    expect(response.status).toBe(404);
  });

  test("refuses to moderate back to pending", async () => {
    const review = (await (
      await postJson("/reviews", validReview)
    ).json()) as Review;

    const response = await putJson(`/reviews/${review.id}`, {
      status: "pendiente",
    });
    expect(response.status).toBe(400);
  });
});
