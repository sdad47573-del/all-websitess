import { describe, expect, test } from "bun:test";

import {
  composeBox,
  marketCentsFor,
  resizeBox,
  slugify,
  applySwap,
  canBookVisit,
  canClaimCredit,
  canClaimReason,
  clampExtraQty,
  clampGuests,
  clampScale,
  clampWeeks,
  creditFor,
  extraRefProblem,
  formatGiftCode,
  GIFT_CODE_ALPHABET,
  giftTotalCents,
  giftWeeksRemaining,
  isValidGiftCodeShape,
  maskAddress,
  swapAllowanceFor,
  toggleInList,
  validateDelivery,
  weekKey,
} from "../src/convex/coopHelpers";
import {
  ADOPTIONS,
  COST_BREAKDOWN,
  FARMERS,
  PANTRY,
  PLANS,
  PORTION,
  PRODUCE,
  RECIPES,
  SUPERMARKET_PRICE,
  TESTIMONIALS,
  VISITS,
} from "../src/convex/coopData";
import { deliveryFeeForZone, formatPrice, scaleBlurb, scaleLabel } from "../src/lib/coop";
import { DELIVERY_ZONES } from "../src/convex/coopData";

const farmerSlugs = new Set(FARMERS.map((f) => f.slug));
const cropSlugs = new Set(PRODUCE.map((p) => slugify(p.name)));

describe("slugify", () => {
  test("strips accents and lowercases", () => {
    expect(slugify("Tomate de ensalada")).toBe("tomate-de-ensalada");
    expect(slugify("Calabaza de otoño")).toBe("calabaza-de-otono");
    expect(slugify("Judía verde fina")).toBe("judia-verde-fina");
  });

  test("trims stray separators", () => {
    expect(slugify("  Setas de ostra ")).toBe("setas-de-ostra");
  });

  test("is idempotent", () => {
    const once = slugify("Brócoli");
    expect(slugify(once)).toBe(once);
  });
});

describe("weekKey", () => {
  test("produces the padded ISO week format", () => {
    expect(weekKey(new Date(Date.UTC(2026, 8, 27)))).toMatch(/^\d{4}-W\d{2}$/);
  });

  test("is stable for the same date", () => {
    expect(weekKey(new Date(Date.UTC(2026, 4, 3)))).toBe(
      weekKey(new Date(Date.UTC(2026, 4, 3))),
    );
  });

  test("spans a year boundary without producing a malformed key", () => {
    const a = weekKey(new Date(Date.UTC(2026, 11, 31)));
    const b = weekKey(new Date(Date.UTC(2027, 0, 4)));
    expect(a).toMatch(/^\d{4}-W\d{2}$/);
    expect(b).toMatch(/^\d{4}-W\d{2}$/);
  });
});

describe("swapAllowanceFor", () => {
  test("matches the perk copy on the plan cards", () => {
    expect(swapAllowanceFor(5)).toBe(1);
    expect(swapAllowanceFor(9)).toBe(3);
    expect(swapAllowanceFor(13)).toBe(5);
  });

  test("every shipped plan has a positive allowance", () => {
    for (const plan of PLANS) {
      expect(swapAllowanceFor(plan.itemsPerBox)).toBeGreaterThan(0);
    }
  });

  test("returns zero for a missing plan", () => {
    expect(swapAllowanceFor(undefined)).toBe(0);
    expect(swapAllowanceFor(0)).toBe(0);
  });
});

