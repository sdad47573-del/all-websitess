/**
 * Datos de El Garrofer Restaurant
 * (Av. Prat de la Riba, 125 · 08780 Pallejà, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica web propia, descripción del titular, carta ni precios, así que aquí no se
 * reproducen. Los textos de las reseñas se copian literalmente y se citan como tales; la ficha no
 * publica el nombre de quienes firman (solo el enlace a su perfil), de modo que se atribuyen a
 * la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://el-garrofer-restaurant.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'El Garrofer Restaurant',
	shortName: 'El Garrofer',
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo', 'Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Av. Prat de la Riba, 125',
	district: 'Pallejà',
	postalCode: '08780',
	city: 'Pallejà',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 930 15 13 84',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '930 15 13 84',
	latitude: 41.4185998,
	longitude: 1.9984197,
	/** Plus code que publica la ficha (completo: 8FH3CX9X+C9). */
	plusCode: 'CX9X+C9 Pallejà',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 1253 reseñas). */
	rating: 4.4,
	reviewCount: 1253,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+Garrofer+Restaurant/@41.4185998,1.9984197,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49aa89503c047:0x1edc580f7b913b37!8m2!3d41.4185998!4d1.9984197!16s%2Fg%2F11b6b6klk1?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJR8ADlaiapBIRNzuRew9Y3B4&hl=es';

export const phoneHref = 'tel:+34930151384';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Domingo abre de 13:00 a 17:00; de lunes a jueves, de 13:00 a 16:30; viernes abre a mediodía
 * (13:00–16:30) y por la noche (20:30–23:30); sábado abre a mediodía (13:00–17:00) y por la noche
 * (20:30–24:00).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 16:30',
		shifts: [{ open: '13:00', close: '16:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:00 – 16:30',
		shifts: [{ open: '13:00', close: '16:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 16:30',
		shifts: [{ open: '13:00', close: '16:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:30',
		shifts: [{ open: '13:00', close: '16:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:30 · 20:30 – 23:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 17:00 · 20:30 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '24:00' },
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
	'Domingo de 13:00 a 17:00; lunes a jueves de 13:00 a 16:30; viernes de 13:00 a 16:30 y de 20:30 a 23:30; sábado de 13:00 a 17:00 y de 20:30 a 24:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Todos los días · consulta el horario';

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
		text: 'Buena comida , buen trato de las camareras, precio menú diario correcto (13€)',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'El arroz con alcachofas y pulpo buenísimo!',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'La comida es deliciosa, mariscos/pescados muy frescos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está El Garrofer?',
		answer:
			'En la Av. Prat de la Riba, 125, con código postal 08780, en Pallejà, Barcelona. Publica el plus code CX9X+C9 Pallejà y las coordenadas 41.4185998, 1.9984197.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica: domingo de 13:00 a 17:00; lunes a jueves de 13:00 a 16:30; viernes de 13:00 a 16:30 y de 20:30 a 23:30; sábado de 13:00 a 17:00 y de 20:30 a 24:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica como restaurante mediterráneo. Las reseñas que destaca hablan de buena comida, arroz con alcachofas y pulpo, y mariscos y pescados frescos. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 930 15 13 84. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. Prat de la Riba, 125, en Pallejà, y las coordenadas 41.4185998, 1.9984197. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica aseo y asientos adaptados para sillas de ruedas como disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 1253 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante mediterráneo en Pallejà (Barcelona): arroz, marisco y pescado fresco. Datos y fotografías de su ficha de Google Maps.',
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
	servesCuisine: ['Mediterránea'],
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
