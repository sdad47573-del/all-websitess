import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import type { Doc, Id } from "./_generated/dataModel";
import { categoryValidator, priorityValidator, routingModeValidator, statusValidator } from "./schema";
import { notify, ticketAudience } from "./notifications";
import { validateCustomValues } from "./fields";
import {
  CSAT_MAX,
  CSAT_MIN,
  FIRST_RESPONSE_TARGETS,
  isAgentEmail,
  isDemoAgentPasscode,
  PRIORITY_WEIGHT,
  ROUTING_MODES,
} from "../lib/support";
import type {
  Category,
  Priority,
  RoutingMode,
  TicketStatus,
} from "../lib/support";

const ROUTING_KEY = "routingMode";
const ROUTING_CURSOR_KEY = "routing-cursor";

type Viewer = {
  id: Id<"users">;
  name: string;
  email: string;
  isAgent: boolean;
};

async function getViewer(ctx: QueryCtx | MutationCtx): Promise<Viewer | null> {
  const userId = await getAuthUserId(ctx);
  if (!userId) return null;
  const user = await ctx.db.get(userId);
  if (!user) return null;
  const name = user.name?.trim() || user.email?.split("@")[0] || "Guest";
  return {
    id: userId,
    name,
    email: user.email ?? "",
    isAgent:
      isAgentEmail(user.email) || user.role === "agent" || user.role === "admin",
  };
}

async function requireViewer(ctx: QueryCtx | MutationCtx): Promise<Viewer> {
  const viewer = await getViewer(ctx);
  if (!viewer) {
    throw new ConvexError({
      code: "UNAUTHENTICATED",
      message: "Sign in to continue.",
    });
  }
  return viewer;
}

async function requireAgent(ctx: QueryCtx | MutationCtx): Promise<Viewer> {
  const viewer = await requireViewer(ctx);
  if (!viewer.isAgent) {
    throw new ConvexError({
      code: "FORBIDDEN",
      message: "This area is for support agents only.",
    });
  }
  return viewer;
}

function summarize(ticket: Doc<"tickets">) {
  return {
    id: ticket._id,
    reference: ticket.reference,
    subject: ticket.subject,
    category: ticket.category,
    priority: ticket.priority,
    status: ticket.status,
    customerId: ticket.customerId,
    customerName: ticket.customerName,
    assigneeId: ticket.assigneeId ?? null,
    assigneeName: ticket.assigneeName ?? null,
    tags: ticket.tags ?? [],
    customValues: ticket.customValues ?? {},
    companyDomain: ticket.companyDomain ?? null,
    firstAgentReplyAt: ticket.firstAgentReplyAt ?? null,
    snoozedUntil: ticket.snoozedUntil ?? null,
    mergedIntoId: ticket.mergedIntoId ?? null,
    mergedReference: ticket.mergedReference ?? null,
    messageCount: ticket.messageCount,
    createdAt: ticket.createdAt,
    updatedAt: ticket.updatedAt,
    lastReplyAt: ticket.lastReplyAt,
  };
}

export type TicketSummary = ReturnType<typeof summarize>;

/** Tickets the signed-in customer filed, newest activity first. */export const myTickets = query({
  args: {},
  handler: async (ctx) => {
    const viewer = await requireViewer(ctx);
    const tickets = await ctx.db
      .query("tickets")
      .withIndex("by_customer_updated", (q) => q.eq("customerId", viewer.id))
      .collect();

    return tickets.map(summarize).sort((a, b) => b.updatedAt - a.updatedAt);
  },
});

/** A single ticket + its thread. Customers never see internal agent notes. */
export const myTicket = query({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) return null;
    if (ticket.customerId !== viewer.id && !viewer.isAgent) return null;

    const messages = await ctx.db
      .query("ticketMessages")
      .withIndex("by_ticket", (q) => q.eq("ticketId", args.ticketId))
      .collect();
    const rating = await ctx.db
      .query("satisfaction")
      .withIndex("by_ticket", (q) => q.eq("ticketId", args.ticketId))
      .first();

    return {
      ticket: summarize(ticket),
      customerEmail: ticket.customerEmail,
      rating: rating ?? null,
      messages: messages
        .filter((m) => !m.isInternal)
        .sort((a, b) => a.createdAt - b.createdAt),
    };
  },
});

const queueArgs = {
  status: v.optional(statusValidator),
  priority: v.optional(priorityValidator),
  category: v.optional(categoryValidator),
  search: v.optional(v.string()),
  tag: v.optional(v.string()),
  /** Company (email domain) filter, the organizations view. */
  company: v.optional(v.string()),
  /** Custom field filter: only tickets whose field equals this value. */
  customKey: v.optional(v.string()),
  customValue: v.optional(v.string()),
  scope: v.optional(
    v.union(v.literal("all"), v.literal("unassigned"), v.literal("mine")),
  ),
  /** "hide" (default) keeps snoozed tickets out; "only" shows just those. */
  snoozed: v.optional(v.union(v.literal("hide"), v.literal("only"))),
  includeResolved: v.optional(v.boolean()),
} as const;

