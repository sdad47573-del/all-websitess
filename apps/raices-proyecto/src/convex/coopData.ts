/**
 * Static catalog content for the cooperativa.
 *
 * The *shape* of the data lives in `schema.ts`; this file holds the actual
 * farms, crops, plans and pickup points that get written into the database the
 * first time the catalog is read. Keeping it here means editing the coop's
 * offering never means touching a query.
 */

export type FarmerSeed = {
  name: string;
  slug: string;
  location: string;
  bio: string;
  since: number;
  accent: string;
  practices: string[];
};

export type ProduceSeed = {
  name: string;
  category: string;
  farmer: string;
  description: string;
  months: number[];
  unit: string;
  priceCents: number;
  emoji: string;
};

export type RecipeSeed = {
  name: string;
  minutes: number;
  difficulty: string;
  blurb: string;
  pantry: string[];
  produceSlugs: string[];
};

export type TestimonialSeed = {
  name: string;
  neighborhood: string;
  quote: string;
  plan: string;
  rating: number;
  monthsAgo: number;
};

export type CostSeed = {
  label: string;
  description: string;
  sharePercent: number;
  farmerPayout?: boolean;
};

export type PantrySeed = {
  name: string;
  description: string;
  unit: string;
  priceCents: number;
  producer: string;
  farmer?: string;
  emoji: string;
};

export type ZoneSeed = {
  name: string;
  neighborhoods: string[];
  feeCents: number;
  freeAboveCents: number;
  day: string;
  blurb: string;
};

export type VisitSeed = {
  farmer: string;
  title: string;
  blurb: string;
  /** Days from now. */
  inDays: number;
  startHour: number;
  durationHours: number;
  capacity: number;
  spotsLeft: number;
  priceCents: number;
};

export type AdoptionSeed = {
  produce: string;
  plot: string;
  stage: string;
  /** Months ago that it was sown, used to date the timeline. */
  sownMonthsAgo: number;
  story: string;
};

/** Growth stages, in order. Used to draw the season timeline. */
export const GROWTH_STAGES = [
  "Siembra",
  "Brote",
  "Floracion",
  "Fruto",
  "Cosecha",
] as const;

export type PlanSeed = {
  name: string;
  tagline: string;
  description: string;
  weeklyPriceCents: number;
  sizeLabel: string;
  itemsPerBox: number;
  perks: string[];
  recommended?: boolean;
};

export type PickupSeed = {
  name: string;
  address: string;
  neighborhood: string;
  day: string;
  window: string;
  notes?: string;
};

export const FARMERS: FarmerSeed[] = [
  {
    name: "Finca La Retamilla",
    slug: "la-retamilla",
    location: "Llanera del Silencio, 6 ha",
    bio: "Tres generaciones hortelanas. Cultivamos en secano al pie de la sierra y no usamos herbicidas desde 1998.",
    since: 1998,
    accent: "oklch(0.55 0.13 150)",
    practices: ["Certificado ecologico", "Riego por goteo", "Compost propio"],
  },
  {
    name: "Huerta del Barranco",
    slug: "huerta-del-barranco",
    location: "Valle de Araya, 4 ha",
    bio: "Parcelas pequenas con rotacion larga y cultivos de cobertura para devolver vida al suelo.",
    since: 2011,
    accent: "oklch(0.62 0.15 70)",
    practices: ["Rotacion a 6 anos", "Semillas propias", "Franja silvestre"],
  },
  {
    name: "La Vega de Sonia",
    slug: "vega-de-sonia",
    location: "Ribera del Adaja, 3 ha",
    bio: "Exclusivamente hoja verde y aromáticas. Abonamos con verde y cosechamos antes del amanecer.",
    since: 2015,
    accent: "oklch(0.58 0.12 205)",
    practices: ["Abono verde", "Cosecha al alba", "Sin fitosanitarios"],
  },
  {
    name: "Finca El Almendro",
    slug: "el-almendro",
    location: "Los Montes Altos, 5 ha",
    bio: "Frutales y solanaceas en secano. La finca que mas peso tiene en el volumen de la cooperativa.",
    since: 2004,
    accent: "oklch(0.6 0.16 35)",
    practices: ["Frutal y solanacea", "Riego por surco", "Cajas reutilizables"],
  },
  {
    name: "Los Huertos de Nuria",
    slug: "huertos-de-nuria",
    location: "Puerto de la Tsarza, 2 ha",
    bio: "La finca mas joven. Apiario, huerta de invierno y produccion de setas sobre subproducto de la madera.",
    since: 2020,
    accent: "oklch(0.56 0.11 300)",
    practices: ["Huerta de invierno", "Apiario propio", "Setas"],
  },
];

