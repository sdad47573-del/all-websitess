/**
 * Datos de Restaurante O Telheiro — Estrada da Quinta de Matos 9,
 * 2630-260 Arruda dos Vinhos (Lisboa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante O Telheiro», 38.9991947,-9.0821825,
 *   feature 0xd18d6664a56c5d5:0x33216de27453cc96 (dirección, teléfono, horario,
 *   categoría, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha NO publica sitio web ni descripción del local, y tampoco carta con
 * precios. Esta web no inventa ninguno de esos datos: el menú se apoya en las
 * fotos del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante O Telheiro',
	shortName: 'O Telheiro',
	mark: 'OT',
	street: 'Estrada da Quinta de Matos, 9',
	city: 'Arruda dos Vinhos',
	region: 'Lisboa',
	regionName: 'Portugal',
	postalCode: '2630-260',
	country: 'PT',
	phoneDisplay: '918 870 783',
	phoneHref: 'tel:+351918870783',
	rating: 4.2,
	reviewsCount: 219,
	siteUrl: 'https://o-telheiro.vercel.app',
	geo: { lat: 38.9991947, lng: -9.0821825 },
	featureId: '0xd18d6664a56c5d5:0x33216de27453cc96',
	placeId: 'ChIJ1cVWSmbWGA0RlsxTdOJtITM',
	cid: '3684346789547461782',
	/** Categoría con la que Google describe el local. */
	googleBlurb: 'Restaurante',
	/** La ficha no publica descripción del local. */
	ownDescription: '',
	tagline: 'Restaurante y snack-bar de campo en Arruda dos Vinhos',
	description:
		'Restaurante O Telheiro, restaurante y snack-bar en la Estrada da Quinta de Matos 9 (2630-260 Arruda dos Vinhos): parrilla, pescado, platos de la casa y celebraciones. Abre de 8:30 a 19:00, domingo cerrado. 4,2 en Google con 219 reseñas. Tel. 918 870 783.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+O+Telheiro/@38.9991947,-9.0821825,17z/data=!3m1!4b1!4m6!3m5!1s0xd18d6664a56c5d5:0x33216de27453cc96!8m2!3d38.9991947!4d-9.0821825!16s%2Fg%2F11dxd1fc2y',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9991947%2C-9.0821825',
	embed: 'https://maps.google.com/maps?q=38.9991947,-9.0821825&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: todos los días menos el domingo. */
export const HOURS = [
	{ day: 'Lunes', value: '8:30–19:00' },
	{ day: 'Martes', value: '8:30–19:00' },
	{ day: 'Miércoles', value: '8:30–19:00' },
	{ day: 'Jueves', value: '8:30–19:00' },
	{ day: 'Viernes', value: '8:30–19:00' },
	{ day: 'Sábado', value: '8:30–19:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Señas de identidad que constan en la ficha y se ven en las fotos del perfil. */
export const SERVICIOS = [
	'Restaurante y snack-bar',
	'Parrilla',
	'Pescado fresco',
	'Platos de la casa',
	'Vino de la casa',
	'Celebraciones y banquetes',
	'Accesible',
];

/**
 * La ficha no publica carta ni precios. Lo que sigue sale de las fotos del
 * perfil: la parrilla, los platos de la casa, la mesa de celebración y los postres.
 */
export const MENU = [
	{
		title: 'De la parrilla',
		items: [
			{ name: 'Sardinas asadas', note: 'a la brasa, con patata cocida y un chorro de aceite' },
			{
				name: 'Pulpo asado',
				note: 'con patata al horno, aceite de oliva, ajo laminado y perejil',
			},
			{
				name: 'Costillas con alubias',
				note: 'plato de la casa con arroz, col y zanahoria',
			},
		],
	},
	{
		title: 'Platos de la casa',
		items: [
			{
				name: 'Plato del día con huevo',
				note: 'arroz, patatas fritas, ensalada y huevo frito, como en las fotos',
			},
			{
				name: 'Carne con patatas y setas',
				note: 'guiso de la casa, servido en plato hondo con su salsa',
			},
			{ name: 'Ensalada de tomate y cebolla', note: 'aliñada con aceite, en fuente de acero' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Mousse de frutos rojos', note: 'servida en copa con una frambuesa' },
			{ name: 'Tarta por encargo', note: 'las fotos muestran tartas personalizadas para celebraciones' },
			{ name: 'Vino de la casa', note: 'tinto en jarra, de la comarca de Arruda' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está O Telheiro?',
		a: 'En la Estrada da Quinta de Matos, 9, en Arruda dos Vinhos (2630-260), en el distrito de Lisboa. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de 8:30 a 19:00 de lunes a sábado. El domingo cierra. Es el horario que publica su ficha de Google, que avisa de que puede cambiar en festivos.',
	},
	{
		q: '¿Qué se come?',
			a: 'Cocina portuguesa de campo, con la parrilla como centro: sardinas asadas, pulpo con patata al horno, costillas con alubias y platos del día con arroz, patata y ensalada. Las fotos del perfil muestran estos platos, además de la mousse de frutos rojos y el vino tinto de la casa.',
	},
	{
		q: '¿Se puede reservar?',
			a: 'La ficha de Google no ofrece reserva online, pero sí publica teléfono: se reserva llamando al 918 870 783. Esta web no tiene formulario.',
	},
	{
		q: '¿Se pueden celebrar comidas o cumpleaños?',
			a: 'Las fotos del perfil muestran un comedor preparado para banquetes, con mesas largas, y tartas personalizadas con el nombre del restaurante. Para una celebración, llama al 918 870 783 y pregunta por la disponibilidad de la sala.',
	},
	{
		q: '¿Es un restaurante o un snack-bar?',
			a: 'Las dos cosas: en la fachada se lee «Restaurante • Snack-Bar O Telheiro». Abre desde primera hora de la mañana (8:30), así que sirve tanto para un café o un snack como para comer.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
			a: 'Su ficha de Google marca entrada, asientos, aseo y aparcamiento adaptados para personas en sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
			a: '4,2 sobre 5 con 219 reseñas. Es la nota de un restaurante de carretera con clientela fija.',
	},
];
