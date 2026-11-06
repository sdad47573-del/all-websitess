/**
 * Auditoría SEO y de compartir sobre el HTML final de la web.
 *
 * Lee `dist/index.html` con expresiones regulares: no hace falta DOM ni
 * dependencias, y es exactamente lo que ven Google y los scrapers. Si la web
 * aún no se ha construido, devuelve los datos de partida y ninguna comprobación;
 * el panel avisa de que hace falta el build.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { DEFAULT_APPS_DIR } from "./paths";
import { hasBuild, ogImage } from "./preview";
import { getSite } from "./sites";

export type SeoStatus = "ok" | "warn" | "error" | "info";

export interface SeoCheck {
	id: string;
	label: string;
	status: SeoStatus;
	detail: string;
}

export interface SeoAudit {
	hasBuild: boolean;
	title: string;
	description: string;
	canonical: string;
	siteUrl: string;
	hasOg: boolean;
	checks: SeoCheck[];
}

const decode = (value: string) =>
	value
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/\s+/g, " ")
		.trim();

function attribute(tag: string, name: string): string {
	const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"));
	return match ? (match[1] ?? match[2] ?? "") : "";
}

function metaContent(html: string, attributeName: string, value: string): string {
	const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
	for (const tag of tags) {
		if (attribute(tag, attributeName).toLowerCase() === value.toLowerCase()) {
			return decode(attribute(tag, "content"));
		}
	}
	return "";
}

function linkHref(html: string, rel: string): string {
	const tags = html.match(/<link\b[^>]*>/gi) ?? [];
	for (const tag of tags) {
		const rels = attribute(tag, "rel").toLowerCase().split(/\s+/);
		if (rels.includes(rel)) return decode(attribute(tag, "href"));
	}
	return "";
}

export function auditSeo(slug: string, appsDir = DEFAULT_APPS_DIR): SeoAudit | null {
	const site = getSite(slug, appsDir);
	if (!site) return null;

	const siteUrl = site.siteUrl.replace(/\/$/, "");
	const hasImage = ogImage(slug, appsDir) !== null;

	if (!hasBuild(slug, appsDir)) {
		return {
			hasBuild: false,
			title: [site.name, site.tagline].filter(Boolean).join(" · "),
			description: site.summary || site.tagline,
			canonical: siteUrl ? `${siteUrl}/` : "",
			siteUrl,
			hasOg: hasImage,
			checks: [],
		};
	}

	const html = readFileSync(join(appsDir, slug, "dist", "index.html"), "utf8");
	const title = decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
	const description = metaContent(html, "name", "description");
	const canonical = linkHref(html, "canonical");
	const ogImageUrl = metaContent(html, "property", "og:image");
	const twitter = metaContent(html, "name", "twitter:card");
	const robots = metaContent(html, "name", "robots");
	const h1Tags = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi) ?? [];
	const h1Text = decode((h1Tags[0] ?? "").replace(/<[^>]+>/g, " "));
	const lang = attribute(html.match(/<html\b[^>]*>/i)?.[0] ?? "", "lang");
	const legalLink = /href\s*=\s*["'][^"']*aviso-legal/i.test(html);
	const jsonLd = /application\/ld\+json/i.test(html);
	const images = html.match(/<img\b[^>]*>/gi) ?? [];
	const withoutAlt = images.filter((tag) => {
		const alt = attribute(tag, "alt");
		return !alt.trim();
	}).length;

	const checks: SeoCheck[] = [];
	const add = (check: SeoCheck) => checks.push(check);

	if (!title) {
		add({ id: "title", label: "Título de la página", status: "error", detail: "No hay <title>." });
	} else if (title.length < 15 || title.length > 65) {
		add({
			id: "title",
			label: "Título de la página",
			status: "warn",
			detail: `${title.length} caracteres; lo recomendable es entre 15 y 65.`,
		});
	} else {
		add({ id: "title", label: "Título de la página", status: "ok", detail: `${title.length} caracteres.` });
	}

	if (!description) {
		add({
			id: "description",
			label: "Meta descripción",
			status: "error",
			detail: "No hay meta description.",
		});
	} else if (description.length < 50 || description.length > 160) {
		add({
			id: "description",
			label: "Meta descripción",
			status: "warn",
			detail: `${description.length} caracteres; lo recomendable es entre 50 y 160.`,
		});
	} else {
		add({
			id: "description",
			label: "Meta descripción",
			status: "ok",
			detail: `${description.length} caracteres.`,
		});
	}

	if (!canonical) {
		add({ id: "canonical", label: "URL canónica", status: "warn", detail: "No hay <link rel=canonical>." });
	} else if (siteUrl && !canonical.startsWith(siteUrl)) {
		add({
			id: "canonical",
			label: "URL canónica",
			status: "warn",
			detail: `Apunta a ${canonical}, fuera de ${siteUrl}.`,
		});
	} else {
		add({ id: "canonical", label: "URL canónica", status: "ok", detail: canonical });
	}

	if (!ogImageUrl) {
		add({ id: "og", label: "Imagen al compartir", status: "error", detail: "No hay og:image." });
	} else if (!hasImage) {
		add({
			id: "og",
			label: "Imagen al compartir",
			status: "warn",
			detail: `Declara ${ogImageUrl}, pero el fichero no existe en public/.`,
		});
	} else {
		add({ id: "og", label: "Imagen al compartir", status: "ok", detail: ogImageUrl });
	}

	add(
		twitter
			? { id: "twitter", label: "Tarjeta en X/Twitter", status: "ok", detail: twitter }
			: {
					id: "twitter",
					label: "Tarjeta en X/Twitter",
					status: "warn",
					detail: "Falta twitter:card; el enlace se comparte sin imagen grande.",
				},
	);

	if (h1Tags.length === 0) {
		add({ id: "h1", label: "Encabezado principal", status: "error", detail: "No hay ningún <h1>." });
	} else if (h1Tags.length > 1) {
		add({
			id: "h1",
			label: "Encabezado principal",
			status: "warn",
			detail: `Hay ${h1Tags.length} <h1>; conviene uno solo.`,
		});
	} else {
		add({ id: "h1", label: "Encabezado principal", status: "ok", detail: h1Text });
	}

	add(
		lang.toLowerCase().startsWith("es")
			? { id: "lang", label: "Idioma declarado", status: "ok", detail: `lang="${lang}"` }
			: {
					id: "lang",
					label: "Idioma declarado",
					status: "warn",
					detail: lang ? `lang="${lang}", se esperaba español.` : "Falta lang en <html>.",
				},
	);

	add(
		/noindex/i.test(robots)
			? {
					id: "robots",
					label: "Indexación",
					status: "error",
					detail: `robots: ${robots}`,
				}
			: { id: "robots", label: "Indexación", status: "ok", detail: robots || "indexable por defecto" },
	);

	add(
		legalLink
			? { id: "legal", label: "Enlace legal", status: "ok", detail: "Enlaza al aviso legal." }
			: {
					id: "legal",
					label: "Enlace legal",
					status: "warn",
					detail: "No se encuentra un enlace a /aviso-legal.",
				},
	);

	add(
		jsonLd
			? { id: "schema", label: "Datos estructurados", status: "ok", detail: "JSON-LD presente." }
			: {
					id: "schema",
					label: "Datos estructurados",
					status: "warn",
					detail: "Sin JSON-LD; Google pierde el negocio local.",
				},
	);

	add(
		withoutAlt > 0
			? {
					id: "alt",
					label: "Texto alternativo",
					status: "warn",
					detail: `${withoutAlt} imagen(es) sin alt.`,
				}
			: {
					id: "alt",
					label: "Texto alternativo",
					status: "ok",
					detail: "Todas las imágenes tienen alt.",
				},
	);

	return { hasBuild: true, title, description, canonical, siteUrl, hasOg: hasImage, checks };
}

export function isSeoSource(slug: string, appsDir = DEFAULT_APPS_DIR): boolean {
	return existsSync(join(appsDir, slug, "src/data/site.ts"));
}
