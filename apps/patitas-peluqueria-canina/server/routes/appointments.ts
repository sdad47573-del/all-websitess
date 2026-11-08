import { Hono } from "hono";
import type { Env } from "../context";
import {
  availableSlots,
  minutesFor,
  priceFor,
  BONO_DISCOUNT,
  BONO_USES,
  EXTRAS,
  PICKUP_FEE_EUR,
  SERVICES,
} from "../../src/lib/services";
import { currentUser, requireUser, HttpError } from "@app-server";
import {
  db,
  newId,
  toAppointment,
  toBono,
  toWaitlistEntry,
  transaction,
  type Appointment,
} from "../db";
import { sendAppointmentEmail, type EmailKind } from "../email";
import {
  optionalBoolean,
  optionalString,
  requireDate,
  requireId,
  requireString,
  requireTime,
  requireStringArray,
  unwrap,
} from "@app-server";

export const appointmentRoutes = new Hono<Env>();

/**
 * Disponibilidad: pública, como lo era la query de Convex. Solo revela horas
 * libres, ningún dato de clientes, y el wizard la necesita antes de elegir
 * mascota.
 *
 * Se registra ANTES del guard de abajo a propósito: en Hono los handlers corren
 * en orden de registro, así que estas dos responden sin mirar la sesión.
 */
appointmentRoutes.get("/availability", (c) => {
  const date = c.req.query("date") ?? "";
  const durationMin = Number(c.req.query("durationMin"));
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return c.json({ error: "Fecha no válida." }, 400);
  if (!Number.isFinite(durationMin) || durationMin <= 0) {
    return c.json({ error: "Duración no válida." }, 400);
  }
  return c.json(computeAvailability(date, durationMin));
});

appointmentRoutes.get("/day-full", (c) => {
  const date = c.req.query("date") ?? "";
  const durationMin = Number(c.req.query("durationMin"));
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return c.json({ error: "Fecha no válida." }, 400);
  if (!Number.isFinite(durationMin) || durationMin <= 0) {
    return c.json({ error: "Duración no válida." }, 400);
  }
  return c.json({ full: computeAvailability(date, durationMin).length === 0 });
});

// A partir de aquí todo requiere sesión: citas, agenda del salón, bonos y lista
// de espera son datos del usuario.
// La agenda por fecha sí va aquí, a diferencia de en Convex, porque expone las
// citas de todos los clientes del día.
appointmentRoutes.use("*", requireUser);

const asAppointment = (r: unknown) =>
  toAppointment(r as Record<string, string | number | null>);

/* ---------- Consultas ---------- */

appointmentRoutes.get("/", (c) => {
  const rows = db
    .query("SELECT * FROM appointments WHERE user_id = ? ORDER BY date DESC, start DESC")
    .all(currentUser(c)._id) as Record<string, string | number | null>[];
  return c.json(rows.map(asAppointment));
});

/** Agenda del día (todas las citas), usada por el calendario del salón. */
appointmentRoutes.get("/by-date/:date", (c) => {
  const date = c.req.param("date");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return c.json({ error: "Fecha no válida." }, 400);
  const rows = db
    .query("SELECT * FROM appointments WHERE date = ?")
    .all(date) as Record<string, string | number | null>[];
  return c.json(rows.map(asAppointment));
});

function busyBlocks(date: string, exceptId?: string): { start: string; end: string }[] {
  const rows = db
    .query("SELECT id, start, end, status FROM appointments WHERE date = ? AND status != 'cancelled'")
    .all(date) as { id: string; start: string; end: string }[];
  return rows
    .filter((row) => row.id !== exceptId)
    .map((row) => ({ start: row.start, end: row.end }));
}

/**
 * Huecos libres: la comprobación de solapamiento se hace en el servidor igual
 * que en Convex, para que el cliente no sea la única barrera contra una
 * reserva doble.
 */
function computeAvailability(date: string, durationMin: number, exceptId?: string): string[] {
  return availableSlots(date, durationMin, busyBlocks(date, exceptId));
}

/* ---------- Bonos ---------- */

appointmentRoutes.get("/bonos", (c) => {
  const rows = db
    .query("SELECT * FROM bonos WHERE user_id = ? ORDER BY created_at DESC")
    .all(currentUser(c)._id) as Record<string, string | number | null>[];
  return c.json(rows.map(toBono));
});

/**
 * Compra de bono. Simulada, igual que en Convex: se activa al instante y el
 * pago se cobra en el salón.
 */
