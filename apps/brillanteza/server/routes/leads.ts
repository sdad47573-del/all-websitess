import { Hono } from "hono";
import {
  HttpError,
  currentUser,
  optionalString,
  requireOneOf,
  requireNumber,
  requireString,
  requireUser,
  unwrap,
} from "@app-server";
import { requireAdmin, type Env } from "../context";
import { db, newId, toCustomQuote, toJobApplication } from "../db";

/**
 * Leads: candidaturas de empleo y presupuestos personalizados.
 *
 * Ambos formularios son públicos y.Flow-prone, así que cada uno lleva su propio
 * rate limit por email, que antes vivía en el código de Convex.
 */

export const leadRoutes = new Hono<Env>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------- Bolsa de empleo ---------- */

/** Máx. 2 candidaturas por email cada 30 días. */
leadRoutes.post("/jobs", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;

  const name = unwrap(requireString(body, "name", { max: 120 }));
  const email = unwrap(requireString(body, "email", { max: 320 })).toLowerCase();
  const city = unwrap(requireString(body, "city", { max: 120 }));
  const experienceYears = unwrap(requireNumber(body, "experienceYears", { min: 0, max: 50 }));
  const phone = unwrap(optionalString(body, "phone", { max: 40 }));
  const message = unwrap(optionalString(body, "message", { max: 2000 }));

  if (!EMAIL_RE.test(email)) return c.json({ error: "Email no válido" }, 400);
  if (name.length < 2) return c.json({ error: "Nombre no válido" }, 400);
  if (city.length < 2) return c.json({ error: "Ciudad no válida" }, 400);

  const since = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const recent = db
    .query(
      "SELECT COUNT(*) AS n FROM job_applications WHERE email = ? AND created_at >= ?",
    )
    .get(email, since) as { n: number };
  if (recent.n >= 2) {
    return c.json(
      { error: "Ya tenemos tu candidatura registrada. Te contactaremos pronto." },
      429,
    );
  }

  const id = newId("job");
  db.query(
    `INSERT INTO job_applications
       (id, name, email, phone, city, experience_years, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'new', ?)`,
  ).run(id, name, email, phone ?? null, city, Math.round(experienceYears), message ?? null, Date.now());

  return c.json(id);
});

/* ---------- Presupuestos personalizados ---------- */

/** Máx. 3 solicitudes por email cada 24 h. */
leadRoutes.post("/quotes", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;

  const name = unwrap(requireString(body, "name", { max: 120 }));
  const email = unwrap(requireString(body, "email", { max: 320 })).toLowerCase();
  const city = unwrap(requireString(body, "city", { max: 120 }));
  const details = unwrap(requireString(body, "details", { max: 4000 }));
  const requestType = unwrap(
    requireOneOf(
      body,
      "requestType",
      ["office", "community", "store", "hotel", "other"] as const,
      "Tipo de solicitud no válido.",
    ),
  );
  const phone = unwrap(optionalString(body, "phone", { max: 40 }));
  const company = unwrap(optionalString(body, "company", { max: 160 }));

  if (!EMAIL_RE.test(email)) return c.json({ error: "Email no válido" }, 400);
  if (name.length < 2) return c.json({ error: "Nombre no válido" }, 400);
  if (city.length < 2) return c.json({ error: "Ciudad no válida" }, 400);
  if (details.length < 10) {
    return c.json({ error: "Cuéntanos un poco más (mínimo 10 caracteres)" }, 400);
  }

  const since = Date.now() - 24 * 60 * 60 * 1000;
  const recent = db
    .query("SELECT COUNT(*) AS n FROM custom_quotes WHERE email = ? AND created_at >= ?")
    .get(email, since) as { n: number };
  if (recent.n >= 3) {
    return c.json(
      { error: "Has enviado varias solicitudes. Te contactaremos muy pronto." },
      429,
    );
  }

  const id = newId("quo");
  db.query(
    `INSERT INTO custom_quotes
       (id, name, email, phone, company, request_type, city, details, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)`,
  ).run(id, name, email, phone ?? null, company ?? null, requestType, city, details, Date.now());

  return c.json(id);
});

/* ---------- Gestión (admin) ---------- */

leadRoutes.use("*", requireUser);

leadRoutes.get("/jobs", (c) => {
  const user = currentUser(c);
  if (user.role !== "admin") return c.json([]);
  const rows = db
    .query("SELECT * FROM job_applications ORDER BY created_at DESC")
    .all() as Record<string, string | number | null>[];
  return c.json(rows.map(toJobApplication));
});

leadRoutes.post("/jobs/:id/status", async (c) => {
  requireAdmin(currentUser(c));
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const status = unwrap(
    requireOneOf(body, "status", ["new", "reviewing", "accepted", "rejected"] as const, "Estado no válido."),
  );

  const result = db
    .query("UPDATE job_applications SET status = ? WHERE id = ?")
    .run(status, c.req.param("id"));
  if (result.changes === 0) throw new HttpError(404, "Candidatura no encontrada");

  return c.json({ ok: true });
});

leadRoutes.get("/quotes", (c) => {
  const user = currentUser(c);
  if (user.role !== "admin") return c.json([]);
  const rows = db
    .query("SELECT * FROM custom_quotes ORDER BY created_at DESC")
    .all() as Record<string, string | number | null>[];
  return c.json(rows.map(toCustomQuote));
});

leadRoutes.post("/quotes/:id/status", async (c) => {
  requireAdmin(currentUser(c));
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const status = unwrap(
    requireOneOf(body, "status", ["new", "contacted", "closed"] as const, "Estado no válido."),
  );

  const result = db
    .query("UPDATE custom_quotes SET status = ? WHERE id = ?")
    .run(status, c.req.param("id"));
  if (result.changes === 0) throw new HttpError(404, "Solicitud no encontrada");

  return c.json({ ok: true });
});
