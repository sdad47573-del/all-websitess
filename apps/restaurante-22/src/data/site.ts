/**
 * Datos de Restaurante 22 (C. de Roldán, 3 · 03501 Benidorm, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica precios, así que no se reproduce ninguno, y tampoco publica descripción del
 * titular ni ningún distintivo junto al nombre, así que no se reproduce ninguno de los dos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-22.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante 22',
	shortName: 'Restaurante 22',
	/** Categoría que publica Google en esta ficha: «Restaurante de cocina valenciana», la única. */
	category: 'Restaurante de cocina valenciana',
	categories: ['Restaurante de cocina valenciana'],
	/** Dirección publicada en la ficha: Calle de Roldán, 3 (03501 Benidorm). */
	streetAddress: 'C. de Roldán, 3',
	postalCode: '03501',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 625 08 57 29',
	latitude: 38.5381453,
	longitude: -0.1329551,
	/** Plus code que publica la ficha. */
	plusCode: 'GVQ8+7R Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 442 reseñas). */
	rating: 4.8,
	reviewCount: 442,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+22/@38.5381453,-0.1329551,17z/data=!3m1!4b1!4m6!3m5!1s0xd6205a7283d5683:0xe14c8046ee18c73b!8m2!3d38.5381453!4d-0.1329551!16s%2Fg%2F11shwf0rqm?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJg1Y9KKcFYg0RO8cY7kaATOE&hl=es';

export const phoneHref = 'tel:+34625085729';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre. El
 * local sirve dos turnos de martes a sábado —mediodía de 12:00 a 17:00 y noche de 20:00 a 23:00—,
 * el domingo solo al mediodía y cierra el lunes.
 *
 * La ficha trae dos avisos de horario: el viernes lleva «Día de la Comunidad Valenciana» (el 9 de
 * octubre) y el lunes, «Fiesta Nacional de España» (el 12 de octubre). Se recogen los dos.
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
		service: '12:00 – 17:00 · 20:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 17:00 · 20:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 17:00 · 20:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 17:00 · 20:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 17:00 · 20:00 – 23:00',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '23:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 17:00',
		shifts: [{ open: '12:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Comidas de 12:00 a 17:00 y cenas de 20:00 a 23:00 de martes a sábado; el domingo solo al mediodía y el lunes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. Esta ficha no publica la entrada del aseo, así que no se menciona. No publica
 * ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « » y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Todo buenísimo, las raciones del menú son generosas y el servicio excelente.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La comida está buenísima y el camarero y la cocinera son geniales.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Además de eso, queso frito con salsa, embutidos, bebida, pan y postre.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios ni descripción del titular, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante 22?',
		answer:
			'En la C. de Roldán, 3, con código postal 03501, en Benidorm (Alicante). La ficha publica el plus code GVQ8+7R Benidorm y las coordenadas 38.5381453, -0.1329551.',
	},
	{
		question: '¿Cuál es el horario de Restaurante 22?',
		answer:
			'La ficha publica dos turnos de martes a sábado: mediodía de 12:00 a 17:00 y noche de 20:00 a 23:00. El domingo solo abre al mediodía, de 12:00 a 17:00, y el lunes cierra. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con dos avisos: el viernes 9, Día de la Comunidad Valenciana, y el lunes 12, Fiesta Nacional de España, el horario podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina valenciana. Tiene 4,8 sobre 5 con 442 reseñas, y en las reseñas que destaca se habla de un menú con raciones generosas y buen servicio, del trato del camarero y la cocinera, y de detalles del menú como el queso frito con salsa, los embutidos, la bebida, el pan y el postre.',
	},
	{
		question: '¿Sirve menú del día?',
		answer:
			'La ficha no publica la carta ni el menú, y esta web no los reproduce. Lo único que dicen las reseñas que Google destaca es que «las raciones del menú son generosas» y que incluye platos como queso frito con salsa, embutidos, bebida, pan y postre. Para saber el menú de hoy y su precio, hay que llamar al 625 08 57 29.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 625 08 57 29.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. de Roldán, 3 y las coordenadas 38.5381453, -0.1329551. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVQ8+7R Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica la entrada del aseo ni ninguna otra.',
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
		'Restaurante de cocina valenciana en la C. de Roldán, 3 de Benidorm, con comidas de 12:00 a 17:00 y cenas de 20:00 a 23:00 de martes a sábado.',
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
	/* «Valenciana» traduce la única categoría que publica Google: «Restaurante de cocina valenciana». */
	servesCuisine: ['Valenciana'],
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
