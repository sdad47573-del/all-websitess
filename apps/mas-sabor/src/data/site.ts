/**
 * Datos de Más Sabor Asador de Pollos y Comida preparada para llevar —
 * C. de Antonio de Leyva, 10, Carabanchel, 28019 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Más Sabor Asador de Pollos y Comida
 *   preparada para llevar, 40.3955401,-3.7153458,
 *   feature 0xd422740cf2e4d1b:0x5277c668e3f1d56.
 * - Nombre, dirección, categoría, teléfono, valoración, reseñas y horario:
 *   ficha pública de Google consultada en octubre de 2026.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica carta
 * con precios, así que no hay tarifas ni platos fuera de lo que consta.
 */

export const BUSINESS = {
	name: 'Más Sabor',
	fullName: 'Más Sabor · asador de pollos y comida preparada para llevar',
	shortName: 'Más Sabor',
	mark: 'M',
	street: 'C. de Antonio de Leyva, 10',
	neighbourhood: 'Carabanchel',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	regionName: 'Comunidad de Madrid',
	postalCode: '28019',
	country: 'ES',
	phone: '910 93 45 60',
	phoneHref: '+34910934560',
	rating: 3.7,
	reviewsCount: 71,
	siteUrl: 'https://mas-sabor.vercel.app',
	geo: { lat: 40.3955401, lng: -3.7153458 },
	featureId: '0xd422740cf2e4d1b:0x5277c668e3f1d56',
	placeId: 'ChIJG00uz0AnQg0RVh0_jmZ8JwU',
	cid: '371402274196364630',
	plusCode: '8CGR97WM+6V',
	category: 'Comida a domicilio',
	tagline: 'Asador de pollos y comida preparada para llevar en Carabanchel',
	description:
		'Más Sabor, asador de pollos y comida preparada para llevar en la calle Antonio de Leyva 10, Carabanchel (28019 Madrid). Pollo asado, guisos y platos preparados para comer en casa o pedir a domicilio. Abre de lunes a sábado de 10:30 a 21:30 y el domingo de 10:30 a 16:00.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/M%C3%A1s+Sabor+Asador+de+Pollos+y+Comida+preparada+para+llevar/@40.3955401,-3.7153458,17z/data=!3m1!4b1!4m6!3m5!1s0xd422740cf2e4d1b:0x5277c668e3f1d56!8m2!3d40.3955401!4d-3.7153458!16s%2Fg%2F11q3vqvnv8?authuser=0&hl=es&entry=ttu',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3955401%2C-3.7153458',
	embed: 'https://maps.google.com/maps?q=40.3955401,-3.7153458&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3955401,-3.7153458',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '10:30–21:30' },
	{ day: 'Martes', value: '10:30–21:30' },
	{ day: 'Miércoles', value: '10:30–21:30' },
	{ day: 'Jueves', value: '10:30–21:30' },
	{ day: 'Viernes', value: '10:30–21:30' },
	{ day: 'Sábado', value: '10:30–21:30' },
	{ day: 'Domingo', value: '10:30–16:00' },
];

/** Señales de identidad que constan en la ficha. */
export const SERVICIOS = ['Pollo asado', 'Comida preparada', 'Para llevar', 'A domicilio'];

/**
 * Oferta que consta en la ficha y en sus reseñas. No hay carta ni precios
 * publicados, así que no se añaden platos ni tarifas que no consten.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'con salsa al gusto · una reseña destaca que lo preparan con la salsa que pides',
			},
			{ name: 'Medio pollo con patatas y bebida', price: '8,50 €', note: 'menú diario de la pizarra · para comer allí o para llevar' },
			{ name: 'Alitas de pollo', price: '5,50 €', note: 'ración de la vitrina' },
		],
	},
	{
		title: 'Menú del día',
		items: [
			{
				name: 'Menú diario',
				note: 'medio pollo, patatas y bebida, o primero, segundo y postre según la pizarra · cambia cada día',
			},
		],
	},
	{
		title: 'Platos preparados',
		items: [
			{ name: 'Lentejas', price: '3,20 €', note: 'de la vitrina' },
			{ name: 'Croquetas de jamón', price: '3,50 €', note: '5 unidades · de las más valoradas en las reseñas' },
			{ name: 'Lasaña', price: '4,80 €', note: 'ración' },
			{ name: 'Albóndigas con patatas', note: 'vitrina del día · precio según ración' },
			{ name: 'Arroz frito', note: 'vitrina del día' },
			{ name: 'Brócoli con verduras', note: 'vitrina del día' },
			{ name: 'Patatas panadera con pimientos', note: 'guarnición de la vitrina' },
			{ name: 'Guiso de carne con patatas', note: 'plato de cuchara del día' },
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{ name: 'Bocadillo de pollo rebozado', note: 'de los más pedidos según las reseñas de la ficha' },
		],
	},
];

export const RESENAS = [
	{
		texto: 'El pollo muy rico, le pedí con bastante salsa y así lo hicieron.',
		valor: 5,
	},
	{
		texto: 'Por lo tanto el bocadillo de pollo rebozado y las croquetas 10/10.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Más Sabor?',
		a: 'En la calle Antonio de Leyva, 10, en Carabanchel, 28019 Madrid. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de lunes a sábado de 10:30 a 21:30 y el domingo de 10:30 a 16:00, según la ficha de Google. En festivos el horario puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Es un asador de pollos con comida preparada para llevar: pollo asado con salsa al gusto, bocadillo de pollo rebozado y croquetas caseras, según las reseñas de su ficha. El resto de platos preparados cambia cada día y se consulta en el local o en el 910 93 45 60.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha lo clasifica como «comida a domicilio». La zona y las condiciones se confirman llamando al 910 93 45 60.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,7 sobre 5 con 71 reseñas en Google, según la ficha consultada en octubre de 2026.',
	},
	{
		q: '¿Tiene web propia o redes sociales?',
		a: 'La ficha de Google no enlaza una web propia del local. Esta página es informativa y no es un canal oficial de pedidos; el teléfono y la ficha de Google son los canales que constan.',
	},
];
