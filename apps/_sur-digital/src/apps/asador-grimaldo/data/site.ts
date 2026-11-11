/**
 * Datos de Asador Grimaldo (Ctra. N-630, km 502 · 10829 Grimaldo, Cañaveral, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Asador Grimaldo.
 *   Feature 0xd3e01a36fb00569:0xac474eee83dd843.
 * - Dirección, teléfono, categorías, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Historia, especialidades y Flor de Jara: blog del propio restaurante
 *   (asadorgrimaldo.blogspot.com, 2010).
 * - Carnes a la parrilla con carbón de encina: ficha de EuroVelo 1.
 * - Platos: reseñas de Google (pulpo, entrecot, secreto ibérico, chuleta, bacalao,
 *   tarta casera de queso) y especialidades del blog.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado.
 */

import fotoApaisada1 from '../assets/fotos/asador-grimaldo-apaisada-01.jpg';
import fotoVertical2 from '../assets/fotos/asador-grimaldo-vertical-02.jpg';
import fotoVertical3 from '../assets/fotos/asador-grimaldo-vertical-03.jpg';
import fotoVista4 from '../assets/fotos/asador-grimaldo-vista-4-04.jpg';
import fotoApaisada5 from '../assets/fotos/asador-grimaldo-apaisada-05.jpg';
import fotoApaisada6 from '../assets/fotos/asador-grimaldo-apaisada-06.jpg';
import fotoVertical7 from '../assets/fotos/asador-grimaldo-vertical-07.jpg';
import fotoApaisada8 from '../assets/fotos/asador-grimaldo-apaisada-08.jpg';
import fotoVista9 from '../assets/fotos/asador-grimaldo-vista-9-09.jpg';
import fotoApaisada10 from '../assets/fotos/asador-grimaldo-apaisada-10.jpg';
import logo from '../assets/fotos/asador-grimaldo-logo.svg';

export const IMAGES = {
	fotoApaisada1,
	fotoVertical2,
	fotoVertical3,
	fotoVista4,
	fotoApaisada5,
	fotoApaisada6,
	fotoVertical7,
	fotoApaisada8,
	fotoVista9,
	fotoApaisada10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Asador+Grimaldo/@39.8393993,-6.3496651,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e01a36fb00569:0xac474eee83dd843!8m2!3d39.8393993!4d-6.3496651!16s%2Fg%2F11cfgrhlx?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Asador Grimaldo',
	shortName: 'Grimaldo',
	tagline: 'Carnes a la brasa en la Vía de la Plata',
	claim: 'Asador familiar en Grimaldo desde 2007',
	summary:
		'Asador y restaurante familiar en Grimaldo (Cañaveral, Cáceres): carnes a la brasa con carbón de encina, cochinillo y cabrito al horno, bacalao de la casa y postres caseros. Comidas de martes a domingo y cenas los viernes y sábados.',
	street: 'Ctra. N-630, km 502',
	city: 'Grimaldo',
	postalCode: '10829',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Cañaveral · Vía de la Plata',
	phone: '699 70 43 84',
	phoneHref: 'tel:+34699704384',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.8393993%2C-6.3496651&t=&z=15&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.8393993, lng: -6.3496651 },
	featureId: '0xd3e01a36fb00569:0xac474eee83dd843',
	placeId: 'ChIJaQWwb6MBPg0RQ9g96O50xAo',
	plusCode: 'RMQ2+Q4',
	rating: 4.5,
	reviewCount: 991,
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes', hours: '13:00 – 18:00' },
		{ days: 'Miércoles', hours: '13:00 – 18:00' },
		{ days: 'Jueves', hours: '13:00 – 18:00' },
		{ days: 'Viernes', hours: '13:00 – 18:00 · 20:30 – 22:30' },
		{ days: 'Sábado', hours: '13:00 – 18:00 · 20:30 – 23:00' },
		{ days: 'Domingo', hours: '13:00 – 18:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026: cierra los lunes; comidas de martes a domingo, de 13:00 a 18:00; cenas solo viernes y sábado, desde las 20:30. En puentes y fiestas conviene llamar antes.',
	openingHours: [
		{
			days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '13:00',
			closes: '18:00',
		},
		{
			days: ['Friday'],
			opens: '20:30',
			closes: '22:30',
		},
		{
			days: ['Saturday'],
			opens: '20:30',
			closes: '23:00',
		},
	],
	categories: ['Asador', 'Parrilla', 'Carnes a la brasa', 'Cocina casera'],
	social: {
		instagram: 'https://www.instagram.com/asadorgrimaldo/',
		blog: 'https://asadorgrimaldo.blogspot.com/',
	},
	siteUrl: 'https://www.sur-digital.com/asador-grimaldo',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'Asador Grimaldo',
	nif: '[pendiente de completar]',
	email: 'AsadorGrimaldo@gmail.com',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La carta', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-fire-line',
		title: 'Brasa de encina',
		text: 'Carnes a la parrilla con carbón de encina, el fuego lento del asador.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cochinillo y cabrito',
		text: 'Los dos clásicos al horno, junto al buey y la chuleta a la brasa.',
	},
	{
		icon: 'ri-home-smile-line',
		title: 'Cocina casera',
		text: 'Un restaurante familiar de 2007, con recetas de siempre y producto de cerca.',
	},
	{
		icon: 'ri-award-line',
		title: 'Una Flor de Jara',
		text: 'Distinción de la Guía Gourmet Vivir Extremadura al buen hacer de la casa.',
	},
];

export const CASA_FACTS = [
	{ label: 'Desde', value: '2007' },
	{ label: 'El fuego', value: 'Encina' },
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '991' },
];

