/**
 * The price catalogue.
 *
 * The Convex version had a comment saying these tables lived "SIEMPRE en el
 * servidor, nunca desde el cliente", and unlike the pricing in mudando-proyecto
 * that was true: `computePrice` ran on the backend and the browser never sent a
 * price. This module keeps that guarantee, and `POST /api/bookings` still does
 * not accept a `price`.
 *
 * The arithmetic is copied over unchanged, including the order the discounts are
 * applied in, because the order is load-bearing: a pass covers the wash only, a
 * gift covers whatever is left, and the promo only applies when neither did.
 */

export const SERVICE_IDS = [
  "express",
  "complete",
  "premium",
  "ceramic",
] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export const VEHICLE_TYPES = ["small", "sedan", "suv", "van"] as const;
export type VehicleType = (typeof VEHICLE_TYPES)[number];

export const EXTRA_IDS = ["ozono", "motor", "faros", "cuero"] as const;
export type ExtraId = (typeof EXTRA_IDS)[number];

export const BOOKING_STATUSES = [
  "pending",
  "confirmed",
  "done",
  "cancelled",
] as const;
export type BookingStatus = (typeof BOOKING_STATUSES)[number];

/** Available time slots at the workshop. */
export const TIME_SLOTS = [
  "09:00",
  "11:00",
  "13:00",
  "16:00",
  "18:00",
] as const;
export type TimeSlot = (typeof TIME_SLOTS)[number];

/** How many cars fit in one slot. */
export const SLOT_CAPACITY = 2;

/** How far ahead a booking may be made. */
export const MAX_DAYS_AHEAD = 60;

export const BASE_PRICES: Record<ServiceId, number> = {
  express: 15,
  complete: 35,
  premium: 120,
  ceramic: 350,
};

export const VEHICLE_MULT: Record<VehicleType, number> = {
  small: 0.9,
  sedan: 1,
  suv: 1.2,
  van: 1.4,
};

export const EXTRA_PRICES: Record<ExtraId, number> = {
  ozono: 12,
  motor: 20,
  faros: 25,
  cuero: 30,
};

/** Pickup at the customer's address. */
export const PICKUP_PRICE = 15;

export const PROMO_CODE = "AUTO10";
export const PROMO_DISCOUNT_PCT = 10;

/** Wash passes. The price is set here, never taken from the request. */
export const PASS_TYPES = ["complete4", "premium2"] as const;
export type PassType = (typeof PASS_TYPES)[number];

export const PASS_CATALOG: Record<
  PassType,
  { serviceId: ServiceId; washesTotal: number; pricePaid: number }
> = {
  complete4: { serviceId: "complete", washesTotal: 4, pricePaid: 119 },
  premium2: { serviceId: "premium", washesTotal: 2, pricePaid: 204 },
};

/** Gift voucher amounts, in euros. */
export const GIFT_AMOUNTS = [25, 50, 100] as const;
export type GiftAmount = (typeof GIFT_AMOUNTS)[number];

/** The inputs that decide a price, once the pass and gift have been resolved. */
export type PriceInput = {
  serviceId: ServiceId;
  vehicleType: VehicleType;
  extras: readonly ExtraId[];
  pickup?: boolean;
  /** True when a usable pass covers this service. */
  coveredByPass?: boolean;
  /** Value of a usable gift voucher, or 0. */
  giftAmount?: number;
  promoCode?: string;
};

export type Price = { price: number; discount: number };

/**
 * The authoritative price.
 *
 * Order matters and is preserved from the original:
 *  1. wash = base x vehicle multiplier, plus the extras
 *  2. a pass covers the wash, never the extras
 *  3. pickup is added *after* the pass, so a pass does not absorb it
 *  4. a gift takes off whatever is left
 *  5. the promo only applies when neither a pass nor a gift did
 *
 * `discount` is a percentage: 100 means fully covered, 10 the promo.
 */
export function computePrice(input: PriceInput): Price {
  const base = BASE_PRICES[input.serviceId] ?? 0;
  const mult = VEHICLE_MULT[input.vehicleType] ?? 1;
  const extrasTotal = input.extras.reduce(
    (sum, e) => sum + (EXTRA_PRICES[e] ?? 0),
    0,
  );

  const washValue = Math.round(base * mult);
  let price = washValue + extrasTotal;
  let discount = 0;

  if (input.coveredByPass) {
    price = Math.max(0, price - washValue);
    discount = 100;
  }

  if (input.pickup) {
    price += PICKUP_PRICE;
  }

  const giftAmount = input.giftAmount ?? 0;
  if (giftAmount > 0) {
    price = Math.max(0, price - giftAmount);
    discount = 100;
  }

  if (input.promoCode === PROMO_CODE && discount === 0) {
    discount = PROMO_DISCOUNT_PCT;
    price = Math.round(price * 0.9);
  }

  return { price, discount };
}

/** Generates a gift code. Ambiguous characters are left out. */
export function generateGiftCode(): string {
  // No I, O, 0 or 1: the code gets read aloud at the counter and typed off a
  // printed voucher.
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);

  let code = "";
  for (let i = 0; i < 8; i += 1) {
    code += chars[bytes[i] % chars.length];
    if (i === 3) code += "-";
  }
  return `AUTO-${code}`;
}

/** Codes are compared case-insensitively and with surrounding space trimmed. */
export function normaliseGiftCode(code: string): string {
  return code.trim().toUpperCase();
}
