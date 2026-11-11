/**
 * Datos de La Tapica Restaurante, Carmen & Francisco (Churra, Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: LA TAPICA Restaurante, Carmen & Francisco.
 *   Feature 0xd6383d6249fad29:0x809b302b1a265502.
 * - Dirección, teléfono, categoría, valoración, horario, servicios y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: descripción del propietario en la ficha.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * La carta y los precios no están publicados: no se inventan platos ni importes.
 */

import fotoComedor from '../assets/fotos/la-tapica-apaisada-01.jpg';
import fotoVitrina from '../assets/fotos/la-tapica-apaisada-05.jpg';
import fotoVinos from '../assets/fotos/la-tapica-apaisada-07.jpg';
import fotoCalamares from '../assets/fotos/la-tapica-apaisada-08.jpg';
import fotoSala from '../assets/fotos/la-tapica-panoramica-04.jpg';
import fotoGambas from '../assets/fotos/la-tapica-panoramica-06.jpg';
import fotoTartar from '../assets/fotos/la-tapica-vertical-02.jpg';
import fotoSalmorejo from '../assets/fotos/la-tapica-vertical-09.jpg';
import fotoCroquetas from '../assets/fotos/la-tapica-vertical-10.jpg';
import fotoCarne from '../assets/fotos/la-tapica-vista-3-03.jpg';
import logo from '../assets/fotos/la-tapica-logo.svg';

export const IMAGES = {
	fotoCalamares,
	fotoCarne,
	fotoComedor,
	fotoCroquetas,
	fotoGambas,
	fotoSala,
	fotoSalmorejo,
	fotoTartar,
	fotoVinos,
	fotoVitrina,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/LA+TAPICA+Restaurante+,+Carmen+%26+Francisco+-/@38.0220298,-1.1353673,17z/data=!3m1!4b1!4m6!3m5!1s0xd6383d6249fad29:0x809b302b1a265502!8m2!3d38.0220298!4d-1.1353673!16s%2Fg%2F1hc2tcccz?authuser=0&hl=es';

export const BUSINESS = {
	name: 'La Tapica',
	fullName: 'La Tapica Restaurante, Carmen & Francisco',
	shortName: 'La Tapica',
	tagline: 'Carmen & Francisco · Churra, Murcia',
	claim: 'La cocina, la calidad y el servicio',
	summary:
		'Restaurante familiar en Churra con 45 años de cocina, calidad y servicio. Comida de mediodía de martes a domingo, con una carta que se sale del tapeo habitual.',
	street: 'C. Pérez Urruti, 7, Bajo',
	borough: 'Churra',
	city: 'Murcia',
	postalCode: '30110',
	region: 'Murcia',
	province: 'Murcia',
	country: 'ES',
	phone: '638 98 41 98',
	phoneHref: 'tel:+34638984198',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=38.0220298%2C-1.1353673&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 38.0220298, lng: -1.1353673 },
	featureId: '0xd6383d6249fad29:0x809b302b1a265502',
	rating: 4.5,
	reviewCount: 418,
	hours: [
		{ days: 'Martes a domingo', hours: '13:00 – 17:00' },
		{ days: 'Lunes', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. El servicio es de mediodía y termina a las 17:00; en festivos puede cambiar, así que conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '13:00',
			closes: '17:00',
		},
	],
	categories: ['Restaurante de cocina contemporánea europea', 'Restaurante'],
	siteUrl: 'https://www.sur-digital.com/la-tapica',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'La Tapica Restaurante, Carmen & Francisco',
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
		icon: 'ri-history-line',
		title: '45 años de casa',
		text: 'La ficha del restaurante resume su trayectoria en «45 años de profesionalidad».',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cocina contemporánea',
		text: 'Cocina europea contemporánea, según la clasificación de Google.',
	},
	{
		icon: 'ri-bookmark-line',
		title: 'Se aconseja reservar',
		text: 'Es la recomendación que el propio restaurante deja en su ficha.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Churra, Murcia',
		text: 'En la calle Pérez Urruti, 7, en la pedanía murciana de Churra.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Contemporánea' },
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '418' },
	{ label: 'Trayectoria', value: '45 años' },
];

export const PLATOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina contemporánea',
		text: 'La ficha de Google clasifica la casa como cocina contemporánea europea.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Guisos de cuchara',
		text: 'Una reseña recuerda sus alubias con bacalao y sepia. El guiso cambia con el día.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Más allá del tapeo',
		text: '«Buena cocina que se sale de los tapeos habituales de caña y ensaladilla», cuenta otra reseña.',
	},
	{
		icon: 'ri-star-line',
		title: 'Calidad y servicio',
		text: 'Los dos pilares que el restaurante destaca junto a la cocina en su presentación.',
	},
	{
		icon: 'ri-history-line',
		title: 'Cuarenta y cinco años',
		text: 'Una casa de barrio con trayectoria larga y cocina de mediodía.',
	},
	{
		icon: 'ri-bookmark-line',
		title: 'Mesa reservada',
		text: 'La ficha aconseja reservar. La web no gestiona reservas: se llaman por teléfono.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Churra, Murcia' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-parking-box-line', title: 'Aparcamiento adaptado' },
	{ icon: 'ri-phone-line', title: 'Teléfono directo' },
];

export const REVIEWS = [
	{
		text: 'Excelente Restaurante Buena calidad, buen servicio, camareros muy atentos.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'El día que estuve había alubiones con bacalao y sepia, muy rico por cierto.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buena cocina que se sale de los tapeos habituales de caña y ensaladilla.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Tapica?',
		a: 'En la calle Pérez Urruti, 7, Bajo, 30110 Churra, Murcia. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de martes a domingo de 13:00 a 17:00 y cierra los lunes. En festivos puede cambiar, así que conviene llamar antes.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha del restaurante aconseja reservar. La web no gestiona reservas: llama al 638 98 41 98 para consultar disponibilidad.',
	},
	{
		q: '¿Qué tipo de cocina hace?',
		a: 'Google la clasifica como cocina contemporánea europea. Sus reseñas mencionan guisos como las alubias con bacalao y sepia, y una cocina que se sale del tapeo habitual.',
	},
	{
		q: '¿Se puede cenar?',
		a: 'El horario publicado en Google termina a las 17:00, así que no se anuncia servicio de cena. Si buscas una hora concreta, confírmalo por teléfono.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y la disponibilidad se consultan en el restaurante o llamando; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas, además de aparcamiento adaptado.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoCalamares, alt: 'Calamares a la andaluza con limón en La Tapica' },
	{ src: IMAGES.fotoTartar, alt: 'Tartar de atún con aguacate y huevas' },
	{ src: IMAGES.fotoSalmorejo, alt: 'Salmorejo con virutas de jamón' },
	{ src: IMAGES.fotoGambas, alt: 'Gambas cocidas sobre hoja de plátano' },
	{ src: IMAGES.fotoVinos, alt: 'Botellas de vino en la pared del comedor' },
	{ src: IMAGES.fotoCroquetas, alt: 'Croquetas caseras con pimiento verde' },
	{ src: IMAGES.fotoCarne, alt: 'Pieza de carne madurada en la vitrina de La Tapica' },
	{ src: IMAGES.fotoComedor, alt: 'Comedor de La Tapica con mesas de madera y pared de botellas' },
	{ src: IMAGES.fotoVitrina, alt: 'Vitrina de marisco y producto fresco de La Tapica' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.fullName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34638984198',
	servesCuisine: ['Contemporánea', 'Europea'],
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
};