export const PRODUCE: ProduceSeed[] = [
  {
    name: "Tomate de ensalada",
    category: "Fruto",
    farmer: "el-almendro",
    description: "Piel fina y pulpa compacta. Se planta en abril y aguanta hasta que llega el frio.",
    months: [6, 7, 8, 9, 10],
    unit: "kg",
    priceCents: 420,
    emoji: "🍅",
  },
  {
    name: "Pimiento italiano",
    category: "Fruto",
    farmer: "el-almendro",
    description: "Carnoso, pocas semillas. Pensado para freir y para asar.",
    months: [7, 8, 9, 10],
    unit: "kg",
    priceCents: 480,
    emoji: "🫑",
  },
  {
    name: "Berenjena listada",
    category: "Fruto",
    farmer: "el-almendro",
    description: "La reina de la huerta de agosto. Mejor asada o rebozada, con pan de la panaderia de al lado.",
    months: [7, 8, 9, 10],
    unit: "kg",
    priceCents: 390,
    emoji: "🍆",
  },
  {
    name: "Berenjena blanca",
    category: "Fruto",
    farmer: "el-almendro",
    description: "Blanca y carnosa, de sabor muy suave. La que mas se usa en cocina vegetal.",
    months: [8, 9, 10],
    unit: "kg",
    priceCents: 370,
    emoji: "🍆",
  },
  {
    name: "Calabacin",
    category: "Fruto",
    farmer: "huerta-del-barranco",
    description: "Cosechado joven, de piel fina y sin semillas duras. Aguanta bien una semana en casa.",
    months: [6, 7, 8, 9],
    unit: "kg",
    priceCents: 250,
    emoji: "🥒",
  },
  {
    name: "Pepino corto",
    category: "Fruto",
    farmer: "la-retamilla",
    description: "Crujiente y de piel fina. El favorito de las ensaladas de septiembre.",
    months: [6, 7, 8, 9],
    unit: "kg",
    priceCents: 290,
    emoji: "🥒",
  },
  {
    name: "Calabaza de otono",
    category: "Fruto",
    farmer: "huerta-del-barranco",
    description: "Muy buena de curado y mas dulce tras unas semanas en almacen. Aguanta todo el invierno.",
    months: [9, 10, 11, 12, 1],
    unit: "kg",
    priceCents: 230,
    emoji: "🎃",
  },
  {
    name: "Calabaza plana",
    category: "Fruto",
    farmer: "huerta-del-barranco",
    description: "Aplanada y de pulpa naranja intensa. La que se hace asada entera.",
    months: [9, 10, 11, 12],
    unit: "kg",
    priceCents: 210,
    emoji: "🎃",
  },
  {
    name: "Acelga de hoja",
    category: "Hoja",
    farmer: "vega-de-sonia",
    description: "Tallos rojos y hojas verde oscuro. Se corta a ras y vuelve a brotar.",
    months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
    unit: "manojo",
    priceCents: 180,
    emoji: "🥬",
  },
  {
    name: "Espinaca baby",
    category: "Hoja",
    farmer: "vega-de-sonia",
    description: "Hojas tiernas de brote, lavadas y listas para ensalada.",
    months: [10, 11, 12, 1, 2, 3, 4],
    unit: "bolsa 200 g",
    priceCents: 260,
    emoji: "🌿",
  },
  {
    name: "Lechuga cogollo",
    category: "Hoja",
    farmer: "vega-de-sonia",
    description: "Cogollo compacto de corazon, crujiente incluso a mitad de semana.",
    months: [4, 5, 6, 9, 10, 11],
    unit: "unidad",
    priceCents: 150,
    emoji: "🥬",
  },
  {
    name: "Berro",
    category: "Hoja",
    farmer: "vega-de-sonia",
    description: "Brotes tiernos con un toque picante. Se cosecha en charca, no en tierra.",
    months: [1, 2, 3, 10, 11, 12],
    unit: "bolsa 100 g",
    priceCents: 320,
    emoji: "🌱",
  },
  {
    name: "Endibia",
    category: "Hoja",
    farmer: "vega-de-sonia",
    description: "Las hojas de fuera son mas amargas; el corazon queda dulce y crujiente.",
    months: [10, 11, 12, 1, 2, 3],
    unit: "unidad",
    priceCents: 170,
    emoji: "🥬",
  },
  {
    name: "Zanahoria lavada",
    category: "Raiz",
    farmer: "la-retamilla",
    description: "De suelo franco, dulce y crujiente. Se conserva semanas en la nevera.",
    months: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12],
    unit: "manojo 500 g",
    priceCents: 240,
    emoji: "🥕",
  },
  {
    name: "Boniato",
    category: "Raiz",
    farmer: "la-retamilla",
    description: "Asado sabe a mucho mas. Se deja curar dos semanas tras la cosecha.",
    months: [10, 11, 12, 1, 2, 3],
    unit: "kg",
    priceCents: 280,
    emoji: "🍠",
  },
  {
    name: "Remolacha roja",
    category: "Raiz",
    farmer: "la-retamilla",
    description: "De sabor terroso. Excelente asada o rallada con manzana.",
    months: [6, 7, 8, 9, 10, 11, 12],
    unit: "manojo 500 g",
    priceCents: 260,
    emoji: "🫜",
  },
  {
    name: "Cebolla dulce",
    category: "Raiz",
    farmer: "la-retamilla",
    description: "Poco picante. La mejor para templar o para elaboration.",
    months: [7, 8, 9, 10, 11, 12],
    unit: "kg",
    priceCents: 200,
    emoji: "🧅",
  },
  {
    name: "Ajo nuevo",
    category: "Raiz",
    farmer: "huertos-de-nuria",
    description: "Ajo tierno recien curado, con la piel como guantes de papel.",
    months: [6, 7],
    unit: "rismo",
    priceCents: 350,
    emoji: "🧄",
  },
  {
    name: "Puerro",
    category: "Raiz",
    farmer: "huertos-de-nuria",
    description: "Tronco blanco tierno para el caldo y para la tortilla.",
    months: [1, 2, 3, 4, 9, 10, 11, 12],
    unit: "manojo 3 uds",
    priceCents: 270,
    emoji: "🥬",
  },
  {
    name: "Nabo",
    category: "Raiz",
    farmer: "la-retamilla",
    description: "Blanco y suave. Excelente asado o en pure.",
    months: [1, 2, 3, 4, 10, 11, 12],
    unit: "manojo 500 g",
    priceCents: 250,
    emoji: "🥔",
  },
  {
    name: "Patata de la Ribera",
    category: "Raiz",
    farmer: "la-retamilla",
    description: "Harinosa, ideal para pure. Se guarda en el almacen de la cooperativa.",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    unit: "kg",
    priceCents: 190,
    emoji: "🥔",
  },
  {
    name: "Judia verde fina",
    category: "Legumbre",
    farmer: "huerta-del-barranco",
    description: "Mangarete y sin hilos. Se recolecta cada dos dias en temporada.",
    months: [7, 8, 9],
    unit: "kg",
    priceCents: 440,
    emoji: "🫛",
  },
  {
    name: "Guisante dulce",
    category: "Legumbre",
    farmer: "huerta-del-barranco",
    description: "Vainas llenas hasta arriba. Solo disponible unas semanas al ano.",
    months: [4, 5, 6],
    unit: "kg",
    priceCents: 490,
    emoji: "🫛",
  },
  {
    name: "Habas",
    category: "Legumbre",
    farmer: "huerta-del-barranco",
    description: "Habas tiernas de ciclo corto, para cuando aun hace frio.",
    months: [3, 4, 5, 6],
    unit: "kg",
    priceCents: 380,
    emoji: "🫛",
  },
  {
    name: "Coliflor",
    category: "Brasica",
    farmer: "huertos-de-nuria",
    description: "Cabezas blancas y compactas. La hoja tambien se come.",
    months: [1, 2, 3, 10, 11, 12],
    unit: "unidad",
    priceCents: 310,
    emoji: "🥦",
  },
  {
    name: "Brocoli",
    category: "Brasica",
    farmer: "huertos-de-nuria",
    description: "Pivas bien cerradas y tiernas. Mejor al vapor que pasadas por agua.",
    months: [1, 2, 3, 10, 11, 12],
    unit: "unidad",
    priceCents: 290,
    emoji: "🥦",
  },
  {
    name: "Col rizada",
    category: "Brasica",
    farmer: "huertos-de-nuria",
    description: "Hojas altas y rizadas, de las que aguantan bien el invierno.",
    months: [1, 2, 3, 9, 10, 11, 12],
    unit: "unidad",
    priceCents: 220,
    emoji: "🥬",
  },
  {
    name: "Setas de ostra",
    category: "Setas",
    farmer: "huertos-de-nuria",
    description: "Cultivadas sobre subproducto de la madera de podadores locales.",
    months: [9, 10, 11, 12, 1, 2, 3, 4],
    unit: "250 g",
    priceCents: 450,
    emoji: "🍄",
  },
  {
    name: "Albahaca morada",
    category: "Aromatica",
    farmer: "vega-de-sonia",
    description: "Muy aromatica. Mejor usarla el mismo dia, asi que va en la cesta corta.",
    months: [6, 7, 8, 9, 10],
    unit: "manojo",
    priceCents: 160,
    emoji: "🌱",
  },
  {
    name: "Perejil rizado",
    category: "Aromatica",
    farmer: "vega-de-sonia",
    description: "Rico en sabor y siempre fresco. No falta en ninguna caja.",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    unit: "manojo",
    priceCents: 140,
    emoji: "🌿",
  },
  {
    name: "Cebollino",
    category: "Aromatica",
    farmer: "huerta-del-barranco",
    description: "Fino y de color intenso. Se corta a ras y rebrota.",
    months: [4, 5, 6, 7, 8, 9],
    unit: "manojo",
    priceCents: 150,
    emoji: "🌿",
  },
  {
    name: "Flor de calabaza",
    category: "Aromatica",
    farmer: "huerta-del-barranco",
    description: "Flores de los dias mas calurosos. Se comen rellenas.",
    months: [6, 7, 8, 9],
    unit: "unidad",
    priceCents: 190,
    emoji: "🌼",
  },
];

