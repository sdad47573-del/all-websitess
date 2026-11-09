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

// Comunidades autónomas (y países vecinos) para agrupar las ciudades del
// filtro. `region`/`regionName` de las landings a veces traen la comunidad y a
// veces la provincia; se aceptan las dos formas.
const COMUNIDADES = new Map([
	['Andalucía', 'Andalucía'],
	['Aragón', 'Aragón'],
	['Asturias', 'Asturias'],
	['Principado de Asturias', 'Asturias'],
	['Islas Baleares', 'Islas Baleares'],
	['Illes Balears', 'Islas Baleares'],
	['Canarias', 'Canarias'],
	['Cantabria', 'Cantabria'],
	['Castilla-La Mancha', 'Castilla-La Mancha'],
	['Castilla y León', 'Castilla y León'],
	['Cataluña', 'Cataluña'],
	['Catalunya', 'Cataluña'],
	['Comunidad de Madrid', 'Comunidad de Madrid'],
	['Madrid', 'Comunidad de Madrid'],
	['Comunidad Valenciana', 'Comunidad Valenciana'],
	['Comunitat Valenciana', 'Comunidad Valenciana'],
	['Extremadura', 'Extremadura'],
	['Galicia', 'Galicia'],
	['La Rioja', 'La Rioja'],
	['Región de Murcia', 'Región de Murcia'],
	['Murcia', 'Región de Murcia'],
	['Navarra', 'Navarra'],
	['Comunidad Foral de Navarra', 'Navarra'],
	['País Vasco', 'País Vasco'],
	['Euskadi', 'País Vasco'],
	['Ceuta', 'Ceuta'],
	['Melilla', 'Melilla'],
	['Portugal', 'Portugal'],
	['Andorra', 'Andorra'],
]);

const PROVINCIAS = new Map([
	['Almería', 'Andalucía'],
	['Cádiz', 'Andalucía'],
	['Córdoba', 'Andalucía'],
	['Granada', 'Andalucía'],
	['Huelva', 'Andalucía'],
	['Jaén', 'Andalucía'],
	['Málaga', 'Andalucía'],
	['Sevilla', 'Andalucía'],
	['Huesca', 'Aragón'],
	['Teruel', 'Aragón'],
	['Zaragoza', 'Aragón'],
	['Las Palmas', 'Canarias'],
	['Santa Cruz de Tenerife', 'Canarias'],
	['Albacete', 'Castilla-La Mancha'],
	['Ciudad Real', 'Castilla-La Mancha'],
	['Cuenca', 'Castilla-La Mancha'],
	['Guadalajara', 'Castilla-La Mancha'],
	['Toledo', 'Castilla-La Mancha'],
	['Ávila', 'Castilla y León'],
	['Burgos', 'Castilla y León'],
	['León', 'Castilla y León'],
	['Palencia', 'Castilla y León'],
	['Salamanca', 'Castilla y León'],
	['Segovia', 'Castilla y León'],
	['Soria', 'Castilla y León'],
	['Valladolid', 'Castilla y León'],
	['Zamora', 'Castilla y León'],
	['Barcelona', 'Cataluña'],
	['Girona', 'Cataluña'],
	['Lleida', 'Cataluña'],
	['Tarragona', 'Cataluña'],
	['Alicante', 'Comunidad Valenciana'],
	['Alacant', 'Comunidad Valenciana'],
	['Castellón', 'Comunidad Valenciana'],
	['Castelló', 'Comunidad Valenciana'],
	['Valencia', 'Comunidad Valenciana'],
	['València', 'Comunidad Valenciana'],
	['Badajoz', 'Extremadura'],
	['Cáceres', 'Extremadura'],
	['A Coruña', 'Galicia'],
	['Lugo', 'Galicia'],
	['Ourense', 'Galicia'],
	['Pontevedra', 'Galicia'],
	['Álava', 'País Vasco'],
	['Araba', 'País Vasco'],
	['Gipuzkoa', 'País Vasco'],
	['Guipúzcoa', 'País Vasco'],
	['Bizkaia', 'País Vasco'],
	['Vizcaya', 'País Vasco'],
]);

const CIUDADES_PORTUGAL = new Set([
	'lisboa', 'setubal', 'sintra', 'almada', 'mertola', 'alentejo', 'porto', 'braga',
]);
const CIUDADES_ANDORRA = new Set([
	'andorra-la-vella', 'encamp', 'canillo', 'ordino', 'escaldes-engordany',
]);

