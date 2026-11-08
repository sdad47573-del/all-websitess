/**
 * Datos de Restaurante El Minero (Calle Dr. Fleming, 59 · 21530 Tharsis, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, distintivo, valoración con número de reseñas, coordenadas, plus code,
 * horario semanal, los servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-el-minero',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Minero',
	shortName: 'El Minero',
	/** Única categoría que publica Google, y declara cocina. */
	category: 'Restaurante de cocina española',
	/** Las categorías de la ficha, en su orden: aquí solo hay una. */
	categories: ['Restaurante de cocina española'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Calle Dr. Fleming, 59',
	postalCode: '21530',
	city: 'Tharsis',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 650 10 06 55',
	latitude: 37.6017153,
	longitude: -7.1203826,
	/** Plus code que publica la ficha. */
	plusCode: 'JV2H+MR Tharsis',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 164 reseñas). */
	rating: 4.6,
	reviewCount: 164,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, con todas sus irregularidades de puntuación, que son de la ficha: la
 * coma pegada a la palabra siguiente («de 14:00 a 16:00,Por la noche»), la frase sin conectar
 * («Comida trato cercano y sabor a esfuerzo») y los dos puntos finales («un plato esperando..»).
 *
 * Además, el titular se presenta como **«Bar El Minero»** aunque el nombre publicado en la ficha
 * es «Restaurante El Minero»: se deja tal cual y se explica en el README.
 *
 * La descripción habla de un horario propio (Menú del Trabajador de 14:00 a 16:00, noches solo de
 * bebidas, fin de semana de 14:00 a 16:00 y 21:00 a 23:30) que **no coincide** con el horario que
 * publica la misma ficha en su tabla de horarios. Los dos se recogen por separado —el texto en «En
 * sus palabras» y la tabla en la sección de horario— y la diferencia se explica en una pregunta
 * frecuente, sin resolverla por cuenta propia.
 */
export const descripcionLocal =
	'Bar El Minero es el punto de encuentro en la Plaza del Minero. De lunes a viernes se sirve el Menú del Trabajador (platos caseros y abundantes) de 14:00 a 16:00,Por la noche no hay comidas solo bebidas. Los fines de semana el ambiente cambia: al mediodía servicio de comida a la carta completa se abre de 14:00 a 16:00 y 21:00 a 23:30, con carnes, pescados, picoteos y bebidas para compartir. Comida trato cercano y sabor a esfuerzo en El Minero siempre hay un plato esperando..';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch», el mismo distintivo que aparece en las fichas de `bar-de-esteban` y
 * `restaurante-la-purisima`. Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Minero/@37.6017153,-7.1203826,17z/data=!3m1!4b1!4m6!3m5!1s0xd10529bd7598379:0xde913de912f6020a!8m2!3d37.6017153!4d-7.1203826!16s%2Fg%2F11b73jcz7t?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJeYNZ15tSEA0RCgL2Euk9kd4&hl=es';

