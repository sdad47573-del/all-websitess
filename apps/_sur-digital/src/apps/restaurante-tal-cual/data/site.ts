/**
 * Datos de Restaurante Tal cual (Plaza Mayor, 16 · 10003 Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * Google publica la dirección abreviada («Pl. Mayor, 16»): aquí se desarrolla a «Plaza Mayor, 16»,
 * como en el resto del repositorio; el código postal 10003 y la localidad (Cáceres) se publican
 * tal cual. La ficha no publica descripción del titular, web propia, perfiles sociales, carta ni
 * precios, así que no se reproduce ninguno. Tampoco publica terraza, menú ni otros servicios del
 * local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-tal-cual',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Tal cual',
	shortName: 'Tal cual',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha: «Restaurante Tal cual, Pl. Mayor, 16, Centro-Casco
	 * Antiguo, 10003 Cáceres». «Centro-Casco Antiguo» es el barrio y se conserva aparte.
	 */
	streetAddress: 'Plaza Mayor, 16',
	district: 'Centro-Casco Antiguo',
	postalCode: '10003',
	city: 'Cáceres',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 619 93 53 71',
	latitude: 39.4753331,
	longitude: -6.3707404,
	/** Plus code que publica la ficha (corto; el completo es 8CFMFJGH+4P). */
	plusCode: 'FJGH+4P Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 548 reseñas). */
	rating: 4.3,
	reviewCount: 548,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Tal+cual/@39.4753331,-6.3707404,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfd6668418ef:0xd6cacf952cd17e81!8m2!3d39.4753331!4d-6.3707404!16s%2Fg%2F11df0mwp9x?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7xiEZtbfFQ0RgX7RLJXPytY&hl=es';

export const phoneHref = 'tel:+34619935371';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes abre jornada continua de 12:00 a 24:00. El jueves abre a las 12:00 y no cierra
 * hasta las 4:00 de la madrugada. El viernes y el domingo parten el día en mediodía
 * (12:00–16:30 el viernes, 12:00–16:00 el domingo) y noche (20:00–24:00); el sábado el
 * mediodía es de 12:00 a 16:30 y la noche se alarga hasta las 0:30. El martes y el miércoles
 * está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '24:00' }],
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
		service: '12:00 – 4:00',
		shifts: [{ open: '12:00', close: '4:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:00', close: '0:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Lun 12:00–24:00 · jue–dom con noche · mar y mié cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo figuran dos entradas: los asientos adaptados para sillas de ruedas como disponibles y el
 * aparcamiento adaptado como no disponible. La ficha no publica acceso ni aseo adaptados.
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción, sus espacios ni su puntuación. Hay dos de 5
 * y una de 4 sobre 5.
 */
export const reviews = [
	{
		text: 'Muy rico el pulpo, las croquetas y el solomillo en su salsa.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Camareros majos y croquetas muy ricas.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy bien, excelente trato del camarero y comida casera y muy rica.',
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
		question: '¿Dónde está Restaurante Tal cual?',
		answer:
			'En la Plaza Mayor, 16, con código postal 10003, en Cáceres (Extremadura), en el Centro-Casco Antiguo. La ficha publica el plus code FJGH+4P Cáceres y las coordenadas 39.4753331, -6.3707404.',
	},
	{
		question: '¿Cuál es el horario de Tal cual?',
		answer:
			'El lunes abre jornada continua de 12:00 a 24:00. El jueves abre a las 12:00 y no cierra hasta las 4:00 de la madrugada. El viernes y el domingo parten el día en mediodía y noche de 20:00 a 24:00 (mediodía hasta las 16:30 el viernes y hasta las 16:00 el domingo); el sábado la noche se alarga hasta las 0:30. El martes y el miércoles está cerrado. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 619 93 53 71.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante. Tiene 4,3 sobre 5 con 548 reseñas, y en las reseñas que destaca se habla de pulpo, croquetas y solomillo en su salsa, de camareros majos con croquetas muy ricas y de excelente trato con comida casera muy rica. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 619 93 53 71.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Plaza Mayor, 16 y las coordenadas 39.4753331, -6.3707404. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code FJGH+4P Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: los asientos adaptados para sillas de ruedas figuran como disponibles y el aparcamiento adaptado como no disponible. No publica acceso ni aseo adaptados, así que esta web no puede confirmarlos.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Plaza Mayor, 16 de Cáceres. Pulpo, croquetas, solomillo y comida casera; 4,3 sobre 5 con 548 reseñas en Google Maps.',
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
	/* Sin `servesCuisine`: la única categoría que publica Google es «Restaurante». */
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
} as const;
