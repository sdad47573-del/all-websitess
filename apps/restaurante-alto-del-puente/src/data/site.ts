/**
 * Datos del Restaurante Alto del Puente. (Av. de Ubeda, Km.0600 · 23100 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicio de accesibilidad, la
 * descripción que publica el propio local y las reseñas destacadas.
 *
 * La ficha no publica web propia ni perfiles sociales, así que no se enlaza ninguno. Tampoco
 * publica carta ni precios.
 *
 * La dirección se reproduce literal, tal y como la escribe la ficha («Av. de Ubeda, Km.0600»), sin
 * corregir la tilde de «Úbeda» ni el formato del kilómetro.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-alto-del-puente.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Alto del Puente',
	shortName: 'Alto del Puente',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Cafetería',
	categories: ['Cafetería', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha, reproducida literalmente. */
	streetAddress: 'Av. de Ubeda, Km.0600',
	postalCode: '23100',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (móvil). */
	phone: '+34 687 72 94 14',
	latitude: 37.7915891,
	longitude: -3.6073177,
	/** Plus code que publica la ficha. */
	plusCode: 'Q9RV+J3 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,6 con 99 reseñas). */
	rating: 4.6,
	reviewCount: 99,
	site: site.siteUrl,
} as const;

/**
 * Descripción literal que el propio local publica en su ficha de Google Maps.
 *
 * Se reproduce tal cual (solo se normalizan los espacios antes de los puntos y el salto de línea).
 * El local se nombra a sí mismo «Cafetería Alto del puente» en este texto, aunque el nombre de la
 * ficha es «Restaurante Alto del Puente».
 */
export const descripcionLocal =
	'Cafetería Alto del puente está situada en un polígono Industrial de la periferia. Es una zona tranquila. Disponemos de terraza para disfrutar de nuestros productos al aire libre. Servimos desayunos, bocadillos fríos o calientes y bebidas espirituosas. También servimos combinados de alcohol. Esperamos verles pronto.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Alto+del+Puente/@37.7915891,-3.6073177,17z/data=!3m1!4b1!4m6!3m5!1s0xd6e7b1ce55c5d0b:0x3c0897f8495cf661!8m2!3d37.7915891!4d-3.6073177!16s%2Fg%2F11gd4kb_cr?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJC11c5Rx7bg0RYfZcSfiXCDw&hl=es';

export const phoneHref = 'tel:+34687729414';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local abre
 * un único tramo continuo de 6:30 a 21:30 de lunes a sábado, y cierra el domingo.
 *
 * El lunes 12, Fiesta Nacional de España, aparece abierto con el mismo tramo y el aviso de que
 * podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:30 – 21:30',
		shifts: [{ open: '06:30', close: '21:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:30 – 21:30',
		shifts: [{ open: '06:30', close: '21:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:30 – 21:30',
		shifts: [{ open: '06:30', close: '21:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:30 – 21:30',
		shifts: [{ open: '06:30', close: '21:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:30 – 21:30',
		shifts: [{ open: '06:30', close: '21:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '6:30 – 21:30',
		shifts: [{ open: '06:30', close: '21:30' }],
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
export const hoursSummary = 'De lunes a sábado · de 6:30 a 21:30 (domingo cerrado)';

/**
 * Servicios de accesibilidad que publica la ficha: solo el acceso para sillas de ruedas. No publica
 * ningún dato de aseo, asientos ni aparcamiento adaptado, así que no se declara ninguno más.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta (todas de 5 sobre 5) y se
 * citan tal cual, sin corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Bocadillos muy buenos, y dueño muy agradable y atento',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Y muy buen café y aceite...todo perfecto',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El dueño súper amable y las tostadas del desayuno enormes y de calidad.',
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
		question: '¿Dónde está el Restaurante Alto del Puente?',
		answer:
			'En la Av. de Ubeda, Km.0600, con código postal 23100, en Jaén (Andalucía), en un polígono industrial de la periferia. La ficha publica el plus code Q9RV+J3 Jaén y las coordenadas 37.7915891, -3.6073177.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'Abre de lunes a sábado en un tramo continuo de 6:30 a 21:30 y cierra el domingo. Es el horario publicado en la ficha consultada el 7 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente, así que conviene confirmarlo por teléfono.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como cafetería y restaurante mediterráneo, con 4,6 sobre 5 y 99 reseñas. En su propia descripción, el local cuenta que sirve desayunos, bocadillos fríos o calientes, bebidas espirituosas y combinados de alcohol, y que tiene terraza.',
	},
	{
		question: '¿Tiene terraza?',
		answer:
			'Sí, así lo publica el propio local en su ficha: «Disponemos de terraza para disfrutar de nuestros productos al aire libre». La ficha, en cambio, no detalla ni la carta ni los precios.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Ubeda, Km.0600 y las coordenadas 37.7915891, -3.6073177. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q9RV+J3 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponible el acceso para sillas de ruedas. No publica ningún dato sobre aseo, asientos ni aparcamiento adaptado, así que no se declara nada más.',
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
		'Cafetería y restaurante mediterráneo en la Av. de Ubeda, Km.0600 de Jaén, con desayunos, bocadillos y terraza, abierto de lunes a sábado de 6:30 a 21:30.',
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
	/** Traduce a cocina la categoría de Google. No se declara ninguna otra. */
	servesCuisine: ['Mediterránea'],
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
