/**
 * Motor de precios compartido entre la calculadora pública y el backend.
 * Precios en euros, alineados con el mercado español de limpieza doméstica.
 */

export const BASE_HOURLY_RATE = 16;

export type ServiceKey = "regular" | "deep" | "move" | "office" | "airbnb";

export interface ServiceType {
  key: ServiceKey;
  label: string;
  description: string;
  /** Multiplicador sobre la tarifa hora base */
  multiplier: number;
  /** Horas fijas añadidas (complejidad) */
  extraHours: number;
}

export const SERVICE_TYPES: ServiceType[] = [
  {
    key: "regular",
    label: "Limpieza de mantenimiento",
    description: "Limpieza periódica de tu hogar: polvo, suelos, baños y cocina.",
    multiplier: 1,
    extraHours: 0,
  },
  {
    key: "deep",
    label: "Limpieza a fondo",
    description: "Detalle profundo: hornallas, azulejos, interiores de armarios y ventanas.",
    multiplier: 1.25,
    extraHours: 2,
  },
  {
    key: "move",
    label: "Fin de obra / mudanza",
    description: "Deja el piso impecable para entrar (o entregar) sin rastro de obra.",
    multiplier: 1.4,
    extraHours: 3,
  },
  {
    key: "office",
    label: "Oficinas y locales",
    description: "Limpieza profesional de espacios de trabajo fuera de horario.",
    multiplier: 1.15,
    extraHours: 1,
  },
  {
    key: "airbnb",
    label: "Airbnb / turnos",
    description: "Check-in ready: cambio de sábanas, toallas y reposición de amenities.",
    multiplier: 1.2,
    extraHours: 1,
  },
];

export type ExtraKey =
  | "ironing"
  | "windows"
  | "fridge"
  | "oven"
  | "pet"
  | "eco";

export interface Extra {
  key: ExtraKey;
  label: string;
  description: string;
  price: number;
}

export const EXTRAS: Extra[] = [
  {
    key: "ironing",
    label: "Planchado",
    description: "2 horas de plancha incluidas en la visita.",
    price: 18,
  },
  {
    key: "windows",
    label: "Ventanas y cristales",
    description: "Interior de ventanas y acristalamientos accesibles.",
    price: 22,
  },
  {
    key: "fridge",
    label: "Nevera por dentro",
    description: "Desinfección y organización del frigorífico.",
    price: 15,
  },
  {
    key: "oven",
    label: "Horno y campana",
    description: "Desengrase intensivo de horno, campana y filtros.",
    price: 20,
  },
  {
    key: "pet",
    label: "Hogar con mascotas",
    description: "Aspirado especial y productos aptos para animales.",
    price: 8,
  },
  {
    key: "eco",
    label: "Pack ecológico",
    description: "Solo productos eco-certificados y microfibras reutilizables.",
    price: 10,
  },
];

export type FrequencyKey = "once" | "weekly" | "biweekly" | "monthly";

export interface Frequency {
  key: FrequencyKey;
  label: string;
  description: string;
  /** Descuento aplicado al precio por visita */
  discount: number;
}

export const FREQUENCIES: Frequency[] = [
  { key: "once", label: "Una sola vez", description: "Servicio puntual.", discount: 0 },
  { key: "weekly", label: "Cada semana", description: "Mismo equipo, mismo día.", discount: 0.15 },
  { key: "biweekly", label: "Cada 2 semanas", description: "El plan más elegido.", discount: 0.1 },
  { key: "monthly", label: "Cada mes", description: "Mantenimiento ligero.", discount: 0.05 },
];

export interface Slot {
  key: string;
  label: string;
  range: string;
}

export const SLOTS: Slot[] = [
  { key: "morning", label: "Mañana", range: "8:00 – 12:00" },
  { key: "midday", label: "Mediodía", range: "12:00 – 15:00" },
  { key: "afternoon", label: "Tarde", range: "15:00 – 19:00" },
  { key: "evening", label: "Noche (oficinas)", range: "19:00 – 22:00" },
];

export interface QuoteInput {
  serviceType: ServiceKey;
  frequency: FrequencyKey;
  bedrooms: number;
  bathrooms: number;
  extras: ExtraKey[];
}

export interface QuoteResult {
  price: number;
  durationHours: number;
  regularPrice: number;
  savings: number;
  discountLabel: string | null;
  breakdown: { label: string; amount: number }[];
}

const CITY_SURCHARGE_NOTE = "Desplazamiento incluido en Madrid, Barcelona y Valencia.";

export { CITY_SURCHARGE_NOTE };

/**
 * Versión servidor del cálculo (idéntica al cliente). Existe como export
 * propio para que el backend Convex dependa de una API explícita.
 */
export function calculateQuoteServer(input: QuoteInput): QuoteResult {
  return calculateQuote(input);
}

/** Calcula el presupuesto instantáneo a partir de la selección del cliente. */
export function calculateQuote(input: QuoteInput): QuoteResult {
  const service = SERVICE_TYPES.find((s) => s.key === input.serviceType) ?? SERVICE_TYPES[0];
  const frequency = FREQUENCIES.find((f) => f.key === input.frequency) ?? FREQUENCIES[0];

  const base = BASE_HOURLY_RATE * service.multiplier;
  const homeHours = 1.5 + input.bedrooms * 0.7 + input.bathrooms * 0.6;
  const durationHours = Math.round((homeHours + service.extraHours) * 2) / 2;

  const serviceCost = base * durationHours;
  const extrasCost = input.extras.reduce((sum, key) => {
    const extra = EXTRAS.find((e) => e.key === key);
    return sum + (extra?.price ?? 0);
  }, 0);

  const subtotal = serviceCost + extrasCost;
  const discountAmount = subtotal * frequency.discount;
  const price = Math.max(25, Math.round((subtotal - discountAmount) / 5) * 5 - 0.01);

  const breakdown: { label: string; amount: number }[] = [
    {
      label: `${service.label} · ${durationHours} h`,
      amount: Math.round(serviceCost * 100) / 100,
    },
  ];
  for (const key of input.extras) {
    const extra = EXTRAS.find((e) => e.key === key);
    if (extra) {
      breakdown.push({ label: extra.label, amount: extra.price });
    }
  }
  if (frequency.discount > 0) {
    breakdown.push({
      label: `Descuento recurrencia (${Math.round(frequency.discount * 100)} %)`,
      amount: -Math.round(discountAmount * 100) / 100,
    });
  }

  return {
    price,
    durationHours,
    regularPrice: Math.round(subtotal * 100) / 100,
    savings: Math.round(discountAmount * 100) / 100,
    discountLabel: frequency.discount > 0 ? frequency.label : null,
    breakdown,
  };
}

export function serviceLabel(key: string): string {
  return SERVICE_TYPES.find((s) => s.key === key)?.label ?? key;
}

export function frequencyLabel(key: string): string {
  return FREQUENCIES.find((f) => f.key === key)?.label ?? key;
}

export function slotLabel(key: string): string {
  const slot = SLOTS.find((s) => s.key === key);
  return slot ? `${slot.label} (${slot.range})` : key;
}
