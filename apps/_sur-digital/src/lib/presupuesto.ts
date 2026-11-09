// Cálculo del presupuesto de la calculadora de la home, sin DOM ni Astro para
// poder probarlo con `bun test` (ver tests/presupuesto.test.ts).
//
// Los importes NO viven aquí: llegan resueltos desde DATA (planes y extras) a
// través de Calculadora.astro. Este módulo solo suma, acota y redacta el
// resumen que el visitante copia para pegarlo en LinkedIn.

/** Tope de páginas extra que acepta el campo (y que se puede cobrar). */
export const MAX_EXTRA_PAGES = 10;

export interface QuotePlan {
  name: string;
  price: number;
}

/** Extra o complemento marcado por el visitante. `monthly` = cuota mensual. */
export interface QuoteAddon {
  name: string;
  amount: number;
  monthly?: boolean;
}

export interface QuoteInput {
  plan: QuotePlan | null;
  /** Valor del campo de páginas extra, tal cual lo ha escrito el visitante. */
  extraPages?: number;
  /** Precio de cada página adicional (DATA.extras). */
  extraPagePrice: number;
  /** Solo los extras marcados, en el orden en que se pintan. */
  addons?: QuoteAddon[];
}

export interface QuoteLine {
  label: string;
  /** Importe ya formateado, como se publica en /precios/ (690€, 49€/mes). */
  value: string;
  amount: number;
  monthly: boolean;
}

export interface Quote {
  lines: QuoteLine[];
  /** Suma de lo que se paga una vez. El mantenimiento NO entra aquí. */
  total: number;
  /** Suma de las cuotas mensuales marcadas (0 si no hay ninguna). */
  monthly: number;
  /** Páginas extra aplicadas, después de acotar a 0–10 y redondear. */
  extraPages: number;
  /** false en el plan gratis: el campo de páginas se deshabilita. */
  pagesAllowed: boolean;
  /** Texto plano listo para copiar y pegar en el mensaje de LinkedIn. */
  summary: string;
}

/** Mismo formato que el resto del sitio: sin decimales y con el euro detrás. */
export const formatEuros = (value: number) =>
  `${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}€`;

/** Plan que la calculadora trae preseleccionado. */
export const CALCULATOR_PLAN = "Web Completa";

/** Extras que la calculadora busca por nombre en DATA.extras. */
export const CALCULATOR_EXTRAS = {
  page: "Página adicional",
  language: "Idioma adicional",
  logo: "Logo e identidad básica",
  maintenance: "Mantenimiento mensual",
} as const;

export interface PricePlan {
  name: string;
  price: number;
}

export interface PriceExtra {
  name: string;
  amount: number;
  monthly?: boolean;
}

export interface CalculatorPrices {
  /** DATA.extras: precio de cada página adicional. */
  pagePrice: number;
  language: number;
  logo: number;
  maintenance: number;
  /** true si en DATA el mantenimiento está marcado como cuota mensual. */
  maintenanceMonthly: boolean;
  /** Índice de CALCULATOR_PLAN dentro de DATA.plans. */
  defaultPlanIndex: number;
}

/**
 * Importes que necesita la calculadora, resueltos desde DATA.
 *
 * Lanza si algo no encaja: un extra renombrado o un plan preseleccionado que ya
 * no existe publicarían una estimación a 0 € en vez de fallar. El build cae
 * aquí y tests/presupuesto-datos.test.ts lo detecta antes.
 */
export const getCalculatorPrices = (
  plans: readonly PricePlan[],
  extras: readonly PriceExtra[]
): CalculatorPrices => {
  const extra = (name: string): PriceExtra => {
    const found = extras.find((item) => item.name === name);
    if (!found) {
      throw new Error(`Calculadora: no existe el extra "${name}"`);
    }
    if (!Number.isFinite(found.amount) || found.amount < 0) {
      throw new Error(
        `Calculadora: el extra "${name}" no tiene un importe válido`
      );
    }
    return found;
  };

  const defaultPlanIndex = plans.findIndex(
    (plan) => plan.name === CALCULATOR_PLAN
  );
  const defaultPlan = plans[defaultPlanIndex];
  if (!defaultPlan) {
    throw new Error(`Calculadora: no existe el plan "${CALCULATOR_PLAN}"`);
  }
  // Las páginas extra solo tienen sentido en un plan de pago (buildQuote usa
  // price > 0): si el plan por defecto fuese gratis, el campo se desactivaría.
  if (!(defaultPlan.price > 0)) {
    throw new Error(
      `Calculadora: el plan "${CALCULATOR_PLAN}" debe ser de pago para admitir páginas extra`
    );
  }

  const page = extra(CALCULATOR_EXTRAS.page);
  const language = extra(CALCULATOR_EXTRAS.language);
  const logo = extra(CALCULATOR_EXTRAS.logo);
  const maintenance = extra(CALCULATOR_EXTRAS.maintenance);

  return {
    pagePrice: page.amount,
    language: language.amount,
    logo: logo.amount,
    maintenance: maintenance.amount,
    maintenanceMonthly: maintenance.monthly === true,
    defaultPlanIndex,
  };
};

// Number("") es 0, Number("abc") es NaN y Number.isFinite descarta ambos.
const clampPages = (value: number | undefined): number => {
  if (!Number.isFinite(value)) return 0;
  return Math.min(MAX_EXTRA_PAGES, Math.max(0, Math.trunc(value as number)));
};

export const buildQuote = ({
  plan,
  extraPages,
  extraPagePrice,
  addons = [],
}: QuoteInput): Quote => {
  const lines: QuoteLine[] = [];
  const price = plan?.price ?? 0;
  // Solo los planes de pago admiten páginas extra: la landing gratis es una
  // sola página por definición.
  const pagesAllowed = price > 0;
  const pages = pagesAllowed ? clampPages(extraPages) : 0;

  if (plan) {
    lines.push({
      label: plan.name,
      value: formatEuros(price),
      amount: price,
      monthly: false,
    });
  }

  let total = price;
  if (pages > 0) {
    const amount = pages * extraPagePrice;
    total += amount;
    lines.push({
      label: pages === 1 ? "1 página extra" : `${pages} páginas extra`,
      value: formatEuros(amount),
      amount,
      monthly: false,
    });
  }

  let monthly = 0;
  for (const addon of addons) {
    lines.push({
      label: addon.name,
      value: addon.monthly
        ? `${formatEuros(addon.amount)}/mes`
        : formatEuros(addon.amount),
      amount: addon.amount,
      monthly: Boolean(addon.monthly),
    });
    if (addon.monthly) monthly += addon.amount;
    else total += addon.amount;
  }

  // El mantenimiento ya aparece como una fila con su "/mes": el resumen no
  // repite la cifra al final.
  const summary = [
    "Presupuesto Sur Digital (orientativo, sin IVA)",
    ...lines.map((line) => `${line.label}: ${line.value}`),
    `Total: ${formatEuros(total)}`,
  ].join("\n");

  return { lines, total, monthly, extraPages: pages, pagesAllowed, summary };
};
