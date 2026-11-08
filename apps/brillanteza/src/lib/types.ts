/**
 * Tipos de los datos que viajan entre la API y la interfaz de Brilliantza.
 *
 * El servidor los reexporta desde `server/db.ts`, así que los dos lados no
 * pueden desincronizarse.
 *
 * El campo `_id` se conserva por compatibilidad con el código que venía de
 * Convex: las páginas hacen `row._id` y así sigue funcionando.
 */

export type Id<Table extends string> = string & { readonly __table?: Table };

export type Role = "admin" | "user" | "member";

export type User = {
  _id: Id<"users">;
  _creationTime: number;
  name?: string;
  image?: string;
  email?: string;
  emailVerificationTime?: number;
  isAnonymous?: boolean;
  role?: Role;
  /** Código único de referido. */
  referralCode?: string;
  /** Limpiezas completadas acumuladas. */
  loyaltyCount?: number;
  /** Hay una recompensa de fidelidad lista para usar. */
  loyaltyRewardReady?: boolean;
};

export const BOOKING_STATUSES = [
  "pending",
  "confirmed",
  "in_progress",
  "completed",
  "cancelled",
] as const;
export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export const PAYMENT_STATUSES = ["unpaid", "paid", "refunded"] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export type Booking = {
  _id: Id<"bookings">;
  _creationTime: number;
  userId: Id<"users">;
  serviceType: string;
  frequency: string;
  bedrooms: number;
  bathrooms: number;
  extras: string[];
  address: string;
  city: string;
  postalCode?: string;
  /** YYYY-MM-DD */
  preferredDate: string;
  preferredSlot: string;
  price: number;
  durationHours: number;
  status: BookingStatus;
  paymentStatus?: PaymentStatus;
  stripeSessionId?: string;
  notes?: string;
  rating?: number;
  comment?: string;
  createdAt: number;
};

export type Referral = {
  _id: Id<"referrals">;
  _creationTime: number;
  referrerId: Id<"users">;
  referredEmail: string;
  referredUserId?: Id<"users">;
  rewardStatus: "pending" | "rewarded";
  rewardAmount: number;
  createdAt: number;
};

export const QUOTE_STATUSES = ["new", "contacted", "closed"] as const;
export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

export type CustomQuote = {
  _id: Id<"customQuotes">;
  _creationTime: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  requestType: string;
  city: string;
  details: string;
  status: QuoteStatus;
  createdAt: number;
};

export type Address = {
  _id: Id<"addresses">;
  _creationTime: number;
  userId: Id<"users">;
  label: string;
  address: string;
  city: string;
  postalCode?: string;
};

export const JOB_STATUSES = ["new", "reviewing", "accepted", "rejected"] as const;
export type JobStatus = (typeof JOB_STATUSES)[number];

export type JobApplication = {
  _id: Id<"jobApplications">;
  _creationTime: number;
  name: string;
  email: string;
  phone?: string;
  city: string;
  experienceYears: number;
  message?: string;
  status: JobStatus;
  createdAt: number;
};

export type GiftCard = {
  _id: Id<"giftCards">;
  _creationTime: number;
  code: string;
  amountCents: number;
  remainingCents: number;
  buyerId?: Id<"users">;
  buyerEmail?: string;
  recipientMessage?: string;
  redeemedByUserId?: Id<"users">;
  status: "active" | "exhausted";
  createdAt: number;
};

export type BookingStats = {
  total: number;
  upcoming: number;
  completed: number;
  totalSpent: number;
};

export type Loyalty = {
  count: number;
  rewardReady: boolean;
  cleaningsToReward: number;
};

/** Mapa de tablas a su tipo, para los componentes que aún usan `Doc<"tabla">`. */
export type TableData = {
  users: User;
  bookings: Booking;
  referrals: Referral;
  customQuotes: CustomQuote;
  addresses: Address;
  jobApplications: JobApplication;
  giftCards: GiftCard;
};

export type Doc<Table extends keyof TableData> = TableData[Table];
