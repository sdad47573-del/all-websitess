import { afterAll, describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { importSection } from "./sections";

const root = mkdtempSync(join(tmpdir(), "cms-importar-"));
const appsDir = join(root, "apps");

afterAll(() => rmSync(root, { recursive: true, force: true }));

function app(slug: string, sections: unknown): void {
	const dir = join(appsDir, slug, "src", "data");
	mkdirSync(dir, { recursive: true });
	mkdirSync(join(appsDir, slug, "src", "assets", "fotos"), { recursive: true });
	writeFileSync(
		join(dir, "secciones.json"),
		JSON.stringify({ version: 1, secciones: sections }),
	);
}

app("origen", [
	{
		id: "portada",
		tipo: "hero",
		visible: true,
		titulo: "Hola",
		texto: "Una casa.",
		imagen: "fachada.jpg",
		imagenAlt: "La fachada",
	},
]);

app("destino", [
	{ id: "texto", tipo: "texto", visible: true, titulo: "Actual", parrafos: ["Algo."] },
]);

writeFileSync(join(appsDir, "origen", "src", "assets", "fotos", "fachada.jpg"), "jpeg");

describe("importar una pieza", () => {
	test("la copia con un id nuevo y trae sus imágenes", () => {
		const result = importSection("destino", "origen", "portada", appsDir);
		const imported = result.secciones.secciones.find((section) => section.id === result.id);

		expect(result.id).toBe("portada-copia");
		expect(result.secciones.secciones).toHaveLength(2);
		expect(imported?.tipo).toBe("hero");
		expect(imported?.titulo).toBe("Hola");
		expect(imported?.imagen).toBe("fachada.jpg");
		expect(existsSync(join(appsDir, "destino", "src", "assets", "fotos", "fachada.jpg"))).toBe(
			true,
		);
		expect(
			readFileSync(join(appsDir, "destino", "src", "assets", "fotos", "fachada.jpg"), "utf8"),
		).toBe("jpeg");
	});

	test("no repite ids al importar dos veces", () => {
		const result = importSection("destino", "origen", "portada", appsDir);
		expect(result.id).toBe("portada-copia-2");
		expect(result.secciones.secciones).toHaveLength(3);
	});

	test("rechaza una pieza que no existe", () => {
		expect(() => importSection("destino", "origen", "no-existe", appsDir)).toThrow(
			"No existe esa pieza en la web de origen.",
		);
	});
});
