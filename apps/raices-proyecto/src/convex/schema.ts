import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove

      // cooperativa profile fields
      phone: v.optional(v.string()),
      neighborhood: v.optional(v.string()),
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // ---- cooperativa ----

    // A member farm of the cooperative. Every produce item traces back to one.
    farmers: defineTable({
      name: v.string(),
      slug: v.string(),
      location: v.string(),
      bio: v.string(),
      since: v.number(),
      /** oklch accent used to colour the farm card and its produce badges. */
      accent: v.string(),
      practices: v.array(v.string()),
    }).index("by_slug", ["slug"]),

    // A single crop. `months` drives the "what's in season" views.
    produce: defineTable({
      name: v.string(),
      category: v.string(),
      farmerId: v.id("farmers"),
      description: v.string(),
      /** 1-12. A crop is "in season" when the current month appears here. */
      months: v.array(v.number()),
      unit: v.string(),
      /** cents per unit, used for the optional "extras" add-on. */
      priceCents: v.number(),
      /** What a typical box portion looks like, e.g. "1 kg" or "500 g". */
      portion: v.string(),
      /**
       * Indicative average shelf price at a Spanish supermarket chain for the
       * same unit. Powers the "what this box costs at the super" comparison.
       */
      supermarketPriceCents: v.number(),
      emoji: v.string(),
    }).index("by_farmer", ["farmerId"]),

    // A recipe, linked to the crops it needs. The member panel matches these
    // against the crops actually in their box that week.
    recipes: defineTable({
      name: v.string(),
      minutes: v.number(),
      difficulty: v.string(),
      blurb: v.string(),
      /** Items assumed to be in the pantry (oil, salt, garlic...). */
      pantry: v.array(v.string()),
      /** Produce slugs this recipe needs. Matched against `produce`. */
      produceSlugs: v.array(v.string()),
    }),

    // A share / box plan a member subscribes to.
    sharePlans: defineTable({
      name: v.string(),
      tagline: v.string(),
      description: v.string(),
      weeklyPriceCents: v.number(),
      sizeLabel: v.string(),
      itemsPerBox: v.number(),
      perks: v.array(v.string()),
      recommended: v.optional(v.boolean()),
    }),

    // Where a member can collect their box.
    pickupPoints: defineTable({
      name: v.string(),
      address: v.string(),
      neighborhood: v.string(),
      day: v.string(),
      window: v.string(),
      notes: v.optional(v.string()),
    }),

    // A member's standing order. One active subscription per user.
    subscriptions: defineTable({
      userId: v.id("users"),
      planId: v.id("sharePlans"),
      status: v.union(
        v.literal("active"),
        v.literal("paused"),
        v.literal("cancelled"),
      ),
      startedAt: v.number(),
      /** Sliding scale: 50 = solidarity rate, 100 = standard, 120 = sponsor. */
      scalePercent: v.optional(v.number()),
      /** ISO week keys ("2026-W39") the member has skipped. */
      skipWeeks: v.optional(v.array(v.string())),
      pickupPointId: v.optional(v.id("pickupPoints")),
      /** "pickup" (default) or "delivery". */
      deliveryMode: v.optional(v.union(v.literal("pickup"), v.literal("delivery"))),
      deliveryZoneId: v.optional(v.id("deliveryZones")),
      deliveryAddress: v.optional(v.string()),
      deliveryNote: v.optional(v.string()),
      /** Set when this basket came from a redeemed gift. */
      giftId: v.optional(v.id("gifts")),
      /** When a gifted basket runs out and stops being charged. */
      giftEndsAt: v.optional(v.number()),
    })
      .index("by_user", ["userId"])
      .index("by_plan", ["planId"]),

    // A delivered box, past or upcoming. The member's own history.
    memberBoxes: defineTable({
      userId: v.id("users"),
      /** ISO week key, e.g. "2026-W39". */
      weekKey: v.string(),
      date: v.number(),
      items: v.array(v.id("produce")),
      status: v.union(
        v.literal("upcoming"),
        v.literal("collected"),
        v.literal("skipped"),
      ),
    })
      .index("by_user", ["userId"])
      .index("by_user_week", ["userId", "weekKey"]),

    // One vote per member per proposal.
    votes: defineTable({
      userId: v.id("users"),
      proposalId: v.string(),
      choice: v.string(),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_proposal", ["proposalId"]),

    // "Tell me when the broccoli is back" for crops that are out of season.
    seasonAlerts: defineTable({
      userId: v.id("users"),
      produceId: v.id("produce"),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_produce", ["produceId"]),

    // A plot members can follow through the season: sowing to harvest.
    adoptionPlots: defineTable({
      /** Crop name; resolved to `produce` by slug. */
      produce: v.string(),
      plot: v.string(),
      stage: v.string(),
      sownMonthsAgo: v.number(),
      story: v.string(),
    }),

    // A member's link to a plot they are following.
    adoptions: defineTable({
      userId: v.id("users"),
      plotId: v.id("adoptionPlots"),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_plot", ["plotId"]),

    // A member swapping one crop out of the upcoming box for another.
    swaps: defineTable({
      userId: v.id("users"),
      weekKey: v.string(),
      fromProduceId: v.id("produce"),
      toProduceId: v.id("produce"),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_user_week", ["userId", "weekKey"]),

    // "Capital social": the member contribution that funds the fleet and the
    // cold rooms. Repaid in the annual assembly.
    // Home delivery zones. The direct competitors ship nationwide, but their
    // own reviews complain about too few collection points and the cost of
    // home delivery, so the fee and the minimum are published up front.
    deliveryZones: defineTable({
      name: v.string(),
      neighborhoods: v.array(v.string()),
      feeCents: v.number(),
      /** Basket subtotal at or above which delivery is free. */
      freeAboveCents: v.number(),
      day: v.string(),
      blurb: v.string(),
      order: v.number(),
    }),

    // A basket bought as a gift. The recipient redeems with the code and never
    // has to create an account, which is the point: gifting works because it
    // does not ask anything of the person receiving it.
    gifts: defineTable({
      buyerId: v.id("users"),
      code: v.string(),
      planId: v.id("sharePlans"),
      weeks: v.number(),
      recipientName: v.string(),
      recipientEmail: v.optional(v.string()),
      recipientAddress: v.optional(v.string()),
      note: v.optional(v.string()),
      createdAt: v.number(),
      /** Set once the recipient redeems. A code is single-use. */
      claimedBy: v.optional(v.id("users")),
      claimedAt: v.optional(v.number()),
    })
      .index("by_buyer", ["buyerId"])
      .index("by_code", ["code"]),

    // A member reserving a share of a future harvest before it is picked.
    reservations: defineTable({
      userId: v.id("users"),
      produceId: v.id("produce"),
      /** ISO week key the reservation is for. */
      weekKey: v.string(),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_user_week", ["userId", "weekKey"]),

    // The despensa: things that are not crops but travel with the box.
    // The leading competitors all sell a pantry alongside the produce, and
    // these come from the same small producers as the vegetables.
    pantryItems: defineTable({
      name: v.string(),
      description: v.string(),
      unit: v.string(),
      priceCents: v.number(),
      producer: v.string(),
      /** Farms and growers are the same kind of thing to a member. */
      farmerId: v.optional(v.id("farmers")),
      emoji: v.string(),
    }).index("by_farmer", ["farmerId"]),

    // A one-off extra added to the upcoming box, outside the share. Exactly
    // one of produceId or pantryItemId is set.
    boxExtras: defineTable({
      userId: v.id("users"),
      weekKey: v.string(),
      produceId: v.optional(v.id("produce")),
      pantryItemId: v.optional(v.id("pantryItems")),
      qty: v.number(),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_user_week", ["userId", "weekKey"]),

    // Open days and activities at the farms. Nobody in the direct-to-farmer
    // world books these online; members review them as the best part.
    farmVisits: defineTable({
      farmerId: v.id("farmers"),
      title: v.string(),
      blurb: v.string(),
      startsAt: v.number(),
      durationHours: v.number(),
      capacity: v.number(),
      /** null once fully booked. */
      spotsLeft: v.optional(v.number()),
      priceCents: v.number(),
    }).index("by_farmer", ["farmerId"]),

    visitBookings: defineTable({
      userId: v.id("users"),
      visitId: v.id("farmVisits"),
      guests: v.number(),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_visit", ["visitId"]),

    // "Cosecha garantizada": if a box disappoints, the member claims a credit
    // against next week instead of arguing about a refund.
    satisfactionCredits: defineTable({
      userId: v.id("users"),
      amountCents: v.number(),
      reason: v.string(),
      createdAt: v.number(),
    }).index("by_user", ["userId"]),

    // What members say. Every direct competitor leads with social proof and a
    // cooperative has the strongest version of it: named members, named farms.
    testimonials: defineTable({
      name: v.string(),
      neighborhood: v.string(),
      quote: v.string(),
      plan: v.string(),
      rating: v.number(),
      monthsAgo: v.number(),
    }),

    // Where each euro of a share goes. Published, not hidden.
    costBreakdown: defineTable({
      label: v.string(),
      description: v.string(),
      /** Share of the weekly price, in percent. Should total 100. */
      sharePercent: v.number(),
      /** True for the line paid straight to the farms. */
      farmerPayout: v.optional(v.boolean()),
      order: v.number(),
    }),

    // Harvest intake: what each farm delivered, logged by the coordinator.
    harvestLogs: defineTable({
      farmerId: v.id("farmers"),
      produceId: v.id("produce"),
      kg: v.number(),
      loggedAt: v.number(),
    })
      .index("by_farmer", ["farmerId"])
      .index("by_loggedAt", ["loggedAt"]),

    capitalAccounts: defineTable({
      userId: v.id("users"),
      amountCents: v.number(),
      contributedAt: v.number(),
    }).index("by_user", ["userId"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;
