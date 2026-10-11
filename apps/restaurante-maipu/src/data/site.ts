/**
 * Datos de Restaurante Maipu (Pike Bidea, 8 · 48150 Sondika, Bizkaia).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas con texto.
 *
 * La ficha no publica descripción del titular, precios ni carta, así que no se reproduce ninguno.
 * Tampoco muestra ningún distintivo junto al nombre.
 *
 * La dirección se publica como «Pike Bidea, 8, 48150 Poblado Julio Arteche»: Poblado Julio Arteche
 * es la zona y el código postal 48150 corresponde a Sondika, así que la localidad es Sondika y se
 * documenta la equivalencia. La provincia se publica como «Biscay»/«Bizkaia»: aquí se escribe
 * «Bizkaia».
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-maipu.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Maipu',
	shortName: 'Maipu',
	/** Categoría que publica Google en esta ficha: «Restaurante vasco», la única. */
	category: 'Restaurante vasco',
	categories: ['Restaurante vasco'],
	streetAddress: 'Pike Bidea, 8',
	postalCode: '48150',
	/**
	 * La ficha publica «48150 Poblado Julio Arteche»: es la zona y el 48150 es el código postal
	 * de Sondika, así que la localidad es Sondika.
	 */
	city: 'Sondika',
	/** Zona que publica la ficha junto al código postal. */
	neighborhood: 'Poblado Julio Arteche',
	/** La ficha publica «Biscay»/«Bizkaia»: aquí se escribe «Bizkaia». */
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha (prefijo 944 de Bizkaia). */
	phone: '+34 944 71 17 63',
	latitude: 43.2881899,
	longitude: -2.9252477,
	/** Plus code que publica la ficha («73QF+7W Poblado Julio Arteche» en corto). */
	plusCode: '8CMV73QF+7W',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 347 reseñas). */
	rating: 4.8,
	reviewCount: 347,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Maipu/@43.2881899,-2.9252477,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4ffbffffffff:0x1e56b9937b6214d4!8m2!3d43.2881899!4d-2.9252477!16s%2Fg%2F1hc1l2zb0?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ______tPTg0R1BRie5O5Vh4&hl=es';

export const phoneHref = 'tel:+34944711763';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/* Sin `descripcionLocal`: la ficha no publica descripción del titular, así que la portada no
   muestra el bloque de descripción. */

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local
 * cierra los domingos y los lunes y abre de martes a sábado **solo al mediodía**, de 14:00 a
 * 15:30, sin turno de noche. En el momento de la consulta la ficha mostraba «Cerrado · Apertura:
 * 14:00 (mar)» (domingo).
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
		service: '14:00 – 15:30',
		shifts: [{ open: '14:00', close: '15:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '14:00 – 15:30',
		shifts: [{ open: '14:00', close: '15:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '14:00 – 15:30',
		shifts: [{ open: '14:00', close: '15:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '14:00 – 15:30',
		shifts: [{ open: '14:00', close: '15:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '14:00 – 15:30',
		shifts: [{ open: '14:00', close: '15:30' }],
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
export const hoursSummary = 'De martes a sábado al mediodía · domingo y lunes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo
 * y los asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas con texto que publica la ficha.
 *
 * Son las tres que destaca la respuesta de la ficha, las tres de 5 sobre 5. La respuesta no trae
 * los nombres de quienes las firman (solo sus avatares), así que se citan sin autor, con su
 * puntuación y su enlace al listado completo.
 */
export const resenas = [
	{
		text: 'Grandes arroces, menestra, cabrito, pescados al horno y postres caseros...',
		stars: 5,
	},
	{
		text: 'Buena comida, buen trato buenos vinos....que más se puede pedir!!!',
		stars: 5,
	},
	{
		text: 'La menestra de verduras está exquisita y el arroz con carne buenísimo.',
		stars: 5,
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, precios ni carta, así que ninguna respuesta los
 * reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Maipu?',
		answer:
			'En Pike Bidea, 8, con código postal 48150, en la zona de Poblado Julio Arteche, en Sondika (Bizkaia, País Vasco). La ficha publica las coordenadas 43.2881899, -2.9252477 y el plus code 8CMV73QF+7W.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Maipu?',
		answer:
			'La ficha publica este horario: cierra los domingos y los lunes y abre de martes a sábado solo al mediodía, de 14:00 a 15:30, sin turno de noche. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante vasco y las reseñas destacadas hablan de arroces, menestra, cabrito, pescados al horno, postres caseros y buenos vinos. Tiene 4,8 sobre 5 con 347 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 944 71 17 63.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Pike Bidea, 8 y las coordenadas 43.2881899, -2.9252477. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Restaurante vasco en Pike Bidea, 8, en Sondika (Bizkaia): solo mediodías, de martes a sábado.',
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
	/* `servesCuisine` sale de la categoría de la ficha («Restaurante vasco»), no se inventa. */
	servesCuisine: ['Vasca'],
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