describe("composeBox", () => {
  const pool = ["a", "b", "c", "d", "e"];

  test("returns the requested number of items", () => {
    expect(composeBox(pool, 3)).toEqual(["a", "b", "c"]);
    expect(composeBox(pool, 0)).toEqual([]);
  });

  test("wraps rather than throwing when the plan wants more than the pool", () => {
    // A plan can ask for more pieces than there are distinct crops in season.
    expect(composeBox(["a", "b"], 5)).toEqual(["a", "b", "a", "b", "a"]);
  });

  test("an empty pool yields an empty box, not undefined entries", () => {
    expect(composeBox([], 5)).toEqual([]);
  });

  test("offset shifts the selection", () => {
    expect(composeBox(pool, 2, 2)).toEqual(["c", "d"]);
  });

  test("a large offset still indexes in range", () => {
    for (const offset of [0, 5, 37, 1000, -3]) {
      for (const item of composeBox(pool, 3, offset)) {
        expect(pool).toContain(item);
      }
    }
  });

  test("negative counts do not produce negative-length arrays", () => {
    expect(composeBox(pool, -5)).toEqual([]);
  });
});

describe("resizeBox", () => {
  const pool = ["a", "b", "c", "d", "e", "f", "g"];

  test("upgrading keeps what the member already had", () => {
    // The two existing entries stand for crops the member swapped in.
    // The top-up starts at pool[current.length] so it does not re-add crops
    // that are already in the box.
    expect(resizeBox(["x", "y"], pool, 4)).toEqual(["x", "y", "c", "d"]);
  });

  test("the top-up skips pool entries already in the box", () => {
    const withA = resizeBox(["a"], pool, 3);
    // "a" is present, so the fill must not add it a second time.
    expect(withA.filter((i) => i === "a")).toHaveLength(1);
    expect(withA).toEqual(["a", "b", "c"]);
  });

  test("downgrading trims to the new size", () => {
    expect(resizeBox(["x", "y", "z"], pool, 2)).toEqual(["x", "y"]);
  });

  test("an empty box fills to the target size", () => {
    expect(resizeBox([], pool, 3)).toEqual(["a", "b", "c"]);
  });

  test("an already-correct size is untouched", () => {
    expect(resizeBox(["x", "y", "z"], pool, 3)).toEqual(["x", "y", "z"]);
  });

  test("result length always equals the target", () => {
    for (const current of [[], ["x"], ["x", "y", "z", "w", "v"]]) {
      for (const target of [0, 1, 5, 9, 13]) {
        expect(resizeBox(current, pool, target)).toHaveLength(target);
      }
    }
  });

  test("a swap survives a plan change", () => {
    const swapped = resizeBox(["swapped-in"], pool, 5);
    expect(swapped[0]).toBe("swapped-in");
  });

  test("an empty pool does not lose existing items", () => {
    expect(resizeBox(["x", "y"], [], 4)).toEqual(["x", "y"]);
  });
});

describe("marketCentsFor", () => {
  test("sums known shelf prices", () => {
    expect(
      marketCentsFor([
        { priceCents: 420, supermarketPriceCents: 580 },
        { priceCents: 180, supermarketPriceCents: 280 },
      ]),
    ).toBe(860);
  });

  test("falls back rather than returning NaN for a missing shelf price", () => {
    const total = marketCentsFor([
      { priceCents: 420, supermarketPriceCents: 580 },
      { priceCents: 180 },
    ]);
    expect(Number.isFinite(total)).toBe(true);
    expect(total).toBe(580 + 252);
  });

  test("an all-missing column still yields a finite number", () => {
    // The fallback applies the 1.4x shelf multiplier per item, so the total
    // is higher than the raw coop prices but never NaN.
    const total = marketCentsFor([
      { priceCents: 100 },
      { priceCents: 200 },
    ]);
    expect(Number.isFinite(total)).toBe(true);
    expect(total).toBe(140 + 280);
  });
});

describe("formatPrice", () => {
  test("never renders NaN for a missing price", () => {
    // This is the guard that stops a stale row printing "NaN EUR" publicly.
    expect(formatPrice(undefined)).toBe("—");
    expect(formatPrice(null)).toBe("—");
    expect(formatPrice(Number.NaN)).toBe("—");
    expect(formatPrice(Number.POSITIVE_INFINITY)).toBe("—");
  });

  test("formats a real amount", () => {
    expect(formatPrice(2200)).toContain("22");
    expect(formatPrice(0)).toContain("0");
  });
});

