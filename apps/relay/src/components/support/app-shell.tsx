import { RelayWordmark } from "@/components/support/brand";
import { ThemeToggle } from "@/components/support/theme-toggle";
import { NotificationBell } from "@/components/support/notifications";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, BookOpen, Command, LogOut } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { CommandPalette } from "@/components/support/command-palette";
import type { PaletteAction } from "@/components/support/command-palette";

/** Signed-in chrome: brand, section label, account menu. */
export function AppShell({
  section,
  badge,
  email,
  onSignOut,
  children,
  headerAccessory,
  paletteActions,
}: {
  section: string;
  badge?: ReactNode;
  email?: string;
  onSignOut: () => void;
  children: ReactNode;
  /** Right-hand controls rendered before the account chip. */
  headerAccessory?: ReactNode;
  /** Extra entries for the ⌘K palette. */
  paletteActions?: PaletteAction[];
}) {
  const navigate = useNavigate();
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-20 border-b border-border/80 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center gap-3 px-4 sm:px-6">
          <Link to="/" className="shrink-0" aria-label="Relay home">
            <RelayWordmark />
          </Link>
          <span className="hidden h-5 w-px bg-border sm:block" />
          <span className="hidden items-center gap-2 sm:flex">
            <span className="text-sm font-medium">{section}</span>
            {badge}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/help">
                <BookOpen className="size-4" />
                Help centre
              </Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="hidden w-36 justify-between gap-2 text-muted-foreground md:inline-flex"
              onClick={() => setPaletteOpen(true)}
            >
              <span className="flex items-center gap-1.5">
                <Command className="size-3.5" />
                Search
              </span>
              <kbd className="rounded border border-border bg-muted px-1 text-[0.65rem]">
                ⌘K
              </kbd>
            </Button>
            <ThemeToggle />
            <NotificationBell />
            {headerAccessory}
            {email && (
              <span className="hidden max-w-[220px] truncate text-xs text-muted-foreground md:block">
                {email}
              </span>
            )}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                void onSignOut();
                navigate("/");
              }}
            >
              <LogOut className="size-4" />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
        </div>
      </header>
      {children}
      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        actions={paletteActions ?? []}
      />
    </div>
  );
}

/** Small pill used in the shell + page headers. */
export function SectionBadge({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "agent" | "customer";
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-normal",
        tone === "agent" && "border-primary/50 bg-primary/15 text-primary-foreground/80",
        tone === "customer" && "border-border bg-muted text-muted-foreground",
        className,
      )}
    >
      {children}
    </Badge>
  );
}

export function BackLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
      <Link to={to}>
        <ArrowLeft className="size-4" />
        {children}
      </Link>
    </Button>
  );
}
