import { readFileSync } from "node:fs";
import type { Database } from "bun:sqlite";
import {
  bool,
  json,
  migrate,
  num,
  openDatabase,
  str,
  transaction as runTransaction,
  type Row,
} from "@app-server";
import type {
  Appointment,
  Bono,
  Id,
  Notification,
  Pet,
  Review,
  Role,
  SizeKey,
  User,
  WaitlistEntry,
} from "@/lib/types";
import { env } from "./env";

export { newId, json, str, num, bool } from "@app-server";
export type { Row, Appointment, Bono, Id, Notification, Pet, Review, Role, SizeKey, User, WaitlistEntry };

/**
 * Conexión de la app. El esquema se aplica en cada arranque, que es idempotente.
 */
export const db: Database = openDatabase(env.databaseUrl);
migrate(db, readFileSync(new URL("./schema.sql", import.meta.url), "utf8"));

/** `transaction` del paquete, ligado a la conexión de esta app. */
export function transaction<T>(fn: () => T): T {
  return runTransaction(db, fn);
}

/* ---------- Filas → objetos con la forma que ya conoce el cliente ---------- */
/*
 * El cliente hace `row._id` (y alguna vez `row._creationTime`) porque venía de
 * Convex. Mapeamos aquí a esa forma para no tocar las páginas.
 *
 * Son el único trozo de la capa de datos que es específico de esta app: las
 * columnas son las suyas y el mapeo, el tuyo.
 */

export const toUser = (r: Row): User => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  name: str(r.name),
  image: str(r.image),
  email: str(r.email),
  emailVerificationTime: num(r.email_verification_time),
  isAnonymous: bool(r.is_anonymous),
  role: str(r.role) as Role,
});

export const toPet = (r: Row): Pet => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  userId: r.user_id as string,
  name: r.name as string,
  breed: str(r.breed),
  breedKey: str(r.breed_key),
  size: r.size as Pet["size"],
  birthYear: num(r.birth_year),
  weightKg: num(r.weight_kg),
  lastVaccineAt: str(r.last_vaccine_at),
  notes: str(r.notes),
  archived: bool(r.archived),
});

export const toBono = (r: Row): Bono => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  userId: r.user_id as string,
  petId: r.pet_id as string,
  serviceKey: r.service_key as string,
  totalUses: r.total_uses as number,
  usesUsed: r.uses_used as number,
  serviceBaseEur: r.service_base_eur as number,
  priceEur: r.price_eur as number,
  active: Boolean(r.active),
  createdAt: num(r.created_at)!,
});

export const toAppointment = (r: Row): Appointment => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  userId: r.user_id as string,
  petId: r.pet_id as string,
  petName: r.pet_name as string,
  petSize: r.pet_size as Appointment["petSize"],
  serviceKey: r.service_key as string,
  serviceName: r.service_name as string,
  extraKeys: json<string[]>(r.extra_keys, []),
  date: r.date as string,
  start: r.start as string,
  end: r.end as string,
  durationMin: r.duration_min as number,
  price: r.price as number,
  pickup: bool(r.pickup),
  bonoId: str(r.bono_id),
  notes: str(r.notes),
  status: r.status as Appointment["status"],
  promoKey: str(r.promo_key),
  reviewId: str(r.review_id),
  remindedAt: num(r.reminded_at),
});

export const toWaitlistEntry = (r: Row): WaitlistEntry => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  userId: r.user_id as string,
  petId: r.pet_id as string,
  petName: r.pet_name as string,
  date: r.date as string,
  serviceKey: r.service_key as string,
  serviceName: r.service_name as string,
  notified: bool(r.notified),
  createdAt: num(r.created_at)!,
});

export const toNotification = (r: Row): Notification => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  userId: r.user_id as string,
  appointmentId: str(r.appointment_id),
  type: r.type as string,
  title: r.title as string,
  body: r.body as string,
  createdAt: num(r.created_at)!,
  readAt: num(r.read_at),
});

export const toReview = (r: Row): Review => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  userId: str(r.user_id),
  authorName: r.author_name as string,
  petName: str(r.pet_name),
  appointmentId: str(r.appointment_id),
  rating: r.rating as number,
  text: r.text as string,
  serviceKey: str(r.service_key),
  published: bool(r.published),
});
