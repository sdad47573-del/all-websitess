/**
 * Datos de Confitería Panadería Lochi — C. Eugenio Gross, 11, Loc 1
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Confitería Panadería Lochi,
 *   36.7236365,-4.4360159, feature 0xd72f7a1a9f2ddc5:0xc52ef3e295c682c8.
 * - Dirección, categoría, valoración y horario: ficha pública de Google
 *   (octubre de 2026).
 * - Imágenes: panorama de Google Street View que la ficha asocia al negocio
 *   (captura de agosto de 2024). La ficha no tiene galería de fotos propia.
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, descripción, web,
 * redes, carta, precios ni servicios, así que la página no los afirma.
 */

export const BUSINESS = {
	name: 'Confitería Panadería Lochi',
	shortName: 'Lochi',
	mark: 'L',
	street: 'C. Eugenio Gross, 11, Loc 1',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	rating: 5,
	reviewsCount: 3,
	siteUrl: 'https://confiteria-panaderia-lochi.vercel.app',
	geo: { lat: 36.7236365, lng: -4.4360159 },
	featureId: '0xd72f7a1a9f2ddc5:0xc52ef3e295c682c8',
	placeId: 'ChIJxd3yqaH3cg0RyILGleLzLsU',
	plusCode: '8C8QPHF7+FH',
	googleCategory: 'Panadería',
	tagline: 'Panadería y confitería en Bailén-Miraflores',
	description:
		'Confitería Panadería Lochi en C. Eugenio Gross, 11, Loc 1 (Bailén-Miraflores, 29010 Málaga). Panadería de barrio con 5,0 sobre 5 en Google. Horario partido de mañana y tarde, mapa y vistas de la calle.',
	hoursSummary: 'L–S 8:00–14:30 · 17:00–20:30 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Confiter%C3%ADa+Panader%C3%ADa+Lochi/@36.7236365,-4.4360159,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a1a9f2ddc5:0xc52ef3e295c682c8!8m2!3d36.7236365!4d-4.4360159!16s%2Fg%2F11cmd7qxyx?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=14210998624656013896',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7236365%2C-4.4360159',
	embed: 'https://maps.google.com/maps?q=36.7236365,-4.4360159&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7236365,-4.4360159',
};

/** Panorama de Google Street View que la ficha asocia al negocio. */
export const STREET_VIEW = {
	panoid: '711zWEjRP_0JX3BD8dTC3g',
	date: 'agosto de 2024',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '8:00–14:30 · 17:00–20:30' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultado el 29 de octubre de 2026. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría ser diferente.';

/** Lo único que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Dos turnos',
	'Bailén-Miraflores',
	'Sin teléfono publicado',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y confitería',
		text: 'El nombre de la casa reúne las dos cosas: panadería y confitería. Google la clasifica como panadería en la calle Eugenio Gross, en Bailén-Miraflores.',
	},
	{
		title: 'Mañana y tarde',
		text: 'La ficha publica un horario partido de lunes a sábado, con dos turnos: de 8:00 a 14:30 y de 17:00 a 20:30. El domingo figura cerrado.',
	},
	{
		title: 'Una ficha sin más datos',
		text: 'Google no publica aquí teléfono, web, redes, descripción ni fotos del perfil. Esta página se limita a lo que sí consta, sin rellenar los huecos.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Confitería Panadería Lochi?',
		a: 'En la calle Eugenio Gross, número 11, local 1, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado abre en dos turnos: de 8:00 a 14:30 y de 17:00 a 20:30. El domingo está cerrado. El 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría variar.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'La ficha de Google de este local no publica ningún teléfono, así que esta página no ofrece número. La atención es en la propia tienda, en horario de apertura.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no publica página web, perfiles de redes sociales ni descripción del negocio, y esta página no enlaza nada que no aparezca en ella.',
	},
	{
		q: '¿Qué se vende?',
		a: 'El nombre indica panadería y confitería. La ficha no publica surtido, carta ni precios, así que esta página no los concreta: se consulta en el mostrador.',
	},
	{
		q: '¿Se pueden encargar tartas o dulces?',
		a: 'La ficha no publica servicio de encargos ni un canal para pedirlos. Para cualquier encargo conviene preguntar directamente en la tienda.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5,0 sobre 5 con 3 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información sobre accesibilidad del local, así que esta página no la afirma.',
	},
];
