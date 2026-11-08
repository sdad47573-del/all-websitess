/**
 * Datos de Restaurante Villatorres (Calle Villatorres, 18 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 16 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, horario semanal, coordenadas y servicios de accesibilidad.
 *
 * La ficha **no publica descripción del titular, ni precios ni carta**, así que no se reproduce
 * ninguno. La respuesta de la ficha no destaca ninguna reseña con texto, por lo que esta web no
 * cita ninguna y enlaza al listado completo.
 *
 * Lo que no viene de la ficha y se dice igual: que sirve menú diario en el polígono de Los
 * Olivares, junto al Hospital Princesa de España (así lo anuncian su Facebook y el directorio
 * Jaén Paraíso Interior, que además publica el correo de reservas).
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-villatorres',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '16 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Villatorres',
	shortName: 'Villatorres',
	/** Categoría que publica Google en esta ficha: «Bar restaurante», la única. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Villatorres, 18»:
	 * aquí se desarrolla la abreviatura a «Calle», como en el resto del repositorio (donde «C.»
	 * pasa a «Calle»). El código postal 23009 y el municipio (Jaén) se publican tal cual.
	 */
	streetAddress: 'Calle Villatorres, 18',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 28 17 80',
	latitude: 37.798035,
	longitude: -3.7823332,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 872 reseñas). */
	rating: 4.3,
	reviewCount: 872,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Villatorres/@37.798035,-3.7823332,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd659dbb0b4a9:0x8a4fd6dd4fdffdd2!8m2!3d37.798035!4d-3.7823332!16s%2Fg%2F1td6hv2c?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJqbSw21nWbQ0R0v3fT93WT4o&hl=es';

export const phoneHref = 'tel:+34953281780';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal publicado en la ficha en la fecha de consulta.
 *
 * De lunes a sábado abre de 7:30 a 16:30; el domingo cierra. Puede cambiar: ante la duda,
 * llama antes de salir.
 */
export const horario = [
	{ days: 'Lunes a sábado', hours: '7:30–16:30' },
	{ days: 'Domingo', hours: 'Cerrado' },
] as const;

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
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
 * las 872 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 872 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha (más dos datos externos que
 * se marcan como tales: el menú diario y el correo de reservas).
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Villatorres?',
		answer:
			'En la Calle Villatorres, 18, con código postal 23009, en Jaén (Andalucía), en el polígono de Los Olivares, junto al Hospital Princesa de España. La ficha publica las coordenadas 37.798035, -3.7823332.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Villatorres?',
		answer:
			'Según la ficha: de lunes a sábado de 7:30 a 16:30; domingo cerrado. Puede cambiar, así que confirma por teléfono antes de salir: 953 28 17 80.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Bar restaurante», sin un tipo de cocina concreto. Tiene 4,3 sobre 5 con 872 reseñas. Su página de Facebook lo presenta como restaurante de menú diario en Los Olivares. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El directorio Jaén Paraíso Interior publica el teléfono 953 28 17 80 y el correo reservas@restaurantevillatorres.es para reservas.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Villatorres, 18 y las coordenadas 37.798035, -3.7823332. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 16 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante en la Calle Villatorres, 18 de Jaén (Los Olivares), con 4,3 sobre 5 con 872 reseñas.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Bar restaurante», sin cocina concreta. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '07:30',
			closes: '16:30',
		},
	],
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
