/**
 * Datos de Panadería Carmelitas — C. Torremolinos, 27, Distrito Sur (14013 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: Panadería Carmelitas, 37.8640164,-4.7740626,
 *   feature 0xd6cd8a876ca4137:0x74cfa8c9f69183c8.
 * - Nombre, categoría, dirección, teléfono, horario, valoración y reseñas: ficha
 *   pública de Google.
 *
 * LÍMITE IMPORTANTE: esta ficha **no tiene fotos**. El endpoint de detalle de Maps
 * responde con el bloque de imágenes vacío (solo trae una referencia de Street
 * View), y se repitió la consulta varias veces. Por eso la web no tiene galería:
 * no se inventan imágenes ni se sustituyen por las de otros negocios.
 *
 * La ficha tampoco publica descripción, carta, precios, web propia ni datos de
 * accesibilidad. Los textos se limitan a lo que dice la ficha.
 */

export const BUSINESS = {
	name: 'Panadería Carmelitas',
	shortName: 'Carmelitas',
	mark: 'C',
	street: 'C. Torremolinos, 27',
	district: 'Distrito Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14013',
	country: 'ES',
	phone: '957 46 22 90',
	phoneHref: 'tel:+34957462290',
	rating: 3.5,
	reviewsCount: 4,
	siteUrl: 'https://www.sur-digital.com/panaderia-carmelitas',
	geo: { lat: 37.8640164, lng: -4.7740626 },
	featureId: '0xd6cd8a876ca4137:0x74cfa8c9f69183c8',
	placeId: 'ChIJN0HKdqjYbA0RyIOR9smoz3Q',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio en la calle Torremolinos, Córdoba',
	description:
		'Panadería Carmelitas, en C. Torremolinos, 27 (Distrito Sur, 14013 Córdoba). Abierta todos los días de 8:00 a 21:00. 3,5 sobre 5 con 4 reseñas en Google.',
	hoursSummary: 'Todos los días, 8:00–21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Carmelitas/@37.8640164,-4.7740626,17z/data=!4m6!3m5!1s0xd6cd8a876ca4137:0x74cfa8c9f69183c8!8m2!3d37.8640164!4d-4.7740626!16s%2Fg%2F1z44bddwt?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8640164%2C-4.7740626',
	embed: 'https://maps.google.com/maps?q=37.8640164,-4.7740626&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8640164,-4.7740626',
};

/** Horario publicado en la ficha: el mismo todos los días, mañana y tarde. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–21:00' },
	{ day: 'Sábado', value: '8:00–21:00' },
	{ day: 'Domingo', value: '8:00–21:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: abre todos los días, de 8:00 a 21:00, domingo incluido. Para el 1 de noviembre (Día de Todos los Santos) Google avisa de que el horario podría ser diferente.';

/** Lo que declara la ficha, sin añadir catálogo que no publica. */
export const SERVICIOS = [
	'Panadería',
	'Abierta todos los días',
	'8:00–21:00',
	'Distrito Sur',
	'C. Torremolinos, 27',
];

export const HIGHLIGHTS = [
	{
		title: 'Trece horas abiertas',
		text: 'De 8:00 a 21:00 todos los días, domingo incluido. Es un horario largo para una panadería: cubre desayuno, mediodía y merienda sin cerrar a la hora de comer, algo poco habitual en el gremio.',
	},
	{
		title: 'El barrio',
		text: 'Está en el número 27 de la calle Torremolinos, en el Distrito Sur de Córdoba (14013). La ficha la registra con una sola categoría, «Panadería», y no detalla qué más se vende en el mostrador.',
	},
	{
		title: 'El teléfono',
		text: 'La ficha publica el 957 46 22 90. Es la vía directa para preguntar por encargos, por lo que hay ese día o por el horario en festivos: la web no gestiona pedidos ni tiene formulario.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Carmelitas?',
		a: 'En la calle Torremolinos, 27, en el Distrito Sur de Córdoba (14013). El mapa de esta página abre la ubicación exacta de la ficha y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 8:00 a 21:00, domingo incluido, según la ficha de Google. Es horario continuado de mañana y tarde. Para el 1 de noviembre Google avisa de que el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha solo la clasifica como «Panadería»: no publica carta, catálogo ni precios, y no tiene fotos con las que comprobarlo. Esta página no lo inventa. Lo que haya en el mostrador se consulta por teléfono (957 46 22 90) o en el propio establecimiento.',
	},
	{
		q: '¿Hacen encargos o tartas por encargo?',
		a: 'No hay información publicada sobre encargos. La ficha es de una panadería, sin más detalle de servicios, plazos ni precios. Cualquier encargo se habla directamente por teléfono.',
	},
	{
		q: '¿Tiene página web, carta o precios?',
		a: 'No. La ficha de Google no enlaza ninguna web propia ni publica precios. Esta página no los reproduce ni los estima.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '3,5 sobre 5 con 4 reseñas, según la ficha pública. Es una muestra muy pequeña, así que la media dice poco: se mueve mucho con una sola opinión. Esta web no reproduce los textos de las reseñas; se leen enteras en el enlace a Google.',
	},
	{
		q: '¿Tiene fotos la ficha de Google?',
		a: 'No. En el momento de crear esta web la ficha no muestra ninguna fotografía del negocio ni de sus productos; solo hay una referencia de Street View de la calle. Por eso esta página no incluye galería y usa un cartel tipográfico propio: no se usan imágenes de otros establecimientos.',
	},
	{
		q: '¿Es accesible o tiene aparcamiento?',
		a: 'La ficha no publica información de accesibilidad ni de aparcamiento. Al estar en una calle del Distrito Sur, el acceso y el estacionamiento dependen de la zona; si necesitas un acceso concreto, llama antes al 957 46 22 90.',
	},
];
