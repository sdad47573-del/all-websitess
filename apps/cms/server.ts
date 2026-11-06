/**
 * API del CMS y estáticos del cliente Solid.
 *
 * El cliente se compila con Vite a `dist/` y este servidor lo sirve junto a la
 * API. En desarrollo, Vite corre aparte (puerto 4401) y reenvía /api aquí.
 *
 * Endpoints:
 *   GET    /api/sites                        listado completo
 *   GET    /api/sites/:slug                  ficha
 *   POST   /api/sites/:slug/og               genera public/og.jpg de la web
 *   GET    /api/sites/:slug/og               miniatura OG
 *   GET    /api/sites/:slug/seo              auditoría SEO del HTML construido
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
import {
	type Capability,
	type Role,
	type StoredUser,
	authenticate,
	can,
	clearedSessionCookie,
	createUser,
	deleteUser,
	ensureAdmin,
	listUsers,
	sessionCookie,
	signSession,
	toPublicUser,
	updateUser,
	userFromRequest,
} from "./lib/auth";
import { hasBuild, ogImage, resolvePreview, rewriteCss, rewriteHtml } from "./lib/preview";
import { generateOgImage } from "./lib/og";
import { auditSeo } from "./lib/seo";
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

const json = (data: unknown, status = 200, headers: Record<string, string> = {}) =>
	Response.json(data, { status, headers: { "cache-control": "no-store", ...headers } });

const errorResponse = (error: unknown, status = 400) =>
	json({ error: error instanceof Error ? error.message : String(error) }, status);

const unauthorized = () => json({ error: "Inicia sesión para continuar." }, 401);
const forbidden = () => json({ error: "Tu rol no permite esta acción." }, 403);
const deny = (role: Role, capability: Capability) => (can(role, capability) ? null : forbidden());

/**
 * El servidor solo escucha en loopback, pero cualquier web abierta en el
 * navegador puede lanzar un POST a 127.0.0.1. Con cookie SameSite=Strict el
 * navegador ya no la envía, y este filtro cierra el resto.
 */
const sameLocalOrigin = (request: Request): boolean => {
	const origin = request.headers.get("origin");
	if (!origin) return true;
	try {
		const { hostname } = new URL(origin);
		return (
			hostname === "127.0.0.1" ||
			hostname === "localhost" ||
			hostname === "[::1]" ||
			hostname === "::1"
		);
	} catch {
		return false;
	}
};

// 5 fallos en 10 minutos bloquean ese usuario un rato: frena las pruebas de
// contraseña sin dejar fuera a quien simplemente se equivoca una vez.
const LOGIN_MAX_FAILURES = 5;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;
const loginFailures = new Map<string, { count: number; until: number }>();

