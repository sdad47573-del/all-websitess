import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query, type MutationCtx } from "./_generated/server";
import type { Doc } from "./_generated/dataModel";
import { v } from "convex/values";
import {
  ADOPTIONS,
  COST_BREAKDOWN,
  DELIVERY_ZONES,
  FARMERS,
  GROWTH_STAGES,
  PICKUP_POINTS,
  PLANS,
  PANTRY,
  PORTION,
  PORTION_FALLBACK,
  PRODUCE,
  RECIPES,
  SUPERMARKET_FALLBACK_MULTIPLIER,
  SUPERMARKET_PRICE,
  TESTIMONIALS,
  VISITS,
} from "./coopData";
import {
  applySwap,
  canBookVisit,
  clampGiftWeeks,
  canClaimCredit,
  canClaimReason,
  clampExtraQty,
  clampGuests,
  clampScale,
  clampWeeks,
  composeBox,
  creditFor,
  extraRefProblem,
  formatGiftCode,
  giftTotalCents,
  giftWeeksRemaining,
  GIFT_CODE_ALPHABET,
  isValidGiftCodeShape,
  maskAddress,
  marketCentsFor,
  resizeBox,
  slugify,
  swapAllowanceFor,
  toggleInList,
  validateDelivery,
  weekKey,
} from "./coopHelpers";

type FarmerId = Doc<"farmers">["_id"];
type ProduceId = Doc<"produce">["_id"];
type SubscriptionId = Doc<"subscriptions">["_id"];

/**
 * Write the authored catalog into the database the first time it is needed.
 * Idempotent: it bails out as soon as any farm exists, so the client can call
 * it on every load without guarding.
 */
export const seedCatalog = mutation({
  args: {},
  handler: async (ctx) => {
    // Every table is seeded independently and only when empty.
    //
    // The original version guarded on "any farmer exists" and returned early.
    // That was fine when farmers were the only table, but it meant the catalog
    // stopped updating for good the first time it ran: every collection added
    // later (prices, portions, recipes, plots, visits, testimonials, the cost
    // breakdown) was never written, and produce rows kept whatever fields they
    // had on first insert. The UI then rendered "NaN" prices and hid whole
    // sections behind empty length checks.
    const report: Record<string, number> = {};

    // Farmers first: produce and visits both reference them.
    const existingFarmers = await ctx.db.query("farmers").collect();
    const farmerIds = new Map<string, FarmerId>();
    if (existingFarmers.length === 0) {
      for (const f of FARMERS) {
        farmerIds.set(f.slug, await ctx.db.insert("farmers", f));
      }
      report.farmers = FARMERS.length;
    } else {
      for (const f of existingFarmers) farmerIds.set(f.slug, f._id);
      report.farmers = 0;
    }

    // Produce: insert when empty, otherwise backfill fields added later.
    const existingProduce = await ctx.db.query("produce").collect();
    if (existingProduce.length === 0) {
      for (const p of PRODUCE) {
        const farmerId = farmerIds.get(p.farmer);
        if (!farmerId) continue;
        await ctx.db.insert("produce", {
          name: p.name,
          category: p.category,
          farmerId,
          description: p.description,
          months: p.months,
          unit: p.unit,
          priceCents: p.priceCents,
          portion: PORTION[p.name] ?? PORTION_FALLBACK,
          supermarketPriceCents:
            SUPERMARKET_PRICE[p.name] ??
            Math.round(p.priceCents * SUPERMARKET_FALLBACK_MULTIPLIER),
          emoji: p.emoji,
        });
      }
      report.produce = PRODUCE.length;
      report.produceBackfilled = 0;
    } else {
      report.produce = 0;
      let backfilled = 0;
      for (const row of existingProduce) {
        // Rows inserted before these fields existed read back as undefined.
        const stale = row as {
          portion?: string;
          supermarketPriceCents?: number;
        };
        const patch: {
          portion?: string;
          supermarketPriceCents?: number;
        } = {};
        if (!stale.portion) {
          patch.portion = PORTION[row.name] ?? PORTION_FALLBACK;
        }
        if (
          stale.supermarketPriceCents === undefined ||
          Number.isNaN(stale.supermarketPriceCents)
        ) {
          patch.supermarketPriceCents =
            SUPERMARKET_PRICE[row.name] ??
            Math.round(row.priceCents * SUPERMARKET_FALLBACK_MULTIPLIER);
        }
        if (Object.keys(patch).length > 0) {
          await ctx.db.patch(row._id, patch);
          backfilled++;
        }
      }
      report.produceBackfilled = backfilled;
    }

    // Simple collections: seed each one only when it is empty. Written out one
    // by one rather than through a shared helper, because Convex infers the row
    // type per table and a union of tables loses it.
    if ((await ctx.db.query("recipes").collect()).length === 0) {
      for (const r of RECIPES) await ctx.db.insert("recipes", r);
      report.recipes = RECIPES.length;
    } else {
      report.recipes = 0;
    }

    if ((await ctx.db.query("pantryItems").collect()).length === 0) {
      for (const p of PANTRY) {
        const farmerId = p.farmer ? farmerIds.get(p.farmer) : undefined;
        await ctx.db.insert("pantryItems", {
          name: p.name,
          description: p.description,
          unit: p.unit,
          priceCents: p.priceCents,
          producer: p.producer,
          farmerId,
          emoji: p.emoji,
        });
      }
      report.pantryItems = PANTRY.length;
    } else {
      report.pantryItems = 0;
    }

    if ((await ctx.db.query("adoptionPlots").collect()).length === 0) {
      for (const a of ADOPTIONS) await ctx.db.insert("adoptionPlots", a);
      report.adoptionPlots = ADOPTIONS.length;
    } else {
      report.adoptionPlots = 0;
    }

    if ((await ctx.db.query("deliveryZones").collect()).length === 0) {
      for (const [order, z] of DELIVERY_ZONES.entries()) {
        await ctx.db.insert("deliveryZones", { ...z, order });
      }
      report.deliveryZones = DELIVERY_ZONES.length;
    } else {
      report.deliveryZones = 0;
    }

    if ((await ctx.db.query("testimonials").collect()).length === 0) {
      for (const t of TESTIMONIALS) await ctx.db.insert("testimonials", t);
      report.testimonials = TESTIMONIALS.length;
    } else {
      report.testimonials = 0;
    }

    if ((await ctx.db.query("sharePlans").collect()).length === 0) {
      for (const plan of PLANS) await ctx.db.insert("sharePlans", plan);
      report.sharePlans = PLANS.length;
    } else {
      report.sharePlans = 0;
    }

    if ((await ctx.db.query("pickupPoints").collect()).length === 0) {
      for (const point of PICKUP_POINTS) await ctx.db.insert("pickupPoints", point);
      report.pickupPoints = PICKUP_POINTS.length;
    } else {
      report.pickupPoints = 0;
    }

    if ((await ctx.db.query("costBreakdown").collect()).length === 0) {
      for (const [order, c] of COST_BREAKDOWN.entries()) {
        await ctx.db.insert("costBreakdown", { ...c, order });
      }
      report.costBreakdown = COST_BREAKDOWN.length;
    } else {
      report.costBreakdown = 0;
    }

    if ((await ctx.db.query("farmVisits").collect()).length === 0) {
      let added = 0;
      for (const v of VISITS) {
        const farmerId = farmerIds.get(v.farmer);
        if (!farmerId) continue;
        const when = new Date();
        when.setDate(when.getDate() + v.inDays);
        when.setHours(v.startHour, 0, 0, 0);
        await ctx.db.insert("farmVisits", {
          farmerId,
          title: v.title,
          blurb: v.blurb,
          startsAt: when.getTime(),
          durationHours: v.durationHours,
          capacity: v.capacity,
          spotsLeft: v.spotsLeft,
          priceCents: v.priceCents,
        });
        added++;
      }
      report.farmVisits = added;
    } else {
      report.farmVisits = 0;
    }

    return { seeded: true, report };
  },
});

