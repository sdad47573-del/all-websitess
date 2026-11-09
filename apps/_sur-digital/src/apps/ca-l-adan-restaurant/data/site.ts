/**
 * Datos de Ca l'Adán Restaurant
 * (Carrer de Baltasar d'Espanya, 2, Local 1 · 08970 Sant Joan Despí, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, descripción del titular y tres reseñas destacadas.
 *
 * La ficha no publica web propia, carta ni precios, así que aquí no se reproducen. Los textos de
 * las reseñas y la descripción se copian literalmente y se citan como tales; la ficha no publica
 * el nombre de quienes firman las reseñas (solo el enlace a su perfil), de modo que se atribuyen
 * a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/ca-l-adan-restaurant',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: "Ca l'Adán Restaurant",
	shortName: "Ca l'Adán",
	category: 'Restaurante',
	categories: [
		'Restaurante',
		'Restaurante de cocina catalana',
		'Restaurante familiar',
		'Restaurante mediterráneo',
		'Brasería',
		'Restaurante especializado en tapas',
	],
	/** Dirección publicada en la ficha. */
	streetAddress: "Carrer de Baltasar d'Espanya, 2, Local 1",
	district: 'Sant Joan Despí',
	postalCode: '08970',
	city: 'Sant Joan Despí',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 934 77 80 42',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '934 77 80 42',
	latitude: 41.3641835,
	longitude: 2.0536032,
	/** Plus code que publica la ficha (completo: 8FH49373+MC). */
	plusCode: '9373+MC Sant Joan Despí',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 708 reseñas). */
	rating: 4.5,
	reviewCount: 708,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	"https://www.google.com/maps/place/Ca+l'Ad%C3%A1n+Restaurant/@41.3641835,2.0536032,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49bc32fc90811:0xa508bde40b94a015!8m2!3d41.3641835!4d2.0536032!16s%2Fg%2F1vgn4wqw?hl=es";

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJEQjJL8ObpBIRFaCUC-S9CKU&hl=es';

export const phoneHref = 'tel:+34934778042';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal =
	'Brasería familiar con recetas caseras: tapas, carnes a la brasa y cocina casera en un acogedor mesón familiar con un friso de piedra rústica.';

/**
 * Horario semanal que publica la ficha.
 *
 * El domingo cierra. De lunes a jueves abre solo al mediodía, de 13:00 a 15:30; viernes y sábado
 * abre a mediodía (13:00–15:30) y por la noche (20:30–23:00).
 */
export const hours = [
	{ day: 'Lunes', service: '13:00 – 15:30', shifts: [{ open: '13:00', close: '15:30' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '13:00 – 15:30', shifts: [{ open: '13:00', close: '15:30' }], dayOfWeek: 'Tuesday' },
	{
		day: 'Miércoles',
		service: '13:00 – 15:30',
		shifts: [{ open: '13:00', close: '15:30' }],
		dayOfWeek: 'Wednesday',
	},
	{ day: 'Jueves', service: '13:00 – 15:30', shifts: [{ open: '13:00', close: '15:30' }], dayOfWeek: 'Thursday' },
	{
		day: 'Viernes',
		service: '13:00 – 15:30 · 20:30 – 23:00',
		shifts: [
			{ open: '13:00', close: '15:30' },
			{ open: '20:30', close: '23:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 15:30 · 20:30 – 23:00',
		shifts: [
			{ open: '13:00', close: '15:30' },
			{ open: '20:30', close: '23:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Domingo cerrado; lunes a jueves de 13:00 a 15:30; viernes y sábado de 13:00 a 15:30 y de 20:30 a 23:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Lunes a sábado · domingo cerrado';

/**
 * Accesibilidad que publica la ficha.
 *
 * Asientos y aseo adaptados disponibles; aparcamiento adaptado no disponible.
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Fresca y de muy buen sabor.Hamburguesa espectacular cons patatas y lechuga .',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Las ensaladas deliciosas y las croquetas de chipirones están buenísimas!!',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Muy bueno todo, pedimos croquetas y secreto y buenisimo todo. 100% recomendable',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: "¿Dónde está Ca l'Adán Restaurant?",
		answer:
			"En el Carrer de Baltasar d'Espanya, 2, Local 1, con código postal 08970, en Sant Joan Despí, Barcelona. Publica el plus code 9373+MC Sant Joan Despí y las coordenadas 41.3641835, 2.0536032.",
	},
	{
		question: "¿Cuál es el horario de Ca l'Adán Restaurant?",
		answer:
			'La ficha publica que el domingo cierra; de lunes a jueves abre de 13:00 a 15:30; viernes y sábado abre de 13:00 a 15:30 y de 20:30 a 23:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			"Google lo clasifica como restaurante de cocina catalana, familiar, mediterráneo, brasería y de tapas. Su descripción dice: brasería familiar con recetas caseras, tapas, carnes a la brasa y cocina casera. La ficha no publica carta ni precios, así que esta web no los reproduce.",
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 934 77 80 42. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			"La ficha publica la dirección Carrer de Baltasar d'Espanya, 2, Local 1, en Sant Joan Despí, y las coordenadas 41.3641835, 2.0536032. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.",
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica asientos y aseo adaptados para sillas de ruedas como disponibles, y aparcamiento adaptado como no disponible.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,5 sobre 5 con 708 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		"Brasería familiar en Sant Joan Despí (Barcelona): tapas, carnes a la brasa y cocina casera. Datos y fotografías de su ficha de Google Maps.",
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
	servesCuisine: ['Catalana', 'Mediterránea', 'Brasería', 'Tapas'],
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