/** Triage queue for agents. Filtered + sorted server-side. */
export const queue = query({
  args: queueArgs,
  handler: async (ctx, args) => {
    const viewer = await requireAgent(ctx);

    const all = await ctx.db.query("tickets").take(300);
    const needle = args.search?.trim().toLowerCase();
    const now = Date.now();
    const snoozedView = args.snoozed ?? "hide";

    // Full-text: a needle that misses the metadata may still appear in the
    // body of a message, so scan message text once and keep the hits.
    const bodyHits = new Set<string>();
    if (needle) {
      const messages = await ctx.db.query("ticketMessages").take(1000);
      for (const message of messages) {
        if (message.body.toLowerCase().includes(needle)) {
          bodyHits.add(message.ticketId);
        }
      }
    }

    const filtered = all
      .filter((ticket) => {
        const snoozedActive =
          ticket.snoozedUntil !== undefined && ticket.snoozedUntil > now;
        if (snoozedView === "only" && !snoozedActive) return false;
        if (snoozedView === "hide" && snoozedActive) return false;
        if (args.status && ticket.status !== args.status) return false;
        if (args.priority && ticket.priority !== args.priority) return false;
        if (args.category && ticket.category !== args.category) return false;
        if (!args.includeResolved && ticket.status === "resolved") return false;
        if (args.scope === "mine" && ticket.assigneeId !== viewer.id) return false;
        if (args.scope === "unassigned" && ticket.assigneeId) return false;
        if (args.tag && !(ticket.tags ?? []).includes(args.tag)) return false;
        if (args.company && ticket.companyDomain !== args.company) return false;
        if (args.customKey) {
          const actual = (ticket.customValues ?? {})[args.customKey] ?? "";
          if (actual.toLowerCase() !== (args.customValue ?? "").toLowerCase()) {
            return false;
          }
        }
        if (needle) {
          const haystack =
            `${ticket.reference} ${ticket.subject} ${ticket.customerName} ${ticket.customerEmail} ${(ticket.tags ?? []).join(" ")}`.toLowerCase();
          if (!haystack.includes(needle) && !bodyHits.has(ticket._id)) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (snoozedView === "only") {
          return (a.snoozedUntil ?? 0) - (b.snoozedUntil ?? 0);
        }
        if (a.status === "resolved" && b.status !== "resolved") return 1;
        if (b.status === "resolved" && a.status !== "resolved") return -1;
        const weight =
          PRIORITY_WEIGHT[b.priority as Priority] -
          PRIORITY_WEIGHT[a.priority as Priority];
        if (weight !== 0) return weight;
        return a.lastReplyAt - b.lastReplyAt;
      });

    return filtered.map(summarize);
  },
});

/** Ticket + full thread including internal notes. Agents only. */
export const agentTicket = query({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) return null;

    const messages = await ctx.db
      .query("ticketMessages")
      .withIndex("by_ticket", (q) => q.eq("ticketId", args.ticketId))
      .collect();
    const rating = await ctx.db
      .query("satisfaction")
      .withIndex("by_ticket", (q) => q.eq("ticketId", args.ticketId))
      .first();

    return {
      ticket: summarize(ticket),
      customerEmail: ticket.customerEmail,
      rating: rating ?? null,
      messages: messages.sort((a, b) => a.createdAt - b.createdAt),
    };
  },
});

/** Every tag currently in use, for the tag picker. */
export const allTags = query({
  args: {},
  handler: async (ctx) => {
    const viewer = await requireViewer(ctx);
    if (!viewer.isAgent) return [];
    const tickets = await ctx.db.query("tickets").take(300);
    const tags = new Set<string>();
    for (const ticket of tickets) {
      for (const tag of ticket.tags ?? []) tags.add(tag);
    }
    return [...tags].sort();
  },
});

/**
 * Everything an agent needs about a customer, without leaving the ticket —
 * the customer record every helpdesk tucks next to the conversation.
 */
export const customerProfile = query({
  args: { customerId: v.id("users") },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const customer = await ctx.db.get(args.customerId);
    if (!customer) return null;

    const tickets = await ctx.db
      .query("tickets")
      .withIndex("by_customer", (q) => q.eq("customerId", args.customerId))
      .collect();

    const ticketIds = new Set(tickets.map((ticket) => ticket._id));
    const messages = (await ctx.db.query("ticketMessages").take(1000)).filter(
      (message) => ticketIds.has(message.ticketId),
    );
    const ratings = (await ctx.db.query("satisfaction").take(500)).filter(
      (rating) => ticketIds.has(rating.ticketId),
    );

    const firstResponseMins = tickets
      .filter((ticket) => ticket.firstAgentReplyAt)
      .map(
        (ticket) =>
          ((ticket.firstAgentReplyAt as number) - ticket.createdAt) / 60_000,
      );

    return {
      name: customer.name ?? (customer.email ?? "Customer").split("@")[0],
      email: customer.email ?? "",
      joinedAt: customer._creationTime,
      total: tickets.length,
      open: tickets.filter((ticket) => ticket.status !== "resolved").length,
      resolved: tickets.filter((ticket) => ticket.status === "resolved").length,
      messageCount: messages.length,
      csat:
        ratings.length > 0
          ? Math.round(
              (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length) * 10,
            ) / 10
          : null,
      avgFirstReplyMins:
        firstResponseMins.length > 0
          ? Math.round(
              firstResponseMins.reduce((sum, d) => sum + d, 0) /
                firstResponseMins.length,
            )
          : null,
      tickets: tickets
        .map(summarize)
        .sort((a, b) => b.updatedAt - a.updatedAt)
        .slice(0, 10),
    };
  },
});

/** Reusable agent replies. */
export const macros = query({
  args: {},
  handler: async (ctx) => {
    await requireAgent(ctx);
    const rows = await ctx.db.query("macros").take(100);
    return rows
      .sort((a, b) => a.createdAt - b.createdAt)
      .map((macro) => ({
        id: macro._id,
        title: macro.title,
        body: macro.body,
      }));
  },
});

/** Current auto-assignment mode for the desk. */
export const routingSettings = query({
  args: {},
  handler: async (ctx) => {
    await requireAgent(ctx);
    return { mode: await getRoutingMode(ctx) };
  },
});

/** Switch the desk between manual, least-loaded and round-robin routing. */
export const setRoutingMode = mutation({
  args: { mode: routingModeValidator },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    await writeRoutingMode(ctx, args.mode);
    return { ok: true };
  },
});

/**
 * Per-agent performance over the last 30 days — the Freshdesk "Agent
 * Performance" report, trimmed to the numbers that change behaviour.
 */
