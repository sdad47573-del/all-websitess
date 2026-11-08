import { beforeEach, describe, expect, test } from "bun:test";

import { BASE_PRICES, computePrice, VEHICLE_MULT } from "./catalog.js";
import { getDb } from "./db.js";
import app, {
  type Booking,
  type Message,
  type Pass,
  type Review,
} from "./index.js";

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
    "DELETE FROM reviews; DELETE FROM bookings; DELETE FROM passes; DELETE FROM gifts; DELETE FROM messages; DELETE FROM id_sequence;",
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

/** A date `days` from today, as YYYY-MM-DD. */
function isoIn(days: number): string {
  return new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
}

/** A valid booking request, spread over to test one field at a time. */
const validBooking = {
  customerName: "Marta Ruiz",
  customerPhone: "+34 655 010 201",
  serviceId: "complete",
  vehicleType: "sedan",
  vehiclePlate: "1234 ABC",
  date: isoIn(3),
  timeSlot: "09:00",
  notes: "Rueda de repuesto en el maletero.",
  extras: [],
} as const;

/** A future date far enough ahead for the booking window to accept it. */
const future = isoIn(3);

describe("health", () => {
  test("reports ok", async () => {
    const response = await call("/health");

    expect(response.status).toBe(200);
    expect((await response.json()) as { ok: boolean }).toMatchObject({
      ok: true,
    });
  });
});

describe("pricing", () => {
  test("base price x vehicle multiplier, plus extras", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      vehicleType: "suv",
      extras: ["ozono", "motor"],
    });

    const booking = (await response.json()) as Booking;
    const expected =
      Math.round(BASE_PRICES.complete * VEHICLE_MULT.suv) + 12 + 20;
    expect(booking.price).toBe(expected);
    expect(booking.discount).toBe(0);
  });

  test("ignores a price sent by the client", async () => {
    // The Convex version already computed the price server-side; this guards
    // against that guarantee quietly regressing.
    const response = await postJson("/bookings", { ...validBooking, price: 1 });

    const booking = (await response.json()) as Booking;
    expect(booking.price).toBe(BASE_PRICES.complete);
  });

  test("a bigger vehicle costs more", async () => {
    const small = (await (
      await postJson("/bookings", {
        ...validBooking,
        vehicleType: "small",
        timeSlot: "09:00",
      })
    ).json()) as Booking;
    const van = (await (
      await postJson("/bookings", {
        ...validBooking,
        vehicleType: "van",
        timeSlot: "11:00",
      })
    ).json()) as Booking;

    expect(van.price).toBeGreaterThan(small.price);
  });

  test("the promo takes 10% and records the percentage", async () => {
    const booking = (await (
      await postJson("/bookings", { ...validBooking, promoCode: "AUTO10" })
    ).json()) as Booking;

    expect(booking.price).toBe(Math.round(BASE_PRICES.complete * 0.9));
    expect(booking.discount).toBe(10);
  });

  test("an unknown promo code is just ignored", async () => {
    const booking = (await (
      await postJson("/bookings", { ...validBooking, promoCode: "VERANO20" })
    ).json()) as Booking;

    expect(booking.price).toBe(BASE_PRICES.complete);
    expect(booking.discount).toBe(0);
  });

  test("pickup adds 15 on top", () => {
    const withoutPickup = computePrice({
      serviceId: "complete",
      vehicleType: "sedan",
      extras: [],
    });
    const withPickup = computePrice({
      serviceId: "complete",
      vehicleType: "sedan",
      extras: [],
      pickup: true,
    });

    expect(withPickup.price - withoutPickup.price).toBe(15);
  });

  test("a pass covers the wash but not the extras", () => {
    const base = BASE_PRICES.complete;
    const extras = 12;
    const price = computePrice({
      serviceId: "complete",
      vehicleType: "sedan",
      extras: ["ozono"],
      coveredByPass: true,
    });

    expect(price.price).toBe(extras);
    expect(price.discount).toBe(100);
    expect(price.price).toBeLessThan(base);
  });

  test("a pass does not absorb the pickup fee", () => {
    const price = computePrice({
      serviceId: "complete",
      vehicleType: "sedan",
      extras: [],
      coveredByPass: true,
      pickup: true,
    });

    expect(price.price).toBe(15);
  });

  test("the promo does not stack on top of a pass", () => {
    const price = computePrice({
      serviceId: "complete",
      vehicleType: "sedan",
      extras: [],
      coveredByPass: true,
      promoCode: "AUTO10",
    });

    // Fully covered stays fully covered; the promo must not re-apply.
    expect(price.price).toBe(0);
    expect(price.discount).toBe(100);
  });

  test("a voucher takes off what is left and never goes negative", () => {
    const price = computePrice({
      serviceId: "express",
      vehicleType: "small",
      extras: [],
      giftAmount: 100,
    });

    expect(price.price).toBe(0);
    expect(price.discount).toBe(100);
  });
});

