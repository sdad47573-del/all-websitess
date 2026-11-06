/**
 * Tienda de catálogo de cada web.
 *
 * El CMS guarda `src/data/tienda.json` y, cuando se publica, escribe
 * `src/pages/tienda.astro`: una página estática que monta `<LocalShop>` con esos
 * productos. No hay pagos ni pedidos en servidor; el carrito vive en el
 * navegador y el pedido se cierra por WhatsApp o teléfono.
 *
 * El JSON y la página se generan desde el panel, así que el formato es nuestro:
 * se escribe entero en cada guardado, con validación previa y copia en el
 * historial antes de pisar lo anterior.
 */
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { listMedia } from "./files";
import { snapshot } from "./history";
import { DEFAULT_APPS_DIR } from "./paths";

const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;
const PRODUCT_ID = /^[a-zA-Z0-9_-]{1,40}$/;
const IMAGE_NAME = /^[a-z0-9][a-z0-9._-]*\.(jpe?g|png|webp|avif|gif|svg)$/;
const CURRENCY = /^[A-Z]{3}$/;
const MAX_PRODUCTS = 80;
const MAX_PRICE = 100_000;

export interface ShopProduct {
	id: string;
	nombre: string;
	descripcion: string;
	precio: number;
	imagen: string;
	stock: number;
	visible: boolean;
}

export interface Shop {
	activa: boolean;
	titulo: string;
	moneda: string;
	recogida: string;
	nota: string;
	whatsapp: string;
	productos: ShopProduct[];
}

function appDirectory(slug: string, appsDir: string): string {
	if (!SLUG_PATTERN.test(slug)) throw new Error("Web no válida.");
	return join(appsDir, slug);
}

function jsonPath(slug: string, appsDir: string): string {
	return join(appDirectory(slug, appsDir), "src", "data", "tienda.json");
}

function pagePath(slug: string, appsDir: string): string {
	return join(appDirectory(slug, appsDir), "src", "pages", "tienda.astro");
}

function writeAtomic(file: string, content: string): void {
	mkdirSync(dirname(file), { recursive: true });
	const temporary = `${file}.cms-${process.pid}.tmp`;
	try {
		writeFileSync(temporary, content, "utf8");
		renameSync(temporary, file);
	} catch (error) {
		try {
			rmSync(temporary, { force: true });
		} catch {}
		throw new Error(`No se ha podido escribir: ${String(error)}`);
	}
}

function text(value: unknown, field: string, max: number, fallback = ""): string {
	if (value === undefined || value === null) return fallback;
	if (typeof value !== "string") throw new Error(`${field} debe ser texto.`);
	const trimmed = value.trim();
	if (trimmed.length > max) throw new Error(`${field} no puede pasar de ${max} caracteres.`);
	return trimmed;
}

function price(value: unknown): number {
	const number = typeof value === "number" ? value : Number(value);
	if (!Number.isFinite(number)) throw new Error("El precio debe ser un número.");
	if (number < 0) throw new Error("El precio no puede ser negativo.");
	if (number > MAX_PRICE) throw new Error("El precio es demasiado alto.");
	return Math.round(number * 100) / 100;
}

function stock(value: unknown): number {
	const number = typeof value === "number" ? value : Number(value);
	if (!Number.isInteger(number) || number < 0) {
		throw new Error("El stock debe ser un número entero igual o mayor que cero.");
	}
	if (number > 99_999) throw new Error("El stock es demasiado alto.");
	return number;
}

function validateShop(input: unknown, slug: string, appsDir: string): Shop {
	if (!input || typeof input !== "object") throw new Error("La tienda debe ser un objeto.");
	const raw = input as Record<string, unknown>;

	const productosRaw = raw.productos;
	if (productosRaw !== undefined && !Array.isArray(productosRaw)) {
		throw new Error("productos debe ser una lista.");
	}
	const productosInput = (productosRaw ?? []) as unknown[];
	if (productosInput.length > MAX_PRODUCTS) {
		throw new Error(`La tienda no puede pasar de ${MAX_PRODUCTS} productos.`);
	}

	const names = (() => {
		const images = productosInput
			.map((item) =>
				item && typeof item === "object"
					? (item as Record<string, unknown>).imagen
					: undefined,
			)
			.filter((value): value is string => typeof value === "string" && value.trim() !== "");
		if (images.length === 0) return new Set<string>();
		return new Set(listMedia(slug, appsDir).map((item) => item.name));
	})();

	const ids = new Set<string>();
	const productos: ShopProduct[] = productosInput.map((item, index) => {
		const position = index + 1;
		if (!item || typeof item !== "object") throw new Error(`El producto ${position} no es válido.`);
		const product = item as Record<string, unknown>;

		const id = text(product.id, `El id del producto ${position}`, 40);
		if (!PRODUCT_ID.test(id)) {
			throw new Error(`El id del producto ${position} solo admite letras, números, guion y guion bajo.`);
		}
		if (ids.has(id)) throw new Error(`Hay dos productos con el id «${id}».`);
		ids.add(id);

		const nombre = text(product.nombre, `El nombre del producto ${position}`, 80);
		if (!nombre) throw new Error(`El producto ${position} necesita nombre.`);

		const descripcion = text(product.descripcion, `La descripción del producto ${position}`, 300);
		const imagen = text(product.imagen, `La imagen del producto ${position}`, 120);
		if (imagen) {
			if (!IMAGE_NAME.test(imagen)) {
				throw new Error(`La imagen «${imagen}» no tiene un nombre de imagen válido.`);
			}
			if (names.size > 0 && !names.has(imagen)) {
				throw new Error(`La imagen «${imagen}» no está en src/assets/fotos.`);
			}
		}

		return {
			id,
			nombre,
			descripcion,
			precio: price(product.precio),
			imagen,
			stock: stock(product.stock),
			visible: product.visible !== false,
		};
	});

	const whatsapp = text(raw.whatsapp, "El WhatsApp", 25).replace(/\D/g, "");
	const moneda = (text(raw.moneda, "La moneda", 3, "EUR") || "EUR").toUpperCase();
	if (!CURRENCY.test(moneda)) throw new Error("La moneda debe ser un código de tres letras (EUR, USD…).");

	return {
		activa: raw.activa !== false,
		titulo: text(raw.titulo, "El título", 80, "Tienda") || "Tienda",
		moneda,
		recogida: text(raw.recogida, "La recogida", 140),
		nota: text(raw.nota, "La nota", 300),
		whatsapp,
		productos,
	};
}