appointmentRoutes.post("/bonos", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const petId = unwrap(requireId(body, "petId"));
  const serviceKey = unwrap(requireString(body, "serviceKey", { max: 60 }));

  const pet = db.query("SELECT * FROM pets WHERE id = ?").get(petId) as
    | Record<string, string | number | null>
    | null;
  if (!pet || pet.user_id !== user._id) return c.json({ error: "Mascota no encontrada." }, 404);

  const service = SERVICES.find((s) => s.key === serviceKey);
  if (!service) return c.json({ error: "Servicio no disponible." }, 400);

  const size = pet.size as Appointment["petSize"];
  const activeSame = db
    .query(
      `SELECT id FROM bonos
       WHERE pet_id = ? AND service_key = ? AND active = 1 AND uses_used < total_uses`,
    )
    .get(petId, service.key);
  if (activeSame) {
    return c.json(
      { error: "Ya tienes un bono activo de ese servicio para este peludo." },
      409,
    );
  }

  const serviceBaseEur = priceFor(service, size, []);
  const priceEur = Math.round(serviceBaseEur * BONO_USES * (1 - BONO_DISCOUNT) * 100) / 100;
  const now = Date.now();
  const id = newId("bon");

  transaction(() => {
    db.query(
      `INSERT INTO bonos
         (id, user_id, pet_id, service_key, total_uses, uses_used, service_base_eur, price_eur, active, created_at)
       VALUES (?, ?, ?, ?, ?, 0, ?, ?, 1, ?)`,
    ).run(id, user._id, petId, service.key, BONO_USES, serviceBaseEur, priceEur, now);

    insertNotification({
      userId: user._id,
      type: "bono",
      title: "Bono activado",
      body: `${BONO_USES} sesiones de ${service.name} para ${pet.name} por ${priceEur} €`,
      now,
    });
  });

  return c.json(id);
});

/* ---------- Lista de espera ---------- */

appointmentRoutes.get("/waitlist", (c) => {
  const rows = db
    .query("SELECT * FROM waitlist WHERE user_id = ? ORDER BY created_at DESC")
    .all(currentUser(c)._id) as Record<string, string | number | null>[];
  return c.json(rows.map(toWaitlistEntry));
});

appointmentRoutes.post("/waitlist", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const petId = unwrap(requireId(body, "petId"));
  const date = unwrap(requireDate(body, "date"));
  const serviceKey = unwrap(requireString(body, "serviceKey", { max: 60 }));

  const pet = db.query("SELECT * FROM pets WHERE id = ?").get(petId) as
    | Record<string, string | number | null>
    | null;
  if (!pet || pet.user_id !== user._id) return c.json({ error: "Mascota no encontrada." }, 404);

  const service = SERVICES.find((s) => s.key === serviceKey);
  if (!service) return c.json({ error: "Servicio no disponible." }, 400);

  const alreadyWaiting = db
    .query("SELECT id FROM waitlist WHERE date = ? AND user_id = ? AND notified = 0")
    .get(date, user._id);
  if (alreadyWaiting) {
    return c.json({ error: "Ya estás en la lista de espera de ese día." }, 409);
  }

  const id = newId("wlt");
  db.query(
    `INSERT INTO waitlist (id, user_id, pet_id, pet_name, date, service_key, service_name, notified, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)`,
  ).run(id, user._id, petId, pet.name as string, date, service.key, service.name, Date.now());

  return c.json(id);
});

appointmentRoutes.delete("/waitlist/:id", (c) => {
  const id = c.req.param("id");
  const entry = db.query("SELECT user_id FROM waitlist WHERE id = ?").get(id) as
    | { user_id: string }
    | null;
  if (!entry || entry.user_id !== currentUser(c)._id) {
    return c.json({ error: "Entrada no encontrada." }, 404);
  }
  db.query("DELETE FROM waitlist WHERE id = ?").run(id);
  return c.json({ ok: true });
});

/* ---------- Reservas ---------- */

function insertNotification(input: {
  userId: string;
  appointmentId?: string;
  type: string;
  title: string;
  body: string;
  now: number;
}): void {
  db.query(
    `INSERT INTO notifications (id, user_id, appointment_id, type, title, body, created_at, read_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, NULL)`,
  ).run(
    newId("ntf"),
    input.userId,
    input.appointmentId ?? null,
    input.type,
    input.title,
    input.body,
    input.now,
  );
}

function computeEnd(start: string, durationMin: number): string {
  const [h, m] = start.split(":").map(Number);
  const endMin = h * 60 + m + durationMin;
  return `${String(Math.floor(endMin / 60)).padStart(2, "0")}:${String(endMin % 60).padStart(2, "0")}`;
}

