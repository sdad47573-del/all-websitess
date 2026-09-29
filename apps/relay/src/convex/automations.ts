import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";
import { v } from "convex/values";
import {
  internalAction,
  internalMutation,
  mutation,
  query,
} from "./_generated/server";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import type { Doc, Id } from "./_generated/dataModel";
import { internal } from "./_generated/api";
import { notify } from "./notifications";
import { isAgentEmail, PRIORITIES, STATUSES } from "../lib/support";
import type { Priority, TicketStatus } from "../lib/support";

/**
 * Workflow automation — the Zendesk trigger/action model, trimmed to the
 * conditions a support desk actually sets up: urgent and unassigned for two
 * hours means escalate.
 *
 * Rules are evaluated by a scheduled sweep and by the "Run now" button, so the
 * feature is demonstrable even where the scheduler is throttled.
 */

type Rule = Doc<"automationRules">;
type Ticket = Doc<"tickets">;

async function requireAgent(ctx: QueryCtx | MutationCtx) {
  const userId = await getAuthUserId(ctx);
  const user = userId ? await ctx.db.get(userId) : null;
  if (!user) {
    throw new ConvexError({
      code: "UNAUTHENTICATED",
      message: "Sign in to continue.",
    });
  }
  if (!isAgentEmail(user.email) && user.role !== "agent" && user.role !== "admin") {
    throw new ConvexError({
      code: "FORBIDDEN",
      message: "This area is for support agents only.",
    });
  }
  return user;
}

function matches(rule: Rule, ticket: Ticket, now: number): boolean {
  const { conditions, match } = rule;
  const checks: boolean[] = [];

  if (conditions.status && conditions.status !== "any") {
    checks.push(ticket.status === conditions.status);
  }
  if (conditions.priority && conditions.priority !== "any") {
    checks.push(ticket.priority === conditions.priority);
  }
  if (conditions.tag) {
    checks.push((ticket.tags ?? []).includes(conditions.tag));
  }
  if (conditions.unassigned) {
    checks.push(!ticket.assigneeId);
  }
  if (conditions.olderThanMinutes !== undefined) {
    checks.push(now - ticket.createdAt >= conditions.olderThanMinutes * 60_000);
  }

  if (checks.length === 0) return false;
  return match === "all" ? checks.every(Boolean) : checks.some(Boolean);
}

/** Applies a rule's action to a ticket, if it isn't already in that state. */
function applyAction(
  ticket: Ticket,
  rule: Rule,
  assignee: { id: Id<"users">; name: string } | null,
): { patch: Record<string, unknown>; note: string } | null {
  const { type, value } = rule.action;

  if (type === "assign") {
    if (!assignee || ticket.assigneeId === assignee.id) return null;
    return {
      patch: {
        assigneeId: assignee.id,
        assigneeName: assignee.name,
        status: ticket.status === "open" ? "in_progress" : ticket.status,
      },
      note: `Automation “${rule.name}” assigned this to ${assignee.name}.`,
    };
  }
  if (type === "priority") {
    const priority = value as Priority;
    if (!PRIORITIES.includes(priority) || ticket.priority === priority) return null;
    return {
      patch: { priority },
      note: `Automation “${rule.name}” set the impact to ${priority}.`,
    };
  }
  if (type === "status") {
    const status = value as TicketStatus;
    if (!STATUSES.includes(status) || ticket.status === status) return null;
    return {
      patch: { status },
      note: `Automation “${rule.name}” moved this to ${status}.`,
    };
  }
  if (type === "tag") {
    const tag = (value ?? "").trim().toLowerCase();
    if (!tag || (ticket.tags ?? []).includes(tag)) return null;
    return {
      patch: { tags: [...(ticket.tags ?? []), tag] },
      note: `Automation “${rule.name}” tagged this ${tag}.`,
    };
  }
  // alert: one per rule per ticket, tracked so a sweep never re-notifies.
  if ((ticket.alertedRules ?? []).includes(rule._id)) return null;
  return {
    patch: { alertedRules: [...(ticket.alertedRules ?? []), rule._id] },
    note: `Automation “${rule.name}” raised an alert.`,
  };
}

