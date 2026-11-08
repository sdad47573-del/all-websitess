/**
 * Datos de Restaurante Las Tinajas (Ctra. Ciudad Rodrigo, 17 · 10830 Torrejoncillo,
 * Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante LAS TINAJAS.
 *   Feature 0xd3dfc3e4090a77f:0xf0afa0f9a0c2331d.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: descripción del titular en Google (menú diario de lunes a viernes,
 *   fines de semana a la carta, desayunos, bocadillos, carnes ibéricas, pescados y raciones).
 * - Platos: reseñas destacadas de Google y guía Toppings & Salads.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado. Los platos citados son los que más se repiten en las fuentes públicas.
 */

import fotoPortada from '../assets/fotos/restaurante-las-tinajas-apaisada-01.jpg';
import fotoVertical2 from '../assets/fotos/restaurante-las-tinajas-vertical-02.jpg';
import fotoApaisada3 from '../assets/fotos/restaurante-las-tinajas-apaisada-03.jpg';
import fotoVertical4 from '../assets/fotos/restaurante-las-tinajas-vertical-04.jpg';
import fotoVertical5 from '../assets/fotos/restaurante-las-tinajas-vertical-05.jpg';
import fotoPanoramica6 from '../assets/fotos/restaurante-las-tinajas-panoramica-06.jpg';
import fotoApaisada7 from '../assets/fotos/restaurante-las-tinajas-apaisada-07.jpg';
import fotoVertical8 from '../assets/fotos/restaurante-las-tinajas-vertical-08.jpg';
import fotoApaisada9 from '../assets/fotos/restaurante-las-tinajas-apaisada-09.jpg';
import fotoApaisada10 from '../assets/fotos/restaurante-las-tinajas-apaisada-10.jpg';
import logo from '../assets/fotos/restaurante-las-tinajas-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoVertical2,
	fotoApaisada3,
	fotoVertical4,
	fotoVertical5,
	fotoPanoramica6,
	fotoApaisada7,
	fotoVertical8,
	fotoApaisada9,
	fotoApaisada10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+LAS+TINAJAS/@39.8998865,-6.4702321,17z/data=!3m1!4b1!4m6!3m5!1s0xd3dfc3e4090a77f:0xf0afa0f9a0c2331d!8m2!3d39.8998865!4d-6.4702321!16s%2Fg%2F11dfjyv7b3?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante Las Tinajas',
	shortName: 'Las Tinajas',
	tagline: 'Cocina casera en la carretera de Ciudad Rodrigo',
	claim: 'Desayunos, menú diario y carnes ibéricas en Torrejoncillo',
	summary:
		'Bar, cafetería y restaurante en Torrejoncillo (Cáceres): menú diario de lunes a viernes, desayunos desde las 7:00, carnes ibéricas, pescados, raciones y carta los fines de semana.',
	street: 'Ctra. Ciudad Rodrigo, 17',
	district: 'Torrejoncillo',
	borough: 'Torrejoncillo',
	city: 'Torrejoncillo',
	postalCode: '10830',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Valle del Alagón · Cáceres',
	phone: '638 35 24 85',
	phoneHref: 'tel:+34638352485',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.8998865%2C-6.4702321&t=&z=15&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.8998865, lng: -6.4702321 },
	featureId: '0xd3dfc3e4090a77f:0xf0afa0f9a0c2331d',
	placeId: 'ChIJf6eQQD78PQ0RHTPCoPmgr_A',
	plusCode: 'VGXH+XW',
	rating: 4.6,
	reviewCount: 193,
	hours: [
		{ days: 'Lunes', hours: '7:00 – 17:00' },
		{ days: 'Martes', hours: 'Cerrado' },
		{ days: 'Miércoles', hours: '7:00 – 17:00' },
		{ days: 'Jueves', hours: '7:00 – 17:00' },
		{ days: 'Viernes', hours: '7:00 – 17:00' },
		{ days: 'Sábado', hours: '7:00 – 17:00' },
		{ days: 'Domingo', hours: '7:00 – 17:00' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google en octubre de 2026: de 7:00 a 17:00 de lunes a domingo, con el martes cerrado. El menú diario se sirve de lunes a viernes y los fines de semana y festivos se trabaja a la carta. En puentes y temporada alta conviene llamar antes.',
	openingHours: [
		{
			days: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '07:00',
			closes: '17:00',
		},
	],
	categories: ['Restaurante', 'Cafetería', 'Cocina casera', 'Carnes ibéricas'],
	social: {
		facebook: 'https://www.facebook.com/p/Bar-Restaurante-Las-Tinajas-100068695237249/',
		instagram: 'https://www.instagram.com/barrestaurante_lastinajas/',
	},
	siteUrl: 'https://www.sur-digital.com/restaurante-las-tinajas',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante Las Tinajas',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
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
		icon: 'ri-cup-line',
		title: 'Desayunos desde las 7:00',
		text: 'Churros, tostadas y café para empezar el día en la carretera de Ciudad Rodrigo.',
	},
	{
		icon: 'ri-coupon-3-line',
		title: 'Menú diario de lunes a viernes',
		text: 'Primero, segundo, bebida y postre, con cocina casera y raciones generosas.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Carnes ibéricas',
		text: 'Pluma, carnes a la brasa y pescados, junto a las raciones de la barra.',
	},
	{
		icon: 'ri-calendar-event-line',
		title: 'Fines de semana a la carta',
		text: 'Sábados, domingos y festivos se come a la carta, con platos de temporada.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Casera' },
	{ label: 'Especialidad', value: 'Ibéricos' },
	{ label: 'Valoración', value: '4,6 ★' },
	{ label: 'Reseñas', value: '193' },
];

