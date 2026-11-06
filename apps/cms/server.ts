/**
 * API del CMS y estáticos del cliente Solid.
 *
 * El cliente se compila con Vite a `dist/` y este servidor lo sirve junto a la
 * API. En desarrollo, Vite corre aparte (puerto 4401) y reenvía /api aquí.
 */
import {
	EDITABLE_FIELDS,
	type EditableField,
	getSite,
	listSites,
	updateSiteField,
} from "./lib/sites";

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
};

const json = (data: unknown, status = 200) =>
	Response.json(data, { status, headers: { "cache-control": "no-store" } });

async function api(request: Request, url: URL): Promise<Response> {
	if (url.pathname === "/api/sites") {
		if (request.method !== "GET") return json({ error: "Método no permitido" }, 405);
		return json({ sites: listSites() });
	}

	const match = url.pathname.match(/^\/api\/sites\/([a-z0-9-]+)$/);
	if (!match) return json({ error: "Ruta no encontrada" }, 404);

	const site = getSite(match[1]);
	if (!site) return json({ error: "No existe ninguna web con ese slug" }, 404);

	if (request.method === "GET") return json({ site });

	if (request.method === "PATCH") {
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

	return json({ error: "Método no permitido" }, 405);
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

const server = Bun.serve({
	port: PORT,
	hostname: "127.0.0.1",
	async fetch(request) {
		const url = new URL(request.url);
		if (url.pathname.startsWith("/api/")) return api(request, url);
		if (request.method !== "GET" && request.method !== "HEAD") {
			return new Response("Método no permitido", { status: 405 });
		}
		return staticFile(url.pathname);
	},
});

console.log(`API del CMS en http://127.0.0.1:${server.port}`);
