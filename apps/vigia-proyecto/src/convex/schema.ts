import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

// --- Control de plagas -------------------------------------------------------

/** Tipo de actividad del cliente. */
export const siteSectors = [
  "restaurante",
  "almacen",
  "vivienda",
  "oficina",
  "hotel",
  "industrial",
] as const;
export const siteSectorValidator = v.union(...siteSectors.map((s) => v.literal(s)));
export type SiteSector = Infer<typeof siteSectorValidator>;

/** Nivel de riesgo estructural del sitio (historial de invasiones). */
export const riskLevels = ["low", "medium", "high"] as const;
export const riskValidator = v.union(...riskLevels.map((s) => v.literal(s)));
export type RiskLevel = Infer<typeof riskValidator>;

/** Tipo de dispositivo de monitorizacion instalado en el sitio. */
export const deviceKinds = [
  "roentera",
  "insectocutor",
  "trampa_luz",
  "cinta_monitoreo",
  "cebo_antibanana",
  "trampa_suelo",
] as const;
export const deviceKindValidator = v.union(...deviceKinds.map((s) => v.literal(s)));
export type DeviceKind = Infer<typeof deviceKindValidator>;

/** Estado operativo de un dispositivo o de una incidencia. */
export const deviceStatuses = ["ok", "alerta", "critico", "inactivo"] as const;
export const deviceStatusValidator = v.union(...deviceStatuses.map((s) => v.literal(s)));
export type DeviceStatus = Infer<typeof deviceStatusValidator>;

export const incidentStatuses = ["abierta", "en_curso", "resuelta"] as const;
export const incidentStatusValidator = v.union(
  ...incidentStatuses.map((s) => v.literal(s)),
);
export type IncidentStatus = Infer<typeof incidentStatusValidator>;

export const severities = ["baja", "media", "alta", "critica"] as const;
export const severityValidator = v.union(...severities.map((s) => v.literal(s)));
export type Severity = Infer<typeof severityValidator>;

