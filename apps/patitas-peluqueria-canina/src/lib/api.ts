import { authApi, mutation, query } from "@app-client";
import type {
  Appointment,
  Bono,
  Id,
  Notification,
  Pet,
  Review,
  User,
  WaitlistEntry,
} from "./types";

/**
 * Mapa de endpoints de la app, con la misma forma que tenía `api` en Convex.
 * La maquinaria (cliente HTTP, descriptores) viene de `@app-client`.
 */

export const api = {
  pets: {
    listMyPets: query<Record<string, never>, Pet[]>(() => "/pets"),
    createPet: mutation<
      {
        name: string;
        breed?: string;
        breedKey?: string;
        size: Pet["size"];
        birthYear?: number;
        lastVaccineAt?: string;
        notes?: string;
      },
      Id<"pets">
    >("POST", () => "/pets", (args) => args),
    updatePet: mutation<
      {
        petId: Id<"pets">;
        size?: Pet["size"];
        notes?: string;
        lastVaccineAt?: string;
        archived?: boolean;
      },
      Pet
    >("PATCH", (args) => `/pets/${args.petId}`, (args) => ({
      // El id va en la URL, no en el cuerpo.
      size: args.size,
      notes: args.notes,
      lastVaccineAt: args.lastVaccineAt,
      archived: args.archived,
    })),
    removePet: mutation<{ petId: Id<"pets"> }, Id<"pets">>(
      "DELETE",
      (args) => `/pets/${args.petId}`,
    ),
  },

  appointments: {
    listMyAppointments: query<Record<string, never>, Appointment[]>(() => "/appointments"),
    listByDate: query<{ date: string }, Appointment[]>(
      (args) => `/appointments/by-date/${args.date}`,
    ),
    getAvailability: query<{ date: string; durationMin: number }, string[]>(
      (args) =>
        `/appointments/availability?date=${encodeURIComponent(args.date)}&durationMin=${args.durationMin}`,
    ),
    isDayFull: query<{ date: string; durationMin: number }, { full: boolean }>(
      (args) =>
        `/appointments/day-full?date=${encodeURIComponent(args.date)}&durationMin=${args.durationMin}`,
    ),
    createAppointment: mutation<
      {
        petId: Id<"pets">;
        serviceKey: string;
        extraKeys: string[];
        date: string;
        start: string;
        pickup?: boolean;
        useBonoId?: Id<"bonos">;
        notes?: string;
      },
      Id<"appointments">
    >("POST", () => "/appointments", (args) => args),
    cancelAppointment: mutation<{ appointmentId: Id<"appointments"> }, Id<"appointments">>(
      "POST",
      (args) => `/appointments/${args.appointmentId}/cancel`,
      () => ({}),
    ),
    rescheduleAppointment: mutation<
      { appointmentId: Id<"appointments">; date: string; start: string },
      Id<"appointments">
    >("POST", (args) => `/appointments/${args.appointmentId}/reschedule`, (args) => ({
      date: args.date,
      start: args.start,
    })),
    listMyBonos: query<Record<string, never>, Bono[]>(() => "/appointments/bonos"),
    purchaseBono: mutation<{ petId: Id<"pets">; serviceKey: string }, Id<"bonos">>(
      "POST",
      () => "/appointments/bonos",
      (args) => args,
    ),
    joinWaitlist: mutation<
      { petId: Id<"pets">; date: string; serviceKey: string },
      Id<"waitlist">
    >("POST", () => "/appointments/waitlist", (args) => args),
    listMyWaitlist: query<Record<string, never>, WaitlistEntry[]>(
      () => "/appointments/waitlist",
    ),
    leaveWaitlist: mutation<{ waitlistId: Id<"waitlist"> }, { ok: true }>(
      "DELETE",
      (args) => `/appointments/waitlist/${args.waitlistId}`,
    ),
  },

  notifications: {
    listMyNotifications: query<Record<string, never>, Notification[]>(
      () => "/notifications",
    ),
    unreadCount: query<Record<string, never>, number>(() => "/notifications/unread-count"),
    markRead: mutation<{ notificationId: Id<"notifications"> }, { ok: true }>(
      "POST",
      (args) => `/notifications/${args.notificationId}/read`,
      () => ({}),
    ),
    markAllRead: mutation<Record<string, never>, { updated: number }>(
      "POST",
      () => "/notifications/read-all",
      () => ({}),
    ),
  },

  reviews: {
    listPublicReviews: query<Record<string, never>, Review[]>(() => "/reviews/public"),
    getMyReviewForAppointment: query<{ appointmentId: Id<"appointments"> }, Review | null>(
      (args) => `/reviews/appointment/${args.appointmentId}`,
    ),
    submitReview: mutation<
      { appointmentId: Id<"appointments">; stars: number; text: string },
      Id<"reviews">
    >("POST", () => "/reviews", (args) => args),
  },

  users: {
    currentUser: query<Record<string, never>, User | null>(() => "/users/me"),
  },

  auth: authApi,
} as const;
