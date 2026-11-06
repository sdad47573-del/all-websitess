import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	deleteMedia,
	listMedia,
	listSourceFiles,
	normalizeMediaName,
	readSourceFile,
	saveMedia,
	writeSourceFile,
} from "./files";
import { listSnapshots, readSnapshot } from "./history";

function withWeb(run: (appsDir: string, appDir: string) => void) {
	const root = mkdtempSync(join(tmpdir(), "cms-files-"));
	const appsDir = join(root, "apps");
	const appDir = join(appsDir, "bar-pepe");

	mkdirSync(join(appDir, "src", "pages"), { recursive: true });
	mkdirSync(join(appDir, "src", "data"), { recursive: true });
	mkdirSync(join(appDir, "src", "assets", "fotos"), { recursive: true });

	writeFileSync(
		join(appDir, "src", "pages", "index.astro"),
		`---\nimport foto from '../assets/fotos/fachada.jpg';\n---\n<img src={foto} alt="Fachada" />\n`,
	);
	writeFileSync(join(appDir, "src", "data", "site.ts"), "export const BUSINESS = { name: 'Bar' };");
	writeFileSync(join(appDir, "src", "assets", "fotos", "fachada.jpg"), "jpg");
	writeFileSync(join(appDir, "src", "assets", "fotos", "suelta.jpg"), "jpg");

	try {
		run(appsDir, appDir);
	} finally {
		rmSync(root, { recursive: true, force: true });
	}
}

describe("plantillas", () => {
	test("lista solo texto y con rutas relativas a src", () => {
		withWeb((appsDir) => {
			const files = listSourceFiles("bar-pepe", appsDir);
			expect(files.map((file) => file.path)).toEqual([
				"data/site.ts",
				"pages/index.astro",
			]);
		});
	});

	test("lee y escribe sin salir de src", () => {
		withWeb((appsDir, appDir) => {
			const read = readSourceFile("bar-pepe", "pages/index.astro", appsDir);
			expect(read.content).toContain("Fachada");

			writeSourceFile("bar-pepe", "pages/index.astro", `${read.content}\n<p>Hola</p>`, appsDir);
			expect(readFileSync(join(appDir, "src", "pages", "index.astro"), "utf8")).toContain(
				"<p>Hola</p>",
			);

			expect(() => readSourceFile("bar-pepe", "../package.json", appsDir)).toThrow();
			expect(() => writeSourceFile("bar-pepe", "../package.json", "{}", appsDir)).toThrow();
			expect(() => writeSourceFile("bar-pepe", "pages/x.html", "<p></p>", appsDir)).toThrow();
		});
	});

	test("rechaza slugs con traversal", () => {
		withWeb((appsDir) => {
			expect(() => listSourceFiles("../bar-pepe", appsDir)).toThrow();
		});
	});

	test("cada guardado deja la versión anterior en el historial", () => {
		withWeb((appsDir) => {
			const original = readSourceFile("bar-pepe", "pages/index.astro", appsDir).content;
			writeSourceFile("bar-pepe", "pages/index.astro", `${original}\n<!-- uno -->`, appsDir);

			const versions = listSnapshots("bar-pepe", "pages/index.astro", appsDir);
			expect(versions).toHaveLength(1);
			expect(readSnapshot("bar-pepe", "pages/index.astro", versions[0].id, appsDir)).toBe(original);
		});
	});
});

describe("imágenes", () => {
	test("marca en qué plantilla se usa cada imagen", () => {
		withWeb((appsDir) => {
			const media = listMedia("bar-pepe", appsDir);
			expect(media.map((item) => item.name)).toEqual(["fachada.jpg", "suelta.jpg"]);
			expect(media[0].referencedIn).toEqual(["pages/index.astro"]);
			expect(media[1].referencedIn).toEqual([]);
		});
	});

	test("no borra una imagen referenciada y sí una suelta", () => {
		withWeb((appsDir, appDir) => {
			expect(() => deleteMedia("bar-pepe", "fachada.jpg", appsDir)).toThrow(/se usa en/);
			deleteMedia("bar-pepe", "suelta.jpg", appsDir);
			expect(existsSync(join(appDir, "src", "assets", "fotos", "suelta.jpg"))).toBe(false);
		});
	});

	test("normaliza nombres y reemplaza el fichero existente", () => {
		withWeb((appsDir, appDir) => {
			expect(normalizeMediaName("Mi Foto Ñandú.JPG")).toBe("mi-foto-nandu.jpg");
			const saved = saveMedia("bar-pepe", "Fachada Nueva.PNG", new Uint8Array([1, 2, 3]), appsDir);
			expect(saved).toEqual({ name: "fachada-nueva.png", replaced: false });
			expect(existsSync(join(appDir, "src", "assets", "fotos", "fachada-nueva.png"))).toBe(true);

			const again = saveMedia("bar-pepe", "fachada-nueva.png", new Uint8Array([4]), appsDir);
			expect(again.replaced).toBe(true);
		});
	});

	test("rechaza formatos que no son imagen", () => {
		withWeb((appsDir) => {
			expect(() => saveMedia("bar-pepe", "notas.txt", new Uint8Array([1]), appsDir)).toThrow();
			expect(() => saveMedia("bar-pepe", ".jpg", new Uint8Array([1]), appsDir)).toThrow();
		});
	});
});
