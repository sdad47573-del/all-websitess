import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";
import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import {
  deviceKindValidator,
  deviceStatusValidator,
  incidentStatusValidator,
  riskValidator,
  severityValidator,
  siteSectorValidator,
  type DeviceKind,
  type DeviceStatus,
  type IncidentStatus,
  type RiskLevel,
  type Severity,
  type SiteSector,
} from "./schema";

const DAY = 24 * 60 * 60 * 1000;

async function requireOwnerId(ctx: QueryCtx | MutationCtx): Promise<Id<"users">> {
  const ownerId = await getAuthUserId(ctx);
  if (ownerId === null) throw new Error("Debes iniciar sesion para usar esta funcion.");
  return ownerId;
}

// --- Consultas ---------------------------------------------------------------

export const listSites = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const sites = await ctx.db
      .query("sites")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return sites.sort((a, b) => a.nextVisitAt - b.nextVisitAt);
  },
});

export const listDevices = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    return await ctx.db
      .query("devices")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
  },
});

export const listIncidents = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const incidents = await ctx.db
      .query("incidents")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return incidents.sort((a, b) => b.reportedAt - a.reportedAt);
  },
});

// --- Mutaciones --------------------------------------------------------------

/** Crea una trampa / sensor en un sitio propio. */
export const createDevice = mutation({
  args: {
    siteId: v.id("sites"),
    code: v.string(),
    kind: deviceKindValidator,
    pest: v.string(),
    bait: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const site = await ctx.db.get(args.siteId);
    if (!site || site.ownerId !== ownerId) throw new Error("Sitio no encontrado.");
    return await ctx.db.insert("devices", {
      ownerId,
      siteId: args.siteId,
      code: args.code,
      kind: args.kind,
      pest: args.pest,
      status: "ok",
      count: 0,
      bait: args.bait ?? 100,
      lastReadingAt: Date.now(),
    });
  },
});

/** Registra una lectura de trampa: captura y estado. */
export const logReading = mutation({
  args: {
    deviceId: v.id("devices"),
    count: v.number(),
    status: deviceStatusValidator,
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const device = await ctx.db.get(args.deviceId);
    if (!device || device.ownerId !== ownerId) throw new Error("Trampa no encontrada.");
    const count = Math.max(0, Math.round(args.count));
    await ctx.db.patch(device._id, {
      count,
      status: args.status,
      lastReadingAt: Date.now(),
    });
    // El historico de lecturas alimenta las tendencias de la trampa.
    await ctx.db.insert("readings", {
      ownerId,
      deviceId: device._id,
      count,
      bait: device.bait,
      status: args.status,
      readAt: Date.now(),
    });
    return await openThresholdIncident(ctx, ownerId, device, count);
  },
});

/**
 * Umbral de accion: si la lectura supera el limite de la plaga, se crea la
 * incidencia y la trampa pasa a critico sin intervencion manual.
 */
async function openThresholdIncident(
  ctx: MutationCtx,
  ownerId: Id<"users">,
  device: { _id: Id<"devices">; siteId: Id<"sites">; pest: string; code: string; count: number; status: string },
  count: number,
) {
  const threshold = await ctx.db
    .query("thresholds")
    .withIndex("by_owner_pest", (q) =>
      q.eq("ownerId", ownerId).eq("pest", device.pest),
    )
    .first();
  if (!threshold || count < threshold.limit) return null;
  if (device.status === "critico") return null;

  await ctx.db.patch(device._id, { status: "critico" });
  return await ctx.db.insert("incidents", {
    ownerId,
    siteId: device.siteId,
    deviceId: device._id,
    title: `Umbral de acción superado en ${device.code}`,
    pest: device.pest,
    severity: "alta",
    status: "abierta",
    reportedAt: Date.now(),
    actions: [`Lectura de ${count} capturas (límite ${threshold.limit})`],
  });
}

export const listThresholds = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    return await ctx.db
      .query("thresholds")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
  },
});

/** Fija el umbral de acción de una plaga. */
export const setThreshold = mutation({
  args: { pest: v.string(), limit: v.number() },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const existing = await ctx.db
      .query("thresholds")
      .withIndex("by_owner_pest", (q) =>
        q.eq("ownerId", ownerId).eq("pest", args.pest),
      )
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, { limit: Math.max(1, Math.round(args.limit)) });
      return existing._id;
    }
    return await ctx.db.insert("thresholds", {
      ownerId,
      pest: args.pest,
      limit: Math.max(1, Math.round(args.limit)),
    });
  },
});

export const listProducts = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    return await ctx.db
      .query("products")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
  },
});

/** Crea o actualiza un material del almacén. */
export const upsertProduct = mutation({
  args: {
    productId: v.optional(v.id("products")),
    name: v.string(),
    registration: v.string(),
    unit: v.string(),
    stock: v.number(),
    minStock: v.number(),
    cost: v.number(),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const values = {
      name: args.name,
      registration: args.registration,
      unit: args.unit,
      stock: Math.max(0, args.stock),
      minStock: Math.max(0, args.minStock),
      cost: Math.max(0, args.cost),
      updatedAt: Date.now(),
    };
    if (args.productId) {
      const existing = await ctx.db.get(args.productId);
      if (!existing || existing.ownerId !== ownerId)
        throw new Error("Material no encontrado.");
      await ctx.db.patch(args.productId, values);
      return args.productId;
    }
    return await ctx.db.insert("products", { ownerId, ...values });
  },
});

