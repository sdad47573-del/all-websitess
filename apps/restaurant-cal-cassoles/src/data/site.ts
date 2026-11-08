/**
 * Datos de Restaurant Cal Cassoles
 * (Maset dels Conills, s/n · 08796 Pacs del Penedès, Barcelona).
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
	siteUrl: 'https://restaurant-cal-cassoles.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant Cal Cassoles',
	shortName: 'Cal Cassoles',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Maset dels Conills, s/n',
	district: 'Pacs del Penedès',
	postalCode: '08796',
	city: 'Pacs del Penedès',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 647 56 36 61',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '647 56 36 61',
	latitude: 41.3497412,
	longitude: 1.6703571,
	/** Plus code que publica la ficha (completo: 8FH38MXC+V4). */
	plusCode: '8MXC+V4 Pacs del Penedès',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 1273 reseñas). */
	rating: 4.2,
	reviewCount: 1273,
	site: null,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Restaurante a 2 Km de Vilafranca del Penedès, con un encanto paisajístico que crea una sinergia entre vinyes y gastronomía. Ofrecemos un estilo de cocina mediterranea y de mercado, con productos frescos y de temporada. Menú diario, carta los fines de semana, menú de grupos y menus de temporada (calçotada). Gran calidad en nuestra oferta culinaria y en nuestro servicio de sala, intentamos que nuestros clientes disfruten de una experiencia única en el corazón del Penedès. Muy bien comunicado y amplio aparcamiento.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+Cal+Cassoles/@41.3497412,1.6703571,17z/data=!3m1!4b1!4m6!3m5!1s0x12a470aca444dc4b:0xb7997ab72da7b91f!8m2!3d41.3497412!4d1.6703571!16s%2Fg%2F11bbrhtqsw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJS9xEpKxwpBIRH7mnLbd6mbc&hl=es';

export const phoneHref = 'tel:+34647563661';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El martes cierra. El resto de la semana abre de 13:00 a 15:30.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 15:30',
		shifts: [{ open: '13:00', close: '15:30' }],
		dayOfWeek: 'Monday',
	},
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '13:00 – 15:30',
		shifts: [{ open: '13:00', close: '15:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 15:30',
		shifts: [{ open: '13:00', close: '15:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 15:30',
		shifts: [{ open: '13:00', close: '15:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 15:30',
		shifts: [{ open: '13:00', close: '15:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 15:30',
		shifts: [{ open: '13:00', close: '15:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Martes cerrado; el resto de la semana de 13:00 a 15:30';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el martes · mediodías';

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
		text: 'Comida catalana típica de brasa de mucha calidad y buenos vinos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Después bacalao con alioli gratinado: si no te gusta el pescado no lo pidas.',
		rating: 2,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Servicio rápido y camareros estupendos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant Cal Cassoles?',
		answer:
			'En Maset dels Conills, s/n, con código postal 08796, en Pacs del Penedès, Barcelona. Publica el plus code 8MXC+V4 Pacs del Penedès y las coordenadas 41.3497412, 1.6703571.',
	},
	{
		question: '¿Cuál es el horario de Restaurant Cal Cassoles?',
		answer:
			'La ficha publica que el martes cierra y que el resto de la semana abre de 13:00 a 15:30. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local únicamente como restaurante mediterráneo. Su propia descripción habla de cocina mediterránea y de mercado con productos de temporada, menú diario, carta los fines de semana y menús de temporada como la calçotada. Las reseñas destacan la brasa y los vinos. La ficha no publica precios, así que esta web no enumera tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 647 56 36 61. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 647 56 36 61 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Maset dels Conills, s/n, en Pacs del Penedès, y las coordenadas 41.3497412, 1.6703571. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 1273 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con sus puntuaciones originales de 5, 2 y 5 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante mediterráneo en Maset dels Conills, s/n, Pacs del Penedès (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
