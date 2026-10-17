/**
 * Datos de Floristería Virgen de la Caridad
 * (Avenida de la Escultora la Roldana, portal 8, local 11 · 41500 Alcalá de Guadaíra, Sevilla).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas y 2 extractos destacados, coordenadas
 * y plus code.
 *
 * La ficha no publica horario, horario semanal, accesibilidad ni web propia, así que no se
 * reproduce nada de eso. La descripción del titular y los 2 extractos de reseñas se reproducen
 * literalmente, con sus erratas, y se citan como tales en la web. La ficha no publica precios, así
 * que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://virgen-caridad.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Virgen de la Caridad',
	shortName: 'Virgen de la Caridad',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería Virgen de la Caridad, Av. de la Escultora
	 * 'la Roldana', Portal 8, local 11, 41500 Alcalá de Guadaíra, Sevilla».
	 * La ficha no publica distrito.
	 */
	streetAddress: "Avenida de la Escultora la Roldana, portal 8, local 11",
	district: '',
	postalCode: '41500',
	city: 'Alcalá de Guadaíra',
	province: 'Sevilla',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 954 10 20 54',
	latitude: 37.3405828,
	longitude: -5.8268578,
	/** Plus code que publica la ficha (corto; el completo es 8C9485RF+67). */
	plusCode: '85RF+67 Alcalá de Guadaíra',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 59 reseñas). */
	rating: 4.2,
	reviewCount: 59,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Gran variedad de flores y plantas con envio a domicilio. Ofrecemos atención integral para bodas y contamos con Wedding Planner. También diseñamos tocados y complementos para cualquier tipo de evento. Realizamos también todo lo relacionado con defunciones y tanatorios.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Virgen+de+la+Caridad/@37.3405828,-5.8268578,17z/data=!3m1!4b1!4m6!3m5!1s0xd1264eaa26717eb:0xe90691d0ce95ab53!8m2!3d37.3405828!4d-5.8268578!16s%2Fg%2F11b6_n5d5t?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ6xdnoupkEg0RU6uVztCRBuk&hl=es';

export const phoneHref = 'tel:+34954102054';

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
 * La ficha no publica ninguno, así que la lista viene vacía y la web lo dice claramente.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 2 que devolvía el endpoint de vista previa, ambos con nota 5 sobre 5; se reproducen tal
 * cual y se citan como tales en la web. El endpoint no trae el nombre del autor, así que se
 * publican sin firma.
 */
export const reviews = [
	{
		text: 'Trato estupendo, flores frescas y buenos precios.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Gran persona, trato inmejorable gran profecional..',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica horario, accesibilidad, distrito, web ni precios, así que ninguna respuesta
 * los menciona como datos: remiten al teléfono.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Virgen de la Caridad?',
		answer:
			'En la Avenida de la Escultora la Roldana, portal 8, local 11, con código postal 41500, en Alcalá de Guadaíra (Sevilla). Publica el plus code 85RF+67 Alcalá de Guadaíra y las coordenadas 37.3405828, -5.8268578.',
	},
	{
		question: '¿Cuál es el horario de Floristería Virgen de la Caridad?',
		answer:
			'La ficha no publica horario, así que esta web no reproduce ninguno. Lo más rápido es llamar al 954 10 20 54 antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que tienen gran variedad de flores y plantas con envío a domicilio, atención integral para bodas con wedding planner, tocados y complementos para eventos, y todo lo relacionado con defunciones y tanatorios.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 954 10 20 54. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de la Escultora la Roldana, portal 8, local 11, en Alcalá de Guadaíra, y las coordenadas 37.3405828, -5.8268578. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 85RF+67 Alcalá de Guadaíra.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Ante la duda, lo mejor es llamar al 954 10 20 54 y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 59 reseñas. Los 2 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de trato estupendo con flores frescas y buenos precios, y de trato inmejorable. El enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería en la Avenida de la Escultora la Roldana de Alcalá de Guadaíra. Flores y plantas a domicilio, bodas con wedding planner y arreglos para eventos.',
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