export const PLANS: PlanSeed[] = [
  {
    name: "Cesta pequena",
    tagline: "Para 1-2 personas",
    description:
      "El punto de entrada a la cooperativa. Cinco piezas de temporada, elegidas por el equipo de huerta segun lo que mejor este esa semana.",
    weeklyPriceCents: 2200,
    sizeLabel: "unos 3 kg, 5 piezas",
    itemsPerBox: 5,
    perks: [
      "5 piezas de temporada por semana",
      "Cambias 1 pieza de cada caja",
      "Ficha de la finca de origen en cada entrega",
    ],
  },
  {
    name: "Cesta familiar",
    tagline: "Para 3-4 personas",
    description:
      "La mas elegida. Suficiente para cocinar de verdad toda la semana, con hoja, raiz y fruto en la misma caja.",
    weeklyPriceCents: 3800,
    sizeLabel: "unos 6 kg, 8-9 piezas",
    itemsPerBox: 9,
    perks: [
      "8-9 piezas de temporada por semana",
      "Cambias hasta 3 piezas de cada caja",
      "Acceso a cosecha tu mismo en La Retamilla",
      "Hoja de campo: que esta plantado ahora",
    ],
    recommended: true,
  },
  {
    name: "Cesta grande",
    tagline: "Para 5+ personas o para guardar",
    description:
      "Pensada para hogares grandes o para quien congela. Prioriza raiz y hoja de guarda por encima de la hoja de temporada.",
    weeklyPriceCents: 5200,
    sizeLabel: "unos 9 kg, 12-14 piezas",
    itemsPerBox: 13,
    perks: [
      "12-14 piezas de temporada por semana",
      "Cambias hasta 5 piezas de cada caja",
      "Cosecha tu mismo todo el ano",
      "20% de descuento en setas y en extras",
    ],
  },
];

