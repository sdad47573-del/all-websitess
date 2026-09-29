/**
 * Prueba de humo del servidor: levanta la app contra una base en memoria y
 * recorre el flujo completo (login invitado → mascota → bono → reserva →
 * disponibilidad → cancelación → reseña → recordatorio).
 *
 *   bun run test:server
 */

// Las variables se fijan ANTES de importar nada del servidor. Los imports de
// ESM se evalúan antes que el código de este módulo, así que si hicéramos
// `import { app } from "./index"` arriba del todo, `env.ts` leería la ruta real
// de la base y la prueba escribiría sobre los datos de desarrollo.
process.env.DATABASE_URL = ":memory:";
process.env.AUTH_SECRET = "secreto-de-pruebas";
process.env.NODE_ENV = "test";

const { app } = await import("./index");
const { processReminders } = await import("./cron");
const { db } = await import("./db");
const { nextOpenDates } = await import("../src/lib/services");

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

async function call(
  path: string,
  init: RequestInit & { cookie?: string } = {},
) {
  const headers = new Headers(init.headers);
  if (init.body) headers.set("Content-Type", "application/json");
  if (init.cookie) headers.set("Cookie", init.cookie);
  const response = await app.request(`http://localhost${path}`, { ...init, headers });
  const text = await response.text();
  return {
    status: response.status,
    body: text ? JSON.parse(text) : null,
    setCookie: response.headers.get("set-cookie"),
  };
}

function sessionCookie(setCookie: string | null): string {
  if (!setCookie) throw new Error("La respuesta no fijó cookie de sesión");
  return setCookie.split(";")[0];
}

console.log("\nPatitas API · prueba de humo\n");

/* ---------- Sesión ---------- */

const guest = await call("/api/auth/anonymous", { method: "POST" });
check("el acceso como invitado crea usuario", guest.status === 200 && !!guest.body.user._id, guest);
check("el invitado no tiene email", !guest.body.user.email, guest.body.user);
const cookie = sessionCookie(guest.setCookie);

// La base es en memoria, pero lo comprobamos: si algún día `env.ts` se adelanta
// a este módulo, la prueba estaría escribiendo sobre la base de desarrollo.
check(
  "la prueba usa una base en memoria",
  (process.env.DATABASE_URL as string) === ":memory:",
);

const noSession = await call("/api/pets");
check("sin sesión, /api/pets responde 401", noSession.status === 401, noSession);

const me = await call("/api/users/me", { cookie });
check("/api/users/me devuelve el usuario", me.body.user._id === guest.body.user._id, me);

/* ---------- Mascotas ---------- */

const petRes = await call("/api/pets", {
  method: "POST",
  cookie,
  body: JSON.stringify({ name: "Luna", size: "M", breedKey: "mestizo" }),
});
check("crea una mascota", petRes.status === 200 && petRes.body.name === "Luna", petRes);
check("la mascota trae _id con forma de Convex", typeof petRes.body._id === "string", petRes.body);

const dup = await call("/api/pets", {
  method: "POST",
  cookie,
  body: JSON.stringify({ name: "Luna", size: "M" }),
});
check("rechaza el nombre duplicado", dup.status === 409, dup);

const badSize = await call("/api/pets", {
  method: "POST",
  cookie,
  body: JSON.stringify({ name: "Toby", size: "XXL" }),
});
check("rechaza un tamaño inválido", badSize.status === 400, badSize);

const pets = await call("/api/pets", { cookie });
check("lista la mascota del usuario", pets.body.length === 1, pets.body);

/* ---------- Bono ---------- */

const bono = await call("/api/appointments/bonos", {
  method: "POST",
  cookie,
  body: JSON.stringify({ petId: petRes.body._id, serviceKey: "banco" }),
});
check("compra un bono", typeof bono.body === "string", bono.body);

const bonoDup = await call("/api/appointments/bonos", {
  method: "POST",
  cookie,
  body: JSON.stringify({ petId: petRes.body._id, serviceKey: "banco" }),
});
check("no permite dos bonos activos del mismo servicio", bonoDup.status === 409, bonoDup);

/* ---------- Disponibilidad y reserva ---------- */

const date = nextOpenDates(1)[0];
const durationMin = 72; // 60 de "banco" x 1.2 por tamaño M

const avail1 = await call(`/api/appointments/availability?date=${date}&durationMin=${durationMin}`);
check("devuelve huecos para un día abierto", Array.isArray(avail1.body) && avail1.body.length > 0, avail1.body);

const start = avail1.body[0];
const appt = await call("/api/appointments", {
  method: "POST",
  cookie,
  body: JSON.stringify({
    petId: petRes.body._id,
    serviceKey: "banco",
    extraKeys: ["uñas"],
    date,
    start,
    useBonoId: bono.body,
  }),
});
check("crea la cita", typeof appt.body === "string", appt);
const appointmentId = appt.body as string;

