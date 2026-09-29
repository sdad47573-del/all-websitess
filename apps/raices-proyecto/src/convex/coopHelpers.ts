/**
 * Pure helpers shared by the Convex functions and the test suite.
 *
 * Deliberately free of any `convex` imports so it can be unit tested directly.
 * Every function here encodes a rule that a wrong value would render wrong in
 * the UI, which is why they live together and are covered by tests.
 */

/** ISO-8601 week key, e.g. "2026-W39". */
export function weekKey(date: Date): string {
  const d = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
  );
  return `${d.getUTCFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
}

/** Stable key for a crop or farm name, so references survive renaming. */
export function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * How many items a plan may swap each week. Must stay in step with the perk
 * copy on the plan cards, which promises 1, 3 and 5 changes.
 */
export function swapAllowanceFor(itemsPerBox: number | undefined): number {
  if (!itemsPerBox || itemsPerBox <= 0) return 0;
  if (itemsPerBox <= 6) return 1;
  if (itemsPerBox <= 10) return 3;
  return 5;
}

/**
 * Compose the crops in a weekly box from the seasonal pool.
 *
 * Wraps if the plan asks for more pieces than there are distinct crops in
 * season, which is the same behaviour the original inline loop had.
 */
export function composeBox<T>(
  pool: readonly T[],
  count: number,
  offset = 0,
): T[] {
  if (pool.length === 0) return [];
  const n = Math.max(0, Math.floor(count));
  return Array.from(
    { length: n },
    (_, i) => pool[(i + offset + pool.length) % pool.length],
  );
}

/**
 * Resize an existing box when a member changes plan.
 *
 * Keeps whatever is already in the box, including any swaps they made, then
 * tops up or trims to the new size. A plan change should never silently throw
 * away a choice the member already made.
 */
export function resizeBox<T>(
  current: readonly T[],
  pool: readonly T[],
  count: number,
): T[] {
  const target = Math.max(0, Math.floor(count));
  if (current.length >= target) return current.slice(0, target);
  const topUp = composeBox(pool, target - current.length, current.length);
  return [...current, ...topUp];
}

/** Redemption codes are grouped in threes so they can be read aloud. */
export const GIFT_CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/**
 * A human-readable redemption code.
 *
 * Excludes I, O, 0 and 1 so nobody transcribes a 1 for an I across a kitchen
 * table. Grouped in threes with a prefix so it is obviously a co-op code.
 */
export function formatGiftCode(groups: string[]): string {
  return `RAIZ-${groups.join("-")}`;
}

export function isValidGiftCodeShape(code: string): boolean {
  return /^RAIZ-[A-Z2-9]{3}-[A-Z2-9]{3}$/.test(code.trim().toUpperCase());
}

/** Weeks a gift may run for. Long enough to be worth it, bounded to misuse. */
export function clampGiftWeeks(n: number): number {
  return Math.min(26, Math.max(1, Math.round(n)));
}

/** Cost of a gift: the plan's weekly price times the weeks bought. */
export function giftTotalCents(
  weeklyPriceCents: number | undefined,
  weeks: number,
): number {
  return (weeklyPriceCents ?? 0) * clampGiftWeeks(weeks);
}

/**
 * Weeks a gift has left to run.
 *
 * A gifted basket stops being charged when the run ends, so this is the value
 * the member panel and the coordinator both need to show.
 */
export function giftWeeksRemaining(
  totalWeeks: number,
  endsAt: number | undefined,
  now: number,
): number {
  if (!endsAt) return clampGiftWeeks(totalWeeks);
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const left = Math.ceil((endsAt - now) / msPerWeek);
  return Math.max(0, Math.min(clampGiftWeeks(totalWeeks), left));
}

/**
 * Mask an address for the public gift preview.
 *
 * The code is a bearer token, so anyone holding it can see the gift exists,
 * but where someone lives is not theirs to broadcast. Every digit run is
 * replaced rather than just the last token: in "Calle Mayor 3, 2B" the final
 * token is the flat, not the street number, so masking positionally would
 * leave the number visible.
 */
export function maskAddress(address: string | undefined): string | null {
  if (!address) return null;
  const masked = address
    .replace(/\d+/g, "...")
    .replace(/\s+/g, " ")
    .trim();
  return masked.length > 0 ? masked : null;
}

/**
 * An extra must point at exactly one thing: a crop or a pantry item.
 *
 * Returns an error message, or null when the reference is usable.
 */
export function extraRefProblem(input: {
  hasProduce: boolean;
  hasPantry: boolean;
}): string | null {
  if (input.hasProduce && input.hasPantry) {
    return "Un extra no puede ser dos cosas a la vez.";
  }
  if (!input.hasProduce && !input.hasPantry) {
    return "No se sabe que extra es.";
  }
  return null;
}

/** Clamp a party size to what one booking may take. */
export function clampGuests(n: number | undefined): number {
  return Math.min(4, Math.max(1, n ?? 1));
}

/** Clamp an extra quantity. Zero means "remove". */
export function clampExtraQty(n: number): number {
  return Math.min(10, Math.max(0, Math.round(n)));
}

/** Sliding-scale bounds. Below 50 the basket stops covering its own cost. */
export function clampScale(percent: number): number {
  return Math.min(120, Math.max(50, Math.round(percent)));
}

/** How many weeks the skip grid will show. */
export function clampWeeks(n: number | undefined): number {
  return Math.min(12, Math.max(1, n ?? 8));
}

/**
 * Value of one "cosecha garantizada" credit: a quarter of the weekly share,
 * capped so a large basket cannot bank an unbounded credit.
 */
export function creditFor(weeklyPriceCents: number | undefined): number {
  return Math.min(1500, Math.round((weeklyPriceCents ?? 2400) * 0.25));
}

/** May this party be booked onto a visit? Returns an error, or null if fine. */
export function canBookVisit(
  spotsLeft: number,
  guests: number,
): string | null {
  if (spotsLeft <= 0) return "No quedan plazas.";
  if (spotsLeft < guests) return `Solo quedan ${spotsLeft} plazas.`;
  return null;
}

/**
 * May this member claim a satisfaction credit? One per delivered box, so a
 * member cannot claim against a box they never received.
 */
export function canClaimCredit(
  creditsUsed: number,
  boxesCollected: number,
): string | null {
  if (boxesCollected === 0) return "Aun no has recogido ninguna caja.";
  if (creditsUsed >= boxesCollected) {
    return "Ya has usado el credito de cada caja recibida.";
  }
  return null;
}

/** Reason must be substantive enough for the coordinator to act on. */
export function canClaimReason(reason: string): string | null {
  if (reason.trim().length < 5) {
    return "Cuenta un poco mas para que podamos revisarlo.";
  }
  return null;
}

/**
 * Generic toggle over a list, used by season alerts, harvest reservations and
 * plot adoptions. Returns the next list: removed when present, added when not.
 */
export function toggleInList<T>(list: readonly T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

/**
 * Apply a swap to a box's items.
 *
 * `prior` is the swap row being replaced, if any. When a member changes their
 * mind about the same original crop, the crop they want to replace is the
 * *prior swap's target*, because the original was already taken out of the box
 * the first time. Swapping on `from` directly would match nothing and the new
 * choice would be recorded but never appear in the box.
 */
export function applySwap<T>(
  items: readonly T[],
  from: T,
  to: T,
  priorTarget?: T,
): T[] {
  const replaceId = priorTarget ?? from;
  return items.map((item) => (item === replaceId ? to : item));
}

/**
 * Validate a delivery setup before saving.
 *
 * Extracted from the mutation so the rules are covered by tests rather than
 * only reachable by clicking. Returns an error message, or null when valid.
 */
export function validateDelivery(input: {
  mode: "pickup" | "delivery";
  hasZone: boolean;
  address?: string;
}): string | null {
  if (input.mode === "pickup") return null;
  if (!input.hasZone) return "Elige una zona de reparto.";
  if (!input.address || input.address.trim().length < 6) {
    return "Escribe la direccion completa de entrega.";
  }
  return null;
}

/**
 * Sum of supermarket shelf prices for a box.
 *
 * A crop row written before the price field existed reads back as `undefined`,
 * and one undefined term silently turns the whole sum into `NaN`, which then
 * renders as "NaN" on the public page. Fall back per-item rather than letting
 * it poison the total.
 */
export function marketCentsFor(
  items: { priceCents: number; supermarketPriceCents?: number }[],
  fallbackMultiplier = 1.4,
): number {
  return items.reduce((sum, item) => {
    const shelf = item.supermarketPriceCents;
    return (
      sum +
      (typeof shelf === "number" && Number.isFinite(shelf)
        ? shelf
        : Math.round(item.priceCents * fallbackMultiplier))
    );
  }, 0);
}
