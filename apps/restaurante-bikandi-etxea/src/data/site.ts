/**
 * Datos de Restaurante Bikandi Etxea (Campo de Volantín Pasealekua, 4 · 48007 Bilbao, Bizkaia).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad,
 * descripción del titular y reseñas destacadas con texto.
 *
 * La ficha no publica precios ni carta, así que no se reproduce ninguno. Tampoco muestra ningún
 * distintivo junto al nombre.
 *
 * La dirección se publica en euskera como «Campo de Volantín Pasealekua, 4» («pasealekua» es
 * «paseo»): aquí se reproduce tal cual, sin traducir la voz del titular ni normalizarla, y se
 * documenta la equivalencia. La provincia se publica como «Biscay»/«Bizkaia»: aquí se escribe
 * «Bizkaia».
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-bikandi-etxea.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Bikandi Etxea',
	shortName: 'Bikandi Etxea',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Restaurante vasco» y
	 * «Restaurante».
	 */
	category: 'Restaurante vasco',
	categories: ['Restaurante vasco', 'Restaurante'],
	streetAddress: 'Campo de Volantín Pasealekua, 4',
	postalCode: '48007',
	city: 'Bilbao',
	/** La ficha publica «Biscay»/«Bizkaia»: aquí se escribe «Bizkaia». */
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 690 13 50 54',
	latitude: 43.264595,
	longitude: -2.924488,
	/** Plus code que publica la ficha («737G+R6 Bilbao» en corto). */
	plusCode: '8CMV737G+R6',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 850 reseñas). */
	rating: 4.6,
	reviewCount: 850,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Bikandi+Etxea/@43.264595,-2.924488,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4fc5a3abf4db:0x83ab217b02c0ee6e!8m2!3d43.264595!4d-2.924488!16s%2Fg%2F1tdmrcg9?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ2_Sro8VPTg0Rbu7AAnshq4M&hl=es';

export const phoneHref = 'tel:+34690135054';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Descripción publicada por el propio local en su ficha.
 *
 * Se reproduce tal cual: es la voz del titular, no de esta web.
 */
export const descripcionLocal =
	'Bikandi Etxea, gastronomía vasca en un ambiente acogedor y familiar. Nos apasiona el producto de cercanía y el respeto por las recetas de toda la vida, aquellas que se cocinan sin prisas y con mucho mimo.\n¿Qué te ofrecemos?\n• Pescados del día: Directos de la lonja a nuestra cocina.\n• Cocina de Temporada: Entrantes y guisos elaborados con productos de nuestra tierra.\n• Bodega Seleccionada: Una cuidada carta de vinos para maridar cada bocado.';

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 11 de octubre de 2026 cubre del domingo 11 al sábado 17 de octubre. El local
 * cierra los domingos y los lunes y abre el resto de la semana: de martes a jueves solo por la
 * mañana (de 9:00 a 15:30), el viernes en dos turnos (de 9:00 a 15:30 y de 20:00 a 22:00) y el
 * sábado en dos turnos (de 13:00 a 16:00 y de 20:00 a 22:00). En el momento de la consulta la
 * ficha mostraba «Cerrado · Apertura: 9:00 (mar)» (domingo).
 *
 * El lunes lleva el aviso de «Horario de Fiesta Nacional de España» (12 de octubre).
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
		service: '9:00 – 15:30',
		shifts: [{ open: '09:00', close: '15:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 15:30',
		shifts: [{ open: '09:00', close: '15:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 15:30',
		shifts: [{ open: '09:00', close: '15:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 15:30 · 20:00 – 22:00',
		shifts: [
			{ open: '09:00', close: '15:30' },
			{ open: '20:00', close: '22:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:00 · 20:00 – 22:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '20:00', close: '22:00' },
		],
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
export const hoursSummary = 'De martes a sábado · domingo y lunes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cinco entradas y las cinco figuran como **no disponibles**: ni acceso, ni aparcamiento, ni
 * aseo, ni asientos adaptados para sillas de ruedas, ni bucle magnético asistencial. Es la
 * primera ficha del repositorio con toda la accesibilidad en negativo, y la web lo muestra tal
 * cual, sin suavizarlo: cada entrada sale marcada como no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: false },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Reseñas destacadas con texto que publica la ficha.
 *
 * Son las tres que destaca la respuesta de la ficha, las tres de 5 sobre 5. La respuesta no trae
 * los nombres de quienes las firman (solo sus avatares), así que se citan sin autor, con su
 * puntuación y su enlace al listado completo. Se reproducen tal cual, sin corregir su ortografía.
 */
export const resenas = [
	{
		text: 'Pinchos y menús de comida casera de buena calidad',
		stars: 5,
	},
	{
		text: 'Son muy buena gente y hacen la mejor tortilla de bonito que he comodo jamás.',
		stars: 5,
	},
	{
		text: 'Los dueños son encantadores, ya hemos estado un par de veces y repetiremos.',
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
		question: '¿Dónde está Restaurante Bikandi Etxea?',
		answer:
			'En Campo de Volantín Pasealekua, 4, con código postal 48007, en Bilbao (Bizkaia, País Vasco). La ficha publica las coordenadas 43.264595, -2.924488 y el plus code 8CMV737G+R6.',
	},
	{
		question: '¿Cuál es el horario de Bikandi Etxea?',
		answer:
			'La ficha publica este horario: cierra los domingos y los lunes y abre de martes a jueves solo por la mañana (de 9:00 a 15:30), el viernes en dos turnos (de 9:00 a 15:30 y de 20:00 a 22:00) y el sábado en dos turnos (de 13:00 a 16:00 y de 20:00 a 22:00). Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de horario de Fiesta Nacional de España el lunes 12.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante vasco y restaurante, y el propio local habla de pescados del día directos de la lonja, cocina de temporada con productos de la tierra y bodega seleccionada. Tiene 4,6 sobre 5 con 850 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 690 13 50 54.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Campo de Volantín Pasealekua, 4 y las coordenadas 43.264595, -2.924488. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cinco entradas de accesibilidad y las cinco figuran como no disponibles: ni acceso, ni aparcamiento, ni aseo, ni asientos adaptados para sillas de ruedas, ni bucle magnético asistencial. Si necesitas accesibilidad, llama al 690 13 50 54 antes de ir.',
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
		'Restaurante vasco en Campo de Volantín Pasealekua, 4, en Bilbao: producto de cercanía y recetas de toda la vida, de martes a sábado.',
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
	/* `servesCuisine` sale de la primera categoría de la ficha («Restaurante vasco»). */
	servesCuisine: ['Vasca'],
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
