/**
 * Datos de Bar Restaurante 7 Vidas — C. Latoneros, 21, 12414 Algimia de
 * Almonacid (Castellón), en la comarca del Alto Palancia.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar Restaurante 7 Vidas», 39,9127778 /
 *   -0,4444444, feature 0xd60775beb1d799d:0x720472e1a89f8f7e (dirección,
 *   teléfono, categorías, horario, nota, reseñas, accesibilidad y fotos del
 *   perfil).
 * - Reseñas publicadas en la ficha de Google.
 *
 * La ficha no publica web ni carta con precios.
 */

export const BUSINESS = {
	name: 'Bar Restaurante 7 Vidas',
	shortName: '7 Vidas',
	mark: '7V',
	street: 'C. Latoneros, 21',
	city: 'Algimia de Almonacid',
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	postalCode: '12414',
	country: 'ES',
	phoneDisplay: '695 85 88 36',
	phoneHref: 'tel:+34695858836',
	rating: 4,
	reviewsCount: 349,
	siteUrl: 'https://bar-restaurante-7-vidas.vercel.app',
	geo: { lat: 39.9127778, lng: -0.4444444 },
	featureId: '0xd60775beb1d799d:0x720472e1a89f8f7e',
	placeId: 'ChIJnXkd61t3YA0Rfo-fqOFyBHI',
	cid: '8215817933752864638',
	/** Categorías con las que Google describe el local. */
	categories: ['Bar', 'Pub', 'Restaurante', 'Restaurante de cocina española'],
	tagline: 'Bar restaurante en Algimia de Almonacid',
	description:
		'Bar restaurante 7 Vidas, en Algimia de Almonacid (Castellón): menús, bocadillos y carajillo en pleno Alto Palancia. Abre todos los días. Tel. 695 85 88 36.',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Restaurante+7+Vidas/@39.9127778,-0.4444444,17z/data=!3m1!4b1!4m6!3m5!1s0xd60775beb1d799d:0x720472e1a89f8f7e!8m2!3d39.9127778!4d-0.4444444!16s%2Fg%2F1tdxxbzn',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=39.9127778%2C-0.4444444',
	embed: 'https://maps.google.com/maps?q=39.9127778,-0.4444444&z=17&hl=es&output=embed',
} as const;

/** Horario de la ficha de Google (consultado en octubre de 2026). */
export const HOURS = [
	{ day: 'Lunes', value: '09:00–23:00' },
	{ day: 'Martes', value: '09:00–23:00' },
	{ day: 'Miércoles', value: '09:00–23:00' },
	{ day: 'Jueves', value: '09:00–23:00' },
	{ day: 'Viernes', value: '09:00–23:00' },
	{ day: 'Sábado', value: '08:00–24:00' },
	{ day: 'Domingo', value: '08:00–24:00' },
];

/** Señas de identidad que constan en la ficha de Google. */
export const SERVICIOS = [
	'Bar',
	'Restaurante',
	'Cocina española',
	'Terraza en la calle',
	'Menú del día',
	'Bocadillos',
	'Acceso adaptado',
	'Aseo adaptado',
];

/**
 * Platos que aparecen en las fotos del perfil y en las reseñas. La ficha no
 * publica una carta con precios, así que no se inventan ni platos ni tarifas.
 */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{
				name: 'Patatas bravas',
				note: 'en cazuela de barro, con alioli y pimentón',
			},
			{
				name: 'Calamares a la romana',
				note: 'con su rodaja de limón, recién fritos',
			},
		],
	},
	{
		title: 'Bocadillos y menú',
		items: [
			{
				name: 'Bocadillos',
				note: 'de los que una reseña describe como «buenos bocadillos»',
			},
			{
				name: 'Menú del día',
				note: 'primero, segundo, bebida y postre; cambia cada día',
			},
		],
	},
	{
		title: 'Para terminar',
		items: [
			{
				name: 'Cremaet',
				note: 'café con brandy y azúcar, el de la foto del perfil',
			},
			{
				name: 'Carajillo',
				note: 'el que una reseña deja por escrito: «el carajillo bien»',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está 7 Vidas?',
		a: 'En la calle Latoneros, 21, en Algimia de Almonacid (12414 Castellón), un pueblo del Alto Palancia en la vertiente occidental del Parque Natural de la Sierra de Espadán. El mapa de esta página abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 9:00 a 23:00. Sábados y domingos abre antes y cierra más tarde: de 8:00 a 24:00. No cierra ningún día de la semana, aunque en festivos conviene confirmar por teléfono.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Sí, por teléfono en el 695 85 88 36. Los fines de semana se llena de gente de ruta, así que si vais en grupo o queréis mesa a una hora concreta, mejor llamar antes.',
	},
	{
		q: '¿Qué se come?',
		a: 'Menú del día, bocadillos y tapas de bar: patatas bravas y calamares a la romana, entre otras. Para terminar, cremaet o carajillo. La ficha de Google no publica la carta con precios; el menú se consulta en la barra.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, una terraza en la calle con mesas y sillas de metal, la que se ve en las fotos de la fachada. Dentro hay un comedor amplio, con ventanales y vistas a la sierra.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y aseo adaptado.',
	},
];

/** Reseñas publicadas en la ficha de Google. */
export const REVIEWS = [
	'Local muy reformado, buenos bocadillos y el carajillo bien.',
	'Menús baratos y muy ricos.',
];
