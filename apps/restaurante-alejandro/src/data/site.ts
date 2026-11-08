/**
 * Datos de Restaurante Alejandro (Plaza Los Mártires, 55, bajo · 39708 Mioño, Cantabria).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad,
 * descripción del titular y reseñas destacadas con texto.
 *
 * La ficha no publica precios ni carta, así que no se reproduce ninguno. Tampoco muestra ningún
 * distintivo junto al nombre.
 *
 * La ficha publica como localidad «Mioño» (localidad del municipio de Castro-Urdiales): aquí se
 * reproduce tal cual, sin sustituirla por el municipio.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-alejandro.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Alejandro',
	shortName: 'Alejandro',
	/**
	 * La ficha publica una sola categoría: «Restaurante cántabro».
	 */
	category: 'Restaurante cántabro',
	categories: ['Restaurante cántabro'],
	streetAddress: 'Plaza Los Mártires, 55, bajo',
	postalCode: '39708',
	city: 'Mioño',
	province: 'Cantabria',
	region: 'Cantabria',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 633 33 10 44',
	latitude: 43.358773,
	longitude: -3.2020925,
	/** Plus code que publica la ficha («9Q5X+G5 Mioño» en corto). */
	plusCode: '8CMR9Q5X+G5',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 303 reseñas). */
	rating: 4.6,
	reviewCount: 303,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Alejandro/@43.358773,-3.2020925,17z/data=!3m1!4b1!4m6!3m5!1s0xd4ef17a6a876ed5:0xe83d5ed7e7059c38!8m2!3d43.358773!4d-3.2020925!16s%2Fg%2F11tbvw443s?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ1W6HanrxTg0ROJwF59dePeg&hl=es';

export const phoneHref = 'tel:+34633331044';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Descripción publicada por el propio local en su ficha.
 *
 * Se reproduce tal cual: es la voz del titular, no de esta web.
 */
export const descripcionLocal =
	'Menú casero para degustar en nuestro bonito comedor o para llevar a casa!!!';

/**
 * Horario semanal que publica la ficha.
 *
 * El local abre los siete días: de lunes a viernes de 9:30 a 23:00, y sábados y domingos de
 * 10:00 a 23:00. El lunes lleva el aviso de «Fiesta Nacional de España: el horario podría ser
 * diferente» (12 de octubre).
 *
 * Un día sin tramos (`shifts: []`) es un día cerrado; aquí no hay ninguno.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 23:00',
		shifts: [{ open: '09:30', close: '23:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 23:00',
		shifts: [{ open: '09:30', close: '23:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 23:00',
		shifts: [{ open: '09:30', close: '23:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 23:00',
		shifts: [{ open: '09:30', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 23:00',
		shifts: [{ open: '09:30', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abierto todos los días · hasta las 23:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como **no disponibles**: ni aparcamiento adaptado para
 * sillas de ruedas ni bucle magnético asistencial. La web lo muestra tal cual, sin suavizarlo.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Reseñas destacadas con texto que publica la ficha.
 *
 * Son las tres que destaca la respuesta de la ficha, las tres de 5 sobre 5. La respuesta no trae
 * los nombres de quienes las firman (solo sus avatares), así que se citan sin autor, con su
 * puntuación y su enlace al listado completo. Se reproducen tal cual, sin corregir su ortografía.
 */
export const resenas = [
	{
		text: 'Camareros geniales comida de 10 dueños encantadores gracias.',
		stars: 5,
	},
	{
		text: 'El camarero muy amable , la comida casera, bien preparada y sin apenas esperas.',
		stars: 5,
	},
	{
		text: 'Excelente calidad precio, menú del día muy rico y muy buena atención.',
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
		question: '¿Dónde está Restaurante Alejandro?',
		answer:
			'En Plaza Los Mártires, 55, bajo, con código postal 39708, en Mioño (Cantabria). La ficha publica las coordenadas 43.358773, -3.2020925 y el plus code 8CMR9Q5X+G5.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Alejandro?',
		answer:
			'La ficha publica este horario: abre todos los días, de lunes a viernes de 9:30 a 23:00 y sábados y domingos de 10:00 a 23:00. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante cántabro, y el propio local habla de menú casero para degustar en su comedor o para llevar a casa. Tiene 4,6 sobre 5 con 303 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 633 33 10 44.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Plaza Los Mártires, 55, bajo y las coordenadas 43.358773, -3.2020925. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como no disponibles: ni aparcamiento adaptado para sillas de ruedas ni bucle magnético asistencial. Si necesitas accesibilidad, llama al 633 33 10 44 antes de ir.',
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
		'Restaurante cántabro en Plaza Los Mártires, 55, en Mioño: menú casero en el comedor o para llevar, abierto todos los días.',
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
	/* `servesCuisine` sale de la única categoría de la ficha («Restaurante cántabro»). */
	servesCuisine: ['Cántabra'],
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