describe("booking", () => {
  test("creates a pending booking and computes the price", async () => {
    const response = await postJson("/bookings", validBooking);

    expect(response.status).toBe(201);
    const booking = (await response.json()) as Booking;
    expect(booking.status).toBe("pending");
    expect(booking.price).toBe(BASE_PRICES.complete);
    expect(booking.id).toBe("bookings_1");
    expect(booking.customerName).toBe("Marta Ruiz");
  });

  test("stores extras as a list", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      extras: ["ozono", "faros"],
    });

    const booking = (await response.json()) as Booking;
    expect(booking.extras).toEqual(["ozono", "faros"]);
  });

  test("trims the name and the notes", async () => {
    const booking = (await (
      await postJson("/bookings", {
        ...validBooking,
        customerName: "  Marta Ruiz  ",
        notes: "  Llano antes  ",
      })
    ).json()) as Booking;

    expect(booking.customerName).toBe("Marta Ruiz");
    expect(booking.notes).toBe("Llano antes");
  });

  test("rejects a date in the past", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      date: "2020-01-01",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "pasadas",
    );
  });

  test("rejects a date more than 60 days out", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      date: isoIn(90),
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "60 días",
    );
  });

  test("rejects an unknown time slot", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      timeSlot: "03:00",
    });

    expect(response.status).toBe(400);
  });

  test("rejects a missing name", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      customerName: "",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "nombre",
    );
  });

  test("rejects a phone number that is not one", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      customerPhone: "llámame",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "teléfono",
    );
  });

  test("errors are an { error } object, never a raw ZodError", async () => {
    const response = await postJson("/bookings", {});

    expect(response.status).toBe(400);
    const parsed = (await response.json()) as Record<string, unknown>;
    expect(typeof parsed.error).toBe("string");
    expect(parsed.issues).toBeUndefined();
  });
});

