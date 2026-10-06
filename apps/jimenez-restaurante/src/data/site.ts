/**
 * Datos de Jiménez Restaurante (Ctra. el Charco, s/n, 04120 La Cañada, Almería).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 6 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, horario de la semana y reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * enlaza ni se afirma nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://jimenez-restaurante.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Jiménez Restaurante',
	shortName: 'Jiménez',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * La ficha escribe la dirección como «Ctra. el Charco, s/n, 04120 La Cañada, Almería»: se
	 * conserva tal cual, con la abreviatura «s/n» y sin número de portal, que es como describe
	 * Google un local sin número en una vía.
	 */
	streetAddress: 'Ctra. el Charco, s/n',
	postalCode: '04120',
	city: 'La Cañada',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. Es un móvil, como el de otras fichas del repositorio. */
	phone: '+34 696 10 65 79',
	latitude: 36.8330279,
	longitude: -2.3888451,
	/** Plus code que publica la ficha. */
	plusCode: 'RJM6+6F La Cañada',
	/** Valoración de la ficha en la fecha de consulta (4,2 con 902 reseñas). */
	rating: 4.2,
	reviewCount: 902,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Jim%C3%A9nez+Restaurante/@36.8330279,-2.3888451,17z/data=!3m1!4b1!4m6!3m5!1s0xd7a9eb999deefa1:0xbab5734f5afa6039!8m2!3d36.8330279!4d-2.3888451!16s%2Fg%2F1th5dy48?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJoe_embmeeg0ROWD6Wk9ztbo&hl=es';

export const phoneHref = 'tel:+34696106579';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 6 de octubre de 2026 cubre del martes 6 al lunes 12 de octubre. Ese martes la
 * ficha lo marca **cerrado**, y el resto de días publica 12:00 – 16:00, incluido el lunes 12, que
 * es Fiesta Nacional de España y va con el aviso de que «el horario podría ser diferente».
 *
 * El martes se publica cerrado: es lo que dice la ficha para el único martes del periodo, y tanto
 * Restaurant Guru como la cuenta pública del local repiten que los martes cierran por descanso del
 * personal. Conviene confirmarlo por teléfono.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 16:00',
		shifts: [{ open: '12:00', close: '16:00' }],
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
		service: '12:00 – 16:00',
		shifts: [{ open: '12:00', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:00',
		shifts: [{ open: '12:00', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:00',
		shifts: [{ open: '12:00', close: '16:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:00',
		shifts: [{ open: '12:00', close: '16:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 16:00',
		shifts: [{ open: '12:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 12:00 a 16:00 todos los días · cerrado los martes';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta, las tres con cinco
 * estrellas, y se citan tal cual: la tercera conserva sus emojis.
 */
export const reviews = [
	{
		text: 'Paella buenísima, tarta de galletas de la abuela riquísima!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La comida exquisita, el pescado, tomate raf, pata de pulpo a la brasa, migas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: '🟢 Cerveza 🍻: copita de cerveza que cumple con lo básico; que esté fría.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
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
		question: '¿Dónde está el Jiménez Restaurante?',
		answer:
			'En la Ctra. el Charco, s/n, con código postal 04120: la ficha lo sitúa en el municipio de La Cañada, en la provincia de Almería, y publica la dirección completa como «Ctra. el Charco, s/n, 04120 La Cañada, Almería». Además da el plus code RJM6+6F La Cañada y las coordenadas 36.8330279, -2.3888451.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Cerrado los martes. Los demás días abre de 12:00 a 16:00, solo con turno de comida. Es el horario que publica la ficha consultada el 6 de octubre de 2026: ese martes aparecía cerrado y el lunes 12 de octubre, Fiesta Nacional de España, mantenía su horario con el aviso de que podría ser diferente.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica simplemente como restaurante, sin declarar ningún tipo de cocina concreta, con 4,2 sobre 5 y 902 reseñas. Las tres reseñas que la ficha destaca hablan de paella, pescado, tomate raf, pulpo a la brasa, migas y una tarta de galletas casera. La ficha no publica la carta ni los precios, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección de la Ctra. el Charco, s/n y las coordenadas 36.8330279, -2.3888451. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code RJM6+6F La Cañada.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales: aquí no se enlaza ninguno porque no constan en ella. La única vía publicada es el teléfono 696 10 65 79.',
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
	description:
		'Restaurante en la Ctra. el Charco, s/n, 04120 La Cañada (Almería), con horario de comidas de 12:00 a 16:00 y cerrado los martes.',
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
	/*
	 * Sin `servesCuisine`: la única categoría que publica Google es «Restaurante», que no declara
	 * ningún tipo de cocina. Se prefiere no publicar el campo a inventar una cocina que la ficha
	 * no declara. Tampoco lleva `priceRange`, porque la ficha no publica ningún rango de precios.
	 */
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
