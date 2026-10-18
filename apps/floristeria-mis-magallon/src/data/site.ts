/**
 * Datos de Floristeria Mis Magallón
 * (Mercat de la Concepció, Carrer d'Aragó, 2E, 313-317 · 08009 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas. Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-mis-magallon.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristeria Mis Magallón',
	shortName: 'Mis Magallón',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: parada en el Mercat de la Concepció, Carrer d'Aragó,
	 * 2E, 313-317, Eixample, 08009 Barcelona. «Eixample» es el distrito y se conserva aparte.
	 */
	streetAddress: "Carrer d'Aragó, 2E, 313-317 (Mercat de la Concepció)",
	district: 'Eixample',
	postalCode: '08009',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 934 58 75 67',
	latitude: 41.3961205,
	longitude: 2.1681448,
	/** Plus code que publica la ficha (completo: 8FH495W9+C7). */
	plusCode: '95W9+C7 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 65 reseñas). */
	rating: 4.1,
	reviewCount: 65,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Floristeria+Mis+Magall%C3%B3n/@41.3961205,2.1681448,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a3ce894874a3:0x3492106394a1cc1a!8m2!3d41.3961205!4d2.1681448!16s%2Fg%2F11qb0yby9j?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJo3RIic6jpBIRGsyhlGMQkjQ&hl=es';

export const phoneHref = 'tel:+34934587567';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha: abierta las 24 horas, todos los días.
 *
 * La ficha no publica tramos (00:00–23:59 es la representación fiel de «24 horas» para el
 * esquema de datos y para que la tabla no la marque como cerrada).
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abierta las 24 horas, todos los días';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El acceso para sillas de ruedas figura como disponible; el aparcamiento adaptado figura como
 * no disponible («No hay aparcamiento accesible con silla de ruedas»). La ficha no publica
 * ningún otro.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Buena calidad y buen trato',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena atención y buenos precios',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Sin duda volveremos a la floristeria.',
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
		question: '¿Dónde está Floristeria Mis Magallón?',
		answer:
			"En el Mercat de la Concepció, parada del Carrer d'Aragó, 2E, 313-317, con código postal 08009, en Barcelona, en Eixample. Publica el plus code 95W9+C7 Barcelona y las coordenadas 41.3961205, 2.1681448.",
	},
	{
		question: '¿Cuál es el horario de Floristeria Mis Magallón?',
		answer:
			'La ficha publica apertura las 24 horas, todos los días de la semana. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de buena calidad y buen trato, de buena atención y buenos precios y de volver sin duda.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 934 58 75 67. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			"La ficha publica la dirección Carrer d'Aragó, 2E, 313-317 (Mercat de la Concepció), en Eixample de Barcelona, y las coordenadas 41.3961205, 2.1681448. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95W9+C7 Barcelona.",
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible y el aparcamiento adaptado figura como no disponible. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,1 sobre 5 con 65 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de buena calidad y buen trato, de buena atención y buenos precios y de volver sin duda a la floristería. El enlace de la valoración abre el listado completo en Google Maps.',
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
		"Floristería en el Mercat de la Concepció de Barcelona, en Eixample. Buena calidad y buen trato, según sus reseñas.",
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
