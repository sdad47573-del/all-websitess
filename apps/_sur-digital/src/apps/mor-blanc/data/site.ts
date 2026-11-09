/**
 * Datos de Terraza Cafe Bar Restaurante Mor Blanc — C. de la Paz, 19
 * (10672 Valdeobispo, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Terraza Cafe Bar Restaurante Mor Blanc,
 *   40.0815388,-6.2491926, feature 0xd3e0d928959929b:0x32deb2b53e7c2793
 *   (dirección, teléfono, horario, reseñas, categorías y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. Los platos salen de las reseñas publicadas en
 * esa ficha; si en las fotos aparece la carta, se transcribe desde ahí.
 */

export const BUSINESS = {
	name: 'Terraza Cafe Bar Restaurante Mor Blanc',
	shortName: 'Mor Blanc',
	mark: 'MB',
	street: 'C. de la Paz, 19',
	city: 'Valdeobispo',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10672',
	country: 'ES',
	phoneDisplay: '927 45 63 97',
	phoneHref: 'tel:+34927456397',
	rating: 4.4,
	reviewsCount: 83,
	siteUrl: 'https://www.sur-digital.com/mor-blanc',
	geo: { lat: 40.0815388, lng: -6.2491926 },
	featureId: '0xd3e0d928959929b:0x32deb2b53e7c2793',
	placeId: 'ChIJm5JZiZINPg0Rkyd8PrWy3jI',
};

const CID_DECIMAL = '3665563638233311123';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Terraza+Cafe+Bar+Restaurante+Mor+Blanc/@40.0819152,-6.2493525,16.5z/data=!4m6!3m5!1s0xd3e0d928959929b:0x32deb2b53e7c2793!8m2!3d40.0815388!4d-6.2491926!16s%2Fg%2F11c2md1wsb',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.0815388%2C-6.2491926',
	embed: 'https://maps.google.com/maps?q=40.0815388,-6.2491926&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días de 10:00 a 24:00. */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–24:00' },
	{ day: 'Martes', value: '10:00–24:00' },
	{ day: 'Miércoles', value: '10:00–24:00' },
	{ day: 'Jueves', value: '10:00–24:00' },
	{ day: 'Viernes', value: '10:00–24:00' },
	{ day: 'Sábado', value: '10:00–24:00' },
	{ day: 'Domingo', value: '10:00–24:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 4,
		text: 'La paella, muy buena y la sepia, extraordinaria',
	},
	{
		rating: 4,
		text: 'Buen sitio para tomar raciones y darse un baño en piscina.',
	},
	{
		rating: 5,
		text: 'Excelente trato y buenos pinchos,',
	},
];

/** Servicios y datos que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Terraza en Valdeobispo',
	'Restaurante y bar',
	'Piscina',
	'Raciones y pinchos',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
];

/**
 * Carta resumida de lo que nombran las reseñas de la ficha y de lo que se ve en
 * las fotos del propio perfil. Sin precios: la ficha no publica ninguno.
 */
export const MENU = [
	{
		title: 'Lo que piden las reseñas',
		items: [
			{ name: 'Paella', note: '«muy buena», según una de las reseñas' },
			{ name: 'Sepia', note: '«extraordinaria», en palabras de la misma reseña' },
			{ name: 'Pinchos', note: '«buenos pinchos», junto a un «excelente trato»' },
			{ name: 'Raciones', note: 'para compartir en la terraza' },
		],
	},
	{
		title: 'De la brasa y el horno',
		items: [
			{
				name: 'Asado con patatas panaderas',
				note: 'con ensalada de tomate y cebolla, en las fotos del perfil',
			},
			{ name: 'Entrecot a la brasa', note: 'en las fotos del perfil' },
			{ name: 'Chuleta a la brasa con pimientos verdes', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Para la mesa',
		items: [
			{
				name: 'Ensalada mixta',
				note: 'con atún, espárragos, maíz y remolacha',
			},
			{ name: 'Patatas panaderas', note: 'el acompañamiento de los asados' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Terraza Cafe Bar Restaurante Mor Blanc?',
		a: 'En la calle de la Paz, 19, del 10672 Valdeobispo (Cáceres), a pocos kilómetros de Plasencia. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de la semana, de 10:00 a 24:00. Es el horario que publica su ficha de Google, así que para una comida tardía conviene llamar antes al 927 45 63 97.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 45 63 97. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha no publica carta ni precios. Sus reseñas hablan de paella («muy buena»), sepia («extraordinaria»), pinchos y raciones para compartir.',
	},
	{
		q: '¿Tiene piscina?',
		a: 'Sí: una de las reseñas lo resume como «buen sitio para tomar raciones y darse un baño en piscina».',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,4 sobre 5 con 83 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y aseo adaptado.',
	},
];
