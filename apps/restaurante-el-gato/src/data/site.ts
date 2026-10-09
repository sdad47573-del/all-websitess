/**
 * Datos de Restaurante El Gato (Carr. de Mazarrón, 36 · 30310 Cartagena).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta, precios ni web propia, así que no se reproduce
 * ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-el-gato.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Gato',
	shortName: 'El Gato',
	/** Única categoría que publica Google en esta ficha: «Restaurante». */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha (Google la abrevia como «Carr. de Mazarrón, 36»). */
	streetAddress: 'Carr. de Mazarrón, 36',
	postalCode: '30310',
	city: 'Cartagena',
	province: 'Murcia',
	region: 'Murcia',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 637 10 13 34',
	latitude: 37.6200223,
	longitude: -1.0130472,
	/** Plus code que publica la ficha. */
	plusCode: 'JXCP+2Q Cartagena',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 825 reseñas). */
	rating: 4.4,
	reviewCount: 825,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Gato/@37.6200223,-1.0130472,17z/data=!3m1!4b1!4m6!3m5!1s0xd634265b4cad9e1:0x5809110a43d5352c!8m2!3d37.6200223!4d-1.0130472!16s%2Fg%2F11bt_h164_?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ4dnKtGVCYw0RLDXVQwoRCVg&hl=es';

export const phoneHref = 'tel:+34637101334';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre de
 * lunes a sábado con horario continuado de 5:00 a 16:00 y cierra los domingos.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '5:00 – 16:00',
		shifts: [{ open: '05:00', close: '16:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '5:00 – 16:00',
		shifts: [{ open: '05:00', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '5:00 – 16:00',
		shifts: [{ open: '05:00', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '5:00 – 16:00',
		shifts: [{ open: '05:00', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '5:00 – 16:00',
		shifts: [{ open: '05:00', close: '16:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '5:00 – 16:00',
		shifts: [{ open: '05:00', close: '16:00' }],
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
export const hoursSummary = 'Abierto de lunes a sábado de 5:00 a 16:00; domingos cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas, y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluido el espacio antes de la
 * coma de la primera y el signo de la tercera). Una es de 5 sobre 5 y dos de 4.
 */
export const reviews = [
	{
		text: 'Todo muy rico , buen ambiente y los camareros muy atentos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pescado, tapas y cerveza fría a buen precio.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buen tapeo y buen desayuno¡ Tostadas súper abundantes.',
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
		question: '¿Dónde está Restaurante El Gato?',
		answer:
			'En la Carr. de Mazarrón, 36, con código postal 30310, en Cartagena (Murcia). La ficha publica el plus code JXCP+2Q Cartagena y las coordenadas 37.6200223, -1.0130472.',
	},
	{
		question: '¿Cuál es el horario de Restaurante El Gato?',
		answer:
			'La ficha lo da abierto de lunes a sábado, con horario continuado de 5:00 a 16:00, y cerrado los domingos. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto. Tiene 4,4 sobre 5 con 825 reseñas, y en las que destaca se habla del tapeo, del pescado y las tapas con cerveza fría, y de los desayunos con tostadas abundantes.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 637 10 13 34.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carr. de Mazarrón, 36 y las coordenadas 37.6200223, -1.0130472, en Cartagena. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code JXCP+2Q Cartagena.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas.',
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
		'Restaurante en la Carr. de Mazarrón, 36 de Cartagena, abierto de lunes a sábado de 5:00 a 16:00.',
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
	/* Sin `servesCuisine`: la ficha no publica una cocina concreta y no se inventa una. */
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
