/**
 * Datos de A Bocados (C. Circo, nº 2 · 11405 Jerez de la Frontera, Cádiz).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: A Bocados.
 *   Feature 0xd0dc77ac74cc68f:0x5e8a88e488ad59ff.
 * - Dirección, teléfono, categoría, valoración, horario, accesibilidad y
 *   distintivo Brunch: ficha pública de Google (octubre de 2026).
 * - Carácter de la casa y trato: reseñas publicadas en la ficha.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * El titular no ha publicado descripción ni carta: no se inventan platos ni precios.
 */

import fotoPortada from '../assets/fotos/a-bocados-apaisada-01.jpg';
import fotoVertical2 from '../assets/fotos/a-bocados-vertical-02.jpg';
import fotoApaisada3 from '../assets/fotos/a-bocados-apaisada-03.jpg';
import fotoPanoramica4 from '../assets/fotos/a-bocados-panoramica-04.jpg';
import fotoApaisada5 from '../assets/fotos/a-bocados-apaisada-05.jpg';
import fotoVertical6 from '../assets/fotos/a-bocados-vertical-06.jpg';
import fotoApaisada7 from '../assets/fotos/a-bocados-apaisada-07.jpg';
import fotoVertical8 from '../assets/fotos/a-bocados-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/a-bocados-vertical-09.jpg';
import fotoApaisada10 from '../assets/fotos/a-bocados-apaisada-10.jpg';
import logo from '../assets/fotos/a-bocados-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoVertical2,
	fotoApaisada3,
	fotoPanoramica4,
	fotoApaisada5,
	fotoVertical6,
	fotoApaisada7,
	fotoVertical8,
	fotoVertical9,
	fotoApaisada10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/A+Bocados/@36.6888431,-6.1332136,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dc77ac74cc68f:0x5e8a88e488ad59ff!8m2!3d36.6888431!4d-6.1332136!16s%2Fg%2F11h7q9r4z3?authuser=0&hl=es';

export const BUSINESS = {
	name: 'A Bocados',
	shortName: 'A Bocados',
	tagline: 'Tapas y brunch en Jerez de la Frontera',
	claim: 'Tapas para compartir y brunch de domingo',
	summary:
		'Restaurante especializado en tapas en la calle Circo de Jerez de la Frontera. Tapas para compartir, brunch de domingo y servicio de mediodía y noche, con un trato cercano.',
	street: 'C. Circo, nº 2',
	district: 'Jerez de la Frontera',
	borough: 'Jerez de la Frontera',
	city: 'Jerez de la Frontera',
	postalCode: '11405',
	region: 'Cádiz',
	country: 'ES',
	phone: '601 21 96 05',
	phoneHref: 'tel:+34601219605',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.6888431%2C-6.1332136&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6888431, lng: -6.1332136 },
	featureId: '0xd0dc77ac74cc68f:0x5e8a88e488ad59ff',
	placeId: 'ChIJj8ZMx3rHDQ0R_1mtiOSIil4',
	rating: 4.3,
	reviewCount: 621,
	hours: [
		{ days: 'Martes a sábado · mediodía', hours: '12:00 – 17:00' },
		{ days: 'Martes a sábado · noche', hours: '20:00 – 24:00' },
		{ days: 'Domingo · brunch', hours: '9:00 – 17:00' },
		{ days: 'Lunes', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google. El domingo abre a las 9:00 para el brunch y el lunes cierra. En festivos puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '12:00',
			closes: '17:00',
		},
		{
			days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '20:00',
			closes: '24:00',
		},
		{ days: ['Sunday'], opens: '09:00', closes: '17:00' },
	],
	categories: ['Restaurante especializado en tapas', 'Brunch'],
	siteUrl: 'https://www.sur-digital.com/a-bocados',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'A Bocados',
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
		title: 'Especialistas en tapas',
		text: 'Tapas para compartir en el centro de Jerez de la Frontera.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Brunch de domingo',
		text: 'Los domingos abre a las 9:00 y sirve brunch hasta las 17:00.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Buen trato',
		text: '«Profesionalidad, simpatía y amabilidad», repiten sus clientes.',
	},
	{
		icon: 'ri-calendar-close-line',
		title: 'Lunes cerrado',
		text: 'De martes a sábado, mediodía y noche; domingo, brunch.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Tapas' },
	{ label: 'Valoración', value: '4,3 ★' },
	{ label: 'Reseñas', value: '621' },
	{ label: 'Lunes', value: 'Cerrado' },
];

export const PLATOS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Tapas para compartir',
		text: 'La especialidad de la casa: tapas al centro de la mesa.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Brunch dominical',
		text: 'Domingo de 9:00 a 17:00, el día más largo de la semana.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Mediodía',
		text: 'De martes a sábado, de 12:00 a 17:00, para comer sin prisa.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Noche',
		text: 'Cena de martes a sábado, de 20:00 a 24:00.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Buen ambiente',
		text: '«Personal 10, buen ambiente», otra de las frases de sus reseñas.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Trato cercano',
		text: 'Clientes que repiten y destacan la atención del equipo.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'C. Circo, nº 2' },
	{ icon: 'ri-cup-line', title: 'Brunch los domingos' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Reservas por teléfono' },
];

export const REVIEWS = [
	{
		text: 'Buena cocina, profesionalidad, simpatía y amabilidad.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buenísimo, personal 10, buen ambiente. Hemos repetido, lo recomendamos.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'El trato fue inmejorable, muy atenta y simpática la camarera, un encanto.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está A Bocados?',
		a: 'En la calle Circo, nº 2, 11405 Jerez de la Frontera (Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a sábado abre de 12:00 a 17:00 y de 20:00 a 24:00. El domingo sirve brunch de 9:00 a 17:00. El lunes cierra.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 601 21 96 05 o consúltalo en la ficha de Google del restaurante.',
	},
	{
		q: '¿Hay brunch?',
		a: 'Sí. Su ficha de Google incluye el distintivo Brunch y el domingo abre a las 9:00 hasta las 17:00.',
	},
	{
		q: '¿Qué tipo de comida sirven?',
		a: 'Es un restaurante especializado en tapas. La carta completa y los platos del día se consultan en el local o por teléfono.',
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
	{ src: IMAGES.fotoPortada, alt: 'A Bocados en Jerez de la Frontera' },
	{ src: IMAGES.fotoVertical2, alt: 'Interior de A Bocados' },
	{ src: IMAGES.fotoApaisada3, alt: 'Mesa de A Bocados' },
	{ src: IMAGES.fotoPanoramica4, alt: 'Panorámica del restaurante' },
	{ src: IMAGES.fotoApaisada5, alt: 'Tapas de A Bocados' },
	{ src: IMAGES.fotoVertical6, alt: 'Rincón del local' },
	{ src: IMAGES.fotoApaisada7, alt: 'Ambiente en A Bocados' },
	{ src: IMAGES.fotoVertical8, alt: 'Detalle del restaurante' },
	{ src: IMAGES.fotoVertical9, alt: 'A Bocados por dentro' },
	{ src: IMAGES.fotoApaisada10, alt: 'A Bocados, Jerez de la Frontera' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34601219605',
	priceRange: '€€',
	servesCuisine: ['Tapas', 'Cocina andaluza', 'Brunch'],
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
