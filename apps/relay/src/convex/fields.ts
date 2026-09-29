import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import { isAgentEmail } from "../lib/support";
import type { Category } from "../lib/support";

/**
 * Custom ticket fields — the form-builder surface every helpdesk has. A field
 * can be limited to specific categories (conditional forms) and to the
 * customer form, the agent console, or both.
 */

export type FieldDef = {
  _id?: unknown;
  key: string;
  label: string;
  type: "text" | "select";
  options?: string[];
  required?: boolean;
  categories?: string[];
  audience?: "customer" | "agent";
  order?: number;
};

async function requireAgent(ctx: QueryCtx | MutationCtx) {
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
  if (
    !isAgentEmail(user.email) &&
    user.role !== "agent" &&
    user.role !== "admin"
  ) {
    throw new ConvexError({
      code: "FORBIDDEN",
      message: "This area is for support agents only.",
    });
  }
  return userId;
}

function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 32);
}

export function fieldAppliesTo(
  field: Pick<FieldDef, "categories">,
  category: Category,
): boolean {
  if (!field.categories || field.categories.length === 0) return true;
  return field.categories.includes(category);
}

/** Fields for a given form. Public: the customer form needs them. */
export const listFields = query({
  args: {
    category: v.optional(v.string()),
    audience: v.optional(v.union(v.literal("customer"), v.literal("agent"))),
  },
  handler: async (ctx, args) => {
    const rows = await ctx.db.query("customFields").take(100);
    const category = args.category as Category | undefined;

    return rows
      .filter((field) => {
        if (args.audience && (field.audience ?? "both") !== "both" && field.audience !== args.audience) {
          return false;
        }
        if (category && !fieldAppliesTo(field, category)) return false;
        return true;
      })
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((field) => ({
        key: field.key,
        label: field.label,
        type: field.type,
        options: field.options ?? [],
        required: field.required ?? false,
        categories: field.categories ?? [],
        audience: field.audience ?? "both",
      }));
  },
});

export const createField = mutation({
  args: {
    label: v.string(),
    type: v.union(v.literal("text"), v.literal("select")),
    options: v.optional(v.array(v.string())),
    required: v.optional(v.boolean()),
    categories: v.optional(v.array(v.string())),
    audience: v.optional(v.union(v.literal("customer"), v.literal("agent"))),
  },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const label = args.label.trim();
    if (label.length < 2) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Give the field a label." });
    }
    if (args.type === "select" && (args.options?.length ?? 0) === 0) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "A dropdown needs at least one option.",
      });
    }

    const key = slugify(label);
    if (!key) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Bad field label." });
    }
    const existing = await ctx.db
      .query("customFields")
      .take(200)
      .then((rows) => rows.find((row) => row.key === key));
    if (existing) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: `A field called “${label}” already exists.`,
      });
    }

    const count = (await ctx.db.query("customFields").take(200)).length;
    const id = await ctx.db.insert("customFields", {
      key,
      label,
      type: args.type,
      options: args.options,
      required: args.required,
      categories: args.categories,
      audience: args.audience,
      order: count,
      createdAt: Date.now(),
    });
    return { key, id };
  },
});

export const deleteField = mutation({
  args: { key: v.string() },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const rows = await ctx.db.query("customFields").take(200);
    const field = rows.find((row) => row.key === args.key);
    if (!field) return { ok: true };
    await ctx.db.delete(field._id);
    return { ok: true };
  },
});

/** Agents editing a custom value on a ticket they can already see. */
export const setValue = mutation({
  args: {
    ticketId: v.id("tickets"),
    key: v.string(),
    value: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const ticket = await ctx.db.get(args.ticketId);
    if (!ticket) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Ticket not found." });
    }
    const values = { ...(ticket.customValues ?? {}) };
    const value = args.value?.trim();
    if (value) {
      values[args.key] = value;
    } else {
      delete values[args.key];
    }
    await ctx.db.patch(args.ticketId, {
      customValues: Object.keys(values).length > 0 ? values : undefined,
      updatedAt: Date.now(),
    });
    return { ok: true, customValues: values };
  },
});

