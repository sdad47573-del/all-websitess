import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import type { Id } from "./_generated/dataModel";
import { isAgentEmail } from "../lib/support";

type NotifyInput = {
  userIds: Id<"users">[];
  ticketId?: Id<"tickets">;
  kind: "assigned" | "customer_reply" | "agent_reply" | "mention";
  title: string;
  body?: string;
};

/**
 * Fan a notification out to a set of agents. Shared by the ticket mutations so
 * every place that changes a ticket can alert the right people.
 */
export async function notify(ctx: MutationCtx, input: NotifyInput) {
  const now = Date.now();
  const recipients = [...new Set(input.userIds)];
  for (const userId of recipients) {
    await ctx.db.insert("notifications", {
      userId,
      ticketId: input.ticketId,
      kind: input.kind,
      title: input.title,
      body: input.body,
      createdAt: now,
    });
  }
}

/** Everyone who should hear about activity on a ticket: assignee + followers. */
export async function ticketAudience(
  ctx: QueryCtx | MutationCtx,
  ticket: { _id: Id<"tickets">; assigneeId?: Id<"users"> },
): Promise<Id<"users">[]> {
  const audience = new Set<Id<"users">>();
  if (ticket.assigneeId) audience.add(ticket.assigneeId);
  const followers = await ctx.db
    .query("ticketFollowers")
    .withIndex("by_ticket", (q) => q.eq("ticketId", ticket._id))
    .collect();
  for (const follower of followers) audience.add(follower.userId);
  return [...audience];
}

async function requireViewer(ctx: QueryCtx | MutationCtx) {
  const userId = await getAuthUserId(ctx);
  if (!userId) {
    throw new ConvexError({
      code: "UNAUTHENTICATED",
      message: "Sign in to continue.",
    });
  }
  const user = await ctx.db.get(userId);
  if (!user) {
    throw new ConvexError({
      code: "UNAUTHENTICATED",
      message: "Sign in to continue.",
    });
  }
  return {
    id: userId,
    name: user.name?.trim() || (user.email ?? "Agent").split("@")[0],
    isAgent:
      isAgentEmail(user.email) || user.role === "agent" || user.role === "admin",
  };
}

/** The signed-in agent's notification feed, newest first. */
export const list = query({
  args: {},
  handler: async (ctx) => {
    const viewer = await requireViewer(ctx);
    const rows = await ctx.db
      .query("notifications")
      .withIndex("by_user", (q) => q.eq("userId", viewer.id))
      .take(60);

    const ordered = rows.sort((a, b) => b.createdAt - a.createdAt);
    const references = new Map<string, string>();
    const ticketIds = [...new Set(ordered.map((row) => row.ticketId).filter(Boolean))];
    for (const ticketId of ticketIds) {
      const ticket = await ctx.db.get(ticketId!);
      if (ticket) references.set(ticketId!, ticket.reference);
    }

    return {
      unreadCount: ordered.filter((row) => row.readAt === undefined).length,
      items: ordered.slice(0, 25).map((row) => ({
        id: row._id,
        kind: row.kind,
        title: row.title,
        body: row.body,
        ticketId: row.ticketId ?? null,
        reference: row.ticketId ? (references.get(row.ticketId) ?? null) : null,
        read: row.readAt !== undefined,
        createdAt: row.createdAt,
      })),
    };
  },
});

export const markRead = mutation({
  args: { ids: v.optional(v.array(v.id("notifications"))) },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    const now = Date.now();
    const rows = args.ids
      ? await Promise.all(args.ids.map((id) => ctx.db.get(id)))
      : await ctx.db
          .query("notifications")
          .withIndex("by_user", (q) => q.eq("userId", viewer.id))
          .take(100);

    let changed = 0;
    for (const row of rows) {
      if (!row || row.userId !== viewer.id || row.readAt !== undefined) continue;
      await ctx.db.patch(row._id, { readAt: now });
      changed += 1;
    }
    return { changed };
  },
});

/** Watch a ticket without taking ownership of it. */
export const follow = mutation({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    if (!viewer.isAgent) {
      throw new ConvexError({
        code: "FORBIDDEN",
        message: "Only agents can follow tickets.",
      });
    }
    const existing = await ctx.db
      .query("ticketFollowers")
      .withIndex("by_ticket", (q) => q.eq("ticketId", args.ticketId))
      .collect();
    if (existing.some((row) => row.userId === viewer.id)) {
      return { ok: true, following: true };
    }
    await ctx.db.insert("ticketFollowers", {
      ticketId: args.ticketId,
      userId: viewer.id,
      createdAt: Date.now(),
    });
    return { ok: true, following: true };
  },
});

export const unfollow = mutation({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    const rows = await ctx.db
      .query("ticketFollowers")
      .withIndex("by_ticket", (q) => q.eq("ticketId", args.ticketId))
      .collect();
    for (const row of rows) {
      if (row.userId === viewer.id) await ctx.db.delete(row._id);
    }
    return { ok: true, following: false };
  },
});

/** Who is watching this ticket, and whether the caller is one of them. */
export const followers = query({
  args: { ticketId: v.id("tickets") },
  handler: async (ctx, args) => {
    const viewer = await requireViewer(ctx);
    if (!viewer.isAgent) return { names: [] as string[], following: false };
    const rows = await ctx.db
      .query("ticketFollowers")
      .withIndex("by_ticket", (q) => q.eq("ticketId", args.ticketId))
      .collect();
    return {
      names: rows.map((row) => row.userId),
      following: rows.some((row) => row.userId === viewer.id),
    };
  },
});

/** Tickets the signed-in agent follows — the Zendesk "followed" view. */
export const followingTickets = query({
  args: {},
  handler: async (ctx) => {
    const viewer = await requireViewer(ctx);
    if (!viewer.isAgent) return [];
    const rows = await ctx.db
      .query("ticketFollowers")
      .withIndex("by_user", (q) => q.eq("userId", viewer.id))
      .collect();
    const tickets = await Promise.all(rows.map((row) => ctx.db.get(row.ticketId)));
    return tickets
      .filter((ticket): ticket is NonNullable<typeof ticket> => ticket !== null)
      .map((ticket) => ({
        id: ticket._id,
        reference: ticket.reference,
        subject: ticket.subject,
        updatedAt: ticket.updatedAt,
      }))
      .sort((a, b) => b.updatedAt - a.updatedAt);
  },
});
