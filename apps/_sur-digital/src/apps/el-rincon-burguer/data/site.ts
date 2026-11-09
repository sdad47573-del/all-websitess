/**
 * Datos de El Rincon Burguer (Paseo Constitución, 9 · 21540 Villanueva de los Castillejos, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal y servicios de accesibilidad.
 *
 * La ficha no publica plus code, descripción del titular, precios ni carta, así que no se
 * reproduce ninguno. La respuesta de la ficha no destaca ninguna reseña con texto, por lo que esta
 * web no cita ninguna y enlaza al listado completo. Tampoco muestra ningún distintivo junto al
 * nombre.
 *
 * El nombre se reproduce tal como lo publica la ficha, sin tilde en «Rincon».
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/el-rincon-burguer',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, sin tilde en «Rincon». */
	name: 'El Rincon Burguer',
	shortName: 'El Rincón Burguer',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Cafetería», «Restaurante
	 * especializado en pollo», «Hamburguesería», «Heladería» y «Pizzería».
	 */
	category: 'Cafetería',
	categories: [
		'Cafetería',
		'Restaurante especializado en pollo',
		'Hamburguesería',
		'Heladería',
		'Pizzería',
	],
	/**
	 * Dirección publicada en la ficha («PASEO CONSTITUCION, 9»): aquí se escribe en minúsculas con
	 * su tilde («Paseo Constitución, 9»), como el resto de normalizaciones del repositorio (donde
	 * «C.» pasa a «Calle»). El código postal 21540 y el municipio (Villanueva de los Castillejos)
	 * se publican tal cual.
	 */
	streetAddress: 'Paseo Constitución, 9',
	postalCode: '21540',
	city: 'Villanueva de los Castillejos',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 959 77 04 08',
	latitude: 37.5004598,
	longitude: -7.2727658,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 11 reseñas). */
	rating: 5,
	reviewCount: 11,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+Rincon+Burguer/@37.5004598,-7.2727658,17z/data=!3m1!4b1!4m6!3m5!1s0xd1045ad5029bf4f:0x5359ff7575820105!8m2!3d37.5004598!4d-7.2727658!16s%2Fg%2F11wfhsvxpb?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJT78pUK1FEA0RBQGCdXX_WVM&hl=es';

export const phoneHref = 'tel:+34959770408';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local
 * cierra de lunes a miércoles y abre de jueves a domingo en dos turnos: el jueves de 9:00 a 12:00
 * y de 20:00 a 23:30, el viernes de 9:00 a 14:00 y de 20:00 a 2:00, el sábado de 12:00 a 14:00 y
 * de 20:00 a 2:00, y el domingo de 12:00 a 14:00 y de 20:00 a 23:30.
 *
 * La ficha no aclara si las 2:00 son de la madrugada siguiente, así que los tramos se reproducen
 * sin interpretarlos: en los datos estructurados el cierre se declara como `02:00`, que es como lo
 * lee Google en el resto de fichas del repositorio.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente.
 *
 * Un día sin tramos (`shifts: []`) es un día cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 12:00 · 20:00 – 23:30',
		shifts: [
			{ open: '09:00', close: '12:00' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 14:00 · 20:00 – 2:00',
		shifts: [
			{ open: '09:00', close: '14:00' },
			{ open: '20:00', close: '02:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 14:00 · 20:00 – 2:00',
		shifts: [
			{ open: '12:00', close: '14:00' },
			{ open: '20:00', close: '02:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 14:00 · 20:00 – 23:30',
		shifts: [
			{ open: '12:00', close: '14:00' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De jueves a domingo en dos turnos · lunes a miércoles cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Lo que se puede decir en el hueco de las reseñas.
 *
 * La respuesta de la ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna:
 * las 11 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 11 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, ni precios, ni carta, así que ninguna respuesta los
 * reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está El Rincon Burguer?',
		answer:
			'En el Paseo Constitución, 9, con código postal 21540, en Villanueva de los Castillejos (Huelva, Andalucía). La ficha publica las coordenadas 37.5004598, -7.2727658.',
	},
	{
		question: '¿Cuál es el horario de El Rincon Burguer?',
		answer:
			'La ficha publica este horario: cierra de lunes a miércoles y abre de jueves a domingo en dos turnos (el jueves de 9:00 a 12:00 y de 20:00 a 23:30, el viernes de 9:00 a 14:00 y de 20:00 a 2:00, el sábado de 12:00 a 14:00 y de 20:00 a 2:00, y el domingo de 12:00 a 14:00 y de 20:00 a 23:30). Google no aclara si las 2:00 son de la madrugada siguiente. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como cafetería, restaurante especializado en pollo, hamburguesería, heladería y pizzería. Tiene 5 sobre 5 con 11 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 959 77 04 08.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Paseo Constitución, 9 y las coordenadas 37.5004598, -7.2727658. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
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
		'Cafetería, pollo, hamburguesas, helados y pizzas en el Paseo Constitución, 9 de Villanueva de los Castillejos (Huelva), abierta de jueves a domingo.',
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
	servesCuisine: ['Cafetería', 'Pollo', 'Hamburguesas', 'Helados', 'Pizzas'],
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
