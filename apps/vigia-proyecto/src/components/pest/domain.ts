const DAY = 24 * 60 * 60 * 1000;

/** Secciones del panel operativo. */
export type TabId =
  | "resumen"
  | "visitas"
  | "sitios"
  | "trampas"
  | "incidencias"
  | "facturacion"
  | "material"
  | "informes"
  | "crm";

export const SECTOR_LABEL: Record<string, string> = {
  restaurante: "Restaurante",
  almacen: "Almacén",
  vivienda: "Vivienda",
  oficina: "Oficina",
  hotel: "Hotel",
  industrial: "Industrial",
};

export const RISK_LABEL: Record<string, string> = {
  low: "Riesgo bajo",
  medium: "Riesgo medio",
  high: "Riesgo alto",
};

export const DEVICE_KIND_LABEL: Record<string, string> = {
  roentera: "Ratonera",
  insectocutor: "Insectocutor",
  trampa_luz: "Trampa de luz",
  cinta_monitoreo: "Cinta de monitoreo",
  cebo_antibanana: "Cebo antibanana",
  trampa_suelo: "Trampa de suelo",
};

export const DEVICE_STATUS_LABEL: Record<string, string> = {
  ok: "Normal",
  alerta: "En alerta",
  critico: "Crítico",
  inactivo: "Inactivo",
};

export const INCIDENT_STATUS_LABEL: Record<string, string> = {
  abierta: "Abierta",
  en_curso: "En curso",
  resuelta: "Resuelta",
};

export const SEVERITY_LABEL: Record<string, string> = {
  baja: "Baja",
  media: "Media",
  alta: "Alta",
  critica: "Crítica",
};

export const PESTS = [
  "Blattella germanica",
  "Rattus norvegicus",
  "Mus musculus",
  "Plodia interpuncta",
  "Cimex lectularius",
  "Lasius niger",
  "Solenopsis invicta",
];

export const SEVERITIES = ["baja", "media", "alta", "critica"] as const;

export const SERVICE_TYPES = [
  "Control preventivo",
  "Revision de trampas",
  "Desinfeccion",
  "Control de chinches",
  "Callback de garantia",
] as const;

/** Planilla de inspeccion IPM que el técnico revisa en campo. */
export const CHECKLIST_AREAS = [
  "Perimetro exterior",
  "Zona de carga y recepcion",
  "Cocina o despensa",
  "Almacen",
  "Aseos y vestuarios",
  "Cuartos tecnicos",
  "Zona de clientes",
  "Estado de raticeras y cebos",
] as const;

export const CREDENTIAL_KINDS = [
  "Certificado de formacion",
  "Carne de aplicador",
  "Alta en empresa",
  "Seguro de responsabilidad civil",
  "Certificado de vehiculo",
] as const;

/** Dias restantes de un vencimiento, en texto corto. */
export function daysLeft(expiresAt: number) {
  return Math.round((expiresAt - Date.now()) / DAY);
}

/** Valor para <input type="date"> a partir de un timestamp. */
export function toDateInput(ts: number) {
  return new Date(ts).toISOString().slice(0, 10);
}

export function formatExpiry(expiresAt: number) {
  const days = daysLeft(expiresAt);
  if (days < 0) return `Caducado hace ${Math.abs(days)} días`;
  if (days === 0) return "Caduca hoy";
  return `Vence en ${days} días`;
}

export const LEAD_STATUS_LABEL: Record<string, string> = {
  nuevo: "Nuevo",
  presupuestado: "Presupuestado",
  ganado: "Ganado",
  perdido: "Perdido",
};

export const LEAD_STATUS_CLASS: Record<string, string> = {
  nuevo: "border-chart-5/30 bg-chart-5/10 text-chart-5",
  presupuestado: "border-chart-3/40 bg-chart-3/15 text-chart-3",
  ganado: "border-primary/30 bg-primary/10 text-primary",
  perdido: "border-border bg-muted text-muted-foreground",
};

export const QUOTE_STATUS_LABEL: Record<string, string> = {
  borrador: "Borrador",
  enviado: "Enviado",
  aceptado: "Aceptado",
  rechazado: "Rechazado",
};