export const phoneHref = 'tel:+34650100655';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * **abre los siete días y no cierra ninguno**, con **dos turnos de lunes a viernes** (mañana y
 * noche) y **un turno continuo de 9:00 a 24:00 los sábados y los domingos**, una jornada de
 * quince horas que también publican fichas como `los-mena` y `nueva-vida`.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, **el horario podría ser
 * diferente**. Ese es el aviso de tipo 2 (el local mantiene su horario y Google solo advierte de
 * que puede cambiar), no el de tipo 1; como en `bar-de-esteban`, el horario se recoge tal cual y
 * el aviso se explica en la sección de horario.
 *
 * El cierre a las 24:00 se escribe como `closes: '00:00'` en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 15:00 · 21:00 – 23:50',
		shifts: [
			{ open: '09:00', close: '15:00' },
			{ open: '21:00', close: '23:50' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 15:30 · 21:00 – 23:50',
		shifts: [
			{ open: '09:00', close: '15:30' },
			{ open: '21:00', close: '23:50' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 15:30 · 21:00 – 23:50',
		shifts: [
			{ open: '09:00', close: '15:30' },
			{ open: '21:00', close: '23:50' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 15:30 · 21:00 – 23:50',
		shifts: [
			{ open: '09:00', close: '15:30' },
			{ open: '21:00', close: '23:50' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 16:00 · 21:00 – 23:50',
		shifts: [
			{ open: '09:00', close: '16:00' },
			{ open: '21:00', close: '23:50' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abierto los siete días: de lunes a viernes en dos turnos y el fin de semana de 9:00 a 24:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
 * los asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son tres y se citan tal cual, sin corregir su redacción ni su puntuación (incluida la ausencia
 * de punto final en la segunda). Google las guarda entre comillas dobles, pero esas comillas son
 * suyas y no forman parte del texto, así que no se reproducen. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Las raciones abundantes con buenos precios.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un sitio estupendo, la comida deliciosa y el trato excelente, pienso volver',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy bueno todo, nos encantó, las croquetas y la ensaladilla estaban buenísimas.',
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
		question: '¿Dónde está Restaurante El Minero?',
		answer:
			'En la Calle Dr. Fleming, 59, con código postal 21530, en Tharsis (Huelva). La ficha publica el plus code JV2H+MR Tharsis y las coordenadas 37.6017153, -7.1203826.',
	},
	{
		question: '¿Cuál es el horario de Restaurante El Minero?',
		answer:
			'La ficha publica que el local abre los siete días de la semana, sin ningún día de cierre: de lunes a viernes en dos turnos (por la mañana desde las 9:00, con cierre entre las 15:00 y las 16:00, y por la noche de 21:00 a 23:50) y los sábados y domingos de forma continua de 9:00 a 24:00. El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente. Es el horario publicado en la ficha consultada el 10 de octubre de 2026 y conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Por qué la descripción del local habla de otras horas?',
		answer:
			'Porque es lo que publica el titular y no coincide con la tabla de horarios de la misma ficha. La descripción dice que el Menú del Trabajador se sirve de 14:00 a 16:00, que por la noche solo hay bebidas y que el fin de semana abre de 14:00 a 16:00 y de 21:00 a 23:30; la tabla de horarios publica otros tramos, con apertura a las 9:00 y, el fin de semana, de forma continua hasta las 24:00. Esta web reproduce las dos cosas tal cual y no elige por su cuenta: lo mejor es llamar al 650 10 06 55 antes de ir.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Google lo clasifica como restaurante de cocina española. El titular describe la ficha como punto de encuentro en la Plaza del Minero, con «Menú del Trabajador» de lunes a viernes («platos caseros y abundantes») y, los fines de semana, comida a la carta con «carnes, pescados, picoteos y bebidas para compartir». En las tres reseñas que destaca la ficha se habla de raciones abundantes, buenos precios, croquetas y ensaladilla. La ficha no publica carta ni precios, así que la web no los reproduce.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch»?',
		answer:
			'Es el distintivo que Google muestra junto al nombre en la ficha, el único de ese tipo que publica. Esta web lo recoge tal cual y no lo amplía ni lo interpreta: para saber si hay alguna condición, lo mejor es llamar al 650 10 06 55.',
	},
	{
		question: '¿Es accesible para sillas de ruedas?',
		answer:
			'La ficha publica cuatro servicios de accesibilidad y los cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas. No publica ningún otro dato de accesibilidad y esta web no añade ninguno.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 10 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina española en la Calle Dr. Fleming, 59 de Tharsis, abierto los siete días: de lunes a viernes en dos turnos y el fin de semana de 9:00 a 24:00.',
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
	/*
	 * La única categoría que publica Google, «Restaurante de cocina española», declara esa cocina.
	 * Se traduce como en `dona-croqueta`, que tiene esa misma categoría como única.
	 */
	servesCuisine: ['Española'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
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
