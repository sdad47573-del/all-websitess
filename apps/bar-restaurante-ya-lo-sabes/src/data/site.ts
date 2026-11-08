/**
 * Datos de Bar Restaurante Ya Lo Sabes (Paseo de España, 2 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica carta, precios, ningún distintivo, descripción del titular ni web propia, así
 * que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bar-restaurante-ya-lo-sabes.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Restaurante Ya Lo Sabes',
	shortName: 'Ya Lo Sabes',
	/** Única categoría que publica Google en esta ficha, y por eso la principal. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «P.º de España, 2»: aquí se desarrolla
	 * a «Paseo de España, 2», como en el resto del repositorio.
	 */
	streetAddress: 'Paseo de España, 2',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 692 26 67 32',
	latitude: 37.781195,
	longitude: -3.78909,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6J6+F9 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 729 reseñas). */
	rating: 4.4,
	reviewCount: 729,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Restaurante+Ya+Lo+Sabes/@37.781195,-3.78909,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd70ebb778205:0xfcc19c07e5d2b7e5!8m2!3d37.781195!4d-3.78909!16s%2Fg%2F11f5h799sh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJBYJ3uw7XbQ0R5bfS5Qecwfw&hl=es';

export const phoneHref = 'tel:+34692266732';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * todos los días en dos turnos: mediodía de 11:30 a 16:30 y noche a partir de las 20:00. La noche
 * cierra a las 0:30 de la madrugada de miércoles a domingo, y a las 24:00 (0:00) los lunes y los
 * martes, tal como lo publica la ficha.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados, y el de las 0:30 como
 * 00:30 del mismo día.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '11:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '11:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:30 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '11:30', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:30 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '11:30', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:30 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '11:30', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:30 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '11:30', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:30 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '11:30', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 11:30 a 16:30 y de 20:00 a 0:30; los lunes y martes, hasta las 24:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas: el acceso para sillas de ruedas figura como disponible y el aparcamiento
 * adaptado aparece marcado como no disponible. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la segunda va sin mayúscula inicial
 * y sin punto final). Dos son de 5 sobre 5 y una de 3 sobre 5.
 */
export const reviews = [
	{
		text: 'Son cercanos, amables, cuidados y buena cocina, rápidos y eficaces.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Mucho frio en la terraza. las raciones son más patata frita que otra cosa',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Sitio perfecto para picoteo y echar unas cervezas con los amigos',
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
		question: '¿Dónde está Bar Restaurante Ya Lo Sabes?',
		answer:
			'En el Paseo de España, 2, con código postal 23009, en Jaén (Andalucía). La ficha publica el plus code Q6J6+F9 Jaén y las coordenadas 37.781195, -3.78909.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha publica dos turnos todos los días: mediodía de 11:30 a 16:30 y noche de 20:00 a 0:30. Los lunes y los martes la noche cierra a las 24:00 en vez de a las 0:30. Es el horario de la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como bar restaurante, sin un tipo de cocina concreto: es la única categoría que publica la ficha. Tiene 4,4 sobre 5 con 729 reseñas, y en las reseñas que destaca se habla de un trato cercano y amable, de buena cocina y rapidez, de un sitio perfecto para picotear y echar unas cervezas, y de una queja por el frío en la terraza y por raciones escasas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica ningún sistema de reservas ni una descripción del titular que lo mencione. Esta web no permite reservar: para preguntar por una mesa hay que llamar al 692 26 67 32.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Paseo de España, 2 y las coordenadas 37.781195, -3.78909. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6J6+F9 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: marca como disponible el acceso para sillas de ruedas y señala que no hay aparcamiento adaptado. No publica ninguna otra.',
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
		'Bar restaurante en el Paseo de España, 2 de Jaén, con servicio de 11:30 a 16:30 y de 20:00 a 0:30 todos los días.',
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
	/* Sin `servesCuisine`: Google publica un tipo de establecimiento, no una cocina concreta. */
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
