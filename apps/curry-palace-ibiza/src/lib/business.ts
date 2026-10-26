export const business = {
	name: 'Curry Palace',
	fullName: 'Restaurante Curry Palace C.B',
	tagline: 'Cocina india · Cala de Bou',
	streetAddress: 'Carrer de Cala de Bou, 13',
	postalCode: '07829',
	city: 'Sant Josep de sa Talaia',
	province: 'Illes Balears',
	region: 'Illes Balears',
	country: 'ES',
	phone: '+34 971 80 45 36',
	latitude: 38.9684084,
	longitude: 1.302251,
	site: 'https://curry-palace-ibiza.vercel.app',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Curry+Palace+C.B/@38.9684084,1.302251,17z/data=!3m1!4b1!4m6!3m5!1s0x129949efa947fa1d:0x5afeb26ddeab103c!8m2!3d38.9684084!4d1.302251!16s%2Fg%2F1td99xpk';
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;
export const phoneHref = 'tel:+34971804536';
export const googleReviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJHfpHqe9JmRIRPBCr3m2y_lo&hl=es';
export const tripadvisorUrl =
	'https://www.tripadvisor.com/Restaurant_Review-g652116-d5414911-Reviews-Curry_Palace-Sant_Antoni_de_Portmany_Ibiza_Balearic_Islands.html';
export const facebookUrl = 'https://www.facebook.com/CurryPalaceSanAntonioBay/';

export const hours = [
	{ day: 'Lunes', time: '13:00 – 23:00' },
	{ day: 'Martes', time: '13:00 – 23:00' },
	{ day: 'Miércoles', time: '13:00 – 23:00' },
	{ day: 'Jueves', time: '13:00 – 23:00' },
	{ day: 'Viernes', time: '13:00 – 23:00' },
	{ day: 'Sábado', time: '13:00 – 23:00' },
	{ day: 'Domingo', time: '13:00 – 23:00' },
] as const;

export const specialties = [
	{
		category: 'Clásico de la casa',
		name: 'Butter chicken',
		description:
			'Pollo en una salsa cremosa de tomate y mantequilla. Uno de los platos que más se repiten en las reseñas.',
	},
	{
		category: 'Del tandoor',
		name: 'Pollo tikka masala',
		description:
			'Pollo al curry con salsa de especias suaves. También se puede pedir en wrap, según la carta del local.',
	},
	{
		category: 'Cordero',
		name: 'Cordero korma',
		description:
			'Cordero en salsa cremosa y aromática, el acompañamiento que aparece junto al tikka masala en las reseñas.',
	},
	{
		category: 'Vegetariano',
		name: 'Chana masala',
		description:
			'Garbanzos guisados con especias. Una de las opciones vegetarianas que destacan quienes han comido aquí.',
	},
	{
		category: 'Con carácter',
		name: 'Pollo madras',
		description:
			'Curry de pollo con especias más intensas. Pide el punto de picante que prefieras al hacer el pedido.',
	},
	{
		category: 'Para los valientes',
		name: 'Cordero vindaloo',
		description:
			'El lado más picante de la carta, con cordero y una salsa de especias vibrante. Consulta el punto de picante.',
	},
	{
		category: 'Al tandoor',
		name: 'Naan',
		description:
			'Pan indio recién hecho, suave y caliente. La reseña lo describe como el acompañamiento perfecto para mojar.',
	},
	{
		category: 'Para acompañar',
		name: 'Arroz basmati',
		description:
			'Arroz aromático y generoso. Se pide junto a los currys y aparece mencionado en las opiniones del restaurante.',
	},
] as const;

export const reviews = [
	{
		quote: 'Los curry muy buenos y la señora que nos atendió muy simpática, volveremos.',
		rating: 5,
	},
	{
		quote: 'Ya son varias veces las que he ido y siempre buenísimo.',
		rating: 5,
	},
	{
		quote: 'Y llegaban los segundos: pollo al curry con el arroz, korma y tikka masala.',
		rating: 5,
	},
] as const;

export const faqs = [
	{
		question: '¿Dónde está Curry Palace?',
		answer:
			'En Carrer de Cala de Bou, 13, 07829 Sant Josep de sa Talaia, en la zona de Cala de Bou. Abre las indicaciones en Google Maps para ver el recorrido exacto desde tu punto de partida.',
	},
	{
		question: '¿Qué tipo de cocina sirve?',
		answer:
			'Cocina india tradicional: currys de pollo, cordero y verduras, pan naan recién hecho, arroz basmati y opciones vegetarianas. La ficha de Google lo clasifica como restaurante indio y taberna.',
	},
	{
		question: '¿Cuál es el horario?',
		answer:
			'El horario publicado en Google Maps es de 13:00 a 23:00 todos los días. Otros directorios separan el servicio de mediodía y el de noche, así que conviene llamar antes de venir, sobre todo fuera de temporada.',
	},
	{
		question: '¿Cómo puedo reservar mesa?',
		answer:
			'Llamando al +34 971 80 45 36. El restaurante no tiene formulario de reservas en esta web; para grupos y noches de verano, mejor llamar con antelación.',
	},
	{
		question: '¿Hay opciones vegetarianas o sin gluten?',
		answer:
			'Sí hay platos vegetarianos, como el chana masala. Según una reseña de Tripadvisor, todos los currys pueden prepararse sin gluten; confirma siempre esta opción al hacer el pedido por posibles trazas o cambios de carta.',
	},
	{
		question: '¿Se puede comer en la terraza?',
		answer:
			'El restaurante cuenta con mesas en el exterior, además del servicio en el interior. Si quieres terraza, indícalo al reservar por teléfono.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${business.site}/#restaurante`,
	name: business.fullName,
	description:
		'Restaurante indio en Cala de Bou, Sant Josep de sa Talaia: currys, naan recién hecho, arroz basmati y opciones vegetarianas.',
	url: `${business.site}/`,
	image: `${business.site}/og.jpg`,
	telephone: business.phone,
	servesCuisine: ['India', 'Vegetariana'],
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
	sameAs: [facebookUrl, tripadvisorUrl],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: 4.5,
		reviewCount: 404,
		bestRating: 5,
	},
	acceptsReservations: true,
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '13:00',
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
