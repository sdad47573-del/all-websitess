import { Badge } from "@/components/ui/badge";
import { useNow } from "@/hooks/use-now";
import { cn } from "@/lib/utils";
import { slaCountdown, slaFor, SLA_STYLE } from "@/lib/support";
import type { Priority, TicketStatus } from "@/lib/support";
import { Timer } from "lucide-react";

type SlaTicket = {
  priority: Priority;
  createdAt: number;
  firstAgentReplyAt?: number | null;
  status: TicketStatus;
};

/**
 * First-response SLA clock. While the ticket is still unanswered this counts
 * down live; once an agent has replied it turns into a met/missed verdict.
 */
export function SlaBadge({
  ticket,
  className,
  variant = "badge",
}: {
  ticket: SlaTicket;
  className?: string;
  /** "badge" for queue rows, "block" for the ticket header. */
  variant?: "badge" | "block";
}) {
  const now = useNow();
  const sla = slaFor(ticket, now);
  const isRisky = sla.state === "at_risk" || sla.state === "breached";

  if (variant === "block") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg border px-3 py-2 text-xs",
          SLA_STYLE[sla.state],
          className,
        )}
      >
        <Timer className="size-3.5 shrink-0" />
        <span className="font-medium">First response</span>
        <span className="opacity-80">{slaCountdown(sla)}</span>
        <span className="ml-auto opacity-70">
          target{" "}
          {sla.targetMinutes < 60
            ? `${sla.targetMinutes}m`
            : `${Math.round(sla.targetMinutes / 60)}h`}
        </span>
      </div>
    );
  }

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium tabular-nums",
        SLA_STYLE[sla.state],
        isRisky && "ring-1 ring-current/20",
        className,
      )}
      title={
        sla.pending
          ? "Counting down to the first agent reply"
          : "First agent reply"
      }
    >
      <Timer className="size-3" />
      {slaCountdown(sla)}
    </Badge>
  );
}
