/**
 * Datos de Doña Croqueta Cocina y Más (Ronda de Granada, 11 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal y las reseñas destacadas.
 *
 * La ficha tiene el bloque de atributos vacío (`info[100]` = `[]`), así que no hay `accesibilidad`
 * ni `amenityFeature`: el local no publica ningún servicio de accesibilidad y la web no afirma nada
 * al respecto. Tampoco publica descripción del titular, ni distintivo junto al nombre, ni precios.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://dona-croqueta.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre del negocio. La ficha lo publica como «Doña CROQUETA COCINA Y MÁS.», con el resto del
	 * nombre en mayúsculas y un punto final; aquí se normaliza a mayúsculas y minúsculas normales y
	 * sin el punto suelto, como se hizo en la web `cuevas-ali-baba` con «CUEVAS ALÍ BABÁ».
	 */
	name: 'Doña Croqueta Cocina y Más',
	shortName: 'Doña Croqueta',
	/** Categoría que publica Google en esta ficha: «Restaurante de cocina española», la única. */
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Rda. Granada, 11»: aquí se desarrolla a
	 * «Ronda de Granada, 11», que es como figura la vía en los listados públicos del propio local. El
	 * código postal 13004 y el municipio (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Ronda de Granada, 11',
	postalCode: '13004',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 926 25 02 36',
	latitude: 38.9799562,
	longitude: -3.926641,
	/** Plus code que publica la ficha. */
	plusCode: 'X3HF+X8 Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,1 sobre 5 con 1.496 reseñas). */
	rating: 4.1,
	reviewCount: 1496,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Do%C3%B1a+CROQUETA+COCINA+Y+M%C3%81S./@38.9799562,-3.926641,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3698080f187:0x6596bdfd3f6e2eee!8m2!3d38.9799562!4d-3.926641!16s%2Fg%2F1tftgnv4?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJh_GAgGnDaw0R7i5uP_29lmU&hl=es';

export const phoneHref = 'tel:+34926250236';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre
 * todos los días menos el lunes: de martes a sábado con dos turnos (comidas de 12:00 a 17:00 y cenas
 * de 20:00 a 0:30) y el domingo solo al mediodía.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 0:30 se escribe como 00:30 en los datos estructurados.
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
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 17:00 · 20:00 – 0:30',
		shifts: [
			{ open: '12:00', close: '17:00' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 17:00',
		shifts: [{ open: '12:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abre todos los días menos el lunes';

/** Nota sobre accesibilidad: la ficha no publica la lista de servicios. */
export const notaAccesibilidad =
	'La ficha no publica ningún servicio de accesibilidad, así que esta web no afirma nada sobre el acceso al local.';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación: la segunda escribe «empanada,
 * croquetas» sin espacio detrás de la coma y la tercera termina en puntos suspensivos. Las tres son
 * de 5 sobre 5. Google guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya
 * presenta cada reseña entre « ».
 */
export const reviews = [
	{
		text: 'Buena cocina y buena atención, raciones generosas',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena comida como el Queso Frito, carne empanada,croquetas variadas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buen trato, comida exquisita, atienden rápido buen ambiente...',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, ni distintivo, ni precios, ni carta, así que ninguna
 * respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Doña Croqueta Cocina y Más?',
		answer:
			'En la Ronda de Granada, 11, con código postal 13004, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3HF+X8 Ciudad Real y las coordenadas 38.9799562, -3.926641.',
	},
	{
		question: '¿Cuál es el horario de Doña Croqueta Cocina y Más?',
		answer:
			'La ficha publica un horario de martes a sábado con dos turnos, de 12:00 a 17:00 y de 20:00 a 0:30, y el domingo solo al mediodía, de 12:00 a 17:00. El lunes está cerrado. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina española. Tiene 4,1 sobre 5 con 1.496 reseñas, y en las que destaca se habla del queso frito, de la carne empanada, de las croquetas variadas, del tamaño de las raciones y de la rapidez del servicio.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 926 25 02 36.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Ronda de Granada, 11 y las coordenadas 38.9799562, -3.926641. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3HF+X8 Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha de Google Maps de este local no publica ningún servicio de accesibilidad, así que esta web no puede afirmar nada sobre el acceso para sillas de ruedas. Conviene preguntar por teléfono antes de ir.',
	},
	{
		question: '¿Tiene algún distintivo en Google Maps?',
		answer:
			'La ficha no muestra ninguna etiqueta junto al nombre, así que esta web no reproduce ninguna. Para saber qué se sirve y a qué hora, lo mejor es llamar al 926 25 02 36.',
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
		'Restaurante de cocina española en la Ronda de Granada, 11 de Ciudad Real, abierto de martes a sábado con dos turnos y el domingo al mediodía.',
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
	/* «Cocina española» sí nombra una cocina concreta: se traduce al español. */
	servesCuisine: ['Española'],
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
	/* Sin `amenityFeature`: la ficha no publica servicios de accesibilidad. */
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
