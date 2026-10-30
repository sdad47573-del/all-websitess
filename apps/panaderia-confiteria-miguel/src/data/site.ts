/**
 * Datos de Panadería Confitería Miguel — C. Libertador Simón Bolívar, 12,
 * barrio del Sur (14013 Córdoba).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: Panadería Confitería Miguel,
 *   37.8591815,-4.7825141, feature 0xd6d20ecf4fafd95:0x7431f1084085a956.
 * - Nombre, categoría, dirección, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google.
 *
 * LÍMITE IMPORTANTE: esta ficha **no tiene fotos** (se comprobó el endpoint de
 * detalle de Maps tres veces y el buscador de Maps: el bloque de fotos llega
 * vacío). Por eso la web no tiene galería: no se inventan ni se sustituyen por
 * imágenes de otros negocios.
 *
 * La ficha tampoco publica descripción, carta, precios ni web propia. Los textos
 * se limitan a lo que declara la ficha y al nombre del negocio.
 */

export const BUSINESS = {
	name: 'Panadería Confitería Miguel',
	shortName: 'Miguel',
	mark: 'M',
	street: 'C. Libertador Simón Bolívar, 12',
	district: 'Sur',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14013',
	country: 'ES',
	phone: '957 42 11 23',
	phoneHref: 'tel:+34957421123',
	rating: 4,
	reviewsCount: 8,
	siteUrl: 'https://panaderia-confiteria-miguel.vercel.app',
	geo: { lat: 37.8591815, lng: -4.7825141 },
	featureId: '0xd6d20ecf4fafd95:0x7431f1084085a956',
	placeId: 'ChIJlf369OwgbQ0RVqmFQAjxMXQ',
	googleCategory: 'Panadería',
	tagline: 'Panadería y confitería en la calle Libertador Simón Bolívar, Córdoba',
	description:
		'Panadería Confitería Miguel, en C. Libertador Simón Bolívar, 12 (barrio del Sur, 14013 Córdoba). Panadería y confitería de barrio, abierta todos los días de 8:00 a 15:00. 4,0 sobre 5 en Google.',
	hoursSummary: 'Todos los días, 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Confiter%C3%ADa+Miguel/@37.8591815,-4.7825141,17z/data=!4m6!3m5!1s0xd6d20ecf4fafd95:0x7431f1084085a956!8m2!3d37.8591815!4d-4.7825141!16s%2Fg%2F1tdlwmfb?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8591815%2C-4.7825141',
	embed: 'https://maps.google.com/maps?q=37.8591815,-4.7825141&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8591815,-4.7825141',
};

/** Horario publicado en la ficha de Google: el mismo todos los días. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–15:00' },
	{ day: 'Sábado', value: '8:00–15:00' },
	{ day: 'Domingo', value: '8:00–15:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: abre todos los días, de 8:00 a 15:00, domingo incluido. Para el 1 de noviembre (Día de Todos los Santos) Google avisa de que el horario podría ser diferente.';

/** Lo que declara la ficha, sin añadir catálogo que no publica. */
export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Abierto todos los días',
	'8:00–15:00',
	'Barrio del Sur',
];

export const HIGHLIGHTS = [
	{
		title: 'El nombre',
		text: 'La ficha la registra como «Panadería Confitería Miguel», con la categoría «Panadería». No publica carta ni lista de productos, así que la web no promete dulces ni panes concretos: para saber qué hay, se pregunta en el mostrador.',
	},
	{
		title: 'La mañana',
		text: 'Abre todos los días de 8:00 a 15:00, domingo incluido: es horario de mañana completa, no de tarde. Para el 1 de noviembre Google avisa de que podría cambiar.',
	},
	{
		title: 'El barrio',
		text: 'Está en la calle Libertador Simón Bolívar, 12, en el barrio del Sur (14013 Córdoba). La entrada de la calle es a pie de acera y el teléfono de la ficha es el 957 42 11 23.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Confitería Miguel?',
		a: 'En la calle Libertador Simón Bolívar, 12, en el barrio del Sur (14013 Córdoba). El mapa de esta página abre la ubicación exacta de la ficha y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días, de 8:00 a 15:00, domingo incluido, según la ficha de Google. Para el 1 de noviembre Google avisa de que el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha no publica carta, catálogo ni precios, y no tiene fotos con las que comprobarlo. Esta página no lo inventa: lo que haya en el mostrador se consulta por teléfono (957 42 11 23) o en el propio establecimiento.',
	},
	{
		q: '¿Hacen encargos o tartas por encargo?',
		a: 'No hay información publicada sobre encargos. El negocio se anuncia como panadería y confitería, pero la ficha no detalla servicios, plazos ni precios. Cualquier encargo se habla directamente por teléfono.',
	},
	{
		q: '¿Tiene página web o carta con precios?',
		a: 'No. La ficha de Google no enlaza ninguna web propia ni publica precios. Esta página no los reproduce ni los estima.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,0 sobre 5 con 8 reseñas, según la ficha pública. Son pocas reseñas y con opiniones variadas; esta web no reproduce sus textos, pero se leen enteros en el enlace a Google.',
	},
	{
		q: '¿Tiene fotos la ficha de Google?',
		a: 'No. En el momento de crear esta web, la ficha pública no muestra ninguna fotografía del negocio (ni del local ni de sus productos). Por eso esta página no incluye galería: no se usan imágenes de otros establecimientos.',
	},
	{
		q: '¿Es accesible o tiene aparcamiento?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas; no publica información sobre el acceso al local. Si necesitas un acceso concreto, llama antes al 957 42 11 23.',
	},
];
