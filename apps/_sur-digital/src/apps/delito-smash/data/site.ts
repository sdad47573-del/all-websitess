/**
 * Datos de Delito Smash (C. Pescadores, 28 · 21410 Isla Cristina, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, los servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni distintivo, así que no se reproduce ninguno
 * de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/delito-smash',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Delito Smash',
	shortName: 'Delito',
	/** Única categoría que publica Google, y declara comida. */
	category: 'Hamburguesería',
	/** Las categorías de la ficha, en su orden: aquí solo hay una. */
	categories: ['Hamburguesería'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'C. Pescadores, 28',
	postalCode: '21410',
	city: 'Isla Cristina',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 608 41 50 43',
	latitude: 37.1980233,
	longitude: -7.3156484,
	/** Plus code que publica la ficha. */
	plusCode: '5MXM+6P Isla Cristina',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 13 reseñas). */
	rating: 4.8,
	reviewCount: 13,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, con su inglés de marca («Smash burgers») y sin corregir su redacción.
 * Va atribuida a la ficha. La ficha tampoco publica una descripción más: esta es la única.
 */
export const descripcionLocal =
	'Smash burgers brutales, ingredientes top y mucho sabor. En Delito Smash cada hamburguesa es un crimen delicioso.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Delito+Smash/data=!4m7!3m6!1s0xd1025ee952d05ef:0x63d850ba1849cb93!8m2!3d37.1980233!4d-7.3156484!16s%2Fg%2F11npckscpt!19sChIJ7wUtle4lEA0Rk8tJGLpQ2GM?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7wUtle4lEA0Rk8tJGLpQ2GM&hl=es';

export const phoneHref = 'tel:+34608415043';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * sirve **solo cenas, de 21:00 a 24:00, todos los días salvo el martes, que cierra**. No publica
 * ningún tramo de mediodía.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, **el horario podría ser
 * diferente**. Ese es el aviso de tipo 2 (el local mantiene su horario y Google solo advierte de
 * que puede cambiar), no el de tipo 1, en el que la ficha publica el horario propio del festivo
 * en lugar del habitual; como en `bar-de-esteban`, el horario se recoge tal cual y el aviso se
 * explica en la sección de horario.
 *
 * El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como cierre a
 * las 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '21:00 – 24:00',
		shifts: [{ open: '21:00', close: '00:00' }],
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
		service: '21:00 – 24:00',
		shifts: [{ open: '21:00', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '21:00 – 24:00',
		shifts: [{ open: '21:00', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '21:00 – 24:00',
		shifts: [{ open: '21:00', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '21:00 – 24:00',
		shifts: [{ open: '21:00', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '21:00 – 24:00',
		shifts: [{ open: '21:00', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Cenas de 21:00 a 24:00; el martes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha publica **una sola entrada**, el acceso para sillas de ruedas, y figura como
 * disponible. No publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son tres y se citan tal cual, sin corregir su redacción. Google las guarda entre comillas
 * dobles, pero esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las
 * puntuaciones son 4, 5 y 5.
 */
export const reviews = [
	{
		text: 'Volveremos a pedir, muchas gracias',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hamburguesas variadas riquísimas con mucho sabor.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedí la mexicana con un toque picante y una salsa riquísima.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni un sistema de reparto, así que ninguna respuesta los
 * menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Delito Smash?',
		answer:
			'En el C. Pescadores, 28, con código postal 21410, en Isla Cristina (Huelva). La ficha publica el plus code 5MXM+6P Isla Cristina y las coordenadas 37.1980233, -7.3156484.',
	},
	{
		question: '¿Cuál es el horario de Delito Smash?',
		answer:
			'La ficha publica servicio de cena de 21:00 a 24:00 todos los días salvo el martes, que cierra. No publica ningún tramo de mediodía. El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente. Es el horario publicado en la ficha consultada el 10 de octubre de 2026 y conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Google lo clasifica como hamburguesería y el propio local describe su ficha como especializada en «Smash burgers brutales, ingredientes top y mucho sabor». En las reseñas que destaca la ficha se habla de hamburguesas variadas y de una «mexicana» con un toque picante. La ficha no publica carta ni precios, así que la web no los reproduce.',
	},
	{
		question: '¿Se puede reservar o pedir a domicilio?',
		answer:
			'La ficha no publica un sistema de reservas ni de reparto a domicilio, y esta web no permite ninguna de las dos cosas. El único contacto que publica es el teléfono 608 41 50 43.',
	},
	{
		question: '¿Es accesible para sillas de ruedas?',
		answer:
			'La ficha publica un solo dato de accesibilidad, el acceso para sillas de ruedas, y figura como disponible. No publica ninguno más y esta web no añade otros.',
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
		'Hamburguesería en el C. Pescadores, 28 de Isla Cristina, con servicio de cena de 21:00 a 24:00 salvo el martes, que cierra.',
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
	/*
	 * La única categoría que publica Google, «Hamburguesería», declara la comida que sirve. Se
	 * traduce igual que la «Pizzería» de `restaurante-la-dorada`, que va como `'Pizza'`.
	 */
	servesCuisine: ['Hamburguesas'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
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
