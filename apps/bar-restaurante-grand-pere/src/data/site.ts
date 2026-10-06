/**
 * Datos de Bar restaurante Grand Pere (Club Natacion, Cam. Jaúl Bajo, 3, 04007 Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario de la semana y reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bar-restaurante-grand-pere.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar restaurante Grand Pere',
	shortName: 'Grand Pere',
	/**
	 * Las dos categorías que publica Google: la principal («Bar restaurante») y la que la acompaña
	 * («Restaurante mediterráneo»). No se añade ninguna otra que la ficha no declare.
	 */
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Restaurante mediterráneo'],
	/**
	 * La ficha escribe la dirección como «Club Natacion, Cam. Jaúl Bajo, 3, 04007 Almería»: se
	 * conserva tal cual, sin acento en «Natacion», que es como la escribe Google.
	 */
	streetAddress: 'Club Natacion, Cam. Jaúl Bajo, 3',
	postalCode: '04007',
	city: 'Almería',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. Es el del propio bar, no el de la recepción del club. */
	phone: '+34 950 08 82 23',
	latitude: 36.8317033,
	longitude: -2.4315424,
	/** Plus code que publica la ficha. */
	plusCode: 'RHJ9+M9 Almería',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 796 reseñas). */
	rating: 4.4,
	reviewCount: 796,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+restaurante+Grand+Pere/@36.8317033,-2.4315424,17z/data=!4m6!3m5!1s0xd7a9d7038e0c4a1:0x136ca6e99e1cbe13!8m2!3d36.8317033!4d-2.4315424!16s%2Fg%2F11fcv7pvh7?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJocTgOHCdeg0RE74cnummbBM&hl=es';

export const phoneHref = 'tel:+34950088223';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 6 de octubre de 2026 cubre del martes 6 al lunes 12 de octubre: esos seis días
 * traen su horario y el lunes 12 aparece **cerrado**, marcado como festivo (Fiesta Nacional de
 * España) con el aviso de que «el horario podría ser diferente». El lunes se publica cerrado, que
 * es lo que dice la ficha para el único lunes del periodo consultado.
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
		service: '11:30 – 23:30',
		shifts: [{ open: '11:30', close: '23:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:30 – 23:30',
		shifts: [{ open: '11:30', close: '23:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:30 – 23:30',
		shifts: [{ open: '11:30', close: '23:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:30 – 24:00',
		shifts: [{ open: '11:30', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 20:00',
		shifts: [{ open: '08:00', close: '20:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Cerrado los lunes · de martes a jueves de 11:30 a 23:30, viernes hasta las 24:00, sábado de 8:00 a 24:00 y domingo de 8:00 a 20:00';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta, y las tres son
 * favorables: se citan tal cual, con su puntuación original.
 */
export const reviews = [
	{
		text: 'Estupendo y variado tapeo, buen pescado del día y excelentes los torreznos',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buen sitio para tapear , riquísima cerveza , muy buen ambiente',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen lugar para tomar unas tapias, buen servicio buena comida y buena cerveza',
		rating: 4,
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
		question: '¿Dónde está el Bar restaurante Grand Pere?',
		answer:
			'En el Cam. Jaúl Bajo, 3 de Almería, con el código postal 04007: la ficha lo sitúa dentro del Club Natacion y publica la dirección completa como «Club Natacion, Cam. Jaúl Bajo, 3, 04007 Almería». Además da el plus code RHJ9+M9 Almería y las coordenadas 36.8317033, -2.4315424.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Cerrado los lunes. De martes a jueves abre de 11:30 a 23:30, el viernes de 11:30 a 24:00, el sábado de 8:00 a 24:00 y el domingo de 8:00 a 20:00. Es el horario que publica la ficha consultada el 6 de octubre de 2026: el lunes 12 de octubre, Fiesta Nacional de España, aparecía cerrado con el aviso de que el horario podría ser diferente.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica como bar restaurante y como restaurante mediterráneo, con 4,4 sobre 5 y 796 reseñas. Las tres reseñas que la ficha destaca hablan de tapeo, de pescado del día, de torreznos, de tapas y de cerveza. La ficha no publica la carta ni los precios, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección del Cam. Jaúl Bajo, 3 y las coordenadas 36.8317033, -2.4315424. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code RHJ9+M9 Almería.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el local no publica web propia ni perfiles de redes sociales: aquí no se enlaza ninguno porque no constan en ella. La única vía publicada es el teléfono 950 08 82 23.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante de cocina mediterránea en el Cam. Jaúl Bajo, 3 de Almería, dentro del Club Natacion.',
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
	 * `servesCuisine` traduce la segunda categoría que publica Google («Restaurante mediterráneo»).
	 * No se declara ningún otro tipo de cocina, porque la ficha no lo hace.
	 */
	servesCuisine: ['Cocina mediterránea'],
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
