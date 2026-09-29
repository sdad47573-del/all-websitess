import { AppShell, SectionBadge } from "@/components/support/app-shell";
import {
  CategoryBadge,
  PriorityBadge,
  ReferenceChip,
  StatusBadge,
} from "@/components/support/badges";
import { AttachmentPicker } from "@/components/support/attachments";
import type { PendingAttachment } from "@/components/support/attachments";
import { CsatPicker, CsatSummary } from "@/components/support/csat";
import { CustomFieldInputs } from "@/components/support/custom-fields";
import { SuggestedArticles } from "@/components/support/knowledge";
import { SlaBadge } from "@/components/support/sla";
import { TagChips } from "@/components/support/tags";
import { ReplyComposer, ThreadView } from "@/components/support/thread";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { useAuth } from "@/hooks/use-auth";
import {
  CATEGORIES_FOR_SUBMIT,
  CATEGORY_LABEL,
  displayName,
  PRIORITIES_FOR_SUBMIT,
  PRIORITY_LABEL,
  timeAgo,
} from "@/lib/support";
import type { Category, Priority } from "@/lib/support";
import { Inbox, Loader2, LifeBuoy, MessageSquarePlus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useMutation, useQuery } from "convex/react";

function NewTicketDialog({
  onCreated,
  trigger,
}: {
  onCreated: (id: Id<"tickets">) => void;
  trigger?: React.ReactNode;
}) {
  const createTicket = useMutation(api.tickets.createTicket);
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState<Category>("technical");
  const [priority, setPriority] = useState<Priority>("normal");
  const [attachments, setAttachments] = useState<PendingAttachment[]>([]);
  const [customValues, setCustomValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const submit = async () => {
    setSaving(true);
    try {
      const result = await createTicket({
        subject,
        body,
        category,
        priority,
        attachments: attachments.length ? attachments : undefined,
        customValues: Object.keys(customValues).length > 0 ? customValues : undefined,
      });
      setOpen(false);
      setSubject("");
      setBody("");
      setAttachments([]);
      setCustomValues({});
      setCategory("technical");
      setPriority("normal");
      toast.success(`Ticket ${result.reference} created`, {
        description: "An agent will pick it up shortly.",
      });
      onCreated(result.ticketId);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not create the ticket.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button>
            <MessageSquarePlus className="size-4" />
            New ticket
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>How can we help?</DialogTitle>
          <DialogDescription>
            Give agents the context they need and you&apos;ll get a reply on this
            thread.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Charged twice for my March invoice"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label>Category</Label>
              <Select
                value={category}
                onValueChange={(value) => setCategory(value as Category)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES_FOR_SUBMIT.map((item) => (
                    <SelectItem key={item} value={item}>
                      {CATEGORY_LABEL[item]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Impact</Label>
              <Select
                value={priority}
                onValueChange={(value) => setPriority(value as Priority)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PRIORITIES_FOR_SUBMIT.map((item) => (
                    <SelectItem key={item} value={item}>
                      {PRIORITY_LABEL[item]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="details">What&apos;s happening?</Label>
            <Textarea
              id="details"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              rows={6}
              placeholder="Include error messages, order IDs, and what you already tried."
              className="resize-none"
            />
          </div>

          <AttachmentPicker value={attachments} onChange={setAttachments} />

          {/* Conditional form: only the fields this category actually uses. */}
          <CustomFieldInputs
            category={category}
            values={customValues}
            onChange={setCustomValues}
          />

          {/* Deflection: surface answers before the ticket exists. */}
          <SuggestedArticles
            text={`${subject} ${body}`}
            className="rounded-xl border border-dashed border-primary/40 bg-accent/30 p-4"
          />
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => void submit()}
            disabled={saving || subject.trim().length < 4 || body.trim().length < 10}
          >
            {saving && <Loader2 className="size-4 animate-spin" />}
            Submit ticket
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function Portal() {
  const { user, signOut } = useAuth();
  const tickets = useQuery(api.tickets.myTickets);
  const [pickedId, setPickedId] = useState<Id<"tickets"> | null>(null);
  const postReply = useMutation(api.tickets.postReply);
  const rateTicket = useMutation(api.tickets.rateTicket);

  // Derived during render: fall back to the most recent ticket when the
  // current pick disappeared (deleted, or a different account signed in).
  const selectedId =
    pickedId && tickets?.some((ticket) => ticket.id === pickedId)
      ? pickedId
      : (tickets?.[0]?.id ?? null);

  const detail = useQuery(
    api.tickets.myTicket,
    selectedId ? { ticketId: selectedId } : "skip",
  );

  const openCount =
    tickets?.filter((ticket) => ticket.status !== "resolved").length ?? 0;

  return (
    <AppShell
      section="My support"
      badge={
        <SectionBadge tone="customer">
          {openCount} open · {tickets?.length ?? 0} total
        </SectionBadge>
      }
      email={user?.email}
      onSignOut={signOut}
      headerAccessory={
        <NewTicketDialog onCreated={setPickedId} />
      }
    >
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 py-6 sm:px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Hello, {displayName(user)}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Every conversation you&apos;ve started with our support team, in one
            place.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          {/* Ticket list */}
          <section
            className={`rounded-2xl border border-border bg-card/60 ${
              selectedId ? "hidden lg:block" : "block"
            }`}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h2 className="text-sm font-semibold">Your tickets</h2>
              <NewTicketDialog
                onCreated={setPickedId}
                trigger={
                  <Button variant="ghost" size="sm">
                    <MessageSquarePlus className="size-4" />
                    New
                  </Button>
                }
              />
            </div>

            <div className="max-h-[calc(100vh-260px)] overflow-y-auto p-2">
              {!tickets && (
                <div className="space-y-2 p-2">
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-full" />
                </div>
              )}

              {tickets?.length === 0 && (
                <div className="px-4 py-14 text-center">
                  <Inbox className="mx-auto size-8 text-muted-foreground/50" />
                  <p className="mt-3 text-sm font-medium">No tickets yet</p>
                  <p className="mx-auto mt-1 max-w-[26ch] text-xs text-muted-foreground">
                    When something breaks, open a ticket and we&apos;ll take it
                    from there.
                  </p>
                </div>
              )}

              <ul className="space-y-1">
                {tickets?.map((ticket) => (
                  <li key={ticket.id}>
                    <button
                      type="button"
                      onClick={() => setPickedId(ticket.id)}
                      className={`w-full rounded-xl border px-3 py-3 text-left transition-colors ${
                        selectedId === ticket.id
                          ? "border-primary/50 bg-primary/10"
                          : "border-transparent hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ReferenceChip reference={ticket.reference} />
                        <span className="ml-auto text-[0.7rem] text-muted-foreground">
                          {timeAgo(ticket.lastReplyAt)}
                        </span>
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-sm font-medium leading-snug">
                        {ticket.subject}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <StatusBadge status={ticket.status} />
                        <CategoryBadge category={ticket.category} />
                        {ticket.priority === "urgent" && (
                          <PriorityBadge priority="urgent" />
                        )}
                        <SlaBadge ticket={ticket} />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Conversation */}
          <section
            className={`min-w-0 rounded-2xl border border-border bg-card ${
              selectedId ? "block" : "hidden lg:block"
            }`}
          >
            {!selectedId || !detail ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-3 px-6 text-center">
                <LifeBuoy className="size-8 text-muted-foreground/50" />
                <p className="text-sm font-medium">Select a ticket</p>
                <p className="max-w-[34ch] text-xs text-muted-foreground">
                  Pick a conversation on the left to read the thread and reply.
                </p>
              </div>
            ) : (
              <div className="flex h-full flex-col">
                <header className="border-b border-border px-5 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <ReferenceChip reference={detail.ticket.reference} />
                    <StatusBadge status={detail.ticket.status} />
                    <CategoryBadge category={detail.ticket.category} />
                    <PriorityBadge priority={detail.ticket.priority} />
                    {detail.ticket.assigneeName && (
                      <span className="text-xs text-muted-foreground">
                        handled by {detail.ticket.assigneeName}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 text-lg font-semibold leading-snug">
                    {detail.ticket.subject}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Opened {timeAgo(detail.ticket.createdAt)} ·{" "}
                    {detail.ticket.messageCount} message
                    {detail.ticket.messageCount === 1 ? "" : "s"}
                  </p>
                  {detail.ticket.tags.length > 0 && (
                    <TagChips
                      tags={detail.ticket.tags}
                      className="mt-3"
                    />
                  )}
                </header>

                <div className="flex-1 overflow-y-auto px-5 py-5">
                  {detail.ticket.mergedIntoId && (
                    <div className="mb-5 flex flex-wrap items-center gap-2 rounded-lg border border-dashed border-border bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
                      This ticket was merged with{" "}
                      <span className="ref-mono text-foreground/80">
                        {detail.ticket.mergedReference}
                      </span>
                      as a duplicate. Continue the conversation there.
                    </div>
                  )}
                  <ThreadView
                    ticketId={selectedId}
                    messages={detail.messages}
                  />
                </div>

                <div className="border-t border-border bg-muted/40 px-5 py-4">
                  {detail.ticket.mergedIntoId ? (
                    <p className="text-sm text-muted-foreground">
                      Replies are paused on this ticket because it was merged
                      into another one.
                    </p>
                  ) : (
                    <>
                      {detail.ticket.status === "resolved" && (
                        <div className="mb-3">
                          <p className="mb-3 text-sm text-muted-foreground">
                            This ticket is resolved — a new reply reopens it for
                            the team.
                          </p>
                          {detail.rating ? (
                            <CsatSummary
                              rating={detail.rating.rating}
                              comment={detail.rating.comment}
                              createdAt={detail.rating.createdAt}
                            />
                          ) : (
                            <CsatPicker
                              onSubmit={async (rating, comment) => {
                                await rateTicket({
                                  ticketId: selectedId,
                                  rating,
                                  comment,
                                });
                                toast.success("Thanks for the feedback");
                              }}
                            />
                          )}
                        </div>
                      )}
                      <ReplyComposer
                        onSend={async (body, _internal, attachments) => {
                          await postReply({
                            ticketId: selectedId,
                            body,
                            attachments: attachments.length ? attachments : undefined,
                          });
                        }}
                      />
                    </>
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
