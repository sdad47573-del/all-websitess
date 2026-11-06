import { describe, expect, test } from "bun:test";
import { EXTRAS, PLANS, type Extra } from "../src/data/precios";
import {
  buildQuote,
  CALCULATOR_EXTRAS,
  CALCULATOR_PLAN,
  getCalculatorPrices,
} from "../src/lib/presupuesto";

// Estos tests vigilan el contrato entre los precios publicados (DATA) y lo que
// la calculadora espera encontrar: nombres exactos de los extras, plan
// preseleccionado y cifras que acaban en el total.
const prices = getCalculatorPrices(PLANS, EXTRAS);
const defaultPlan = PLANS[prices.defaultPlanIndex];

describe("precios de DATA que consume la calculadora", () => {
  test("los cuatro extras que busca por nombre existen una sola vez", () => {
    for (const name of Object.values(CALCULATOR_EXTRAS)) {
      expect(EXTRAS.filter((extra) => extra.name === name)).toHaveLength(1);
    }
  });

  test("esos extras tienen un importe numérico y no negativo", () => {
    for (const name of Object.values(CALCULATOR_EXTRAS)) {
      const extra = EXTRAS.find((item) => item.name === name);

      expect(extra).toBeDefined();
      expect(Number.isFinite(extra?.amount)).toBe(true);
      expect(extra?.amount).toBeGreaterThanOrEqual(0);
    }
  });

  test("el plan preseleccionado existe y es de pago", () => {
    expect(defaultPlan).toBeDefined();
    expect(defaultPlan.name).toBe(CALCULATOR_PLAN);
    // Con un plan gratis buildQuote desactiva las páginas extra.
    expect(defaultPlan.price).toBeGreaterThan(0);
  });

  test("los importes que usa la calculadora son los publicados", () => {
    expect(defaultPlan.price).toBe(490);
    expect(prices.pagePrice).toBe(60);
    expect(prices.language).toBe(150);
    expect(prices.logo).toBe(150);
    expect(prices.maintenance).toBe(39);
    expect(prices.maintenanceMonthly).toBe(true);
  });

  test("todos los planes tienen precio numérico y hay gratis y de pago", () => {
    for (const plan of PLANS) {
      expect(Number.isFinite(plan.price)).toBe(true);
      expect(plan.price).toBeGreaterThanOrEqual(0);
    }
    expect(PLANS.some((plan) => plan.price === 0)).toBe(true);
    expect(PLANS.some((plan) => plan.price > 0)).toBe(true);
  });

  test("el presupuesto con los precios reales da la cifra publicada", () => {
    const quote = buildQuote({
      plan: defaultPlan,
      extraPages: 2,
      extraPagePrice: prices.pagePrice,
      addons: [
        { name: CALCULATOR_EXTRAS.language, amount: prices.language },
        {
          name: CALCULATOR_EXTRAS.maintenance,
          amount: prices.maintenance,
          monthly: prices.maintenanceMonthly,
        },
      ],
    });

    // Web Completa + 2 páginas + segundo idioma.
    expect(quote.total).toBe(490 + 120 + 150);
    expect(quote.monthly).toBe(39);
    expect(quote.summary).toContain("Total: 760€");
    expect(quote.summary).toContain("Mantenimiento mensual: 39€/mes");
  });
});

describe("el build se cae si DATA deja de encajar con la calculadora", () => {
  test("un extra renombrado", () => {
    const renamed = EXTRAS.map((extra) =>
      extra.name === CALCULATOR_EXTRAS.logo ? { ...extra, name: "Logo" } : extra
    );

    expect(() => getCalculatorPrices(PLANS, renamed)).toThrow(
      CALCULATOR_EXTRAS.logo
    );
  });

  test("el plan preseleccionado desaparece", () => {
    const withoutPlan = PLANS.filter((plan) => plan.name !== CALCULATOR_PLAN);

    expect(() => getCalculatorPrices(withoutPlan, EXTRAS)).toThrow(
      CALCULATOR_PLAN
    );
  });

  test("un importe que no es un número", () => {
    const broken: Extra[] = EXTRAS.map((extra) =>
      extra.name === CALCULATOR_EXTRAS.page
        ? { ...extra, amount: Number.NaN }
        : extra
    );

    expect(() => getCalculatorPrices(PLANS, broken)).toThrow(
      CALCULATOR_EXTRAS.page
    );
  });

  test("el plan preseleccionado pasa a ser gratuito", () => {
    const free = PLANS.map((plan) =>
      plan.name === CALCULATOR_PLAN ? { ...plan, price: 0 } : plan
    );

    expect(() => getCalculatorPrices(free, EXTRAS)).toThrow(CALCULATOR_PLAN);
  });
});
