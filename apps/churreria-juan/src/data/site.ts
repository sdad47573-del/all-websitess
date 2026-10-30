/**
 * Datos de Churrería-confitería-panadería Juan — barrio Noroeste, 14011 Córdoba.
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: Churrería-confitería-panadería Juan,
 *   37.8917444,-4.7993319, feature 0xd6cdf454c16f41f:0xbb7d4e3e8da456fb.
 * - Nombre, categoría, zona, teléfono, valoración, reseñas, horario,
 *   accesibilidad y fotos: ficha pública de Google.
 *
 * Lo que la web NO inventa: la ficha **no publica dirección de calle** (solo el
 * barrio, «Noroeste», y el código postal), **no publica teléfono**, no tiene
 * carta ni precios, y no enlaza web propia. La web no rellena esos huecos. Las
 * fotos son las de la galería del establecimiento en Google Maps.
 */

export const BUSINESS = {
	name: 'Churrería-confitería-panadería Juan',
	shortName: 'Juan',
	mark: 'J',
	/** La ficha no publica calle: solo barrio y código postal. */
	street: 'Barrio Noroeste',
	district: 'Noroeste',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14011',
	country: 'ES',
	/** La ficha no publica teléfono. */
	phone: '',
	phoneHref: '',
	rating: 3.9,
	reviewsCount: 39,
	siteUrl: 'https://churreria-juan.vercel.app',
	geo: { lat: 37.8917444, lng: -4.7993319 },
	featureId: '0xd6cdf454c16f41f:0xbb7d4e3e8da456fb',
	placeId: 'ChIJH_QWTEXfbA0R-1akjT5Ofbs',
	googleCategory: 'Panadería',
	tagline: 'Churrería, confitería y panadería en el Noroeste de Córdoba',
	description:
		'Churrería-confitería-panadería Juan, en el barrio Noroeste (14011 Córdoba). Churros, porras y café, con terraza en la acera. Abre todos los días de 6:00 a 20:00. 3,9 sobre 5 en Google.',
	hoursSummary: 'Todos los días, 6:00–20:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Churrer%C3%ADa-confiter%C3%ADa-panader%C3%ADa+Juan/@37.8917444,-4.7993319,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf454c16f41f:0xbb7d4e3e8da456fb!8m2!3d37.8917444!4d-4.7993319!16s%2Fg%2F11hbkcpfb0?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8917444%2C-4.7993319',
	embed: 'https://maps.google.com/maps?q=37.8917444,-4.7993319&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8917444,-4.7993319',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '6:00–20:00' },
	{ day: 'Sábado', value: '6:00–20:00' },
	{ day: 'Domingo', value: '6:00–20:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: abre todos los días, de 6:00 a 20:00, de la mañana a la tarde sin cerrar al mediodía. Para el 1 de noviembre (Día de Todos los Santos) Google avisa de que el horario podría ser diferente.';

/** Lo que declara la ficha y lo que muestran sus fotos. */
export const SERVICIOS = [
	'Churrería',
	'Confitería',
	'Panadería',
	'Churros y porras',
	'Café',
	'Terraza',
];

export const HIGHLIGHTS = [
	{
		title: 'Los churros',
		text: 'En una de las fotos hay un plato de churros finos, con su greña, junto a un vaso de café con leche sobre la mesa de la terraza. El cartel de la mesa dice «Espresso».',
	},
	{
		title: 'Las porras',
		text: 'Las otras dos fotos son de porras: la masa gruesa y dorada, con la miga hueca por dentro. Se sirven sobre papel, en la mesa, recién hechas.',
	},
	{
		title: 'El local',
		text: 'Dentro hay barra con vitrina y cafetera; fuera, mesas y sombrillas en la acera. En la galería también aparecen la terraza y el mostrador, que no se usan aquí por las personas que salen en el encuadre.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Churrería Juan?',
		a: 'En el barrio Noroeste de Córdoba (14011). La ficha de Google no publica la calle: solo el barrio y el código postal, así que esta web no inventa una dirección. El mapa de esta página abre el punto exacto de la ficha y «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Cómo se llega si no hay calle publicada?',
		a: 'Usa el botón «Cómo llegar» o abre la ficha de Google Maps: la ubicación está marcada con las coordenadas del local, así que el navegador te lleva igualmente. La referencia útil es el barrio Noroeste y el código postal 14011.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días, de 6:00 a 20:00, sin cerrar a mediodía, según la ficha de Google. Para el 1 de noviembre Google avisa de que el horario podría variar.',
	},
	{
		q: '¿Tiene teléfono?',
		a: 'La ficha pública no publica ningún teléfono de contacto, y esta web no inventa uno. La forma de contactar es ir al local o escribir por los canales que el propio negocio indique en su ficha.',
	},
	{
		q: '¿Qué se puede tomar?',
		a: 'Lo que muestran las fotos de la ficha: churros, porras y café con leche. El nombre del negocio añade confitería y panadería. No hay carta ni precios publicados, así que esta página no los reproduce.',
	},
	{
		q: '¿Hay terraza?',
		a: 'Sí. Una de las fotos de la ficha muestra las mesas en la acera, con sombrillas, y el resto del local con barra y vitrina dentro.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que tiene acceso para sillas de ruedas y que no hay aparcamiento adaptado. Es la única información de accesibilidad publicada.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '3,9 sobre 5 con 39 reseñas, según la ficha pública. Esta web no reproduce los textos de las reseñas: se leen enteras, con autor y fecha, en el enlace a Google.',
	},
];
