export const business = {
	name: 'Restaurante Canadian',
	alternateName: 'Canadian Bar and Tapas',
	streetAddress: 'Calle Albéniz, 6',
	postalCode: '14005',
	locality: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 45 27 56',
	latitude: 37.8843724,
	longitude: -4.789673,
	site: 'https://restaurante-canadian-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Canadian/@37.8843724,-4.789673,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf60827bc787:0x72640a5dd67484d0!8m2!3d37.8843724!4d-4.789673!16s%2Fg%2F11b76k6z00?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const instagramUrl = 'https://www.instagram.com/canadiancordoba/';
export const facebookUrl = 'https://www.facebook.com/canadiantapas/';
export const facebookPhotosUrl = `${facebookUrl}photos/`;
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d1792033-Reviews-Canadian_Bar_and_Tapas-Cordoba_Province_of_Cordoba_Andalucia.html';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957452756';

export const openingHours = [
	{ day: 'Lunes', hours: 'Cerrado' },
	{ day: 'Martes', hours: '7:00–17:00' },
	{ day: 'Miércoles', hours: '7:00–17:00' },
	{ day: 'Jueves', hours: '7:00–17:00' },
	{ day: 'Viernes', hours: '7:00–17:00' },
	{ day: 'Sábado', hours: '7:00–17:00' },
	{ day: 'Domingo', hours: '7:00–17:00' },
] as const;

export const specialties = [
	{
		category: 'El más pedido',
		name: 'Risotto de rabo de toro',
		description:
			'El plato estrella de la casa: el clásico rabo de toro cordobés servido como risotto. Muchos comensales lo consideran uno de los mejores de la ciudad.',
	},
	{
		category: 'De cuchara',
		name: 'Carrilladas al Pedro Ximénez',
		description:
			'Guiso lento de carrillada con Pedro Ximénez, tierno y con el punto dulce del vino. Uno de los imprescindibles de la carta.',
	},
	{
		category: 'Clásico cordobés',
		name: 'Flamenquines y salmorejo',
		description:
			'Flamenquines caseros y salmorejo cordobés: los dos grandes de la cocina cordobesa, siempre entre los más alabados.',
	},
	{
		category: 'De la huerta',
		name: 'Berenjenas en tempura con miel de caña',
		description:
			'Berenjenas en tempura ligera con miel de caña, el contraste dulce y salado que no falla como entrante para compartir.',
	},
	{
		category: 'Para picar',
		name: 'Croquetas, patatas gajo y timbal ibérico',
		description:
			'Croquetas caseras, patatas gajo con mojo y timbal de patatas con jamón ibérico: la parte más tapeable de una carta muy amplia.',
	},
	{
		category: 'Postre',
		name: 'Tarta de queso',
		description:
			'La tarta de queso de la casa tiene devotos que la sitúan entre las mejores de España. Cierra cualquier menú con buen pie.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante Canadian?',
		answer:
			'En la Calle Albéniz, 6, 14005 Córdoba, en el barrio de Poniente Sur, junto a la Avenida de Medina Azahara y a pocos minutos del centro y de la estación de tren.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'El establecimiento no admite reservas: se atiende por orden de llegada, por lo que en horas punta y fines de semana conviene ir con tiempo. Para pedir comida para llevar o resolver dudas, llama al +34 957 45 27 56.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Tapas y cocina española con una carta muy amplia que suma también platos italianos, asiáticos, hamburguesas artesanales y bocadillos. Es una opción ideal para grupos, con alternativas de carne, pescado, vegetarianas y veganas.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Abre de 7:00 a 17:00 de martes a domingo, con servicio de desayunos, comidas y brunch, y cierra los lunes. Puede variar en festivos: confirma antes de desplazarte.',
	},
	{
		question: '¿Tiene terraza y opciones para familias?',
		answer:
			'Sí. Cuenta con terraza exterior, servicio de comida para llevar, opciones veganas y saludables, menú infantil y acceso adaptado para sillas de ruedas. El local es informal y acogedor, popular entre estudiantes y visitantes.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: business.alternateName,
	description:
		'Bar restaurante de tapas y cocina española en la Calle Albéniz del barrio de Poniente Sur de Córdoba: menú del día, risotto de rabo de toro, carrilladas al Pedro Ximénez, flamenquines y una carta muy variada.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Tapas', 'Cocina española', 'Cocina cordobesa', 'Cocina mediterránea'],
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
	sameAs: [instagramUrl, facebookUrl, tripadvisorUrl],
	acceptsReservations: false,
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Comida para llevar', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Opciones veganas', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Menú infantil', value: true },
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
