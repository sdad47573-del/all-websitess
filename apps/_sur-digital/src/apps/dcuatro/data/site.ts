/**
 * Datos de Dcuatro (C. Junterones, 4 · 30008 Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Dcuatro.
 *   Feature 0xd63821edd22e75b:0xeffb49ba766dc6c4.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: reseñas publicadas en la ficha.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * La carta, el menú y los precios no están publicados: no se inventan platos ni importes.
 */

import fotoArroz from '../assets/fotos/dcuatro-apaisada-10.jpg';
import fotoCazuela from '../assets/fotos/dcuatro-apaisada-02.jpg';
import fotoChocolate from '../assets/fotos/dcuatro-apaisada-07.jpg';
import fotoFachada from '../assets/fotos/dcuatro-panoramica-01.jpg';
import fotoFritos from '../assets/fotos/dcuatro-apaisada-03.jpg';
import fotoHuevos from '../assets/fotos/dcuatro-vertical-06.jpg';
import fotoParrilla from '../assets/fotos/dcuatro-vertical-05.jpg';
import fotoPortada from '../assets/fotos/dcuatro-apaisada-09.jpg';
import fotoPostre from '../assets/fotos/dcuatro-apaisada-04.jpg';
import logo from '../assets/fotos/dcuatro-logo.svg';

export const IMAGES = {
	fotoArroz,
	fotoCazuela,
	fotoChocolate,
	fotoFachada,
	fotoFritos,
	fotoHuevos,
	fotoParrilla,
	fotoPortada,
	fotoPostre,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Dcuatro/@37.991113,-1.132091,17z/data=!3m1!4b1!4m6!3m5!1s0xd63821edd22e75b:0xeffb49ba766dc6c4!8m2!3d37.991113!4d-1.132091!16s%2Fg%2F12qgrl81p?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Dcuatro',
	shortName: 'Dcuatro',
	tagline: 'Cocina española y mediterránea · Murcia',
	claim: 'Producto, menú y mesa de mediodía',
	summary:
		'Restaurante de cocina española y mediterránea en el centro de Murcia. Menús y almuerzos de mediodía, con una cocina cuidada y un servicio atento que destacan sus reseñas.',
	street: 'C. Junterones, 4',
	borough: 'Murcia',
	city: 'Murcia',
	postalCode: '30008',
	region: 'Murcia',
	province: 'Murcia',
	country: 'ES',
	phone: '676 70 09 55',
	phoneHref: 'tel:+34676700955',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.991113%2C-1.132091&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 37.991113, lng: -1.132091 },
	featureId: '0xd63821edd22e75b:0xeffb49ba766dc6c4',
	placeId: 'ChIJW-ci3R6CYw0RxMZtdrpJ--8',
	rating: 4.5,
	reviewCount: 411,
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00 – 17:00' },
		{ days: 'Sábado', hours: '11:30 – 17:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. El servicio termina a las 17:00; en festivos puede cambiar, así que conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '17:00',
		},
		{ days: ['Saturday'], opens: '11:30', closes: '17:00' },
	],
	categories: ['Restaurante de cocina española', 'Restaurante mediterráneo'],
	siteUrl: 'https://www.sur-digital.com/dcuatro',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Dcuatro',
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
		title: 'Cocina española',
		text: 'Una de las dos cocinas con las que Google clasifica la casa.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Recetario mediterráneo',
		text: 'La otra mitad de la carta, según la ficha del restaurante.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Menús de mediodía',
		text: 'Sus reseñas mencionan los menús; se consultan en el local.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Centro de Murcia',
		text: 'En la calle Junterones, 4, a un paso del centro.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Española' },
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '411' },
	{ label: 'Mediodía', value: '10:00–17:00' },
];

export const PLATOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina española',
		text: 'La base de la casa, según la categoría con la que Google la clasifica.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Recetario mediterráneo',
		text: 'La segunda cocina de la ficha: producto y recetas del Mediterráneo.',
	},
	{
		icon: 'ri-file-list-3-line',
		title: 'Menús',
		text: 'Una reseña de Google menciona que hay menús; el del día se consulta en el local.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Cafés y almuerzos',
		text: '«Cafés matutinos, almuerzos, aperitivos...», resume una de las reseñas.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Aperitivos y comidas',
		text: 'La misma reseña añade comidas, meriendas y cenas; el horario publicado es de mediodía.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Producto bien presentado',
		text: '«Buen producto, bien hecho, bien presentado, atención atenta y perfecta».',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Centro de Murcia' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Teléfono directo' },
	{ icon: 'ri-sun-line', title: 'Mediodía de lunes a sábado' },
];

export const REVIEWS = [
	{
		text: 'Cafés matutinos, almuerzos, aperitivos, comidas y hay menús, meriendas y cenas.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buena cocina, buen servicio, buen trato, pulcritud y limpieza.',
		rating: 4,
		author: 'Reseña en Google',
	},
	{
		text: 'Buen producto, bien hecho, bien presentado, atención atenta y perfecta.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Dcuatro?',
		a: 'En la calle Junterones, 4, 30008 Murcia, en el centro de la ciudad. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes sirve de 10:00 a 17:00. El sábado abre de 11:30 a 17:00 y el domingo permanece cerrado. En festivos puede cambiar, así que conviene llamar antes.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sus reseñas mencionan que hay menús. El menú concreto, su composición y su precio se consultan en el restaurante o llamando por teléfono.',
	},
	{
		q: '¿Se puede cenar?',
		a: 'El horario publicado en Google termina a las 17:00, así que no se anuncia servicio de cena. Si buscas una hora concreta, confírmalo por teléfono.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 676 70 09 55 para consultar disponibilidad o preguntar por el menú del día.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y la disponibilidad se consultan en el restaurante o llamando; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. No figura aparcamiento adaptado.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoArroz, alt: 'Arroz negro servido en Dcuatro' },
	{ src: IMAGES.fotoHuevos, alt: 'Huevos con patatas y gamba de Dcuatro' },
	{ src: IMAGES.fotoCazuela, alt: 'Cazuela de producto de Dcuatro' },
	{ src: IMAGES.fotoFritos, alt: 'Pescado frito con patatas y verduras' },
	{ src: IMAGES.fotoPostre, alt: 'Postre de la casa en Dcuatro' },
	{ src: IMAGES.fotoChocolate, alt: 'Postre de chocolate de Dcuatro' },
	{ src: IMAGES.fotoParrilla, alt: 'Plato de producto a la parrilla' },
	{ src: IMAGES.fotoFachada, alt: 'Fachada de Dcuatro en la calle Junterones' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34676700955',
	servesCuisine: ['Española', 'Mediterránea'],
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