describe("slot capacity", () => {
  test("a slot fills up after two bookings", async () => {
    const first = await postJson("/bookings", validBooking);
    const second = await postJson("/bookings", validBooking);

    expect(first.status).toBe(201);
    expect(second.status).toBe(201);

    const third = await postJson("/bookings", validBooking);
    expect(third.status).toBe(409);
    expect(((await third.json()) as { error: string }).error).toContain(
      "completa",
    );
  });

  test("a different slot on the same day is still free", async () => {
    await postJson("/bookings", validBooking);
    await postJson("/bookings", validBooking);

    const other = await postJson("/bookings", {
      ...validBooking,
      timeSlot: "11:00",
    });
    expect(other.status).toBe(201);
  });

  test("a cancelled booking frees its slot again", async () => {
    const first = (await (
      await postJson("/bookings", validBooking)
    ).json()) as Booking;
    await postJson("/bookings", validBooking);
    await postJson(`/bookings/${first.id}/cancel`, {});

    const third = await postJson("/bookings", validBooking);
    expect(third.status).toBe(201);
  });

  test("availability counts the bookings that hold the slot", async () => {
    await postJson("/bookings", validBooking);

    const slots = (await (
      await call(`/bookings/availability?date=${future}`)
    ).json()) as { timeSlot: string; taken: number; free: boolean }[];

    expect(slots).toHaveLength(5);
    const nine = slots.find((s) => s.timeSlot === "09:00");
    expect(nine?.taken).toBe(1);
    expect(nine?.free).toBe(true);
    expect(slots.find((s) => s.timeSlot === "11:00")?.taken).toBe(0);
  });

  test("availability is full once the slot is taken twice", async () => {
    await postJson("/bookings", validBooking);
    await postJson("/bookings", validBooking);

    const slots = (await (
      await call(`/bookings/availability?date=${future}`)
    ).json()) as { timeSlot: string; free: boolean }[];

    expect(slots.find((s) => s.timeSlot === "09:00")?.free).toBe(false);
  });

  test("a bad date in the query is an { error } object", async () => {
    const response = await call("/bookings/availability?date=ayer");

    expect(response.status).toBe(400);
    const parsed = (await response.json()) as Record<string, unknown>;
    expect(typeof parsed.error).toBe("string");
    expect(parsed.issues).toBeUndefined();
  });
});

describe("passes", () => {
  async function buyPass(passType = "complete4"): Promise<Pass> {
    return (await (await postJson("/passes", { passType })).json()) as Pass;
  }

  test("buys a pass at the catalogue price", async () => {
    const response = await postJson("/passes", { passType: "complete4" });

    expect(response.status).toBe(201);
    const pass = (await response.json()) as Pass;
    expect(pass.serviceId).toBe("complete");
    expect(pass.washesTotal).toBe(4);
    expect(pass.washesUsed).toBe(0);
    expect(pass.washesLeft).toBe(4);
    expect(pass.pricePaid).toBe(119);
  });

  test("rejects an unknown pass type", async () => {
    const response = await postJson("/passes", { passType: "gold" });

    expect(response.status).toBe(400);
  });

  test("rejects a price sent by the client", async () => {
    const pass = (await (
      await postJson("/passes", { passType: "premium2", pricePaid: 1 })
    ).json()) as Pass;

    expect(pass.pricePaid).toBe(204);
  });

  test("using a pass consumes a wash", async () => {
    const pass = await buyPass();

    await postJson("/bookings", {
      ...validBooking,
      serviceId: "complete",
      usePassId: pass.id,
    });

    const passes = (await (await call("/passes")).json()) as Pass[];
    expect(passes[0]?.washesUsed).toBe(1);
    expect(passes[0]?.washesLeft).toBe(3);
  });

  test("cancelling hands the wash back", async () => {
    const pass = await buyPass();
    const booking = (await (
      await postJson("/bookings", { ...validBooking, usePassId: pass.id })
    ).json()) as Booking;

    await postJson(`/bookings/${booking.id}/cancel`, {});

    const passes = (await (await call("/passes")).json()) as Pass[];
    expect(passes[0]?.washesUsed).toBe(0);
  });

  test("refuses a pass for the wrong service", async () => {
    const pass = await buyPass("premium2");

    const response = await postJson("/bookings", {
      ...validBooking,
      serviceId: "complete",
      usePassId: pass.id,
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "otro tipo de servicio",
    );
  });

  test("refuses a pass that is used up", async () => {
    const pass = await buyPass();
    // A complete4 pass has four washes, and each slot holds two cars, so
    // two slots are not enough to exhaust it.
    await postJson("/bookings", {
      ...validBooking,
      usePassId: pass.id,
      timeSlot: "09:00",
    });
    await postJson("/bookings", {
      ...validBooking,
      usePassId: pass.id,
      timeSlot: "11:00",
    });
    await postJson("/bookings", {
      ...validBooking,
      usePassId: pass.id,
      timeSlot: "13:00",
    });
    await postJson("/bookings", {
      ...validBooking,
      usePassId: pass.id,
      timeSlot: "16:00",
    });

    const response = await postJson("/bookings", {
      ...validBooking,
      usePassId: pass.id,
      timeSlot: "18:00",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "restantes",
    );
  });

  test("refuses a pass that does not exist", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      usePassId: "passes_999",
    });

    expect(response.status).toBe(404);
  });
});

