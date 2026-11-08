/**
 * Datos de Panadería Confitería Las Flores (Av. San Sebastián, 5 · Bailén-Miraflores · 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Confitería Las Flores,
 *   36.7229403,-4.4363528, feature 0xd72f7a04d1a7da5:0xd32926cf76b6e47.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   con scripts/fetch-maps-photos.mjs.
 *
 * Lo que la web NO inventa: la ficha no publica descripción del negocio, web
 * propia, carta ni precios. No se publican importes ni productos que no estén
 * en la categoría, las reseñas o las fotografías.
 */

export const BUSINESS = {
	name: 'Panadería Confitería Las Flores',
	shortName: 'Las Flores',
	mark: 'LF',
	street: 'Av. San Sebastián, 5',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '952 61 20 89',
	phoneHref: 'tel:+34952612089',
	rating: 3.9,
	reviewsCount: 18,
	siteUrl: 'https://www.sur-digital.com/panaderia-confiteria-las-flores',
	geo: { lat: 36.7229403, lng: -4.4363528 },
	featureId: '0xd72f7a04d1a7da5:0xd32926cf76b6e47',
	placeId: 'ChIJpX0aTaD3cg0RR25r92ySMg0',
	googleCategories: ['Panadería'],
	tagline: 'Pan, confitería y dulces árabes en la avenida de San Sebastián, Bailén-Miraflores',
	description:
		'Panadería Confitería Las Flores, en la avenida de San Sebastián, 5 (Bailén-Miraflores, 29010 Málaga). Pan, confitería y dulces árabes, todos los días de 7:30 a 16:00 y de 17:00 a 21:15. Teléfono 952 61 20 89.',
	hoursSummary: 'Todos los días, de 7:30 a 16:00 y de 17:00 a 21:15',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Confiter%C3%ADa+Las+Flores/@36.7229403,-4.4363528,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a04d1a7da5:0xd32926cf76b6e47!8m2!3d36.7229403!4d-4.4363528!16s%2Fg%2F11g9q3cf6b?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7229403%2C-4.4363528',
	embed: 'https://maps.google.com/maps?q=36.7229403,-4.4363528&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google (octubre de 2026): partido todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '7:30–16:00 · 17:00–21:15' },
	{ day: 'Martes', value: '7:30–16:00 · 17:00–21:15' },
	{ day: 'Miércoles', value: '7:30–16:00 · 17:00–21:15' },
	{ day: 'Jueves', value: '7:30–16:00 · 17:00–21:15' },
	{ day: 'Viernes', value: '7:30–16:00 · 17:00–21:15' },
	{ day: 'Sábado', value: '7:30–16:00 · 17:00–21:15' },
	{ day: 'Domingo', value: '7:30–16:00 · 17:00–21:15' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Tiene el mejor pan del barrio y los dulces frescos.',
	},
];

/** Lo que el rótulo del local, las reseñas y las fotografías permiten afirmar. */
export const SERVICIOS = [
	'Pan',
	'Confitería',
	'Dulces árabes',
	'Bollería',
	'Dulces frescos',
	'Todos los días',
];

/**
 * Productos que citan el rótulo del local, las reseñas y las fotografías del
 * perfil. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Pan del día',
				note: '«Tiene el mejor pan del barrio», escribe una reseña',
			},
			{
				name: 'Dulces frescos',
				note: 'citados en la misma reseña junto al pan',
			},
		],
	},
	{
		title: 'Confitería',
		items: [
			{
				name: 'Dulces árabes',
				note: 'los anuncia el propio rótulo del local',
			},
			{
				name: 'Medias lunas de almendra',
				note: 'en la bandeja de la vitrina, bañadas en miel',
			},
			{
				name: 'Pasteles y tartaletas',
				note: 'porciones de tarta y tartaletas en la vitrina de las fotos',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Confitería Las Flores?',
		a: 'En la avenida de San Sebastián, 5, en Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google indica el mismo horario todos los días: de 7:30 a 16:00 y de 17:00 a 21:15, con una pausa de una hora. En festivos puede cambiar; la propia ficha ya avisa de ello para el 1 de noviembre.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. La ficha publica horario idéntico los siete días de la semana, domingo incluido.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado en la ficha es el 952 61 20 89. La ficha no enlaza web propia ni página de pedidos online.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El rótulo del local anuncia panadería, confitería y dulces árabes; las reseñas hablan de pan y de dulces frescos, y la vitrina de las fotos enseña bollería, pasteles y una bandeja de dulces árabes de almendra. La ficha no publica carta ni precios, así que esta página no los inventa.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que tiene acceso para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 3,9 sobre 5 con 18 reseñas en Google. Las opiniones completas, buenas y malas, se pueden leer en la ficha.',
	},
];
