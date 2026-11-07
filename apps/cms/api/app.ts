/**
 * API del CMS con Hono.
 *
 * Expone el contenido que antes se leía de `apps/**` usando SQLite. El cliente
 * puede seguir hablando de webs y piezas, pero ya no depende de Git para
 * listar, leer o guardar. La importación inicial desde las apps es explícita:
 * `bun run api:seed`.
 */
import type { Database } from "bun:sqlite";
import { json as readJson } from "@app-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import type { CatalogEntry } from "../lib/catalog";
import type { LibraryEntry, LibraryPiece } from "../lib/library";
import { SITE_SLUG, siteAllowed } from "../lib/scope";
import {
	SECTION_TYPES,
	type Seccion,
	type Secciones,
	type SectionType,
} from "../lib/sections";
import {
	EDITABLE_FIELDS,
	validateValue,
	type EditableField,
	type Site,
} from "../lib/sites";

const ID_PATTERN = /^[a-z0-9][a-z0-9-]{0,39}$/;
const MAX_SECTIONS = 20;

interface PayloadRow {
	payload: string;
}

interface SectionsRow extends PayloadRow {
	uses_pieces: number;
}

export interface CmsApiOptions {
	/** Si se define, todas las rutas menos `/api/health` exigen este token. */
	token?: string;
	/** Origen permitido para el cliente Vite. */
	devOrigin?: string;
}

function payload<T>(row: PayloadRow | null, fallback: T): T {
	return row ? readJson<T>(row.payload, fallback) : fallback;
}

function readSite(db: Database, slug: string): Site | null {
	const row = db.query("SELECT payload FROM sites WHERE slug = ?").get(slug) as PayloadRow | null;
	return payload<Site | null>(row, null);
}

function writeSite(db: Database, slug: string, site: Site): void {
	db.query("UPDATE sites SET payload = ?, updated_at = ? WHERE slug = ?").run(
		JSON.stringify(site),
		Date.now(),
		slug,
	);
}

function sectionRecord(db: Database, slug: string): SectionsRow | null {
	return db
		.query("SELECT payload, uses_pieces FROM sections WHERE site_slug = ?")
		.get(slug) as SectionsRow | null;
}

function saveSectionRecord(
	db: Database,
	slug: string,
	data: Secciones,
	usesPieces: boolean,
): void {
	db.query(
		`INSERT INTO sections (site_slug, payload, uses_pieces, updated_at)
		 VALUES (?, ?, ?, ?)
		 ON CONFLICT(site_slug) DO UPDATE SET
		   payload = excluded.payload,
		   uses_pieces = excluded.uses_pieces,
		   updated_at = excluded.updated_at`,
	).run(slug, JSON.stringify(data), usesPieces ? 1 : 0, Date.now());
}

/** Validación mínima de la lista: no toca imágenes ni campos del tipo. */
function normalizeSections(input: unknown): Seccion[] {
	if (!Array.isArray(input) || input.length === 0) {
		throw new Error("La lista de secciones no puede estar vacía.");
	}
	if (input.length > MAX_SECTIONS) {
		throw new Error(`Como máximo se guardan ${MAX_SECTIONS} secciones por web.`);
	}

	const ids = new Set<string>();
	return input.map((item, index) => {
		if (!item || typeof item !== "object") {
			throw new Error(`La sección ${index + 1} no es un objeto.`);
		}
		const raw = item as Record<string, unknown>;
		if (typeof raw.id !== "string" || !ID_PATTERN.test(raw.id)) {
			throw new Error(`La sección ${index + 1} tiene un id no válido.`);
		}
		if (ids.has(raw.id)) throw new Error(`El id «${raw.id}» está repetido.`);
		if (typeof raw.tipo !== "string" || !(SECTION_TYPES as readonly string[]).includes(raw.tipo)) {
			throw new Error(`La sección ${raw.id} tiene un tipo no válido.`);
		}
		if (typeof raw.titulo !== "string" || !raw.titulo.trim()) {
			throw new Error(`La sección ${raw.id} necesita un título.`);
		}
		ids.add(raw.id);
		return {
			...raw,
			id: raw.id,
			tipo: raw.tipo as SectionType,
			visible: raw.visible !== false,
			titulo: raw.titulo.trim(),
		} as Seccion;
	});
}

function nextCopyId(original: string, used: Set<string>): string {
	let index = 1;
	let id = `${original}-copia`.slice(0, 40);
	while (used.has(id)) id = `${original}-copia-${++index}`.slice(0, 40);
	used.add(id);
	return id;
}

