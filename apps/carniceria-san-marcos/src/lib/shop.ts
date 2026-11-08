export const SITE = {
  name: "Carnicería San Marcos",
  claim: "El mejor corte te espera en el barrio",
  address: "C/ del Matadero 14, 28005 Madrid",
  phone: "+34 915 555 214",
  whatsappNumber: "34600123456",
  email: "hola@carniceriasanmarcos.es",
  schedule: {
    weekdays: "L–V · 8:30–14:30 / 17:00–20:00",
    saturday: "Sábado · 8:30–14:30",
    closed: "Domingos cerrado",
  },
  established: 1974,
  instagram: "https://instagram.com",
  mapsUrl: "https://maps.google.com/?q=Carnicer%C3%ADa+Madrid",
} as const;

export type Category = "vacuno" | "cerdo" | "cordero" | "ave" | "embutidos";

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "vacuno", label: "Vacuno" },
  { id: "cerdo", label: "Cerdo" },
  { id: "cordero", label: "Cordero" },
  { id: "ave", label: "Ave" },
  { id: "embutidos", label: "Embutidos" },
];

export type QuantityMap = Record<string, number>;

export type Product = {
  id: string;
  name: string;
  category: Category;
  pricePerKg: number;
  origin: string;
  description: string;
  badge?: string;
  /** Recomendación rápida de uso, mostrada como chip en el catálogo */
  bestFor?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "chuleton",
    name: "Chuletón de vaca vieja",
    category: "vacuno",
    pricePerKg: 52.0,
    origin: "Raza Avileña · 45 días de maduración",
    description:
      "Pieza entera cortada al momento, con su hueso. Madurada en nuestra cámara seca.",
    badge: "Estrella de la casa",
    bestFor: "Brasa y días especiales",
  },
  {
    id: "entrecot",
    name: "Entrecot de vacuno",
    category: "vacuno",
    pricePerKg: 24.5,
    origin: "Ganadería extremeña",
    description: "Marmoleado perfecto a la plancha o a la brasa.",
    bestFor: "Plancha rápida",
  },
  {
    id: "solomillo",
    name: "Solomillo de vacuno",
    category: "vacuno",
    pricePerKg: 38.9,
    origin: "Ganadería extremeña",
    description: "La pieza más tierna. Entero, en filetes o en medallones.",
    bestFor: "Cenas finas",
  },
  {
    id: "rabo",
    name: "Rabo de toro",
    category: "vacuno",
    pricePerKg: 16.0,
    origin: "Tierra de Barros",
    description: "Ideal para guisos largos. Ya limpio y troceado si lo pides.",
    bestFor: "Guisos de cuchara",
  },
  {
    id: "carne-picada",
    name: "Carne picada de primero",
    category: "vacuno",
    pricePerKg: 9.5,
    origin: "Molienda diaria",
    description: "Se pica al momento, nunca de víspera. Pídela mezclada o pura.",
    badge: "Se pica al momento",
    bestFor: "Burgers y boloñesa",
  },
  {
    id: "secreto",
    name: "Secreto ibérico",
    category: "cerdo",
    pricePerKg: 18.9,
    origin: "Cebo de campo",
    description: "Veteado en su punto justo. A la plancha, dos minutos por cara.",
    bestFor: "Plancha rápida",
  },
  {
    id: "pluma",
    name: "Pluma ibérica",
    category: "cerdo",
    pricePerKg: 21.0,
    origin: "Cebo de campo",
    description: "La joya del cerdo. Pieza pequeña, júgosa y sabrosa.",
    bestFor: "Brasa y días especiales",
  },
  {
    id: "costillas",
    name: "Costillas de cerdo",
    category: "cerdo",
    pricePerKg: 7.8,
    origin: "Criadero local",
    description: "Enteras o troceadas para guiso o barbacoa.",
    bestFor: "Barbacoa",
  },
  {
    id: "lomo",
    name: "Lomo de cerdo",
    category: "cerdo",
    pricePerKg: 11.5,
    origin: "Criadero local",
    description: "En pieza entera para asar o en filetes finos.",
  },
  {
    id: "paletilla",
    name: "Paletilla de cordero lechal",
    category: "cordero",
    pricePerKg: 22.5,
    origin: "Lechal de Segovia",
    description: "Para asado de domingo. La abrimos o la dejamos entera.",
    badge: "Asado de domingo",
    bestFor: "Asados de horno",
  },
  {
    id: "chuletas-cordero",
    name: "Chuletas de cordero",
    category: "cordero",
    pricePerKg: 26.0,
    origin: "Oveja de la Sierra",
    description: "Al pimiento o a la brasa, con romero y sal gruesa.",
    bestFor: "Brasa y días especiales",
  },
  {
    id: "pierna-cordero",
    name: "Pierna de cordero",
    category: "cordero",
    pricePerKg: 19.0,
    origin: "Oveja de la Sierra",
    description: "Desosada si quieres rellenarla. Perfecta para ocho comensales.",
    bestFor: "Asados de horno",
  },
  {
    id: "pollo-entero",
    name: "Pollo de corral entero",
    category: "ave",
    pricePerKg: 6.9,
    origin: "Granja de Toledo",
    description: "Corral, alimentación natural. Troceado gratis si lo prefieres.",
    bestFor: "Asados de horno",
  },
  {
    id: "muslos",
    name: "Muslos y contramuslos",
    category: "ave",
    pricePerKg: 5.9,
    origin: "Granja de Toledo",
    description: "Despiezados el mismo día. El básico de la semana.",
    bestFor: "Menús de semana",
  },
  {
    id: "pavo-filetes",
    name: "Filetes de pavo",
    category: "ave",
    pricePerKg: 8.5,
    origin: "Pechuga fresca",
    description: "Cortados al grosor que quieras, del día.",
    bestFor: "Menús de semana",
  },
  {
    id: "chorizo",
    name: "Chorizo curado",
    category: "embutidos",
    pricePerKg: 16.0,
    origin: "Elaboración propia",
    description: "Dulce o picante. Curado en nuestro secadero.",
    bestFor: "Picoteo",
  },
  {
    id: "jamon",
    name: "Jamón de cebo ibérico",
    category: "embutidos",
    pricePerKg: 28.0,
    origin: "Guijuelo",
    description: "Cortado a cuchillo en el momento. Lonchas finas, como debe ser.",
    badge: "A cuchillo",
    bestFor: "Picoteo",
  },
  {
    id: "morcilla",
    name: "Morcilla de cebolla",
    category: "embutidos",
    pricePerKg: 7.5,
    origin: "Elaboración propia",
    description: "La de toda la vida, para asar o para la tortilla.",
    bestFor: "Barbacoa",
  },
];

