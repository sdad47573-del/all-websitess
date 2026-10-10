/**
 * Datos de Restaurante Ulia La Nucia (Calle Caravana, 9 · 03530 La Nucía · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * Particularidades de esta ficha:
 *
 * - El local está en **La Nucía**, no en Benidorm: es la primera ficha del lote que sale del
 *   municipio. La dirección de la ficha escribe «La Nucia» sin tilde, pero el propio titular y el
 *   plus code de la ficha la escriben «La Nucía»; aquí se publica con tilde y se explica en el README.
 * - **Cierra martes y miércoles** y abre de 13:00 a 22:30 el resto de la semana, con horario continuo
 *   (sin cierre de mediodía).
 * - Es la única ficha del lote con **descripción del titular con varios párrafos**, que se reproduce
 *   literal (incluida la mención a las medidas Covid-19, que es texto del titular y puede estar
 *   desactualizada; ver el README).
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-ulia-la-nucia.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Ulia La Nucia',
	shortName: 'Ulia La Nucía',
	/**
	 * Única categoría que publica Google en esta ficha. Es una cocina declarada («valenciana»), así
	 * que alimenta `servesCuisine`.
	 */
	category: 'Restaurante de cocina valenciana',
	categories: ['Restaurante de cocina valenciana'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Calle Caravana, 9',
	postalCode: '03530',
	/**
	 * Municipio. La dirección de la ficha lo escribe «La Nucia», sin tilde, pero el plus code de la
	 * propia ficha y la descripción del titular lo escriben «La Nucía», que es la forma correcta. Se
	 * publica con tilde y queda anotado en el README.
	 */
	city: 'La Nucía',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono publicado en la ficha. */
	phone: '+34 865 75 12 20',
	latitude: 38.576326,
	longitude: -0.1306691,
	/** Plus code que publica la ficha. */
	plusCode: 'HVG9+GP La Nucía',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 304 reseñas). */
	rating: 4.4,
	reviewCount: 304,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil y se reproduce **literal**, con sus saltos
 * de línea y su puntuación: es la única ficha del lote con una descripción de varios párrafos. Se
 * pinta con `white-space: pre-line` para respetar los saltos.
 *
 * El último párrafo («Con todas las medidas Covid-19 en vigor.») es texto del titular y puede estar
 * desactualizado; se reproduce igual que el resto y no se retoca. Ver el README.
 */
export const descripcionLocal = `Restaurante único en La Nucía y uno de los referentes de la comarca de la Marina Baixa.

Especialidad en arroces, pescados frescos y carnes, vive una experiencia gastronómica distinta con nosotros.

Ubicados al lado de la Biblioteca Municipal de Caravana, contamos con comedor interior, terraza con sombra, parque infantil y reservado para tus celebraciones.

Se recomienda reserva.

Con todas las medidas Covid-19 en vigor.`;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/**
 * Aviso de festivo que acompaña al horario en la respuesta de la ficha.
 *
 * Google lo publica junto al lunes (12 de octubre, Fiesta Nacional de España). Se muestra en la
 * sección de horario y no cambia la tabla.
 */
export const avisoFestivo = 'Fiesta Nacional de España: el horario podría ser diferente';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Ulia+La+Nucia/@38.576326,-0.1306691,17z/data=!3m1!4b1!4m6!3m5!1s0xd62035b79fbeee3:0x5e50957b97362ca3!8m2!3d38.576326!4d-0.1306691!16s%2Fg%2F11n__5zpt4?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ4-77eVsDYg0Royw2l3uVUF4&hl=es';

export const phoneHref = 'tel:+34865751220';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 (sábado) cubre la semana completa: **abre de 13:00 a 22:30
 * de jueves a lunes**, con **horario continuo** (sin cierre de mediodía), y **cierra martes y
 * miércoles**. La ficha añade el aviso de que el lunes (12 de octubre, Fiesta Nacional de España) el
 * horario podría ser diferente.
 *
 * Los dos días cerrados no generan ninguna entrada (5 especificaciones en total).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 22:30',
		shifts: [{ open: '13:00', close: '22:30' }],
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
		service: '13:00 – 22:30',
		shifts: [{ open: '13:00', close: '22:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 22:30',
		shifts: [{ open: '13:00', close: '22:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 22:30',
		shifts: [{ open: '13:00', close: '22:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 22:30',
		shifts: [{ open: '13:00', close: '22:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abre de 13:00 a 22:30 de jueves a lunes; martes y miércoles cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
 * los asientos adaptados para sillas de ruedas.
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la primera conserva el espacio
 * antes de la admiración final y la tercera va sin signos de puntuación, como la escribió quien la
 * firmó). Dos son de 5 sobre 5 y una de 4 sobre 5.
 */
export const reviews = [
	{
		text: 'Sepia a la brasa muy fresca con una salsa verde riquísima para mojar el pan !',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Destacan las croquetas, muy ricas y cremosas, y sus deliciosos arroces.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena comida buen servicio volveré sin duda vale la pena lo recomiendo un saludo',
		rating: 4,
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
		question: '¿Dónde está Restaurante Ulia La Nucia?',
		answer:
			'En la Calle Caravana, 9, con código postal 03530, en La Nucía (Alicante). La ficha publica el plus code HVG9+GP La Nucía y las coordenadas 38.576326, -0.1306691.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Ulia La Nucia?',
		answer:
			'La ficha publica un horario continuo de 13:00 a 22:30 de jueves a lunes. Martes y miércoles cierra. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina valenciana, la única categoría que publica la ficha. Tiene 4,4 sobre 5 con 304 reseñas, y la descripción del titular habla de especialidad en arroces, pescados frescos y carnes.',
	},
	{
		question: '¿Hay que reservar?',
		answer:
			'La descripción del titular de la ficha dice literalmente «Se recomienda reserva». Esta web no permite reservar: para reservar mesa, llama al 865 75 12 20.',
	},
	{
		question: '¿Tiene terraza o sitio para niños?',
		answer:
			'Es lo que cuenta el titular en la descripción de su ficha: «contamos con comedor interior, terraza con sombra, parque infantil y reservado para tus celebraciones». Esta web no añade nada más porque la ficha no publica más detalles.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Caravana, 9 y las coordenadas 38.576326, -0.1306691. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code HVG9+GP La Nucía. El titular indica que está al lado de la Biblioteca Municipal de Caravana.',
	},
	{
		question: '¿Qué días cierra?',
		answer:
			'La ficha marca como cerrados el martes y el miércoles. Abre de 13:00 a 22:30 el resto de la semana. Además avisa de que el lunes 12 de octubre, Fiesta Nacional de España, el horario podría ser diferente.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas.',
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
		'Restaurante de cocina valenciana en la Calle Caravana, 9 de La Nucía, con arroces, pescados frescos y carnes y horario continuo de 13:00 a 22:30.',
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
	 * `servesCuisine` recoge la cocina que declara la categoría de Google
	 * («Restaurante de cocina valenciana»).
	 */
	servesCuisine: ['Cocina valenciana'],
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