/** Rellena el cebo de una trampa. */
export const refillBait = mutation({
  args: { deviceId: v.id("devices") },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const device = await ctx.db.get(args.deviceId);
    if (!device || device.ownerId !== ownerId) throw new Error("Trampa no encontrada.");
    await ctx.db.patch(device._id, {
      bait: 100,
      lastReadingAt: Date.now(),
      status: device.status === "critico" ? "alerta" : device.status,
    });
  },
});

/** Abre una incidencia de plaga. */
export const createIncident = mutation({
  args: {
    siteId: v.id("sites"),
    deviceId: v.optional(v.id("devices")),
    title: v.string(),
    pest: v.string(),
    severity: severityValidator,
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const site = await ctx.db.get(args.siteId);
    if (!site || site.ownerId !== ownerId) throw new Error("Sitio no encontrado.");
    return await ctx.db.insert("incidents", {
      ownerId,
      siteId: args.siteId,
      deviceId: args.deviceId,
      title: args.title,
      pest: args.pest,
      severity: args.severity,
      status: "abierta",
      reportedAt: Date.now(),
    });
  },
});

/** Avanza el estado de una incidencia y guarda las acciones aplicadas. */
export const updateIncident = mutation({
  args: {
    incidentId: v.id("incidents"),
    status: incidentStatusValidator,
    action: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const incident = await ctx.db.get(args.incidentId);
    if (!incident || incident.ownerId !== ownerId)
      throw new Error("Incidencia no encontrada.");
    const actions = args.action
      ? [...(incident.actions ?? []), args.action]
      : incident.actions;
    await ctx.db.patch(incident._id, {
      status: args.status,
      actions,
      resolvedAt: args.status === "resuelta" ? Date.now() : incident.resolvedAt,
    });
  },
});

/** Crea un cliente nuevo con su primera visita programada. */
export const createSite = mutation({
  args: {
    name: v.string(),
    contact: v.string(),
    address: v.string(),
    city: v.string(),
    sector: siteSectorValidator,
    risk: riskValidator,
    daysUntilVisit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    return await ctx.db.insert("sites", {
      ownerId,
      name: args.name,
      contact: args.contact,
      address: args.address,
      city: args.city,
      sector: args.sector,
      risk: args.risk,
      active: true,
      nextVisitAt: Date.now() + (args.daysUntilVisit ?? 7) * DAY,
      portalToken: crypto.randomUUID().slice(0, 8),
      createdAt: Date.now(),
    });
  },
});

/** Re-programa la proxima visita de un sitio tras la asistencia en campo. */
export const scheduleVisit = mutation({
  args: {
    siteId: v.id("sites"),
    daysUntilVisit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const site = await ctx.db.get(args.siteId);
    if (!site || site.ownerId !== ownerId) throw new Error("Sitio no encontrado.");
    await ctx.db.patch(site._id, {
      nextVisitAt: Date.now() + (args.daysUntilVisit ?? 7) * DAY,
    });
  },
});

// --- Rutas, ordenes de trabajo y facturacion -------------------------------

export const listVisits = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const visits = await ctx.db
      .query("visits")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return visits.sort((a, b) => a.scheduledFor - b.scheduledFor);
  },
});

export const listInvoices = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const invoices = await ctx.db
      .query("invoices")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return invoices.sort((a, b) => b.issuedAt - a.issuedAt);
  },
});

export const listLeads = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const leads = await ctx.db
      .query("leads")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return leads.sort((a, b) => b.createdAt - a.createdAt);
  },
});

/** Crea la visita recurrente que toque en cada sitio activo (idempotente). */
export const generateSchedule = mutation({
  args: { daysAhead: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const horizon = Date.now() + (args.daysAhead ?? 30) * DAY;
    const sites = await ctx.db
      .query("sites")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();

    let created = 0;
    for (const site of sites) {
      if (!site.active) continue;
      const cadence = site.cadenceDays ?? 30;
      let date = site.nextVisitAt;
      if (date < Date.now()) date = Date.now();

      while (date <= horizon) {
        const dayStart = new Date(date).setHours(0, 0, 0, 0);
        const existing = await ctx.db
          .query("visits")
          .withIndex("by_site", (q) => q.eq("siteId", site._id))
          .collect();
        const sameDay = existing.some(
          (v) => new Date(v.scheduledFor).setHours(0, 0, 0, 0) === dayStart,
        );
        if (!sameDay) {
          await ctx.db.insert("visits", {
            ownerId,
            siteId: site._id,
            scheduledFor: date,
            status: "programada",
            serviceType: "Control preventivo",
            technician: site.technician ?? "Sin asignar",
          });
          created += 1;
        }
        date += cadence * DAY;
      }

      if (date > site.nextVisitAt) {
        await ctx.db.patch(site._id, { nextVisitAt: date });
      }
    }
    return created;
  },
});

