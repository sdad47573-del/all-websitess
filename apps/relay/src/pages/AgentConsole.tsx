import { AppShell, SectionBadge } from "@/components/support/app-shell";
import {
  AutomationsDialog,
  RelatedTickets,
} from "@/components/support/automations";
import {
  CategoryBadge,
  PriorityBadge,
  ReferenceChip,
  StatusBadge,
} from "@/components/support/badges";
import { CsatSummary } from "@/components/support/csat";
import { CustomerPanel } from "@/components/support/customer-panel";
import {
  CompaniesDialog,
  CustomFieldChips,
  FieldManagerDialog,
} from "@/components/support/custom-fields";
import { MergeTicketDialog } from "@/components/support/merge-ticket-dialog";
import { FollowButton } from "@/components/support/notifications";
import { ReportsDialog } from "@/components/support/reports";
import { SnoozeBadge, SnoozeMenu } from "@/components/support/snooze";
import { SlaBadge } from "@/components/support/sla";
import { useQueueHotkeys } from "@/components/support/command-palette";
import { TagChips, TagPicker } from "@/components/support/tags";
import { ReplyComposer, ThreadView } from "@/components/support/thread";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { useAuth } from "@/hooks/use-auth";
import { useSavedViews } from "@/hooks/use-saved-views";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  displayName,
  PRIORITIES,
  PRIORITY_LABEL,
  ROUTING_HINT,
  ROUTING_LABEL,
  ROUTING_MODES,
  snoozeUntil,
  STATUSES,
  STATUS_LABEL,
  timeAgo,
} from "@/lib/support";
import type {
  Category,
  Priority,
  RoutingMode,
  TicketStatus,
} from "@/lib/support";
import { cn } from "@/lib/utils";
import {
  AlarmClockOff,
  ArrowLeft,
  BarChart3,
  Bookmark,
  Building2,
  BookmarkPlus,
  Check,
  CircleDot,
  Flame,
  GitMerge,
  Inbox,
  Mail,
  Route,
  Search,
  Sparkles,
  Star,
  Tag,
  Timer,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { useSearchParams } from "react-router";
import { toast } from "sonner";

type StatusFilter = TicketStatus | "all";
type ScopeFilter = "all" | "mine" | "unassigned";
type SnoozedFilter = "hide" | "only";
type Maybe<T> = T | "all";

const ALL = "all" as const;

function StatTile({
  label,
  value,
  hint,
  icon: Icon,
  tone = "default",
  active = false,
  onClick,
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon: typeof Inbox;
  tone?: "default" | "warn" | "good";
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        "flex flex-col gap-1 rounded-xl border bg-card px-4 py-3 text-left transition-colors",
        onClick && "hover:border-primary/50 hover:bg-primary/5",
        active ? "border-primary/60 bg-primary/10" : "border-border",
      )}
    >
      <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Icon className="size-3.5" />
        {label}
      </span>
      <span
        className={cn(
          "text-2xl font-semibold tabular-nums tracking-tight",
          tone === "warn" && "text-rose-600",
          tone === "good" && "text-emerald-600",
        )}
      >
        {value}
      </span>
      {hint && (
        <span className="text-[0.7rem] text-muted-foreground">{hint}</span>
      )}
    </button>
  );
}

function FilterPill({
  active,
  onClick,
  children,
  count,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        active
          ? "border-primary/60 bg-primary/15 text-primary-foreground/90"
          : "border-border bg-card text-muted-foreground hover:bg-muted",
      )}
    >
      {children}
      {count !== undefined && (
        <span className="tabular-nums opacity-70">{count}</span>
      )}
    </button>
  );
}