describe("scale labels", () => {
  test("each band has its own name", () => {
    expect(scaleLabel(50)).toBe("Tarifa solidaria");
    expect(scaleLabel(75)).toBe("Tarifa reducida");
    expect(scaleLabel(100)).toBe("Tarifa estandar");
    expect(scaleLabel(120)).toBe("Tarifa de apoyo");
  });

  test("every band explains itself", () => {
    for (const pct of [50, 75, 100, 120]) {
      expect(scaleBlurb(pct).length).toBeGreaterThan(20);
    }
  });
});

describe("deliveryFeeForZone", () => {
  const zone = { feeCents: 350, freeAboveCents: 4000 };

  test("charges the fee below the threshold", () => {
    expect(deliveryFeeForZone(zone, 2200)).toBe(350);
    expect(deliveryFeeForZone(zone, 0)).toBe(350);
  });

  test("is free at exactly the threshold", () => {
    expect(deliveryFeeForZone(zone, 4000)).toBe(0);
  });

  test("is free above the threshold", () => {
    expect(deliveryFeeForZone(zone, 12000)).toBe(0);
  });

  test("a high basket in a far zone is still free once over the threshold", () => {
    const far = { feeCents: 550, freeAboveCents: 5000 };
    expect(deliveryFeeForZone(far, 2000)).toBe(550);
    expect(deliveryFeeForZone(far, 999999)).toBe(0);
  });

  test("solidarity members never pay delivery", () => {
    // A flat fee on a basket already halved would undo the solidarity scale.
    expect(deliveryFeeForZone(zone, 0, true)).toBe(0);
    expect(deliveryFeeForZone(zone, 1900, true)).toBe(0);
    expect(deliveryFeeForZone(zone, 999999, true)).toBe(0);
  });

  test("every shipped zone has a sensible fee and threshold", () => {
    for (const z of DELIVERY_ZONES) {
      expect(z.feeCents).toBeGreaterThan(0);
      expect(z.freeAboveCents).toBeGreaterThan(z.feeCents);
      expect(z.neighborhoods.length).toBeGreaterThan(0);
    }
  });

  test("the standard rate still pays, the solidarity rate does not", () => {
    // Family basket 38 EUR is below the 40 EUR Centro threshold, so a member
    // on the standard rate pays the fee and one on solidarity does not.
    const family = 3800;
    const solidarity = Math.round((family * 50) / 100);
    expect(deliveryFeeForZone(zone, family)).toBe(350);
    expect(deliveryFeeForZone(zone, family, false)).toBe(350);
    expect(deliveryFeeForZone(zone, solidarity, true)).toBe(0);
  });
});

describe("gift codes", () => {
  test("format matches the shape the preview validates", () => {
    const code = formatGiftCode(["ABC", "DEF"]);
    expect(code).toBe("RAIZ-ABC-DEF");
    expect(isValidGiftCodeShape(code)).toBe(true);
  });

  test("excludes characters people confuse when transcribing", () => {
    // I, O, 0 and 1 are the ones that get misread across a kitchen table.
    expect(GIFT_CODE_ALPHABET).not.toContain("I");
    expect(GIFT_CODE_ALPHABET).not.toContain("O");
    expect(GIFT_CODE_ALPHABET).not.toContain("0");
    expect(GIFT_CODE_ALPHABET).not.toContain("1");
  });

  test("rejects malformed codes", () => {
    for (const bad of [
      "",
      "RAIZ-AB-DEF",
      "ABCDEF",
      "RAIZ-ABC-DEFGH",
      "RAIZ_ABC_DEF",
      "OTRO-ABC-DEF",
    ]) {
      expect(isValidGiftCodeShape(bad)).toBe(false);
    }
  });

  test("normalises case and surrounding space", () => {
    expect(isValidGiftCodeShape("  raiz-k7p-4wq ")).toBe(true);
  });

  test("accepts every character in the alphabet", () => {
    for (const ch of GIFT_CODE_ALPHABET) {
      const code = formatGiftCode([ch.repeat(3), ch.repeat(3)]);
      expect(isValidGiftCodeShape(code)).toBe(true);
    }
  });
});