/** The whole public catalog, with season and traceability resolved server-side. */
export const catalog = query({
  args: {},
  handler: async (ctx) => {
    const farmers = await ctx.db.query("farmers").collect();
    const produce = await ctx.db.query("produce").collect();
    const plans = await ctx.db.query("sharePlans").collect();
    const pickupPoints = await ctx.db.query("pickupPoints").collect();
    const recipeRows = await ctx.db.query("recipes").collect();

    const month = new Date().getMonth() + 1;
    const farmerById = new Map(farmers.map((f) => [f._id, f]));

    const withFarmer = (p: (typeof produce)[number]) => ({
      ...p,
      slug: slugify(p.name),
      farmer: farmerById.get(p.farmerId) ?? null,
    });

    /** Crops actually in season this month, used for boxes and price estimates. */
    const seasonalPool = produce.filter((p) => p.months.includes(month));

    return {
      month,
      farmers: farmers.map((f) => ({
        ...f,
        produce: produce
          .filter((p) => p.farmerId === f._id)
          .map(withFarmer)
          .sort((a, b) => a.name.localeCompare(b.name)),
      })),
      inSeason: seasonalPool
        .map(withFarmer)
        .sort((a, b) => a.name.localeCompare(b.name)),
      allProduce: produce.map(withFarmer).sort((a, b) => a.name.localeCompare(b.name)),
      plans: plans
        .sort((a, b) => a.weeklyPriceCents - b.weeklyPriceCents)
        .map((plan) => {
          // Estimate what one typical box of this size costs here versus the
          // same box bought one crop at a time at supermarket prices.
          const pool = seasonalPool;
          const count = Math.min(plan.itemsPerBox, pool.length);
          const boxItems = Array.from(
            { length: count },
            (_, i) => pool[i % pool.length],
          );
          const boxCents = boxItems.reduce((s, i) => s + i.priceCents, 0);
          const marketCents = marketCentsFor(
            boxItems,
            SUPERMARKET_FALLBACK_MULTIPLIER,
          );
          return {
            ...plan,
            boxCents,
            marketCents,
            savedCents: marketCents - boxCents,
          };
        }),
      pickupPoints,
      pantry: await ctx.db.query("pantryItems").collect(),
      deliveryZones: (await ctx.db.query("deliveryZones").collect()).sort(
        (a, b) => a.order - b.order,
      ),
      testimonials: await ctx.db.query("testimonials").collect(),
      costBreakdown: (await ctx.db.query("costBreakdown").collect()).sort(
        (a, b) => a.order - b.order,
      ),
      visits: (await ctx.db.query("farmVisits").collect())
        .map((v) => ({ ...v, farmer: farmerById.get(v.farmerId) ?? null }))
        .sort((a, b) => a.startsAt - b.startsAt),
      plots: await ctx.db.query("adoptionPlots").collect(),
      growthStages: GROWTH_STAGES,
      recipes: recipeRows
        .map((r) => {
          const items = r.produceSlugs
            .map((slug) => produce.find((p) => slugify(p.name) === slug))
            .filter((p): p is NonNullable<typeof p> => p !== undefined)
            .map(withFarmer);
          return { ...r, items };
        })
        .sort((a, b) => a.minutes - b.minutes),
    };
  },
});

