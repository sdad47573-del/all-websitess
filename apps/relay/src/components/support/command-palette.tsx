import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import {
  Bell,
  BookOpen,
  LayoutDashboard,
  LifeBuoy,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "next-themes";

export type PaletteAction = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  group: string;
  run: () => void;
};

/**
 * ⌘K / Ctrl-K action menu, the way Intercom Inbox and Zendesk do it: one
 * keyboard path to views, tickets and the things agents toggle constantly.
 */
export function CommandPalette({
  open,
  onOpenChange,
  actions,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  actions: PaletteAction[];
}) {
  const navigate = useNavigate();
  const { resolvedTheme, setTheme } = useTheme();
  const tickets = useQuery(api.notifications.followingTickets, "skip");

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Command menu"
      description="Jump to a ticket, a view or an action"
      className="sm:max-w-xl"
    >
      <CommandInput placeholder="Jump to a ticket, a view or an action…" />
      <CommandList>
        <CommandEmpty>No matches.</CommandEmpty>

        {tickets && tickets.length > 0 && (
          <CommandGroup heading="Tickets you follow">
            {tickets.map((ticket) => (
              <CommandItem
                key={ticket.id}
                value={`${ticket.reference} ${ticket.subject}`}
                onSelect={() => {
                  navigate(`/agent?ticket=${ticket.id}`);
                  onOpenChange(false);
                }}
              >
                <Bell className="size-4" />
                <span className="truncate">
                  <span className="ref-mono mr-2 text-muted-foreground">
                    {ticket.reference}
                  </span>
                  {ticket.subject}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        <CommandGroup heading="Go to">
          <PaletteItem
            icon={LayoutDashboard}
            label="Agent console"
            onSelect={() => {
              navigate("/agent");
              onOpenChange(false);
            }}
          />
          <PaletteItem
            icon={LifeBuoy}
            label="My tickets"
            onSelect={() => {
              navigate("/portal");
              onOpenChange(false);
            }}
          />
          <PaletteItem
            icon={BookOpen}
            label="Help centre"
            onSelect={() => {
              navigate("/help");
              onOpenChange(false);
            }}
          />
        </CommandGroup>

        <CommandGroup heading="Actions">
          {actions.map((action) => (
            <PaletteItem
              key={action.id}
              icon={action.icon}
              label={action.label}
              hint={action.hint}
              onSelect={() => {
                action.run();
                onOpenChange(false);
              }}
            />
          ))}
          <PaletteItem
            icon={resolvedTheme === "dark" ? Sun : Moon}
            label={
              resolvedTheme === "dark" ? "Switch to light" : "Switch to dark"
            }
            onSelect={() => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
              onOpenChange(false);
            }}
          />
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

function PaletteItem({
  icon: Icon,
  label,
  hint,
  onSelect,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  hint?: string;
  onSelect: () => void;
}) {
  return (
    <CommandItem value={label} onSelect={onSelect}>
      <Icon className="size-4" />
      <span>{label}</span>
      {hint && <span className="ml-auto text-xs text-muted-foreground">{hint}</span>}
    </CommandItem>
  );
}

/** Mounts the palette and binds ⌘K / Ctrl-K. */
export function useCommandPalette(actions: PaletteAction[]) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return { open, setOpen, actions };
}

/** j/k queue navigation, plus the single-key triage actions. */
export function useQueueHotkeys({
  count,
  onStep,
  onClaim,
  onResolve,
  onCompose,
  enabled = true,
}: {
  count: number;
  onStep: (delta: number) => void;
  onClaim: () => void;
  onResolve: () => void;
  onCompose: () => void;
  enabled?: boolean;
}) {
  useEffect(() => {
    if (!enabled) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      // Never hijack keys while someone is typing.
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (count === 0) return;

      switch (event.key) {
        case "j":
          event.preventDefault();
          onStep(1);
          break;
        case "k":
          event.preventDefault();
          onStep(-1);
          break;
        case "a":
          event.preventDefault();
          onClaim();
          break;
        case "r":
          event.preventDefault();
          onResolve();
          break;
        case "c":
        case "/":
          event.preventDefault();
          onCompose();
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [count, enabled, onClaim, onCompose, onResolve, onStep]);
}
