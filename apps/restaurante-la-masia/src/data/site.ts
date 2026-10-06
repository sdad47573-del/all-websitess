/**
 * Datos de Restaurante La Masía (Calle Conde de Barcelona, 12, 04700 El Ejido, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal y reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://la-masia-elejido.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Masía',
	shortName: 'La Masía',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo', 'Restaurante de cocina española'],
	/**
	 * Google escribe la dirección como «C. Conde de Barcelona, 12»: en la web se desarrolla la
	 * abreviatura a «Calle», como en el resto de webs del repositorio.
	 */
	streetAddress: 'Calle Conde de Barcelona, 12',
	postalCode: '04700',
	city: 'El Ejido',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 950 57 31 41',
	latitude: 36.7736111,
	longitude: -2.8222222,
	/** Valoración de la ficha en la fecha de consulta (4,5 con 184 reseñas). */
	rating: 4.5,
	reviewCount: 184,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Mas%C3%ADa/@36.7736111,-2.8222222,17z/data=!3m1!4b1!4m6!3m5!1s0xd70431ecfd532e1:0x839da8ff1dbbdedb!8m2!3d36.7736111!4d-2.8222222!16s%2Fg%2F1td6tlc2?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ4TLVzx5DcA0R2967Hf-onYM&hl=es';

export const phoneHref = 'tel:+34950573141';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Cierra los lunes. De martes a jueves y el domingo solo abre el turno de comida, con cierres
 * ligeramente distintos: 17:00 de martes a jueves y 16:30 el domingo. Viernes y sábado añaden el
 * turno de noche, de 20:30 a 24:00. El lunes de esa semana —que además era el festivo del 12 de
 * octubre— la ficha lo marcaba como cerrado con el aviso de que el horario podía ser diferente, así
 * que se publica cerrado **con la advertencia** de que conviene confirmarlo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 17:00',
		shifts: [{ open: '12:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 17:00',
		shifts: [{ open: '12:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 17:00',
		shifts: [{ open: '12:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:30 y 20:30 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:30 y 20:30 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:30' },
			{ open: '20:30', close: '24:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 16:30',
		shifts: [{ open: '12:00', close: '16:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Comidas todos los días menos el lunes; de noche, viernes y sábado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar, ni siquiera su puntuación. Son las tres que Google destaca y
 * ninguna es una queja, así que se publican las tres.
 */
export const reviews = [
	{
		text: 'He comido pisto con huevo, costillas y la crema catalana super rica.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Buena cocina, buen vino y un servicio excelente.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Comida excelente, carta variada, buen ambiente y excelente servicio.',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos, precios,
 * terraza, reparto ni reservas más allá de lo que dicen la ficha y sus reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante La Masía?',
		answer:
			'En la calle Conde de Barcelona, 12, en El Ejido (Almería), código postal 04700. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 57 31 41 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps lo publica cerrado los lunes; de martes a jueves de 12:00 a 17:00; el domingo de 12:00 a 16:30; y viernes y sábado de 12:00 a 16:30 y de 20:30 a 24:00. El lunes de la semana de la consulta coincidía con la Fiesta Nacional de España y la ficha lo marcaba como cerrado con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono tanto los lunes como los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, restaurante mediterráneo y restaurante de cocina española, con 4,5 sobre 5 y 184 reseñas. Sus reseñas destacadas hablan de pisto con huevo, costillas y crema catalana, de buena cocina, buen vino y servicio excelente, y de carta variada. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede cenar de noche?',
		answer:
			'Según la ficha, solo abre de noche los viernes y los sábados, de 20:30 a 24:00; el resto de días cierra a media tarde, entre las 16:30 y las 17:00. Confírmalo por teléfono si vas buscando una cena entre semana.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 57 31 41.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: 'Restaurante de cocina española y mediterránea en El Ejido, Almería.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	priceRange: '€',
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
	// Se traducen las categorías que publica Google, sin añadir ninguna más.
	servesCuisine: ['Cocina española', 'Cocina mediterránea'],
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
