/**
 * Shared support-desk domain constants.
 *
 * This module is imported by BOTH the Convex backend and the React client, so
 * it must stay free of any server-only or DOM-only imports. Keep it pure data
 * plus tiny helpers.
 */

export const STATUSES = [
  "open",
  "in_progress",
  "waiting_on_customer",
  "resolved",
] as const;
export type TicketStatus = (typeof STATUSES)[number];

export const PRIORITIES = ["urgent", "high", "normal", "low"] as const;
export type Priority = (typeof PRIORITIES)[number];

export const CATEGORIES = [
  "billing",
  "technical",
  "account",
  "bug",
  "feature_request",
  "other",
] as const;
export type Category = (typeof CATEGORIES)[number];

export const AUTHOR_KINDS = ["customer", "agent", "system"] as const;
export type AuthorKind = (typeof AUTHOR_KINDS)[number];

/** Sort weight — higher means more urgent in the triage queue. */
export const PRIORITY_WEIGHT: Record<Priority, number> = {
  urgent: 3,
  high: 2,
  normal: 1,
  low: 0,
};

export const STATUS_LABEL: Record<TicketStatus, string> = {
  open: "Open",
  in_progress: "In progress",
  waiting_on_customer: "Waiting on customer",
  resolved: "Resolved",
};

export const PRIORITY_LABEL: Record<Priority, string> = {
  urgent: "Urgent",
  high: "High",
  normal: "Normal",
  low: "Low",
};

export const CATEGORY_LABEL: Record<Category, string> = {
  billing: "Billing",
  technical: "Technical",
  account: "Account",
  bug: "Bug report",
  feature_request: "Feature request",
  other: "Other",
};

/** Tailwind class sets (kept static so Tailwind can see them). */
export const STATUS_STYLE: Record<TicketStatus, string> = {
  open: "border-amber-300/80 bg-amber-50 text-amber-900 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30",
  in_progress:
    "border-sky-300/80 bg-sky-50 text-sky-900 dark:bg-sky-500/15 dark:text-sky-300 dark:border-sky-500/30",
  waiting_on_customer:
    "border-violet-300/80 bg-violet-50 text-violet-900 dark:bg-violet-500/15 dark:text-violet-300 dark:border-violet-500/30",
  resolved:
    "border-emerald-300/80 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30",
};

export const PRIORITY_STYLE: Record<Priority, string> = {
  urgent:
    "border-rose-300/80 bg-rose-50 text-rose-900 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/30",
  high:
    "border-orange-300/80 bg-orange-50 text-orange-900 dark:bg-orange-500/15 dark:text-orange-300 dark:border-orange-500/30",
  normal:
    "border-stone-300/80 bg-stone-100 text-stone-700 dark:bg-stone-500/15 dark:text-stone-300 dark:border-stone-500/30",
  low: "border-stone-200 bg-stone-50 text-stone-500 dark:bg-stone-500/10 dark:text-stone-400 dark:border-stone-500/20",
};

export const CATEGORY_STYLE: Record<Category, string> = {
  billing: "border-teal-200 bg-teal-50 text-teal-800",
  technical: "border-indigo-200 bg-indigo-50 text-indigo-800",
  account: "border-cyan-200 bg-cyan-50 text-cyan-800",
  bug: "border-rose-200 bg-rose-50 text-rose-800",
  feature_request: "border-lime-200 bg-lime-50 text-lime-800",
  other: "border-stone-200 bg-stone-50 text-stone-700",
};

export const CATEGORIES_FOR_SUBMIT: Category[] = [
  "technical",
  "billing",
  "account",
  "bug",
  "feature_request",
  "other",
];

export const PRIORITIES_FOR_SUBMIT: Priority[] = ["low", "normal", "high", "urgent"];

/**
 * Anyone with an @relaydesk.app address staffs the support desk. Swap this for
 * a real invite table once you have an admin surface.
 */
export const AGENT_EMAIL_DOMAIN = "relaydesk.app";
export const DEMO_AGENT_EMAILS = [
  "maya@relaydesk.app",
  "sam@relaydesk.app",
  "priya@relaydesk.app",
];

export function isAgentEmail(email: string | undefined | null): boolean {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return (
    normalized.endsWith(`@${AGENT_EMAIL_DOMAIN}`) ||
    DEMO_AGENT_EMAILS.includes(normalized)
  );
}

