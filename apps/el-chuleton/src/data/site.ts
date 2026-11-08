/**
 * Datos de El Chuletón (Calle Ejido, 24, 04430 Instinción, Almería).
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
	siteUrl: 'https://el-chuleton.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre del negocio. La ficha lo publica con minúscula inicial («El chuletón»); en la web se
	 * escribe con mayúscula por ser un nombre propio en titulares y encabezados. Es una decisión de
	 * presentación, anotada también en el README.
	 */
	name: 'El Chuletón',
	shortName: 'El Chuletón',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Parrilla',
	categories: ['Parrilla'],
	/**
	 * Google escribe la dirección como «C. Ejido, 24»: en la web se desarrolla la abreviatura a
	 * «Calle», como en el resto del repositorio. El municipio es Instinción, que es municipio propio
	 * (Alpujarra Almeriense, Valle Medio del Andarax) con código postal 04430, tal como publica la
	 * ficha.
	 */
	streetAddress: 'Calle Ejido, 24',
	postalCode: '04430',
	city: 'Instinción',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. Es un móvil, como el de otras fichas del repositorio. */
	phone: '+34 647 05 47 48',
	latitude: 36.9917456,
	longitude: -2.6562153,
	/** Valoración de la ficha en la fecha de consulta (4,5 con 97 reseñas). */
	rating: 4.5,
	reviewCount: 97,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+chulet%C3%B3n/@36.9917456,-2.6562153,17z/data=!3m1!4b1!4m6!3m5!1s0xd70136f4acd522d:0x2a0be2e8e8aa0148!8m2!3d36.9917456!4d-2.6562153!16s%2Fg%2F11y3q_66pw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJLVLNSm8TcA0RSAGq6OjiCyo&hl=es';

export const phoneHref = 'tel:+34647054748';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre por la mañana temprano los lunes, miércoles y jueves (7:00 – 16:30), el domingo solo a
 * mediodía (12:30 – 16:30) y los viernes y sábados añade el turno de noche (20:00 – 23:30). Cierra
 * los martes. El lunes de la semana de la consulta era además el festivo del 12 de octubre, Fiesta
 * Nacional de España: la ficha lo daba abierto con su horario habitual y con el aviso de que «el
 * horario podría ser diferente», así que se publica abierto **con la advertencia**.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:00 – 16:30',
		shifts: [{ open: '07:00', close: '16:30' }],
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
		service: '7:00 – 16:30',
		shifts: [{ open: '07:00', close: '16:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 16:30',
		shifts: [{ open: '07:00', close: '16:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 16:30 y 20:00 – 23:30',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 16:30 y 20:00 – 23:30',
		shifts: [
			{ open: '12:30', close: '16:30' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 16:30',
		shifts: [{ open: '12:30', close: '16:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Comidas de miércoles a lunes · cenas viernes y sábado · martes cerrado';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Se citan tal cual, sin retocar nada, ni los espacios raros ni la puntuación: la segunda lleva un
 * espacio antes de la coma («tranquilo , buena comida») y la tercera va sin espacio detrás de la
 * coma («Ensaladilla Rusa,Pollo al ajillo»). Google destaca tres y ninguna es una queja, así que
 * se publican las tres. Los platos que nombran (ensaladilla rusa, pollo al ajillo, croquetas,
 * tostadas) se mencionan atribuidos a la reseña, no a una carta que la web no ha visto.
 */
export const reviews = [
	{
		text: 'Fuimos a desayunar y las tostadas y el café estaban deliciosos.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Buen sitio para comer, tranquilo , buena comida y buen servicio.',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'He probado Ensaladilla Rusa,Pollo al ajillo y Croquetas.',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, terraza, reparto ni reservas más allá de lo que dicen la ficha y sus reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está El Chuletón?',
		answer:
			'En la calle Ejido, 24, en Instinción (Almería), código postal 04430. Instinción es un municipio de la Alpujarra Almeriense, en el valle medio del Andarax. Puedes abrir la ubicación exacta en Google Maps o llamar al 647 05 47 48 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps publica un turno de 7:00 a 16:30 los lunes, miércoles y jueves, y de 12:30 a 16:30 los viernes, sábados y domingos; viernes y sábados añaden cena de 20:00 a 23:30. Cierra los martes. El lunes 12 de octubre de 2026 coincidía con la Fiesta Nacional de España y la ficha lo daba abierto con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como parrilla, con 4,5 sobre 5 y 97 reseñas. Sus reseñas destacadas hablan de las tostadas y el café del desayuno, de un sitio tranquilo para comer con buena comida y buen servicio, y de la ensaladilla rusa, el pollo al ajillo y las croquetas. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede desayunar?',
		answer:
			'Según la ficha, sí: los lunes, miércoles y jueves abre a las 7:00 de la mañana, y una de sus reseñas destacadas habla precisamente de ir a desayunar tostadas y café. Los viernes, sábados y domingos el primer turno empieza a las 12:30, así que no hay desayuno esos días.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el establecimiento no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 647 05 47 48.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio establecimiento publica en su ficha de Google Maps, consultada el 6 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description: 'Parrilla en Instinción, Alpujarra Almeriense, con desayunos y comidas.',
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
	// «Parrilla» ya está en español: se publica la categoría de Google tal cual, sin traducirla.
	servesCuisine: ['Parrilla'],
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
