/**
 * Datos de Restaurante La Fiambrera (Avenida Basagoiti, 44 · 48991 Algorta, Bizkaia).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas con texto.
 *
 * La ficha no publica precios ni carta, así que no se reproduce ninguno. Tampoco muestra ningún
 * distintivo junto al nombre.
 *
 * Google publica la dirección abreviada («Av. Basagoiti, 44»). En la web se desarrolla a
 * **Avenida Basagoiti, 44**, como el resto de direcciones del repositorio (donde «C.» pasa a
 * «Calle»). La localidad se publica como «Algorta» (localidad del municipio de Getxo): aquí se
 * reproduce tal cual. La provincia se publica como «Biscay»: aquí se escribe «Bizkaia».
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-la-fiambrera',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Fiambrera',
	shortName: 'La Fiambrera',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Restaurante de desayunos»,
	 * «Bar restaurante» y «Restaurante de comida para llevar».
	 */
	category: 'Restaurante de desayunos',
	categories: [
		'Restaurante de desayunos',
		'Bar restaurante',
		'Restaurante de comida para llevar',
	],
	streetAddress: 'Avenida Basagoiti, 44',
	postalCode: '48991',
	city: 'Algorta',
	/** La ficha publica «Biscay»: aquí se escribe «Bizkaia». */
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 622 35 59 80',
	latitude: 43.3479105,
	longitude: -3.0105739,
	/** Plus code que publica la ficha («8XXQ+5Q Algorta» en corto). */
	plusCode: '8CMR8XXQ+5Q',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 204 reseñas). */
	rating: 4.7,
	reviewCount: 204,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Fiambrera/@43.3479105,-3.0105739,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e5bf31fe7c9a9:0xdfae0d475fa03082!8m2!3d43.3479105!4d-3.0105739!16s%2Fg%2F11nxrrglwt?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJqcnnH_NbTg0RgjCgX0cNrt8&hl=es';

export const phoneHref = 'tel:+34622355980';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El local solo abre tres días: martes y miércoles de 9:00 a 17:00 y el jueves de 12:00 a
 * 17:00. Cierra viernes, sábado, domingo y lunes. El lunes lleva el aviso de «Fiesta Nacional
 * de España: el horario podría ser diferente» (12 de octubre).
 *
 * Un día sin tramos (`shifts: []`) es un día cerrado.
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
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 17:00',
		shifts: [{ open: '12:00', close: '17:00' }],
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
		service: 'Cerrado',
		shifts: [],
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
export const hoursSummary = 'Solo de martes a jueves';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cinco entradas y las cinco figuran como disponibles: acceso, aparcamiento, aseo y
 * asientos adaptados para sillas de ruedas, y bucle magnético asistencial. Es la primera ficha
 * del repositorio con toda la accesibilidad en positivo.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Bucle magnético asistencial', disponible: true },
] as const;

/**
 * Reseñas destacadas con texto que publica la ficha.
 *
 * Son las tres que destaca la respuesta de la ficha, las tres de 5 sobre 5. La respuesta no trae
 * los nombres de quienes las firman (solo sus avatares), así que se citan sin autor, con su
 * puntuación y su enlace al listado completo. Se reproducen tal cual, sin corregir su ortografía.
 */
export const resenas = [
	{
		text: 'Pad thai, lasaña de verduras bocadillos y sandwiches buenísimos.',
		stars: 5,
	},
	{
		text: 'Tortilla melosa, sándwich de Pastrami y el Vietnamita vegano o tradicional.',
		stars: 5,
	},
	{
		text: 'Lasagna, croquetas melosas , exquisitas albóndigas de bacalao...',
		stars: 5,
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios ni carta, así que ninguna respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante La Fiambrera?',
		answer:
			'En Avenida Basagoiti, 44, con código postal 48991, en Algorta (Bizkaia, País Vasco). La ficha publica las coordenadas 43.3479105, -3.0105739 y el plus code 8CMR8XXQ+5Q.',
	},
	{
		question: '¿Cuál es el horario de La Fiambrera?',
		answer:
			'La ficha publica este horario: el local solo abre de martes a jueves, martes y miércoles de 9:00 a 17:00 y el jueves de 12:00 a 17:00. Cierra viernes, sábado, domingo y lunes. Es el horario publicado en la ficha consultada el 11 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de desayunos, bar restaurante y restaurante de comida para llevar. Las reseñas que destaca la ficha hablan de pad thai, lasaña, bocadillos y sándwiches, tortilla melosa, croquetas y albóndigas de bacalao. Tiene 4,7 sobre 5 con 204 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 622 35 59 80.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida Basagoiti, 44 y las coordenadas 43.3479105, -3.0105739. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cinco entradas de accesibilidad y las cinco figuran como disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas, y bucle magnético asistencial.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 11 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de desayunos en Avenida Basagoiti, 44, en Algorta: bocadillos, sándwiches y platos caseros, solo de martes a jueves.',
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
	/* Sin `servesCuisine`: ninguna de las tres categorías de la ficha nombra un tipo de cocina
	   concreto. */
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
