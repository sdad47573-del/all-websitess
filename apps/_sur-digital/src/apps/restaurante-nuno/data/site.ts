/**
 * Datos de Restaurante Nuño (Puerto de la Ragua, s/n, 04479, Almería).
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
	siteUrl: 'https://www.sur-digital.com/restaurante-nuno',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Nuño',
	shortName: 'Nuño',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * La ficha publica la dirección como «Puerto de la Ragua, s/n, 04479, Almería»: se conserva tal
	 * cual, con la abreviatura «s/n» («sin número»), que es como describe Google un local sin número
	 * de portal en una vía.
	 *
	 * Google no publica municipio en la dirección (lo deja vacío), pero el propio plus code que
	 * calcula para estas coordenadas dice «22G4+57 Bayárcal», y la estación recreativa del Puerto de
	 * la Ragua se reparte entre Ferreira y Nevada (Granada) y Bayárcal (Almería). Como la ficha da
	 * la provincia de Almería y el código postal 04479 —el de Bayárcal—, el municipio se publica
	 * como Bayárcal y queda documentado en el README.
	 */
	streetAddress: 'Puerto de la Ragua, s/n',
	postalCode: '04479',
	city: 'Bayárcal',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. Es un móvil, como el de otras fichas del repositorio. */
	phone: '+34 699 23 10 81',
	latitude: 37.0254001,
	longitude: -2.9943662,
	/** Valoración de la ficha en la fecha de consulta (4,1 con 257 reseñas). */
	rating: 4.1,
	reviewCount: 257,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Nu%C3%B1o/@37.0254001,-2.9943662,17z/data=!3m1!4b1!4m6!3m5!1s0xd7030c8c9bee21b:0x5c382efe9f3dfcce!8m2!3d37.0254001!4d-2.9943662!16s%2Fg%2F1hc27s09l?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJG-K-ycgwcA0Rzvw9n_4uOFw&hl=es';

export const phoneHref = 'tel:+34699231081';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días, con un turno continuo de 9:00 a 16:00 de lunes a sábado y de 9:00 a 18:00 el
 * domingo: es la primera ficha del repositorio **sin ningún día de cierre**. El lunes de la semana
 * de la consulta era además el festivo del 12 de octubre, Fiesta Nacional de España: la ficha lo
 * daba abierto con su horario habitual y con el aviso de que «el horario podría ser diferente», así
 * que se publica abierto **con la advertencia**.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 18:00',
		shifts: [{ open: '09:00', close: '18:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 9:00 a 16:00 de lunes a sábado, y el domingo hasta las 18:00 · sin día de cierre';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Google destaca dos, pero **una es una queja** («Pensando que no podría ser peor, nos traen el
 * primer plato frío (era sopa).»), así que no se publica (mismo criterio que Club de Mar y que La
 * Marmita de Ahlam, que descartaron la suya). Queda solo la favorable, que se cita tal cual.
 */
export const reviews = [
	{
		text: 'Trato amable, tostada más que generosa, lugar limpio, fresco y cuidado.',
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
		question: '¿Dónde está el Restaurante Nuño?',
		answer:
			'En el puerto de la Ragua, sin número de portal, con código postal 04479. El puerto está en Sierra Nevada, en el límite entre Granada y Almería, y la parte almeriense depende del municipio de Bayárcal, que es el que corresponde a esta dirección. Puedes abrir la ubicación exacta en Google Maps o llamar al 699 23 10 81 antes de ir, sobre todo en invierno, cuando la carretera puede estar afectada por la nieve.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps publica un turno continuo de 9:00 a 16:00 de lunes a sábado y de 9:00 a 18:00 el domingo. No marca ningún día de cierre. El lunes 12 de octubre de 2026 coincidía con la Fiesta Nacional de España y la ficha lo daba abierto con el aviso de que el horario podía ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como restaurante, sin indicar ningún tipo de cocina concreto, con 4,1 sobre 5 y 257 reseñas. Su reseña destacada habla del trato amable y de una tostada «más que generosa» en un lugar limpio y cuidado. La ficha no publica la carta, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Cómo se llega hasta el puerto de la Ragua?',
		answer:
			'Es un puerto de montaña de Sierra Nevada, a unos 2.000 metros de altitud, entre las provincias de Granada y Almería. La web enlaza las indicaciones por carretera con la coordenada exacta de la ficha (37.0254001, -2.9943662) y el mapa incrustado muestra el punto. En invierno conviene comprobar el estado de la carretera antes de subir.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 699 23 10 81.',
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
	description: 'Restaurante en el puerto de la Ragua, en Sierra Nevada (Bayárcal, Almería).',
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
	/*
	 * Sin `servesCuisine`: la única categoría que publica Google es «Restaurante», que no dice ningún
	 * tipo de cocina. Es la primera web del repositorio que lo omite, y el motivo queda explicado en
	 * el README: se prefiere no publicar el campo a inventar una cocina que la ficha no declara.
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
