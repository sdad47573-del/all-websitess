/**
 * Datos de LA BOUTIQUE DEL POLLO #2 — Calle del Marqués de Viana, 4, Tetuán,
 * 28039 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «La Boutique del Pollo #2»,
 *   40.4612244,-3.6988966, feature 0xd4229068dafaf1b:0x2b3b15995cceb78b.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   accesibilidad y galería: ficha pública de Google consultada en octubre de 2026.
 * - Productos y servicio a domicilio: la tarjeta del propio establecimiento que
 *   aparece en las fotos del perfil.
 *
 * Lo que la ficha NO publica: precios estables, página web, redes sociales ni
 * pedidos online. La web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'La Boutique del Pollo #2',
	fullName: 'LA BOUTIQUE DEL POLLO #2',
	shortName: 'La Boutique del Pollo',
	mark: 'BP',
	street: 'Calle del Marqués de Viana, 4',
	district: 'Tetuán',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28039',
	country: 'ES',
	siteUrl: 'https://la-boutique-del-pollo-2.vercel.app',
	geo: { lat: 40.4612244, lng: -3.6988966 },
	featureId: '0xd4229068dafaf1b:0x2b3b15995cceb78b',
	placeId: 'ChIJG6-vjQYpQg0Ri7fOXJkVOys',
	plusCode: '8CGRF862+FC',
	googleCategory: 'Pollería',
	phone: '915 79 15 82',
	phoneHref: 'tel:+34915791582',
	phone2: '917 33 02 20',
	phone2Href: 'tel:+34917330220',
	tagline: 'Pollería de toda la vida en Tetuán',
	description:
		'La Boutique del Pollo #2, en Calle del Marqués de Viana, 4 (Tetuán, 28039 Madrid). Pollería con pollo fresco, pavos, aves, caza, conejos, huevos y elaborados, con servicio a domicilio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Boutique+del+Pollo+%232/@40.4612244,-3.6988966,17z/data=!4m6!3m5!1s0xd4229068dafaf1b:0x2b3b15995cceb78b!8m2!3d40.4612244!4d-3.6988966!16s%2Fg%2F1vyn54gx?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4612244%2C-3.6988966',
	embed: 'https://maps.google.com/maps?q=40.4612244,-3.6988966&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4612244,-3.6988966',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 5,
	count: 5,
	label: '5,0',
};

/** Horario de la ficha: mañanas y tardes de lunes a viernes, sábados por la mañana. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–14:00 · 17:30–20:30' },
	{ dia: 'Martes', horas: '9:00–14:00 · 17:30–20:30' },
	{ dia: 'Miércoles', horas: '9:00–14:00 · 17:30–20:30' },
	{ dia: 'Jueves', horas: '9:00–14:00 · 17:30–20:30' },
	{ dia: 'Viernes', horas: '9:00–14:00 · 17:30–20:30' },
	{ dia: 'Sábado', horas: '9:00–14:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que ofrece la pollería, según la ficha y su tarjeta. */
export const SERVICIOS = [
	'Pollo fresco',
	'Pavos y aves',
	'Caza y conejos',
	'Huevos',
	'Elaborados',
	'Para barbacoas',
	'A domicilio',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo fresco y troceado',
		text: 'La vitrina es el centro del local: pollos enteros, cuartos, pechugas y alitas, con carteles de oferta por kilos que cambian según el día.',
	},
	{
		title: 'Los elaborados',
		text: 'Junto a la carne hay bandejas de empanadas, croquetas, albóndigas, alitas y hamburguesas, y preparados especiales para barbacoas.',
	},
	{
		title: 'Huevos, caza y conejos',
		text: 'La tarjeta del local resume el surtido: «pollería, pavos, aves, caza, conejos, huevos, elaborados, especiales para barbacoas, hamburguesas, etc.»',
	},
	{
		title: 'Servicio a domicilio',
		text: 'La misma tarjeta anuncia «servicio a domicilio, restaurantes y hogares». Se pide por teléfono: 915 79 15 82 o 917 33 02 20.',
	},
];

/** Lo que ofrece el local; sin precios estables, que cambian en tienda. */
export const MENU = [
	{
		title: 'Aves y carnes',
		items: [
			{ name: 'Pollo', note: 'entero o troceado; la vitrina lo muestra con carteles de oferta' },
			{ name: 'Pavo', note: 'en la lista de productos de la tarjeta del local' },
			{ name: 'Aves', note: 'el surtido de pollería de toda la vida' },
			{ name: 'Conejo', note: 'también en la tarjeta' },
			{ name: 'Caza', note: 'la tarjeta la anuncia junto a las aves' },
		],
	},
	{
		title: 'Elaborados',
		items: [
			{ name: 'Empanadas', note: 'en las bandejas del mostrador' },
			{ name: 'Croquetas', note: 'junto a las empanadas' },
			{ name: 'Albóndigas', note: 'en las bandejas de elaborados' },
			{ name: 'Alitas y hamburguesas', note: 'para barbacoa, según la tarjeta' },
		],
	},
	{
		title: 'Despensa',
		items: [{ name: 'Huevos', note: 'en cartones y cajas, junto al mostrador' }],
	},
	{
		title: 'A domicilio',
		items: [
			{
				name: 'Restaurantes y hogares',
				note: 'el servicio que anuncia la tarjeta; se pide por teléfono',
			},
		],
	},
];

/** Las dos reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Muy buen genero, trato excelente y profesional.',
		valor: 5,
	},
	{
		texto: 'Pollería de toda la vida, productos de calidad y trato esquisito de Ramón.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Boutique del Pollo #2?',
		a: 'En la calle del Marqués de Viana, 4, Tetuán, 28039 Madrid. El mapa de esta página abre las coordenadas exactas (40.4612244, -3.6988966) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 9:00 a 14:00 y de 17:30 a 20:30 de lunes a viernes, y de 9:00 a 14:00 el sábado. El domingo cierra. El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pollo entero o troceado, pavos, aves, caza, conejos, huevos y elaborados como empanadas, croquetas, albóndigas, alitas o preparados para barbacoas. La tarjeta del local añade hamburguesas y especiales para barbacoa.',
	},
	{
		q: '¿Hay servicio a domicilio?',
		a: 'Sí. La tarjeta del establecimiento anuncia «servicio a domicilio, restaurantes y hogares». Se pide por teléfono, en el 915 79 15 82; la tarjeta incluye además el 917 33 02 20. No consta pedido online.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica una lista de precios. En las fotos se ven carteles de oferta por kilos que cambian según el día, así que el precio se consulta por teléfono o en el mostrador.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo marca que no hay aparcamiento adaptado para sillas de ruedas. No publica más datos de acceso, así que conviene llamar antes si lo necesitas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 5,0 sobre 5 con 5 reseñas en el momento de consultar la ficha (octubre de 2026). Las dos opiniones que muestra elogian el género, el trato y la calidad de la pollería.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales; la tarjeta que aparece en sus fotos dice «búscanos en Google».',
	},
];
