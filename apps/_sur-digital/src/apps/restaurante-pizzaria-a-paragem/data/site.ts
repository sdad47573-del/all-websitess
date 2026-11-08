/**
 * Datos de Restaurante Pizzaria A Paragem (7750-312 Mértola, Portugal).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, categorías, valoración con número de reseñas,
 * teléfono, coordenadas, plus code, horario semanal y servicios de accesibilidad.
 *
 * La ficha no publica calle ni número (solo «Portugal, 7750-312 Mértola, Portugal»), así que la web
 * ubica el local con el código postal, la localidad, las coordenadas y el plus code, sin inventar
 * ninguna calle. Tampoco publica descripción del titular, precios ni carta, así que no se reproduce
 * ninguno. La respuesta de la ficha no destaca ninguna reseña con texto (la publicación de reseñas
 * figura como desactivada), por lo que esta web no cita ninguna y enlaza al listado completo.
 * Tampoco muestra ningún distintivo junto al nombre.
 *
 * El sobrenombre «A Paragem» lo publica la propia ficha y se usa como nombre corto.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-pizzaria-a-paragem',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Pizzaria A Paragem',
	/** Sobrenombre que publica la propia ficha. */
	shortName: 'A Paragem',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Restaurante» y «Pizzería».
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Pizzería'],
	/**
	 * La ficha no publica calle ni número: sus componentes de dirección son el nombre, «Portugal»,
	 * «7750-312 Mértola» y «Portugal». Sin `streetAddress`: no se inventa ninguna calle.
	 */
	postalCode: '7750-312',
	city: 'Mértola',
	countryName: 'Portugal',
	country: 'PT',
	/** Teléfono fijo publicado en la ficha (+351 286…, prefijo de la zona de Beja). */
	phone: '+351 286 616 140',
	latitude: 37.6540633,
	longitude: -7.5975743,
	/** Plus code que publica la ficha («MC32+JX Mértola, Portugal» en corto). */
	plusCode: '8C9JMC32+JX',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 1987 reseñas). */
	rating: 4.7,
	reviewCount: 1987,
	site: site.siteUrl,
} as const;

/** Dirección completa tal como se muestra en la web, sin calle porque la ficha no la publica. */
export const addressLine = `${business.postalCode} ${business.city} (${business.countryName})`;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Pizzaria+A+Paragem/@37.6540633,-7.5975743,17z/data=!3m1!4b1!4m6!3m5!1s0xd1063597f270d2b:0x7b57f4c1a58ca8d3!8m2!3d37.6540633!4d-7.5975743!16s%2Fg%2F11b7y9kvkl?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJKw0nf1ljEA0R06iMpcH0V3s&hl=es';

export const phoneHref = 'tel:+351286616140';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local
 * cierra los lunes y abre el resto de la semana: el domingo de 12:00 a 15:00 y de martes a sábado
 * en dos turnos, de 12:00 a 14:30 y de 19:00 a 21:30. En el momento de la consulta la ficha
 * mostraba «Abierto · Cierre: 15:00» (domingo).
 *
 * Un día sin tramos (`shifts: []`) es un día cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 14:30 · 19:00 – 21:30',
		shifts: [
			{ open: '12:00', close: '14:30' },
			{ open: '19:00', close: '21:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 14:30 · 19:00 – 21:30',
		shifts: [
			{ open: '12:00', close: '14:30' },
			{ open: '19:00', close: '21:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 14:30 · 19:00 – 21:30',
		shifts: [
			{ open: '12:00', close: '14:30' },
			{ open: '19:00', close: '21:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 14:30 · 19:00 – 21:30',
		shifts: [
			{ open: '12:00', close: '14:30' },
			{ open: '19:00', close: '21:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 14:30 · 19:00 – 21:30',
		shifts: [
			{ open: '12:00', close: '14:30' },
			{ open: '19:00', close: '21:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 15:00',
		shifts: [{ open: '12:00', close: '15:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De martes a domingo · lunes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aparcamiento y los
 * asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Lo que se puede decir en el hueco de las reseñas.
 *
 * La respuesta de la ficha no destaca ninguna reseña con texto (la publicación de reseñas figura
 * como desactivada), así que esta web no cita ninguna: las 1987 se pueden leer enteras en
 * Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 1987 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica calle, descripción del titular, precios ni carta, así que ninguna respuesta
 * los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Pizzaria A Paragem?',
		answer:
			'En 7750-312 Mértola (Portugal). La ficha no publica calle ni número, así que la forma exacta de ubicarlo es con las coordenadas 37.6540633, -7.5975743 o con el plus code 8C9JMC32+JX.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Pizzaria A Paragem?',
		answer:
			'La ficha publica este horario: cierra los lunes y abre de martes a sábado en dos turnos (de 12:00 a 14:30 y de 19:00 a 21:30) y el domingo de 12:00 a 15:00. Es el horario publicado en la ficha consultada el 11 de octubre de 2026.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y pizzería. Tiene 4,7 sobre 5 con 1987 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el +351 286 616 140.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha no publica calle, así que lo más exacto es usar las coordenadas 37.6540633, -7.5975743 o el plus code 8C9JMC32+JX. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aparcamiento y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 11 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante y pizzería en 7750-312 Mértola (Portugal), abierto de martes a domingo.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		addressLocality: business.city,
		postalCode: business.postalCode,
		addressCountry: business.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	acceptsReservations: true,
	servesCuisine: ['Restaurante', 'Pizzas'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours.flatMap((item) =>
		item.shifts.map((shift) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: shift.open,
			closes: shift.close,
		})),
	),
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${site.siteUrl}/#faq`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};

/**
 * Datos legales del titular (LSSI-CE).
 *
 * Rellena los tres campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
