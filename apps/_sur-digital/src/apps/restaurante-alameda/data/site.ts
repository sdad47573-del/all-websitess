/**
 * Datos de Restaurante Alameda. (Cl. Adarves Bajos, 20 · 23001 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles de redes sociales, así que no se
 * reproduce ni se enlaza nada de eso.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-alameda',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Alameda',
	shortName: 'Alameda',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha, con la abreviatura «Cl.» que usa Google. */
	streetAddress: 'Cl. Adarves Bajos, 20',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 953 24 36 40',
	latitude: 37.766275,
	longitude: -3.7845593,
	/** Plus code que publica la ficha. */
	plusCode: 'Q688+G5 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,5 con 213 reseñas). */
	rating: 4.5,
	reviewCount: 213,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Alameda/@37.766275,-3.7845593,17z/data=!3m1!4b1!4m6!3m5!1s0xb3c82dfa8000782f:0x93e3cb64c492db4b!8m2!3d37.766275!4d-3.7845593!16s%2Fg%2F11c5j6vq1r?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJL3gAgPotyLMRS9uSxGTL45M&hl=es';

export const phoneHref = 'tel:+34953243640';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre y marca el
 * lunes como día de cierre. El martes, el jueves, el viernes y el sábado publican dos turnos
 * (comida y cena); el miércoles y el domingo, solo el de mediodía. El lunes 12, Fiesta Nacional de
 * España, aparece cerrado con el aviso de que podría ser diferente.
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
		service: '12:30 – 17:00 · 20:30 – 23:30',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:30 – 17:00',
		shifts: [{ open: '12:30', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 17:00 · 20:30 – 23:30',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 17:00 · 20:30 – 23:30',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 17:00 · 20:30 – 23:30',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:30 – 17:00',
		shifts: [{ open: '12:30', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abre de martes a domingo · cierra los lunes';

/**
 * Servicios de accesibilidad que publica la ficha: los tres primeros están disponibles y el
 * aparcamiento adaptado, marcado como no disponible.
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
		text: 'Buena comida, buen servicio y buena carta de vinos a un precio razonable',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Todo muy bueno y los camareros muy atentos y educados.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Tiene carta de vinos con buenos precios y buen vino.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta habla de precios y la carta de
 * vinos solo se cita como lo que aparece en las reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante Alameda?',
		answer:
			'En la Cl. Adarves Bajos, 20, con código postal 23001, en el centro de Jaén (Andalucía). La ficha publica el plus code Q688+G5 Jaén y las coordenadas 37.766275, -3.7845593.',
	},
	{
		question: '¿Cuál es el horario del Restaurante Alameda?',
		answer:
			'De martes a domingo publica el turno de mediodía, de 12:30 a 17:00, y el martes, el jueves, el viernes y el sábado añaden uno de noche, de 20:30 a 23:30. El lunes figura como cerrado. Es el horario de la ficha consultada el 7 de octubre de 2026; confirma por teléfono antes de ir en festivos.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica como restaurante y restaurante mediterráneo, con 4,5 sobre 5 y 213 reseñas. La ficha no publica la carta, pero en las reseñas que destaca se habla de buena comida y de una carta de vinos con buenos precios.',
	},
	{
		question: '¿Qué día cierra?',
		answer:
			'En el horario que publica la ficha, el lunes aparece cerrado. El resto de días abre el turno de mediodía y, de martes a sábado salvo el miércoles, también el de noche.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Cl. Adarves Bajos, 20 y las coordenadas 37.766275, -3.7845593. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q688+G5 Jaén.',
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
		'Restaurante de cocina mediterránea en la Cl. Adarves Bajos, 20 de Jaén, con comidas todos los días menos el lunes y cenas de martes a sábado.',
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
	servesCuisine: ['Mediterránea'],
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
