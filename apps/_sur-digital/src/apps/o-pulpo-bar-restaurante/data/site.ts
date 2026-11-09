/**
 * Datos de O'Pulpo Bar Restaurante
 * (Carrer de Montflorit, 71 · 08850 Gavà, Barcelona).
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
	siteUrl: 'https://www.sur-digital.com/o-pulpo-bar-restaurante',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: "O'Pulpo Bar Restaurante",
	shortName: "O'Pulpo",
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo', 'Taberna'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer de Montflorit, 71',
	district: 'Gavà',
	postalCode: '08850',
	city: 'Gavà',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 936 62 32 01',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '936 62 32 01',
	latitude: 41.3028836,
	longitude: 2.0003747,
	/** Plus code que publica la ficha (completo: 8FH38232+54). */
	plusCode: '8232+54 Gavà',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 846 reseñas). */
	rating: 4.5,
	reviewCount: 846,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	"https://www.google.com/maps/place/O'Pulpo+Bar+Restaurante/@41.3028836,2.0003747,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49d27764776bf:0x7a823e9b632ef784!8m2!3d41.3028836!4d2.0003747!16s%2Fg%2F1v6gb8jh?hl=es";

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJv3ZHdiedpBIRhPcuY5s-gno&hl=es';

export const phoneHref = 'tel:+34936623201';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El miércoles cierra. Domingo, lunes, martes y jueves abre de 13:00 a 17:00; viernes y sábado
 * abre a mediodía (13:00–17:00) y por la noche (20:30–23:30).
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{ day: 'Miércoles', service: 'Cerrado', shifts: [], dayOfWeek: 'Wednesday' },
	{
		day: 'Jueves',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 17:00 · 20:30 – 23:30',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '23:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 17:00 · 20:30 – 23:30',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:30', close: '23:30' },
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
	'Miércoles cerrado; domingo, lunes, martes y jueves de 13:00 a 17:00; viernes y sábado de 13:00 a 17:00 y de 20:30 a 23:30';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Todos los días menos miércoles · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Acceso y aparcamiento adaptados no disponibles, según la ficha.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: false },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 */
export const reviews = [
	{
		text: 'Comida casera, buenisima, buen trato volveremos',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'El pulpo brasa, berberechos, la empanada (maravillosa).',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Excelente todo Pulpo buenísimo,mejillones Repetiremos Muy buen trato',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: "¿Dónde está O'Pulpo Bar Restaurante?",
		answer:
			'En el Carrer de Montflorit, 71, con código postal 08850, en Gavà, Barcelona. Publica el plus code 8232+54 Gavà y las coordenadas 41.3028836, 2.0003747.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica que el miércoles cierra; domingo, lunes, martes y jueves abre de 13:00 a 17:00; viernes y sábado abre de 13:00 a 17:00 y de 20:30 a 23:30. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica como restaurante mediterráneo y taberna. Las reseñas que destaca hablan de comida casera, pulpo a la brasa, berberechos, empanada, mejillones y buen trato. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 936 62 32 01. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Montflorit, 71, en Gavà, y las coordenadas 41.3028836, 2.0003747. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica acceso y aparcamiento adaptados para sillas de ruedas como no disponibles.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,5 sobre 5 con 846 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Bar restaurante mediterráneo en Gavà (Barcelona): comida casera, pulpo a la brasa y buen trato. Datos y fotografías de su ficha de Google Maps.',
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
	servesCuisine: ['Mediterránea', 'Taberna'],
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