/** Cierra la visita: registra productos, firma y emite la factura al instante. */
export const completeVisit = mutation({
  args: {
    visitId: v.id("visits"),
    products: v.optional(
      v.array(
        v.object({
          name: v.string(),
          dose: v.string(),
          registration: v.string(),
        }),
      ),
    ),
    notes: v.optional(v.string()),
    signature: v.optional(v.string()),
    amount: v.optional(v.number()),
    consumptions: v.optional(
      v.array(v.object({ productId: v.id("products"), quantity: v.number() })),
    ),
    checklist: v.optional(
      v.array(
        v.object({
          area: v.string(),
          ok: v.boolean(),
          note: v.optional(v.string()),
        }),
      ),
    ),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const visit = await ctx.db.get(args.visitId);
    if (!visit || visit.ownerId !== ownerId) throw new Error("Visita no encontrada.");
    const site = await ctx.db.get(visit.siteId);
    if (!site) throw new Error("Sitio no encontrado.");
    if (visit.status === "completada") return null;

    const now = Date.now();
    await ctx.db.patch(visit._id, {
      status: "completada",
      completedAt: now,
      products: args.products ?? [],
      notes: args.notes,
      signature: args.signature,
      checklist: args.checklist,
    });

    // Consumo de material: el almacen descuenta lo aplicado en campo.
    for (const consumption of args.consumptions ?? []) {
      const product = await ctx.db.get(consumption.productId);
      if (!product || product.ownerId !== ownerId) continue;
      await ctx.db.patch(product._id, {
        stock: Math.max(0, product.stock - Math.max(0, consumption.quantity)),
        updatedAt: now,
      });
    }

    // Facturacion automatica: la factura sale al cerrar el trabajo.
    const issued = await ctx.db
      .query("invoices")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    const amount = args.amount ?? site.monthlyFee ?? 0;
    const invoiceId = await ctx.db.insert("invoices", {
      ownerId,
      siteId: site._id,
      visitId: visit._id,
      number: `FAC-${new Date(now).getFullYear()}-${String(issued.length + 1).padStart(4, "0")}`,
      concept: visit.serviceType,
      amount,
      status: "pendiente",
      issuedAt: now,
    });

    // La proxima visita del contrato se programa sola tras el cierre.
    const cadence = site.cadenceDays ?? 30;
    await ctx.db.patch(site._id, { nextVisitAt: now + cadence * DAY });
    return invoiceId;
  },
});

/** Marca una factura como cobrada. */
export const markInvoicePaid = mutation({
  args: { invoiceId: v.id("invoices") },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const invoice = await ctx.db.get(args.invoiceId);
    if (!invoice || invoice.ownerId !== ownerId)
      throw new Error("Factura no encontrada.");
    await ctx.db.patch(invoice._id, { status: "pagada", paidAt: Date.now() });
  },
});

/** Anota un contacto nuevo en el CRM. */
export const createLead = mutation({
  args: {
    name: v.string(),
    contact: v.string(),
    city: v.string(),
    sector: v.optional(siteSectorValidator),
    pest: v.optional(v.string()),
    monthlyFee: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    return await ctx.db.insert("leads", {
      ownerId,
      name: args.name,
      contact: args.contact,
      city: args.city,
      sector: args.sector,
      pest: args.pest,
      monthlyFee: args.monthlyFee,
      status: "nuevo",
      createdAt: Date.now(),
    });
  },
});

/** Avanza el lead por el embudo. */
export const updateLead = mutation({
  args: {
    leadId: v.id("leads"),
    status: v.union(
      v.literal("nuevo"),
      v.literal("presupuestado"),
      v.literal("ganado"),
      v.literal("perdido"),
    ),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const lead = await ctx.db.get(args.leadId);
    if (!lead || lead.ownerId !== ownerId) throw new Error("Lead no encontrado.");
    await ctx.db.patch(lead._id, { status: args.status });
  },
});

/** Convierte un lead ganado en cliente activo con su primera visita. */
export const convertLead = mutation({
  args: { leadId: v.id("leads") },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const lead = await ctx.db.get(args.leadId);
    if (!lead || lead.ownerId !== ownerId) throw new Error("Lead no encontrado.");
    const cadence = 30;
    const siteId = await ctx.db.insert("sites", {
      ownerId,
      name: lead.name,
      contact: lead.contact,
      address: "Dirección por confirmar",
      city: lead.city,
      sector: lead.sector ?? "vivienda",
      risk: "medium",
      active: true,
      nextVisitAt: Date.now() + 3 * DAY,
      cadenceDays: cadence,
      technician: "Sin asignar",
      monthlyFee: lead.monthlyFee ?? 0,
      portalToken: crypto.randomUUID().slice(0, 8),
      createdAt: Date.now(),
    });
    await ctx.db.patch(lead._id, { status: "ganado" });
    return siteId;
  },
});

// --- Presupuestos comerciales ------------------------------------------------

export const listQuotes = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const quotes = await ctx.db
      .query("quotes")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return quotes.sort((a, b) => b.createdAt - a.createdAt);
  },
});

export const createQuote = mutation({
  args: {
    leadId: v.optional(v.id("leads")),
    clientName: v.string(),
    contact: v.string(),
    city: v.string(),
    sector: v.optional(siteSectorValidator),
    lines: v.array(
      v.object({
        concept: v.string(),
        quantity: v.number(),
        price: v.number(),
      }),
    ),
    validDays: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const total = args.lines.reduce(
      (acc, line) => acc + Math.max(0, line.price) * Math.max(0, line.quantity),
      0,
    );
    return await ctx.db.insert("quotes", {
      ownerId,
      leadId: args.leadId,
      clientName: args.clientName,
      contact: args.contact,
      city: args.city,
      sector: args.sector,
      lines: args.lines,
      total,
      status: "borrador",
      validUntil: Date.now() + (args.validDays ?? 30) * DAY,
      portalToken: crypto.randomUUID().slice(0, 8),
      createdAt: Date.now(),
    });
  },
});

