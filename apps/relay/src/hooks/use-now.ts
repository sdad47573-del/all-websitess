import { useEffect, useState } from "react";

/**
 * A clock that ticks on an interval, for live countdowns (SLA timers).
 * Reads `Date.now()` lazily so the first paint is already correct.
 */
export function useNow(intervalMs = 30_000): number {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return now;
}
