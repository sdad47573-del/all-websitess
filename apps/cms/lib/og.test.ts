import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildOgSvg, generateOgImage, readOgData } from "./og";
import { backupOg, backupRoot, listOgBackups } from "./og-backup";

async function withApp(run: (appsDir: string, appRoot: string) => Promise<void>) {
	const appsDir = mkdtempSync(join(tmpdir(), "cms-og-"));
	const appRoot = join(appsDir, "bar-pepe");
	try {
		mkdirSync(join(appRoot, "src/data"), { recursive: true });
		mkdirSync(join(appRoot, "public"), { recursive: true });
		writeFileSync(
			join(appRoot, "src/data/site.ts"),
			`export const BUSINESS = {
	name: 'Bar <Pepe> & Cía',
	tagline: 'Tapas de siempre',
	city: 'Sevilla',
	siteUrl: 'https://bar-pepe.vercel.app',
};`,
		);
		writeFileSync(
			join(appRoot, "public/favicon.svg"),
			`<svg xmlns="http://www.w3.org/2000/svg"><rect fill="#123456"/><path fill="#eec25b"/></svg>`,
		);
		await run(appsDir, appRoot);
	} finally {
		rmSync(appsDir, { recursive: true, force: true });
	}
}

describe("miniatura OG", () => {
	test("lee los datos del negocio y los colores del favicon", async () => {
		await withApp(async (_appsDir, appRoot) => {
			expect(readOgData(appRoot)).toMatchObject({
				name: "Bar <Pepe> & Cía",
				tagline: "Tapas de siempre",
				city: "Sevilla",
				url: "https://bar-pepe.vercel.app",
				color: "#123456",
				accent: "#eec25b",
			});
		});
	});

	test("escapa el texto y pinta ciudad y dominio", () => {
		const svg = buildOgSvg({
			name: "Bar <Pepe> & Cía",
			tagline: "Tapas de siempre",
			city: "Sevilla",
			url: "https://bar-pepe.vercel.app",
			color: "#123456",
			accent: "#eec25b",
		});

		expect(svg).toContain("&lt;Pepe&gt; &amp; Cía");
		expect(svg).toContain("SEVILLA");
		expect(svg).toContain("bar-pepe.vercel.app");
		expect(svg).toContain('width="1200" height="630"');
	});

	test("genera un JPG de 1200×630 en public/", async () => {
		await withApp(async (appsDir, appRoot) => {
			const info = await generateOgImage("bar-pepe", appsDir);

			expect(info.width).toBe(1200);
			expect(info.height).toBe(630);
			expect(info.size).toBeGreaterThan(1000);
			expect(existsSync(join(appRoot, "public/og.jpg"))).toBe(true);
		});
	});

	test("guarda la imagen anterior antes de regenerar", async () => {
		await withApp(async (appsDir, appRoot) => {
			const first = await generateOgImage("bar-pepe", appsDir);
			expect(first.backup).toBeNull();

			const previous = readFileSync(join(appRoot, "public/og.jpg"));
			const second = await generateOgImage("bar-pepe", appsDir);

			expect(second.backup?.size).toBe(previous.length);
			const backups = listOgBackups("bar-pepe", appsDir);
			expect(backups).toHaveLength(1);
			expect(backups[0].name).toBe(second.backup?.name);

			const saved = readFileSync(join(backupRoot(appsDir), "bar-pepe", backups[0].name));
			expect(saved.equals(previous)).toBe(true);
		});
	});

	test("rota a las 10 copias más recientes", async () => {
		await withApp(async (appsDir, appRoot) => {
			const source = join(appRoot, "public/og.jpg");
			writeFileSync(source, "imagen de prueba");

			for (let index = 0; index < 12; index += 1) {
				backupOg("bar-pepe", source, appsDir);
			}

			expect(listOgBackups("bar-pepe", appsDir)).toHaveLength(10);
		});
	});

	test("rechaza slugs no válidos", async () => {
		await expect(generateOgImage("../bar-pepe", tmpdir())).rejects.toThrow("Slug no válido");
	});
});
