/**
 * Datos de Restaurante Casa Daoíz. (C. Prof. Alfonso Sancho Sáez, 16 · 23006 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguna. La página de
 * Facebook sí está publicada por el propio restaurante y se enlaza tal cual.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-casa-daoiz.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Casa Daoíz',
	shortName: 'Casa Daoíz',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha, con las abreviaturas que usa Google. */
	streetAddress: 'C. Prof. Alfonso Sancho Sáez, 16',
	postalCode: '23006',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 953 04 08 85',
	latitude: 37.7796175,
	longitude: -3.7939924,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6H4+RC Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,5 con 725 reseñas). */
	rating: 4.5,
	reviewCount: 725,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Casa+Dao%C3%ADz/@37.7796175,-3.7939924,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd70f905fc889:0xc12eb143be192cd2!8m2!3d37.7796175!4d-3.7939924!16s%2Fg%2F11c1wmsgtw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJichfkA_XbQ0R0iwZvkOxLsE&hl=es';

/** Página de Facebook publicada por el propio restaurante. */
export const facebookUrl = 'https://www.facebook.com/casadaoiz/';

export const phoneHref = 'tel:+34953040885';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre y marca el
 * lunes y el martes como días de cierre. De miércoles a sábado la ficha publica dos turnos (comida
 * y cena, hasta medianoche); el domingo solo el de mediodía, que empieza a las 12:00. El lunes 12,
 * Fiesta Nacional de España, aparece cerrado con el aviso de que podría ser diferente.
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
		service: '12:30 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:30 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:30 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:30 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '12:30', close: '17:00' },
			{ open: '20:00', close: '00:00' },
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
export const hoursSummary = 'Comidas y cenas de miércoles a sábado · cierra lunes y martes';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Google solo lista el grupo «Accesibilidad», con tres servicios confirmados; no publica nada del
 * aparcamiento, así que aquí no se afirma nada al respecto.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas' },
	{ label: 'Aseo adaptado' },
	{ label: 'Asientos adaptados' },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta, y se citan tal cual, sin
 * corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Recomendamos la ensalada templada de bacalao, boquerones fritos y solomillo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las raciones un poco escasas pero muy rico todo y muy buen trato',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen trato, buen clima, buen tape, buena comida y buena relación calidad-precio.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta habla de precios y los platos
 * solo se citan como lo que aparece en las reseñas.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante Casa Daoíz?',
		answer:
			'En la C. Prof. Alfonso Sancho Sáez, 16, con código postal 23006, en Jaén capital (Andalucía). La ficha publica el plus code Q6H4+RC Jaén y las coordenadas 37.7796175, -3.7939924.',
	},
	{
		question: '¿Cuál es el horario de Casa Daoíz?',
		answer:
			'De miércoles a sábado la ficha publica dos turnos: de 12:30 a 17:00 y de 20:00 a medianoche. El domingo solo aparece el mediodía, de 12:00 a 17:00, y el lunes y el martes figuran como cerrados. Es el horario de la ficha consultada el 7 de octubre de 2026; confirma por teléfono antes de ir en festivos.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Google lo clasifica como restaurante y restaurante mediterráneo. La ficha no publica la carta, pero en las reseñas que destaca se habla de ensalada templada de bacalao, boquerones fritos, solomillo y tapeo.',
	},
	{
		question: '¿Qué días cierra?',
		answer:
			'En el horario que publica la ficha, el lunes y el martes aparecen cerrados. El domingo solo abre el turno de mediodía, de 12:00 a 17:00.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Prof. Alfonso Sancho Sáez, 16 y las coordenadas 37.7796175, -3.7939924. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6H4+RC Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas. Del aparcamiento no publica nada.',
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
		'Restaurante de cocina mediterránea en la C. Prof. Alfonso Sancho Sáez, 16 de Jaén, con comidas y cenas de miércoles a sábado y cierre los lunes y martes.',
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
	sameAs: [facebookUrl],
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
		value: true,
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
