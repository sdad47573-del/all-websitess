/**
 * Prueba de humo de la API de Brilliantza.
 *
 *   bun run test:server
 *
 * Corre contra una base en memoria, así que no toca los datos de desarrollo.
 */

// Las variables se fijan ANTES de importar el servidor: los imports de ESM se
// evalúan antes que este módulo, y si no, `env.ts` leería la ruta real.
process.env.DATABASE_URL = ":memory:";
process.env.AUTH_SECRET = "secreto-de-pruebas";
process.env.NODE_ENV = "test";

const { app } = await import("./index");
const { db } = await import("./db");
const { processReminderSweep, tomorrowISO } = await import("./cron");

// Solo usa `import()` dinámicos, así que sin esto TypeScript no lo trataría
// como módulo y rechazaría los `await` de nivel superior.
export {};

let passed = 0;
let failed = 0;

function check(name: string, condition: unknown, detail?: unknown) {
  if (condition) {
    passed++;
    console.log(`  ok  ${name}`);
  } else {
    failed++;
    console.error(`  FAIL ${name}`, detail === undefined ? "" : detail);
  }
}

let cookie = "";
async function call(
  path: string,
  init: RequestInit & { as?: string } = {},
) {
  const headers = new Headers(init.headers);
  if (init.body) headers.set("Content-Type", "application/json");
  // `as` permite probar con la sesión de otro usuario sin perder la propia.
  const token = init.as ?? cookie;
  if (token) headers.set("Cookie", token);
  const response = await app.request(`http://localhost${path}`, { ...init, headers });
  const text = await response.text();
  return { status: response.status, body: text ? JSON.parse(text) : null, setCookie: response.headers.get("set-cookie") };
}

/** Abre sesión como invitado y devuelve su cookie y su id. */
async function signIn(): Promise<{ cookie: string; id: string }> {
  const response = await app.request("http://localhost/api/auth/anonymous", { method: "POST" });
  const setCookie = response.headers.get("set-cookie");
  if (!setCookie) throw new Error("no se pudo iniciar sesión");
  const body = (await response.json()) as { user: { _id: string } };
  return { cookie: setCookie.split(";")[0], id: body.user._id };
}

/** Promueve al usuario de la sesión a admin, para probar las rutas de gestión. */
function makeAdmin(userId: string) {
  db.query("UPDATE users SET role = 'admin' WHERE id = ?").run(userId);
}

const bookingPayload = {
  serviceType: "regular",
  frequency: "once",
  bedrooms: 3,
  bathrooms: 2,
  extras: ["windows"],
  address: "Calle Mayor 1",
  city: "Madrid",
  preferredSlot: "morning",
};

console.log("\nBrillanteza API · prueba de humo\n");

/* ---------- Sesión ---------- */

const { cookie: ownCookie, id: userId } = await signIn();
cookie = ownCookie;
check("crea una sesión de invitado", !!userId, userId);
check("sin sesión, /api/bookings responde 401", (await call("/api/bookings", { as: "" })).status === 401);

/* ---------- Reservas ---------- */

const date = tomorrowISO(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));
const booking = await call("/api/bookings", {
  method: "POST",
  body: JSON.stringify({ ...bookingPayload, preferredDate: date }),
});
check("crea una reserva", booking.status === 200 && typeof booking.body === "string", booking);
const bookingId = booking.body as string;

const row = db.query("SELECT * FROM bookings WHERE id = ?").get(bookingId) as {
  status: string;
  payment_status: string;
  price: number;
  duration_hours: number;
  extras: string;
  price_sent_by_client: number | undefined;
};
check("la reserva queda pendiente y sin pagar", row.status === "pending" && row.payment_status === "unpaid", row);
check("guarda los extras como JSON", JSON.parse(row.extras).join() === "windows", row.extras);
check("calcula la duración en el servidor", row.duration_hours > 0, row);

/**
 * El precio lo recalcula el servidor: si el cliente manda otra cifra, se
 * ignora. Antes venía `price` en los argumentos de la mutation.
 */
const withPrice = await call("/api/bookings", {
  method: "POST",
  body: JSON.stringify({
    ...bookingPayload,
    preferredDate: date,
    price: 1,
    durationHours: 1,
  }),
});
const second = db.query("SELECT price FROM bookings WHERE id = ?").get(withPrice.body) as {
  price: number;
};
const honest = db.query("SELECT price FROM bookings WHERE id = ?").get(bookingId) as {
  price: number;
};
check("ignora el precio que envía el cliente", second.price === honest.price, {
  enviado: 1,
  guardado: second.price,
});

/* Dos equipos por franja: la tercera reserva de la misma cae. */
const third = await call("/api/bookings", {
  method: "POST",
  body: JSON.stringify({ ...bookingPayload, preferredDate: date }),
});
check("la tercera reserva de la misma franja se rechaza", third.status === 409, third);