/**
 * Indicative average shelf price at a Spanish supermarket chain, per same unit.
 *
 * This is the number that decides the comparison-shopping reflex. Claiming
 * "better price" is what every direct-to-farmer site already does; publishing
 * the actual shelf price per item is what none of them do, because it is
 * checkable. Same unit basis as `ProduceSeed.priceCents`.
 */
export const SUPERMARKET_PRICE: Record<string, number> = {
  "Tomate de ensalada": 580,
  "Pimiento italiano": 690,
  "Berenjena listada": 540,
  "Berenjena blanca": 520,
  Calabacin: 390,
  "Pepino corto": 430,
  "Calabaza de otono": 320,
  "Calabaza plana": 300,
  "Acelga de hoja": 280,
  "Espinaca baby": 380,
  "Lechuga cogollo": 220,
  Berro: 450,
  Endibia: 260,
  "Zanahoria lavada": 330,
  Boniato: 390,
  "Remolacha roja": 360,
  "Cebolla dulce": 290,
  "Ajo nuevo": 480,
  Puerro: 380,
  Nabo: 340,
  "Patata de la Ribera": 270,
  "Judia verde fina": 620,
  "Guisante dulce": 690,
  Habas: 540,
  Coliflor: 430,
  Brocoli: 420,
  "Col rizada": 320,
  "Setas de ostra": 620,
  "Albahaca morada": 250,
  "Perejil rizado": 220,
  Cebollino: 230,
  "Flor de calabaza": 290,
};

/** Applied to any crop without an explicit shelf price above. */
export const SUPERMARKET_FALLBACK_MULTIPLIER = 1.4;

/**
 * What one portion of each crop looks like in a weekly box.
 *
 * The direct competitors publish exact weights per basket ("500 gr de
 * berenjenas, 1 kg de tomates"). Showing a bare crop name leaves the member
 * guessing how much they are actually getting, which is the fastest way to lose
 * trust on a box you cannot see before it arrives.
 */
export const PORTION: Record<string, string> = {
  "Tomate de ensalada": "1 kg",
  "Pimiento italiano": "500 g",
  "Berenjena listada": "500 g",
  "Berenjena blanca": "500 g",
  Calabacin: "1 kg",
  "Pepino corto": "500 g",
  "Calabaza de otono": "1 pieza",
  "Calabaza plana": "1 pieza",
  "Acelga de hoja": "1 manojo",
  "Espinaca baby": "1 bolsa de 200 g",
  "Lechuga cogollo": "1 unidad",
  Berro: "1 bolsa de 100 g",
  Endibia: "2 unidades",
  "Zanahoria lavada": "1 manojo",
  Boniato: "1 kg",
  "Remolacha roja": "1 manojo",
  "Cebolla dulce": "1 kg",
  "Ajo nuevo": "1 rismo",
  Puerro: "3 unidades",
  Nabo: "1 manojo",
  "Patata de la Ribera": "1,5 kg",
  "Judia verde fina": "500 g",
  "Guisante dulce": "500 g",
  Habas: "500 g",
  Coliflor: "1 unidad",
  Brocoli: "1 unidad",
  "Col rizada": "1 unidad",
  "Setas de ostra": "250 g",
  "Albahaca morada": "1 manojo",
  "Perejil rizado": "1 manojo",
  Cebollino: "1 manojo",
  "Flor de calabaza": "4 flores",
};

