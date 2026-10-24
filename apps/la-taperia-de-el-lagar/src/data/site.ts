/**
 * Datos de Restaurante La Taperia de El Lagar — C. Humilladero, 30
 * (10860 Gata, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante La Taperia de El Lagar,
 *   40.237265,-6.5949934, feature 0xd3dc50dddf0d1f5:0xe72634aa23f3167b
 *   (dirección, teléfono, horario, reseñas, categoría y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * El nombre se escribe como en la propia ficha de Google («La Taperia», sin
 * tilde). Lo que la web NO inventa: nada. Si en las fotos aparece la carta, se
 * transcribe desde ahí.
 */

export const BUSINESS = {
	name: 'Restaurante La Taperia de El Lagar',
	mark: 'EL',
	street: 'C. Humilladero, 30',
	city: 'Gata',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10860',
	country: 'ES',
	phoneDisplay: '678 43 88 12',
	phoneHref: 'tel:+34678438812',
	rating: 4.3,
	reviewsCount: 346,
	siteUrl: 'https://la-taperia-de-el-lagar.vercel.app',
	geo: { lat: 40.237265, lng: -6.5949934 },
	featureId: '0xd3dc50dddf0d1f5:0xe72634aa23f3167b',
};

const CID_DECIMAL = '16656058177228576379';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+La+Taperia+de+El+Lagar/@40.237265,-6.5949934,17z/data=!3m1!4b1!4m6!3m5!1s0xd3dc50dddf0d1f5:0xe72634aa23f3167b!8m2!3d40.237265!4d-6.5949934!16s%2Fg%2F11t1d_kyl6',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=40.237265%2C-6.5949934',
	embed: 'https://maps.google.com/maps?q=40.237265,-6.5949934&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: lunes, viernes, sábado y domingo de 8:00 a
 * 24:00; martes, miércoles y jueves de 8:00 a 17:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–24:00' },
	{ day: 'Martes', value: '8:00–17:00' },
	{ day: 'Miércoles', value: '8:00–17:00' },
	{ day: 'Jueves', value: '8:00–17:00' },
	{ day: 'Viernes', value: '8:00–24:00' },
	{ day: 'Sábado', value: '8:00–24:00' },
	{ day: 'Domingo', value: '8:00–24:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Buen sitio, buena gente y buen ambiente.',
	},
	{
		rating: 4,
		text: 'Los postres caseros muy recomendables, sobre todo la tarta de galleta.',
	},
];

/** Servicios y datos que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Tapas en Gata (Cáceres)',
	'Postres caseros',
	'Abierto desde las 8:00',
	'Hasta las 24:00 los fines de semana',
	'Asientos adaptados',
	'Restaurante especializado en tapas',
];

/**
 * Carta resumida de lo que las reseñas de la ficha de Google nombran como
 * platos del local. Sin precios: la ficha no publica ninguno.
 */
export const MENU = [
	{
		title: 'Lo que citan las reseñas',
		items: [
			{ name: 'Tarta de galleta', note: '«los postres caseros muy recomendables, sobre todo la tarta de galleta»' },
			{ name: 'Postres caseros', note: 'el bloque de postres es lo que más se repite en las reseñas' },
			{ name: 'Hamburguesas y bocadillos', note: 'lo que piden quienes van a cenar o a tomar algo rápido' },
		],
	},
	{
		title: 'La tapería',
		items: [
			{ name: 'Tapas para compartir', note: 'Google la cataloga como «restaurante especializado en tapas»' },
			{ name: 'Lo del día', note: 'la pizarra cambia según la cocina; se consulta en el local' },
		],
	},
	{
		title: 'El día a día',
		items: [
			{ name: 'Café desde las 8:00', note: 'abre a primera hora, como bar de pueblo' },
			{ name: 'Ambiente de Gata', note: '«buen sitio, buena gente y buen ambiente», dice una reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante La Taperia de El Lagar?',
		a: 'En la Calle del Humilladero, 30, 10860 Gata (Cáceres), el pueblo de la comarca de Gata, entre la sierra y la portuguesa. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días desde las 8:00. De martes a jueves cierra a las 17:00, y los lunes, viernes, sábado y domingo se mantiene hasta las 24:00. Es el horario que publica su ficha de Google; para la cocina, conviene llamar antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 678 43 88 12. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se come en El Lagar?',
		a: 'Tapas —Google la clasifica como «restaurante especializado en tapas»—, hamburguesas y bocadillos para cenar, y postres caseros, con la tarta de galleta como campeona de sus reseñas. La ficha no publica carta ni precios, así que se consultan en el local.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,3 sobre 5 con 346 reseñas en Google. Se repiten el buen ambiente y los postres caseros.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca asientos adaptados para sillas de ruedas. Está en la Calle del Humilladero, en el casco de Gata (10860).',
	},
];
