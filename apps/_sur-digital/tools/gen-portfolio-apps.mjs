// Genera el listado auxiliar de landings migradas (src/data/portfolio-apps.ts).
// No se mezcla con PORTFOLIO: /clientes/ enseña solo los clientes con captura
// propia, para que la página sea una muestra y no un listado de mil fichas.
//
// Cada landing guarda sus datos en uno de estos sitios:
//   - data/site.ts        (BUSINESS: name, tagline, city, summary…)
//   - data/secciones.json (landing por secciones; el nombre va en el título)
//   - pages/index.astro   (datos en línea: `const name = '…'`, `const title = …`)
// Este script recorre las tres formas, se queda con lo que encuentra y escribe
// src/data/portfolio-apps.ts. Es idempotente: se puede volver a ejecutar.
//
// Los clientes que ya están curados a mano en data/portfolio.ts (los de
// proxy-origins.ts, con captura propia) se omiten para no duplicar la tarjeta.
//
// Uso (desde apps/_sur-digital):
//   bun tools/gen-portfolio-apps.mjs
//   bun tools/gen-portfolio-apps.mjs --muestra   (no escribe, enseña 15 entradas)

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const RAIZ = process.cwd();
const APPS = join(RAIZ, 'src', 'apps');
const SALIDA = join(RAIZ, 'src', 'data', 'portfolio-apps.ts');
const ORIGINS = join(RAIZ, 'src', 'data', 'proxy-origins.ts');
const muestra = process.argv.includes('--muestra');

// Clasificación por palabras del sector, en el orden en que se comprueba.
const CATEGORIAS = [
	{
		nombre: 'Taller y motor',
		claves: [
			'taller', 'moto', 'coche', 'auto', 'neumátic', 'neumatic', 'mecánic', 'mecanic',
			'chapa', 'pintura', 'gasolina', 'lavadero', 'recambio', 'grúa', 'grua', 'automoci',
		],
	},
	{
		nombre: 'Peluquería y belleza',
		claves: [
			'peluquer', 'barber', 'belleza', 'estétic', 'estetic', 'uñas', 'spa', 'masaje',
			'maquillaje', 'depilaci', 'nails', 'salón', 'salon', 'cabello', 'corte de pelo',
		],
	},
	{
		nombre: 'Comercio',
		claves: [
			'florister', 'florista', 'tienda', 'comercio', 'supermercado', 'alimentaci',
			'carnicer', 'pescader', 'fruter', 'mercer', 'moda', 'boutique', 'librer',
			'papeler', 'ferreter', 'óptica', 'optica', 'farmacia', 'joyer', 'regalo',
			'mascota', 'panader', 'boller', 'obrador', 'chocolat', 'ultramarinos',
		],
	},
	{
		nombre: 'Restaurantes y bares',
		claves: [
			'restaurant', 'restaurante', 'bar', 'cafeter', 'café', 'cafe', 'tapas', 'tapeo',
			'gastro', 'pizzer', 'pizza', 'asador', 'mesón', 'meson', 'marisquer', 'cervecer',
			'hamburgues', 'burger', 'kebab', 'doner', 'helader', 'bakery', 'churrer',
			'braser', 'brasa', 'sidrer', 'taberna', 'bodega', 'copa', 'vermut', 'taper',
			'bocater', 'sushi', 'wok', 'curry', 'freidur', 'pub', 'cocina', 'parrilla',
			'pulpería', 'pulperia', 'merendero', 'venta', 'chiringuito', 'pollo', 'food',
			'tasca', 'cozinha', 'african', 'churrasc', 'cantina', 'comida', 'cocina', 'grill',
			'buffet', 'brunch', 'desayun', 'menú', 'menu', 'snack',
		],
	},
];

const CATEGORIA_POR_DEFECTO = 'Servicios profesionales';

const ACENTOS = {
	'Restaurantes y bares': 'bg-accent/15 text-primary',
	'Peluquería y belleza': 'bg-neutral/15 text-neutral',
	Comercio: 'bg-secondary/15 text-neutral',
	'Taller y motor': 'bg-neutral/15 text-neutral',
	'Servicios profesionales': 'bg-primary/15 text-primary',
};

// Palabras que describen el sector mejor que la categoría genérica. Solo se usan
// cuando la ficha no trae tagline del que sacarlo.
const SECTORES = [
	['pizzer', 'Pizzería'],
	['pizza', 'Pizzería'],
	['kebab', 'Kebab'],
	['doner', 'Kebab'],
	['hamburgues', 'Hamburguesería'],
	['burger', 'Hamburguesería'],
	['panader', 'Panadería'],
	['boller', 'Bollería'],
	['cafeter', 'Cafetería'],
	['florister', 'Floristería'],
	['florista', 'Floristería'],
	['barber', 'Barbería'],
	['peluquer', 'Peluquería'],
	['estétic', 'Centro de estética'],
	['estetic', 'Centro de estética'],
	['marisquer', 'Marisquería'],
	['asador', 'Asador'],
	['brasa', 'Brasa y parrilla'],
	['taberna', 'Taberna'],
	['mesón', 'Mesón'],
	['meson', 'Mesón'],
	['helader', 'Heladería'],
	['taller', 'Taller'],
	['restaurant', 'Restaurante'],
	['tasca', 'Taberna'],
	['food', 'Restaurante'],
	['tapas', 'Tapas'],
	['bar', 'Bar'],
];

