import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ReferenceChip } from "@/components/support/badges";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import {
  PRIORITIES,
  PRIORITY_LABEL,
  STATUSES,
  STATUS_LABEL,
  timeAgo,
} from "@/lib/support";
import {
  BellRing,
  GitMerge,
  Loader2,
  Play,
  Plus,
  Trash2,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";

const ALL = "any";

const ACTION_LABEL: Record<string, string> = {
  assign: "Assign to agent",
  priority: "Set impact",
  status: "Set status",
  tag: "Add tag",
  alert: "Alert every agent",
};

/** Workflow automation: conditions that fire one action, Zendesk-style. */
export function AutomationsDialog() {
  const rules = useQuery(api.automations.listRules, {});
  const agentList = useQuery(api.tickets.agents, {});
  const createRule = useMutation(api.automations.createRule);
  const setEnabled = useMutation(api.automations.setEnabled);
  const deleteRule = useMutation(api.automations.deleteRule);
  const runNow = useMutation(api.automations.runNow);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [match, setMatch] = useState<"all" | "any">("all");
  const [status, setStatus] = useState(ALL);
  const [priority, setPriority] = useState(ALL);
  const [tag, setTag] = useState("");
  const [unassigned, setUnassigned] = useState(false);
  const [olderThan, setOlderThan] = useState("");
  const [actionType, setActionType] = useState<
    "assign" | "priority" | "status" | "tag" | "alert"
  >("alert");
  const [actionValue, setActionValue] = useState("");
  const [busy, setBusy] = useState(false);
  const [running, setRunning] = useState(false);

  const submit = async () => {
    setBusy(true);
    try {
      const olderThanMinutes = Number(olderThan);
      await createRule({
        name,
        match,
        conditions: {
          status: status === ALL ? undefined : status,
          priority: priority === ALL ? undefined : priority,
          tag: tag.trim() || undefined,
          unassigned: unassigned || undefined,
          olderThanMinutes:
            Number.isFinite(olderThanMinutes) && olderThanMinutes > 0
              ? olderThanMinutes
              : undefined,
        },
        action: {
          type: actionType,
          value:
            actionType === "alert" ? undefined : actionValue.trim() || undefined,
        },
      });
      setName("");
      setTag("");
      setOlderThan("");
      setActionValue("");
      toast.success("Rule created");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not create the rule.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          <Zap className="size-4" />
          Automations
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Automations</DialogTitle>
          <DialogDescription>
            When a ticket matches every condition, run one action. Rules are
            idempotent — nothing re-applies a ticket that's already in the
            target state.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={running}
            onClick={() => {
              setRunning(true);
              runNow({})
                .then((result) =>
                  toast.success(
                    result.changed > 0
                      ? `${result.changed} ticket${result.changed === 1 ? "" : "s"} updated`
                      : "Rules ran — nothing to change",
                  ),
                )
                .catch((error) =>
                  toast.error(
                    error instanceof Error ? error.message : "Run failed.",
                  ),
                )
                .finally(() => setRunning(false));
            }}
          >
            {running ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Play className="size-4" />
            )}
            Run all rules now
          </Button>
          <span className="text-xs text-muted-foreground">
            A sweep also runs every 10 minutes.
          </span>
        </div>

        <div className="space-y-2">
          {rules?.map((rule) => (
            <div
              key={rule._id}
              className="flex items-start gap-3 rounded-xl border border-border px-3 py-2.5"
            >
              <Switch
                checked={rule.enabled !== false}
                onCheckedChange={(checked) =>
                  void setEnabled({ ruleId: rule._id, enabled: checked })
                }
                className="mt-0.5"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{rule.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  If{" "}
                  {[
                    rule.conditions.status && rule.conditions.status !== ALL
                      ? `status is ${rule.conditions.status.replace(/_/g, " ")}`
                      : null,
                    rule.conditions.priority &&
                    rule.conditions.priority !== ALL
                      ? `impact is ${rule.conditions.priority}`
                      : null,
                    rule.conditions.unassigned ? "unassigned" : null,
                    rule.conditions.tag ? `tagged ${rule.conditions.tag}` : null,
                    rule.conditions.olderThanMinutes
                      ? `older than ${rule.conditions.olderThanMinutes}m`
                      : null,
                  ]
                    .filter(Boolean)
                    .join(` ${rule.match === "all" ? "and" : "or"} `)}{" "}
                  → {ACTION_LABEL[rule.action.type]}
                  {rule.action.value && rule.action.type !== "assign"
                    ? ` ${rule.action.value.replace(/_/g, " ")}`
                    : ""}
                  {rule.action.type === "assign" &&
                    agentList?.find((agent) => agent.id === rule.action.value)
                      ? ` ${
                          agentList.find((agent) => agent.id === rule.action.value)
                            ?.name
                        }`
                      : ""}
                </p>
                <p className="mt-1 text-[0.7rem] text-muted-foreground">
                  Run {rule.runCount ?? 0}×
                  {rule.lastMatched ? ` · ${rule.lastMatched} matched last run` : ""}
                  {rule.lastRunAt ? ` · ${timeAgo(rule.lastRunAt)}` : " · never run"}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                onClick={() => void deleteRule({ ruleId: rule._id })}
              >
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          ))}
          {rules?.length === 0 && (
            <p className="rounded-xl border border-dashed border-border px-3 py-6 text-center text-sm text-muted-foreground">
              No rules yet. Try “urgent and unassigned for 2 hours → alert every
              agent”.
            </p>
          )}
        </div>

        <div className="space-y-3 rounded-xl border border-border bg-muted/40 p-4">
          <p className="text-sm font-semibold">New rule</p>
          <div className="grid gap-2">
            <Label htmlFor="rule-name">Name</Label>
            <Input
              id="rule-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Escalate stuck urgent tickets"
            />
          </div>

          <div className="grid gap-2">
            <Label>Match</Label>
            <Select
              value={match}
              onValueChange={(value) => setMatch(value as "all" | "any")}
            >
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All conditions</SelectItem>
                <SelectItem value="any">Any condition</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label>Status is</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Any</SelectItem>
                  {STATUSES.map((item) => (
                    <SelectItem key={item} value={item}>
                      {STATUS_LABEL[item]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Impact is</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Any</SelectItem>
                  {PRIORITIES.map((item) => (
                    <SelectItem key={item} value={item}>
                      {PRIORITY_LABEL[item]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rule-tag">Has tag</Label>
              <Input
                id="rule-tag"
                value={tag}
                onChange={(event) => setTag(event.target.value)}
                placeholder="vip"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="rule-age">Older than (minutes)</Label>
              <Input
                id="rule-age"
                value={olderThan}
                onChange={(event) => setOlderThan(event.target.value)}
                inputMode="numeric"
                placeholder="120"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              id="rule-unassigned"
              checked={unassigned}
              onCheckedChange={setUnassigned}
            />
            <Label htmlFor="rule-unassigned" className="text-sm font-normal">
              Only unassigned tickets
            </Label>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label>Then</Label>
              <Select
                value={actionType}
                onValueChange={(value) =>
                  setActionType(value as typeof actionType)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(ACTION_LABEL).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {actionType !== "alert" && (
              <div className="grid gap-2">
                <Label>Value</Label>
                {actionType === "assign" ? (
                  <Select
                    value={actionValue}
                    onValueChange={setActionValue}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pick an agent" />
                    </SelectTrigger>
                    <SelectContent>
                      {agentList?.map((agent) => (
                        <SelectItem key={agent.id} value={agent.id}>
                          {agent.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : actionType === "priority" ? (
                  <Select value={actionValue} onValueChange={setActionValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pick an impact" />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIORITIES.map((item) => (
                        <SelectItem key={item} value={item}>
                          {PRIORITY_LABEL[item]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : actionType === "status" ? (
                  <Select value={actionValue} onValueChange={setActionValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pick a status" />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUSES.map((item) => (
                        <SelectItem key={item} value={item}>
                          {STATUS_LABEL[item]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    value={actionValue}
                    onChange={(event) => setActionValue(event.target.value)}
                    placeholder="escalated"
                  />
                )}
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={() => void submit()}
            disabled={busy || name.trim().length < 3}
          >
            {busy ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
            Create rule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Zendesk's "Similar tickets" / "Merge suggestions": the tickets this one is
 * most likely a duplicate of, with a one-click merge.
 */
export function RelatedTickets({
  ticketId,
  onMerged,
}: {
  ticketId: Id<"tickets">;
  onMerged: (targetId: Id<"tickets">) => void;
}) {
  const candidates = useQuery(api.tickets.mergeCandidates, { sourceId: ticketId });
  const merge = useMutation(api.tickets.mergeTickets);
  const [busy, setBusy] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !candidates || candidates.length === 0) return null;

  return (
    <div className="mb-5 rounded-xl border border-dashed border-primary/50 bg-accent/30 p-4">
      <div className="flex items-start gap-2">
        <BellRing className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">
            {candidates.length} ticket{candidates.length === 1 ? "" : "s"} this could
            belong to
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Similar subject or the same customer. Merge to keep the history in
            one place.
          </p>
          <ul className="mt-2 space-y-1.5">
            {candidates.slice(0, 3).map((ticket) => (
              <li
                key={ticket.id}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2"
              >
                <ReferenceChip reference={ticket.reference} />
                <span className="min-w-0 flex-1 truncate text-xs font-medium">
                  {ticket.subject}
                </span>
                <span className="text-[0.7rem] text-muted-foreground">
                  {ticket.customerName}
                </span>
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-7"
                  disabled={busy === ticket.id}
                  onClick={() => {
                    setBusy(ticket.id);
                    void merge({ sourceId: ticketId, targetId: ticket.id })
                      .then(() => {
                        toast.success(`Merged into ${ticket.reference}`);
                        onMerged(ticket.id);
                      })
                      .catch((error) =>
                        toast.error(
                          error instanceof Error
                            ? error.message
                            : "Could not merge.",
                        ),
                      )
                      .finally(() => setBusy(null));
                  }}
                >
                  {busy === ticket.id ? (
                    <Loader2 className="size-3.5 animate-spin" />
                  ) : (
                    <GitMerge className="size-3.5" />
                  )}
                  Merge here
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
