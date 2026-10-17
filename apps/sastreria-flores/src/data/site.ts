/**
 * Datos de La Sastrería de las Flores
 * (Calle de Mantuano, 40 · 28002 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas y 2 extractos destacados, coordenadas,
 * plus code y accesibilidad.
 *
 * La ficha no publica horario, así que la lista viene vacía y la web lo dice claramente en lugar
 * de inventar uno. Publica una entrada de accesibilidad como no disponible (aparcamiento
 * adaptado), y así se reproduce. La ficha no publica web propia. La descripción del titular y los 2
 * extractos de reseñas (uno de 5 y uno de 1 sobre 5) se reproducen literalmente, con sus erratas, y
 * se citan como tales en la web. La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://sastreria-flores.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Sastrería de las Flores',
	shortName: 'Sastrería de las Flores',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «La Sastrería de las Flores, C. de Mantuano, 40,
	 * Chamartín, 28002 Madrid».
	 */
	streetAddress: 'Calle de Mantuano, 40',
	district: 'Chamartín',
	postalCode: '28002',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 606 45 55 52',
	latitude: 40.4467015,
	longitude: -3.6756626,
	/** Plus code que publica la ficha (corto; el completo es 8CG8C8WF+MP). */
	plusCode: 'C8WF+MP Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 12 reseñas). */
	rating: 4.7,
	reviewCount: 12,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Estudio de diseño floral. Decoración floral. Bodas y eventos. Envíos diarios de flores.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Sastrer%C3%ADa+de+las+Flores/@40.4467015,-3.6756626,17z/data=!3m1!4b1!4m6!3m5!1s0xd4229521bc01a57:0x3ccf3675cf36f960!8m2!3d40.4467015!4d-3.6756626!16s%2Fg%2F11q3sk6nvz?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJVxrAG1IpQg0RYPk2z3U2zzw&hl=es';

export const phoneHref = 'tel:+34606455552';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La ficha no publica horario, así que la lista viene vacía y la web lo dice claramente en lugar
 * de inventar uno. El esquema de datos tampoco declara horarios.
 */
export const hours = [] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'La ficha no publica horario: conviene llamar antes de ir';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como no disponible: no hay aparcamiento adaptado para sillas de
 * ruedas. La ficha no publica ningún otro.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 2 que devolvía el endpoint de vista previa, uno con nota 5 y otro con nota 1 sobre 5;
 * se reproducen tal cual y se citan como tales en la web. El endpoint no trae el nombre del autor,
 * así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Excelente servicio, rapido y excelente calidad de las flores.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Creo que es el negocio más ridículo que he visto en mi vida.',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica horario, web ni precios, así que ninguna respuesta los menciona como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está La Sastrería de las Flores?',
		answer:
			'En la Calle de Mantuano, 40, con código postal 28002, en el distrito de Chamartín, Madrid. Publica el plus code C8WF+MP Madrid y las coordenadas 40.4467015, -3.6756626.',
	},
	{
		question: '¿Cuál es el horario de La Sastrería de las Flores?',
		answer:
			'La ficha no publica horario, así que esta web no reproduce ninguno. Lo más rápido es llamar al 606 45 55 52 antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que es un estudio de diseño floral con decoración floral, bodas y eventos, y envíos diarios de flores.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 606 45 55 52. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de Mantuano, 40, en Madrid, y las coordenadas 40.4467015, -3.6756626. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C8WF+MP Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como no disponible: no hay aparcamiento adaptado para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 12 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: uno habla de excelente servicio y calidad de las flores, y otro es una crítica negativa. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Estudio de diseño floral en la Calle de Mantuano, Chamartín, Madrid. Decoración floral, bodas y eventos con envíos diarios de flores.',
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
	/* Sin `openingHoursSpecification`: la ficha no publica horario y no se inventa uno. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
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
