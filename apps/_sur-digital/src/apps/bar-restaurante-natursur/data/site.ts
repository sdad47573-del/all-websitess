/**
 * Datos de Bar restaurante Natursur (Paraje Pisaica de la Virgen, s/n, 04240 Viator, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas y horario semanal.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso. Google escribe la dirección como «Paraje Pisaica de la Virgen
 * SN»: aquí se desarrolla la abreviatura a «s/n» (sin número), que es lo que significa.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://natursur-viator.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	name: 'Bar restaurante Natursur',
	shortName: 'Natursur',
	/** Categoría con la que aparece en Google, sin añadir ninguna que no publique. */
	category: 'Restaurante de cocina española',
	categories: ['Restaurante', 'Bar', 'Restaurante de cocina española'],
	streetAddress: 'Paraje Pisaica de la Virgen, s/n',
	postalCode: '04240',
	city: 'Viator',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 641 07 66 72',
	latitude: 36.8762252,
	longitude: -2.4092015,
	/** Valoración de la ficha en la fecha de consulta (4,5 con 86 reseñas). */
	rating: 4.5,
	reviewCount: 86,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del bar, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+restaurante+Natursur/@36.8762252,-2.4092015,17z/data=!3m1!4b1!4m6!3m5!1s0xd7a9f9a534ef6df:0xdf6de6e9b725ffc8!8m2!3d36.8762252!4d-2.4092015!16s%2Fg%2F11gmyt49xg?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ3_ZOU5qfeg0RyP8lt-nmbd8&hl=es';

export const phoneHref = 'tel:+34641076672';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes aparecía marcado como festivo nacional (12 de octubre de 2026) con el aviso de que el
 * horario podía variar, así que se publica la advertencia en lugar de dar ese día por seguro.
 */
export const hours = [
	{ day: 'Lunes', service: '5:00 – 21:00', open: '05:00', close: '21:00', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '5:00 – 21:00', open: '05:00', close: '21:00', dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '5:00 – 21:00',
		open: '05:00',
		close: '21:00',
		dayOfWeek: 'Wednesday',
	},
	{ day: 'Jueves', service: '5:00 – 21:00', open: '05:00', close: '21:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '5:00 – 21:00', open: '05:00', close: '21:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '6:00 – 12:00', open: '06:00', close: '12:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: 'Cerrado', open: null, close: null, dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'De 5:00 a 21:00; sábado hasta las 12:00 y domingo cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual: no hay ninguna reseña inventada ni parafraseada. La del menú diario es una
 * reseña, no un menú publicado: la ficha no tiene carta, así que no se reproduce ninguna.
 */
export const reviews = [
	{
		text: 'La comida buenísima y buen precio, buena atención y buen ambiente.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Excelente atención y muy buena cocina',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Menú diario con servicio rápido',
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
		question: '¿Dónde está el Bar restaurante Natursur?',
		answer:
			'En el Paraje Pisaica de la Virgen, s/n, en Viator (Almería), código postal 04240. Puedes abrir la ubicación exacta en Google Maps o llamar al 641 07 66 72 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica de 5:00 a 21:00 de lunes a viernes, el sábado de 6:00 a 12:00 y el domingo cerrado. El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional con el aviso de que el horario podía variar, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina española, y también como bar, con 4,5 sobre 5 y 86 reseñas. Las reseñas publicadas en la ficha hablan de buena cocina, buen precio y menú diario con servicio rápido. La carta no está publicada, así que para saber el menú de hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el bar no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 641 07 66 72.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio bar publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: 'Bar restaurante de cocina española en Viator (Almería).',
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
	servesCuisine: ['Cocina española'],
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
