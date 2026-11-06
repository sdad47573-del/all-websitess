import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildOgSvg, generateOgImage, readOgData } from "./og";

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

	test("rechaza slugs no válidos", async () => {
		await expect(generateOgImage("../bar-pepe", tmpdir())).rejects.toThrow("Slug no válido");
	});
});
