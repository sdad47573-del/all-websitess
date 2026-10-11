/**
 * Datos de Mesón Leioa (Julio Gutiérrez Lumbreras, 6 · 48920 Portugalete, Bizkaia).
 *
 * Fuentes públicas consultadas el 11 de octubre de 2026:
 * nombre y coordenadas 43.3189453, -3.0232573 de la ficha de Google Maps;
 * dirección, teléfono 944 62 08 79 y barrio La Florida del callejero municipal;
 * horario orientativo (lunes cerrado, martes a domingo de 8:00 a 23:00) y
 * servicios de guías gastronómicas; menús caseros y premios de pintxos según
 * El Correo, EiTB y Tripadvisor (3,9 sobre 5, 10 opiniones).
 *
 * El horario y los precios pueden cambiar: se presentan como orientativos y se
 * pide confirmar por teléfono.
 */

export const site = {
	siteUrl: 'https://meson-leioa.vercel.app',
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	name: 'Mesón Leioa',
	shortName: 'Leioa',
	category: 'Restaurante',
	categories: ['Mesón', 'Bar restaurante', 'Cocina vasca'],
	streetAddress: 'Julio Gutiérrez Lumbreras, 6',
	postalCode: '48920',
	city: 'Portugalete',
	zone: 'La Florida',
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	phone: '+34 944 62 08 79',
	latitude: 43.3189453,
	longitude: -3.0232573,
	plusCode: '',
	rating: 3.9,
	reviewCount: 10,
	site: site.siteUrl,
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Mes%C3%B3n+Leioa/data=!4m7!3m6!1s0xd4e5985e32dfcb1:0x75acf6ede913ff0b!8m2!3d43.3189453!4d-3.0232573!16s%2Fg%2F1tyz_99y?hl=es';

export const reviewsUrl =
	'https://www.google.com/maps/place/Mes%C3%B3n+Leioa/data=!4m7!3m6!1s0xd4e5985e32dfcb1:0x75acf6ede913ff0b!8m2!3d43.3189453!4d-3.0232573!16s%2Fg%2F1tyz_99y?hl=es';

export const phoneHref = 'tel:+34944620879';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario orientativo publicado por guías gastronómicas: lunes cerrado y de
 * martes a domingo de 8:00 a 23:00 en horario continuo. A confirmar por teléfono.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '8:00 – 23:00', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '8:00 – 23:00', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '8:00 – 23:00', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '8:00 – 23:00', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '8:00 – 23:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '8:00 – 23:00', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Lunes cerrado; de martes a domingo, 8:00 – 23:00';

export const servicios = [
	{ label: 'Barra de pintxos', disponible: true },
	{ label: 'Comida para llevar', disponible: true },
	{ label: 'Terraza', disponible: true },
] as const;

export const reviews = [
	{
		text: 'Menú del día casero excelente por unos 13 €, con mención especial al flan de queso.',
		rating: 5,
		source: 'Resumen de opiniones públicas',
	},
	{
		text: 'Pintxos premiados en Portugalete y txipirones en su tinta de los mejores de la zona.',
		rating: 5,
		source: 'Resumen de opiniones públicas',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Mesón Leioa?',
		answer:
			'En Julio Gutiérrez Lumbreras, 6, 48920 Portugalete (Bizkaia), en el barrio de La Florida. Las coordenadas de la ficha son 43.3189453, -3.0232573.',
	},
	{
		question: '¿Cuál es el teléfono?',
		answer:
			'El teléfono publicado es el 944 62 08 79. Conviene llamar para reservar, porque el comedor es pequeño y suele llenarse en fin de semana.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Las guías publican un horario orientativo en continuo: lunes cerrado y de martes a domingo de 8:00 a 23:00, con desayunos, comidas y cenas. Confirma por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Comida casera vasca al 100 % en negocio familiar: menú del día entre semana (unos 13–15 €), menús de fin de semana más elaborados, pintxos premiados en 2017 y 2018, cachopo, chuletón, rabo de toro y premio al mejor menú ejecutivo de la Margen Izquierda.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'Esta web no permite reservar. Llama al 944 62 08 79; el local acoge también comuniones y reuniones familiares, así que conviene avisar con tiempo.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'Está en Portugalete con metro cercano (parking del metro a menos de cinco minutos a pie). Los botones de esta web abren las indicaciones de Google Maps y el mapa de abajo señala el local.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa no oficial, elaborada con datos públicos (Google Maps y guías gastronómicas) consultados el 11 de octubre de 2026. Las fotos son ilustraciones propias, no de la ficha. No vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	inLanguage: 'es',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Mesón de cocina vasca casera en Julio Gutiérrez Lumbreras, 6, Portugalete (Bizkaia). Menú del día y pintxos. Teléfono 944 62 08 79.',
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
	acceptsReservations: true,
	servesCuisine: ['Vasca'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '08:00',
			closes: '23:00',
		},
	],
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	inLanguage: 'es',
	'@id': `${site.siteUrl}/#faq`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