const available = await call(`/api/bookings/availability/${date}`);
check("la disponibilidad cuenta 2 en esa franja", available.body.morning === 2, available.body);

const badRoom = await call("/api/bookings", {
  method: "POST",
  body: JSON.stringify({ ...bookingPayload, bedrooms: 12, preferredDate: date }),
});
check("rechaza 12 habitaciones", badRoom.status === 400, badRoom);

/* ---------- Estadísticas y cancelación ---------- */

const stats = await call("/api/bookings/stats");
check("las estadísticas cuentan 2 reservas", stats.body.total === 2, stats.body);

const cancel = await call(`/api/bookings/${bookingId}/cancel`, { method: "POST" });
check("cancela la reserva", cancel.status === 200, cancel);
check("la disponibilidad baja a 1 tras cancelar", (await call(`/api/bookings/availability/${date}`)).body.morning === 1);

/* ---------- Aislamiento ---------- */

const { cookie: otherCookie } = await signIn();
const stolen = await call(`/api/bookings/${bookingId}/cancel`, { method: "POST", as: otherCookie });
check("otro usuario no puede cancelar una reserva ajena", stolen.status === 403, stolen);
check("el usuario original sigue con su sesión", (await call("/api/bookings/stats")).status === 200);

/* ---------- Puntuación ---------- */

check("no se puede valorar una reserva sin completar", (await call(`/api/bookings/${bookingId}/rate`, {
  method: "POST",
  body: JSON.stringify({ rating: 5 }),
})).status === 400);

db.query("UPDATE bookings SET status = 'completed' WHERE id = ?").run(bookingId);
check("valora una reserva completada", (await call(`/api/bookings/${bookingId}/rate`, {
  method: "POST",
  body: JSON.stringify({ rating: 5, comment: "Impecable" }),
})).status === 200);

/* ---------- Fidelidad: cada 6 limpiezas se abre una recompensa ---------- */

// El contador va por separado del flag: con 5 limpiezas todavía no hay
// recompensa, se abre al llegar a la sexta.
db.query("UPDATE users SET loyalty_count = 5, loyalty_reward_ready = 0 WHERE id = ?").run(userId);
const beforeReward = await call("/api/bookings/loyalty");
check("con 5 limpiezas aún no hay recompensa", beforeReward.body.rewardReady === false, beforeReward.body);
check("y falta una para la próxima", beforeReward.body.cleaningsToReward === 1, beforeReward.body);

db.query("UPDATE users SET loyalty_count = 6, loyalty_reward_ready = 1 WHERE id = ?").run(userId);
const fullPriceBefore = (await call("/api/bookings", {
  method: "POST",
  body: JSON.stringify({ ...bookingPayload, preferredDate: date, preferredSlot: "evening" }),
})).body;
const discounted = db.query("SELECT price FROM bookings WHERE id = ?").get(fullPriceBefore) as {
  price: number;
};
const full = db.query("SELECT price FROM bookings WHERE id = ?").get(withPrice.body) as { price: number };
check("la recompensa aplica el 50 %", Math.abs(discounted.price - full.price / 2) < 0.01, {
  conRecompensa: discounted.price,
  sinRecompensa: full.price,
});
check("y se consume al usarla", (await call("/api/bookings/loyalty")).body.rewardReady === false);

/* ---------- Admin ---------- */

const beforeRole = await call("/api/bookings/all");
check("sin admin, listAll devuelve vacío", Array.isArray(beforeRole.body) && beforeRole.body.length === 0, beforeRole);

makeAdmin(userId);
const afterRole = await call("/api/bookings/all");
check("con admin, listAll devuelve todas", afterRole.body.length > 0, afterRole.body.length);

const okStatus = await call(`/api/bookings/${bookingId}/status`, {
  method: "POST",
  body: JSON.stringify({ status: "confirmed" }),
});
check("el admin cambia el estado", okStatus.status === 200, okStatus);

// Una reserva que se queda cancelada: comprobar que no se puede reactivar.
const cancelledOne = await call("/api/bookings", {
  method: "POST",
  body: JSON.stringify({ ...bookingPayload, preferredDate: date, preferredSlot: "evening" }),
});
await call(`/api/bookings/${cancelledOne.body}/cancel`, { method: "POST" });
const reactivate = await call(`/api/bookings/${cancelledOne.body}/status`, {
  method: "POST",
  body: JSON.stringify({ status: "pending" }),
});
check("una reserva cancelada no se reactiva", reactivate.status === 400, reactivate);

/* ---------- Referidos ---------- */

const mine = await call("/api/referrals/mine");
check("el usuario recibe un código de referido", typeof mine.body?.code === "string", mine.body);

const validate = await call(`/api/referrals/validate?code=${mine.body.code}`);
check("el propio código valida", validate.body.valid === true, validate.body);
check("un código inventado no valida", (await call("/api/referrals/validate?code=XXXXXX")).body.valid === false);

/* ---------- Direcciones ---------- */

