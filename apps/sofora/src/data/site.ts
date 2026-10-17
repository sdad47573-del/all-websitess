/**
 * Datos de floristería Sofora
 * (Avenida de Menéndez Pelayo, 21 · 41003 Sevilla, Casco Antiguo).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas y 3 extractos destacados, coordenadas,
 * plus code, horario semanal y accesibilidad.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. La descripción y los 3
 * extractos de reseñas se reproducen literalmente, con sus erratas, y se citan como tales en la
 * web. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://sofora.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps (con minúscula inicial, como en la ficha). */
	name: 'floristería Sofora',
	shortName: 'Sofora',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «floristería Sofora, Av. de Menéndez Pelayo, 21,
	 * Casco Antiguo, 41003 Sevilla». La ficha publica además el distrito: «Casco Antiguo».
	 */
	streetAddress: 'Avenida de Menéndez Pelayo, 21',
	district: 'Casco Antiguo',
	postalCode: '41003',
	city: 'Sevilla',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 629 41 80 36',
	latitude: 37.3868517,
	longitude: -5.9856863,
	/** Plus code que publica la ficha (corto; el completo es 8C9P92P7+PP). */
	plusCode: '92P7+PP Sevilla',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 95 reseñas). */
	rating: 4.9,
	reviewCount: 95,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Somos una empresa con corazón, realizamos pedidos a domicilios incluido domingos y festivos.. Llámanos y haz tu pedido',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/florister%C3%ADa+Sofora/@37.3868517,-5.9856863,17z/data=!3m1!4b1!4m6!3m5!1s0xd126d15c1283071:0x2d6cd96948d18673!8m2!3d37.3868517!4d-5.9856863!16s%2Fg%2F11qbkqsl5k?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJcTAowRVtEg0Rc4bRSGnZbC0&hl=es';

export const phoneHref = 'tel:+34629418036';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 8:30 a 13:30 y tarde de 17:00 a 20:00);
 * el sábado abre solo por la mañana (8:30 a 13:30) y el domingo abre solo por la mañana
 * (9:00 a 13:30).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:30 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '8:30', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:30 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '8:30', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '8:30', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '8:30', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 13:30 · 17:00 – 20:00',
		shifts: [
			{ open: '8:30', close: '13:30' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 13:30',
		shifts: [{ open: '8:30', close: '13:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 13:30',
		shifts: [{ open: '9:00', close: '13:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos de lunes a viernes (8:30–13:30 y 17:00–20:00); sábado de 8:30 a 13:30; domingo de 9:00 a 13:30';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Trato excelente y unas flores estupendas',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Quisimos regalar el ramo a una novia que le durará toda la vida.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Y enhorabuena por vuestro maravilloso escaparate.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está floristería Sofora?',
		answer:
			'En la Avenida de Menéndez Pelayo, 21, con código postal 41003, en el Casco Antiguo de Sevilla. Publica el plus code 92P7+PP Sevilla y las coordenadas 37.3868517, -5.9856863.',
	},
	{
		question: '¿Cuál es el horario de floristería Sofora?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 8:30 a 13:30 y tarde de 17:00 a 20:00. El sábado abre solo por la mañana, de 8:30 a 13:30, y el domingo también abre por la mañana, de 9:00 a 13:30. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que son una empresa con corazón y que realizan pedidos a domicilio incluidos domingos y festivos.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 629 41 80 36. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Menéndez Pelayo, 21, en Sevilla, y las coordenadas 37.3868517, -5.9856863. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 92P7+PP Sevilla.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 95 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de trato excelente con flores estupendas, de un ramo para una novia que le durará toda la vida y de un maravilloso escaparate. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Avenida de Menéndez Pelayo, 21 del Casco Antiguo de Sevilla. Pedidos a domicilio incluidos domingos y festivos.',
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
