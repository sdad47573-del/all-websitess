/**
 * Datos de Panadería Mar Confitería — Rotonda de Suárez, 5
 * (Bailén-Miraflores, 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Mar Confitería,
 *   36.7291534,-4.443117, feature 0xd72f708ded80b81:0xd2fd1baa049063cb.
 * - Dirección, categoría, valoración, número de reseñas y horario: ficha
 *   pública de Google (octubre de 2026).
 * - Imagen: vista de Google Street View de la Rotonda de Suárez asociada a la
 *   ficha (panoid uyWi3TUS5un_73RLBQbQgQ).
 *
 * Lo que la web NO inventa: la ficha no publica teléfono, web, carta, precios
 * ni fotografías del interior. Tampoco hay reseñas con texto accesible. La
 * página se limita a la dirección, el horario, la categoría y la valoración
 * publicadas, y no cita productos concretos ni importes.
 */

export const BUSINESS = {
	name: 'Panadería Mar Confitería',
	shortName: 'Mar',
	mark: 'M',
	street: 'Rotonda de Suárez, 5',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	rating: 4.4,
	reviewsCount: 8,
	siteUrl: 'https://panaderia-mar-confiteria.vercel.app',
	geo: { lat: 36.7291534, lng: -4.443117 },
	featureId: '0xd72f708ded80b81:0xd2fd1baa049063cb',
	placeId: 'ChIJgQvY3gj3cg0Ry2OQBKob_dI',
	googleCategory: 'Panadería',
	tagline: 'Panadería y confitería en Bailén-Miraflores, Málaga',
	description:
		'Panadería Mar Confitería, en la Rotonda de Suárez, 5 (Bailén-Miraflores, 29011 Málaga). Panadería y confitería con horario de mañana y tarde y apertura los domingos por la mañana.',
	hoursSummary: 'L–V 8:00–15:00 y 17:00–20:30 · S 8:00–15:00 y 17:00–19:00 · D 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Mar+Confiter%C3%ADa/@36.7291534,-4.443117,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f708ded80b81:0xd2fd1baa049063cb!8m2!3d36.7291534!4d-4.443117!16s%2Fg%2F11cmg1gc6s?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=15203338334107624395',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7291534%2C-4.443117',
	embed: 'https://maps.google.com/maps?q=36.7291534,-4.443117&z=17&hl=es&output=embed',
};

/** Imagen de Google Street View asociada a la ficha. */
export const STREET_VIEW = {
	panoid: 'uyWi3TUS5un_73RLBQbQgQ',
	url: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7291534,-4.443117&heading=78.44&pitch=4.45',
};

/** Horario partido publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–15:00 y 17:00–20:30' },
	{ day: 'Sábado', value: '8:00–15:00 y 17:00–19:00' },
	{ day: 'Domingo', value: '8:00–15:00' },
];

/** Datos que sí publica la ficha, resumidos para la franja del hero. */
export const FACTS = [
	{ label: 'Categoría', value: 'Panadería' },
	{ label: 'Nota', value: '4,4 / 5 · 8 reseñas' },
	{ label: 'Mañanas', value: '8:00–15:00' },
	{ label: 'Tardes', value: '17:00–20:30 · L–V' },
];

export const FAQ = [
	{
		q: '¿Dónde está la Panadería Mar Confitería?',
		a: 'En la Rotonda de Suárez, 5, en el barrio de Bailén-Miraflores (29011 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 15:00 y de 17:00 a 20:30. El sábado repite la mañana y por la tarde abre de 17:00 a 19:00. El domingo solo abre por la mañana, de 8:00 a 15:00.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí, los domingos abre de 8:00 a 15:00. Es el único día sin horario de tarde.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono ni página web, y esta página no inventa ninguno. La forma de contacto es acudir al establecimiento o consultar la ficha pública de Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Google la clasifica como panadería y el nombre del establecimiento incluye confitería, así que se trata de una panadería con dulces. La ficha no publica carta ni precios, por lo que esta página no cita productos concretos ni importes.',
	},
	{
		q: '¿Tiene fotos del interior?',
		a: 'La ficha pública no incluye fotografías del interior. La imagen de esta página es una vista de Google Street View de la Rotonda de Suárez y puede ser anterior al rótulo actual del local.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,4 sobre 5 con 8 reseñas en Google. La ficha no muestra reseñas con texto que se puedan citar.',
	},
];
