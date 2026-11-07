import { Database } from "bun:sqlite";
import { afterAll, describe, expect, test } from "bun:test";
import { migrate } from "@app-server";
import { createCmsApi } from "./app";
import { schema } from "./db";

const db = new Database(":memory:");
migrate(db, schema);

const app = createCmsApi(db, { token: "secreto" });
const auth = { authorization: "Bearer secreto" };
const now = Date.now();

const site = {
	slug: "bar-pepe",
	name: "Bar Pepe",
	tagline: "De siempre",
	city: "Sevilla",
	street: "Calle Mayor, 1",
	postalCode: "41001",
	phone: "954 00 00 00",
	siteUrl: "https://barpepe.example",
	lat: "37.3891",
	lng: "-5.9845",
	category: "Bar",
	summary: "Un bar de barrio.",
	legalPending: false,
	photoCount: 2,
	hasLegalPage: true,
	updatedAt: now,
	editable: {
		name: true,
		tagline: true,
		phone: true,
		street: true,
		postalCode: true,
		city: true,
		siteUrl: true,
		lat: true,
		lng: true,
	},
	hasSections: true,
};

const hero = {
	id: "portada",
	tipo: "hero",
	visible: true,
	titulo: "Bar Pepe",
	texto: "Una barra.",
	imagen: "fachada.jpg",
	imagenAlt: "La fachada",
};

const about = {
	id: "casa",
	tipo: "about",
	visible: true,
	titulo: "La casa",
	parrafos: ["Un párrafo."],
};

db.query("INSERT INTO sites (slug, payload, updated_at) VALUES (?, ?, ?)").run(
	"bar-pepe",
	JSON.stringify(site),
	now,
);
db.query(
	"INSERT INTO sections (site_slug, payload, uses_pieces, updated_at) VALUES (?, ?, ?, ?)",
).run(
	"bar-pepe",
	JSON.stringify({ version: 1, secciones: [hero] }),
	1,
	now,
);
db.query("INSERT INTO library (clave, payload, updated_at) VALUES (?, ?, ?)").run(
	"origen:casa",
	JSON.stringify({
		clave: "origen:casa",
		tipo: "about",
		titulo: "La casa",
		web: "Origen",
		slug: "origen",
		id: "casa",
		resumen: "Un párrafo.",
		seccion: about,
	}),
	now,
);
db.query("INSERT INTO catalog (id, payload, updated_at) VALUES (1, ?, ?)").run(
	JSON.stringify([
		{
			tipo: "hero",
			label: "Portada",
			descripcion: "Foto y titular",
			usos: 1,
			ejemplos: [{ web: "Bar Pepe", slug: "bar-pepe", titulo: "Bar Pepe" }],
		},
	]),
	now,
);

afterAll(() => db.close());

describe("API Hono del CMS", () => {
	test("responde al health sin token", async () => {
		const response = await app.request("/api/health");
		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({ ok: true });
	});

	test("protege las rutas de contenido", async () => {
		expect((await app.request("/api/sites")).status).toBe(401);
		const response = await app.request("/api/sites", { headers: auth });
		expect(response.status).toBe(200);
		const body = (await response.json()) as { sites: typeof site[] };
		expect(body.sites.map((item) => item.slug)).toEqual(["bar-pepe"]);
	});

	test("devuelve la ficha y las secciones desde SQLite", async () => {
		const detail = await app.request("/api/sites/bar-pepe", { headers: auth });
		expect(detail.status).toBe(200);

		const response = await app.request("/api/sites/bar-pepe/secciones", { headers: auth });
		const body = (await response.json()) as {
			secciones: { secciones: typeof hero[]; usesPieces: boolean };
		};
		expect(body.secciones.secciones[0].titulo).toBe("Bar Pepe");
		expect(body.secciones.usesPieces).toBe(true);
	});

	test("guarda piezas y rechaza listas inválidas", async () => {
		const invalid = await app.request("/api/sites/bar-pepe/secciones", {
			method: "PUT",
			headers: { ...auth, "content-type": "application/json" },
			body: JSON.stringify({ secciones: [{ id: "../x", tipo: "hero", titulo: "" }] }),
		});
		expect(invalid.status).toBe(400);

		const response = await app.request("/api/sites/bar-pepe/secciones", {
			method: "PUT",
			headers: { ...auth, "content-type": "application/json" },
			body: JSON.stringify({ secciones: [hero, about] }),
		});
		expect(response.status).toBe(200);
		const body = (await response.json()) as { secciones: { secciones: typeof hero[] } };
		expect(body.secciones.secciones).toHaveLength(2);
	});

	test("importa una pieza de la biblioteca con un id nuevo", async () => {
		const response = await app.request("/api/sites/bar-pepe/secciones/importar", {
			method: "POST",
			headers: { ...auth, "content-type": "application/json" },
			body: JSON.stringify({ clave: "origen:casa" }),
		});
		expect(response.status).toBe(200);
		const body = (await response.json()) as { id: string; secciones: { secciones: typeof hero[] } };
		expect(body.id).toBe("casa-copia");
		expect(body.secciones.secciones.some((section) => section.id === body.id)).toBe(true);
	});

	test("publica la biblioteca sin el contenido completo y el catálogo", async () => {
		const library = await app.request("/api/sections/library", { headers: auth });
		const libraryBody = (await library.json()) as {
			piezas: Array<Record<string, unknown>>;
		};
		expect(libraryBody.piezas[0]?.clave).toBe("origen:casa");
		expect(libraryBody.piezas[0]?.seccion).toBeUndefined();

		const full = await app.request("/api/sections/library/origen%3Acasa", { headers: auth });
		expect(full.status).toBe(200);
		const fullBody = (await full.json()) as { pieza: { seccion: { tipo: string } } };
		expect(fullBody.pieza.seccion.tipo).toBe("about");

		const catalog = await app.request("/api/sections/catalog", { headers: auth });
		const catalogBody = (await catalog.json()) as { catalogo: Array<{ usos: number }> };
		expect(catalogBody.catalogo[0]?.usos).toBe(1);
	});

	test("actualiza solo los campos editables de la ficha", async () => {
		const response = await app.request("/api/sites/bar-pepe", {
			method: "PATCH",
			headers: { ...auth, "content-type": "application/json" },
			body: JSON.stringify({ fields: { name: "Bar Pepe Nuevo" } }),
		});
		expect(response.status).toBe(200);
		const body = (await response.json()) as { site: { name: string } };
		expect(body.site.name).toBe("Bar Pepe Nuevo");
	});
});
