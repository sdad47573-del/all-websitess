/**
 * Datos de La Floristeria de Badia (Av. Costa Brava, 10 · 08214 Badia del Vallès).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, descripción del titular, coordenadas, plus code
 * y horario semanal.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. La descripción del titular y
 * los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-de-badia.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Floristeria de Badia',
	shortName: 'Badia',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «La Floristeria de Badia, Av. Costa Brava, 10,
	 * 08214 Badia del Vallès, Barcelona».
	 */
	streetAddress: 'Av. Costa Brava, 10',
	postalCode: '08214',
	city: 'Badia del Vallès',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 937 29 69 21',
	latitude: 41.507378,
	longitude: 2.118606,
	/** Plus code que publica la ficha (corto; el completo es 8FH4G449+XC). */
	plusCode: 'G449+XC Badia del Vallès',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 144 reseñas). */
	rating: 4.9,
	reviewCount: 144,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Floristeria+de+Badia/@41.507378,2.118606,17z/data=!3m1!4b1!4m6!3m5!1s0x12a495dbd00d2245:0x28c5e0678e916c96!8m2!3d41.507378!4d2.118606!16s%2Fg%2F1q5bk4xjs?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJRSIN0NuVpBIRlmyRjmfgxSg&hl=es';

export const phoneHref = 'tel:+34937296921';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription = 'Venta de Arreglos florales, plantas, decoración...';

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 9:30 a 14:00 y tarde de 17:00 a 20:30).
 * El sábado abre solo por la mañana (9:00–14:00) y el domingo está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 14:00 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '14:00' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 14:00 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '14:00' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 14:00 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '14:00' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 14:00 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '14:00' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 14:00 · 17:00 – 20:30',
		shifts: [
			{ open: '09:30', close: '14:00' },
			{ open: '17:00', close: '20:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 14:00',
		shifts: [{ open: '09:00', close: '14:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lun–vie dos turnos (9:30–14:00 y 17:00–20:30); sáb 9:00–14:00; dom cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha solo publica una entrada: el local tiene acceso para sillas de ruedas.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Muchas gracias chicas, como siempre he quedado genial.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Son profesionales, responsables, con buen gusto y muy buena gente!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Diseños personalizados de alta calidad a precios asequibles.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está esta floristería?',
		answer:
			'En la Av. Costa Brava, 10, con código postal 08214, en Badia del Vallès (Barcelona). Publica el plus code G449+XC Badia del Vallès y las coordenadas 41.507378, 2.118606.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica dos turnos de lunes a viernes (mañana de 9:30 a 14:00 y tarde de 17:00 a 20:30), sábado solo por la mañana de 9:00 a 14:00 y domingo cerrado. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería y su propia descripción dice literalmente: «Venta de Arreglos florales, plantas, decoración...». Las reseñas que destaca hablan de quedar genial como siempre, de profesionales responsables con buen gusto y muy buena gente, y de diseños personalizados de alta calidad a precios asequibles.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 937 29 69 21. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. Costa Brava, 10, en Badia del Vallès, y las coordenadas 41.507378, 2.118606. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code G449+XC Badia del Vallès.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica una entrada de accesibilidad: el local tiene acceso para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 144 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de quedar genial como siempre, de profesionales responsables con buen gusto y muy buena gente, y de diseños personalizados de alta calidad a precios asequibles. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: `${business.name} · ${business.streetAddress} (${business.city})`,
	description:
		'Floristería en la Av. Costa Brava de Badia del Vallès. Venta de arreglos florales, plantas y decoración.',
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
