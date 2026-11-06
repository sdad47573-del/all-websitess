/**
 * API del CMS y estáticos del cliente Solid.
 *
 * El cliente se compila con Vite a `dist/` y este servidor lo sirve junto a la
 * API. En desarrollo, Vite corre aparte (puerto 4401) y reenvía /api aquí.
 *
 * Endpoints:
 *   GET    /api/sites                        listado completo
 *   GET    /api/sites/:slug                  ficha
 *   PATCH  /api/sites/:slug                  edita campos de BUSINESS (incl. geo)
 *   GET    /api/sites/:slug/files            árbol de plantillas
 *   GET    /api/sites/:slug/files?path=…     contenido de una plantilla
 *   PUT    /api/sites/:slug/files            guarda una plantilla
 *   GET    /api/sites/:slug/media            imágenes y en qué plantilla se usan
 *   GET    /api/sites/:slug/media/:name      bytes de una imagen
 *   POST   /api/sites/:slug/media            sube o reemplaza una imagen
 *   DELETE /api/sites/:slug/media/:name      borra una imagen sin referencias
 */
import {
	EDITABLE_FIELDS,
	type EditableField,
	getSite,
	listSites,
	updateSiteField,
} from "./lib/sites";
import {
	deleteMedia,
	listMedia,
	listSourceFiles,
	mediaFile,
	readSourceFile,
	saveMedia,
	writeSourceFile,
} from "./lib/files";
import { listSnapshots, readSnapshot } from "./lib/history";
import { hasBuild, ogImage, resolvePreview, rewriteCss, rewriteHtml } from "./lib/preview";
import { readFileSync } from "node:fs";

const PORT = Number(process.env.PORT ?? 4400);
const DIST = new URL("./dist/", import.meta.url);

const LABELS: Record<EditableField, string> = {
	name: "Nombre",
	tagline: "Lema",
	phone: "Teléfono",
	street: "Calle",
	postalCode: "Código postal",
	city: "Ciudad",
	siteUrl: "URL canónica",
	lat: "Latitud",
	lng: "Longitud",
};

const json = (data: unknown, status = 200) =>
	Response.json(data, { status, headers: { "cache-control": "no-store" } });

const errorResponse = (error: unknown, status = 400) =>
	json({ error: error instanceof Error ? error.message : String(error) }, status);

async function siteRoute(request: Request, slug: string, rest: string[]): Promise<Response> {
	const site = getSite(slug);

	if (rest.length === 0) {
		if (!site) return json({ error: "No existe ninguna web con ese slug" }, 404);
		if (request.method === "GET") return json({ site: { ...site, hasBuild: hasBuild(site.slug) } });
		if (request.method !== "PATCH") return json({ error: "Método no permitido" }, 405);

		let payload: { fields?: Record<string, unknown> };
		try {
			payload = (await request.json()) as { fields?: Record<string, unknown> };
		} catch {
			return json({ error: "El cuerpo debe ser JSON" }, 400);
		}

		const fields = payload?.fields;
		if (!fields || typeof fields !== "object") {
			return json({ error: "Falta el objeto fields" }, 400);
		}

		const errors: string[] = [];
		for (const field of EDITABLE_FIELDS) {
			const raw = fields[field];
			if (typeof raw !== "string") continue;
			// Solo se escribe lo que cambia: así un guardado sin tocar nada no
			// reescribe el fichero ni actualiza su fecha.
			if (raw.trim() === site[field]) continue;

			const result = updateSiteField(site.slug, field, raw);
			if (!result.ok) errors.push(`${LABELS[field]}: ${result.error}`);
		}

		return json({ ok: errors.length === 0, errors, site: getSite(site.slug) });
	}

	if (!site) return json({ error: "No existe ninguna web con ese slug" }, 404);

	if (rest[0] === "files") {
		try {
			if (request.method === "GET") {
				const path = new URL(request.url).searchParams.get("path");
				return path
					? json({ file: readSourceFile(site.slug, path) })
					: json({ files: listSourceFiles(site.slug) });
			}

			if (request.method === "PUT") {
				let payload: { path?: unknown; content?: unknown };
				try {
					payload = (await request.json()) as { path?: unknown; content?: unknown };
				} catch {
					return json({ error: "El cuerpo debe ser JSON" }, 400);
				}
				if (typeof payload.path !== "string" || typeof payload.content !== "string") {
					return json({ error: "Faltan path y content" }, 400);
				}
				return json({ ok: true, file: writeSourceFile(site.slug, payload.path, payload.content) });
			}

			return json({ error: "Método no permitido" }, 405);
		} catch (error) {
			return errorResponse(error);
		}
	}

	if (rest[0] === "og") {
		if (request.method !== "GET") return json({ error: "Método no permitido" }, 405);
		const image = ogImage(site.slug);
		if (!image) return json({ error: "Esta web no tiene imagen OG" }, 404);
		return new Response(Bun.file(image), {
			headers: { "cache-control": "public, max-age=3600" },
		});
	}

	if (rest[0] === "history") {
		try {
			const path = new URL(request.url).searchParams.get("path");
			if (!path) return json({ error: "Falta el parámetro path" }, 400);

			if (rest.length === 1) {
				if (request.method !== "GET") return json({ error: "Método no permitido" }, 405);
				return json({ snapshots: listSnapshots(site.slug, path) });
			}

			const id = decodeURIComponent(rest[1]);
			if (rest.length === 2 && request.method === "GET") {
				return json({ content: readSnapshot(site.slug, path, id) });
			}

			if (rest.length === 3 && rest[2] === "restore" && request.method === "POST") {
				// writeSourceFile guarda a su vez la versión actual antes de escribir.
				writeSourceFile(site.slug, path, readSnapshot(site.slug, path, id));
				return json({ ok: true });
			}

			return json({ error: "Método no permitido" }, 405);
		} catch (error) {
			return errorResponse(error);
		}
	}

	if (rest[0] === "media") {
		try {
			if (rest.length === 1) {
				if (request.method === "GET") return json({ media: listMedia(site.slug) });

				if (request.method === "POST") {
					let form: FormData;
					try {
						form = await request.formData();
					} catch {
						return json({ error: "Se esperaba multipart/form-data" }, 400);
					}
					const file = form.get("file");
					const name = form.get("name");
					if (!(file instanceof File)) return json({ error: "Falta el archivo" }, 400);

					const bytes = new Uint8Array(await file.arrayBuffer());
					const saved = saveMedia(
						site.slug,
						typeof name === "string" && name.trim() ? name : file.name,
						bytes,
					);
					return json({ ok: true, ...saved });
				}

				return json({ error: "Método no permitido" }, 405);
			}

			const name = decodeURIComponent(rest[1]);

			if (request.method === "GET") {
				const file = Bun.file(mediaFile(site.slug, name));
				return new Response(file, { headers: { "cache-control": "no-store" } });
			}

			if (request.method === "DELETE") {
				deleteMedia(site.slug, name);
				return json({ ok: true });
			}

			return json({ error: "Método no permitido" }, 405);
		} catch (error) {
			return errorResponse(error);
		}
	}

	return json({ error: "Ruta no encontrada" }, 404);
}

