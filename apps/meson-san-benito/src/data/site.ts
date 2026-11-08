/**
 * Datos de Meson san Benito (Calle la Vega, 57 · 21320 El Cerro de Andévalo, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, horario semanal y servicios de accesibilidad.
 *
 * La ficha no publica plus code, descripción del titular, precios ni carta, así que no se
 * reproduce ninguno. La respuesta de la ficha no destaca ninguna reseña con texto, por lo que esta
 * web no cita ninguna y enlaza al listado completo. Tampoco muestra ningún distintivo junto al
 * nombre.
 *
 * El nombre se reproduce tal como lo publica la ficha, sin tilde en «Meson» y con «san» en
 * minúscula.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://meson-san-benito.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Meson san Benito',
	shortName: 'San Benito',
	/** Categoría que publica Google en esta ficha: «Restaurante», la única. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. la Vega, 57»: aquí se desarrolla
	 * la abreviatura a «Calle», como en el resto del repositorio. El código postal 21320 y el
	 * municipio (El Cerro de Andévalo) se publican tal cual.
	 */
	streetAddress: 'Calle la Vega, 57',
	postalCode: '21320',
	city: 'El Cerro de Andévalo',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 676 62 07 06',
	latitude: 37.7344113,
	longitude: -6.9326184,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 222 reseñas). */
	rating: 4.6,
	reviewCount: 222,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Meson+san+Benito/@37.7344113,-6.9326184,17z/data=!3m1!4b1!4m6!3m5!1s0xd11a9a77263d51f:0xa8c11e76a25c67f7!8m2!3d37.7344113!4d-6.9326184!16s%2Fg%2F11f86967nv?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJH9VjcqepEQ0R92dconYewag&hl=es';

export const phoneHref = 'tel:+34676620706';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local abre
 * de lunes a viernes de 6:00 a 22:30, el sábado de 6:00 a 16:30 y cierra los domingos.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:00 – 22:30',
		shifts: [{ open: '06:00', close: '22:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:00 – 22:30',
		shifts: [{ open: '06:00', close: '22:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:00 – 22:30',
		shifts: [{ open: '06:00', close: '22:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:00 – 22:30',
		shifts: [{ open: '06:00', close: '22:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:00 – 22:30',
		shifts: [{ open: '06:00', close: '22:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '6:00 – 16:30',
		shifts: [{ open: '06:00', close: '16:30' }],
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
	'Lunes a viernes de 6:00 a 22:30 · sábado de 6:00 a 16:30 · domingo cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra (tampoco aparcamiento ni aseo adaptados).
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Lo que se puede decir en el hueco de las reseñas.
 *
 * La respuesta de la ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna:
 * las 222 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 222 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, ni precios, ni carta, así que ninguna respuesta los
 * reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Meson san Benito?',
		answer:
			'En la Calle la Vega, 57, con código postal 21320, en El Cerro de Andévalo (Huelva, Andalucía). La ficha publica las coordenadas 37.7344113, -6.9326184.',
	},
	{
		question: '¿Cuál es el horario de Meson san Benito?',
		answer:
			'La ficha publica este horario: de lunes a viernes de 6:00 a 22:30, el sábado de 6:00 a 16:30 y el domingo cerrado. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Restaurante», sin un tipo de cocina concreto. Tiene 4,6 sobre 5 con 222 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 676 62 07 06.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle la Vega, 57 y las coordenadas 37.7344113, -6.9326184. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Mesón restaurante en la Calle la Vega, 57 de El Cerro de Andévalo (Huelva), abierto de lunes a viernes de 6:00 a 22:30.',
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
