/**
 * Datos de Restaurante Rays (C/ de Sant Vicent, 4 · 03501 Benidorm).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, el resumen del lugar que publica Google y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, carta ni precios, así que no se reproduce ninguno
 * de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-rays',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Rays',
	shortName: 'Rays',
	/**
	 * Categoría que publica Google en esta ficha: «Restaurante de fish & chips», la única. Es el
	 * tipo de cocina que declara la propia ficha, así que se recoge tal cual.
	 */
	category: 'Restaurante de fish & chips',
	categories: ['Restaurante de fish & chips'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C/ de Sant Vicent, 4»: aquí se
	 * reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas.
	 */
	streetAddress: 'C/ de Sant Vicent, 4',
	postalCode: '03501',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 965 85 92 11',
	latitude: 38.5361922,
	longitude: -0.1320868,
	/** Plus code que publica la ficha. */
	plusCode: 'GVP9+F5 Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 532 reseñas). */
	rating: 4.6,
	reviewCount: 532,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Pescado frito de tipo inglés desde 1979». Se recoge como dato de la ficha, sin
 * ampliarlo ni interpretarlo: de sus dos etiquetas, esta es la que Google pone junto al nombre.
 */
export const distintivo = 'Pescado frito de tipo inglés desde 1979';

/**
 * Resumen del lugar que publica Google en la ficha.
 *
 * Es el segundo texto que acompaña al distintivo: lo firma Google, no el titular (la ficha no
 * publica descripción del titular, `merchantdescription` viene vacío). Se cita literal, sin
 * interpretarlo: la fecha «de 1979» se deja como la escribe Google y no se traduce a «abierto
 * desde 1979».
 */
export const resumenFicha =
	'Friso de azulejo y cuadro de nudos marineros en un restaurante inglés de 1979 con pescado frito y patatas.';

/**
 * Cocina que se declara en los datos estructurados.
 *
 * Sale de la categoría publicada, «Restaurante de fish & chips», que sí nombra una cocina: es el
 * caso de otras webs del repositorio (`Parrilla`, `Cocina española`). No se inventa ninguna otra.
 */
export const cocina = ['Fish & chips'] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Rays/@38.5361922,-0.1320868,17z/data=!3m1!4b1!4m6!3m5!1s0xd6204dd3ef9a933:0x59dc7f30db563ac7!8m2!3d38.5361922!4d-0.1320868!16s%2Fg%2F1v8l0z3r?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJM6n5Pt0EYg0RxzpW2zB_3Fk&hl=es';

export const phoneHref = 'tel:+34965859211';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. La ficha
 * publica el mismo tramo, de 12:00 a 21:30, de lunes a sábado, y el domingo cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 21:30',
		shifts: [{ open: '12:00', close: '21:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 21:30',
		shifts: [{ open: '12:00', close: '21:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 21:30',
		shifts: [{ open: '12:00', close: '21:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 21:30',
		shifts: [{ open: '12:00', close: '21:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 21:30',
		shifts: [{ open: '12:00', close: '21:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 21:30',
		shifts: [{ open: '12:00', close: '21:30' }],
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
export const hoursSummary = 'De 12:00 a 21:30 (el domingo cierra)';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y **ninguna de las dos figura como disponible**: el aparcamiento y los asientos
 * adaptados para sillas de ruedas vienen marcados en negativo («No hay aparcamiento accesible con
 * silla de ruedas» y «No hay asientos adaptados para discapacitados»). La ficha no publica el
 * acceso ni el aseo, así que esta web no dice nada de ellos.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la tercera cierra con dos signos
 * de exclamación). Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Buena calidad de la comida, el bacalao muy rico y el rebozado muy bueno.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Volveré a pedir el pastel de carne y la tarta manzana.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Excelente pescado con patatas, y ensalada de atún!!',
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
		question: '¿Dónde está Restaurante Rays?',
		answer:
			'En la C/ de Sant Vicent, 4, con código postal 03501, en Benidorm (Alicante). La ficha publica el plus code GVP9+F5 Benidorm y las coordenadas 38.5361922, -0.1320868.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Rays?',
		answer:
			'La ficha publica un horario continuado de 12:00 a 21:30 de lunes a sábado, y el domingo cerrado. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de fish & chips, y muestra junto al nombre el distintivo «Pescado frito de tipo inglés desde 1979». Tiene 4,6 sobre 5 con 532 reseñas, y en las reseñas que destaca se habla de la calidad de la comida, del bacalao y del rebozado, del pescado con patatas y la ensalada de atún, y del pastel de carne y la tarta de manzana.',
	},
	{
		question: '¿Qué dicen el distintivo y el resumen de la ficha?',
		answer:
			'La ficha muestra junto al nombre el distintivo «Pescado frito de tipo inglés desde 1979» y publica además este resumen del lugar: «Friso de azulejo y cuadro de nudos marineros en un restaurante inglés de 1979 con pescado frito y patatas.». Los dos textos son de Google, no del titular, y esta web los recoge tal cual, sin ampliarlos ni interpretarlos.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 965 85 92 11.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C/ de Sant Vicent, 4 y las coordenadas 38.5361922, -0.1320868. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVP9+F5 Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como no disponibles: el aparcamiento y los asientos adaptados para sillas de ruedas. No publica el acceso ni el aseo, así que esta web no dice nada de ellos. Para saber qué hay hoy en el local, lo mejor es llamar al 965 85 92 11.',
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
		'Restaurante de fish & chips en la C/ de Sant Vicent, 4 de Benidorm, con horario continuado de 12:00 a 21:30 y cerrado los domingos.',
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
	/* La cocina sí sale de la categoría publicada («Restaurante de fish & chips»). */
	servesCuisine: cocina,
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
