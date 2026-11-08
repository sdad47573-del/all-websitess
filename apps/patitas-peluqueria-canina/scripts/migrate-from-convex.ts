/**
 * Migración de datos de Convex a SQLite.
 *
 * Es un script de un solo uso, para la transición. Lee cada tabla por la API de
 * Convex (`npx convex run <fn>`) y la escribe en la base local.
 *
 *   bun run migrate:convex                       # migra de verdad
 *   bun run migrate:convex -- --dry-run          # solo enseña qué haría
 *   bun run migrate:convex -- --deployment prod  # otro despliegue
 *
 * Las sesiones no se migran a propósito: los usuarios tendrán que volver a
 * entrar por email. Los OTP tampoco, y ya han caducado.
 */

import { spawnSync } from "node:child_process";
import { migrate } from "@app-server";
import { db } from "../server/db";
import { readFileSync } from "node:fs";

const argv = process.argv.slice(2);
const dryRun = argv.includes("--dry-run");
const deploymentIndex = argv.indexOf("--deployment");
const deployment =
  deploymentIndex >= 0 ? argv[deploymentIndex + 1] : undefined;

if (!process.env.CONVEX_URL) {
  console.error(
    "Falta CONVEX_URL. Apúntalo al despliegue de origen, por ejemplo:\n" +
      "  CONVEX_URL=https://tu-deploy.convex.cloud bun run migrate:convex",
  );
  process.exit(1);
}

if (dryRun) {
  console.log("Modo simulación: no se escribe nada.\n");
}

migrate(db, readFileSync(new URL("../server/schema.sql", import.meta.url), "utf8"));

/* ---------- Lectura desde Convex ---------- */

/**
 * Descarga una tabla entera del despliegue de Convex usando `--inline-query`.
 *
 * Se usa una query en línea y no `convex run <función>` porque las funciones
 * que exportaba este proyecto ya no están en el repositorio: la query se
 * evalúa contra el despliegue, así que solo hace falta que las tablas sigan
 * ahí.
 */
