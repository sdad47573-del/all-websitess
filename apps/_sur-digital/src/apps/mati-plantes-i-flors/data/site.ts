/**
 * Datos de Mati, Plantes i Flors (Av. de Martí Pujol, 619 · 08917 Badalona).
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
	siteUrl: 'https://www.sur-digital.com/mati-plantes-i-flors',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Mati, Plantes i Flors',
	shortName: 'Mati',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Mati, Plantes i Flors, Av. de Martí Pujol, 619,
	 * 08917 Badalona, Barcelona».
	 */
	streetAddress: 'Av. de Martí Pujol, 619',
	postalCode: '08917',
	city: 'Badalona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 930 10 72 67',
	latitude: 41.4604614,
	longitude: 2.2393589,
	/** Plus code que publica la ficha (corto; el completo es 8FH2F66Q+5P). */
	plusCode: 'F66Q+5P Badalona',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 95 reseñas). */
	rating: 4.7,
	reviewCount: 95,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Mati,+Plantes+i+Flors/@41.4604614,2.2393589,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4bb9e1152a171:0xb5fb5e8b10161717!8m2!3d41.4604614!4d2.2393589!16s%2Fg%2F11bwkbrtgn?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJcaFSEZ67pBIRFxcWEIte-7U&hl=es';

export const phoneHref = 'tel:+34930107267';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De martes a viernes abre dos turnos (mañana de 9:00 a 13:30 y tarde de 17:00 a 20:00).
 * El sábado abre solo por la mañana (9:00–13:30) y el domingo de 9:30 a 13:30.
 * El lunes está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '09:00', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 13:30',
		shifts: [{ open: '09:00', close: '13:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:30 – 13:30',
		shifts: [{ open: '09:30', close: '13:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mar–vie dos turnos (9:00–13:30 y 17:00–20:00); sáb 9:00–13:30; dom 9:30–13:30; lun cerrado';

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
		text: 'Buen trato y excelente servicio y productos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy majos y bonitas flores.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Servicio excelente, mucha variedad y buenas plantas calidad 10.',
		rating: 5,
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
			'En la Av. de Martí Pujol, 619, con código postal 08917, en Badalona (Barcelona). Publica el plus code F66Q+5P Badalona y las coordenadas 41.4604614, 2.2393589.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos de martes a viernes (mañana de 9:00 a 13:30 y tarde de 17:00 a 20:00), sábado solo por la mañana de 9:00 a 13:30 y domingo de 9:30 a 13:30; el lunes está cerrado. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de buen trato con excelente servicio y productos, de flores bonitas y de mucha variedad con buenas plantas de calidad 10.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 930 10 72 67. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Martí Pujol, 619, en Badalona, y las coordenadas 41.4604614, 2.2393589. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code F66Q+5P Badalona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica una entrada de accesibilidad: no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 95 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de buen trato con excelente servicio y productos, de flores bonitas y de servicio excelente con mucha variedad y buenas plantas de calidad 10. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Av. de Martí Pujol de Badalona. Buen trato, flores bonitas y mucha variedad con buenas plantas, según sus reseñas.',
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
