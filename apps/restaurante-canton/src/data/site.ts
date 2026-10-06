/**
 * Datos de Restaurante Cantón (Edifício Bajamar, Av. Mediterráneo, 1E, 04740 Roquetas de Mar,
 * Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal, reseñas destacadas y los pies de foto que
 * publica la galería.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-canton.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Cantón',
	shortName: 'Cantón',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante asiático',
	categories: ['Restaurante asiático', 'Restaurante vietnamita'],
	/**
	 * La ficha escribe la dirección como «Edifício Bajamar, Av. Mediterráneo, 1E»: en la web se
	 * desarrolla la abreviatura «Av.» a «Avenida», como en el resto del repositorio, y se respeta
	 * tal cual el nombre del edificio, que Google escribe con í («Edifício»). El número de portal es
	 * «1E», también como lo publica la ficha.
	 */
	streetAddress: 'Edifício Bajamar, Avenida Mediterráneo, 1E',
	postalCode: '04740',
	city: 'Roquetas de Mar',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 950 33 34 19',
	latitude: 36.7347622,
	longitude: -2.6219347,
	/** Valoración de la ficha en la fecha de consulta (4,6 con 1.266 reseñas). */
	rating: 4.6,
	reviewCount: 1266,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Cant%C3%B3n/@36.7347622,-2.6219347,17z/data=!3m1!4b1!4m6!3m5!1s0xd70654bb1efaf1d:0xfe1614e711682ddf!8m2!3d36.7347622!4d-2.6219347!16s%2Fg%2F11b90h6rgz?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJHa_vsUtlcA0R3y1oEecUFv4&hl=es';

export const phoneHref = 'tel:+34950333419';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre de miércoles a domingo con dos turnos, comida (13:00 – 15:30) y cena (20:00 – 22:30), y
 * cierra los lunes y los martes. El lunes de la semana de la consulta era además el festivo del 12
 * de octubre, Fiesta Nacional de España: la ficha lo daba cerrado con el aviso de que «el horario
 * podría ser diferente», así que se publica cerrado **con la advertencia** (mismo caso que La
 * Masía).
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 15:30 y 20:00 – 22:30',
		shifts: [
			{ open: '13:00', close: '15:30' },
			{ open: '20:00', close: '22:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 15:30 y 20:00 – 22:30',
		shifts: [
			{ open: '13:00', close: '15:30' },
			{ open: '20:00', close: '22:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 15:30 y 20:00 – 22:30',
		shifts: [
			{ open: '13:00', close: '15:30' },
			{ open: '20:00', close: '22:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 15:30 y 20:00 – 22:30',
		shifts: [
			{ open: '13:00', close: '15:30' },
			{ open: '20:00', close: '22:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 15:30 y 20:00 – 22:30',
		shifts: [
			{ open: '13:00', close: '15:30' },
			{ open: '20:00', close: '22:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Comidas y cenas de miércoles a domingo · cierra lunes y martes';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar nada, ni las erratas ni la puntuación. Google destaca tres y
 * ninguna es una queja, así que se publican las tres (mismo criterio que La Masía y el Taller de
 * Sabores). Los platos que nombran (pato asado, tarta de queso, phó, wok de lomo de ternera con
 * salsa de alubias, raviolis de solomillo y gambas) se mencionan atribuidos a la reseña, no a una
 * carta que la web no ha visto.
 */
export const reviews = [
	{
		text: 'Excelente lugar el pato asado expectacular y la tarta de queso increíble.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'El phó y el wok de lomo de ternera con salsa de alubias estaba espectacular.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Todo muy rico, sobre todo los raviolis rellenos de solomillo y gambas',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Pies de foto que publica la propia galería de la ficha, con el nombre del fichero que les
 * corresponde.
 *
 * Tres fotos traen un pie descriptivo y se usan como `alt` real y como `<figcaption>` visible: son
 * «Dumplings with foie and goat cheese» (literal, tal como lo publica Google, aunque esté en
 * inglés), «NEM rollitos vietnamitas 5 piezas» y «Tallarines estilo cantonés». El resto de fotos no
 * trae pie útil (vacío o el nombre del negocio) y llevan un `alt` genérico.
 *
 * El pie de la foto de los rollitos Nem incluye además el precio («10,00 €»), que **no se publica**
 * en la web: como en el resto del repositorio, no se reproducen precios de una carta que la ficha
 * no publica. La omisión queda explicada en las preguntas frecuentes y en el README.
 */
export const piesDeFoto: Record<string, string> = {
	'restaurante-canton-apaisada-04.jpg': 'Dumplings with foie and goat cheese',
	'restaurante-canton-vertical-07.jpg': 'NEM rollitos vietnamitas 5 piezas',
	'restaurante-canton-vertical-09.jpg': 'Tallarines estilo cantonés',
};

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, terraza, reparto ni reservas más allá de lo que dicen la ficha, sus reseñas y sus pies
 * de foto.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante Cantón?',
		answer:
			'En el edificio Bajamar, avenida Mediterráneo, 1E, en Roquetas de Mar (Almería), código postal 04740. Puedes abrir la ubicación exacta en Google Maps o llamar al 950 33 34 19 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps publica dos turnos de miércoles a domingo: comida de 13:00 a 15:30 y cena de 20:00 a 22:30. Cierra los lunes y los martes. El lunes 12 de octubre de 2026 coincidía con la Fiesta Nacional de España y la ficha lo daba cerrado con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono tanto los lunes como los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante asiático y restaurante vietnamita, con 4,6 sobre 5 y 1266 reseñas. Sus reseñas destacadas hablan del pato asado y la tarta de queso, del phó y el wok de lomo de ternera con salsa de alubias, y de los raviolis rellenos de solomillo y gambas. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 950 33 34 19.',
	},
	{
		question: '¿Están publicados los precios?',
		answer:
			'No. La ficha del restaurante no publica la carta ni los precios. El único precio que aparece va en el pie de una de las fotos de la galería, junto al nombre de un plato, y esta web no lo reproduce: no se publican precios de una carta que no está publicada. Para saber lo que cuesta hoy, llama al 950 33 34 19.',
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
	description: 'Restaurante asiático y vietnamita en Roquetas de Mar, Almería.',
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
	// Se traducen las dos categorías que publica Google, sin añadir ninguna más.
	servesCuisine: ['Cocina asiática', 'Cocina vietnamita'],
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
