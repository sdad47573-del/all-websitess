/**
 * Datos de Meson Walter (Paseo de la Estación, 33 · 23007 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal y las reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta, precios, servicios de accesibilidad, ningún
 * distintivo ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://meson-walter.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre tal como lo publica la ficha de Google Maps: «Meson Walter», sin tilde en «Meson».
	 * Se reproduce igual, sin corregirlo.
	 */
	name: 'Meson Walter',
	shortName: 'Meson Walter',
	/**
	 * Única categoría que publica Google en esta ficha: «Restaurante».
	 * No se añade ninguna otra que no aparezca.
	 */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «P.º de la Estación, 33»: aquí se
	 * desarrolla a «Paseo de la Estación, 33», como en el resto del repositorio.
	 */
	streetAddress: 'Paseo de la Estación, 33',
	postalCode: '23007',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 693 64 79 54',
	latitude: 37.7751209,
	longitude: -3.7893904,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6G6+26 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 206 reseñas). */
	rating: 4.5,
	reviewCount: 206,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Meson+Walter/@37.7751209,-3.7893904,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd7a7563aaaa7:0x8b88ca76f9722993!8m2!3d37.7751209!4d-3.7893904!16s%2Fg%2F11g6qgj_l8?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJp6o6VqfXbQ0Rkyly-XbKiIs&hl=es';

export const phoneHref = 'tel:+34693647954';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * al mediodía de lunes a sábado y por la noche de martes a sábado, salvo el miércoles, que solo
 * abre al mediodía como el lunes; el domingo cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto al mediodía igualmente, así que el aviso se recoge en el texto de
 * la sección de horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:30 – 16:30',
		shifts: [{ open: '13:30', close: '16:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:30 – 16:30',
		shifts: [{ open: '13:30', close: '16:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mediodía de lunes a sábado; noches de martes a sábado salvo el miércoles; el domingo cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Aquí la ficha **no publica ninguna** entrada de accesibilidad, así que la lista queda vacía y la
 * portada no muestra esa sección.
 */
export const accesibilidad: { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 4.
 */
export const reviews = [
	{
		text: 'Atención inmediata carta abierta y muy buena atención',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena cocina y buena gente',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Volveremos para probar el arroz o el jarrete!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Meson Walter?',
		answer:
			'En el Paseo de la Estación, 33, con código postal 23007, en Jaén (Andalucía). La ficha publica el plus code Q6G6+26 Jaén y las coordenadas 37.7751209, -3.7893904.',
	},
	{
		question: '¿Cuál es el horario de Meson Walter?',
		answer:
			'La ficha publica mediodía de lunes a sábado, de 13:30 a 16:30, y noches de martes a sábado, de 20:30 a 23:30, salvo el miércoles, que solo abre al mediodía, igual que el lunes. El domingo cierra. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto: es la única categoría que publica la ficha. Tiene 4,5 sobre 5 con 206 reseñas, y en las reseñas que destaca se habla de la atención, de la buena cocina y de platos como el arroz o el jarrete.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 693 64 79 54.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Paseo de la Estación, 33 y las coordenadas 37.7751209, -3.7893904. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6G6+26 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha consultada no publica ninguna información de accesibilidad, así que esta web no puede confirmarlo. Lo mejor es llamar al 693 64 79 54 y preguntar directamente.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en el Paseo de la Estación, 33 de Jaén, con servicio de mediodía de lunes a sábado y noches de martes a sábado.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.province,
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y no declara cocina. */
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
	/* Sin `amenityFeature`: la ficha no publica ninguna entrada de accesibilidad. */
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
