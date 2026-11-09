/**
 * Datos de Mesón La Paloma (C. Postigos, 58 · 30300 Cartagena, Murcia).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas que la ficha destaca.
 *
 * La ficha no publica carta, precios ni web propia del local, y tampoco trae una descripción
 * firmada por el titular, así que no se reproduce ninguna de esas cosas.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/meson-la-paloma',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Mesón La Paloma',
	shortName: 'La Paloma',
	/** Única categoría que publica Google en esta ficha: «Restaurante». */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha (Google la abrevia como «C. Postigos, 58»). */
	streetAddress: 'C. Postigos, 58',
	postalCode: '30300',
	city: 'Cartagena',
	province: 'Murcia',
	region: 'Murcia',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 968 08 72 48',
	latitude: 37.6228797,
	longitude: -0.9856045,
	/** Plus code que publica la ficha. */
	plusCode: 'J2F7+5Q Cartagena',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 108 reseñas). */
	rating: 4.6,
	reviewCount: 108,
	/** Identificador de lugar de Google, del que se compone el enlace de reseñas. */
	placeId: 'ChIJNcOWtCNDYw0R2zkN_R6qRHM',
	/** Identificador de canal (el `/g/…` que aparece al final del enlace de Maps). */
	channel: '/g/11gyc_jypj',
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Mes%C3%B3n+La+Paloma/@37.6228797,-0.9856045,17z/data=!3m1!4b1!4m6!3m5!1s0xd634323b496c335:0x7344aa1efd0d39db!8m2!3d37.6228797!4d-0.9856045!16s%2Fg%2F11gyc_jypj?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl = `https://search.google.com/local/reviews?placeid=${business.placeId}&hl=es`;

export const phoneHref = 'tel:+34968087248';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre
 * todos los días con horario de mañana a noche: de 6:00 a 22:00 de lunes a sábado y de 6:00 a 14:00
 * los domingos. No figura ningún día de cierre.
 *
 * El lunes 12 lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente; se recoge en el texto de la sección de horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:00 – 22:00',
		shifts: [{ open: '06:00', close: '22:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:00 – 22:00',
		shifts: [{ open: '06:00', close: '22:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:00 – 22:00',
		shifts: [{ open: '06:00', close: '22:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:00 – 22:00',
		shifts: [{ open: '06:00', close: '22:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:00 – 22:00',
		shifts: [{ open: '06:00', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '6:00 – 22:00',
		shifts: [{ open: '06:00', close: '22:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '6:00 – 14:00',
		shifts: [{ open: '06:00', close: '14:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abierto todos los días desde las 6:00; de lunes a sábado hasta las 22:00 y los domingos hasta las 14:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo aparece una entrada, y figura como disponible: los asientos adaptados para sillas de
 * ruedas.
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/** Distintivo que destaca la ficha además de la categoría. */
export const distintivo = 'Brunch';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 3
 * sobre 5.
 */
export const reviews = [
	{
		text: 'Buen trato buena calidad pulpo inmejorable',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los camareros y el jefe muy atentos y serviciales.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buen lugar para almorzar, precios económicos',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni web propia, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Mesón La Paloma?',
		answer:
			'En la C. Postigos, 58, con código postal 30300, en Cartagena (Murcia). La ficha publica el plus code J2F7+5Q Cartagena y las coordenadas 37.6228797, -0.9856045.',
	},
	{
		question: '¿Cuál es el horario de Mesón La Paloma?',
		answer:
			'La ficha lo da abierto todos los días, sin ningún día de cierre: de 6:00 a 22:00 de lunes a sábado y de 6:00 a 14:00 los domingos. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, con el distintivo de brunch, y le da 4,6 sobre 5 con 108 reseñas. En las reseñas que destaca la ficha se menciona el pulpo, el trato del servicio y de la jefatura, que es un buen sitio para almorzar y sus precios económicos.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 968 08 72 48.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Postigos, 58 y las coordenadas 37.6228797, -0.9856045, en Cartagena. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code J2F7+5Q Cartagena.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una única entrada de accesibilidad, los asientos adaptados para sillas de ruedas, y figura como disponible.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 9 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la C. Postigos, 58 de Cartagena, abierto todos los días desde las 6:00, con el distintivo de brunch.',
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
	/* Sin `servesCuisine`: la ficha no publica una cocina concreta y no se inventa una. */
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
