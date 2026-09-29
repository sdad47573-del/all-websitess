import { ReferenceChip } from "@/components/support/badges";
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
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { timeAgo } from "@/lib/support";
import { Check, GitMerge, Loader2, Search } from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";

type MergeState = "idle" | "saving";

/**
 * Fold a duplicate into a surviving ticket. The duplicate is closed and
 * points at the survivor; priority and tags roll onto the survivor.
 */
export function MergeTicketDialog({
  sourceId,
  sourceReference,
  onMerged,
  trigger,
}: {
  sourceId: Id<"tickets">;
  sourceReference: string;
  onMerged: (targetId: Id<"tickets">) => void;
  trigger?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState<Id<"tickets"> | null>(null);
  const [search, setSearch] = useState("");
  const [state, setState] = useState<MergeState>("idle");
  const [error, setError] = useState<string | null>(null);

  const candidates = useQuery(
    api.tickets.mergeCandidates,
    open ? { sourceId } : "skip",
  );
  const runMerge = useMutation(api.tickets.mergeTickets);

  const needle = search.trim().toLowerCase();
  const rows = (candidates ?? []).filter(
    (ticket) =>
      !needle ||
      `${ticket.reference} ${ticket.subject} ${ticket.customerName}`
        .toLowerCase()
        .includes(needle),
  );

  const submit = async () => {
    if (!picked) return;
    setState("saving");
    setError(null);
    try {
      await runMerge({ sourceId, targetId: picked });
      setOpen(false);
      setPicked(null);
      setSearch("");
      onMerged(picked);
    } catch (mergeError) {
      setError(
        mergeError instanceof Error
          ? mergeError.message
          : "Could not merge these tickets.",
      );
    } finally {
      setState("idle");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="outline" size="sm">
            <GitMerge className="size-4" />
            Merge
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Merge {sourceReference} as a duplicate</DialogTitle>
          <DialogDescription>
            Pick the ticket that should survive. The duplicate is closed and
            linked; priority and tags roll onto the ticket you choose.
          </DialogDescription>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Filter by reference, subject or customer"
            className="h-9 w-full rounded-md border border-input bg-card pl-8 pr-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          />
        </div>

        <div className="max-h-64 space-y-1 overflow-y-auto">
          {candidates && rows.length === 0 && (
            <p className="px-1 py-6 text-center text-sm text-muted-foreground">
              No similar tickets found.
            </p>
          )}
          {rows.map((ticket) => (
            <button
              key={ticket.id}
              type="button"
              onClick={() => setPicked(ticket.id)}
              className={`flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors ${
                picked === ticket.id
                  ? "border-primary/60 bg-primary/10"
                  : "border-border hover:bg-muted"
              }`}
            >
              <Check
                className={`mt-0.5 size-4 shrink-0 ${
                  picked === ticket.id
                    ? "text-primary-foreground/80"
                    : "opacity-0"
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <ReferenceChip reference={ticket.reference} />
                  <span className="text-xs text-muted-foreground">
                    {ticket.customerName} · {timeAgo(ticket.createdAt)}
                  </span>
                </span>
                <span className="mt-1 block truncate text-sm font-medium">
                  {ticket.subject}
                </span>
              </span>
            </button>
          ))}
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => void submit()} disabled={!picked || state === "saving"}>
            {state === "saving" && <Loader2 className="size-4 animate-spin" />}
            Merge into selected
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