export const updateQuote = mutation({
  args: {
    quoteId: v.id("quotes"),
    status: v.union(
      v.literal("borrador"),
      v.literal("enviado"),
      v.literal("aceptado"),
      v.literal("rechazado"),
    ),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const quote = await ctx.db.get(args.quoteId);
    if (!quote || quote.ownerId !== ownerId)
      throw new Error("Presupuesto no encontrado.");
    await ctx.db.patch(quote._id, { status: args.status });
  },
});

/** Aceptar el presupuesto crea el cliente y su primera visita programada. */
export const acceptQuote = mutation({
  args: { quoteId: v.id("quotes") },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const quote = await ctx.db.get(args.quoteId);
    if (!quote || quote.ownerId !== ownerId)
      throw new Error("Presupuesto no encontrado.");
    if (quote.status === "aceptado") return null;

    // La tarifa del presupuesto es la cuota mensual del nuevo contrato.
    const monthlyFee = Math.round(
      quote.lines.reduce((acc, line) => acc + line.price, 0) /
        Math.max(1, quote.lines.length),
    );
    const siteId = await ctx.db.insert("sites", {
      ownerId,
      name: quote.clientName,
      contact: quote.contact,
      address: "Dirección por confirmar",
      city: quote.city,
      sector: quote.sector ?? "vivienda",
      risk: "medium",
      active: true,
      nextVisitAt: Date.now() + 3 * DAY,
      cadenceDays: 30,
      technician: "Sin asignar",
      monthlyFee,
      portalToken: crypto.randomUUID().slice(0, 8),
      createdAt: Date.now(),
    });

    await ctx.db.insert("visits", {
      ownerId,
      siteId,
      scheduledFor: Date.now() + 3 * DAY,
      status: "programada",
      serviceType: "Visita inicial",
      technician: "Sin asignar",
    });

    await ctx.db.patch(quote._id, { status: "aceptado" });
    if (quote.leadId) {
      const lead = await ctx.db.get(quote.leadId);
      if (lead && lead.ownerId === ownerId) {
        await ctx.db.patch(lead._id, { status: "ganado" });
      }
    }
    return siteId;
  },
});

/** Presupuesto suelto para el informe imprimible. */
export const quoteById = query({
  args: { quoteId: v.id("quotes") },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const quote = await ctx.db.get(args.quoteId);
    if (!quote || quote.ownerId !== ownerId) return null;
    return quote;
  },
});

/** Publico: propuesta que el cliente revisa y acepta desde su enlace. */
export const quoteByToken = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const found = await ctx.db
      .query("quotes")
      .withIndex("by_portal_token", (q) => q.eq("portalToken", args.token))
      .first();
    if (!found) return null;
    return {
      _id: found._id,
      clientName: found.clientName,
      contact: found.contact,
      city: found.city,
      sector: found.sector,
      lines: found.lines,
      total: found.total,
      status: found.status,
      validUntil: found.validUntil,
    };
  },
});

/** Publico: el cliente acepta o rechaza la propuesta. */
export const respondQuote = mutation({
  args: { token: v.string(), quoteId: v.id("quotes"), accept: v.boolean() },
  handler: async (ctx, args) => {
    const quote = await ctx.db.get(args.quoteId);
    if (!quote || quote.portalToken !== args.token)
      throw new Error("Propuesta no valida.");
    if (quote.status === "aceptado" || quote.status === "rechazado") return;

    if (!args.accept) {
      await ctx.db.patch(quote._id, { status: "rechazado" });
      return;
    }

    const ownerId = quote.ownerId;
    const monthlyFee = Math.round(
      quote.lines.reduce((acc, line) => acc + line.price, 0) /
        Math.max(1, quote.lines.length),
    );
    const siteId = await ctx.db.insert("sites", {
      ownerId,
      name: quote.clientName,
      contact: quote.contact,
      address: "Dirección por confirmar",
      city: quote.city,
      sector: quote.sector ?? "vivienda",
      risk: "medium",
      active: true,
      nextVisitAt: Date.now() + 3 * DAY,
      cadenceDays: 30,
      technician: "Sin asignar",
      monthlyFee,
      portalToken: crypto.randomUUID().slice(0, 8),
      createdAt: Date.now(),
    });
    await ctx.db.insert("visits", {
      ownerId,
      siteId,
      scheduledFor: Date.now() + 3 * DAY,
      status: "programada",
      serviceType: "Visita inicial",
      technician: "Sin asignar",
    });
    await ctx.db.patch(quote._id, { status: "aceptado" });
    if (quote.leadId) {
      const lead = await ctx.db.get(quote.leadId);
      if (lead && lead.ownerId === ownerId) {
        await ctx.db.patch(lead._id, { status: "ganado" });
      }
    }
  },
});

/** Publico: el cliente registra el pago de una factura desde su portal. */
export const payInvoiceFromPortal = mutation({
  args: {
    token: v.string(),
    invoiceId: v.id("invoices"),
    method: v.string(),
  },
  handler: async (ctx, args) => {
    const site = await ctx.db
      .query("sites")
      .withIndex("by_portal_token", (q) => q.eq("portalToken", args.token))
      .first();
    if (!site) throw new Error("Portal no valido.");
    const invoice = await ctx.db.get(args.invoiceId);
    if (!invoice || invoice.siteId !== site._id)
      throw new Error("Factura no valida.");
    if (invoice.status === "pagada") return;
    await ctx.db.patch(invoice._id, {
      status: "pagada",
      paidAt: Date.now(),
      paymentMethod: args.method,
    });
  },
});

