/**
 * Datos de Mesón de Pepe (C. las Norias, 14 · 30009 Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Mesón de Pepe.
 *   Feature 0xd6381f3c67a7d81:0xa0fe8af12a627bb5.
 * - Dirección, teléfono, categoría, valoración, horario, accesibilidad y
 *   descripción de la casa: ficha pública de Google (octubre de 2026).
 * - Platos y ambiente: descripción del titular y reseñas publicadas en la ficha.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * La carta y los precios no están publicados: no se inventan importes.
 */

import fotoBocadillo from '../assets/fotos/meson-de-pepe-apaisada-07.jpg';
import fotoBocadillos from '../assets/fotos/meson-de-pepe-apaisada-06.jpg';
import fotoInterior from '../assets/fotos/meson-de-pepe-apaisada-01.jpg';
import fotoGuiso from '../assets/fotos/meson-de-pepe-vertical-03.jpg';
import fotoJamon from '../assets/fotos/meson-de-pepe-vertical-04.jpg';
import fotoPostre from '../assets/fotos/meson-de-pepe-vertical-05.jpg';
import fotoCafe from '../assets/fotos/meson-de-pepe-vertical-08.jpg';
import fotoPinchos from '../assets/fotos/meson-de-pepe-vertical-09.jpg';
import fotoBrocheta from '../assets/fotos/meson-de-pepe-vertical-10.jpg';
import logo from '../assets/fotos/meson-de-pepe-logo.svg';

export const IMAGES = {
	fotoBocadillo,
	fotoBocadillos,
	fotoInterior,
	fotoGuiso,
	fotoJamon,
	fotoPostre,
	fotoCafe,
	fotoPinchos,
	fotoBrocheta,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Mes%C3%B3n+de+Pepe/@37.989902,-1.1417491,17z/data=!3m1!4b1!4m6!3m5!1s0xd6381f3c67a7d81:0xa0fe8af12a627bb5!8m2!3d37.989902!4d-1.1417491!16s%2Fg%2F12qhgzrd0?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Mesón de Pepe',
	shortName: 'Mesón de Pepe',
	tagline: 'Bar restaurante en San Antón · Murcia',
	claim: 'El bocadillo de la casa y los guisos de siempre',
	summary:
		'Bar restaurante familiar en el barrio de San Antón, en Murcia. Desde los años 80 sirve desayunos, guisos murcianos y su bocadillo de la casa, con jamón, tocino ibérico, tomate y aceite de oliva en pan de leña.',
	street: 'C. las Norias, 14',
	district: 'San Antón',
	borough: 'San Antón',
	city: 'Murcia',
	postalCode: '30009',
	region: 'Murcia',
	province: 'Murcia',
	country: 'ES',
	phone: '968 51 58 53',
	phoneHref: 'tel:+34968515853',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.989902%2C-1.1417491&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 37.989902, lng: -1.1417491 },
	featureId: '0xd6381f3c67a7d81:0xa0fe8af12a627bb5',
	placeId: 'ChIJgX16xvOBYw0RtXtiKvGK_qA',
	rating: 4.6,
	reviewCount: 1356,
	hours: [
		{ days: 'Lunes a viernes', hours: '7:00 – 23:30' },
		{ days: 'Sábado', hours: '8:00 – 17:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. En festivos y puentes puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '07:00',
			closes: '23:30',
		},
		{ days: ['Saturday'], opens: '08:00', closes: '17:00' },
	],
	categories: ['Bar restaurante', 'Restaurante'],
	siteUrl: 'https://www.sur-digital.com/meson-de-pepe',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'Mesón de Pepe',
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
		icon: 'ri-bread-line',
		title: 'El bocadillo de la casa',
		text: 'Jamón, tocino ibérico, tomate y aceite de oliva en pan de leña.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Guisos murcianos',
		text: 'Los sabores tradicionales de la región, según la descripción de la casa.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Desayunos y tapeo',
		text: 'Abre a las 7:00 entre semana y alarga el día hasta las 23:30.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Barrio de San Antón',
		text: 'En la calle Las Norias, 14, en el corazón del barrio.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Murciana' },
	{ label: 'Valoración', value: '4,6 ★' },
	{ label: 'Reseñas', value: '1356' },
	{ label: 'Apertura', value: '7:00' },
];

export const PLATOS = [
	{
		icon: 'ri-bread-line',
		title: 'El bocadillo de la casa',
		text: 'Jamón, tocino ibérico, tomate y aceite virgen extra en pan de leña, según la ficha del local.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Guisos murcianos',
		text: 'La cocina apuesta por los sabores tradicionales de la región y sus guisos de siempre.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Desayunos desde las 7:00',
		text: 'Una de sus clientas resume su rutina así: «He ido a cenar de tapeo varias veces y a desayunar».',
	},
	{
		icon: 'ri-moon-clear-line',
		title: 'Tapeo y cenas',
		text: 'Barra y mesa hasta las 23:30 de lunes a viernes, con tapeo y cena.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Platos combinados',
		text: 'Una reseña menciona los platos combinados junto a la marinera y el bocata de la casa.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Trato de barrio',
		text: '«Bocadillos exquisitos, camareros amigables y muy buen ambiente», dicen en Google.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'San Antón, Murcia' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Teléfono directo' },
	{ icon: 'ri-cup-line', title: 'Desayunos desde las 7:00' },
];

export const REVIEWS = [
	{
		text: 'Bocadillos exquisitos, camareros amigables y muy buen ambiente.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Pedimos platos combinados, marinera y bocata de la casa buenísimo.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'He ido a cenar de tapeo varias veces y a desayunar.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mesón de Pepe?',
		a: 'En la calle Las Norias, 14, 30009 Murcia, en el barrio de San Antón. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:00 a 23:30. El sábado sirve de 8:00 a 17:00 y el domingo permanece cerrado. En festivos puede cambiar, así que conviene llamar antes.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. Entre semana abre a las 7:00 y sus reseñas mencionan los desayunos. El sábado la apertura es a las 8:00.',
	},
	{
		q: '¿Qué es el bocadillo de la casa?',
		a: 'Según la descripción de su ficha, se elabora con jamón, tocino ibérico, tomate y aceite virgen extra en pan de leña.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 968 51 58 53 para consultar disponibilidad o preguntar por el servicio del día.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y la disponibilidad se consultan en el local o llamando; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoBocadillos, alt: 'Bocadillos de la casa en Mesón de Pepe' },
	{ src: IMAGES.fotoGuiso, alt: 'Guiso murciano servido en Mesón de Pepe' },
	{ src: IMAGES.fotoJamon, alt: 'Jamón con queso y frutos secos' },
	{ src: IMAGES.fotoPostre, alt: 'Postre de la casa en Mesón de Pepe' },
	{ src: IMAGES.fotoPinchos, alt: 'Pinchos servidos en Mesón de Pepe' },
	{ src: IMAGES.fotoBrocheta, alt: 'Brocheta de carne de Mesón de Pepe' },
	{ src: IMAGES.fotoCafe, alt: 'Café de Mesón de Pepe' },
	{ src: IMAGES.fotoInterior, alt: 'Comedor de Mesón de Pepe en San Antón' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34968515853',
	servesCuisine: ['Murciana', 'Española'],
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
