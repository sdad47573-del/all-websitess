/**
 * Descubre las webs de cliente de `apps/` que pueden servirse como páginas de
 * sur-digital y aplica el filtro `APPS`.
 *
 * Lo usan dos sitios, para que la lista sea una sola:
 * - `tools/apps-build.mjs`, que las construye y las ensambla en `/<slug>/`.
 * - `astro.config.mjs`, que las anuncia en el sitemap.
 *
 * Se considera empaquetable toda carpeta de `apps/` que sea Astro, tenga script
 * `build` y no use el adaptador de Vercel (esas son SSR y su salida no es un
 * `dist/` estático). `_sur-digital` es este mismo sitio y se queda fuera.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));

/** `apps/` del monorepo (este módulo vive en `apps/_sur-digital/tools/`). */
export const APPS_DIR = path.resolve(HERE, "../..");

const readJson = (file) => {
	try {
		return JSON.parse(fs.readFileSync(file, "utf8"));
	} catch {
		return null;
	}
};

/** Apps que se pueden servir en estático, con el origen que declaran. */
export const collectApps = () => {
	const apps = [];

	for (const entry of fs.readdirSync(APPS_DIR, { withFileTypes: true })) {
		const name = entry.name;
		if (!entry.isDirectory() || name.startsWith("_")) continue;

		const dir = path.join(APPS_DIR, name);
		const pkg = readJson(path.join(dir, "package.json"));
		if (!pkg) continue;

		const deps = { ...pkg.dependencies, ...pkg.devDependencies };
		// `cms` y `vigia-proyecto` no son Astro y se quedan fuera solos.
		if (!deps.astro || !pkg.scripts?.build) continue;

		const config = ["astro.config.mjs", "astro.config.ts", "astro.config.js"]
			.map((file) => path.join(dir, file))
			.find((file) => fs.existsSync(file));
		if (!config) continue;

		const text = fs.readFileSync(config, "utf8");
		// Con adaptador son SSR: su salida no es un `dist/` estático.
		if (text.includes("@astrojs/vercel")) continue;

		const site = text.match(/site:\s*['"]([^'"]+)['"]/)?.[1] ?? `https://${name}.vercel.app`;
		apps.push({ name, dir, site: site.replace(/\/+$/, "") });
	}

	return apps.sort((a, b) => a.name.localeCompare(b.name));
};

/** Filtra por `APPS` y falla si un nombre pedido no existe: un typo no debe servir de menos. */
export const selectApps = (apps) => {
	const requested = (process.env.APPS ?? "")
		.split(",")
		.map((name) => name.trim())
		.filter(Boolean);
	if (requested.length === 0) return apps;

	const available = new Set(apps.map((app) => app.name));
	const unknown = requested.filter((name) => !available.has(name));
	if (unknown.length > 0) {
		throw new Error(
			`APPS pide apps que no se pueden empaquetar: ${unknown.join(", ")}. ` +
				"Revisa que existan en apps/ y que sean Astro estáticas.",
		);
	}
	return apps.filter((app) => requested.includes(app.name));
};