appointmentRoutes.post("/", async (c) => {
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const petId = unwrap(requireId(body, "petId"));
  const serviceKey = unwrap(requireString(body, "serviceKey", { max: 60 }));
  const date = unwrap(requireDate(body, "date"));
  const start = unwrap(requireTime(body, "start"));
  const extraKeys = unwrap(requireStringArray(body, "extraKeys"));
  const pickup = unwrap(optionalBoolean(body, "pickup"));
  const notes = unwrap(optionalString(body, "notes"));
  const useBonoId = unwrap(optionalString(body, "useBonoId", { max: 60 }));

  const pet = db.query("SELECT * FROM pets WHERE id = ?").get(petId) as
    | Record<string, string | number | null>
    | null;
  if (!pet || pet.user_id !== user._id) {
    return c.json({ error: "Mascota no encontrada." }, 404);
  }

  const service = SERVICES.find((s) => s.key === serviceKey);
  if (!service) return c.json({ error: "Servicio no disponible." }, 400);

  const size = pet.size as Appointment["petSize"];
  const validExtras = extraKeys.filter((key) => EXTRAS.some((e) => e.key === key));
  const durationMin = minutesFor(service, size, validExtras);

  // Revalidamos disponibilidad dentro de la transacción: entre leer los huecos
  // e insertar la cita no puede colarse otra reserva para la misma mesa.
  const appointmentId = transaction(() => {
    const slots = availableSlots(date, durationMin, busyBlocks(date));
    if (!slots.includes(start)) {
      throw new HttpError(409, "Ese hueco acaba de ocuparse. Elige otro, por favor.");
    }

    let bonoId: string | undefined;
    let price = priceFor(service, size, validExtras);

    if (useBonoId) {
      const bono = db.query("SELECT * FROM bonos WHERE id = ?").get(useBonoId) as
        | Record<string, string | number | null>
        | null;
      if (
        !bono ||
        bono.user_id !== user._id ||
        !bono.active ||
        (bono.uses_used as number) >= (bono.total_uses as number)
      ) {
        throw new HttpError(400, "El bono seleccionado no está disponible.");
      }
      if (bono.pet_id !== petId) throw new HttpError(400, "Ese bono es para otro peludo.");
      if (bono.service_key !== service.key) throw new HttpError(400, "Ese bono cubre otro servicio.");

      bonoId = useBonoId;
      // Los extras no los cubre el bono, así que solo se cobra su parte.
      const extrasPrice = price - priceFor(service, size, []);
      price = Math.round(extrasPrice * 100) / 100;
    } else if (pickup) {
      price = Math.round((price + PICKUP_FEE_EUR) * 100) / 100;
    }

    const previousCount = db
      .query("SELECT COUNT(*) AS n FROM appointments WHERE user_id = ?")
      .get(user._id) as { n: number };
    const promoKey = previousCount.n === 0 ? "bienvenida" : null;

    const now = Date.now();
    const id = newId("apt");
    db.query(
      `INSERT INTO appointments
         (id, user_id, pet_id, pet_name, pet_size, service_key, service_name, extra_keys, date, start, end,
          duration_min, price, pickup, bono_id, notes, status, promo_key, reminded_at, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'confirmed', ?, NULL, ?)`,
    ).run(
      id,
      user._id,
      petId,
      pet.name as string,
      size,
      service.key,
      service.name,
      JSON.stringify(validExtras),
      date,
      start,
      computeEnd(start, durationMin),
      durationMin,
      price,
      pickup ? 1 : null,
      bonoId ?? null,
      notes ?? null,
      promoKey,
      now,
    );

    if (bonoId) {
      const bono = db.query("SELECT uses_used, total_uses FROM bonos WHERE id = ?").get(bonoId) as
        | { uses_used: number; total_uses: number }
        | null;
      if (bono) {
        const usesUsed = bono.uses_used + 1;
        db.query("UPDATE bonos SET uses_used = ?, active = ? WHERE id = ?").run(
          usesUsed,
          usesUsed < bono.total_uses ? 1 : 0,
          bonoId,
        );
      }
    }

    insertNotification({
      userId: user._id,
      appointmentId: id,
      type: "confirmation",
      title: "Cita confirmada",
      body: `${pet.name} · ${service.name} · ${date} ${start}`,
      now,
    });

    return id;
  });

  // El email va fuera de la transacción: un proveedor caído no debe tumbar la
  // reserva que ya está guardada.
  queueEmail({ userId: user._id, appointmentId, kind: "confirmation" });

  return c.json(appointmentId);
});appointmentRoutes.post("/:id/cancel", (c) => {
  const appointmentId = c.req.param("id");
  const user = currentUser(c);

  const freed: { userId: string; waitlistId: string }[] = [];

  transaction(() => {
    const appt = db.query("SELECT * FROM appointments WHERE id = ?").get(appointmentId) as
      | Record<string, string | number | null>
      | null;
    if (!appt || appt.user_id !== user._id) throw new HttpError(404, "Cita no encontrada.");
    if (appt.status === "completed") {
      throw new HttpError(400, "Una cita completada no se puede cancelar.");
    }

    const now = Date.now();
    db.query("UPDATE appointments SET status = 'cancelled' WHERE id = ?").run(appointmentId);

    // Devolver el uso del bono si la cita lo consumía.
    const bonoId = appt.bono_id;
    if (bonoId) {
      const bono = db.query("SELECT uses_used FROM bonos WHERE id = ?").get(bonoId) as
        | { uses_used: number }
        | null;
      if (bono) {
        const usesUsed = Math.max(0, bono.uses_used - 1);
        db.query("UPDATE bonos SET uses_used = ?, active = 1 WHERE id = ?").run(usesUsed, bonoId);
      }
    }

    // Avisar a la lista de espera de ese día.
    const waiting = db
      .query("SELECT id, user_id FROM waitlist WHERE date = ? AND notified = 0")
      .all(appt.date as string) as { id: string; user_id: string }[];

    for (const entry of waiting) {
      db.query("UPDATE waitlist SET notified = 1 WHERE id = ?").run(entry.id);
      insertNotification({
        userId: entry.user_id,
        type: "slot-freed",
        title: "Se ha liberado un hueco",
        body: `Quedó sitio el ${appt.date}. ¡Corre a reservar!`,
        now,
      });
      freed.push({ userId: entry.user_id, waitlistId: entry.id });
    }

    insertNotification({
      userId: user._id,
      appointmentId,
      type: "cancellation",
      title: "Cita cancelada",
      body: `${appt.pet_name} · ${appt.date} ${appt.start}`,
      now,
    });
  });

  for (const entry of freed) {
    queueEmail({
      userId: entry.userId,
      appointmentId,
      kind: "slot-freed",
      waitlistId: entry.waitlistId,
    });
  }
  queueEmail({ userId: user._id, appointmentId, kind: "cancellation" });

  return c.json(appointmentId);
});

