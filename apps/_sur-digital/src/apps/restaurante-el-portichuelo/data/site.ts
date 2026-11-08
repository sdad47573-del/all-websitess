/**
 * Datos de Restaurante El Portichuelo (Carretera San Bartolomé, S/N · 21520 Alosno, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal y servicios de accesibilidad.
 *
 * La ficha no publica descripción del titular, así que no hay `descripcionLocal` y la portada no
 * muestra el bloque de descripción. Tampoco publica precios ni carta, así que no se reproduce
 * ninguno. La respuesta de la ficha no destaca ninguna reseña con texto, por lo que esta web no
 * cita ninguna y enlaza al listado completo. Tampoco muestra ningún distintivo junto al nombre.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-el-portichuelo',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Portichuelo',
	shortName: 'El Portichuelo',
	/** Categoría que publica Google en esta ficha: «Restaurante especializado en tapas», la única. */
	category: 'Restaurante especializado en tapas',
	categories: ['Restaurante especializado en tapas'],
	/** Dirección publicada en la ficha, tal cual: carretera, número, código postal y municipio. */
	streetAddress: 'Carretera San Bartolomé, S/N',
	postalCode: '21520',
	city: 'Alosno',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 959 39 62 85',
	latitude: 37.5485647,
	longitude: -7.1209035,
	/** Plus code que publica la ficha (`8C9JGVXH+CJ`, compuesto como «GVXH+CJ Alosno»). */
	plusCode: 'GVXH+CJ Alosno',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 1.433 reseñas). */
	rating: 4.6,
	reviewCount: 1433,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Portichuelo/@37.5485647,-7.1209035,17z/data=!3m1!4b1!4m6!3m5!1s0xd104d296d59c707:0x60830141f1617ba5!8m2!3d37.5485647!4d-7.1209035!16s%2Fg%2F1thsbm2b?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJB8dZbSlNEA0RpXth8UEBg2A&hl=es';

export const phoneHref = 'tel:+34959396285';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local abre
 * de martes a domingo con el mismo horario: de 7:00 a 17:00. El lunes figura como «Cerrado», con
 * el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
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
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De martes a domingo de 7:00 a 17:00 · lunes cerrado';

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
 * Lo que se puede decir en el hueco de las reseñas.
 *
 * La respuesta de la ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna:
 * las 1.433 se pueden leer enteras en Google Maps.
 */
export const sinResenas =
	'La ficha no destaca ninguna reseña con texto, así que esta web no cita ninguna: las 1.433 se pueden leer enteras en Google Maps.';

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, ni precios, ni carta, así que ninguna respuesta los
 * reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante El Portichuelo?',
		answer:
			'En la Carretera San Bartolomé, S/N, con código postal 21520, en Alosno (Huelva, Andalucía). La ficha publica el plus code GVXH+CJ Alosno y las coordenadas 37.5485647, -7.1209035.',
	},
	{
		question: '¿Cuál es el horario de Restaurante El Portichuelo?',
		answer:
			'La ficha publica este horario: de martes a domingo de 7:00 a 17:00 y lunes cerrado. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como «Restaurante especializado en tapas». Tiene 4,6 sobre 5 con 1.433 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 959 39 62 85.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carretera San Bartolomé, S/N y las coordenadas 37.5485647, -7.1209035. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVXH+CJ Alosno.',
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
		'Restaurante especializado en tapas en la Carretera San Bartolomé, S/N de Alosno (Huelva), abierto de martes a domingo de 7:00 a 17:00.',
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
	servesCuisine: ['Tapas'],
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
