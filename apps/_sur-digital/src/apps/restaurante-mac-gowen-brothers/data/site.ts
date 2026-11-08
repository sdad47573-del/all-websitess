/**
 * Datos de Restaurante Mac Gowen Brothers (Plaza Batel, 6, 04711 Almerimar, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, horario semanal y reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-mac-gowen-brothers',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Mac Gowen Brothers',
	shortName: 'Mac Gowen Brothers',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante especializado en tapas',
	categories: ['Restaurante especializado en tapas'],
	/**
	 * La ficha escribe la dirección como «Plaza Batel, 6, 04711 Almerimar, Almería»: se conserva
	 * tal cual, con la calle y el número de portal que publica Google.
	 */
	streetAddress: 'Plaza Batel, 6',
	postalCode: '04711',
	city: 'Almerimar',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 56 33 03',
	latitude: 36.697515,
	longitude: -2.788107,
	/** Plus code que publica la ficha. */
	plusCode: 'M6X6+2Q Almerimar',
	/** Valoración de la ficha en la fecha de consulta (4,6 con 18 reseñas). */
	rating: 4.6,
	reviewCount: 18,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Mac+Gowen+Brothers/@36.697515,-2.788107,17z/data=!3m1!4b1!4m6!3m5!1s0xd705d85273beae1:0x55d08ab741282eee!8m2!3d36.697515!4d-2.788107!16s%2Fg%2F11b6dh6lpg?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ4eo7J4VdcA0R7i4oQbeK0FU&hl=es';

export const phoneHref = 'tel:+34950563303';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 6 de octubre de 2026 cubre del martes 6 al lunes 12 de octubre: los siete días
 * traen su horario marcado como habitual, **sin ningún día de cierre**. De lunes a viernes, dos
 * turnos (12:00 – 16:30 y 18:00 – 23:00); sábado y domingo, turno continuo de 12:00 a 23:00. El
 * lunes 12, Fiesta Nacional de España, mantiene su horario con el aviso de que podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 16:30 y 18:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '18:00', close: '23:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 16:30 y 18:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '18:00', close: '23:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 16:30 y 18:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '18:00', close: '23:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:30 y 18:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '18:00', close: '23:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:30 y 18:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '18:00', close: '23:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 23:00',
		shifts: [{ open: '12:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 23:00',
		shifts: [{ open: '12:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a viernes de 12:00 a 16:30 y de 18:00 a 23:00 · sábado y domingo de 12:00 a 23:00';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta, y se citan tal cual,
 * incluida la segunda, que matiza que las tapas son de mediodía.
 */
export const reviews = [
	{
		text: 'Buena comida con mucha variedad de platos internacionales',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Sirven tapas variadas a mediodia, aunque creo que no por la noche.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen sitio para comer o picar algo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
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
		question: '¿Dónde está el Restaurante Mac Gowen Brothers?',
		answer:
			'En la Plaza Batel, 6 de Almerimar, con código postal 04711, en la provincia de Almería. La ficha publica la dirección completa como «Plaza Batel, 6, 04711 Almerimar, Almería» y además da el plus code M6X6+2Q Almerimar y las coordenadas 36.697515, -2.788107.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'De lunes a viernes de 12:00 a 16:30 y de 18:00 a 23:00, y de 12:00 a 23:00 el sábado y el domingo. Es el horario que publica la ficha consultada el 6 de octubre de 2026, que no marca ningún día de cierre: el lunes 12 de octubre, Fiesta Nacional de España, mantenía sus dos turnos con el aviso de que el horario podría ser diferente.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica como restaurante especializado en tapas, con 4,6 sobre 5 y 18 reseñas. Las tres reseñas que la ficha destaca hablan de buena comida, de mucha variedad de platos, de tapas variadas a mediodía y de un buen sitio para comer o picar algo. La ficha no publica la carta ni los precios, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección de la Plaza Batel, 6 y las coordenadas 36.697515, -2.788107. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code M6X6+2Q Almerimar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales: aquí no se enlaza ninguno porque no constan en ella. La única vía publicada es el teléfono 950 56 33 03.',
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
		'Restaurante especializado en tapas en la Plaza Batel, 6, 04711 Almerimar (Almería), con dos turnos de lunes a viernes y servicio continuado el fin de semana.',
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
	 * `servesCuisine` traduce la única categoría que publica Google («Restaurante especializado en
	 * tapas»). No se declara ninguna otra cocina, porque la ficha no lo hace.
	 */
	servesCuisine: ['Tapas'],
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
