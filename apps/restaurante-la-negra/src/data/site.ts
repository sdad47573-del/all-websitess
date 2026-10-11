/**
 * Datos de Restaurante La Negra (Avenida de Portugal, 10 · 21530 Tharsis, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, horario semanal y servicios de accesibilidad.
 *
 * La ficha no publica plus code, descripción del titular, precios ni carta, así que no se
 * reproduce ninguno. La respuesta de la ficha no destaca ninguna reseña con texto, por lo que esta
 * web no cita ninguna y enlaza al listado completo. Tampoco muestra ningún distintivo junto al
 * nombre.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-la-negra.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Negra',
	shortName: 'La Negra',
	/** Categoría que publica Google en esta ficha: «Restaurante andaluz», la única. */
	category: 'Restaurante andaluz',
	categories: ['Restaurante andaluz'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. de Portugal, 10»: aquí se
	 * desarrolla la abreviatura a «Avenida», como en el resto del repositorio (donde «C.» pasa a
	 * «Calle»). El código postal 21530 y el municipio (Tharsis) se publican tal cual.
	 */
	streetAddress: 'Avenida de Portugal, 10',
	postalCode: '21530',
	city: 'Tharsis',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 636 48 14 46',
	latitude: 37.60016,
	longitude: -7.12398,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 339 reseñas). */
	rating: 4.4,
	reviewCount: 339,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Negra/@37.60016,-7.12398,17z/data=!3m1!4b1!4m6!3m5!1s0xd10529b41f55e8d:0x86988c6f461a7ed5!8m2!3d37.60016!4d-7.12398!16s%2Fg%2F11ysklx2w?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJjV71QZtSEA0R1X4aRm-MmIY&hl=es';

export const phoneHref = 'tel:+34636481446';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local abre
 * los siete días: de lunes a viernes de 6:30 a 18:00, el sábado de 7:00 a 19:00 y el domingo de
 * 8:00 a 18:00.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:30 – 18:00',
		shifts: [{ open: '06:30', close: '18:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:30 – 18:00',
		shifts: [{ open: '06:30', close: '18:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:30 – 18:00',
		shifts: [{ open: '06:30', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:30 – 18:00',
		shifts: [{ open: '06:30', close: '18:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:30 – 18:00',
		shifts: [{ open: '06:30', close: '18:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '7:00 – 19:00',
		shifts: [{ open: '07:00', close: '19:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 18:00',
		shifts: [{ open: '08:00', close: '18:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lunes a viernes de 6:30 a 18:00 · sábado de 7:00 a 19:00 · domingo de 8:00 a 18:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aparcamiento y los
 * asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra (tampoco aseo
 * adaptado).
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Lo que se puede decir en el hueco de las reseñas.
 *
 * La respuesta de la ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna:
 * las 339 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 339 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, ni precios, ni carta, así que ninguna respuesta los
 * reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante La Negra?',
		answer:
			'En la Avenida de Portugal, 10, con código postal 21530, en Tharsis (Huelva, Andalucía). La ficha publica las coordenadas 37.60016, -7.12398.',
	},
	{
		question: '¿Cuál es el horario de Restaurante La Negra?',
		answer:
			'La ficha publica este horario: de lunes a viernes de 6:30 a 18:00, el sábado de 7:00 a 19:00 y el domingo de 8:00 a 18:00, sin ningún día de cierre. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como «Restaurante andaluz». Tiene 4,4 sobre 5 con 339 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 636 48 14 46.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Portugal, 10 y las coordenadas 37.60016, -7.12398. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aparcamiento y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Restaurante andaluz en la Avenida de Portugal, 10 de Tharsis (Huelva), abierto todos los días: entre semana de 6:30 a 18:00.',
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
	servesCuisine: ['Cocina andaluza'],
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
