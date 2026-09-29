import { cn } from "@/lib/utils";

/**
 * Relay mark: a ticket stub with an arrow punching through it — the shape of
 * a conversation moving from customer to agent and back.
 */
export function RelayMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-[18px]"
        aria-hidden="true"
      >
        <path
          d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v2a2.5 2.5 0 0 0 0 5v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-2a2.5 2.5 0 0 0 0-5v-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12h7m0 0-2.4-2.4M15.5 12l-2.4 2.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function RelayWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <RelayMark />
      <span className="text-[1.05rem] font-semibold tracking-tight">
        Relay
        <span className="ml-1 font-normal text-muted-foreground">Support</span>
      </span>
    </span>
  );
}