export const PORTION_FALLBACK = "1 racion";

/**
 * Recipes written against what the cooperative actually grows, so the panel can
 * tell a member which of these they can cook from the box already in their
 * kitchen. Meal kits sell the recipe and the ingredients together; here the
 * ingredients are already there.
 */
export const RECIPES: RecipeSeed[] = [
  {
    name: "Pisto lento",
    minutes: 45,
    difficulty: "Facil",
    blurb:
      "La receta que mas se pide en la cooperativa. Todo se corta fino y se deja a fuego lento, sin prisa, para que no se rompa la piel.",
    pantry: ["Aceite de oliva", "Sal", "Pimienta negra"],
    produceSlugs: [
      "tomate-de-ensalada",
      "pimiento-italiano",
      "berenjena-listada",
      "calabacin",
      "cebolla-dulce",
    ],
  },
  {
    name: "Berenjena asada con ajo",
    minutes: 30,
    difficulty: "Facil",
    blurb:
      "Asada entera hasta que se hace blanda y luego abierta al ajo. La forma mas facil de comerse berenjena sin que parezca mucho trabajo.",
    pantry: ["Aceite de oliva", "Sal", "Pimienta negra"],
    produceSlugs: ["berenjena-blanca", "ajo-nuevo", "perejil-rizado"],
  },
  {
    name: "Crema de calabaza",
    minutes: 40,
    difficulty: "Facil",
    blurb:
      "La calabaza de otoño curada tiene mas azucar y aguanta mejor la sopa. Se tritura con la patata para que espese sin nata.",
    pantry: ["Aceite de oliva", "Sal", "Nuez moscada"],
    produceSlugs: [
      "calabaza-de-otono",
      "puerro",
      "patata-de-la-ribera",
      "albahaca-morada",
    ],
  },
  {
    name: "Lentejas con espinacas",
    minutes: 35,
    difficulty: "Facil",
    blurb:
      "Las espinacas baby se añaden al final para que no se deshagan. Es el plato de los dias de primavera que hace buen tiempo.",
    pantry: ["Aceite de oliva", "Sal", "Pimentón dulce", "Comino"],
    produceSlugs: [
      "espinaca-baby",
      "zanahoria-lavada",
      "pimiento-italiano",
      "cebolla-dulce",
    ],
  },
  {
    name: "Tortilla de col rizada",
    minutes: 30,
    difficulty: "Media",
    blurb:
      "La col hay que blanquearla antes o queda muy dura. Con la patata ratoneada en la base, queda firme.",
    pantry: ["Aceite de oliva", "Sal", "Huevo"],
    produceSlugs: ["col-rizada", "patata-de-la-ribera", "cebolla-dulce"],
  },
  {
    name: "Wok de judias y setas",
    minutes: 20,
    difficulty: "Facil",
    blurb:
      "Veinte minutos y sin plan. La seta de ostra se suelta a fuego fuerte y no hay que cortarla.",
    pantry: ["Aceite de oliva", "Salsa de soja", "Sal"],
    produceSlugs: ["judia-verde-fina", "setas-de-ostra", "ajo-nuevo", "cebollino"],
  },
  {
    name: "Ensalada templada de acelga y remolacha",
    minutes: 15,
    difficulty: "Facil",
    blurb:
      "Los tallos de la acelga se cortan finos y se saltan dos minutos. La remolacha asada aporta el color y el punto dulce.",
    pantry: ["Aceite de oliva", "Vinagre", "Sal", "Mostaza"],
    produceSlugs: ["acelga-de-hoja", "remolacha-roja", "cebollino"],
  },
  {
    name: "Ensalada de huerta",
    minutes: 10,
    difficulty: "Facil",
    blurb:
      "Diez minutos y sinhornear. El pepino corto y el tomate de la casa con aceite y albahaca no necesitan mas.",
    pantry: ["Aceite de oliva", "Sal", "Vinagre"],
    produceSlugs: [
      "pepino-corto",
      "tomate-de-ensalada",
      "albahaca-morada",
      "cebollino",
    ],
  },
  {
    name: "Coliflor al ajillo con boniato",
    minutes: 35,
    difficulty: "Facil",
    blurb:
      "El boniato asado en la misma bandeja que la coliflor al ajillo. Un solo plato de horno, sin ningun paso extra.",
    pantry: ["Aceite de oliva", "Ajo", "Sal", "Pimienta negra"],
    produceSlugs: ["coliflor", "boniato", "ajo-nuevo"],
  },
  {
    name: "Guisantes con jamon y puerro",
    minutes: 25,
    difficulty: "Facil",
    blurb:
      "El guisante dulce solo aparece unas semanas al año. Cuando esta, esta: con el puerro pochado y un poco de jamon es un clasico.",
    pantry: ["Aceite de oliva", "Sal", "Pimienta negra"],
    produceSlugs: ["guisante-dulce", "puerro", "pimiento-italiano"],
  },
];