// --- Credenciales e informe de visita ---------------------------------------

export const listCredentials = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const credentials = await ctx.db
      .query("credentials")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return credentials.sort((a, b) => a.expiresAt - b.expiresAt);
  },
});

export const createCredential = mutation({
  args: {
    technician: v.string(),
    kind: v.string(),
    code: v.string(),
    issuedAt: v.number(),
    expiresAt: v.number(),
  },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    return await ctx.db.insert("credentials", { ownerId, ...args });
  },
});

/** Informe completo de una visita para el reporte imprimible. */
export const visitReport = query({
  args: { visitId: v.id("visits") },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const visit = await ctx.db.get(args.visitId);
    if (!visit || visit.ownerId !== ownerId) return null;
    const site = await ctx.db.get(visit.siteId);
    if (!site) return null;
    const devices = await ctx.db
      .query("devices")
      .withIndex("by_site", (q) => q.eq("siteId", site._id))
      .collect();
    const invoice = (
      await ctx.db
        .query("invoices")
        .withIndex("by_site", (q) => q.eq("siteId", site._id))
        .collect()
    ).find((i) => i.visitId === args.visitId);
    return { visit, site, devices, invoice };
  },
});

// --- Historico de lecturas, reseñas y portal de cliente ---------------------

export const listReadings = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const readings = await ctx.db
      .query("readings")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return readings.sort((a, b) => a.readAt - b.readAt);
  },
});

export const listReviews = query({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const reviews = await ctx.db
      .query("reviews")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .collect();
    return reviews.sort((a, b) => b.createdAt - a.createdAt);
  },
});

/** Pide al cliente que valore el trabajo tras una visita cerrada. */
export const requestReview = mutation({
  args: { visitId: v.id("visits") },
  handler: async (ctx, args) => {
    const ownerId = await requireOwnerId(ctx);
    const visit = await ctx.db.get(args.visitId);
    if (!visit || visit.ownerId !== ownerId) throw new Error("Visita no encontrada.");
    if (visit.status !== "completada")
      throw new Error("Solo se puede solicitar valoracion de visitas cerradas.");
    const existing = (await ctx.db
      .query("reviews")
      .withIndex("by_site", (q) => q.eq("siteId", visit.siteId))
      .collect()).find((r) => r.visitId === args.visitId);
    if (existing) return existing._id;
    return await ctx.db.insert("reviews", {
      ownerId,
      siteId: visit.siteId,
      visitId: args.visitId,
      status: "solicitada",
      createdAt: Date.now(),
    });
  },
});

/** Publico: ficha del cliente para su portal, sin exponer datos de la cuenta. */
export const portalByToken = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const site = await ctx.db
      .query("sites")
      .withIndex("by_portal_token", (q) => q.eq("portalToken", args.token))
      .first();
    if (!site) return null;

    const visits = await ctx.db
      .query("visits")
      .withIndex("by_site", (q) => q.eq("siteId", site._id))
      .collect();
    const invoices = await ctx.db
      .query("invoices")
      .withIndex("by_site", (q) => q.eq("siteId", site._id))
      .collect();
    const devices = await ctx.db
      .query("devices")
      .withIndex("by_site", (q) => q.eq("siteId", site._id))
      .collect();
    const reviews = await ctx.db
      .query("reviews")
      .withIndex("by_site", (q) => q.eq("siteId", site._id))
      .collect();
    const pendingReview = reviews.find((r) => r.status === "solicitada");

    return {
      name: site.name,
      city: site.city,
      address: site.address,
      cadenceDays: site.cadenceDays ?? 30,
      nextVisitAt: site.nextVisitAt,
      visits: visits
        .sort((a, b) => b.scheduledFor - a.scheduledFor)
        .map((v) => ({
          _id: v._id,
          scheduledFor: v.scheduledFor,
          completedAt: v.completedAt,
          status: v.status,
          serviceType: v.serviceType,
          technician: v.technician,
          notes: v.notes,
          products: v.products ?? [],
        })),
      invoices: invoices
        .sort((a, b) => b.issuedAt - a.issuedAt)
        .map((i) => ({
          _id: i._id,
          number: i.number,
          concept: i.concept,
          amount: i.amount,
          status: i.status,
          issuedAt: i.issuedAt,
        })),
      devices: devices.map((d) => ({
        _id: d._id,
        code: d.code,
        kind: d.kind,
        pest: d.pest,
        status: d.status,
        count: d.count,
        lastReadingAt: d.lastReadingAt,
      })),
      pendingReview: pendingReview ? { reviewId: pendingReview._id } : null,
    };
  },
});

/** Publico: el cliente valora la atencion recibida. */
export const submitReview = mutation({
  args: {
    reviewId: v.id("reviews"),
    token: v.string(),
    rating: v.number(),
    comment: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const site = await ctx.db
      .query("sites")
      .withIndex("by_portal_token", (q) => q.eq("portalToken", args.token))
      .first();
    if (!site) throw new Error("Portal no valido.");
    const review = await ctx.db.get(args.reviewId);
    if (!review || review.siteId !== site._id) throw new Error("Valoracion no valida.");
    if (review.status === "respondida") return;
    await ctx.db.patch(review._id, {
      status: "respondida",
      rating: Math.min(5, Math.max(1, Math.round(args.rating))),
      comment: args.comment?.trim() || undefined,
      answeredAt: Date.now(),
    });
  },
});

