/**
 * Datos de Bar - Braseria Bell Penedes
 * (08775 Torrelavit, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, localidad, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica calle ni número, web propia, horario, carta ni precios, así que aquí no se
 * reproducen. Los textos de las reseñas se copian literalmente y se citan como tales; la ficha no
 * publica el nombre de quienes firman (solo el enlace a su perfil), de modo que se atribuyen a
 * la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-braseria-bell-penedes',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar - Braseria Bell Penedes',
	shortName: 'Bell Penedes',
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española'],
	/**
	 * La ficha no publica ni calle ni número: solo el código postal y la localidad.
	 */
	streetAddress: null,
	addressLine: '08775 Torrelavit, Barcelona',
	district: 'Torrelavit',
	postalCode: '08775',
	city: 'Torrelavit',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 938 98 80 96',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '938 98 80 96',
	latitude: 41.4311197,
	longitude: 1.6805858,
	/** Plus code que publica la ficha (completo: 8FH3CMJJ+C6). */
	plusCode: 'CMJJ+C6 Torrelavit',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 33 reseñas). */
	rating: 4.8,
	reviewCount: 33,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+-+Braseria+Bell+Penedes/@41.4311197,1.6805858,17z/data=!3m1!4b1!4m6!3m5!1s0x12a465005c3419ff:0x4ed64ae045e4b8e4!8m2!3d41.4311197!4d1.6805858!16s%2Fg%2F11y3nrb3zq?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ_xk0XABlpBIR5LjkReBK1k4&hl=es';

export const phoneHref = 'tel:+34938988096';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La ficha no publica horario, así que la lista queda vacía y la web lo dice tal cual.
 */
export const hours: readonly { day: string; service: string; shifts: readonly { open: string; close: string }[]; dayOfWeek: string }[] = [];

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'La ficha no publica horario; conviene llamar antes de ir';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Horario no publicado · llama antes de ir';

/**
 * Accesibilidad que publica la ficha.
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 */
export const reviews = [
	{
		text: 'Ensalada, pimiento y berenjena asada, alubias blancas...',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Un sitio encantador, con un trato personal y comida casera muy buena!!',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Te atiende un señor muy amable que tiene una mano increíble para la brasa!!',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Bell Penedes?',
		answer:
			'En 08775 Torrelavit, Barcelona. La ficha no publica calle ni número. Publica el plus code CMJJ+C6 Torrelavit y las coordenadas 41.4311197, 1.6805858.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha no publica horario. Es lo que había en la ficha consultada el 18 de octubre de 2026; conviene llamar al 938 98 80 96 antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google lo clasifica como restaurante de cocina española. Las reseñas que destaca hablan de ensalada, pimiento y berenjena asada, alubias, trato personal, comida casera y mano para la brasa. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 938 98 80 96. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la localidad 08775 Torrelavit, Barcelona, y las coordenadas 41.4311197, 1.6805858. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica asientos adaptados para sillas de ruedas como disponibles. No publica otros datos de accesibilidad.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,8 sobre 5 con 33 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Bar brasería en Torrelavit (Barcelona): cocina española casera y brasa. Datos y fotografías de su ficha de Google Maps.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
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
	servesCuisine: ['Española', 'Brasería'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [],
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