/**
 * Plots a member can follow from sowing to harvest. No competitor does this:
 * the direct-to-farmer sites sell you a box, this lets you follow one row of
 * one crop on one farm and see it come in.
 */
export const ADOPTIONS: AdoptionSeed[] = [
  {
    produce: "Tomate de ensalada",
    plot: "Bancal 4, la terraza del almendro",
    stage: "Fruto",
    sownMonthsAgo: 5,
    story:
      "El bancal mas airing del almendro. 60 plantas, con el tallo atado a canizo porque el peso se los dobla. Se riega con el agua de la presa.",
  },
  {
    produce: "Calabaza de otoño",
    plot: "Bancal 12, junto al camino",
    stage: "Fruto",
    sownMonthsAgo: 4,
    story:
      "Caben seis personas andando entre las hileras. Cada planta da dos o tres frutas. Las ultimas del bancal son las que mas se guardan.",
  },
  {
    produce: "Acelga de hoja",
    plot: "Mesa 3, la mas sombreada",
    stage: "Cosecha",
    sownMonthsAgo: 3,
    story:
      "Debajo de los arboles, donde no llega el sol de mediodia. Se corta a ras y vuelve a brotar, asi que la misma mesa da hojas hasta abril.",
  },
  {
    produce: "Coliflor",
    plot: "Invernadero 2",
    stage: "Floracion",
    sownMonthsAgo: 2,
    story:
      "Dentro del invernadero entran cuatro semanas antes que en secano. Hay que ventilar a diario o se pasan y la cabeza no cuaja.",
  },
  {
    produce: "Setas de ostra",
    plot: "El tocon del chopo, junto al camino",
    stage: "Cosecha",
    sownMonthsAgo: 2,
    story:
      "Inoculado en el tocon que cayo tras la ultima poda. Sale en racimos y casi no se pela: la ostra es dura y aguanta.",
  },
  {
    produce: "Judía verde fina",
    plot: "Bancal 7, la trepa",
    stage: "Cosecha",
    sownMonthsAgo: 3,
    story:
      "Sube por cañizo de dos metros. Se recoge cada dos dias, porque en cuanto pasan de fase la vaina se endurece.",
  },
];

/**
 * Open days and activities. Members of the direct-to-farmer services write
 * that the farm visits are the best thing about them, and none of them let you
 * book one online. A cooperative can: the farms are owned by the same people
 * who would be hosting you.
 */
export const VISITS: VisitSeed[] = [
  {
    farmer: "huerta-del-barranco",
    title: "Poda y plantacion de invierno",
    blurb:
      "Mano a mano con los podadores. Trae guantes y ropa vieja, aqui hay de sobra.",
    inDays: 9,
    startHour: 10,
    durationHours: 3,
    capacity: 16,
    spotsLeft: 11,
    priceCents: 2500,
  },
  {
    farmer: "la-retamilla",
    title: "Riego por goteo y cabecera",
    blurb:
      "Como se riega un bancal en secano, y por que hay que rotar las parcelas.",
    inDays: 16,
    startHour: 9,
    durationHours: 2,
    capacity: 12,
    spotsLeft: 4,
    priceCents: 2000,
  },
  {
    farmer: "huertos-de-nuria",
    title: "Inoculacion de setas",
    blurb:
      "Tocón, inoculación y qué setas salen de aquí. Saldrás con tu propio tronquito.",
    inDays: 23,
    startHour: 11,
    durationHours: 2,
    capacity: 10,
    spotsLeft: 7,
    priceCents: 3000,
  },
  {
    farmer: "vega-de-sonia",
    title: "Desayuno en la huerta de hoja",
    blurb:
      "Media mañana viendo la mesa y probando lo que se corta ese dia. Viene bien ir con niños.",
    inDays: 30,
    startHour: 9,
    durationHours: 2,
    capacity: 20,
    spotsLeft: 2,
    priceCents: 1800,
  },
  {
    farmer: "el-almendro",
    title: "Recogida de tomate con los temporeros",
    blurb:
      "La jornada de las siete de la mañana que hace posible que tu caja llegue el dia 24.",
    inDays: 6,
    startHour: 7,
    durationHours: 3,
    capacity: 8,
    spotsLeft: 0,
    priceCents: 2500,
  },
];