// Ciudades cuya landing no trae región: se resuelven a mano por provincia.
const CIUDADES_COMUNIDAD = new Map([
	['vejer-de-la-frontera', 'Andalucía'],
	['barbate', 'Andalucía'],
	['conil-de-la-frontera', 'Andalucía'],
	['vejer-de-la-frontera-conil', 'Andalucía'],
	['mijas', 'Andalucía'],
	['torremolinos', 'Andalucía'],
	['lucena', 'Andalucía'],
	['xodos', 'Comunidad Valenciana'],
	['el-monte-blanco', 'Comunidad Valenciana'],
	['benicassim', 'Comunidad Valenciana'],
]);

const normalizarCiudad = (texto) =>
	String(texto ?? '')
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-');

const comunidadDe = ({ region, regionName, country, city }) => {
	if (country === 'PT') return 'Portugal';
	if (country === 'AD') return 'Andorra';
	for (const valor of [region, regionName]) {
		const limpio = String(valor ?? '').trim();
		if (!limpio) continue;
		if (COMUNIDADES.has(limpio)) return COMUNIDADES.get(limpio);
		if (PROVINCIAS.has(limpio)) return PROVINCIAS.get(limpio);
	}
	const clave = normalizarCiudad(city);
	if (CIUDADES_COMUNIDAD.has(clave)) return CIUDADES_COMUNIDAD.get(clave);
	if (CIUDADES_PORTUGAL.has(clave)) return 'Portugal';
	if (CIUDADES_ANDORRA.has(clave)) return 'Andorra';
	return '';
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
	let region = '';
	let regionName = '';
	let country = '';
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
				region = String(negocio.region ?? '');
				regionName = String(negocio.regionName ?? '');
				country = String(negocio.country ?? '');
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
			region ||= campoDeTexto(fuente, 'region');
			regionName ||= campoDeTexto(fuente, 'regionName');
			country ||= campoDeTexto(fuente, 'country');
			descripcion ||= campoDeTexto(fuente, 'summary') || campoDeTexto(fuente, 'description');
		}
		if (nombre) stats.pagina++;
	}

	// La región puede estar en la página aunque el nombre y la ciudad ya se
	// hayan encontrado en site.ts: se lee siempre.
	if (!region || !regionName || !country) {
		for (const fuente of fuentes) {
			region ||= campoDeTexto(fuente, 'region');
			regionName ||= campoDeTexto(fuente, 'regionName');
			country ||= campoDeTexto(fuente, 'country');
		}
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
		city: ciudad,
		region,
		regionName,
		country,
		description: detalle,
		tags: [ciudad, sector].filter(Boolean).slice(0, 2),
		accent: ACENTOS[categoria] ?? ACENTOS['Servicios profesionales'],
		url: `/${slug}/`,
	});
}

for (const entrada of entradas) {
	entrada.community = comunidadDe(entrada) || '';
}

// Segunda pasada: las fichas con ciudad pero sin región heredan la comunidad
// que ya tengan otras landings de la misma ciudad.
const comunidadesPorCiudad = new Map();
for (const entrada of entradas) {
	if (!entrada.city || !entrada.community) continue;
	const clave = normalizarCiudad(entrada.city);
	const conteo = comunidadesPorCiudad.get(clave) ?? new Map();
	conteo.set(entrada.community, (conteo.get(entrada.community) ?? 0) + 1);
	comunidadesPorCiudad.set(clave, conteo);
}
for (const entrada of entradas) {
	if (entrada.community || !entrada.city) continue;
	const conteo = comunidadesPorCiudad.get(normalizarCiudad(entrada.city));
	if (!conteo) continue;
	entrada.community = [...conteo.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

for (const entrada of entradas) {
	delete entrada.region;
	delete entrada.regionName;
	delete entrada.country;
}

entradas.sort((a, b) => a.title.localeCompare(b.title, 'es'));

const sinComunidad = entradas.filter(
	(entrada) => entrada.city && !entrada.community,
);
if (sinComunidad.length) {
	console.log(
		`Sin comunidad: ${sinComunidad.length} (${sinComunidad.slice(0, 4).map((e) => e.slug).join(', ')}…)`,
	);
}

const cabecera = `/**
 * Clientes con landing publicada en este mismo proyecto.
 *
 * GENERADO por tools/gen-portfolio-apps.mjs — no editar a mano: los cambios se
 * pierden en la siguiente ejecución. Los 96 clientes con captura propia siguen
 * en data/portfolio.ts; aquí van los demás, con los datos de su landing
 * (incluidas la ciudad y la comunidad autónoma, cuando se pueden deducir).
 */
export interface AppProject {
	slug: string;
	title: string;
	category: string;
	sector: string;
	city: string;
	community: string;
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