export const agentPerformance = query({
  args: {},
  handler: async (ctx) => {
    await requireAgent(ctx);
    const since = Date.now() - 30 * 24 * 3_600_000;

    const tickets = (await ctx.db.query("tickets").take(1000)).filter(
      (ticket) => ticket.createdAt >= since,
    );
    const messages = await ctx.db.query("ticketMessages").take(2000);
    const ratings = await ctx.db.query("satisfaction").take(1000);
    const ticketIds = new Set(tickets.map((ticket) => ticket._id));

    const rows = new Map<
      string,
      {
        id: Id<"users">;
        name: string;
        assigned: number;
        open: number;
        resolved: number;
        firstReplyMins: number[];
        slaMet: number;
        slaTotal: number;
        internalNotes: number;
        csat: number[];
      }
    >();

    const ensure = (id: Id<"users">, name: string) => {
      let row = rows.get(id);
      if (!row) {
        row = {
          id,
          name,
          assigned: 0,
          open: 0,
          resolved: 0,
          firstReplyMins: [],
          slaMet: 0,
          slaTotal: 0,
          internalNotes: 0,
          csat: [],
        };
        rows.set(id, row);
      }
      return row;
    };

    for (const ticket of tickets) {
      if (!ticket.assigneeId) continue;
      const row = ensure(ticket.assigneeId, ticket.assigneeName ?? "Agent");
      row.assigned += 1;
      if (ticket.status === "resolved") {
        row.resolved += 1;
      } else {
        row.open += 1;
      }
      if (ticket.firstAgentReplyAt) {
        row.firstReplyMins.push(
          (ticket.firstAgentReplyAt - ticket.createdAt) / 60_000,
        );
        row.slaTotal += 1;
        const target = FIRST_RESPONSE_TARGETS[ticket.priority] * 60_000;
        if (ticket.firstAgentReplyAt - ticket.createdAt <= target) row.slaMet += 1;
      }
    }

    for (const message of messages) {
      if (!message.authorId || !message.isInternal) continue;
      if (!ticketIds.has(message.ticketId)) continue;
      const row = ensure(message.authorId, message.authorName);
      row.internalNotes += 1;
    }

    for (const rating of ratings) {
      const ticket = await ctx.db.get(rating.ticketId);
      if (!ticket?.assigneeId) continue;
      const row = ensure(ticket.assigneeId, ticket.assigneeName ?? "Agent");
      row.csat.push(rating.rating);
    }

    return [...rows.values()]
      .map((row) => ({
        id: row.id,
        name: row.name,
        assigned: row.assigned,
        open: row.open,
        resolved: row.resolved,
        internalNotes: row.internalNotes,
        avgFirstReplyMins:
          row.firstReplyMins.length > 0
            ? Math.round(
                row.firstReplyMins.reduce((a, b) => a + b, 0) /
                  row.firstReplyMins.length,
              )
            : null,
        slaCompliance:
          row.slaTotal > 0 ? Math.round((row.slaMet / row.slaTotal) * 100) : null,
        csat:
          row.csat.length > 0
            ? Math.round((row.csat.reduce((a, b) => a + b, 0) / row.csat.length) * 10) / 10
            : null,
      }))
      .sort((a, b) => b.assigned - a.assigned);
  },
});

/** Headline counters for the agent dashboard. */
export const stats = query({
  args: {},
  handler: async (ctx) => {
    const viewer = await requireAgent(ctx);
    const tickets = await ctx.db.query("tickets").take(500);

    const byStatus: Record<TicketStatus, number> = {
      open: 0,
      in_progress: 0,
      waiting_on_customer: 0,
      resolved: 0,
    };
    let urgentOpen = 0;
    let unassigned = 0;
    let mine = 0;
    let resolvedToday = 0;
    let oldestOpenHours = 0;
    let slaAtRisk = 0;
    let slaBreached = 0;
    let snoozed = 0;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const now = Date.now();

    for (const ticket of tickets) {
      byStatus[ticket.status as TicketStatus] += 1;
      if (ticket.snoozedUntil !== undefined && ticket.snoozedUntil > now) {
        snoozed += 1;
      }
      if (ticket.status !== "resolved") {
        if (ticket.priority === "urgent") urgentOpen += 1;
        if (!ticket.assigneeId) unassigned += 1;
        oldestOpenHours = Math.max(
          oldestOpenHours,
          (now - ticket.createdAt) / 3_600_000,
        );
        // First-response clock is only interesting until the first reply.
        if (!ticket.firstAgentReplyAt) {
          const targetMs = FIRST_RESPONSE_TARGETS[ticket.priority] * 60_000;
          const remaining = ticket.createdAt + targetMs - now;
          if (remaining <= 0) slaBreached += 1;
          else if (remaining <= targetMs * 0.25) slaAtRisk += 1;
        }
      } else {
        if (ticket.updatedAt >= startOfDay.getTime()) resolvedToday += 1;
      }
      if (ticket.assigneeId === viewer.id) mine += 1;
    }

    // First agent reply per ticket, averaged over tickets that have one.
    const messages = await ctx.db.query("ticketMessages").take(500);
    const firstAgentReply = new Map<string, number>();
    for (const message of messages) {
      if (message.authorKind !== "agent") continue;
      const existing = firstAgentReply.get(message.ticketId);
      if (existing === undefined || message.createdAt < existing) {
        firstAgentReply.set(message.ticketId, message.createdAt);
      }
    }
    const durations: number[] = [];
    for (const ticket of tickets) {
      const repliedAt = firstAgentReply.get(ticket._id);
      if (repliedAt === undefined) continue;
      durations.push((repliedAt - ticket.createdAt) / 60_000);
    }
    const avgFirstReplyMins =
      durations.length > 0
        ? durations.reduce((sum, d) => sum + d, 0) / durations.length
        : null;

    const ratings = await ctx.db.query("satisfaction").take(500);
    const csatAvg =
      ratings.length > 0
        ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
        : null;

    return {
      total: tickets.length,
      byStatus,
      urgentOpen,
      unassigned,
      mine,
      resolvedToday,
      slaAtRisk,
      slaBreached,
      snoozed,
      oldestOpenHours: Math.round(oldestOpenHours),
      avgFirstReplyMins:
        avgFirstReplyMins === null ? null : Math.round(avgFirstReplyMins),
      csatAvg: csatAvg === null ? null : Math.round(csatAvg * 10) / 10,
      csatCount: ratings.length,
    };
  },
});

/** Agents that can be assigned tickets. */
export const agents = query({
  args: {},
  handler: async (ctx) => {
    await requireAgent(ctx);
    const users = await ctx.db.query("users").take(200);
    return users
      .filter(
        (user) =>
          isAgentEmail(user.email) ||
          user.role === "agent" ||
          user.role === "admin",
      )
      .map((user) => ({
        id: user._id,
        name: user.name || (user.email ?? "Agent").split("@")[0],
        email: user.email ?? "",
      }));
  },
});

