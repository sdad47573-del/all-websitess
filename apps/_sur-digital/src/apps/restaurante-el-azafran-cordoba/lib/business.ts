export const business = {
	name: 'Restaurante El Azafrán',
	streetAddress: 'Calle Manuel Fuentes Bocanegra, 31',
	postalCode: '14005',
	neighborhood: 'Zoco',
	city: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 08 46 52',
	latitude: 37.8772324,
	longitude: -4.7954674,
	site: 'https://www.sur-digital.com/restaurante-el-azafran-cordoba',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Azafran/data=!4m7!3m6!1s0xd6d20a6c9a0cb81:0x3d2affd0120a5795!8m2!3d37.8772324!4d-4.7954674!16s%2Fg%2F11cmg1d683?authuser=0&hl=es';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957084652';
export const instagramUrl = 'https://www.instagram.com/casafran_y_azafran/';
export const instagramLocationUrl = 'https://www.instagram.com/explore/locations/849576258/el-azafran/';
export const facebookUrl = 'https://www.facebook.com/restauranteelazafran/';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d4154720-Reviews-El_azafran-Cordoba_Province_of_Cordoba_Andalucia.html';

export const specialties = [
	{
		category: 'De la casa',
		name: 'Patatas al pelotón',
		description: 'Una de las especialidades citadas en la ficha gastronómica del restaurante.',
	},
	{
		category: 'Cocina cordobesa',
		name: 'Salmorejo',
		description: 'Un clásico andaluz para empezar, según temporada y servicio.',
	},
	{
		category: 'Para compartir',
		name: 'Croquetas y revueltos',
		description: 'Platos caseros y raciones dentro de una carta amplia y familiar.',
	},
	{
		category: 'De la huerta',
		name: 'Pisto con huevos',
		description: 'Receta tradicional con sabor casero.',
	},
	{
		category: 'Sabores de la sierra',
		name: 'Pincho de cordero y lechazo',
		description: 'Carnes y especialidades para disfrutar en la mesa.',
	},
	{
		category: 'Un clásico',
		name: 'Rabo de toro',
		description: 'Guiso tradicional cordobés entre las sugerencias publicadas.',
	},
];

export const faqs = [
	{
		question: '¿Dónde está el Restaurante El Azafrán?',
		answer:
			'Está en Calle Manuel Fuentes Bocanegra, 31, en la zona del Zoco de Córdoba (14005). Puedes abrir Google Maps desde esta página para consultar la ruta.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'El Azafrán ofrece cocina cordobesa y casera, con raciones, carnes, mariscos y platos tradicionales como salmorejo, rabo de toro o pisto. La disponibilidad puede variar; pregunta por la carta del día.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes llamar al +34 957 08 46 52, teléfono publicado por Turismo de Córdoba y directorios locales. Llama para confirmar la disponibilidad.',
	},
	{
		question: '¿Cuál es el horario de apertura?',
		answer:
			'Los horarios publicados varían entre fuentes. Confirma el horario y el servicio del día llamando al +34 957 08 46 52 antes de desplazarte.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	description:
		'Restaurante familiar de cocina casera y cordobesa en la zona del Zoco, Córdoba.',
	url: `${business.site}/`,
	image: `${business.site}/og.png`,
	telephone: business.phone,
	servesCuisine: ['Cocina cordobesa', 'Cocina andaluza', 'Cocina española'],
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
	sameAs: [instagramUrl, facebookUrl, tripadvisorUrl],
	acceptsReservations: true,
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${business.site}/#preguntas`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};
