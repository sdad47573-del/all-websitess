/** Datos confirmados públicamente para Frutería y Congelados Teatinos (Málaga). */
export const BUSINESS = {
	name: 'Frutería y Congelados Teatinos',
	tagline: 'Fruta fresca, verdura y congelados en Teatinos',
	summary:
		'Frutería y tienda de congelados en Calle Béla Bartók, local 10, en Teatinos-Universidad, Málaga. Productos frescos para tu compra diaria y una selección de congelados.',
	street: 'Calle Béla Bartók, 1, local 10',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '660 63 65 88',
	phoneHref: 'tel:+34660636588',
	facebook: 'https://www.facebook.com/fruteriacongeladosteatinos/',
	instagram: 'https://www.instagram.com/fruteriateatinos/',
	googleMaps:
		'https://www.google.com/maps/place/Fruteria+Y+Congelados+Teatinos/data=!4m7!3m6!1s0xd72f7407208fbb9:0x7631e0641286892!8m2!3d36.7194627!4d-4.460927!16s%2Fg%2F11bzz3df5q',
	googleMapsEmbed: 'https://maps.google.com/maps?q=36.7194627,-4.460927&z=17&output=embed',
	geo: { lat: 36.7194627, lng: -4.460927 },
	priceRange: '€',
	/** Horarios de Cylex / EncuentreAbierto actualizados en junio de 2026. */
	hours: [
		{
			days: 'Lunes y martes',
			dayNames: ['Monday', 'Tuesday'],
			morning: '09:00 – 14:30',
			evening: '17:30 – 20:30',
		},
		{ days: 'Miércoles', dayNames: ['Wednesday'], morning: '09:00 – 14:30' },
		{
			days: 'Jueves',
			dayNames: ['Thursday'],
			morning: '09:00 – 14:30',
			evening: '17:30 – 20:30',
		},
		{ days: 'Viernes', dayNames: ['Friday'], morning: '09:00 – 14:30' },
		{ days: 'Sábado', dayNames: ['Saturday'], morning: '09:00 – 14:30' },
		{ days: 'Domingo', dayNames: ['Sunday'], morning: 'Cerrado' },
	],
	siteUrl: 'https://fruteria-y-congelados-teatinos.vercel.app',
};

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
		title: 'Fruta de temporada',
		text: 'Fruta fresca para disfrutar en casa, elegir según temporada y completar la compra diaria.',
	},
	{
		icon: 'ri-plant-line',
		title: 'Verduras y hortalizas',
		text: 'Verduras para tus recetas, guarniciones y platos de cada día.',
	},
	{
		icon: 'ri-snowflake-line',
		title: 'Congelados',
		text: 'Una selección de productos congelados. Consulta por teléfono la disponibilidad actual.',
	},
	{
		icon: 'ri-shopping-basket-2-line',
		title: 'Frutos secos y despensa',
		text: 'El directorio comercial también incluye frutos secos y productos de despensa.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Frutería y Congelados Teatinos?',
		a: 'La tienda está en Calle Béla Bartók, 1, local 10, en Teatinos-Universidad, código postal 29010, Málaga. Puedes abrir la ficha para ver cómo llegar.',
	},
	{
		q: '¿Cuál es el horario de la frutería?',
		a: 'Los directorios consultados indican lunes y martes de 09:00 a 14:30 y de 17:30 a 20:30; miércoles de 09:00 a 14:30; jueves de 09:00 a 14:30 y de 17:30 a 20:30; viernes y sábado de 09:00 a 14:30; domingo cerrado. Llama al 660 63 65 88 para confirmar posibles cambios.',
	},
	{
		q: '¿Qué productos puedo encontrar?',
		a: 'La tienda se dedica a frutería y congelados. Su catálogo público también menciona fruta, verduras, frutos secos y productos de despensa. Para consultar disponibilidad concreta, contacta directamente con la tienda.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'Puedes llamar a Frutería y Congelados Teatinos al 660 63 65 88.',
	},
	{
		q: '¿Tiene perfiles en redes sociales?',
		a: 'El comercio mantiene una página de Facebook y un perfil de Instagram enlazados desde esta web.',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'GroceryStore',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 660 63 65 88',
	priceRange: BUSINESS.priceRange,
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
	sameAs: [BUSINESS.facebook, BUSINESS.instagram],
	openingHoursSpecification: BUSINESS.hours
		.filter((hours) => hours.morning !== 'Cerrado')
		.flatMap((hours) => {
			const morning = {
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: hours.dayNames,
				opens: hours.morning?.split(' – ')[0],
				closes: hours.morning?.split(' – ')[1],
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
		}),
};