/** Everything the signed-in member's panel needs, in one round trip. */
export const myMembership = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return null;

    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();

    const plan = sub ? await ctx.db.get(sub.planId) : null;
    const gift = sub?.giftId ? await ctx.db.get(sub.giftId) : null;
    const giftWeeks = gift?.weeks;
    const account = await ctx.db
      .query("capitalAccounts")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    const pickupPoint = sub?.pickupPointId
      ? await ctx.db.get(sub.pickupPointId)
      : null;
    const deliveryZone = sub?.deliveryZoneId
      ? await ctx.db.get(sub.deliveryZoneId)
      : null;

    const boxes = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    const allProduce = await ctx.db.query("produce").collect();
    const byId = new Map(allProduce.map((p) => [p._id, p]));

    const resolvedBoxes = boxes
      .map((b) => ({
        weekKey: b.weekKey,
        date: b.date,
        status: b.status,
        items: b.items
          .map((id) => byId.get(id))
          .filter((p) => p !== undefined),
      }))
      .sort((a, b) => b.date - a.date);

    const myVotes = await ctx.db
      .query("votes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return {
      subscription: sub,
      plan,
      pickupPoint,
      // Members fund the co-op through this account, so they are owed their own
      // running total and a receipt of what they put in.
      capital: account
        ? {
            amountCents: account.amountCents,
            contributedAt: account.contributedAt,
          }
        : null,
      deliveryZone,
      deliveryMode: sub?.deliveryMode ?? "pickup",
      deliveryAddress: sub?.deliveryAddress ?? null,
      deliveryNote: sub?.deliveryNote ?? null,
      gift: sub?.giftId
        ? {
            id: sub.giftId,
            weeksRemaining: giftWeeksRemaining(
              giftWeeks ?? 0,
              sub.giftEndsAt,
              Date.now(),
            ),
            endsAt: sub.giftEndsAt ?? null,
          }
        : null,
      // The fee is priced here, not in the browser, so what the member is
      // quoted always matches what would actually be charged.
      deliveryFeeCents:
        sub?.deliveryMode === "delivery" && deliveryZone
          ? deliveryFeeFor(
              deliveryZone,
              subtotalCents(plan, sub.scalePercent ?? 100),
              (sub.scalePercent ?? 100) <= 60,
            )
          : 0,
      nextBox: resolvedBoxes.find((b) => b.status === "upcoming") ?? null,
      history: resolvedBoxes.filter((b) => b.status === "collected"),
      votes: Object.fromEntries(myVotes.map((v) => [v.proposalId, v.choice])),
    };
  },
});

/** Live tallies for the governance votes, so anyone can see participation. */
/**
 * The coordinator's view: who is subscribed, what has to be packed this week,
 * and what the farms have actually delivered. This is the operational half of
 * the marketplace, which every direct competitor has and a storefront alone
 * does not.
 */
export const coordinatorOverview = query({
  args: {},
  handler: async (ctx) => {
    const subs = await ctx.db.query("subscriptions").collect();
    const plans = await ctx.db.query("sharePlans").collect();
    const planById = new Map(plans.map((p) => [p._id, p]));

    const active = subs.filter((s) => s.status === "active");
    const scaleCounts: Record<number, number> = {};
    let weeklyCents = 0;
    for (const s of active) {
      const plan = planById.get(s.planId);
      const pct = s.scalePercent ?? 100;
      weeklyCents += Math.round(((plan?.weeklyPriceCents ?? 0) * pct) / 100);
      scaleCounts[pct] = (scaleCounts[pct] ?? 0) + 1;
    }

    const boxes = await ctx.db.query("memberBoxes").collect();
    const produce = await ctx.db.query("produce").collect();
    const farmers = await ctx.db.query("farmers").collect();
    const byId = new Map(produce.map((p) => [p._id, p]));

    // How many pieces of each crop this week's boxes call for.
    const demand = new Map<string, number>();
    for (const b of boxes) {
      if (b.status !== "upcoming") continue;
      for (const id of b.items) {
        const crop = byId.get(id);
        if (crop) demand.set(crop.name, (demand.get(crop.name) ?? 0) + 1);
      }
    }

    const harvest = (
      await ctx.db.query("harvestLogs").collect()
    ).sort((a, b) => b.loggedAt - a.loggedAt);

    const farmerById = new Map(farmers.map((f) => [f._id, f]));

    return {
      members: subs.length,
      activeMembers: active.length,
      weeklyCents,
      solidarityMembers: active.filter((s) => (s.scalePercent ?? 100) <= 60).length,
      scaleCounts,
      planMix: plans.map((p) => ({
        name: p.name,
        members: active.filter((s) => s.planId === p._id).length,
      })),
      upcomingBoxes: boxes.filter((b) => b.status === "upcoming").length,
      demand: [...demand.entries()]
        .map(([name, qty]) => ({ name, qty }))
        .sort((a, b) => b.qty - a.qty),
      harvest: harvest
        .map((h) => {
          const crop = byId.get(h.produceId);
          return {
            _id: h._id,
            kg: h.kg,
            loggedAt: h.loggedAt,
            produce: crop ?? null,
            farmer: farmerById.get(h.farmerId) ?? null,
          };
        })
        .filter((h) => h.produce !== null),
      capitalTotalCents: (
        await ctx.db.query("capitalAccounts").collect()
      ).reduce((sum, a) => sum + a.amountCents, 0),
    };
  },
});

/** Log what a farm delivered, against the demand the boxes imply. */
export const logHarvest = mutation({
  args: { farmerId: v.id("farmers"), produceId: v.id("produce"), kg: v.number() },
  handler: async (ctx, args) => {
    if (args.kg <= 0) throw new Error("Los kilos deben ser mayores que cero.");
    await ctx.db.insert("harvestLogs", {
      farmerId: args.farmerId,
      produceId: args.produceId,
      kg: Math.round(args.kg * 10) / 10,
      loggedAt: Date.now(),
    });
  },
});

