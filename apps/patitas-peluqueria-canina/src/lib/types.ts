/**
 * Tipos de los datos que viajan entre la API y la interfaz.
 *
 * Viven aquí, y no en el servidor, para que el cliente los importe sin
 * arrastrar `bun:sqlite`. El servidor los reexporta desde `server/db.ts`.
 *
 * El campo `_id` se conserva por compatibilidad con el código que venía de
 * Convex: las páginas hacen `row._id` y así sigue funcionando.
 */

/** Id opaco de una tabla. El parámetro documenta de qué tabla viene. */
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
};

export type SizeKey = "S" | "M" | "L" | "XL";

export type Pet = {
  _id: Id<"pets">;
  _creationTime: number;
  userId: Id<"users">;
  name: string;
  breed?: string;
  breedKey?: string;
  size: SizeKey;
  birthYear?: number;
  weightKg?: number;
  lastVaccineAt?: string;
  notes?: string;
  archived?: boolean;
};

export type Bono = {
  _id: Id<"bonos">;
  _creationTime: number;
  userId: Id<"users">;
  petId: Id<"pets">;
  serviceKey: string;
  totalUses: number;
  usesUsed: number;
  serviceBaseEur: number;
  priceEur: number;
  active: boolean;
  createdAt: number;
};

export type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled";

export type Appointment = {
  _id: Id<"appointments">;
  _creationTime: number;
  userId: Id<"users">;
  petId: Id<"pets">;
  petName: string;
  petSize: SizeKey;
  serviceKey: string;
  serviceName: string;
  extraKeys: string[];
  date: string;
  start: string;
  end: string;
  durationMin: number;
  price: number;
  pickup?: boolean;
  bonoId?: Id<"bonos">;
  notes?: string;
  status: AppointmentStatus;
  promoKey?: string;
  reviewId?: Id<"reviews">;
  remindedAt?: number;
};

export type WaitlistEntry = {
  _id: Id<"waitlist">;
  _creationTime: number;
  userId: Id<"users">;
  petId: Id<"pets">;
  petName: string;
  date: string;
  serviceKey: string;
  serviceName: string;
  notified?: boolean;
  createdAt: number;
};

export type Notification = {
  _id: Id<"notifications">;
  _creationTime: number;
  userId: Id<"users">;
  appointmentId?: Id<"appointments">;
  type: string;
  title: string;
  body: string;
  createdAt: number;
  readAt?: number;
};

export type Review = {
  _id: Id<"reviews">;
  _creationTime: number;
  userId?: Id<"users">;
  authorName: string;
  petName?: string;
  appointmentId?: Id<"appointments">;
  rating: number;
  text: string;
  serviceKey?: string;
  published?: boolean;
};
