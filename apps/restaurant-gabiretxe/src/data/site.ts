/**
 * Datos de Restaurant Gabiretxe
 * (Avinguda de Montserrat, 5 · 08777 Sant Quintí de Mediona, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica web propia, descripción del titular, carta ni precios, así que aquí no se
 * reproducen. Los textos de las reseñas se copian literalmente y se citan como tales; la ficha no
 * publica el nombre de quienes firman (solo el enlace a su perfil), de modo que se atribuyen a
 * la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurant-gabiretxe.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant Gabiretxe',
	shortName: 'Gabiretxe',
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Avinguda de Montserrat, 5',
	district: 'Sant Quintí de Mediona',
	postalCode: '08777',
	city: 'Sant Quintí de Mediona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 938 99 97 73',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '938 99 97 73',
	latitude: 41.4617628,
	longitude: 1.6670736,
	/** Plus code que publica la ficha (completo: 8FH3FM68+PR). */
	plusCode: 'FM68+PR Sant Quintí de Mediona',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 453 reseñas). */
	rating: 4.2,
	reviewCount: 453,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+Gabiretxe/@41.4617628,1.6670736,17z/data=!3m1!4b1!4m6!3m5!1s0x12a46f84d8e87f77:0xb5776edc9cdf2692!8m2!3d41.4617628!4d1.6670736!16s%2Fg%2F1th45mnj?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJd3_o2IRvpBIRkibfnNxud7U&hl=es';

export const phoneHref = 'tel:+34938999773';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. Martes a viernes abre de 8:00 a 24:00; sábado y domingo abre de 9:00 a 24:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 24:00',
		shifts: [{ open: '8:00', close: '24:00' }],
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
export const hoursSummary =
	'Lunes cerrado; martes a viernes de 8:00 a 24:00; sábado y domingo de 9:00 a 24:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Todos los días menos lunes · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 */
export const reviews = [
	{
		text: 'Buena comida, muy buena atención, el camarero muy simpático y servicial',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Buenos menús de mediodía a precio ajustado y buen servicio.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Un buen lugar para comer cenar o tomar algo, con buena cocina y buen trato',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Gabiretxe?',
		answer:
			'En la Avinguda de Montserrat, 5, con código postal 08777, en Sant Quintí de Mediona, Barcelona. Publica el plus code FM68+PR Sant Quintí de Mediona y las coordenadas 41.4617628, 1.6670736.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica que el lunes cierra; martes a viernes abre de 8:00 a 24:00; sábado y domingo abre de 9:00 a 24:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica únicamente como restaurante. Las reseñas que destaca hablan de buena comida, menús de mediodía a precio ajustado y buen trato. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 938 99 97 73. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avinguda de Montserrat, 5, en Sant Quintí de Mediona, y las coordenadas 41.4617628, 1.6670736. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica aseo y asientos adaptados para sillas de ruedas como disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 453 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante en Sant Quintí de Mediona (Barcelona): menús de mediodía y buen trato. Datos y fotografías de su ficha de Google Maps.',
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
	/* Sin `priceRange` ni `menu`: la ficha no publica precios ni carta. */
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
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
