/**
 * Datos de Restaurante Bar La Andaluza
 * (Pza. Syrah, s/n, al lado del hotel Basic · 08734 Vilafranca del Penedès, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, descripción del titular, valoración con número de
 * reseñas, coordenadas, plus code, horario semanal, accesibilidad, el distintivo «Se admiten
 * perros» y tres reseñas destacadas.
 *
 * La ficha no publica web propia, carta, precios, acción de reserva ni datos de envío, así que
 * aquí no se reproducen. La descripción del titular y los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes firman las reseñas (solo el enlace a su perfil), de modo que se atribuyen a la
 * ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-bar-la-andaluza',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Bar La Andaluza',
	shortName: 'La Andaluza',
	/** Categorías que publica Google en esta ficha. */
	category: 'Bar de tapas',
	categories: ['Bar de tapas', 'Fábrica de cerveza'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Pza. Syrah, s/n (al lado del hotel Basic)',
	district: 'Vilafranca del Penedès',
	postalCode: '08734',
	city: 'Vilafranca del Penedès',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 931 35 18 69',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '931 35 18 69',
	latitude: 41.332639,
	longitude: 1.6829313,
	/** Plus code que publica la ficha (completo: 8FH38MMM+35). */
	plusCode: '8MMM+35 Vilafranca del Penedès',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 233 reseñas). */
	rating: 4.3,
	reviewCount: 233,
	site: null,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Restaurante y bar de tapas con menú diario. y Los Sábados Comida Peruana auténtica';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Bar+La+Andaluza/@41.332639,1.6829313,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4793ccc97efbf:0xbc0b61c62c67fa23!8m2!3d41.332639!4d1.6829313!16s%2Fg%2F11g0z5y0t_?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJv--XzDx5pBIRI_pnLMZhC7w&hl=es';

export const phoneHref = 'tel:+34931351869';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El domingo cierra. De lunes a jueves abre de 6:00 a 23:00; el viernes, de 6:00 a 16:00, y el
 * sábado, de 9:00 a 16:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:00 – 23:00',
		shifts: [{ open: '6:00', close: '23:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:00 – 23:00',
		shifts: [{ open: '6:00', close: '23:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:00 – 23:00',
		shifts: [{ open: '6:00', close: '23:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:00 – 23:00',
		shifts: [{ open: '6:00', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:00 – 16:00',
		shifts: [{ open: '6:00', close: '16:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Saturday',
	},
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'domingo cerrado; de lunes a jueves de 6:00 a 23:00; viernes de 6:00 a 16:00; sábado de 9:00 a 16:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el domingo · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica tres entradas, todas disponibles: acceso, aseo y asientos adaptados para sillas de
 * ruedas. No publica ninguna entrada sobre aparcamiento adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Excelente atención, muy rico el arroz de pescado',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Felicidades al chef, se nota la mano auténtica.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'He comido arroz caldoso muy bueno y oreja a la brasa espectacular',
		rating: 1,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Bar La Andaluza?',
		answer:
			'En la Pza. Syrah, s/n, al lado del hotel Basic, con código postal 08734, en Vilafranca del Penedès, Barcelona. Publica el plus code 8MMM+35 Vilafranca del Penedès y las coordenadas 41.332639, 1.6829313.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Bar La Andaluza?',
		answer:
			'La ficha publica que el domingo cierra; de lunes a jueves abre de 6:00 a 23:00; el viernes, de 6:00 a 16:00, y el sábado, de 9:00 a 16:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como bar de tapas y fábrica de cerveza. Su propia descripción habla de menú diario y de comida peruana auténtica los sábados. Las reseñas destacan el arroz de pescado y la oreja a la brasa. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 931 35 18 69. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 931 35 18 69 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Pza. Syrah, s/n, al lado del hotel Basic, en Vilafranca del Penedès, y las coordenadas 41.332639, 1.6829313. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso para sillas de ruedas, aseo adaptado y asientos adaptados. No publica ningún dato sobre aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,3 sobre 5 con 233 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con sus puntuaciones originales de 5, 5 y 1 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no permite pedir ni pagar online.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar de tapas en la Pza. Syrah, s/n, Vilafranca del Penedès (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
	acceptsReservations: false,
	/* Sin `priceRange`, `servesCuisine` ni `menu`: la ficha no publica precios, cocina ni carta. */
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
