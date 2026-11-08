import { Hono } from "hono";
import type { Env } from "../context";
import { currentUser, requireUser } from "@app-server";
import { db, toNotification } from "../db";

export const notificationRoutes = new Hono<Env>();

notificationRoutes.use("*", requireUser);

const LIMIT = 30;

notificationRoutes.get("/", (c) => {
  const rows = db
    .query(
      "SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT ?",
    )
    .all(currentUser(c)._id, LIMIT) as Record<string, string | number | null>[];
  return c.json(rows.map(toNotification));
});

notificationRoutes.get("/unread-count", (c) => {
  const row = db
    .query(
      "SELECT COUNT(*) AS n FROM notifications WHERE user_id = ? AND read_at IS NULL",
    )
    .get(currentUser(c)._id) as { n: number };
  return c.json(row.n);
});

notificationRoutes.post("/:id/read", (c) => {
  const id = c.req.param("id");
  const userId = currentUser(c)._id;

  const row = db.query("SELECT user_id FROM notifications WHERE id = ?").get(id) as
    | { user_id: string }
    | null;
  if (!row || row.user_id !== userId) {
    return c.json({ error: "Notificación no encontrada." }, 404);
  }

  db.query("UPDATE notifications SET read_at = ? WHERE id = ?").run(Date.now(), id);
  return c.json({ ok: true });
});

notificationRoutes.post("/read-all", (c) => {
  const result = db
    .query("UPDATE notifications SET read_at = ? WHERE user_id = ? AND read_at IS NULL")
    .run(Date.now(), currentUser(c)._id);
  return c.json({ updated: result.changes });
});
