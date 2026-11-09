/**
 * Datos de Malavida Bulevar (Calle Miguel Castillejo, 1 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica carta, precios, ningún distintivo ni web propia, así que no se reproduce
 * ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/malavida-bulevar',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Malavida Bulevar',
	shortName: 'Malavida',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Bar» (la primera y la que se usa
	 * como categoría principal), «Bar restaurante» y «Restaurante».
	 */
	category: 'Bar',
	categories: ['Bar', 'Bar restaurante', 'Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Miguel Castillejo, 1»: aquí se
	 * desarrolla a «Calle Miguel Castillejo, 1», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Miguel Castillejo, 1',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 652 08 25 39',
	latitude: 37.7795883,
	longitude: -3.788067,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6H6+RQ Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 1.873 reseñas). */
	rating: 4.4,
	reviewCount: 1873,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo (la ficha escribe «wasap»).
 */
export const descripcionLocal = 'Reserva también por wasap al mismo número de contacto!';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Malavida+Bulevar/@37.7795883,-3.788067,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd708a189c063:0x2152839901edadc2!8m2!3d37.7795883!4d-3.788067!16s%2Fg%2F11cmg173zh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJY8CJoQjXbQ0Rwq3tAZmDUiE&hl=es';

export const phoneHref = 'tel:+34652082539';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * todos los días de 8:00 a 17:00 y por la noche de 20:00 a 24:00; el martes es el único día que
 * sirve sin cortar, de 8:00 a 24:00.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 24:00',
		shifts: [{ open: '08:00', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '08:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 8:00 a 17:00 y de 20:00 a 24:00; el martes, sin cortar, de 8:00 a 24:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas: el acceso y el aseo adaptados figuran como disponibles, y el aparcamiento
 * adaptado aparece marcado como no disponible. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Una es de 4 sobre 5, otra de 5 y
 * una negativa de 1 sobre 5, que se reproduce igual.
 */
export const reviews = [
	{
		text: 'Es un buen sitio para tapear, con buena comida y cerveza bien fresquita.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Solomillo a la pimienta buenísimo, buen trato de los camareros.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Nos pedimos mitad de queso y mitad de jamón y escaso.',
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
		question: '¿Dónde está Malavida Bulevar?',
		answer:
			'En la Calle Miguel Castillejo, 1, con código postal 23009, en Jaén (Andalucía). La ficha publica el plus code Q6H6+RQ Jaén y las coordenadas 37.7795883, -3.788067.',
	},
	{
		question: '¿Cuál es el horario de Malavida Bulevar?',
		answer:
			'La ficha publica un horario de 8:00 a 17:00 y de 20:00 a 24:00 todos los días, con el martes como excepción: ese día sirve sin cortar, de 8:00 a 24:00. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica a la vez como bar, bar restaurante y restaurante, sin un tipo de cocina concreto. Tiene 4,4 sobre 5 con 1.873 reseñas, y en las reseñas que destaca se habla de tapear con buena comida y cerveza fría, de un solomillo a la pimienta y del buen trato, y de una queja por una ración escasa.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas, pero en la descripción del titular el propio local invita a reservar «por wasap al mismo número de contacto». Esta web no permite reservar: para hacerlo hay que escribir o llamar al 652 08 25 39.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Miguel Castillejo, 1 y las coordenadas 37.7795883, -3.788067. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6H6+RQ Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: marca como disponibles el acceso y el aseo adaptados para sillas de ruedas, y señala que no hay aparcamiento adaptado. No publica ninguna otra.',
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
		'Bar restaurante en la Calle Miguel Castillejo, 1 de Jaén, con servicio de 8:00 a 17:00 y de 20:00 a 24:00 todos los días.',
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
	/* Sin `servesCuisine`: Google publica tipos de establecimiento, no una cocina concreta. */
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
