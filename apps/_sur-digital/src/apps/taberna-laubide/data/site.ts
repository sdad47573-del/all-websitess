/**
 * Datos de Taberna Laubide (Aita Gotzon Kalea, 2 · 48610 Urduliz, Bizkaia).
 *
 * Fuentes públicas consultadas el 11 de octubre de 2026:
 * nombre y coordenadas 43.3730683, -2.9485396 de la ficha de Google Maps;
 * dirección de Mapcarta y Tripadvisor (3,4 sobre 5, 11 opiniones, categoría
 * de bares y pubs); comida casera y menú según guías locales y su Instagram
 * (@laubidetaberna).
 *
 * No hay teléfono ni horario publicados en fuentes verificables de este local
 * (el «Bar Laubide» de Bilbao con web propia es otro establecimiento distinto
 * y no se mezcla aquí), así que no se inventan: la web pide confirmar la
 * visita a través de la ficha de Maps.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/taberna-laubide',
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	name: 'Taberna Laubide',
	shortName: 'Laubide',
	category: 'Taberna',
	categories: ['Taberna', 'Bar', 'Comida casera'],
	streetAddress: 'Aita Gotzon Kalea, 2',
	postalCode: '48610',
	city: 'Urduliz',
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	latitude: 43.3730683,
	longitude: -2.9485396,
	plusCode: '',
	rating: 3.4,
	reviewCount: 11,
	site: site.siteUrl,
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+Laubide/@43.3730683,-2.9485396,17z/data=!4m7!3m6!1s0xd4e5d5edbf446a5:0x8d4397512cbee96e!8m2!3d43.3730683!4d-2.9485396!16s%2Fg%2F11j42d7vbw?hl=es';

export const reviewsUrl =
	'https://www.google.com/maps/place/Taberna+Laubide/@43.3730683,-2.9485396,17z/data=!4m7!3m6!1s0xd4e5d5edbf446a5:0x8d4397512cbee96e!8m2!3d43.3730683!4d-2.9485396!16s%2Fg%2F11j42d7vbw?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const hoursSummary = 'Horario por confirmar: consulta la ficha antes de ir';

export const servicios = [
	{ label: 'Comida casera y menú', disponible: true },
	{ label: 'Ambiente de taberna local', disponible: true },
] as const;

export const reviews = [
	{
		text: 'Taberna de barrio destacada por su comida casera y su menú.',
		rating: 4,
		source: 'Resumen de opiniones públicas',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Taberna Laubide?',
		answer:
			'En Aita Gotzon Kalea, 2, 48610 Urduliz (Bizkaia). Las coordenadas de la ficha son 43.3730683, -2.9485396. No confundir con el bar homónimo de Bilbao: son locales distintos.',
	},
	{
		question: '¿Cuál es el teléfono?',
		answer:
			'No hay un teléfono publicado en fuentes verificables de este local. Lo más fiable es consultar la ficha de Google Maps enlazada en esta web.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'No hay un horario publicado en fuentes verificables, así que no se reproduce ninguno aquí. Consulta la ficha de Google Maps antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Las guías la presentan como taberna de comida casera con menú, en categoría de bares y pubs. Tiene un 3,4 sobre 5 con 11 opiniones en Tripadvisor.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'Esta web no permite reservar y no hay un teléfono verificado. Para grupos, consulta la ficha de Google Maps del local.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'Está en Urduliz, con estación de metro cercana. Los botones de esta web abren las indicaciones de Google Maps y el mapa de abajo señala el local.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa no oficial, elaborada con datos públicos (Google Maps y guías) consultados el 11 de octubre de 2026. Las fotos son ilustraciones propias, no de la ficha. No vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	inLanguage: 'es',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Taberna de comida casera en Aita Gotzon Kalea, 2, Urduliz (Bizkaia).',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
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
	servesCuisine: ['Vasca'],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
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