export const CARTA = [
	{
		icon: 'ri-fire-line',
		kicker: 'A la parrilla',
		title: 'Carnes de buey a la brasa',
		text: 'Chuleta, entrecot y secreto ibérico sobre carbón de encina. La brasa es el centro de la casa y el olor que recibe en la N-630.',
	},
	{
		icon: 'ri-restaurant-line',
		kicker: 'Al horno',
		title: 'Cochinillo y cabrito',
		text: 'Dos clásicos del asador extremeño, asados al horno y servidos en su punto. Platos de mesa larga y domingo.',
	},
	{
		icon: 'ri-anchor-line',
		kicker: 'Del mar',
		title: 'Bacalao de la casa',
		text: 'Bacalao de la casa y pulpo, además de pimientos rellenos de bacalao. El pescado también tiene su sitio en la carta.',
	},
	{
		icon: 'ri-leaf-line',
		kicker: 'Para empezar',
		title: 'Ensalada Grimaldo',
		text: 'La ensalada de la casa, con el nombre del pueblo, y entrantes para compartir antes de la brasa.',
	},
	{
		icon: 'ri-cake-3-line',
		kicker: 'Postres',
		title: 'Tarta casera de queso',
		text: 'La tarta de queso casera que se repite en las reseñas, junto a otros postres de la casa.',
	},
	{
		icon: 'ri-map-pin-2-line',
		kicker: 'El producto',
		title: 'Carne de Casas de Millán',
		text: 'La carne llega de la carnicería Benages, en Casas de Millán, a pocos kilómetros del asador. Producto de la comarca.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-fire-line', title: 'Brasa' },
	{ icon: 'ri-restaurant-line', title: 'Al horno' },
	{ icon: 'ri-cake-3-line', title: 'Postres caseros' },
	{ icon: 'ri-parking-box-line', title: 'Aparcamiento' },
];

export const REVIEWS = [
	{
		text: 'Pedimos pulpo, entrecot y de postre, tarta de queso (muy rica).',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'El secreto ibérico buenísimo, y la tarta casera de queso increíble!!',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Pedí pimientos rellenos de bacalao y chuleta a la brasa, todo bien.',
		rating: 4,
		author: 'Reseña en Google',
		source: 'Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Grimaldo?',
		a: 'En la carretera N-630, km 502, 10829 Grimaldo (Cañaveral, Cáceres), a pie de la Vía de la Plata y a un paso de la autovía A-66. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, cierra los lunes. Las comidas son de martes a domingo, de 13:00 a 18:00, y las cenas solo viernes y sábado, desde las 20:30 (el sábado hasta las 23:00). En puentes conviene confirmar por teléfono.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 699 70 43 84. La web no tramita reservas. Para grupos y fines de semana es recomendable llamar con antelación.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Carnes a la brasa con carbón de encina (buey, chuleta, entrecot, secreto ibérico), cochinillo y cabrito al horno, bacalao de la casa, pulpo, pimientos rellenos de bacalao, ensalada Grimaldo y tarta casera de queso.',
	},
	{
		q: '¿De dónde viene la carne?',
		a: 'El restaurante explica que la carne procede de Casas de Millán, de la carnicería Benages, a pocos kilómetros de Grimaldo. Es uno de los sellos de la casa desde su apertura.',
	},
	{
		q: '¿Se puede cenar?',
		a: 'Sí, pero solo viernes y sábado por la noche, desde las 20:30. El resto de días la cocina trabaja al mediodía, de 13:00 a 18:00.',
	},
	{
		q: '¿Hay aparcamiento?',
		a: 'El asador está en la N-630, con acceso directo desde la carretera. Su ficha de Google indica aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta en la mesa, avisa al reservar.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoApaisada1,
		alt: 'Asador Grimaldo, en Grimaldo (Cáceres)',
	},
	{ src: IMAGES.fotoVertical2, alt: 'Interior de Asador Grimaldo' },
	{ src: IMAGES.fotoVertical3, alt: 'Detalle de la mesa en Asador Grimaldo' },
	{ src: IMAGES.fotoVista4, alt: 'Rincón del asador en Grimaldo' },
	{ src: IMAGES.fotoApaisada5, alt: 'Comedor de Asador Grimaldo' },
	{ src: IMAGES.fotoApaisada6, alt: 'Ambiente de la casa en Grimaldo' },
	{ src: IMAGES.fotoVertical7, alt: 'Fotografía de la ficha de Google Maps de Asador Grimaldo' },
	{ src: IMAGES.fotoApaisada8, alt: 'El asador, junto a la N-630' },
	{ src: IMAGES.fotoVista9, alt: 'Imagen de Asador Grimaldo en Cañaveral' },
	{ src: IMAGES.fotoApaisada10, alt: 'Otra vista de Asador Grimaldo' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34699704384',
	email: LEGAL.email,
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Asador', 'Carnes a la brasa', 'Cocina extremeña', 'Cocina casera'],
	areaServed: [
		{ '@type': 'City', name: 'Grimaldo' },
		{ '@type': 'City', name: 'Cañaveral' },
		{ '@type': 'AdministrativeArea', name: 'Vía de la Plata' },
	],
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
	sameAs: [BUSINESS.social.instagram, BUSINESS.social.blog],
	acceptsReservations: 'True',
	openingHoursSpecification: BUSINESS.openingHours.map((tramo) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: tramo.days,
		opens: tramo.opens,
		closes: tramo.closes,
	})),
	amenityFeature: [
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Acceso para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Aparcamiento adaptado para sillas de ruedas',
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
		worstRating: 1,
	},
};
