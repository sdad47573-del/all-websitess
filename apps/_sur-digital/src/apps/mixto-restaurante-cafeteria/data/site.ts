/**
 * Datos de MiXTO Restaurante - Cafetería (Calle Raimundo Lulio, 15 · 02005 Albacete).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, horario semanal, servicios de accesibilidad, descripción del
 * titular y reseñas destacadas con texto.
 *
 * La ficha no publica plus code, precios ni carta, así que no se reproduce ninguno. Tampoco muestra
 * ningún distintivo junto al nombre.
 *
 * La dirección se publica como «C. Raimundo Lulio, 15»: aquí se escribe «Calle Raimundo Lulio, 15»,
 * como el resto de normalizaciones del repositorio. El código postal 02005 y el municipio
 * (Albacete) se publican tal cual.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/mixto-restaurante-cafeteria',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'MiXTO Restaurante - Cafetería',
	shortName: 'MiXTO',
	/** La ficha publica una sola categoría: «Restaurante». */
	category: 'Restaurante',
	categories: ['Restaurante'],
	streetAddress: 'Calle Raimundo Lulio, 15',
	postalCode: '02005',
	city: 'Albacete',
	province: 'Albacete',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha (prefijo 967 de Albacete). */
	phone: '+34 967 01 52 93',
	latitude: 38.9976232,
	longitude: -1.8621114,
	/* Sin `plusCode`: la ficha no publica ningún plus code y no se inventa uno. */
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 435 reseñas). */
	rating: 4.6,
	reviewCount: 435,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/MiXTO+Restaurante+-+Cafeter%C3%ADa/@38.9976232,-1.8621114,17z/data=!3m1!4b1!4m6!3m5!1s0xd665fc46bb03515:0x923f02ec323bb8ae!8m2!3d38.9976232!4d-1.8621114!16s%2Fg%2F11kd3_ds1x?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJFTWwa8RfZg0Rrrg7MuwCP5I&hl=es';

export const phoneHref = 'tel:+34967015293';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Descripción publicada por el propio local en su ficha.
 *
 * Se reproduce tal cual: es la voz del titular, no de esta web.
 */
export const descripcionLocal =
	'Cocina con horno de leña. Especialistas en pizzas y gastronomía peruana. También tenemos arroces, tapas y una selección de pastas deliciosas.\n¡Comida para llevar y servicio a domicilio!';

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local
 * cierra los lunes y los martes y abre el resto de la semana en dos turnos, mediodía y noche: el
 * domingo de 13:00 a 16:30 y de 20:00 a 23:30, el miércoles y el jueves de 13:00 a 16:00 y de
 * 20:00 a 23:00, y el viernes y el sábado de 13:00 a 16:30 y de 20:00 a 23:30. En el momento de
 * la consulta la ficha mostraba «Abierto · Cierre: 16:30 · Próxima apertura: 20:00» (domingo).
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
		service: '13:00 – 16:00 · 20:00 – 23:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:00 · 20:00 – 23:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:30 · 20:00 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:30 · 20:00 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:30 · 20:00 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De miércoles a domingo en dos turnos · lunes y martes cerrado';

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
 * Reseñas destacadas con texto que publica la ficha.
 *
 * Son las tres que destaca la respuesta de la ficha: dos de 5 sobre 5 y una de 4 sobre 5. La
 * respuesta no trae los nombres de quienes las firman (solo sus avatares), así que se citan sin
 * autor, con su puntuación y su enlace al listado completo. Se reproducen tal cual, sin corregir
 * su ortografía.
 */
export const resenas = [
	{
		text: 'Servicio rapido, las pizzas llegaron enseguida y estaban buenísima, genial!!',
		stars: 5,
	},
	{
		text: 'Buena comida peruana la atención cálida y cordial, los precios accesibles.',
		stars: 4,
	},
	{
		text: 'Cebiche, pollo asado, arroces,… Sabores distintos pero muy bueno.',
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
		question: '¿Dónde está MiXTO Restaurante - Cafetería?',
		answer:
			'En la Calle Raimundo Lulio, 15, con código postal 02005, en Albacete (Castilla-La Mancha). La ficha publica las coordenadas 38.9976232, -1.8621114.',
	},
	{
		question: '¿Cuál es el horario de MiXTO?',
		answer:
			'La ficha publica este horario: cierra los lunes y los martes y abre de miércoles a domingo en dos turnos (el miércoles y el jueves de 13:00 a 16:00 y de 20:00 a 23:00, y el viernes, el sábado y el domingo de 13:00 a 16:30 y de 20:00 a 23:30). Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y el propio local dice que cocina con horno de leña y es especialista en pizzas y gastronomía peruana, con arroces, tapas y pastas, además de comida para llevar y servicio a domicilio. Tiene 4,6 sobre 5 con 435 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 967 01 52 93.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Raimundo Lulio, 15 y las coordenadas 38.9976232, -1.8621114. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
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
		'Restaurante-cafetería en la Calle Raimundo Lulio, 15 de Albacete: horno de leña, pizzas y gastronomía peruana, de miércoles a domingo.',
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
	servesCuisine: ['Pizzas', 'Peruana', 'Arroces', 'Tapas', 'Pastas'],
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
