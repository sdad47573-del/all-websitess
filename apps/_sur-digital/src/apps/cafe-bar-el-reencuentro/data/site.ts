/**
 * Datos de Café Bar El Reencuentro (C. Pozo Amarguillo, 53 · 11540 Sanlúcar de Barrameda, Cádiz).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 20 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica web propia, carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/cafe-bar-el-reencuentro',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '20 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Café Bar El Reencuentro',
	shortName: 'El Reencuentro',
	/** Categorías que publica Google, en su orden: bar restaurante y bar. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Bar'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'C. Pozo Amarguillo, 53',
	postalCode: '11540',
	city: 'Sanlúcar de Barrameda',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 627 76 21 79',
	latitude: 36.7730235,
	longitude: -6.3538311,
	/** Plus code que publica la ficha. */
	plusCode: 'QJFW+6F Sanlúcar de Barrameda',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 150 reseñas). */
	rating: 4.5,
	reviewCount: 150,
	site: site.siteUrl,
} as const;

/**
 * Descripción que publica el propio titular en la ficha de Google Maps, resumida.
 *
 * El original dice: «Bar cafetería pequeño y sin grandes pretensiones muy acogedor buena cocino y
 * un trato ejemplar». Aquí se resume para no arrastrar la errata («cocino») a la web; el sentido y
 * los adjetivos son los que publica la ficha.
 */
export const descripcionTitular =
	'Un bar cafetería pequeño y sin grandes pretensiones, muy acogedor, con buena cocina y un trato ejemplar.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Caf%C3%A9+Bar+El+Reencuentro/@36.7730235,-6.3538311,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dde3aa4e28a6d:0x801537b7153be545!8m2!3d36.7730235!4d-6.3538311!16s%2Fg%2F11f57b4y6z?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJbYripDreDQ0RReU7Fbc3FYA&hl=es';

export const phoneHref = 'tel:+34627762179';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre de martes a domingo, de 9:00 a 17:00, y el lunes figura como cerrado. Los lunes no se
 * incluyen en `openingHoursSpecification`, que solo describe los días con horario.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
		closed: true,
	},
	{
		day: 'Martes',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
		closed: false,
	},
	{
		day: 'Miércoles',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
		closed: false,
	},
	{
		day: 'Jueves',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
		closed: false,
	},
	{
		day: 'Viernes',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Friday',
		closed: false,
	},
	{
		day: 'Sábado',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Saturday',
		closed: false,
	},
	{
		day: 'Domingo',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
		closed: false,
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De martes a domingo, 9:00–17:00 · lunes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo publica dos entradas: acceso y asientos adaptados para sillas de ruedas, ambos disponibles.
 * El aparcamiento y el aseo no aparecen en la ficha, así que no se añaden.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (los espacios antes de las comas,
 * los puntos suspensivos y la falta de punto final). Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Sopa de galeras, carrillada, berza, pescaito frito, paella.....',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Caracoles , montaditos y tapitas exquisitas Un rinconcito especial',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me encanta, buenos precios, tapas deliciosas, el camarero muy amable',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Platos que aparecen nombrados en las tres reseñas destacadas.
 *
 * No es la carta del local: la ficha no publica carta ni precios. Cada nombre sale de una de las
 * reseñas que Google destaca, y así se indica.
 */
export const platos = [
	{ nombre: 'Sopa de galeras', origen: 'Reseña de 5 sobre 5' },
	{ nombre: 'Carrillada', origen: 'Reseña de 5 sobre 5' },
	{ nombre: 'Berza', origen: 'Reseña de 5 sobre 5' },
	{ nombre: 'Pescaito frito', origen: 'Reseña de 5 sobre 5' },
	{ nombre: 'Paella', origen: 'Reseña de 5 sobre 5' },
	{ nombre: 'Caracoles', origen: 'Reseña de 5 sobre 5' },
	{ nombre: 'Montaditos', origen: 'Reseña de 5 sobre 5' },
	{ nombre: 'Tapitas', origen: 'Reseña de 5 sobre 5' },
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No se añade carta, precio ni reserva: la ficha no los publica. Lo de los platos y los «buenos
 * precios» se atribuye a las reseñas, no a una oferta del local.
 */
export const faqs = [
	{
		question: '¿Dónde está Café Bar El Reencuentro?',
		answer:
			'En la calle Pozo Amarguillo, 53, en el código postal 11540 de Sanlúcar de Barrameda (Cádiz). La ficha publica el plus code QJFW+6F Sanlúcar de Barrameda y las coordenadas 36.7730235, -6.3538311.',
	},
	{
		question: '¿Qué días abre?',
		answer:
			'Abre de martes a domingo, de 9:00 a 17:00. El lunes figura como cerrado en la ficha. Es el horario consultado el 20 de octubre de 2026; conviene confirmarlo por teléfono antes de ir, sobre todo en festivos.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'La ficha no publica carta ni precios. En las reseñas que Google destaca se citan sopa de galeras, carrillada, berza, pescaito frito, paella, caracoles, montaditos y tapitas. Es lo que nombran los clientes, no una lista oficial del local.',
	},
	{
		question: '¿Es un sitio caro?',
		answer:
			'La ficha no publica precios ni un rango de precio. Una de las reseñas destacadas menciona «buenos precios», pero es la opinión de un cliente y no una tarifa. Para saber cuánto cuesta hoy hay que llamar al 627 76 21 79.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha solo publica dos datos de accesibilidad: el acceso y los asientos adaptados para sillas de ruedas figuran como disponibles. No publica ninguna otra entrada, así que no se añaden más.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 627 76 21 79.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'La ficha no publica ningún distintivo ni dato sobre perros, así que esta web no afirma ni que sí ni que no. Lo mejor es preguntar por teléfono antes de ir con el perro.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 20 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': ['BarOrPub', 'Restaurant'],
	'@id': `${site.siteUrl}/#bar`,
	name: business.name,
	description: descripcionTitular,
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
	hasGoogleReviews: reviewsUrl,
	servesCuisine: ['Tapas', 'Cocina casera'],
	/* Sin `priceRange`: la ficha no publica precios. */
	/* Sin `acceptsReservations`: la ficha no publica si se admiten reservas. */
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
 * amarillo de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