// --- Datos de demo -----------------------------------------------------------

type DemoSite = {
  name: string;
  contact: string;
  address: string;
  city: string;
  sector: SiteSector;
  risk: RiskLevel;
  daysUntilVisit: number;
  cadenceDays: number;
  technician: string;
  monthlyFee: number;
  lat: number;
  lng: number;
  devices: {
    code: string;
    kind: DeviceKind;
    pest: string;
    count: number;
    bait: number;
    status: DeviceStatus;
  }[];
  incidents: {
    title: string;
    pest: string;
    severity: Severity;
    status: IncidentStatus;
    daysAgo: number;
    actions?: string[];
  }[];
};

const DEMO: DemoSite[] = [
  {
    name: "Restaurante La Abuela",
    contact: "Marisol Rivas · +34 600 112 233",
    address: "Calle Mayor 14, bajo",
    city: "Valencia",
    sector: "restaurante",
    risk: "high",
    daysUntilVisit: 0,
    cadenceDays: 15,
    technician: "Tecnico A",
    monthlyFee: 185,
    lat: 39.4742,
    lng: -0.3765,
    devices: [
      { code: "R-01", kind: "insectocutor", pest: "Blattella germanica", count: 48, bait: 60, status: "critico" },
      { code: "R-02", kind: "roentera", pest: "Rattus norvegicus", count: 12, bait: 35, status: "alerta" },
      { code: "R-03", kind: "cinta_monitoreo", pest: "Blattella germanica", count: 5, bait: 100, status: "ok" },
    ],
    incidents: [
      {
        title: "Plaga deroaches en cocina y zona de barra",
        pest: "Blattella germanica",
        severity: "critica",
        status: "en_curso",
        daysAgo: 2,
        actions: ["Sellado de canaletas", "Gel bioncida en zocalos"],
      },
    ],
  },
  {
    name: "Almacén Logístico Sur",
    contact: "Iván Peralta · +34 611 908 745",
    address: "Pol. Ind. Fuente del Jarro, nave 7",
    city: "Valencia",
    sector: "almacen",
    risk: "medium",
    daysUntilVisit: 1,
    cadenceDays: 30,
    technician: "Tecnico B",
    monthlyFee: 140,
    lat: 39.5201,
    lng: -0.3312,
    devices: [
      { code: "A-11", kind: "trampa_luz", pest: "Plodia interpuncta", count: 22, bait: 100, status: "alerta" },
      { code: "A-12", kind: "roentera", pest: "Mus musculus", count: 3, bait: 80, status: "ok" },
      { code: "A-13", kind: "trampa_suelo", pest: "Rattus norvegicus", count: 1, bait: 90, status: "ok" },
    ],
    incidents: [
      {
        title: "Polilla en palet de harina, pasillo 4",
        pest: "Plodia interpuncta",
        severity: "media",
        status: "abierta",
        daysAgo: 1,
      },
    ],
  },
  {
    name: "Hotel Miramar",
    contact: "Lucía Ferrer · +34 622 447 190",
    address: "Passeig Marítim 8",
    city: "Alicante",
    sector: "hotel",
    risk: "high",
    daysUntilVisit: 0,
    cadenceDays: 15,
    technician: "Tecnico A",
    monthlyFee: 260,
    lat: 38.3452,
    lng: -0.481,
    devices: [
      { code: "H-04", kind: "roentera", pest: "Rattus norvegicus", count: 19, bait: 25, status: "critico" },
      { code: "H-05", kind: "insectocutor", pest: "Cimex lectularius", count: 4, bait: 100, status: "alerta" },
      { code: "H-06", kind: "roentera", pest: "Mus musculus", count: 2, bait: 70, status: "ok" },
      { code: "H-07", kind: "trampa_luz", pest: "Plodia interpuncta", count: 6, bait: 100, status: "ok" },
    ],
    incidents: [
      {
        title: "Chinches en habitación 204 (3 capturas nightly)",
        pest: "Cimex lectularius",
        severity: "alta",
        status: "abierta",
        daysAgo: 3,
      },
      {
        title: "Ratonera perimetral norte comprometida",
        pest: "Rattus norvegicus",
        severity: "alta",
        status: "en_curso",
        daysAgo: 6,
        actions: ["Recolocacion de 3_boxes", "Rejilla de fibra de vidrio"],
      },
    ],
  },
  {
    name: "Vivienda en Ciutat Vella",
    contact: "Nuria Solé · +34 633 771 002",
    address: "Carrer del Mar 22, 3º B",
    city: "Valencia",
    sector: "vivienda",
    risk: "low",
    daysUntilVisit: 6,
    cadenceDays: 90,
    technician: "Tecnico C",
    monthlyFee: 60,
    lat: 39.4731,
    lng: -0.3792,
    devices: [
      { code: "V-21", kind: "cebo_antibanana", pest: "Blattella germanica", count: 0, bait: 100, status: "ok" },
    ],
    incidents: [],
  },
  {
    name: "Oficina TecnoServe",
    contact: "Hugo Bravo · +34 644 118 995",
    address: "Av. del Mar 45, planta 3",
    city: "Castellón",
    sector: "oficina",
    risk: "low",
    daysUntilVisit: 4,
    cadenceDays: 60,
    technician: "Tecnico C",
    monthlyFee: 95,
    lat: 39.9865,
    lng: -0.0513,
    devices: [
      { code: "O-31", kind: "cinta_monitoreo", pest: "Blattella germanica", count: 1, bait: 100, status: "ok" },
      { code: "O-32", kind: "insectocutor", pest: "Mus musculus", count: 3, bait: 100, status: "ok" },
    ],
    incidents: [
      {
        title: "Roedor en sala de descanso (contenido en armario)",
        pest: "Mus musculus",
        severity: "baja",
        status: "resuelta",
        daysAgo: 9,
        actions: ["Trampa de contencion en armario", "Desinfeccion de superficie"],
      },
    ],
  },
  {
    name: "Nave Industrial Beriso",
    contact: "Alba Romera · +34 655 330 761",
    address: "Camino del Puerto 40, nave 12",
    city: "Sagunto",
    sector: "industrial",
    risk: "medium",
    daysUntilVisit: 9,
    cadenceDays: 30,
    technician: "Tecnico B",
    monthlyFee: 310,
    lat: 39.6125,
    lng: -0.4279,
    devices: [
      { code: "N-41", kind: "trampa_luz", pest: "Plodia interpuncta", count: 9, bait: 100, status: "ok" },
      { code: "N-42", kind: "roentera", pest: "Rattus norvegicus", count: 6, bait: 45, status: "alerta" },
      { code: "N-43", kind: "trampa_suelo", pest: "Mus musculus", count: 0, bait: 100, status: "inactivo" },
    ],
    incidents: [
      {
        title: "Actividad de roedores en muelle de carga",
        pest: "Rattus norvegicus",
        severity: "media",
        status: "en_curso",
        daysAgo: 4,
        actions: ["Cebo de acaio en 4 puntos"],
      },
    ],
  },
];