export const QUOTE_STATUS_CLASS: Record<string, string> = {
  borrador: "border-border bg-muted text-muted-foreground",
  enviado: "border-chart-5/30 bg-chart-5/10 text-chart-5",
  aceptado: "border-primary/30 bg-primary/10 text-primary",
  rechazado: "border-destructive/40 bg-destructive/12 text-destructive",
};

export const VISIT_STATUS_CLASS: Record<string, string> = {
  programada: "border-chart-5/30 bg-chart-5/10 text-chart-5",
  completada: "border-primary/30 bg-primary/10 text-primary",
  omitida: "border-border bg-muted text-muted-foreground",
};

export const INVOICE_STATUS_CLASS: Record<string, string> = {
  pendiente: "border-chart-3/40 bg-chart-3/15 text-chart-3",
  pagada: "border-primary/30 bg-primary/10 text-primary",
};

const CURRENCY = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function formatCurrency(value: number) {
  return CURRENCY.format(value);
}
export const DEVICE_KINDS = [
  "roentera",
  "insectocutor",
  "trampa_luz",
  "cinta_monitoreo",
  "cebo_antibanana",
  "trampa_suelo",
] as const;
export const SECTORS = [
  "restaurante",
  "almacen",
  "vivienda",
  "oficina",
  "hotel",
  "industrial",
] as const;
export const RISKS = ["low", "medium", "high"] as const;

/** Clases de badge por estado de trampa. */
export const DEVICE_STATUS_CLASS: Record<string, string> = {
  ok: "border-chart-5/30 bg-chart-5/10 text-chart-5",
  alerta: "border-chart-3/40 bg-chart-3/15 text-chart-3",
  critico: "border-destructive/40 bg-destructive/12 text-destructive",
  inactivo: "border-border bg-muted text-muted-foreground",
};

/** Clases de badge por severidad de incidencia. */
export const SEVERITY_CLASS: Record<string, string> = {
  baja: "border-chart-5/30 bg-chart-5/10 text-chart-5",
  media: "border-chart-3/40 bg-chart-3/15 text-chart-3",
  alta: "border-chart-2/45 bg-chart-2/20 text-chart-2",
  critica: "border-destructive/40 bg-destructive/12 text-destructive",
};

export const INCIDENT_STATUS_CLASS: Record<string, string> = {
  abierta: "border-destructive/40 bg-destructive/12 text-destructive",
  en_curso: "border-chart-3/40 bg-chart-3/15 text-chart-3",
  resuelta: "border-primary/30 bg-primary/10 text-primary",
};

export const RISK_CLASS: Record<string, string> = {
  low: "text-primary",
  medium: "text-chart-3",
  high: "text-destructive",
};

const DATE = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "short",
});

const DATE_TIME = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatDate(ts: number) {
  return DATE.format(new Date(ts));
}

export function formatDateTime(ts: number) {
  return DATE_TIME.format(new Date(ts));
}

/** "Hoy", "Mañana" o el número de días que faltan. */
export function formatCountdown(ts: number) {
  const days = Math.round((ts - Date.now()) / DAY);
  if (days === 0) return "Hoy";
  if (days === 1) return "Mañana";
  if (days === -1) return "Ayer";
  if (days < 0) return `Hace ${Math.abs(days)} d`;
  return `En ${days} días`;
}

export function isOverdue(ts: number) {
  return ts < Date.now();
}

/** Distancia en km entre dos coordenadas (Haversine). */
export function distanceKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Orden de paradas por vecino más cercano desde un punto de salida. */
export function nearestNeighborOrder<T>(
  stops: T[],
  pointOf: (stop: T) => { lat: number; lng: number } | null,
  depot: { lat: number; lng: number },
) {
  const remaining = [...stops];
  const ordered: T[] = [];
  let current = depot;

  while (remaining.length > 0) {
    let bestIndex = -1;
    let bestDistance = Number.POSITIVE_INFINITY;
    remaining.forEach((stop, index) => {
      const point = pointOf(stop);
      if (!point) return;
      const d = distanceKm(current, point);
      if (d < bestDistance) {
        bestDistance = d;
        bestIndex = index;
      }
    });
    // Los sitios sin coordenadas quedan al final, sin romper el orden.
    if (bestIndex === -1) {
      ordered.push(...remaining.splice(0));
      break;
    }
    const [next] = remaining.splice(bestIndex, 1);
    ordered.push(next);
    const point = pointOf(next);
    if (point) current = point;
  }
  return ordered;
}