const address = await call("/api/addresses", {
  method: "POST",
  body: JSON.stringify({ label: "Casa", address: "Calle Mayor 1, 3ºB", city: "Madrid" }),
});
check("guarda una dirección", address.status === 200, address);
check("rechaza una dirección demasiado corta", (await call("/api/addresses", {
  method: "POST",
  body: JSON.stringify({ label: "Casa", address: "x", city: "Madrid" }),
})).status === 400);
check("lista las direcciones del usuario", (await call("/api/addresses")).body.length === 1);

/* ---------- Tarjetas regalo ---------- */

const denominations = await call("/api/gift-cards/denominations");
check("publica los importes disponibles", JSON.stringify(denominations.body) === "[50,100,200]", denominations.body);

const gift = await call("/api/gift-cards", {
  method: "POST",
  body: JSON.stringify({ amountEuros: 50, message: "Para el nuevo piso" }),
});
check("emite una tarjeta regalo", gift.status === 200 && /^BRIL-/.test(gift.body.code), gift.body);

check("rechaza un importe no válido", (await call("/api/gift-cards", {
  method: "POST",
  body: JSON.stringify({ amountEuros: 37 }),
})).status === 400);

const validated = await call(`/api/gift-cards/validate?code=${gift.body.code}`);
check("la tarjeta nueva valida con saldo 5000", validated.body.valid === true && validated.body.remainingCents === 5000, validated.body);

const redeem = await call("/api/gift-cards/redeem", {
  method: "POST",
  body: JSON.stringify({ code: gift.body.code, bookingPrice: 20 }),
});
check("canjea 20 € de una tarjeta de 50", redeem.body.ok === true && Math.abs(redeem.body.discount - 20) < 0.01, redeem.body);

const afterRedeem = await call(`/api/gift-cards/validate?code=${gift.body.code}`);
check("el saldo baja a 3000", afterRedeem.body.remainingCents === 3000, afterRedeem.body);

const empty = await call("/api/gift-cards/redeem", {
  method: "POST",
  body: JSON.stringify({ code: "BRIL-XXXX-XXXX", bookingPrice: 10 }),
});
check("una tarjeta inexistente no canjea", empty.body.ok === false, empty.body);

/* ---------- Leads con rate limit ---------- */

const job = { name: "Marta Ruiz", email: "marta@example.com", city: "Málaga", experienceYears: 4 };
check("acepta una candidatura", (await call("/api/leads/jobs", { method: "POST", body: JSON.stringify(job) })).status === 200);
check("acepta la segunda", (await call("/api/leads/jobs", { method: "POST", body: JSON.stringify(job) })).status === 200);
check("la tercera choca con el rate limit", (await call("/api/leads/jobs", { method: "POST", body: JSON.stringify(job) })).status === 429);

const quote = { name: "Acme", email: "acme@example.com", city: "Madrid", requestType: "office", details: "Oficina de 200 m2, tres veces por semana." };
check("acepta un presupuesto", (await call("/api/leads/quotes", { method: "POST", body: JSON.stringify(quote) })).status === 200);
check("exige un mínimo de detalle", (await call("/api/leads/quotes", {
  method: "POST",
  body: JSON.stringify({ ...quote, details: "corto" }),
})).status === 400);

check("el admin ve las candidaturas", (await call("/api/leads/jobs")).body.length === 2);
check("el admin ve los presupuestos", (await call("/api/leads/quotes")).body.length === 1);

/* ---------- Pago sin Stripe configurado ---------- */

const checkout = await call("/api/payments/checkout", {
  method: "POST",
  body: JSON.stringify({ bookingId, bookingSummary: "Limpieza" }),
});
check("sin STRIPE_SECRET_KEY el checkout no se configura", checkout.body.configured === false, checkout.body);

/* ---------- Recordatorios ---------- */

// El barrido solo mira las reservas de MAÑANA, así que hace falta una con esa
// fecha: las de la prueba están a tres días.
const tomorrowBooking = await call("/api/bookings", {
  method: "POST",
  body: JSON.stringify({
    ...bookingPayload,
    preferredDate: tomorrowISO(),
    preferredSlot: "afternoon",
  }),
});
db.query("UPDATE bookings SET status = 'confirmed' WHERE id = ?").run(tomorrowBooking.body);

const sent = await processReminderSweep();
check("el barrido manda recordatorio a las de mañana", sent === 1, sent);
check("no los repite", (await processReminderSweep()) === 0);

const otherDay = await call("/api/bookings", {
  method: "POST",
  body: JSON.stringify({
    ...bookingPayload,
    preferredDate: date,
    preferredSlot: "afternoon",
  }),
});
db.query("UPDATE bookings SET status = 'confirmed' WHERE id = ?").run(otherDay.body);
check("ignora las reservas que no son de mañana", (await processReminderSweep()) === 0);

/* ---------- Resultado ---------- */

console.log(`\n${passed} correctas, ${failed} fallidas\n`);
process.exit(failed === 0 ? 0 : 1);