export const TESTIMONIALS: TestimonialSeed[] = [
  {
    name: "Marta C.",
    neighborhood: "Barrio Norte",
    quote:
      "Llevo tres anos. Antes compraba en el super y notaba la diferencia sin saber explicar cual. Ahora si la se: es que la acelga sabe a acelga.",
    plan: "Cesta familiar",
    rating: 5,
    monthsAgo: 2,
  },
  {
    name: "Jordi P.",
    neighborhood: "Universidad",
    quote:
      "Estoy en tarifa solidaria desde hace un año. Poder bajar a la mitad sin dar explicaciones y que no te miren raro cambia mucho.",
    plan: "Cesta pequeña",
    rating: 5,
    monthsAgo: 1,
  },
  {
    name: "Ana R.",
    neighborhood: "Centro",
    quote:
      "Lo mejor fue la visita a La Retamilla. Ver el bancal de la acelga explica mas que cualquier folleto. Mis hijos lo piden.",
    plan: "Cesta familiar",
    rating: 5,
    monthsAgo: 4,
  },
  {
    name: "Luis M.",
    neighborhood: "Barrio Norte",
    quote:
      "Me gusta saber que la caja lleva el nombre de la finca. No es marketing, es un dato que esta ahi.",
    plan: "Cesta grande",
    rating: 4,
    monthsAgo: 3,
  },
  {
    name: "Sofía N.",
    neighborhood: "Universidad",
    quote:
      "Las setas de ostra son lo mejor que he probado. Y que me avises cuando vuelve el brocoli, eso si que es un servicio.",
    plan: "Cesta familiar",
    rating: 5,
    monthsAgo: 1,
  },
  {
    name: "Pedro G.",
    neighborhood: "Llanera del Silencio",
    quote:
      "Vivo al lado de una finca y aun asi prefiero la cesta. La relacion con la gente que la cultiva es lo que no se compra en ningun sitio.",
    plan: "Cesta pequeña",
    rating: 5,
    monthsAgo: 5,
  },
];

/**
 * Where each euro of a weekly share goes. Published in full.
 *
 * Direct-to-farmer sites are attacked for hiding this, and one of the biggest
 * of them carries a public review accusing it of tax avoidance. A cooperative
 * can answer that structurally: the farms are owners, so the largest line item
 * is a payout to named members, and the books are voted on in the assembly.
 */
export const COST_BREAKDOWN: CostSeed[] = [
  {
    label: "A las fincas",
    description:
      "Directo a las cinco fincas socias, a precio de cooperativa y sin intermediario. Es la partida mas grande y la unica que no se negocia.",
    sharePercent: 62,
    farmerPayout: true,
  },
  {
    label: "Camion y recogidas",
    description:
      "Combustible, rutas de los cuatro puntos y el reparto de las cestas solidarias.",
    sharePercent: 14,
  },
  {
    label: "Cajas y embalajes",
    description:
      "Cajas reutilizables, etiquetas y el material de la nave. Se reutiliza, no se tira.",
    sharePercent: 7,
  },
  {
    label: "Fondo solidario",
    description:
      "Cestas gratis para quien no puede pagar la tarifa mas baja. Lo sostienen las tarifas de apoyo.",
    sharePercent: 9,
  },
  {
    label: "Gastos de estructura",
    description:
      "Contabilidad, seguros, la web y el banco de semillas de la huerta de invierno.",
    sharePercent: 8,
  },
];

/**
 * Home delivery zones. Fee and free-delivery threshold are published rather
 * than discovered at checkout, which is the thing competitors get criticised
 * for in their reviews.
 */
export const DELIVERY_ZONES: ZoneSeed[] = [
  {
    name: "Centro",
    neighborhoods: ["Centro", "Barrio Norte", "Ribera"],
    feeCents: 350,
    freeAboveCents: 4000,
    day: "Viernes por la tarde",
    blurb:
      "La ruta mas corta y la que mas se llena. Repartimos con el camion de la cooperativa.",
  },
  {
    name: "Universidad",
    neighborhoods: ["Universidad", "Parque", "Estacion"],
    feeCents: 450,
    freeAboveCents: 4500,
    day: "Sabado por la manana",
    blurb:
      "Coincide con la recogida en la finca, asi que el viaje no se encarece.",
  },
  {
    name: "Periferia",
    neighborhoods: ["Llanera del Silencio", "Valle de Araya", "Los Montes Altos"],
    feeCents: 550,
    freeAboveCents: 5000,
    day: "Sabado por la tarde",
    blurb:
      "Mas kilometros y menos rutas, asi que cuesta mas. Se reparte con las cestas de las fincas.",
  },
];

/**
 * The despensa.
 *
 * Not vegetables, but the same producers and the same journey: these travel
 * with the box instead of in a separate courier. The direct competitors all
 * sell a pantry alongside the produce, and members buy oil and honey far more
 * predictably than they buy another courgette.
 */