function fetchTable<T>(table: string): T[] {
  const result = spawnSync(
    "npx",
    [
      "convex",
      "run",
      "--inline-query",
      `return await ctx.db.query(${JSON.stringify(table)}).collect();`,
      ...deploymentArgs(),
    ],
    { encoding: "utf8", shell: process.platform === "win32" },
  );

  if (result.status !== 0) {
    throw new Error(
      `No se pudo leer la tabla "${table}" de Convex.\n` +
        `${result.stderr || result.stdout}\n` +
        `Comprueba que CONVEX_URL apunta al despliegue correcto y que tienes acceso.`,
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(result.stdout);
  } catch {
    throw new Error(
      `La salida de "${table}" no es JSON: ${result.stdout.slice(0, 400)}`,
    );
  }

  return Array.isArray(parsed) ? (parsed as T[]) : [];
}

function deploymentArgs(): string[] {
  if (!deployment) return [];
  if (deployment === "prod") return ["--prod"];
  return ["--deployment", deployment];
}

type ConvexUser = {
  _id: string;
  _creationTime: number;
  name?: string;
  image?: string;
  email?: string;
  emailVerificationTime?: number;
  isAnonymous?: boolean;
  role?: string;
};
type ConvexPet = {
  _id: string;
  _creationTime: number;
  userId: string;
  name: string;
  breed?: string;
  breedKey?: string;
  size: string;
  birthYear?: number;
  lastVaccineAt?: string;
  notes?: string;
  archived?: boolean;
};
type ConvexAppointment = {
  _id: string;
  _creationTime: number;
  userId: string;
  petId: string;
  petName: string;
  petSize: string;
  serviceKey: string;
  serviceName: string;
  extraKeys: string[];
  date: string;
  start: string;
  end: string;
  durationMin: number;
  price: number;
  pickup?: boolean;
  bonoId?: string;
  notes?: string;
  status: string;
  promoKey?: string;
  reviewId?: string;
  remindedAt?: number;
};

/* ---------- Escritura ---------- */

const counters = { users: 0, pets: 0, appointments: 0, bonos: 0, waitlist: 0, notifications: 0, reviews: 0 };

function insert(sql: string, values: unknown[]): void {
  db.query(sql).run(...(values as never[]));
}

console.log("Leyendo de Convex…\n");

/* Usuarios */
const users = fetchTable<ConvexUser>("users");
console.log(`  usuarios: ${users.length}`);
if (!dryRun) {
  for (const user of users) {
    insert(
      `INSERT OR REPLACE INTO users (id, name, image, email, email_verification_time, is_anonymous, role, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user._id,
        user.name ?? null,
        user.image ?? null,
        user.email ?? null,
        user.emailVerificationTime ?? null,
        user.isAnonymous ? 1 : 0,
        user.role ?? "user",
        user._creationTime,
      ],
    );
    counters.users++;
  }
}

/* Mascotas */
const pets = fetchTable<ConvexPet>("pets");
console.log(`  mascotas: ${pets.length}`);
if (!dryRun) {
  for (const pet of pets) {
    // Si su dueño no vino (usuario anónimo borrado, etc.), se crea un usuario
    // sustituto para no perder la ficha ni romper la clave ajena.
    if (!db.query("SELECT 1 FROM users WHERE id = ?").get(pet.userId)) {
      insert(
        `INSERT INTO users (id, is_anonymous, role, created_at) VALUES (?, 1, 'user', ?)`,
        [pet.userId, pet._creationTime],
      );
    }
    insert(
      `INSERT OR REPLACE INTO pets (id, user_id, name, breed, breed_key, size, birth_year, last_vaccine_at, notes, archived, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        pet._id,
        pet.userId,
        pet.name,
        pet.breed ?? null,
        pet.breedKey ?? null,
        pet.size,
        pet.birthYear ?? null,
        pet.lastVaccineAt ?? null,
        pet.notes ?? null,
        pet.archived ? 1 : 0,
        pet._creationTime,
      ],
    );
    counters.pets++;
  }
}

/* Citas */
const appointments = fetchTable<ConvexAppointment>("appointments");
console.log(`  citas: ${appointments.length}`);
if (!dryRun) {
  for (const appt of appointments) {
    insert(
      `INSERT OR REPLACE INTO appointments
         (id, user_id, pet_id, pet_name, pet_size, service_key, service_name, extra_keys, date, start, end,
          duration_min, price, pickup, bono_id, notes, status, promo_key, review_id, reminded_at, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, ?, ?, ?, NULL, ?, ?)`,
      [
        appt._id,
        appt.userId,
        appt.petId,
        appt.petName,
        appt.petSize,
        appt.serviceKey,
        appt.serviceName,
        JSON.stringify(appt.extraKeys ?? []),
        appt.date,
        appt.start,
        appt.end,
        appt.durationMin,
        appt.price,
        appt.pickup ? 1 : null,
        appt.notes ?? null,
        appt.status,
        appt.promoKey ?? null,
        appt.remindedAt ?? null,
        appt._creationTime,
      ],
    );
    counters.appointments++;
  }
}

/* Bonos: se referencian desde las citas, así que se rellenan después. */
type BonoRow = {
  _id: string;
  userId: string;
  petId: string;
  serviceKey: string;
  totalUses: number;
  usesUsed: number;
  serviceBaseEur: number;
  priceEur: number;
  active: boolean;
  createdAt: number;
};

const bonos = fetchTable<BonoRow>("bonos");
console.log(`  bonos: ${bonos.length}`);
if (!dryRun) {
  for (const bono of bonos) {
    insert(
      `INSERT OR REPLACE INTO bonos (id, user_id, pet_id, service_key, total_uses, uses_used, service_base_eur, price_eur, active, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        bono._id,
        bono.userId,
        bono.petId,
        bono.serviceKey,
        bono.totalUses,
        bono.usesUsed,
        bono.serviceBaseEur,
        bono.priceEur,
        bono.active ? 1 : 0,
        bono.createdAt,
      ],
    );
    counters.bonos++;
  }
  // Segunda pasada: ahora que los bonos existen, se enlazan con sus citas.
  for (const appt of appointments) {
    if (appt.bonoId) {
      db.query("UPDATE appointments SET bono_id = ? WHERE id = ?").run(appt.bonoId, appt._id);
    }
  }
}

/* Lista de espera */
type WaitlistRow = {
  _id: string;
  userId: string;
  petId: string;
  petName: string;
  date: string;
  serviceKey: string;
  serviceName: string;
  notified?: boolean;
  createdAt: number;
};

const waitlist = fetchTable<WaitlistRow>("waitlist");
console.log(`  lista de espera: ${waitlist.length}`);
if (!dryRun) {
  for (const entry of waitlist) {
    insert(
      `INSERT OR REPLACE INTO waitlist (id, user_id, pet_id, pet_name, date, service_key, service_name, notified, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        entry._id,
        entry.userId,
        entry.petId,
        entry.petName,
        entry.date,
        entry.serviceKey,
        entry.serviceName,
        entry.notified ? 1 : 0,
        entry.createdAt,
      ],
    );
    counters.waitlist++;
  }
}

/* Notificaciones */
type NotificationRow = {
  _id: string;
  userId: string;
  appointmentId?: string;
  type: string;
  title: string;
  body: string;
  createdAt: number;
  readAt?: number;
};

const notifications = fetchTable<NotificationRow>("notifications");
console.log(`  notificaciones: ${notifications.length}`);
if (!dryRun) {
  for (const notif of notifications) {
    insert(
      `INSERT OR REPLACE INTO notifications (id, user_id, appointment_id, type, title, body, created_at, read_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        notif._id,
        notif.userId,
        notif.appointmentId ?? null,
        notif.type,
        notif.title,
        notif.body,
        notif.createdAt,
        notif.readAt ?? null,
      ],
    );
    counters.notifications++;
  }
}

/* Reseñas */
type ConvexReview = {
  _id: string;
  _creationTime: number;
  userId?: string;
  authorName: string;
  petName?: string;
  appointmentId?: string;
  rating: number;
  text: string;
  serviceKey?: string;
  published?: boolean;
};

const reviews = fetchTable<ConvexReview>("reviews");
console.log(`  reseñas: ${reviews.length}`);
if (!dryRun) {
  for (const review of reviews) {
    insert(
      `INSERT OR REPLACE INTO reviews (id, user_id, author_name, pet_name, appointment_id, rating, text, service_key, published, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        review._id,
        review.userId ?? null,
        review.authorName,
        review.petName ?? null,
        review.appointmentId ?? null,
        review.rating,
        review.text,
        review.serviceKey ?? null,
        review.published === false ? 0 : 1,
        review._creationTime,
      ],
    );
    counters.reviews++;
  }
  // Enlace inverso: de cita a reseña.
  for (const review of reviews) {
    if (review.appointmentId) {
      db.query("UPDATE appointments SET review_id = ? WHERE id = ?").run(
        review._id,
        review.appointmentId,
      );
    }
  }
}

console.log(
  dryRun
    ? "\nSimulación terminada. Quita --dry-run para escribir de verdad.\n"
    : `\nMigrado a ${process.env.DATABASE_URL ?? "./data/patitas.sqlite"}:\n` +
        Object.entries(counters)
          .map(([tabla, n]) => `  ${tabla}: ${n}`)
          .join("\n") +
        "\n\nLas sesiones no se han migrado: los usuarios tienen que volver a entrar por email.\n",
);
