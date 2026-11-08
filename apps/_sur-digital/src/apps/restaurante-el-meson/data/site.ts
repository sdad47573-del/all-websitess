/**
 * Datos de Restaurante El Mesón — C. Camelias, 1
 * (10840 Moraleja, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante El Mesón,
 *   40.0666851,-6.6584064, feature 0xd3de963557d0f07:0xf7cbf0e63300b39f
 *   (dirección, teléfono, categorías, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha de Google NO tiene horario publicado («Añadir horario»), así que esta
 * web no inventa ninguno: remite al teléfono. Tampoco publica carta ni precios;
 * los platos salen de las reseñas y de las fotos del propio perfil.
 */

export const BUSINESS = {
	name: 'Restaurante El Mesón',
	shortName: 'El Mesón',
	mark: 'EM',
	street: 'C. Camelias, 1',
	city: 'Moraleja',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10840',
	country: 'ES',
	phoneDisplay: '927 56 34 74',
	phoneHref: 'tel:+34927563474',
	rating: 4.4,
	reviewsCount: 659,
	siteUrl: 'https://www.sur-digital.com/restaurante-el-meson',
	geo: { lat: 40.0666851, lng: -6.6584064 },
	featureId: '0xd3de963557d0f07:0xf7cbf0e63300b39f',
	placeId: 'ChIJBw99VWPpPQ0Rn7MAM-bwy_c',
};

const CID_DECIMAL = '17855630019129291679';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+El+Mes%C3%B3n/@40.0666851,-6.6584064,17z/data=!3m1!4b1!4m6!3m5!1s0xd3de963557d0f07:0xf7cbf0e63300b39f!8m2!3d40.0666851!4d-6.6584064!16s%2Fg%2F12qfljf1t',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.0666851%2C-6.6584064',
	embed: 'https://maps.google.com/maps?q=40.0666851,-6.6584064&z=17&hl=es&output=embed',
};

/**
 * La ficha de Google no tiene horario añadido, así que no hay tabla de días que
 * copiar. Se muestra ese hecho en lugar de inventar horas.
 */
export const HOURS = [{ day: 'Horario', value: 'No publicado en Google' }];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Camareros geniales, educados y simpáticos , buena relación calidad -precio.',
	},
	{
		rating: 5,
		text: 'Hemos pedido la ensalada de rulo, croquetas, pulpo, calamares y lagarto.',
	},
];

/** Servicios y datos que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Parrilla en Moraleja',
	'Bar y restaurante',
	'Aseo adaptado',
	'Asientos adaptados',
	'Reservas por teléfono',
];

/**
 * Carta resumida de lo que las reseñas de la ficha nombran y de lo que se ve en
 * las fotos del propio perfil. Sin precios: la ficha no publica ninguno.
 */
export const MENU = [
	{
		title: 'Lo que piden las reseñas',
		items: [
			{ name: 'Ensalada de rulo', note: 'el primero de los platos que nombra una reseña' },
			{ name: 'Croquetas', note: 'de las que se piden para compartir' },
			{ name: 'Pulpo', note: 'citado junto a los calamares' },
			{ name: 'Calamares', note: 'a la plancha o a la andaluza, según el día' },
			{ name: 'Lagarto', note: 'carne de la casa, a la parrilla' },
		],
	},
	{
		title: 'De la parrilla',
		items: [
			{ name: 'Entrecot con patatas panaderas', note: 'en las fotos del perfil' },
			{ name: 'Lagarto a la brasa con salsa', note: 'cortado en tiras, para compartir' },
		],
	},
	{
		title: 'Para picar y terminar',
		items: [
			{ name: 'Patatas con queso y bacon', note: 'en sartén, de las fotos del perfil' },
			{ name: 'Flan con caramelo', note: 'postre de la casa' },
			{ name: 'Tarta con helado y chocolate', note: 'de las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante El Mesón?',
		a: 'En la calle Camelias, 1, del 10840 Moraleja (Cáceres), en la comarca de Sierra de Gata, en el noroeste de la provincia. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Su ficha de Google no tiene horario publicado, así que aquí no se inventa: para saber cuándo abre hay que llamar al 927 56 34 74.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 56 34 74. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer en El Mesón?',
		a: 'La ficha no publica carta ni precios. Sus reseñas nombran la ensalada de rulo, las croquetas, el pulpo, los calamares y el lagarto, y la ficha lo clasifica como parrilla y bar. Para saber el menú del día, lo mejor es llamar.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,4 sobre 5 con 659 reseñas en Google. Una de ellas destaca a los camareros —«geniales, educados y simpáticos»— y la «buena relación calidad-precio».',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca aseo adaptado para sillas de ruedas y asientos adaptados.',
	},
];
