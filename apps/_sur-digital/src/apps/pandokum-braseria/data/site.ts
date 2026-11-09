/**
 * Datos de Pandokum Braseria (Carrer Migjorn, 2 · 03570 Benidorm, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, así que no hay `descripcionLocal`, ni distintivo
 * junto al nombre, así que tampoco hay `distintivo`: es el caso de `restaurante-sur` o
 * `restaurante-22`. Es la primera web de este grupo en Alicante con una cocina nacional declarada
 * («Restaurante armenio») y la primera con un cierre a las 24:00.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/pandokum-braseria',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Pandokum Braseria',
	shortName: 'Pandokum',
	/** Categoría que publica Google en esta ficha: «Restaurante armenio», la única. */
	category: 'Restaurante armenio',
	categories: ['Restaurante armenio'],
	/**
	 * Dirección publicada en la ficha: Carrer Migjorn, 2 (03570 Benidorm).
	 *
	 * Es el código postal que publica Google en esta ficha (03570), no el 03501/03502/03503 que usan
	 * otras fichas de Benidorm del repositorio: se recoge tal cual y se deja anotado como pendiente
	 * de confirmar con el titular.
	 */
	streetAddress: 'Carrer Migjorn, 2',
	postalCode: '03570',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono publicado en la ficha: es un móvil. */
	phone: '+34 611 70 62 44',
	latitude: 38.5258588,
	longitude: -0.1696283,
	/** Plus code que publica la ficha. */
	plusCode: 'GRGJ+84 Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 248 reseñas). */
	rating: 4.7,
	reviewCount: 248,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Pandokum+Braseria/@38.5258588,-0.1696283,17z/data=!3m1!4b1!4m6!3m5!1s0xd621b03af211f4d:0xdf0f27cbbff7719a!8m2!3d38.5258588!4d-0.1696283!16s%2Fg%2F11t2t7fg4b?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJTR8hrwMbYg0RmnH3v8snD98&hl=es';

/** Es un móvil (611 70 62 44), y así se publica el enlace de llamada. */
export const phoneHref = 'tel:+34611706244';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre y trae
 * los siete días. El local abre en un solo turno, de martes a sábado desde las 13:00 y los domingos
 * desde las 14:00, y cierra a las 24:00; los lunes cierra todo el día.
 *
 * El cierre lo publica Google como «–24:00» y así se recoge, con `close: '24:00'`, como en
 * `a-jalar` y `bar-restaurante-grand-pere`: es la medianoche de ese mismo día.
 *
 * La ficha trae dos marcas de festivo, y ambas son avisos de que el horario podría ser diferente:
 * el viernes 9, «Día de la Comunidad Valenciana», y el lunes 12, «Fiesta Nacional de España».
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
		service: '13:00 – 24:00',
		shifts: [{ open: '13:00', close: '24:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 24:00',
		shifts: [{ open: '13:00', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 24:00',
		shifts: [{ open: '13:00', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 24:00',
		shifts: [{ open: '13:00', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 24:00',
		shifts: [{ open: '13:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '14:00 – 24:00',
		shifts: [{ open: '14:00', close: '24:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 13:00 a 24:00 de martes a sábado y los domingos desde las 14:00; cierra los lunes';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « » y no forman parte del texto que escribió la persona. Se conservan las mayúsculas
 * internas de la primera («Bien aconsejado...»).
 */
export const reviews = [
	{
		text: 'Comida típica armenia/ deliciosa Bien aconsejado y atendido por Karen Volveremos',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Recomiendo a las personas que busquen buena cocina de asados.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Repetiremos y muchas gracias de corazón.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios ni descripción del titular, así que ninguna respuesta
 * inventa un menú, una tarifa ni un texto de presentación.
 */
export const faqs = [
	{
		question: '¿Dónde está Pandokum Braseria?',
		answer:
			'En el Carrer Migjorn, 2, con código postal 03570, en Benidorm (Alicante). La ficha publica el plus code GRGJ+84 Benidorm y las coordenadas 38.5258588, -0.1696283.',
	},
	{
		question: '¿Cuál es el horario de Pandokum Braseria?',
		answer:
			'La ficha publica un solo turno que cierra a las 24:00: de martes a sábado desde las 13:00 y los domingos desde las 14:00. Los lunes cierra todo el día. Es el horario de la ficha consultada el 9 de octubre de 2026, con dos marcas de festivo: el viernes 9, Día de la Comunidad Valenciana, y el lunes 12, Fiesta Nacional de España, ambas con el aviso de que el horario podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante armenio, sin más categorías. Tiene 4,7 sobre 5 con 248 reseñas. En las reseñas que destaca se habla de comida típica armenia, de una buena cocina de asados y de la atención del personal; la ficha no publica ninguna descripción del titular ni una carta, así que esta web no reproduce ninguna.',
	},
	{
		question: '¿Cuánto cuesta comer?',
		answer:
			'La ficha no publica una carta ni un rango de precios, así que esta web no reproduce ninguno. Para saber el menú y el precio de hoy hay que llamar al 611 70 62 44.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 611 70 62 44.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Migjorn, 2 y las coordenadas 38.5258588, -0.1696283. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRGJ+84 Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas.',
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
		'Restaurante armenio en el Carrer Migjorn, 2 de Benidorm, con brasa y asados y horario de 13:00 a 24:00 de martes a sábado, los domingos desde las 14:00.',
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
	/* `servesCuisine` traduce la única categoría que publica Google, «Restaurante armenio». */
	servesCuisine: ['Cocina armenia'],
	/* Sin `priceRange`: la ficha no publica carta ni precios. */
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
