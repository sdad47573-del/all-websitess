/**
 * Datos de Restaurante Nepalí (Calle Lepanto, 21 · 03503 Benidorm · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * Novedades frente a otras fichas del repositorio:
 *
 * - La ficha publica **dos categorías de cocina** («Restaurante nepalí» y «Restaurante indio»), así
 *   que `servesCuisine` recoge las dos.
 * - **No publica descripción del titular** (el campo llega vacío), así que aquí no hay
 *   `descripcionLocal` y la portada no reproduce ninguna.
 * - **No publica ningún distintivo** junto al nombre, así que tampoco hay `distintivo`.
 * - El **lunes solo abre por la noche** y la ficha avisa de que en esa jornada el horario podría ser
 *   distinto por la Fiesta Nacional de España.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-nepali',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Nepalí',
	shortName: 'Nepalí',
	/** Primera categoría que publica Google: la que hace de categoría principal. */
	category: 'Restaurante nepalí',
	categories: ['Restaurante nepalí', 'Restaurante indio'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Lepanto, 21»: aquí se desarrolla a
	 * «Calle Lepanto, 21», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Lepanto, 21',
	postalCode: '03503',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 965 89 81 27',
	latitude: 38.5382525,
	longitude: -0.1133746,
	/** Plus code que publica la ficha. */
	plusCode: 'GVQP+8M Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 1.216 reseñas). */
	rating: 4.7,
	reviewCount: 1216,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Nepal%C3%AD/@38.5382525,-0.1133746,17z/data=!3m1!4b1!4m6!3m5!1s0xd6204f792f56c7f:0x7f6630595da20bb6!8m2!3d38.5382525!4d-0.1133746!16s%2Fg%2F11g8vwdt_b?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJf2z1kvcEYg0RtguiXVkwZn8&hl=es';

export const phoneHref = 'tel:+34965898127';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 (sábado) cubre la semana completa: **todos los días hay
 * servicio de noche, de 18:00 a 1:00**, y **de martes a domingo también se sirve el mediodía, de
 * 12:30 a 15:30**. El **lunes solo abre por la noche**, y la ficha añade el aviso de que ese lunes
 * (12 de octubre, Fiesta Nacional de España) el horario podría ser diferente.
 *
 * El cierre a la 1:00 es de madrugada y en los datos estructurados se escribe como `closes: '01:00'`.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '18:00 – 1:00',
		shifts: [{ open: '18:00', close: '01:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:30 – 15:30 · 18:00 – 1:00',
		shifts: [
			{ open: '12:30', close: '15:30' },
			{ open: '18:00', close: '01:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:30 – 15:30 · 18:00 – 1:00',
		shifts: [
			{ open: '12:30', close: '15:30' },
			{ open: '18:00', close: '01:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 15:30 · 18:00 – 1:00',
		shifts: [
			{ open: '12:30', close: '15:30' },
			{ open: '18:00', close: '01:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 15:30 · 18:00 – 1:00',
		shifts: [
			{ open: '12:30', close: '15:30' },
			{ open: '18:00', close: '01:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 15:30 · 18:00 – 1:00',
		shifts: [
			{ open: '12:30', close: '15:30' },
			{ open: '18:00', close: '01:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 15:30 · 18:00 – 1:00',
		shifts: [
			{ open: '12:30', close: '15:30' },
			{ open: '18:00', close: '01:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/**
 * Aviso de festivo que acompaña al horario en la respuesta de la ficha.
 *
 * Google lo publica junto al lunes (12 de octubre, Fiesta Nacional de España). Se muestra en la
 * sección de horario y no cambia la tabla.
 */
export const avisoFestivo = 'Fiesta Nacional de España: el horario podría ser diferente';

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Come de 12:30 a 15:30 y de 18:00 a 1:00; los lunes solo por la noche';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una, muy
 * crítica, de 1 sobre 5.
 */
export const reviews = [
	{
		text: 'Comida India deliciosa, muy bien elaborada, sabores variados y muy exóticos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena atención, todos los camareros encantadores y la comida muy rica.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'No pidáis nuggets para los niños, son congelados de bolsa, de los malos...',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni web propia, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Nepalí?',
		answer:
			'En la Calle Lepanto, 21, con código postal 03503, en Benidorm (Alicante). La ficha publica el plus code GVQP+8M Benidorm y las coordenadas 38.5382525, -0.1133746.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Nepalí?',
		answer:
			'La ficha publica servicio de noche de 18:00 a 1:00 todos los días, y también mediodía de 12:30 a 15:30 de martes a domingo. Los lunes solo abre por la noche. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica con dos categorías: restaurante nepalí (la principal) y restaurante indio. Tiene 4,7 sobre 5 con 1.216 reseñas, y en las reseñas que destaca se habla de comida india muy elaborada, de sabores variados y exóticos, y del trato de los camareros.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha solo publica el teléfono 965 89 81 27 y no ofrece reserva online. Esta web no permite reservar: para reservar mesa, usa ese número.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Lepanto, 21 y las coordenadas 38.5382525, -0.1133746. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVQP+8M Benidorm.',
	},
	{
		question: '¿Cierra algún día?',
		answer:
			'La ficha no marca ningún día como cerrado: abre los siete días, aunque los lunes solo por la noche, de 18:00 a 1:00. Además avisa de que el lunes 12 de octubre, Fiesta Nacional de España, el horario podría ser diferente.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 10 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante nepalí e indio en la Calle Lepanto, 21 de Benidorm, con servicio de mediodía y de noche y cierre a la 1:00.',
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
	/*
	 * `servesCuisine` recoge las dos cocinas que declaran las categorías de Google
	 * («Restaurante nepalí» y «Restaurante indio»).
	 */
	servesCuisine: ['Cocina nepalí', 'Cocina india'],
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