export function createCmsApi(db: Database, options: CmsApiOptions = {}) {
	const app = new Hono();
	const token = options.token ?? process.env.CMS_API_TOKEN?.trim();

	app.use(
		"/api/*",
		cors({
			origin: options.devOrigin ?? process.env.CMS_API_DEV_ORIGIN ?? "http://127.0.0.1:4401",
			credentials: true,
			allowHeaders: ["Content-Type", "Authorization", "X-API-Key"],
			allowMethods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
		}),
	);

	app.use("/api/*", async (c, next) => {
		if (c.req.path === "/api/health" || !token) return next();
		const authorization = c.req.header("authorization") ?? "";
		const apiKey = c.req.header("x-api-key") ?? "";
		if (authorization === `Bearer ${token}` || apiKey === token) return next();
		return c.json({ error: "No autorizado." }, 401);
	});

	app.get("/api/health", (c) => c.json({ ok: true }));
	app.get("/api/config", (c) =>
		c.json({ singleSite: Boolean(SITE_SLUG), siteSlug: SITE_SLUG }),
	);

	app.get("/api/sites", (c) => {
		const rows = db.query("SELECT payload FROM sites ORDER BY slug").all() as PayloadRow[];
		const sites = rows
			.map((row) => payload<Site | null>(row, null))
			.filter((site): site is Site => Boolean(site) && siteAllowed(site.slug));
		return c.json({ sites });
	});

	app.get("/api/sites/:slug", (c) => {
		const slug = c.req.param("slug");
		if (!siteAllowed(slug)) return c.json({ error: "No existe ninguna web con ese slug." }, 404);
		const site = readSite(db, slug);
		return site
			? c.json({ site })
			: c.json({ error: "No existe ninguna web con ese slug." }, 404);
	});

	app.patch("/api/sites/:slug", async (c) => {
		const slug = c.req.param("slug");
		if (!siteAllowed(slug)) return c.json({ error: "No existe ninguna web con ese slug." }, 404);
		const site = readSite(db, slug);
		if (!site) return c.json({ error: "No existe ninguna web con ese slug." }, 404);

		const body = (await c.req.json().catch(() => null)) as {
			fields?: Record<string, unknown>;
		} | null;
		if (!body?.fields || typeof body.fields !== "object") {
			return c.json({ error: "Falta el objeto fields." }, 400);
		}

		const next = { ...site };
		const errors: string[] = [];
		for (const field of EDITABLE_FIELDS) {
			const raw = body.fields[field];
			if (typeof raw !== "string") continue;
			if (site.editable && !site.editable[field as EditableField]) {
				errors.push(`${field}: este campo no es editable en esta web.`);
				continue;
			}
			const invalid = validateValue(field, raw);
			if (invalid) {
				errors.push(`${field}: ${invalid}`);
				continue;
			}
			next[field] = raw.trim();
		}

		if (errors.length > 0) return c.json({ ok: false, errors }, 400);
		writeSite(db, slug, next);
		return c.json({ ok: true, errors: [], site: next });
	});

	app.get("/api/sites/:slug/secciones", (c) => {
		const slug = c.req.param("slug");
		if (!siteAllowed(slug)) return c.json({ error: "No existe ninguna web con ese slug." }, 404);
		const row = sectionRecord(db, slug);
		const secciones = payload<Secciones | null>(row, null);
		return c.json({
			secciones: secciones
				? { ...secciones, usesPieces: Boolean(row?.uses_pieces) }
				: null,
		});
	});

	app.put("/api/sites/:slug/secciones", async (c) => {
		const slug = c.req.param("slug");
		if (!siteAllowed(slug)) return c.json({ error: "No existe ninguna web con ese slug." }, 404);
		if (!readSite(db, slug)) {
			return c.json({ error: "No existe ninguna web con ese slug." }, 404);
		}

		const body = (await c.req.json().catch(() => null)) as { secciones?: unknown } | null;
		if (!body || body.secciones === undefined) {
			return c.json({ error: "Falta la lista de secciones." }, 400);
		}

		let list: Seccion[];
		try {
			list = normalizeSections(body.secciones);
		} catch (error) {
			return c.json({ error: error instanceof Error ? error.message : String(error) }, 400);
		}

		const data: Secciones = { version: 1, secciones: list };
		const previous = sectionRecord(db, slug);
		saveSectionRecord(db, slug, data, Boolean(previous?.uses_pieces));
		return c.json({ ok: true, secciones: data });
	});

	app.post("/api/sites/:slug/secciones/importar", async (c) => {
		const slug = c.req.param("slug");
		if (!siteAllowed(slug)) return c.json({ error: "No existe ninguna web con ese slug." }, 404);
		if (!readSite(db, slug)) {
			return c.json({ error: "No existe ninguna web con ese slug." }, 404);
		}

		const body = (await c.req.json().catch(() => null)) as { clave?: unknown } | null;
		if (typeof body?.clave !== "string" || !body.clave.trim()) {
			return c.json({ error: "Falta la pieza que quieres copiar." }, 400);
		}

		const row = db
			.query("SELECT payload FROM library WHERE clave = ?")
			.get(body.clave) as PayloadRow | null;
		const entry = payload<LibraryEntry | null>(row, null);
		if (!entry?.seccion) return c.json({ error: "No existe esa pieza en la biblioteca." }, 404);

		const current = payload<Secciones | null>(sectionRecord(db, slug), null)?.secciones ?? [];
		const used = new Set(current.map((section) => section.id));
		const id = nextCopyId(entry.seccion.id, used);
		const list = normalizeSections([...current, { ...entry.seccion, id }]);
		const data: Secciones = { version: 1, secciones: list };
		const previous = sectionRecord(db, slug);
		saveSectionRecord(db, slug, data, Boolean(previous?.uses_pieces));
		return c.json({ ok: true, secciones: data, id });
	});

	app.get("/api/sections/library", (c) => {
		const rows = db.query("SELECT payload FROM library ORDER BY clave").all() as PayloadRow[];
		const piezas: LibraryPiece[] = [];
		for (const row of rows) {
			const entry = payload<LibraryEntry | null>(row, null);
			if (!entry) continue;
			const { seccion: _seccion, ...piece } = entry;
			piezas.push(piece);
		}
		return c.json({ piezas });
	});

	app.get("/api/sections/catalog", (c) => {
		const row = db.query("SELECT payload FROM catalog WHERE id = 1").get() as PayloadRow | null;
		return c.json({ catalogo: payload<CatalogEntry[]>(row, []) });
	});

	app.notFound((c) => c.json({ error: "Ruta no encontrada." }, 404));
	app.onError((error, c) => {
		console.error("[cms-api] error no controlado", error);
		return c.json({ error: "Error interno de la API." }, 500);
	});

	return app;
}
