import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { QueryCtx } from "./_generated/server";

/**
 * Public help centre. Readable without an account so the marketing site, the
 * customer portal and the agent console all point at the same content.
 *
 * The articles below are the source of truth. Rows in `kbArticles` override
 * them one-for-one, so you can move editing into the database later without
 * touching any caller.
 */

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  keywords: string[];
  body: string;
  /** Absent for the bundled copy, which has no revision history. */
  updatedAt?: number | null;
};

const ARTICLES: Article[] = [
  {
    slug: "understanding-your-invoice",
    title: "Understanding your invoice",
    category: "Billing",
    summary: "What each line on your Relay invoice means and when it is charged.",
    keywords: ["invoice", "charge", "billing", "receipt", "tax", "vat"],
    body: `Relay bills on the first of each month for the plan you selected, prorated from the day you joined.

## Line by line

1. Base plan — your per-seat plan price, prorated for partial months.
2. Additional seats — charged from the day a teammate is added.
3. Payment method fees — only for annual card invoices over $1,000.
4. Taxes — calculated from your billing address.

## When you are charged

- Plan changes take effect immediately and are prorated both ways.
- Downgrades apply at the end of the current billing period, never mid-cycle.
- Failed payments retry after 1, 3 and 7 days before access is paused.

## Need a copy

Open Settings → Billing → Invoice history. Every invoice downloads as a PDF, and you can forward one to your finance inbox from the same screen.`,
  },
  {
    slug: "requesting-a-refund",
    title: "Requesting a refund",
    category: "Billing",
    summary: "How refunds work, how long they take, and what to send us.",
    keywords: ["refund", "charge", "cancel", "duplicate", "money"],
    body: `We refund within 24 hours of approval, and the money usually lands 5–10 business days later depending on your bank.

## What usually qualifies

- A duplicate charge on the same card.
- A plan change billed by mistake within 14 days.
- Annual plans cancelled within 30 days of renewal.

## How to ask

Open a ticket with category Billing and include:

1. The order ID from the invoice.
2. The date of the charge.
3. The last four digits of the card.

You do not need to chase us afterwards — the thread updates as soon as the refund is issued.`,
  },
  {
    slug: "rotating-signing-keys",
    title: "Rotating your webhook signing key",
    category: "Technical",
    summary: "Change the webhook secret without dropping deliveries in flight.",
    keywords: ["webhook", "signing", "secret", "api", "retry", "400"],
    body: `Rotating a key while deliveries are in flight used to cause 400s. Current behaviour is zero-downtime, but you must accept both keys during the overlap window.

## Rotate safely

1. Go to Developer → Webhooks and press Rotate key. The new key is shown once.
2. Add the new key to your verification logic alongside the old one.
3. Wait until delivery success rate returns to 100%.
4. Revoke the old key — it stays valid for 24 hours after the rotation.

## Verifying a payload

- Sign the raw request body, not the parsed JSON.
- Compare with a constant-time equality check.
- Reject timestamps older than five minutes to block replays.

If you see 400s during a rotation, your endpoint is still validating against the retired key.`,
  },
  {
    slug: "webhook-delivery-and-retries",
    title: "Webhook delivery and retries",
    category: "Technical",
    summary: "Delivery order, retry schedule, and how to drain a backlog.",
    keywords: ["webhook", "retry", "delivery", "queue", "backlog", "duplicate"],
    body: `Webhooks are delivered at-least-once and roughly in order per endpoint. Duplicate events are normal, so every handler should be idempotent.

## Retry schedule

1. Immediately on failure.
2. After 30 seconds.
3. After 2 minutes.
4. After 15 minutes, then hourly for 24 hours.

## Draining a backlog

If a deployment breaks your endpoint, the retry queue keeps every event. Fix the endpoint first, then watch the backlog drain from Developer → Webhooks → Failures. Events expire after 72 hours, so drain sooner if you can.

## Replaying

Every event has a Replay button. Replays keep the original event ID, so your idempotency key still protects you.`,
  },
  {
    slug: "inviting-teammates",
    title: "Inviting teammates and managing seats",
    category: "Account",
    summary: "Why invites sit in a queue, and how seat limits work.",
    keywords: ["invite", "teammate", "seat", "members", "queue"],
    body: `Invites are sent by email and stay valid for 14 days.

## Why an invite is stuck in the queue

A workspace at its seat cap parks new invites instead of failing them. Raise the cap on Settings → Billing, or cancel a pending invite, and the queue clears immediately.

## Roles

1. Member — works tickets and reads internal notes.
2. Agent — full triage access: assignment, bulk actions, macros and reports.
3. Admin — billing, workspace settings and data exports.

## Removing someone

Deactivating a teammate frees their seat immediately and revokes their sessions. Their ticket history stays intact.`,
  },
  {
    slug: "sso-and-domain-verification",
    title: "Setting up SSO and domain verification",
    category: "Account",
    summary: "Enforce single sign-on for your workspace and lock out personal logins.",
    keywords: ["sso", "saml", "domain", "verify", "oauth", "login"],
    body: `SSO is available on the Business plan and above.

## Steps

1. Verify your company domain under Settings → Security.
2. Upload the SAML metadata XML from your identity provider.
3. Map email, first name and last name attributes.
4. Test with one account before enforcing.

## Enforcing SSO

Once enforced, members signing in with a password are redirected to your provider. Keep one break-glass admin account outside enforcement so you are not locked out of your own workspace.`,
  },
  {
    slug: "exporting-reports",
    title: "Exporting reports as CSV",
    category: "Getting started",
    summary: "How to get complete data out of a report export.",
    keywords: ["export", "csv", "report", "missing", "download", "row"],
    body: `Exports respect the filters and date range currently applied to the report view.

## A row may be missing

The final row is excluded when it is still being written. Wait a few seconds and export again, or schedule the export for after the reporting window closes.

## Large exports

Over 100,000 rows the export runs in the background and emails you a download link. Agent-facing exports, with tags and assignee, are available from the console under Reports.`,
  },
  {
    slug: "how-relay-prioritises-tickets",
    title: "How Relay prioritises and routes tickets",
    category: "Getting started",
    summary: "What urgent actually means, and how your ticket reaches a human.",
    keywords: ["priority", "urgent", "sla", "routing", "assignment", "impact"],
    body: `Every ticket gets a first-response target based on the impact you pick.

1. Urgent — first reply within 1 hour. Use for production outages or money problems.
2. High — 4 hours. Something is broken but there is a workaround.
3. Normal — 8 hours. The default for questions and feature requests.
4. Low — 24 hours. Nice to have, no deadline.

## Routing

New tickets are assigned automatically to the agent with the fewest open tickets, unless your team uses round-robin. If nobody is assigned, the ticket waits in the unassigned queue for anyone to claim.

## Reopening

Replying to a resolved ticket reopens it and keeps the entire history attached, so the next person has full context.`,
  },
  {
    slug: "rating-your-support",
    title: "Rating and closing a ticket",
    category: "Getting started",
    summary: "What to expect when we close a ticket, and how to reopen it.",
    keywords: ["resolved", "close", "rating", "csat", "reopen", "feedback"],
    body: `We close a ticket once we believe it is handled. You get a one-tap rating and an optional comment.

## If it is not fixed

Reply to the thread. The ticket reopens automatically with its full history and goes back into the triage queue — you do not need to open a new one.

## What the rating does

It is attached to the ticket and rolled into the team report, alongside first-response time and SLA compliance.`,
  },
];

