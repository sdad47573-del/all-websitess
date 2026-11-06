import { describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { auditSeo } from "./seo";

function withApp(run: (appsDir: string, appRoot: string) => void) {
	const appsDir = mkdtempSync(join(tmpdir(), "cms-seo-"));
	const appRoot = join(appsDir, "bar-pepe");
	try {
		mkdirSync(join(appRoot, "src/data"), { recursive: true });
		mkdirSync(join(appRoot, "public"), { recursive: true });
		writeFileSync(
			join(appRoot, "src/data/site.ts"),
			`export const BUSINESS = { name: 'Bar Pepe', tagline: 'Tapas en Sevilla', city: 'Sevilla', siteUrl: 'https://bar-pepe.vercel.app' };`,
		);
		writeFileSync(join(appRoot, "public/og.jpg"), "jpg");
		run(appsDir, appRoot);
	} finally {
		rmSync(appsDir, { recursive: true, force: true });
	}
}

const BUILT_HTML = `<!doctype html><html lang="es"><head>
<title>Bar Pepe · Tapas de siempre en Sevilla</title>
<meta name="description" content="Tapas de siempre en el centro de Sevilla: desayunos, montaditos y una barra de las de antes.">
<link rel="canonical" href="https://bar-pepe.vercel.app/">
<meta property="og:image" content="https://bar-pepe.vercel.app/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="robots" content="index, follow">
<script type="application/ld+json">{}</script>
</head><body><h1>Bar Pepe</h1><a href="/aviso-legal">Aviso legal</a><img src="/a.jpg" alt=""></body></html>`;

describe("auditoría SEO", () => {
	test("sin build devuelve datos de partida y ninguna comprobación", () => {
		withApp((appsDir) => {
			const audit = auditSeo("bar-pepe", appsDir);
			expect(audit).toMatchObject({
				hasBuild: false,
				hasOg: true,
				siteUrl: "https://bar-pepe.vercel.app",
				checks: [],
			});
			expect(audit?.title).toContain("Bar Pepe");
		});
	});

	test("audita título, canonical, OG, H1 y enlace legal", () => {
		withApp((appsDir, appRoot) => {
			mkdirSync(join(appRoot, "dist"), { recursive: true });
			writeFileSync(join(appRoot, "dist/index.html"), BUILT_HTML);

			const audit = auditSeo("bar-pepe", appsDir);
			expect(audit?.hasBuild).toBe(true);
			expect(audit?.title).toBe("Bar Pepe · Tapas de siempre en Sevilla");

			const byId = Object.fromEntries((audit?.checks ?? []).map((check) => [check.id, check]));
			expect(byId.title.status).toBe("ok");
			expect(byId.description.status).toBe("ok");
			expect(byId.canonical.status).toBe("ok");
			expect(byId.og.status).toBe("ok");
			expect(byId.h1.status).toBe("ok");
			expect(byId.legal.status).toBe("ok");
			expect(byId.alt.status).toBe("warn");
		});
	});

	test("marca como error un noindex", () => {
		withApp((appsDir, appRoot) => {
			mkdirSync(join(appRoot, "dist"), { recursive: true });
			writeFileSync(
				join(appRoot, "dist/index.html"),
				BUILT_HTML.replace('content="index, follow"', 'content="noindex, nofollow"'),
			);

			const audit = auditSeo("bar-pepe", appsDir);
			expect(audit?.checks.find((check) => check.id === "robots")?.status).toBe("error");
		});
	});
});