describe("gift vouchers", () => {
  async function buyGift(
    amount = 50,
  ): Promise<{ code: string; amount: number }> {
    return (await (await postJson("/gifts", { amount })).json()) as {
      code: string;
      amount: number;
    };
  }

  test("buys a voucher and gets a code", async () => {
    const response = await postJson("/gifts", { amount: 50 });

    expect(response.status).toBe(201);
    const gift = (await response.json()) as { code: string; amount: number };
    expect(gift.amount).toBe(50);
    expect(gift.code).toMatch(/^AUTO-[A-Z2-9]{4}-[A-Z2-9]{4}$/);
  });

  test("codes are unique", async () => {
    const codes = new Set<string>();
    for (let i = 0; i < 12; i += 1) {
      codes.add((await buyGift(25)).code);
    }

    expect(codes.size).toBe(12);
  });

  test("rejects an amount that is not on offer", async () => {
    const response = await postJson("/gifts", { amount: 30 });

    expect(response.status).toBe(400);
  });

  test("validates an unused code", async () => {
    const gift = await buyGift(50);

    const response = await call(`/gifts/validate?code=${gift.code}`);
    const result = (await response.json()) as {
      valid: boolean;
      amount: number;
    };

    expect(result.valid).toBe(true);
    expect(result.amount).toBe(50);
  });

  test("validation is case insensitive and trims", async () => {
    const gift = await buyGift(50);

    const response = await call(
      `/gifts/validate?code=${gift.code.toLowerCase()}`,
    );
    expect(((await response.json()) as { valid: boolean }).valid).toBe(true);
  });

  test("rejects a code that does not exist", async () => {
    const response = await call("/gifts/validate?code=AUTO-XXXX-XXXX");

    const result = (await response.json()) as {
      valid: boolean;
      reason: string;
    };
    expect(result.valid).toBe(false);
    expect(result.reason).toBe("Código no encontrado");
  });

  test("redeeming a voucher takes its value off the booking", async () => {
    const gift = await buyGift(25);

    const response = await postJson("/bookings", {
      ...validBooking,
      extras: [],
      giftCode: gift.code,
    });

    const booking = (await response.json()) as Booking;
    expect(booking.price).toBe(BASE_PRICES.complete - 25);
    expect(booking.discount).toBe(100);
  });

  test("a voucher worth more than the wash never makes the price negative", async () => {
    const gift = await buyGift(50);

    const response = await postJson("/bookings", {
      ...validBooking,
      extras: [],
      giftCode: gift.code,
    });

    const booking = (await response.json()) as Booking;
    // A 35 wash against a 50 voucher: the customer owes nothing, and the
    // remaining 15 is not a debt the workshop can chase.
    expect(booking.price).toBe(0);
    expect(booking.discount).toBe(100);
  });

  test("a voucher can only be spent once", async () => {
    const gift = await buyGift(50);
    await postJson("/bookings", {
      ...validBooking,
      giftCode: gift.code,
      timeSlot: "09:00",
    });

    const second = await postJson("/bookings", {
      ...validBooking,
      giftCode: gift.code,
      timeSlot: "11:00",
    });

    expect(second.status).toBe(400);
    expect(((await second.json()) as { error: string }).error).toContain(
      "canjeado",
    );
  });

  test("a spent voucher no longer validates", async () => {
    const gift = await buyGift(50);
    await postJson("/bookings", { ...validBooking, giftCode: gift.code });

    const response = await call(`/gifts/validate?code=${gift.code}`);
    const result = (await response.json()) as {
      valid: boolean;
      reason: string;
    };

    expect(result.valid).toBe(false);
    expect(result.reason).toBe("Este bono ya ha sido canjeado");
  });

  test("rejects a code that does not exist", async () => {
    const response = await postJson("/bookings", {
      ...validBooking,
      giftCode: "AUTO-FAKE-FAKE",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "no válido",
    );
  });
});

describe("booking lifecycle", () => {
  test("cancels a booking", async () => {
    const booking = (await (
      await postJson("/bookings", validBooking)
    ).json()) as Booking;

    const response = await postJson(`/bookings/${booking.id}/cancel`, {});
    expect(response.status).toBe(200);
    expect(((await response.json()) as Booking).status).toBe("cancelled");
  });

  test("refuses to cancel a finished service", async () => {
    const booking = (await (
      await postJson("/bookings", validBooking)
    ).json()) as Booking;
    await putJson(`/bookings/${booking.id}/status`, { status: "done" });

    const response = await postJson(`/bookings/${booking.id}/cancel`, {});
    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "finalizado",
    );
  });

  test("refuses to cancel twice", async () => {
    const booking = (await (
      await postJson("/bookings", validBooking)
    ).json()) as Booking;
    await postJson(`/bookings/${booking.id}/cancel`, {});

    const response = await postJson(`/bookings/${booking.id}/cancel`, {});
    expect(response.status).toBe(400);
  });

  test("the workshop moves a booking along", async () => {
    const booking = (await (
      await postJson("/bookings", validBooking)
    ).json()) as Booking;

    const response = await putJson(`/bookings/${booking.id}/status`, {
      status: "confirmed",
    });
    expect(((await response.json()) as Booking).status).toBe("confirmed");
  });

  test("404s on an unknown booking", async () => {
    const response = await call("/bookings/bookings_999");

    expect(response.status).toBe(404);
    expect(((await response.json()) as { error: string }).error).toBe(
      "Reserva no encontrada.",
    );
  });
});

