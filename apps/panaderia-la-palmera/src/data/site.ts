/**
 * Datos de Panadería-Confitería La Palmera — C. Alfonso XIII, Centro (14001 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: 37.88536,-4.7764405,
 *   feature 0xd6cdf3c47407c25:0x9b3ce099bcf06257.
 * - Nombre, categorías, dirección, teléfono, horario, valoración, reseñas y
 *   accesibilidad: ficha pública de Google.
 * - Fotos: galería pública de la ficha (10 imágenes), descargadas con
 *   scripts/fetch-maps-photos.mjs.
 *
 * LÍMITES: la ficha no publica descripción, carta, precios ni web propia. Google
 * la clasifica con tres categorías (tienda de alimentación, panadería y
 * pastelería), así que la web describe eso y lo que se ve en las fotos, sin
 * inventar catálogo ni precios.
 */

export const BUSINESS = {
	name: 'Panadería-Confitería La Palmera',
	shortName: 'La Palmera',
	mark: 'P',
	street: 'C. Alfonso XIII',
	streetFull: 'C. Alfonso XIII, Centro',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14001',
	country: 'ES',
	phone: '676 98 62 47',
	phoneHref: 'tel:+34676986247',
	rating: 3.7,
	reviewsCount: 12,
	siteUrl: 'https://panaderia-la-palmera.vercel.app',
	geo: { lat: 37.88536, lng: -4.7764405 },
	featureId: '0xd6cdf3c47407c25:0x9b3ce099bcf06257',
	placeId: 'ChIJJXxARzzfbA0RV2LwvJngPJs',
	googleCategory: 'Tienda de alimentación · Panadería · Pastelería',
	tagline: 'Panadería, confitería y tienda de alimentación en el centro de Córdoba',
	description:
		'Panadería-Confitería La Palmera, en C. Alfonso XIII (Centro, 14001 Córdoba). Pan, confitería, frutos secos y golosinas. Abierta de lunes a viernes de 9:15 a 15:00 y de 18:00 a 21:00. 3,7 sobre 5 con 12 reseñas en Google.',
	hoursSummary: 'L–V 9:15–15:00 y 18:00–21:00 · Sábado 10:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa-Confiter%C3%ADa+La+Palmera/@37.88536,-4.7764405,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf3c47407c25:0x9b3ce099bcf06257!8m2!3d37.88536!4d-4.7764405!16s%2Fg%2F11nn1vk_t8?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.88536%2C-4.7764405',
	embed: 'https://maps.google.com/maps?q=37.88536,-4.7764405&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.88536,-4.7764405',
};

/** Horario tal cual lo publica Google: partido y con el domingo cerrado. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '9:15–15:00 · 18:00–21:00' },
	{ day: 'Sábado', value: '10:00–15:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. De lunes a viernes abre a las 9:15, cierra a las 15:00 y vuelve de 18:00 a 21:00; el sábado solo hay mañana (10:00–15:00) y el domingo cierra. Los festivos pueden cambiar el horario; se confirma por teléfono.';

/** Lo que declara la ficha, sin añadir catálogo que no publica. */
export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Tienda de alimentación',
	'Frutos secos y golosinas',
	'Centro · 14001',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan, dulce y despensa',
		text: 'El rótulo de la fachada anuncia «La Palmera · Pan» y «Frutos secos», y el letrero lateral añade panadería, confitería y golosinas. Google la clasifica como tienda de alimentación, panadería y pastelería a la vez. En el escaparate hay también bebidas y snacks envasados.',
	},
	{
		title: 'El horario partido',
		text: 'De lunes a viernes abre de 9:15 a 15:00 y de 18:00 a 21:00: cierra a mediodía y vuelve por la tarde. El sábado solo abre por la mañana y el domingo descansa. Es horario de barrio, no de panadería de madrugada.',
	},
	{
		title: 'En el Centro',
		text: 'Está en la calle Alfonso XIII, en pleno Centro de Córdoba (14001), en una fachada amarilla con toldo y escaparate de calle. La ficha indica acceso para sillas de ruedas y que no hay aparcamiento adaptado.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Palmera?',
		a: 'En la calle Alfonso XIII, en el Centro de Córdoba (14001). La ficha de Google no publica número de portal, así que esta web no lo inventa: el mapa abre el punto exacto que da Google y el botón «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, 9:15–15:00 y 18:00–21:00. El sábado, 10:00–15:00. El domingo, cerrado. Es el horario publicado en la ficha; en festivos conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El rótulo y las categorías de Google hablan de panadería, confitería, frutos secos, golosinas y tienda de alimentación. En las fotos se ven empanadillas, bollería, dulces de chocolate, donuts, tartas y estanterías de snacks y bebidas. No hay carta ni precios publicados: lo que haya cada día se ve en el mostrador.',
	},
	{
		q: '¿Se puede llamar para encargar?',
		a: 'Sí, el teléfono de la ficha es el 676 98 62 47. La ficha no detalla encargos, plazos ni precios, y esta web no gestiona pedidos: cualquier cosa se habla por teléfono o en el mostrador.',
	},
	{
		q: '¿Tiene fotos la ficha de Google?',
		a: 'Sí, la galería tiene 10 fotos. En esta web se usan siete: la fachada como portada y seis de vitrina y producto. Las otras tres se han dejado fuera porque aparecen personas identificables.',
	},
	{
		q: '¿Es accesible o tiene aparcamiento?',
		a: 'La ficha de Google indica que hay acceso para sillas de ruedas y que no hay aparcamiento adaptado. Al estar en el Centro, el estacionamiento depende de la zona.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '3,7 sobre 5 con 12 reseñas, según la ficha pública. Es una muestra pequeña y con opiniones variadas; esta web no reproduce sus textos, pero se leen enteros en el enlace a Google.',
	},
	{
		q: '¿Tiene página web o carta con precios?',
		a: 'No. La ficha de Google no enlaza ninguna web propia ni publica precios. Esta página no los reproduce ni los estima.',
	},
];
