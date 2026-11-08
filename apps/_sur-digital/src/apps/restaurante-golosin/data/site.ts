/**
 * Datos de Restaurante Golosin (Av. Pierre de Coubertin, 28, bajo · 10005 Sur, Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, perfiles sociales, carta ni precios, así
 * que no se reproduce ninguno. Tampoco publica terraza, menú ni otros servicios del local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-golosin',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Golosin',
	shortName: 'Golosin',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha: «Restaurante Golosin, Av. Pierre de Coubertin, 28, bajo,
	 * Sur, 10005 Cáceres». «Sur» es la localidad y se conserva como ciudad; «Cáceres» es
	 * la provincia.
	 */
	streetAddress: 'Av. Pierre de Coubertin, 28, bajo',
	postalCode: '10005',
	city: 'Sur',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 927 23 61 62',
	latitude: 39.4572285,
	longitude: -6.378807,
	/** Plus code que publica la ficha (corto; el completo es 8CFMFJ4C+VF). */
	plusCode: 'FJ4C+VF Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 425 reseñas). */
	rating: 4.7,
	reviewCount: 425,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Golosin/@39.4572285,-6.378807,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfc770cd65b7:0x8bf2c422888011af!8m2!3d39.4572285!4d-6.378807!16s%2Fg%2F11cmfxf9y6?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJt2XNcMffFQ0RrxGAiCLE8os&hl=es';

export const phoneHref = 'tel:+34927236162';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre de miércoles a domingo de 11:00 a 24:00. El lunes abre solo por la tarde, de 18:00
 * a 24:00, y el martes está cerrado.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '18:00 – 24:00',
		shifts: [{ open: '18:00', close: '24:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 24:00',
		shifts: [{ open: '11:00', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 24:00',
		shifts: [{ open: '11:00', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 24:00',
		shifts: [{ open: '11:00', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 24:00',
		shifts: [{ open: '11:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 24:00',
		shifts: [{ open: '11:00', close: '24:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Mié–dom 11:00–24:00 · lun 18:00–24:00 · mar cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Las tres entradas figuran como disponibles: acceso, aseo adaptado y asientos adaptados
 * para sillas de ruedas. La ficha no publica aparcamiento adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción, sus espacios ni su puntuación. Hay una de 4,
 * una de 3 y una de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Raciones, bocatas y hamburguesas generosos y ricos.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Esperaba una carta más extensa, los camareros super serviciales y amables.',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Trato amable, los bocadillos y las hamburguesas estupendos.',
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
		question: '¿Dónde está Restaurante Golosin?',
		answer:
			'En la Av. Pierre de Coubertin, 28, bajo, con código postal 10005, en Sur (Cáceres, Extremadura). La ficha publica el plus code FJ4C+VF Cáceres y las coordenadas 39.4572285, -6.378807.',
	},
	{
		question: '¿Cuál es el horario de Golosin?',
		answer:
			'Abre de miércoles a domingo de 11:00 a 24:00; el lunes solo por la tarde, de 18:00 a 24:00, y el martes está cerrado. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 927 23 61 62.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante. Tiene 4,7 sobre 5 con 425 reseñas, y en las reseñas que destaca se habla de raciones, bocatas y hamburguesas generosos, de camareros serviciales y amables y de bocadillos y hamburguesas estupendos. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 927 23 61 62.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. Pierre de Coubertin, 28, bajo y las coordenadas 39.4572285, -6.378807. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code FJ4C+VF Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: acceso, aseo adaptado y asientos adaptados para sillas de ruedas. No publica aparcamiento adaptado, así que esta web no puede confirmarlo.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Av. Pierre de Coubertin, 28 de Sur (Cáceres). Raciones, bocadillos y hamburguesas; 4,7 sobre 5 con 425 reseñas en Google Maps.',
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
	/* Sin `servesCuisine`: la única categoría que publica Google es «Restaurante». */
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
} as const;