async function api(request: Request, url: URL): Promise<Response> {
	const parts = url.pathname.split("/").filter(Boolean);
	// parts: ["api", "sites", slug, …]

	if (parts.length === 2) {
		if (request.method !== "GET") return json({ error: "Método no permitido" }, 405);
		return json({ sites: listSites() });
	}

	if (parts.length === 1) return json({ error: "Ruta no encontrada" }, 404);

	const slug = parts[2] ?? "";
	if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
		return json({ error: "Web no válida" }, 400);
	}

	return siteRoute(request, slug, parts.slice(3));
}

async function staticFile(pathname: string): Promise<Response> {
	const clean = pathname === "/" ? "index.html" : pathname.slice(1);
	if (clean.includes("..")) return new Response("No encontrado", { status: 404 });

	const file = Bun.file(new URL(clean, DIST));
	if (await file.exists()) {
		// Los assets de Vite llevan hash en el nombre: pueden cachearse para siempre.
		const immutable = clean.startsWith("assets/");
		return new Response(file, {
			headers: immutable ? { "cache-control": "public, max-age=31536000, immutable" } : {},
		});
	}

	const index = Bun.file(new URL("index.html", DIST));
	if (await index.exists()) {
		return new Response(index, {
			headers: { "cache-control": "no-store", "content-type": "text/html; charset=utf-8" },
		});
	}

	return new Response("El cliente no está compilado. Ejecuta `bun run build`.", {
		status: 503,
		headers: { "content-type": "text/plain; charset=utf-8" },
	});
}

/** Sirve el build de una web bajo /preview/<slug>/ con las rutas reescritas. */
async function previewPage(pathname: string): Promise<Response> {
	const parts = pathname.split("/").filter(Boolean);
	const slug = parts[1] ?? "";
	const rest = parts.slice(2).join("/");

	// Solo la raíz sin barra final; los assets (_astro/…) se sirven tal cual.
	if (parts.length === 2 && !pathname.endsWith("/")) {
		return new Response(null, { status: 302, headers: { location: `/preview/${slug}/` } });
	}

	const target = resolvePreview(slug, rest);

	// Una página de directorio sin barra final rompería las rutas relativas.
	if (
		target?.kind === "html" &&
		rest !== "" &&
		!rest.endsWith("/") &&
		!rest.endsWith(".html")
	) {
		return new Response(null, {
			status: 302,
			headers: { location: `/preview/${slug}/${rest}/` },
		});
	}

	if (!target) {
		return new Response(
			`<!doctype html><meta charset="utf-8"><title>Sin build</title><body style="font-family:system-ui;background:#0b1220;color:#e6edf7;padding:40px"><h1>No hay build de ${slug}</h1><p>Ejecuta <code>bun run build</code> en <code>apps/${slug}</code> y recarga.</p><p><a style="color:#38a3ff" href="/site/${slug}">Volver a la ficha</a></p></body>`,
			{ status: 404, headers: { "content-type": "text/html; charset=utf-8" } },
		);
	}

	if (target.kind === "html") {
		return new Response(rewriteHtml(readFileSync(target.file, "utf8"), slug), {
			headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
		});
	}

	if (target.kind === "css") {
		return new Response(rewriteCss(readFileSync(target.file, "utf8"), slug), {
			headers: { "content-type": "text/css; charset=utf-8", "cache-control": "no-store" },
		});
	}

	return new Response(Bun.file(target.file), { headers: { "cache-control": "no-store" } });
}

const server = Bun.serve({
	port: PORT,
	hostname: "127.0.0.1",
	async fetch(request) {
		const url = new URL(request.url);
		if (url.pathname.startsWith("/api/")) return api(request, url);
		if (request.method !== "GET" && request.method !== "HEAD") {
			return new Response("Método no permitido", { status: 405 });
		}
		if (url.pathname.startsWith("/preview/")) return previewPage(url.pathname);
		return staticFile(url.pathname);
	},
});

console.log(`API del CMS en http://127.0.0.1:${server.port}`);