/** Tickets that can be merged into `sourceId`'s duplicate. */
export const mergeCandidates = query({
  args: { sourceId: v.id("tickets") },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const source = await ctx.db.get(args.sourceId);
    if (!source) return [];
    const all = await ctx.db.query("tickets").take(300);
    const needle = source.subject.toLowerCase().split(/\s+/).slice(0, 4).join(" ");

    return all
      .filter((ticket) => ticket._id !== args.sourceId && !ticket.mergedIntoId)
      .map((ticket) => {
        const tokens = ticket.subject.toLowerCase();
        let score = 0;
        for (const word of needle.split(" ")) {
          if (word.length > 3 && tokens.includes(word)) score += 1;
        }
        if (ticket.customerId === source.customerId) score += 3;
        return { ticket: summarize(ticket), score };
      })
      .filter((row) => row.score > 0)
      .sort((a, b) => b.score - a.score || b.ticket.createdAt - a.ticket.createdAt)
      .slice(0, 8)
      .map((row) => row.ticket);
  },
});

async function nextReference(ctx: MutationCtx): Promise<string> {
  const existing = await ctx.db
    .query("counters")
    .withIndex("by_name", (q) => q.eq("name", "ticket"))
    .unique();
  const next = (existing?.value ?? 1000) + 1;
  if (existing) {
    await ctx.db.patch(existing._id, { value: next });
  } else {
    await ctx.db.insert("counters", { name: "ticket", value: next });
  }
  return `RLY-${next}`;
}

async function addSystemMessage(
  ctx: MutationCtx,
  ticketId: Id<"tickets">,
  body: string,
) {
  await ctx.db.insert("ticketMessages", {
    ticketId,
    authorName: "Relay",
    authorKind: "system",
    body,
    createdAt: Date.now(),
  });
}

function assertNotMerged(ticket: Doc<"tickets">) {
  if (ticket.mergedIntoId) {
    throw new ConvexError({
      code: "MERGED",
      message: `This ticket was merged into ${ticket.mergedReference ?? "another ticket"}.`,
    });
  }
}

/* ------------------------------------------------------------------ *
 * Desk settings + auto-assignment routing
 * ------------------------------------------------------------------ */

async function getRoutingMode(
  ctx: QueryCtx | MutationCtx,
): Promise<RoutingMode> {
  const row = await ctx.db
    .query("deskSettings")
    .withIndex("by_key", (q) => q.eq("key", ROUTING_KEY))
    .unique();
  const value = row?.value;
  return ROUTING_MODES.includes(value as RoutingMode)
    ? (value as RoutingMode)
    : "off";
}

async function writeRoutingMode(
  ctx: MutationCtx,
  mode: RoutingMode,
): Promise<void> {
  const row = await ctx.db
    .query("deskSettings")
    .withIndex("by_key", (q) => q.eq("key", ROUTING_KEY))
    .unique();
  if (row) {
    await ctx.db.patch(row._id, { value: mode });
  } else {
    await ctx.db.insert("deskSettings", { key: ROUTING_KEY, value: mode });
  }
}

/**
 * Freshdesk-style assignment: "load" gives the ticket to whoever has the
 * fewest open tickets, "round_robin" rotates through the roster in order.
 */
async function pickAssignee(
  ctx: MutationCtx,
  mode: RoutingMode,
): Promise<{ id: Id<"users">; name: string } | null> {
  if (mode === "off") return null;

  const users = await ctx.db.query("users").take(200);
  const agents = users.filter(
    (user) =>
      isAgentEmail(user.email) || user.role === "agent" || user.role === "admin",
  );
  if (agents.length === 0) return null;

  const tickets = await ctx.db.query("tickets").take(500);
  const openByAgent = new Map<string, number>();
  for (const ticket of tickets) {
    if (ticket.status === "resolved" || !ticket.assigneeId) continue;
    openByAgent.set(
      ticket.assigneeId,
      (openByAgent.get(ticket.assigneeId) ?? 0) + 1,
    );
  }

  const roster = agents
    .map((user) => ({
      id: user._id,
      name: user.name?.trim() || (user.email ?? "Agent").split("@")[0],
      open: openByAgent.get(user._id) ?? 0,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (mode === "round_robin") {
    const row = await ctx.db
      .query("counters")
      .withIndex("by_name", (q) => q.eq("name", ROUTING_CURSOR_KEY))
      .unique();
    const cursor = row?.value ?? 0;
    const picked = roster[cursor % roster.length];
    if (row) {
      await ctx.db.patch(row._id, { value: cursor + 1 });
    } else {
      await ctx.db.insert("counters", {
        name: ROUTING_CURSOR_KEY,
        value: cursor + 1,
      });
    }
    return { id: picked.id, name: picked.name };
  }

  const lightest = roster.reduce((best, agent) =>
    agent.open < best.open ? agent : best,
  );
  return { id: lightest.id, name: lightest.name };
}

/**
 * Demo-only: promotes the signed-in account to an agent when the passcode
 * matches. Lets reviewers reach the triage console without a staff mailbox.
 */
export const claimAgentRole = mutation({
  args: { passcode: v.string() },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    if (viewer.isAgent) return { ok: true, alreadyAgent: true };
    if (!isDemoAgentPasscode(args.passcode)) {
      throw new ConvexError({
        code: "FORBIDDEN",
        message: "That access code isn't valid.",
      });
    }
    await ctx.db.patch(viewer.id, { role: "agent" });
    return { ok: true, alreadyAgent: false };
  },
});

/* ------------------------------------------------------------------ *
 * File attachments (Convex file storage)
 * ------------------------------------------------------------------ */

export const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;
export const MAX_ATTACHMENTS_PER_MESSAGE = 5;

const attachmentValidator = v.object({
  storageId: v.string(),
  name: v.string(),
  contentType: v.string(),
  size: v.number(),
});

function validateAttachments(
  attachments: { storageId: string; name: string; contentType: string; size: number }[] | undefined,
) {
  if (!attachments || attachments.length === 0) return undefined;
  if (attachments.length > MAX_ATTACHMENTS_PER_MESSAGE) {
    throw new ConvexError({
      code: "BAD_REQUEST",
      message: `Up to ${MAX_ATTACHMENTS_PER_MESSAGE} files per message.`,
    });
  }
  for (const file of attachments) {
    if (file.size > MAX_ATTACHMENT_BYTES) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: `${file.name} is larger than 10 MB.`,
      });
    }
    if (file.size <= 0) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: `${file.name} is empty.`,
      });
    }
  }
  return attachments;
}

/** Short-lived URL for uploading one file. Auth required. */
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    await requireViewer(ctx);
    return await ctx.storage.generateUploadUrl();
  },
});

