/**
 * Datos de Freiduría Luisa y Alexandra — Av. de Emilio Lemos, 19, Local 5C1,
 * 41020 Sevilla.
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: 37.4027135,-5.9226665,
 *   feature 0xd126fdfe5ab394f:0x463c5182df9a0232 (nombre, dirección, categoría,
 *   horario, teléfono, nota, reseñas, accesibilidad y descripción del negocio),
 *   más su place id y su CID.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la ficha NO publica y esta web no inventa: carta con precios, web
 * propia, reparto a domicilio y descripción larga del negocio. Los productos que
 * se nombran salen de la categoría de Google, de la descripción («Freiduria para
 * llevar») y de las reseñas que la ficha destaca.
 */

export const BUSINESS = {
	name: 'Freiduría Luisa y Alexandra',
	shortName: 'Luisa y Alexandra',
	mark: 'LA',
	street: 'Av. de Emilio Lemos, 19, Local 5C1',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Emilio Lemos',
	postalCode: '41020',
	country: 'ES',
	phone: '+34 642 98 38 13',
	phoneHref: '+34642983813',
	rating: 3.8,
	reviewsCount: 50,
	siteUrl: 'https://www.sur-digital.com/freiduria-luisa-y-alexandra',
	geo: { lat: 37.4027135, lng: -5.9226665 },
	featureId: '0xd126fdfe5ab394f:0x463c5182df9a0232',
	placeId: 'ChIJTzmr5d9vEg0RMgKa34JRPEY',
	cid: '5061009703796605490',
	/** Categoría con la que Google clasifica el local. */
	category: 'Freiduría para llevar',
	categories: ['Tienda de pescado y papas fritas para llevar'],
	tagline: 'Pescado frito y papas, para llevar',
	description:
		'Freiduría Luisa y Alexandra, pescado frito y papas para llevar en la avenida de Emilio Lemos 19, local 5C1, 41020 Sevilla. Abre todos los días de 13:00 a 17:00 y de 20:00 a 1:00.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio negocio en su ficha. */
	ownerDescription: 'Freiduria para llevar',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Freiduria+Luisa+y+Alexandra/@37.4027135,-5.9226665,17z/data=!4m6!3m5!1s0xd126fdfe5ab394f:0x463c5182df9a0232!8m2!3d37.4027135!4d-5.9226665!16s%2Fg%2F11st6b8x_b',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://www.google.com/maps?cid=${BUSINESS.cid}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.4027135%2C-5.9226665',
	embed: 'https://maps.google.com/maps?q=37.4027135,-5.9226665&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: dos turnos todos los días, de 13:00
 * a 17:00 y de 20:00 a 1:00. No hay día de cierre.
 */
export const HOURS = [
	{ day: 'Lunes', value: '13:00–17:00 · 20:00–1:00' },
	{ day: 'Martes', value: '13:00–17:00 · 20:00–1:00' },
	{ day: 'Miércoles', value: '13:00–17:00 · 20:00–1:00' },
	{ day: 'Jueves', value: '13:00–17:00 · 20:00–1:00' },
	{ day: 'Viernes', value: '13:00–17:00 · 20:00–1:00' },
	{ day: 'Sábado', value: '13:00–17:00 · 20:00–1:00' },
	{ day: 'Domingo', value: '13:00–17:00 · 20:00–1:00' },
];

/** Lo que declara la ficha y lo que repiten las reseñas que Google destaca. */
export const SERVICIOS = [
	'Pescado frito variado',
	'Chocos',
	'Papas fritas',
	'Para llevar',
	'Abierto todos los días',
];

/** Reseñas destacadas en la ficha pública, con la puntuación de su autor. */
export const REVIEWS = [
	{
		quote: 'Limpieza exquisita, el pescado variado buenísimo y la amabilidad inmejorable.',
		rating: 5,
	},
	{
		quote: 'Todo muy bueno, pedimos frito para dos personas y fue abundante y muy rico.',
		rating: 5,
	},
	{
		quote: 'Hemos probado los chocos y deliciosos.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Freiduría Luisa y Alexandra?',
		a: 'En la avenida de Emilio Lemos 19, local 5C1, en el 41020 de Sevilla. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Dos turnos todos los días de la semana: de 13:00 a 17:00 y de 20:00 a 1:00. Según la ficha, no hay ningún día de cierre.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pescado frito variado, chocos y papas fritas. Google lo clasifica como tienda de pescado y papas fritas para llevar, y las reseñas que la ficha destaca hablan del frito para dos personas y de los chocos.',
	},
	{
		q: '¿Es para comer allí o solo para llevar?',
		a: 'Para llevar. El propio negocio lo dice en su ficha: «Freiduria para llevar». La ficha marca además que no hay asientos adaptados, así que el local está pensado para recoger el pedido.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes. Una de las reseñas destaca que el frito para dos personas era abundante, pero para saber precios hay que preguntar en el local o llamar al 642 98 38 13.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha no lo marca como comida a domicilio ni enlaza ninguna plataforma de reparto, así que esta web no lo anuncia. El teléfono publicado sirve para preguntar si reparten en tu zona.',
	},
	{
		q: '¿Hay que encargar con antelación?',
		a: 'No consta en la ficha. Al ser una freiduría para llevar, lo habitual es pedir y esperar el frito; si vas a recoger para mucha gente, llama antes al 642 98 38 13 y te lo preparan.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no asientos adaptados. No publica más datos de accesibilidad, así que conviene confirmarlo por teléfono si lo necesitas.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web de la freiduría y ofrece al titular la opción de añadir una. Esta página es informativa y no es un canal oficial de pedidos.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Tres coma ocho sobre cinco con 50 reseñas. Las tres que Google destaca son de cinco estrellas y hablan de limpieza, amabilidad y pescado; en la ficha están todas, también las críticas.',
	},
];
