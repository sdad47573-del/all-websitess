import type { ExtraId } from "@/api";

export type ServiceId = "express" | "complete" | "premium" | "ceramic";
export type VehicleType = "small" | "sedan" | "suv" | "van";

export interface Service {
  id: ServiceId;
  name: string;
  tagline: string;
  durationMin: number;
  icon: "zap" | "sparkles" | "gem" | "shield";
  highlight?: boolean;
  features: string[];
}

export interface VehicleTypeOption {
  id: VehicleType;
  label: string;
  multiplier: number;
  example: string;
}

export const SERVICES: Service[] = [
  {
    id: "express",
    name: "Express 30'",
    tagline: "El toque fresco de siempre, sin cita previa.",
    durationMin: 30,
    icon: "zap",
    features: [
      "Lavado exterior a presión y espuma",
      "Llantas y neumáticos",
      "Aspirado rápido de interior",
      "Secado con microfibra",
    ],
  },
  {
    id: "complete",
    name: "Lavado Completo",
    tagline: "Interior y exterior impecables en 90 minutos.",
    durationMin: 90,
    icon: "sparkles",
    features: [
      "Todo lo del Express",
      "Limpieza profunda de tapicería",
      "Cristales incl. parabrisas",
      "Renovador de plásticos",
      "Air freshener premium",
    ],
  },
  {
    id: "premium",
    name: "Detailing Premium",
    tagline: "Descontaminado, pulido y sellado a dos manos.",
    durationMin: 240,
    icon: "gem",
    highlight: true,
    features: [
      "Todo lo del Completo",
      "Descontaminación de pintura (barra arcilla)",
      "Pulido 1 paso antirrayas leves",
      "Sellado cerámico spray 3 meses",
      "Tratamiento de faros",
    ],
  },
  {
    id: "ceramic",
    name: "Cerámico 9H",
    tagline: "El escudo definitivo para tu pintura.",
    durationMin: 480,
    icon: "shield",
    features: [
      "Detailing Premium incluido",
      "Revestimiento cerámico 9H 3 capas",
      "Protección 24+ meses",
      "Efecto hidrofóbico y brillo espejo",
      "Informe fotográfico del proceso",
      "Garantía de mantenimiento",
    ],
  },
];

export const VEHICLE_TYPES: VehicleTypeOption[] = [
  {
    id: "small",
    label: "Compacto",
    multiplier: 0.9,
    example: "Ibiza, Clio, 208",
  },
  {
    id: "sedan",
    label: "Sedán / Hatchback",
    multiplier: 1,
    example: "León, A3, Golf",
  },
  {
    id: "suv",
    label: "SUV / 4x4",
    multiplier: 1.2,
    example: "Tiguan, X5, Captur",
  },
  {
    id: "van",
    label: "Furgoneta",
    multiplier: 1.4,
    example: "Vito, Transit, Transporter",
  },
];

/** Precio base en euros por servicio (coche estándar) */
export const BASE_PRICES: Record<ServiceId, number> = {
  express: 15,
  complete: 35,
  premium: 120,
  ceramic: 350,
};

export function priceFor(
  serviceId: ServiceId,
  vehicleType: VehicleType,
): number {
  return Math.round(
    BASE_PRICES[serviceId] *
      (VEHICLE_TYPES.find((v) => v.id === vehicleType)?.multiplier ?? 1),
  );
}

export const STATUS_LABELS: Record<string, string> = {
  pending: "Pendiente",
  confirmed: "Confirmada",
  done: "Finalizada",
  cancelled: "Cancelada",
};

export const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-500/15 text-amber-500 border-amber-500/30",
  confirmed: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
  done: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  cancelled: "bg-red-500/15 text-red-400 border-red-500/30",
};

export const REVIEWS = [
  {
    name: "Marcos G.",
    car: "VW Golf R",
    rating: 5,
    text: "Pedí el Premium y salió como del concesionario. El interior olía a nuevo y me devolvieron el brillo del techo. Repetiré seguro.",
  },
  {
    name: "Lucía P.",
    car: "Tesla Model 3",
    rating: 5,
    text: "Reservé por la web en dos minutos y me confirmaron el mismo día. Puntuales y muy profesionales con los cristales y la pantalla.",
  },
  {
    name: "Javier R.",
    car: "BMW X5",
    rating: 5,
    text: "El cerámico es otro nivel: la lluvia se desliza sola. Trato de 10 y te explican cada paso del proceso.",
  },
  {
    name: "Elena M.",
    car: "Seat Ibiza",
    rating: 4,
    text: "Rapidísimos con el express de 30 minutos y a buen precio. Muy cómodo para antes de trabajar.",
  },
];

