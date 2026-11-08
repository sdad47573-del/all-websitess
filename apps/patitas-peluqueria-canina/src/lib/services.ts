/**
 * Catálogo compartido de Patitas · Peluquería Canina.
 * Lo usan la landing, el wizard de reserva y el dashboard, así que
 * los precios y horarios viven en un único sitio.
 */

export type SizeKey = "S" | "M" | "L" | "XL";

export const SIZE_LABELS: Record<SizeKey, string> = {
  S: "Pequeño (Chihuahua, Yorkie…)",
  M: "Mediano (Cocker, Beagle…)",
  L: "Grande (Labrador, Pastor…)",
  XL: "Gigante (San Bernardo, Mastín…)",
};

export const SIZE_MULTIPLIER: Record<SizeKey, number> = {
  S: 1,
  M: 1.25,
  L: 1.55,
  XL: 1.95,
};

export type BreedKey =
  | "mestizo"
  | "poodle"
  | "yorkshire"
  | "cocker"
  | "shih-tzu"
  | "labrador"
  | "pastor-aleman"
  | "bulldog"
  | "husky"
  | "golden";

export type Breed = {
  key: BreedKey;
  label: string;
  suggestedSize: SizeKey;
  coat: "corto" | "medio" | "largo" | "rizado" | "doble";
};

export const BREEDS: Breed[] = [
  { key: "mestizo", label: "Mestizo / Cruce", suggestedSize: "M", coat: "medio" },
  { key: "yorkshire", label: "Yorkshire Terrier", suggestedSize: "S", coat: "largo" },
  { key: "poodle", label: "Caniche / Poodle", suggestedSize: "M", coat: "rizado" },
  { key: "shih-tzu", label: "Shih Tzu", suggestedSize: "S", coat: "largo" },
  { key: "cocker", label: "Cocker Spaniel", suggestedSize: "M", coat: "medio" },
  { key: "bulldog", label: "Bulldog Francés", suggestedSize: "M", coat: "corto" },
  { key: "labrador", label: "Labrador Retriever", suggestedSize: "L", coat: "doble" },
  { key: "golden", label: "Golden Retriever", suggestedSize: "L", coat: "doble" },
  { key: "pastor-aleman", label: "Pastor Alemán", suggestedSize: "L", coat: "doble" },
  { key: "husky", label: "Husky Siberiano", suggestedSize: "L", coat: "doble" },
];

export type Service = {
  key: string;
  name: string;
  tagline: string;
  /** Precio base para tamaño S en euros */
  basePrice: number;
  /** Minutos base para tamaño S */
  baseMinutes: number;
  icon: "scissors" | "bath" | "sparkles" | "brush" | "stethoscope" | "paw";
  popular?: boolean;
};

export const SERVICES: Service[] = [
  {
    key: "banco-corte",
    name: "Baño + Corte completo",
    tagline: "Baño con champú adecuado al tipo de piel, secado, corte a tijera o máquina a gusto del peludo.",
    basePrice: 32,
    baseMinutes: 90,
    icon: "scissors",
    popular: true,
  },
  {
    key: "banco",
    name: "Baño e higiene",
    tagline: "Champú + mascarilla hidratante, orejas, glándulas, corte de uñas y perfume colonia.",
    basePrice: 24,
    baseMinutes: 60,
    icon: "bath",
    popular: true,
  },
  {
    key: "arreglo-patas",
    name: "Arreglo de patas y zonas",
    tagline: "Retoque de patas, cara, zona íntima y abdomen. Ideal entre baños completos.",
    basePrice: 14,
    baseMinutes: 30,
    icon: "paw",
  },
  {
    key: "deshedding",
    name: "Deshedding antipelo",
    tagline: "Tratamiento intensivo de muda con cepillado profundo y soplado para razas de doble capa.",
    basePrice: 28,
    baseMinutes: 75,
    icon: "brush",
  },
  {
    key: "puppy",
    name: "Puppy first spa",
    tagline: "Primera experiencia de peluquería para cachorros: suave, sin prisas y con muchos premios.",
    basePrice: 19,
    baseMinutes: 45,
    icon: "sparkles",
  },
  {
    key: "spa-senior",
    name: "Spa sénior",
    tagline: "Protocolo tranquilo para peludos mayores: bañera baja, colchoneta y sin estrés.",
    basePrice: 29,
    baseMinutes: 75,
    icon: "stethoscope",
  },
];

