/**
 * Datos de Restaurante El Ancla (Paseo Marítimo, 20, 04740 Roquetas de Mar, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas y horario semanal.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso. Google escribe la dirección como «P.º Marítimo, 20»: aquí se
 * desarrolla la abreviatura a «Paseo», como en el resto de webs del repositorio.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://el-ancla-roquetas.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	name: 'Restaurante El Ancla',
	shortName: 'El Ancla',
	/** Categoría con la que aparece en Google, sin añadir ninguna que no publique. */
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo', 'Restaurante de cocina española'],
	streetAddress: 'Paseo Marítimo, 20',
	postalCode: '04740',
	city: 'Roquetas de Mar',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 16 02 22',
	latitude: 36.7210155,
	longitude: -2.6281502,
	/** Valoración de la ficha en la fecha de consulta (4,5 con 1506 reseñas). */
	rating: 4.5,
	reviewCount: 1506,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Ancla/@36.7210155,-2.6281502,17z/data=!3m1!4b1!4m6!3m5!1s0xd707111d1674a61:0xf5c8ec507383d080!8m2!3d36.7210155!4d-2.6281502!16s%2Fg%2F1q5bn0bgn?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJYUpn0RFxcA0RgNCDc1DsyPU&hl=es';

export const phoneHref = 'tel:+34950160222';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El restaurante sirve dos turnos, mediodía y noche, y descansa el martes. Se publica el día tal
 * como lo da Google en la fecha de la consulta (martes 6 de octubre de 2026: cerrado).
 *
 * El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional (Fiesta Nacional de España)
 * con el aviso de que el horario podía ser diferente, así que se publica la advertencia en vez de
 * dar ese día por seguro.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:30 – 16:30 y 20:00 – 23:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Monday',
	},
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '12:30 – 16:30 y 20:00 – 23:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 16:30 y 20:00 – 23:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 16:30 y 20:00 – 23:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 16:30 y 20:00 – 23:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 16:30 y 20:00 – 23:00',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

export const hoursSummary = 'De 12:30 a 16:30 y de 20:00 a 23:00; martes cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual: no hay ninguna reseña inventada ni parafraseada, y no se reproduce ninguna
 * carta porque la ficha no publica ninguna.
 */
export const reviews = [
	{
		text: 'Cena para 2 en pareja, gamba roja, solomillo, pescado, pulpo y buen vino.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Pedimos: sardinas boquerones al limón almejas y arroz meloso de pulpo',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Buenas raciones cerveza fresquita j buena atención',
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
		question: '¿Dónde está Restaurante El Ancla?',
		answer:
			'En el Paseo Marítimo, 20, en Roquetas de Mar (Almería), código postal 04740. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 16 02 22 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica de 12:30 a 16:30 y de 20:00 a 23:00 de miércoles a domingo y también el lunes, con el martes cerrado. El lunes 12 de octubre de 2026 aparecía marcado como festivo nacional con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante mediterráneo y de cocina española, con 4,5 sobre 5 y 1506 reseñas. Las reseñas que destacan en la ficha hablan de gamba roja, solomillo, pulpo, arroz meloso, sardinas y boquerones. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 16 02 22.',
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
	description:
		'Restaurante mediterráneo y de cocina española en el Paseo Marítimo de Roquetas de Mar (Almería).',
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
	servesCuisine: ['Cocina mediterránea', 'Cocina española'],
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
