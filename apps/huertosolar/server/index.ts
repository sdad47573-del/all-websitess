import { Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

import { getDb, nextId } from "./db.js";

/**
 * This app's HTTP API.
 *
 * The app used to run on Convex: a `schema.ts` plus one module per feature, and
 * pages called them through `useQuery`/`useMutation`. That is replaced here by
 * ordinary Hono routes over SQLite.
 *
 * The routes are declared in a single chained expression on purpose. Hono
 * carries each route in a type parameter, and only the value returned by the
 * chain has it, so declaring them as separate `app.get(...)` statements would
 * leave `AppType` empty and the frontend client untyped.
 *
 * `export type AppType` is what the frontend uses to build a typed client, so a
 * route that changes shape breaks the build instead of failing at runtime.
 */

/** A journal entry as the API returns it. */
export interface JournalEntry {
  id: string;
  text: string;
  createdAt: number;
}

const createEntry = z.object({
  text: z.string().trim().min(1, "La nota no puede estar vacía.").max(600),
});

/**
 * Normalises validation failures to the same `{ error }` shape as every other
 * error response, so the client has one thing to read. The default would
 * otherwise be a raw `ZodError` with a different body shape.
 */
function validationMessage(error: z.core.$ZodError): string {
  return error.issues
    .map((issue) => {
      const field = issue.path.join(".");
      return field ? `${field}: ${issue.message}` : issue.message;
    })
    .join(" ");
}

const app = new Hono()
  // The Vite dev server runs on a different port, so the browser needs CORS in
  // development. In production the API and the app are served from one origin
  // and this is never reached.
  .use(
    "/api/*",
    cors({
      origin: (origin) => origin ?? "*",
      allowMethods: ["GET", "POST", "DELETE", "OPTIONS"],
    }),
  )
  .onError((error, c) => {
    if (error instanceof HTTPException) {
      return c.json({ error: error.message }, error.status as 400);
    }
    console.error("[api] unhandled error:", error);
    return c.json({ error: "Internal server error" }, 500);
  })
  /** Health check, handy for confirming the server is up during development. */
  .get("/api/health", (c) => c.json({ ok: true }))
  /** Lists journal entries, newest first. */
  .get("/api/journal", (c) => {
    const entries = getDb()
      .query<
        JournalEntry,
        []
      >(
        // `rowid` is SQLite's implicit insertion counter. Two entries saved in
        // the same millisecond share a `created_at`, so rowid is what keeps
        // the order stable instead of arbitrary.
        `SELECT id, text, created_at AS createdAt
         FROM journal
         ORDER BY created_at DESC, rowid DESC`,
      )
      .all();
    return c.json(entries);
  })
  /** Adds a journal entry and returns the stored row. */
  .post(
    "/api/journal",
    zValidator("json", createEntry, (result, c) => {
      if (!result.success) {
        return c.json({ error: validationMessage(result.error) }, 400);
      }
    }),
    (c) => {
      const { text } = c.req.valid("json");
      const db = getDb();

      const entry: JournalEntry = {
        id: nextId(db, "journal"),
        text,
        createdAt: Date.now(),
      };

      db.query(
        "INSERT INTO journal (id, text, created_at) VALUES (?, ?, ?)",
      ).run(entry.id, entry.text, entry.createdAt);

      return c.json(entry, 201);
    },
  )
  /** Deletes a journal entry. */
  .delete("/api/journal/:id", (c) => {
    const id = c.req.param("id");
    const result = getDb().query("DELETE FROM journal WHERE id = ?").run(id);

    if (result.changes === 0) {
      return c.json({ error: "Nota no encontrada." }, 404);
    }
    return c.body(null, 204);
  });

export default app;

/**
 * The API's shape, for the frontend to build a typed client:
 *
 *   const client = hc<AppType>("/api")
 */
export type AppType = typeof app;
