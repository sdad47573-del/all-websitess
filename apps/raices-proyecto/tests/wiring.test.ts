import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Wiring checks.
 *
 * The behavioural suite cannot tell you that a feature is *missing*: a
 * mutation nobody calls, or a value the backend returns that no page renders,
 * all pass every behavioural test. Both shipped here — box swapping was
 * advertised for two rounds with no implementation, gifting was reported done
 * with no redemption path, and capital social was write-only for members for
 * longer still.
 *
 * These assertions read the source and fail when an action exists that the UI
 * cannot reach, or a member-facing value that nothing displays.
 */

const SRC = join(import.meta.dir, "..", "src");
const PAGES = join(SRC, "pages");

const readPage = (name: string) =>
  readFileSync(join(PAGES, name), "utf8");

const panelSource = readPage("Panel.tsx");
const allPageSource = readdirSync(PAGES)
  .filter((f) => f.endsWith(".tsx"))
  .map(readPage)
  .join("\n");

const convexSource = readFileSync(join(SRC, "convex", "coop.ts"), "utf8");

const mutationNames = [
  ...convexSource.matchAll(/export const (\w+) = mutation/g),
].map((m) => m[1]);

const queryNames = [...convexSource.matchAll(/export const (\w+) = query/g)].map(
  (m) => m[1],
);

describe("every mutation is reachable from the UI", () => {
  test("the mutation list was actually parsed", () => {
    expect(mutationNames.length).toBeGreaterThan(10);
  });

  test("no backend mutation is orphaned", () => {
    const orphans = mutationNames.filter(
      (name) => !allPageSource.includes(`api.coop.${name}`),
    );
    // Fail with the names, so this reads as a to-do list.
    expect(orphans).toEqual([]);
  });
});

describe("member-facing values are actually displayed", () => {
  test("every myMembership field the panel needs is referenced", () => {
    // Matched on the field name rather than an exact expression: the panel
    // uses both `membership?.x` and, inside an already-guarded branch, plain
    // `membership.x`. What matters is that the value reaches the screen.
    const required = [
      "capital",
      "gift",
      "deliveryMode",
      "deliveryAddress",
      "deliveryFeeCents",
      "nextBox",
      "history",
      "votes",
      "pickupPoint",
      "plan",
    ];
    const missing = required.filter(
      (field) => !panelSource.includes(field),
    );
    expect(missing).toEqual([]);
  });

  test("the delivery summary is actually rendered, not just fetched", () => {
    expect(panelSource).toContain("membership.deliveryFeeCents");
  });
});

describe("queries and mutations stay in step", () => {
  test("any api call the panel makes exists on the backend", () => {
    const used = [...panelSource.matchAll(/api\.coop\.(\w+)/g)].map(
      (m) => m[1],
    );
    const known = new Set([...mutationNames, ...queryNames]);
    expect([...new Set(used)].filter((n) => !known.has(n))).toEqual([]);
  });

  test("the member panel does not reach coordinator-only functions", () => {
    // logHarvest writes the operational record; it belongs to the
    // coordinator view, not to a member's own panel.
    expect(panelSource).not.toContain("api.coop.logHarvest");
    expect(panelSource).not.toContain("api.coop.coordinatorOverview");
  });
});
