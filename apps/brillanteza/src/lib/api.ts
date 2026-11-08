import { authApi, mutation, query } from "@app-client";
import type {
  Address,
  Booking,
  BookingStatus,
  BookingStats,
  CustomQuote,
  GiftCard,
  Id,
  JobApplication,
  Loyalty,
  User,
} from "./types";

/**
 * Mapa de endpoints de Brilliantza, con la misma forma que tenía `api` en
 * Convex. La maquinaria (cliente HTTP, descriptores) viene de `@app-client`.
 */

export const api = {
  users: {
    currentUser: query<Record<string, never>, User | null>(() => "/users/me"),
  },

  bookings: {
    listMine: query<Record<string, never>, Booking[]>(() => "/bookings"),
    /** Solo para admins. */
    listAll: query<Record<string, never>, Booking[]>(() => "/bookings/all"),
    stats: query<Record<string, never>, BookingStats>(() => "/bookings/stats"),
    myLoyalty: query<Record<string, never>, Loyalty>(() => "/bookings/loyalty"),
    /** Pública: franjas ocupadas para una fecha. */
    availability: query<{ date: string }, Record<string, number>>(
      (args) => `/bookings/availability/${args.date}`,
    ),
    getById: query<{ id: Id<"bookings"> }, Booking | null>(
      (args) => `/bookings/${args.id}`,
    ),

    create: mutation<
      {
        serviceType: string;
        frequency: string;
        bedrooms: number;
        bathrooms: number;
        extras: string[];
        address: string;
        city: string;
        postalCode?: string;
        preferredDate: string;
        preferredSlot: string;
        notes?: string;
        referralCode?: string;
      },
      Id<"bookings">
    >("POST", () => "/bookings", (args) => args),
    cancel: mutation<{ id: Id<"bookings"> }, { ok: true }>(
      "POST",
      (args) => `/bookings/${args.id}/cancel`,
      () => ({}),
    ),
    rate: mutation<
      { id: Id<"bookings">; rating: number; comment?: string },
      { ok: true }
    >("POST", (args) => `/bookings/${args.id}/rate`, (args) => ({
      rating: args.rating,
      comment: args.comment,
    })),
    markPaid: mutation<{ id: Id<"bookings"> }, { ok: true }>(
      "POST",
      (args) => `/bookings/${args.id}/mark-paid`,
      () => ({}),
    ),
    updateStatus: mutation<{ id: Id<"bookings">; status: BookingStatus }, { ok: true }>(
      "POST",
      (args) => `/bookings/${args.id}/status`,
      (args) => ({ status: args.status }),
    ),
  },

  addresses: {
    listMine: query<Record<string, never>, Address[]>(() => "/addresses"),
    add: mutation<
      { label: string; address: string; city: string; postalCode?: string },
      Address
    >("POST", () => "/addresses", (args) => args),
    remove: mutation<{ id: Id<"addresses"> }, { ok: true }>(
      "DELETE",
      (args) => `/addresses/${args.id}`,
    ),
  },

  referrals: {
    ensureMyReferral: query<
      Record<string, never>,
      { code: string; totalInvited: number; totalRewarded: number; earned: number } | null
    >(() => "/referrals/mine"),
    validateCode: query<
      { code: string },
      { valid: boolean; message: string }
    >((args) => `/referrals/validate?code=${encodeURIComponent(args.code)}`),
    recentVerifiedReviews: query<
      { limit?: number },
      { name: string; city: string; rating: number; comment: string; serviceType: string }[]
    >((args) => `/referrals/reviews?limit=${args.limit ?? 6}`),
    globalStats: query<
      Record<string, never>,
      { totalBookings: number; completed: number; averageRating: number | null }
    >(() => "/referrals/stats"),
  },

  giftCards: {
    denominations: query<Record<string, never>, number[]>(() => "/gift-cards/denominations"),
    validate: query<
      { code: string },
      { valid: boolean; remainingCents: number; message: string }
    >((args) => `/gift-cards/validate?code=${encodeURIComponent(args.code)}`),
    listMine: query<Record<string, never>, GiftCard[]>(() => "/gift-cards/mine"),
    purchase: mutation<
      { amountEuros: number; message?: string },
      { id: string; code: string }
    >("POST", () => "/gift-cards", (args) => args),
    redeem: mutation<
      { code: string; bookingPrice: number },
      { ok: boolean; discount?: number; message?: string }
    >("POST", () => "/gift-cards/redeem", (args) => args),
  },

  customQuotes: {
    create: mutation<
      {
        name: string;
        email: string;
        phone?: string;
        company?: string;
        requestType: string;
        city: string;
        details: string;
      },
      Id<"customQuotes">
    >("POST", () => "/leads/quotes", (args) => args),
    listAll: query<Record<string, never>, CustomQuote[]>(() => "/leads/quotes"),
    setStatus: mutation<{ id: Id<"customQuotes">; status: string }, { ok: true }>(
      "POST",
      (args) => `/leads/quotes/${args.id}/status`,
      (args) => ({ status: args.status }),
    ),
  },

  jobs: {
    create: mutation<
      {
        name: string;
        email: string;
        phone?: string;
        city: string;
        experienceYears: number;
        message?: string;
      },
      Id<"jobApplications">
    >("POST", () => "/leads/jobs", (args) => args),
    listAll: query<Record<string, never>, JobApplication[]>(() => "/leads/jobs"),
    setStatus: mutation<{ id: Id<"jobApplications">; status: string }, { ok: true }>(
      "POST",
      (args) => `/leads/jobs/${args.id}/status`,
      (args) => ({ status: args.status }),
    ),
  },

  payments: {
    /**
     * Creaba una sesión de Stripe Checkout. Sin `STRIPE_SECRET_KEY` el
     * servidor responde `{ url: null, configured: false }` y la app sigue
     * funcionando sin pago online.
     */
    createCheckoutSession: mutation<
      { bookingId: Id<"bookings">; bookingSummary: string; successUrl?: string; cancelUrl?: string },
      { url: string | null; configured: boolean }
    >("POST", () => "/payments/checkout", (args) => args),
    confirmPayment: mutation<{ sessionId: string }, { paid: boolean }>(
      "POST",
      () => "/payments/confirm",
      (args) => args,
    ),
  },

  auth: authApi,
} as const;
