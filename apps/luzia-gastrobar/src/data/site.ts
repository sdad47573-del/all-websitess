/**
 * Datos de Luzia Gastrobar (Paseo la Cuba, 33 · 02005 Albacete).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad,
 * descripción del titular y reseñas destacadas con texto.
 *
 * La ficha no publica precios ni carta, así que no se reproduce ninguno. Tampoco muestra ningún
 * distintivo junto al nombre.
 *
 * La dirección se publica como «P.º la Cuba, 33»: aquí se escribe «Paseo la Cuba, 33», como el
 * resto de normalizaciones del repositorio (donde «C.» pasa a «Calle»). El código postal 02005 y
 * el municipio (Albacete) se publican tal cual.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://luzia-gastrobar.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Luzia Gastrobar',
	shortName: 'Luzia',
	/** La ficha publica una sola categoría: «Restaurante». */
	category: 'Restaurante',
	categories: ['Restaurante'],
	streetAddress: 'Paseo la Cuba, 33',
	postalCode: '02005',
	city: 'Albacete',
	province: 'Albacete',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 614 06 58 90',
	latitude: 39.0043558,
	longitude: -1.8591934,
	/** Plus code que publica la ficha («243R+P8 Albacete» en corto). */
	plusCode: '8CFW243R+P8',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 157 reseñas). */
	rating: 4.8,
	reviewCount: 157,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Luzia+Gastrobar/@39.0043558,-1.8591934,17z/data=!3m1!4b1!4m6!3m5!1s0xd665ffddd854b47:0xa24d36f52d34a8dd!8m2!3d39.0043558!4d-1.8591934!16s%2Fg%2F11ml44_nz6?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJR0uF3f1fZg0R3ag0LfU2TaI&hl=es';

export const phoneHref = 'tel:+34614065890';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Descripción publicada por el propio local en su ficha.
 *
 * Se reproduce tal cual, con su errata («modernidad qué abraza lo auténtico»), sin corregirla:
 * es la voz del titular, no de esta web.
 */
export const descripcionLocal =
	'LUZIA Gastrobar es un espacio donde la cocina de siempre se encuentra con una mirada actual. Nuestro equipo reinterpreta recetas tradicionales con técnicas y presentaciones contemporáneas, creando platos que respetan el sabor de toda la vida mientras sorprenden con un toque moderno.\n\nOfrecemos servicio de comidas y cenas en un ambiente fresco, luminoso y acogedor, pensado para disfrutar sin prisas. Cada detalle —desde la música hasta la puesta en escena de los platos— está diseñado para que la experiencia sea cercana, vibrante y memorable.\n\nAquí se viene a compartir, a descubrir y a saborear.\nLUZIA es tradición que evoluciona, modernidad qué abraza lo auténtico.';

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local
 * cierra los lunes y abre el resto de la semana: de domingo a miércoles solo mediodía (de 13:00
 * a 17:00) y de jueves a sábado en dos turnos, mediodía (13:00–17:00) y noche (el jueves hasta
 * las 23:00 y el viernes y el sábado hasta las 24:00). En el momento de la consulta la ficha
 * mostraba «Abierto · Cierre: 17:00» (domingo).
 *
 * La ficha publica el cierre del viernes y el sábado como las 24:00, así que en los datos
 * estructurados el cierre se declara como `24:00`, tal como lo publica Google.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente.
 *
 * Un día sin tramos (`shifts: []`) es un día cerrado.
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
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 17:00 · 20:00 – 23:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:00', close: '24:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De martes a domingo · lunes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas con texto que publica la ficha.
 *
 * Son las tres que destaca la respuesta de la ficha, las tres de 5 sobre 5. La respuesta no trae
 * los nombres de quienes las firman (solo sus avatares), así que se citan sin autor, con su
 * puntuación y su enlace al listado completo.
 */
export const resenas = [
	{
		text: 'Muy contentos y la comida exquisita con raciones muy generosas.',
		stars: 5,
	},
	{
		text: 'Arroces increíbles¡felicidades al chef!',
		stars: 5,
	},
	{
		text: 'Arroz de codillo y alcachofas espectacular.',
		stars: 5,
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios ni carta, así que ninguna respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Luzia Gastrobar?',
		answer:
			'En el Paseo la Cuba, 33, con código postal 02005, en Albacete (Castilla-La Mancha). La ficha publica las coordenadas 39.0043558, -1.8591934 y el plus code 8CFW243R+P8.',
	},
	{
		question: '¿Cuál es el horario de Luzia Gastrobar?',
		answer:
			'La ficha publica este horario: cierra los lunes y abre de domingo a miércoles solo al mediodía (de 13:00 a 17:00) y de jueves a sábado en dos turnos (mediodía de 13:00 a 17:00 y noche: el jueves hasta las 23:00 y el viernes y el sábado hasta las 24:00). Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y el propio local dice que reinterpreta recetas tradicionales con técnicas y presentaciones contemporáneas, con servicio de comidas y cenas. Tiene 4,8 sobre 5 con 157 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 614 06 58 90.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Paseo la Cuba, 33 y las coordenadas 39.0043558, -1.8591934. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 11 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en el Paseo la Cuba, 33 de Albacete: cocina tradicional reinterpretada, de martes a domingo.',
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
	/* Sin `servesCuisine`: la única categoría de la ficha es el genérico «Restaurante», que no es
	   una cocina, y la ficha no publica otra. */
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