/** The member's visit bookings and any unused satisfaction credit. */
export const myVisits = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return { bookings: [], creditCents: 0 };

    const bookings = await ctx.db
      .query("visitBookings")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const visits = await ctx.db.query("farmVisits").collect();
    const farmers = await ctx.db.query("farmers").collect();
    const farmerById = new Map(farmers.map((f) => [f._id, f]));

    const resolved = bookings
      .map((b) => {
        const visit = visits.find((v) => v._id === b.visitId);
        if (!visit) return null;
        return {
          ...b,
          visit: {
            ...visit,
            farmer: farmerById.get(visit.farmerId) ?? null,
          },
        };
      })
      .filter((b): b is NonNullable<typeof b> => b !== null)
      .sort((a, b) => a.visit.startsAt - b.visit.startsAt);

    const credits = await ctx.db
      .query("satisfactionCredits")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return {
      bookings: resolved,
      creditCents: credits.reduce((sum, c) => sum + c.amountCents, 0),
    };
  },
});

/** Book a place at a farm visit. Capacity is decremented server-side. */
export const bookVisit = mutation({
  args: { visitId: v.id("farmVisits"), guests: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion para apuntarte.");

    const visit = await ctx.db.get(args.visitId);
    if (!visit) throw new Error("Esa visita ya no esta disponible.");

    const existing = await ctx.db
      .query("visitBookings")
      .withIndex("by_visit", (q) => q.eq("visitId", args.visitId))
      .filter((q) => q.eq(q.field("userId"), userId))
      .first();
    if (existing) throw new Error("Ya tienes plaza en esa visita.");

    const guests = clampGuests(args.guests);
    const left = visit.spotsLeft ?? 0;
    const problem = canBookVisit(left, guests);
    if (problem) throw new Error(problem);

    await ctx.db.insert("visitBookings", {
      userId,
      visitId: args.visitId,
      guests,
      createdAt: Date.now(),
    });
    await ctx.db.patch(visit._id, { spotsLeft: left - guests });
  },
});

export const cancelBooking = mutation({
  args: { visitId: v.id("farmVisits") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion primero.");

    const booking = await ctx.db
      .query("visitBookings")
      .withIndex("by_visit", (q) => q.eq("visitId", args.visitId))
      .filter((q) => q.eq(q.field("userId"), userId))
      .first();
    if (!booking) return;

    const visit = await ctx.db.get(args.visitId);
    await ctx.db.delete(booking._id);
    if (visit) {
      await ctx.db.patch(visit._id, {
        spotsLeft: (visit.spotsLeft ?? 0) + booking.guests,
      });
    }
  },
});

/**
 * "Cosecha garantizada": one credit per collected box, capped so a member cannot
 * milk it. The direct-to-farmer competitors offer a money-back guarantee; a
 * cooperative offers the next box instead, which costs the same and keeps the
 * money inside the coop.
 */
export const claimSatisfactionCredit = mutation({
  args: { reason: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion primero.");
    const reasonProblem = canClaimReason(args.reason);
    if (reasonProblem) throw new Error(reasonProblem);

    const collected = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("status"), "collected"))
      .collect();

    const credits = await ctx.db
      .query("satisfactionCredits")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    // One credit per delivered box, never more than the boxes received.
    const creditProblem = canClaimCredit(credits.length, collected.length);
    if (creditProblem) throw new Error(creditProblem);

    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    const plan = sub ? await ctx.db.get(sub.planId) : null;
    // Credit is worth a quarter of the share, capped at 15 EUR.
    const amount = creditFor(plan?.weeklyPriceCents);

    await ctx.db.insert("satisfactionCredits", {
      userId,
      amountCents: amount,
      reason: args.reason.trim().slice(0, 300),
      createdAt: Date.now(),
    });
  },
});

/** Reservations and one-off extras for the member's upcoming box. */
export const myBoxExtras = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return { extras: [], reservations: [], extrasTotalCents: 0 };

    const box = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("status"), "upcoming"))
      .first();
    if (!box) return { extras: [], reservations: [], extrasTotalCents: 0 };

    const produce = await ctx.db.query("produce").collect();
    const pantry = await ctx.db.query("pantryItems").collect();
    const byId = new Map(produce.map((p) => [p._id, p]));
    const pantryById = new Map(pantry.map((p) => [p._id, p]));

    const extras = (
      await ctx.db
        .query("boxExtras")
        .withIndex("by_user_week", (q) =>
          q.eq("userId", userId).eq("weekKey", box.weekKey),
        )
        .collect()
    )
      .map((e) => {
        // An extra is either a crop or a pantry item; both price per unit.
        if (e.pantryItemId) {
          const item = pantryById.get(e.pantryItemId);
          return item
            ? {
                ...e,
                kind: "pantry" as const,
                label: item.name,
                emoji: item.emoji,
                unit: item.unit,
                lineTotalCents: item.priceCents * e.qty,
              }
            : null;
        }
        const crop = e.produceId ? byId.get(e.produceId) : undefined;
        return crop
          ? {
              ...e,
              kind: "produce" as const,
              label: crop.name,
              emoji: crop.emoji,
              unit: crop.unit,
              lineTotalCents: crop.priceCents * e.qty,
            }
          : null;
      })
      .filter((e): e is NonNullable<typeof e> => e !== null);

    const reservations = (
      await ctx.db
        .query("reservations")
        .withIndex("by_user_week", (q) =>
          q.eq("userId", userId).eq("weekKey", box.weekKey),
        )
        .collect()
    )
      .map((r) => {
        const crop = byId.get(r.produceId);
        return crop ? { ...r, produce: crop } : null;
      })
      .filter((r): r is NonNullable<typeof r> => r !== null);

    return {
      extras,
      reservations,
      extrasTotalCents: extras.reduce((sum, e) => sum + e.lineTotalCents, 0),
    };
  },
});

/** Reserve a share of a crop that is not in season yet, for a future harvest. */
export const toggleReservation = mutation({
  args: { produceId: v.id("produce") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion para reservar cosecha.");

    const box = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("status"), "upcoming"))
      .first();
    if (!box) throw new Error("Aun no tienes ninguna cesta activa.");

    const existing = await ctx.db
      .query("reservations")
      .withIndex("by_user_week", (q) =>
        q.eq("userId", userId).eq("weekKey", box.weekKey),
      )
      .filter((q) => q.eq(q.field("produceId"), args.produceId))
      .first();

    if (existing) {
      await ctx.db.delete(existing._id);
      return;
    }
    await ctx.db.insert("reservations", {
      userId,
      produceId: args.produceId,
      weekKey: box.weekKey,
      createdAt: Date.now(),
    });
  },
});

