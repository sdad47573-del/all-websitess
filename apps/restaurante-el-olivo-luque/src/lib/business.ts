export const business = {
	name: 'Restaurante El Olivo',
	streetAddress: 'Calle Cronista Vicente Estrada, 21',
	postalCode: '14880',
	locality: 'Luque',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 655 97 55 25',
	phone2: '+34 605 21 51 75',
	email: 'fbaronacanete@gmail.com',
	latitude: 37.5549734,
	longitude: -4.2825977,
	site: 'https://restaurante-el-olivo-luque.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Olivo/@37.5549734,-4.2825977,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d9884941f6ba9:0x20d233f5b8b80bd9!8m2!3d37.5549734!4d-4.2825977!16s%2Fg%2F1z44bc5y9?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const websiteUrl = 'https://restauranteolivoluque.es/';
export const instagramUrl = 'https://www.instagram.com/restauranteolivo1/';
export const facebookUrl = 'https://www.facebook.com/p/Restaurante-El-Olivo-100063502634840/';
export const facebookPhotosUrl = `${facebookUrl}photos/`;
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g1539130-d7182793-Reviews-Restaurante_EL_OLIVO-Luque_Province_of_Cordoba_Andalucia.html';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34655975525';

export const openingHours = [
	{ day: 'Lunes', hours: '12:00–16:30 · 20:30–23:00' },
	{ day: 'Martes', hours: 'Cerrado' },
	{ day: 'Miércoles', hours: '12:30–16:30 · 20:00–00:00' },
	{ day: 'Jueves', hours: '12:30–16:30 · 20:00–00:00' },
	{ day: 'Viernes', hours: '12:30–16:30 · 20:00–00:00' },
	{ day: 'Sábado', hours: '12:30–16:30 · 20:00–00:00' },
	{ day: 'Domingo', hours: '12:30–16:30 · 20:00–00:00' },
] as const;

export const specialties = [
	{
		category: 'De temporada',
		name: 'Alcachofas confitadas en AOVE',
		description:
			'Producto de cercanía y de temporada, trabajado con respeto: la alcachofa confitada en aceite de oliva virgen extra es una de las señas de la casa.',
	},
	{
		category: 'Tradición reinventada',
		name: 'Gyozas de gambas al ajillo',
		description:
			'Las gambas al ajillo de siempre, con su esencia intacta, servidas dentro de una gyoza. El plato que mejor resume la cocina de Kisko y Eloísa.',
	},
	{
		category: 'Emblema',
		name: 'Falso risotto de rabo de toro',
		description:
			'El gran clásico cordobés convertido en un falso risotto de puntalette: tradición con presentación nueva, guiso lento incluido.',
	},
	{
		category: 'Best seller',
		name: 'Bao de pollo crujiente',
		description:
			'Pan bao con pollo crujiente, ali oli de curry y huevo de codorniz. Uno de los platos más pedidos y celebrados por la clientela.',
	},
	{
		category: 'De la brasa y el guiso',
		name: 'Presa de angus y carrillada',
		description:
			'Carnes a la brasa y guisos de siempre: carrillada tradicional, presa de angus y sugerencias de temporada como cochinillo o cordero asado.',
	},
	{
		category: 'Postres',
		name: 'Tartas de queso de la Subbética',
		description:
			'La repostería improvisada de la casa: tarta de queso de Zuheros, de queso y Jungly y de queso con pistachos, entre otras.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante El Olivo?',
		answer:
			'En la Calle Cronista Vicente Estrada, 21, 14880 Luque (Córdoba), en pleno corazón de las Sierras Subbéticas. Es un restaurante de referencia en el municipio y en la comarca.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Llamando al +34 655 97 55 25 o al +34 605 21 51 75, los dos teléfonos que figuran en la web oficial y en la ficha del restaurante. Los fines de semana se acercan comensales de otras localidades y de la capital, así que conviene reservar con antelación.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Cocina de mercado contemporánea que reinterpreta los guisos de siempre sin perder su esencia: gyozas de gambas al ajillo, falso risotto de rabo de toro, bao de pollo crujiente, croquetas de cochinillo y manzana o alcachofas confitadas en AOVE. Mantiene una carta fija y trabaja con sugerencias y producto de temporada.',
	},
	{
		question: '¿Cuál es el horario del restaurante?',
		answer:
			'El lunes abre de 12:00 a 16:30 y de 20:30 a 23:00; el martes descansa; y de miércoles a domingo el servicio es de 12:30 a 16:30 y de 20:00 a 00:00. Puede variar en festivos: confirma antes de desplazarte.',
	},
	{
		question: '¿Tiene terraza y vistas?',
		answer:
			'Sí. El Olivo cuenta con un salón interior reformado, con chimenea, y una terraza con vistas a la sierra y a los olivos de la Subbética, ideal para los días de buen tiempo.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: 'El Olivo Luque',
	description:
		'Restaurante de cocina de mercado contemporánea en Luque (Córdoba), en las Sierras Subbéticas: tradición cordobesa reinterpretada con producto de temporada, brasa y sugerencias del día.',
	url: `${business.site}/`,
	telephone: business.phone,
	email: business.email,
	servesCuisine: ['Cocina de mercado', 'Cocina cordobesa', 'Cocina andaluza', 'Cocina contemporánea'],
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
	sameAs: [websiteUrl, instagramUrl, facebookUrl, tripadvisorUrl],
	acceptsReservations: true,
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Salón con chimenea', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Vistas a la sierra', value: true },
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
