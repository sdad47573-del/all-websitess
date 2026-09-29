import { Hono } from "hono";
import type { Env } from "../context";
import { currentUser, requireUser } from "@app-server";
import { db, newId, toPet, type Pet } from "../db";
import {
  optionalNumber,
  optionalString,
  requireSize,
  requireString,
  unwrap,
} from "@app-server";

export const petRoutes = new Hono<Env>();

// Todas las rutas de mascotas son del usuario de la sesión.
petRoutes.use("*", requireUser);

const asPetRow = (r: unknown): Pet => toPet(r as Record<string, string | number | null>);

petRoutes.get("/", (c) => {
  const rows = db
    .query("SELECT * FROM pets WHERE user_id = ? ORDER BY created_at")
    .all(currentUser(c)._id) as Record<string, string | number | null>[];
  return c.json(rows.map(asPetRow));
});

petRoutes.post("/", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const name = unwrap(requireString(body, "name", { max: 80 }));
  const size = unwrap(requireSize(body));

  const breed = unwrap(optionalString(body, "breed", { max: 120 }));
  const breedKey = unwrap(optionalString(body, "breedKey", { max: 40 }));
  const notes = unwrap(optionalString(body, "notes"));
  const lastVaccineAt = unwrap(optionalString(body, "lastVaccineAt", { max: 10 }));
  const birthYear = unwrap(optionalNumber(body, "birthYear", { min: 1980, max: 2100 }));
  const weightKg = unwrap(optionalNumber(body, "weightKg", { min: 0, max: 150 }));

  // Lo hacía Convex con el índice by_user_name; aquí lo apoya el índice único
  // parcial, que además solo mira las mascotas activas.
  const duplicate = db
    .query("SELECT id FROM pets WHERE user_id = ? AND name = ? AND archived = 0")
    .get(user._id, name);
  if (duplicate) {
    return c.json({ error: "Ya tienes registrado un peludo con ese nombre." }, 409);
  }

  const id = newId("pet");
  db.query(
    `INSERT INTO pets
       (id, user_id, name, breed, breed_key, size, birth_year, weight_kg, last_vaccine_at, notes, archived, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)`,
  ).run(
    id,
    user._id,
    name,
    breed ?? null,
    breedKey ?? null,
    size,
    birthYear ?? null,
    weightKg ?? null,
    lastVaccineAt ?? null,
    notes ?? null,
    Date.now(),
  );

  const row = db.query("SELECT * FROM pets WHERE id = ?").get(id);
  return c.json(asPetRow(row));
});

petRoutes.patch("/:id", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const petId = c.req.param("id");
  const userId = currentUser(c)._id;

  const pet = db.query("SELECT * FROM pets WHERE id = ?").get(petId) as
    | Record<string, string | number | null>
    | null;
  if (!pet || pet.user_id !== userId) return c.json({ error: "Mascota no encontrada." }, 404);

  // Solo se acepta el subconjunto de campos que el Convex `updatePet` permitía
  // cambiar; el nombre y la raza se fijan en el alta.
  const patch: string[] = [];
  const values: (string | number | null)[] = [];

  if ("size" in body) {
    patch.push("size = ?");
    values.push(unwrap(requireSize(body)));
  }
  if ("notes" in body) {
    patch.push("notes = ?");
    values.push(unwrap(optionalString(body, "notes")) ?? null);
  }
  if ("lastVaccineAt" in body) {
    patch.push("last_vaccine_at = ?");
    values.push(unwrap(optionalString(body, "lastVaccineAt", { max: 10 })) ?? null);
  }
  if ("archived" in body) {
    if (typeof body.archived !== "boolean") return c.json({ error: "archived no es válido." }, 400);
    patch.push("archived = ?");
    values.push(body.archived ? 1 : 0);
  }

  if (patch.length === 0) return c.json({ error: "Nada que actualizar." }, 400);

  db.query(`UPDATE pets SET ${patch.join(", ")} WHERE id = ?`).run(...values, petId);
  const row = db.query("SELECT * FROM pets WHERE id = ?").get(petId);
  return c.json(asPetRow(row));
});

/** Archivar la mascota. Es un borrado lógico, como el `removePet` original. */
petRoutes.delete("/:id", (c) => {
  const petId = c.req.param("id");
  const userId = currentUser(c)._id;

  const pet = db.query("SELECT * FROM pets WHERE id = ?").get(petId) as
    | Record<string, string | number | null>
    | null;
  if (!pet || pet.user_id !== userId) return c.json({ error: "Mascota no encontrada." }, 404);

  db.query("UPDATE pets SET archived = 1 WHERE id = ?").run(petId);
  return c.json(petId);
});