/** Siembra una cartera de demo la primera vez que entra un usuario. */
export const ensureDemoData = mutation({
  args: {},
  handler: async (ctx) => {
    const ownerId = await requireOwnerId(ctx);
    const existing = await ctx.db
      .query("onboardings")
      .withIndex("by_owner", (q) => q.eq("ownerId", ownerId))
      .first();
    if (existing) return false;

    const now = Date.now();
    for (const [index, site] of DEMO.entries()) {
      const siteId = await ctx.db.insert("sites", {
        ownerId,
        name: site.name,
        contact: site.contact,
        address: site.address,
        city: site.city,
        sector: site.sector,
        risk: site.risk,
        active: true,
        nextVisitAt: now + site.daysUntilVisit * DAY,
        cadenceDays: site.cadenceDays,
        technician: site.technician,
        monthlyFee: site.monthlyFee,
        portalToken: `pv-${site.name.slice(0, 3).toLowerCase()}-${index + 1}`,
        lat: site.lat,
        lng: site.lng,
        createdAt: now,
      });

      const deviceIds: Id<"devices">[] = [];
      for (const device of site.devices) {
        const lastReadingAt = now - (index % 2) * DAY;
        const deviceId = await ctx.db.insert("devices", {
          ownerId,
          siteId,
          code: device.code,
          kind: device.kind,
          pest: device.pest,
          status: device.status,
          count: device.count,
          bait: device.bait,
          lastReadingAt,
        });
        deviceIds.push(deviceId);

        // Historico de lecturas: seis semanas de tendencia ascendente o estable.
        for (let back = 6; back >= 1; back -= 1) {
          const drift = Math.round((device.count * back) / 8);
          const noise = (back * 7) % 5;
          await ctx.db.insert("readings", {
            ownerId,
            deviceId,
            count: Math.max(0, drift + noise),
            bait: Math.min(100, device.bait + back * 3),
            status: drift + noise > device.count * 0.7 ? "alerta" : "ok",
            readAt: now - back * 7 * DAY,
          });
        }
      }

      for (const incident of site.incidents) {
        const reportedAt = now - incident.daysAgo * DAY;
        await ctx.db.insert("incidents", {
          ownerId,
          siteId,
          deviceId: deviceIds[0],
          title: incident.title,
          pest: incident.pest,
          severity: incident.severity,
          status: incident.status,
          reportedAt,
          resolvedAt: incident.status === "resuelta" ? reportedAt + DAY : undefined,
          actions: incident.actions,
        });
      }

      // Historial de servicio: dos visitas anteriores ya facturadas.
      for (let back = 2; back >= 1; back -= 1) {
        const completedAt = now - back * site.cadenceDays * DAY;
        const visitId = await ctx.db.insert("visits", {
          ownerId,
          siteId,
          scheduledFor: completedAt,
          status: "completada",
          serviceType: back === 1 ? "Control preventivo" : "Revision de trampas",
          technician: site.technician,
          completedAt,
          signature: "Firmado en campo",
          products: [
            {
              name: "Cebo en gel cipermetrina 2,5 %",
              dose: "30 g",
              registration: "ES-REG-24810",
            },
          ],
          notes: "Renovacion de cebo y revision perimetral.",
        });
        const paid = back === 2;
        await ctx.db.insert("invoices", {
          ownerId,
          siteId,
          visitId,
          number: `FAC-${new Date(completedAt).getFullYear()}-${
            back === 2 ? "0001" : "0002"
          }`,
          concept: back === 1 ? "Control preventivo" : "Revision de trampas",
          amount: site.monthlyFee,
          status: paid ? "pagada" : "pendiente",
          issuedAt: completedAt,
          paidAt: paid ? completedAt + 2 * DAY : undefined,
        });

        // Valoracion del cliente sobre la visita mas antigua.
        if (back === 2 && index % 2 === 0) {
          await ctx.db.insert("reviews", {
            ownerId,
            siteId,
            visitId,
            status: "respondida",
            rating: 4 + (index % 2),
            comment: "Puntuales y con informe claro del tratamiento aplicado.",
            createdAt: completedAt + 3 * DAY,
            answeredAt: completedAt + 3 * DAY,
          });
        }
      }

      // Proximas visitas del contrato ya planificadas.
      for (let ahead = 1; ahead <= 2; ahead += 1) {
        const scheduledFor = now + ahead * site.cadenceDays * DAY;
        if (scheduledFor > now + 30 * DAY) break;
        await ctx.db.insert("visits", {
          ownerId,
          siteId,
          scheduledFor,
          status: "programada",
          serviceType: "Control preventivo",
          technician: site.technician,
        });
      }
    }

    // Umbrales de accion por plaga (concepto clave del sector).
    const demoThresholds = [
      { pest: "Blattella germanica", limit: 20 },
      { pest: "Rattus norvegicus", limit: 10 },
      { pest: "Mus musculus", limit: 5 },
      { pest: "Plodia interpuncta", limit: 15 },
      { pest: "Cimex lectularius", limit: 2 },
      { pest: "Lasius niger", limit: 12 },
    ];
    for (const threshold of demoThresholds) {
      await ctx.db.insert("thresholds", { ownerId, ...threshold });
    }

    // Almacen de material fitosanitario.
    const demoProducts = [
      {
        name: "Cebo en gel cipermetrina 2,5 %",
        registration: "ES-REG-24810",
        unit: "unidades",
        stock: 14,
        minStock: 20,
        cost: 6.5,
      },
      {
        name: "Raticida bromadiolona 0,05 %",
        registration: "ES-REG-11203",
        unit: "kg",
        stock: 9,
        minStock: 5,
        cost: 24,
      },
      {
        name: "Trampa de luz adhesiva 24 W",
        registration: "ES-REG-30077",
        unit: "unidades",
        stock: 22,
        minStock: 10,
        cost: 18,
      },
      {
        name: "Desinfectante piretrina 1 %",
        registration: "ES-REG-19584",
        unit: "litros",
        stock: 3,
        minStock: 8,
        cost: 31,
      },
      {
        name: "Cebo antibanana hidrofóbico",
        registration: "ES-REG-22345",
        unit: "unidades",
        stock: 40,
        minStock: 15,
        cost: 2.2,
      },
    ];
    for (const product of demoProducts) {
      await ctx.db.insert("products", { ownerId, ...product, updatedAt: now });
    }

    // Credenciales del equipo con fecha de caducidad.
    const demoCredentials = [
      {
        technician: "Tecnico A",
        kind: "Certificado de formacion",
        code: "FUM-2024-1187",
        issuedAt: now - 700 * DAY,
        expiresAt: now + 20 * DAY,
      },
      {
        technician: "Tecnico A",
        kind: "Carné de aplicador",
        code: "RPA-4471",
        issuedAt: now - 900 * DAY,
        expiresAt: now + 430 * DAY,
      },
      {
        technician: "Tecnico B",
        kind: "Certificado de formacion",
        code: "FUM-2025-0034",
        issuedAt: now - 200 * DAY,
        expiresAt: now - 12 * DAY,
      },
      {
        technician: "Tecnico C",
        kind: "Alta en empresa",
        code: "REA-2026-1120",
        issuedAt: now - 60 * DAY,
        expiresAt: now + 305 * DAY,
      },
    ];
    for (const credential of demoCredentials) {
      await ctx.db.insert("credentials", { ownerId, ...credential });
    }

    // CRM: leads en distintos estados del embudo.
    const demoLeads = [
      {
        name: "Cadena Hotelera Porta",
        contact: "Dario Nacher · 600 445 210",
        city: "Valencia",
        sector: "hotel" as SiteSector,
        pest: "Rattus norvegicus",
        status: "presupuestado" as const,
        monthlyFee: 520,
        createdAt: now - 4 * DAY,
      },
      {
        name: "Grupo Hostelero Turia",
        contact: "Sara Oliver · 622 118 774",
        city: "Valencia",
        sector: "vivienda" as SiteSector,
        pest: "Cimex lectularius",
        status: "nuevo" as const,
        monthlyFee: 90,
        createdAt: now - 1 * DAY,
      },
      {
        name: "Supermercados Delta",
        contact: "Iker Salas · 655 903 118",
        city: "Torrevieja",
        sector: "almacen" as SiteSector,
        pest: "Plodia interpuncta",
        status: "nuevo" as const,
        monthlyFee: 240,
        createdAt: now - 2 * DAY,
      },
    ];
    for (const lead of demoLeads) {
      await ctx.db.insert("leads", { ownerId, ...lead });
    }

    await ctx.db.insert("onboardings", { ownerId, createdAt: now });
    return true;
  },
});
