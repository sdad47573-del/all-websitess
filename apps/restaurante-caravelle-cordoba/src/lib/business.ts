export const business = {
	name: 'Restaurante Caravelle',
	streetAddress: 'Calle José María Martorell, 40',
	postalCode: '14005',
	locality: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 41 09 65',
	latitude: 37.8763338,
	longitude: -4.7963928,
	site: 'https://restaurante-caravelle-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Caravelle/@37.8763338,-4.7963928,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20a6935102dd:0xfb2da95ed90fbf3!8m2!3d37.8763338!4d-4.7963928!16s%2Fg%2F12qgzq94b?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const facebookUrl = 'https://www.facebook.com/caravellec/';
export const facebookPhotosUrl = `${facebookUrl}photos/`;
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d9729250-Reviews-Caravelle-Cordoba_Province_of_Cordoba_Andalucia.html';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957410965';

export const openingHours = [
	{ day: 'Lunes', hours: 'Cerrado' },
	{ day: 'Martes', hours: '12:00–16:00 · 20:00–01:00' },
	{ day: 'Miércoles', hours: '12:00–16:00 · 20:00–01:00' },
	{ day: 'Jueves', hours: '12:00–16:00 · 20:00–01:00' },
	{ day: 'Viernes', hours: '12:00–16:00 · 20:00–01:00' },
	{ day: 'Sábado', hours: '12:00–16:00 · 20:00–01:00' },
	{ day: 'Domingo', hours: '12:00–16:00 · 20:00–01:00' },
] as const;

export const specialties = [
	{
		category: 'El más citado',
		name: 'Salmorejo cordobés',
		description:
			'Textura cremosa y sabor auténtico, con textura de casa. Junto a las berenjenas crujientes forma el entrante que más se repite en la mesa.',
	},
	{
		category: 'De la huerta',
		name: 'Berenjenas con salmorejo',
		description:
			'La versión de Caravelle: berenjenas fritas bien crujientes, sin resultar aceitosas, acompañadas de salmorejo cremoso.',
	},
	{
		category: 'De la mar',
		name: 'Calamares, gambones al ajillo y bacalao',
		description:
			'Frituras y pescado con un punto de ejecución cuidado: calamares fritos, gambones al ajillo y bacalao en su punto.',
	},
	{
		category: 'Cuchara',
		name: 'Fabes con mejillones y codillo en salsa',
		description:
			'Guisos de cuchara de toda la vida, con fabes con mejillones y codillo en salsa, de los platos de cocina tradicional mejor ejecutados.',
	},
	{
		category: 'Brasa',
		name: 'Churrasco, carrillada y flamenquín cordobés',
		description:
			'Carnes con carácter: churrasco de cerdo, carrillada en salsa y el flamenquín cordobés, sempre entre los más pedidos.',
	},
	{
		category: 'Para compartir',
		name: 'Croquetas de boletus y habitas',
		description:
			'Entrantes caseros para empezar: croquetas de boletus cremosas y habitas, con raciones generosas para compartir.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Restaurante Caravelle?',
		answer:
			'En la Calle José María Martorell, 40, 14005 Córdoba, en el barrio de Poniente Sur. Es un restaurante de cocina tradicional con ambiente tranquilo, familiar y acogedor.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Llama al +34 957 41 09 65, teléfono que figura en la ficha del restaurante. El local admite reservas y es recomendable reservarlas los fines de semana y en días de alta ocupación para evitar esperas.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Cocina tradicional andaluza y cordobesa con producto fresco: salmorejo, berenjenas con salmorejo, fabes con mejillones, codillo en salsa, croquetas de boletus, calamares fritos, gambones al ajillo, bacalao, churrasco de cerdo, carrillada, flamenquín y habitas. El equipo atiende también las alergias alimentarias, usando freidoras separadas con aceite limpio cuando es necesario.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Cierra los lunes. De martes a domingo sirve comidas de 12:00 a 16:00 y cenas de 20:00 a 01:00. Puede variar en festivos: llama antes de desplazarte para confirmarlo.',
	},
	{
		question: '¿Tiene terraza, para llevar y es accesible?',
		answer:
			'Sí. Cuenta con salón interior y terraza, ofrece comida para llevar, admite reservas y dispone de entrada accesible para personas con movilidad reducida. Un lugar pensado tanto para familias como para grupos de amigos.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	openingHoursSpecification: [
		{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '12:00', closes: '16:00' },
		{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '20:00', closes: '01:00' },
	],
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: 'Caravelle Córdoba',
	description:
		'Restaurante de cocina tradicional andaluza en Poniente Sur, Córdoba: salmorejo cremoso, berenjenas con salmorejo, fabes con mejillones, croquetas de boletus, frituras y carnes a la brasa, con terraza y para llevar.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Cocina andaluza', 'Cocina cordobesa', 'Cocina tradicional', 'Marisco'],
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
	sameAs: [facebookUrl, tripadvisorUrl],
	acceptsReservations: true,
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Terraza', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Comida para llevar', value: true },
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
