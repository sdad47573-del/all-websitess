/**
 * Datos de Restaurante El Fogón de Toñi (Calle Gómez Becerra, 17 · 10001 Cáceres).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y
 * reseñas destacadas.
 *
 * La ficha publica la dirección con un «Calle de» residual delante («Calle de, Calle Gómez
 * Becerra, 17»): aquí se reproduce la forma limpia, «Calle Gómez Becerra, 17», con el código
 * postal 10001 y la localidad (Cáceres) tal cual. La ficha no publica descripción del titular,
 * web propia, perfiles sociales, carta ni precios, así que no se reproduce ninguno. Tampoco
 * publica terraza, menú ni otros servicios del local.
 */

 /** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-el-fogon-de-toni.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Fogón de Toñi',
	shortName: 'El Fogón de Toñi',
	/**
	 * Categorías que publica Google en esta ficha: «Restaurante de cocina española» (la primera
	 * y la que se usa como categoría principal) y «Lounge».
	 */
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española', 'Lounge'],
	/**
	 * Dirección publicada en la ficha: «Calle Gómez Becerra, 17, 10001 Cáceres», en el
	 * Centro-Casco Antiguo. «Centro-Casco Antiguo» es el barrio y se conserva aparte.
	 */
	streetAddress: 'Calle Gómez Becerra, 17',
	district: 'Centro-Casco Antiguo',
	postalCode: '10001',
	city: 'Cáceres',
	province: 'Cáceres',
	region: 'Extremadura',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 609 02 18 49',
	latitude: 39.4693266,
	longitude: -6.3802366,
	/** Plus code que publica la ficha (corto; el completo es 8CFMFJ99+PW). */
	plusCode: 'FJ99+PW Cáceres',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 659 reseñas). */
	rating: 4.4,
	reviewCount: 659,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Fog%C3%B3n+de+To%C3%B1i/@39.4693266,-6.3802366,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfdb7fce55f3:0x610a62d60c4e14bc!8m2!3d39.4693266!4d-6.3802366!16s%2Fg%2F1tgfxww7?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ81XOf9vfFQ0RvBRODNZiCmE&hl=es';

export const phoneHref = 'tel:+34609021849';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días de 9:00 a 24:00, de lunes a domingo sin excepción.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 24:00',
		shifts: [{ open: '9:00', close: '24:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días 9:00–24:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Solo figura una entrada: el aparcamiento adaptado para sillas de ruedas como no disponible.
 * La ficha no publica acceso, aseo ni asientos adaptados.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción, sus espacios ni su puntuación. Hay dos de 4
 * y una de 3 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos revuelto de la casa, solomillo encebollado y bacalao con crema y gambas.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen trato de los camareros, buena situación y buenas raciones',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me gusta su pescado rebozado para aperitivo y ración.',
		rating: 3,
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
		question: '¿Dónde está El Fogón de Toñi?',
		answer:
			'En la calle Gómez Becerra, 17, con código postal 10001, en Cáceres (Extremadura), en el Centro-Casco Antiguo. La ficha publica el plus code FJ99+PW Cáceres y las coordenadas 39.4693266, -6.3802366.',
	},
	{
		question: '¿Cuál es el horario de El Fogón de Toñi?',
		answer:
			'Abre todos los días de 9:00 a 24:00, de lunes a domingo sin excepción. Es el horario publicado en la ficha consultada el 18 de octubre de 2026 y puede cambiar, así que conviene confirmarlo por teléfono llamando al 609 02 18 49.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina española y como lounge. Tiene 4,4 sobre 5 con 659 reseñas, y en las reseñas que destaca se habla de revuelto de la casa, solomillo encebollado y bacalao con crema y gambas, de buen trato con buenas raciones y de pescado rebozado para aperitivo y ración. La ficha no publica la carta ni los precios.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 609 02 18 49.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Gómez Becerra, 17 y las coordenadas 39.4693266, -6.3802366. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code FJ99+PW Cáceres.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una sola entrada de accesibilidad: el aparcamiento adaptado para sillas de ruedas figura como no disponible. No publica acceso, aseo ni asientos adaptados, así que esta web no puede confirmarlos.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio restaurante publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante de cocina española en la calle Gómez Becerra, 17 de Cáceres. Abre todos los días de 9:00 a 24:00; 4,4 sobre 5 con 659 reseñas en Google Maps.',
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
	/* La categoría de cocina que publica Google, traducida a cocina. */
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
} as const;