export const FAQS = [
  {
    q: "¿Necesito cita previa?",
    a: "Para el Express 30' no hace falta: puedes venir directamente si hay hueco. Para el resto de servicios recomendamos reservar desde tu área de cliente para asegurar plaza.",
  },
  {
    q: "¿Cuánto tarda un detailing premium?",
    a: "Entre 4 y 5 horas. Puedes dejar el coche y avisamos por WhatsApp cuando esté listo, o esperarte en nuestra sala de espera con café.",
  },
  {
    q: "¿Qué incluye el tratamiento cerámico?",
    a: "Descontaminado completo, pulido en dos pasos si hace falta y 3 capas de revestimiento 9H. Incluye informe fotográfico y mantenimiento gratuito a los 6 meses.",
  },
  {
    q: "¿Puedo cancelar mi reserva?",
    a: "Sí, desde tu panel de cliente hasta el mismo día. Sin coste. Te devolvemos la franja al calendario para otro cliente.",
  },
  {
    q: "¿Trabajáis con flotas y empresas?",
    a: "Sí. Tenemos tarifas para flotas de 5+ vehículos y recogida a domicilio en Madrid capital. Escríbenos por el formulario y te preparamos presupuesto.",
  },
  {
    q: "¿Cómo funciona la recogida a domicilio?",
    a: "Al reservar, marca la opción de recogida: pasamos por tu coche, lo llevamos al centro, lo tratamos y te lo devolvemos limpio el mismo día. Tiene un suplemento de 15€ dentro de Madrid capital.",
  },
  {
    q: "¿Qué garantía tiene el tratamiento cerámico?",
    a: "El revestimiento 9H está garantizado 24 meses siempre que sigas el plan de mantenimiento. Incluye una revisión gratuita a los 6 meses con informe fotográfico.",
  },
];

export const LOYALTY_EURO_PER_POINT = 10;

export interface ExtraService {
  /** Narrowed to the ids the API accepts, so the picker cannot offer one it
   *  would then reject. */
  id: ExtraId;
  name: string;
  description: string;
  price: number;
  icon: "wind" | "engine" | "lightbulb" | "armchair";
}

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: "ozono",
    name: "Ozono",
    description: "Elimina olores y bacterias del habitáculo",
    price: 12,
    icon: "wind",
  },
  {
    id: "motor",
    name: "Lavado de motor",
    description: "Limpieza y abrillantado del vano motor",
    price: 20,
    icon: "engine",
  },
  {
    id: "faros",
    name: "Pulido de faros",
    description: "Recupera transparencia y luz",
    price: 25,
    icon: "lightbulb",
  },
  {
    id: "cuero",
    name: "Hidratación de cuero",
    description: "Limpieza y nutrición de asientos de piel",
    price: 30,
    icon: "armchair",
  },
];

export interface PassOffer {
  id: "complete4" | "premium2";
  name: string;
  serviceId: ServiceId;
  washes: number;
  price: number;
  normalPrice: number;
  savingPct: number;
}

export const PASS_OFFERS: PassOffer[] = [
  {
    id: "complete4",
    name: "Bono 4 Lavados Completos",
    serviceId: "complete",
    washes: 4,
    price: 119,
    normalPrice: 140,
    savingPct: 15,
  },
  {
    id: "premium2",
    name: "Bono 2 Detailing Premium",
    serviceId: "premium",
    washes: 2,
    price: 204,
    normalPrice: 240,
    savingPct: 15,
  },
];

export const PROMO = {
  code: "AUTO10",
  discountPct: 10,
  label: "-10% en tu primera reserva online",
};

export const PICKUP_PRICE = 15;

export const GIFT_AMOUNTS = [25, 50, 100];

export const WHATSAPP_URL =
  "https://wa.me/34910000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20detailing";
