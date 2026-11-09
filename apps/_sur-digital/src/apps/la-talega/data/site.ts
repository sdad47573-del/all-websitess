/**
 * Datos de La Talega. (C. Melchor Cobo Medina, 6 · 23001 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta ni precios, así
 * que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/la-talega',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Talega',
	shortName: 'La Talega',
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Bar'],
	/** Dirección publicada en la ficha, con la abreviatura «C.» que usa Google. */
	streetAddress: 'C. Melchor Cobo Medina, 6',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (móvil). */
	phone: '+34 637 95 75 00',
	latitude: 37.7671535,
	longitude: -3.7852943,
	/** Plus code que publica la ficha. */
	plusCode: 'Q687+VV Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,5 con 467 reseñas). */
	rating: 4.5,
	reviewCount: 467,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Se admiten perros». Se recoge como dato de la ficha, sin ampliarlo ni
 * interpretarlo.
 */
export const distintivo = 'Se admiten perros';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Talega/@37.7671535,-3.7852943,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd77514b95b1f:0xe240e866e39c3852!8m2!3d37.7671535!4d-3.7852943!16s%2Fg%2F1vjdrds2?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJH1u5FHXXbQ0RUjic42boQOI&hl=es';

export const phoneHref = 'tel:+34637957500';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 7 de octubre de 2026 cubre del miércoles 7 al martes 13 de octubre. El local
 * cierra el lunes y abre de martes a domingo a mediodía; la cena solo se sirve de martes a sábado
 * (el jueves y el domingo únicamente hay mediodía).
 *
 * Los tramos del mediodía acaban a las 16:30 de martes y miércoles y a las 17:30 el resto; la cena
 * termina a las 23:30 de martes y miércoles y a medianoche de viernes a sábado. El lunes 12,
 * Fiesta Nacional de España, trae el aviso de que el horario podría ser diferente; el cierre del
 * lunes es además el habitual, según fuentes públicas de la ficha.
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
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:30 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:30', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:30 – 17:30',
		shifts: [{ open: '13:30', close: '17:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:30 – 17:30 · 20:30 – 24:00',
		shifts: [
			{ open: '13:30', close: '17:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:30 – 17:30 · 20:30 – 24:00',
		shifts: [
			{ open: '13:30', close: '17:30' },
			{ open: '20:30', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:30 – 17:30',
		shifts: [{ open: '13:30', close: '17:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a domingo · mediodía desde las 13:30 y cena de martes a sábado desde las 20:30; lunes cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Es la ficha con más entradas vistas en el repositorio: cinco. El acceso, el aseo y los asientos
 * adaptados para sillas de ruedas están disponibles; el aparcamiento adaptado y el bucle magnético
 * asistencial están marcados como no disponibles.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Esta ficha solo publica **dos** reseñas destacadas (no tres, como el resto de webs del
 * repositorio); se citan tal cual, sin corregir su redacción ni su puntuación. Las dos son de 5
 * sobre 5.
 */
export const reviews = [
	{
		text: 'Nos pedimos, croquetas, chipirones, berenjena, lagarto, queso y torreznos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Exquisitas setas con jamón y huevos.',
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
		question: '¿Dónde está La Talega?',
		answer:
			'En la C. Melchor Cobo Medina, 6, con código postal 23001, en Jaén (Andalucía). La ficha publica el plus code Q687+VV Jaén y las coordenadas 37.7671535, -3.7852943.',
	},
	{
		question: '¿Cuál es el horario de La Talega?',
		answer:
			'Cierra el lunes. De martes a domingo abre al mediodía, desde las 13:30, y la cena solo se sirve de martes a sábado, desde las 20:30: el jueves y el domingo únicamente hay mediodía. El mediodía acaba a las 16:30 de martes y miércoles y a las 17:30 el resto; la cena termina a las 23:30 de martes y miércoles y a medianoche viernes y sábado. Es el horario publicado en la ficha consultada el 7 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como restaurante y bar. Tiene 4,5 sobre 5 con 467 reseñas, y en las dos reseñas que destaca se habla de croquetas, chipirones, berenjena, lagarto, queso y torreznos, y de unas setas con jamón y huevos.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'Google muestra el distintivo «Se admiten perros» junto al nombre en la ficha. Es el único distintivo de ese tipo que publica, y esta web no lo amplía ni lo interpreta: para cualquier detalle, conviene llamar al 637 95 75 00.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Melchor Cobo Medina, 6 y las coordenadas 37.7671535, -3.7852943. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q687+VV Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y como no disponibles el aparcamiento adaptado y el bucle magnético asistencial. Son las cinco entradas de accesibilidad que publica.',
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
		'Restaurante y bar en la C. Melchor Cobo Medina, 6 de Jaén, con mediodía de martes a domingo y cena de martes a sábado; cierra los lunes.',
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
	/* Sin `servesCuisine`: Google solo publica las categorías «Restaurante» y «Bar», sin cocina. */
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
