export const business = {
	name: 'Bar La Primera del Naranjo',
	alternateName: 'La Primera del Naranjo',
	streetAddress: 'Calle Académico Sarazá, 4 (bajo)',
	postalCode: '14012',
	locality: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 76 71 03',
	foundingYear: 1924,
	latitude: 37.9086583,
	longitude: -4.780602,
	site: 'https://www.sur-digital.com/bar-la-primera-del-naranjo-cordoba',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Bar+La+Primera+Del+Naranjo/@37.9086583,-4.780602,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf11f2f6a353:0x3a086e74581d59fc!8m2!3d37.9086583!4d-4.780602!16s%2Fg%2F11c60j6jh1?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d12661457-Reviews-Bar_La_Primera_Del_Naranjo-Cordoba_Province_of_Cordoba_Andalucia.html';
export const paginasAmarillasUrl =
	'https://www.paginasamarillas.es/f/cordoba/la-primera-del-naranjo_196226781_000000001.html';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957767103';

export const openingHours = [
	{ day: 'Lunes', hours: 'Cerrado' },
	{ day: 'Martes', hours: 'Cerrado' },
	{ day: 'Miércoles', hours: '12:00–16:30 · 20:00–23:00' },
	{ day: 'Jueves', hours: '12:00–16:30 · 20:00–23:00' },
	{ day: 'Viernes', hours: '12:00–16:30 · 20:00–23:30' },
	{ day: 'Sábado', hours: '12:00–16:30 · 20:00–23:30' },
	{ day: 'Domingo', hours: '12:00–16:30' },
] as const;

export const specialties = [
	{
		category: 'El emblema',
		name: 'Bacalao de cuatro formas',
		description:
			'El gran clásico de la casa desde hace generaciones. Entra salado y se trabaja en el obrador: frito, rebozado, con tomate o con salmorejo, todo a fuego lento.',
	},
	{
		category: 'De la mar',
		name: 'Pijotas, boquerones y coquinas',
		description:
			'Pescado fresco de lonja: pijotas, boquerones en vinagre o fritos, coquinas y marisco. Lo que no pasa el control de la cocina, no entra.',
	},
	{
		category: 'A la piedra',
		name: 'Entrecot de ternera a la piedra',
		description:
			'Se sirve sobre piedra caliente para que el cliente lo termine a su gusto. Carne muy tierna que se deshace en la boca, uno de los platos más pedidos.',
	},
	{
		category: 'De la brasa',
		name: 'Churrasco con salsa verde y presa',
		description:
			'Carnes a la brasa con salsa verde o chimichurri: churrasco, presa ibérica y chuletitas de cordero lechal, pequeñas pero muy jugosas.',
	},
	{
		category: 'Guisos de siempre',
		name: 'Rabo de toro, callos y riñones',
		description:
			'Cocina tradicional a fuego lento: rabo de toro y callos cuando toca, riñones de cordero lechal y, por encargo, cochinillo entero y verdinas con carabineros.',
	},
	{
		category: 'Para empezar y acabar',
		name: 'Croquetas, ensaladilla y tarta de queso',
		description:
			'Croquetas caseras y ensaladilla rusa entre los entrantes más elogiados, y postres propios como la tarta de queso o el tiramisú para cerrar la mesa.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Bar La Primera del Naranjo?',
		answer:
			'En la Calle Académico Sarazá, 4 (bajo), 14012 Córdoba, en el barrio del Naranjo, junto a la Sierra y a la Asomadilla. Es la primera taberna que se abrió en el barrio y sigue en el mismo sitio desde 1924.',
	},
	{
		question: '¿Hace falta reservar?',
		answer:
			'Sí, es muy recomendable reservar, sobre todo los fines de semana, los festivos y para grupos. Llama al +34 957 76 71 03. El local acoge con frecuencia comidas familiares y celebraciones como bodas, bautizos o comuniones.',
	},
	{
		question: '¿Qué se come en La Primera del Naranjo?',
		answer:
			'Cocina casera andaluza y cordobesa de siempre: bacalao en cuatro formas, pijotas, boquerones, coquinas, churrasco con salsa verde, presa ibérica, entrecot de ternera a la piedra, rabo de toro, callos, croquetas caseras, ensaladilla rusa, salmorejo y postres propios. Algunos platos se preparan por encargo.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Cierra lunes y martes. De miércoles a sábado abre de 12:00 a 16:30 y de 20:00 a 23:00 (viernes y sábado hasta las 23:30). El domingo solo sirve almuerzos, hasta las 16:30. Puede variar en festivos: confirma antes de desplazarte.',
	},
	{
		question: '¿Se pueden encargar platos especiales?',
		answer:
			'Sí. Por encargo preparan cochinillo entero y habichuelas verdinas con carabineros, entre otras elaboraciones que requieren tiempo. Pregunta con antelación al reservar.',
	},
	{
		question: '¿Tiene patio, terraza y es accesible?',
		answer:
			'Sí. Cuenta con un patio entoldado con aire acondicionado en verano y estufas de brasero en invierno, salón amplio y tranquilo (sin televisiones) y entrada adaptada para sillas de ruedas. Un clásico para celebraciones.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: business.alternateName,
	description:
		'Bar restaurante familiar de cocina casera andaluza y cordobesa en el barrio del Naranjo de Córdoba, abierto desde 1924: bacalao, pijotas, carnes a la brasa, guisos de siempre y patio entoldado.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Cocina andaluza', 'Cocina cordobesa', 'Cocina tradicional', 'Marisco'],
	priceRange: '€€',
	foundingDate: '1924',
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
	sameAs: [tripadvisorUrl, paginasAmarillasUrl],
	acceptsReservations: true,
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Patio entoldado', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Aire acondicionado', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Estufas de brasero en invierno', value: true },
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
