/**
 * Datos de Bar Restaurante Paquera (Cam. de San Jerónimo, 11 · 11540 Sanlúcar de Barrameda).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bar Restaurante Paquera.
 *   Feature 0xd0de0a5afc57409:0xc4a8b1411d16fc90.
 * - Dirección, teléfono, categoría, valoración, horario, accesibilidad y reseñas:
 *   ficha pública de Google (octubre de 2026).
 * - Descripción de la casa: «Restaurante de comida casera y pescados y mariscos de Sanlúcar»,
 *   publicada por el propio titular en su ficha.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publica carta ni precios: la ficha no los ofrece.
 */

import fotoPortada from '../assets/fotos/bar-restaurante-paquera-apaisada-01.jpg';
import fotoVertical2 from '../assets/fotos/bar-restaurante-paquera-vertical-02.jpg';
import fotoVertical3 from '../assets/fotos/bar-restaurante-paquera-vertical-03.jpg';
import fotoVertical4 from '../assets/fotos/bar-restaurante-paquera-vertical-04.jpg';
import fotoApaisada5 from '../assets/fotos/bar-restaurante-paquera-apaisada-05.jpg';
import fotoApaisada6 from '../assets/fotos/bar-restaurante-paquera-apaisada-06.jpg';
import fotoApaisada7 from '../assets/fotos/bar-restaurante-paquera-apaisada-07.jpg';
import fotoVertical8 from '../assets/fotos/bar-restaurante-paquera-vertical-08.jpg';
import fotoApaisada9 from '../assets/fotos/bar-restaurante-paquera-apaisada-09.jpg';
import fotoVertical10 from '../assets/fotos/bar-restaurante-paquera-vertical-10.jpg';
import logo from '../assets/fotos/bar-restaurante-paquera-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoVertical2,
	fotoVertical3,
	fotoVertical4,
	fotoApaisada5,
	fotoApaisada6,
	fotoApaisada7,
	fotoVertical8,
	fotoApaisada9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Bar+Restaurante+Paquera/@36.792882,-6.3362064,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de0a5afc57409:0xc4a8b1411d16fc90!8m2!3d36.792882!4d-6.3362064!16s%2Fg%2F11btn1b67q?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Bar Restaurante Paquera',
	shortName: 'Paquera',
	tagline: 'Comida casera, pescados y mariscos en Sanlúcar',
	claim: 'La cocina de casa, desde las siete de la mañana',
	summary:
		'Bar restaurante en el Camino de San Jerónimo de Sanlúcar de Barrameda, con comida casera y pescados y mariscos de la zona. Abre todos los días desde las 7:00, menos los miércoles.',
	street: 'Cam. de San Jerónimo, 11',
	district: 'Sanlúcar de Barrameda',
	borough: 'Sanlúcar de Barrameda',
	city: 'Sanlúcar de Barrameda',
	postalCode: '11540',
	region: 'Cádiz',
	country: 'ES',
	phone: '655 30 76 62',
	phoneHref: 'tel:+34655307662',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.792882%2C-6.3362064&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.792882, lng: -6.3362064 },
	featureId: '0xd0de0a5afc57409:0xc4a8b1411d16fc90',
	placeId: 'ChIJCXTFr6XgDQ0RkPwWHUGxqMQ',
	rating: 4.2,
	reviewCount: 328,
	hours: [
		{ days: 'Lunes, martes, jueves y viernes', hours: '7:00 – 24:00' },
		{ days: 'Sábado', hours: '7:00 – 24:00' },
		{ days: 'Domingo', hours: '7:00 – 18:00' },
		{ days: 'Miércoles', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google. Los miércoles cierra y el domingo termina a las 18:00. En festivos puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '24:00' },
		{ days: ['Sunday'], opens: '07:00', closes: '18:00' },
	],
	categories: ['Bar restaurante'],
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-paquera',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Bar Restaurante Paquera',
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

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/bar-restaurante-paquera/aviso-legal' }];

export const HIGHLIGHTS = [
	{
		icon: 'ri-home-heart-line',
		title: 'Comida casera',
		text: 'La cocina de casa, como la define el propio restaurante.',
	},
	{
		icon: 'ri-anchor-line',
		title: 'Pescados y mariscos',
		text: 'Producto de Sanlúcar en la carta del día a día.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Desde las 7:00',
		text: 'Abre pronto y alarga el servicio hasta la noche.',
	},
	{
		icon: 'ri-calendar-close-line',
		title: 'Miércoles cerrado',
		text: 'El resto de la semana, desayuno, comida y cena.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-home-heart-line',
		title: 'Comida casera',
		text: 'Guisos de casa y platos de siempre, el corazón de la casa según su ficha.',
	},
	{
		icon: 'ri-anchor-line',
		title: 'Pescados y mariscos',
		text: 'Pescado y marisco de Sanlúcar, con el pescado fresco entre lo más valorado.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Papas arrieras',
		text: 'Las reseñas las califican de exquisitas: uno de los platos que repiten los clientes.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Atún en salsa de almendras',
		text: 'Una de las recetas que más se destaca en las opiniones de Google.',
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Sanlúcar',
		text: 'En el Camino de San Jerónimo, 11, una zona tranquila de la ciudad.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario amplio',
		text: 'Desde las 7:00 hasta medianoche, de lunes a sábado.',
	},
	{
		icon: 'ri-wheelchair-line',
		title: 'Acceso adaptado',
		text: 'Entrada y asientos accesibles para sillas de ruedas.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Trato directo',
		text: 'Sin reservas por internet: se llama al 655 30 76 62.',
	},
];

export const REVIEWS = [
	{
		text: 'Deliciosa comida, buen pescado, papas arrieras exquisitas y gran atención.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buen servicio, buen género y buenos precios, volveremos.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'El atún en salsa de almendras... ¡increíble!',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Restaurante Paquera?',
		a: 'En el Camino de San Jerónimo, 11, 11540 Sanlúcar de Barrameda (Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado abre de 7:00 a 24:00, y el domingo de 7:00 a 18:00. Los miércoles cierra.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 655 30 76 62 o consúltalo en la ficha de Google del restaurante.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'El restaurante se define como comida casera con pescados y mariscos de Sanlúcar. Las reseñas destacan el pescado, las papas arrieras y el atún en salsa de almendras.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y el menú del día se consultan en el local o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso y asientos adaptados para sillas de ruedas.',
	},
];

export const FEATURES = [
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
	{ icon: 'ri-wheelchair-line', label: 'Acceso adaptado' },
	{ icon: 'ri-home-heart-line', label: 'Comida casera' },
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Bar Restaurante Paquera en Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoVertical2, alt: 'Interior de Bar Restaurante Paquera' },
	{ src: IMAGES.fotoVertical3, alt: 'La barra de Paquera' },
	{ src: IMAGES.fotoVertical4, alt: 'Comedor de Bar Restaurante Paquera' },
	{ src: IMAGES.fotoApaisada5, alt: 'Mesa de Paquera' },
	{ src: IMAGES.fotoApaisada6, alt: 'Rincón de Bar Restaurante Paquera' },
	{ src: IMAGES.fotoApaisada7, alt: 'Ambiente en Paquera' },
	{ src: IMAGES.fotoVertical8, alt: 'Detalle del local de Paquera' },
	{ src: IMAGES.fotoApaisada9, alt: 'Bar Restaurante Paquera por dentro' },
	{ src: IMAGES.fotoVertical10, alt: 'Paquera, Sanlúcar de Barrameda' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34655307662',
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
		{ '@type': 'LocationFeatureSpecification', name: 'Asientos adaptados', value: true },
	],
};
