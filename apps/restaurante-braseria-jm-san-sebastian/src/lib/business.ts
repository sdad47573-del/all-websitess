export const business = {
	name: 'Restaurante Brasería JM',
	alternateName: 'Bar Restaurante JM',
	streetAddress: 'Calle Nuevas Poblaciones, 0',
	postalCode: '14150',
	locality: 'San Sebastián de los Ballesteros',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 30 90 39',
	latitude: 37.6527778,
	longitude: -4.8244444,
	site: 'https://restaurante-braseria-jm-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Braseria+JM/@37.6527778,-4.8244444,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d3b916f30f8c9:0x9458408481cd9ece!8m2!3d37.6527778!4d-4.8244444!16s%2Fg%2F11c1wx2zlg?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const instagramUrl = 'https://www.instagram.com/restaurantebraseriajm/';
export const facebookUrl = 'https://www.facebook.com/RestauranteBraseriaJM/';
export const facebookPhotosUrl = `${facebookUrl}photos/`;
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g1726223-d23025497-Reviews-Bar_Restaurante_Jm-San_Sebastian_de_los_Ballesteros_Province_of_Cordoba_Andaluc.html';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957309039';

export const openingNotes = [
	{ label: 'Lunes', detail: 'Cerrado por descanso del equipo' },
	{ label: 'Martes', detail: 'Servicio de mañana' },
	{ label: 'Miércoles a domingo', detail: 'Desayunos, comidas y cenas' },
	{ label: 'Verano', detail: 'Suele ampliar horario y abrir todos los días' },
] as const;

export const specialties = [
	{
		category: 'De la brasa',
		name: 'Solomillo y presa ibérica',
		description: 'Cortes a la parrilla en horno de brasa, entre los platos más pedidos de la casa.',
	},
	{
		category: 'Horno de brasa',
		name: 'Secreto, costillar y codillo',
		description: 'Secreto ibérico, costillar y codillo a baja temperatura: carne jugosa por dentro y brasa por fuera.',
	},
	{
		category: 'Del campo a la mesa',
		name: 'Novillo argentino y bellota',
		description: 'Carne de novillo argentino al horno de brasa y elaboraciones con carne de bellota de la Sierra de Aracena.',
	},
	{
		category: 'De la lonja',
		name: 'Choco frito de la Bahía',
		description: 'Choco fresco de la Bahía de Cádiz, apenas con un poco de sal. También pulpo a la brasa y boquerones.',
	},
	{
		category: 'Para compartir',
		name: 'Croquetas y tortillitas de camarones',
		description: 'Croquetas cremosas de jamón, tortillitas de camarones, gambas de Huelva y anchoa del Cantábrico.',
	},
	{
		category: 'De cuchara',
		name: 'Arroz caldoso de marisco',
		description: 'Se prepara por encargo y se sirve en cazuela de barro con calamares, mejillones y almejas.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante Brasería JM?',
		answer:
			'Está en Calle Nuevas Poblaciones, 0, 14150 San Sebastián de los Ballesteros (Córdoba), en la Campiña Sur. Puedes abrir la ficha de Google Maps para ver la ubicación e iniciar la ruta.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Llamando al +34 957 30 90 39, teléfono que figura en la ficha de Google Maps y en el perfil de Instagram del restaurante. En fines de semana y fechas señaladas es recomendable reservar con antelación.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Cocina de brasa y de proximidad: carnes al horno de brasa, pescados y mariscos frescos de lonjas andaluzas, arroces y entrantes para compartir, con sugerencias que cambian según temporada.',
	},
	{
		question: '¿Cuál es el horario del restaurante?',
		answer:
			'Cierra los lunes por descanso. El resto de la semana ofrece desayunos, comidas y, según el día y la temporada, cenas; en verano suele ampliar el horario. Como cambia a lo largo del año, confirma antes de desplazarte.',
	},
	{
		question: '¿Tiene terraza o servicio para llevar?',
		answer:
			'El restaurante cuenta con comedor interior y terraza exterior, y ofrece comida para llevar. No dispone de servicio de reparto a domicilio.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: business.alternateName,
	description:
		'Restaurante de brasa y producto de proximidad en San Sebastián de los Ballesteros, Córdoba: carnes al horno de brasa, pescados de lonja, arroces y tapas para compartir.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Cocina andaluza', 'Carnes a la brasa', 'Cocina mediterránea', 'Arroces'],
	priceRange: '€€',
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.locality,
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
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Comida para llevar', value: true },
	],
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
