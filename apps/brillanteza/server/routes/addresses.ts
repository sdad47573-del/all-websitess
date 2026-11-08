import { Hono } from "hono";
import {
  currentUser,
  optionalString,
  requireString,
  requireUser,
  unwrap,
} from "@app-server";
import type { Env } from "../context";
import { db, newId, toAddress } from "../db";

export const addressRoutes = new Hono<Env>();

/** Máximo de direcciones guardadas, igual que antes. */
const MAX_ADDRESSES = 10;

addressRoutes.use("*", requireUser);

const asAddress = (r: unknown) => toAddress(r as Record<string, string | number | null>);

addressRoutes.get("/", (c) => {
  const rows = db
    .query("SELECT * FROM addresses WHERE user_id = ? ORDER BY created_at")
    .all(currentUser(c)._id) as Record<string, string | number | null>[];
  return c.json(rows.map(asAddress));
});

addressRoutes.post("/", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const label = unwrap(requireString(body, "label", { max: 80 }));
  const address = unwrap(requireString(body, "address", { max: 300 }));
  const city = unwrap(requireString(body, "city", { max: 120 }));
  const postalCode = unwrap(optionalString(body, "postalCode", { max: 20 }));

  if (label.length < 2) return c.json({ error: "Ponle un nombre a la dirección" }, 400);
  if (address.length < 5) return c.json({ error: "Dirección demasiado corta" }, 400);
  if (city.length < 2) return c.json({ error: "Ciudad inválida" }, 400);

  const existing = db
    .query("SELECT COUNT(*) AS n FROM addresses WHERE user_id = ?")
    .get(user._id) as { n: number };
  if (existing.n >= MAX_ADDRESSES) {
    return c.json({ error: `Has alcanzado el máximo de ${MAX_ADDRESSES} direcciones guardadas` }, 400);
  }

  const id = newId("adr");
  db.query(
    `INSERT INTO addresses (id, user_id, label, address, city, postal_code, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
  ).run(id, user._id, label, address, city, postalCode ?? null, Date.now());

  return c.json(asAddress(db.query("SELECT * FROM addresses WHERE id = ?").get(id)));
});

addressRoutes.delete("/:id", (c) => {
  const id = c.req.param("id");
  const row = db.query("SELECT user_id FROM addresses WHERE id = ?").get(id) as
    | { user_id: string }
    | null;
  if (!row) return c.json({ error: "Dirección no encontrada" }, 404);
  if (row.user_id !== currentUser(c)._id) return c.json({ error: "No autorizado" }, 403);

  db.query("DELETE FROM addresses WHERE id = ?").run(id);
  return c.json({ ok: true });
});
