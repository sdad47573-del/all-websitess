/**
 * Datos de Bar Cafeteria Sebastian (Calle Mesones, 2 · 21540 Villanueva de los Castillejos, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, categoría, valoración con número
 * de reseñas, coordenadas, horario semanal y servicios de accesibilidad.
 *
 * La ficha **no publica teléfono** (muestra «Añadir teléfono»), ni plus code, ni descripción del
 * titular, ni precios ni carta, así que no se reproduce ninguno. Por eso esta web no tiene ningún
 * botón de llamada: los contactos son las indicaciones y la ficha de Maps. La respuesta de la ficha
 * no destaca ninguna reseña con texto, por lo que esta web no cita ninguna y enlaza al listado
 * completo. Tampoco muestra ningún distintivo junto al nombre.
 *
 * El nombre se reproduce tal como lo publica la ficha, sin tilde en «Cafeteria».
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bar-cafeteria-sebastian.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, sin tilde en «Cafeteria». */
	name: 'Bar Cafeteria Sebastian',
	shortName: 'Sebastián',
	/** Categoría que publica Google en esta ficha: «Restaurante», la única. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Mesones, 2»: aquí se desarrolla
	 * la abreviatura a «Calle», como en el resto del repositorio. El código postal 21540 y el
	 * municipio (Villanueva de los Castillejos) se publican tal cual.
	 */
	streetAddress: 'Calle Mesones, 2',
	postalCode: '21540',
	city: 'Villanueva de los Castillejos',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/* Sin `phone`: la ficha no publica ningún teléfono (muestra «Añadir teléfono»). */
	latitude: 37.50067,
	longitude: -7.27228,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 121 reseñas). */
	rating: 4.6,
	reviewCount: 121,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Cafeteria+Sebastian/@37.50067,-7.27228,17z/data=!3m1!4b1!4m6!3m5!1s0xd10453b632479cd:0x93bc8617ab5c3847!8m2!3d37.50067!4d-7.27228!16s%2Fg%2F11fkt7061l?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJzXkkYztFEA0RRzhcqxeGvJM&hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local abre
 * de miércoles a domingo de 6:00 a 2:00, el lunes de 6:00 a 15:00 y cierra los martes.
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
		service: '6:00 – 15:00',
		shifts: [{ open: '06:00', close: '15:00' }],
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
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '6:00 – 2:00',
		shifts: [{ open: '06:00', close: '02:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Miércoles a domingo de 6:00 a 2:00 · lunes de 6:00 a 15:00 · martes cerrado';

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
 * las 121 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 121 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica teléfono, descripción del titular, ni precios, ni carta, así que ninguna
 * respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Bar Cafeteria Sebastian?',
		answer:
			'En la Calle Mesones, 2, con código postal 21540, en Villanueva de los Castillejos (Huelva, Andalucía). La ficha publica las coordenadas 37.50067, -7.27228.',
	},
	{
		question: '¿Cuál es el horario de Bar Cafeteria Sebastian?',
		answer:
			'La ficha publica este horario: de miércoles a domingo de 6:00 a 2:00, el lunes de 6:00 a 15:00 y el martes cerrado. Google no aclara si las 2:00 son de la madrugada siguiente, así que conviene confirmarlo en el propio local. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica solo como «Restaurante», sin un tipo de cocina concreto. Tiene 4,6 sobre 5 con 121 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar? ¿Tienen teléfono?',
		answer:
			'La ficha no publica ningún teléfono (muestra «Añadir teléfono») ni un sistema de reservas, y esta web no permite reservar. La única vía de contacto que queda es acercarse al local o consultar su ficha de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Mesones, 2 y las coordenadas 37.50067, -7.27228. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
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
		'Bar cafetería en la Calle Mesones, 2 de Villanueva de los Castillejos (Huelva), abierto de miércoles a domingo de 6:00 a 2:00.',
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
