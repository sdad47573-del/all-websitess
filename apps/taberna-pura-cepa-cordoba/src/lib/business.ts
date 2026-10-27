export const business = {
	name: 'Taberna Pura Cepa',
	streetAddress: 'Avenida del Aeropuerto, 6 (Pasaje Poniente Sur)',
	postalCode: '14004',
	locality: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 08 49 06',
	latitude: 37.8794347,
	longitude: -4.7887686,
	site: 'https://taberna-pura-cepa-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+Pura+Cepa+(C%C3%B3rdoba)/@37.8794347,-4.7887686,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d209fb241c40b:0xa00dd01cad50113a!8m2!3d37.8794347!4d-4.7887686!16s%2Fg%2F12qg6pqrh?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const instagramUrl = 'https://www.instagram.com/puracepacordoba/';
export const facebookUrl = 'https://www.facebook.com/tabernapuracepa/';
export const facebookPhotosUrl = `${facebookUrl}photos/`;
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d7784015-Reviews-Taberna_Pura_Cepa-Cordoba_Province_of_Cordoba_Andalucia.html';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957084906';

export const openingHours = [
	{ day: 'Lunes', hours: 'Cerrado' },
	{ day: 'Martes', hours: '8:00–16:00 · 20:00–24:00' },
	{ day: 'Miércoles', hours: '8:00–16:00' },
	{ day: 'Jueves', hours: '8:00–16:00 · 20:00–24:00' },
	{ day: 'Viernes', hours: '8:00–16:00 · 20:00–24:00' },
	{ day: 'Sábado', hours: '8:00–16:00 · 20:00–24:00' },
	{ day: 'Domingo', hours: '12:00–16:00' },
] as const;

export const specialties = [
	{
		category: 'De siempre',
		name: 'Salmorejo cordobés',
		description: 'El clásico cordobés, entre los platos más elogiados de la casa. Disponible en ración y media ración.',
	},
	{
		category: 'Emblema',
		name: 'Flamenquín',
		description: 'Flamenquín artesanal, también en versiones como la de roquefort. Uno de los favoritos de la clientela.',
	},
	{
		category: 'Cuchara',
		name: 'Rabo de toro al PX',
		description: 'Guiso lento con Pedro Ximénez, dentro de una carta de cocina cordobesa y de mercado.',
	},
	{
		category: 'Campo y huerta',
		name: 'Berenjenas con miel',
		description: 'Berenjenas fritas con miel de caña: el contraste dulce y salado típico de la cocina andaluza.',
	},
	{
		category: 'Ahumados e ibéricos',
		name: 'Tablas para compartir',
		description: 'Tablas de ahumados, jamón ibérico cortado a mano y embutidos para empezar la mesa.',
	},
	{
		category: 'De la mar',
		name: 'Choco a la plancha',
		description: 'Choco con habitas baby, pulpo a la brasa y calamares fritos: pescado y marisco para compartir.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Taberna Pura Cepa?',
		answer:
			'Está en Avenida del Aeropuerto, 6, en el pasaje comercial de Poniente Sur, 14004 Córdoba, junto al barrio de Ciudad Jardín y a pocos minutos del centro histórico.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Puedes llamar al +34 957 08 49 06, teléfono que figura en la ficha de Google Maps y en el perfil de Instagram de la taberna. También se puede reservar en el local y por sus canales de contacto. En fines de semana y festivos es recomendable reservar con antelación.',
	},
	{
		question: '¿Qué se puede comer en Pura Cepa?',
		answer:
			'Cocina cordobesa y andaluza: salmorejo, flamenquín, rabo de toro al Pedro Ximénez, berenjenas con miel, mazamorra, patatas mozárabes y tablas de ahumados e ibéricos. La carta puede variar, consulta platos y alérgenos con el establecimiento.',
	},
	{
		question: '¿Cuál es el horario de la taberna?',
		answer:
			'Abre de martes a domingo, con servicio de desayunos, comidas y algunas noches de cena, y cierra los lunes. El horario puede cambiar por temporada o festivos: llama antes de desplazarte para confirmarlo.',
	},
	{
		question: '¿Tiene terraza y admite mascotas?',
		answer:
			'La taberna cuenta con terraza exterior y admite mascotas en ella. Es un local reformado, amplio y accesible, con opciones para grupos y comidas de empresa.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	openingHoursSpecification: [
		{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '12:00', closes: '16:00' },
		{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '16:00' },
		{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday', 'Friday', 'Saturday'], opens: '20:00', closes: '24:00' },
	],
	'@id': `${business.site}/#taberna`,
	name: business.name,
	alternateName: 'Taberna Pura Cepa (Córdoba)',
	description:
		'Taberna de cocina cordobesa y andaluza en la Avenida del Aeropuerto de Córdoba: salmorejo, flamenquín, rabo de toro, tablas de ibéricos y vinos Montilla-Moriles.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Cocina cordobesa', 'Cocina andaluza', 'Cocina mediterránea', 'Tapas'],
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
		{ '@type': 'LocationFeatureSpecification', name: 'Admite mascotas en terraza', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Accesible', value: true },
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
