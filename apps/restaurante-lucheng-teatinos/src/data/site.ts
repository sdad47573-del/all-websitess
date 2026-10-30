/**
 * Datos de Restaurante Lucheng Teatinos — C. de Demóstenes, 15,
 * Teatinos-Universidad, 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: Restaurante Lucheng Teatinos,
 *   36.7195828,-4.478121, feature 0xd72f74a7fb322ed:0x634b7cc60440b2fd
 *   (nombre, dirección, categoría, horario, teléfono, nota, reseñas y
 *   accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica carta.
 * No se atribuyen a este local los precios de plataformas de reparto.
 */

export const BUSINESS = {
	name: 'Restaurante Lucheng Teatinos',
	shortName: 'Lucheng',
	mark: '鹿',
	street: 'C. de Demóstenes, 15',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Teatinos-Universidad',
	postalCode: '29010',
	country: 'ES',
	phone: '+34 952 27 40 54',
	phoneHref: '+34952274054',
	rating: 4,
	reviewsCount: 548,
	siteUrl: 'https://restaurante-lucheng-teatinos.vercel.app',
	geo: { lat: 36.7195828, lng: -4.478121 },
	featureId: '0xd72f74a7fb322ed:0x634b7cc60440b2fd',
	placeId: 'ChIJ7SKzf0r3cg0R_bJABMZ8S2M',
	cid: '7154949622924882685',
	/** Categoría con la que Google clasifica el local. */
	category: 'Restaurante chino',
	categories: ['Restaurante chino'],
	tagline: 'Cocina china en Teatinos',
	description:
		'Restaurante Lucheng Teatinos, cocina china en la calle de Demóstenes 15, Teatinos-Universidad, Málaga. Abre todos los días de 13:00 a 16:15 y de 20:00 a 23:30. 4,0 sobre 5 en Google con 548 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Lucheng+Teatinos/@36.7195828,-4.478121,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f74a7fb322ed:0x634b7cc60440b2fd!8m2!3d36.7195828!4d-4.478121!16s%2Fg%2F1tjcqtc9',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7195828%2C-4.478121',
	embed: 'https://maps.google.com/maps?q=36.7195828,-4.478121&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google. El martes la cena empieza media hora
 * más tarde (20:30). La ficha avisa de que en festivos puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '13:00–16:15 · 20:00–23:30' },
	{ day: 'Martes', value: '13:00–16:15 · 20:30–23:30' },
	{ day: 'Miércoles', value: '13:00–16:15 · 20:00–23:30' },
	{ day: 'Jueves', value: '13:00–16:15 · 20:00–23:30' },
	{ day: 'Viernes', value: '13:00–16:15 · 20:00–23:30' },
	{ day: 'Sábado', value: '13:00–16:15 · 20:00–23:30' },
	{ day: 'Domingo', value: '13:00–16:15 · 20:00–23:30' },
];

/**
 * Señales de identidad que sí constan: categoría, barrio, horario partido,
 * teléfono y los dos datos de accesibilidad que Google marca.
 */
export const SERVICIOS = [
	'Cocina china',
	'Teatinos-Universidad',
	'Comidas y cenas todos los días',
	'Acceso adaptado',
	'Asientos adaptados',
	'+34 952 27 40 54',
];

/**
 * La ficha de Google no publica carta ni precios de este local. Los platos que
 * se nombran aquí son los que aparecen en las fotografías del perfil (ensalada
 * china, arroz frito tres delicias, ternera con cebolla, pollo con almendras,
 * rollo de primavera y flan) más la familia de platos de wok de la casa. No se
 * dan precios ni se presenta esto como la carta oficial.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Ensalada china', note: 'lechuga, zanahoria, cebolla y surimi, en una de las fotos' },
			{ name: 'Rollo de primavera', note: 'frito y relleno de col, también en las fotos' },
			{ name: 'Sopas chinas', note: 'la casa mantiene la familia de sopas de huevo, wan tun y agripicante' },
			{ name: 'Entrantes fritos para compartir', note: 'el aperitivo habitual antes de los arroces' },
		],
	},
	{
		title: 'Arroces y tallarines',
		items: [
			{ name: 'Arroz frito tres delicias', note: 'con huevo, jamón, zanahoria y guisantes, en las fotos' },
			{ name: 'Tallarines fritos tres delicias', note: 'con gambas, carne y verduras' },
			{ name: 'Tallarines con ternera', note: 'tiras de ternera salteadas al wok' },
			{ name: 'Arroz blanco', note: 'acompañamiento de los guisos' },
		],
	},
	{
		title: 'Carne y pollo',
		items: [
			{ name: 'Ternera con cebolla', note: 'tiras de ternera con cebolla y salsa, en las fotos' },
			{ name: 'Pollo con almendras', note: 'con setas, zanahoria y almendra' },
			{ name: 'Pollo con verduras', note: 'salteado de pollo, setas y pimiento verde' },
			{ name: 'Cerdo agridulce', note: 'el clásico de la cocina china de la casa' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Flan con nata', note: 'servido en copa de metal, en una de las fotos' },
			{ name: 'Helado', note: 'postre frío de la casa' },
			{ name: 'Café o té', note: 'para cerrar la comida' },
			{ name: 'Menús para compartir', note: 'la casa prepara combinaciones para grupos; pregunta por teléfono' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Lucheng Teatinos?',
		a: 'En la calle de Demóstenes 15, en el barrio de Teatinos-Universidad, 29010 Málaga. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días con horario partido: comidas de 13:00 a 16:15 y cenas de 20:00 a 23:30. El martes la cena empieza a las 20:30. La ficha de Google avisa de que en festivos puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Cómo se reserva o se pide?',
		a: `La ficha no publica un sistema de reservas en línea. El canal que sí consta es el teléfono ${BUSINESS.phone}; llama para reservar mesa o para preguntar por la carta del día.`,
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina china de wok y arroces: ensalada china, rollos de primavera, sopas, arroz y tallarines tres delicias, ternera con cebolla, pollo con almendras, pollo con verduras, cerdo agridulce y flan con nata, entre otras cosas. Es la carta que se ve en las fotos y reseñas del perfil, no una carta oficial.',
	},
	{
		q: '¿Tiene carta publicada?',
		a: 'Google Maps no publica la carta de este local y la ficha no enlaza ninguna web propia. Los platos que se nombran en esta página son los de la cocina china de la casa y los que aparecen en las fotografías y reseñas del perfil; no se dan precios porque no hay carta oficial de este restaurante a la vista.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados. Lo que no marca es aparcamiento adaptado, así que conviene llamar antes si se necesita una plaza reservada.',
	},
	{
		q: '¿Cuántas reseñas tiene?',
		a: 'Tiene 4,0 sobre 5 con 548 reseñas en Google, según la ficha consultada.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del restaurante y ofrece la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas.',
	},
];
