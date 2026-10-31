/**
 * Datos de Comida Y Sabor — C. de la Pueblanueva, 27, Villa de Vallecas,
 * 28051 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Comida Y Sabor, 40.3710364,-3.6102228,
 *   feature 0xd4225dceddc7f95:0xf2d59114f0bc00a2.
 * - Nombre, dirección, categoría, teléfono, valoración, reseñas y horario:
 *   ficha pública de Google consultada en octubre de 2026.
 * - Platos y servicios: reseñas de la ficha y la ficha pública del local en
 *   directorios de restaurantes, consultadas en octubre de 2026.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica carta
 * con precios, así que no hay tarifas. El menú del día cambia a diario.
 */

export const BUSINESS = {
	name: 'Comida Y Sabor',
	fullName: 'Comida Y Sabor · menús caseros y pollos a la leña en Villa de Vallecas',
	shortName: 'Comida Y Sabor',
	mark: 'C',
	street: 'C. de la Pueblanueva, 27',
	neighbourhood: 'Villa de Vallecas',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	regionName: 'Comunidad de Madrid',
	postalCode: '28051',
	country: 'ES',
	phone: '912 32 70 46',
	phoneHref: '+34912327046',
	rating: 4.1,
	reviewsCount: 339,
	siteUrl: 'https://comida-y-sabor.vercel.app',
	geo: { lat: 40.3710364, lng: -3.6102228 },
	featureId: '0xd4225dceddc7f95:0xf2d59114f0bc00a2',
	placeId: 'ChIJlX_c7dwlQg0RogC88BSR1fI',
	cid: '17498051446342156450',
	plusCode: '8CGR99CQ+CW',
	category: 'Restaurante',
	tagline: 'Menús caseros diarios y pollos a la leña en Villa de Vallecas',
	description:
		'Comida Y Sabor, restaurante de menús caseros y pollos asados a la leña en la calle Pueblanueva 27, Villa de Vallecas (28051 Madrid). Menú del día con postre, croquetas caseras, torreznos, cocido a la leña y pan de masa madre. Abre de martes a domingo de 10:00 a 16:00, lunes cerrado. 4,1 sobre 5 en Google con 339 reseñas.',
	hasPublicWebsite: false,
	/** Servicios que la información pública del local detalla. */
	servicesNote:
		'La información pública del local menciona recogida en local, entrega a domicilio y accesibilidad para movilidad reducida.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Comida+Y+Sabor/@40.3710364,-3.6102228,17z/data=!3m1!4b1!4m6!3m5!1s0xd4225dceddc7f95:0xf2d59114f0bc00a2!8m2!3d40.3710364!4d-3.6102228!16s%2Fg%2F11gxmv14nx?authuser=0&hl=es&entry=ttu',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3710364%2C-3.6102228',
	embed: 'https://maps.google.com/maps?q=40.3710364,-3.6102228&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3710364,-3.6102228',
};

/** Horario publicado en la ficha de Google: martes a domingo, 10:00–16:00. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '10:00–16:00' },
	{ day: 'Miércoles', value: '10:00–16:00' },
	{ day: 'Jueves', value: '10:00–16:00' },
	{ day: 'Viernes', value: '10:00–16:00' },
	{ day: 'Sábado', value: '10:00–16:00' },
	{ day: 'Domingo', value: '10:00–16:00' },
];

/** Señales de identidad que constan en la ficha y en su información pública. */
export const SERVICIOS = [
	'Pollo a la leña',
	'Menú del día',
	'Croquetas caseras',
	'Cocido a la leña',
	'Pan de masa madre',
	'Comida para llevar',
];

/** Oferta que consta en la información pública del local. Sin precios. */
export const MENU = [
	{
		title: 'Pollos a la leña',
		items: [
			{
				name: 'Pollo asado a la leña de encina',
				note: 'con patatas asadas o fritas y salsa · la especialidad de la casa',
			},
		],
	},
	{
		title: 'Menú del día',
		items: [
			{
				name: 'Menú completo',
				note: 'primero, segundo y postre · cambia cada día y se consulta en el local',
			},
		],
	},
	{
		title: 'Platos de cuchara',
		items: [
			{ name: 'Cocido a la leña', note: 'miércoles y jueves · conviene reservarlo' },
			{ name: 'Lentejas', note: 'plato de cuchara' },
			{ name: 'Garbanzos con espinacas', note: 'plato de cuchara' },
			{ name: 'Judías', note: 'guiso de la casa' },
			{ name: 'Pucheros', note: 'cocina de siempre' },
			{ name: 'Pasta', note: 'plato de la casa' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{
				name: 'Croquetas caseras',
				note: 'de jamón, morcilla, cocido y queso',
			},
			{ name: 'Torreznos', note: 'crujientes · ración abundante' },
			{ name: 'Berenjenas rellenas gratinadas', note: 'de la vitrina · con tomate y queso' },
			{ name: 'Pimientos asados', note: 'de la vitrina' },
			{ name: 'Empanadillas', note: 'de la vitrina' },
			{ name: 'Tortilla', note: 'casera' },
			{ name: 'Ensaladilla', note: 'de la casa' },
			{ name: 'Paellas', note: 'según el día' },
		],
	},
	{
		title: 'Pan y postres',
		items: [
			{ name: 'Pan de masa madre', note: 'se agota pronto · conviene reservarlo' },
			{ name: 'Natillas', note: 'repostería casera' },
			{ name: 'Tarta de queso', note: 'repostería casera' },
			{ name: 'Torrijas', note: 'de temporada' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Comida Y Sabor?',
		a: 'En la calle de la Pueblanueva, 27, en Villa de Vallecas, 28051 Madrid. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de martes a domingo de 10:00 a 16:00 y cierra los lunes. En festivos el horario puede cambiar, así que conviene confirmarlo por teléfono antes de desplazarse.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollos asados a la leña de encina con patatas y salsa, menú del día con primero, segundo y postre, platos de cuchara, croquetas caseras de jamón, morcilla, cocido y queso, torreznos, empanadillas, tortilla, ensaladilla, paellas, pan de masa madre y postres caseros.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí: primero, segundo y postre. Cambia cada día y el precio se confirma en el local o llamando al 912 32 70 46, porque no está publicado en la ficha.',
	},
	{
		q: '¿Cuándo hay cocido a la leña?',
		a: 'La información pública del local lo sitúa los miércoles y jueves. Se prepara de forma tradicional y conviene reservarlo, porque se agota.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. La información pública del local menciona recogida en local y entrega a domicilio. El teléfono de la ficha, 912 32 70 46, es el canal que consta para encargar.',
	},
	{
		q: '¿Hay que reservar el pan o el cocido?',
		a: 'Sí, conviene. El pan de masa madre suele agotarse y el cocido de miércoles y jueves también, así que lo mejor es llamar con antelación al 912 32 70 46.',
	},
	{
		q: '¿Hay opciones vegetarianas o accesibilidad?',
		a: 'La información pública del local indica que dispone de accesibilidad para movilidad reducida y de opciones vegetarianas, aunque pueden ser limitadas. Si necesitas una condición concreta, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,1 sobre 5 con 339 reseñas en Google, según la ficha consultada en octubre de 2026.',
	},
	{
		q: '¿Tiene web propia o redes sociales?',
		a: 'La ficha de Google no enlaza una web propia del local. Esta página es informativa y no es un canal oficial de reservas ni de pedidos; el teléfono y la ficha de Google son los canales que constan.',
	},
];
