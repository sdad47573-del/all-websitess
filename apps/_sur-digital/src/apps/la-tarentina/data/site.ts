/**
 * Datos de La Tarentina Floristería
 * (Calle Mallorca, 1 · 41014 Sevilla).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * descripción del titular, valoración con número de reseñas, coordenadas,
 * plus code, horario semanal y accesibilidad.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. La descripción del titular se
 * reproduce literalmente, con sus erratas, y se cita como tal en la web. La vista previa no incluía
 * los textos de las reseñas, así que esta web no reproduce ningún extracto: solo la nota, el
 * recuento y el enlace. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/la-tarentina',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Tarentina Floristería',
	shortName: 'La Tarentina',
	/** Categoría principal que publica Google en esta ficha. */
	category: 'Floristería',
	categories: [
		'Floristería',
		'Tienda de globos',
		'Entrega de flores',
		'Tienda de regalos',
		'Organizador de eventos',
		'Organizador de bodas',
	],
	/**
	 * Dirección publicada en la ficha: «La Tarentina Floristería, C. Mallorca, 1,
	 * 41014 Sevilla». La ficha no publica distrito.
	 */
	streetAddress: 'Calle Mallorca, 1',
	district: '',
	postalCode: '41014',
	city: 'Sevilla',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 627 02 54 14',
	latitude: 37.3275572,
	longitude: -5.9668591,
	/** Plus code que publica la ficha (corto; el completo es 8C9282HM+27). */
	plusCode: '82HM+27 Sevilla',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 235 reseñas). */
	rating: 5,
	reviewCount: 235,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Floristería en Sevilla, frente al Hospital Viamed, Sta. Angela de la Cruz. En la Tarentina te esperamos para que hagas tus mejores regalos florales. Amplia variedad en flor fresca cortada, centros florales, flor preservada, ramos de flores, bouquets, ramos de novia, arreglos florales para bodas y eventos, plantas y exclusivos bombones Belgas con la mejor de nuestras sonrisas. No dudes en contactarnos.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Tarentina+Florister%C3%ADa/@37.3275572,-5.9668591,17z/data=!3m1!4b1!4m6!3m5!1s0xd126f3608f73f3d:0xa420f405bef7fbd5!8m2!3d37.3275572!4d-5.9668591!16s%2Fg%2F11ldh48l_b?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJPT_3CDZvEg0R1fv3vgX0IKQ&hl=es';

export const phoneHref = 'tel:+34627025414';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 10:00 a 14:00 y tarde de 17:00 a 20:00);
 * el sábado abre solo por la mañana (10:00 a 13:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:00 · 17:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '17:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 13:00',
		shifts: [{ open: '10:00', close: '13:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos de lunes a viernes (10:00–14:00 y 17:00–20:00); sábado de 10:00 a 13:00; domingo cerrado';

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
 * La vista previa no incluía los textos de las reseñas, así que no se reproduce ningún extracto:
 * la web publica solo la nota, el recuento y el enlace al listado completo.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica textos de reseñas, distrito, web ni precios, así que ninguna respuesta los
 * menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está La Tarentina Floristería?',
		answer:
			'En la Calle Mallorca, 1, con código postal 41014, en Sevilla, frente al Hospital Viamed Santa Angela de la Cruz. Publica el plus code 82HM+27 Sevilla y las coordenadas 37.3275572, -5.9668591.',
	},
	{
		question: '¿Cuál es el horario de La Tarentina Floristería?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:00 a 14:00 y tarde de 17:00 a 20:00. El sábado abre solo por la mañana, de 10:00 a 13:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería, y también como tienda de globos, entrega de flores, tienda de regalos y organizador de eventos y bodas. Su propia descripción en la ficha dice, literalmente, que tienen amplia variedad en flor fresca cortada, centros florales, flor preservada, ramos de flores, bouquets, ramos de novia, arreglos florales para bodas y eventos, plantas y bombones belgas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 627 02 54 14. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Mallorca, 1, en Sevilla, y las coordenadas 37.3275572, -5.9668591. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 82HM+27 Sevilla.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 5 sobre 5 con 235 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Calle Mallorca, 1 de Sevilla, frente al Hospital Viamed. Flor fresca cortada, centros, ramos de novia y arreglos para bodas y eventos.',
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
