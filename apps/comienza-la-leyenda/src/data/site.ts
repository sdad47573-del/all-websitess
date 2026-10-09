/**
 * Datos de Restaurante-cafetería Comienza la Leyenda (C. del Sauce, 42 · 30320 Fuente Alamo).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://comienza-la-leyenda.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante-cafetería Comienza la Leyenda',
	shortName: 'Comienza la Leyenda',
	/**
	 * Categorías que publica Google en esta ficha: «Restaurante» (la primera y la que se usa como
	 * categoría principal) y «Restaurante mediterráneo».
	 */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha (Google la abrevia como «C. del Sauce, 42»). */
	streetAddress: 'C. del Sauce, 42',
	postalCode: '30320',
	/**
	 * Municipio tal como lo publica la ficha: «Fuente Alamo», sin la tilde que lleva el topónimo
	 * oficial (Fuente Álamo de Murcia). Se reproduce literal, como el resto de datos de la ficha.
	 */
	city: 'Fuente Alamo',
	province: 'Murcia',
	region: 'Murcia',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 968 59 66 98',
	latitude: 37.7137442,
	longitude: -1.1744465,
	/** Plus code que publica la ficha. */
	plusCode: 'PR7G+F6 Fuente Alamo',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 703 reseñas). */
	rating: 4.7,
	reviewCount: 703,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil y se reproduce literal, sin corregirlo ni
 * trocearlo (la ficha lo publica como un único párrafo sin tildes en «purificar»).
 */
export const descripcionLocal =
	'El restaurante dispone de un purificar del aire que limpia el ambiente al 99% los sábados hacemos menú especial, y en la semana tenemos menú del día y aparte hacemos puntas de bocadillo de todo tipo, el local dispone de una amplia terraza.';

/** Distintivo que Google muestra junto al nombre en la ficha. */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante-cafeter%C3%ADa+Comienza+la+Leyenda/@37.7137442,-1.1744465,17z/data=!3m1!4b1!4m6!3m5!1s0xd636181e8e2bbc1:0xafca39c29a6cc367!8m2!3d37.7137442!4d-1.1744465!16s%2Fg%2F11f3xnnw1_?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJwbvi6IFhYw0RZ8NsmsI5yq8&hl=es';

export const phoneHref = 'tel:+34968596698';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre de
 * lunes a viernes de 7:00 a 16:30, los sábados de 7:30 a 16:00 y cierra los domingos.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla.
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
		service: '7:00 – 16:30',
		shifts: [{ open: '07:00', close: '16:30' }],
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
		service: '7:00 – 16:30',
		shifts: [{ open: '07:00', close: '16:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '7:30 – 16:00',
		shifts: [{ open: '07:30', close: '16:00' }],
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
	'Abierto de lunes a sábado (7:00 – 16:30 entre semana y 7:30 – 16:00 los sábados); domingos cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas, y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
 * los asientos adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la primera no termina en punto).
 * Una es de 5 sobre 5, otra de 4 y otra de 3.
 */
export const reviews = [
	{
		text: 'Bocadillos muy ricos y con opción sin gluten que agradecemos mucho los celíacos',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Unos bocatas deliciosos para almorzar, recomiendo el de buey',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'También puso unas empanadillas fritas que estaban muy ricas.',
		rating: 4,
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
		question: '¿Dónde está Comienza la Leyenda?',
		answer:
			'En la C. del Sauce, 42, con código postal 30320, en Fuente Alamo (Murcia). La ficha publica el plus code PR7G+F6 Fuente Alamo y las coordenadas 37.7137442, -1.1744465.',
	},
	{
		question: '¿Cuál es el horario de Comienza la Leyenda?',
		answer:
			'La ficha lo da abierto de lunes a viernes de 7:00 a 16:30, los sábados de 7:30 a 16:00, y cerrado los domingos. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica a la vez como restaurante y restaurante mediterráneo. En su descripción el local habla de menú del día entre semana, menú especial los sábados y puntas de bocadillo de todo tipo. Tiene 4,7 sobre 5 con 703 reseñas, y en las que destaca se habla de los bocadillos (con opción sin gluten), del de buey y de unas empanadillas fritas.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Google muestra junto al nombre el distintivo «Brunch», el único de ese tipo que publica la ficha. Se recoge tal cual, sin ampliarlo ni interpretarlo: para cualquier detalle, conviene llamar al 968 59 66 98.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 968 59 66 98.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. del Sauce, 42 y las coordenadas 37.7137442, -1.1744465, en Fuente Alamo (Murcia). Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PR7G+F6 Fuente Alamo.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 9 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante-cafetería de cocina mediterránea en la C. del Sauce, 42 de Fuente Alamo, con menú del día entre semana y amplia terraza.',
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
	servesCuisine: ['Mediterránea'],
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	acceptsReservations: true,
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
