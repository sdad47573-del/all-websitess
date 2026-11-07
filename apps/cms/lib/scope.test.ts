import { describe, expect, test } from "bun:test";
import { parseSiteSlug, siteAllowed } from "./scope";

describe("alcance de una sola web", () => {
	test("sin variable no limita nada", () => {
		expect(parseSiteSlug(undefined)).toBeNull();
		expect(parseSiteSlug("  ")).toBeNull();
	});

	test("acepta un slug válido", () => {
		expect(parseSiteSlug(" bar-pepe ")).toBe("bar-pepe");
	});

	test("rechaza rutas y mayúsculas", () => {
		expect(() => parseSiteSlug("../otra")).toThrow();
		expect(() => parseSiteSlug("Bar Pepe")).toThrow();
	});

	test("solo permite la web configurada", () => {
		expect(siteAllowed("bar-pepe", "bar-pepe")).toBe(true);
		expect(siteAllowed("otra-web", "bar-pepe")).toBe(false);
		expect(siteAllowed("otra-web", null)).toBe(true);
	});
});
