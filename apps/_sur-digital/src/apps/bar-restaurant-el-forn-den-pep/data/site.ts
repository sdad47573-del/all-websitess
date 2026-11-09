/**
 * Datos de BarRestaurant El Forn d'en Pep
 * (Carrer del Molí, 52 · 08775 Torrelavit, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, descripción del titular, valoración con número de
 * reseñas, coordenadas, plus code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica web propia, carta, precios, acción de reserva ni datos de envío, así que
 * aquí no se reproducen. La descripción del titular y los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes firman las reseñas (solo el enlace a su perfil), de modo que se atribuyen a la
 * ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-restaurant-el-forn-den-pep',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: "BarRestaurant El Forn d'en Pep",
	shortName: "El Forn d'en Pep",
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer del Molí, 52',
	district: 'Torrelavit',
	postalCode: '08775',
	city: 'Torrelavit',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 680 79 68 88',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '680 79 68 88',
	latitude: 41.4479416,
	longitude: 1.7310793,
	/** Plus code que publica la ficha (completo: 8FH3CPXJ+5C). */
	plusCode: 'CPXJ+5C Torrelavit',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 78 reseñas). */
	rating: 4.3,
	reviewCount: 78,
	site: null,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	"El Forn d'en Pep, és un bar-restaurant acollidor on grans i petits podran degustar menús casolans i tradicionals; de tant en tant, s'hi fan actuacions i també s'hi celebren festivitats.";

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	"https://www.google.com/maps/place/BarRestaurant+El+Forn+d'en+Pep/@41.4479416,1.7310793,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4655c6964457d:0x537548b456483e60!8m2!3d41.4479416!4d1.7310793!16s%2Fg%2F11s6b73dfy?hl=es";

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJfUVkaVxlpBIRYD5IVrRIdVM&hl=es';

export const phoneHref = 'tel:+34680796888';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días: de lunes a viernes de 7:00 a 22:00, y sábado y domingo de 8:00 a 23:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:00 – 22:00',
		shifts: [{ open: '7:00', close: '22:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:00 – 22:00',
		shifts: [{ open: '7:00', close: '22:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 22:00',
		shifts: [{ open: '7:00', close: '22:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 22:00',
		shifts: [{ open: '7:00', close: '22:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 22:00',
		shifts: [{ open: '7:00', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 23:00',
		shifts: [{ open: '8:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 23:00',
		shifts: [{ open: '8:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a viernes de 7:00 a 22:00; sábado y domingo de 8:00 a 23:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Todos los días · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados
 * para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
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
		text: 'Buen sitio de menu y desayunos, carne a la brasa.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'La comida casera, muy rica y el trato muy cercano.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Un lugar muy tranquilo para saborear una muy buena comida',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: "¿Dónde está BarRestaurant El Forn d'en Pep?",
		answer:
			'En el Carrer del Molí, 52, con código postal 08775, en Torrelavit, Barcelona. Publica el plus code CPXJ+5C Torrelavit y las coordenadas 41.4479416, 1.7310793.',
	},
	{
		question: "¿Cuál es el horario de BarRestaurant El Forn d'en Pep?",
		answer:
			'La ficha publica que abre todos los días: de lunes a viernes de 7:00 a 22:00, y sábado y domingo de 8:00 a 23:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local únicamente como restaurante. Su propia descripción habla de menús caseros y tradicionales. Las reseñas destacan los desayunos, la carne a la brasa y la comida casera. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 680 79 68 88. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 680 79 68 88 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer del Molí, 52, en Torrelavit, y las coordenadas 41.4479416, 1.7310793. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,3 sobre 5 con 78 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con sus puntuaciones originales de 4, 5 y 5 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		"Bar restaurante en el Carrer del Molí, 52, Torrelavit (Barcelona). Datos y fotografías de su ficha de Google Maps.",
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