const clasificar = (texto) => {
	const limpio = texto.toLowerCase();
	for (const { nombre, claves } of CATEGORIAS) {
		if (claves.some((clave) => limpio.includes(clave))) return nombre;
	}
	return CATEGORIA_POR_DEFECTO;
};

const sectorPorPalabra = (texto) => {
	const limpio = texto.toLowerCase();
	const encontrado = SECTORES.find(([clave]) => limpio.includes(clave));
	return encontrado ? encontrado[1] : '';
};

// "Tapas y raciones en Zaragoza" → sector "Tapas y raciones", ciudad "Zaragoza".
const partirTagline = (tagline) => {
	const limpio = (tagline ?? '').trim().replace(/\.$/, '');
	const corte = limpio.match(/^(.*?)\s+en\s+([^,]+)$/i);
	if (!corte) return { sector: limpio, ciudad: '' };
	return { sector: corte[1].trim(), ciudad: corte[2].trim() };
};

const tituloDesdeSlug = (slug) =>
	slug
		.split('-')
		.map((parte) => (parte.length > 2 ? parte[0].toUpperCase() + parte.slice(1) : parte))
		.join(' ');

const recortar = (texto, maximo = 240) => {
	const limpio = (texto ?? '').replace(/\s+/g, ' ').trim();
	if (limpio.length <= maximo) return limpio;
	return `${limpio.slice(0, maximo - 1).replace(/[,;:.\s]+$/, '')}…`;
};

