/**
 * Datos de Restaurante La Pérgola (Avenida del Mediterráneo, 71, 04007 Almería).
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
	siteUrl: 'https://la-pergola-almeria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Google publica la ficha como «Restaurante La Pérgola | Almería»: el nombre termina con la
	 * ciudad separada por una barra, que Google añade para desambiguar la ficha. En la web se usa
	 * «Restaurante La Pérgola», sin esa coletilla, porque la ciudad ya está en la dirección.
	 */
	name: 'Restaurante La Pérgola',
	shortName: 'La Pérgola',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante de cocina española',
	categories: [
		'Restaurante de cocina española',
		'Parrilla',
		'Bar',
		'Restaurante',
		'Restaurante especializado en tapas',
	],
	/**
	 * Google escribe la dirección como «parque de las familias, Av. del Mediterráneo, 71 Esquina,
	 * 04007 Almería». Se publica la avenida con su número —la abreviatura «Av.» desarrollada a
	 * «Avenida», como en el resto de webs del repositorio— y el punto de referencia y la esquina se
	 * cuentan en el texto de la portada.
	 */
	streetAddress: 'Avenida del Mediterráneo, 71',
	postalCode: '04007',
	city: 'Almería',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 16 61 21',
	latitude: 36.8315307,
	longitude: -2.4457515,
	/** Valoración de la ficha en la fecha de consulta (4,1 con 1617 reseñas). */
	rating: 4.1,
	reviewCount: 1617,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+P%C3%A9rgola+%7C+Almer%C3%ADa/@36.8315307,-2.4457515,17z/data=!3m1!4b1!4m6!3m5!1s0xd7a9d46baad971f:0x680293435aa8ad4!8m2!3d36.8315307!4d-2.4457515!16s%2Fg%2F11j8pcr3hq?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJH5etukadeg0R1IqqNTQpgAY&hl=es';

export const phoneHref = 'tel:+34950166121';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre los siete días de la semana con el mismo horario, de 7:30 a 24:00, y no marca ningún día de
 * cierre. El lunes de esa semana la ficha lo marca como Fiesta Nacional de España con el aviso de
 * que el horario podía ser diferente: se publica el valor tal como lo da la ficha, con la
 * advertencia.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '24:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '24:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '24:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 7:30 a 24:00';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar, ni siquiera su puntuación: la segunda lleva un punto de más en
 * «muy. buena» y la tercera solo cuenta lo que pidió el cliente. Son las tres que Google destaca y
 * ninguna es una queja, así que se publican las tres.
 */
export const reviews = [
	{
		text: 'Sus raciones de churros que están muy buenos son abundantes.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Se tapea de maravilla muy. buena calidad y las camareras y camareros muy amables',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Pedimos costillas, hamburguesa Angus y rabioli de boletus.',
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
		question: '¿Dónde está el Restaurante La Pérgola?',
		answer:
			'En la avenida del Mediterráneo, 71, en Almería, código postal 04007. La ficha de Google escribe la dirección como «parque de las familias, Av. del Mediterráneo, 71 Esquina»: el local está en el número 71 de esa avenida, en una esquina, con el parque de las familias como referencia. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 16 61 21 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica abierto los siete días de la semana, de 7:30 a 24:00, sin ningún día de cierre. El lunes 12 de octubre de 2026 la ficha lo marcaba como Fiesta Nacional de España con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina española, parrilla, bar, restaurante y restaurante especializado en tapas, con 4,1 sobre 5 y 1617 reseñas. Sus reseñas destacadas hablan de raciones de churros, de tapear y de costillas, hamburguesa Angus y ravioli de boletus. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede desayunar?',
		answer:
			'La ficha lo da abierto desde las 7:30 todos los días, y una de las reseñas que Google destaca menciona sus raciones de churros. La ficha no publica carta ni un horario de desayunos aparte, así que no se puede confirmar nada más: pregunta por teléfono si quieres asegurarte.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 16 61 21.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina española, parrilla y tapas en la avenida del Mediterráneo, Almería.',
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
	servesCuisine: ['Cocina española'],
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
