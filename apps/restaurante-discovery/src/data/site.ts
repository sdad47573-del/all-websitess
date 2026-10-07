/**
 * Datos de Restaurante Discovery. (C. del Obispo Estúñiga, 3 · 23007 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, horario semanal, servicios de accesibilidad y reseñas
 * destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguna. Los perfiles
 * sociales sí están publicados por el propio restaurante y se enlazan tal cual.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-discovery.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Discovery',
	shortName: 'Discovery',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: [
		'Restaurante',
		'Restaurante mediterráneo',
		'Marisquería',
		'Restaurante de cocina española',
	],
	/** Dirección publicada en la ficha, con la abreviatura «C.» que usa Google. */
	streetAddress: 'C. del Obispo Estúñiga, 3',
	postalCode: '23007',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 953 26 71 06',
	latitude: 37.7754596,
	longitude: -3.7900341,
	/** Valoración de la ficha en la fecha de consulta (4,8 con 929 reseñas). */
	rating: 4.8,
	reviewCount: 929,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Discovery/@37.7754596,-3.7900341,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd70eb9fa1777:0x2b7d062626a9d588!8m2!3d37.7754596!4d-3.7900341!16s%2Fg%2F1t_khwxx?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJdxf6uQ7XbQ0RiNWpJiYGfSs&hl=es';

/** Perfiles publicados por el propio restaurante. */
export const instagramUrl = 'https://www.instagram.com/discoveryrestaurantejaen/';
export const facebookUrl = 'https://www.facebook.com/Restaurantediscovery/';

export const phoneHref = 'tel:+34953267106';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre y marca el
 * domingo como cierre. De miércoles a sábado la ficha publica dos turnos (comida y cena); el lunes
 * y el martes solo el de mediodía. El lunes 12, Fiesta Nacional de España, aparece con un horario
 * propio y el aviso de que podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:30 – 17:00',
		shifts: [{ open: '13:30', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:30 – 16:30',
		shifts: [{ open: '13:30', close: '16:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:30 – 16:00 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:30 – 16:00 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
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
export const hoursSummary = 'Comidas y cenas de miércoles a sábado · cierra los domingos';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Google solo lista el grupo «Accesibilidad»: tres servicios confirmados y el aparcamiento
 * adaptado marcado como no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado', disponible: true },
	{ label: 'Asientos adaptados', disponible: true },
	{ label: 'Aparcamiento adaptado', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta, y se citan tal cual, sin
 * corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Croquetas de gamba roja buenísimas, entrecot de vaca vieja de calidad.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Cerveza fresquita tapas buenas y buen trato muy amables',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen servicio, buena calidad, si volvemos a Jaén os visitaremos otra vez.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta habla de precios y las
 * especialidades solo se citan como lo que aparece en las reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante Discovery?',
		answer:
			'En la C. del Obispo Estúñiga, 3, con código postal 23007, en Jaén capital (Andalucía). La ficha publica la dirección completa y las coordenadas 37.7754596, -3.7900341, a un paso del Museo Íbero.',
	},
	{
		question: '¿Cuál es el horario del Restaurante Discovery?',
		answer:
			'De miércoles a sábado la ficha publica dos turnos: sobre las 13:30 a 16:30 y de 20:30 a 23:30. El lunes y el martes solo aparece el turno de mediodía, y el domingo figura como cerrado. Es el horario de la ficha consultada el 7 de octubre de 2026; confirma por teléfono antes de ir en festivos.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica como restaurante, restaurante mediterráneo, marisquería y restaurante de cocina española. La ficha no publica la carta, pero en las reseñas que destaca se habla de croquetas de gamba roja, tapas y carnes.',
	},
	{
		question: '¿Abre los domingos?',
		answer:
			'No: en el horario que publica la ficha el domingo aparece como cerrado. El fin de semana se atiende el sábado, con comida y cena.',
	},
	{
		question: '¿Cómo se llega y se puede aparcar?',
		answer:
			'La ficha publica la dirección C. del Obispo Estúñiga, 3, los botones de esta web abren las indicaciones de Google Maps desde donde estés y el mapa de abajo señala el lugar. Del aparcamiento la ficha solo aclara que no dispone de plazas adaptadas para sillas de ruedas.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y como no disponible el aparcamiento adaptado.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 7 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Marisquería y restaurante mediterráneo en la C. del Obispo Estúñiga, 3 de Jaén, con comidas y cenas de miércoles a sábado y cierre los domingos.',
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
	sameAs: [instagramUrl, facebookUrl],
	acceptsReservations: true,
	/** Traduce a cocinas las categorías que publica Google. No se declara ninguna otra. */
	servesCuisine: ['Mediterránea', 'Española', 'Marisco'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
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
