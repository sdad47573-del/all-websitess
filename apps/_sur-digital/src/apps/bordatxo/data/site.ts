/**
 * Datos de BORDATXO — Zubiaurrenea Kalea, 5 (20170 Usurbil, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: BORDATXO (Bordatxo taberna), 43.2712369,
 *   -2.0498038, feature 0xd51b120f3804865:0x1fd16958ee470b44 (dirección,
 *   teléfono, horario, categoría, nota, reseñas, accesibilidad y si admite
 *   perros).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La barra» resume lo que citan sus reseñas y lo que se ve en las
 * fotos del perfil.
 */

export const BUSINESS = {
	name: 'BORDATXO',
	shortName: 'Bordatxo',
	mark: 'BO',
	street: 'Zubiaurrenea Kalea, 5',
	city: 'Usurbil',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20170',
	country: 'ES',
	phoneDisplay: '943 37 10 42',
	phoneHref: 'tel:+34943371042',
	rating: 4.4,
	reviewsCount: 523,
	siteUrl: 'https://www.sur-digital.com/bordatxo',
	geo: { lat: 43.2712369, lng: -2.0498038 },
	featureId: '0xd51b120f3804865:0x1fd16958ee470b44',
	placeId: 'ChIJZUiA8yCxUQ0RRAtH7lhp0R8',
	cid: '2292729515983964996',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/BORDATXO/@43.2712369,-2.0498038,17z/data=!3m1!4b1!4m6!3m5!1s0xd51b120f3804865:0x1fd16958ee470b44!8m2!3d43.2712369!4d-2.0498038!16s%2Fg%2F11c6cyhvpw',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2712369%2C-2.0498038',
	embed: 'https://maps.google.com/maps?q=43.2712369,-2.0498038&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: de lunes a viernes de 7:00 a 1:00 y los fines
 * de semana de 8:00 a 1:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–1:00' },
	{ day: 'Martes', value: '7:00–1:00' },
	{ day: 'Miércoles', value: '7:00–1:00' },
	{ day: 'Jueves', value: '7:00–1:00' },
	{ day: 'Viernes', value: '7:00–1:00' },
	{ day: 'Sábado', value: '8:00–1:00' },
	{ day: 'Domingo', value: '8:00–1:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Llegamos por casualidad y nos quedamos al ver sus pintxos y el ambientazo.',
	},
	{
		rating: 4,
		text: 'Ambiente familiar y de cuadrillas, con buena carta de pintxos y raciones.',
	},
	{
		rating: 5,
		text: 'Buen trato, camareros agradables y buen sitios para desayunar y comer pintxo.',
	},
];

/**
 * Servicios y señas de identidad que sí constan: la categoría con la que Google
 * clasifica el local, su horario, los datos de accesibilidad y que admite perros.
 */
export const SERVICIOS = [
	'Bar de tapas',
	'Pintxos y raciones',
	'Desayunos desde las 7:00',
	'Terraza',
	'Se admiten perros',
	'Aseo adaptado',
	'Acceso para sillas de ruedas',
];

/**
 * La barra: la ficha no publica carta ni precios. Todo lo que aparece aquí lo
 * dicen sus reseñas o se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Pintxos de la barra',
		items: [
			{
				name: 'Pintxo de jamón',
				note: 'lonchas de jamón curado sobre pan, en las fotos del perfil',
			},
			{
				name: 'Pintxo de chorizo',
				note: 'chorizo a la plancha sobre pan, en las fotos del perfil',
			},
			{ name: 'Bocadillos y pintxos de tortilla', note: 'en la bandeja de la barra' },
			{ name: 'Croquetas', note: 'servidas de tres en tres, en las fotos del perfil' },
		],
	},
	{
		title: 'Raciones y platos',
		items: [
			{ name: 'Panceta a la plancha con patatas y huevos', note: 'en las fotos del perfil' },
			{ name: 'Raciones', note: '«buena carta de pintxos y raciones», según una reseña' },
			{ name: 'Pintxos surtidos', note: '«nos quedamos al ver sus pintxos», cuenta otra reseña' },
		],
	},
	{
		title: 'Desayunos',
		items: [
			{
				name: 'Café con leche',
				note: 'en las fotos del perfil, servido en la barra y en la terraza',
			},
			{ name: 'Bocadillo y pan', note: 'para desayunar, en las fotos del perfil' },
			{ name: 'Desayuno completo', note: '«buen sitio para desayunar», dice una reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está BORDATXO?',
		a: 'En Zubiaurrenea Kalea, 5, del 20170 Usurbil (Gipuzkoa). El mapa de esta página lleva directo al bar y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:00 a 1:00 y los sábados y domingos de 8:00 a 1:00. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 37 10 42. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es un bar de tapas: pintxos y raciones, además de desayunos. La ficha no publica carta ni precios, así que lo mejor es preguntar por la barra o llamar al 943 37 10 42.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. Abre a las 7:00 de lunes a viernes y a las 8:00 los fines de semana, y una de sus reseñas lo recomienda expresamente para desayunar y comer un pintxo.',
	},
	{
		q: '¿Es un sitio para ir en cuadrilla?',
		a: 'Sus reseñas lo describen como un sitio de «ambiente familiar y de cuadrillas», con buena carta de pintxos y raciones. Tiene 4,4 sobre 5 con 523 reseñas en Google.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. En las fotos de su perfil de Google aparecen las mesas y sillas de la terraza, en la misma plaza donde está el bar.',
	},
	{
		q: '¿Puedo ir con perro?',
		a: 'Sí. La ficha de Google indica que se admiten perros.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'Sí. La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. No publica datos sobre aparcamiento adaptado.',
	},
];