/** Add a one-off extra to the upcoming box, outside the share. */
export const setExtra = mutation({
  args: {
    produceId: v.optional(v.id("produce")),
    pantryItemId: v.optional(v.id("pantryItems")),
    qty: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion primero.");

    // Exactly one reference, so an extra can never be ambiguous about what
    // it points at.
    const problem = extraRefProblem({
      hasProduce: Boolean(args.produceId),
      hasPantry: Boolean(args.pantryItemId),
    });
    if (problem) throw new Error(problem);

    const box = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("status"), "upcoming"))
      .first();
    if (!box) throw new Error("Aun no tienes ninguna cesta activa.");

    const extras = await ctx.db
      .query("boxExtras")
      .withIndex("by_user_week", (q) =>
        q.eq("userId", userId).eq("weekKey", box.weekKey),
      )
      .collect();

    const existing = args.produceId
      ? extras.find((e) => e.produceId === args.produceId)
      : extras.find((e) => e.pantryItemId === args.pantryItemId);

    const qty = clampExtraQty(args.qty);
    if (qty <= 0) {
      if (existing) await ctx.db.delete(existing._id);
      return;
    }

    if (existing) {
      await ctx.db.patch(existing._id, { qty });
      return;
    }
    await ctx.db.insert("boxExtras", {
      userId,
      weekKey: box.weekKey,
      produceId: args.produceId,
      pantryItemId: args.pantryItemId,
      qty,
      createdAt: Date.now(),
    });
  },
});

/** The member's adopted plots, resolved to crop + farm, with season progress. */
export const myAdoptions = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return [];

    const adoptions = await ctx.db
      .query("adoptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    if (adoptions.length === 0) return [];

    const plots = await ctx.db.query("adoptionPlots").collect();
    const produce = await ctx.db.query("produce").collect();
    const farmers = await ctx.db.query("farmers").collect();
    const farmerById = new Map(farmers.map((f) => [f._id, f]));

    return adoptions
      .map((a) => {
        const plot = plots.find((p) => p._id === a.plotId);
        if (!plot) return null;
        const crop = produce.find((p) => slugify(p.name) === slugify(plot.produce));
        const stageIndex = GROWTH_STAGES.indexOf(
          plot.stage as (typeof GROWTH_STAGES)[number],
        );
        return {
          _id: a._id,
          plotId: plot._id,
          plot: plot.plot,
          stage: plot.stage,
          story: plot.story,
          stageIndex: stageIndex < 0 ? 0 : stageIndex,
          totalStages: GROWTH_STAGES.length,
          crop: crop
            ? {
                ...crop,
                farmer: farmerById.get(crop.farmerId) ?? null,
              }
            : null,
        };
      })
      .filter((a): a is NonNullable<typeof a> => a !== null);
  },
});

export const toggleAdoption = mutation({
  args: { plotId: v.id("adoptionPlots") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion para adoptar un bancal.");

    const existing = await ctx.db
      .query("adoptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("plotId"), args.plotId))
      .first();

    if (existing) {
      await ctx.db.delete(existing._id);
      return;
    }
    await ctx.db.insert("adoptions", {
      userId,
      plotId: args.plotId,
      createdAt: Date.now(),
    });
  },
});

/** How many items this member may swap in the upcoming box, from their plan. */
export const swapAllowance = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return { allowance: 0, used: 0 };

    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    if (!sub) return { allowance: 0, used: 0 };

    const plan = await ctx.db.get(sub.planId);
    // Matches the perk copy on the plan cards: 1 swap on the small basket,
    // 3 on the family one, 5 on the large one.
    const allowance = swapAllowanceFor(plan?.itemsPerBox);

    const box = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("status"), "upcoming"))
      .first();
    if (!box) return { allowance, used: 0 };

    const used = await ctx.db
      .query("swaps")
      .withIndex("by_user_week", (q) =>
        q.eq("userId", userId).eq("weekKey", box.weekKey),
      )
      .collect();

    return { allowance, used: used.length };
  },
});

/**
 * Swap one item out of the upcoming box for a different in-season crop.
 * Enforces the plan's swap allowance server-side rather than trusting the UI.
 */
export const swapItem = mutation({
  args: {
    weekKey: v.string(),
    fromProduceId: v.id("produce"),
    toProduceId: v.id("produce"),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion primero.");

    const box = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user_week", (q) =>
        q.eq("userId", userId).eq("weekKey", args.weekKey),
      )
      .first();
    if (!box || box.status === "collected") {
      throw new Error("Esa caja ya no admite cambios.");
    }
    if (args.fromProduceId === args.toProduceId) return;

    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    const plan = sub ? await ctx.db.get(sub.planId) : null;
    const allowance = swapAllowanceFor(plan?.itemsPerBox);

    const existing = await ctx.db
      .query("swaps")
      .withIndex("by_user_week", (q) =>
        q.eq("userId", userId).eq("weekKey", args.weekKey),
      )
      .collect();

    // Re-swapping the same original crop replaces the earlier choice. The crop
    // to replace is then the prior swap's target, not the original, which is
    // no longer in the box.
    const prior = existing.find((s) => s.fromProduceId === args.fromProduceId);
    if (prior) {
      await ctx.db.delete(prior._id);
    } else if (existing.length >= allowance) {
      throw new Error(`Tu plan permite ${allowance} cambio(s) por semana.`);
    }

    const replaceId = prior ? prior.toProduceId : args.fromProduceId;
    if (!box.items.includes(replaceId)) {
      // The box no longer holds the crop this swap refers to, so recording it
      // would be a lie. Tell the member rather than silently dropping it.
      throw new Error("Esa pieza ya no esta en tu caja. Recarga el panel.");
    }

    await ctx.db.patch(box._id, {
      items: applySwap(
        box.items,
        args.fromProduceId,
        args.toProduceId,
        prior?.toProduceId,
      ),
    });

    await ctx.db.insert("swaps", {
      userId,
      weekKey: args.weekKey,
      fromProduceId: args.fromProduceId,
      toProduceId: args.toProduceId,
      createdAt: Date.now(),
    });
  },
});