/** Estado de una peticion de valoracion al cliente. */
export const reviewStatuses = ["solicitada", "respondida"] as const;
export const reviewStatusValidator = v.union(
  ...reviewStatuses.map((s) => v.literal(s)),
);
export type ReviewStatus = Infer<typeof reviewStatusValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // add other tables here

    /** Cliente / local atendido por la empresa de control de plagas. */
    sites: defineTable({
      ownerId: v.id("users"),
      name: v.string(),
      contact: v.string(),
      address: v.string(),
      city: v.string(),
      sector: siteSectorValidator,
      risk: riskValidator,
      active: v.boolean(),
      nextVisitAt: v.number(),
      /** Cadencia del contrato en dias (trimestral = 90). */
      cadenceDays: v.optional(v.number()),
      /** Tecnico asignado a la ruta. */
      technician: v.optional(v.string()),
      /** Tarifa mensual que genera la factura al cerrar cada visita. */
      monthlyFee: v.optional(v.number()),
      /** Enlace publico del portal de cliente (sin datos de cuenta). */
      portalToken: v.optional(v.string()),
      lat: v.optional(v.number()),
      lng: v.optional(v.number()),
      createdAt: v.number(),
    })
      .index("by_owner", ["ownerId"])
      .index("by_owner_risk", ["ownerId", "risk"])
      .index("by_portal_token", ["portalToken"]),

    /** Trampa / sensor fisico instalado en un sitio. */
    devices: defineTable({
      ownerId: v.id("users"),
      siteId: v.id("sites"),
      code: v.string(),
      kind: deviceKindValidator,
      pest: v.string(),
      status: deviceStatusValidator,
      /** Cantidad capturada en la ultima lectura (0-100). */
      count: v.number(),
      /** Nivel de cebo restante (0-100). */
      bait: v.number(),
      lastReadingAt: v.number(),
    })
      .index("by_owner", ["ownerId"])
      .index("by_site", ["siteId"]),

    /** Incidencia reportada por un tecnico o por el cliente. */
    incidents: defineTable({
      ownerId: v.id("users"),
      siteId: v.id("sites"),
      deviceId: v.optional(v.id("devices")),
      title: v.string(),
      pest: v.string(),
      severity: severityValidator,
      status: incidentStatusValidator,
      reportedAt: v.number(),
      resolvedAt: v.optional(v.number()),
      actions: v.optional(v.array(v.string())),
    })
      .index("by_owner", ["ownerId"])
      .index("by_site", ["siteId"]),

    /** Orden de trabajo / visita programada o completada. */
    visits: defineTable({
      ownerId: v.id("users"),
      siteId: v.id("sites"),
      scheduledFor: v.number(),
      status: v.union(
        v.literal("programada"),
        v.literal("completada"),
        v.literal("omitida"),
      ),
      serviceType: v.string(),
      technician: v.string(),
      /** Productos aplicados: nombre, dosis y nº de registro (cumplimiento). */
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
      /** Planilla de inspeccion IPM firmada en campo. */
      checklist: v.optional(
        v.array(
          v.object({
            area: v.string(),
            ok: v.boolean(),
            note: v.optional(v.string()),
          }),
        ),
      ),
      completedAt: v.optional(v.number()),
    })
      .index("by_owner", ["ownerId"])
      .index("by_site", ["siteId"]),

    /** Factura emitida automáticamente al cerrar una visita. */
    invoices: defineTable({
      ownerId: v.id("users"),
      siteId: v.id("sites"),
      visitId: v.id("visits"),
      number: v.string(),
      concept: v.string(),
      amount: v.number(),
      status: v.union(v.literal("pendiente"), v.literal("pagada")),
      issuedAt: v.number(),
      paidAt: v.optional(v.number()),
      /** Forma de cobro registrada desde el portal o desde la oficina. */
      paymentMethod: v.optional(v.string()),
    })
      .index("by_owner", ["ownerId"])
      .index("by_site", ["siteId"]),

    /** CRM: contactos que aún no son clientes. */
    leads: defineTable({
      ownerId: v.id("users"),
      name: v.string(),
      contact: v.string(),
      sector: v.optional(siteSectorValidator),
      city: v.string(),
      pest: v.optional(v.string()),
      status: v.union(
        v.literal("nuevo"),
        v.literal("presupuestado"),
        v.literal("ganado"),
        v.literal("perdido"),
      ),
      monthlyFee: v.optional(v.number()),
      createdAt: v.number(),
    }).index("by_owner", ["ownerId"]),

    /** Historico de lecturas por trampa: alimenta tendencias y auditorias. */
    readings: defineTable({
      ownerId: v.id("users"),
      deviceId: v.id("devices"),
      count: v.number(),
      bait: v.number(),
      status: deviceStatusValidator,
      readAt: v.number(),
    })
      .index("by_owner", ["ownerId"])
      .index("by_device", ["deviceId"]),

    /** Peticion de valoracion posterior a una visita. */
    reviews: defineTable({
      ownerId: v.id("users"),
      siteId: v.id("sites"),
      visitId: v.id("visits"),
      status: reviewStatusValidator,
      rating: v.optional(v.number()),
      comment: v.optional(v.string()),
      createdAt: v.number(),
      answeredAt: v.optional(v.number()),
    })
      .index("by_owner", ["ownerId"])
      .index("by_site", ["siteId"]),

    /** Umbral de accion por plaga: al superarlo se abre incidencia sola. */
    thresholds: defineTable({
      ownerId: v.id("users"),
      pest: v.string(),
      limit: v.number(),
    })
      .index("by_owner", ["ownerId"])
      .index("by_owner_pest", ["ownerId", "pest"]),

    /** Almacen de material fitosanitario con consumo en cada visita. */
    products: defineTable({
      ownerId: v.id("users"),
      name: v.string(),
      registration: v.string(),
      unit: v.string(),
      stock: v.number(),
      minStock: v.number(),
      cost: v.number(),
      updatedAt: v.number(),
    })
      .index("by_owner", ["ownerId"]),

    /** Credenciales y certificados con fecha de caducidad. */
    credentials: defineTable({
      ownerId: v.id("users"),
      technician: v.string(),
      kind: v.string(),
      code: v.string(),
      issuedAt: v.number(),
      expiresAt: v.number(),
    }).index("by_owner", ["ownerId"]),

    /** Presupuesto comercial que puede convertirse en contrato. */
    quotes: defineTable({
      ownerId: v.id("users"),
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
      total: v.number(),
      status: v.union(
        v.literal("borrador"),
        v.literal("enviado"),
        v.literal("aceptado"),
        v.literal("rechazado"),
      ),
      validUntil: v.number(),
      /** Enlace publico para que el cliente acepte o rechace. */
      portalToken: v.optional(v.string()),
      createdAt: v.number(),
    })
      .index("by_owner", ["ownerId"])
      .index("by_lead", ["leadId"])
      .index("by_portal_token", ["portalToken"]),

    /** Marca de un solo uso: evita re-sembrar los datos de demo. */
    onboardings: defineTable({
      ownerId: v.id("users"),
      createdAt: v.number(),
    }).index("by_owner", ["ownerId"]),

    // tableName: defineTable({
    //   ...
    //   // table fields
    // }).index("by_field", ["field"])
  },
  {
    schemaValidation: false,
  },
);

export default schema;
