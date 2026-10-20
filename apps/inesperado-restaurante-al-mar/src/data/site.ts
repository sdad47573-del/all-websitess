/**
 * Datos de Inesperado Restaurante al Mar
 * (C. Director Julián Cerdán, 24 · 11540 Sanlúcar de Barrameda, Cádiz).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Inesperado Restaurante al Mar.
 *   Feature 0xd0de082e230b745:0xc336ec9466a7699a.
 * - Dirección, teléfono, categorías, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Descripción de la casa y servicios (desayunos, comida, chill out, cena,
 *   ingredientes frescos, vinos): publicada por el titular en su ficha.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * El titular no publica carta ni precios: no se inventan importes.
 */

import fotoPortada from '../assets/fotos/inesperado-restaurante-al-mar-apaisada-01.jpg';
import fotoApaisada2 from '../assets/fotos/inesperado-restaurante-al-mar-apaisada-02.jpg';
import fotoApaisada3 from '../assets/fotos/inesperado-restaurante-al-mar-apaisada-03.jpg';
import fotoVista4 from '../assets/fotos/inesperado-restaurante-al-mar-vista-4-04.jpg';
import fotoPanoramica5 from '../assets/fotos/inesperado-restaurante-al-mar-panoramica-05.jpg';
import fotoApaisada6 from '../assets/fotos/inesperado-restaurante-al-mar-apaisada-06.jpg';
import fotoApaisada7 from '../assets/fotos/inesperado-restaurante-al-mar-apaisada-07.jpg';
import fotoApaisada8 from '../assets/fotos/inesperado-restaurante-al-mar-apaisada-08.jpg';
import fotoVertical9 from '../assets/fotos/inesperado-restaurante-al-mar-vertical-09.jpg';
import fotoApaisada10 from '../assets/fotos/inesperado-restaurante-al-mar-apaisada-10.jpg';
import logo from '../assets/fotos/inesperado-restaurante-al-mar-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoApaisada2,
	fotoApaisada3,
	fotoVista4,
	fotoPanoramica5,
	fotoApaisada6,
	fotoApaisada7,
	fotoApaisada8,
	fotoVertical9,
	fotoApaisada10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Inesperado+Restaurante+al+Mar/@36.7868755,-6.3567234,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de082e230b745:0xc336ec9466a7699a!8m2!3d36.7868755!4d-6.3567234!16s%2Fg%2F11c0yc68jz?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Inesperado Restaurante al Mar',
	shortName: 'Inesperado',
	tagline: 'Restaurante al mar en la playa de Sanlúcar',
	claim: 'Desayunos, comida y chill out frente al mar',
	summary:
		'Restaurante y chiringuito en la playa de Sanlúcar de Barrameda. Desayunos, comida, chill out y cena frente al mar, con ingredientes frescos, una presentación cuidada y una selección de vinos.',
	street: 'C. Director Julián Cerdán, 24',
	district: 'Sanlúcar de Barrameda',
	borough: 'Sanlúcar de Barrameda',
	city: 'Sanlúcar de Barrameda',
	postalCode: '11540',
	region: 'Cádiz',
	country: 'ES',
	phone: '956 41 50 33',
	phoneHref: 'tel:+34956415033',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7868755%2C-6.3567234&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7868755, lng: -6.3567234 },
	featureId: '0xd0de082e230b745:0xc336ec9466a7699a',
	placeId: 'ChIJRbcw4oLgDQ0RmmmnZpTsNsM',
	rating: 3.9,
	reviewCount: 1253,
	hours: [{ days: 'Lunes a domingo', hours: '11:00 – 21:30' }],
	hoursNote:
		'Horario publicado en la ficha de Google: abre todos los días de 11:00 a 21:30. En verano o en festivos puede ampliarse o cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '11:00',
			closes: '21:30',
		},
	],
	categories: ['Restaurante', 'Chiringuito'],
	siteUrl: 'https://inesperado-restaurante-al-mar.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Inesperado Restaurante al Mar',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La cocina', href: '#cocina' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sun-line',
		title: 'Frente al mar',
		text: 'Restaurante y chiringuito en la playa de Sanlúcar de Barrameda.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Desayunos y comida',
		text: 'Empieza el día con desayuno y sigue con la comida del mediodía.',
	},
	{
		icon: 'ri-sun-cloudy-line',
		title: 'Chill out y cena',
		text: 'Un espacio para relajarse y ver la puesta de sol sobre el mar.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Vinos y producto',
		text: 'Ingredientes frescos, presentación cuidada y una selección de vinos.',
	},
];

