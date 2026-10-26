export const business = {
	name: 'Can Cosmi',
	fullName: 'Can Cosmi Santa Inés',
	tagline: 'Taberna y colmado · Santa Agnès',
	streetAddress: 'Plaza de la Església, s/n',
	postalCode: '07828',
	city: 'Santa Agnès de Corona',
	municipality: 'Sant Antoni de Portmany',
	province: 'Illes Balears',
	region: 'Illes Balears',
	country: 'ES',
	phone: '+34 971 80 50 20',
	latitude: 39.0384889,
	longitude: 1.3360549,
	site: 'https://can-cosmi-santa-agnes.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Can+Cosmi+santa+In%C3%A9s+Restaurante+%2F+punto+de+encuentro+y+m%C3%A1s./@39.0384889,1.3360549,17z/data=!3m1!4b1!4m6!3m5!1s0x12993719ef5d32f5:0x2eb5f969249b19e5!8m2!3d39.0384889!4d1.3360549!16s%2Fg%2F11bvt6tc1v';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;
export const phoneHref = 'tel:+34971805020';
export const googleReviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ9TJd7xk3mRIR5RmbJGn5tS4&hl=es';
export const instagramUrl = 'https://www.instagram.com/cancosmi/';

export const hours = [
	{ day: 'Lunes', hours: '12:00 – 16:00 · 19:00 – 23:00' },
	{ day: 'Martes', hours: 'Cerrado' },
	{ day: 'Miércoles', hours: '12:00 – 16:00 · 19:00 – 23:00' },
	{ day: 'Jueves', hours: '12:00 – 16:00 · 19:00 – 23:00' },
	{ day: 'Viernes', hours: '12:00 – 16:00 · 19:00 – 23:00' },
	{ day: 'Sábado', hours: '12:00 – 16:00 · 19:00 – 23:00' },
	{ day: 'Domingo', hours: '12:00 – 16:00 · 19:00 – 23:00' },
] as const;

export const specialties = [
	{
		category: 'La casa',
		name: 'Tortilla paisana',
		description:
			'La tortilla de patata y verduras que hizo famoso al pueblo. Se prepara al momento y se pide en casi todas las mesas.',
	},
	{
		category: 'La casa',
		name: 'Tortilla Toni',
		description:
			'La tortilla con nombre propio que aparece en las reseñas de Google. Pregunta por ella al sentarte.',
	},
	{
		category: 'De la sartén',
		name: 'Huevos fritos con patatas',
		description:
			'Un clásico de taberna, sencillo y contundente. De los platos que la casa mantiene en su recetario de siempre.',
	},
	{
		category: 'De la plancha',
		name: 'Escalopes de pollo o ternera',
		description:
			'Filetes empanados y a la plancha, uno de los platos caseros que se repiten en la carta de la casa.',
	},
	{
		category: 'Del horno',
		name: 'Pollo al horno',
		description:
			'Pollo asado al estilo de siempre, para comer sin prisa en la terraza o en el comedor.',
	},
	{
		category: 'Del mar',
		name: 'Calamares',
		description:
			'Calamares a la andaluza, uno de los entrantes que los clientes destacan en sus reseñas.',
	},
	{
		category: 'Para compartir',
		name: 'Paella mixta',
		description:
			'Arroz con marisco y carne, pensado para compartir. Disponibilidad según el día; consúltala al llegar.',
	},
	{
		category: 'Para los peques',
		name: 'Menú infantil',
		description:
			'Una opción pensada para los más pequeños de la mesa, en un local donde las familias son parte del paisaje.',
	},
] as const;

export const reviews = [
	{
		quote: 'Estaba delicioso, hemos pedir pasta con jamón y tortilla Toni.',
		rating: 5,
	},
	{
		quote: 'Pedimos unos calamares y una paella mixta y muy rico.',
		rating: 4,
	},
	{
		quote: 'Buena comida y camarero servicial y educado.',
		rating: 3,
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Can Cosmi?',
		answer:
			'En la Plaza de la Església, s/n, 07828 Santa Agnès de Corona, en el municipio de Sant Antoni de Portmany. Está junto a la iglesia del pueblo; la terraza mira directamente a la plaza.',
	},
	{
		question: '¿Qué hay que pedir en Can Cosmi?',
		answer:
			'La tortilla paisana de patata y verduras es la seña de identidad de la casa. También preparan huevos fritos con patatas, escalopes, pollo al horno, ensaladas, calamares y paella mixta, además de un menú infantil.',
	},
	{
		question: '¿Cuál es el horario del restaurante?',
		answer:
			'De lunes a domingo, excepto los martes, abre de 12:00 a 16:00 y de 19:00 a 23:00. Los martes cierra. El horario puede cambiar en temporada alta o en festivos, así que conviene llamar antes de venir.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Llamando al +34 971 80 50 20. La web no tiene formulario de reservas; para grupos, fines de semana o para comer en la terraza, mejor llamar con antelación.',
	},
	{
		question: '¿Sigue abierto el colmado?',
		answer:
			'El colmado forma parte de la historia de Can Cosmi desde 1951. Es una tienda pequeña con productos envasados, frutas y verduras, alpargatas y cestas tradicionales, además de bar y restaurante.',
	},
	{
		question: '¿Hay menú infantil o platos para niños?',
		answer:
			'Sí, el restaurante ofrece menú infantil. Es un local familiar, con terraza frente a la iglesia y mesas para grupos; si necesitas adaptar algún plato, coméntalo al llamar.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.fullName,
	description:
		'Taberna, restaurante y colmado de 1951 en Santa Agnès de Corona, Ibiza. Famosa por su tortilla paisana y su terraza frente a la iglesia.',
	url: `${business.site}/`,
	image: `${business.site}/og.jpg`,
	telephone: business.phone,
	servesCuisine: ['Española', 'Ibicenca', 'Casera'],
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
	sameAs: [instagramUrl],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: 4.2,
		reviewCount: 685,
		bestRating: 5,
	},
	acceptsReservations: true,
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '12:00',
			closes: '16:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '19:00',
			closes: '23:00',
		},
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