describe("stats", () => {
  test("counts by status and totals the finished revenue", async () => {
    const first = (await (
      await postJson("/bookings", validBooking)
    ).json()) as Booking;
    const second = (await (
      await postJson("/bookings", { ...validBooking, timeSlot: "11:00" })
    ).json()) as Booking;
    await putJson(`/bookings/${first.id}/status`, { status: "done" });
    await putJson(`/bookings/${second.id}/status`, { status: "done" });

    const stats = (await (await call("/bookings/stats")).json()) as {
      total: number;
      pending: number;
      done: number;
      revenueDone: number;
    };

    expect(stats.total).toBe(2);
    expect(stats.done).toBe(2);
    expect(stats.pending).toBe(0);
    expect(stats.revenueDone).toBe(BASE_PRICES.complete * 2);
  });

  test("is zeroed with no bookings", async () => {
    const stats = (await (await call("/bookings/stats")).json()) as Record<
      string,
      number
    >;

    expect(stats.total).toBe(0);
    expect(stats.revenueDone).toBe(0);
  });
});

describe("reviews", () => {
  /** A finished booking, which is the only thing that can be reviewed. */
  async function finishedBooking(): Promise<Booking> {
    const booking = (await (
      await postJson("/bookings", validBooking)
    ).json()) as Booking;
    await putJson(`/bookings/${booking.id}/status`, { status: "done" });
    return (await (await call(`/bookings/${booking.id}`)).json()) as Booking;
  }

  test("reviews a finished booking, keeping only the first name", async () => {
    const booking = await finishedBooking();

    const response = await postJson("/reviews", {
      bookingId: booking.id,
      rating: 5,
      comment: "El motor ha salido como nuevo.",
    });

    expect(response.status).toBe(201);
    const created = (await response.json()) as { author: string };
    expect(created.author).toBe("Marta");
  });

  test("refuses a booking that is not finished", async () => {
    const booking = (await (
      await postJson("/bookings", validBooking)
    ).json()) as Booking;

    const response = await postJson("/reviews", {
      bookingId: booking.id,
      rating: 5,
    });
    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "finalizados",
    );
  });

  test("refuses a second review of the same booking", async () => {
    const booking = await finishedBooking();
    await postJson("/reviews", {
      bookingId: booking.id,
      rating: 5,
      comment: "Muy bien todo.",
    });

    const response = await postJson("/reviews", {
      bookingId: booking.id,
      rating: 4,
      comment: "Otra vez, para ver si cuela.",
    });

    expect(response.status).toBe(409);
    expect(((await response.json()) as { error: string }).error).toContain(
      "valorado",
    );
  });

  test("rejects a rating outside 1 to 5", async () => {
    const booking = await finishedBooking();

    const response = await postJson("/reviews", {
      bookingId: booking.id,
      rating: 9,
    });
    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "Valoración",
    );
  });

  test("the landing shows only reviews that have a comment", async () => {
    const withComment = await finishedBooking();
    const without = await finishedBooking();

    await postJson("/reviews", {
      bookingId: withComment.id,
      rating: 5,
      comment: "El motor ha salido como nuevo.",
    });
    await postJson("/reviews", { bookingId: without.id, rating: 3 });

    const reviews = (await (await call("/reviews")).json()) as Review[];
    expect(reviews).toHaveLength(1);
    expect(reviews[0]?.comment).toBe("El motor ha salido como nuevo.");
  });

  test("summarises the average", async () => {
    const first = await finishedBooking();
    const second = await finishedBooking();

    await postJson("/reviews", {
      bookingId: first.id,
      rating: 5,
      comment: "Excelente, muy Recommended.",
    });
    await postJson("/reviews", {
      bookingId: second.id,
      rating: 4,
      comment: "Bien, aunque tardaron.",
    });

    const summary = (await (await call("/reviews/summary")).json()) as {
      avg: number;
      total: number;
    };
    expect(summary.total).toBe(2);
    expect(summary.avg).toBe(4.5);
  });
});