/**
 * Validates submitted custom values against the desk's field definitions:
 * unknown keys are dropped, options are enforced, required fields enforced
 * when they actually apply to the chosen category.
 */
export async function validateCustomValues(
  ctx: QueryCtx,
  category: Category,
  submitted: Record<string, string> | undefined,
): Promise<Record<string, string> | undefined> {
  if (!submitted || Object.keys(submitted).length === 0) return undefined;
  const fields = await ctx.db.query("customFields").take(100);
  const clean: Record<string, string> = {};

  for (const field of fields) {
    if (!fieldAppliesTo(field, category)) continue;
    const value = (submitted[field.key] ?? "").trim();
    if (!value) {
      if (field.required && (field.audience ?? "both") !== "agent") {
        throw new ConvexError({
          code: "BAD_REQUEST",
          message: `${field.label} is required.`,
        });
      }
      continue;
    }
    if (field.type === "select" && !(field.options ?? []).includes(value)) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: `${value} isn't a valid ${field.label}.`,
      });
    }
    clean[field.key] = value.slice(0, 200);
  }
  return Object.keys(clean).length > 0 ? clean : undefined;
}

/**
 * Companies, derived from the customer's email domain — the Zendesk
 * organization model, minus the admin UI. Groups every contact at one domain.
 */
export const companies = query({
  args: {},
  handler: async (ctx) => {
    await requireAgent(ctx);
    const tickets = await ctx.db.query("tickets").take(500);

    const rows = new Map<
      string,
      {
        domain: string;
        tickets: number;
        open: number;
        urgent: number;
        contacts: Set<string>;
        lastReplyAt: number;
        latestReference: string;
      }
    >();

    for (const ticket of tickets) {
      const domain = ticket.customerEmail.split("@")[1]?.toLowerCase();
      if (!domain || !domain.includes(".")) continue;
      const row =
        rows.get(domain) ??
        {
          domain,
          tickets: 0,
          open: 0,
          urgent: 0,
          contacts: new Set<string>(),
          lastReplyAt: 0,
          latestReference: "",
        };
      row.tickets += 1;
      if (ticket.status !== "resolved") {
        row.open += 1;
        if (ticket.priority === "urgent") row.urgent += 1;
      }
      row.contacts.add(ticket.customerEmail.toLowerCase());
      if (ticket.lastReplyAt > row.lastReplyAt) {
        row.lastReplyAt = ticket.lastReplyAt;
        row.latestReference = ticket.reference;
      }
      rows.set(domain, row);
    }

    return [...rows.values()]
      .map((row) => ({
        domain: row.domain,
        tickets: row.tickets,
        open: row.open,
        urgent: row.urgent,
        contacts: [...row.contacts].slice(0, 6),
        contactCount: row.contacts.size,
        lastReplyAt: row.lastReplyAt,
        latestReference: row.latestReference,
      }))
      .sort((a, b) => b.tickets - a.tickets);
  },
});

/** Who else at the same company has an open ticket. */
export const companyColleagues = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    await requireAgent(ctx);
    const domain = args.email.split("@")[1]?.toLowerCase();
    if (!domain) return [];
    const tickets = await ctx.db.query("tickets").take(500);

    return tickets
      .filter(
        (ticket) =>
          ticket.customerEmail.split("@")[1]?.toLowerCase() === domain &&
          ticket.status !== "resolved",
      )
      .map((ticket) => ({
        id: ticket._id,
        reference: ticket.reference,
        subject: ticket.subject,
        name: ticket.customerName,
        status: ticket.status,
        lastReplyAt: ticket.lastReplyAt,
      }))
      .sort((a, b) => b.lastReplyAt - a.lastReplyAt)
      .slice(0, 6);
  },
});
