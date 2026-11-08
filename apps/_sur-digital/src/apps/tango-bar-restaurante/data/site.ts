/**
 * Datos de Tango Bar & Restaurante (C. Felipe II, 64, 04009 Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, descripción que publica el
 * negocio y las tres reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfil de redes sociales, así que no se enlaza
 * ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/tango-bar-restaurante',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Tango Bar & Restaurante',
	shortName: 'Tango Bar',
	/** Categoría principal que publica Google. */
	category: 'Restaurante argentino',
	/** Todas las categorías que publica la ficha, en el orden en que las lista Google. */
	categories: [
		'Restaurante argentino',
		'Bar',
		'Restaurante',
		'Bar de tapas',
		'Restaurante especializado en tapas',
	],
	/**
	 * La ficha escribe la dirección como «C. Felipe II, 64, 04009 Almería»: se conserva tal cual,
	 * con la calle y el número de portal que publica Google.
	 */
	streetAddress: 'C. Felipe II, 64',
	postalCode: '04009',
	city: 'Almería',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 65 11 08',
	latitude: 36.8547516,
	longitude: -2.4448382,
	/** Plus code que publica la ficha. */
	plusCode: 'VH34+W3 Almería',
	/** Valoración de la ficha en la fecha de consulta (4,2 con 2.089 reseñas). */
	rating: 4.2,
	reviewCount: 2089,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Tango+Bar+%26+Restaurante/@36.8547516,-2.4448382,17z/data=!3m1!4b1!4m6!3m5!1s0xd7a9de28f5348fb:0x896cd7e9005b7372!8m2!3d36.8547516!4d-2.4448382!16s%2Fg%2F11b6d7723j?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ-0hTj-Kdeg0RcnNbAOnXbIk&hl=es';

export const phoneHref = 'tel:+34950651108';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 6 de octubre de 2026 cubre del martes 6 al lunes 12 de octubre: los siete días
 * traen su horario marcado como habitual, **sin ningún día de cierre**. Todos los días, turno de
 * mediodía de 13:00 a 16:00 y turno de noche desde las 20:30; de miércoles a martes cierra a las
 * 23:30 y de viernes a domingo llega a las 24:00. El lunes 12, Fiesta Nacional de España, mantiene
 * su horario con el aviso de que podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 16:00 y 20:30 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:00 – 16:00 y 20:30 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 16:00 y 20:30 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:00 y 20:30 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:00 y 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:00 y 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:00 y 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Todos los días de 13:00 a 16:00 y de 20:30 a 23:30; de viernes a domingo hasta las 24:00';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta, y se citan tal cual,
 * incluidas sus tildes omitidas y su mayúscula original.
 */
export const reviews = [
	{
		text: 'Buen sitio para tapear tomar raciones y muy buena la carne a la brasa.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buenas tapas de brasa Y muy atentos los camareros',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El sitio es bastante grande y suelen atender rapido',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no tiene carta, precios, web propia ni reservas en línea, así que ninguna respuesta
 * habla de platos concretos, precios, reparto ni reservas más allá de lo que dicen la ficha y sus
 * reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Tango Bar & Restaurante?',
		answer:
			'En la C. Felipe II, 64 de Almería, con código postal 04009. La ficha publica la dirección completa como «C. Felipe II, 64, 04009 Almería» y además da el plus code VH34+W3 Almería y las coordenadas 36.8547516, -2.4448382.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Todos los días de 13:00 a 16:00 y de 20:30 a 23:30, y de viernes a domingo el turno de noche llega hasta las 24:00. Es el horario que publica la ficha consultada el 6 de octubre de 2026, que no marca ningún día de cierre: el lunes 12 de octubre, Fiesta Nacional de España, mantenía los dos turnos con el aviso de que el horario podría ser diferente.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica como restaurante argentino y también como bar, restaurante, bar de tapas y restaurante especializado en tapas, con 4,2 sobre 5 y 2.089 reseñas. La descripción que publica la ficha habla de una amplia carta de tapas y raciones, de buenos vinos de bodegas importantes y de carne a la brasa; las tres reseñas destacadas mencionan las tapas de brasa, la carne a la brasa y la rapidez en el servicio. La ficha no publica la carta ni los precios, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección de la C. Felipe II, 64 y las coordenadas 36.8547516, -2.4448382. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code VH34+W3 Almería.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el negocio no publica web propia ni perfil de redes sociales: aquí no se enlaza ninguno porque no constan en ella. La única vía publicada es el teléfono 950 65 11 08.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio negocio publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar y restaurante argentino en la C. Felipe II, 64, 04009 Almería, con dos turnos todos los días: mediodía de 13:00 a 16:00 y noche desde las 20:30.',
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
	acceptsReservations: false,
	/**
	 * `servesCuisine` traduce las categorías que publica Google («Restaurante argentino» y las
	 * categorías de tapas). No se declara ninguna otra cocina, porque la ficha no lo hace.
	 */
	servesCuisine: ['Argentino', 'Tapas'],
	/*
	 * Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno.
	 */
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
