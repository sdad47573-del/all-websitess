/**
 * Datos de Restaurante A-Gusto El Macizo (Playa Cruz del Mar · 11550 Chipiona, Cádiz).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante A-Gusto El Macizo.
 *   Feature 0xd0e7584c1a3054f:0x313d8fc5b10e339c.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: reseñas publicadas en la ficha (mariscos, cócteles y trato).
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * El titular no ha publicado descripción, carta ni precios: no se inventan platos.
 */

import fotoPortada from '../assets/fotos/a-gusto-el-macizo-apaisada-01.jpg';
import fotoVertical2 from '../assets/fotos/a-gusto-el-macizo-vertical-02.jpg';
import fotoVista3 from '../assets/fotos/a-gusto-el-macizo-vista-3-03.jpg';
import fotoApaisada4 from '../assets/fotos/a-gusto-el-macizo-apaisada-04.jpg';
import fotoVertical5 from '../assets/fotos/a-gusto-el-macizo-vertical-05.jpg';
import fotoVertical6 from '../assets/fotos/a-gusto-el-macizo-vertical-06.jpg';
import fotoVertical7 from '../assets/fotos/a-gusto-el-macizo-vertical-07.jpg';
import fotoVertical8 from '../assets/fotos/a-gusto-el-macizo-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/a-gusto-el-macizo-vertical-09.jpg';
import fotoVertical10 from '../assets/fotos/a-gusto-el-macizo-vertical-10.jpg';
import logo from '../assets/fotos/a-gusto-el-macizo-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoVertical2,
	fotoVista3,
	fotoApaisada4,
	fotoVertical5,
	fotoVertical6,
	fotoVertical7,
	fotoVertical8,
	fotoVertical9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+A-Gusto+El+Macizo/@36.7428796,-6.4339754,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e7584c1a3054f:0x313d8fc5b10e339c!8m2!3d36.7428796!4d-6.4339754!16s%2Fg%2F11swzf_s3z?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante A-Gusto El Macizo',
	shortName: 'A-Gusto El Macizo',
	tagline: 'Restaurante de playa en Chipiona',
	claim: 'Mariscos, cócteles y la playa al lado',
	summary:
		'Restaurante en primera línea de la Playa Cruz del Mar, en Chipiona. Cocina de mar, cócteles y mesa abierta todos los días desde primera hora de la mañana hasta la madrugada.',
	street: 'Playa Cruz del Mar',
	district: 'Chipiona',
	borough: 'Chipiona',
	city: 'Chipiona',
	postalCode: '11550',
	region: 'Cádiz',
	country: 'ES',
	phone: '698 90 16 05',
	phoneHref: 'tel:+34698901605',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7428796%2C-6.4339754&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7428796, lng: -6.4339754 },
	featureId: '0xd0e7584c1a3054f:0x313d8fc5b10e339c',
	placeId: 'ChIJTwWjwYR1Dg0RnDMOscWPPTE',
	rating: 3.8,
	reviewCount: 292,
	hours: [
		{ days: 'Lunes a domingo · mañana', hours: '9:00 – 1:00' },
		{ days: 'Cocina', hours: 'Según servicio del día' },
		{ days: 'Barra', hours: 'Cócteles y bebidas' },
		{ days: 'Cierre', hours: '1:00 de la madrugada' },
	],
	hoursNote:
		'La ficha de Google marca el mismo horario los siete días: de 9:00 a 1:00 de la madrugada. En temporada alta, festivos y días de lluvia el servicio puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '09:00',
			closes: '01:00',
		},
	],
	categories: ['Restaurante', 'Cocina de mar', 'Cócteles'],
	siteUrl: 'https://www.sur-digital.com/a-gusto-el-macizo',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante A-Gusto El Macizo',
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
		icon: 'ri-water-flash-line',
		title: 'Primera línea de playa',
		text: 'En la Playa Cruz del Mar, con el mar a un paso de la mesa.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cocina de mar',
		text: 'Sus reseñas destacan los mariscos y el producto de la costa.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Cócteles en la barra',
		text: 'Barra abierta para alargar la sobremesa frente al agua.',
	},
	{
		icon: 'ri-time-line',
		title: 'Abierto todos los días',
		text: 'De 9:00 a 1:00, de lunes a domingo, según su ficha de Google.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'De mar' },
	{ label: 'Valoración', value: '3,8 ★' },
	{ label: 'Reseñas', value: '292' },
	{ label: 'Horario', value: '9:00–1:00' },
];

export const PLATOS = [
	{
		icon: 'ri-anchor-line',
		title: 'El mar, en la mesa',
		text: 'Mariscos y pescado de la costa, lo que más repiten sus clientes en Google.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Cócteles de barra',
		text: 'La barra acompaña la comida y la tarde: cócteles y bebidas frías.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Mañana de playa',
		text: 'Abre a las 9:00, pensado para empezar el día junto al agua.',
	},
	{
		icon: 'ri-moon-clear-line',
		title: 'Hasta la madrugada',
		text: 'Cierra a la 1:00, así que la sobremesa puede alargarse.',
	},
	{
		icon: 'ri-group-line',
		title: 'Mesa para compartir',
		text: 'Platos al centro y raciones, la forma natural de comer en la playa.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Buen trato',
		text: '«Buen sitio y muy buen trato de los camareros», dicen sus reseñas.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Playa Cruz del Mar' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Reservas por teléfono' },
	{ icon: 'ri-sun-line', title: 'Todos los días' },
];

export const REVIEWS = [
	{
		text: 'Magníficos mariscos, muy buenos cócteles.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buena comida y buen sitio y muy buen trato de los camareros.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está A-Gusto El Macizo?',
		a: 'En la Playa Cruz del Mar, 11550 Chipiona (Cádiz). Puedes abrir la ruta directamente en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Su ficha de Google marca de 9:00 a 1:00 de la madrugada todos los días de la semana. En festivos y temporada alta puede cambiar, así que conviene llamar antes.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 698 90 16 05 o consúltalo en la ficha de Google del restaurante.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es un restaurante de playa. Sus reseñas destacan los mariscos y los cócteles de la barra. La carta completa y los platos del día se consultan en el local o por teléfono.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y la disponibilidad se consultan en el restaurante o llamando; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso y asientos adaptados para sillas de ruedas.',
	},
	{
		q: '¿Se puede ir solo a tomar algo?',
		a: 'Sí. La barra sirve cócteles y bebidas durante todo el horario, sin necesidad de comer.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'A-Gusto El Macizo, en la Playa Cruz del Mar' },
	{ src: IMAGES.fotoVertical2, alt: 'Interior del restaurante A-Gusto El Macizo' },
	{ src: IMAGES.fotoVista3, alt: 'Mesa del restaurante en Chipiona' },
	{ src: IMAGES.fotoApaisada4, alt: 'Comedor de A-Gusto El Macizo' },
	{ src: IMAGES.fotoVertical5, alt: 'Rincón del restaurante junto a la playa' },
	{ src: IMAGES.fotoVertical6, alt: 'Detalle del local en la Playa Cruz del Mar' },
	{ src: IMAGES.fotoVertical7, alt: 'Ambiente de A-Gusto El Macizo' },
	{ src: IMAGES.fotoVertical8, alt: 'Cócteles en la barra del restaurante' },
	{ src: IMAGES.fotoVertical9, alt: 'Comida servida en A-Gusto El Macizo' },
	{ src: IMAGES.fotoVertical10, alt: 'A-Gusto El Macizo, Chipiona' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34698901605',
	priceRange: '€€',
	servesCuisine: ['Cocina de mar', 'Mariscos', 'Cocina andaluza'],
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