describe("gift pricing", () => {
  test("clamps weeks to a sane run", () => {
    expect(giftTotalCents(3800, 0)).toBe(3800);
    expect(giftTotalCents(3800, -5)).toBe(3800);
    expect(giftTotalCents(3800, 999)).toBe(3800 * 26);
  });

  test("multiplies the weekly price by the weeks", () => {
    expect(giftTotalCents(3800, 4)).toBe(15200);
  });

  test("an unknown plan is free, not NaN", () => {
    expect(giftTotalCents(undefined, 4)).toBe(0);
  });
});

describe("giftWeeksRemaining", () => {
  const WEEK = 7 * 24 * 60 * 60 * 1000;
  const now = Date.UTC(2026, 8, 27);

  test("counts down as the run elapses", () => {
    expect(giftWeeksRemaining(4, now + 4 * WEEK, now)).toBe(4);
    expect(giftWeeksRemaining(4, now + 2 * WEEK, now)).toBe(2);
  });

  test("never goes below zero once expired", () => {
    expect(giftWeeksRemaining(4, now - 10 * WEEK, now)).toBe(0);
    expect(giftWeeksRemaining(4, now, now)).toBe(0);
  });

  test("never exceeds the weeks actually bought", () => {
    expect(giftWeeksRemaining(4, now + 99 * WEEK, now)).toBe(4);
  });

  test("with no end date, reports the full run", () => {
    expect(giftWeeksRemaining(6, undefined, now)).toBe(6);
  });

  test("clamps an absurd run length", () => {
    expect(giftWeeksRemaining(999, undefined, now)).toBe(26);
  });

  test("a week just started still counts as remaining", () => {
    expect(giftWeeksRemaining(4, now + WEEK - 1000, now)).toBe(1);
  });
});

describe("maskAddress", () => {
  test("hides every number, not just the last token", () => {
    const out = maskAddress("Calle Mayor 3, 2B") ?? "";
    expect(out).not.toMatch(/\d/);
    expect(out).toContain("Calle Mayor");
  });

  test("returns null when there is no address", () => {
    expect(maskAddress(undefined)).toBeNull();
    expect(maskAddress("")).toBeNull();
  });

  test("never leaks a house or flat number", () => {
    for (const addr of [
      "Avenida del Almirante 47",
      "Calle Mayor 3, 2B",
      "Ruta de la Finca km 2",
      "Plaza Mayor 1",
    ]) {
      expect(maskAddress(addr)).not.toMatch(/\d/);
    }
  });

  test("collapses whitespace", () => {
    expect(maskAddress("  Calle   Mayor  3 ")).toBe("Calle Mayor ...");
  });
});

describe("extraRefProblem", () => {
  test("a crop alone is valid", () => {
    expect(extraRefProblem({ hasProduce: true, hasPantry: false })).toBeNull();
  });

  test("a pantry item alone is valid", () => {
    expect(extraRefProblem({ hasProduce: false, hasPantry: true })).toBeNull();
  });

  test("both at once is ambiguous", () => {
    expect(extraRefProblem({ hasProduce: true, hasPantry: true })).toContain(
      "dos cosas",
    );
  });

  test("neither is unknown", () => {
    expect(extraRefProblem({ hasProduce: false, hasPantry: false })).toContain(
      "que extra",
    );
  });
});

describe("clampGuests", () => {
  test("defaults to one person", () => {
    expect(clampGuests(undefined)).toBe(1);
  });

  test("clamps to at least one and at most four", () => {
    expect(clampGuests(0)).toBe(1);
    expect(clampGuests(-3)).toBe(1);
    expect(clampGuests(2)).toBe(2);
    expect(clampGuests(4)).toBe(4);
    expect(clampGuests(99)).toBe(4);
  });
});

