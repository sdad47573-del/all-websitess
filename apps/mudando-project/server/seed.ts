/**
 * Development seed.
 *
 * Run with `bun run seed`. Fills the database with a few quotes in each status,
 * a couple of leads and some reviews, so the dashboard and the landing
 * testimonials have something to show instead of empty states.
 *
 * Safe to re-run: it only adds rows when the tables are empty.
 */

import { getDb, nextId } from "./db.js";
import {
  calcularPresupuesto,
  extrasFromList,
  type ExtraKey,
  type Vivienda,
} from "./quote.js";

const db = getDb();

const counts = db
  .query<{ kind: string; total: number }, []>(
    `SELECT 'quotes' AS kind, COUNT(*) AS total FROM quotes
		 UNION ALL SELECT 'callbacks', COUNT(*) FROM callbacks
		 UNION ALL SELECT 'reviews', COUNT(*) FROM reviews`,
  )
  .all();

const total = counts.reduce((sum, row) => sum + row.total, 0);
if (total > 0) {
  console.log(`already has ${total} rows, skipping seed`);
  process.exit(0);
}

const DAY = 86_400_000;
const now = Date.now();

/** A date `days` from now, as YYYY-MM-DD. */
function isoIn(days: number): string {
  return new Date(now + days * DAY).toISOString().slice(0, 10);
}

const quotes: {
  vivienda: Vivienda;
  distanciaKm: number;
  pisoOrigen: number;
  pisoDestino: number;
  volumen: number;
  finesDeSemana: number;
  extras: ExtraKey[];
  contact?: string;
  status: string;
  scheduledDate?: string;
  checklist?: string[];
}[] = [
  {
    vivienda: "piso",
    distanciaKm: 25,
    pisoOrigen: 2,
    pisoDestino: 1,
    volumen: 25,
    finesDeSemana: 0,
    extras: ["embalaje"],
    contact: "Lucía — 600 123 456",
    status: "pendiente",
  },
  {
    vivienda: "estudio",
    distanciaKm: 8,
    pisoOrigen: 3,
    pisoDestino: 2,
    volumen: 12,
    finesDeSemana: 1,
    extras: ["muebles", "electrodomesticos"],
    contact: "Marc",
    status: "confirmado",
    scheduledDate: isoIn(9),
    checklist: ["cajas", "filtro"],
  },
  {
    vivienda: "casa",
    distanciaKm: 140,
    pisoOrigen: 1,
    pisoDestino: 1,
    volumen: 45,
    finesDeSemana: 0,
    extras: ["embalaje", "muebles", "guardamuebles"],
    contact: "Ana — 911 456 789",
    status: "confirmado",
    scheduledDate: isoIn(3),
    checklist: [
      "cajas",
      "filtro",
      "documentacion",
      "suministros",
      "direccion",
      "ascensor",
    ],
  },
  {
    vivienda: "oficina",
    distanciaKm: 35,
    pisoOrigen: 4,
    pisoDestino: 4,
    volumen: 35,
    finesDeSemana: 2,
    extras: ["electrodomesticos"],
    contact: "Servicios Norte",
    status: "completado",
    scheduledDate: isoIn(-12),
    checklist: ["cajas", "filtro", "documentacion", "suministros"],
  },
  {
    vivienda: "piso",
    distanciaKm: 60,
    pisoOrigen: 5,
    pisoDestino: 2,
    volumen: 28,
    finesDeSemana: 0,
    extras: [],
    contact: "Julián",
    status: "cancelado",
  },
];