export default function AgentConsole() {
  const { user, signOut } = useAuth();
  const viewerId = user?._id as Id<"users"> | undefined;

  const [status, setStatus] = useState<StatusFilter>(ALL);
  const [priority, setPriority] = useState<Maybe<Priority>>(ALL);
  const [category, setCategory] = useState<Maybe<Category>>(ALL);
  const [scope, setScope] = useState<ScopeFilter>(ALL);
  const [tag, setTag] = useState("");
  const [company, setCompany] = useState<string | undefined>();
  const [search, setSearch] = useState("");
  const [snoozed, setSnoozed] = useState<SnoozedFilter>("hide");
  const [pickedId, setPickedId] = useState<Id<"tickets"> | null>(null);
  const [checked, setChecked] = useState<Id<"tickets">[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const deepLinkedId = searchParams.get("ticket") as Id<"tickets"> | null;
  const [viewName, setViewName] = useState("");

  const savedViews = useSavedViews();

  const queue = useQuery(api.tickets.queue, {
    status: status === ALL ? undefined : status,
    priority: priority === ALL ? undefined : priority,
    category: category === ALL ? undefined : category,
    scope: scope === ALL ? undefined : scope,
    search: search.trim() || undefined,
    tag: tag || undefined,
    snoozed,
    company,
    includeResolved: status === ALL || status === "resolved",
  });
  const stats = useQuery(api.tickets.stats);
  const agents = useQuery(api.tickets.agents);
  const allTags = useQuery(api.tickets.allTags);
  const macros = useQuery(api.tickets.macros);
  const routing = useQuery(api.tickets.routingSettings);

  // Derived during render: keep the pick if it still matches the current
  // filters, otherwise fall back to the top of the queue. A ?ticket= deep link
  // (from a notification or the ⌘K palette) wins over both.
  const selectedId = deepLinkedId
    ? deepLinkedId
    : pickedId && queue?.some((ticket) => ticket.id === pickedId)
      ? pickedId
      : (queue?.[0]?.id ?? null);

  const selectTicket = (id: Id<"tickets"> | null) => {
    setPickedId(id);
    if (deepLinkedId) {
      searchParams.delete("ticket");
      setSearchParams(searchParams, { replace: true });
    }
  };

  const detail = useQuery(
    api.tickets.agentTicket,
    selectedId ? { ticketId: selectedId } : "skip",
  );

  const postReply = useMutation(api.tickets.postReply);
  const setStatusMutation = useMutation(api.tickets.setStatus);
  const setPriorityMutation = useMutation(api.tickets.setPriority);
  const setTagsMutation = useMutation(api.tickets.setTags);
  const setAssignee = useMutation(api.tickets.setAssignee);
  const seedDemo = useMutation(api.tickets.seedDemoTickets);
  const seedMacros = useMutation(api.tickets.seedMacros);
  const bulkSetStatus = useMutation(api.tickets.bulkSetStatus);
  const bulkSetPriority = useMutation(api.tickets.bulkSetPriority);
  const bulkAssignToMe = useMutation(api.tickets.bulkAssignToMe);
  const bulkSnooze = useMutation(api.tickets.bulkSnooze);
  const bulkTag = useMutation(api.tickets.bulkTag);
  const snoozeTicket = useMutation(api.tickets.snoozeTicket);
  const unsnoozeTicket = useMutation(api.tickets.unsnoozeTicket);
  const setRoutingMode = useMutation(api.tickets.setRoutingMode);
  const [bulkTagValue, setBulkTagValue] = useState("");

  // Only ids that are still in the queue can be bulk-selected.
  const selectedBulk = checked.filter((id) =>
    queue?.some((ticket) => ticket.id === id),
  );

  const run = async (label: string, action: () => Promise<unknown>) => {
    try {
      return await action();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : `${label} failed.`);
      return null;
    }
  };

  const applyView = (filters: Record<string, string>) => {
    if (filters.status) setStatus(filters.status as StatusFilter);
    if (filters.priority) setPriority(filters.priority as Maybe<Priority>);
    if (filters.category) setCategory(filters.category as Maybe<Category>);
    if (filters.scope) setScope(filters.scope as ScopeFilter);
    if (filters.snoozed) setSnoozed(filters.snoozed as SnoozedFilter);
    setTag(filters.tag ?? "");
    setSearch(filters.search ?? "");
  };

  const currentFilters = () => ({
    status,
    priority,
    category,
    scope,
    snoozed,
    tag,
    search,
  });

  const counts = {
    all: stats?.total ?? 0,
    open: stats?.byStatus.open ?? 0,
    in_progress: stats?.byStatus.in_progress ?? 0,
    waiting_on_customer: stats?.byStatus.waiting_on_customer ?? 0,
    resolved: stats?.byStatus.resolved ?? 0,
  };

  const avgResponse = stats?.avgFirstReplyMins;
  const responseLabel =
    avgResponse === null || avgResponse === undefined
      ? "—"
      : avgResponse < 60
        ? `${avgResponse}m`
        : `${Math.round((avgResponse / 60) * 10) / 10}h`;

  const toggleChecked = (id: Id<"tickets">) =>
    setChecked((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id],
    );

  // j/k walk the queue, a claims, r resolves, c focuses the composer.
  const queueIds = (queue ?? []).map((ticket) => ticket.id);
  const selectedIndex = selectedId ? queueIds.indexOf(selectedId) : -1;
  useQueueHotkeys({
    count: queueIds.length,
    onStep: (delta) => {
      const base = selectedIndex < 0 ? 0 : selectedIndex;
      const next =
        queueIds[Math.min(queueIds.length - 1, Math.max(0, base + delta))];
      if (next) selectTicket(next);
    },
    onClaim: () => {
      if (selectedId && viewerId) {
        void run("Assignment", () =>
          setAssignee({ ticketId: selectedId, assigneeId: viewerId }),
        );
        toast.success("Assigned to you");
      }
    },
    onResolve: () => {
      if (selectedId) {
        void run("Status change", () =>
          setStatusMutation({ ticketId: selectedId, status: "resolved" }),
        );
        toast.success("Ticket resolved");
      }
    },
    onCompose: () => {
      const box = document.querySelector<HTMLTextAreaElement>(
        "textarea[data-slot='textarea']",
      );
      box?.focus();
    },
  });

  return (
    <AppShell
      section="Agent console"
      badge={<SectionBadge tone="agent">Triage</SectionBadge>}
      email={user?.email}
      onSignOut={signOut}
      paletteActions={[
        {
          id: "refresh-queue",
          label: "Show unassigned only",
          hint: "u",
          icon: Inbox,
          group: "Views",
          run: () => setScope("unassigned"),
        },
        {
          id: "urgent",
          label: "Show urgent tickets",
          icon: Flame,
          group: "Views",
          run: () => setPriority("urgent"),
        },
        {
          id: "mine",
          label: "Show my tickets",
          icon: UserCheck,
          group: "Views",
          run: () => setScope("mine"),
        },
        {
          id: "snoozed",
          label: "Show snoozed tickets",
          icon: AlarmClockOff,
          group: "Views",
          run: () => setSnoozed("only"),
        },
        {
          id: "reports",
          label: "Open team reports",
          icon: BarChart3,
          group: "Actions",
          run: () => toast.info("Use the Reports button in the filter bar"),
        },
      ]}
    >
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 py-6 sm:px-6">
        <div className="mb-5">
          <h1 className="text-2xl font-semibold tracking-tight">
            Good day, {displayName(user).split(" ")[0]}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {stats
              ? `${stats.byStatus.open} open · ${stats.urgentOpen} urgent · ${stats.unassigned} unassigned`
              : "Loading the queue…"}
          </p>
        </div>

        {/* Headline numbers */}
        <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatTile
            label="Open"
            value={stats?.byStatus.open ?? "—"}
            icon={Inbox}
            active={status === "open"}
            onClick={() => setStatus(status === "open" ? ALL : "open")}
          />
          <StatTile
            label="Urgent"
            value={stats?.urgentOpen ?? "—"}
            hint="needs a human now"
            icon={Flame}
            tone="warn"
            active={priority === "urgent"}
            onClick={() => setPriority(priority === "urgent" ? ALL : "urgent")}
          />
          <StatTile
            label="Unassigned"
            value={stats?.unassigned ?? "—"}
            icon={Users}
            active={scope === "unassigned"}
            onClick={() => setScope(scope === "unassigned" ? ALL : "unassigned")}
          />
          <StatTile
            label="Mine"
            value={stats?.mine ?? "—"}
            icon={UserCheck}
            active={scope === "mine"}
            onClick={() => setScope(scope === "mine" ? ALL : "mine")}
          />
          <StatTile
            label="SLA at risk"
            value={
              stats ? stats.slaAtRisk + stats.slaBreached : "—"
            }
            hint={stats?.slaBreached ? `${stats.slaBreached} breached` : "under 25% left"}
            icon={Timer}
            tone={stats && stats.slaBreached > 0 ? "warn" : "default"}
          />
          <StatTile
            label="Avg first reply"
            value={responseLabel}
            icon={CircleDot}
            tone="good"
          />
          <StatTile
            label="CSAT"
            value={stats?.csatAvg ?? "—"}
            hint={stats?.csatCount ? `${stats.csatCount} ratings` : "no ratings yet"}
            icon={Star}
            tone="good"
          />
          <StatTile
            label="Resolved today"
            value={stats?.resolvedToday ?? "—"}
            icon={Sparkles}
          />
        </div>

        {/* Filters */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <FilterPill
            active={status === ALL}
            onClick={() => setStatus(ALL)}
            count={counts.all}
          >
            All
          </FilterPill>
          {STATUSES.map((item) => (
            <FilterPill
              key={item}
              active={status === item}
              onClick={() => setStatus(status === item ? ALL : item)}
              count={counts[item]}
            >
              {STATUS_LABEL[item]}
            </FilterPill>
          ))}

          <div className="ml-auto flex flex-wrap items-center gap-2">
            <FilterPill
              active={snoozed === "only"}
              onClick={() => setSnoozed(snoozed === "only" ? "hide" : "only")}
              count={stats?.snoozed}
            >
              Snoozed
            </FilterPill>

            {/* Auto-assignment routing */}
            <Select
              value={routing?.mode ?? "off"}
              onValueChange={(value) =>
                void run("Routing change", async () => {
                  await setRoutingMode({ mode: value as RoutingMode });
                  toast.success(`New tickets: ${ROUTING_LABEL[value as RoutingMode]}`);
                })
              }
            >
              <SelectTrigger
                className="h-9 w-[150px]"
                title={ROUTING_HINT[(routing?.mode ?? "off") as RoutingMode]}
              >
                <Route className="size-3.5 text-muted-foreground" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROUTING_MODES.map((mode) => (
                  <SelectItem key={mode} value={mode}>
                    {ROUTING_LABEL[mode]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <ReportsDialog queue={queue ?? []} />

            <CompaniesDialog
              onFilter={(domain) => setCompany(domain)}
              trigger={
                <Button variant="outline" size="sm" className="h-9">
                  <Building2 className="size-4" />
                  {company ?? "Companies"}
                </Button>
              }
            />

            <FieldManagerDialog />

            <AutomationsDialog />

            {/* Saved views */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <Bookmark className="size-4" />
                  Views
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-72 p-0">
                <div className="border-b border-border p-2">
                  <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                    Save current filters
                  </p>
                  <div className="flex gap-2">
                    <Input
                      value={viewName}
                      onChange={(event) => setViewName(event.target.value)}
                      placeholder='e.g. "Unassigned billing"'
                      className="h-8"
                    />
                    <Button
                      size="sm"
                      className="h-8"
                      disabled={!viewName.trim()}
                      onClick={() => {
                        savedViews.save(viewName.trim(), currentFilters());
                        setViewName("");
                        toast.success("View saved");
                      }}
                    >
                      <BookmarkPlus className="size-4" />
                    </Button>
                  </div>
                </div>
                <div className="max-h-64 overflow-y-auto p-1">
                  {savedViews.views.length === 0 && (
                    <p className="px-2 py-4 text-center text-xs text-muted-foreground">
                      No saved views yet. Filter the queue, then save it.
                    </p>
                  )}
                  {savedViews.views.map((view) => (
                    <div
                      key={view.id}
                      className="flex items-center gap-1 rounded-md px-1 hover:bg-muted"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          applyView(view.filters);
                          toast.success(`Applied “${view.name}”`);
                        }}
                        className="flex-1 truncate rounded-md px-2 py-1.5 text-left text-sm transition-colors"
                      >
                        {view.name}
                      </button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7"
                        onClick={() => savedViews.remove(view.id)}
                      >
                        <X className="size-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Select
              value={tag || "__none"}
              onValueChange={(value) =>
                setTag(value === "__none" ? "" : value)
              }
            >
              <SelectTrigger className="h-9 w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__none">Any tag</SelectItem>
                {allTags?.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search ref, subject, customer"
                className="h-9 w-[230px] pl-8"
              />
            </div>
            <Select
              value={priority}
              onValueChange={(value) => setPriority(value as Maybe<Priority>)}
            >
              <SelectTrigger className="h-9 w-[130px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>Any impact</SelectItem>
                {PRIORITIES.map((item) => (
                  <SelectItem key={item} value={item}>
                    {PRIORITY_LABEL[item]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={category}
              onValueChange={(value) => setCategory(value as Maybe<Category>)}
            >
              <SelectTrigger className="h-9 w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>Any category</SelectItem>
                {CATEGORIES.map((item) => (
                  <SelectItem key={item} value={item}>
                    {CATEGORY_LABEL[item]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Bulk action bar */}
        {selectedBulk.length > 0 && (
          <div className="mb-3 flex flex-wrap items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-3 py-2">
            <span className="text-sm font-medium">
              {selectedBulk.length} selected
            </span>
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              onClick={() =>
                void run("Bulk assign", async () => {
                  const result = await bulkAssignToMe({ ticketIds: selectedBulk });
                  if (result) {
                    toast.success(
                      `${result.changed} ticket${result.changed === 1 ? "" : "s"} assigned to you`,
                    );
                    setChecked([]);
                  }
                })
              }
            >
              <UserCheck className="size-4" />
              Assign to me
            </Button>
            <Select
              onValueChange={(value) =>
                void run("Bulk status", async () => {
                  const result = await bulkSetStatus({
                    ticketIds: selectedBulk,
                    status: value as TicketStatus,
                  });
                  if (result) {
                    toast.success(
                      `${result.changed} ticket${result.changed === 1 ? "" : "s"} updated`,
                    );
                    setChecked([]);
                  }
                })
              }
            >
              <SelectTrigger className="h-8 w-[170px]">
                <SelectValue placeholder="Set status…" />
              </SelectTrigger>
              <SelectContent>
                {STATUSES.map((item) => (
                  <SelectItem key={item} value={item}>
                    Mark {STATUS_LABEL[item]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) =>
                void run("Bulk priority", async () => {
                  const result = await bulkSetPriority({
                    ticketIds: selectedBulk,
                    priority: value as Priority,
                  });
                  if (result) {
                    toast.success(
                      `${result.changed} ticket${result.changed === 1 ? "" : "s"} re-prioritised`,
                    );
                    setChecked([]);
                  }
                })
              }
            >
              <SelectTrigger className="h-8 w-[150px]">
                <SelectValue placeholder="Set impact…" />
              </SelectTrigger>
              <SelectContent>
                {PRIORITIES.map((item) => (
                  <SelectItem key={item} value={item}>
                    {PRIORITY_LABEL[item]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center gap-1.5">
              <Input
                value={bulkTagValue}
                onChange={(event) => setBulkTagValue(event.target.value)}
                placeholder="Add tag…"
                aria-label="Tag the selection"
                className="h-8 w-[130px]"
              />
              <Button
                variant="outline"
                size="sm"
                className="h-8"
                disabled={!bulkTagValue.trim()}
                onClick={() =>
                  void run("Bulk tag", async () => {
                    const result = await bulkTag({
                      ticketIds: selectedBulk,
                      tag: bulkTagValue,
                      mode: "add",
                    });
                    if (result) {
                      toast.success(`Tagged ${result.changed} ticket${result.changed === 1 ? "" : "s"}`);
                      setBulkTagValue("");
                    }
                  })
                }
              >
                <Tag className="size-4" />
                Tag
              </Button>
            </div>
            <Select
              onValueChange={(value) =>
                void run("Bulk snooze", async () => {
                  const result = await bulkSnooze({
                    ticketIds: selectedBulk,
                    until: snoozeUntil(value as "1h" | "4h" | "tomorrow" | "nextweek", Date.now()),
                  });
                  if (result) {
                    toast.success(
                      `${result.changed} ticket${result.changed === 1 ? "" : "s"} snoozed`,
                    );
                    setChecked([]);
                  }
                })
              }
            >
              <SelectTrigger className="h-8 w-[150px]">
                <SelectValue placeholder="Snooze…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">Snooze 1 hour</SelectItem>
                <SelectItem value="4h">Snooze 4 hours</SelectItem>
                <SelectItem value="tomorrow">Until tomorrow 9:00</SelectItem>
                <SelectItem value="nextweek">Until next week</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto h-8"
              onClick={() => setChecked([])}
            >
              Clear
            </Button>
          </div>
        )}

        <div className="grid gap-5 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
          {/* Queue */}
          <section
            className={cn(
              "rounded-2xl border border-border bg-card/60",
              selectedId ? "hidden lg:block" : "block",
            )}
          >
            <div className="border-b border-border px-4 py-3 text-sm font-semibold">
              Triage queue
              {queue && (
                <span className="ml-2 font-normal text-muted-foreground">
                  {queue.length} shown
                </span>
              )}
            </div>
            <div className="max-h-[calc(100vh-460px)] overflow-y-auto p-2">
              {!queue && (
                <div className="space-y-2 p-2">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              )}

              {queue?.length === 0 && (
                <div className="px-4 py-14 text-center">
                  <Sparkles className="mx-auto size-8 text-muted-foreground/50" />
                  <p className="mt-3 text-sm font-medium">Nothing to triage</p>
                  <p className="mx-auto mt-1 max-w-[30ch] text-xs text-muted-foreground">
                    No tickets match these filters. Adjust them, or load a
                    sample backlog to explore the console.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() =>
                      void seedDemo()
                        .then((result) =>
                          toast.success(
                            result.seeded > 0
                              ? `Loaded ${result.seeded} sample tickets`
                              : "The desk already has tickets",
                          ),
                        )
                        .catch((error) =>
                          toast.error(
                            error instanceof Error
                              ? error.message
                              : "Could not load samples.",
                          ),
                        )
                    }
                  >
                    <Sparkles className="size-4" />
                    Load sample tickets
                  </Button>
                </div>
              )}

              <ul className="space-y-1">
                {queue?.map((ticket) => (
                  <li key={ticket.id} className="group relative flex items-start">
                    <button
                      type="button"
                      aria-label={
                        checked.includes(ticket.id)
                          ? "Deselect ticket"
                          : "Select ticket"
                      }
                      onClick={() => toggleChecked(ticket.id)}
                      className={cn(
                        "mt-3 ml-1 flex size-4 shrink-0 items-center justify-center rounded border transition-colors",
                        checked.includes(ticket.id)
                          ? "border-primary bg-primary"
                          : "border-border bg-card hover:border-primary/60",
                      )}
                    >
                      {checked.includes(ticket.id) && (
                        <Check className="size-3 text-primary-foreground" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => selectTicket(ticket.id)}
                      className={cn(
                        "min-w-0 flex-1 rounded-xl border px-3 py-3 text-left transition-colors",
                        selectedId === ticket.id
                          ? "border-primary/50 bg-primary/10"
                          : "border-transparent hover:bg-muted",
                      )}
                    >
                      <div className="flex flex-wrap items-center gap-1.5">
                        <ReferenceChip reference={ticket.reference} />
                        <PriorityBadge priority={ticket.priority} />
                        <SlaBadge ticket={ticket} />
                        <SnoozeBadge until={ticket.snoozedUntil} />
                        <span className="ml-auto text-[0.7rem] text-muted-foreground">
                          {timeAgo(ticket.lastReplyAt)}
                        </span>
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-sm font-medium leading-snug">
                        {ticket.subject}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[0.7rem] text-muted-foreground">
                        <span className="font-medium text-foreground/70">
                          {ticket.customerName}
                        </span>
                        <span>·</span>
                        <span>{CATEGORY_LABEL[ticket.category]}</span>
                        <span>·</span>
                        <span>{ticket.messageCount} msgs</span>
                        {ticket.assigneeName ? (
                          <>
                            <span>·</span>
                            <span className="text-foreground/70">
                              {ticket.assigneeId === viewerId
                                ? "you"
                                : ticket.assigneeName}
                            </span>
                          </>
                        ) : (
                          <>
                            <span>·</span>
                            <span className="text-primary-foreground/80">
                              unassigned
                            </span>
                          </>
                        )}
                        <StatusBadge
                          status={ticket.status}
                          className="ml-auto"
                        />
                      </div>
                      {ticket.tags.length > 0 && (
                        <TagChips tags={ticket.tags} className="mt-2" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Ticket detail + triage controls */}
          <section
            className={cn(
              "min-w-0 rounded-2xl border border-border bg-card",
              selectedId ? "block" : "hidden lg:block",
            )}
          >
            {!selectedId || !detail ? (
              <div className="flex h-full min-h-[440px] flex-col items-center justify-center gap-3 px-6 text-center">
                <Inbox className="size-8 text-muted-foreground/50" />
                <p className="text-sm font-medium">No ticket selected</p>
                <p className="max-w-[34ch] text-xs text-muted-foreground">
                  Pick a ticket from the queue to triage it and reply.
                </p>
              </div>
            ) : (
              <div className="flex h-full flex-col">
                <header className="border-b border-border px-5 py-4">
                  <div className="flex items-start gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden"
                      onClick={() => selectTicket(null)}
                    >
                      <ArrowLeft className="size-4" />
                    </Button>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <ReferenceChip reference={detail.ticket.reference} />
                        <CategoryBadge category={detail.ticket.category} />
                        <PriorityBadge priority={detail.ticket.priority} />
                      </div>
                      <h2 className="mt-2 text-lg font-semibold leading-snug">
                        {detail.ticket.subject}
                      </h2>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Opened {timeAgo(detail.ticket.createdAt)} by{" "}
                        {detail.ticket.customerName}
                      </p>
                    </div>
                    {!detail.ticket.mergedIntoId && (
                      <MergeTicketDialog
                        sourceId={detail.ticket.id}
                        sourceReference={detail.ticket.reference}
                        onMerged={(targetId) => {
                          toast.success(
                            `Merged into ${
                              queue?.find((t) => t.id === targetId)?.reference ??
                              "the surviving ticket"
                            }`,
                          );
                          selectTicket(targetId);
                        }}
                        trigger={
                          <Button variant="outline" size="sm" className="shrink-0">
                            <GitMerge className="size-4" />
                            <span className="hidden sm:inline">Merge</span>
                          </Button>
                        }
                      />
                    )}
                  </div>

                  {detail.ticket.mergedIntoId && (
                    <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-dashed border-border bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
                      <GitMerge className="size-3.5" />
                      Merged as a duplicate of{" "}
                      <span className="ref-mono text-foreground/80">
                        {detail.ticket.mergedReference}
                      </span>
                      — replies continue on the surviving ticket.
                    </div>
                  )}

                  {/* Triage controls */}
                  {!detail.ticket.mergedIntoId && (
                    <div className="mt-4 grid gap-3 rounded-xl border border-border bg-muted/40 p-3 sm:grid-cols-3">
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">
                          Status
                        </Label>
                        <Select
                          value={detail.ticket.status}
                          onValueChange={(value) =>
                            void run("Status change", () =>
                              setStatusMutation({
                                ticketId: selectedId,
                                status: value as TicketStatus,
                              }),
                            )
                          }
                        >
                          <SelectTrigger className="h-8 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {STATUSES.map((item) => (
                              <SelectItem key={item} value={item}>
                                {STATUS_LABEL[item]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">
                          Impact
                        </Label>
                        <Select
                          value={detail.ticket.priority}
                          onValueChange={(value) =>
                            void run("Priority change", () =>
                              setPriorityMutation({
                                ticketId: selectedId,
                                priority: value as Priority,
                              }),
                            )
                          }
                        >
                          <SelectTrigger className="h-8 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {PRIORITIES.map((item) => (
                              <SelectItem key={item} value={item}>
                                {PRIORITY_LABEL[item]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">
                          Assignee
                        </Label>
                        <Select
                          value={detail.ticket.assigneeId ?? "unassigned"}
                          onValueChange={(value) =>
                            void run("Assignment", () =>
                              setAssignee({
                                ticketId: selectedId,
                                assigneeId:
                                  value === "unassigned"
                                    ? null
                                    : (value as Id<"users">),
                              }),
                            )
                          }
                        >
                          <SelectTrigger className="h-8 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unassigned">
                              Unassigned
                            </SelectItem>
                            {agents?.map((agent) => (
                              <SelectItem key={agent.id} value={agent.id}>
                                {agent.id === viewerId
                                  ? `${agent.name} (you)`
                                  : agent.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <CustomerPanel
                      customerId={detail.ticket.customerId}
                      customerName={detail.ticket.customerName}
                      onOpenTicket={selectTicket}
                      trigger={
                        <span className="inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                          <Mail className="size-3.5" />
                          {detail.customerEmail}
                        </span>
                      }
                    />
                    {!detail.ticket.mergedIntoId && (
                      <FollowButton
                        ticketId={detail.ticket.id}
                        className="ml-auto h-8"
                      />
                    )}
                    {!detail.ticket.mergedIntoId && (
                      <>
                        <CustomFieldChips
                          ticketId={detail.ticket.id}
                          category={detail.ticket.category}
                          values={detail.ticket.customValues}
                        />
                        <TagPicker
                          tags={detail.ticket.tags}
                          available={allTags ?? []}
                          category={detail.ticket.category}
                          onChange={(tags) =>
                            void run("Tag update", () =>
                              setTagsMutation({ ticketId: selectedId, tags }),
                            )
                          }
                        />
                        <SnoozeMenu
                          snoozedUntil={detail.ticket.snoozedUntil}
                          onSnooze={(until) =>
                            void run("Snooze", async () => {
                              await snoozeTicket({ ticketId: selectedId, until });
                              toast.success("Ticket snoozed — it will resurface on its own");
                            })
                          }
                          onWake={() =>
                            void run("Wake up", async () => {
                              await unsnoozeTicket({ ticketId: selectedId });
                              toast.success("Ticket is back in the queue");
                            })
                          }
                        />
                      </>
                    )}
                    {!detail.ticket.mergedIntoId &&
                      detail.ticket.assigneeId !== viewerId && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-auto"
                          onClick={() =>
                            viewerId
                              ? void run("Assignment", () =>
                                  setAssignee({
                                    ticketId: selectedId,
                                    assigneeId: viewerId,
                                  }),
                                )
                              : undefined
                          }
                        >
                          <UserCheck className="size-4" />
                          Assign to me
                        </Button>
                      )}
                  </div>

                  {detail.ticket.tags.length > 0 && (
                    <TagChips
                      tags={detail.ticket.tags}
                      className="mt-3"
                      onRemove={(tag) =>
                        void run("Tag update", () =>
                          setTagsMutation({
                            ticketId: selectedId,
                            tags: detail.ticket.tags.filter(
                              (value) => value !== tag,
                            ),
                          }),
                        )
                      }
                    />
                  )}

                  <SlaBadge
                    ticket={detail.ticket}
                    variant="block"
                    className="mt-3"
                  />
                </header>

                <div className="flex-1 overflow-y-auto px-5 py-5">
                  {!detail.ticket.mergedIntoId && (
                    <RelatedTickets
                      ticketId={detail.ticket.id}
                      onMerged={selectTicket}
                    />
                  )}
                  {detail.rating && (
                    <CsatSummary
                      rating={detail.rating.rating}
                      comment={detail.rating.comment}
                      createdAt={detail.rating.createdAt}
                      className="mb-5"
                    />
                  )}
                  <ThreadView
                    ticketId={selectedId}
                    messages={detail.messages}
                  />
                </div>

                <div className="border-t border-border bg-muted/40 px-5 py-4">
                  {detail.ticket.mergedIntoId ? (
                    <p className="text-sm text-muted-foreground">
                      Replies are disabled on merged tickets. Open the surviving
                      ticket to continue the conversation.
                    </p>
                  ) : (
                    <ReplyComposer
                      allowInternal
                      knowledge
                      macros={macros ?? []}
                      onSeedMacros={() => seedMacros({})}
                      onSend={async (body, internal, attachments) => {
                        await run("Reply", () =>
                          postReply({
                            ticketId: selectedId,
                            body,
                            internal,
                            attachments: attachments.length
                              ? attachments
                              : undefined,
                          }),
                        );
                      }}
                    />
                  )}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </AppShell>
  );
}
