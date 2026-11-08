/**
 * Datos de Restaurante @ La Marmita de Ahlam (Paraje El Encinar, 04479 Benecid, Almería).
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
	siteUrl: 'https://www.sur-digital.com/restaurante-la-marmita-de-ahlam',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '6 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre tal como lo publica la ficha de Google Maps, con su arroba: «Restaurante @ La Marmita
	 * de Ahlam». En la interfaz se usa «La Marmita de Ahlam» (el dato estructurado y los enlaces
	 * conservan el nombre completo), y la decisión queda documentada en el README.
	 */
	name: 'Restaurante @ La Marmita de Ahlam',
	shortName: 'La Marmita de Ahlam',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo'],
	/**
	 * La ficha escribe la dirección como «Paraje El Encinar, 04479 Benecid, Almería». Es un paraje
	 * rural, sin número de portal, así que se publica la vía sin número (mismo criterio que La
	 * Dorada, que publicaba su paseo sin número).
	 *
	 * Benecid es una pedanía del municipio de Fondón, en la comarca de la Alpujarra Almeriense,
	 * con código postal propio 04479 (Wikipedia, SIMA de la Junta de Andalucía y Correos). La web
	 * usa «Benecid» en la dirección, que es el municipio que publican tanto la ficha de Google
	 * como sus propios datos estructurados, y menciona la pedanía en el texto.
	 */
	streetAddress: 'Paraje El Encinar',
	postalCode: '04479',
	city: 'Benecid',
	province: 'Almería',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. Es un móvil, como el de la Brasería El Río. */
	phone: '+34 643 04 51 25',
	latitude: 36.9906678,
	longitude: -2.860187,
	/** Valoración de la ficha en la fecha de consulta (4,4 con 116 reseñas). */
	rating: 4.4,
	reviewCount: 116,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del restaurante, con su identificador de lugar. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+@+La+Marmita+de+Ahlam/@36.9906678,-2.860187,17z/data=!3m1!4b1!4m6!3m5!1s0xd70394119a8179b:0xe74f6e91e23e2f82!8m2!3d36.9906678!4d-2.860187!16s%2Fg%2F11qs3mcn0h?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJmxeoGUE5cA0Rgi8-4pFuT-c&hl=es';

export const phoneHref = 'tel:+34643045125';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Cierra martes y miércoles. El resto de días abre un único turno continuo, de 13:00 a 23:00
 * (comida y cena sin pausa). El lunes de la semana de la consulta era el festivo del 12 de
 * octubre, Fiesta Nacional de España, y la ficha lo marcaba **abierto** con su horario habitual
 * pero con el aviso de que «el horario podría ser diferente», así que se publica abierto **con la
 * advertencia** de que conviene confirmarlo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 23:00',
		shifts: [{ open: '13:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De jueves a lunes, de 13:00 a 23:00 · cierra martes y miércoles';

/**
 * Extractos literales de reseñas publicadas en la ficha de Google Maps.
 *
 * Google destaca tres: «Pizzas muy ricas,está vez han sido rapidos» (se cita tal cual, con sus
 * erratas y su puntuación), «Totalmente recomendable y para repetir.» y «Que tristeza ver las
 * mesas sin servir y los dueños comiendo tan tranquilos...». La tercera es una queja, así que no
 * se publica (mismo criterio que Club de Mar, que descartó la suya con este mismo comentario) y
 * aquí van las dos favorables.
 */
export const reviews = [
	{
		text: 'Pizzas muy ricas,está vez han sido rapidos',
		source: 'Reseña de la ficha de Google Maps',
	},
	{
		text: 'Totalmente recomendable y para repetir.',
		source: 'Reseña de la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * No hay carta ni lista de servicios verificada, así que ninguna respuesta habla de platos,
 * precios, terraza, reparto ni reservas más allá de lo que dicen la ficha y sus reseñas. Las
 * pizzas se mencionan porque lo dice una reseña destacada de la propia ficha, no porque la web
 * affirme que hay una carta de pizzas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante @ La Marmita de Ahlam?',
		answer:
			'En el paraje El Encinar, 04479 Benecid (Almería). Benecid es una pedanía del municipio de Fondón, en la comarca de la Alpujarra Almeriense, y tiene código postal propio. Puedes abrir la ubicación exacta en Google Maps o llamar al 643 04 51 25 antes de ir.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha de Google Maps publica un único turno continuo de 13:00 a 23:00 de jueves a lunes (comida y cena seguidas) y cierre los martes y miércoles. La consulta coincidió con la semana del 12 de octubre, Fiesta Nacional de España, y la ficha marcaba el lunes abierto con el aviso de que el horario podría ser diferente, así que conviene confirmar por teléfono los festivos.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante mediterráneo, con 4,4 sobre 5 y 116 reseñas. Sus reseñas destacadas hablan de pizzas muy ricas y de un sitio totalmente recomendable y para repetir. La carta no está publicada, así que para saber qué hay hoy lo mejor es llamar.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no ofrece reserva en línea y el restaurante no publica web propia ni perfiles de redes sociales. La única vía publicada es el teléfono 643 04 51 25.',
	},
	{
		question: '¿Cómo se llega hasta el paraje El Encinar?',
		answer:
			'Está a las afueras de Benecid, a los pies de la sierra en la Alpujarra Almeriense. La web enlaza las indicaciones por carretera con la coordenada exacta de la ficha (36.9906678, -2.860187) y el mapa incrustado muestra el punto. Si dudas al llegar al pueblo, llama al 643 04 51 25.',
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
	description: 'Restaurante mediterráneo en el paraje El Encinar, 04479 Benecid, Almería.',
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
	// Se traduce la categoría que publica Google, sin añadir ninguna más.
	servesCuisine: ['Cocina mediterránea'],
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