export type Extra = {
  key: string;
  name: string;
  description: string;
  price: number;
  minutes: number;
};

export const EXTRAS: Extra[] = [
  { key: "uñas", name: "Corte de uñas", description: "Con lima y mimo.", price: 6, minutes: 10 },
  { key: "orejas", name: "Limpieza de oídos", description: "Loción otológica suave.", price: 5, minutes: 10 },
  { key: "parasitos", name: "Baño antiparasitario", description: "Champú contra pulgas y garrapatas.", price: 9, minutes: 15 },
  { key: "ozono", name: "Mascarilla de ozono", description: "Brillo y piel cuidada.", price: 12, minutes: 20 },
  { key: "perfume", name: "Perfume premium", description: "Colonia canina de larga duración.", price: 4, minutes: 5 },
  { key: "dental", name: "Higiene dental", description: "Cepillado + espuma enzimática.", price: 8, minutes: 15 },
];

export type Promo = {
  key: string;
  name: string;
  description: string;
  discountPct: number;
};

export const PROMOS: Promo[] = [
  { key: "bienvenida", name: "Primera visita", description: "15% de descuento en tu primer servicio completo.", discountPct: 15 },
  { key: "abuelo", name: "Segundo peludo", description: "10% si vienen dos perros de la misma casa el mismo día.", discountPct: 10 },
  { key: "antiguo", name: "Cliente Patitas", description: "5% acumulado en la 6.ª visita vía tarjeta fidelidad.", discountPct: 5 },
  { key: "bono", name: "Bono 4 sesiones", description: "4 sesiones del mismo servicio pagando 3,35: 15% de ahorro.", discountPct: 15 },
];

export type Schedule = {
  /** 0 = domingo … 6 = sábado */
  [day: number]: { open: string; close: string } | null;
};

export const SCHEDULE: Schedule = {
  1: { open: "09:30", close: "19:30" },
  2: { open: "09:30", close: "19:30" },
  3: { open: "09:30", close: "19:30" },
  4: { open: "09:30", close: "20:30" },
  5: { open: "09:30", close: "20:30" },
  6: { open: "10:00", close: "14:30" },
  0: null, // domingo cerrado
};

export const DAY_NAMES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export const DAYS_OFF = ["Jueves", "Domingo"];

export const STATION_COUNT = 2; // mesas de grooming en paralelo
export const PICKUP_FEE_EUR = 6; // suplemento de recogida a domicilio
export const BONO_USES = 4; // usos por bono
export const BONO_DISCOUNT = 0.15; // descuento del bono

export const SALON = {
  name: "Patitas",
  tagline: "Peluquería canina boutique",
  address: "Calle del Rosal 14, Chamberí · Madrid",
  phone: "+34 612 345 678",
  phoneHref: "tel:+34612345678",
  whatsappHref: "https://wa.me/34612345678",
  email: "hola@patitas.es",
  instagram: "https://instagram.com",
};

/* ---------- Helpers de precio y tiempo ---------- */

export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function priceFor(service: Service, size: SizeKey, extraKeys: string[]): number {
  const extras = EXTRAS.filter((e) => extraKeys.includes(e.key));
  const base = service.basePrice * SIZE_MULTIPLIER[size];
  const extrasPrice = extras.reduce((acc, e) => acc + e.price * (size === "XL" ? 1.3 : 1), 0);
  return round2(base + extrasPrice);
}

