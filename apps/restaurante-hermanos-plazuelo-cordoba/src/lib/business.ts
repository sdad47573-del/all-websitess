export const business = {
	name: 'Restaurante Hermanos Plazuelo',
	streetAddress: 'Avenida Amargacena, 7 (Nave 7-F, Polígono Amargacena)',
	postalCode: '14013',
	locality: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 20 49 93',
	mobile: '+34 629 88 99 18',
	email: 'h.plazuelo@gmail.com',
	latitude: 37.8463552,
	longitude: -4.7960916,
	site: 'https://restaurante-hermanos-plazuelo-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Hermanos+Plazuelo/@37.8463552,-4.7960916,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20db08a5e7b7:0x611cfe16bde851ac!8m2!3d37.8463552!4d-4.7960916!16s%2Fg%2F1tdx0x64?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const facebookUrl =
	'https://www.facebook.com/p/BAR-Restaurante-HNOS-Plazuelo-I-y-II-100061845895735/';
export const facebookPhotosUrl = `${facebookUrl}photos/`;
export const paginasAmarillasUrl =
	'https://www.paginasamarillas.es/f/cordoba/hermanos-plazuelo_014809206_000000002.html';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957204993';

export const openingHours = [
	{ day: 'Lunes', hours: '6:00–18:00' },
	{ day: 'Martes', hours: '6:00–18:00' },
	{ day: 'Miércoles', hours: '6:00–18:00' },
	{ day: 'Jueves', hours: '6:00–18:00' },
	{ day: 'Viernes', hours: '6:00–18:00' },
	{ day: 'Sábado', hours: '6:00–15:00' },
	{ day: 'Domingo', hours: 'Cerrado' },
] as const;

export const specialties = [
	{
		category: 'El clásico de la casa',
		name: 'Menú del día',
		description:
			'El plato fuerte de la casa: menú completo, casero y abundante. La opción más valorada por quien trabaja en el polígono.',
	},
	{
		category: 'De la huerta',
		name: 'Berenjenas fritas con miel',
		description:
			'Crujientes por fuera y tiernas por dentro, con el contraste dulce y salado típico de la cocina andaluza. Uno de los platos más alabados por los clientes.',
	},
	{
		category: 'Cuchara',
		name: 'Carrillada y potaje',
		description:
			'Guisos lentos de cuchara y potajes de temporada, dentro de una carta de cocina casera española y cordobesa de raíz.',
	},
	{
		category: 'A la brasa',
		name: 'Secreto ibérico con patatas',
		description:
			'Secreto ibérico a la plancha con patatas fritas, una de las carnes más pedidas junto con los huevos rotos con chorizo.',
	},
	{
		category: 'Desayunos',
		name: 'Tostadas, bocadillos y tortilla',
		description:
			'Desde primera hora: tostadas con jamón, bocadillos y pinchos de tortilla, el desayuno de los trabajadores del polígono.',
	},
	{
		category: 'Del mar',
		name: 'Marisco y pescado',
		description:
			'Mariscos y pescado fresco entre los platos más solicitados de la carta, en una cocina que presume de producto y de raciones generosas.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante Hermanos Plazuelo?',
		answer:
			'En Avenida Amargacena, 7 (Nave 7-F), dentro del polígono industrial de Amargacena-Torrecilla, 14013 Córdoba, en el Distrito Sur de la ciudad. Es un local de referencia para quien trabaja en la zona y para transportistas de paso.',
	},
	{
		question: '¿Cómo puedo reservar o pedir comida para llevar?',
		answer:
			'Llamando al +34 957 20 49 93, teléfono que figura en la ficha de Google Maps y en la página de Facebook del negocio. También se puede reservar para grupos y menús de empresa. El establecimiento admite reservas y ofrece comida para llevar.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Cocina casera española y cordobesa: menú del día, berenjenas fritas con miel, carrillada, potaje, secreto ibérico con patatas, huevos rotos con chorizo, salmorejo, marisco y pescado. La carta puede variar según el día; consulta platos y alérgenos con el establecimiento.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Abre de lunes a sábado desde primera hora de la mañana (los desayunos empiezan sobre las 6:00) y descansa los domingos. El horario publicado varía ligeramente entre fuentes, por lo que se muestra como orientativo: llama antes de desplazarte para confirmarlo.',
	},
	{
		question: '¿Tiene terraza, wifi y acceso adaptado?',
		answer:
			'Sí. El local cuenta con terraza, salas climatizadas, wifi gratuito, salón para grupos y eventos privados, y acceso libre de barreras arquitectónicas para personas con movilidad reducida.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	openingHoursSpecification: [
		{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '06:00', closes: '15:00' },
		{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '06:00', closes: '18:00' },
	],
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: 'Bar Restaurante Hermanos Plazuelo',
	description:
		'Restaurante de cocina casera española y cordobesa en la Avenida Amargacena del polígono Torrecilla-Amargacena de Córdoba: menú del día, desayunos, guisos de cuchara y carnes a la brasa.',
	url: `${business.site}/`,
	telephone: business.phone,
	email: business.email,
	servesCuisine: ['Cocina española', 'Cocina cordobesa', 'Cocina tradicional', 'Cocina casera'],
	priceRange: '€',
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
	sameAs: [facebookUrl, paginasAmarillasUrl],
	acceptsReservations: true,
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Wifi gratis', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Aire acondicionado', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Comida para llevar', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Salón para grupos', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Accesible', value: true },
	],
} as const;

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${business.site}/#preguntas`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
} as const;
