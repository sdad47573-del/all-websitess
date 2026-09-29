import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AttachmentList, AttachmentPicker } from "@/components/support/attachments";
import type { PendingAttachment } from "@/components/support/attachments";
import { KnowledgeMenu } from "@/components/support/knowledge";
import type { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { formatTimestamp, timeAgo } from "@/lib/support";
import { BookOpen, Loader2, Lock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export type ThreadMessage = {
  _id: string;
  authorName: string;
  authorKind: "customer" | "agent" | "system";
  body: string;
  isInternal?: boolean;
  attachments?: PendingAttachment[];
  createdAt: number;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function Avatar({
  name,
  tone,
}: {
  name: string;
  tone: "agent" | "customer" | "system";
}) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold",
        tone === "agent" && "bg-primary/20 text-primary-foreground/80 ring-1 ring-primary/40",
        tone === "customer" && "bg-muted text-muted-foreground ring-1 ring-border",
        tone === "system" && "bg-muted text-muted-foreground ring-1 ring-border",
      )}
    >
      {tone === "system" ? "R" : initials(name)}
    </span>
  );
}

export function ThreadView({
  messages,
  ticketId,
  className,
}: {
  messages: ThreadMessage[];
  ticketId: Id<"tickets">;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {messages.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No messages on this ticket yet.
        </p>
      )}
      {messages.map((message) => {
        if (message.authorKind === "system") {
          return (
            <div key={message._id} className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="ref-mono rounded-full border border-border bg-muted px-2.5 py-1 text-muted-foreground">
                {message.body}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
          );
        }

        const isAgent = message.authorKind === "agent";
        const isInternal = Boolean(message.isInternal);

        if (isInternal) {
          return (
            <div
              key={message._id}
              className="rounded-xl border border-dashed border-primary/60 bg-accent/50 p-4"
            >
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="gap-1 border-primary/50 bg-background/70 text-muted-foreground"
                >
                  <Lock className="size-3" />
                  Internal note
                </Badge>
                <span className="text-xs font-medium">{message.authorName}</span>
                <span className="text-xs text-muted-foreground">
                  {timeAgo(message.createdAt)}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">
                {message.body}
              </p>
              <AttachmentList
                ticketId={ticketId}
                attachments={message.attachments}
              />
            </div>
          );
        }

        return (
          <div
            key={message._id}
            className={cn(
              "flex gap-3",
              isAgent ? "flex-row-reverse text-right" : "flex-row",
            )}
          >
            <Avatar name={message.authorName} tone={isAgent ? "agent" : "customer"} />
            <div className={cn("max-w-[85%] space-y-1", isAgent && "items-end")}>
              <div
                className={cn(
                  "flex flex-wrap items-baseline gap-2 text-xs text-muted-foreground",
                  isAgent && "justify-end",
                )}
              >
                <span className="font-medium text-foreground/80">
                  {message.authorName}
                </span>
                <span>{isAgent ? "Support" : "You"}</span>
                <span title={formatTimestamp(message.createdAt)}>
                  {timeAgo(message.createdAt)}
                </span>
              </div>
              <div
                className={cn(
                  "rounded-xl px-3.5 py-2.5 text-left text-sm leading-relaxed",
                  isAgent
                    ? "rounded-tr-sm bg-primary/15 ring-1 ring-primary/25"
                    : "rounded-tl-sm border border-border bg-card",
                )}
              >
                {message.body}
              </div>
              <AttachmentList
                ticketId={ticketId}
                attachments={message.attachments}
                className={cn(isAgent && "self-end")}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export type Macro = { id: string; title: string; body: string };

/** Insert a canned reply into the composer. */
function MacroMenu({
  macros,
  onInsert,
  onSeed,
  seeding,
}: {
  macros: Macro[];
  onInsert: (body: string) => void;
  onSeed: () => void;
  seeding: boolean;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="ghost" size="sm" className="h-7 px-2">
          <BookOpen className="size-3.5" />
          Macros
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-0">
        <div className="border-b border-border px-3 py-2 text-xs font-medium text-muted-foreground">
          Canned replies
        </div>
        <div className="max-h-72 overflow-y-auto p-1">
          {macros.length === 0 && (
            <div className="px-3 py-4 text-center">
              <p className="text-xs text-muted-foreground">
                No macros yet.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                disabled={seeding}
                onClick={onSeed}
              >
                {seeding && <Loader2 className="size-3.5 animate-spin" />}
                Load starter macros
              </Button>
            </div>
          )}
          {macros.map((macro) => (
            <button
              key={macro.id}
              type="button"
              onClick={() => onInsert(macro.body)}
              className="block w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-muted"
            >
              <span className="block text-sm font-medium">{macro.title}</span>
              <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">
                {macro.body}
              </span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function ReplyComposer({
  onSend,
  allowInternal = false,
  placeholder = "Write a reply…",
  submitLabel = "Send reply",
  disabled = false,
  macros,
  onSeedMacros,
  allowAttachments = true,
  knowledge = false,
  className,
}: {
  onSend: (
    body: string,
    internal: boolean,
    attachments: PendingAttachment[],
  ) => Promise<void> | void;
  /** Agent-only notes; ignored for customers. */
  allowInternal?: boolean;
  placeholder?: string;
  submitLabel?: string;
  disabled?: boolean;
  /** Agent-only canned replies offered above the composer. */
  macros?: Macro[];
  onSeedMacros?: () => void;
  allowAttachments?: boolean;
  /** Agent-only: offer help-centre links in the composer. */
  knowledge?: boolean;
  className?: string;
}) {
  const [body, setBody] = useState("");
  const [internal, setInternal] = useState(false);
  const [sending, setSending] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [attachments, setAttachments] = useState<PendingAttachment[]>([]);
  // Customers never get internal notes, whatever local state says.
  const isInternal = allowInternal && internal;

  const insertMacro = (text: string) => {
    setBody((current) => (current.trim() ? `${current.trim()}\n\n${text}` : text));
  };

  const submit = async () => {
    const trimmed = body.trim();
    if (trimmed.length < 2 || sending) return;
    setSending(true);
    try {
      await onSend(trimmed, isInternal, isInternal ? [] : attachments);
      setBody("");
      setAttachments([]);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      <Textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            void submit();
          }
        }}
        placeholder={placeholder}
        rows={3}
        disabled={disabled}
        className={cn(
          "resize-none bg-card",
          isInternal && "border-primary/60 bg-accent/40",
        )}
      />
      <div className="flex flex-wrap items-center gap-3">
        {allowInternal && macros && onSeedMacros && (
          <MacroMenu
            macros={macros}
            seeding={seeding}
            onInsert={insertMacro}
            onSeed={() => {
              setSeeding(true);
              void Promise.resolve(onSeedMacros()).finally(() =>
                setSeeding(false),
              );
            }}
          />
        )}
        {allowInternal && knowledge && (
          <KnowledgeMenu className="h-7 px-2" onInsert={insertMacro} />
        )}
        {allowInternal && (
          <button
            type="button"
            onClick={() => setInternal((value) => !value)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors",
              isInternal
                ? "bg-primary/20 text-primary-foreground/80 ring-1 ring-primary/40"
                : "text-muted-foreground hover:bg-muted",
            )}
          >
            <Lock className="size-3" />
            {isInternal ? "Internal note" : "Public reply"}
          </button>
        )}
        <span className="text-xs text-muted-foreground">
          <MessageSquare className="mr-1 inline size-3" />
          {isInternal
            ? "Only agents on this ticket will see this."
            : "⌘ + Enter to send"}
        </span>
        <Button
          type="button"
          onClick={() => void submit()}
          disabled={
            disabled || sending || (body.trim().length < 2 && attachments.length === 0)
          }
          className="ml-auto"
        >
          <Send className="size-4" />
          {sending ? "Sending…" : submitLabel}
        </Button>
      </div>

      {allowAttachments && !isInternal && (
        <AttachmentPicker
          value={attachments}
          onChange={setAttachments}
          disabled={disabled || sending}
        />
      )}
    </div>
  );
}
