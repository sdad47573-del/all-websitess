/** Datos públicos de Frutería Fresco, comercio de fruta y alimentación en Teatinos, Málaga. */
export const BUSINESS = {
	name: 'Frutería Fresco',
	tagline: 'La vida me sabe a fruta',
	summary:
		'Frutería y tienda de alimentación en Calle Juan de Robles, 61, Teatinos, Málaga. Fruta y verdura fresca, productos latinoamericanos, comida preparada latinoamericana y frutos secos de productores de proximidad.',
	street: 'Calle Juan de Robles, 61',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '640 67 03 95',
	phoneHref: 'tel:+34640670395',
	website: 'https://www.fruteriafresco.com/',
	instagram: 'https://www.instagram.com/fruteriafresco/',
	linktree: 'https://linktr.ee/fruteriafresco',
	googleMaps:
		'https://www.google.com/maps/place/Fruter%C3%ADa+Fresco/data=!4m7!3m6!1s0xd72f7f05017a71f:0xfb897ef4d5b1f964!8m2!3d36.7211019!4d-4.4648628!16s%2Fg%2F11rc7wb_fy',
	googleMapsEmbed: 'https://maps.google.com/maps?q=36.7207821,-4.4652114&z=17&output=embed',
	geo: { lat: 36.7207821, lng: -4.4652114 },
	/**
	 * Cylex/Yably publica el horario actualizado el 3/7/2026; Páginas Amarillas presenta
	 * un horario distinto. Mostrar siempre como orientativo y recomendar llamada de confirmación.
	 */
	hours: [
		{
			days: 'Lunes a viernes',
			dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			morning: '09:00 – 15:00',
			evening: '17:30 – 21:00',
		},
		{ days: 'Sábado', dayNames: ['Saturday'], morning: '10:00 – 15:00' },
		{ days: 'Domingo', dayNames: ['Sunday'], morning: '10:00 – 15:00' },
	],
	siteUrl: 'https://fruteria-fresco-malaga.vercel.app',
};

/** Páginas públicas identificadas como publicaciones de la cuenta oficial. */
export const SOCIAL_POSTS = [
	{
		url: 'https://www.instagram.com/p/CRUBMaTsiwg/',
		embedUrl: 'https://www.instagram.com/p/CRUBMaTsiwg/embed',
		title: 'Frutería Fresco en Teatinos',
		description: 'Publicación de @fruteriafresco sobre sus tiendas de Teatinos y Benalmádena.',
	},
	{
		url: 'https://www.instagram.com/p/DaincnztrGg/',
		embedUrl: 'https://www.instagram.com/p/DaincnztrGg/embed',
		title: 'Congelados y productos latinos',
		description:
			'Publicación de @fruteriafresco sobre arepas, empanadas, congelados y productos de despensa.',
	},
];

export const LEGAL = {
	razonSocial: '[pendiente de confirmar]',
	nif: '[pendiente de confirmar]',
	email: '[pendiente de confirmar]',
	actualizado: 'Septiembre de 2026',
};

export const NAV = [
	{ label: 'La frutería', href: '#fruteria' },
	{ label: 'Productos', href: '#productos' },
	{ label: 'Horario', href: '#horario' },
	{ label: 'Ubicación', href: '#ubicacion' },
];

export const PRODUCTOS = [
	{
		icon: 'ri-leaf-line',
		title: 'Fruta y verdura fresca',
		text: 'Selección de fruta y verduras frescas de temporada, con compras a productores locales malagueños.',
	},
	{
		icon: 'ri-sun-foggy-line',
		title: 'Frutas exóticas',
		text: 'Frutas tropicales y exóticas de Latinoamérica para descubrir sabores nuevos y recetas de casa.',
	},
	{
		icon: 'ri-snowflake-line',
		title: 'Congelados latinos',
		text: 'Arepas y empanadas congeladas listas para cocinar, además de otros productos de congelador.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Comida preparada latina',
		text: 'Comida preparada latinoamericana, con opciones sin gluten indicadas por el comercio.',
	},
	{
		icon: 'ri-seedling-line',
		title: 'Frutos secos',
		text: 'Frutos secos de productores de proximidad para una despensa variada.',
	},
	{
		icon: 'ri-shopping-basket-2-line',
		title: 'Productos de despensa',
		text: 'Café, yerba, harinas, dulces, snacks y otros productos latinoamericanos seleccionados.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Frutería Fresco en Teatinos?',
		a: 'La tienda está en Calle Juan de Robles, 61, 29010 Málaga. Abre el enlace de Google Maps para ver la ficha y planificar cómo llegar.',
	},
	{
		q: '¿Qué productos puedo encontrar?',
		a: 'Además de fruta y verdura fresca, Frutería Fresco ofrece productos latinoamericanos, frutas exóticas, comida preparada, arepas y empanadas congeladas y frutos secos.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Los directorios consultados no coinciden plenamente. Cylex publica de lunes a viernes de 09:00 a 15:00 y de 17:30 a 21:00, y sábados y domingos de 10:00 a 15:00. Llama al 640 67 03 95 para confirmar el horario antes de venir.',
	},
	{
		q: '¿Puedo hacer un pedido por WhatsApp?',
		a: 'El perfil oficial de Frutería Fresco enlaza un canal de pedidos por WhatsApp desde su Linktree. Consulta allí el enlace actualizado para pedidos de la tienda de Teatinos.',
	},
	{
		q: '¿Cuál es el teléfono de Frutería Fresco?',
		a: 'Puedes llamar al 640 67 03 95.',
	},
];

const hoursSpec = BUSINESS.hours.flatMap((hours) => {
	const morning = {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: hours.dayNames,
		opens: hours.morning.split(' – ')[0],
		closes: hours.morning.split(' – ')[1],
	};
	return hours.evening
		? [
				morning,
				{
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: hours.dayNames,
					opens: hours.evening.split(' – ')[0],
					closes: hours.evening.split(' – ')[1],
				},
			]
		: [morning];
});

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'GroceryStore',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Frutería Fresco Teatinos',
	description: BUSINESS.summary,
	url: BUSINESS.siteUrl,
	telephone: '+34 640 67 03 95',
	priceRange: '€',
	currenciesAccepted: 'EUR',
	address: {
		'@type': 'PostalAddress',
		streetAddress: BUSINESS.street,
		addressLocality: BUSINESS.city,
		addressRegion: BUSINESS.region,
		postalCode: BUSINESS.postalCode,
		addressCountry: BUSINESS.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: BUSINESS.geo.lat,
		longitude: BUSINESS.geo.lng,
	},
	hasMap: BUSINESS.googleMaps,
	sameAs: [BUSINESS.website, BUSINESS.instagram, BUSINESS.linktree],
	openingHoursSpecification: hoursSpec,
};
