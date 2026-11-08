/**
 * Datos de Restaurante El chispito (Pl. de la Almadraba, 4 · 21410 Isla Cristina, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * valoración con número de reseñas, coordenadas, plus code, horario semanal, los servicios de
 * accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia, distintivo **ni descripción del titular**, así
 * que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-el-chispito',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps (con la «c» minúscula). */
	name: 'Restaurante El chispito',
	shortName: 'El chispito',
	/** Única categoría que publica Google: el tipo genérico de establecimiento. */
	category: 'Restaurante',
	/** Las categorías de la ficha, en su orden: aquí solo hay una. */
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Pl. de la Almadraba, 4',
	postalCode: '21410',
	city: 'Isla Cristina',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha, con el prefijo 859 que trae. */
	phone: '+34 859 80 04 21',
	latitude: 37.1939362,
	longitude: -7.3286936,
	/** Plus code que publica la ficha. */
	plusCode: '5MVC+HG Isla Cristina',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 25 reseñas). */
	rating: 4.7,
	reviewCount: 25,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+chispito/@37.1939362,-7.3286936,17z/data=!3m1!4b1!4m6!3m5!1s0xd10245e73d769c7:0xe1e22eb852821228!8m2!3d37.1939362!4d-7.3286936!16s%2Fg%2F11dxpgq62l?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJx2nXc14kEA0RKBKCUrgu4uE&hl=es';

export const phoneHref = 'tel:+34859800421';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * sirve **solo por la noche, de 20:45 a 24:00, los siete días de la semana**: no publica ningún
 * tramo de mediodía ni ningún día de cierre.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, **el horario podría ser
 * diferente**. Ese es el aviso de tipo 2 (el local mantiene su horario y Google solo advierte de
 * que puede cambiar), no el de tipo 1, en el que la ficha publica el horario propio del festivo
 * en lugar del habitual; como en `bar-de-esteban`, el horario se recoge tal cual y el aviso se
 * explica en la sección de horario.
 *
 * El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como cierre a
 * las 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '20:45 – 24:00',
		shifts: [{ open: '20:45', close: '00:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '20:45 – 24:00',
		shifts: [{ open: '20:45', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '20:45 – 24:00',
		shifts: [{ open: '20:45', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '20:45 – 24:00',
		shifts: [{ open: '20:45', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '20:45 – 24:00',
		shifts: [{ open: '20:45', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '20:45 – 24:00',
		shifts: [{ open: '20:45', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '20:45 – 24:00',
		shifts: [{ open: '20:45', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Cenas todos los días de 20:45 a 24:00';

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
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son tres y se citan tal cual, sin corregir su redacción ni su puntuación (incluido el «balcón»
 * de la tercera, que es lo que publica la ficha, y los puntos suspensivos con los que termina la
 * segunda). Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya
 * presenta cada reseña entre « » y no forman parte del texto que escribió la persona. Las
 * puntuaciones son 4, 5 y 5.
 */
export const reviews = [
	{
		text: 'Buen servicio, buenos precios y buena calidad y variedad de hamburguesas',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Todo rico de bocadillos, montaditos…',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las patatas con cheddar y balcón estaban muy ricas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni descripción del titular, así que ninguna respuesta los
 * menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante El chispito?',
		answer:
			'En la Pl. de la Almadraba, 4, con código postal 21410, en Isla Cristina (Huelva). La ficha publica el plus code 5MVC+HG Isla Cristina y las coordenadas 37.1939362, -7.3286936.',
	},
	{
		question: '¿Cuál es el horario de Restaurante El chispito?',
		answer:
			'La ficha publica servicio de cena los siete días de la semana, de 20:45 a 24:00, sin ningún tramo de mediodía y sin ningún día de cierre. El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente. Es el horario publicado en la ficha consultada el 10 de octubre de 2026 y conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Google clasifica el local con la categoría genérica «Restaurante» y no publica carta ni precios, así que la web no los reproduce. En las tres reseñas que destaca la ficha se citan hamburguesas, bocadillos, montaditos y patatas con cheddar.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 859 80 04 21, que es el único que da la ficha.',
	},
	{
		question: '¿Es accesible para sillas de ruedas?',
		answer:
			'La ficha publica dos servicios de accesibilidad y los dos figuran como disponibles: el acceso para sillas de ruedas y los asientos adaptados. No publica ningún otro dato de accesibilidad y esta web no añade ninguno.',
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
		'Restaurante en la Pl. de la Almadraba, 4 de Isla Cristina, con servicio de cena todos los días de 20:45 a 24:00.',
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
	 * Sin `servesCuisine`: la única categoría que publica Google es «Restaurante», el tipo genérico
	 * de establecimiento, que no declara ninguna cocina concreta y no se inventa.
	 */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
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