export const CASA_FACTS = [
	{ label: 'Tipo', value: 'Restaurante y chiringuito' },
	{ label: 'Valoración', value: '3,9 ★' },
	{ label: 'Reseñas', value: '1.253' },
	{ label: 'Horario', value: '11:00–21:30' },
];

export const PLATOS = [
	{
		icon: 'ri-cup-line',
		title: 'Desayunos',
		text: 'Buen desayuno frente al mar, una de las cosas que más valoran sus clientes.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Comida del día',
		text: 'Cocina de restaurante con ingredientes frescos y presentación cuidada.',
	},
	{
		icon: 'ri-sun-cloudy-line',
		title: 'Chill out',
		text: 'Espacio para relajarse y disfrutar de la puesta de sol de Sanlúcar.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Cenas',
		text: 'Servicio de cena en un local con diseño único, frente al mar.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Vinos',
		text: 'Una cuidada selección de vinos para acompañar la mesa.',
	},
	{
		icon: 'ri-anchor-line',
		title: 'Cazón en salsa',
		text: 'Un plato de la casa que aparece en las reseñas de Google.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Playa de Sanlúcar' },
	{ icon: 'ri-sun-cloudy-line', title: 'Puesta de sol' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Reservas por teléfono' },
];

export const REVIEWS = [
	{
		text: 'Sitio agradable frente al mar con camareros muy simpáticos y serviciales.',
		rating: 4,
		author: 'Reseña en Google',
	},
	{
		text: 'Estuve desayunando, me gustó mucho. Buen ambiente, buenas vistas y buen desayuno.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Inesperado Restaurante al Mar?',
		a: 'En la calle Director Julián Cerdán, 24, 11540 Sanlúcar de Barrameda (Cádiz), frente a la playa. Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 11:00 a 21:30, según su ficha de Google. En verano o en festivos puede ampliarse; conviene llamar antes.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 956 41 50 33 o consúltalo en la ficha de Google del restaurante.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. El restaurante ofrece desayunos, además de comida, chill out y cena, según su descripción en Google.',
	},
	{
		q: '¿Hay chill out?',
		a: 'Sí. La casa describe un espacio de chill out para relajarse y ver la puesta de sol sobre el mar.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y el menú se consultan en el local o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aparcamiento, asientos y aseo adaptados para sillas de ruedas.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Inesperado Restaurante al Mar en Sanlúcar' },
	{ src: IMAGES.fotoApaisada2, alt: 'Terraza de Inesperado frente al mar' },
	{ src: IMAGES.fotoApaisada3, alt: 'Mesa del restaurante' },
	{ src: IMAGES.fotoVista4, alt: 'Vistas al mar desde Inesperado' },
	{ src: IMAGES.fotoPanoramica5, alt: 'Panorámica del restaurante y la playa' },
	{ src: IMAGES.fotoApaisada6, alt: 'Plato de Inesperado' },
	{ src: IMAGES.fotoApaisada7, alt: 'Comedor de Inesperado' },
	{ src: IMAGES.fotoApaisada8, alt: 'Ambiente del restaurante' },
	{ src: IMAGES.fotoVertical9, alt: 'Interior de Inesperado Restaurante al Mar' },
	{ src: IMAGES.fotoApaisada10, alt: 'Inesperado en la playa de Sanlúcar' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34956415033',
	priceRange: '€€',
	servesCuisine: ['Cocina del mar', 'Cocina mediterránea', 'Andaluza'],
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
		worstRating: 1,
	},
	openingHoursSpecification: BUSINESS.openingHours.map((tramo) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: tramo.days,
		opens: tramo.opens,
		closes: tramo.closes,
	})),
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Acceso adaptado para sillas de ruedas', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Aparcamiento adaptado', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Asientos adaptados', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Aseo accesible', value: true },
	],
};