/**
 * Turns a storage id into a download URL, but only after checking the caller
 * can see the ticket the file was attached to. Keeps internal-note files
 * private the same way the note text is.
 */
export const attachmentUrl = query({
  args: { storageId: v.string(), ticketId: v.id("tickets") },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    if (ticket.customerId !== viewer.id && !viewer.isAgent) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Not your ticket." });
    }
    return await ctx.storage.getUrl(args.storageId);
  },
});

/** File a new ticket as the signed-in customer. */
export const createTicket = mutation({
  args: {
    subject: v.string(),
    category: categoryValidator,
    priority: priorityValidator,
    body: v.string(),
    attachments: v.optional(v.array(attachmentValidator)),
    customValues: v.optional(v.record(v.string(), v.string())),
  },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);

    const subject = args.subject.trim();
    const body = args.body.trim();
    if (subject.length < 4) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Add a subject." });
    }
    if (body.length < 10) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "Tell us a little more so an agent can help.",
      });
    }
    const attachments = validateAttachments(args.attachments);
    const customValues = await validateCustomValues(
      ctx,
      args.category,
      args.customValues,
    );
    const companyDomain = viewer.email.split("@")[1]?.toLowerCase();

    const now = Date.now();
    const reference = await nextReference(ctx);

    const ticketId = await ctx.db.insert("tickets", {
      reference,
      subject,
      category: args.category,
      priority: args.priority,
      status: "open",
      customerId: viewer.id,
      customerName: viewer.name,
      customerEmail: viewer.email,
      companyDomain,
      customValues,
      messageCount: 1,
      lastReplyAt: now,
      createdAt: now,
      updatedAt: now,
    });

    await ctx.db.insert("ticketMessages", {
      ticketId,
      authorId: viewer.id,
      authorName: viewer.name,
      authorKind: "customer",
      body,
      attachments,
      createdAt: now,
    });

    // Auto-assignment (least-loaded / round-robin), when the desk enables it.
    const mode = await getRoutingMode(ctx);
    const assignee = await pickAssignee(ctx, mode);
    if (assignee) {
      await ctx.db.patch(ticketId, {
        assigneeId: assignee.id,
        assigneeName: assignee.name,
      });
      await addSystemMessage(
        ctx,
        ticketId,
        `Auto-assigned to ${assignee.name} (${
          mode === "load" ? "least loaded" : "round robin"
        }).`,
      );
      await notify(ctx, {
        userIds: [assignee.id],
        ticketId,
        kind: "assigned",
        title: `${reference} was routed to you`,
        body: subject,
      });
    }

    return { ticketId, reference };
  },
});

/** Reply to a ticket. Customers and agents can both post. */
export const postReply = mutation({
  args: {
    ticketId: v.id("tickets"),
    body: v.string(),
    internal: v.optional(v.boolean()),
    attachments: v.optional(v.array(attachmentValidator)),
  },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    if (ticket.customerId !== viewer.id && !viewer.isAgent) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Not your ticket." });
    }
    assertNotMerged(ticket);

    const body = args.body.trim();
    if (body.length < 2) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Message is empty." });
    }

    const internal = Boolean(args.internal) && viewer.isAgent;
    // Files on an internal note would leak through the note's own privacy
    // rule, so they are only accepted on public messages.
    const attachments = internal ? undefined : validateAttachments(args.attachments);
    const now = Date.now();

    await ctx.db.insert("ticketMessages", {
      ticketId: args.ticketId,
      authorId: viewer.id,
      authorName: viewer.name,
      authorKind: viewer.isAgent ? "agent" : "customer",
      body,
      isInternal: internal,
      attachments,
      createdAt: now,
    });

    let status: TicketStatus = ticket.status as TicketStatus;
    if (!internal) {
      if (viewer.isAgent) {
        status = "waiting_on_customer";
      } else {
        status = ticket.assigneeId ? "in_progress" : "open";
      }
    }

    // The first public agent reply stops the first-response clock.
    const firstAgentReplyAt =
      viewer.isAgent && !internal && ticket.firstAgentReplyAt === undefined
        ? now
        : ticket.firstAgentReplyAt;

    await ctx.db.patch(args.ticketId, {
      messageCount: ticket.messageCount + 1,
      lastReplyAt: now,
      updatedAt: now,
      status,
      firstAgentReplyAt,
    });

    // Notify the people watching: the customer replying is the case that
    // actually needs a human, but a teammate's reply keeps followers in loop.
    const audience = (await ticketAudience(ctx, ticket)).filter(
      (userId) => userId !== viewer.id,
    );
    if (audience.length > 0) {
      const isCustomer = !viewer.isAgent;
      await notify(ctx, {
        userIds: audience,
        ticketId: args.ticketId,
        kind: isCustomer ? "customer_reply" : "agent_reply",
        title: isCustomer
          ? `${viewer.name} replied on ${ticket.reference}`
          : `${viewer.name} added an update to ${ticket.reference}`,
        body: body.slice(0, 140),
      });
    }

    return { ok: true };
  },
});

/** Triage: move a ticket through its status flow. */
export const setStatus = mutation({
  args: { ticketId: v.id("tickets"), status: statusValidator },
  handler: async (ctx, args) => {
    const viewer = await requireAgent(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }

    const now = Date.now();
    await ctx.db.patch(args.ticketId, {
      status: args.status,
      updatedAt: now,
    });

    if (ticket.status !== args.status) {
      await addSystemMessage(
        ctx,
        args.ticketId,
        `${viewer.name} moved this ticket to ${args.status.replace(/_/g, " ")}.`,
      );
    }
    return { ok: true };
  },
});

/** Triage: raise or lower urgency. */
export const setPriority = mutation({
  args: { ticketId: v.id("tickets"), priority: priorityValidator },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    await ctx.db.patch(args.ticketId, {
      priority: args.priority,
      updatedAt: Date.now(),
    });
    return { ok: true };
  },
});

/** Triage: replace the tag set on a ticket. */
export const setTags = mutation({
  args: { ticketId: v.id("tickets"), tags: v.array(v.string()) },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    const tags = [...new Set(args.tags.map((tag) => tag.trim().toLowerCase()))]
      .filter(Boolean)
      .slice(0, 12);
    await ctx.db.patch(args.ticketId, { tags, updatedAt: Date.now() });
    return { ok: true, tags };
  },
});

