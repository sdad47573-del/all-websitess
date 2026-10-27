/**
 * Datos de Restaurante Giovanni (C. Pintor Sorolla, 28 · 03160 Almoradí, Alicante).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Giovanni.
 *   Feature 0xd63a5024a5bd9a9:0xb3e92b75515a8a74.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: reseñas publicadas en la ficha (pasta, raciones y trato).
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * El titular no ha publicado descripción, carta ni precios: no se inventan platos.
 */

import fotoPortada from '../assets/fotos/restaurante-giovanni-apaisada-02.jpg';
import fotoApaisada6 from '../assets/fotos/restaurante-giovanni-apaisada-06.jpg';
import fotoApaisada10 from '../assets/fotos/restaurante-giovanni-apaisada-10.jpg';
import fotoVertical1 from '../assets/fotos/restaurante-giovanni-vertical-01.jpg';
import fotoVertical3 from '../assets/fotos/restaurante-giovanni-vertical-03.jpg';
import fotoVertical4 from '../assets/fotos/restaurante-giovanni-vertical-04.jpg';
import fotoVertical5 from '../assets/fotos/restaurante-giovanni-vertical-05.jpg';
import fotoVertical7 from '../assets/fotos/restaurante-giovanni-vertical-07.jpg';
import fotoVertical8 from '../assets/fotos/restaurante-giovanni-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/restaurante-giovanni-vertical-09.jpg';
import logo from '../assets/fotos/restaurante-giovanni-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoApaisada6,
	fotoApaisada10,
	fotoVertical1,
	fotoVertical3,
	fotoVertical4,
	fotoVertical5,
	fotoVertical7,
	fotoVertical8,
	fotoVertical9,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Giovanni/@38.109529,-0.7890476,17z/data=!3m1!4b1!4m6!3m5!1s0xd63a5024a5bd9a9:0xb3e92b75515a8a74!8m2!3d38.109529!4d-0.7890476!16s%2Fg%2F1vxzbzgv?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante Giovanni',
	shortName: 'Giovanni',
	tagline: 'Cocina italiana y mediterránea en Almoradí',
	claim: 'Pasta, producto y mesa de barrio',
	summary:
		'Restaurante italiano y mediterráneo en el centro de Almoradí. Cocina de mediodía de martes a domingo y cenas los viernes y sábados, con la pasta y el trato de sala que destacan sus reseñas.',
	street: 'C. Pintor Sorolla, 28',
	district: 'Almoradí',
	borough: 'Almoradí',
	city: 'Almoradí',
	postalCode: '03160',
	region: 'Alicante',
	province: 'Alicante',
	country: 'ES',
	phone: '966 78 21 34',
	phoneHref: 'tel:+34966782134',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=38.109529%2C-0.7890476&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 38.109529, lng: -0.7890476 },
	featureId: '0xd63a5024a5bd9a9:0xb3e92b75515a8a74',
	placeId: 'ChIJqdlbSgKlYw0RdIpaUXUr6bM',
	rating: 4.8,
	reviewCount: 684,
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes a jueves', hours: '12:00 – 16:00' },
		{ days: 'Viernes y sábado · mediodía', hours: '12:00 – 16:00' },
		{ days: 'Viernes y sábado · noche', hours: '19:30 – 23:15' },
		{ days: 'Domingo', hours: '12:00 – 16:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. En festivos, puentes y temporada alta puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '12:00', closes: '16:00' },
		{ days: ['Friday', 'Saturday'], opens: '12:00', closes: '16:00' },
		{ days: ['Friday', 'Saturday'], opens: '19:30', closes: '23:15' },
		{ days: ['Sunday'], opens: '12:00', closes: '16:00' },
	],
	categories: ['Restaurante italiano', 'Restaurante mediterráneo'],
	siteUrl: 'https://restaurante-giovanni.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante Giovanni',
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
		icon: 'ri-restaurant-2-line',
		title: 'Italiana y mediterránea',
		text: 'Las dos cocinas con las que Google clasifica la casa.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Pasta y buenas raciones',
		text: '«Pasta buenísima raciones grandes», resume una reseña.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Comida de mediodía',
		text: 'De martes a domingo, de 12:00 a 16:00.',
	},
	{
		icon: 'ri-moon-clear-line',
		title: 'Cena viernes y sábado',
		text: 'Segundo servicio de 19:30 a 23:15.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Italiana' },
	{ label: 'Valoración', value: '4,8 ★' },
	{ label: 'Reseñas', value: '684' },
	{ label: 'Mediodía', value: '12:00–16:00' },
];