/** Member contributions to "capital social", repaid at the annual assembly. */
export const contributeCapital = mutation({
  args: { amountCents: v.number() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion primero.");
    if (args.amountCents <= 0) throw new Error("El importe no es valido.");

    const existing = await ctx.db
      .query("capitalAccounts")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        amountCents: existing.amountCents + args.amountCents,
        contributedAt: Date.now(),
      });
      return;
    }
    await ctx.db.insert("capitalAccounts", {
      userId,
      amountCents: args.amountCents,
      contributedAt: Date.now(),
    });
  },
});

/** A short, human-readable redemption code with no ambiguous characters. */
function newGiftCode(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  const chars = [...bytes].map(
    (b) => GIFT_CODE_ALPHABET[b % GIFT_CODE_ALPHABET.length],
  );
  return formatGiftCode([chars.slice(0, 3).join(""), chars.slice(3).join("")]);
}

/** Buy a run of baskets for someone else. Returns the redemption code. */
export const buyGift = mutation({
  args: {
    planId: v.id("sharePlans"),
    weeks: v.number(),
    recipientName: v.string(),
    recipientEmail: v.optional(v.string()),
    recipientAddress: v.optional(v.string()),
    note: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion para regalar una cesta.");

    const plan = await ctx.db.get(args.planId);
    if (!plan) throw new Error("Esa cesta no existe.");
    if (!args.recipientName || args.recipientName.trim().length < 2) {
      throw new Error("Escribe el nombre de quien la recibe.");
    }

    const weeks = clampGiftWeeks(args.weeks);

    // Retry on the astronomically unlikely collision rather than failing.
    let code = newGiftCode();
    for (let i = 0; i < 5; i++) {
      const taken = await ctx.db
        .query("gifts")
        .withIndex("by_code", (q) => q.eq("code", code))
        .first();
      if (!taken) break;
      code = newGiftCode();
    }

    await ctx.db.insert("gifts", {
      buyerId: userId,
      code,
      planId: args.planId,
      weeks,
      recipientName: args.recipientName.trim(),
      recipientEmail: args.recipientEmail?.trim() || undefined,
      recipientAddress: args.recipientAddress?.trim() || undefined,
      note: args.note?.trim() || undefined,
      createdAt: Date.now(),
    });

    return { code, weeks, totalCents: giftTotalCents(plan.weeklyPriceCents, weeks) };
  },
});

/** Gifts this member has bought. */
export const myGifts = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return [];

    const gifts = await ctx.db
      .query("gifts")
      .withIndex("by_buyer", (q) => q.eq("buyerId", userId))
      .collect();
    const plans = await ctx.db.query("sharePlans").collect();
    const planById = new Map(plans.map((p) => [p._id, p]));

    return gifts
      .map((g) => {
        const plan = planById.get(g.planId);
        return {
          _id: g._id,
          code: g.code,
          weeks: g.weeks,
          recipientName: g.recipientName,
          note: g.note ?? null,
          createdAt: g.createdAt,
          planName: plan?.name ?? null,
          totalCents: giftTotalCents(plan?.weeklyPriceCents, g.weeks),
        };
      })
      .sort((a, b) => b.createdAt - a.createdAt);
  },
});

/**
 * What a gift code entitles the holder to.
 *
 * Deliberately public: the recipient should not have to create an account to
 * find out what they were given. The code is the secret, and the street number
 * is masked so a forwarded code does not expose where someone lives.
 */
export const giftPreview = query({
  args: { code: v.string() },
  handler: async (ctx, args) => {
    const code = args.code.trim().toUpperCase();
    if (!isValidGiftCodeShape(code)) return null;

    const gift = await ctx.db
      .query("gifts")
      .withIndex("by_code", (q) => q.eq("code", code))
      .first();
    if (!gift) return null;

    const plan = await ctx.db.get(gift.planId);
    const pickupPoints = await ctx.db.query("pickupPoints").collect();

    return {
      weeks: gift.weeks,
      recipientName: gift.recipientName,
      note: gift.note ?? null,
      planName: plan?.name ?? null,
      sizeLabel: plan?.sizeLabel ?? null,
      area: maskAddress(gift.recipientAddress),
      pickupPoints: pickupPoints.map((p) => ({
        _id: p._id,
        name: p.name,
        day: p.day,
        window: p.window,
      })),
    };
  },
});

/**
 * Redeem a gift code: creates the recipient's basket and schedules the weeks.
 *
 * Single-use by design. A gift that could be redeemed twice would quietly
 * double the cost of every gift sold, so the claimed check is the first thing
 * that runs.
 */