/** DB rows win; the bundled copy keeps the help centre non-empty. */
async function articleSource(ctx: QueryCtx): Promise<Article[]> {
  const rows = await ctx.db.query("kbArticles").take(200);
  if (rows.length === 0) return ARTICLES;
  return rows.map((row) => ({
    slug: row.slug,
    title: row.title,
    category: row.category,
    summary: row.summary,
    keywords: row.keywords ?? [],
    body: row.body,
    updatedAt: row.updatedAt,
  }));
}

function toSummary(article: Article) {
  return {
    slug: article.slug,
    title: article.title,
    category: article.category,
    summary: article.summary,
  };
}

export const listArticles = query({
  args: {
    search: v.optional(v.string()),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const needle = args.search?.trim().toLowerCase();
    const rows = await articleSource(ctx);

    return rows
      .filter((article) => {
        if (args.category && article.category !== args.category) return false;
        if (!needle) return true;
        const haystack =
          `${article.title} ${article.summary} ${article.category} ${article.keywords.join(" ")}`.toLowerCase();
        return haystack.includes(needle);
      })
      .map(toSummary)
      .sort((a, b) => a.title.localeCompare(b.title));
  },
});

export const listCategories = query({
  args: {},
  handler: async (ctx) => {
    const counts = new Map<string, number>();
    for (const article of await articleSource(ctx)) {
      counts.set(article.category, (counts.get(article.category) ?? 0) + 1);
    }
    return [...counts.entries()]
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => a.category.localeCompare(b.category));
  },
});

export const getArticle = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const article = (await articleSource(ctx)).find(
      (row) => row.slug === args.slug,
    );
    if (!article) return null;
    const votes = await ctx.db
      .query("kbFeedback")
      .withIndex("by_article", (q) => q.eq("articleSlug", args.slug))
      .collect();
    const helpful = votes.filter((vote) => vote.helpful).length;
    return {
      ...toSummary(article),
      body: article.body,
      updatedAt: article.updatedAt ?? null,
      helpfulCount: helpful,
      voteCount: votes.length,
    };
  },
});

/**
 * Case deflection: while someone is writing a ticket, show the articles most
 * likely to answer it. Same idea as Zendesk Guide's suggested articles.
 */
export const suggestArticles = query({
  args: {
    category: v.optional(v.string()),
    text: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const text = args.text?.trim().toLowerCase() ?? "";
    const stop = new Set([
      "the", "and", "for", "with", "that", "this", "from", "have", "was",
      "not", "you", "our", "are", "but", "all", "can", "get", "out", "when",
      "how", "why", "does", "didn", "help",
    ]);
    const words = text
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length > 2 && !stop.has(word));

    return (await articleSource(ctx))
      .map((article) => {
        let score = args.category && article.category === args.category ? 2 : 0;
        for (const word of words) {
          const hit = article.keywords.some(
            (keyword) => keyword.includes(word) || word.includes(keyword),
          );
          if (hit) score += 2;
          else if (`${article.title} ${article.summary}`.toLowerCase().includes(word)) {
            score += 1;
          }
        }
        return { article, score };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, args.limit ?? 3)
      .map((entry) => toSummary(entry.article));
  },
});

/** "Did this help?" — one vote per session, counted per article. */
export const voteHelpful = mutation({
  args: { articleSlug: v.string(), helpful: v.boolean() },
  handler: async (ctx, args) => {
    await ctx.db.insert("kbFeedback", {
      articleSlug: args.articleSlug,
      helpful: args.helpful,
      createdAt: Date.now(),
    });
    return { ok: true };
  },
});