describe("messages", () => {
  test("records a contact message", async () => {
    const response = await postJson("/messages", {
      name: "  Rosa Iglesias  ",
      email: " rosa@example.com ",
      phone: " +34 655 010 301 ",
      body: "  ¿Hacéis bono de empresa?  ",
    });

    expect(response.status).toBe(201);
    const messages = (await (await call("/messages")).json()) as Message[];
    expect(messages).toHaveLength(1);
    expect(messages[0]?.name).toBe("Rosa Iglesias");
    expect(messages[0]?.email).toBe("rosa@example.com");
    expect(messages[0]?.body).toBe("¿Hacéis bono de empresa?");
    expect(messages[0]?.status).toBe("new");
  });

  test("rejects a malformed email", async () => {
    const response = await postJson("/messages", {
      name: "Rosa",
      email: "rosa(at)example.com",
      body: "Mensaje suficientemente largo.",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "Email",
    );
  });

  test("rejects a message that is too short to be useful", async () => {
    const response = await postJson("/messages", {
      name: "Rosa",
      email: "rosa@example.com",
      body: "hola",
    });

    expect(response.status).toBe(400);
    expect(((await response.json()) as { error: string }).error).toContain(
      "10 caracteres",
    );
  });

  test("marks a message as read", async () => {
    const created = (await (
      await postJson("/messages", {
        name: "Rosa",
        email: "rosa@example.com",
        body: "Mensaje suficientemente largo.",
      })
    ).json()) as { id: string };

    const response = await putJson(`/messages/${created.id}`, {});
    expect(response.status).toBe(200);

    const messages = (await (await call("/messages")).json()) as Message[];
    expect(messages[0]?.status).toBe("read");
  });

  test("404s when marking an unknown message", async () => {
    const response = await putJson("/messages/messages_999", {});

    expect(response.status).toBe(404);
  });
});