export function readShop(slug: string, appsDir = DEFAULT_APPS_DIR): Shop | null {
	const file = jsonPath(slug, appsDir);
	if (!existsSync(file)) return null;

	let parsed: unknown;
	try {
		parsed = JSON.parse(readFileSync(file, "utf8"));
	} catch {
		throw new Error("src/data/tienda.json no es JSON válido.");
	}
	if (!parsed || typeof parsed !== "object") throw new Error("src/data/tienda.json no contiene una tienda.");
	return parsed as Shop;
}

export function saveShop(slug: string, input: unknown, appsDir = DEFAULT_APPS_DIR): Shop {
	const shop = validateShop(input, slug, appsDir);
	const file = jsonPath(slug, appsDir);

	if (existsSync(file)) {
		snapshot(slug, "data/tienda.json", readFileSync(file, "utf8"), appsDir);
	}

	writeAtomic(file, `${JSON.stringify(shop, null, "\t")}\n`);
	return shop;
}

export function shopPageExists(slug: string, appsDir = DEFAULT_APPS_DIR): boolean {
	return existsSync(pagePath(slug, appsDir));
}

/** Escribe /tienda con los productos visibles. La web tiene que compilarse después. */
export function publishShop(
	slug: string,
	appsDir = DEFAULT_APPS_DIR,
): { path: string } {
	const shop = readShop(slug, appsDir);
	if (!shop) throw new Error("Guarda la tienda antes de publicar.");
	if (!shop.activa) throw new Error("La tienda está desactivada: actívala antes de publicar.");
	if (!shop.productos.some((product) => product.visible)) {
		throw new Error("Añade al menos un producto visible antes de publicar.");
	}

	const file = pagePath(slug, appsDir);
	if (existsSync(file)) {
		snapshot(slug, "pages/tienda.astro", readFileSync(file, "utf8"), appsDir);
	}

	writeAtomic(file, shopPage());
	return { path: "src/pages/tienda.astro" };
}

export function unpublishShop(slug: string, appsDir = DEFAULT_APPS_DIR): { removed: boolean } {
	const file = pagePath(slug, appsDir);
	if (!existsSync(file)) return { removed: false };
	rmSync(file, { force: true });
	return { removed: true };
}

/**
 * Página generada. No lleva `${…}` a propósito: el texto se ensambla con
 * concatenación para poder mantener esta plantilla como un literal limpio.
 */
function shopPage(): string {
	return `---
import { BUSINESS } from '../data/site';
import tienda from '../data/tienda.json';
import { LocalShop } from '@astro-components';

const fotos = import.meta.glob('../assets/fotos/*.{jpg,jpeg,png,webp,avif,gif,svg}', {
	eager: true,
	import: 'default',
});

// En Astro el default de una imagen es ImageMetadata ({ src, width… }), no una
// URL: se aceptan las dos formas para no depender de cómo la resuelva el build.
const url = (nombre: string) => {
	const value = fotos['../assets/fotos/' + nombre] as string | { src?: string } | undefined;
	return typeof value === 'string' ? value : (value?.src ?? '');
};

const productos = tienda.productos
	.filter((producto) => producto.visible)
	.map((producto) => ({
		...producto,
		imagen: producto.imagen ? url(producto.imagen) : '',
	}));

const title = tienda.titulo + ' · ' + BUSINESS.name;
const description = 'Catálogo y encargos de ' + BUSINESS.name + '.';
const canonical = BUSINESS.siteUrl + '/tienda/';
const pedido = (tienda.whatsapp || BUSINESS.phoneHref || BUSINESS.phone || '').replace(/[^\\d]/g, '');

const schema = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	name: title,
	itemListElement: productos.map((producto, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		item: {
			'@type': 'Product',
			name: producto.nombre,
			description: producto.descripcion || undefined,
			offers: {
				'@type': 'Offer',
				price: producto.precio,
				priceCurrency: tienda.moneda,
				availability:
					producto.stock > 0
						? 'https://schema.org/InStock'
						: 'https://schema.org/OutOfStock',
			},
		},
	})),
};
---
<!doctype html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>{title}</title>
		<meta name="description" content={description} />
		<link rel="canonical" href={canonical} />
		<meta name="robots" content="index, follow" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:url" content={canonical} />
		<meta property="og:image" content={BUSINESS.siteUrl + '/og.jpg'} />
		<meta name="twitter:card" content="summary_large_image" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<script type="application/ld+json" set:html={JSON.stringify(schema)} />
	</head>
	<body>
		<LocalShop
			name={BUSINESS.name}
			title={tienda.titulo}
			backHref="/"
			currency={tienda.moneda}
			pickup={tienda.recogida}
			note={tienda.nota}
			phone={pedido}
			products={productos}
		/>
	</body>
</html>
`;
}
