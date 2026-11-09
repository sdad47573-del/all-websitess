/**
 * Datos de Bar Restaurant Pinedes
 * (Carrer de la Generalitat, Camí de Pinedes Altes, 5 · 43718 Marmellar, Tarragona).
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
	siteUrl: 'https://www.sur-digital.com/bar-restaurant-pinedes',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Restaurant Pinedes',
	shortName: 'Pinedes',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer de la Generalitat, Camí de Pinedes Altes, 5',
	district: 'Les Pinedes del Montmell',
	postalCode: '43718',
	city: 'Marmellar',
	province: 'Tarragona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 622 91 07 21',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '622 91 07 21',
	latitude: 41.3672193,
	longitude: 1.5305659,
	/** Plus code que publica la ficha (completo: 8FH39G8J+V6). */
	plusCode: '9G8J+V6 Marmellar',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 29 reseñas). */
	rating: 4.6,
	reviewCount: 29,
	site: null,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Bar Restaurante Pinedes es un establecimiento acogedor donde podrás disfrutar de desayunos, bocadillos, tapas y platos combinados en un ambiente cercano y familiar. Ideal para hacer una parada, tomar algo con amigos o comer tranquilamente en el local o en la terraza. Calidad, buen servicio y trato cercano en el corazón de Les Pinedes del Montmell.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Restaurant+Pinedes/@41.3672193,1.5305659,17z/data=!3m1!4b1!4m6!3m5!1s0x12a473ba14ca3f99:0x773434a07bad4a09!8m2!3d41.3672193!4d1.5305659!16s%2Fg%2F11nq8xc7xw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJmT_KFLpzpBIRCUqte6A0NHc&hl=es';

export const phoneHref = 'tel:+34622910721';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El martes cierra. El lunes y de miércoles a viernes abre de 8:30 a 21:00; el sábado y el
 * domingo, de 9:00 a 21:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:30 – 21:00',
		shifts: [{ open: '8:30', close: '21:00' }],
		dayOfWeek: 'Monday',
	},
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '8:30 – 21:00',
		shifts: [{ open: '8:30', close: '21:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 21:00',
		shifts: [{ open: '8:30', close: '21:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 21:00',
		shifts: [{ open: '8:30', close: '21:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 21:00',
		shifts: [{ open: '9:00', close: '21:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 21:00',
		shifts: [{ open: '9:00', close: '21:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Martes cerrado; lunes y de miércoles a viernes de 8:30 a 21:00; sábado y domingo de 9:00 a 21:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el martes · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica una sola entrada, disponible: asientos adaptados para sillas de ruedas. No publica
 * ningún dato sobre acceso, aseo ni aparcamiento adaptados.
 */
export const accesibilidad = [
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
		text: 'Buen servicio buen ambiente, todo muy bien',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Tampoco tenían pollo y nos cambiaron por dos trocitos de lomo bien pequeños.',
		rating: 1,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Muy rico el menú, echábamos de menos el bar, gracias por el servicio.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Bar Restaurant Pinedes?',
		answer:
			'En el Carrer de la Generalitat, Camí de Pinedes Altes, 5, con código postal 43718, en Marmellar, Tarragona. Publica el plus code 9G8J+V6 Marmellar y las coordenadas 41.3672193, 1.5305659.',
	},
	{
		question: '¿Cuál es el horario de Bar Restaurant Pinedes?',
		answer:
			'La ficha publica que el martes cierra; el lunes y de miércoles a viernes abre de 8:30 a 21:00, y el sábado y el domingo, de 9:00 a 21:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local únicamente como bar restaurante. Su propia descripción habla de desayunos, bocadillos, tapas y platos combinados. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 622 91 07 21. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 622 91 07 21 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de la Generalitat, Camí de Pinedes Altes, 5, en Marmellar, y las coordenadas 41.3672193, 1.5305659. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una sola entrada de accesibilidad, disponible: asientos adaptados para sillas de ruedas. No publica ningún dato sobre acceso, aseo ni aparcamiento adaptados.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 29 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con sus puntuaciones originales de 4, 1 y 5 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Bar restaurante en el Carrer de la Generalitat, Camí de Pinedes Altes, 5, Marmellar (Tarragona). Datos y fotografías de su ficha de Google Maps.',
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
