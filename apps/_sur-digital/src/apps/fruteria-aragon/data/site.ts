/** Datos públicos encontrados para Frutería Aragón, Calle Castilla, Málaga. */
export const BUSINESS = {
	name: 'Frutería Aragón',
	tagline: 'Tu frutería de barrio en Málaga',
	summary:
		'Frutería Aragón es un comercio de frutas y verduras situado en Calle Castilla, 25, Málaga. Su página de Facebook anuncia servicio a domicilio en un radio aproximado de un kilómetro.',
	street: 'Calle Castilla, 25',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29007',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '665 24 15 05',
	phoneHref: 'tel:+34665241505',
	facebook: 'https://www.facebook.com/fruteria.aragon/',
	facebookPage:
		'https://www.facebook.com/pages/Fruter%C3%ADa-Aragon-Malaga-C-Castilla/106150891144369/',
	googleMaps:
		'https://www.google.com/maps/place/Fruteria+Arag%C3%B3n/data=!4m7!3m6!1s0xd72f71aab9a01ef:0x2fb9b0f30015b085!8m2!3d36.7206107!4d-4.4540018!16s%2Fg%2F11cmg1h9l1',
	googleMapsEmbed: 'https://maps.google.com/maps?q=36.7206107,-4.4540018&z=17&output=embed',
	geo: { lat: 36.7206107, lng: -4.4540018 },
	siteUrl: 'https://fruteria-aragon-malaga.vercel.app',
};

export const LEGAL = {
	razonSocial: '[pendiente de confirmar]',
	nif: '[pendiente de confirmar]',
	email: '[pendiente de confirmar]',
	actualizado: 'Septiembre de 2026',
};

export const NAV = [
	{ label: 'La frutería', href: '#fruteria' },
	{ label: 'Reparto', href: '#reparto' },
	{ label: 'Ubicación', href: '#ubicacion' },
];

export const PRODUCTOS = [
	{
		icon: 'ri-apple-line',
		title: 'Frutas frescas',
		text: 'Encuentra fruta para completar la compra diaria en tu frutería de barrio.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Verduras y hortalizas',
		text: 'Productos de frutería para preparar tus comidas en casa.',
	},
	{
		icon: 'ri-home-heart-line',
		title: 'Servicio a domicilio',
		text: 'La página de Facebook del comercio indica entregas en un radio aproximado de 1 km desde Calle Castilla.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Frutería Aragón?',
		a: 'La dirección publicada es Calle Castilla, 25, 29007 Málaga. Puedes abrir la ficha de Google Maps enlazada desde esta web para ver cómo llegar.',
	},
	{
		q: '¿Cuál es el teléfono de Frutería Aragón?',
		a: 'El teléfono asociado a la frutería en el directorio de mapas es 665 24 15 05.',
	},
	{
		q: '¿Tiene servicio a domicilio?',
		a: 'La página de Facebook del comercio anuncia servicio a domicilio hasta aproximadamente 1 km de Calle Castilla. Contacta directamente para confirmar zona y condiciones.',
	},
	{
		q: '¿Cuál es el horario de apertura?',
		a: 'No se ha podido verificar un horario actualizado en fuentes públicas consultables. Llama al 665 24 15 05 para confirmar antes de desplazarte.',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'GroceryStore',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: BUSINESS.siteUrl,
	telephone: '+34 665 24 15 05',
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
	sameAs: [BUSINESS.facebook, BUSINESS.facebookPage],
};