describe("clampExtraQty", () => {
  test("zero means remove", () => {
    expect(clampExtraQty(0)).toBe(0);
  });

  test("never goes negative", () => {
    expect(clampExtraQty(-5)).toBe(0);
  });

  test("caps at ten", () => {
    expect(clampExtraQty(10)).toBe(10);
    expect(clampExtraQty(500)).toBe(10);
  });

  test("rounds fractional input", () => {
    expect(clampExtraQty(2.4)).toBe(2);
    expect(clampExtraQty(2.6)).toBe(3);
  });
});

describe("clampScale", () => {
  test("holds the solidarity floor and the sponsor ceiling", () => {
    expect(clampScale(0)).toBe(50);
    expect(clampScale(10)).toBe(50);
    expect(clampScale(50)).toBe(50);
    expect(clampScale(100)).toBe(100);
    expect(clampScale(120)).toBe(120);
    expect(clampScale(9999)).toBe(120);
  });

  test("rounds fractional input", () => {
    expect(clampScale(74.6)).toBe(75);
  });

  test("the four offered options survive unchanged", () => {
    for (const pct of [50, 75, 100, 120]) {
      expect(clampScale(pct)).toBe(pct);
    }
  });
});

describe("clampWeeks", () => {
  test("defaults to eight", () => {
    expect(clampWeeks(undefined)).toBe(8);
  });

  test("keeps the grid between one and twelve", () => {
    expect(clampWeeks(0)).toBe(1);
    expect(clampWeeks(1)).toBe(1);
    expect(clampWeeks(8)).toBe(8);
    expect(clampWeeks(12)).toBe(12);
    expect(clampWeeks(500)).toBe(12);
  });
});

describe("creditFor", () => {
  test("is a quarter of the share", () => {
    expect(creditFor(4000)).toBe(1000);
    expect(creditFor(2400)).toBe(600);
  });

  test("is capped at fifteen euros", () => {
    expect(creditFor(5200)).toBe(1300);
    expect(creditFor(60000)).toBe(1500);
  });

  test("falls back for a missing plan", () => {
    expect(creditFor(undefined)).toBe(600);
  });

  test("never exceeds the smallest basket price", () => {
    for (const plan of PLANS) {
      expect(creditFor(plan.weeklyPriceCents)).toBeLessThanOrEqual(
        plan.weeklyPriceCents,
      );
    }
  });
});

describe("canBookVisit", () => {
  test("allows a booking that fits", () => {
    expect(canBookVisit(5, 2)).toBeNull();
  });

  test("allows an exact fit", () => {
    expect(canBookVisit(2, 2)).toBeNull();
  });

  test("rejects a full visit", () => {
    expect(canBookVisit(0, 1)).toContain("No quedan");
  });

  test("rejects a party larger than the remainder, and says how big it is", () => {
    expect(canBookVisit(2, 3)).toContain("2");
  });

  test("reports fullness before oversize", () => {
    expect(canBookVisit(0, 4)).toContain("No quedan");
  });
});

describe("canClaimCredit", () => {
  test("allows a first claim once a box has been collected", () => {
    expect(canClaimCredit(0, 1)).toBeNull();
  });

  test("refuses before any box has been collected", () => {
    expect(canClaimCredit(0, 0)).toContain("Aun no has recogido");
  });

  test("allows one credit per delivered box", () => {
    expect(canClaimCredit(1, 3)).toBeNull();
    expect(canClaimCredit(2, 3)).toBeNull();
  });

  test("refuses once every delivered box has been claimed", () => {
    expect(canClaimCredit(3, 3)).toContain("Ya has usado");
  });

  test("refuses to claim more than has been delivered", () => {
    expect(canClaimCredit(4, 3)).toContain("Ya has usado");
  });
});

