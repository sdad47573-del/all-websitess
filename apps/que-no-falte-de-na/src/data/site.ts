/**
 * Datos de Que no falte de na (Calle Libertad, 45 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular, ni distintivo junto al nombre, ni precios: por eso no
 * hay `descripcionLocal`, ni `distintivo` y no se reproduce ningún precio.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://que-no-falte-de-na.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Que no falte de na',
	shortName: 'Que no falte de na',
	/** Categoría que publica Google en esta ficha: «Bar restaurante», la única. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Libertad, 45»: aquí se desarrolla la
	 * abreviatura a «Calle», como en el resto del repositorio. El código postal 13004 y el municipio
	 * (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle Libertad, 45',
	postalCode: '13004',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 604 17 09 35',
	latitude: 38.98694,
	longitude: -3.92113,
	/** Plus code que publica la ficha. */
	plusCode: 'X3PH+QG Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 4 reseñas). */
	rating: 5,
	reviewCount: 4,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Que+no+falte+de+na/@38.98694,-3.92113,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc359f15ab83f:0x4ce703f5c7ce8990!8m2!3d38.98694!4d-3.92113!16s%2Fg%2F11ynz5tvsh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJP7ha8VnDaw0RkInOx_UD50w&hl=es';

export const phoneHref = 'tel:+34604170935';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre
 * todos los días: de lunes a viernes de 7:00 a 22:00, el sábado de 9:00 a 23:00 y el domingo de
 * 9:00 a 16:00.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * Aquí ningún día cierra, así que no hay ninguna franja vacía y los siete días generan su propia
 * especificación en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:00 – 22:00',
		shifts: [{ open: '07:00', close: '22:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:00 – 22:00',
		shifts: [{ open: '07:00', close: '22:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 22:00',
		shifts: [{ open: '07:00', close: '22:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 22:00',
		shifts: [{ open: '07:00', close: '22:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 22:00',
		shifts: [{ open: '07:00', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 23:00',
		shifts: [{ open: '09:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 16:00',
		shifts: [{ open: '09:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a viernes de 7:00 a 22:00, el sábado de 9:00 a 23:00 y el domingo de 9:00 a 16:00';

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
 * Aquí la ficha destaca **dos** (y en total solo tiene cuatro reseñas), y se citan tal cual, sin
 * corregir su redacción ni su puntuación. Las dos son de 5 sobre 5. Google guarda cada extracto
 * entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « ».
 */
export const reviews = [
	{
		text: 'Menús baratos y estupendos',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La atención es excelente y buen ambiente.',
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
		question: '¿Dónde está Que no falte de na?',
		answer:
			'En la Calle Libertad, 45, con código postal 13004, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3PH+QG Ciudad Real y las coordenadas 38.98694, -3.92113.',
	},
	{
		question: '¿Cuál es el horario de Que no falte de na?',
		answer:
			'La ficha publica un horario de lunes a viernes de 7:00 a 22:00, el sábado de 9:00 a 23:00 y el domingo de 9:00 a 16:00, todos los días de la semana. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como «Bar restaurante», sin un tipo de cocina concreto. Tiene 5 sobre 5 con 4 reseñas, y en las que destaca se habla de menús baratos y estupendos y de una atención excelente y buen ambiente.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 604 17 09 35.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Libertad, 45 y las coordenadas 38.98694, -3.92113. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3PH+QG Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una única entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Cuál es el teléfono de Que no falte de na?',
		answer:
			'La ficha publica el 604 17 09 35, un teléfono móvil. Es el único número que aparece y esta web no añade ningún otro.',
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
		'Bar restaurante en la Calle Libertad, 45 de Ciudad Real, abierto todos los días con menús diarios.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Bar restaurante», sin cocina concreta. */
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
