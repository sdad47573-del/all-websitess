/**
 * Datos de Restaurante Club de Mar (Playa de las Almadrabillas, s/n, 04007 Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas y horario semanal.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://club-de-mar-almeria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Google publica la ficha como «Restaurante Club de Mar / El Candelero (Almería)»: el nombre
	 * recoge los dos con los que se conoce al local y termina con la ciudad entre paréntesis, que
	 * Google añade para desambiguar. En la web se usa «Restaurante Club de Mar» y se menciona el
	 * otro nombre, sin la aclaración de la ciudad.
	 */
	name: 'Restaurante Club de Mar',
	shortName: 'Club de Mar',
	/** Categoría con la que aparece en Google, sin añadir ninguna que no publique. */
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	streetAddress: 'Playa de las Almadrabillas, s/n',
	postalCode: '04007',
	city: 'Almería',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 23 50 48',
	latitude: 36.8316437,
	longitude: -2.4603917,
	/** Valoración de la ficha en la fecha de consulta (4,3 con 1235 reseñas). */
	rating: 4.3,
	reviewCount: 1235,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Club+de+Mar+%2F+El+Candelero+(Almer%C3%ADa)/@36.8316437,-2.4603917,17z/data=!3m1!4b1!4m6!3m5!1s0xd70761d3cc530c3:0x56ec7dde6a3125e0!8m2!3d36.8316437!4d-2.4603917!16s%2Fg%2F1hb_gg8kl?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJwzDFPB12cA0R4CUxat597FY&hl=es';

export const phoneHref = 'tel:+34950235048';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Miércoles a sábado tiene dos turnos (mediodía y noche); martes y domingo, solo el mediodía. El
 * lunes aparece con otro horario (9:00 – 16:00) en una semana en la que Google lo marca como festivo
 * nacional: se publica el valor tal como lo da la ficha, con la advertencia, porque Google no
 * declara cuál es el horario habitual de los lunes.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:30 – 16:00',
		shifts: [{ open: '13:30', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:30 – 16:00 y 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:30 – 16:00 y 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:30 – 16:00 y 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 16:00 y 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:30 – 16:00',
		shifts: [{ open: '13:30', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Día y turno que la ficha marca con aviso: el lunes festivo del 12 de octubre de 2026. */
export const hoursSummary =
	'Mediodía de 13:30 a 16:00; de miércoles a sábado también de 20:30 a 23:30';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar. Google destaca tres reseñas en la ficha: las dos de aquí y una
 * tercera crítica («El solomillo del plato principal lo hicieron demasiado y estaba seco.»), que no
 * se reproduce en la portada por ser una web informativa del establecimiento; se puede leer entera,
 * junto al resto, en el enlace público a las reseñas que hay en la propia página.
 */
export const reviews = [
	{
		text: 'Cambio de gerencia buena comida y gran equipo de camareros',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Buena cocina, buen servicio e inmejorables vistas',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, terraza, reparto ni reservas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante Club de Mar?',
		answer:
			'En la playa de las Almadrabillas, s/n, en Almería, código postal 04007. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 23 50 48 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica con dos turnos de miércoles a sábado (13:30 a 16:00 y 20:30 a 23:30) y solo el mediodía los martes y los domingos (13:30 a 16:00). El lunes aparece con un horario distinto, de 9:00 a 16:00, en una semana en la que Google lo marca como festivo nacional con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono tanto los lunes como los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y restaurante mediterráneo, con 4,3 sobre 5 y 1235 reseñas. Las reseñas que destacan en la ficha hablan de buena cocina, buen servicio y de las vistas. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 23 50 48.',
	},
	{
		question: '¿También se llama El Candelero?',
		answer:
			'Google publica la ficha como «Restaurante Club de Mar / El Candelero (Almería)», con los dos nombres. Esta web usa «Restaurante Club de Mar» por ser el primero que aparece, y el teléfono y la dirección son los mismos que publica la ficha.',
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
	alternateName: 'El Candelero',
	description: 'Restaurante mediterráneo en la playa de las Almadrabillas, Almería.',
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
	servesCuisine: ['Cocina mediterránea'],
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
