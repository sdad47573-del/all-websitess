/**
 * Datos de Restaurante Chino Dragón — C. Andrómeda, 24, Teatinos-Universidad,
 * 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: Restaurante Chino Dragón, 36.7239855,-4.4761329,
 *   feature 0xd72f7346cc0f0f9:0x65b9559da33b236f (nombre, dirección, categoría,
 *   horario, teléfono, nota, reseñas y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 * - Carta publicada por la propia casa en su ficha de Uber Eats, usada solo para
 *   nombrar platos; los precios que aparecen aquí son los de esa plataforma y
 *   pueden no coincidir con los del local.
 *
 * Lo que el sitio NO inventa: no hay web propia ni carta en Google Maps; no se
 * publican precios del local ni se afirman servicios que la ficha no liste.
 */

export const BUSINESS = {
	name: 'Restaurante Chino Dragón',
	shortName: 'Dragón',
	mark: '龍',
	street: 'C. Andrómeda, 24',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Teatinos-Universidad',
	postalCode: '29010',
	country: 'ES',
	phone: '+34 952 27 76 09',
	phoneHref: '+34952277609',
	rating: 3.6,
	reviewsCount: 398,
	siteUrl: 'https://restaurante-chino-dragon.vercel.app',
	geo: { lat: 36.7239855, lng: -4.4761329 },
	featureId: '0xd72f7346cc0f0f9:0x65b9559da33b236f',
	placeId: 'ChIJ-fDAbDT3cg0RbyM7o51VuWU',
	cid: '7329984004058981231',
	/** Categoría con la que Google clasifica el local. */
	category: 'Restaurante chino',
	categories: ['Restaurante chino'],
	tagline: 'Cocina china en Teatinos',
	description:
		'Restaurante Chino Dragón, cocina china en la calle Andrómeda 24, Teatinos-Universidad, Málaga. Abre todos los días de 12:30 a 16:30 y de 20:00 a 24:00. 3,6 sobre 5 en Google con 398 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Chino+Drag%C3%B3n/@36.7239855,-4.4761329,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7346cc0f0f9:0x65b9559da33b236f!8m2!3d36.7239855!4d-4.4761329!16s%2Fg%2F11clgf89ss',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7239855%2C-4.4761329',
	embed: 'https://maps.google.com/maps?q=36.7239855,-4.4761329&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: todos los días, comida de 12:30 a
 * 16:30 y cena de 20:00 a 24:00. La ficha avisa de que en festivos puede
 * cambiar (por ejemplo, el Día de Todos los Santos).
 */
export const HOURS = [
	{ day: 'Lunes', value: '12:30–16:30 · 20:00–24:00' },
	{ day: 'Martes', value: '12:30–16:30 · 20:00–24:00' },
	{ day: 'Miércoles', value: '12:30–16:30 · 20:00–24:00' },
	{ day: 'Jueves', value: '12:30–16:30 · 20:00–24:00' },
	{ day: 'Viernes', value: '12:30–16:30 · 20:00–24:00' },
	{ day: 'Sábado', value: '12:30–16:30 · 20:00–24:00' },
	{ day: 'Domingo', value: '12:30–16:30 · 20:00–24:00' },
];

/**
 * Señales de identidad que sí constan: la categoría de la ficha, el barrio, el
 * horario partido, el teléfono y los dos datos de accesibilidad que Google
 * marca como disponibles.
 */
export const SERVICIOS = [
	'Cocina china',
	'Teatinos-Universidad',
	'Menú del día',
	'12:30–16:30 · 20:00–24:00',
	'Acceso adaptado',
	'+34 952 27 76 09',
];

/**
 * El menú del día está copiado de la carta que aparece fotografiada en la ficha
 * de Google del propio restaurante: 8,75 €, con primero, arroz o tallarines,
 * plato a elegir, postre y bebida, y suplemento de 1,25 € por cambiar de plato.
 * La carta de platos sueltos se apoya en esa misma carta fotografiada y en la
 * carta de reparto de la casa; no se inventan precios del local.
 */
export const MENU = [
	{
		title: 'Menú del día · 8,75 €',
		items: [
			{ name: 'Ensalada china o rollo de primavera', note: 'primer plato, a elegir' },
			{ name: 'Arroz frito o tallarines tres delicias', note: 'segundo plato, a elegir' },
			{
				name: 'Plato principal a elegir',
				note: 'ternera con verdura, cebolla o salsa de ostras; pollo agridulce, al curry, con almendras o con verduras; cerdo agridulce o con verdura',
			},
			{ name: 'Postre y bebida', note: 'flan, helado, café o té; cerveza, refresco o agua' },
			{ name: 'Cambiar de plato', note: 'suplemento de 1,25 €, según la carta de la casa' },
		],
	},
	{
		title: 'Arroces y tallarines',
		items: [
			{ name: 'Arroz frito tres delicias', note: 'con huevo, jamón, guisantes y zanahoria, en las fotos de la mesa' },
			{ name: 'Tallarines fritos tres delicias', note: 'con tiras de carne y col, también en las fotos' },
			{ name: 'Arroz blanco', note: 'acompañamiento de los guisos de wok' },
			{ name: 'Tallarines con verduras', note: 'la familia de tallarines de la carta' },
		],
	},
	{
		title: 'Carne y pollo',
		items: [
			{ name: 'Ternera con verdura, cebolla u ostras', note: 'los tres guisos de ternera del menú del día' },
			{ name: 'Pollo agridulce', note: 'el clásico de la casa, con pimiento y piña' },
			{ name: 'Pollo con curry', note: 'del plato a elegir del menú' },
			{ name: 'Pollo con almendras', note: 'con setas, bambú y zanahoria en las fotos' },
			{ name: 'Cerdo agridulce', note: 'también entre los platos a elegir del menú' },
		],
	},
	{
		title: 'Entrantes y marisco',
		items: [
			{ name: 'Rollo de primavera', note: 'relleno de col, frito y con salsa agridulce' },
			{ name: 'Ensalada china', note: 'la alternativa al rollo en el menú del día' },
			{ name: 'Gambas rebozadas', note: 'aparecen junto al arroz en una de las fotos' },
			{ name: 'Galletas de gambas', note: 'el cestillo de la mesa fotografiada' },
			{ name: 'Langostinos con setas chinas y bambú', note: 'de la carta de reparto de la casa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Chino Dragón?',
		a: 'En la calle Andrómeda 24, en el barrio de Teatinos-Universidad, 29010 Málaga. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días con horario partido: comidas de 12:30 a 16:30 y cenas de 20:00 a 24:00. La ficha de Google avisa de que en festivos puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Hay que reservar?',
		a: `La ficha no publica un sistema de reservas. El canal que sí consta es el teléfono ${BUSINESS.phone}; llama para mesa, para recoger o para preguntar por el menú del día.`,
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El menú del día que aparece fotografiado en la ficha de Google cuesta 8,75 € e incluye primero, arroz o tallarines, plato principal, postre y bebida. Cambiar algún plato tiene un suplemento de 1,25 €. Los precios de la carta pueden cambiar; para una cifra cerrada, llama al restaurante.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'La casa mantiene carta de reparto en Uber Eats, donde se puede pedir para entrega o recogida. Para pedidos propios, lo más directo es llamar al restaurante.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados. Lo que no marca es aparcamiento adaptado, así que conviene llamar antes si se necesita plaza reservada.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina china de wok y arroces: rollos de primavera, sopas y ensaladas chinas, arroz y tallarines tres delicias, langostinos con setas, curry o judías negras, pollo con verduras y menús para compartir. El detalle cambia según la temporada, por eso no se reproduce aquí una carta cerrada.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del restaurante y ofrece la opción de añadir una, lo que confirma que no hay ninguna publicada. Esta página es informativa y no es un canal oficial de reservas.',
	},
];
