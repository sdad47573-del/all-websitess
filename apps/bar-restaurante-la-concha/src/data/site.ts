/**
 * Datos de Bar-Restaurante La Concha (Av. de Jerez, 21 · 11550 Chipiona, Cádiz).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 19 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías,
 * valoración con número de reseñas, coordenadas, plus code, horario semanal, servicios de
 * accesibilidad, el distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta ni precios, así que no se reproduce ninguno
 * de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bar-restaurante-la-concha.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '19 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre tal como lo publica la ficha de Google Maps, salvo el punto final que Google añade
	 * («Bar-Restaurante La Concha.») y que no forma parte del nombre.
	 */
	name: 'Bar-Restaurante La Concha',
	shortName: 'La Concha',
	/** Categoría principal: la primera de las dos que publica Google. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Restaurante especializado en tapas'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Av. de Jerez, 21',
	postalCode: '11550',
	city: 'Chipiona',
	province: 'Cádiz',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 956 37 03 03',
	latitude: 36.7334864,
	longitude: -6.4394072,
	/** Plus code que publica la ficha. */
	plusCode: 'PHM6+96 Chipiona',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 1.388 reseñas). */
	rating: 4.4,
	reviewCount: 1388,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar-Restaurante+La+Concha./@36.7334864,-6.4394072,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e75095b66942f:0xd940e5baee0ac881!8m2!3d36.7334864!4d-6.4394072!16s%2Fg%2F11y0qrws5?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJL5RmWwl1Dg0RgcgK7rrlQNk&hl=es';

export const phoneHref = 'tel:+34956370303';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 19 de octubre de 2026 cubre de lunes a domingo. El local abre todos los días en
 * dos turnos: mediodía de 10:00 a 16:30 y noche de 20:30 a 24:00, salvo el domingo, que empieza a
 * cenar a las 20:00.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '10:00', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '10:00', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '10:00', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '10:00', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '10:00', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '10:00', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '10:00', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Todos los días, mediodía de 10:00 a 16:30 y cena desde las 20:30 (el domingo desde las 20:00)';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas: el acceso, el aseo y los asientos adaptados figuran como disponibles, y el
 * aparcamiento adaptado como no disponible. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (el espacio antes de alguna coma,
 * los puntos suspensivos y el signo de exclamación final). Dos son de 5 sobre 5 y una de 2 sobre 5.
 */
export const reviews = [
	{
		text: 'Hay mucha variedad, pescados ,carnes, arroz ,marisco.......',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La comida buenísima, buen ambiente, los camareros son cercanos y simpáticos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Raciones pequeñas, tapas bien y cerveza 3.20€ una pasada!.',
		rating: 2,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, carta ni precios, así que ninguna respuesta los
 * menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Bar-Restaurante La Concha?',
		answer:
			'En la Av. de Jerez, 21, con código postal 11550, en Chipiona (Cádiz). La ficha publica el plus code PHM6+96 Chipiona y las coordenadas 36.7334864, -6.4394072.',
	},
	{
		question: '¿Cuál es el horario de Bar-Restaurante La Concha?',
		answer:
			'La ficha publica dos turnos todos los días: mediodía de 10:00 a 16:30 y noche de 20:30 a 24:00, salvo el domingo, que empieza a cenar a las 20:00. Es el horario publicado en la ficha consultada el 19 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como bar restaurante y restaurante especializado en tapas. Tiene 4,4 sobre 5 con 1.388 reseñas, y en las reseñas que destaca se citan pescados, carnes, arroz y marisco, además de tapas y cerveza.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 956 37 03 03.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado como no disponible. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 956 37 03 03.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Jerez, 21 y las coordenadas 36.7334864, -6.4394072. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PHM6+96 Chipiona.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 19 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante y restaurante especializado en tapas en la Av. de Jerez, 21 de Chipiona, con comidas de 10:00 a 16:30 y cenas desde las 20:30 todos los días.',
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
	/* Se traduce la categoría que declara comida: la especialidad en tapas. */
	servesCuisine: ['Tapas'],
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
