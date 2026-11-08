/**
 * Datos de Restaurante El Tapes de Valldoreix
 * (Rambla Mossèn Jacint Verdaguer, 55 · 08197 Sant Cugat del Vallès, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, acción de reserva y dos reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios ni datos de envío, así
 * que aquí no se reproducen. Los textos de las reseñas se copian literalmente, con su puntuación
 * original, y se citan como tales; la ficha no publica el nombre de quienes las firman (solo el
 * enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-el-tapes-de-valldoreix',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Tapes de Valldoreix',
	shortName: 'El Tapes',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: [
		'Restaurante',
		'Restaurante mediterráneo',
		'Restaurante especializado en tapas',
	],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Rambla Mossèn Jacint Verdaguer, 55',
	district: 'Sant Cugat del Vallès',
	postalCode: '08197',
	city: 'Sant Cugat del Vallès',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 936 75 20 40',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '936 75 20 40',
	latitude: 41.4581961,
	longitude: 2.0612166,
	/** Plus code que publica la ficha. */
	plusCode: 'F356+7F Sant Cugat del Vallès',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 393 reseñas). */
	rating: 4.2,
	reviewCount: 393,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Tapes+de+Valldoreix/@41.4581961,2.0612166,17z/data=!3m1!4b1!4m6!3m5!1s0x12a490d6af23673f:0x99f299e432153bd6!8m2!3d41.4581961!4d2.0612166!16s%2Fg%2F11c1wwkz1r?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJP2cjr9aQpBIR1jsVMuSZ8pk&hl=es';

/** Acción «Reservar una mesa» que publica la ficha (sistema de reservas de Google). */
export const reservationUrl = 'https://www.google.com/maps/reserve/v/dine/c/mJF2A3MFV7k';

export const phoneHref = 'tel:+34936752040';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 8:00 a 23:30. Sábado y domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 23:30',
		shifts: [{ open: '8:00', close: '23:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 23:30',
		shifts: [{ open: '8:00', close: '23:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 23:30',
		shifts: [{ open: '8:00', close: '23:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 23:30',
		shifts: [{ open: '8:00', close: '23:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 23:30',
		shifts: [{ open: '8:00', close: '23:30' }],
		dayOfWeek: 'Friday',
	},
	{ day: 'Sábado', service: 'Cerrado', shifts: [], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a viernes de 8:00 a 23:30; sábado y domingo cerrado';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Lunes a viernes · fin de semana cerrado';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica tres entradas, todas disponibles: acceso, aseo y asientos adaptados para sillas de
 * ruedas. No publica ningún dato sobre aparcamiento adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * La vista consultada incluye dos extractos destacados (ambos de 4 sobre 5). Google no muestra el
 * nombre de quien firma en esta vista previa (solo el enlace a su perfil), así que no se inventa
 * uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Buen ambiente,buena comida y buen servicio',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Menú de mediodía adecuado, la camarera muy simpática y amable',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurante El Tapes de Valldoreix?',
		answer:
			'En la Rambla Mossèn Jacint Verdaguer, 55, con código postal 08197, en Sant Cugat del Vallès, Barcelona. Publica el plus code F356+7F Sant Cugat del Vallès y las coordenadas 41.4581961, 2.0612166.',
	},
	{
		question: '¿Cuál es el horario de Restaurante El Tapes de Valldoreix?',
		answer:
			'La ficha publica que de lunes a viernes abre de 8:00 a 23:30 y que sábado y domingo cierra. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante, restaurante mediterráneo y restaurante especializado en tapas. Las reseñas destacan el buen ambiente, la comida, el servicio y el menú de mediodía. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 936 75 20 40. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'Sí: la ficha muestra la acción «Reservar una mesa», que enlaza al sistema de reservas de Google. Aquí se reproduce ese mismo enlace, junto con el teléfono 936 75 20 40 del local.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Rambla Mossèn Jacint Verdaguer, 55, en Sant Cugat del Vallès, y las coordenadas 41.4581961, 2.0612166. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso, aseo y asientos adaptados para sillas de ruedas. No publica ningún dato sobre aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 393 reseñas. Aquí se reproducen literalmente dos de las que destaca la ficha, ambas con puntuación original de 4 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante de tapas en la Rambla Mossèn Jacint Verdaguer, 55, Sant Cugat del Vallès (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
	acceptsReservations: true,
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