// Con el bono, el precio debe ser solo el de los extras (uñas = 6 €).
const apptRow = db.query("SELECT * FROM appointments WHERE id = ?").get(appointmentId) as {
  price: number;
  status: string;
  extra_keys: string;
  end: string;
  bono_id: string;
  start: string;
  duration_min: number;
};
check("la cita queda confirmada", apptRow.status === "confirmed", apptRow);
check("aplica el descuento del bono (solo extras)", Math.abs(apptRow.price - 6) < 0.01, apptRow.price);
check("guarda los extras como JSON", JSON.parse(apptRow.extra_keys).join() === "uñas", apptRow.extra_keys);
check("la cita apunta al bono consumido", apptRow.bono_id === bono.body, apptRow.bono_id);

const bonoRow = db.query("SELECT uses_used, active FROM bonos WHERE id = ?").get(bono.body) as {
  uses_used: number;
  active: number;
};
check("el bono consume un uso", bonoRow.uses_used === 1, bonoRow);
check("el bono sigue activo", bonoRow.active === 1, bonoRow);

/* La hora de fin se calcula a partir de la duración real. */
const [sh, sm] = start.split(":").map(Number);
const expectedEnd =
  String(Math.floor((sh * 60 + sm + apptRow.duration_min) / 60)).padStart(2, "0") +
  ":" +
  String((sh * 60 + sm + apptRow.duration_min) % 60).padStart(2, "0");
check("calcula la hora de fin", apptRow.end === expectedEnd, { end: apptRow.end, expectedEnd });

/*
 * El salón tiene 2 mesas, así que un hueco sigue libre con UNA cita encima.
 * Solo desaparece cuando lo occupies dos veces.
 */
const avail2 = await call(`/api/appointments/availability?date=${date}&durationMin=${durationMin}`);
check("con una cita el hueco sigue libre (2 mesas)", avail2.body.includes(start), {
  start,
  libres: avail2.body.length,
});

const second = await call("/api/appointments", {
  method: "POST",
  cookie,
  body: JSON.stringify({
    petId: petRes.body._id,
    serviceKey: "banco",
    extraKeys: [],
    date,
    start,
  }),
});
check("admite la segunda cita del mismo hueco (segunda mesa)", second.status === 200, second);

const avail3 = await call(`/api/appointments/availability?date=${date}&durationMin=${durationMin}`);
check("con dos citas el hueco desaparece", !avail3.body.includes(start), {
  start,
  libres: avail3.body.length,
});

/* Una tercera cita en el mismo hueco ya no cabe: 409 por la revalidación. */
const third = await call("/api/appointments", {
  method: "POST",
  cookie,
  body: JSON.stringify({
    petId: petRes.body._id,
    serviceKey: "banco",
    extraKeys: [],
    date,
    start,
  }),
});
check("bloquea la tercera cita del mismo hueco", third.status === 409, third);

// Esa segunda cita estorba para el resto de la prueba, así que se cancela.
await call(`/api/appointments/${second.body}/cancel`, { method: "POST", cookie });

/* ---------- Notificaciones ---------- */

const notifs = await call("/api/notifications", { cookie });
const notifTypes = notifs.body.map((n: { type: string }) => n.type);
check("notifica la compra del bono", notifTypes.includes("bono"), notifTypes);
check("notifica la reserva", notifTypes.includes("confirmation"), notifTypes);
check(
  "alguna notificación menciona al peludo",
  notifs.body.some((n: { body: string }) => n.body.includes("Luna")),
  notifs.body,
);

const unread = await call("/api/notifications/unread-count", { cookie });
check("cuenta las no leídas", unread.body === notifs.body.length, {
  unread: unread.body,
  total: notifs.body.length,
});

await call("/api/notifications/read-all", { method: "POST", cookie });
const unreadAfter = await call("/api/notifications/unread-count", { cookie });
check("markAllRead las pone a cero", unreadAfter.body === 0, unreadAfter.body);

/* ---------- Reseñas ---------- */

// El texto entra con espacios y debe salir recortado. Se declara una constante
// para no duplicar el literal (ni su acento) en la aserción.
const REVIEW_TEXT = "  Luna salió impecable  ";

const publicReviews = await call("/api/reviews/public");
check("las reseñas públicas no exigen sesión", Array.isArray(publicReviews.body), publicReviews);

const notDone = await call("/api/reviews", {
  method: "POST",
  cookie,
  body: JSON.stringify({ appointmentId, stars: 5, text: REVIEW_TEXT }),
});
check("no permite valorar una cita sin completar", notDone.status === 400, notDone);

db.query("UPDATE appointments SET status = 'completed' WHERE id = ?").run(appointmentId);

const review = await call("/api/reviews", {
  method: "POST",
  cookie,
  body: JSON.stringify({ appointmentId, stars: 5, text: REVIEW_TEXT }),
});
check("acepta la reseña de una cita completada", typeof review.body === "string", review);

const reviewRow = db.query("SELECT * FROM reviews WHERE id = ?").get(review.body) as {
  text: string;
  author_name: string;
};
check("guarda el texto recortado", reviewRow.text === REVIEW_TEXT.trim(), reviewRow);
check("usa el nombre por defecto como autor", reviewRow.author_name === "Cliente Patitas", reviewRow);