/** Triage: claim a ticket, hand it to another agent, or unassign it. */
export const setAssignee = mutation({
  args: {
    ticketId: v.id("tickets"),
    assigneeId: v.optional(v.union(v.id("users"), v.null())),
  },
  handler: async (ctx, args) => {
    const viewer = await requireAgent(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }

    const now = Date.now();
    const assigneeId = args.assigneeId ?? undefined;

    if (!assigneeId) {
      await ctx.db.patch(args.ticketId, {
        assigneeId: undefined,
        assigneeName: undefined,
        updatedAt: now,
      });
      await addSystemMessage(
        ctx,
        args.ticketId,
        `${viewer.name} unassigned this ticket.`,
      );
      return { ok: true };
    }

    const assignee = await ctx.db.get(assigneeId);
    if (!assignee) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Agent not found." });
    }
    const assigneeName =
      assignee.name?.trim() || (assignee.email ?? "Agent").split("@")[0];

    await ctx.db.patch(args.ticketId, {
      assigneeId,
      assigneeName,
      status: ticket.status === "open" ? "in_progress" : ticket.status,
      updatedAt: now,
    });
    await addSystemMessage(
      ctx,
      args.ticketId,
      `${viewer.name} assigned this ticket to ${assigneeName}.`,
    );
    if (assigneeId !== viewer.id) {
      await notify(ctx, {
        userIds: [assigneeId],
        ticketId: args.ticketId,
        kind: "assigned",
        title: `${viewer.name} assigned ${ticket.reference} to you`,
        body: ticket.subject,
      });
    }
    return { ok: true };
  },
});

/** Fold a duplicate into a surviving ticket. */
export const mergeTickets = mutation({
  args: {
    sourceId: v.id("tickets"),
    targetId: v.id("tickets"),
  },
  handler: async (ctx, args) => {
    const viewer = await requireAgent(ctx);
    if (args.sourceId === args.targetId) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "Pick a different ticket to keep.",
      });
    }
    const source = await ctx.db.get(args.sourceId);
    const target = await ctx.db.get(args.targetId);
    if (!source || !target) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    assertNotMerged(source);
    assertNotMerged(target);

    const now = Date.now();
    const mergedTags = [...new Set([...(target.tags ?? []), ...(source.tags ?? [])])];
    // The survivor inherits the more severe impact of the two.
    const priority =
      PRIORITY_WEIGHT[source.priority as Priority] >
      PRIORITY_WEIGHT[target.priority as Priority]
        ? source.priority
        : target.priority;

    await ctx.db.patch(args.targetId, {
      tags: mergedTags,
      priority,
      firstAgentReplyAt: target.firstAgentReplyAt ?? source.firstAgentReplyAt,
      updatedAt: now,
    });
    await addSystemMessage(
      ctx,
      args.targetId,
      `${viewer.name} merged ${source.reference} into this ticket.`,
    );

    await ctx.db.patch(args.sourceId, {
      status: "resolved",
      mergedIntoId: args.targetId,
      mergedReference: target.reference,
      updatedAt: now,
    });
    await addSystemMessage(
      ctx,
      args.sourceId,
      `${viewer.name} merged this ticket into ${target.reference}.`,
    );

    return { ok: true, reference: target.reference };
  },
});

const bulkArgs = { ticketIds: v.array(v.id("tickets")) } as const;

async function bulkTickets(ctx: MutationCtx, ids: Id<"tickets">[]) {
  const unique = [...new Set(ids)].slice(0, 50);
  const tickets = await Promise.all(unique.map((id) => ctx.db.get(id)));
  return tickets.filter((t): t is Doc<"tickets"> => t !== null);
}

/** Bulk triage: move several tickets to one status. */
export const bulkSetStatus = mutation({
  args: { ...bulkArgs, status: statusValidator },
  handler: async (ctx, args) => {
    const viewer = await requireAgent(ctx);
    const tickets = await bulkTickets(ctx, args.ticketIds);
    const now = Date.now();
    let changed = 0;
    for (const ticket of tickets) {
      if (ticket.status === args.status) continue;
      await ctx.db.patch(ticket._id, { status: args.status, updatedAt: now });
      await addSystemMessage(
        ctx,
        ticket._id,
        `${viewer.name} moved this ticket to ${args.status.replace(/_/g, " ")} in a bulk update.`,
      );
      changed += 1;
    }
    return { changed };
  },
});

/** Bulk triage: re-prioritise several tickets at once. */
export const bulkSetPriority = mutation({
  args: { ...bulkArgs, priority: priorityValidator },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const tickets = await bulkTickets(ctx, args.ticketIds);
    const now = Date.now();
    let changed = 0;
    for (const ticket of tickets) {
      if (ticket.priority === args.priority) continue;
      await ctx.db.patch(ticket._id, { priority: args.priority, updatedAt: now });
      changed += 1;
    }
    return { changed };
  },
});

/** Bulk triage: claim several tickets. */
export const bulkAssignToMe = mutation({
  args: bulkArgs,
  handler: async (ctx, args) => {
    const viewer = await requireAgent(ctx);
    const tickets = await bulkTickets(ctx, args.ticketIds);
    const now = Date.now();
    let changed = 0;
    for (const ticket of tickets) {
      if (ticket.assigneeId === viewer.id) continue;
      await ctx.db.patch(ticket._id, {
        assigneeId: viewer.id,
        assigneeName: viewer.name,
        status: ticket.status === "open" ? "in_progress" : ticket.status,
        updatedAt: now,
      });
      changed += 1;
    }
    return { changed };
  },
});