/**
 * Demo-only escape hatch so anyone reviewing the app can open the agent
 * console without owning a @relaydesk.app mailbox. Real deployments should
 * delete this constant and the `claimAgentRole` mutation that reads it.
 */
export const DEMO_AGENT_PASSCODE = "RELAY-DEMO";

export function isDemoAgentPasscode(value: string | undefined | null): boolean {
  if (!value) return false;
  return value.trim().toUpperCase() === DEMO_AGENT_PASSCODE;
}

/**
 * First-response targets, in minutes, per impact level. This is the SLA clock
 * every ticket carries: it starts when the customer writes and stops at the
 * first public agent reply.
 */
export const FIRST_RESPONSE_TARGETS: Record<Priority, number> = {
  urgent: 60,
  high: 4 * 60,
  normal: 8 * 60,
  low: 24 * 60,
};

export type SlaState = "on_track" | "at_risk" | "breached" | "met" | "missed";

export type SlaInfo = {
  state: SlaState;
  dueAt: number;
  targetMinutes: number;
  /** True while the clock is still running (no public agent reply yet). */
  pending: boolean;
  remainingMs: number;
};

export function slaFor(
  ticket: {
    priority: Priority;
    createdAt: number;
    firstAgentReplyAt?: number | null;
    status: TicketStatus;
  },
  now = Date.now(),
): SlaInfo {
  const targetMinutes = FIRST_RESPONSE_TARGETS[ticket.priority];
  const dueAt = ticket.createdAt + targetMinutes * 60_000;
  const repliedAt = ticket.firstAgentReplyAt ?? null;

  if (repliedAt !== null) {
    return {
      state: repliedAt <= dueAt ? "met" : "missed",
      dueAt,
      targetMinutes,
      pending: false,
      remainingMs: repliedAt - dueAt,
    };
  }

  if (ticket.status === "resolved") {
    return {
      state: "met",
      dueAt,
      targetMinutes,
      pending: false,
      remainingMs: 0,
    };
  }

  const remainingMs = dueAt - now;
  const state: SlaState =
    remainingMs <= 0
      ? "breached"
      : remainingMs <= targetMinutes * 60_000 * 0.25
        ? "at_risk"
        : "on_track";

  return { state, dueAt, targetMinutes, pending: true, remainingMs };
}

export const SLA_LABEL: Record<SlaState, string> = {
  on_track: "On track",
  at_risk: "At risk",
  breached: "Breached",
  met: "First reply met",
  missed: "First reply missed",
};

export const SLA_STYLE: Record<SlaState, string> = {
  on_track: "border-emerald-300/80 bg-emerald-50 text-emerald-800",
  at_risk: "border-amber-300/80 bg-amber-50 text-amber-900",
  breached: "border-rose-300/80 bg-rose-50 text-rose-800",
  met: "border-emerald-300/80 bg-emerald-50 text-emerald-800",
  missed: "border-rose-300/80 bg-rose-50 text-rose-800",
};