for (const [index, quote] of quotes.entries()) {
  // The seed goes through the same pricing function the API uses, so seeded
  // totals match what the calculator would produce for the same inputs.
  const { total } = calcularPresupuesto({
    vivienda: quote.vivienda,
    distanciaKm: quote.distanciaKm,
    pisoOrigen: quote.pisoOrigen,
    pisoDestino: quote.pisoDestino,
    volumen: quote.volumen,
    finesDeSemana: quote.finesDeSemana,
    extras: extrasFromList(quote.extras),
  });

  db.query(
    `INSERT INTO quotes
		   (id, contact, vivienda, distancia_km, piso_origen, piso_destino, volumen,
		    fines_de_semana, extras, total, status, scheduled_date, checklist_state, created_at)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    nextId(db, "quotes"),
    quote.contact ?? null,
    quote.vivienda,
    quote.distanciaKm,
    quote.pisoOrigen,
    quote.pisoDestino,
    quote.volumen,
    quote.finesDeSemana,
    JSON.stringify(quote.extras),
    total,
    quote.status,
    quote.scheduledDate ?? null,
    JSON.stringify(quote.checklist ?? []),
    // Spread the timestamps so the newest-first ordering is meaningful.
    now - (quotes.length - index) * 2 * DAY,
  );
}

const callbacks = [
  {
    name: "Rosa Iglesias",
    phone: "+34 655 010 203",
    comment: "Pregunta por mudanza a Valencia la semana que viene.",
  },
  { name: "Pere Casals", phone: "655 010 204", comment: null },
  {
    name: "Helena Bosch",
    phone: "+34 655 010 205",
    comment: "Necesita guardamuebles 3 meses.",
  },
  { name: "Tomás Gil", phone: "655010206", comment: null },
];

for (const [index, lead] of callbacks.entries()) {
  db.query(
    `INSERT INTO callbacks (id, name, phone, comment, status, created_at)
		 VALUES (?, ?, ?, ?, ?, ?)`,
  ).run(
    nextId(db, "callbacks"),
    lead.name,
    lead.phone,
    lead.comment,
    // A couple already worked, so the funnel has more than one stage.
    index === 0 ? "nuevo" : index === 1 ? "llamado" : "nuevo",
    now - (callbacks.length - index) * 3 * 3600_000,
  );
}

const reviews: {
  author: string;
  fromCity: string;
  toCity: string;
  rating: number;
  text: string;
  status: string;
}[] = [
  {
    author: "Nuria P.",
    fromCity: "Barcelona",
    toCity: "Badalona",
    rating: 5,
    text: "Pregunté el precio un domingo por la noche y me contestaron en diez minutos. El día de la mudanza fueron puntualeses y no dañaron nada.",
    status: "aprobada",
  },
  {
    author: "Iván M.",
    fromCity: "Zaragoza",
    toCity: "Barcelona",
    rating: 4,
    text: "Precio cerrado y sin sorpresas al final, que es lo que más valoro. Tuvimos un pequeño retraso de media hora por la mañana.",
    status: "aprobada",
  },
  {
    author: "Carmen R.",
    fromCity: "Girona",
    toCity: "Barcelona",
    rating: 5,
    text: "Mudamos una casa entera con un perro grande y no protestó en todo el trayecto. Volvería a contratarles sin duda.",
    status: "aprobada",
  },
  {
    author: "Diego S.",
    fromCity: "Barcelona",
    toCity: "Valencia",
    rating: 4,
    text: "Nos envolvieron bien la ropa de cama y la vajilla. Rapidez y buen trato durante todo el día.",
    status: "aprobada",
  },
  {
    author: "Sara L.",
    fromCity: "Barcelona",
    toCity: "Tarragona",
    rating: 5,
    text: "Meartes precio cerrado, llegué tarde al pedirlo y aun así lo resolvieron sin problema. Muy recommendables.",
    status: "pendiente",
  },
  {
    author: "Óscar N.",
    fromCity: "Barcelona",
    toCity: "Lleida",
    rating: 2,
    text: "BBBB",
    status: "pendiente",
  },
];

for (const [index, review] of reviews.entries()) {
  db.query(
    `INSERT INTO reviews (id, author, from_city, to_city, rating, text, status, created_at)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    nextId(db, "reviews"),
    review.author,
    review.fromCity,
    review.toCity,
    review.rating,
    review.text,
    review.status,
    now - (reviews.length - index) * 2 * 3600_000,
  );
}

console.log(
  `seeded ${quotes.length} quotes, ${callbacks.length} leads and ${reviews.length} reviews`,
);
