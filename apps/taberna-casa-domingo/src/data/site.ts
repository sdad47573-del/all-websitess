/**
 * Datos de Restaurante La Tasca de Alonso (Avenida Villanueva de las Cruces, 36 · 21300 Calañas, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas y servicios de accesibilidad.
 *
 * La ficha **no publica horario semanal** (solo el estado de «Abierto ahora», que cambia según el
 * momento y no se reproduce), ni plus code, ni descripción del titular, ni precios ni carta, así
 * que no se reproduce ninguno. La respuesta de la ficha no destaca ninguna reseña con texto, por lo
 * que esta web no cita ninguna y enlaza al listado completo. Tampoco muestra ningún distintivo
 * junto al nombre.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-la-tasca-de-alonso.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Tasca de Alonso',
	shortName: 'La Tasca de Alonso',
	/** Categoría que publica Google en esta ficha: «Restaurante», la única. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av Villanueva de las Cruces, 36»:
	 * aquí se desarrolla la abreviatura a «Avenida», como en el resto del repositorio (donde «C.»
	 * pasa a «Calle»). El código postal 21300 y el municipio (Calañas) se publican tal cual.
	 */
	streetAddress: 'Avenida Villanueva de las Cruces, 36',
	postalCode: '21300',
	city: 'Calañas',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 658 93 78 81',
	latitude: 37.6519023,
	longitude: -6.8798916,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 87 reseñas). */
	rating: 4.5,
	reviewCount: 87,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Tasca+de+Alonso/@37.6519023,-6.8798916,17z/data=!3m1!4b1!4m6!3m5!1s0xd11a5aa4c1b9eb5:0x89f89428061dafa6!8m2!3d37.6519023!4d-6.8798916!16s%2Fg%2F11f0_fj7mw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJtZ4bTKqlEQ0Rpq8dBiiU-Ik&hl=es';

export const phoneHref = 'tel:+34658937881';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/* Sin `hours`: la ficha no publica ningún horario semanal y no se inventa uno. */

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Lo que se puede decir en el hueco de las reseñas.
 *
 * La respuesta de la ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna:
 * las 87 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 87 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica horario, descripción del titular, ni precios, ni carta, así que ninguna
 * respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante La Tasca de Alonso?',
		answer:
			'En la Avenida Villanueva de las Cruces, 36, con código postal 21300, en Calañas (Huelva, Andalucía). La ficha publica las coordenadas 37.6519023, -6.8798916.',
	},
	{
		question: '¿Cuál es el horario de Restaurante La Tasca de Alonso?',
		answer:
			'La ficha no publica ningún horario semanal: solo muestra si está abierto en el momento de la consulta, un estado que cambia y que esta web no reproduce. Para saber cuándo abre, lo más rápido es llamar al 658 93 78 81.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Restaurante», sin un tipo de cocina concreto. Tiene 4,5 sobre 5 con 87 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 658 93 78 81.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida Villanueva de las Cruces, 36 y las coordenadas 37.6519023, -6.8798916. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Restaurante en la Avenida Villanueva de las Cruces, 36 de Calañas (Huelva), con 4,5 sobre 5 con 87 reseñas.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante», sin cocina concreta. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	/* Sin `openingHoursSpecification`: la ficha no publica ningún horario semanal. */
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
