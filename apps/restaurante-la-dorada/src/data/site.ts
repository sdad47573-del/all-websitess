/**
 * Datos de Restaurante La Dorada (Paseo del Mar, 04740 Roquetas de Mar, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal y reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://la-dorada-roquetas.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Dorada',
	shortName: 'La Dorada',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Marisquería',
	categories: ['Marisquería', 'Restaurante mediterráneo', 'Pizzería'],
	/**
	 * Google escribe la dirección como «P.º del Mar, 04740 Roquetas de Mar, Almería» y **no publica
	 * número de portal**, así que aquí se desarrolla la abreviatura a «Paseo» —como en el resto de
	 * webs del repositorio— y no se inventa ningún número.
	 */
	streetAddress: 'Paseo del Mar',
	postalCode: '04740',
	city: 'Roquetas de Mar',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 33 45 90',
	latitude: 36.7221017,
	longitude: -2.6273633,
	/** Valoración de la ficha en la fecha de consulta (4,6 con 1081 reseñas). */
	rating: 4.6,
	reviewCount: 1081,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Dorada/@36.7221017,-2.6273633,17z/data=!3m1!4b1!4m6!3m5!1s0xd7065303f522d99:0x31203668c3e34cd0!8m2!3d36.7221017!4d-2.6273633!16s%2Fg%2F11fx91v_vg?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJmS1SPzBlcA0R0Ezjw2g2IDE&hl=es';

export const phoneHref = 'tel:+34950334590';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre con el mismo horario todos los días menos el martes, que cierra. El lunes de esa semana la
 * ficha lo marca como Fiesta Nacional de España con el aviso de que el horario podía ser diferente:
 * se publica el valor tal como lo da la ficha, con la advertencia.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
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
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 23:30',
		shifts: [{ open: '12:00', close: '23:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 12:00 a 23:30; los martes, cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar, ni siquiera su puntuación. Son las tres que Google destaca y
 * ninguna es una queja, así que se publican las tres.
 */
export const reviews = [
	{
		text: 'Recomendamos el arroz de marisco y el pescado frito.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Pedimos los mejillones del chef, gambas al ajillo y pulpo zarandeado.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Las alcachofas con gambas y almejas de las más deliciosas que he probado.',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos, precios,
 * terraza ni reparto más allá de lo que dicen la ficha y sus reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante La Dorada?',
		answer:
			'En el paseo del Mar, en Roquetas de Mar (Almería), código postal 04740. La ficha de Google Maps no publica número de portal para este restaurante, así que no hay un número que reproducir: lo más fiable es abrir la ubicación exacta en Google Maps o llamar al 950 33 45 90 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica abierto de 12:00 a 23:30 y cerrado los martes. El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono tanto los martes como los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como marisquería, restaurante mediterráneo y pizzería, con 4,6 sobre 5 y 1081 reseñas. Sus reseñas destacadas recomiendan el arroz de marisco y el pescado frito, y hablan de mejillones del chef, gambas al ajillo, pulpo zarandeado y alcachofas con gambas y almejas. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Sirve arroces?',
		answer:
			'Una de las reseñas que Google destaca empieza recomendando el arroz de marisco, así que parece que sí. La ficha no publica la carta ni el tipo de arroces, así que no se puede confirmar nada más: pregunta por teléfono si vas buscando uno concreto.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 33 45 90.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: 'Marisquería y restaurante mediterráneo en el paseo del Mar, Roquetas de Mar.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	priceRange: '€',
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
	// Se traducen las tres categorías que publica Google, sin añadir ninguna más.
	servesCuisine: ['Marisco', 'Cocina mediterránea', 'Pizza'],
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
