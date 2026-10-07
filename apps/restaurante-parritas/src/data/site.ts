/**
 * Datos de Restaurante Parritas. (Calle Ote., 18, 04728 Felix, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal y reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-parritas.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, con el punto final incluido. */
	name: 'Restaurante Parritas.',
	shortName: 'Parritas',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española', 'Restaurante mediterráneo'],
	/**
	 * La ficha escribe la dirección como «Calle Ote., 18, 04728 Felix, Almería»: se conserva tal
	 * cual, con la abreviatura de la calle que publica Google.
	 */
	streetAddress: 'Calle Ote., 18',
	postalCode: '04728',
	city: 'Felix',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 55 95 02',
	latitude: 36.8705426,
	longitude: -2.656128,
	/** Plus code que publica la ficha. */
	plusCode: 'V8CV+6G Felix',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 281 reseñas). */
	rating: 4.4,
	reviewCount: 281,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Parritas./@36.8705426,-2.656128,17z/data=!3m1!4b1!4m6!3m5!1s0xd706db27f74c33b:0x3507f23fd5ed2256!8m2!3d36.8705426!4d-2.656128!16s%2Fg%2F1tqp_lr2?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJO8N0f7JtcA0RViLt1T_yBzU&hl=es';

export const phoneHref = 'tel:+34950559502';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre, y la ficha
 * marca **dos días de cierre**: miércoles y martes. Los días abiertos van de 12:30 a 17:00, salvo
 * el sábado y el domingo, que alargan hasta las 18:00. El lunes 12, Fiesta Nacional de España,
 * mantiene su horario con el aviso de que podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:30 – 17:00',
		shifts: [{ open: '12:30', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 17:00',
		shifts: [{ open: '12:30', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 17:00',
		shifts: [{ open: '12:30', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 18:00',
		shifts: [{ open: '12:30', close: '18:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 18:00',
		shifts: [{ open: '12:30', close: '18:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 12:30 a 17:00 (18:00 el fin de semana) · cierra martes y miércoles';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta, y se citan tal cual, sin
 * corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Comida casera, todo muy rico, me encantó el ajoblanco y los postres caseros.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena comida casera y una magnífica atención de la camarera.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Cuidada atención, simpatía y una buena comida en un ambiente tranquilo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, terraza, reparto ni reservas más allá de lo que dicen la ficha y sus reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante Parritas?',
		answer:
			'En la Calle Ote., 18 de Felix, con código postal 04728, en la provincia de Almería. La ficha publica la dirección completa como «Calle Ote., 18, 04728 Felix, Almería» y además da el plus code V8CV+6G Felix y las coordenadas 36.8705426, -2.656128.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Los días que abre sirve de 12:30 a 17:00, y el sábado y el domingo hasta las 18:00. Cierra los martes y los miércoles. Es el horario que publica la ficha consultada el 7 de octubre de 2026: el lunes 12 de octubre, Fiesta Nacional de España, mantenía su horario con el aviso de que podría ser diferente.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina española y mediterránea, con 4,4 sobre 5 y 281 reseñas. Las tres reseñas que la ficha destaca hablan de comida casera, del ajoblanco y de los postres caseros, de una buena atención y de un ambiente tranquilo. La ficha no publica la carta ni los precios, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Cierra algún día?',
		answer:
			'Sí: la ficha marca como cerrados el martes y el miércoles. El resto de la semana abre a las 12:30, y el sábado y el domingo cierra a las 18:00 en lugar de a las 17:00.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección de la Calle Ote., 18 y las coordenadas 36.8705426, -2.656128. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code V8CV+6G Felix.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 7 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina española y mediterránea en la Calle Ote., 18, 04728 Felix (Almería), con cocina casera y cierre los martes y miércoles.',
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
	acceptsReservations: false,
	/**
	 * `servesCuisine` traduce las dos categorías que publica Google («Restaurante de cocina
	 * española» y «Restaurante mediterráneo»). No se declara ninguna otra cocina.
	 */
	servesCuisine: ['Española', 'Mediterránea'],
	/*
	 * Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno.
	 */
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