export const CUT_MAP: {
  id: string;
  label: string;
  desc: string;
  x: number;
  y: number;
}[] = [
  { id: "solomillo", label: "Solomillo", desc: "La pieza más tierna", x: 52, y: 34 },
  { id: "lomo", label: "Lomo alto y bajo", desc: "Filetes finos y jugosos", x: 52, y: 46 },
  { id: "costilla", label: "Costilla", desc: "Para asar o guisar", x: 51, y: 57 },
  { id: "chuleton", label: "Chuletón", desc: "Madurado en cámara", x: 51, y: 66 },
  { id: "entrecot", label: "Entrecot", desc: "Marmoleado, a la brasa", x: 52, y: 75 },
  { id: "rabo", label: "Rabo", desc: "Guisos de cuchara", x: 52, y: 88 },
];

export const TESTIMONIALS = [
  {
    name: "María del Mar",
    text: "Pedí el chuletón por WhatsApp y a las dos horas estaba en casa, cortado perfecto. Llevo diez años comprando aquí y no pienso cambiar.",
  },
  {
    name: "Javier R.",
    text: "El secreto ibérico sale en su punto exacto. Te pesan delante, te dicen el precio sin sorpresas y siempre hay consejo nuevo para cocinarlo.",
  },
  {
    name: "Laura G.",
    text: "Los pedidos de empresa los tengo resueltos: el pedido del viernes llega puntual y la carne picada sabe a carne de verdad.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Puedo pedir online y recoger en la tienda?",
    a: "Sí. Escríbenos tu pedido por WhatsApp, lo preparamos en el día y te avisamos cuando esté listo. También lo llevamos a casa si vives en el barrio.",
  },
  {
    q: "¿Cómo funciona el pedido por WhatsApp?",
    a: "Elige los productos en el catálogo con las cantidades que quieras y pulsa «Enviar pedido». Se abre un WhatsApp con tu pedido ya redactado. Lo confirmamos con el precio final y la hora de entrega.",
  },
  {
    q: "¿Cómo funcionan los packs?",
    a: "Los packs son lotes con descuento que cambian según la temporada: barbacoa en verano, cocido en invierno. Pulsa «Añadir pack» y entra en tu pedido como una línea; si quieres cambiar algo, dínoslo en el WhatsApp.",
  },
  {
    q: "¿Los precios son por kilo?",
    a: "Sí, todos los precios del catálogo son por kilo, con IVA incluido. Te pesamos delante y el peso final siempre lo confirmamos antes de cobrar.",
  },
  {
    q: "¿Cuánto cuesta el envío?",
    a: "Dentro del barrio, reparto propio el mismo día: gratis desde 40 €, 2,90 € por debajo, o recogida en tienda sin coste. Para el resto de la península enviamos en 24 h con mensajería refrigerada desde 7,90 €.",
  },
  {
    q: "¿Puedo pedir cortes especiales o encargos grandes?",
    a: "Claro: piezas enteras, media res para eventos, asados grandes… Cuéntanoslo en el WhatsApp y lo preparamos con 24–48 h de antelación.",
  },
];

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function euro(n: number): string {
  return n.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}