export const listRules = query({
  args: {},
  handler: async (ctx) => {
    await requireAgent(ctx);
    return await ctx.db.query("automationRules").take(100);
  },
});

export const createRule = mutation({
  args: {
    name: v.string(),
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
      value: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const name = args.name.trim();
    if (name.length < 3) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Name the rule." });
    }
    const hasCondition =
      (args.conditions.status && args.conditions.status !== "any") ||
      (args.conditions.priority && args.conditions.priority !== "any") ||
      args.conditions.tag ||
      args.conditions.unassigned ||
      args.conditions.olderThanMinutes !== undefined;
    if (!hasCondition) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "Add at least one condition.",
      });
    }
    return await ctx.db.insert("automationRules", {
      name,
      enabled: true,
      match: args.match,
      conditions: args.conditions,
      action: args.action,
      createdAt: Date.now(),
    });
  },
});

export const setEnabled = mutation({
  args: { ruleId: v.id("automationRules"), enabled: v.boolean() },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    await ctx.db.patch(args.ruleId, { enabled: args.enabled });
    return { ok: true };
  },
});

export const deleteRule = mutation({
  args: { ruleId: v.id("automationRules") },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    await ctx.db.delete(args.ruleId);
    return { ok: true };
  },
});

/** Evaluates every enabled rule once. Also used by the scheduled sweep. */
export const runRules = internalMutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    const rules = (await ctx.db.query("automationRules").take(100)).filter(
      (rule) => rule.enabled !== false,
    );
    if (rules.length === 0) return { matched: 0, changed: 0 };

    const tickets = (await ctx.db.query("tickets").take(500)).filter(
      (ticket) => ticket.status !== "resolved" && !ticket.mergedIntoId,
    );
    const agents = (await ctx.db.query("users").take(200))
      .filter(
        (user) =>
          isAgentEmail(user.email) ||
          user.role === "agent" ||
          user.role === "admin",
      )
      .map((user) => ({
        id: user._id,
        name: user.name?.trim() || (user.email ?? "Agent").split("@")[0],
      }));

    let matched = 0;
    let changed = 0;

    for (const rule of rules) {
      let ruleMatched = 0;
      for (const ticket of tickets) {
        if (!matches(rule, ticket, now)) continue;
        ruleMatched += 1;

        const assignee = rule.action.value
          ? (agents.find((agent) => agent.id === rule.action.value) ?? null)
          : null;
        const result = applyAction(ticket, rule, assignee);
        if (!result) continue;

        await ctx.db.patch(ticket._id, {
          ...result.patch,
          updatedAt: now,
        });
        changed += 1;

        await ctx.db.insert("ticketMessages", {
          ticketId: ticket._id,
          authorName: "Relay",
          authorKind: "system",
          body: result.note,
          createdAt: now,
        });

        if (rule.action.type === "alert") {
          await notify(ctx, {
            userIds: agents.map((agent) => agent.id),
            ticketId: ticket._id,
            kind: "mention",
            title: `${rule.name}: ${ticket.reference}`,
            body: ticket.subject,
          });
        }
      }

      matched += ruleMatched;
      await ctx.db.patch(rule._id, {
        lastRunAt: now,
        runCount: (rule.runCount ?? 0) + 1,
        lastMatched: ruleMatched,
      });
    }

    return { matched, changed };
  },
});

/** Agent-triggered run from the console. */
export const runNow = mutation({
  args: {},
  handler: async (ctx): Promise<{ matched: number; changed: number }> => {
    await requireAgent(ctx);
    return await ctx.runMutation(internal.automations.runRules, {});
  },
});

/**
 * Self-rescheduling sweep. Convex documents this exact pattern for recurring
 * background work; the manual "Run now" button keeps the feature usable when a
 * development deployment throttles scheduled functions.
 */
export const sweep = internalAction(async (ctx): Promise<unknown> => {
  await ctx.scheduler.runAfter(10 * 60_000, internal.automations.sweep);
  return await ctx.runMutation(internal.automations.runRules, {});
});

export const startSweep = mutation({
  args: {},
  handler: async (ctx) => {
    await requireAgent(ctx);
    await ctx.scheduler.runAfter(10_000, internal.automations.sweep);
    return { ok: true };
  },
});