/** Follow-up: hide a ticket from the queue until `until` (epoch ms). */
export const snoozeTicket = mutation({
  args: { ticketId: v.id("tickets"), until: v.number() },
  handler: async (ctx, args) => {
    const viewer = await requireAgent(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    assertNotMerged(ticket);
    const until = Math.max(args.until, Date.now() + 60_000);
    await ctx.db.patch(args.ticketId, { snoozedUntil: until, updatedAt: Date.now() });
    await addSystemMessage(
      ctx,
      args.ticketId,
      `${viewer.name} snoozed this ticket until it wakes up.`,
    );
    return { ok: true, until };
  },
});

/** Bring a snoozed ticket back into the queue now. */
export const unsnoozeTicket = mutation({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, args) => {
    const viewer = await requireAgent(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    if (ticket.snoozedUntil === undefined) return { ok: true };
    await ctx.db.patch(args.ticketId, {
      snoozedUntil: undefined,
      updatedAt: Date.now(),
    });
    await addSystemMessage(ctx, args.ticketId, `${viewer.name} woke this ticket up.`);
    return { ok: true };
  },
});

/** Bulk snooze for a whole selection. */
export const bulkSnooze = mutation({
  args: { ...bulkArgs, until: v.number() },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const tickets = await bulkTickets(ctx, args.ticketIds);
    const until = Math.max(args.until, Date.now() + 60_000);
    const now = Date.now();
    let changed = 0;
    for (const ticket of tickets) {
      if (ticket.mergedIntoId) continue;
      if (ticket.snoozedUntil === until) continue;
      await ctx.db.patch(ticket._id, { snoozedUntil: until, updatedAt: now });
      changed += 1;
    }
    return { changed };
  },
});

/** Bulk add or remove a tag across the selection. */
export const bulkTag = mutation({
  args: { ...bulkArgs, tag: v.string(), mode: v.union(v.literal("add"), v.literal("remove")) },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const tag = args.tag.trim().toLowerCase();
    if (!tag) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Tag is empty." });
    }
    const tickets = await bulkTickets(ctx, args.ticketIds);
    const now = Date.now();
    let changed = 0;
    for (const ticket of tickets) {
      const tags = ticket.tags ?? [];
      const has = tags.includes(tag);
      if (args.mode === "add" && has) continue;
      if (args.mode === "remove" && !has) continue;
      await ctx.db.patch(ticket._id, {
        tags:
          args.mode === "add"
            ? [...new Set([...tags, tag])]
            : tags.filter((value) => value !== tag),
        updatedAt: now,
      });
      changed += 1;
    }
    return { changed };
  },
});

/** Customer feedback on a resolved ticket. One score per ticket. */
export const rateTicket = mutation({
  args: {
    ticketId: v.id("tickets"),
    rating: v.number(),
    comment: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    if (ticket.customerId !== viewer.id) {
      throw new ConvexError({ code: "FORBIDDEN", message: "Not your ticket." });
    }
    if (ticket.status !== "resolved") {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "You can rate this once it's resolved.",
      });
    }
    const rating = Math.round(args.rating);
    if (rating < CSAT_MIN || rating > CSAT_MAX) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Invalid rating." });
    }

    const comment = args.comment?.trim().slice(0, 1000);
    const existing = await ctx.db
      .query("satisfaction")
      .withIndex("by_ticket", (q) => q.eq("ticketId", args.ticketId))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        rating,
        comment: comment || undefined,
      });
    } else {
      await ctx.db.insert("satisfaction", {
        ticketId: args.ticketId,
        customerId: viewer.id,
        rating,
        comment: comment || undefined,
        createdAt: Date.now(),
      });
    }
    return { ok: true };
  },
});

const DEFAULT_MACROS: { title: string; body: string }[] = [
  {
    title: "First reply — we're on it",
    body: "Thanks for the details, and sorry for the trouble. I've picked this up and I'm looking into it now. I'll come back to you within the hour with either an answer or a clear next step.",
  },
  {
    title: "Need more information",
    body: "To dig further I need a few more details:\n\n1. The exact time this happened (with timezone)\n2. The ticket or order reference\n3. A screenshot or the error text, if you have one\n\nSend those over and I'll continue from here.",
  },
  {
    title: "Refund issued",
    body: "Good news — I've issued the refund and it should land on your statement within 5–10 business days depending on your bank. You'll get a confirmation email shortly with the transaction reference.",
  },
  {
    title: "Duplicate charge confirmed",
    body: "I've confirmed the second charge on your account was a duplicate. I've flagged it for our billing team, refunded it in full, and added a note so you won't be charged again while we investigate the retry logic.",
  },
  {
    title: "Apology — escalated",
    body: "This is on us, and I'm sorry it landed on you. I've escalated it to our engineering lead with everything you've sent and we're treating it as the top priority. You'll hear from me again today, even if the fix isn't done yet.",
  },
  {
    title: "Closing — resolved",
    body: "Marking this as resolved, but I'm not disappearing: if the same thing comes back, just reply here and it reopens with all of this history attached. Thanks for the clear report — it made this much faster.",
  },
];

/** Installs the starter macro library. */
export const seedMacros = mutation({
  args: {},
  handler: async (ctx) => {
    await requireAgent(ctx);
    const existing = await ctx.db.query("macros").take(1);
    if (existing.length > 0) return { seeded: 0 };
    const now = Date.now();
    for (const [index, macro] of DEFAULT_MACROS.entries()) {
      await ctx.db.insert("macros", {
        title: macro.title,
        body: macro.body,
        createdAt: now + index,
      });
    }
    return { seeded: DEFAULT_MACROS.length };
  },
});

