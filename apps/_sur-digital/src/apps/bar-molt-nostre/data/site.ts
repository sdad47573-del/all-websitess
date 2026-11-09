/**
 * Datos de Bar Molt Nostre (Bar a la Societat de Castellví)
 * (Barri Masets Cosins, 17 · 08732 Castellví de la Marca, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, descripción del titular y tres reseñas destacadas.
 *
 * La ficha no publica web propia, carta ni precios, así que aquí no se reproducen. Los textos de
 * las reseñas y la descripción se copian literalmente y se citan como tales; la ficha no publica
 * el nombre de quienes firman las reseñas (solo el enlace a su perfil), de modo que se atribuyen
 * a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-molt-nostre',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Molt Nostre (Bar a la Societat de Castellví)',
	shortName: 'Molt Nostre',
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Barri Masets Cosins, 17',
	district: 'Castellví de la Marca',
	postalCode: '08732',
	city: 'Castellví de la Marca',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 640 53 20 25',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '640 53 20 25',
	latitude: 41.3331413,
	longitude: 1.5936786,
	/** Plus code que publica la ficha (completo: 8FH38HMV+7F). */
	plusCode: '8HMV+7F Castellví de la Marca',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 185 reseñas). */
	rating: 4.6,
	reviewCount: 185,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Molt+Nostre+(Bar+a+la+Societat+de+Castellv%C3%AD)/@41.3331413,1.5936786,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4754bfc3bbc81:0xc11ed7bfaebb7b8a!8m2!3d41.3331413!4d1.5936786!16s%2Fg%2F11thkv_80q?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJgbw7_Et1pBIRinu7rr_XHsE&hl=es';

export const phoneHref = 'tel:+34640532025';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal =
	'Bar Restaurante de comida casera catalana y uruguaya (Tapas, Brasa, Empanadas Uruguayas, Milanesas, Hamburguesas, Callos, Pulpo a la gallega... y mucho más). También platos fuera de carta todas las semanas. Ambiente tranquilo y familiar. Terraza. Comida para llevar y menús especiales concertados para grupos con reserva (consúltanos). Te esperamos!!! Reservas al 640532025 por whatsapp.';

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a jueves cierra. Viernes y sábado abre de 9:00 a 22:00; el domingo abre de 9:00 a 17:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: 'Cerrado', shifts: [], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: 'Cerrado', shifts: [], dayOfWeek: 'Thursday' },
	{
		day: 'Viernes',
		service: '9:00 – 22:00',
		shifts: [{ open: '9:00', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 22:00',
		shifts: [{ open: '9:00', close: '22:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 17:00',
		shifts: [{ open: '9:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lunes a jueves cerrado; viernes y sábado de 9:00 a 22:00; domingo de 9:00 a 17:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Viernes a domingo · lunes a jueves cerrado';

/**
 * Accesibilidad que publica la ficha.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 */
export const reviews = [
	{
		text: 'Las mejores empanadas que he probado, atención inigualable, servicio rapido.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Sitio agradable para echar Unas cervezas y picar algo',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'El pan buenísimo y la butifarra y la tortilla para repetir!!',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Bar Molt Nostre?',
		answer:
			'En el Barri Masets Cosins, 17, con código postal 08732, en Castellví de la Marca, Barcelona. Es el bar de la Societat de Castellví. Publica el plus code 8HMV+7F Castellví de la Marca y las coordenadas 41.3331413, 1.5936786.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica que de lunes a jueves cierra; viernes y sábado abre de 9:00 a 22:00; el domingo abre de 9:00 a 17:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica como bar restaurante. Su descripción dice: comida casera catalana y uruguaya (tapas, brasa, empanadas, milanesas, hamburguesas, callos, pulpo...), platos fuera de carta cada semana, terraza, comida para llevar y menús de grupo con reserva. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono? ¿Hay que reservar?',
		answer:
			'El teléfono que publica la ficha es el 640 53 20 25, con reservas por whatsapp para grupos. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Barri Masets Cosins, 17, en Castellví de la Marca, y las coordenadas 41.3331413, 1.5936786. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica aparcamiento, aseo y asientos adaptados para sillas de ruedas como disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 185 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Bar restaurante en Castellví de la Marca (Barcelona): comida casera catalana y uruguaya, terraza y menús de grupo. Datos y fotografías de su ficha de Google Maps.',
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
	servesCuisine: ['Catalana', 'Uruguaya', 'Tapas', 'Brasa'],
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
