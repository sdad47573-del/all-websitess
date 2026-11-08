/**
 * Datos de Restaurante La Espadaña Bulevar (P.º de España, 31 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta ni precios, así
 * que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-la-espadana-bulevar',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Espadaña Bulevar',
	shortName: 'La Espadaña Bulevar',
	/**
	 * Única categoría que publica Google en esta ficha: «Restaurante familiar».
	 * No se añade ninguna otra que no aparezca, ni siquiera «Restaurante» suelto.
	 */
	category: 'Restaurante familiar',
	categories: ['Restaurante familiar'],
	/** Dirección publicada en la ficha, con la abreviatura «P.º» que usa Google. */
	streetAddress: 'P.º de España, 31',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 52 98 64',
	latitude: 37.786372,
	longitude: -3.7916322,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6P5+G8 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 con 479 reseñas). */
	rating: 4.3,
	reviewCount: 479,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Espada%C3%B1a+Bulevar/@37.786372,-3.7916322,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd781574be257:0x7685790e1f8378e5!8m2!3d37.786372!4d-3.7916322!16s%2Fg%2F11tr_f21y0?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJV-JLV4HXbQ0R5XiDHw55hXY&hl=es';

export const phoneHref = 'tel:+34953529864';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local
 * cierra el lunes y abre de martes a domingo a mediodía (desde las 13:00); la cena se sirve de
 * martes a sábado, y el domingo solo hay mediodía.
 *
 * Dos detalles del payload que se trasladan tal cual: la cena arranca a las 20:30 de martes a
 * viernes y a las 20:00 el sábado, y en todos esos días termina a medianoche (que en los datos
 * estructurados se escribe como cierre a las 00:00). El lunes 12, Fiesta Nacional de España, trae
 * además el aviso de que el horario podría ser diferente: ese día ya está cerrado por descanso
 * semanal, así que el aviso se recoge en el texto de la sección de horario y no en la tabla.
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
		service: '13:00 – 17:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 17:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 17:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 17:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a domingo · mediodía desde las 13:00 y cena de martes a sábado desde las 20:30; lunes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres están disponibles: acceso, aseo y asientos adaptados para sillas de
 * ruedas. La ficha no publica ninguna otra (ni aparcamiento adaptado ni bucle magnético).
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. No todas son de 5: la tercera es
 * de 4 y se reproduce igual, sin esconderla.
 */
export const reviews = [
	{
		text: 'Muy rico, todo lo que hemos probado: ensaladilla rusa, risotto y codillo.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Y lo mejor los precios, 43€ salimos a 3 raciones y 3 rondas de cerveza.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'También pedimos Jamón y queso y nos dijeron que no había jamón...',
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
		question: '¿Dónde está Restaurante La Espadaña Bulevar?',
		answer:
			'En el P.º de España, 31, con código postal 23009, en Jaén (Andalucía). La ficha publica el plus code Q6P5+G8 Jaén y las coordenadas 37.786372, -3.7916322.',
	},
	{
		question: '¿Cuál es el horario de Restaurante La Espadaña Bulevar?',
		answer:
			'Cierra el lunes. De martes a domingo abre al mediodía, desde las 13:00, y la cena solo se sirve de martes a sábado: el domingo únicamente hay mediodía. La cena empieza a las 20:30 de martes a viernes y a las 20:00 el sábado, y en todos esos días termina a medianoche. Es el horario publicado en la ficha consultada el 7 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como restaurante familiar. Tiene 4,3 sobre 5 con 479 reseñas, y en las tres reseñas que destaca se habla de ensaladilla rusa, risotto y codillo, del precio de las raciones y de un pedido de jamón y queso.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 52 98 64.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección P.º de España, 31 y las coordenadas 37.786372, -3.7916322. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6P5+G8 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas: son las tres entradas de accesibilidad que publica, y ninguna está marcada como no disponible.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 953 52 98 64.',
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
		'Restaurante familiar en el P.º de España, 31 de Jaén, con mediodía de martes a domingo y cena de martes a sábado; cierra los lunes.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante familiar», sin cocina. */
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
