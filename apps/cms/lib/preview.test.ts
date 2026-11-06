import { describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { hasBuild, ogImage, resolvePreview, rewriteCss, rewriteHtml } from "./preview";

function withApps(run: (appsDir: string) => void) {
	const appsDir = mkdtempSync(join(tmpdir(), "cms-preview-"));
	try {
		run(appsDir);
	} finally {
		rmSync(appsDir, { recursive: true, force: true });
	}
}

describe("reescritura", () => {
	test("prefija rutas absolutas y respeta externas y protocol-relative", () => {
		const html = `<link href="/_astro/a.css"><a href="/">Inicio</a>
<img src="/_astro/foto.avif" srcset="/_astro/a.png 1x, /_astro/b.png 2x">
<a href="https://ejemplo.com/">Fuera</a><script src="//cdn.com/x.js"></script>`;
		const result = rewriteHtml(html, "bar-pepe");

		expect(result).toContain('href="/preview/bar-pepe/_astro/a.css"');
		expect(result).toContain('href="/preview/bar-pepe/"');
		expect(result).toContain('src="/preview/bar-pepe/_astro/foto.avif"');
		expect(result).toContain(
			'srcset="/preview/bar-pepe/_astro/a.png 1x, /preview/bar-pepe/_astro/b.png 2x"',
		);
		expect(result).toContain('href="https://ejemplo.com/"');
		expect(result).toContain('src="//cdn.com/x.js"');
	});

	test("prefija las url() de CSS", () => {
		const css = `body{background:url(/_astro/f.jpg)} .x{background:url("/_astro/g.png")}`;
		const result = rewriteCss(css, "bar-pepe");
		expect(result).toContain("url(/preview/bar-pepe/_astro/f.jpg)");
		expect(result).toContain('url("/preview/bar-pepe/_astro/g.png")');
	});
});

describe("build", () => {
	test("detecta dist y resuelve rutas con index.html", () => {
		withApps((appsDir) => {
			const app = join(appsDir, "bar-pepe");
			mkdirSync(join(app, "dist", "servicios"), { recursive: true });
			mkdirSync(join(app, "dist", "_astro"), { recursive: true });
			writeFileSync(join(app, "dist", "index.html"), "<h1>Inicio</h1>");
			writeFileSync(join(app, "dist", "servicios", "index.html"), "<h1>Servicios</h1>");
			writeFileSync(join(app, "dist", "_astro", "a.css"), "body{color:red}");

			expect(hasBuild("bar-pepe", appsDir)).toBe(true);
			expect(resolvePreview("bar-pepe", "", appsDir)?.kind).toBe("html");
			expect(resolvePreview("bar-pepe", "servicios", appsDir)?.file).toContain(
				join("servicios", "index.html"),
			);
			expect(resolvePreview("bar-pepe", "servicios/", appsDir)?.file).toContain("index.html");
			expect(resolvePreview("bar-pepe", "_astro/a.css", appsDir)?.kind).toBe("css");
		});
	});

	test("no sirve nada fuera de dist", () => {
		withApps((appsDir) => {
			const app = join(appsDir, "bar-pepe");
			mkdirSync(join(app, "dist"), { recursive: true });
			writeFileSync(join(app, "dist", "index.html"), "<h1>Inicio</h1>");
			writeFileSync(join(app, "package.json"), "{}");

			expect(resolvePreview("bar-pepe", "../package.json", appsDir)).toBeNull();
			expect(resolvePreview("bar-pepe", "..%2Fpackage.json", appsDir)).toBeNull();
			expect(resolvePreview("../bar-pepe", "", appsDir)).toBeNull();
			expect(resolvePreview("bar-pepe", "no-existe", appsDir)).toBeNull();
		});
	});

	test("sin build no hay vista previa", () => {
		withApps((appsDir) => {
			mkdirSync(join(appsDir, "bar-pepe", "public"), { recursive: true });
			expect(hasBuild("bar-pepe", appsDir)).toBe(false);
			expect(resolvePreview("bar-pepe", "", appsDir)).toBeNull();
		});
	});

	test("encuentra la imagen OG para la miniatura", () => {
		withApps((appsDir) => {
			const dir = join(appsDir, "bar-pepe", "public");
			mkdirSync(dir, { recursive: true });
			writeFileSync(join(dir, "og.jpg"), "jpg");
			expect(ogImage("bar-pepe", appsDir)).toContain("og.jpg");
			expect(ogImage("otra", appsDir)).toBeNull();
		});
	});
});