/** "2h 14m" / "45m" / "3d 4h" — compact enough for a queue row. */
export function formatDuration(ms: number): string {
  const abs = Math.abs(ms);
  const minutes = Math.round(abs / 60_000);
  if (minutes < 60) return `${Math.max(minutes, 1)}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    const rest = minutes % 60;
    return rest > 0 ? `${hours}h ${rest}m` : `${hours}h`;
  }
  const days = Math.floor(hours / 24);
  const rest = hours % 24;
  return rest > 0 ? `${days}d ${rest}h` : `${days}d`;
}

export function slaCountdown(sla: SlaInfo): string {
  if (sla.state === "met") return SLA_LABEL.met;
  if (sla.state === "missed") return `${SLA_LABEL.missed} by ${formatDuration(sla.remainingMs)}`;
  if (sla.remainingMs <= 0) return `${SLA_LABEL.breached} ${formatDuration(sla.remainingMs)} ago`;
  return `${formatDuration(sla.remainingMs)} left`;
}

/** Suggested tags per category, so agents start from something sensible. */
export const CATEGORY_TAG_SUGGESTIONS: Record<Category, string[]> = {
  billing: ["refund", "duplicate-charge", "invoice", "plan-change"],
  technical: ["api", "webhooks", "integration", "outage", "permissions"],
  account: ["seats", "invites", "sso", "login", "domain"],
  bug: ["regression", "data-loss", "ui", "mobile"],
  feature_request: ["roadmap", "enhancement"],
  other: ["follow-up"],
};

export const TAGS = [
  "refund",
  "duplicate-charge",
  "invoice",
  "plan-change",
  "api",
  "webhooks",
  "integration",
  "outage",
  "permissions",
  "seats",
  "invites",
  "sso",
  "login",
  "regression",
  "escalated",
  "vip",
  "roadmap",
  "follow-up",
] as const;

export const CSAT_MIN = 1;
export const CSAT_MAX = 5;

/* ------------------------------------------------------------------ *
 * Snooze / follow-up (Front & Intercom pattern)
 * ------------------------------------------------------------------ */

export type SnoozePresetId = "1h" | "4h" | "tomorrow" | "nextweek" | "custom";

export const SNOOZE_PRESETS: { id: SnoozePresetId; label: string }[] = [
  { id: "1h", label: "In 1 hour" },
  { id: "4h", label: "In 4 hours" },
  { id: "tomorrow", label: "Tomorrow 9:00" },
  { id: "nextweek", label: "Next week" },
];

const HOUR_MS = 3_600_000;
const DAY_MS = 24 * HOUR_MS;

function atMorning(now: number, daysAhead: number): number {
  const date = new Date(now);
  date.setDate(date.getDate() + daysAhead);
  date.setHours(9, 0, 0, 0);
  // If 09:00 already passed today+daysAhead, roll forward.
  while (date.getTime() <= now) date.setTime(date.getTime() + DAY_MS);
  return date.getTime();
}

export function snoozeUntil(
  preset: SnoozePresetId,
  now: number,
  customHours?: number,
): number {
  switch (preset) {
    case "1h":
      return now + HOUR_MS;
    case "4h":
      return now + 4 * HOUR_MS;
    case "tomorrow":
      return atMorning(now, 1);
    case "nextweek":
      return atMorning(now, 7);
    case "custom":
      return now + Math.max(1, customHours ?? 1) * HOUR_MS;
  }
}

export function snoozeLabel(until: number, now = Date.now()): string {
  return until > now
    ? `Wakes in ${formatDuration(until - now)}`
    : `Woke ${formatDuration(now - until)} ago`;
}

/* ------------------------------------------------------------------ *
 * Routing (Freshdesk "load-based" vs "round-robin")
 * ------------------------------------------------------------------ */

export const ROUTING_MODES = ["off", "load", "round_robin"] as const;
export type RoutingMode = (typeof ROUTING_MODES)[number];

export const ROUTING_LABEL: Record<RoutingMode, string> = {
  off: "Manual",
  load: "Least loaded",
  round_robin: "Round robin",
};

export const ROUTING_HINT: Record<RoutingMode, string> = {
  off: "New tickets land unassigned for an agent to claim.",
  load: "New tickets go to the agent with the fewest open tickets.",
  round_robin: "New tickets rotate through agents in order.",
};

/** Escape a CSV cell (quotes, commas, newlines). */
export function csvCell(value: string | number | null | undefined): string {
  const text = value === null || value === undefined ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function toCsv(
  headers: string[],
  rows: (string | number | null | undefined)[][],
): string {
  return [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
}

export function displayName(
  user: { name?: string; email?: string } | null | undefined,
): string {
  if (!user) return "Guest";
  if (user.name) return user.name;
  if (user.email) {
    const local = user.email.split("@")[0];
    return local
      .split(/[._-]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }
  return "Guest";
}

const RELATIVE_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 1000 * 60 * 60 * 24 * 365],
  ["month", 1000 * 60 * 60 * 24 * 30],
  ["week", 1000 * 60 * 60 * 24 * 7],
  ["day", 1000 * 60 * 60 * 24],
  ["hour", 1000 * 60 * 60],
  ["minute", 1000 * 60],
];

const relativeFormatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

/** "3 minutes ago", "just now" — no date-fns needed for this hot path. */
export function timeAgo(timestamp: number, now = Date.now()): string {
  const diff = timestamp - now;
  const abs = Math.abs(diff);
  if (abs < 45_000) return "just now";
  for (const [unit, ms] of RELATIVE_UNITS) {
    if (abs >= ms) return relativeFormatter.format(Math.round(diff / ms), unit);
  }
  return "just now";
}

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

export function formatTimestamp(timestamp: number): string {
  return dateFormatter.format(new Date(timestamp));
}