// ── Packs promocionales ────────────────────────────────
export type Pack = {
  id: string;
  name: string;
  price: number;
  compareAt: number;
  items: { productId: string; kg: number }[];
  tag: string;
  description: string;
};

export const PACKS: Pack[] = [
  {
    id: "pack-barbacoa",
    name: "Pack Barbacoa",
    price: 54.0,
    compareAt: 65.4,
    items: [
      { productId: "costillas", kg: 2 },
      { productId: "morcilla", kg: 1 },
      { productId: "chorizo", kg: 1 },
      { productId: "secreto", kg: 0.5 },
    ],
    tag: "Fin de semana",
    description: "Para seis comensales: costillas, chorizo, morcilla y secreto. Todo listo para la brasa.",
  },
  {
    id: "pack-cocido",
    name: "Pack Cocido",
    price: 23.0,
    compareAt: 28.9,
    items: [
      { productId: "rabo", kg: 0.8 },
      { productId: "morcilla", kg: 0.5 },
      { productId: "muslos", kg: 0.8 },
    ],
    tag: "Invierno",
    description: "El hueso, el morro y la musculatura que necesita un caldo con cuerpo. Receta incluida.",
  },
  {
    id: "pack-semana",
    name: "Pack Semana",
    price: 32.0,
    compareAt: 40.5,
    items: [
      { productId: "muslos", kg: 1.5 },
      { productId: "pavo-filetes", kg: 1 },
      { productId: "carne-picada", kg: 1 },
      { productId: "lomo", kg: 0.5 },
    ],
    tag: "Ahorro",
    description: "Cuatro cenas resueltas para toda la familia, con variedad y a buen precio.",
  },
  {
    id: "pack-especial",
    name: "Pack Especial",
    price: 89.0,
    compareAt: 105.0,
    items: [
      { productId: "chuleton", kg: 1.2 },
      { productId: "pluma", kg: 0.5 },
      { productId: "jamon", kg: 0.2 },
    ],
    tag: "Celebración",
    description: "Chuletón madurado, pluma ibérica y jamón a cuchillo para una ocasión memorable.",
  },
];

