/**
 * Datos de Bar Restaurant Cuenca
 * (Rambla Marquesa de Castellbell, 100a · 08980 Sant Feliu de Llobregat, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, el distintivo «Brunch» y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-restaurant-cuenca',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Restaurant Cuenca',
	shortName: 'Cuenca',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante familiar',
	categories: ['Restaurante familiar', 'Bar restaurante', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Rambla Marquesa de Castellbell, 100a',
	district: 'Sant Feliu de Llobregat',
	postalCode: '08980',
	city: 'Sant Feliu de Llobregat',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 936 66 10 40',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '936 66 10 40',
	latitude: 41.3864477,
	longitude: 2.0480785,
	/** Plus code que publica la ficha (completo: 8FH492PX+H6). */
	plusCode: '92PX+H6 Sant Feliu de Llobregat',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 768 reseñas). */
	rating: 4.6,
	reviewCount: 768,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Restaurant+Cuenca/@41.3864477,2.0480785,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49a35964ba0ad:0x69c3c7837615397e!8m2!3d41.3864477!4d2.0480785!16s%2Fg%2F11bxf4mscq?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJraBLljWapBIRfjkVdoPHw2k&hl=es';

export const phoneHref = 'tel:+34936661040';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El domingo cierra. De lunes a sábado abre de 8:30 a 17:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 17:00',
		shifts: [{ open: '8:30', close: '17:00' }],
		dayOfWeek: 'Saturday',
	},
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Domingo cerrado; de lunes a sábado de 8:30 a 17:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Lunes a sábado · domingo cerrado';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica tres entradas, todas disponibles: acceso, asientos y aparcamiento adaptados para
 * sillas de ruedas. No publica ninguna entrada sobre aseo adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Buena cocina, muy variada y a un precio ajustado, el servicio excelente',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Buenos cocineros buenos camareros buena comida i muy buen servicio lo recomiendo',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Buenisimos bocadillos, tapas y un menu semanal buenisimo y con mucha variedad!',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Bar Restaurant Cuenca?',
		answer:
			'En la Rambla Marquesa de Castellbell, 100a, con código postal 08980, en Sant Feliu de Llobregat, Barcelona. Publica el plus code 92PX+H6 Sant Feliu de Llobregat y las coordenadas 41.3864477, 2.0480785.',
	},
	{
		question: '¿Cuál es el horario de Bar Restaurant Cuenca?',
		answer:
			'La ficha publica que el domingo cierra y que de lunes a sábado abre de 8:30 a 17:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante familiar, bar restaurante y restaurante mediterráneo, y muestra además el distintivo «Brunch». Las reseñas destacan la cocina variada a precio ajustado, los bocadillos y el menú semanal. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 936 66 10 40. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 936 66 10 40 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Rambla Marquesa de Castellbell, 100a, en Sant Feliu de Llobregat, y las coordenadas 41.3864477, 2.0480785. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso, asientos y aparcamiento adaptados para sillas de ruedas. No publica ningún dato sobre aseo adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 768 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante familiar en la Rambla Marquesa de Castellbell, 100a, Sant Feliu de Llobregat (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
