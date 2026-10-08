/**
 * Datos de Restaurante Casa Manolo (Calle José de Ribera, 11 · 13005 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, categoría, valoración con número
 * de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las reseñas
 * destacadas.
 *
 * La ficha NO publica teléfono (Google muestra la sugerencia «Añadir teléfono»), ni web, ni
 * descripción del titular, ni ningún distintivo junto al nombre, ni carta ni precios. Por eso esta
 * web no muestra ningún teléfono y no reproduce ninguno de esos datos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-casa-manolo.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Casa Manolo',
	shortName: 'Casa Manolo',
	/** Categoría que publica Google en esta ficha: «Restaurante», la única. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. José de Ribera, 11»: aquí se
	 * desarrolla a «Calle José de Ribera, 11», como en el resto del repositorio.
	 */
	streetAddress: 'Calle José de Ribera, 11',
	postalCode: '13005',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	latitude: 38.9828453,
	longitude: -3.9389657,
	/** Plus code que publica la ficha. */
	plusCode: 'X3M6+4C Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 261 reseñas). */
	rating: 4.5,
	reviewCount: 261,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Casa+Manolo/@38.9828453,-3.9389657,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc30d23a8c8c5:0xf23112eb031131c5!8m2!3d38.9828453!4d-3.9389657!16s%2Fg%2F11cnsf2ykc?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJxcioIw3Daw0RxTERA-sSMfI&hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * de forma continua: de 7:30 a 24:00 de lunes a viernes, el sábado desde las 8:00 y el domingo
 * cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '00:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:30 – 24:00',
		shifts: [{ open: '07:30', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '00:00' }],
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
	'De 7:30 a 24:00 (el sábado desde las 8:00); el domingo cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha trae una sola entrada, y figura como disponible: los asientos adaptados para sillas de
 * ruedas. No publica ninguna otra (esta ficha no incluye el acceso ni el aseo adaptados, que sí
 * aparecen en otras del repositorio).
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la tercera escribe «frias» sin
 * tilde). Dos son de 5 sobre 5 y una de 4 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos sus famosas tapas de oreja y callos y quedamos encantados!!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Cerveza fresquita, tapas correctas',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Para cenar unas cervezas frias y unas raciones.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica teléfono, ni carta, ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Casa Manolo?',
		answer:
			'En la Calle José de Ribera, 11, con código postal 13005, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3M6+4C Ciudad Real y las coordenadas 38.9828453, -3.9389657.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Casa Manolo?',
		answer:
			'La ficha publica un horario continuo de 7:30 a 24:00 de lunes a viernes, desde las 8:00 el sábado, y los domingos cierra. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmarlo antes de ir.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. Google no muestra tampoco ningún distintivo de reserva junto al nombre.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Restaurante», sin un tipo de cocina concreto. Tiene 4,5 sobre 5 con 261 reseñas, y en las reseñas que destaca se habla de tapas de oreja y callos, de cerveza y tapas, y de cervezas y raciones para cenar.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle José de Ribera, 11 y las coordenadas 38.9828453, -3.9389657. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3M6+4C Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una única entrada de accesibilidad y figura como disponible: los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Cuál es el teléfono de Restaurante Casa Manolo?',
		answer:
			'La ficha de Google Maps no publica ningún teléfono: Google muestra la sugerencia «Añadir teléfono», que confirma que el negocio no lo ha facilitado. Por eso en esta web no aparece ninguno. Para contactar, la vía publicada es la propia ficha y sus reseñas en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Calle José de Ribera, 11 de Ciudad Real, con servicio continuo de 7:30 a 24:00 y cerrado los domingos.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	/* Sin `telephone`: la ficha de Google Maps no publica ningún teléfono y no se inventa uno. */
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y la ficha no declara cocina. */
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
 * amarillo de /aviso-legal sigue visible. La ficha no publica teléfono, así que el aviso legal
 * tampoco lo incluye.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
