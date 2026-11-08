/**
 * Datos de Bar Seoane (Lugar Urbanización las Lomas, 6D · 21300 Calañas, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal y servicios de accesibilidad.
 *
 * La ficha no publica plus code, descripción del titular, precios ni carta, así que no se
 * reproduce ninguno. La respuesta de la ficha no destaca ninguna reseña con texto, por lo que esta
 * web no cita ninguna y enlaza al listado completo. Tampoco muestra ningún distintivo junto al
 * nombre.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bar-seoane.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Seoane',
	shortName: 'Seoane',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Restaurante» y «Bar». Ninguna
	 * nombra un tipo de cocina concreto.
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Bar'],
	/**
	 * Dirección publicada en la ficha («Lugar Urbanizacion las Lomas, 6D»): aquí se acentúa
	 * «Urbanización», como el resto de normalizaciones ortográficas del repositorio (donde «C.»
	 * pasa a «Calle»). El código postal 21300 y el municipio (Calañas) se publican tal cual.
	 */
	streetAddress: 'Lugar Urbanización las Lomas, 6D',
	postalCode: '21300',
	city: 'Calañas',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 626 07 42 40',
	latitude: 37.6513889,
	longitude: -6.8816667,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 208 reseñas). */
	rating: 4.6,
	reviewCount: 208,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Seoane/@37.6513889,-6.8816667,17z/data=!3m1!4b1!4m6!3m5!1s0xd11a5aa6e02843d:0x206deca6df3fbc51!8m2!3d37.6513889!4d-6.8816667!16s%2Fg%2F11c6w08nd2?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJPYQCbqqlEQ0RUbw_36bsbSA&hl=es';

export const phoneHref = 'tel:+34626074240';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local abre
 * de lunes a sábado de 12:00 a 24:00 y cierra los domingos.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
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
export const hoursSummary = 'De lunes a sábado de 12:00 a 24:00 · domingo cerrado';

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
 * las 208 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 208 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, ni precios, ni carta, así que ninguna respuesta los
 * reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Bar Seoane?',
		answer:
			'En Lugar Urbanización las Lomas, 6D, con código postal 21300, en Calañas (Huelva, Andalucía). La ficha publica las coordenadas 37.6513889, -6.8816667.',
	},
	{
		question: '¿Cuál es el horario de Bar Seoane?',
		answer:
			'La ficha publica este horario: de lunes a sábado de 12:00 a 24:00 y el domingo cerrado (el cierre se escribe como 00:00 en los datos estructurados). Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como «Restaurante» y «Bar», sin un tipo de cocina concreto. Tiene 4,6 sobre 5 con 208 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 626 07 42 40.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Lugar Urbanización las Lomas, 6D y las coordenadas 37.6513889, -6.8816667. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
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
		'Bar restaurante en Lugar Urbanización las Lomas, 6D de Calañas (Huelva), abierto de lunes a sábado de 12:00 a 24:00.',
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
	/* Sin `servesCuisine`: las categorías («Restaurante», «Bar») no nombran cocina concreta. */
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
