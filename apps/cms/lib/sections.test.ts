import { describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { listSnapshots } from "./history";
import { readSections, saveSections } from "./sections";

function withSite(run: (appsDir: string) => void) {
	const root = mkdtempSync(join(tmpdir(), "cms-secciones-"));
	const appsDir = join(root, "apps");
	const appDir = join(appsDir, "bar-pepe");

	mkdirSync(join(appDir, "src", "data"), { recursive: true });
	mkdirSync(join(appDir, "src", "assets", "fotos"), { recursive: true });
	writeFileSync(join(appDir, "src", "assets", "fotos", "fachada.jpg"), "jpg");
	writeFileSync(join(appDir, "src", "assets", "fotos", "barra.jpg"), "jpg");

	try {
		run(appsDir);
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
}

const hero = (overrides: Record<string, unknown> = {}) => ({
	id: "portada",
	tipo: "hero",
	visible: true,
	etiqueta: "  Centro  ",
	titulo: "Bar Pepe, <br /><em>de siempre.</em>",
	texto: "Una barra y una terraza.",
	imagen: "fachada.jpg",
	imagenAlt: "Fachada del bar",
	boton: { texto: "Cómo llegar", href: "maps:directions" },
	datos: [{ etiqueta: "Nota", html: "<b>4,5</b> en Google" }],
	...overrides,
});

const page = (overrides: Record<string, unknown> = {}) => ({
	version: 1,
	secciones: [hero(), { id: "preguntas", tipo: "faq", visible: true, titulo: "Antes de venir", preguntas: [{ pregunta: "¿Abre?", respuesta: "Sí." }] }],
	...overrides,
});

describe("piezas de portada", () => {
	test("sin fichero devuelve null", () => {
		withSite((appsDir) => {
			expect(readSections("bar-pepe", appsDir)).toBeNull();
		});
	});

	test("guarda, normaliza y vuelve a leer", () => {
		withSite((appsDir) => {
			const saved = saveSections(
				"bar-pepe",
				page({
					secciones: [
						hero({ etiqueta: "  Centro  ", boton: { texto: " Ir ", href: "maps:directions" } }),
						{
							id: "texto",
							tipo: "texto",
							titulo: "Hola",
							parrafos: ["  Un párrafo  "],
							enlaces: [{ texto: "Google", href: "https://google.com" }],
						},
					],
				}),
				appsDir,
			);

			expect(saved.version).toBe(1);
			expect(saved.secciones[0].etiqueta).toBe("Centro");
			expect(saved.secciones[0].boton?.texto).toBe("Ir");
			expect(saved.secciones[1].parrafos[0]).toBe("Un párrafo");
			expect(saved.secciones[1].visible).toBe(true);
			expect(readSections("bar-pepe", appsDir)).toEqual(saved);

			const raw = JSON.parse(
				readFileSync(join(appsDir, "bar-pepe", "src", "data", "secciones.json"), "utf8"),
			);
			expect(raw.secciones).toHaveLength(2);
		});
	});

	test("rechaza piezas inválidas", () => {
		withSite((appsDir) => {
			const candidates = [
				page({ secciones: [] }),
				page({ secciones: [{ id: "casa", tipo: "about", titulo: "X", parrafos: ["Y"] }] }),
				page({ secciones: [hero({ tipo: "inventado" })] }),
				page({ secciones: [hero({ id: "../x" })] }),
				page({ secciones: [hero({ titulo: "" })] }),
				page({ secciones: [hero({ imagen: "no-existe.jpg" })] }),
				page({ secciones: [hero({ imagenAlt: "" })] }),
				page({ secciones: [hero({ campo: "extra" })] }),
				page({ secciones: [hero({ boton: { texto: "Ir", href: "javascript:alert(1)" } })] }),
				page({ secciones: [hero({ titulo: "<script>alert(1)</script>" })] }),
				page({ secciones: [hero(), hero()] }),
				page({
					secciones: [
						hero(),
						{ id: "galeria", tipo: "galeria", titulo: "Fotos", fotos: [] },
					],
				}),
			];

			for (const candidate of candidates) {
				expect(() => saveSections("bar-pepe", candidate, appsDir)).toThrow();
			}
			expect(readSections("bar-pepe", appsDir)).toBeNull();
		});
	});

	test("cada guardado deja la versión anterior en el historial", () => {
		withSite((appsDir) => {
			saveSections("bar-pepe", page(), appsDir);
			saveSections(
				"bar-pepe",
				page({ secciones: [hero({ titulo: "Otro título" }), page().secciones[1]] }),
				appsDir,
			);

			const versions = listSnapshots("bar-pepe", "data/secciones.json", appsDir);
			expect(versions).toHaveLength(1);
			expect(versions[0].size).toBeGreaterThan(0);
		});
	});
});
