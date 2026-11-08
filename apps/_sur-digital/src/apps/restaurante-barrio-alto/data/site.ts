/**
 * Datos de Restaurante Barrio Alto (Calle Magallanes del Alquián, 56, 04130 El Alquián, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas y horario semanal.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso. Google escribe la dirección como «C. Magallanes del Alquián, 56»:
 * aquí se desarrolla la abreviatura a «Calle», como en el resto de webs del repositorio.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-barrio-alto',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	name: 'Restaurante Barrio Alto',
	shortName: 'Barrio Alto',
	/** Categoría con la que aparece en Google, sin añadir ninguna que no publique. */
	category: 'Marisquería',
	categories: ['Marisquería'],
	streetAddress: 'Calle Magallanes del Alquián, 56',
	postalCode: '04130',
	/** Google publica la localidad como «El Alquián», pedanía de Almería. */
	city: 'El Alquián',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 29 76 07',
	latitude: 36.850742,
	longitude: -2.3549855,
	/** Valoración de la ficha en la fecha de consulta (4,6 con 404 reseñas). */
	rating: 4.6,
	reviewCount: 404,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Barrio+Alto/@36.850742,-2.3549855,17z/data=!3m1!4b1!4m6!3m5!1s0xd7a996470fab4e5:0xf0bce52250de454b!8m2!3d36.850742!4d-2.3549855!16s%2Fg%2F11clvs2w6g?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ5bT6cGSZeg0RS0XeUCLlvPA&hl=es';

export const phoneHref = 'tel:+34950297607';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha: un solo turno de 13:30 a 17:00 y el lunes cerrado.
 *
 * El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional (Fiesta Nacional de España)
 * con el aviso de que el horario podía ser diferente, así que se publica la advertencia en lugar de
 * dar ese día por seguro.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', open: null, close: null, dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '13:30 – 17:00', open: '13:30', close: '17:00', dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '13:30 – 17:00',
		open: '13:30',
		close: '17:00',
		dayOfWeek: 'Wednesday',
	},
	{ day: 'Jueves', service: '13:30 – 17:00', open: '13:30', close: '17:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '13:30 – 17:00', open: '13:30', close: '17:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '13:30 – 17:00', open: '13:30', close: '17:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '13:30 – 17:00', open: '13:30', close: '17:00', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'De 13:30 a 17:00; lunes cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual: no hay ninguna reseña inventada ni parafraseada, y no se reproduce ninguna
 * carta porque la ficha no publica ninguna.
 */
export const reviews = [
	{
		text: 'Excelente trato Pescado y mariscos de la tierra, buena calidad y buen precio',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Pedimos ensalada pequeña, 1/2 ración pulpo y 4 gambas rojas.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'La gamba roja es un espectáculo y el lenguado me encantó.',
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
		question: '¿Dónde está Restaurante Barrio Alto?',
		answer:
			'En la calle Magallanes del Alquián, 56, en El Alquián (Almería), código postal 04130. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 29 76 07 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica de 13:30 a 17:00 de martes a domingo, con el lunes cerrado. El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como marisquería, con 4,6 sobre 5 y 404 reseñas. Las reseñas que destacan en la ficha hablan de pescado y marisco de la tierra, de la gamba roja, del pulpo y del lenguado. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 29 76 07.',
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
	description: 'Marisquería en El Alquián (Almería).',
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
	servesCuisine: ['Marisco', 'Pescado'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours
		.filter((item) => item.open && item.close)
		.map((item) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: item.open,
			closes: item.close,
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
