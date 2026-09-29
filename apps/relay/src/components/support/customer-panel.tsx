import { ReferenceChip, StatusBadge } from "@/components/support/badges";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { formatTimestamp, timeAgo } from "@/lib/support";
import {
  Building2,
  Mail,
  MessageSquare,
  Star,
  Ticket,
  UserRound,
} from "lucide-react";
import { useQuery } from "convex/react";

/** Other open tickets from the same email domain. */
function Colleagues({
  email,
  onOpenTicket,
}: {
  email: string;
  onOpenTicket: (ticketId: Id<"tickets">) => void;
}) {
  const colleagues = useQuery(api.fields.companyColleagues, { email });

  if (!colleagues || colleagues.length === 0) {
    return (
      <p className="mt-2 rounded-lg border border-dashed border-border px-3 py-4 text-xs text-muted-foreground">
        Nobody else at this company has an open ticket.
      </p>
    );
  }

  return (
    <ul className="mt-2 space-y-1.5">
      {colleagues.map((ticket) => (
        <li key={ticket.id}>
          <button
            type="button"
            onClick={() => onOpenTicket(ticket.id)}
            className="w-full rounded-lg border border-border px-3 py-2 text-left transition-colors hover:border-primary/50"
          >
            <span className="flex items-center gap-2">
              <ReferenceChip reference={ticket.reference} />
              <span className="truncate text-xs font-medium">{ticket.name}</span>
              <span className="ml-auto text-[0.7rem] text-muted-foreground">
                {timeAgo(ticket.lastReplyAt)}
              </span>
            </span>
            <span className="mt-1 block truncate text-sm">{ticket.subject}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2">
      <p className="text-[0.7rem] text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold tabular-nums">{value}</p>
    </div>
  );
}

/**
 * Customer record, openable from any ticket. The whole point is not having to
 * leave the conversation to answer "how many tickets has this person filed?".
 */
export function CustomerPanel({
  customerId,
  customerName,
  onOpenTicket,
  trigger,
}: {
  customerId: Id<"users">;
  customerName: string;
  onOpenTicket: (ticketId: Id<"tickets">) => void;
  trigger?: React.ReactNode;
}) {
  const profile = useQuery(api.tickets.customerProfile, { customerId });

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger ?? (
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
            <UserRound className="size-3.5" />
            {customerName}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <UserRound className="size-4" />
            {profile?.name ?? customerName}
          </SheetTitle>
          <SheetDescription>
            {profile ? `Customer since ${formatTimestamp(profile.joinedAt)}` : "Loading…"}
          </SheetDescription>
        </SheetHeader>

        {!profile ? (
          <div className="mt-6 space-y-3">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
        ) : (
          <div className="mt-6 space-y-5">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              <Mail className="size-3.5" />
              {profile.email}
            </a>
            <div className="grid grid-cols-2 gap-2">
              <Stat label="Tickets" value={profile.total} />
              <Stat label="Still open" value={profile.open} />
              <Stat
                label="Avg 1st reply"
                value={
                  profile.avgFirstReplyMins === null
                    ? "—"
                    : profile.avgFirstReplyMins < 60
                      ? `${profile.avgFirstReplyMins}m`
                      : `${Math.round((profile.avgFirstReplyMins / 60) * 10) / 10}h`
                }
              />
              <Stat
                label="CSAT"
                value={
                  profile.csat === null ? (
                    "—"
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-4 fill-amber-400 text-amber-500" />
                      {profile.csat}
                    </span>
                  )
                }
              />
            </div>

            <div>
              <p className="flex items-center gap-1.5 text-sm font-semibold">
                <Building2 className="size-4" />
                Also at this company
              </p>
              <Colleagues email={profile.email} onOpenTicket={onOpenTicket} />
            </div>

            <div>
              <p className="flex items-center gap-1.5 text-sm font-semibold">
                <Ticket className="size-4" />
                Recent tickets
                <span className="font-normal text-muted-foreground">
                  ({profile.messageCount} messages)
                </span>
              </p>
              <ul className="mt-2 space-y-1.5">
                {profile.tickets.map((ticket) => (
                  <li key={ticket.id}>
                    <button
                      type="button"
                      onClick={() => onOpenTicket(ticket.id)}
                      className="w-full rounded-lg border border-border bg-card px-3 py-2 text-left transition-colors hover:border-primary/50"
                    >
                      <span className="flex items-center gap-2">
                        <ReferenceChip reference={ticket.reference} />
                        <StatusBadge status={ticket.status} />
                        <span className="ml-auto text-[0.7rem] text-muted-foreground">
                          {timeAgo(ticket.updatedAt)}
                        </span>
                      </span>
                      <span className="mt-1 block text-sm font-medium leading-snug">
                        {ticket.subject}
                      </span>
                      <span className="mt-1 flex items-center gap-1 text-[0.7rem] text-muted-foreground">
                        <MessageSquare className="size-3" />
                        {ticket.messageCount} messages
                      </span>
                    </button>
                  </li>
                ))}
                {profile.tickets.length === 0 && (
                  <li className="rounded-lg border border-dashed border-border px-3 py-6 text-center text-xs text-muted-foreground">
                    No tickets on file.
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
