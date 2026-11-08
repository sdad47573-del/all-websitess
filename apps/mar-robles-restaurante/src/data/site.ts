/**
 * Datos de Mar Robles Restaurante (Calle Estadio, 54, 04007 Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal y reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://mar-robles-almeria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Mar Robles Restaurante',
	shortName: 'Mar Robles',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Bar de tapas',
	categories: ['Bar de tapas', 'Cafetería', 'Restaurante vegetariano'],
	/**
	 * Google escribe la dirección como «C. Estadio, 54»: en la web se desarrolla la abreviatura a
	 * «Calle», como en el resto del repositorio. El municipio y la provincia son Almería, tal como
	 * publica la ficha (la dirección va en el centro de la ciudad, código postal 04007).
	 */
	streetAddress: 'Calle Estadio, 54',
	postalCode: '04007',
	city: 'Almería',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 950 24 02 48',
	latitude: 36.8291264,
	longitude: -2.4492861,
	/** Valoración de la ficha en la fecha de consulta (4,4 con 1.991 reseñas). */
	rating: 4.4,
	reviewCount: 1991,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Mar+Robles+Restaurante/@36.8291264,-2.4492861,17z/data=!3m1!4b1!4m6!3m5!1s0xd7a9dee49fd0a05:0x6c8fd4de37750627!8m2!3d36.8291264!4d-2.4492861!16s%2Fg%2F1th1wdmh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJBQr9Se6deg0RJwZ1N97Uj2w&hl=es';

export const phoneHref = 'tel:+34950240248';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días menos el martes, siempre con turno de mañana de 8:00 a 16:00, y añade cena de
 * 20:00 a 24:00 de miércoles a domingo (el lunes no abre de noche). El lunes de la semana de la
 * consulta era además el festivo del 12 de octubre, Fiesta Nacional de España: la ficha lo daba
 * abierto con su horario habitual y con el aviso de que «el horario podría ser diferente», así que
 * se publica abierto **con la advertencia**.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 16:00',
		shifts: [{ open: '08:00', close: '16:00' }],
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
		service: '8:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 16:00 y 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '16:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 8:00 a 16:00 todos los días menos el martes · cenas de 20:00 a 24:00 de miércoles a domingo';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar nada (la primera sin punto final, como la publica Google). Google
 * destaca tres y ninguna es una queja, así que se publican las tres. Los platos y detalles que
 * nombran (tapas de olla, arroz, pescado del día, secreto a baja temperatura con salsa de naranja y
 * mostaza) se mencionan atribuidos a la reseña, no a una carta que la web no ha visto.
 */
export const reviews = [
	{
		text: 'Buen sitio para tapear, buen ambiente y muy atentos los camareros, recomendable',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Variedad en pescado del día y suelen tener tapas de olla o arroz a mediodía.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Buenísimo el secreto a baja temperatura con salsa de la naranja y mostaza.',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, terraza, reparto ni reservas más allá de lo que dicen la ficha y sus reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está Mar Robles Restaurante?',
		answer:
			'En la calle Estadio, 54, en Almería capital, código postal 04007. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 24 02 48 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps publica un turno de mañana de 8:00 a 16:00 todos los días menos el martes, que cierra, y añade cena de 20:00 a 24:00 de miércoles a domingo: los lunes solo abre de día. El lunes 12 de octubre de 2026 coincidía con la Fiesta Nacional de España y la ficha lo daba abierto con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como bar de tapas, cafetería y restaurante vegetariano, con 4,4 sobre 5 y 1991 reseñas. Sus reseñas destacadas hablan de tapear con buen ambiente, de la variedad de pescado del día y de las tapas de olla o el arroz a mediodía, y del secreto a baja temperatura con salsa de naranja y mostaza. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Hay opciones vegetarianas?',
		answer:
			'La ficha de Google lo clasifica como restaurante vegetariano, así que el establecimiento ofrece cocina vegetariana según esa categoría. La web no puede detallar platos ni si hay opciones veganas porque la ficha no publica la carta; para concretar lo que hay hoy, llama al 950 24 02 48.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el establecimiento no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 24 02 48.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio establecimiento publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: 'Bar de tapas, cafetería y restaurante vegetariano en el centro de Almería.',
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
	// Se traducen las tres categorías que publica Google, sin añadir ninguna más.
	servesCuisine: ['Tapas', 'Cafetería', 'Cocina vegetariana'],
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