// ── Recetas ────────────────────────────────────────────
export type Recipe = {
  id: string;
  title: string;
  minutes: number;
  difficulty: "Fácil" | "Media" | "Trabajo";
  description: string;
  steps: string[];
  items: { productId: string; kg: number }[];
};

export const RECIPES: Recipe[] = [
  {
    id: "chuleton-brasa",
    title: "Chuletón a la brasa al punto",
    minutes: 40,
    difficulty: "Media",
    description:
      "El ritual completo: sal gruesa, brasa floja y paciencia. Así sale como en la foto, jugoso y con costra.",
    steps: [
      "Saca el chuletón 2 h antes y sécalo con papel de cocina.",
      "Brasa floja, 4–5 min por cara, solo dando la vuelta.",
      "Deja reposar 5 min sobre una rejilla antes de cortar.",
      "Corta a lo largo del hueso, en tiras gruesas, y sal al final.",
    ],
    items: [{ productId: "chuleton", kg: 1.2 }],
  },
  {
    id: "secreto-plancha",
    title: "Secreto con patatas a lo pobre",
    minutes: 25,
    difficulty: "Fácil",
    description: "Cena de viernes en media hora. El secreto se hace solo; las patatas, casi.",
    steps: [
      "Plancha muy caliente, 2 min por cara. Reserva.",
      "En la misma plancha, patatas en láminas con ajo y pimentón.",
      "Sirve el secreto encima con perejil y limón.",
    ],
    items: [
      { productId: "secreto", kg: 0.6 },
      { productId: "chorizo", kg: 0.2 },
    ],
  },
  {
    id: "rabos-guiso",
    title: "Rabo de toro al vino tinto",
    minutes: 180,
    difficulty: "Trabajo",
    description: "Guiso de domingo que sabe mejor al día siguiente. De una sale para cuatro.",
    steps: [
      "Sella el rabo y resérvalo.",
      "Po cebolla, zanahoria y ajo; añade el rabo y medio litro de tinto.",
      "Guisa a fuego lento 2,5 h hasta que la carne se desprenda.",
    ],
    items: [{ productId: "rabo", kg: 1 }],
  },
];

// ── Helpers de pedido ──────────────────────────────────
export type OrderLine = { kind: "kg" | "pack"; productId?: string; packId?: string; qty: number };

export function packCartLines(cart: QuantityMap, packs: Record<string, number>): OrderLine[] {
  const lines: OrderLine[] = [];
  for (const p of PRODUCTS) {
    const qty = cart[p.id] ?? 0;
    if (qty > 0) lines.push({ kind: "kg", productId: p.id, qty });
  }
  for (const [packId, n] of Object.entries(packs)) {
    if (n > 0) lines.push({ kind: "pack", packId, qty: n });
  }
  return lines;
}

export function sumLines(lines: OrderLine[]): number {
  return lines.reduce((sum, l) => {
    if (l.kind === "kg" && l.productId) {
      const p = PRODUCTS.find((x) => x.id === l.productId);
      return p ? sum + p.pricePerKg * l.qty : sum;
    }
    if (l.kind === "pack" && l.packId) {
      const pk = PACKS.find((x) => x.id === l.packId);
      return pk ? sum + pk.price * l.qty : sum;
    }
    return sum;
  }, 0);
}

export function addToCart(cart: QuantityMap, productId: string, kg: number): QuantityMap {
  return { ...cart, [productId]: Math.min((cart[productId] ?? 0) + kg, 20) };
}