describe("canClaimReason", () => {
  test("needs something to act on", () => {
    expect(canClaimReason("")).toContain("Cuenta un poco mas");
    expect(canClaimReason("   ")).toContain("Cuenta un poco mas");
    expect(canClaimReason("mal")).toContain("Cuenta un poco mas");
  });

  test("accepts a real description", () => {
    expect(canClaimReason("llegaron pisados")).toBeNull();
  });
});

describe("toggleInList", () => {
  test("adds when absent", () => {
    expect(toggleInList(["a"], "b")).toEqual(["a", "b"]);
  });

  test("removes when present", () => {
    expect(toggleInList(["a", "b"], "a")).toEqual(["b"]);
  });

  test("adds to an empty list", () => {
    expect(toggleInList([], "a")).toEqual(["a"]);
  });

  test("toggling twice is a no-op", () => {
    const once = toggleInList(["a", "b"], "c");
    expect(toggleInList(once, "c")).toEqual(["a", "b"]);
  });

  test("never mutates the input", () => {
    const original = ["a"];
    toggleInList(original, "b");
    expect(original).toEqual(["a"]);
  });

  test("is its own inverse for every element", () => {
    // Compared as a set: toggling off removes and toggling on re-appends, so
    // the order may differ even though the contents are identical.
    const base = ["a", "b", "c"];
    const sorted = (xs: string[]) => [...xs].sort();
    for (const item of base) {
      expect(sorted(toggleInList(toggleInList(base, item), item))).toEqual(
        sorted(base),
      );
    }
  });
});

describe("applySwap", () => {
  test("replaces a crop that is in the box", () => {
    expect(applySwap(["A", "B", "C"], "A", "X")).toEqual(["X", "B", "C"]);
  });

  test("replaces a re-swap target, not the original", () => {
    // A is long gone from the box; X is what the member actually chose.
    // Swapping on A here would match nothing and lose the choice.
    expect(applySwap(["X", "B", "C"], "A", "Y", "X")).toEqual([
      "Y",
      "B",
      "C",
    ]);
  });

  test("a re-swap does not resurrect the original", () => {
    const out = applySwap(["X", "B"], "A", "Y", "X");
    expect(out).not.toContain("A");
    expect(out).not.toContain("X");
    expect(out).toContain("Y");
  });

  test("leaves the box untouched when the crop is not present", () => {
    expect(applySwap(["X", "B"], "A", "Y")).toEqual(["X", "B"]);
  });

  test("replaces every instance of a repeated crop", () => {
    // A box can only hold a duplicate crop via the wrap path, but if it does,
    // the panel renders two cards with the same name and swapping acts on the
    // crop rather than a specific instance. Replace all, so the box matches
    // what the member clicked.
    expect(applySwap(["A", "B", "A"], "A", "X")).toEqual(["X", "B", "X"]);
  });

  test("preserves item count", () => {
    const before = ["A", "B", "C", "D"];
    for (const from of before) {
      expect(applySwap(before, from, "Z")).toHaveLength(before.length);
    }
  });
});

describe("validateDelivery", () => {
  test("pickup needs nothing", () => {
    expect(
      validateDelivery({ mode: "pickup", hasZone: false, address: "" }),
    ).toBeNull();
  });

  test("delivery needs a zone", () => {
    const err = validateDelivery({
      mode: "delivery",
      hasZone: false,
      address: "Calle Mayor 3",
    });
    expect(err).toContain("zona");
  });

  test("delivery needs a usable address", () => {
    expect(
      validateDelivery({ mode: "delivery", hasZone: true, address: "" }),
    ).toContain("direccion");
    expect(
      validateDelivery({ mode: "delivery", hasZone: true }),
    ).toContain("direccion");
    expect(
      validateDelivery({
        mode: "delivery",
        hasZone: true,
        address: "  a  ",
      }),
    ).toContain("direccion");
  });

  test("a complete setup passes", () => {
    expect(
      validateDelivery({
        mode: "delivery",
        hasZone: true,
        address: "Calle Mayor 3, 2B",
      }),
    ).toBeNull();
  });

  test("whitespace around a good address is tolerated", () => {
    expect(
      validateDelivery({
        mode: "delivery",
        hasZone: true,
        address: "  Calle Mayor 3  ",
      }),
    ).toBeNull();
  });

  test("reports the zone problem before the address problem", () => {
    const err = validateDelivery({
      mode: "delivery",
      hasZone: false,
      address: "",
    });
    expect(err).toContain("zona");
  });
});

