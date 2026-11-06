import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { listSnapshots } from "./history";
import { publishShop, readShop, saveShop, shopPageExists, unpublishShop } from "./shop";

function withSite(run: (appsDir: string) => void) {
	const root = mkdtempSync(join(tmpdir(), "cms-shop-"));
	const appsDir = join(root, "apps");
	const appDir = join(appsDir, "bar-pepe");

	mkdirSync(join(appDir, "src", "data"), { recursive: true });
	mkdirSync(join(appDir, "src", "pages"), { recursive: true });
	mkdirSync(join(appDir, "src", "assets", "fotos"), { recursive: true });

	writeFileSync(
		join(appDir, "src", "data", "site.ts"),
		`export const BUSINESS = { name: 'Bar Pepe', phone: '600 000 000', phoneHref: 'tel:600000000', siteUrl: 'https://bar-pepe.test' };`,
	);
	writeFileSync(join(appDir, "src", "assets", "fotos", "bravas.jpg"), "jpg");

	try {
		run(appsDir);
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
}

const shop = (overrides: Record<string, unknown> = {}) => ({
	activa: true,
	titulo: "Tienda del bar",
	moneda: "EUR",
	recogida: "Recogida en el local",
	nota: "",
	whatsapp: "34600111222",
	productos: [
		{
			id: "p-bravas",
			nombre: "Bravas",
			descripcion: "Con alioli",
			precio: 4.5,
			imagen: "bravas.jpg",
			stock: 10,
			visible: true,
		},
	],
	...overrides,
});

describe("catálogo", () => {
	test("sin fichero devuelve null", () => {
		withSite((appsDir) => {
			expect(readShop("bar-pepe", appsDir)).toBeNull();
		});
	});

	test("guarda, normaliza y vuelve a leer", () => {
		withSite((appsDir) => {
			const saved = saveShop(
				"bar-pepe",
				{
					...shop(),
					titulo: "  Tienda del bar  ",
					whatsapp: "+34 600 111 222",
					productos: [{ ...shop().productos[0], precio: 4.555, nombre: "  Bravas  " }],
				},
				appsDir,
			);

			expect(saved.titulo).toBe("Tienda del bar");
			expect(saved.whatsapp).toBe("34600111222");
			expect(saved.productos[0].precio).toBe(4.56);
			expect(saved.productos[0].nombre).toBe("Bravas");
			expect(readShop("bar-pepe", appsDir)).toEqual(saved);

			const raw = JSON.parse(
				readFileSync(join(appsDir, "bar-pepe", "src", "data", "tienda.json"), "utf8"),
			);
			expect(raw.productos).toHaveLength(1);
		});
	});

	test("rechaza precios, stock, ids e imágenes inválidos", () => {
		withSite((appsDir) => {
			const product = shop().productos[0];
			const cases = [
				{ ...shop(), productos: [{ ...product, precio: -1 }] },
				{ ...shop(), productos: [{ ...product, precio: "caro" }] },
				{ ...shop(), productos: [{ ...product, stock: 1.5 }] },
				{ ...shop(), productos: [{ ...product, stock: -2 }] },
				{ ...shop(), productos: [{ ...product, id: "../x" }] },
				{ ...shop(), productos: [{ ...product, nombre: "" }] },
				{ ...shop(), productos: [{ ...product, imagen: "no-existe.jpg" }] },
				{
					...shop(),
					productos: [product, { ...product }],
				},
			];

			for (const candidate of cases) {
				expect(() => saveShop("bar-pepe", candidate, appsDir)).toThrow();
			}
			expect(readShop("bar-pepe", appsDir)).toBeNull();
		});
	});

	test("cada guardado deja la versión anterior en el historial", () => {
		withSite((appsDir) => {
			saveShop("bar-pepe", shop(), appsDir);
			saveShop("bar-pepe", shop({ titulo: "Otra tienda" }), appsDir);

			const versions = listSnapshots("bar-pepe", "data/tienda.json", appsDir);
			expect(versions).toHaveLength(1);
			expect(versions[0].size).toBeGreaterThan(0);
		});
	});
});

describe("publicación", () => {
	test("exige tienda activa y algún producto visible", () => {
		withSite((appsDir) => {
			expect(() => publishShop("bar-pepe", appsDir)).toThrow(/Guarda/);

			saveShop("bar-pepe", shop({ activa: false }), appsDir);
			expect(() => publishShop("bar-pepe", appsDir)).toThrow(/desactivada/);

			saveShop(
				"bar-pepe",
				shop({ productos: [{ ...shop().productos[0], visible: false }] }),
				appsDir,
			);
			expect(() => publishShop("bar-pepe", appsDir)).toThrow(/visible/);
			expect(shopPageExists("bar-pepe", appsDir)).toBe(false);
		});
	});

	test("genera la página con el componente y se puede quitar", () => {
		withSite((appsDir) => {
			saveShop("bar-pepe", shop(), appsDir);
			const result = publishShop("bar-pepe", appsDir);

			expect(result.path).toBe("src/pages/tienda.astro");
			expect(shopPageExists("bar-pepe", appsDir)).toBe(true);

			const page = readFileSync(
				join(appsDir, "bar-pepe", "src", "pages", "tienda.astro"),
				"utf8",
			);
			expect(page).toContain("import { LocalShop } from '@astro-components'");
			expect(page).toContain("import tienda from '../data/tienda.json'");
			expect(page).toContain("BUSINESS.siteUrl + '/tienda/'");
			expect(page).toContain("products={productos}");
			expect(page).toContain("typeof value === 'string'");
			expect(page).not.toContain("[object Object]");

			unpublishShop("bar-pepe", appsDir);
			expect(existsSync(join(appsDir, "bar-pepe", "src", "pages", "tienda.astro"))).toBe(false);
			expect(unpublishShop("bar-pepe", appsDir).removed).toBe(false);
		});
	});

	test("republicar guarda la página anterior", () => {
		withSite((appsDir) => {
			saveShop("bar-pepe", shop(), appsDir);
			publishShop("bar-pepe", appsDir);
			publishShop("bar-pepe", appsDir);

			expect(listSnapshots("bar-pepe", "pages/tienda.astro", appsDir)).toHaveLength(1);
		});
	});
});
