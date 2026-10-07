export const business = {
	name: 'Restaurante Rincón Gallego Egabrense',
	shortName: 'Rincón Gallego',
	streetAddress: 'Avenida Fuente del Río, 34',
	postalCode: '14940',
	locality: 'Cabra',
	province: 'Córdoba',
	region: 'Andalucía',
	country: 'ES',
	phone: '+34 679 51 11 65',
	latitude: 37.4697147,
	longitude: -4.4320193,
	site: 'https://rincon-gallego-egabrense-cabra.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Rinc%C3%B3n+Gallego+Egabrense/@37.4697147,-4.4320193,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d7678912fdc75:0x5213a2c92834d409!8m2!3d37.4697147!4d-4.4320193!16s%2Fg%2F11c52957ng?authuser=0&hl=es&entry=ttu';
export const mapsPhotosUrl = mapsUrl;
export const instagramUrl = 'https://www.instagram.com/rincongallegoegabrense/';
export const facebookUrl = 'https://www.facebook.com/rincongallegoegabrense/';
export const facebookPhotosUrl = `${facebookUrl}photos/`;
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g665931-d12475623-Reviews-Restaurante_Rincon_Gallego_Egabrense-Cabra_Province_of_Cordoba_Andalucia.html';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;
export const phoneHref = 'tel:+34679511165';

export const openingHours = [
	{ day: 'Lunes', hours: 'Cerrado' },
	{ day: 'Martes', hours: '12:00–16:30' },
	{ day: 'Miércoles', hours: '12:00–16:30' },
	{ day: 'Jueves', hours: '12:00–16:30 · 20:00–23:30' },
	{ day: 'Viernes', hours: '12:00–16:30 · 20:00–23:30' },
	{ day: 'Sábado', hours: '12:00–16:30 · 20:00–23:30' },
	{ day: 'Domingo', hours: '12:00–16:30' },
] as const;

export const specialties = [
	{
		category: 'El plato bandera',
		name: 'Pulpo a la brasa',
		description:
			'El pulpo a la brasa, ternurísimo, con cremas que potencian su sabor. También en versión a la parrilla con parmentier de cachelos y parmesano.',
	},
	{
		category: 'Rubia gallega',
		name: 'Chuletón de rubia gallega',
		description:
			'Chuletón de rubia gallega con 45 días de maduración, terminado en piedra o a la brasa ante el comensal. Un corte de los más apreciados de la carta.',
	},
	{
		category: 'Carne gallega',
		name: 'Solomillo, entrecot y cachopo',
		description:
			'Solomillo de rubia que se deshace en la boca, entrecot a la piedra y cachopo de cecina, con un punto de cocción servido a la mesa.',
	},
	{
		category: 'Del mar',
		name: 'Marisco de la mejor calidad',
		description:
			'Almejas, mejillones al vapor, navajas, zamburiñas, berberechos y ostras, con una frescura que la clientela repite en cada visita.',
	},
	{
		category: 'Entrantes',
		name: 'Croquetas de carabinero y pimientos del Padrón',
		description:
			'Croquetas caseras de carabinero, pimientos del Padrón auténticos, piparras en tempura, pintxo de tortilla con Cabrales y patatas con gulas.',
	},
	{
		category: 'Postres',
		name: 'Tarta de queso, milhoja y arroz con leche',
		description:
			'Un cierre dulce con tarta de queso, milhoja con nata y chocolate, coulant con chocolate blanco y avellanas, brownie o arroz con leche.',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está el Rincón Gallego Egabrense?',
		answer:
			'En la Avenida Fuente del Río, 34, 14940 Cabra (Córdoba), en la comarca de la Subbética. Cabra es uno de los pueblos más bonitos del centro de Andalucía y el restaurante se sitúa a las afueras del casco urbano, junto a la fuente del río.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Llama al +34 679 51 11 65, teléfono que figura en el Instagram y en la página de Facebook del restaurante. Se recomienda reservar, sobre todo los fines de semana, porque el local se llena con facilidad.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Cocina gallega con producto de primera calidad: pulpo a la brasa y a la parrilla, chuletón de rubia gallega con maduración de 45 días, solomillo, entrecot a la piedra, cachopo de cecina, marisco de la mejor calidad, croquetas de carabinero, pimientos del Padrón, bacalao al peregrino y empanada. También hay menú del día y una carta de vinos gallegos con albariños de referencia.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'Cierra los lunes. Martes y miércoles sirven solo comida, de 12:00 a 16:30. De jueves a sábado hay comida y cena, hasta las 23:30. El domingo abre únicamente al mediodía. Puede variar en festivos: confirma antes de desplazarte.',
	},
	{
		question: '¿Tiene terraza y patio?',
		answer:
			'Sí. Cuenta con una terraza amplia que en los meses fríos se disfruta con braseros debajo de las mesas, además de salones cálidos y un patio interior delicado. La decoración combina elementos rústicos con detalles marineros, como redes de pesca.',
	},
];

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.name,
	alternateName: 'Rincón Gallego Egabrense (Cabra)',
	description:
		'Restaurante de cocina gallega en Cabra (Córdoba): pulpo a la brasa, chuletón de rubia gallega, marisco de primera calidad y croquetas caseras, con terraza con braseros, patio interior y menú del día.',
	url: `${business.site}/`,
	telephone: business.phone,
	servesCuisine: ['Cocina gallega', 'Cocina de mar', 'Cocina de brasa', 'Cocina mediterránea'],
	priceRange: '€€€',
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
		{ '@type': 'LocationFeatureSpecification', name: 'Terraza con braseros', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Patio interior', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Menú del día', value: true },
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
