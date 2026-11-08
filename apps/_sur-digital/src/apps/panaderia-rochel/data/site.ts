/**
 * Datos de Confitería Panadería Heladería Rochel — C. Rafael Pérez de Guzmán, 1,
 * Poniente Sur (14005 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: 37.8811979,-4.7967506,
 *   feature 0xd6cdf680c4a6e8b:0x80d24f50e52ddd2d.
 * - Nombre, categoría, dirección, teléfono, horario, valoración, reseñas y
 *   accesibilidad: ficha pública de Google.
 * - Fotos: galería pública de la ficha (10 imágenes), descargadas con
 *   scripts/fetch-maps-photos.mjs.
 *
 * LÍMITES: la ficha no publica descripción, carta, precios ni web propia. La
 * categoría que declara Google es «Pastelería», aunque el nombre anuncie
 * confitería, panadería y heladería; no se inventa catálogo.
 */

export const BUSINESS = {
	name: 'Confitería Panadería Heladería Rochel',
	shortName: 'Rochel',
	mark: 'R',
	street: 'C. Rafael Pérez de Guzmán, 1',
	district: 'Poniente Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14005',
	country: 'ES',
	phone: '957 92 25 56',
	phoneHref: 'tel:+34957922556',
	rating: 4,
	reviewsCount: 41,
	siteUrl: 'https://www.sur-digital.com/panaderia-rochel',
	geo: { lat: 37.8811979, lng: -4.7967506 },
	featureId: '0xd6cdf680c4a6e8b:0x80d24f50e52ddd2d',
	placeId: 'ChIJi25KDGjfbA0RLd0t5VBP0oA',
	googleCategory: 'Pastelería',
	tagline: 'Confitería, panadería y heladería en el Poniente Sur de Córdoba',
	description:
		'Confitería Panadería Heladería Rochel, en C. Rafael Pérez de Guzmán, 1 (Poniente Sur, 14005 Córdoba). Abierta de 8:00 a 14:30 y de 16:00 a 20:00 de lunes a viernes. 4,0 sobre 5 con 41 reseñas en Google.',
	hoursSummary: 'Lunes a viernes, 8:00–14:30 y 16:00–20:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Confiter%C3%ADa+Panader%C3%ADa+Helader%C3%ADa+Rochel/@37.8811979,-4.7967506,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf680c4a6e8b:0x80d24f50e52ddd2d!8m2!3d37.8811979!4d-4.7967506!16s%2Fg%2F11rqch78l3?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8811979%2C-4.7967506',
	embed: 'https://maps.google.com/maps?q=37.8811979,-4.7967506&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8811979,-4.7967506',
};

/** Horario tal cual lo publica Google: partido de lunes a viernes. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–14:30 · 16:00–20:00' },
	{ day: 'Sábado', value: '8:00–14:30' },
	{ day: 'Domingo', value: '8:30–14:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. De lunes a viernes cierra a mediodía y vuelve por la tarde (16:00–20:00); el sábado solo abre por la mañana y el domingo empieza media hora más tarde, a las 8:30.';

/** Lo que declara la ficha, sin añadir catálogo que no publica. */
export const SERVICIOS = [
	'Pastelería',
	'Confitería · Panadería · Heladería',
	'Abierta todos los días',
	'Poniente Sur · 14005',
	'41 reseñas en Google',
];

export const HIGHLIGHTS = [
	{
		title: 'Tres oficios en el nombre',
		text: 'El rótulo dice confitería, panadería y heladería; Google la clasifica con una sola categoría, «Pastelería». En sus fotos hay tartas, bollería y vitrina, así que la web se queda con lo que se ve y no promete una carta que la ficha no publica.',
	},
	{
		title: 'La tarde',
		text: 'De lunes a viernes abre de 8:00 a 14:30 y de 16:00 a 20:00: cierra a mediodía y reabre por la tarde. El sábado solo hay horario de mañana y el domingo abre a las 8:30. Es un ritmo de barrio, con dos visitas al día.',
	},
	{
		title: 'El barrio',
		text: 'Está en el número 1 de la calle Rafael Pérez de Guzmán, en el Poniente Sur (14005 Córdoba), junto a la plaza de Vista Alegre. La ficha indica que el local tiene acceso para sillas de ruedas, aunque no hay aparcamiento adaptado.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Rochel?',
		a: 'En la calle Rafael Pérez de Guzmán, 1, en el barrio de Poniente Sur de Córdoba (14005). El mapa de esta página abre el punto exacto de la ficha y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, 8:00–14:30 y 16:00–20:00. El sábado, 8:00–14:30. El domingo, 8:30–14:30. Es el horario que publica la ficha de Google; conviene confirmarlo por teléfono en festivos.',
	},
	{
		q: '¿Se puede llamar para encargar?',
		a: 'La ficha publica el 957 92 25 56, y es el canal directo para preguntar por encargos. La ficha no detalla plazos, tamaños ni precios, y esta web no gestiona pedidos ni tiene formulario.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El nombre anuncia confitería, panadería y heladería, y Google la clasifica como «Pastelería». Las fotos de la ficha muestran tartas, bollería y vitrina, pero no hay carta ni precios publicados: lo que haya cada día se consulta en el mostrador o por teléfono.',
	},
	{
		q: '¿Tiene fotos la ficha de Google?',
		a: 'Sí, la galería tiene 10 fotos. En esta web se usan siete; las otras tres se han dejado fuera por tener personas identificables o enseres personales en el encuadre.',
	},
	{
		q: '¿Se puede ir en silla de ruedas?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas, y que no hay aparcamiento adaptado. No publica más detalles del interior.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,0 sobre 5 con 41 reseñas, según la ficha pública. Es una muestra razonable, con opiniones variadas. Esta web no reproduce sus textos: se leen enteros en el enlace a Google.',
	},
	{
		q: '¿Tiene página web o carta con precios?',
		a: 'No. La ficha de Google no enlaza ninguna web propia ni publica precios. Esta página no los reproduce ni los estima.',
	},
];
