import { describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	getSite,
	listSites,
	parseSiteSource,
	updateSiteField,
	validateValue,
} from "./sites";

const SOURCE = `import logo from '../assets/fotos/logo.svg';

export const BUSINESS = {
	name: 'Bar Pepe',
	tagline: 'Tapas en Málaga',
	street: 'Calle Larios, 1',
	city: 'Málaga',
	postalCode: '29005',
	phone: '951 00 00 00',
	siteUrl: 'https://bar-pepe.vercel.app',
	geo: { lat: 36.72, lng: -4.42 },
	hours: [
		{ days: 'Lunes', hours: '10:00–22:00' },
	],
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
};
`;

function withAppsDir(run: (appsDir: string) => void) {
	const root = mkdtempSync(join(tmpdir(), "cms-"));
	try {
		run(root);
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
}

function writeSite(appsDir: string, slug: string, source = SOURCE) {
	const dir = join(appsDir, slug, "src", "data");
	mkdirSync(dir, { recursive: true });
	writeFileSync(join(dir, "site.ts"), source, "utf8");
	return join(dir, "site.ts");
}

describe("parseo de site.ts", () => {
	test("lee los campos de BUSINESS con sus sinónimos", () => {
		const site = parseSiteSource("bar-pepe", SOURCE);
		expect(site.name).toBe("Bar Pepe");
		expect(site.tagline).toBe("Tapas en Málaga");
		expect(site.city).toBe("Málaga");
		expect(site.street).toBe("Calle Larios, 1");
		expect(site.phone).toBe("951 00 00 00");
		expect(site.siteUrl).toBe("https://bar-pepe.vercel.app");
		expect(site.editable.name).toBe(true);
		expect(site.editable.tagline).toBe(true);
	});

	test("reconoce business y NEGOCIO, no solo BUSINESS", () => {
		const lower = parseSiteSource(
			"bar-bajo",
			`export const business = {
	name: 'Bar Bajo',
	city: 'Cáceres',
	geo: { lat: 39.47, lng: -6.37 },
};`,
		);
		expect(lower.name).toBe("Bar Bajo");
		expect(lower.city).toBe("Cáceres");
		expect(lower.editable.name).toBe(true);
		expect(lower.lat).toBe("39.47");
		expect(lower.editable.lat).toBe(true);

		const other = parseSiteSource(
			"bar-otro",
			`export const NEGOCIO = { name: 'Bar Otro', city: 'Badajoz' };`,
		);
		expect(other.name).toBe("Bar Otro");
		expect(other.city).toBe("Badajoz");
	});

	test("acepta address/phoneDisplay y una URL fuera de BUSINESS", () => {
		const source = `export const SITE_URL = 'https://otra.vercel.app';

export const BUSINESS = {
	fullName: 'Otra Web',
	address: 'Calle Nueva, 2',
	phoneDisplay: '600 11 22 33',
	city: 'Sevilla',
};
`;
		const site = parseSiteSource("otra", source);
		expect(site.name).toBe("Otra Web");
		expect(site.street).toBe("Calle Nueva, 2");
		expect(site.phone).toBe("600 11 22 33");
		expect(site.siteUrl).toBe("https://otra.vercel.app");
		// La URL está fuera de BUSINESS: se muestra, pero no se edita.
		expect(site.editable.siteUrl).toBe(false);
	});

	test("marca legales pendientes y cuenta fotos", () => {
		const site = parseSiteSource("bar-pepe", SOURCE, { photos: 3 });
		expect(site.legalPending).toBe(true);
		expect(site.photoCount).toBe(3);
	});

	test("no rompe con un fichero sin BUSINESS", () => {
		const site = parseSiteSource("rara", "export const X = 1;");
		expect(site.name).toBe("rara");
		expect(site.phone).toBe("");
	});
});

describe("listado", () => {
	test("solo incluye carpetas con src/data/site.ts y ordena por nombre", () => {
		withAppsDir((appsDir) => {
			writeSite(appsDir, "zeta", SOURCE.replace("Bar Pepe", "Zeta"));
			writeSite(appsDir, "alfa", SOURCE.replace("Bar Pepe", "Alfa"));
			mkdirSync(join(appsDir, "sin-datos", "src"), { recursive: true });

			const sites = listSites(appsDir);
			expect(sites.map((site) => site.name)).toEqual(["Alfa", "Zeta"]);
		});
	});

	test("getSite rechaza slugs con traversal", () => {
		withAppsDir((appsDir) => {
			writeSite(appsDir, "alfa");
			expect(getSite("../alfa", appsDir)).toBeNull();
			expect(getSite("..", appsDir)).toBeNull();
		});
	});
});

describe("edición", () => {
	test("cambia solo el literal y conserva el resto del fichero", () => {
		withAppsDir((appsDir) => {
			const file = writeSite(appsDir, "bar-pepe");
			const result = updateSiteField("bar-pepe", "city", "Torremolinos", appsDir);

			expect(result.ok).toBe(true);
			expect(result.previous).toBe("Málaga");

			const updated = readFileSync(file, "utf8");
			expect(updated).toContain("city: 'Torremolinos'");
			expect(updated).toContain("import logo from '../assets/fotos/logo.svg';");
			expect(updated).toContain("hours: [");
			expect(parseSiteSource("bar-pepe", updated).city).toBe("Torremolinos");
		});
	});

	test("edita un fichero con business en minúscula", () => {
		withAppsDir((appsDir) => {
			const file = writeSite(
				appsDir,
				"bar-bajo",
				`export const business = {
	name: 'Bar Bajo',
	city: 'Cáceres',
};`,
			);
			const result = updateSiteField("bar-bajo", "city", "Trujillo", appsDir);

			expect(result.ok).toBe(true);
			expect(result.previous).toBe("Cáceres");
			expect(readFileSync(file, "utf8")).toContain("city: 'Trujillo'");
		});
	});

	test("cambia a comillas dobles si el valor lleva apóstrofo", () => {
		withAppsDir((appsDir) => {
			const file = writeSite(appsDir, "bar-pepe");
			const result = updateSiteField("bar-pepe", "name", "La Taberna d'Oro", appsDir);

			expect(result.ok).toBe(true);
			expect(readFileSync(file, "utf8")).toContain('name: "La Taberna d\'Oro"');
			expect(parseSiteSource("bar-pepe", readFileSync(file, "utf8")).name).toBe(
				"La Taberna d'Oro",
			);
		});
	});

	test("rechaza valores inválidos sin tocar el fichero", () => {
		withAppsDir((appsDir) => {
			const file = writeSite(appsDir, "bar-pepe");
			const before = readFileSync(file, "utf8");

			expect(updateSiteField("bar-pepe", "siteUrl", "bar-pepe.com", appsDir).ok).toBe(false);
			expect(updateSiteField("bar-pepe", "postalCode", "abc", appsDir).ok).toBe(false);
			expect(updateSiteField("bar-pepe", "phone", "", appsDir).ok).toBe(false);
			expect(updateSiteField("bar-pepe", "city", "Dos\nlíneas", appsDir).ok).toBe(false);

			expect(readFileSync(file, "utf8")).toBe(before);
		});
	});

	test("no edita campos que no existen en la plantilla", () => {
		withAppsDir((appsDir) => {
			writeSite(appsDir, "minima", "export const BUSINESS = { name: 'Solo Nombre' };");
			const result = updateSiteField("minima", "phone", "600 11 22 33", appsDir);
			expect(result.ok).toBe(false);
			expect(result.error).toContain("no es un literal editable");
		});
	});
});

describe("validación", () => {
	test("acepta teléfonos y URLs razonables", () => {
		expect(validateValue("phone", "+34 951 99 62 58")).toBeNull();
		expect(validateValue("siteUrl", "https://sur-digital.vercel.app")).toBeNull();
		expect(validateValue("postalCode", "29010")).toBeNull();
	});

	test("rechaza barras invertidas y saltos de línea", () => {
		expect(validateValue("tagline", "Hola\\nmundo")).not.toBeNull();
		expect(validateValue("tagline", "Hola\nmundo")).not.toBeNull();
	});
});
