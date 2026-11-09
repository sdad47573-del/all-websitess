/**
 * Datos de Floristeria Plaça Sant Ramon (Plaça de Sant Ramon, 13 · Cerdanyola del Vallès).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code y horario semanal.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas. Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-placa-sant-ramon',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria Plaça Sant Ramon',
	shortName: 'Sant Ramon',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Plaça de Sant Ramon, 13, 08290 Cerdanyola del Vallès,
	 * Barcelona».
	 */
	streetAddress: 'Plaça de Sant Ramon, 13',
	postalCode: '08290',
	city: 'Cerdanyola del Vallès',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 936 92 79 71',
	latitude: 41.4891572,
	longitude: 2.1364354,
	/** Plus code que publica la ficha (corto; el completo es 8FH4F4QP+MH). */
	plusCode: 'F4QP+MH Cerdanyola del Vallès',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 54 reseñas). */
	rating: 4.4,
	reviewCount: 54,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Pla%C3%A7a+Sant+Ramon/@41.4891572,2.1364354,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4961a8ad721ed:0xf612aebe2a2c8219!8m2!3d41.4891572!4d2.1364354!16s%2Fg%2F1xnz1w27?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7SHXihqWpBIRGYIsKr6uEvY&hl=es';

export const phoneHref = 'tel:+34936927971';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 9:30 a 13:30 y tarde de 17:00 a 20:30).
 * El sábado abre solo por la mañana (10:00–13:30) y el domingo de 10:00 a 14:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 13:30 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '13:30' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 13:30',
		shifts: [{ open: '10:00', close: '13:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 14:00',
		shifts: [{ open: '10:00', close: '14:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lun–vie dos turnos (9:30–13:30 y 17:00–20:30); sáb 10:00–13:30; dom 10:00–14:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha solo publica una entrada: no hay aparcamiento adaptado para sillas de ruedas.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Hemos ido a comprar una planta para regalar y nos han atendido súper bien.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Lo que más valoro es la calidez humana del trato.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Tienen mucha variedad y son muy amables. Me hizo un ramito para una niña.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción, web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está esta floristería?',
		answer:
			'En la Plaça de Sant Ramon, 13, con código postal 08290, en Cerdanyola del Vallès (Barcelona). Publica el plus code F4QP+MH Cerdanyola del Vallès y las coordenadas 41.4891572, 2.1364354.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos de lunes a viernes (mañana de 9:30 a 13:30 y tarde de 17:00 a 20:30), sábado solo por la mañana de 10:00 a 13:30 y domingo de 10:00 a 14:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de mucha variedad, plantas para regalar y trato amable con calidez humana.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 936 92 79 71. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Plaça de Sant Ramon, 13, en Cerdanyola del Vallès, y las coordenadas 41.4891572, 2.1364354. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code F4QP+MH Cerdanyola del Vallès.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica una entrada de accesibilidad: no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 54 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de atención súper buena al comprar una planta para regalar, de la calidez humana del trato y de mucha variedad con un ramito para una niña. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería en la Plaça de Sant Ramon de Cerdanyola del Vallès. Mucha variedad y trato amable con calidez humana, según sus reseñas.',
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
