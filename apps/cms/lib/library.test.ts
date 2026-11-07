import { afterAll, describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { findLibraryEntry, readSectionLibrary } from "./library";

const root = mkdtempSync(join(tmpdir(), "cms-biblioteca-"));
const appsDir = join(root, "apps");

afterAll(() => rmSync(root, { recursive: true, force: true }));

function app(slug: string, sections: unknown, siteName?: string): void {
	const dir = join(appsDir, slug, "src", "data");
	mkdirSync(dir, { recursive: true });
	writeFileSync(join(dir, "secciones.json"), JSON.stringify({ version: 1, secciones: sections }));
	if (siteName) {
		writeFileSync(
			join(dir, "site.ts"),
			`export const BUSINESS = {\n\tname: '${siteName}',\n};\n`,
		);
	}
}

app("alfa", [
	{
		id: "portada",
		tipo: "hero",
		visible: true,
		titulo: "Pan <br /><em>fresco.</em>",
		texto: "De la casa.",
		imagen: "fachada.jpg",
		imagenAlt: "Fachada",
	},
	{
		id: "casa",
		tipo: "about",
		visible: true,
		titulo: "La casa",
		parrafos: ["Un párrafo."],
	},
	{
		id: "oculta",
		tipo: "faq",
		visible: false,
		titulo: "No entra",
		preguntas: [{ pregunta: "¿Sí?", respuesta: "No." }],
	},
], "Alfa");

// Mismo hero que alfa: la biblioteca lo cuenta una sola vez.
app("beta", [
	{
		id: "inicio",
		tipo: "hero",
		visible: true,
		titulo: "Pan <br /><em>fresco.</em>",
		texto: "De la casa.",
		imagen: "fachada.jpg",
		imagenAlt: "Fachada",
	},
	{ id: "cierre", tipo: "cta", visible: true, titulo: "Pásate", boton: { texto: "Ir", href: "#" } },
	{ id: "solo-titulo", tipo: "texto", visible: true, titulo: "Sin cuerpo" },
]);

app("rota", []);

const pieces = readSectionLibrary(appsDir);

describe("biblioteca de piezas", () => {
	test("extrae las piezas con contenido y descarta las ocultas", () => {
		expect(pieces.find((piece) => piece.clave === "alfa:portada")).toBeDefined();
		expect(pieces.find((piece) => piece.clave === "alfa:oculta")).toBeUndefined();
		expect(pieces.find((piece) => piece.clave === "beta:cierre")).toBeDefined();
		expect(pieces.find((piece) => piece.clave === "beta:solo-titulo")).toBeUndefined();
	});

	test("deduplica piezas con el mismo tipo y contenido", () => {
		expect(pieces.filter((piece) => piece.tipo === "hero")).toHaveLength(1);
		expect(pieces.find((piece) => piece.tipo === "hero")?.slug).toBe("alfa");
	});

	test("guarda el resumen y el nombre de la web", () => {
		const hero = pieces.find((piece) => piece.clave === "alfa:portada");
		expect(hero?.resumen).toBe("De la casa.");
		expect(hero?.web).toBe("Alfa");
		expect(hero?.titulo).toContain("<br />");
		expect(hero?.imagen).toBe("fachada.jpg");
		expect(hero?.imagenAlt).toBe("Fachada");
	});

	test("ordena por tipo y título", () => {
		expect(pieces.map((piece) => piece.tipo)).toEqual(["hero", "about", "cta"]);
	});

	test("puede limitarse a una sola web", () => {
		const only = readSectionLibrary(appsDir, "beta");
		expect(only.length).toBeGreaterThan(0);
		expect(only.every((piece) => piece.slug === "beta")).toBe(true);
	});

	test("devuelve la pieza completa para la vista previa", () => {
		const entry = findLibraryEntry("alfa:portada", appsDir);
		expect(entry?.seccion.tipo).toBe("hero");
		expect(entry?.seccion.imagen).toBe("fachada.jpg");
	});
});
