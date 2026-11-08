/**
 * Datos de El Rincón De Barbotin. (C. de Pedro del Alcalde, 18 · 23002 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, carta ni descripción del local.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://el-rincon-de-barbotin.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'El Rincón De Barbotin',
	shortName: 'Barbotin',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Taberna',
	categories: ['Taberna'],
	/** Dirección publicada en la ficha, con las abreviaturas que usa Google. */
	streetAddress: 'C. de Pedro del Alcalde, 18',
	postalCode: '23002',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (móvil). */
	phone: '+34 665 42 79 91',
	latitude: 37.7583452,
	longitude: -3.7947964,
	/** Plus code que publica la ficha. */
	plusCode: 'Q654+83 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,6 con 298 reseñas). */
	rating: 4.6,
	reviewCount: 298,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+Rinc%C3%B3n+De+Barbotin/@37.7583452,-3.7947964,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd76557aca3c1:0xe0ddb07412833db5!8m2!3d37.7583452!4d-3.7947964!16s%2Fg%2F11c58sjvp2?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJwaOsV2XXbQ0RtT2DEnSw3eA&hl=es';

export const phoneHref = 'tel:+34665427991';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local abre
 * a las 6:00 todos los días menos el domingo, que cierra, y termina pasada la medianoche: a las
 * 0:30 de lunes a viernes y a la 1:00 el sábado.
 *
 * El lunes 12, Fiesta Nacional de España, aparece abierto con el mismo tramo y el aviso de que
 * podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:00 – 0:30',
		shifts: [{ open: '06:00', close: '00:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:00 – 0:30',
		shifts: [{ open: '06:00', close: '00:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:00 – 0:30',
		shifts: [{ open: '06:00', close: '00:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:00 – 0:30',
		shifts: [{ open: '06:00', close: '00:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:00 – 0:30',
		shifts: [{ open: '06:00', close: '00:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '6:00 – 1:00',
		shifts: [{ open: '06:00', close: '01:00' }],
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
export const hoursSummary =
	'De lunes a sábado · desde las 6:00 hasta pasada la medianoche (domingo cerrado)';

/**
 * Servicios de accesibilidad que publica la ficha: el acceso, el aseo y los asientos adaptados para
 * sillas de ruedas están disponibles. No publica ningún dato de aparcamiento adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta y se citan tal cual, sin
 * corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Buen sitio, yo desayuno alli, buen cafe y tostadas de Jamón de pata',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Rápidos atentos cerveza fresquita y buen ambiente',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Hay cervezas a elegir, las raciones son abundantes y están muy buenas.',
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
		question: '¿Dónde está El Rincón De Barbotin?',
		answer:
			'En la C. de Pedro del Alcalde, 18, con código postal 23002, en Jaén (Andalucía). La ficha publica el plus code Q654+83 Jaén y las coordenadas 37.7583452, -3.7947964.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'Abre a las 6:00 de lunes a sábado y cierra pasada la medianoche: a las 0:30 de lunes a viernes y a la 1:00 el sábado. El domingo cierra. Es el horario publicado en la ficha consultada el 7 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como taberna, con 4,6 sobre 5 y 298 reseñas. La ficha no publica la carta, pero en las reseñas que destaca se habla de desayunos con café y tostadas, de cerveza fresquita y de raciones abundantes.',
	},
	{
		question: '¿Abre los domingos?',
		answer:
			'No: en el horario que publica la ficha, cierra el domingo. Abre de lunes a sábado desde las 6:00.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. de Pedro del Alcalde, 18 y las coordenadas 37.7583452, -3.7947964. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q654+83 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ningún dato sobre aparcamiento adaptado.',
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
		'Taberna en la C. de Pedro del Alcalde, 18 de Jaén, abierta desde las 6:00 de lunes a sábado y hasta pasada la medianoche.',
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
	/* Sin `servesCuisine`: la ficha solo publica la categoría «Taberna», sin tipo de cocina. */
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
