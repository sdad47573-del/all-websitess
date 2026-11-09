export const business = {
	name: 'La Tana',
	tagline: 'Trattoria siciliana · Dalt Vila',
	streetAddress: 'Carrer del Passadís, 3',
	postalCode: '07800',
	city: 'Eivissa',
	province: 'Illes Balears',
	region: 'Illes Balears',
	country: 'ES',
	phone: '+34 630 25 89 84',
	latitude: 38.908812,
	longitude: 1.437405,
	site: 'https://www.sur-digital.com/la-tana-ibiza',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/La+Tana,+Restaurante/@38.908812,1.437405,17z/data=!3m1!4b1!4m6!3m5!1s0x129946b16d61e313:0xecea3209368e1b63!8m2!3d38.908812!4d1.437405!16s%2Fg%2F11b7rxm2fw';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;
export const phoneHref = 'tel:+34630258984';
export const instagramUrl = 'https://www.instagram.com/latanaibiza/';
export const facebookUrl = 'https://www.facebook.com/latanaibiza.es/';
export const tripadvisorUrl =
	'https://www.tripadvisor.es/Restaurant_Review-g664638-d3492972-Reviews-Tratoria_La_Tana-Eivissa_Ibiza_Ibiza_Balearic_Islands.html';
export const googleReviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJE-NhbbFGmRIRYxuONgky6uw&hl=es';

export const hours = [
	{ day: 'Lunes', time: '19:30 – 02:00' },
	{ day: 'Martes', time: '19:30 – 02:00' },
	{ day: 'Miércoles', time: '19:30 – 02:00' },
	{ day: 'Jueves', time: '19:30 – 02:00' },
	{ day: 'Viernes', time: '19:30 – 02:00' },
	{ day: 'Sábado', time: '19:30 – 02:00' },
	{ day: 'Domingo', time: '19:30 – 02:00' },
] as const;

export const specialties = [
	{
		category: 'Pasta fresca',
		name: 'Pasta y focacce de la casa',
		description:
			'Pasta, pan y focacce elaborados en la trattoria. La base de una carta italiana que se toma su tiempo.',
	},
	{
		category: 'Del mercado',
		name: 'Pescado fresco',
		description:
			'El pescado fresco es una de las señas del restaurante. La variedad depende de lo que llegue cada día.',
	},
	{
		category: 'Dalla brace',
		name: 'Carnes a la parrilla',
		description:
			'Solomillo y cortes de carne para quien prefiere la parte más contundente de la carta.',
	},
	{
		category: 'Para empezar',
		name: 'Croquetas y pulpo',
		description:
			'Dos entrantes que aparecen una y otra vez en las reseñas de Google de La Tana.',
	},
	{
		category: 'Sicilia en el plato',
		name: 'Gnocchi',
		description:
			'Gnocchi de la casa, mencionados junto a la pasta y el pulpo por quienes han comido aquí.',
	},
	{
		category: 'Dolci',
		name: 'Tiramisú y cannoli',
		description:
			'El final italiano: tiramisú, cannoli sicilianos y limoncello casero para alargar la sobremesa.',
	},
] as const;

export const reviews = [
	{
		quote: 'Una pasta y un solomillo exquisitos.',
		rating: 5,
		source: 'Google',
	},
	{
		quote: 'Pedimos las croquetas, el pulpo, los gnocchis, tiramisú y canoli.',
		rating: 5,
		source: 'Google',
	},
	{
		quote: 'La Tana es uno de mis restaurantes italianos favoritos en la isla.',
		rating: 5,
		source: 'Tripadvisor',
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está La Tana en Ibiza?',
		answer:
			'En Carrer del Passadís, 3, 07800 Eivissa, en el casco antiguo de la ciudad, a pocos minutos del puerto. Es un callejón peatonal, así que lo más cómodo es llegar caminando. Abre las indicaciones en Google Maps para ver el recorrido exacto.',
	},
	{
		question: '¿Qué cocina ofrece La Tana?',
		answer:
			'Es una trattoria siciliana con acento mediterráneo. En su carta conviven pasta fresca, pan y focacce, pescado fresco, carnes y postres italianos como el tiramisú y los cannoli, además de limoncello casero.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Llamando al +34 630 25 89 84, el teléfono que el restaurante publica en su Instagram y en su ficha de Google. Para fines de semana y temporada alta, mejor reservar con antelación.',
	},
	{
		question: '¿Cuál es el horario de La Tana?',
		answer:
			'Abre todos los días de 19:30 a 02:00, en servicio de cena. Los horarios pueden cambiar en festivos o por temporada, así que conviene confirmar por teléfono antes de venir.',
	},
	{
		question: '¿Hace falta reservar en temporada alta?',
		answer:
			'Es recomendable. El restaurante está en pleno casco antiguo de Eivissa y el aforo es limitado; en verano y los fines de semana, llamar con unos días de antelación evita quedarse sin mesa.',
	},
	{
		question: '¿Hay opciones vegetarianas o sin gluten?',
		answer:
			'La carta cambia y no se publica completa en esta web. Pregunta por las alternativas vegetarianas y por la posibilidad de adaptar platos al llamar o al llegar al restaurante.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: 'La Tana, Restaurante',
	description:
		'Trattoria siciliana en el casco antiguo de Eivissa: pasta fresca, pescado, carnes y postres italianos en un callejón de Dalt Vila.',
	url: `${business.site}/`,
	image: `${business.site}/og.jpg`,
	telephone: business.phone,
	servesCuisine: ['Italiana', 'Siciliana', 'Mediterránea'],
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
	sameAs: [instagramUrl, facebookUrl, tripadvisorUrl],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: 4.4,
		reviewCount: 325,
		bestRating: 5,
	},
	acceptsReservations: true,
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '19:30',
			closes: '02:00',
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
