/**
 * Datos del Mesón El Futbolista. (C. Fuente de la Salud, 3, bajo · 23006 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción que publica el propio local y las reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, carta ni precios, así que no se reproduce
 * ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/meson-el-futbolista',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Mesón El Futbolista',
	shortName: 'El Futbolista',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Bar de tapas',
	categories: ['Bar de tapas', 'Bar'],
	/** Dirección publicada en la ficha, con las abreviaturas que usa Google. */
	streetAddress: 'C. Fuente de la Salud, 3, bajo',
	postalCode: '23006',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (móvil). */
	phone: '+34 625 57 82 77',
	latitude: 37.779547,
	longitude: -3.805727,
	/** Plus code que publica la ficha. */
	plusCode: 'Q5HV+RP Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,6 con 816 reseñas). */
	rating: 4.6,
	reviewCount: 816,
	site: site.siteUrl,
} as const;

/**
 * Descripción literal que el propio local publica en su ficha de Google Maps.
 *
 * Es el texto que Google marca como descripción del comercio («merchant description»). Aquí es muy
 * corto —solo «Cocina casera»—, pero se reproduce tal cual, sin ampliarlo.
 */
export const descripcionLocal = 'Cocina casera';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Mes%C3%B3n+El+Futbolista/@37.779547,-3.805727,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd73d4ab014fd:0xab1ad9fc6f53b755!8m2!3d37.779547!4d-3.805727!16s%2Fg%2F11c1vj_k8r?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ_RSwSj3XbQ0RVbdTb_zZGqs&hl=es';

export const phoneHref = 'tel:+34625578277';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local
 * cierra lunes y martes y abre de miércoles a domingo en dos turnos: mediodía (13:00 a 17:00) y
 * cena desde las 20:00/20:30.
 *
 * La cena cambia de hora según el día: de miércoles a jueves acaba a las 0:30, viernes y sábado a
 * la 1:00 y el domingo a las 23:30. El lunes 12 aparece cerrado con el aviso de que el horario
 * podría ser diferente por la Fiesta Nacional de España; el martes 13 también cierra y sin ese
 * aviso, así que ambos son cierres habituales.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 17:00 · 20:30 – 0:30',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '00:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 17:00 · 20:30 – 0:30',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '00:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 17:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 17:00 · 20:30 – 1:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '01:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 17:00 · 20:00 – 23:30',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De miércoles a domingo · mediodía de 13:00 a 17:00 y cena desde las 20:00/20:30; lunes y martes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha: la única entrada es el acceso para sillas de
 * ruedas, marcado como disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta y se citan tal cual, sin
 * corregir su redacción ni su puntuación. No todas son de 5: la ficha destaca una de 3 y otra de 4,
 * y se reproducen igual, sin esconderlas.
 */
export const reviews = [
	{
		text: 'Buen bar para tapear y tomar algunas raciones de arroz y migas.',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen trato y tapeo variado buen lugar para quedadas , recomendable 100%',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los rollos de pollo con roquefort...geniales, muy buena comida',
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
		question: '¿Dónde está el Mesón El Futbolista?',
		answer:
			'En la C. Fuente de la Salud, 3, bajo, con código postal 23006, en Jaén (Andalucía). La ficha publica el plus code Q5HV+RP Jaén y las coordenadas 37.779547, -3.805727.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'Cierra lunes y martes. De miércoles a domingo abre en dos turnos: mediodía de 13:00 a 17:00 y cena, que empieza a las 20:30 (20:00 el domingo) y termina a las 0:30 de miércoles a jueves, a la 1:00 viernes y sábado y a las 23:30 el domingo. Es el horario publicado en la ficha consultada el 7 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como bar de tapas y bar. En su ficha el propio local se describe con dos palabras: «Cocina casera». Tiene 4,6 sobre 5 con 816 reseñas, y en las reseñas que destaca se habla de tapeo, de raciones de arroz y migas y de los rollos de pollo con roquefort.',
	},
	{
		question: '¿Abre todos los días?',
		answer:
			'No: en el horario que publica la ficha cierra lunes y martes. De miércoles a domingo abre todos los días, al mediodía y por la noche.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Fuente de la Salud, 3, bajo y las coordenadas 37.779547, -3.805727. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q5HV+RP Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponible el acceso para sillas de ruedas. Es el único servicio de accesibilidad que publica, así que para cualquier otra necesidad conviene llamar antes al 625 57 82 77.',
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
		'Bar de tapas en la C. Fuente de la Salud, 3, bajo de Jaén, con mediodía y cena de miércoles a domingo; cierra lunes y martes.',
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
	/* Sin `servesCuisine`: Google solo publica «Bar de tapas» y «Bar» y no declara una cocina. */
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