describe("catalog data integrity", () => {
  test("every produce row points at a real farm", () => {
    for (const p of PRODUCE) {
      expect(farmerSlugs.has(p.farmer)).toBe(true);
    }
  });

  test("every produce row has a portion and a shelf price", () => {
    for (const p of PRODUCE) {
      expect(PORTION[p.name]).toBeDefined();
      expect(SUPERMARKET_PRICE[p.name]).toBeDefined();
    }
  });

  test("coop prices sit below the shelf price they are compared against", () => {
    for (const p of PRODUCE) {
      expect(p.priceCents).toBeLessThan(SUPERMARKET_PRICE[p.name]);
    }
  });

  test("every recipe resolves to real crops", () => {
    for (const r of RECIPES) {
      expect(r.produceSlugs.length).toBeGreaterThan(0);
      for (const slug of r.produceSlugs) {
        expect(cropSlugs.has(slug)).toBe(true);
      }
    }
  });

  test("every adoption plot resolves to a real crop", () => {
    for (const a of ADOPTIONS) {
      expect(cropSlugs.has(slugify(a.produce))).toBe(true);
    }
  });

  test("every visit belongs to a real farm", () => {
    for (const v of VISITS) {
      expect(farmerSlugs.has(v.farmer)).toBe(true);
    }
  });

  test("the cost breakdown totals exactly 100 percent", () => {
    expect(COST_BREAKDOWN.reduce((s, c) => s + c.sharePercent, 0)).toBe(100);
  });

  test("the largest line is the farmer payout", () => {
    const largest = [...COST_BREAKDOWN].sort(
      (a, b) => b.sharePercent - a.sharePercent,
    )[0];
    expect(largest.farmerPayout).toBe(true);
  });

  test("visit capacity is consistent", () => {
    for (const v of VISITS) {
      expect(v.spotsLeft).toBeLessThanOrEqual(v.capacity);
      expect(v.spotsLeft).toBeGreaterThanOrEqual(0);
    }
  });

  test("testimonials carry a name, a quote and a valid rating", () => {
    for (const t of TESTIMONIALS) {
      expect(t.name.length).toBeGreaterThan(0);
      expect(t.quote.length).toBeGreaterThan(10);
      expect(t.rating).toBeGreaterThanOrEqual(1);
      expect(t.rating).toBeLessThanOrEqual(5);
    }
  });

  test("plans are listed in ascending price order", () => {
    const prices = [...PLANS].map((p) => p.weeklyPriceCents);
    expect([...prices].sort((a, b) => a - b)).toEqual(prices);
  });

  test("every pantry item is complete and priced", () => {
    for (const p of PANTRY) {
      expect(p.name.length).toBeGreaterThan(0);
      expect(p.producer.length).toBeGreaterThan(0);
      expect(p.unit.length).toBeGreaterThan(0);
      expect(p.priceCents).toBeGreaterThan(0);
    }
  });

  test("pantry items linked to a farm name a real one", () => {
    for (const p of PANTRY) {
      if (p.farmer) expect(farmerSlugs.has(p.farmer)).toBe(true);
    }
  });

  test("pantry names are unique", () => {
    const names = PANTRY.map((p) => p.name);
    expect(new Set(names).size).toBe(names.length);
  });

  test("the pantry is not just more vegetables", () => {
    // Everything here should be something a box of crops cannot already be.
    const crops = new Set(PRODUCE.map((p) => p.name));
    for (const p of PANTRY) {
      expect(crops.has(p.name)).toBe(false);
    }
  });
});
