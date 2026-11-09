/**
 * Datos de Bar Restaurante El Sótano (Calle Magdalena del Prado, 6, local 1 · 23003 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo, la descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-el-sotano',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps (con la tilde de «Sótano»). */
	name: 'Bar Restaurante El Sótano',
	shortName: 'El Sótano',
	/** Única categoría que publica Google en esta ficha, y por eso la principal. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Magdalena del Prado, 6, Loc 1»:
	 * aquí se desarrollan las abreviaturas a «Calle Magdalena del Prado, 6, local 1», como en el
	 * resto del repositorio.
	 */
	streetAddress: 'Calle Magdalena del Prado, 6, local 1',
	postalCode: '23003',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 651 46 28 23',
	latitude: 37.7689495,
	longitude: -3.790165,
	/** Plus code que publica la ficha. */
	plusCode: 'Q695+HW Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 588 reseñas). */
	rating: 4.4,
	reviewCount: 588,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo (la ficha deja un espacio detrás de cada paréntesis).
 */
export const descripcionLocal = 'Bar con zona infantil ( parque para niños )';

/** Distintivo que Google muestra junto al nombre en la ficha. */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Restaurante+El+S%C3%B3tano/@37.7689495,-3.790165,16z/data=!3m1!4b1!4m6!3m5!1s0xd6dd7734c41c217:0x8e401308704bd5e3!8m2!3d37.7689495!4d-3.790165!16s%2Fg%2F11c2ltbk6q?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJF8JBTHPXbQ0R49VLcAgTQI4&hl=es';

export const phoneHref = 'tel:+34651462823';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local solo
 * abre de viernes a domingo: viernes y sábado con dos turnos, mediodía de 13:00 a 16:30 y noche de
 * 20:00 a 23:30, y el domingo solo al mediodía, de 13:30 a 16:30. De lunes a jueves cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente
 * (ese día la ficha lo da cerrado igualmente), así que el aviso se recoge en el texto de la sección
 * de horario y no cambia la tabla.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:30 · 20:00 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:30 · 20:00 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '23:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:30 – 16:30',
		shifts: [{ open: '13:30', close: '16:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Viernes y sábado de 13:00 a 16:30 y de 20:00 a 23:30; domingo de 13:30 a 16:30';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas, y las cuatro figuran como disponibles: el acceso, el aseo, los asientos y el
 * aparcamiento adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la segunda menciona un
 * «flamenquin», escrito así en la reseña). Las tres son de 5 sobre 5. Google devuelve cada reseña
 * envuelta en comillas rectas, que aquí se quitan porque son el delimitador del propio campo y no
 * forman parte del texto.
 */
export const reviews = [
	{
		text: 'Los platillos exquisitos, bien elaborados y las raciones generosas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Estuve con un amigo y nos pedimos un flamenquin y el solomillo a la pimienta.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Exquisita comida y abundante, servicio excelente, muy contentos volveremos',
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
		question: '¿Dónde está Bar Restaurante El Sótano?',
		answer:
			'En la Calle Magdalena del Prado, 6, local 1, con código postal 23003, en Jaén (Andalucía). La ficha publica el plus code Q695+HW Jaén y las coordenadas 37.7689495, -3.790165.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'La ficha solo lo da abierto de viernes a domingo: viernes y sábado de 13:00 a 16:30 y de 20:00 a 23:30, y el domingo solo al mediodía, de 13:30 a 16:30. De lunes a jueves figura como cerrado. Es el horario de la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto: es la única categoría que publica la ficha. Tiene 4,4 sobre 5 con 588 reseñas, y en las tres reseñas que destaca se habla de platillos exquisitos y raciones generosas, de un flamenquín y de un solomillo a la pimienta, y de comida abundante con un servicio excelente.',
	},
	{
		question: '¿Hay zona para niños?',
		answer:
			'En la descripción del titular, el propio local se define como «Bar con zona infantil ( parque para niños )». Es lo único que publica la ficha sobre este punto; esta web no añade nada más.',
	},
	{
		question: '¿Qué distintivo muestra la ficha?',
		answer:
			'Google muestra junto al nombre el distintivo «Brunch», el único de ese tipo que publica la ficha. Se recoge tal cual, sin ampliarlo ni interpretarlo.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica ningún sistema de reservas ni una descripción del titular que lo mencione. Esta web no permite reservar: para preguntar por una mesa hay que llamar al 651 46 28 23.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y marca las cuatro como disponibles: el acceso, el aseo, los asientos y el aparcamiento adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante con zona infantil en la Calle Magdalena del Prado, 6, local 1 de Jaén, abierto de viernes a domingo.',
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
	/* Sin `servesCuisine`: Google publica un tipo de establecimiento, no una cocina concreta. */
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
