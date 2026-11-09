import { describe, expect, test } from "bun:test";
import {
  buildQuote,
  formatEuros,
  MAX_EXTRA_PAGES,
  type QuoteAddon,
} from "../src/lib/presupuesto";

// Mismos datos que publica DATA: si cambian los precios allí, estos tests
// siguen midiendo el cálculo, no la tarifa.
const WEB_COMPLETA = { name: "Web Completa", price: 690 };
const PORTFOLIO = { name: "Portfolio", price: 490 };
const LANDING_GRATIS = { name: "Landing Gratis", price: 0 };
const PAGE_PRICE = 60;

const IDIOMA: QuoteAddon = { name: "Segundo idioma", amount: 190 };
const LOGO: QuoteAddon = { name: "Logo e identidad básica", amount: 250 };
const MANTENIMIENTO: QuoteAddon = {
  name: "Mantenimiento mensual",
  amount: 49,
  monthly: true,
};

const quote = (overrides: Partial<Parameters<typeof buildQuote>[0]> = {}) =>
  buildQuote({
    plan: WEB_COMPLETA,
    extraPagePrice: PAGE_PRICE,
    addons: [],
    ...overrides,
  });

describe("presupuesto: plan y total", () => {
  test("un plan sin extras devuelve una sola línea y su precio", () => {
    const result = quote();

    expect(result.lines).toHaveLength(1);
    expect(result.lines[0]).toMatchObject({
      label: "Web Completa",
      value: "690€",
      amount: 690,
      monthly: false,
    });
    expect(result.total).toBe(690);
    expect(result.monthly).toBe(0);
    expect(result.extraPages).toBe(0);
    expect(result.pagesAllowed).toBe(true);
  });

  test("acepta un segundo plan de pago con su propio precio", () => {
    const result = quote({ plan: PORTFOLIO });

    expect(result.total).toBe(490);
    expect(result.lines[0].label).toBe("Portfolio");
  });

  test("sin plan no hay líneas ni importe, pero el resumen sigue siendo válido", () => {
    const result = quote({ plan: null });

    expect(result.lines).toHaveLength(0);
    expect(result.total).toBe(0);
    expect(result.monthly).toBe(0);
    expect(result.pagesAllowed).toBe(false);
    expect(result.summary).toContain("Total: 0€");
  });
});

describe("presupuesto: páginas extra", () => {
  test("suma las páginas al plan y crea su línea", () => {
    const result = quote({ extraPages: 2 });

    expect(result.extraPages).toBe(2);
    expect(result.total).toBe(690 + 2 * PAGE_PRICE);
    expect(result.lines.map((line) => line.label)).toEqual([
      "Web Completa",
      "2 páginas extra",
    ]);
    expect(result.lines[1].value).toBe("120€");
  });

  test("usa el singular con una sola página", () => {
    const result = quote({ extraPages: 1 });

    expect(result.lines[1].label).toBe("1 página extra");
    expect(result.total).toBe(750);
  });

  test("no añade línea cuando no hay páginas", () => {
    const result = quote({ extraPages: 0 });

    expect(result.lines).toHaveLength(1);
    expect(result.lines[0].label).toBe("Web Completa");
  });

  test("acota el campo por abajo: negativos y valores inválidos cuentan 0", () => {
    for (const extraPages of [-4, 0, Number.NaN, undefined]) {
      const result = quote({ extraPages });
      expect(result.extraPages).toBe(0);
      expect(result.total).toBe(690);
    }
  });

  test(`acota el campo por arriba en ${MAX_EXTRA_PAGES} páginas`, () => {
    const result = quote({ extraPages: 11 });

    expect(result.extraPages).toBe(MAX_EXTRA_PAGES);
    expect(result.total).toBe(690 + MAX_EXTRA_PAGES * PAGE_PRICE);
    expect(result.lines[1].label).toBe(`${MAX_EXTRA_PAGES} páginas extra`);
  });

  test("redondea hacia abajo los decimales que acepta el input number", () => {
    const result = quote({ extraPages: 3.7 });

    expect(result.extraPages).toBe(3);
    expect(result.total).toBe(690 + 3 * PAGE_PRICE);
  });

  test("el plan gratis no admite páginas extra aunque se pidan", () => {
    const result = quote({ plan: LANDING_GRATIS, extraPages: 3 });

    expect(result.pagesAllowed).toBe(false);
    expect(result.extraPages).toBe(0);
    expect(result.total).toBe(0);
    expect(result.lines).toHaveLength(1);
  });
});

describe("presupuesto: extras y cuotas", () => {
  test("los extras de pago único se suman al total", () => {
    const result = quote({ addons: [IDIOMA, LOGO] });

    expect(result.total).toBe(690 + 190 + 250);
    expect(result.monthly).toBe(0);
    expect(result.lines.slice(1).map((line) => line.value)).toEqual([
      "190€",
      "250€",
    ]);
  });

  test("el mantenimiento va a la cuota mensual, no al total", () => {
    const result = quote({ addons: [MANTENIMIENTO] });

    expect(result.total).toBe(690);
    expect(result.monthly).toBe(49);
    expect(result.lines[1]).toMatchObject({
      label: "Mantenimiento mensual",
      value: "49€/mes",
      amount: 49,
      monthly: true,
    });
  });

  test("combina páginas, extras y mantenimiento en el orden en que se marcan", () => {
    const result = quote({
      extraPages: 2,
      addons: [IDIOMA, LOGO, MANTENIMIENTO],
    });

    expect(result.lines.map((line) => line.label)).toEqual([
      "Web Completa",
      "2 páginas extra",
      "Segundo idioma",
      "Logo e identidad básica",
      "Mantenimiento mensual",
    ]);
    expect(result.total).toBe(690 + 120 + 190 + 250);
    expect(result.monthly).toBe(49);
  });

  test("sin extras no hay cuota mensual ni líneas de más", () => {
    const result = quote({ addons: [] });

    expect(result.monthly).toBe(0);
    expect(result.lines).toHaveLength(1);
  });
});

describe("presupuesto: resumen copiable", () => {
  test("incluye cada concepto, el total y el aviso de IVA", () => {
    const result = quote({ extraPages: 2, addons: [MANTENIMIENTO] });

    expect(result.summary).toBe(
      [
        "Presupuesto Sur Digital (orientativo, sin IVA)",
        "Web Completa: 690€",
        "2 páginas extra: 120€",
        "Mantenimiento mensual: 49€/mes",
        "Total: 810€",
      ].join("\n")
    );
  });

  test("no repite el mantenimiento como línea final", () => {
    const summary = quote({ addons: [MANTENIMIENTO] }).summary;

    expect(summary.match(/49€\/mes/g)).toHaveLength(1);
    expect(summary).not.toContain("Mantenimiento: 49€");
  });

  test("el total del resumen coincide con el total calculado", () => {
    const result = quote({ extraPages: 1, addons: [IDIOMA] });

    expect(result.summary.trim().endsWith(`Total: ${formatEuros(result.total)}`)).toBe(
      true
    );
    expect(result.total).toBe(690 + 60 + 190);
  });
});

describe("formato de importes", () => {
  test("usa el mismo formato que /precios/", () => {
    expect(formatEuros(0)).toBe("0€");
    expect(formatEuros(60)).toBe("60€");
    expect(formatEuros(2500)).toBe("2.500€");
  });
});
