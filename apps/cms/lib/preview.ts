/**
 * Vista previa de cada web a partir de su build (`<web>/dist`).
 *
 * El prerender se sirve bajo `/preview/<slug>/` desde el mismo origen del CMS.
 * Como el HTML de Astro referencia assets con rutas absolutas (`/_astro/…`),
 * antes de servirlo se reescriben esas rutas al prefijo de la vista previa;
 * si no, el iframe pediría los assets al CMS y saldría sin estilos ni fotos.
 */
import { existsSync, readdirSync, statSync } from "node:fs";
import { extname, join, resolve, sep } from "node:path";
import { DEFAULT_APPS_DIR } from "./paths";

const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const OG_NAMES = ["og.jpg", "og.jpeg", "og.png", "og.webp", "og.svg"];

export function hasBuild(slug: string, appsDir = DEFAULT_APPS_DIR): boolean {
	if (!SLUG_PATTERN.test(slug)) return false;
	return existsSync(join(appsDir, slug, "dist", "index.html"));
}

/** Imagen Open Graph de la web, que sirve de miniatura en el listado. */
export function ogImage(slug: string, appsDir = DEFAULT_APPS_DIR): string | null {
	if (!SLUG_PATTERN.test(slug)) return null;
	const dir = join(appsDir, slug, "public");
	if (!existsSync(dir)) return null;

	const entries = readdirSync(dir);
	for (const name of OG_NAMES) {
		if (entries.includes(name)) return join(dir, name);
	}
	return null;
}

export interface PreviewTarget {
	file: string;
	kind: "html" | "css" | "other";
}

/** Fichero del build que corresponde a una ruta de la vista previa. */
export function resolvePreview(
	slug: string,
	requestPath: string,
	appsDir = DEFAULT_APPS_DIR,
): PreviewTarget | null {
	if (!SLUG_PATTERN.test(slug)) return null;
	const base = resolve(appsDir, slug, "dist");
	if (!existsSync(join(base, "index.html"))) return null;

	let clean: string;
	try {
		clean = decodeURIComponent(requestPath ?? "").replace(/^\/+/, "");
	} catch {
		return null;
	}
	if (clean.includes("\0") || clean.split("/").includes("..")) return null;

	const candidates = clean === "" ? ["index.html"] : [clean, join(clean, "index.html")];
	for (const candidate of candidates) {
		const full = resolve(base, candidate);
		if (full !== base && !full.startsWith(base + sep)) continue;
		if (!existsSync(full) || !statSync(full).isFile()) continue;

		const extension = extname(full).toLowerCase();
		return {
			file: full,
			kind: extension === ".html" ? "html" : extension === ".css" ? "css" : "other",
		};
	}
	return null;
}

/** Prefija las rutas absolutas del HTML para que apunten a la vista previa. */
export function rewriteHtml(html: string, slug: string): string {
	const prefix = `/preview/${slug}/`;
	return html
		.replace(/(\s(?:href|src|poster|action)=")\/(?!\/)/g, `$1${prefix}`)
		.replace(/(srcset=")([^"]*)"/g, (_match, open: string, value: string) => {
			const rewritten = value.replace(/(^|,\s*)\/(?!\/)/g, `$1${prefix}`);
			return `${open}${rewritten}"`;
		});
}

/** Igual para las url(/…) de las hojas de estilo. */
export function rewriteCss(css: string, slug: string): string {
	return css.replace(/url\((['"]?)\/(?!\/)/g, `url($1/preview/${slug}/`);
}