async function siteRoute(
	request: Request,
	slug: string,
	rest: string[],
	role: Role,
): Promise<Response> {
	const site = getSite(slug);

	if (rest.length === 0) {
		if (!site) return json({ error: "No existe ninguna web con ese slug" }, 404);
		if (request.method === "GET") {
			return json({
				site: { ...site, hasBuild: hasBuild(site.slug), hasOg: ogImage(site.slug) !== null },
			});
		}
		if (request.method !== "PATCH") return json({ error: "Método no permitido" }, 405);

		const denied = deny(role, "editContent");
		if (denied) return denied;

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
				const denied = deny(role, "editCode");
				if (denied) return denied;

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
		if (request.method === "POST") {
			const denied = deny(role, "editContent");
			if (denied) return denied;

			try {
				const generated = await generateOgImage(site.slug);
				return json({ ok: true, ...generated });
			} catch (error) {
				return errorResponse(error, 500);
			}
		}

		if (request.method !== "GET") return json({ error: "Método no permitido" }, 405);
		const image = ogImage(site.slug);
		if (!image) return json({ error: "Esta web no tiene imagen OG" }, 404);
		return new Response(Bun.file(image), {
			// Se regenera desde el panel: sin caché, el navegador enseñaría la anterior.
			headers: { "cache-control": "no-store" },
		});
	}

	if (rest[0] === "seo") {
		if (request.method !== "GET") return json({ error: "Método no permitido" }, 405);
		const audit = auditSeo(site.slug);
		if (!audit) return json({ error: "No se ha podido auditar la web" }, 404);
		return json({ seo: audit });
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
				const denied = deny(role, "editCode");
				if (denied) return denied;

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
					const denied = deny(role, "editContent");
					if (denied) return denied;

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
				const denied = deny(role, "editContent");
				if (denied) return denied;

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

async function authRoute(request: Request, url: URL): Promise<Response> {
	const action = url.pathname.split("/").filter(Boolean)[2] ?? "";

	if (action === "me") {
		if (request.method !== "GET") return json({ error: "Método no permitido" }, 405);
		const user = userFromRequest(request);
		if (!user) return unauthorized();
		return json({ user: toPublicUser(user) });
	}

	if (action === "login") {
		if (request.method !== "POST") return json({ error: "Método no permitido" }, 405);

		let payload: { username?: unknown; password?: unknown };
		try {
			payload = (await request.json()) as { username?: unknown; password?: unknown };
		} catch {
			return json({ error: "El cuerpo debe ser JSON" }, 400);
		}

		const username =
			typeof payload.username === "string" ? payload.username.trim().toLowerCase() : "";
		const password = typeof payload.password === "string" ? payload.password : "";
		if (!username || !password) return json({ error: "Faltan usuario y contraseña." }, 400);

		const now = Date.now();
		const attempt = loginFailures.get(username);
		if (attempt && attempt.until > now) {
			const seconds = Math.ceil((attempt.until - now) / 1000);
			return json({ error: `Demasiados intentos. Prueba de nuevo en ${seconds} s.` }, 429);
		}

		const user = await authenticate(username, password);
		if (!user) {
			const previous = attempt && attempt.until > 0 && attempt.until <= now ? 0 : (attempt?.count ?? 0);
			const count = previous + 1;
			loginFailures.set(username, {
				count,
				until: count >= LOGIN_MAX_FAILURES ? now + LOGIN_WINDOW_MS : 0,
			});
			return json({ error: "Usuario o contraseña incorrectos." }, 401);
		}

		loginFailures.delete(username);
		return json(
			{ user: toPublicUser(user) },
			200,
			{ "set-cookie": sessionCookie(signSession(user)) },
		);
	}

	if (action === "logout") {
		if (request.method !== "POST") return json({ error: "Método no permitido" }, 405);
		return json({ ok: true }, 200, { "set-cookie": clearedSessionCookie() });
	}

	return json({ error: "Ruta no encontrada" }, 404);
}

async function usersRoute(
	request: Request,
	url: URL,
	user: StoredUser,
): Promise<Response> {
	if (!can(user.role, "manageUsers")) return forbidden();

	const id = url.pathname.split("/").filter(Boolean)[2];

	if (!id) {
		if (request.method === "GET") return json({ users: listUsers(), currentId: user.id });
		if (request.method !== "POST") return json({ error: "Método no permitido" }, 405);

		let payload: { username?: unknown; name?: unknown; password?: unknown; role?: unknown };
		try {
			payload = (await request.json()) as typeof payload;
		} catch {
			return json({ error: "El cuerpo debe ser JSON" }, 400);
		}

		try {
			const created = await createUser({
				username: String(payload.username ?? ""),
				name: typeof payload.name === "string" ? payload.name : undefined,
				password: String(payload.password ?? ""),
				role: payload.role as Role,
			});
			return json({ user: created }, 201);
		} catch (error) {
			return errorResponse(error);
		}
	}

	if (request.method === "PATCH") {
		let payload: { name?: unknown; role?: unknown; password?: unknown };
		try {
			payload = (await request.json()) as typeof payload;
		} catch {
			return json({ error: "El cuerpo debe ser JSON" }, 400);
		}

		try {
			const updated = await updateUser(id, {
				name: typeof payload.name === "string" ? payload.name : undefined,
				role: typeof payload.role === "string" ? (payload.role as Role) : undefined,
				password: typeof payload.password === "string" ? payload.password : undefined,
			});
			return json({ user: updated });
		} catch (error) {
			return errorResponse(error);
		}
	}

	if (request.method === "DELETE") {
		if (id === user.id) return json({ error: "No puedes borrar tu propio usuario." }, 400);
		try {
			deleteUser(id);
			return json({ ok: true });
		} catch (error) {
			return errorResponse(error);
		}
	}

	return json({ error: "Método no permitido" }, 405);
}

async function api(request: Request, url: URL): Promise<Response> {
	const parts = url.pathname.split("/").filter(Boolean);
	// parts: ["api", "auth" | "users" | "sites", …]

	if (request.method !== "GET" && request.method !== "HEAD" && !sameLocalOrigin(request)) {
		return json({ error: "Origen no permitido." }, 403);
	}

	if (parts[1] === "auth") return authRoute(request, url);

	const user = userFromRequest(request);
	if (!user) return unauthorized();

	if (parts[1] === "users") return usersRoute(request, url, user);

	if (parts.length === 2) {
		if (request.method !== "GET") return json({ error: "Método no permitido" }, 405);
		return json({ sites: listSites() });
	}

	if (parts.length === 1) return json({ error: "Ruta no encontrada" }, 404);

	const slug = parts[2] ?? "";
	if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
		return json({ error: "Web no válida" }, 400);
	}

	return siteRoute(request, slug, parts.slice(3), user.role);
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

const admin = await ensureAdmin(undefined, {
	username: process.env.CMS_ADMIN_USER,
	password: process.env.CMS_ADMIN_PASSWORD,
});
if (admin.created) {
	console.log(`\nUsuario «${admin.user?.username}» creado.`);
	console.log(`Contraseña: ${admin.password}`);
	console.log("Se muestra solo esta vez. Guárdala y crea el resto en /usuarios.\n");
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
		if (url.pathname.startsWith("/preview/")) {
			if (!userFromRequest(request)) {
				return new Response("Inicia sesión para ver la vista previa.", {
					status: 401,
					headers: { "content-type": "text/plain; charset=utf-8" },
				});
			}
			return previewPage(url.pathname);
		}
		return staticFile(url.pathname);
	},
});

console.log(`API del CMS en http://127.0.0.1:${server.port}`);
