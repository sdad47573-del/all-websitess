/**
 * Datos de Panadería los Rubios — C. Carraca, 4 (Bailén-Miraflores,
 * 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería los Rubios, 36.7302735,-4.4373667,
 *   feature 0xd72f7a7bfacb835:0x4682791700dbdb04.
 * - Dirección, categoría, teléfono, valoración, reseñas y horario: ficha
 *   pública de Google (octubre de 2026).
 * - Foto: la única imagen de la galería del perfil de Google Maps, una vista de
 *   la calle en la que se ve el rótulo del local.
 *
 * Lo que la web NO inventa: la ficha no publica descripción, carta, precios,
 * web propia, correo, redes sociales, accesibilidad ni métodos de pago, y solo
 * tiene una foto (una vista de la calle). El contenido se limita a eso y a lo
 * que dicen las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería los Rubios',
	shortName: 'Los Rubios',
	mark: 'R',
	street: 'C. Carraca, 4',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '952 27 60 01',
	phoneHref: 'tel:+34952276001',
	rating: 3.6,
	reviewsCount: 53,
	siteUrl: 'https://www.sur-digital.com/panaderia-los-rubios',
	geo: { lat: 36.7302735, lng: -4.4373667 },
	featureId: '0xd72f7a7bfacb835:0x4682791700dbdb04',
	placeId: 'ChIJNbisv6f3cg0RBNvbABd5gkY',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en Bailén-Miraflores',
	description:
		'Panadería los Rubios, en la calle Carraca, 4 (Bailén-Miraflores, 29011 Málaga). Panadería y pastelería de barrio. Teléfono 952 27 60 01.',
	hoursSummary: 'L–V 7:30–14:30 · S cerrado · D 7:30–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+los+Rubios/@36.7302735,-4.4373667,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a7bfacb835:0x4682791700dbdb04!8m2!3d36.7302735!4d-4.4373667!16s%2Fg%2F1tg2m05s?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=5080756469332957956',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7302735%2C-4.4373667',
	embed: 'https://maps.google.com/maps?q=36.7302735,-4.4373667&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7302735,-4.4373667',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–14:30' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
	{ day: 'Domingo', value: '7:30–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene llamar antes de ir.';

export const SERVICIOS = ['Panadería', 'Pastelería', 'Pan', 'Dulces'];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y pastelería',
		text: 'La ficha la clasifica como panadería y el rótulo del local, visible en la única foto del perfil, anuncia «Panadería · Pastelería».',
	},
	{
		title: 'De mañana y en domingo',
		text: 'Abre de lunes a viernes y también el domingo, de 7:30 a 14:30. El sábado cierra.',
	},
	{
		title: 'Sin web ni carta',
		text: 'La ficha no publica página web, redes, carta ni precios. Todo se resuelve en el local o por teléfono, en el 952 27 60 01.',
	},
];

export const MENU_GROUPS = [];

export const FAQ = [
	{
		q: '¿Dónde está Panadería los Rubios?',
		a: 'En la calle Carraca, 4, en el barrio de Bailén-Miraflores (29011 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 14:30; el sábado cierra y el domingo vuelve a abrir de 7:30 a 14:30. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 952 27 60 01. La ficha de Google no publica página web propia, correo electrónico ni redes sociales, así que el contacto es en el local o por teléfono.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y el rótulo del local anuncia panadería y pastelería. Una de las reseñas de Google habla de «muy buenos dulces y pan». La ficha no publica carta, surtido ni precios, así que esta web no los detalla.',
	},
	{
		q: '¿Por qué solo hay una foto?',
		a: 'La galería pública del local en Google Maps solo tiene una imagen, una vista de la calle en la que se ve el rótulo de la panadería. Es la que se muestra en esta página.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 3,6 sobre 5 con 53 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información sobre el acceso, el aparcamiento adaptado, el mostrador o el aseo, así que esta página no la afirma. Si necesitas un acceso concreto, llama antes.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
