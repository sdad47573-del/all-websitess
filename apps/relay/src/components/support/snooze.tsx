import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNow } from "@/hooks/use-now";
import { cn } from "@/lib/utils";
import { snoozeLabel, snoozeUntil, SNOOZE_PRESETS } from "@/lib/support";
import type { SnoozePresetId } from "@/lib/support";
import { AlarmClockOff, BellRing, Loader2 } from "lucide-react";
import { useState } from "react";

/** Shows when a ticket is parked until a follow-up time. */
export function SnoozeBadge({
  until,
  className,
}: {
  until: number | null | undefined;
  className?: string;
}) {
  const now = useNow(60_000);
  if (!until || until <= now) return null;
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-stone-300/80 bg-stone-100 font-medium text-stone-700 tabular-nums dark:bg-stone-500/15 dark:text-stone-300",
        className,
      )}
    >
      <AlarmClockOff className="size-3" />
      {snoozeLabel(until, now)}
    </Badge>
  );
}

/** Snooze / wake controls for a single ticket. */
export function SnoozeMenu({
  snoozedUntil: current,
  onSnooze,
  onWake,
}: {
  snoozedUntil: number | null | undefined;
  onSnooze: (until: number) => void;
  onWake: () => void;
}) {
  const now = useNow(60_000);
  const [open, setOpen] = useState(false);
  const [hours, setHours] = useState("24");
  const [busy, setBusy] = useState(false);
  const isSnoozed = Boolean(current && current > now);

  const apply = (preset: SnoozePresetId) => {
    setBusy(true);
    onSnooze(
      snoozeUntil(
        preset,
        now,
        Number.isFinite(Number(hours)) ? Number(hours) : undefined,
      ),
    );
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          {isSnoozed ? (
            <BellRing className="size-4" />
          ) : (
            <AlarmClockOff className="size-4" />
          )}
          {isSnoozed ? "Snoozed" : "Snooze"}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-60 p-0">
        {isSnoozed ? (
          <div className="p-2">
            <p className="px-2 pb-2 text-xs text-muted-foreground">
              {current ? snoozeLabel(current, now) : "Snoozed"}
            </p>
            <Button
              size="sm"
              className="w-full"
              onClick={() => {
                setBusy(true);
                onWake();
                setOpen(false);
              }}
            >
              <BellRing className="size-4" />
              Wake up now
            </Button>
          </div>
        ) : (
          <div className="p-1">
            {SNOOZE_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => apply(preset.id)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted"
              >
                {preset.label}
              </button>
            ))}
            <div className="mt-1 flex items-center gap-2 border-t border-border px-2 pt-2">
              <Input
                value={hours}
                onChange={(event) => setHours(event.target.value)}
                inputMode="numeric"
                className="h-8"
                placeholder="24"
                aria-label="Custom hours"
              />
              <Button size="sm" className="h-8" onClick={() => apply("custom")}>
                {busy ? <Loader2 className="size-3.5 animate-spin" /> : "Hours"}
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
