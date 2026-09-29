/**
 * Development seed.
 *
 * Run with `bun run seed`. Fills the database with a spread of bookings, a
 * couple of passes, a voucher, some reviews and a few contact messages, so the
 * customer dashboard and the workshop panel have something to show.
 *
 * Safe to re-run: it only adds rows when the tables are empty.
 */

import {
  computePrice,
  GIFT_AMOUNTS,
  PASS_CATALOG,
  TIME_SLOTS,
} from "./catalog.js";
import { getDb, nextId } from "./db.js";

const db = getDb();

const counts = db
  .query<{ kind: string; total: number }, []>(
    `SELECT 'bookings' AS kind, COUNT(*) AS total FROM bookings
		 UNION ALL SELECT 'passes', COUNT(*) FROM passes
		 UNION ALL SELECT 'gifts', COUNT(*) FROM gifts
		 UNION ALL SELECT 'reviews', COUNT(*) FROM reviews
		 UNION ALL SELECT 'messages', COUNT(*) FROM messages`,
  )
  .all();

const total = counts.reduce((sum, row) => sum + row.total, 0);
if (total > 0) {
  console.log(`already has ${total} rows, skipping seed`);
  process.exit(0);
}

const DAY = 86_400_000;
const now = Date.now();

/** A date `days` from today, as YYYY-MM-DD. */
function isoIn(days: number): string {
  return new Date(now + days * DAY).toISOString().slice(0, 10);
}

// --- passes ---------------------------------------------------------------

const passIds: string[] = [];
for (const passType of ["complete4", "premium2"] as const) {
  const def = PASS_CATALOG[passType];
  const id = nextId(db, "passes");
  passIds.push(id);
  db.query(
    `INSERT INTO passes (id, service_id, washes_total, washes_used, price_paid, purchased_at)
		 VALUES (?, ?, ?, 0, ?, ?)`,
  ).run(id, def.serviceId, def.washesTotal, def.pricePaid, now - 30 * DAY);
}

// --- gift vouchers --------------------------------------------------------

const giftCodes: string[] = [];
for (const amount of GIFT_AMOUNTS) {
  // Fixed codes so the seed is reproducible; a real purchase generates one.
  const code = `AUTO-SEED-${amount}`;
  db.query(
    `INSERT INTO gifts (id, code, amount, status, created_at)
		 VALUES (?, ?, ?, 'active', ?)`,
  ).run(nextId(db, "gifts"), code, amount, now - 20 * DAY);
  giftCodes.push(code);
}

// --- bookings -------------------------------------------------------------

type SeedBooking = {
  customerName: string;
  customerPhone: string;
  serviceId: "express" | "complete" | "premium" | "ceramic";
  vehicleType: "small" | "sedan" | "suv" | "van";
  vehiclePlate?: string;
  date: string;
  timeSlot: (typeof TIME_SLOTS)[number];
  extras: Array<"ozono" | "motor" | "faros" | "cuero">;
  notes?: string;
  pickup?: boolean;
  promoCode?: string;
  usePassId?: string;
  giftCode?: string;
  status: string;
};

const bookings: SeedBooking[] = [
  {
    customerName: "Marta Ruiz",
    customerPhone: "+34 655 010 201",
    serviceId: "complete",
    vehicleType: "sedan",
    vehiclePlate: "1234 ABC",
    date: isoIn(0),
    timeSlot: "09:00",
    extras: ["ozono"],
    notes: "Rueda de repuesto en el maletero.",
    status: "confirmed",
  },
  {
    customerName: "Hugo Delgado",
    customerPhone: "655 010 202",
    serviceId: "express",
    vehicleType: "small",
    vehiclePlate: "5678 DEF",
    date: isoIn(0),
    timeSlot: "09:00",
    extras: [],
    status: "pending",
  },
  {
    customerName: "Elena Vidal",
    customerPhone: "+34 655 010 203",
    serviceId: "premium",
    vehicleType: "suv",
    vehiclePlate: "9012 GHI",
    date: isoIn(1),
    timeSlot: "11:00",
    extras: ["cuero", "motor"],
    pickup: true,
    status: "confirmed",
  },
  {
    customerName: "Pablo Sanz",
    customerPhone: "655010204",
    serviceId: "ceramic",
    vehicleType: "suv",
    vehiclePlate: "3456 JKL",
    date: isoIn(3),
    timeSlot: "16:00",
    extras: ["faros"],
    promoCode: "AUTO10",
    status: "pending",
  },
  {
    customerName: "Nuria Alonso",
    customerPhone: "+34 655 010 205",
    serviceId: "complete",
    vehicleType: "van",
    vehiclePlate: "7788 MNO",
    date: isoIn(2),
    timeSlot: "13:00",
    extras: [],
    usePassId: passIds[0],
    status: "confirmed",
  },
  {
    customerName: "Iván Cortés",
    customerPhone: "655 010 206",
    serviceId: "complete",
    vehicleType: "sedan",
    vehiclePlate: "1122 PQR",
    date: isoIn(-4),
    timeSlot: "11:00",
    extras: ["ozono"],
    status: "done",
  },
  {
    customerName: "Carmen Ortiz",
    customerPhone: "+34 655 010 207",
    serviceId: "premium",
    vehicleType: "suv",
    vehiclePlate: "3344 STU",
    date: isoIn(-9),
    timeSlot: "18:00",
    extras: ["cuero"],
    giftCode: giftCodes[1],
    status: "done",
  },
  {
    customerName: "Lucas Peña",
    customerPhone: "655 010 208",
    serviceId: "express",
    vehicleType: "small",
    date: isoIn(-2),
    timeSlot: "18:00",
    extras: [],
    status: "cancelled",
  },
];

