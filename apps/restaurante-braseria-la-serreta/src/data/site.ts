/**
 * Datos de Restaurante braseria la Serreta del penedes
 * (Cami la serreta, s/n · 08734 Sant Miquel d'Olèrdola, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y tres reseñas destacadas. Los topónimos se copian
 * literalmente, tal como los publica la ficha.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-braseria-la-serreta.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante braseria la Serreta del penedes',
	shortName: 'La Serreta',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: [
		'Restaurante',
		'Restaurante especializado en chuletas',
		'Restaurante de comida rural',
		'Restaurante mediterráneo',
	],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Cami la serreta, s/n',
	district: "Sant Miquel d'Olèrdola",
	postalCode: '08734',
	city: "Sant Miquel d'Olèrdola",
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 696 36 36 50',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '696 36 36 50',
	latitude: 41.3241932,
	longitude: 1.7192906,
	/** Plus code que publica la ficha. */
	plusCode: "8PF9+MP St. Miquel d'Olèrdola",
	/** Valoración de la ficha en la fecha de consulta (4 sobre 5 con 747 reseñas). */
	rating: 4,
	reviewCount: 747,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+braseria+la+Serreta+del+penedes/@41.3241932,1.7192906,17z/data=!3m1!4b1!4m6!3m5!1s0x12a479a1cf8cf167:0x8f6764afdc23f43!8m2!3d41.3241932!4d1.7192906!16s%2Fg%2F1hc6ppl9q?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJZ_GMz6F5pBIRQz_C_Up29gg&hl=es';

export const phoneHref = 'tel:+34696363650';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a miércoles cierra. El jueves abre de 11:00 a 17:00; el viernes, de 11:00 a 20:00;
 * el sábado, de 9:00 a 18:00, y el domingo, de 11:00 a 17:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: 'Cerrado', shifts: [], dayOfWeek: 'Wednesday' },
	{
		day: 'Jueves',
		service: '11:00 – 17:00',
		shifts: [{ open: '11:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 20:00',
		shifts: [{ open: '11:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 18:00',
		shifts: [{ open: '9:00', close: '18:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 17:00',
		shifts: [{ open: '11:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a miércoles cerrado; jueves de 11:00 a 17:00; viernes de 11:00 a 20:00; sábado de 9:00 a 18:00; domingo de 11:00 a 17:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Jue–dom · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados
 * para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Muy bien, menus de calçots, caracoles y xató con carne a la brasa (28€/persona).',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Lugar perfecto , buen trato y buena comida .',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Menús muy completos, comida casera muy bien elaborada y presentada.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurante braseria la Serreta del penedes?',
		answer:
			"En el Cami la serreta, s/n, con código postal 08734, en Sant Miquel d'Olèrdola, Barcelona. Publica el plus code 8PF9+MP St. Miquel d'Olèrdola y las coordenadas 41.3241932, 1.7192906.",
	},
	{
		question: '¿Cuál es el horario de la Serreta?',
		answer:
			'La ficha publica que de lunes a miércoles cierra; el jueves abre de 11:00 a 17:00; el viernes, de 11:00 a 20:00; el sábado, de 9:00 a 18:00, y el domingo, de 11:00 a 17:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante, especializado en chuletas, de comida rural y mediterráneo. Las reseñas destacan los menús de calçots, los caracoles, el xató y la carne a la brasa. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 696 36 36 50. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 696 36 36 50 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			"La ficha publica la dirección Cami la serreta, s/n, en Sant Miquel d'Olèrdola, y las coordenadas 41.3241932, 1.7192906. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.",
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4 sobre 5 con 747 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con puntuaciones originales de 4, 4 y 5 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		"Restaurante braseria en el Cami la serreta, s/n, Sant Miquel d'Olèrdola (Barcelona). Datos y fotografías de su ficha de Google Maps.",
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
	/* Sin `priceRange`, `servesCuisine` ni `menu`: la ficha no publica precios, cocina detallada ni carta. */
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