export const CARTA = [
	{
		icon: 'ri-cup-line',
		kicker: 'Desde las 7:00',
		title: 'Desayunos de la casa',
		text: 'Churros, tostadas y café: los desayunos que más se repiten en las reseñas de Google.',
	},
	{
		icon: 'ri-coupon-3-line',
		kicker: 'De lunes a viernes',
		title: 'Menú diario',
		text: 'Primero, segundo, bebida y postre, con cocina casera y platos que cambian cada día. Los fines de semana y festivos, carta.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'Para compartir',
		title: 'Croquetas, patatas alioli y huevos rotos',
		text: 'Croquetas caseras, patatas alioli y huevos rotos con solomillo, algunos de los entrantes más elogiados.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'A la brasa',
		title: 'Pluma ibérica',
		text: 'Pluma ibérica en su punto, uno de los cortes que más destacan las reseñas del restaurante.',
	},
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'Del mar',
		title: 'Bacalao gratinado',
		text: 'Bacalao gratinado para los que prefieren pescado, junto a otras opciones de la carta.',
	},
	{
		icon: 'ri-restaurant-line',
		kicker: 'Receta de la casa',
		title: 'Pollo Kentucky con miel y mostaza',
		text: 'Pollo crujiente con salsa de miel y mostaza, una de las propuestas más pedidas, sobre todo por los niños.',
	},
	{
		icon: 'ri-bread-line',
		kicker: 'Barra',
		title: 'Bocadillos, sándwiches y hamburguesas',
		text: 'La parte de cafetería y bar: bocadillos, sándwiches, hamburguesas y raciones a cualquier hora.',
	},
	{
		icon: 'ri-cake-3-line',
		kicker: 'Postres',
		title: 'Tarta de queso y serradura',
		text: 'Postres caseros como la tarta de queso y la serradura portuguesa, dos de los más recomendados.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-cup-line', title: 'Desayunos' },
	{ icon: 'ri-coupon-3-line', title: 'Menú diario' },
	{ icon: 'ri-shopping-bag-3-line', title: 'Para llevar' },
	{ icon: 'ri-parking-box-line', title: 'Aparcamiento' },
];

export const REVIEWS = [
	{
		text: 'Buen trato y servicio, buena comida (cocina y materia prima), buen ambiente.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Buen restaurante para ir a desayunar: churros, tostadas...',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Buen servicio y buena cocina, buenísimo todo.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Las Tinajas?',
		a: 'En la carretera de Ciudad Rodrigo, 17, 10830 Torrejoncillo (Cáceres), en el Valle del Alagón. Puedes abrir la ruta directamente en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre de 7:00 a 17:00 de lunes a domingo y cierra los martes. El menú diario se sirve de lunes a viernes; los fines de semana y festivos se come a la carta. En puentes conviene confirmar por teléfono.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'Las reservas se gestionan por teléfono, en el 638 35 24 85. La web no tramita reservas. Para grupos y fines de semana es recomendable llamar con antelación.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí, de lunes a viernes, con primero, segundo, bebida y postre. Esta web no publica el precio porque cambia con la temporada; se consulta al reservar o en el local. Sábados, domingos y festivos se trabaja a la carta.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina casera y carnes ibéricas: pluma ibérica, bacalao gratinado, huevos rotos con solomillo, croquetas caseras, patatas alioli, pollo Kentucky con miel y mostaza, ensaladas, bocadillos y hamburguesas. De postre, tarta de queso o serradura portuguesa.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. Abre a las 7:00 y sirve desayunos con churros, tostadas y café, además de bocadillos y raciones a lo largo de la mañana.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso para sillas de ruedas y aparcamiento adaptado. Si necesitas alguna condición concreta en la mesa, avisa al reservar por teléfono.',
	},
	{
		q: '¿Hay comida para llevar?',
		a: 'Sí. El restaurante ofrece comida para llevar, además del servicio en mesa. Puedes consultar la disponibilidad y hacer el pedido por teléfono.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoPortada,
		alt: 'Restaurante Las Tinajas en Torrejoncillo, Cáceres',
	},
	{ src: IMAGES.fotoVertical2, alt: 'Interior del restaurante Las Tinajas' },
	{ src: IMAGES.fotoApaisada3, alt: 'Comedor de Las Tinajas en Torrejoncillo' },
	{ src: IMAGES.fotoVertical4, alt: 'Detalle de la mesa en Restaurante Las Tinajas' },
	{ src: IMAGES.fotoVertical5, alt: 'Ambiente de Las Tinajas, en el Valle del Alagón' },
	{ src: IMAGES.fotoPanoramica6, alt: 'Fotografía de la ficha de Google Maps de Las Tinajas' },
	{ src: IMAGES.fotoApaisada7, alt: 'Rincón del restaurante Las Tinajas' },
	{ src: IMAGES.fotoVertical8, alt: 'Platos de la cocina de Las Tinajas' },
	{ src: IMAGES.fotoApaisada9, alt: 'Las Tinajas, restaurante de Torrejoncillo' },
	{ src: IMAGES.fotoApaisada10, alt: 'Otra imagen de Restaurante Las Tinajas en Cáceres' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34638352485',
	priceRange: '€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina extremeña', 'Cocina casera', 'Carnes ibéricas', 'Desayunos'],
	areaServed: [
		{ '@type': 'City', name: 'Torrejoncillo' },
		{ '@type': 'AdministrativeArea', name: 'Valle del Alagón' },
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
	sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram],
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
	],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
		worstRating: 1,
	},
};
