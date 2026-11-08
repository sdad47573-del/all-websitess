/**
 * Datos de Restaurante La Casuca (Calle Palma, 10 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta ni precios, así que no se reproduce ninguno
 * de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-la-casuca',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Casuca',
	shortName: 'La Casuca',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Parrilla» (la primera, que se usa
	 * como categoría principal) y «Restaurante mediterráneo».
	 */
	category: 'Parrilla',
	categories: ['Parrilla', 'Restaurante mediterráneo'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Palma, 10» y añade el detalle
	 * «Planta G»: aquí se desarrolla a «Calle Palma, 10, planta G», como el resto de direcciones del
	 * repositorio.
	 */
	streetAddress: 'Calle Palma, 10, planta G',
	postalCode: '13004',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 926 25 54 80',
	latitude: 38.9838046,
	longitude: -3.9254228,
	/** Plus code que publica la ficha. */
	plusCode: 'X3MF+GR Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 601 reseñas). */
	rating: 4.6,
	reviewCount: 601,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Casuca/@38.9838046,-3.9254228,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc33f8cda2b67:0xe2fc5354370f9c1b!8m2!3d38.9838046!4d-3.9254228!16s%2Fg%2F11b7gp28fy?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJZyvajD_Daw0RG5wPN1RT_OI&hl=es';

export const phoneHref = 'tel:+34926255480';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local
 * sirve dos turnos de mediodía y noche —mediodía de 13:30 a 16:00 y noche de 21:00 a 23:00— de
 * lunes a sábado, salvo el martes, que abre solo al mediodía. El domingo cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:30 – 16:00 · 21:00 – 23:00',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '21:00', close: '23:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:30 – 16:00',
		shifts: [{ open: '13:30', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:30 – 16:00 · 21:00 – 23:00',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '21:00', close: '23:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:30 – 16:00 · 21:00 – 23:00',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '21:00', close: '23:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:30 – 16:00 · 21:00 – 23:00',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '21:00', close: '23:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 16:00 · 21:00 – 23:00',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '21:00', close: '23:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Mediodía de 13:30 a 16:00 y cenas de 21:00 a 23:00 (el martes solo al mediodía); el domingo cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas, y las dos figuran como disponibles: el acceso y el aseo adaptados para sillas
 * de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Raciones variadas y muy ricas, elaboradas con productos de primera calidad.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena relación calidad-precio, buena atención y sabores deliciosos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos el plato típico; un cocido y de postre tarta de queso casera.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante La Casuca?',
		answer:
			'En la Calle Palma, 10 (planta G), con código postal 13004, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3MF+GR Ciudad Real y las coordenadas 38.9838046, -3.9254228.',
	},
	{
		question: '¿Cuál es el horario de Restaurante La Casuca?',
		answer:
			'La ficha publica dos turnos de lunes a sábado: mediodía de 13:30 a 16:00 y noche de 21:00 a 23:00, salvo el martes, que abre solo al mediodía. El domingo cierra. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como parrilla y restaurante mediterráneo. Tiene 4,6 sobre 5 con 601 reseñas, y en las reseñas que destaca se habla de raciones variadas y productos de primera calidad, de la relación calidad-precio y la atención, y de un cocido con tarta de queso casera de postre.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 926 25 54 80.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Palma, 10 (planta G) y las coordenadas 38.9838046, -3.9254228. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3MF+GR Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y el aseo adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Parrilla y restaurante mediterráneo en la Calle Palma, 10 de Ciudad Real, con comidas de 13:30 a 16:00 y cenas de 21:00 a 23:00.',
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
	/**
	 * `servesCuisine` traduce las dos categorías que publica Google: «Parrilla» y «Restaurante
	 * mediterráneo».
	 */
	servesCuisine: ['Parrilla', 'Cocina mediterránea'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
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
