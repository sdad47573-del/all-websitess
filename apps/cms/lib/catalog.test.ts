import { afterAll, describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { readSectionCatalog } from "./catalog";

const root = mkdtempSync(join(tmpdir(), "cms-catalogo-"));

afterAll(() => rmSync(root, { recursive: true, force: true }));

function app(slug: string, files: Record<string, string>): void {
	for (const [path, content] of Object.entries(files)) {
		const file = join(root, slug, path);
		mkdirSync(dirname(file), { recursive: true });
		writeFileSync(file, content);
	}
}

app("alfa", {
	"src/pages/index.astro": [
		'<LocalHero title="Pan <br /><em>fresco.</em>" image={foto} />',
		'<LocalAbout label="La casa" title="De barrio." paragraphs={texto} />',
		"<LocalFaq items={FAQ} />",
	].join("\n"),
});

app("beta", {
	"src/data/secciones.json": JSON.stringify({
		version: 1,
		secciones: [
			{ id: "portada", tipo: "hero", visible: true, titulo: "Pan de leña" },
			{ id: "cierre", tipo: "cta", visible: true, titulo: "Pásate" },
			{ id: "oculta", tipo: "texto", visible: false, titulo: "No se cuenta" },
		],
	}),
});

const catalog = readSectionCatalog(root);
const find = (tipo: string) => catalog.find((item) => item.tipo === tipo);

describe("catálogo de piezas", () => {
	test("recorre todos los tipos en orden", () => {
		expect(catalog.map((item) => item.tipo)).toEqual([
			"hero",
			"about",
			"destacados",
			"galeria",
			"visita",
			"faq",
			"texto",
			"cta",
			"chips",
			"menu",
		]);
	});

	test("cuenta las webs que usan cada pieza", () => {
		expect(find("hero")?.usos).toBe(2);
		expect(find("about")?.usos).toBe(1);
		expect(find("faq")?.usos).toBe(1);
		expect(find("cta")?.usos).toBe(1);
		expect(find("galeria")?.usos).toBe(0);
	});

	test("guarda ejemplos reales y quita el HTML", () => {
		expect(find("hero")?.ejemplos.map((item) => item.titulo).sort()).toEqual([
			"Pan de leña",
			"Pan fresco.",
		]);
		expect(find("about")?.ejemplos).toEqual([{ web: "alfa", slug: "alfa", titulo: "De barrio." }]);
	});

	test("no inventa ejemplos que la página no escribe", () => {
		expect(find("faq")?.ejemplos).toEqual([]);
	});

	test("ignora las piezas ocultas", () => {
		expect(find("texto")?.usos).toBe(0);
	});

	test("puede limitarse a una sola web", () => {
		const only = readSectionCatalog(root, "beta");
		expect(only.find((item) => item.tipo === "hero")?.usos).toBe(1);
		expect(only.find((item) => item.tipo === "about")?.usos).toBe(0);
		expect(only.find((item) => item.tipo === "cta")?.usos).toBe(1);
	});
});
