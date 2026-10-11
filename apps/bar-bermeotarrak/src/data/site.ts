/**
 * Datos de Bar Bermeotarrak (Plaza Inmaculada, 23 · Barakaldo, Bizkaia).
 *
 * Fuentes públicas consultadas el 11 de octubre de 2026:
 * nombre y coordenadas 43.284611, -2.9845968 de la ficha de Google Maps;
 * dirección (zona de Cruces), teléfono 944 99 86 82 y especialidad en pescados
 * y mariscos a la parrilla según Disfruta Bizkaia.
 *
 * No hay horario ni valoración publicados en fuentes verificables, así que no
 * se inventan: la web pide confirmar por teléfono y remite a la ficha.
 */

export const site = {
	siteUrl: 'https://bar-bermeotarrak.vercel.app',
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	name: 'Bar Bermeotarrak',
	shortName: 'Bermeotarrak',
	category: 'Bar restaurante',
	categories: ['Bar restaurante', 'Parrilla', 'Cocina vasca'],
	streetAddress: 'Plaza Inmaculada, 23',
	city: 'Barakaldo',
	zone: 'Cruces',
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	phone: '+34 944 99 86 82',
	latitude: 43.284611,
	longitude: -2.9845968,
	plusCode: '',
	site: site.siteUrl,
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Bermeotarrak/@43.284611,-2.9845968,17z/data=!4m7!3m6!1s0xd4e50b7c9ae9fe5:0x277fa33d897db660!8m2!3d43.284611!4d-2.9845968!16s%2Fg%2F1tmqhj6q?hl=es';

export const reviewsUrl =
	'https://www.google.com/maps/place/Bar+Bermeotarrak/@43.284611,-2.9845968,17z/data=!4m7!3m6!1s0xd4e50b7c9ae9fe5:0x277fa33d897db660!8m2!3d43.284611!4d-2.9845968!16s%2Fg%2F1tmqhj6q?hl=es';

export const phoneHref = 'tel:+34944998682';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const hoursSummary = 'Horario por confirmar: llama antes de ir';

export const servicios = [
	{ label: 'Pescados y mariscos a la parrilla', disponible: true },
	{ label: 'Cocina tradicional vasca', disponible: true },
] as const;

export const faqs = [
	{
		question: '¿Dónde está Bar Bermeotarrak?',
		answer:
			'En Plaza Inmaculada, 23, Barakaldo (Bizkaia), en la zona de Cruces. Las coordenadas de la ficha son 43.284611, -2.9845968.',
	},
	{
		question: '¿Cuál es el teléfono?',
		answer:
			'El teléfono publicado es el 944 99 86 82. Llama para confirmar el horario del día y reservar.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'No hay un horario publicado en fuentes verificables, así que no se reproduce ninguno aquí. Llama al 944 99 86 82 antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Las guías lo presentan como parrilla de cocina tradicional con especialidad en pescados y mariscos. Figura como bar restaurante y restaurante.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'Esta web no permite reservar. Llama al 944 99 86 82 para consultar disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'Está en Cruces, Barakaldo, con metro cercano. Los botones de esta web abren las indicaciones de Google Maps y el mapa de abajo señala el local.',
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
		'Bar restaurante y parrilla en Plaza Inmaculada, 23, Cruces (Barakaldo, Bizkaia). Pescados a la parrilla. Teléfono 944 99 86 82.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.province,
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