export const PANTRY: PantrySeed[] = [
  {
    name: "Aceite de oliva virgen extra",
    description:
      "Picual de la cooperativa, prensado en frio y de la misma cosecha que las olivas.",
    unit: "botella 500 ml",
    priceCents: 1490,
    producer: "Cooperativa olearia de la comarca",
    emoji: "\ud83d\udc7d️",
  },
  {
    name: "Miel de brezo",
    description:
      "Cien por cien brezo de las colinas de la sierra. Cruda y sin filtrar.",
    unit: "tarro 400 g",
    priceCents: 1640,
    producer: "Colmena de Nuria",
    farmer: "huertos-de-nuria",
    emoji: "\ud83c\udf6f️",
  },
  {
    name: "Huevos camperos",
    description:
      "Gallinas que salen al campo. Doce por caja, con yema oscura.",
    unit: "docena",
    priceCents: 480,
    producer: "Granja de los Montes Altos",
    farmer: "el-almendro",
    emoji: "\ud83e\udd5a️",
  },
  {
    name: "Mermelada de higos",
    description:
      "Higos del bancal de la vega, con poco azucar y trozos de verdad.",
    unit: "tarro 300 g",
    priceCents: 720,
    producer: "La Vega de Sonia",
    farmer: "vega-de-sonia",
    emoji: "\ud83c\udf6e️",
  },
  {
    name: "Vinagre de sidra",
    description:
      "Hecho con la pulpa de las manzanas que no llegan a mercado.",
    unit: "botella 500 ml",
    priceCents: 890,
    producer: "Lagar del Barranco",
    farmer: "huerta-del-barranco",
    emoji: "\ud83e\udd62️",
  },
  {
    name: "Pesto de ajo y albahaca",
    description:
      "Hecho con la albahaca morada de la Vega y ajo nuevo de la cosecha.",
    unit: "tarro 180 g",
    priceCents: 640,
    producer: "La Vega de Sonia",
    farmer: "vega-de-sonia",
    emoji: "\ud83c\udf45️",
  },
  {
    name: "Sal de la salina de invierno",
    description:
      "Recogida a mano en invierno, sin refinar. Sal de verdad, no sabor.",
    unit: "molde 1 kg",
    priceCents: 450,
    producer: "Salinas de la Ribera",
    emoji: "\ud83e\uddde️",
  },
  {
    name: "Miel de azahar",
    description:
      "De la flor del Naranjo en abril. Clara, suave y de floracion corta.",
    unit: "tarro 400 g",
    priceCents: 1520,
    producer: "Colmena de Nuria",
    farmer: "huertos-de-nuria",
    emoji: "\ud83c\udf6f️",
  },
];

export const PICKUP_POINTS: PickupSeed[] = [
  {
    name: "La nave del vinagre",
    address: "Calle Herreria 14, nave 3",
    neighborhood: "Barrio Norte",
    day: "Jueves",
    window: "17:00 - 20:00",
    notes: "Puerta azul, al lado de la panaderia.",
  },
  {
    name: "Mercado de Abastos",
    address: "Paseo de la Estacion s/n, nave 22",
    neighborhood: "Centro",
    day: "Jueves",
    window: "16:00 - 20:00",
    notes: "Dentro del mercado, junto a los puestos de verdura.",
  },
  {
    name: "La Finca",
    address: "Camino de la Retamilla km 2",
    neighborhood: "Llanera del Silencio",
    day: "Sabado",
    window: "10:00 - 14:00",
    notes: "Recogida en la propia finca, con visita de la huerta incluida.",
  },
  {
    name: "Barrio Universidad",
    address: "Paseo del Parque 88, bajo",
    neighborhood: "Universidad",
    day: "Sabado",
    window: "09:30 - 13:30",
    notes: "Aqui se reparten las cestas solidarias los viernes por la tarde.",
  },
];

/** Governance: the cooperative votes on what to grow next season. */
export const PROPOSALS = [
  {
    id: "invierno-26",
    question: "Que sembramos la proxima temporada de invierno?",
    subtitle:
      "La asamblea de la cooperativa vota antes de cada cosecha grande. Estos son los cultivos que se pueden plantar en los proximos tres meses.",
    options: [
      {
        id: "brassicas",
        label: "Brasicas de invierno",
        detail: "Col, brocoli, coliflor. Poco riego y mucho destino en la cocina.",
      },
      {
        id: "hoja",
        label: "Hoja oscura",
        detail: "Acelga, espinaca, endibia. El cultivo mas rentable por metro cuadrado.",
      },
      {
        id: "raiz",
        label: "Raiz de guarda",
        detail: "Nabo, boniato, puerro. Para el invierno y para el almacen.",
      },
    ],
  },
  {
    id: "cesta-26",
    question: "Ampliamos la cesta grande o bajamos el precio de la pequena?",
    subtitle:
      "La diferencia de ingresos entre los dos planes es el debate de siempre. Esto es lo quepone la asamblea sobre la mesa.",
    options: [
      {
        id: "ampliar",
        label: "Ampliar la cesta grande",
        detail: "Dos piezas mas y dos euros mas a la semana. Suma para la cooperativa.",
      },
      {
        id: "precio",
        label: "Bajar la cesta pequena a 19 euros",
        detail: "Nadie se queda fuera por precio, pero exige mas horas de trabajo.",
      },
    ],
  },
];
