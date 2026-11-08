/**
 * Datos de El Jardí, Bar restaurant
 * (Carrer de Pi i Margall, 14 · 08777 Sant Quintí de Mediona, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://el-jardi-bar-restaurant.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'El Jardí, Bar restaurant',
	shortName: 'El Jardí',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: [
		'Restaurante',
		'Restaurante de desayunos',
		'Cafetería',
		'Restaurante de comida sin gluten',
		'Snack bar',
	],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer de Pi i Margall, 14',
	district: 'Sant Quintí de Mediona',
	postalCode: '08777',
	city: 'Sant Quintí de Mediona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 665 16 91 73',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '665 16 91 73',
	latitude: 41.4630638,
	longitude: 1.6629609,
	/** Plus code que publica la ficha. */
	plusCode: 'FM77+65 Sant Quintí de Mediona',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 109 reseñas). */
	rating: 4.2,
	reviewCount: 109,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+Jard%C3%AD,+Bar+restaurant/@41.4630638,1.6629609,17z/data=!3m1!4b1!4m6!3m5!1s0x12a46f9bbcdd6155:0x795475aaaf953bff!8m2!3d41.4630638!4d1.6629609!16s%2Fg%2F11c3x2sxkq?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJVWHdvJtvpBIR_zuVr6p1VHk&hl=es';

export const phoneHref = 'tel:+34665169173';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes abre de 9:00 a 16:00 y el martes cierra. Miércoles y jueves abre de 9:00 a 21:00;
 * viernes y sábado, de 9:00 a 23:30, y el domingo, de 9:00 a 18:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Monday',
	},
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '9:00 – 21:00',
		shifts: [{ open: '9:00', close: '21:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 21:00',
		shifts: [{ open: '9:00', close: '21:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 23:30',
		shifts: [{ open: '9:00', close: '23:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 23:30',
		shifts: [{ open: '9:00', close: '23:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 18:00',
		shifts: [{ open: '9:00', close: '18:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'lunes de 9:00 a 16:00; martes cerrado; miércoles y jueves de 9:00 a 21:00; viernes y sábado de 9:00 a 23:30; domingo de 9:00 a 18:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Martes cerrado · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica tres entradas, todas disponibles: acceso, aparcamiento y aseo adaptados para sillas
 * de ruedas. No publica ningún dato sobre asientos adaptados.
 */
export const accesibilidad = [
	{ label: 'Acceso adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Bocadillos ricos, café bueno, bollería también deliciosa.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Enhorabuena Buen ambiente y platos exquisitos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Nos dice el camarero que la gallineta es una parte del pollo.',
		rating: 1,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está El Jardí, Bar restaurant?',
		answer:
			'En el Carrer de Pi i Margall, 14, con código postal 08777, en Sant Quintí de Mediona, Barcelona. Publica el plus code FM77+65 Sant Quintí de Mediona y las coordenadas 41.4630638, 1.6629609.',
	},
	{
		question: '¿Cuál es el horario de El Jardí?',
		answer:
			'La ficha publica que el lunes abre de 9:00 a 16:00 y el martes cierra; miércoles y jueves abre de 9:00 a 21:00; viernes y sábado, de 9:00 a 23:30, y el domingo, de 9:00 a 18:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante, restaurante de desayunos, cafetería, restaurante de comida sin gluten y snack bar. Las reseñas destacan los bocadillos, el café y la bollería. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 665 16 91 73. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 665 16 91 73 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Pi i Margall, 14, en Sant Quintí de Mediona, y las coordenadas 41.4630638, 1.6629609. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso, aparcamiento y aseo adaptados para sillas de ruedas. No publica ningún dato sobre asientos adaptados.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 109 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con puntuaciones originales de 5, 5 y 1 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no permite pedir ni pagar online.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante en el Carrer de Pi i Margall, 14, Sant Quintí de Mediona (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
	acceptsReservations: false,
	/* Sin `priceRange`, `servesCuisine` ni `menu`: la ficha no publica precios, cocina ni carta. */
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