appointmentRoutes.post("/:id/reschedule", async (c) => {
  const appointmentId = c.req.param("id");
  const body = (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const user = currentUser(c);

  const date = unwrap(requireDate(body, "date"));
  const start = unwrap(requireTime(body, "start"));

  transaction(() => {
    const appt = db.query("SELECT * FROM appointments WHERE id = ?").get(appointmentId) as
      | Record<string, string | number | null>
      | null;
    if (!appt || appt.user_id !== user._id) throw new HttpError(404, "Cita no encontrada.");
    if (appt.status === "cancelled" || appt.status === "completed") {
      throw new HttpError(400, "Solo se pueden mover citas activas.");
    }

    const durationMin = appt.duration_min as number;
    const slots = availableSlots(date, durationMin, busyBlocks(date, appointmentId));
    if (!slots.includes(start)) {
      throw new HttpError(409, "Ese hueco no está disponible. Elige otro, por favor.");
    }

    db.query(
      "UPDATE appointments SET date = ?, start = ?, end = ?, reminded_at = NULL WHERE id = ?",
    ).run(date, start, computeEnd(start, durationMin), appointmentId);

    insertNotification({
      userId: user._id,
      appointmentId,
      type: "reschedule",
      title: "Cita movida",
      body: `${appt.pet_name} · nueva fecha ${date} ${start}`,
      now: Date.now(),
    });
  });

  queueEmail({ userId: user._id, appointmentId, kind: "reschedule" });

  return c.json(appointmentId);
});

/* ---------- Emails en segundo plano ---------- */

/**
 * Lanza el envío sin esperar: la ruta responde en cuanto la cita está
 * guardada, y un proveedor caído no tumba la reserva. Los errores se registran
 * y se tragan a propósito.
 */
function queueEmail(args: {
  userId: string;
  kind: EmailKind;
  appointmentId?: string;
  waitlistId?: string;
}): void {
  void sendAppointmentEmail(args).catch((error) => {
    console.error("[emails] fallo enviando", args.kind, error);
  });
}

