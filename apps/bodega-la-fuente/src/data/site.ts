/**
 * Datos de Bodega La Fuente (C. Jara, 27 · 30201 Cartagena).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta, precios ni web propia, así que no se reproduce
 * ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bodega-la-fuente.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bodega La Fuente',
	shortName: 'La Fuente',
	/**
	 * Categorías que publica Google en esta ficha. La primera, «Bar de tapas», se usa como
	 * categoría principal; las demás se enumeran tal cual.
	 */
	category: 'Bar de tapas',
	categories: [
		'Bar de tapas',
		'Bar',
		'Bar restaurante',
		'Restaurante',
		'Cafetería',
		'Pizzería',
		'Restaurante o cafetería',
		'Tienda de vinos',
	],
	/** Dirección publicada en la ficha (Google la abrevia como «C. Jara, 27»). */
	streetAddress: 'C. Jara, 27',
	postalCode: '30201',
	city: 'Cartagena',
	province: 'Murcia',
	region: 'Murcia',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 868 04 73 22',
	latitude: 37.601431,
	longitude: -0.9854151,
	/** Plus code que publica la ficha. */
	plusCode: 'J227+HR Cartagena',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 3.888 reseñas). */
	rating: 4.2,
	reviewCount: 3888,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bodega+La+Fuente/@37.601431,-0.9854151,17z/data=!3m1!4b1!4m6!3m5!1s0xd6342289601db29:0x4aa97a5c82ed9033!8m2!3d37.601431!4d-0.9854151!16s%2Fg%2F1pxwbk2tp?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJKdsBlihCYw0RM5Dtglx6qUo&hl=es';

export const phoneHref = 'tel:+34868047322';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre
 * todos los días con dos turnos: mediodía de 11:00 a 17:00 y noche desde las 19:30. Los viernes y
 * sábados alarga la noche hasta las 0:30; el resto de días cierra a las 24:00.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla.
 *
 * Los cierres de noche se escriben como 00:00 (24:00) y 00:30 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '11:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '11:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '11:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '11:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 17:00 · 19:30 – 0:30',
		shifts: [
			{ open: '11:00', close: '17:00' },
			{ open: '19:30', close: '00:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 17:00 · 19:30 – 0:30',
		shifts: [
			{ open: '11:00', close: '17:00' },
			{ open: '19:30', close: '00:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '11:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abierto todos los días; mediodía de 11:00 a 17:00 y noches desde las 19:30 (viernes y sábados hasta las 0:30)';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas: el acceso y el aseo adaptados figuran como disponibles, y el aparcamiento y
 * los asientos adaptados como no disponibles.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 4.
 */
export const reviews = [
	{
		text: 'Tapas espectaculares, anchoas deliciosas, cerveza fría y trato excelente.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Recomiendo la pizza de atún y el montadito de salmón y queso.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un buen sitio para empezar la noche o quedar con amigos para tapear y charlar.',
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
		question: '¿Dónde está Bodega La Fuente?',
		answer:
			'En la C. Jara, 27, con código postal 30201, en Cartagena (Murcia). La ficha publica el plus code J227+HR Cartagena y las coordenadas 37.601431, -0.9854151.',
	},
	{
		question: '¿Cuál es el horario de Bodega La Fuente?',
		answer:
			'La ficha lo da abierto todos los días, con dos turnos: mediodía de 11:00 a 17:00 y noche desde las 19:30. De lunes a jueves y el domingo cierra a las 24:00, y los viernes y sábados alarga hasta las 0:30. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica a la vez como bar de tapas, bar, bar restaurante, restaurante, cafetería, pizzería y tienda de vinos. Tiene 4,2 sobre 5 con 3.888 reseñas, y en las que destaca se habla de las tapas y las anchoas, de la cerveza fría y el trato, de la pizza de atún y el montadito de salmón, y de tapear con amigos.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 868 04 73 22.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Jara, 27 y las coordenadas 37.601431, -0.9854151, en el casco antiguo de Cartagena. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code J227+HR Cartagena.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso y el aseo adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento y los asientos adaptados como no disponibles.',
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
		'Bar de tapas y tienda de vinos en la C. Jara, 27 de Cartagena, abierto todos los días con servicio de mediodía y de noche.',
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
	/* Sin `servesCuisine`: Google publica tipos de establecimiento, no una cocina concreta. */
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
