import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";
import {
  AUTHOR_KINDS,
  CATEGORIES,
  PRIORITIES,
  ROUTING_MODES,
  STATUSES,
} from "../lib/support";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  AGENT: "agent",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.AGENT),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

/** Build a `v.union` of literals from a readonly string tuple. */
export const literalUnion = <T extends readonly string[]>(values: T) =>
  v.union(...values.map((value) => v.literal(value as T[number])));

export const statusValidator = literalUnion(STATUSES);
export const priorityValidator = literalUnion(PRIORITIES);
export const categoryValidator = literalUnion(CATEGORIES);
export const authorKindValidator = literalUnion(AUTHOR_KINDS);
export const routingModeValidator = literalUnion(ROUTING_MODES);

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
    }).index("email", ["email"]), // index for the email. do not remove or modify

    /** A support ticket. One thread per ticket, owned by the customer. */
    tickets: defineTable({
      /** Human reference, e.g. "RLY-1042". Shown everywhere instead of ids. */
      reference: v.string(),
      subject: v.string(),
      category: categoryValidator,
      priority: priorityValidator,
      status: statusValidator,

      customerId: v.id("users"),
      customerName: v.string(),
      customerEmail: v.string(),

      assigneeId: v.optional(v.id("users")),
      assigneeName: v.optional(v.string()),
      tags: v.optional(v.array(v.string())),

      /** Timestamp of the first public agent reply; drives the SLA clock. */
      firstAgentReplyAt: v.optional(v.number()),
      /** Hidden from the queue until this time (snooze / follow-up). */
      snoozedUntil: v.optional(v.number()),
      /** Answers to the desk's custom fields, keyed by field key. */
      customValues: v.optional(v.record(v.string(), v.string())),
      /** Company derived from the customer email domain. */
      companyDomain: v.optional(v.string()),
      /** Rule ids that have already alerted on this ticket. */
      alertedRules: v.optional(v.array(v.string())),
      /** Set when an agent folds this ticket into another as a duplicate. */
      mergedIntoId: v.optional(v.id("tickets")),
      mergedReference: v.optional(v.string()),

      messageCount: v.number(),
      lastReplyAt: v.number(),
      createdAt: v.number(),
      updatedAt: v.number(),
    })
      .index("by_customer", ["customerId"])
      .index("by_customer_updated", ["customerId", "updatedAt"])
      .index("by_status", ["status"])
      .index("by_assignee", ["assigneeId"]),

    /** A message in a ticket thread. Agents can post internal-only notes. */
    ticketMessages: defineTable({
      ticketId: v.id("tickets"),
      authorId: v.optional(v.id("users")),
      authorName: v.string(),
      authorKind: authorKindValidator,
      body: v.string(),
      /** Agent-only note, never shown to the customer. */
      isInternal: v.optional(v.boolean()),
      /** Files uploaded with the message (screenshots, logs, invoices). */
      attachments: v.optional(
        v.array(
          v.object({
            storageId: v.string(),
            name: v.string(),
            contentType: v.string(),
            size: v.number(),
          }),
        ),
      ),
      createdAt: v.number(),
    })
      .index("by_ticket", ["ticketId"])
      .index("by_ticket_created", ["ticketId", "createdAt"]),

    /** Public help centre articles used for self-service and deflection. */
    kbArticles: defineTable({
      slug: v.string(),
      title: v.string(),
      category: v.string(),
      summary: v.string(),
      /** Plain text with ## headings, - bullets and 1. steps. */
      body: v.string(),
      keywords: v.optional(v.array(v.string())),
      updatedAt: v.number(),
    })
      .index("by_slug", ["slug"])
      .index("by_category", ["category"]),

    /** Workflow automation: conditions that fire an action on matching tickets. */
    automationRules: defineTable({
      name: v.string(),
      enabled: v.optional(v.boolean()),
      /** "all" requires every condition to match; "any" fires on the first. */
      match: v.union(v.literal("all"), v.literal("any")),
      conditions: v.object({
        status: v.optional(v.string()),
        priority: v.optional(v.string()),
        tag: v.optional(v.string()),
        unassigned: v.optional(v.boolean()),
        olderThanMinutes: v.optional(v.number()),
      }),
      action: v.object({
        type: v.union(
          v.literal("assign"),
          v.literal("priority"),
          v.literal("status"),
          v.literal("tag"),
          v.literal("alert"),
        ),
        /** Assignee id, priority, status or tag depending on the type. */
        value: v.optional(v.string()),
      }),
      createdAt: v.number(),
      lastRunAt: v.optional(v.number()),
      runCount: v.optional(v.number()),
      lastMatched: v.optional(v.number()),
    }).index("by_created", ["createdAt"]),

    /** Desk-defined custom ticket fields (the form-builder surface). */
    customFields: defineTable({
      key: v.string(),
      label: v.string(),
      type: v.union(v.literal("text"), v.literal("select")),
      options: v.optional(v.array(v.string())),
      required: v.optional(v.boolean()),
      /** Categories this field applies to; empty means all of them. */
      categories: v.optional(v.array(v.string())),
      /** "customer" shows it on the portal form, "agent" only in the console. */
      audience: v.optional(v.union(v.literal("customer"), v.literal("agent"))),
      order: v.optional(v.number()),
      createdAt: v.number(),
    }).index("by_order", ["order"]),

    /** In-app notifications for agents (assignment, replies, mentions). */
    notifications: defineTable({
      userId: v.id("users"),
      ticketId: v.optional(v.id("tickets")),
      kind: v.union(
        v.literal("assigned"),
        v.literal("customer_reply"),
        v.literal("agent_reply"),
        v.literal("mention"),
      ),
      title: v.string(),
      body: v.optional(v.string()),
      readAt: v.optional(v.number()),
      createdAt: v.number(),
    })
      .index("by_user", ["userId"])
      .index("by_user_unread", ["userId", "readAt"]),

    /** Agents watching a ticket without owning it. */
    ticketFollowers: defineTable({
      ticketId: v.id("tickets"),
      userId: v.id("users"),
      createdAt: v.number(),
    })
      .index("by_ticket", ["ticketId"])
      .index("by_user", ["userId"]),

    /** "Did this help?" votes on help centre articles. */
    kbFeedback: defineTable({
      articleSlug: v.string(),
      helpful: v.boolean(),
      createdAt: v.number(),
    }).index("by_article", ["articleSlug"]),

    /** Desk-level settings (key/value, e.g. the auto-assign routing mode). */
    deskSettings: defineTable({
      key: v.string(),
      value: v.string(),
    }).index("by_key", ["key"]),

    /** Agent-authored reusable replies (macros). */
    macros: defineTable({
      title: v.string(),
      body: v.string(),
      /** Agent-only by default; set false to share with customers. */
      sharedWithCustomers: v.optional(v.boolean()),
      createdAt: v.number(),
    }).index("by_created", ["createdAt"]),

    /** Customer satisfaction score, one per ticket, after resolution. */
    satisfaction: defineTable({
      ticketId: v.id("tickets"),
      customerId: v.id("users"),
      rating: v.number(), // 1..5
      comment: v.optional(v.string()),
      createdAt: v.number(),
    })
      .index("by_ticket", ["ticketId"])
      .index("by_customer", ["customerId"]),

    /** Monotonic counters (used for ticket reference numbers). */
    counters: defineTable({
      name: v.string(),
      value: v.number(),
    }).index("by_name", ["name"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;
