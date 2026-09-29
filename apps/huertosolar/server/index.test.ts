import { beforeEach, describe, expect, test } from "bun:test";

import { getDb } from "./db.js";
import app from "./index.js";

/**
 * API tests.
 *
 * Run with `bun test`. Bun's built-in runner is used rather than vitest
 * because `bun:sqlite` is a Bun builtin that only resolves under Bun.
 *
 * The database is in-memory and the rows are cleared between tests, so each
 * test starts from a known state without reloading modules.
 */

process.env.DATABASE_PATH ??= ":memory:";

beforeEach(() => {
  getDb().exec("DELETE FROM journal; DELETE FROM id_sequence;");
});

/** Sends a request to the API and returns the raw response. */
function call(path: string, init?: RequestInit): Response | Promise<Response> {
  return app.request(`/api${path}`, init);
}

/** Sends a JSON body. */
function postJson(
  path: string,
  body: unknown,
): Response | Promise<Response> {
  return call(path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

interface Entry {
  id: string;
  text: string;
  createdAt: number;
}

describe("health", () => {
  test("reports ok", async () => {
    const response = await call("/health");

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
  });
});

describe("journal", () => {
  test("starts empty", async () => {
    const response = await call("/journal");

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual([]);
  });

  test("creates an entry and returns the stored row", async () => {
    const response = await postJson("/journal", { text: "Regar los tomates" });

    expect(response.status).toBe(201);
    const created = (await response.json()) as Entry;
    expect(created.text).toBe("Regar los tomates");
    expect(created.id).toBe("journal_1");
    expect(created.createdAt).toBeTypeOf("number");
  });

  test("trims surrounding whitespace before storing", async () => {
    await postJson("/journal", { text: "  con espacios  " });

    const entries = (await (await call("/journal")).json()) as Entry[];
    expect(entries[0]?.text).toBe("con espacios");
  });

  test("lists newest first", async () => {
    const first = (await (await postJson("/journal", { text: "primera" })).json()) as Entry;
    const second = (await (await postJson("/journal", { text: "segunda" })).json()) as Entry;

    const entries = (await (await call("/journal")).json()) as Entry[];
    expect(entries.map((entry) => entry.id)).toEqual([second.id, first.id]);
  });

  test("hands out unique ids", async () => {
    const a = (await (await postJson("/journal", { text: "a" })).json()) as Entry;
    const b = (await (await postJson("/journal", { text: "b" })).json()) as Entry;

    expect(a.id).not.toBe(b.id);
  });

  test("deletes an entry", async () => {
    const created = (await (await postJson("/journal", { text: "temporal" })).json()) as Entry;

    const deleted = await call(`/journal/${created.id}`, { method: "DELETE" });
    expect(deleted.status).toBe(204);
    expect(await (await call("/journal")).json()).toEqual([]);
  });

  test("reports a missing entry on delete rather than failing silently", async () => {
    const response = await call("/journal/journal_999", { method: "DELETE" });

    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ error: "Nota no encontrada." });
  });
});

describe("validation", () => {
  test("rejects a blank note with a readable message", async () => {
    const response = await postJson("/journal", { text: "   " });

    expect(response.status).toBe(400);
    // Errors are normalised to `{ error }` so the client only reads one shape.
    expect(await response.json()).toEqual({
      error: expect.stringContaining("no puede estar vacía"),
    });
  });

  test("rejects a missing field", async () => {
    const response = await postJson("/journal", {});

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({ error: expect.any(String) });
  });

  test("rejects a note past the length limit", async () => {
    const response = await postJson("/journal", { text: "a".repeat(601) });

    expect(response.status).toBe(400);
  });

  test("rejects a body that is not an object", async () => {
    const response = await postJson("/journal", "solo texto");

    expect(response.status).toBe(400);
  });
});

describe("migrations", () => {
  test("records applied migrations", () => {
    const applied = getDb()
      .query<{ name: string }, []>("SELECT name FROM schema_migrations")
      .all()
      .map((row) => row.name);

    expect(applied).toContain("0001_init.sql");
  });

  test("creates the tables the API relies on", () => {
    const tables = getDb()
      .query<{ name: string }, []>(
        "SELECT name FROM sqlite_master WHERE type = 'table'",
      )
      .all()
      .map((row) => row.name);

    expect(tables).toContain("journal");
    expect(tables).toContain("id_sequence");
  });
});