export const redeemGift = mutation({
  args: { code: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Crea una cuenta para recoger el regalo.");
    }

    const code = args.code.trim().toUpperCase();
    if (!isValidGiftCodeShape(code)) {
      throw new Error("Ese codigo no tiene el formato correcto.");
    }
    const gift = await ctx.db
      .query("gifts")
      .withIndex("by_code", (q) => q.eq("code", code))
      .first();
    if (!gift) throw new Error("No encontramos ningun regalo con ese codigo.");
    if (gift.claimedBy) {
      throw new Error("Ese regalo ya se ha recogido.");
    }

    const existingSub = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    if (existingSub) {
      throw new Error(
        "Ya tienes una cesta activa. Contacta con la cooperativa si quieres cambiar el regalo por ella.",
      );
    }

    const plan = await ctx.db.get(gift.planId);
    if (!plan) throw new Error("Esa cesta ya no esta disponible.");

    const weeks = clampGiftWeeks(gift.weeks);
    const now = Date.now();
    const endsAt = now + weeks * 7 * 24 * 60 * 60 * 1000;

    await ctx.db.insert("subscriptions", {
      userId,
      planId: gift.planId,
      status: "active",
      startedAt: now,
      scalePercent: 100,
      skipWeeks: [],
      giftId: gift._id,
      giftEndsAt: endsAt,
      deliveryMode: "pickup",
    });

    // Schedule the whole run up front so the recipient can see what is coming.
    const pool = await seasonalPool(ctx);
    for (let i = 0; i < weeks; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() + i * 7);
      await ctx.db.insert("memberBoxes", {
        userId,
        weekKey: weekKey(date),
        date: date.getTime(),
        items: composeBox(poolIds(pool), plan.itemsPerBox, i * 3),
        status: "upcoming",
      });
    }

    await ctx.db.patch(gift._id, { claimedBy: userId, claimedAt: now });

    return {
      planName: plan.name,
      weeks,
      endsAt,
      weeksRemaining: giftWeeksRemaining(weeks, endsAt, now),
    };
  },
});

/** Which out-of-season crops this member has asked to be told about. */
export const mySeasonAlerts = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return [];

    const alerts = await ctx.db
      .query("seasonAlerts")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const produce = await ctx.db.query("produce").collect();
    const byId = new Map(produce.map((p) => [p._id, p]));

    return alerts
      .map((a) => byId.get(a.produceId))
      .filter((p): p is NonNullable<typeof p> => p !== undefined)
      .map((p) => ({ _id: p._id, name: p.name, emoji: p.emoji, months: p.months }));
  },
});

export const toggleSeasonAlert = mutation({
  args: { produceId: v.id("produce") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion para avisarte.");

    const existing = await ctx.db
      .query("seasonAlerts")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("produceId"), args.produceId))
      .first();

    if (existing) {
      await ctx.db.delete(existing._id);
      return;
    }
    await ctx.db.insert("seasonAlerts", {
      userId,
      produceId: args.produceId,
      createdAt: Date.now(),
    });
  },
});

export const voteTallies = query({
  args: {},
  handler: async (ctx) => {
    const votes = await ctx.db.query("votes").collect();
    const tally: Record<string, Record<string, number>> = {};
    for (const v of votes) {
      tally[v.proposalId] ??= {};
      tally[v.proposalId][v.choice] = (tally[v.proposalId][v.choice] ?? 0) + 1;
    }
    return tally;
  },
});

export const subscribe = mutation({
  args: {
    planId: v.id("sharePlans"),
    scalePercent: v.optional(v.number()),
    pickupPointId: v.optional(v.id("pickupPoints")),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion para apuntarte.");

    const existing = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();

    if (existing) {
      const plan = await ctx.db.get(args.planId);
      await ctx.db.patch(existing._id, {
        planId: args.planId,
        status: "active",
        scalePercent: args.scalePercent ?? existing.scalePercent ?? 100,
        pickupPointId: args.pickupPointId ?? existing.pickupPointId,
      });

      // Keep the box in step with the plan, or the plan card would promise
      // twelve pieces above a box that still holds the old five.
      const box = await ctx.db
        .query("memberBoxes")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .filter((q) => q.eq(q.field("status"), "upcoming"))
        .first();
      if (box && plan) {
        const pool = await seasonalPool(ctx);
        await ctx.db.patch(box._id, {
          items: resizeBox(box.items, poolIds(pool), plan.itemsPerBox),
        });
      }
      return;
    }

    await ctx.db.insert("subscriptions", {
      userId,
      planId: args.planId,
      status: "active",
      startedAt: Date.now(),
      scalePercent: args.scalePercent ?? 100,
      skipWeeks: [],
      pickupPointId: args.pickupPointId,
    });

    // Seed a board for the new member so the panel is never empty: the upcoming
    // week plus a few collected weeks behind it.
    const plan = await ctx.db.get(args.planId);
    const pool = await seasonalPool(ctx);

    const count = plan?.itemsPerBox ?? 6;
    for (let back = 3; back >= -1; back--) {
      const date = new Date();
      date.setDate(date.getDate() + back * 7);
      const items = composeBox(poolIds(pool), count, back * 3);
      await ctx.db.insert("memberBoxes", {
        userId,
        weekKey: weekKey(date),
        date: date.getTime(),
        items,
        status: back === -1 ? "upcoming" : "collected",
      });
    }
  },
});

async function requireSubscription(
  ctx: MutationCtx,
): Promise<SubscriptionId> {
  const userId = await getAuthUserId(ctx);
  if (userId === null) throw new Error("Inicia sesion primero.");
  const sub = await ctx.db
    .query("subscriptions")
    .withIndex("by_user", (q) => q.eq("userId", userId))
    .first();
  if (!sub) throw new Error("No tienes ninguna cesta activa.");
  return sub._id;
}

/** The crops in season this month, falling back to the full catalog. */
async function seasonalPool(ctx: MutationCtx) {
  const all = await ctx.db.query("produce").collect();
  const month = new Date().getMonth() + 1;
  const seasonal = all.filter((p) => p.months.includes(month));
  return seasonal.length > 0 ? seasonal : all;
}

/** Box items are stored as produce ids, not documents. */
function poolIds(pool: { _id: ProduceId }[]): ProduceId[] {
  return pool.map((p) => p._id);
}

/** Weekly basket subtotal after the member's solidarity scale. */
function subtotalCents(
  plan: { weeklyPriceCents: number } | null,
  scalePercent: number,
): number {
  if (!plan) return 0;
  return Math.round((plan.weeklyPriceCents * scalePercent) / 100);
}

