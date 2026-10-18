/**
 * Datos de Restaurante El Gaucho Italiano s.l.
 * (Carrer del Parlament, 4 · 08720 Vilafranca del Penedès, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, web, valoración con número de reseñas, coordenadas,
 * plus code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta ni precios, así que aquí no se reproducen.
 * Los textos de las reseñas se copian literalmente y se citan como tales; la ficha no publica el
 * nombre de quienes firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-el-gaucho-italiano.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Gaucho Italiano s.l.',
	shortName: 'El Gaucho Italiano',
	category: 'Restaurante italiano',
	categories: ['Restaurante italiano', 'Restaurante argentino', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer del Parlament, 4',
	district: 'Vilafranca del Penedès',
	postalCode: '08720',
	city: 'Vilafranca del Penedès',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 930 19 91 75',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '930 19 91 75',
	latitude: 41.3434726,
	longitude: 1.698617,
	/** Plus code que publica la ficha (completo: 8FH38MVX+9C). */
	plusCode: '8MVX+9C Vilafranca del Penedès',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 389 reseñas). */
	rating: 4.6,
	reviewCount: 389,
	site: 'https://sites.google.com/view/el-gaucho-italiano',
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Gaucho+Italiano+s.l./@41.3434726,1.698617,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4798c79dddcdb:0xb408652c48d5f497!8m2!3d41.3434726!4d1.698617!16s%2Fg%2F11c4bblfx3?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ29zdeYx5pBIRl_TVSCxlCLQ&hl=es';

/** Web propia publicada en la ficha. */
export const websiteUrl = 'https://sites.google.com/view/el-gaucho-italiano';

export const phoneHref = 'tel:+34930199175';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El miércoles cierra. Domingo y sábado abren a mediodía (13:30–15:30) y por la noche
 * (20:30–23:00); lunes, martes, jueves y viernes abren solo por la noche (20:30–23:00).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '20:30 – 23:00',
		shifts: [{ open: '20:30', close: '23:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '20:30 – 23:00',
		shifts: [{ open: '20:30', close: '23:00' }],
		dayOfWeek: 'Tuesday',
	},
	{ day: 'Miércoles', service: 'Cerrado', shifts: [], dayOfWeek: 'Wednesday' },
	{
		day: 'Jueves',
		service: '20:30 – 23:00',
		shifts: [{ open: '20:30', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '20:30 – 23:00',
		shifts: [{ open: '20:30', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 15:30 · 20:30 – 23:00',
		shifts: [
			{ open: '13:30', close: '15:30' },
			{ open: '20:30', close: '23:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:30 – 15:30 · 20:30 – 23:00',
		shifts: [
			{ open: '13:30', close: '15:30' },
			{ open: '20:30', close: '23:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Miércoles cerrado; lunes, martes, jueves y viernes de 20:30 a 23:00; sábado y domingo de 13:30 a 15:30 y de 20:30 a 23:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Todos los días menos miércoles · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 */
export const reviews = [
	{
		text: 'La pasta cuatro queso estaba increible, de las más ricas que he probado nunca.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Buen sitio donde comer buena carne, buena calidad en el género.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Pedimos la degustación de asado y una empanada extra.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está El Gaucho Italiano?',
		answer:
			'En el Carrer del Parlament, 4, con código postal 08720, en Vilafranca del Penedès, Barcelona. Publica el plus code 8MVX+9C Vilafranca del Penedès y las coordenadas 41.3434726, 1.698617.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica que el miércoles cierra; lunes, martes, jueves y viernes abre de 20:30 a 23:00; sábado y domingo abre de 13:30 a 15:30 y de 20:30 a 23:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica como restaurante italiano, argentino y mediterráneo. Las reseñas que destaca hablan de pasta cuatro quesos, buena carne y degustación de asado. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono y su web?',
		answer:
			'El teléfono que publica la ficha es el 930 19 91 75 y su web es https://sites.google.com/view/el-gaucho-italiano. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer del Parlament, 4, en Vilafranca del Penedès, y las coordenadas 41.3434726, 1.698617. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica aseo y asientos adaptados para sillas de ruedas como disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 389 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante italiano y argentino en Vilafranca del Penedès (Barcelona): pasta, carne y asado. Datos y fotografías de su ficha de Google Maps.',
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
	sameAs: [websiteUrl],
	/* Sin `priceRange` ni `menu`: la ficha no publica precios ni carta. */
	servesCuisine: ['Italiana', 'Argentina', 'Mediterránea'],
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
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
