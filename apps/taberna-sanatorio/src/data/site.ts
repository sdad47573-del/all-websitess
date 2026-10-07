/**
 * Datos de Taberna Sanatorio. (C. Cuatro Torres, 7 · 23001 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha no publica web propia ni perfiles sociales, así que no se enlaza ninguno. Tampoco
 * publica carta ni precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://taberna-sanatorio.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Taberna Sanatorio',
	shortName: 'Sanatorio',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Taberna',
	categories: ['Taberna', 'Restaurante especializado en tapas'],
	/** Dirección publicada en la ficha, con la abreviatura «C.» que usa Google. */
	streetAddress: 'C. Cuatro Torres, 7',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (móvil). */
	phone: '+34 616 66 83 82',
	latitude: 37.7671922,
	longitude: -3.7866468,
	/** Plus code que publica la ficha. */
	plusCode: 'Q687+V8 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,6 con 330 reseñas). */
	rating: 4.6,
	reviewCount: 330,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+Sanatorio/@37.7671922,-3.7866468,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd775026317df:0x8720ebea7072e0d0!8m2!3d37.7671922!4d-3.7866468!16s%2Fg%2F11bzy7qkv0?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ3xdjAnXXbQ0R0OBycOrrIIc&hl=es';

export const phoneHref = 'tel:+34616668382';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local
 * abre de martes a sábado con dos turnos, mediodía y noche, y cierra domingo y lunes. La cena
 * termina a medianoche los días de diario y a las 0:30 el viernes y el sábado.
 *
 * El lunes 12, Fiesta Nacional de España, aparece cerrado con el aviso de que podría ser diferente.
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
		service: '12:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:00 · 20:30 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:00 · 20:30 – 0:30',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:30', close: '00:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:00 · 20:30 – 0:30',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '20:30', close: '00:30' },
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
export const hoursSummary = 'De martes a sábado · mediodía de 12:00 a 16:00 y cena desde las 20:30';

/**
 * Servicios de accesibilidad que publica la ficha: el acceso y los asientos adaptados están
 * disponibles y el aparcamiento adaptado, marcado como no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta (todas de 5 sobre 5) y se
 * citan tal cual, sin corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Buena cocina, rapidez en el servicio y de cerveza ofrece Estrella Galicia.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen servicio y cocina excelente Recomiendo alitas de pollo en salsa Thai.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Además, la cocina es fantástica, con raciones deliciosas y bien presentadas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios ni web propia, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está la Taberna Sanatorio?',
		answer:
			'En la C. Cuatro Torres, 7, con código postal 23001, en Jaén (Andalucía). La ficha publica el plus code Q687+V8 Jaén y las coordenadas 37.7671922, -3.7866468.',
	},
	{
		question: '¿Cuál es el horario de la Taberna Sanatorio?',
		answer:
			'Abre de martes a sábado en dos turnos: mediodía de 12:00 a 16:00 y noche desde las 20:30, que termina a medianoche los días de diario y a las 0:30 el viernes y el sábado. Cierra domingo y lunes. Es el horario publicado en la ficha consultada el 7 de octubre de 2026, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como taberna y restaurante especializado en tapas, con 4,6 sobre 5 y 330 reseñas. La ficha no publica la carta, pero en las reseñas que destaca se habla de cocina, rapidez en el servicio y de las alitas de pollo en salsa Thai.',
	},
	{
		question: '¿Abre los domingos o los lunes?',
		answer:
			'No: en el horario que publica la ficha, la taberna cierra domingo y lunes. Abre de martes a sábado, con mediodía y noche.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Cuatro Torres, 7 y las coordenadas 37.7671922, -3.7866468. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q687+V8 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso y los asientos adaptados para sillas de ruedas, y como no disponible el aparcamiento adaptado.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 7 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Taberna y restaurante especializado en tapas en la C. Cuatro Torres, 7 de Jaén, con mediodía y cena de martes a sábado.',
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
	acceptsReservations: true,
	/** Traduce a cocinas las categorías que publica Google. No se declara ninguna otra. */
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