// ── Abierto / cerrado ahora ────────────────────────────
export function openNow(date = new Date()): { open: boolean; text: string } {
  const day = date.getDay(); // 0 = domingo
  const mins = date.getHours() * 60 + date.getMinutes();
  const morning = mins >= 8 * 60 + 30 && mins < 14 * 60 + 30;
  const evening = mins >= 17 * 60 && mins < 20 * 60;
  if (day === 0) return { open: false, text: "Hoy cerrado · lunes 8:30" };
  if (day === 6)
    return morning
      ? { open: true, text: "Abierto hasta las 14:30" }
      : { open: false, text: "Cerrado · lunes 8:30" };
  if (morning) return { open: true, text: "Abierto hasta las 14:30" };
  if (evening) return { open: true, text: "Abierto hasta las 20:00" };
  return {
    open: false,
    text: mins < 8 * 60 + 30 ? "Abrimos a las 8:30" : "Cerrado · abrimos a las 17:00",
  };
}

// ── Repetir el último pedido (localStorage) ────────────
const LAST_ORDER_KEY = "sanmarcos-last-order";

export type LastOrder = { cart: QuantityMap; packs: Record<string, number>; at: number };

export function saveLastOrder(o: LastOrder): void {
  try {
    localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(o));
  } catch {
    /* almacenamiento no disponible */
  }
}

