/**
 * Datos de La Chaty Panadería — C. Arcos de la Frontera, 10, Levante (14014 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: La Chaty Panadería, 37.8985867,-4.7567156,
 *   feature 0xd6cdf972d1854e7:0x357a3547056f995e.
 * - Nombre, categoría, dirección, horario, valoración, reseñas y accesibilidad:
 *   ficha pública de Google.
 * - Fotos: galería pública de la ficha (10 imágenes), descargadas con
 *   scripts/fetch-maps-photos.mjs.
 *
 * LÍMITES: la ficha no publica teléfono, web propia, descripción ni carta. Los
 * precios que aparecen en el escaparate de la foto no se reproducen aquí porque
 * cambian sin aviso; el horario se copia tal cual lo publica Google, con sus
 * minutos exactos.
 */

export const BUSINESS = {
	name: 'La Chaty Panadería',
	shortName: 'La Chaty',
	mark: 'LC',
	street: 'C. Arcos de la Frontera, 10',
	district: 'Levante',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14014',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4,
	reviewsCount: 9,
	siteUrl: 'https://www.sur-digital.com/la-chaty',
	geo: { lat: 37.8985867, lng: -4.7567156 },
	featureId: '0xd6cdf972d1854e7:0x357a3547056f995e',
	placeId: 'ChIJ51QYLZffbA0RXplvBUc1ejU',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en la calle Arcos de la Frontera, Córdoba',
	description:
		'La Chaty Panadería, en C. Arcos de la Frontera, 10 (Levante, 14014 Córdoba). Abre todos los días de 7:30 a 14:30. 4,0 sobre 5 con 9 reseñas en Google.',
	hoursSummary: 'Todos los días, de 7:30 a 14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Chaty+Panader%C3%ADa/@37.8985867,-4.7567156,17z/data=!4m6!3m5!1s0xd6cdf972d1854e7:0x357a3547056f995e!8m2!3d37.8985867!4d-4.7567156!16s%2Fg%2F11g6lvgt70?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8985867%2C-4.7567156',
	embed: 'https://maps.google.com/maps?q=37.8985867,-4.7567156&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8985867,-4.7567156',
};

/**
 * Horario tal cual lo publica Google. Los minutos no son redondos (14:03 el
 * viernes, 14:14 el fin de semana) porque la ficha los anuncia así; se copian
 * sin redondear y se avisa de ello en la nota.
 */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '7:30–14:30' },
	{ day: 'Viernes', value: '7:30–14:03' },
	{ day: 'Sábado', value: '8:00–14:14' },
	{ day: 'Domingo', value: '8:00–14:14' },
];

export const HOURS_NOTE =
	'Horario publicado en la ficha de Google, con los minutos exactos que anuncia el negocio (14:03 el viernes y 14:14 el fin de semana). Para el 1 de noviembre, Día de Todos los Santos, Google avisa de que el horario podría ser diferente.';

/** Lo que declara la ficha o se ve en sus fotos, sin inventar catálogo. */
export const SERVICIOS = [
	'Panadería',
	'Abierta todos los días',
	'De 7:30 a 14:30',
	'Levante · 14014',
	'10 fotos en Google',
];

export const HIGHLIGHTS = [
	{
		title: 'El escaparate',
		text: 'La foto de la fachada enseña el rótulo de La Chaty y, en el cristal, la lista de panes del día con sus precios: barras, bollas, vienas, baguettes, chapatas y el pan de ocho cortes, entre otros. Los precios cambian, así que aquí no se copian cifras.',
	},
	{
		title: 'La vitrina',
		text: 'La galería de la ficha mezcla pan y pastelería: tartas de chocolate con profiteroles, tartas de queso con frutos rojos, brazos de gitano y bandejas de empanadillas. La ficha solo la clasifica como «Panadería», pero el mostrador va más allá del pan.',
	},
	{
		title: 'La mañana',
		text: 'Abre de 7:30 a 14:30 de lunes a jueves, y el fin de semana de 8:00 a 14:14. Es horario de mañana: se cierra después de comer, así que el pan del día se compra temprano.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Chaty Panadería?',
		a: 'En la calle Arcos de la Frontera, 10, en el barrio de Levante de Córdoba (14014). El mapa de esta página abre el punto exacto de la ficha y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves, 7:30–14:30; los viernes, 7:30–14:03; y sábados y domingos, 8:00–14:14. Son las horas exactas que publica la ficha de Google, sin redondear. Para el 1 de noviembre Google avisa de que el horario podría variar.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'La ficha de Google no publica teléfono. Esta página no inventa un número: si necesitas confirmar algo, lo más directo es acercarte al local en horario de apertura o usar la ficha de Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha no publica carta ni catálogo. En las fotos se ven el rótulo con la lista de panes del escaparate y una vitrina con tartas, brazos de gitano y empanadillas, así que hay pan y pastelería. Lo que haya cada día se ve allí; esta web no promete productos ni precios concretos.',
	},
	{
		q: '¿Cuánto cuesta el pan?',
		a: 'El escaparate anuncia precios junto a cada tipo de pan, pero cambian y la ficha no los publica. Por eso esta página no copia cifras: se consultan en el propio establecimiento.',
	},
	{
		q: '¿Hacen encargos o tartas por encargo?',
		a: 'No hay información publicada sobre encargos. En la vitrina hay tartas y brazos de gitano, pero la ficha no detalla plazos, tamaños ni precios, y no hay teléfono para consultarlo. Cualquier encargo se habla en el mostrador.',
	},
	{
		q: '¿Tiene fotos la ficha de Google?',
		a: 'Sí: la galería tiene 10 fotos. En esta web se usan siete (la fachada, la bolsa, la vitrina, tres tartas y las empanadillas); las otras tres se han dejado fuera por tener personas o enseres personales en el encuadre.',
	},
	{
		q: '¿Es accesible o tiene aparcamiento?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas; no publica más datos de acceso. Al estar en una calle del barrio de Levante, el estacionamiento depende de la zona.',
	},
];