export const PLATOS = [
	{
		icon: 'ri-bowl-line',
		title: 'La pasta, según sus clientes',
		text: 'Una de las reseñas de Google lo resume así: «Pasta buenísima raciones grandes».',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Raciones generosas',
		text: 'La misma reseña habla de raciones grandes: no es una cocina de platos mínimos.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Cocina mediterránea',
		text: 'La otra cocina con la que Google clasifica la casa, junto a la italiana.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Mediodía de martes a domingo',
		text: 'El servicio principal de la casa: de 12:00 a 16:00, con el lunes cerrado.',
	},
	{
		icon: 'ri-moon-clear-line',
		title: 'Cenas de fin de semana',
		text: 'Viernes y sábado se añade un segundo servicio de 19:30 a 23:15.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Trato de sala',
		text: '«La atención del personal es fabulosa», dicen los clientes en Google.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Centro de Almoradí' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Reservas por teléfono' },
	{ icon: 'ri-moon-clear-line', title: 'Cena viernes y sábado' },
];

export const REVIEWS = [
	{
		text: 'La atención del personal es fabulosa, todos los camareros son encantadores.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Pasta buenísima raciones grandes.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buen trato, sitio agradable, comida exquisita...',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Giovanni?',
		a: 'En la calle Pintor Sorolla, 28, 03160 Almoradí (Alicante), en el centro del municipio. Puedes abrir la ruta directamente en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo sirve de 12:00 a 16:00. Los viernes y sábados añade cena de 19:30 a 23:15. El lunes permanece cerrado. En festivos y puentes puede cambiar, así que conviene llamar antes.',
	},
	{
		q: '¿Se puede cenar entre semana?',
		a: 'No según su horario publicado: las cenas son solo viernes y sábados, de 19:30 a 23:15. De martes a jueves y el domingo el servicio termina a las 16:00.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 966 78 21 34 o consúltalo en la ficha de Google del restaurante.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es un restaurante italiano y mediterráneo. Sus reseñas destacan la pasta y las raciones grandes. La carta completa y los platos del día se consultan en el local o por teléfono.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y la disponibilidad se consultan en el restaurante o llamando; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Fachada de Restaurante Giovanni en Almoradí' },
	{ src: IMAGES.fotoVertical1, alt: 'Restaurante Giovanni desde la calle' },
	{ src: IMAGES.fotoApaisada6, alt: 'Comedor de Restaurante Giovanni' },
	{ src: IMAGES.fotoVertical5, alt: 'Pasta servida en Restaurante Giovanni' },
	{ src: IMAGES.fotoVertical3, alt: 'Plato de pasta con gambas' },
	{ src: IMAGES.fotoVertical8, alt: 'Carne con guarnición en Restaurante Giovanni' },
	{ src: IMAGES.fotoVertical9, alt: 'Guiso servido en Restaurante Giovanni' },
	{ src: IMAGES.fotoVertical4, alt: 'Postre de Restaurante Giovanni' },
	{ src: IMAGES.fotoVertical7, alt: 'Tarta casera de Restaurante Giovanni' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	acceptsReservations: true,
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34966782134',
	servesCuisine: ['Italiana', 'Mediterránea'],
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
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Acceso adaptado para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Aseo adaptado para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Asientos adaptados para sillas de ruedas',
			value: true,
		},
	],
};
