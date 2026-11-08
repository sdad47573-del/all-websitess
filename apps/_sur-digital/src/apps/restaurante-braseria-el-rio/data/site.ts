/**
 * Datos de Restaurante Braseria El Río (04440 Rágol, Almería).
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
	siteUrl: 'https://www.sur-digital.com/restaurante-braseria-el-rio',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Braseria El Río',
	shortName: 'El Río',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/**
	 * Google **no publica calle** para este negocio: su dirección completa es «04440 Rágol,
	 * Almería», solo el código postal y el municipio. Por eso esta web no inventa una calle ni un
	 * número, y el dato estructurado se emite sin `streetAddress`.
	 */
	streetAddress: null,
	postalCode: '04440',
	city: 'Rágol',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha: es un móvil, no un fijo. */
	phone: '+34 691 01 00 78',
	latitude: 36.995902,
	longitude: -2.6817866,
	/** Valoración de la ficha en la fecha de consulta (4,4 con 134 reseñas). */
	rating: 4.4,
	reviewCount: 134,
	site: site.siteUrl,
} as const;

/** Dirección tal como la publica la ficha: sin calle, solo código postal y municipio. */
export const addressLine = `${business.postalCode} ${business.city}`;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Braseria+El+R%C3%ADo/@36.995902,-2.6817866,17z/data=!3m1!4b1!4m6!3m5!1s0xd701326f0dbbeeb:0x35f6612ba18a49b8!8m2!3d36.995902!4d-2.6817866!16s%2Fg%2F11ldsy859l?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ677b8CYTcA0RuEmKoSth9jU&hl=es';

export const phoneHref = 'tel:+34691010078';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a jueves cierra a media tarde (6:30 – 17:00) y de viernes a domingo alarga hasta la
 * medianoche (7:00 – 24:00). No marca ningún día de cierre. El lunes de esa semana la ficha lo
 * marca como Fiesta Nacional de España con el aviso de que el horario podía ser diferente: se
 * publica el valor tal como lo da la ficha, con la advertencia.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:30 – 17:00',
		shifts: [{ open: '06:30', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:30 – 17:00',
		shifts: [{ open: '06:30', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:30 – 17:00',
		shifts: [{ open: '06:30', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:30 – 17:00',
		shifts: [{ open: '06:30', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 24:00',
		shifts: [{ open: '07:00', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '7:00 – 24:00',
		shifts: [{ open: '07:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '7:00 – 24:00',
		shifts: [{ open: '07:00', close: '24:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De lunes a jueves 6:30 – 17:00; de viernes a domingo 7:00 – 24:00';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar, ni siquiera su puntuación. Son las tres que Google destaca y
 * ninguna es una queja, así que se publican las tres.
 */
export const reviews = [
	{
		text: 'Comida contundente y de calidad, precios muy muy asequibles y raciones generosas',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Sin duda, volveremos a repetir si pasamos por la zona.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Llegamos dos personas a almorzar y pedimos menú.',
		source: 'Reseña de la ficha de Google Maps',
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
		question: '¿Dónde está el Restaurante Braseria El Río?',
		answer:
			'En Rágol (Almería), código postal 04440. La ficha de Google Maps no publica una dirección con calle para este negocio: solo el municipio y el código postal, así que no hay una dirección postal que reproducir. Para llegar, lo más fiable es abrir la ubicación exacta en Google Maps o llamar al 691 01 00 78 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica abierto de 6:30 a 17:00 de lunes a jueves y de 7:00 a 24:00 de viernes a domingo, sin ningún día de cierre. El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como bar restaurante, con 4,4 sobre 5 y 134 reseñas. Sus reseñas destacadas hablan de comida contundente y de calidad, de raciones generosas y de precios asequibles, y una de las fotos de la ficha lleva por pie «Bacalao frito patatas caseras». La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Tiene menú del día?',
		answer:
			'Una de las reseñas que Google destaca cuenta que fueron dos personas a almorzar y pidieron menú. La ficha no publica la carta ni el precio del menú, así que no se puede confirmar nada más: pregunta por teléfono si quieres saber qué incluye.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 691 01 00 78.',
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
	description: 'Bar restaurante de brasa en Rágol, Almería.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	priceRange: '€',
	address: {
		'@type': 'PostalAddress',
		// La ficha no publica calle, así que el dato estructurado se emite sin `streetAddress`.
		...(business.streetAddress ? { streetAddress: business.streetAddress } : {}),
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
	// La ficha solo publica la categoría «Bar restaurante»: el tipo de cocina se toma del propio
	// nombre del establecimiento (Braseria).
	servesCuisine: ['Cocina a la brasa'],
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
