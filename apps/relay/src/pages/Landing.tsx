import { RelayWordmark } from "@/components/support/brand";
import { ThemeToggle } from "@/components/support/theme-toggle";
import {
  CategoryBadge,
  PriorityBadge,
  ReferenceChip,
  StatusBadge,
} from "@/components/support/badges";
import { SlaBadge } from "@/components/support/sla";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEMO_AGENT_PASSCODE } from "@/lib/support";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  AlarmClockOff,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Gauge,
  GitMerge,
  Inbox,
  LifeBuoy,
  ListChecks,
  MessagesSquare,
  Route,
  SlidersHorizontal,
  Sparkles,
  Star,
  Tags,
  Timer,
  UserRound,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router";

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="ref-mono inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
        <Sparkles className="size-3" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

const STEPS = [
  {
    icon: Inbox,
    title: "Customers open a ticket",
    body: "Subject, category and impact level from a form that takes under a minute. Every ticket gets a reference like RLY-1042.",
  },
  {
    icon: SlidersHorizontal,
    title: "Agents triage the queue",
    body: "Urgent first, then oldest. Live SLA countdowns show what breaks next, and bulk actions clear a whole run at once.",
  },
  {
    icon: MessagesSquare,
    title: "One thread per ticket",
    body: "Replies, status changes and internal notes all live in the same conversation, timestamped.",
  },
  {
    icon: CheckCircle2,
    title: "Resolve and measure",
    body: "Close it out and watch first-response time, urgent load and resolved-today update in real time.",
  },
];

const FEATURES = [
  {
    icon: Timer,
    title: "SLA clocks on every ticket",
    body: "First-response targets scale with impact — 1h for urgent, 8h for normal. Countdowns run live and turn red the moment one breaches.",
  },
  {
    icon: Gauge,
    title: "Triage that sorts for you",
    body: "The queue ranks urgent over high, and oldest over newest, so the right ticket is always on top.",
  },
  {
    icon: MessagesSquare,
    title: "Public replies, private notes",
    body: "Canned macros fill the boring replies in one click. Internal notes never reach the customer; public answers stay public.",
  },
  {
    icon: ListChecks,
    title: "Bulk triage",
    body: "Select a run of tickets and assign, re-prioritise, tag, snooze or close them together — the spreadsheet work agents actually hate.",
  },
  {
    icon: Route,
    title: "Routing that balances load",
    body: "Send every new ticket to the agent with the fewest open ones, or rotate round-robin. Switch the desk between manual and automatic in one click.",
  },
  {
    icon: AlarmClockOff,
    title: "Snooze & follow-up",
    body: "Waiting on the customer until Friday? Park the ticket and let it resurface at 9am — nobody has to remember to check back.",
  },
  {
    icon: Tags,
    title: "Tags and saved views",
    body: "Label tickets for reporting, then pin the filters you check every morning as a one-click view.",
  },
  {
    icon: GitMerge,
    title: "Merge duplicates",
    body: "Found the same bug reported twice? Fold the duplicate into the survivor — priority and tags roll over automatically.",
  },
  {
    icon: BarChart3,
    title: "Reports you can export",
    body: "Per-agent handled, first-reply time, SLA compliance and CSAT — and a CSV of whatever the queue is filtered to.",
  },
  {
    icon: BookOpen,
    title: "A help centre that deflects",
    body: "Nine built-in guides, searchable by anyone — and suggested in the ticket form itself, so easy questions never become tickets.",
  },
  {
    icon: UserRound,
    title: "Customer records, inline",
    body: "Every ticket opens with that person's full history, their company's open tickets, their CSAT and their average first reply.",
  },
  {
    icon: SlidersHorizontal,
    title: "Fields that fit your workflow",
    body: "Define custom fields and show them only for the categories that need them — an order ID on billing, an endpoint on technical.",
  },
  {
    icon: Zap,
    title: "Automations, not busywork",
    body: "Write rules like “urgent, unassigned, over two hours → alert everyone”. They run on a schedule and never re-apply a ticket.",
  },
  {
    icon: Star,
    title: "CSAT on resolution",
    body: "Resolved tickets ask the customer for a rating, and the score lands next to the ticket for the next person to read.",
  },
];