// Un nombre útil: sin plantillas sin resolver, sin HTML y con tamaño de rótulo.
const limpiarNombre = (valor) => {
	const limpio = String(valor ?? '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/[«»“”]/g, '')
		.replace(/\s+/g, ' ')
		.replace(/^["'\s]+|["'\s]+$/g, '')
		.trim();
	if (!limpio || limpio.length > 70 || /[${}<>]/.test(limpio)) return '';
	return limpio;
};

// Primer texto de una propiedad, escrita como campo (`name: '…'`) o como
// constante (`const name = '…'`).
const campoDeTexto = (fuente, campo) => {
	for (const patron of [
		new RegExp(`\\b${campo}\\s*:\\s*['"]([^'"\\n]{2,120})['"]`),
		new RegExp(`\\bconst\\s+${campo}\\s*=\\s*['"]([^'"\\n]{2,120})['"]`),
	]) {
		const coincidencia = fuente.match(patron);
		if (coincidencia) return coincidencia[1].replace(/\\'/g, "'");
	}
	return '';
};

const leerJson = (ruta) => {
	try {
		return JSON.parse(readFileSync(ruta, 'utf8'));
	} catch {
		return null;
	}
};

// Los clientes ya curados a mano se quedan con su tarjeta y su captura.
const yaCurados = new Set();
if (existsSync(ORIGINS)) {
	for (const m of readFileSync(ORIGINS, 'utf8').matchAll(/'([a-z0-9-]+)':\s*'https?:/g)) {
		yaCurados.add(m[1]);
	}
}

const slugs = readdirSync(APPS, { withFileTypes: true })
	.filter((entrada) => entrada.isDirectory())
	.map((entrada) => entrada.name)
	.sort();

const entradas = [];
const stats = { siteTs: 0, secciones: 0, pagina: 0, slug: 0, curados: 0 };

for (const slug of slugs) {
	const dir = join(APPS, slug);
	if (!existsSync(join(dir, 'pages'))) continue;
	if (yaCurados.has(slug)) {
		stats.curados++;
		continue;
	}

	let nombre = '';
	let tagline = '';
	let ciudad = '';
	let descripcion = '';

	// 1) data/site.ts importado: la fuente más fiable.
	const rutaSite = join(dir, 'data', 'site.ts');
	if (existsSync(rutaSite)) {
		try {
			const modulo = await import(`${rutaSite}?t=${Date.now()}`);
			const negocio =
				modulo.BUSINESS ??
				Object.values(modulo).find((valor) => valor && typeof valor === 'object' && 'name' in valor);
			if (negocio?.name) {
				nombre = limpiarNombre(negocio.name);
				tagline = String(negocio.tagline ?? negocio.claim ?? '');
				ciudad = String(negocio.city ?? '');
				descripcion = String(negocio.summary ?? negocio.description ?? '');
				if (nombre) stats.siteTs++;
			}
		} catch {
			// Se sigue con las otras fuentes.
		}
	}

	// 2) Datos en línea en la página: nombre, ciudad y resumen.
	const rutaPagina = join(dir, 'pages', 'index.astro');
	const fuentes = [rutaPagina, join(dir, 'lib', 'business.ts'), join(dir, 'data', 'data.ts')]
		.filter((ruta) => existsSync(ruta))
		.map((ruta) => readFileSync(ruta, 'utf8'));
	if (!nombre || !ciudad) {
		for (const fuente of fuentes) {
			nombre ||= limpiarNombre(campoDeTexto(fuente, 'name'));
			tagline ||= campoDeTexto(fuente, 'tagline');
			ciudad ||= campoDeTexto(fuente, 'city');
			descripcion ||= campoDeTexto(fuente, 'summary') || campoDeTexto(fuente, 'description');
		}
		if (nombre) stats.pagina++;
	}

	// 3) data/secciones.json: primera sección con título y etiqueta de dirección.
	if (!nombre || !ciudad) {
		const secciones = leerJson(join(dir, 'data', 'secciones.json'));
		const primera = secciones?.secciones?.find((seccion) => seccion.titulo || seccion.etiqueta);
		if (primera) {
			const etiqueta = String(primera.etiqueta ?? '');
			const partes = etiqueta.split('·').map((parte) => parte.trim()).filter(Boolean);
			ciudad ||= partes.length > 1 ? partes[partes.length - 1] : '';
			descripcion ||=
				String(primera.texto ?? '') ||
				(Array.isArray(primera.parrafos) ? primera.parrafos.join(' ') : '');
			nombre ||= limpiarNombre(primera.titulo);
			if (nombre) stats.secciones++;
		}
	}

	// 4) El `title` de la página, quitándole el sufijo de ciudad ("X · Benidorm").
	if (!nombre) {
		for (const fuente of fuentes) {
			const title = fuente.match(/\bconst\s+title\s*=\s*['"`]([^'"`\n]{2,160})['"`]/);
			if (!title || /\$\{/.test(title[1])) continue;
			nombre = limpiarNombre(title[1].split('·')[0]);
			if (nombre) break;
		}
	}

	// 5) Último recurso: el slug, legible.
	if (!nombre) {
		nombre = tituloDesdeSlug(slug);
		stats.slug++;
	}

	const { sector: sectorTagline, ciudad: ciudadTagline } = partirTagline(tagline);
	if (!ciudad) ciudad = ciudadTagline;
	if (!ciudad && descripcion) {
		const enCiudad = descripcion.match(/\b en ([A-ZÁÉÍÓÚÑ][\wáéíóúñü\s.]{2,30}?)(?=[,.(]|$)/);
		if (enCiudad) ciudad = enCiudad[1].trim();
	}

	const categoria = clasificar(`${nombre} ${slug} ${sectorTagline}`);
	const sector = sectorTagline || sectorPorPalabra(`${nombre} ${slug}`) || categoria;
	// Un resumen de menos de una línea o que repite el nombre no aporta nada en la card.
	const resumen = descripcion.replace(/\s+/g, ' ').trim();
	const detalle = recortar(
		resumen.length >= 25 && resumen !== nombre
			? resumen
			: `${nombre}${ciudad ? `, ${ciudad}` : ''}. Ficha con horario, teléfono y ubicación.`,
	);

	entradas.push({
		slug,
		title: nombre,
		category: categoria,
		sector,
		description: detalle,
		tags: [ciudad, sector].filter(Boolean).slice(0, 2),
		accent: ACENTOS[categoria] ?? ACENTOS['Servicios profesionales'],
		url: `/${slug}/`,
	});
}

entradas.sort((a, b) => a.title.localeCompare(b.title, 'es'));

const cabecera = `/**
 * Clientes con landing publicada en este mismo proyecto.
 *
 * GENERADO por tools/gen-portfolio-apps.mjs — no editar a mano: los cambios se
 * pierden en la siguiente ejecución. Los 96 clientes con captura propia siguen
 * en data/portfolio.ts; aquí van los demás, con los datos de su landing.
 */
export interface AppProject {
	slug: string;
	title: string;
	category: string;
	sector: string;
	description: string;
	tags: string[];
	accent: string;
	url: string;
}

export const PORTFOLIO_APPS: AppProject[] = ${JSON.stringify(entradas, null, '\t')};
`;

if (muestra) {
	for (const entrada of entradas.slice(0, 15)) console.log(JSON.stringify(entrada));
} else {
	writeFileSync(SALIDA, cabecera);
	console.log(`Escritas ${entradas.length} entradas en src/data/portfolio-apps.ts`);
}

console.log(
	`Origen: site.ts ${stats.siteTs} · página en línea ${stats.secciones + stats.pagina} · ` +
		`solo slug ${stats.slug} · ya curados y omitidos ${stats.curados}`,
);
const sinCiudad = entradas.filter((entrada) => entrada.tags.length < 2);
if (sinCiudad.length) {
	console.log(`Sin ciudad: ${sinCiudad.length} (${sinCiudad.slice(0, 4).map((e) => e.slug).join(', ')}…)`);
}
