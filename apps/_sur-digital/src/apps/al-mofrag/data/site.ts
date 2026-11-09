/**
 * Datos de «Al Mofrag» Terraza & Restaurante — Villarreal de San Carlos, 40, B
 * (10695 Villarreal de San Carlos, Serradilla, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Al Mofrag» Terraza & Restaurante,
 *   39.8474539,-6.0306765, feature 0xd3e205e78bed893:0xd042366597855db2
 *   (dirección, teléfono, horario, reseñas, categoría, descripción del local y
 *   accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. Los platos salen de las reseñas publicadas en
 * esa ficha; si en las fotos aparece la carta, se transcribe desde ahí.
 */

export const BUSINESS = {
	name: '«Al Mofrag» Terraza & Restaurante',
	shortName: 'Al Mofrag',
	mark: 'AM',
	street: 'Villarreal de San Carlos, 40, B',
	city: 'Villarreal de San Carlos',
	municipality: 'Serradilla',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10695',
	country: 'ES',
	phoneDisplay: '927 19 92 05',
	phoneHref: 'tel:+34927199205',
	rating: 4.5,
	reviewsCount: 629,
	siteUrl: 'https://www.sur-digital.com/al-mofrag',
	geo: { lat: 39.8474539, lng: -6.0306765 },
	featureId: '0xd3e205e78bed893:0xd042366597855db2',
	placeId: 'ChIJk9i-eF4gPg0Rsl2Fl2U2QtA',
};

const CID_DECIMAL = '15006616718313610674';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/%22Al+Mofrag%22+Terraza+%26+Restaurante/@39.8474539,-6.0306765,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e205e78bed893:0xd042366597855db2!8m2!3d39.8474539!4d-6.0306765!16s%2Fg%2F11c2092n_h',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=39.8474539%2C-6.0306765',
	embed: 'https://maps.google.com/maps?q=39.8474539,-6.0306765&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google. Cierra los martes; viernes y sábado abren
 * también por la noche y el domingo alarga hasta las 18:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: '9:30–16:30' },
	{ day: 'Martes', value: 'Cerrado' },
	{ day: 'Miércoles', value: '9:30–16:30' },
	{ day: 'Jueves', value: '9:30–16:30' },
	{ day: 'Viernes', value: '9:30–16:30 · 20:00–23:00' },
	{ day: 'Sábado', value: '9:30–16:30 · 20:00–23:00' },
	{ day: 'Domingo', value: '9:30–18:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Pedimos la hamburguesa buenísima y las patatas una ración bastante grande.',
	},
	{
		rating: 3,
		text: 'Cervezas muy frías, ensalada rica y variada, pero la tortilla de supermercado.',
	},
	{
		rating: 5,
		text: 'Muy buena atencion del dueño y los camareros, raciones abundantes y de calidad.',
	},
];

/** Servicios y datos que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Bar restaurante en Villarreal de San Carlos',
	'Terraza al aire libre',
	'Rodeado de naturaleza',
	'Zona para no fumadores',
	'Acceso para sillas de ruedas',
	'Cenas viernes y sábado',
];

/**
 * Carta resumida de lo que las reseñas de la ficha nombran y de lo que se ve en
 * las fotos del propio perfil. Sin precios: la ficha no publica ninguno.
 */
export const MENU = [
	{
		title: 'De la plancha y la brasa',
		items: [
			{ name: 'Calamar a la plancha con ensalada', note: 'en las fotos del perfil' },
			{ name: 'Entrecot a la brasa con patatas y setas', note: 'en las fotos del perfil' },
			{
				name: 'Carne a la brasa con verduras asadas',
				note: 'con calabacín y calabaza de la huerta',
			},
		],
	},
	{
		title: 'Del comedor',
		items: [
			{ name: 'Hamburguesa con patatas', note: '«buenísima», según una reseña' },
			{
				name: 'Escalopines empanados',
				note: 'con patatas, queso rallado y pimiento verde',
			},
			{ name: 'Ensalada variada', note: '«rica y variada», dice una reseña' },
			{ name: 'Ración de patatas', note: '«bastante grande», en palabras de otra' },
		],
	},
	{
		title: 'Postres y barra',
		items: [
			{ name: 'Torrija con helado', note: 'postre de las fotos del perfil' },
			{ name: 'Tarta con pistacho y chocolate blanco', note: 'postre de las fotos del perfil' },
			{ name: 'Cervezas muy frías', note: 'lo primero que destaca una reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está «Al Mofrag» Terraza & Restaurante?',
		a: 'En Villarreal de San Carlos, 40, B, 10695 Villarreal de San Carlos (Serradilla, Cáceres), el pueblo del Parque Nacional de Monfragüe. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De miércoles a lunes de 9:30 a 16:30, con dos excepciones: el domingo alarga hasta las 18:00 y los viernes y sábados vuelve a abrir de 20:00 a 23:00. Los martes cierra. Es el horario que publica su ficha de Google, así que conviene llamar antes al 927 19 92 05.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 19 92 05. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha no publica carta ni precios. En sus fotos se ven hamburguesa con patatas, escalopines empanados, calamar a la plancha, entrecot a la brasa con setas, carne con verduras asadas y postres caseros; sus reseñas hablan de raciones «abundantes y de calidad» y de cervezas muy frías. Para saber qué hay cada día, lo mejor es llamar.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. El propio local se describe en Google como «bar chiringuito al aire libre, rodeado de naturaleza, terraza», con zona para no fumadores.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,5 sobre 5 con 629 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas.',
	},
];
