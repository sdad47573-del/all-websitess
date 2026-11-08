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
  Address,
  Booking,
  CustomQuote,
  GiftCard,
  Id,
  JobApplication,
  Referral,
  Role,
  User,
} from "../src/lib/types";
import { env } from "./env";

export { newId, json, str, num, bool } from "@app-server";
export type {
  Row,
  Address,
  Booking,
  CustomQuote,
  GiftCard,
  Id,
  JobApplication,
  Referral,
  Role,
  User,
};

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

export const toUser = (r: Row): User => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  name: str(r.name),
  image: str(r.image),
  email: str(r.email),
  emailVerificationTime: num(r.email_verification_time),
  isAnonymous: bool(r.is_anonymous),
  role: str(r.role) as Role,
  referralCode: str(r.referral_code),
  loyaltyCount: num(r.loyalty_count),
  loyaltyRewardReady: bool(r.loyalty_reward_ready),
});

export const toBooking = (r: Row): Booking => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  userId: r.user_id as string,
  serviceType: r.service_type as string,
  frequency: r.frequency as string,
  bedrooms: r.bedrooms as number,
  bathrooms: r.bathrooms as number,
  extras: json<string[]>(r.extras, []),
  address: r.address as string,
  city: r.city as string,
  postalCode: str(r.postal_code),
  preferredDate: r.preferred_date as string,
  preferredSlot: r.preferred_slot as string,
  price: r.price as number,
  durationHours: r.duration_hours as number,
  status: r.status as Booking["status"],
  paymentStatus: str(r.payment_status) as Booking["paymentStatus"],
  stripeSessionId: str(r.stripe_session_id),
  notes: str(r.notes),
  rating: num(r.rating),
  comment: str(r.comment),
  createdAt: num(r.created_at)!,
});

export const toReferral = (r: Row): Referral => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  referrerId: r.referrer_id as string,
  referredEmail: r.referred_email as string,
  referredUserId: str(r.referred_user_id),
  rewardStatus: r.reward_status as Referral["rewardStatus"],
  rewardAmount: r.reward_amount as number,
  createdAt: num(r.created_at)!,
});

export const toCustomQuote = (r: Row): CustomQuote => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  name: r.name as string,
  email: r.email as string,
  phone: str(r.phone),
  company: str(r.company),
  requestType: r.request_type as string,
  city: r.city as string,
  details: r.details as string,
  status: r.status as CustomQuote["status"],
  createdAt: num(r.created_at)!,
});

export const toAddress = (r: Row): Address => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  userId: r.user_id as string,
  label: r.label as string,
  address: r.address as string,
  city: r.city as string,
  postalCode: str(r.postal_code),
});

export const toJobApplication = (r: Row): JobApplication => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  name: r.name as string,
  email: r.email as string,
  phone: str(r.phone),
  city: r.city as string,
  experienceYears: r.experience_years as number,
  message: str(r.message),
  status: r.status as JobApplication["status"],
  createdAt: num(r.created_at)!,
});

export const toGiftCard = (r: Row): GiftCard => ({
  _id: r.id as string,
  _creationTime: num(r.created_at)!,
  code: r.code as string,
  amountCents: r.amount_cents as number,
  remainingCents: r.remaining_cents as number,
  buyerId: str(r.buyer_id),
  buyerEmail: str(r.buyer_email),
  recipientMessage: str(r.recipient_message),
  redeemedByUserId: str(r.redeemed_by_user_id),
  status: r.status as GiftCard["status"],
  createdAt: num(r.created_at)!,
});
