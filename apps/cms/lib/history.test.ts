import { describe, expect, test } from "bun:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { listSnapshots, readSnapshot, snapshot } from "./history";

function withApps(run: (appsDir: string) => void) {
	const appsDir = mkdtempSync(join(tmpdir(), "cms-history-"));
	try {
		run(appsDir);
	} finally {
		rmSync(appsDir, { recursive: true, force: true });
	}
}

describe("historial", () => {
	test("guarda versiones y devuelve la más reciente primero", () => {
		withApps((appsDir) => {
			snapshot("bar-pepe", "data/site.ts", "primera", appsDir);
			snapshot("bar-pepe", "data/site.ts", "segunda", appsDir);

			const versions = listSnapshots("bar-pepe", "data/site.ts", appsDir);
			expect(versions).toHaveLength(2);
			expect(readSnapshot("bar-pepe", "data/site.ts", versions[0].id, appsDir)).toBe("segunda");
			expect(readSnapshot("bar-pepe", "data/site.ts", versions[1].id, appsDir)).toBe("primera");
		});
	});

	test("separa el historial por fichero", () => {
		withApps((appsDir) => {
			snapshot("bar-pepe", "data/site.ts", "datos", appsDir);
			snapshot("bar-pepe", "pages/index.astro", "plantilla", appsDir);

			expect(listSnapshots("bar-pepe", "data/site.ts", appsDir)).toHaveLength(1);
			expect(listSnapshots("bar-pepe", "pages/index.astro", appsDir)).toHaveLength(1);
			expect(listSnapshots("bar-pepe", "styles/global.css", appsDir)).toHaveLength(0);
		});
	});

	test("rota a las 20 versiones más recientes", () => {
		withApps((appsDir) => {
			for (let index = 0; index < 25; index += 1) {
				snapshot("bar-pepe", "data/site.ts", `versión ${index}`, appsDir);
			}
			expect(listSnapshots("bar-pepe", "data/site.ts", appsDir)).toHaveLength(20);
		});
	});

	test("rechaza ids y rutas no válidas", () => {
		withApps((appsDir) => {
			expect(() => readSnapshot("bar-pepe", "data/site.ts", "../x", appsDir)).toThrow();
			expect(() => snapshot("bar-pepe", "../site.ts", "x", appsDir)).toThrow();
			expect(() => snapshot("../bar-pepe", "data/site.ts", "x", appsDir)).toThrow();
		});
	});
});
