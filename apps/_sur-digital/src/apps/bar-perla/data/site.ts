/**
 * Datos de Bar Perla (Av. de Huelva, 88 · 11540 Sanlúcar de Barrameda).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bar Perla.
 *   Feature 0xd0de0a6aae245cb:0x1b36c8d4eeffabf2.
 * - Dirección, teléfono, categoría, valoración, horario, accesibilidad y reseñas:
 *   ficha pública de Google (octubre de 2026).
 * - La ficha no publica descripción del titular ni carta, así que no se reproducen.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 */

import fotoPortada from '../assets/fotos/bar-perla-apaisada-01.jpg';
import fotoApaisada2 from '../assets/fotos/bar-perla-apaisada-02.jpg';
import fotoApaisada3 from '../assets/fotos/bar-perla-apaisada-03.jpg';
import fotoApaisada4 from '../assets/fotos/bar-perla-apaisada-04.jpg';
import fotoApaisada5 from '../assets/fotos/bar-perla-apaisada-05.jpg';
import fotoApaisada6 from '../assets/fotos/bar-perla-apaisada-06.jpg';
import fotoVertical7 from '../assets/fotos/bar-perla-vertical-07.jpg';
import fotoVertical8 from '../assets/fotos/bar-perla-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/bar-perla-vertical-09.jpg';
import fotoApaisada10 from '../assets/fotos/bar-perla-apaisada-10.jpg';
import logo from '../assets/fotos/bar-perla-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoApaisada2,
	fotoApaisada3,
	fotoApaisada4,
	fotoApaisada5,
	fotoApaisada6,
	fotoVertical7,
	fotoVertical8,
	fotoVertical9,
	fotoApaisada10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Bar+Perla/@36.7919081,-6.3373659,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de0a6aae245cb:0x1b36c8d4eeffabf2!8m2!3d36.7919081!4d-6.3373659!16s%2Fg%2F11bzrprw2h?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Bar Perla',
	shortName: 'Perla',
	tagline: 'Bar restaurante en Sanlúcar de Barrameda',
	claim: 'Pescado, ensaladas y barra en la Avenida de Huelva',
	summary:
		'Bar restaurante en la Avenida de Huelva de Sanlúcar de Barrameda, con pescado y ensaladas entre lo más destacado por sus clientes. Abre todos los días menos el martes.',
	street: 'Av. de Huelva, 88',
	district: 'Sanlúcar de Barrameda',
	borough: 'Sanlúcar de Barrameda',
	city: 'Sanlúcar de Barrameda',
	postalCode: '11540',
	region: 'Cádiz',
	country: 'ES',
	phone: '956 36 40 43',
	phoneHref: 'tel:+34956364043',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7919081%2C-6.3373659&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7919081, lng: -6.3373659 },
	featureId: '0xd0de0a6aae245cb:0x1b36c8d4eeffabf2',
	placeId: 'ChIJy0XiqqbgDQ0R8qv_7tTINhs',
	rating: 4.2,
	reviewCount: 575,
	hours: [
		{ days: 'Lunes, miércoles a sábado', hours: '12:00 – 16:30 · 20:30 – 24:00' },
		{ days: 'Domingo', hours: '12:00 – 17:00' },
		{ days: 'Martes', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google. Los martes cierra. En festivos puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '12:00', closes: '16:30' },
		{ days: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '20:30', closes: '24:00' },
		{ days: ['Sunday'], opens: '12:00', closes: '17:00' },
	],
	categories: ['Bar restaurante'],
	siteUrl: 'https://www.sur-digital.com/bar-perla',
};

export const LEGAL = {
	razonSocial: 'Bar Perla',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La barra', href: '#barra' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/bar-perla/aviso-legal' }];

export const HIGHLIGHTS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Bar restaurante',
		text: 'Barra para la tapa rápida y mesas para comer con calma.',
	},
	{
		icon: 'ri-anchor-line',
		title: 'Pescado y ensaladas',
		text: 'Lo que más se repite en sus reseñas de Google.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Casi todos los días',
		text: 'De lunes a domingo, con el martes como día de cierre.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,2 en Google',
		text: '575 reseñas en la ficha pública del local.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-anchor-line',
		title: 'Pescado',
		text: 'El pescado es lo que más destacan los clientes en sus opiniones de Google.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Ensaladas',
		text: 'Las ensaladas también se llevan su hueco; la de marisco aparece en las reseñas.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Barra y comedor',
		text: 'Un bar restaurante de barrio, para tapear o sentarse a comer.',
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En la Avenida de Huelva',
		text: 'En el número 88, una de las entradas a Sanlúcar de Barrameda.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Abierto casi siempre',
		text: 'De lunes a domingo, con servicio de mediodía y de noche.',
	},
	{
		icon: 'ri-wheelchair-line',
		title: 'Acceso adaptado',
		text: 'Entrada, asientos y aseo accesibles para sillas de ruedas.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Trato directo',
		text: 'Sin reservas por internet: se llama al 956 36 40 43.',
	},
];

export const REVIEWS = [
	{
		text: 'Buenísimo pescado y mejor ensaladas, la de marisco está superior.',
		rating: 4,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Perla?',
		a: 'En la Avenida de Huelva, 88, 11540 Sanlúcar de Barrameda (Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado abre de 12:00 a 16:30 y de 20:30 a 24:00; el domingo, de 12:00 a 17:00. Los martes cierra.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 956 36 40 43 o consúltalo en la ficha de Google del bar.',
	},
	{
		q: '¿Qué es lo más destacado?',
		a: 'En las reseñas de Google sobresalen el pescado y las ensaladas, en especial la de marisco. La carta completa se consulta en el local.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y el menú del día se consultan en el bar o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, asientos y aseo adaptados para sillas de ruedas.',
	},
];

export const FEATURES = [
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
	{ icon: 'ri-wheelchair-line', label: 'Acceso adaptado' },
	{ icon: 'ri-restaurant-2-line', label: 'Bar restaurante' },
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Bar Perla en Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoApaisada2, alt: 'Interior de Bar Perla' },
	{ src: IMAGES.fotoApaisada3, alt: 'La barra de Bar Perla' },
	{ src: IMAGES.fotoApaisada4, alt: 'Comedor de Bar Perla' },
	{ src: IMAGES.fotoApaisada5, alt: 'Mesa de Bar Perla' },
	{ src: IMAGES.fotoApaisada6, alt: 'Rincón de Bar Perla' },
	{ src: IMAGES.fotoVertical7, alt: 'Detalle del local de Bar Perla' },
	{ src: IMAGES.fotoVertical8, alt: 'Ambiente en Bar Perla' },
	{ src: IMAGES.fotoVertical9, alt: 'Bar Perla, Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoApaisada10, alt: 'Bar restaurante Perla por dentro' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34956364043',
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
		{ '@type': 'LocationFeatureSpecification', name: 'Aseo adaptado', value: true },
	],
};
