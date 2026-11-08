/**
 * Datos de Floristeria Mari Carmen. Flors i Plantes
 * (Carrer del Consell de Cent, 468 · 08013 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y los 2 extractos destacados, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * La ficha solo destaca 2 extractos (no 3 como otras), y así se reproducen: literalmente y
 * citados como tales en la web. La ficha no publica descripción del titular ni web propia, así
 * que no se reproduce ninguna de ellas. La ficha no publica precios, así que no se reproduce
 * ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-mari-carmen.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria Mari Carmen. Flors i Plantes',
	shortName: 'Mari Carmen',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer del Consell de Cent, 468, Eixample, 08013
	 * Barcelona». «Eixample» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer del Consell de Cent, 468',
	district: 'Eixample',
	postalCode: '08013',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 932 65 59 25',
	latitude: 41.3992465,
	longitude: 2.1768537,
	/** Plus code que publica la ficha (completo: 8FH495XG+MP). */
	plusCode: '95XG+MP Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 112 reseñas). */
	rating: 4.8,
	reviewCount: 112,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Mari+Carmen.+Flors+i+Plantes/@41.3992465,2.1768537,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a2e7a0ea3059:0x2164247a676a8c47!8m2!3d41.3992465!4d2.1768537!16s%2Fg%2F1tdkzqd3?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJWTDqoOeipBIRR4xqZ3okZCE&hl=es';

export const phoneHref = 'tel:+34932655925';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 10:30 a 14:00 y tarde de 16:00 a 20:00); el
 * sábado abre solo por la mañana (10:30 a 14:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:30 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:30 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:30 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:30 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:30 – 14:00 · 16:00 – 20:00',
		shifts: [
			{ open: '10:30', close: '14:00' },
			{ open: '16:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:30 – 14:00',
		shifts: [{ open: '10:30', close: '14:00' }],
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
	'Dos turnos de lunes a viernes (10:30–14:00 y 16:00–20:00); sábado de 10:30 a 14:00; domingo cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada y figura como no disponible: el aparcamiento adaptado («No hay
 * aparcamiento accesible con silla de ruedas»). La ficha no publica ningún otro.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Esta ficha solo destacaba 2 (no 3); se reproducen tal cual y se citan como tales en la web.
 * El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'He ido ya varias veces y siempre me reciben con una sonrisa.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Mari Carmen hace unos ramos para dejar secar preciosos e ideales para decorar.',
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
		question: '¿Dónde está Floristeria Mari Carmen. Flors i Plantes?',
		answer:
			'En el Carrer del Consell de Cent, 468, con código postal 08013, en Barcelona, en Eixample. Publica el plus code 95XG+MP Barcelona y las coordenadas 41.3992465, 2.1768537.',
	},
	{
		question: '¿Cuál es el horario de Floristeria Mari Carmen. Flors i Plantes?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:30 a 14:00 y tarde de 16:00 a 20:00. El sábado abre solo por la mañana, de 10:30 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de recibir siempre con una sonrisa y de ramos para dejar secar preciosos e ideales para decorar.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 932 65 59 25. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer del Consell de Cent, 468, en Eixample de Barcelona, y las coordenadas 41.3992465, 2.1768537. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95XG+MP Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como no disponible: el aparcamiento adaptado («No hay aparcamiento accesible con silla de ruedas»). No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 112 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de recibir siempre con una sonrisa y de ramos para dejar secar preciosos e ideales para decorar. El enlace de la valoración abre el listado completo en Google Maps.',
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
	name: business.name,
	description:
		'Floristería en el Carrer del Consell de Cent de Barcelona, en Eixample. Ramos para dejar secar preciosos, según sus reseñas.',
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
