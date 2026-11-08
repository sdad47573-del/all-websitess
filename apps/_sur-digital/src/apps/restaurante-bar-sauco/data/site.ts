/**
 * Datos de Restaurante Bar Saúco (Av. de las Marinas, 12, 04740 Roquetas de Mar, Almería).
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
	siteUrl: 'https://www.sur-digital.com/restaurante-bar-sauco',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	name: 'Restaurante Bar Saúco',
	shortName: 'Saúco',
	/** Categoría con la que aparece en Google, sin añadir ninguna que no publique. */
	category: 'Restaurante andaluz',
	categories: ['Restaurante andaluz', 'Bar', 'Restaurante mediterráneo'],
	streetAddress: 'Av. de las Marinas, 12',
	postalCode: '04740',
	city: 'Roquetas de Mar',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 614 30 13 88',
	latitude: 36.7341641,
	longitude: -2.6233248,
	/** Valoración de la ficha en la fecha de consulta (4,6 con 571 reseñas). */
	rating: 4.6,
	reviewCount: 571,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Bar+Sa%C3%BAco/@36.7341641,-2.6233248,17z/data=!3m1!4b1!4m6!3m5!1s0xd70654a2d7192af:0xd44336d8d8e8989c!8m2!3d36.7341641!4d-2.6233248!16s%2Fg%2F11ddwy95hp?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJr5JxLUplcA0RnJjo2Ng2Q9Q&hl=es';

export const phoneHref = 'tel:+34614301388';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El local sirve dos turnos, mediodía y noche, y descansa el sábado. El lunes 12 de octubre de
 * 2026 aparecía marcado como festivo nacional (Fiesta Nacional de España) con el aviso de que el
 * horario podía ser diferente, así que se publica la advertencia en vez de dar ese día por seguro.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{ day: 'Sábado', service: 'Cerrado', shifts: [], dayOfWeek: 'Saturday' },
	{
		day: 'Domingo',
		service: '12:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

export const hoursSummary = 'De 12:00 a 16:00 y de 20:00 a 24:00; sábado cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual: no hay ninguna reseña inventada ni parafraseada, y no se reproduce ninguna
 * carta porque la ficha no publica ninguna.
 */
export const reviews = [
	{
		text: 'Destaco la sopa de picadillo, el caldo es 100% caldo de huesos esta INCREIBLE.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Restaurante muy limpio, comida casera muy rica, camareros rápidos y simpáticos.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Ah, y te regalan la fuente de ensalada, fresca y surtida.',
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
		question: '¿Dónde está el Restaurante Bar Saúco?',
		answer:
			'En la Avenida de las Marinas, 12, en Roquetas de Mar (Almería), código postal 04740. Puedes abrir la ubicación exacta en Google Maps o llamar al 614 30 13 88 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica de 12:00 a 16:00 y de 20:00 a 24:00 de lunes a viernes y el domingo, con el sábado cerrado. El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante andaluz, y también como bar y restaurante mediterráneo, con 4,6 sobre 5 y 571 reseñas. Las reseñas que destacan en la ficha hablan de comida casera, de la sopa de picadillo y del buen trato del personal. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 614 30 13 88.',
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
	description: 'Restaurante andaluz y mediterráneo en Roquetas de Mar (Almería).',
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
	servesCuisine: ['Cocina andaluza', 'Cocina mediterránea'],
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