export function loadLastOrder(): LastOrder | null {
  try {
    const raw = localStorage.getItem(LAST_ORDER_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LastOrder;
    return parsed?.cart ? parsed : null;
  } catch {
    return null;
  }
}

// ── Franjas de entrega ─────────────────────────────────
export type Slot = { id: string; label: string; minutes: number };

/** Devuelve las franjas válidas según el método y la hora actual. */
export function availableSlots(method: "recogida" | "domicilio", now = new Date()): Slot[] {
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  // Domingo: no hay reparto; ofrecemos el lunes por la mañana.
  if (day === 0) {
    return method === "recogida"
      ? [{ id: "lun-9", label: "Lunes 9:00–11:00", minutes: -1 }]
      : [{ id: "lun-11", label: "Lunes 11:00–13:00", minutes: -1 }];
  }
  if (day === 6) {
    if (mins < 7 * 60 + 30) {
      return [
        { id: "sab-9", label: "Hoy 9:00–11:00", minutes: 9 * 60 },
        { id: "sab-11", label: "Hoy 11:00–13:00", minutes: 11 * 60 },
      ];
    }
    if (mins < 11 * 60) {
      return [{ id: "sab-11", label: "Hoy 11:00–13:00", minutes: 11 * 60 }];
    }
    return [{ id: "lun-9", label: "Lunes 9:00–11:00", minutes: -1 }];
  }
  const slots: Slot[] = [
    { id: "manana", label: "Hoy 9:00–11:00", minutes: 9 * 60 },
    { id: "mediodia", label: "Hoy 11:00–13:00", minutes: 11 * 60 },
    { id: "tarde", label: "Hoy 18:00–20:00", minutes: 18 * 60 },
    { id: "manana2", label: "Mañana 9:00–11:00", minutes: -1 },
  ];
  return slots.filter((s) => s.minutes === -1 || mins <= s.minutes - 120);
}

// ── Stock destacado del día ────────────────────────────
export const TODAY_SPECIALS: {
  productId: string;
  note: string;
  units: string;
}[] = [
  { productId: "chuleton", note: "Piezas de 1–1,2 kg recién maduradas", units: "6 piezas" },
  { productId: "paletilla", note: "Lechal de Segovia, llegadas de ayer", units: "4 piezas" },
  { productId: "carne-picada", note: "Molienda de las 9:00, primera y segunda", units: "Ilimitado" },
];

// ── Calculadora de raciones ────────────────────────────
export const MEAT_TYPES = [
  { id: "vacuno", label: "Vacuno / cordero", perPerson: 0.4 },
  { id: "cerdo", label: "Cerdo / ave", perPerson: 0.3 },
  { id: "embutidos", label: "Embutidos y picoteo", perPerson: 0.15 },
] as const;

export type MeatTypeId = (typeof MEAT_TYPES)[number]["id"];

export function gramsFor(people: number, type: MeatTypeId): number {
  const t = MEAT_TYPES.find((m) => m.id === type) ?? MEAT_TYPES[0];
  return Math.round(people * t.perPerson * 100) / 100;
}
export type Subscription = {
  id: string;
  name: string;
  price: number;
  cadence: string;
  description: string;
  items: { productId: string; kg: number }[];
};

export const SUBSCRIPTIONS: Subscription[] = [
  {
    id: "lote-semanal",
    name: "Lote Semanal Familiar",
    price: 39,
    cadence: "Cada semana",
    description:
      "Las cuatro cenas de la semana resueltas para una familia. Nunca repites carne dos días seguidos.",
    items: [
      { productId: "muslos", kg: 1.5 },
      { productId: "pavo-filetes", kg: 1 },
      { productId: "carne-picada", kg: 1 },
      { productId: "lomo", kg: 0.5 },
    ],
  },
  {
    id: "lote-brasa",
    name: "Lote Brasa Quincenal",
    price: 62,
    cadence: "Cada 2 semanas",
    description:
      "Para los que hacen fuego cada fin de semana: chuletón, secreto, costillas y chorizo de la casa.",
    items: [
      { productId: "chuleton", kg: 1 },
      { productId: "secreto", kg: 0.5 },
      { productId: "costillas", kg: 1.5 },
      { productId: "chorizo", kg: 0.5 },
    ],
  },
  {
    id: "lote-selecto",
    name: "Lote Selecto Mensual",
    price: 95,
    cadence: "Cada mes",
    description:
      "Lo mejor de la casa una vez al mes: chuletón madurado, solomillo, pluma y jamón a cuchillo.",
    items: [
      { productId: "chuleton", kg: 1.2 },
      { productId: "solomillo", kg: 0.6 },
      { productId: "pluma", kg: 0.5 },
      { productId: "jamon", kg: 0.3 },
    ],
  },
];

// ── Cobertura de envío por código postal ───────────────
export function postalCoverage(
  zip: string,
): { inNeighborhood: boolean; title: string; text: string } | null {
  if (!/^\d{5}$/.test(zip.trim())) return null;
  if (zip.trim().startsWith("280")) {
    return {
      inNeighborhood: true,
      title: "¡Sí! Repartimos en tu zona",
      text: "Reparto propio el mismo día, gratis desde 40 €. Pedidos hasta 2 h antes del cierre.",
    };
  }
  return {
    inNeighborhood: false,
    title: "Envío refrigerado en 24 h",
    text: "Llegamos a toda la península con mensajería refrigerada desde 7,90 €. Sale en cajas isotermas de 8:00 a 13:00.",
  };
}

// ── Comparativa con la competencia ─────────────────────
export const COMPARISON: {
  feature: string;
  supermarket: string;
  traditional: string;
  ours: string;
}[] = [
  {
    feature: "Maduración",
    supermarket: "No hay",
    traditional: "Solo si toca",
    ours: "Cámara seca propia · 45 días",
  },
  {
    feature: "Despiece y picado",
    supermarket: "Envasado de fábrica",
    traditional: "En el mostrador",
    ours: "Delante de ti, al momento",
  },
  {
    feature: "Precio por kilo online",
    supermarket: "Ofertas confusas",
    traditional: "Hay que ir a mirarlo",
    ours: "Catálogo con todos los precios",
  },
  {
    feature: "Pedir sin colas",
    supermarket: "Autocaja… de carne no",
    traditional: "Solo por teléfono",
    ours: "WhatsApp 24/7, se confirma al abrir",
  },
  {
    feature: "Recetas y consejo",
    supermarket: "Ninguno",
    traditional: "Si el carnicero tiene tiempo",
    ours: "Recetas con lista de compra incluida",
  },
  {
    feature: "Si algo falla",
    supermarket: "Devolución impersonal",
    traditional: "Palabra del tendero",
    ours: "Cambio sin preguntas, siempre",
  },
];