const bookingIds: string[] = [];
for (const [index, booking] of bookings.entries()) {
  const { price, discount } = computePrice({
    serviceId: booking.serviceId,
    vehicleType: booking.vehicleType,
    extras: booking.extras,
    pickup: booking.pickup,
    coveredByPass: Boolean(booking.usePassId),
    // A seeded booking that names a voucher has already spent it.
    giftAmount: booking.giftCode ? 50 : 0,
    promoCode: booking.promoCode,
  });

  const id = nextId(db, "bookings");
  bookingIds.push(id);

  db.query(
    `INSERT INTO bookings
		   (id, customer_name, customer_phone, service_id, vehicle_type, vehicle_plate,
		    date, time_slot, price, status, notes, extras, discount, used_pass_id,
		    pickup, gift_code, created_at)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    id,
    booking.customerName,
    booking.customerPhone,
    booking.serviceId,
    booking.vehicleType,
    booking.vehiclePlate ?? null,
    booking.date,
    booking.timeSlot,
    price,
    booking.status,
    booking.notes ?? null,
    JSON.stringify(booking.extras),
    discount,
    booking.usePassId ?? null,
    booking.pickup ? 1 : 0,
    booking.giftCode ?? null,
    now - (bookings.length - index) * 6 * 3_600_000,
  );
}

// The pass booking above consumed a wash, and the voucher booking spent a code.
db.query("UPDATE passes SET washes_used = 1 WHERE id = ?").run(passIds[0]);
db.query(
  "UPDATE gifts SET status = 'redeemed', redeemed_by = 'Carmen Ortiz', redeemed_at = ? WHERE code = ?",
).run(now - 9 * DAY, giftCodes[1]);

// --- reviews --------------------------------------------------------------
//
// Only finished bookings can be reviewed, and only their first name is stored.

// Only the two `done` bookings can be reviewed, one review each: the
// `booking_id` column is UNIQUE, and a review of a booking that is not finished
// is exactly what the API refuses.
const doneIndexes = bookings
  .map((booking, index) => (booking.status === "done" ? index : -1))
  .filter((index) => index !== -1);

const reviewCopy: Record<number, { rating: number; comment: string }> = {
  5: {
    rating: 5,
    comment:
      "El motor ha salido como nuevo y el coche huele a limpio al entrar.",
  },
  6: {
    rating: 4,
    comment:
      "Muy buen trabajo con la tapicería, se notó el cuidado. Tardaron un poco en terminar.",
  },
};

const reviewRows = doneIndexes
  .map((index) => ({ index, ...reviewCopy[index] }))
  .filter((row): row is { index: number; rating: number; comment: string } =>
    Boolean(row.rating),
  );

for (const [position, review] of reviewRows.entries()) {
  const booking = db
    .query<
      { id: string; customer_name: string },
      [string]
    >("SELECT id, customer_name FROM bookings WHERE id = ?")
    .get(bookingIds[review.index]);

  if (!booking) continue;

  db.query(
    `INSERT INTO reviews (id, booking_id, author, rating, comment, created_at)
		 VALUES (?, ?, ?, ?, ?, ?)`,
  ).run(
    nextId(db, "reviews"),
    booking.id,
    // First name only: the landing page has always shown just that.
    booking.customer_name.split(" ")[0],
    review.rating,
    review.comment,
    now - (reviewRows.length - position) * 2 * DAY,
  );
}

// --- contact messages -----------------------------------------------------

const messages = [
  {
    name: "Rosa Iglesias",
    email: "rosa@example.com",
    phone: "+34 655 010 301",
    body: "¿Hacéis bono de empresa para toda la flota? Somos 14 coches.",
    status: "new",
  },
  {
    name: "Pere Casals",
    email: "pere@example.com",
    phone: null,
    body: "Mi cita de la semana pasada salió muy bien. ¿Podéis recommendarme un sitio de detailing en Barcelona?",
    status: "new",
  },
  {
    name: "Helena Bosch",
    email: "helena@example.com",
    phone: "655 010 303",
    body: "Pregunto por el precio del tratamiento de cerámica para un SUV.",
    status: "read",
  },
];

for (const [index, message] of messages.entries()) {
  db.query(
    `INSERT INTO messages (id, name, email, phone, body, status, created_at)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    nextId(db, "messages"),
    message.name,
    message.email,
    message.phone,
    message.body,
    message.status,
    now - (messages.length - index) * 4 * 3_600_000,
  );
}

console.log(
  `seeded ${bookings.length} bookings, ${passIds.length} passes, ${giftCodes.length} vouchers, ` +
    `${reviewRows.length} reviews and ${messages.length} messages`,
);
