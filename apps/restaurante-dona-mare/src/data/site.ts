/**
 * Datos de Restaurante Doña Mare (C. Jerónimo Sosa Castillo, s/n · 21410 Isla Cristina, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica carta, precios, ningún distintivo ni web propia, así que no se reproduce
 * ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-dona-mare.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Doña Mare',
	shortName: 'Doña Mare',
	/** Categoría única que publica Google en esta ficha: «Marisquería». */
	category: 'Marisquería',
	categories: ['Marisquería'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'C. Jerónimo Sosa Castillo, s/n',
	postalCode: '21410',
	city: 'Isla Cristina',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 959 77 00 00',
	latitude: 37.1962012,
	longitude: -7.3234324,
	/** Plus code que publica la ficha. */
	plusCode: '5MWG+FJ Isla Cristina',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 129 reseñas). */
	rating: 4.8,
	reviewCount: 129,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, sin corregirla ni ampliarla, y va atribuida a la ficha. Es una sola
 * frase: el local se presenta como especializado en mariscos y pescados de la costa, con platos
 * elaborados y postres, todo casero y libre de gluten.
 */
export const descripcionLocal =
	'Restaurante Doña Mare, especializado en mariscos y pescados de la costa, platos elaborados y postres. Todo casero y libre de gluten.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Do%C3%B1a+Mare/@37.1962012,-7.3234324,17z/data=!3m1!4b1!4m6!3m5!1s0xd102500753a6fc5:0xe56fca201589b51f!8m2!3d37.1962012!4d-7.3234324!16s%2Fg%2F11z3kn_8yh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJxW86dQAlEA0RH7WJFSDKb-U&hl=es';

export const phoneHref = 'tel:+34959770000';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * sirve mediodía de 12:30 a 16:00 todos los días salvo el martes, que cierra, y por la noche abre
 * de miércoles a domingo, de 20:30 a 24:00.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de
 * la sección de horario y no cambia la tabla.
 *
 * El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como cierre a
 * las 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:30 – 16:00',
		shifts: [{ open: '12:30', close: '16:00' }],
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
		service: '12:30 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '12:30', close: '16:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mediodía de 12:30 a 16:00 todos los días salvo el martes; noches de miércoles a domingo';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas, y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. La ficha las presenta
 * entrecomilladas; esas comillas son del propio Google y no forman parte del texto, así que no se
 * reproducen. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Super recomendable, muy buena cocina, rico rico el guiso de atún y el bacalao.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Se nota el cariño en cada plato, raciones generosas y todo muy bien elaborado.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen restaurante, gran servicio y muy buena comida.',
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
		question: '¿Dónde está Restaurante Doña Mare?',
		answer:
			'En el C. Jerónimo Sosa Castillo, s/n, con código postal 21410, en Isla Cristina (Huelva). La ficha publica el plus code 5MWG+FJ Isla Cristina y las coordenadas 37.1962012, -7.3234324.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Doña Mare?',
		answer:
			'La ficha publica mediodía de 12:30 a 16:00 todos los días salvo el martes, que cierra, y noches de 20:30 a 24:00 de miércoles a domingo. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como marisquería. En su propia descripción en la ficha se presenta como especializado en mariscos y pescados de la costa, con platos elaborados y postres, todo casero y libre de gluten. Tiene 4,8 sobre 5 con 129 reseñas, y en las tres reseñas que destaca se habla del guiso de atún y el bacalao, de las raciones generosas y del servicio.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 959 77 00 00.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Jerónimo Sosa Castillo, s/n y las coordenadas 37.1962012, -7.3234324. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 5MWG+FJ Isla Cristina.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 10 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Marisquería en el C. Jerónimo Sosa Castillo, s/n de Isla Cristina, especializada en mariscos y pescados de la costa; cierra los martes.',
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
	/* La cocina sí está declarada: el titular habla de mariscos y pescados de la costa. */
	servesCuisine: ['Marisco', 'Pescado'],
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
