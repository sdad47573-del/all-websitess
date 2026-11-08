/**
 * Datos de Restaurante Guria (Udiarraga Kalea, 26 · 48490 Ugao-Miraballes, Bizkaia).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad,
 * descripción del titular y reseñas destacadas con texto.
 *
 * La ficha no publica precios ni carta, así que no se reproduce ninguno.
 *
 * La dirección se publica en euskera como «Udiarraga Kalea, 26» («kalea» es «calle»): aquí se
 * reproduce tal cual, sin traducir la voz del titular, y se documenta la equivalencia. La
 * provincia se publica como «Biscay»: aquí se escribe «Bizkaia».
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-guria',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Guria',
	shortName: 'Guria',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Bar restaurante» y
	 * «Restaurante».
	 */
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Restaurante'],
	streetAddress: 'Udiarraga Kalea, 26',
	postalCode: '48490',
	city: 'Ugao-Miraballes',
	/** La ficha publica «Biscay»: aquí se escribe «Bizkaia». */
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 946 48 00 34',
	latitude: 43.180935,
	longitude: -2.901603,
	/** Plus code que publica la ficha («53JX+99 Ugao-Miraballes» en corto). */
	plusCode: '8CMV53JX+99',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 637 reseñas). */
	rating: 4.5,
	reviewCount: 637,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Guria/@43.180935,-2.901603,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4dabed8c405f:0x36ee7040e7d3a583!8m2!3d43.180935!4d-2.901603!16s%2Fg%2F1yg4m0ybr?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJX0CM7atNTg0Rg6XT50Bw7jY&hl=es';

export const phoneHref = 'tel:+34946480034';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Descripción publicada por el propio local en su ficha.
 *
 * Se reproduce tal cual: es la voz del titular, no de esta web. Avisa del cierre de agosto,
 * así que la web lo destaca en el horario y en las preguntas frecuentes.
 */
export const descripcionLocal = 'Cerrado Agosto por vacaciones';

/**
 * Horario semanal que publica la ficha.
 *
 * El local abre los siete días: de lunes a jueves de 8:00 a 22:30, el domingo de 10:30 a
 * 22:30, y el viernes y el sábado figura como «Abierto 24 horas». El lunes lleva el aviso de
 * «Fiesta Nacional de España: el horario podría ser diferente» (12 de octubre).
 *
 * El tramo de 24 horas se representa como 00:00 – 23:59 en `shifts` para que el dato
 * estructurado siga siendo válido; el texto visible dice «Abierto 24 horas», como la ficha.
 *
 * Un día sin tramos (`shifts: []`) es un día cerrado; aquí no hay ninguno.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 22:30',
		shifts: [{ open: '08:00', close: '22:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 22:30',
		shifts: [{ open: '08:00', close: '22:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 22:30',
		shifts: [{ open: '08:00', close: '22:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 22:30',
		shifts: [{ open: '08:00', close: '22:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Abierto 24 horas',
		shifts: [{ open: '00:00', close: '23:59' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:30 – 22:30',
		shifts: [{ open: '10:30', close: '22:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abierto todos los días · viernes y sábado 24 horas';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Es el único de ese tipo que publica la ficha («Brunch») y se recoge tal cual, sin
 * interpretarlo.
 */
export const distingo = 'Brunch';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: acceso y asientos adaptados para
 * sillas de ruedas. No publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas con texto que publica la ficha.
 *
 * Son las tres que destaca la respuesta de la ficha: dos de 5 sobre 5 y una de 4 sobre 5. La
 * respuesta no trae los nombres de quienes las firman (solo sus avatares), así que se citan
 * sin autor, con su puntuación y su enlace al listado completo. Se reproducen tal cual, sin
 * corregir su ortografía.
 */
export const resenas = [
	{
		text: 'Croquetas de tres sabores, pulpo, zamburiñas y el plato fuerte ,bacalao pil-pil.',
		stars: 5,
	},
	{
		text: 'Buena comida y pinchos,buen trato,ritmo caribeño...',
		stars: 4,
	},
	{
		text: 'El menú del día tiene un precio contenido y las raciones son generosas.',
		stars: 5,
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios ni carta, así que ninguna respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Guria?',
		answer:
			'En Udiarraga Kalea, 26, con código postal 48490, en Ugao-Miraballes (Bizkaia, País Vasco). La ficha publica las coordenadas 43.180935, -2.901603 y el plus code 8CMV53JX+99.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Guria?',
		answer:
			'La ficha publica este horario: abre todos los días, de lunes a jueves de 8:00 a 22:30, el domingo de 10:30 a 22:30, y el viernes y el sábado figura como abierto 24 horas. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como bar restaurante y restaurante, sin un tipo de cocina concreto. Las reseñas que destaca la ficha hablan de croquetas, pulpo, zamburiñas, bacalao al pil-pil, pinchos y menú del día. Tiene 4,5 sobre 5 con 637 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cierra en agosto?',
		answer:
			'Sí: el propio local publica en su ficha «Cerrado Agosto por vacaciones». Si vas a ir en agosto, llama al 946 48 00 34 antes de salir para confirmar las fechas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 946 48 00 34.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Udiarraga Kalea, 26 y las coordenadas 43.180935, -2.901603. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: acceso y asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Bar restaurante en Udiarraga Kalea, 26, en Ugao-Miraballes: pinchos, menú del día y cocina de la casa, abierto todos los días.',
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
	/* Sin `servesCuisine`: las dos categorías de la ficha («Bar restaurante», «Restaurante») no
	   nombran ningún tipo de cocina concreto. */
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