/** Delivery is free at or above the zone's threshold, and always for solidarity. */
function deliveryFeeFor(
  zone: { feeCents: number; freeAboveCents: number },
  subtotal: number,
  isSolidarity = false,
): number {
  if (isSolidarity) return 0;
  return subtotal >= zone.freeAboveCents ? 0 : zone.feeCents;
}

/**
 * Move a member to a different basket size.
 *
 * Also resizes the upcoming box, so the plan card and the box contents can
 * never disagree. Anything already in the box, including swaps, is preserved.
 */
export const changePlan = mutation({
  args: { planId: v.id("sharePlans") },
  handler: async (ctx, args) => {
    const subId = await requireSubscription(ctx);
    const plan = await ctx.db.get(args.planId);
    if (!plan) throw new Error("Esa cesta no existe.");

    const sub = await ctx.db.get(subId);
    if (sub && sub.planId === args.planId) {
      throw new Error("Ya tienes esa cesta.");
    }
    if (sub?.status === "cancelled") {
      throw new Error("Tu cesta esta dada de baja. Reactivala antes de cambiarla.");
    }

    await ctx.db.patch(subId, { planId: args.planId });

    const box = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user", (q) => q.eq("userId", sub!.userId))
      .filter((q) => q.eq(q.field("status"), "upcoming"))
      .first();
    if (!box) return;

    const pool = await seasonalPool(ctx);
    await ctx.db.patch(box._id, {
      items: resizeBox(box.items, poolIds(pool), plan.itemsPerBox),
    });
  },
});

export const setSubscriptionStatus = mutation({
  args: {
    status: v.union(v.literal("active"), v.literal("paused"), v.literal("cancelled")),
  },
  handler: async (ctx, args) => {
    const subId = await requireSubscription(ctx);
    await ctx.db.patch(subId, { status: args.status });
  },
});

export const setScale = mutation({
  args: { scalePercent: v.number() },
  handler: async (ctx, args) => {
    const subId = await requireSubscription(ctx);
    await ctx.db.patch(subId, {
      scalePercent: clampScale(args.scalePercent),
    });
  },
});

/** Switch a member between collecting and home delivery. */
export const setDeliveryMode = mutation({
  args: {
    mode: v.union(v.literal("pickup"), v.literal("delivery")),
    zoneId: v.optional(v.id("deliveryZones")),
    address: v.optional(v.string()),
    note: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const subId = await requireSubscription(ctx);

    const problem = validateDelivery({
      mode: args.mode,
      hasZone: Boolean(args.zoneId),
      address: args.address,
    });
    if (problem) throw new Error(problem);
    if (args.mode === "delivery" && args.zoneId) {
      const zone = await ctx.db.get(args.zoneId);
      if (!zone) throw new Error("Esa zona no existe.");
    }

    await ctx.db.patch(subId, {
      deliveryMode: args.mode,
      deliveryZoneId: args.mode === "delivery" ? args.zoneId : undefined,
      deliveryAddress:
        args.mode === "delivery" ? args.address?.trim() : undefined,
      deliveryNote: args.mode === "delivery" ? args.note?.trim() : undefined,
    });
  },
});

export const setPickupPoint = mutation({
  args: { pickupPointId: v.id("pickupPoints") },
  handler: async (ctx, args) => {
    const subId = await requireSubscription(ctx);
    await ctx.db.patch(subId, { pickupPointId: args.pickupPointId });
  },
});

/**
 * Skip or un-skip any week of the standing order, not just the current one.
 *
 * Skipping a week that already has a seeded box flips that box's status. Skipping
 * further ahead records the ISO week key on the subscription, which is what
 * lets a member be away for a month without losing their place.
 */
export const toggleSkipWeek = mutation({
  args: { weekKey: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion primero.");

    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();
    if (!sub) throw new Error("No tienes ninguna cesta activa.");
    if (sub.status !== "active") {
      throw new Error("Tu cesta esta en pausa. Reactivala para gestionarla.");
    }

    const box = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user_week", (q) =>
        q.eq("userId", userId).eq("weekKey", args.weekKey),
      )
      .first();

    if (box) {
      if (box.status === "collected") return;
      await ctx.db.patch(box._id, {
        status: box.status === "skipped" ? "upcoming" : "skipped",
      });
      return;
    }

    // No box materialised for that week yet: record it on the subscription.
    const skipWeeks = sub.skipWeeks ?? [];
    const next = toggleInList(skipWeeks, args.weekKey);
    await ctx.db.patch(sub._id, { skipWeeks: next });
  },
});

/** Every future week, with whether the member has skipped it. */
export const upcomingWeeks = query({
  args: { weeks: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return { skipWeeks: [], boxes: [] };

    const sub = await ctx.db
      .query("subscriptions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .first();

    const count = clampWeeks(args.weeks);
    const weeks: { weekKey: string; date: number; skipped: boolean }[] = [];
    for (let i = 0; i < count; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i * 7);
      const key = weekKey(d);
      weeks.push({
        weekKey: key,
        date: d.getTime(),
        skipped: (sub?.skipWeeks ?? []).includes(key),
      });
    }

    const boxes = await ctx.db
      .query("memberBoxes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const statusByWeek = new Map(
      boxes.map((b) => [b.weekKey, b.status] as const),
    );

    return {
      skipWeeks: weeks,
      boxes: weeks.map((w) => ({
        ...w,
        skipped:
          w.skipped || statusByWeek.get(w.weekKey) === "skipped",
        hasBox: statusByWeek.has(w.weekKey),
      })),
    };
  },
});

export const castVote = mutation({
  args: { proposalId: v.string(), choice: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Inicia sesion para votar.");

    const existing = await ctx.db
      .query("votes")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("proposalId"), args.proposalId))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        choice: args.choice,
        createdAt: Date.now(),
      });
      return;
    }
    await ctx.db.insert("votes", {
      userId,
      proposalId: args.proposalId,
      choice: args.choice,
      createdAt: Date.now(),
    });
  },
});
