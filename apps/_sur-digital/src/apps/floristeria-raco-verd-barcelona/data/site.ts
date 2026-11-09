/**
 * Datos de Floristería Racó Verd Barcelona
 * (Carrer de la Diputació, 222 · 08011 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas y 3 extractos destacados, coordenadas, plus code, horario semanal y
 * accesibilidad.
 *
 * La ficha no publica descripción del titular ni web propia, así que no se reproduce ninguna de
 * ellas. Los 3 extractos de reseñas se reproducen literalmente y se citan como tales en la web.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/floristeria-raco-verd-barcelona',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Racó Verd Barcelona',
	shortName: 'Racó Verd',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer de la Diputació, 222, Eixample, 08011
	 * Barcelona». «Eixample» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer de la Diputació, 222',
	district: 'Eixample',
	postalCode: '08011',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 652 84 36 17',
	latitude: 41.3865616,
	longitude: 2.1622224,
	/** Plus code que publica la ficha (completo: 8FH495P6+JV). */
	plusCode: '95P6+JV Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 163 reseñas). */
	rating: 4.8,
	reviewCount: 163,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Rac%C3%B3+Verd+Barcelona/@41.3865616,2.1622224,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a28c7d4d6155:0xca5abd0ea01d265e!8m2!3d41.3865616!4d2.1622224!16s%2Fg%2F11c6mb23kw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJVWFNfYyipBIRXiYdoA69Wso&hl=es';

export const phoneHref = 'tel:+34652843617';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a jueves abre de 11:30 a 21:30; viernes y sábado cierra más tarde, a las 22:00; el
 * domingo abre solo al mediodía, de 11:30 a 15:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:30 – 21:30',
		shifts: [{ open: '11:30', close: '21:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:30 – 21:30',
		shifts: [{ open: '11:30', close: '21:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:30 – 21:30',
		shifts: [{ open: '11:30', close: '21:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:30 – 21:30',
		shifts: [{ open: '11:30', close: '21:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:30 – 22:00',
		shifts: [{ open: '11:30', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:30 – 22:00',
		shifts: [{ open: '11:30', close: '22:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:30 – 15:00',
		shifts: [{ open: '11:30', close: '15:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a jueves de 11:30 a 21:30; viernes y sábado hasta las 22:00; domingo de 11:30 a 15:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El acceso para sillas de ruedas figura como disponible; el aparcamiento adaptado figura como
 * no disponible («No hay aparcamiento accesible con silla de ruedas»). La ficha no publica
 * ningún otro.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Muy amables, muy bien de precio, el ramo muy bonito i lo han hecho muy rapido!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Compro desde 2 años ahí los flores para mi novia y son cada vez súper bonitos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Gran servicio ♥️ Muchas gracias',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción, web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Racó Verd Barcelona?',
		answer:
			'En el Carrer de la Diputació, 222, con código postal 08011, en Barcelona, en Eixample. Publica el plus code 95P6+JV Barcelona y las coordenadas 41.3865616, 2.1622224.',
	},
	{
		question: '¿Cuál es el horario de Floristería Racó Verd Barcelona?',
		answer:
			'La ficha publica de lunes a jueves de 11:30 a 21:30, viernes y sábado de 11:30 a 22:00 y domingo de 11:30 a 15:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. La ficha no publica descripción del titular, así que esta web no reproduce ninguna: las reseñas que destaca hablan de ramos bonitos a buen precio hechos muy rápido, de flores para la novia cada vez súper bonitas y de gran servicio.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 652 84 36 17. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de la Diputació, 222, en Eixample de Barcelona, y las coordenadas 41.3865616, 2.1622224. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 95P6+JV Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad: el acceso para sillas de ruedas figura como disponible y el aparcamiento adaptado figura como no disponible. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 163 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de ramo bonito a buen precio hecho muy rápido, de flores para la novia cada vez súper bonitas desde hace 2 años y de gran servicio. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en el Carrer de la Diputació de Barcelona, en Eixample. Ramos bonitos a buen precio, según sus reseñas.',
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
