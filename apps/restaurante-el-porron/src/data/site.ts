/**
 * Datos de Restaurante El Porron
 * (Passatge Granada, 6 · 08740 Sant Andreu de la Barca, Barcelona).
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
	siteUrl: 'https://restaurante-el-porron.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Porron',
	shortName: 'El Porron',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española', 'Bar'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Passatge Granada, 6',
	district: 'Sant Andreu de la Barca',
	postalCode: '08740',
	city: 'Sant Andreu de la Barca',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 936 82 04 01',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '936 82 04 01',
	latitude: 41.4557396,
	longitude: 1.9732995,
	/** Plus code que publica la ficha. */
	plusCode: 'FX4F+78 Sant Andreu de la Barca',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 362 reseñas). */
	rating: 4.2,
	reviewCount: 362,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Porron/@41.4557396,1.9732995,17z/data=!3m1!4b1!4m6!3m5!1s0x12a48fc8ca5df047:0x4755f2a5f76494fd!8m2!3d41.4557396!4d1.9732995!16s%2Fg%2F11cjnhbqf0?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJR_BdysiPpBIR_ZRk96XyVUc&hl=es';

export const phoneHref = 'tel:+34936820401';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 6:00 a 17:00; el sábado, de 6:00 a 12:00, y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:00 – 17:00',
		shifts: [{ open: '6:00', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:00 – 17:00',
		shifts: [{ open: '6:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:00 – 17:00',
		shifts: [{ open: '6:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:00 – 17:00',
		shifts: [{ open: '6:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:00 – 17:00',
		shifts: [{ open: '6:00', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '6:00 – 12:00',
		shifts: [{ open: '6:00', close: '12:00' }],
		dayOfWeek: 'Saturday',
	},
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'de lunes a viernes de 6:00 a 17:00; sábado de 6:00 a 12:00; domingo cerrado';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el domingo · consulta el horario';

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
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Buenos embutidos y cerveza muy fría.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Bar de polígono, bocatas de jamón cortado a cuchillo, ...',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Buen lugar para comer con buen trato y buena comida',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurante El Porron?',
		answer:
			'En el Passatge Granada, 6, con código postal 08740, en Sant Andreu de la Barca, Barcelona. Publica el plus code FX4F+78 Sant Andreu de la Barca y las coordenadas 41.4557396, 1.9732995.',
	},
	{
		question: '¿Cuál es el horario de Restaurante El Porron?',
		answer:
			'La ficha publica que de lunes a viernes abre de 6:00 a 17:00; el sábado, de 6:00 a 12:00, y el domingo cierra. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante de cocina española y bar. Las reseñas destacan los embutidos, la cerveza muy fría y los bocadillos de jamón cortado a cuchillo. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 936 82 04 01. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 936 82 04 01 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Passatge Granada, 6, en Sant Andreu de la Barca, y las coordenadas 41.4557396, 1.9732995. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso, aseo y asientos adaptados para sillas de ruedas. No publica ningún dato sobre aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 362 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, las tres con puntuación original de 4 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante de cocina española en el Passatge Granada, 6, Sant Andreu de la Barca (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
