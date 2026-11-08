/**
 * Datos del Restaurante Atracón Jaén. (C. de Castilla-la Mancha, 3 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google destaca en la ficha, la descripción del propio local y las reseñas
 * destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, carta ni precios.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-atracon-jaen',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Atracón Jaén',
	shortName: 'Atracón',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha, con las abreviaturas que usa Google. */
	streetAddress: 'C. de Castilla-la Mancha, 3',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (fijo). */
	phone: '+34 953 26 74 94',
	latitude: 37.7817769,
	longitude: -3.7911502,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6J5+PG Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,2 con 1.865 reseñas). */
	rating: 4.2,
	reviewCount: 1865,
	site: site.siteUrl,
} as const;

/**
 * Descripción literal que el propio local publica en su ficha de Google Maps.
 *
 * Se reproduce tal cual, con su redacción y sus mayúsculas. De aquí sale también la cocina que se
 * declara en los datos estructurados (`servesCuisine: ['Italiana', 'Europea']`).
 */
export const descripcionLocal =
	'Restaurante Cocina Italiana y Europea en la capital mundial del aceite de Oliva, Jaén.';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * En otras fichas ese hueco va vacío o con «Brunch»; aquí publica «Se admiten perros». Se recoge
 * como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Se admiten perros';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Atrac%C3%B3n+Ja%C3%A9n/@37.7817769,-3.7911502,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd705afbb8f67:0xef4e142fe5f1cbb0!8m2!3d37.7817769!4d-3.7911502!16s%2Fg%2F11f00hy0mv?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJZ4-7rwXXbQ0RsMvx5S8UTu8&hl=es';

export const phoneHref = 'tel:+34953267494';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local
 * cierra el martes y el resto de días abre en dos turnos: mediodía (hasta las 16:00 de miércoles a
 * jueves y hasta las 16:30 de viernes a lunes) y cena desde las 20:00 hasta medianoche.
 *
 * El lunes 12, Fiesta Nacional de España, aparece abierto con el horario habitual y el aviso de que
 * podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:30 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:30 – 16:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:30', close: '16:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:30 – 16:30 · 20:00 – 24:00',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De miércoles a lunes · mediodía de 13:30 a 16:00/16:30 y cena desde las 20:00';

/**
 * Servicios de accesibilidad que publica la ficha: el acceso, el aseo y los asientos adaptados para
 * sillas de ruedas están disponibles, y el aparcamiento adaptado está marcado como no disponible.
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
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta y se citan tal cual, sin
 * corregir su redacción ni su puntuación. No todas son positivas: la ficha destaca una de 1 sobre 5
 * y se reproduce igual, sin esconderla.
 */
export const reviews = [
	{
		text: 'Comida buena, hay sándwich pizzas enrollados hamburguesas un par de risottos...',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El risotto y la pasta con salsa de pera están para repetir muchas veces.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Más bien era arroz cocido con la salsa y en medio de esa masa dos champiñones.',
		rating: 1,
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
		question: '¿Dónde está el Restaurante Atracón Jaén?',
		answer:
			'En la C. de Castilla-la Mancha, 3, con código postal 23009, en Jaén (Andalucía). La ficha publica el plus code Q6J5+PG Jaén y las coordenadas 37.7817769, -3.7911502.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'Cierra el martes. El resto de días abre en dos turnos: mediodía de 13:30 a 16:00 (hasta las 16:30 de viernes a lunes) y cena desde las 20:00 hasta medianoche. Es el horario publicado en la ficha consultada el 7 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de cocina hace?',
		answer:
			'El propio local se describe en su ficha como «Restaurante Cocina Italiana y Europea en la capital mundial del aceite de Oliva, Jaén». Google lo clasifica solo como restaurante, con 4,2 sobre 5 y 1.865 reseñas.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'Google muestra el distintivo «Se admiten perros» junto al nombre en la ficha. Es el único distintivo de ese tipo que publica, y esta web no lo amplía ni lo interpreta: para cualquier detalle, conviene llamar al 953 26 74 94.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. de Castilla-la Mancha, 3 y las coordenadas 37.7817769, -3.7911502. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6J5+PG Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y como no disponible el aparcamiento adaptado.',
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
		'Restaurante de cocina italiana y europea en la C. de Castilla-la Mancha, 3 de Jaén, con mediodía y cena de miércoles a lunes.',
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
	/** Cocina tomada de la descripción del propio local, sin añadir ninguna otra. */
	servesCuisine: ['Italiana', 'Europea'],
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