const DEMO_TICKETS: {
  customerName: string;
  customerEmail: string;
  subject: string;
  category: Category;
  priority: Priority;
  status: TicketStatus;
  daysAgo: number;
  tags: string[];
  customValues?: Record<string, string>;
  rating?: { value: number; comment: string; hoursAfter: number };
  messages: { author: "customer" | "agent"; body: string; hoursAfter: number }[];
}[] = [
  {
    customerName: "Nadia Osei",
    customerEmail: "nadia@northwindstudio.co",
    subject: "Charged twice for the Studio plan this month",
    category: "billing",
    priority: "urgent",
    status: "open",
    daysAgo: 1,
    tags: ["refund", "duplicate-charge"],
    messages: [
      {
        author: "customer",
        body: "Our card shows two identical $249 charges from Relay on the same day. Order IDs 88213 and 88214. One of them needs to be refunded.",
        hoursAfter: 0,
      },
    ],
  },
  {
    customerName: "Tomas Ruiz",
    customerEmail: "tomas@bitloom.io",
    subject: "Webhook retries firing 400s after the new signing key",
    category: "technical",
    priority: "high",
    status: "in_progress",
    daysAgo: 3,
    tags: ["api", "webhooks"],
    messages: [
      {
        author: "customer",
        body: "Since we rotated the signing key on Tuesday every webhook delivery returns 400. Replay of the same event works fine.",
        hoursAfter: 0,
      },
      {
        author: "agent",
        body: "Thanks Tomas — I found the mismatch. The dashboard was still signing with the retired key for about 40 minutes. I've pushed the live key and I'm watching the retry queue now.",
        hoursAfter: 2,
      },
      {
        author: "customer",
        body: "Retries are draining, about 12 left. I'll confirm once it hits zero.",
        hoursAfter: 20,
      },
    ],
  },
  {
    customerName: "Greta Lindqvist",
    customerEmail: "greta@verdantlabs.se",
    subject: "Can't invite teammates — email sits in the invite queue",
    category: "account",
    priority: "normal",
    status: "waiting_on_customer",
    daysAgo: 5,
    tags: ["seats", "invites"],
    messages: [
      {
        author: "customer",
        body: "Three invites to new teammates are stuck as 'queued' and never arrive. Resending does nothing.",
        hoursAfter: 0,
      },
      {
        author: "agent",
        body: "Your workspace hit the 5-seat cap on the trial, which parks invites instead of failing them. Can you confirm the seat count on the billing page? Raising the cap clears the queue immediately.",
        hoursAfter: 4,
      },
    ],
  },
  {
    customerName: "Marcus Bell",
    customerEmail: "marcus@harborline.com",
    subject: "Export drops the last row of every report",
    category: "bug",
    priority: "high",
    status: "open",
    daysAgo: 2,
    tags: ["regression"],
    messages: [
      {
        author: "customer",
        body: "CSV export of any report is missing exactly one row — always the last one. Happens on Chrome and Safari, three different reports.",
        hoursAfter: 0,
      },
    ],
  },
  {
    customerName: "Priya Raman",
    customerEmail: "priya@cadence.health",
    subject: "Request: bulk merge tickets from the API",
    category: "feature_request",
    priority: "low",
    status: "open",
    daysAgo: 8,
    tags: ["roadmap"],
    messages: [
      {
        author: "customer",
        body: "We get duplicates from our intake form. A POST /tickets/merge endpoint would save us a weekly cleanup pass.",
        hoursAfter: 0,
      },
    ],
  },
  {
    customerName: "Marcus Bell",
    customerEmail: "marcus@harborline.com",
    subject: "Report export missing final row on Firefox",
    category: "bug",
    priority: "normal",
    status: "open",
    daysAgo: 1,
    tags: [],
    messages: [
      {
        author: "customer",
        body: "Same as my other ticket but on Firefox — the export stops one row early every time.",
        hoursAfter: 0,
      },
    ],
  },
  {
    customerName: "Elena Duarte",
    customerEmail: "elena@papertrail.app",
    subject: "Change the invoice date to the 1st of the month",
    category: "billing",
    priority: "low",
    status: "resolved",
    daysAgo: 4,
    tags: ["invoice"],
    rating: {
      value: 5,
      comment: "Two-minute fix, and they told me exactly where to click.",
      hoursAfter: 2,
    },
    messages: [
      {
        author: "customer",
        body: "Our finance team needs invoices dated on the 1st. Is that configurable?",
        hoursAfter: 0,
      },
      {
        author: "agent",
        body: "It is — Settings → Billing → Invoice date. I can also set it for you right now; say the word and I'll switch it over.",
        hoursAfter: 1,
      },
    ],
  },
];

/** Populate an empty desk with a realistic backlog so triage is explorable. */
export const seedDemoTickets = mutation({
  args: {},
  handler: async (ctx) => {
    const viewer = await requireAgent(ctx);
    const existing = await ctx.db.query("tickets").take(1);
    if (existing.length > 0) return { seeded: 0 };

    const now = Date.now();
    const hour = 3_600_000;
    let seeded = 0;

    for (const demo of DEMO_TICKETS) {
      const createdAt = now - demo.daysAgo * 24 * hour;
      const reference = await nextReference(ctx);        const customer = await ctx.db
        .query("users")
        .withIndex("email", (q) => q.eq("email", demo.customerEmail))
        .unique();
      const customerId =
        customer?._id ??
        (await ctx.db.insert("users", {
          name: demo.customerName,
          email: demo.customerEmail,
          role: "user",
        }));

      const assigned =
        demo.status === "in_progress" || demo.status === "waiting_on_customer";
      const firstAgent = demo.messages.find((m) => m.author === "agent");
      const firstAgentReplyAt = firstAgent
        ? createdAt + firstAgent.hoursAfter * hour
        : undefined;
      const lastMessage = demo.messages[demo.messages.length - 1];
      let messageCount = demo.messages.length;

      const ticketId = await ctx.db.insert("tickets", {
        reference,
        subject: demo.subject,
        category: demo.category,
        priority: demo.priority,
        status: demo.status,
        customerId,
        customerName: demo.customerName,
        customerEmail: demo.customerEmail,
        companyDomain: demo.customerEmail.split("@")[1]?.toLowerCase(),
        customValues: demo.customValues,
        assigneeId: assigned ? viewer.id : undefined,
        assigneeName: assigned ? viewer.name : undefined,
        tags: demo.tags,
        firstAgentReplyAt,
        messageCount,
        lastReplyAt: createdAt + (lastMessage?.hoursAfter ?? 0) * hour,
        createdAt,
        updatedAt: createdAt + (lastMessage?.hoursAfter ?? 0) * hour,
      });

      for (const message of demo.messages) {
        await ctx.db.insert("ticketMessages", {
          ticketId,
          authorId: message.author === "agent" ? viewer.id : customerId,
          authorName: message.author === "agent" ? viewer.name : demo.customerName,
          authorKind: message.author,
          body: message.body,
          createdAt: createdAt + message.hoursAfter * hour,
        });
      }

      if (firstAgent) {
        await ctx.db.insert("ticketMessages", {
          ticketId,
          authorId: viewer.id,
          authorName: viewer.name,
          authorKind: "agent",
          body: `Picked this up — ${firstAgent.body.slice(0, 60)}…`,
          isInternal: true,
          createdAt: createdAt + 6 * hour,
        });
        messageCount += 1;
        await ctx.db.patch(ticketId, { messageCount });
      }

      // A resolved ticket with feedback, so CSAT isn't an empty tile.
      if (demo.rating) {
        await ctx.db.insert("satisfaction", {
          ticketId,
          customerId,
          rating: demo.rating.value,
          comment: demo.rating.comment,
          createdAt: createdAt + demo.rating.hoursAfter * hour,
        });
      }

      seeded += 1;
    }

    return { seeded };
  },
});