const HERO_MESSAGES = [
  {
    who: "Customer",
    name: "Nadia Osei",
    tone: "customer" as const,
    body: "Our card shows two identical $249 charges from Relay on the same day. Order IDs 88213 and 88214.",
    time: "9:12",
  },
  {
    who: "Support",
    name: "Maya O.",
    tone: "agent" as const,
    body: "Found it — order 88214 was a duplicate webhook retry. I've refunded it and the confirmation is on its way.",
    time: "9:31",
  },
];

export default function Landing() {
  // Captured once on mount so the hero's SLA chip counts down from "now"
  // instead of calling Date.now() during render.
  const [mountedAt] = useState(() => Date.now());

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5">
          <Link to="/" aria-label="Relay home">
            <RelayWordmark />
          </Link>
          <nav className="ml-auto hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#agents" className="transition-colors hover:text-foreground">
              For agents
            </a>
            <Link to="/help" className="transition-colors hover:text-foreground">
              Help centre
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm">
              <Link to="/auth">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/auth?returnTo=%2Fportal">
                Submit a ticket
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="paper-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="sun-wash absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:py-28">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Live ticket desk · open, triaged, answered
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              Support that answers
              <span className="relative ml-3 inline-block">
                <span className="relative z-10">back.</span>
                <span
                  className="absolute inset-x-0 bottom-1.5 z-0 h-3 -rotate-1 rounded-sm bg-primary/40"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Relay is a support ticket system with two halves that finally agree:
              a customer portal for filing and following tickets, and an agent
              console for triaging, replying and closing them out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <Link to="/auth?returnTo=%2Fportal">
                  <LifeBuoy className="size-4" />
                  Open a ticket
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/auth?returnTo=%2Fagent%3Fcode%3DRELAY-DEMO">
                  <Zap className="size-4" />
                  Try the agent console
                </Link>
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6"
            >
              {[
                { value: "1", label: "thread per ticket" },
                { value: "4", label: "triage states" },
                { value: "0", label: "lost replies" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-2xl font-semibold tracking-tight">
                    {item.value}
                  </dt>
                  <dd className="mt-0.5 text-xs text-muted-foreground">
                    {item.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Hero mock */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_oklch(0.4_0.09_60/0.5)]">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-rose-300" />
                <span className="size-2.5 rounded-full bg-amber-300" />
                <span className="size-2.5 rounded-full bg-emerald-300" />
                <span className="ml-2 text-xs text-muted-foreground">
                  relay.app/agent
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <ReferenceChip reference="RLY-1042" />
                  <StatusBadge status="in_progress" />
                  <CategoryBadge category="billing" />
                  <PriorityBadge priority="urgent" />
                  <SlaBadge
                    ticket={{
                      priority: "urgent",
                      status: "in_progress",
                      createdAt: mountedAt - 42 * 60_000,
                      firstAgentReplyAt: null,
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  Charged twice for the Studio plan this month
                </h3>
                <p className="text-xs text-muted-foreground">
                  Nadia Osei · northwindstudio.co · opened 2 hours ago
                </p>

                <div className="space-y-3 border-t border-border pt-4">
                  {HERO_MESSAGES.map((message) => (
                    <div
                      key={message.name}
                      className={cn(
                        "flex gap-2.5",
                        message.tone === "agent" && "flex-row-reverse text-right",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-7 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-semibold",
                          message.tone === "agent"
                            ? "bg-primary/20 ring-1 ring-primary/40"
                            : "bg-muted text-muted-foreground ring-1 ring-border",
                        )}
                      >
                        {message.name.charAt(0)}
                      </span>
                      <div className="max-w-[80%]">
                        <p className="text-[0.7rem] text-muted-foreground">
                          {message.name} · {message.time}
                        </p>
                        <div
                          className={cn(
                            "mt-1 rounded-xl px-3 py-2 text-left text-sm leading-relaxed",
                            message.tone === "agent"
                              ? "rounded-tr-sm bg-primary/15 ring-1 ring-primary/25"
                              : "rounded-tl-sm border border-border",
                          )}
                        >
                          {message.body}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-dashed border-primary/50 bg-accent/50 px-3 py-2.5">
                  <p className="ref-mono text-muted-foreground">
                    internal note · duplicates confirmed, refund queued
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-border bg-card px-3 py-2 shadow-lg sm:block">
              <p className="text-[0.7rem] text-muted-foreground">Avg first reply</p>
              <p className="text-lg font-semibold">11 min</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two sides */}
      <section id="agents" className="mx-auto w-full max-w-6xl px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Two sides, one thread"
            title="Customers see progress. Agents see the work."
            description="No more forwarding emails back and forth — both sides read and write the same conversation."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-muted">
                <LifeBuoy className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">Customer portal</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                File a ticket in under a minute, then follow every reply and status
                change from a single place.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {[
                  "Structured intake with category and impact",
                  "Your team's custom fields, shown only when relevant",
                  "Suggested help articles before you even submit",
                  "Attach screenshots and logs straight to the message",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-7 w-full">
                <Link to="/auth?returnTo=%2Fportal">
                  Open the portal
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-primary/40 bg-primary/[0.06] p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/25">
                <Zap className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">Agent console</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A triage queue that ranks by urgency and age, with the controls to
                claim, re-prioritise, note and resolve.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {[
                  "Urgency-first queue with SLA countdowns, filters and saved views",
                  "Auto-assign to the least loaded agent, or rotate round-robin",
                  "Merge suggestions when a ticket looks like a duplicate",
                  "Trigger/action automations for escalation and routing",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-foreground/70" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-7 w-full">
                <Link to="/auth?returnTo=%2Fagent">
                  Open the console
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-border bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-20">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="From report to resolution, in one thread"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <step.icon className="size-4" />
                    </span>
                    <span className="ref-mono text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-6xl px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Built for the boring parts"
            title="Small details that make a support desk calm"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <feature.icon className="size-4" />
                </span>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-5 pb-24">
        <Reveal>
          <div className="sun-wash relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
            <div className="paper-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <Badge variant="outline" className="bg-card/80">
                Free to try · no card required
              </Badge>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Open your first ticket and watch it get triaged
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Sign in once and Relay routes you to the right side: customers get
                the portal, support staff land in the triage console.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/auth">
                    Get started
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/auth?returnTo=%2Fagent%3Fcode%3DRELAY-DEMO">
                  Staff? Open the console
                </Link>
              </Button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Agent demo accounts use an{" "}
                <span className="ref-mono text-foreground/80">
                  @relaydesk.app
                </span>{" "}
                address — or unlock the console with the staff code{" "}
                <span className="ref-mono text-foreground/80">
                  {DEMO_AGENT_PASSCODE}
                </span>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <RelayWordmark />
          <p className="text-xs text-muted-foreground">
            Relay — a support ticket system with a customer portal and an agent
            console.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link to="/auth" className="transition-colors hover:text-foreground">
              Sign in
            </Link>
            <Link
              to="/auth?returnTo=%2Fportal"
              className="transition-colors hover:text-foreground"
            >
              Submit a ticket
            </Link>
            <a
              href="/relay.zip"
              download
              className="transition-colors hover:text-foreground"
            >
              Download source
            </a>
          </div>
        </div>
      
			<p style="font-size: 0.75rem; opacity: 0.7; margin: 0.5rem 0 0;">
				<small>Web creada por <a href="https://sur-digital.vercel.app/" rel="noopener">Sur Digital</a></small>
			</p>
</footer>
    </div>
  );
}
