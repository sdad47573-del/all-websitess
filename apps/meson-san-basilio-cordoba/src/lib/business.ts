export const business = {
	name: 'Mesón San Basilio',
	streetAddress: 'Calle San Basilio, 19',
	postalCode: '14004',
	locality: 'Córdoba',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 957 29 70 07',
	latitude: 37.8764889,
	longitude: -4.7837944,
	site: 'https://meson-san-basilio-cordoba.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/MES%C3%93N+SAN+BASILIO/@37.8764889,-4.7837944,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d209c0f25be4f:0xf9149187137a7161!8m2!3d37.8764889!4d-4.7837944!16s%2Fg%2F1ptyl_qq4?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const instagramUrl = 'https://www.instagram.com/mesonsanbasiliocordoba/';
export const facebookUrl = 'https://www.facebook.com/Mesonsanbasilio/';
export const facebookPhotosUrl = `${facebookUrl}photos/`;
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g187430-d2076095-Reviews-Meson_San_Basilio-Cordoba_Province_of_Cordoba_Andalucia.html';
export const turismoCordobaUrl = 'https://www.turismodecordoba.org/meson-san-basilio';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34957297007';

export const openingHours = [
	{ day: 'Lunes', hours: '13:00–16:00' },
	{ day: 'Martes', hours: '13:00–16:00 · 20:00–23:30' },
	{ day: 'Miércoles', hours: '13:00–16:00 · 20:00–23:30' },
	{ day: 'Jueves', hours: '13:00–16:00 · 20:00–23:30' },
	{ day: 'Viernes', hours: '13:00–16:00 · 20:00–23:30' },
	{ day: 'Sábado', hours: '13:00–16:00 · 20:00–23:30' },
	{ day: 'Domingo', hours: '13:00–16:00 · noche cerrada' },
] as const;

export const specialties = [
	{
		category: 'El clásico cordobés',
		name: 'Salmorejo',
		description:
			'El entrante imprescindible de la casa: salmorejo bien batido y frío, con su toque de ajo y su textura cremosa de siempre.',
	},
	{
		category: 'De la huerta',
		name: 'Berenjenas fritas',
		description:
			'Berenjenas fritas crujientes, de las que no se olvidan: uno de los platos que siempre ha acompañado a la carta del mesón.',
	},
	{
		category: 'De la mar',
		name: 'Pescaíto frito',
		description:
			'Pescado frito recién hecho, con la textura justa: crujiente por fuera y jugoso por dentro, como manda la tradición.',
	},
	{
		category: 'De cuchara',
		name: 'Rabo de toro',
		description:
			'Guiso lento de rabo de toro, uno de los platos por los que más se recomienda el mesón y que se prepara a fuego lento.',
	},
	{
		category: 'Para compartir',
		name: 'Tablas de ibéricos y embutidos',
		description:
			'Embutidos, jamón y tablas para empezar, acompañadas del vino de la tierra y de la cerveza bien fría.',
	},
	{
		category: 'Y de noche, flamenco',
		name: 'Ciclo de flamenco Ruta por las Tabernas',
		description:
			'En los meses de invierno el mesón es una de las sedes donde los artistas flamencos de Córdoba interpretan sus cantes en directo.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Mesón San Basilio?',
		answer:
			'En la Calle San Basilio, 19, 14004 Córdoba, dentro del casco histórico, en el barrio de San Basilio, también conocido como Alcázar Viejo. Está a poca distancia de la Mezquita-Catedral, el Alcázar de los Reyes Cristianos, las Caballerizas Reales y la iglesia de San Basilio.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Llama al +34 957 29 70 07, teléfono que figura en la ficha del restaurante y en los directorios turísticos de Córdoba. El mesón dispone de salones independientes, bodega, patio cordobés y habitaciones para reservados, por lo que admite grupos y celebraciones.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Cocina casera tradicional cordobesa: salmorejo, berenjenas fritas, pescaíto frito, rabo de toro y tablas de embutidos. El local ocupa una casa tradicional cordobesa de principios del siglo XIX y su carta se apoya en producto de mercado.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Sirve comidas de 13:00 a 16:00 y cenas de 20:00 a 23:30, con el domingo por la noche cerrado. Puede variar en festivos y en temporada de alta ocupación: llama antes de desplazarte para confirmarlo.',
	},
	{
		question: '¿Qué precio tiene una comida aquí?',
		answer:
			'El precio medio por comensal ronda los 16 euros según las guías de restaurantes de Andalucía, una cifra contenido para comer en el centro histórico de Córdoba. La carta puede variar por temporada.',
	},
	{
		question: '¿Tiene terraza, salones para grupos y accesibilidad?',
		answer:
			'Sí. El mesón cuenta con terraza, varios salones independientes con capacidad total de alrededor de cien personas, bodega, patio cordobés, acceso para personas con movilidad reducida y aceptación de tarjetas. Acepta reservas y ofrece servicio de mesa.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: 'Mesón San Basilio Córdoba',
	description:
		'Mesón de cocina casera tradicional cordobesa en el barrio de San Basilio del casco histórico de Córdoba: salmorejo, berenjenas fritas, pescaíto frito y rabo de toro, con patio cordobés, terraza y salones para grupos.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Cocina cordobesa', 'Cocina andaluza', 'Cocina tradicional', 'Flamenco'],
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
		{ '@type': 'LocationFeatureSpecification', name: 'Patio cordobés', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Salones para grupos', value: true },
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