export function minutesFor(service: Service, size: SizeKey, extraKeys: string[]): number {
  const extras = EXTRAS.filter((e) => extraKeys.includes(e.key));
  const base = service.baseMinutes * (size === "S" ? 1 : size === "M" ? 1.2 : size === "L" ? 1.4 : 1.7);
  return Math.round(base + extras.reduce((acc, e) => acc + e.minutes, 0));
}

export function eur(n: number): string {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(n);
}

export function rangePrice(service: Service): string {
  const min = service.basePrice;
  const max = round2(service.basePrice * SIZE_MULTIPLIER.XL);
  return `${eur(min)} – ${eur(max)}`;
}

export function minutesForService(service: Service): number {
  return Math.round(service.baseMinutes * 1.2);
}

export function durationLabel(mins: number): string {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}

export function servicePriceRange(service: Service): string {
  return `${eur(service.basePrice)} – ${eur(round2(service.basePrice * SIZE_MULTIPLIER.XL))}`;
}

export function serviceIcon(service: Service): string {
  return service.icon;
}

/* ---------- Horario y slots ---------- */

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function isOpenOn(dateISO: string): boolean {
  const d = new Date(dateISO + "T12:00:00");
  return SCHEDULE[d.getDay()] !== null && SCHEDULE[d.getDay()] !== undefined;
}

export function nextOpenDates(count: number, fromISO?: string): string[] {
  const out: string[] = [];
  const start = fromISO ? new Date(fromISO + "T12:00:00") : new Date();
  for (let i = 0; out.length < count && i < 30; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    if (isOpenOn(iso)) out.push(iso);
  }
  return out;
}

/** Slots candidatos cada 30 min dentro del horario del día. */
export function candidateSlots(dateISO: string, durationMin: number): string[] {
  const d = new Date(dateISO + "T12:00:00");
  const sched = SCHEDULE[d.getDay()];
  if (!sched) return [];
  const open = toMinutes(sched.open);
  const close = toMinutes(sched.close);
  const slots: string[] = [];
  for (let t = open; t + durationMin <= close; t += 30) {
    const h = Math.floor(t / 60);
    const m = t % 60;
    slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
  }
  return slots;
}

export type BusyBlock = { start: string; end: string };

function overlaps(aStart: number, aEnd: number, bStart: number, bEnd: number): boolean {
  return aStart < bEnd && bStart < aEnd;
}

/**
 * Slots disponibles: cada cita ocupa su duración en una de las 2 mesas.
 * slotToStart viene del rango de slots ya presentes en la cita.
 */
export function availableSlots(
  dateISO: string,
  durationMin: number,
  busy: BusyBlock[],
): string[] {
  const slots = candidateSlots(dateISO, durationMin);
  const busyParsed = busy.map((b) => ({
    start: toMinutes(b.start),
    end: toMinutes(b.end),
  }));
  const now = new Date();
  const isToday = dateISO === isoDate(now);
  const nowMin = now.getHours() * 60 + now.getMinutes();

  return slots.filter((slot) => {
    const s = toMinutes(slot);
    const e = s + durationMin;
    if (isToday && s < nowMin + 45) return false; // margen de 45 min
    return busyParsed.filter((b) => overlaps(s, e, b.start, b.end)).length < STATION_COUNT;
  });
}

export function isoDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function prettyDate(dateISO: string): string {
  const d = new Date(dateISO + "T12:00:00");
  return d.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
}

export function shortDate(dateISO: string): string {
  const d = new Date(dateISO + "T12:00:00");
  return d.toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" });
}

export const APPOINTMENT_STATUSES = ["pending", "confirmed", "completed", "cancelled"] as const;
export type AppointmentStatus = (typeof APPOINTMENT_STATUSES)[number];

export const STATUS_LABELS: Record<AppointmentStatus, string> = {
  pending: "Pendiente de confirmar",
  confirmed: "Confirmada",
  completed: "Completada",
  cancelled: "Cancelada",
};
