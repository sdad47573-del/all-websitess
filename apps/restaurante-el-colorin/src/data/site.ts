/**
 * Datos de Restaurante el Colorín (Extrarradio Diseminados, 195 · 23640 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica un distintivo junto al nombre, web propia, perfiles sociales, descripción del
 * local, carta ni precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-el-colorin.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante el Colorín',
	shortName: 'El Colorín',
	/**
	 * Única categoría que publica Google en esta ficha: «Restaurante».
	 * No se añade ninguna otra que no aparezca.
	 */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la publica con la partida («Extrarradio Diseminados»)
	 * y el número, sin abreviaturas, así que se reproduce tal cual.
	 */
	streetAddress: 'Extrarradio Diseminados, 195',
	postalCode: '23640',
	/**
	 * Municipio tal como lo publica la ficha. Google incluye el local en «23640 Jaén», y como en el
	 * resto de webs del repositorio se usa «Jaén» como localidad, sin deducir otro municipio.
	 */
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (es un móvil, no un fijo). */
	phone: '+34 665 35 32 33',
	latitude: 37.7595489,
	longitude: -3.9011452,
	/** Plus code que publica la ficha. */
	plusCode: 'Q35X+RG Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 140 reseñas). */
	rating: 4.4,
	reviewCount: 140,
	site: site.siteUrl,
} as const;

/**
 * Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal.
 *
 * El listado original añade el parámetro `g_ep` (marca de sesión del navegador desde el que se copió
 * el enlace); aquí se deja la URL limpia, con `hl=es` como en el resto del repositorio.
 */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+el+Color%C3%ADn/@37.7595489,-3.9011452,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd01c079ee635:0xc119dd19fb5ebadf!8m2!3d37.7595489!4d-3.9011452!16s%2Fg%2F11bzp_yc2y?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJNeaeBxzQbQ0R37pe-xndGcE&hl=es';

export const phoneHref = 'tel:+34665353233';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. Es un horario
 * poco habitual y conviene leerlo con el texto de la sección de horario:
 *
 * - Solo abre **sábado y domingo, de 9:00 a 17:00**.
 * - **De lunes a viernes cierra** (los cinco días aparecen como «Cerrado»).
 * - El lunes 12 de octubre lleva el aviso de que, al ser Fiesta Nacional de España, el horario
 *   podría ser diferente. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en
 *   el texto de la sección de horario y no cambia la tabla.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Sábado y domingo, de 9:00 a 17:00; de lunes a viernes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas y las cuatro están marcadas como disponibles: acceso, aparcamiento, aseo y
 * asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra.
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluidas la mayúscula inicial en
 * minúscula y la falta de ortografía de la tercera). Las tres son de 5 sobre 5 y se reproducen
 * igual.
 */
export const reviews = [
	{
		text: 'Estaba exquisita en sabores y texturas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen sitio, buen precio, buena calidad y buena gente ;)',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un lugar magnífico , buenas vistas , escelente comida y gran vinoteca ...',
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
		question: '¿Dónde está Restaurante el Colorín?',
		answer:
			'En Extrarradio Diseminados, 195, con código postal 23640, en Jaén (Andalucía). La ficha publica el plus code Q35X+RG Jaén y las coordenadas 37.7595489, -3.9011452.',
	},
	{
		question: '¿Cuál es el horario de Restaurante el Colorín?',
		answer:
			'La ficha publica que abre solo el sábado y el domingo, de 9:00 a 17:00, y que de lunes a viernes cierra. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto: es la única categoría que publica la ficha. Tiene 4,4 sobre 5 con 140 reseñas, y en las tres reseñas que destaca se habla de sabores y texturas, de la relación calidad-precio y del trato, y de las vistas y la vinoteca.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 665 35 32 33.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Extrarradio Diseminados, 195 y las coordenadas 37.7595489, -3.9011452. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q35X+RG Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles las cuatro entradas de accesibilidad que publica: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
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
		'Restaurante en Extrarradio Diseminados, 195, en Jaén, que abre sábados y domingos de 9:00 a 17:00.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y no declara cocina. */
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
