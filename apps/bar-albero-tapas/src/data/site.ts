/**
 * Datos de Bar Albero Tapas (C. Castillo, 4 · 21410 Isla Cristina, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal y las reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia **ni el grupo de accesibilidad**, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bar-albero-tapas.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Albero Tapas',
	shortName: 'Bar Albero',
	/** Categoría principal: la primera de las tres que publica Google. */
	category: 'Restaurante especializado en tapas',
	/** Las tres categorías de la ficha, en su orden. */
	categories: ['Restaurante especializado en tapas', 'Marisquería', 'Bar de tapas'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'C. Castillo, 4',
	postalCode: '21410',
	city: 'Isla Cristina',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 661 23 45 54',
	latitude: 37.2014868,
	longitude: -7.3275622,
	/** Plus code que publica la ficha. */
	plusCode: '6M2C+HX Isla Cristina',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 317 reseñas). */
	rating: 4.8,
	reviewCount: 317,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, en mayúsculas y con los espacios sueltos que trae (« .», « .SE»), y va
 * atribuida a la ficha. Además de presentarse, el local avisa de que mantiene su horario en Google
 * y de que recomienda reservar porque es pequeño.
 */
export const descripcionLocal =
	'UN PEQUEÑO TROCITO DE SEVILLA ESCONDIDO Y FUSIONADO CON ESTA MARAVILLA LLAMADA ISLA CRISTINA . NUESTRO HORARIO SIEMPRE ESTÁ ACTUALIZADO EN GOOGLE, GRACIAS .SE RECOMIENDA RESERVA AL SER PEQUEÑO.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Albero+Tapas/@37.2014868,-7.3275622,17z/data=!3m1!4b1!4m6!3m5!1s0xd1024f501b0a479:0x8f57e23abf96fbf5!8m2!3d37.2014868!4d-7.3275622!16s%2Fg%2F11gdy_yrk2?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJeaSwAfUkEA0R9fuWvzriV48&hl=es';

export const phoneHref = 'tel:+34661234554';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * sirve por la noche de martes a domingo (20:30 a 23:30 de martes a jueves y hasta las 24:00 de
 * viernes a domingo) y cierra el miércoles.
 *
 * El lunes la ficha **no publica el horario habitual, sino el de la Fiesta Nacional de España**
 * (13:30 – 16:30): la respuesta lo marca con el aviso «Horario de Fiesta Nacional de España», que
 * es un aviso de tipo 1 (horario propio de ese día), no el aviso de tipo 2 («el horario podría ser
 * diferente»). Se recoge ese tramo tal cual y se explica en la sección de horario, como en
 * `restaurante-la-abadia-de-calatrava`, que es el precedente del repositorio.
 *
 * El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como cierre a
 * las 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:30 – 16:30',
		shifts: [{ open: '13:30', close: '16:30' }],
		dayOfWeek: 'Monday',
		/* Horario de la Fiesta Nacional de España, no el de un lunes cualquiera. */
		festivo: 'Fiesta Nacional de España',
	},
	{
		day: 'Martes',
		service: '20:30 – 23:30',
		shifts: [{ open: '20:30', close: '23:30' }],
		dayOfWeek: 'Tuesday',
		festivo: null,
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
		festivo: null,
	},
	{
		day: 'Jueves',
		service: '20:30 – 23:30',
		shifts: [{ open: '20:30', close: '23:30' }],
		dayOfWeek: 'Thursday',
		festivo: null,
	},
	{
		day: 'Viernes',
		service: '20:30 – 24:00',
		shifts: [{ open: '20:30', close: '00:00' }],
		dayOfWeek: 'Friday',
		festivo: null,
	},
	{
		day: 'Sábado',
		service: '20:30 – 24:00',
		shifts: [{ open: '20:30', close: '00:00' }],
		dayOfWeek: 'Saturday',
		festivo: null,
	},
	{
		day: 'Domingo',
		service: '20:30 – 24:00',
		shifts: [{ open: '20:30', close: '00:00' }],
		dayOfWeek: 'Sunday',
		festivo: null,
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Noches de martes a domingo desde las 20:30; el miércoles cierra';

/**
 * Extractos de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluido el espacio suelto antes
 * de la coma de la segunda y los puntos suspensivos entre paréntesis de la tercera). La ficha las
 * presenta entrecomilladas; esas comillas son del propio Google y no forman parte del texto, así
 * que no se reproducen. Las puntuaciones son 5, 4 y 4.
 */
export const reviews = [
	{
		text: 'Pedimos gambas fritas, croquetas variadas y unas lágrimas de pollo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buenas tapas de pescado y marisco , buen trato y buen precio.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Tapas ricas (queso frito, tartar de atún...).',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni accesibilidad, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Bar Albero Tapas?',
		answer:
			'En el C. Castillo, 4, con código postal 21410, en Isla Cristina (Huelva). La ficha publica el plus code 6M2C+HX Isla Cristina y las coordenadas 37.2014868, -7.3275622.',
	},
	{
		question: '¿Cuál es el horario de Bar Albero Tapas?',
		answer:
			'La ficha publica servicio de noche de martes a domingo: de 20:30 a 23:30 de martes a jueves y de 20:30 a 24:00 de viernes a domingo. El miércoles cierra. El lunes 12 la ficha no da el horario habitual, sino el de la Fiesta Nacional de España, de 13:30 a 16:30. Es el horario publicado en la ficha consultada el 10 de octubre de 2026 y conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Google lo clasifica a la vez como restaurante especializado en tapas, marisquería y bar de tapas. Tiene 4,8 sobre 5 con 317 reseñas, y en las tres reseñas que destaca se citan unas gambas fritas, croquetas variadas, lágrimas de pollo, queso frito y tartar de atún, y se habla de las tapas de pescado y marisco.',
	},
	{
		question: '¿Hay que reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar, pero el propio local advierte en su descripción de la ficha que «SE RECOMIENDA RESERVA AL SER PEQUEÑO». El teléfono publicado es el 661 23 45 54.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Castillo, 4 y las coordenadas 37.2014868, -7.3275622. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 6M2C+HX Isla Cristina.',
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
		'Bar de tapas y marisquería en el C. Castillo, 4 de Isla Cristina, con servicio de noche de martes a domingo; cierra los miércoles.',
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
	/* Se traducen las dos categorías que declaran comida: tapas y marisquería. */
	servesCuisine: ['Tapas', 'Marisco'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	/* Sin `amenityFeature`: la ficha no publica el grupo de accesibilidad. */
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
