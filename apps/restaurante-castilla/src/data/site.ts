/**
 * Datos de Restaurante Castilla (Calle de la Mata, 6 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * Dos decisiones de este fichero:
 *
 *  - **Sin descripción del titular.** Google devuelve en el campo de descripción solo la palabra
 *    «Abierto» (el estado de apertura), no un texto escrito por el negocio. Como un estado suelto no
 *    es una descripción y podría ser un artefacto de la propia ficha, no se publica: no hay
 *    `descripcionLocal` y la portada no muestra el bloque de descripción.
 *  - **Cierre después de medianoche.** El local cierra a las 0:30, así que en los datos estructurados
 *    el cierre se escribe como `00:30`.
 *
 * La ficha tampoco publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-castilla.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Castilla',
	shortName: 'Restaurante Castilla',
	/** Primera categoría que publica Google: «Restaurante». */
	category: 'Restaurante',
	/** Las tres categorías que publica la ficha, en su orden. */
	categories: ['Restaurante', 'Bar', 'Cafetería'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. de la Mata, 6»: aquí se desarrolla la
	 * abreviatura a «Calle», como en el resto del repositorio. El código postal 13004 y el municipio
	 * (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle de la Mata, 6',
	postalCode: '13004',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 926 22 53 66',
	latitude: 38.9854357,
	longitude: -3.9222505,
	/** Plus code que publica la ficha. */
	plusCode: 'X3PH+53 Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 715 reseñas). */
	rating: 4.3,
	reviewCount: 715,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Castilla/@38.9854357,-3.9222505,16z/data=!3m1!4b1!4m6!3m5!1s0xd6bc340bc475d3f:0x44c44a42a8804594!8m2!3d38.9854357!4d-3.9222505!16s%2Fg%2F11b61pt_cd?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJP11HvEDDaw0RlEWAqEJKxEQ&hl=es';

export const phoneHref = 'tel:+34926225366';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre de
 * martes a viernes de 8:00 a 0:30, el sábado de 9:30 a 0:30 y el domingo de 10:00 a 0:30; el lunes
 * cierra.
 *
 * Ojo con el cierre: la ficha escribe «0:30», es decir, media hora después de medianoche. En los
 * datos estructurados se escribe como `00:30`.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
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
		service: '8:00 – 0:30',
		shifts: [{ open: '08:00', close: '00:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 0:30',
		shifts: [{ open: '08:00', close: '00:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 0:30',
		shifts: [{ open: '08:00', close: '00:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 0:30',
		shifts: [{ open: '08:00', close: '00:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:30 – 0:30',
		shifts: [{ open: '09:30', close: '00:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 0:30',
		shifts: [{ open: '10:00', close: '00:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a viernes de 8:00 a 0:30, el sábado de 9:30 a 0:30 y el domingo de 10:00 a 0:30; el lunes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha trae una sola entrada, y figura como disponible: el acceso para sillas de ruedas. No
 * publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la tercera abrevia «tb»). Las tres
 * son de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web
 * ya presenta cada reseña entre « ».
 */
export const reviews = [
	{
		text: 'Raciones exquisitas, la oreja buenísima.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen sitio, buen ambiente, buenos precios y buenos camareros.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La merluza con una ración de ensalada tb muy bien, a la romana, en su punto.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, ni precios, ni carta, así que ninguna respuesta los
 * reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Castilla?',
		answer:
			'En la Calle de la Mata, 6, con código postal 13004, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3PH+53 Ciudad Real y las coordenadas 38.9854357, -3.9222505.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Castilla?',
		answer:
			'La ficha publica un horario de martes a viernes de 8:00 a 0:30, el sábado de 9:30 a 0:30 y el domingo de 10:00 a 0:30. El lunes cierra. El cierre es a las 0:30, es decir, media hora después de medianoche. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica a la vez como restaurante, bar y cafetería, sin una cocina concreta. Tiene 4,3 sobre 5 con 715 reseñas, y en las que destaca se habla de raciones, de la oreja, de la merluza a la romana, de los precios y del servicio.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 926 22 53 66.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de la Mata, 6 y las coordenadas 38.9854357, -3.9222505. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3PH+53 Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una única entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Cuál es el teléfono de Restaurante Castilla?',
		answer:
			'La ficha publica el 926 22 53 66, un teléfono fijo. Es el único número que aparece y esta web no añade ningún otro.',
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
		'Restaurante, bar y cafetería en la Calle de la Mata, 6 de Ciudad Real, abierto de martes a domingo hasta las 0:30.',
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
	/* Sin `servesCuisine`: Google publica «Restaurante», «Bar» y «Cafetería», sin cocina concreta. */
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
