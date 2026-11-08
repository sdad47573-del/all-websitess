/**
 * Datos de Restaurante Quinto Toro (Alameda de Adolfo Suárez · 23003 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-quinto-toro',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Quinto Toro',
	shortName: 'Quinto Toro',
	/**
	 * Única categoría que publica Google en esta ficha: «Restaurante».
	 * No se añade ninguna otra que no aparezca.
	 */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la escribe «Alameda de Adolfo Suarez», sin número de
	 * portal: aquí se restituye la tilde de «Suárez», como en el resto del repositorio, y se deja
	 * sin número porque la ficha no publica ninguno.
	 */
	streetAddress: 'Alameda de Adolfo Suárez',
	postalCode: '23003',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 655 29 45 81',
	latitude: 37.7669465,
	longitude: -3.7826634,
	/** Plus code que publica la ficha. */
	plusCode: 'Q688+QW Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 1.123 reseñas). */
	rating: 4.1,
	reviewCount: 1123,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin ampliarlo ni corregirlo.
 */
export const descripcionLocal =
	'Restaurante situado en la plaza de toros de la capital jiennense con una carta espectacular en un espacio con solera';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Quinto+Toro/@37.7669465,-3.7826634,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd79fb59ffa8b:0x122b6621ad965a0e!8m2!3d37.7669465!4d-3.7826634!16s%2Fg%2F1q5bmn6dn?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJi_qftZ_XbQ0RDlqWrSFmKxI&hl=es';

export const phoneHref = 'tel:+34655294581';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * de martes a sábado con dos turnos, mediodía y noche, y el domingo solo al mediodía; el lunes
 * cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección
 * de horario y no cambia la tabla.
 *
 * El turno de noche se cierra a las 2:00 de la madrugada, así que en los datos estructurados se
 * escribe como cierre a las 02:00.
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
		service: '12:00 – 17:30 · 20:00 – 2:00',
		shifts: [
			{ open: '12:00', close: '17:30' },
			{ open: '20:00', close: '02:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 17:30 · 20:00 – 2:00',
		shifts: [
			{ open: '12:00', close: '17:30' },
			{ open: '20:00', close: '02:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 17:30 · 20:00 – 2:00',
		shifts: [
			{ open: '12:00', close: '17:30' },
			{ open: '20:00', close: '02:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 17:30 · 20:00 – 2:00',
		shifts: [
			{ open: '12:00', close: '17:30' },
			{ open: '20:00', close: '02:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 17:30 · 20:00 – 2:00',
		shifts: [
			{ open: '12:00', close: '17:30' },
			{ open: '20:00', close: '02:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 17:30',
		shifts: [{ open: '12:00', close: '17:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a sábado con mediodía y noche; el domingo, solo al mediodía';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas, y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluidos los espacios antes de
 * las comas de las dos primeras). Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Las raciones son abundantes y todo muy rico ,hay que venir a probar',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Ambiente familiar ,las camareras estupendas ,trato inigualable 10/10',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen lugar para tomar una cerveza fresquita, servicio exquisito',
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
		question: '¿Dónde está Restaurante Quinto Toro?',
		answer:
			'En la Alameda de Adolfo Suárez, con código postal 23003, en Jaén (Andalucía). La ficha publica el plus code Q688+QW Jaén y las coordenadas 37.7669465, -3.7826634.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Quinto Toro?',
		answer:
			'La ficha publica de martes a sábado dos turnos, de 12:00 a 17:30 y de 20:00 a 2:00, y el domingo un solo turno de 12:00 a 17:30. El lunes cierra. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'El titular lo describe en su ficha como «un restaurante situado en la plaza de toros de la capital jiennense con una carta espectacular en un espacio con solera». Google lo clasifica como restaurante, sin un tipo de cocina concreto: es la única categoría que publica. Tiene 4,1 sobre 5 con 1.123 reseñas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 655 29 45 81.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Alameda de Adolfo Suárez y las coordenadas 37.7669465, -3.7826634. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q688+QW Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 655 29 45 81.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Alameda de Adolfo Suárez de Jaén, con servicio de mediodía y noche de martes a sábado y mediodía los domingos.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y no declara cocina. */
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
