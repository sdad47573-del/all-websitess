/**
 * Datos de El Patio de los Rosales
 * (Avenida de Sevilla, 74 · 41330 Los Rosales, Sevilla).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * La ficha no publica distrito, web propia ni descripción del titular, así que no se reproduce
 * ninguno de ellos. Los 3 extractos de reseñas se reproducen literalmente. La ficha no publica
 * precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://patio-rosales.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'El Patio de los Rosales',
	shortName: 'Patio de los Rosales',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «El Patio de los Rosales, Av. Sevilla, 74,
	 * 41330 Los Rosales, Sevilla». La ficha no publica distrito.
	 */
	streetAddress: 'Avenida de Sevilla, 74',
	district: '',
	postalCode: '41330',
	city: 'Los Rosales',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 698 92 73 01',
	latitude: 37.590248,
	longitude: -5.7329851,
	/** Plus code que publica la ficha (corto; el completo es 8C9PH7R8+3R). */
	plusCode: 'H7R8+3R Los Rosales',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 13 reseñas). */
	rating: 5,
	reviewCount: 13,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * La ficha no publica descripción del titular, así que se deja vacía y la web lo declara.
 */
export const descripcionLocal = [] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+Patio+de+los+Rosales/@37.590248,-5.7329851,17z/data=!3m1!4b1!4m6!3m5!1s0xd12595aeee79287:0xbe5c65954d557d08!8m2!3d37.590248!4d-5.7329851!16s%2Fg%2F11wps8n9td?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJh5Ln7lpZEg0RCH1VTZVlXL4&hl=es';

export const phoneHref = 'tel:+34698927301';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre dos turnos (mañana de 10:00 a 14:00 y tarde de 18:00 a 20:00);
 * el sábado abre solo por la mañana (10:00 a 14:00) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 14:00 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '18:00', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 14:00 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '18:00', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 14:00 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '18:00', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 14:00 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '18:00', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 14:00 · 18:00 – 20:00',
		shifts: [
			{ open: '10:00', close: '14:00' },
			{ open: '18:00', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 14:00',
		shifts: [{ open: '10:00', close: '14:00' }],
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
	'Dos turnos de lunes a viernes (10:00–14:00 y 18:00–20:00); sábado de 10:00 a 14:00; domingo cerrado';

/**
 * Datos de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas: el acceso para sillas de ruedas figura como disponible; el aseo adaptado,
 * los asientos adaptados y el bucle magnético asistencial figuran como no disponibles.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Tienen una gran variedad de flores frescas y buenos precios.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los ramitos son preciosos y la perrita muy graciosa',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un servicio muy agradable, me hicieron en un momento un mini ramito muy mono',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica distrito, web, descripción ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está El Patio de los Rosales?',
		answer:
			'En la Avenida de Sevilla, 74, con código postal 41330, en Los Rosales (Sevilla). La ficha no publica distrito. Publica el plus code H7R8+3R Los Rosales y las coordenadas 37.590248, -5.7329851.',
	},
	{
		question: '¿Cuál es el horario de El Patio de los Rosales?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:00 a 14:00 y tarde de 18:00 a 20:00. El sábado abre solo por la mañana, de 10:00 a 14:00, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: solo su categoría, su horario, su valoración y sus fotos.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 698 92 73 01. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Sevilla, 74, en Los Rosales, y las coordenadas 37.590248, -5.7329851. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code H7R8+3R Los Rosales.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible, pero el aseo adaptado, los asientos adaptados y el bucle magnético asistencial figuran como no disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 5 sobre 5 con 13 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de gran variedad de flores frescas con buenos precios, de ramitos preciosos y de un servicio muy agradable con un mini ramito muy mono. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Avenida de Sevilla, 74 de Los Rosales (Sevilla). Un 5 sobre 5 en Google Maps.',
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