const reviewDup = await call("/api/reviews", {
  method: "POST",
  cookie,
  body: JSON.stringify({ appointmentId, stars: 4, text: "Otra vez" }),
});
check("no permite dos reseñas de la misma cita", reviewDup.status === 409, reviewDup);

const publicAfter = await call("/api/reviews/public");
check("la reseña aparece en la lista pública", publicAfter.body.length === 1, publicAfter.body);

/* ---------- Aislamiento entre usuarios ---------- */

const other = await call("/api/auth/anonymous", { method: "POST" });
const otherCookie = sessionCookie(other.setCookie);
const otherPets = await call("/api/pets", { cookie: otherCookie });
check("otro usuario no ve las mascotas ajenas", otherPets.body.length === 0, otherPets.body);

const steal = await call(`/api/appointments/${appointmentId}/cancel`, {
  method: "POST",
  cookie: otherCookie,
});
check("otro usuario no puede cancelar una cita ajena", steal.status === 404, steal);

/* ---------- Reprogramar ---------- */

// La prueba de reseña la dejó en "completed"; la volvemos a activa para poder
// reprogramarla y cancelarla después.
db.query("UPDATE appointments SET status = 'confirmed' WHERE id = ?").run(appointmentId);

const availResched = await call(`/api/appointments/availability?date=${date}&durationMin=${durationMin}`);
const other_start = availResched.body[0];
const moved = await call(`/api/appointments/${appointmentId}/reschedule`, {
  method: "POST",
  cookie,
  body: JSON.stringify({ date, start: other_start }),
});
check("reprograma la cita", moved.status === 200, moved);

const badMove = await call(`/api/appointments/${appointmentId}/reschedule`, {
  method: "POST",
  cookie,
  body: JSON.stringify({ date, start: "no-es-una-hora" }),
});
check("rechaza una hora mal formada", badMove.status === 400, badMove);

/* ---------- Lista de espera ---------- */

const wait = await call("/api/appointments/waitlist", {
  method: "POST",
  cookie,
  body: JSON.stringify({ petId: petRes.body._id, date, serviceKey: "banco" }),
});
check("apunta a la lista de espera", typeof wait.body === "string", wait.body);

const waitDup = await call("/api/appointments/waitlist", {
  method: "POST",
  cookie,
  body: JSON.stringify({ petId: petRes.body._id, date, serviceKey: "banco" }),
});
check("no permite duplicar la entrada", waitDup.status === 409, waitDup);

/* ---------- Cancelar y avisar a la lista ---------- */

const cancel = await call(`/api/appointments/${appointmentId}/cancel`, { method: "POST", cookie });
check("cancela la cita", cancel.status === 200, cancel);

const bonoAfter = db.query("SELECT uses_used, active FROM bonos WHERE id = ?").get(bono.body) as {
  uses_used: number;
  active: number;
};
check("devuelve el uso del bono", bonoAfter.uses_used === 0, bonoAfter);
check("reactiva el bono", bonoAfter.active === 1, bonoAfter);

const freed = db
  .query("SELECT * FROM notifications WHERE type = 'slot-freed'")
  .all() as unknown[];
check("avisa a la lista de espera del hueco liberado", freed.length === 1, freed);

const leave = await call(`/api/appointments/waitlist/${wait.body}`, {
  method: "DELETE",
  cookie,
});
check("sale de la lista de espera", leave.status === 200, leave);

/* ---------- Cron de recordatorios ---------- */

const tomorrow = (() => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
})();

const nextOpen = nextOpenDates(1, tomorrow)[0] ?? tomorrow;
const tomorrowSlot = (await call(`/api/appointments/availability?date=${nextOpen}&durationMin=${durationMin}`)).body[0];

await call("/api/appointments", {
  method: "POST",
  cookie,
  body: JSON.stringify({ petId: petRes.body._id, serviceKey: "banco", extraKeys: [], date: nextOpen, start: tomorrowSlot }),
});

const sent = await processReminders();
check("el cron genera recordatorios", sent >= 1, sent);

const reminder = db
  .query("SELECT * FROM notifications WHERE type = 'reminder' ORDER BY created_at DESC")
  .get() as { body: string } | null;
check("crea la notificación de recordatorio", !!reminder, reminder);
check("el recordatorio menciona al peludo", reminder?.body.includes("Luna"), reminder?.body);

const sentTwice = await processReminders();
check("el cron no duplica recordatorios", sentTwice === 0, sentTwice);

/* ---------- Cerrar sesión ---------- */

const out = await call("/api/auth/signout", { method: "POST", cookie });
check("cierra sesión", out.status === 200, out);

const afterOut = await call("/api/pets", { cookie });
check("la sesión revocada ya no vale", afterOut.status === 401, afterOut);

/* ---------- Resultado ---------- */

console.log(`\n${passed} correctas, ${failed} fallidas\n`);
process.exit(failed === 0 ? 0 : 1);
