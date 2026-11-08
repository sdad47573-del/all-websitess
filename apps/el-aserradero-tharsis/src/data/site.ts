/**
 * Datos de El Aserradero Tharsis (Calle Calderón, 23 · 21530 Tharsis, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, categoría, valoración con número
 * de reseñas y coordenadas.
 *
 * Es una ficha mínima: **no publica teléfono** (muestra «Añadir teléfono»), ni horario semanal, ni
 * plus code, ni servicios de accesibilidad, ni descripción del titular, ni precios ni carta, así
 * que no se reproduce ninguno. Por eso esta web no tiene ningún botón de llamada ni tabla de
 * horario: los contactos son las indicaciones y la ficha de Maps. La respuesta de la ficha no
 * destaca ninguna reseña con texto, por lo que esta web no cita ninguna y enlaza al listado
 * completo. Tampoco muestra ningún distintivo junto al nombre.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://el-aserradero-tharsis.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'El Aserradero Tharsis',
	shortName: 'El Aserradero',
	/** Categoría que publica Google en esta ficha: «Hamburguesería», la única. */
	category: 'Hamburguesería',
	categories: ['Hamburguesería'],
	/**
	 * Dirección publicada en la ficha («C. Calderon, 23»): aquí se desarrolla la abreviatura a
	 * «Calle» y se acentúa «Calderón», como el resto de normalizaciones del repositorio (donde
	 * «C.» pasa a «Calle»). El código postal 21530 y el municipio (Tharsis) se publican tal cual.
	 */
	streetAddress: 'Calle Calderón, 23',
	postalCode: '21530',
	city: 'Tharsis',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/* Sin `phone`: la ficha no publica ningún teléfono (muestra «Añadir teléfono»). */
	latitude: 37.600544,
	longitude: -7.1198206,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 3 reseñas). */
	rating: 5,
	reviewCount: 3,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+Aserradero+Tharsis/@37.600544,-7.1198206,17z/data=!3m1!4b1!4m6!3m5!1s0xd1053001396dfa5:0xbd55ac320a723190!8m2!3d37.600544!4d-7.1198206!16s%2Fg%2F11z4gyffvq?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJpd-WEwBTEA0RkDFyCjKsVb0&hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/* Sin `hours`: la ficha no publica ningún horario semanal y no se inventa uno. */

/* Sin `accesibilidad`: la ficha no publica ningún servicio de accesibilidad. */

/**
 * Lo que se puede decir en el hueco de las reseñas.
 *
 * La respuesta de la ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna:
 * las 3 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 3 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica teléfono, horario, descripción del titular, ni precios, ni carta, así que
 * ninguna respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está El Aserradero Tharsis?',
		answer:
			'En la Calle Calderón, 23, con código postal 21530, en Tharsis (Huelva, Andalucía). La ficha publica las coordenadas 37.600544, -7.1198206.',
	},
	{
		question: '¿Cuál es el horario de El Aserradero Tharsis?',
		answer:
			'La ficha no publica ningún horario semanal, así que esta web no puede darlo. Lo más rápido es acercarse al local o consultar su ficha de Google Maps, que sí indica si está abierto en cada momento.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como «Hamburguesería». Tiene 5 sobre 5 con 3 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar? ¿Tienen teléfono?',
		answer:
			'La ficha no publica ningún teléfono (muestra «Añadir teléfono») ni un sistema de reservas, y esta web no permite reservar. La única vía de contacto que queda es acercarse al local o consultar su ficha de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Calderón, 23 y las coordenadas 37.600544, -7.1198206. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 11 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Hamburguesería en la Calle Calderón, 23 de Tharsis (Huelva), con 5 sobre 5 con 3 reseñas.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	/* Sin `telephone`: la ficha no publica ningún teléfono y no se inventa uno. */
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
	servesCuisine: ['Hamburguesas'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	/* Sin `openingHoursSpecification`: la ficha no publica ningún horario semanal. */
	/* Sin `amenityFeature`: la ficha no publica ningún servicio de accesibilidad. */
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
 * Rellena los campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de /aviso-legal sigue visible. La ficha no publica teléfono propio, así que el único
 * dato de contacto que consta es el domicilio: el correo que falta es el que tiene que facilitar
 * el titular.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
