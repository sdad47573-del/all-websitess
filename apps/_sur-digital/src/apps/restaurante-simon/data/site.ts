/**
 * Datos de Restaurante Simon (Av. la Palmera, 13 · 21409 Punta del Moral, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas, plus code, horario
 * semanal, los servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni distintivo, así que no se reproduce ninguno
 * de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-simon',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Simon',
	shortName: 'Simon',
	/** Única categoría que publica Google, y declara cocina. */
	category: 'Restaurante mediterráneo',
	/** Las categorías de la ficha, en su orden: aquí solo hay una. */
	categories: ['Restaurante mediterráneo'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Av. la Palmera, 13',
	postalCode: '21409',
	/** Localidad tal como la publica la ficha: Punta del Moral. */
	city: 'Punta del Moral',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 959 47 70 26',
	latitude: 37.1886806,
	longitude: -7.3410585,
	/** Plus code que publica la ficha. */
	plusCode: '5MQ5+FH Punta del Moral',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 634 reseñas). */
	rating: 4.5,
	reviewCount: 634,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, con sus dos líneas y sin corregir su redacción («Arroz marinera»,
 * «pescados fresco», «comidas de celiaco» son palabras de la ficha: no se tocan). Va atribuida a
 * la ficha y en la web se respeta el salto de línea con `white-space: pre-line`.
 */
export const descripcionLocal =
	'Arroz marinera y pescados fresco y mariscos\nEspecialidad en brasas y comidas de celiaco';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Simon/@37.1886806,-7.3410585,17z/data=!3m1!4b1!4m6!3m5!1s0xd10247ba98fc5c5:0x6e63899474ad1171!8m2!3d37.1886806!4d-7.3410585!16s%2Fg%2F1z44b44fx?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJxcWPqXskEA0RcRGtdJSJY24&hl=es';

export const phoneHref = 'tel:+34959477026';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * sirve **mediodía y noche los siete días**, sin ningún día de cierre, con estos tramos: de
 * 13:00 a 16:30 y de 20:30 a 0:30 de forma general, de 13:30 a 16:30 y de 20:30 a 24:00 el lunes
 * y el martes, y de 12:30 a 17:00 y de 20:00 a 0:30 el miércoles.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, **el horario podría ser
 * diferente**. Ese es el aviso de tipo 2 (el local mantiene su horario y Google solo advierte de
 * que puede cambiar), no el de tipo 1, en el que la ficha publica el horario propio del festivo
 * en lugar del habitual; como en `bar-de-esteban`, el horario se recoge tal cual y el aviso se
 * explica en la sección de horario.
 *
 * Los turnos de noche de sábado, domingo, miércoles, jueves y viernes cierran **a las 0:30**, es
 * decir, ya del día siguiente; la ficha lo escribe «0:30» y en los datos estructurados se
 * normaliza a `00:30`, como en `abaceria-tinta-de-toro` con su cierre a las 02:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:30 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:00 – 16:30 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:30 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:30 · 20:30 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:30', close: '00:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:30 · 20:30 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:30', close: '00:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:30 · 20:30 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:30', close: '00:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:30 · 20:30 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:30', close: '00:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Mediodía y noche los siete días, sin día de cierre';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son tres y se citan tal cual, sin corregir su redacción. Google las guarda entre comillas
 * dobles, pero esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las
 * puntuaciones son las que publica la ficha: 5, 5 y 1, esta última en una reseña que también
 * destaca, así que se cita con su puntuación y sin retocarla.
 */
export const reviews = [
	{
		text: 'Exquisitos pescados fritos y buenísimo arroz.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Probamos los fideos a la marinera, las coquinas, los boquerones y los chocos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Tras llegada pedimos croquetas, frito variado y chanquetes y marchamos el arroz.',
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
		question: '¿Dónde está Restaurante Simon?',
		answer:
			'En la Av. la Palmera, 13, con código postal 21409, en Punta del Moral (Huelva). La ficha publica el plus code 5MQ5+FH Punta del Moral y las coordenadas 37.1886806, -7.3410585.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Simon?',
		answer:
			'La ficha publica mediodía y noche los siete días de la semana, sin ningún día de cierre: de 13:00 a 16:30 y de 20:30 a 0:30 de forma general, de 13:30 a 16:30 y de 20:30 a 24:00 el lunes y el martes, y de 12:30 a 17:00 y de 20:00 a 0:30 el miércoles. El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente. Es el horario publicado en la ficha consultada el 10 de octubre de 2026 y conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Google lo clasifica como restaurante mediterráneo y el propio local describe su ficha como «Arroz marinera y pescados fresco y mariscos. Especialidad en brasas y comidas de celiaco». En las reseñas que destaca la ficha se citan pescados fritos, arroz, fideos a la marinera, coquinas, boquerones, chocos, croquetas y frito variado. La ficha no publica carta ni precios, así que la web no los reproduce.',
	},
	{
		question: '¿Hay opciones sin gluten?',
		answer:
			'Sobre el gluten solo se puede decir lo que publica la ficha: el titular describe el local como especializado en «comidas de celiaco». No es una carta ni una garantía de la cocina, así que conviene confirmarlo por teléfono antes de ir. El teléfono publicado es el 959 47 70 26.',
	},
	{
		question: '¿Es accesible para sillas de ruedas?',
		answer:
			'La ficha publica tres servicios de accesibilidad y los tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ningún otro dato de accesibilidad y esta web no añade ninguno.',
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
		'Restaurante mediterráneo en la Av. la Palmera, 13 de Punta del Moral, con mediodía y noche los siete días de la semana y especialidad en pescados y arroces.',
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
	/* La única categoría que publica Google, «Restaurante mediterráneo», declara esa cocina. */
	servesCuisine: ['Mediterránea'],
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
