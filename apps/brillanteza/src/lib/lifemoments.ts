import {
  calculateQuote,
  FREQUENCIES,
  type ExtraKey,
  type FrequencyKey,
  type QuoteResult,
  type ServiceKey,
} from "./pricing";

/**
 * Presets por "momento de vida" — segmentación emocional que usa Batmaid:
 * en lugar de preguntar por técnica de limpieza, se pregunta qué te pasa.
 */
export interface LifeMoment {
  key: string;
  emoji: string;
  title: string;
  description: string;
  preset: {
    serviceType: ServiceKey;
    frequency: FrequencyKey;
    bedrooms: number;
    bathrooms: number;
    extras: ExtraKey[];
  };
}

export const LIFE_MOMENTS: LifeMoment[] = [
  {
    key: "student",
    emoji: "🎓",
    title: "Estudiante o piso compartido",
    description: "Salida del piso o mantenimiento barato entre compañeros.",
    preset: {
      serviceType: "regular",
      frequency: "monthly",
      bedrooms: 2,
      bathrooms: 1,
      extras: ["fridge"],
    },
  },
  {
    key: "newborn",
    emoji: "🍼",
    title: "Llegada de un bebé",
    description: "Desinfección profunda antes de que llegue y mantenimiento después.",
    preset: {
      serviceType: "deep",
      frequency: "biweekly",
      bedrooms: 2,
      bathrooms: 2,
      extras: ["eco", "ironing"],
    },
  },
  {
    key: "moving",
    emoji: "📦",
    title: "Mudanza o fin de contrato",
    description: "Recupera tu fianza: entrega del piso impecable.",
    preset: {
      serviceType: "move",
      frequency: "once",
      bedrooms: 2,
      bathrooms: 1,
      extras: ["windows", "oven"],
    },
  },
  {
    key: "busy",
    emoji: "⏳",
    title: "Semana imposible",
    description: "Trabajo sin tiempo: cada 2 semanas tu casa listo sin pensar.",
    preset: {
      serviceType: "regular",
      frequency: "biweekly",
      bedrooms: 3,
      bathrooms: 2,
      extras: [],
    },
  },
  {
    key: "senior",
    emoji: "🌻",
    title: "Para un mayor",
    description: "Ayuda regular respetuosa y productos sin olores fuertes.",
    preset: {
      serviceType: "regular",
      frequency: "weekly",
      bedrooms: 2,
      bathrooms: 1,
      extras: ["eco"],
    },
  },
  {
    key: "renovation",
    emoji: "🛠️",
    title: "Reforma terminada",
    description: "Polvo de obra, pegatinas y restos fuera en una sola visita.",
    preset: {
      serviceType: "move",
      frequency: "once",
      bedrooms: 3,
      bathrooms: 2,
      extras: ["windows"],
    },
  },
  {
    key: "host",
    emoji: "🔑",
    title: "Anfitrión turístico",
    description: "Turnos entre huéspedes con lencería y amenities listos.",
    preset: {
      serviceType: "airbnb",
      frequency: "weekly",
      bedrooms: 2,
      bathrooms: 1,
      extras: ["ironing"],
    },
  },
  {
    key: "pets",
    emoji: "🐾",
    title: "Hogar con mascotas",
    description: "Pelo fuera y productos aptos para animales.",
    preset: {
      serviceType: "regular",
      frequency: "weekly",
      bedrooms: 2,
      bathrooms: 1,
      extras: ["pet"],
    },
  },
];

/** Devuelve el coste estimado por mes de un plan recurrente. */
export function estimateMonthlyCost(
  input: Parameters<typeof calculateQuote>[0],
): { perVisit: number; perMonth: number; visitsPerMonth: number } | null {
  const visits: Record<FrequencyKey, number> = {
    once: 1,
    weekly: 4,
    biweekly: 2,
    monthly: 1,
  };
  const frequency = input.frequency;
  if (frequency === "once") return null; // no es plan recurrente
  const quote = calculateQuote(input);
  const perMonth = quote.price * visits[frequency];
  return {
    perVisit: quote.price,
    perMonth,
    visitsPerMonth: visits[frequency],
  };
}

/**
 * Comprobador de cobertura por código postal español (5 dígitos).
 * Los dos primeros dígitos = provincia. Zonas activas del servicio.
 */
export const COVERED_PROVINCES: Record<string, string> = {
  "28": "Madrid",
  "08": "Barcelona",
  "46": "Valencia",
  "41": "Sevilla",
  "50": "Zaragoza",
  "48": "Bizkaia",
  "29": "Málaga",
  "37": "Salamanca",
  "30": "Murcia",
  "36": "Pontevedra",
  "17": "Girona",
  "12": "Castellón",
};

export type CoverageStatus =
  | { status: "empty" }
  | { status: "invalid" }
  | { status: "checking" }
  | { status: "covered"; province: string }
  | { status: "waitlist"; province: string };

export function checkCoverage(postalCode: string): CoverageStatus {
  const cleaned = postalCode.replace(/\s/g, "");
  if (!cleaned) return { status: "empty" };
  if (!/^\d{5}$/.test(cleaned)) return { status: "invalid" };
  const prefix = cleaned.slice(0, 2);
  const province = COVERED_PROVINCES[prefix];
  if (province) return { status: "covered", province };
  return { status: "waitlist", province: "provincia sin cobertura" };
}
