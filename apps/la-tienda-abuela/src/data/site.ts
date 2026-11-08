/**
 * Datos de La Tienda de la Abuela, tienda de alimentación en Av. Pepita Durán, 17 (Málaga).
 *
 * El comercio tiene presencia en Facebook y una foto pública de su ficha de Google Maps. Los
 * datos de horario difieren según los directorios; se deja una nota antes de publicar y en el
 * README. No añadimos reseñas ni ratings que no hayan sido confirmados en la ficha oficial.
 */

/** Fotografía real del comercio, obtenida de la imagen de ficha de Google Maps. */
import googleMaps from '../assets/fotos/tienda-abuela-google-maps.jpg';

export const IMAGES = { googleMaps };

export const BUSINESS = {
	name: 'La Tienda de la Abuela',
	shortName: 'La Abuela',
	tagline: 'La tienda de barrio donde encuentras un poco de todo',
	claim: 'Productos frescos, trato cercano y mucho sabor de casa',
	summary:
		'La Tienda de la Abuela es una tienda de alimentación de barrio en la Av. Pepita Durán, 17, Málaga. Tiene alimentación, frutería y charcutería; prepara tablas de ibéricos y bocadillos, y ofrece café para llevar y lotes para regalar.',
	street: 'Avenida Pepita Durán, 17',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '669 73 12 51',
	phoneHref: 'tel:+34669731251',
	facebook: 'https://www.facebook.com/p/La-Tienda-de-la-abuela-100057502305816/',
	/** Página de Facebook del negocio, sin web propia detectada. */
	facebookPageId: '100057502305816',
	googleMaps:
		'https://www.google.com/maps/place/La+Tienda+de+la+Abuela/@36.7220595,-4.4709381,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73798a7c1d7:0x25db1c2ea4fd1b6c!8m2!3d36.7220595!4d-4.4709381!16s%2Fg%2F11g02w3p3j',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20Pepita%20Dur%C3%A1n%2C%2017%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7220595, lng: -4.4709381 },
	cuisine: ['Tienda de alimentación', 'Frutería', 'Charcutería', 'Bocadillos'],
	priceRange: '€',
	/**
	 * Horario recogido por Cylex/EncuentreAbierto en junio de 2026. Otro directorio publica
	 * horas de apertura algo distintas; confirmar con la tienda antes de publicar.
	 */
	hours: [
		{ days: 'Lunes a viernes', morning: '06:30 – 21:00' },
		{ days: 'Sábado y domingo', morning: '09:00 – 14:00' },
	],
	siteUrl: 'https://la-tienda-de-la-abuela.vercel.app',
};

/** Completar datos fiscales y correo de contacto antes de publicar (LSSI-CE). */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Septiembre de 2026',
};

export const NAV = [
	{ label: 'La tienda', href: '#tienda' },
	{ label: 'Qué encontrarás', href: '#productos' },
	{ label: 'Visítanos', href: '#visitanos' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Contacto', href: '#contacto' },
];

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/aviso-legal' }];

/** Categorías y servicios mencionados por clientes y el propio negocio. */
export const HIGHLIGHTS = [
	{
		icon: 'ri-leaf-line',
		title: 'Producto fresco',
		text: 'Fruta y verdura del día, además de alimentación para completar la compra.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Trato de barrio',
		text: 'Atención cercana y personal, de esas tiendas donde te ayudan a encontrar lo que buscas.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Café y bocadillos',
		text: 'Bocadillos para el cole o la merienda y café para llevar.',
	},
	{
		icon: 'ri-gift-line',
		title: 'Tablas y lotes',
		text: 'Tablas de ibéricos, lotes y cestas de regalo preparados en la tienda.',
	},
];

/**
 * Productos y servicios que sí se pueden verificar en reseñas y publicaciones de la tienda.
 * Evitamos presentar un inventario exhaustivo que el negocio no publica en web.
 */
export const PRODUCTOS = [
	{
		icon: 'ri-shopping-basket-2-line',
		title: 'Alimentación y despensa',
		text: 'Productos de alimentación para la compra diaria y ese ingrediente que te falta en casa.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Fruta y verdura',
		text: 'Fruta y verdura fresca del día, mencionada por clientes habituales de la tienda.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Charcutería y quesos',
		text: 'Embutidos, jamón y quesos en el mostrador. También queso fresco La Chacha Sebastiana.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Tablas de ibéricos',
		text: 'La tienda prepara tablas de ibéricos por encargo, ideales para compartir.',
	},
	{
		icon: 'ri-bread-line',
		title: 'Bocadillos',
		text: 'Bocadillos para el colegio, la merienda o para llevar contigo.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Café para llevar',
		text: 'Un café para acompañar la compra o seguir con tu mañana.',
	},
	{
		icon: 'ri-gift-line',
		title: 'Lotes y productos de temporada',
		text: 'Lotes y cestas para regalo; en Navidad, mantecados de Antequera.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Hogar y limpieza',
		text: 'Productos de droguería y básicos para el hogar junto a la alimentación.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Tienda de la Abuela?',
		a: 'En la Avenida Pepita Durán, 17, en Puerto de la Torre (29010 Málaga). Puedes abrir la ubicación en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Los directorios consultados publican de lunes a viernes de 6:30 a 21:00 y fines de semana de 9:00 a 14:00. Como hay discrepancias entre fuentes, recomendamos llamar al 669 73 12 51 para confirmar antes de venir.',
	},
	{
		q: '¿Qué puedo encontrar en la tienda?',
		a: 'Alimentación, fruta y verdura, charcutería y quesos, productos de limpieza, lotes, tablas de ibéricos, bocadillos y café para llevar.',
	},
	{
		q: '¿Preparan tablas de ibéricos?',
		a: 'Sí. La tienda anunció en su página de Facebook que prepara tablas de ibéricos. Llama para consultar disponibilidad y encargos.',
	},
	{
		q: '¿Hacen bocadillos?',
		a: 'Sí. Los clientes mencionan bocadillos para el colegio o la merienda, además de café para llevar.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'Puedes llamar a la tienda al 669 73 12 51.',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'GroceryStore',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'La Tienda de la Abuela Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 669 73 12 51',
	priceRange: BUSINESS.priceRange,
	currenciesAccepted: 'EUR',
	servesCuisine: BUSINESS.cuisine,
	areaServed: [{ '@type': 'City', name: BUSINESS.city }],
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
	sameAs: [BUSINESS.facebook],
};
