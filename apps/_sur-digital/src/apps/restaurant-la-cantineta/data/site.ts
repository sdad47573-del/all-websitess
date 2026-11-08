/**
 * Datos de Restaurant la Cantineta
 * (Carrer de Laureà Miró, 271 · 08980 Sant Feliu de Llobregat, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y dos reseñas destacadas.
 *
 * La ficha no publica web propia, descripción del titular, carta ni precios, así que aquí no se
 * reproducen. Los textos de las reseñas se copian literalmente y se citan como tales; la ficha no
 * publica el nombre de quienes firman (solo el enlace a su perfil), de modo que se atribuyen a
 * la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurant-la-cantineta',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant la Cantineta',
	shortName: 'La Cantineta',
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer de Laureà Miró, 271',
	district: 'Sant Feliu de Llobregat',
	postalCode: '08980',
	city: 'Sant Feliu de Llobregat',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 936 32 57 23',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '936 32 57 23',
	latitude: 41.3829752,
	longitude: 2.0422233,
	/** Plus code que publica la ficha (completo: 8FH392MR+5V). */
	plusCode: '92MR+5V Sant Feliu de Llobregat',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 187 reseñas). */
	rating: 4.6,
	reviewCount: 187,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+la+Cantineta/@41.3829752,2.0422233,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49bb4aaa202eb:0x3fe42e417f0d1ed!8m2!3d41.3829752!4d2.0422233!16s%2Fg%2F1tr2jn_z?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ6wKiqrSbpBIR7dHwF-RC_gM&hl=es';

export const phoneHref = 'tel:+34936325723';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Sábado y domingo cierra. De lunes a viernes abre de 7:00 a 16:30.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '7:00 – 16:30',
		shifts: [{ open: '7:00', close: '16:30' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '7:00 – 16:30',
		shifts: [{ open: '7:00', close: '16:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 16:30',
		shifts: [{ open: '7:00', close: '16:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 16:30',
		shifts: [{ open: '7:00', close: '16:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 16:30',
		shifts: [{ open: '7:00', close: '16:30' }],
		dayOfWeek: 'Friday',
	},
	{ day: 'Sábado', service: 'Cerrado', shifts: [], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Sábado y domingo cerrado; lunes a viernes de 7:00 a 16:30';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Lunes a viernes · fin de semana cerrado';

/**
 * Accesibilidad que publica la ficha.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 */
export const reviews = [
	{
		text: 'Menú del día muy casero y raciones correctas.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Buen trato y bien género.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está la Cantineta?',
		answer:
			'En el Carrer de Laureà Miró, 271, con código postal 08980, en Sant Feliu de Llobregat, Barcelona. Publica el plus code 92MR+5V Sant Feliu de Llobregat y las coordenadas 41.3829752, 2.0422233.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha publica que sábado y domingo cierra; de lunes a viernes abre de 7:00 a 16:30. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica como restaurante de cocina española. Las reseñas que destaca hablan de menú del día casero, raciones correctas, buen trato y buen género. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 936 32 57 23. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer de Laureà Miró, 271, en Sant Feliu de Llobregat, y las coordenadas 41.3829752, 2.0422233. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica aseo y asientos adaptados para sillas de ruedas como disponibles, y aparcamiento adaptado como no disponible.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 187 reseñas. Aquí se reproducen literalmente dos de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante de cocina española en Sant Feliu de Llobregat (Barcelona): menú del día casero. Datos y fotografías de su ficha de Google Maps.',
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
	servesCuisine: ['Española'],
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
