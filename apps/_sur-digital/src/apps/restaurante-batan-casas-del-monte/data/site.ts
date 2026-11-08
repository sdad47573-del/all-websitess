/**
 * Datos de Restaurante Batán en Casas del Monte (Av. Ambroz, 10 · 10730 Casas del Monte,
 * Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Batán en Casas del Monte.
 *   Feature 0xd3e46e76abcf693:0xed9481b7c35ffa2a.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Descripción y carácter de la casa: texto del titular en su ficha de Google y guía
 *   «El Batán» del Valle del Ambroz (restaurante y bar-cafetería, terraza junto a la
 *   garganta, comedor y bar para invierno).
 * - Platos: reseñas destacadas de Google y de DondeComí, y cartas publicadas en directorios
 *   gastronómicos (TripAdvisor, DondeComí).
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado. Los platos citados son los que más se repiten en las fuentes públicas.
 */

import fotoPortada from '../assets/fotos/restaurante-batan-casas-del-monte-apaisada-01.jpg';
import fotoVertical2 from '../assets/fotos/restaurante-batan-casas-del-monte-vertical-02.jpg';
import fotoVertical3 from '../assets/fotos/restaurante-batan-casas-del-monte-vertical-03.jpg';
import fotoVertical4 from '../assets/fotos/restaurante-batan-casas-del-monte-vertical-04.jpg';
import fotoApaisada5 from '../assets/fotos/restaurante-batan-casas-del-monte-apaisada-05.jpg';
import fotoPanoramica6 from '../assets/fotos/restaurante-batan-casas-del-monte-panoramica-06.jpg';
import fotoVertical7 from '../assets/fotos/restaurante-batan-casas-del-monte-vertical-07.jpg';
import fotoApaisada8 from '../assets/fotos/restaurante-batan-casas-del-monte-apaisada-08.jpg';
import fotoPanoramica9 from '../assets/fotos/restaurante-batan-casas-del-monte-panoramica-09.jpg';
import fotoVertical10 from '../assets/fotos/restaurante-batan-casas-del-monte-vertical-10.jpg';
import logo from '../assets/fotos/restaurante-batan-casas-del-monte-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoVertical2,
	fotoVertical3,
	fotoVertical4,
	fotoApaisada5,
	fotoPanoramica6,
	fotoVertical7,
	fotoApaisada8,
	fotoPanoramica9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Bat%C3%A1n+en+Casas+del+Monte/@40.2030471,-5.9610776,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e46e76abcf693:0xed9481b7c35ffa2a!8m2!3d40.2030471!4d-5.9610776!16s%2Fg%2F11dzt20781?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante Batán en Casas del Monte',
	shortName: 'El Batán',
	tagline: 'Cocina casera en el Valle del Ambroz',
	claim: 'Junto a la garganta, en Casas del Monte',
	summary:
		'Restaurante y bar-cafetería en el centro de Casas del Monte, en el Valle del Ambroz: comida casera de la tierra, arroces, asados y una terraza con chill-out junto a la garganta y la piscina natural.',
	street: 'Av. Ambroz, 10',
	district: 'Casas del Monte',
	borough: 'Casas del Monte',
	city: 'Casas del Monte',
	postalCode: '10730',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Junto a la garganta y la piscina natural',
	phone: '722 76 15 80',
	phoneHref: 'tel:+34722761580',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=40.2030471%2C-5.9610776&t=&z=15&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 40.2030471, lng: -5.9610776 },
	featureId: '0xd3e46e76abcf693:0xed9481b7c35ffa2a',
	placeId: 'ChIJk_a8audGPg0RKvpfw7eBlO0',
	plusCode: '623Q+6H',
	rating: 4.7,
	reviewCount: 287,
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes', hours: 'Cerrado' },
		{ days: 'Miércoles', hours: 'Cerrado' },
		{ days: 'Jueves', hours: 'Cerrado' },
		{ days: 'Viernes', hours: '12:00 – 24:00' },
		{ days: 'Sábado', hours: '12:00 – 24:00' },
		{ days: 'Domingo', hours: '12:00 – 24:00' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google en octubre de 2026: viernes, sábado y domingo de 12:00 a 24:00, y de lunes a jueves cerrado. La terraza y la piscina natural funcionan según temporada; conviene llamar antes de venir.',
	openingHours: [{ days: ['Friday', 'Saturday', 'Sunday'], opens: '12:00', closes: '24:00' }],
	categories: ['Restaurante', 'Bar-cafetería', 'Cocina casera', 'Asados', 'Arroces'],
	siteUrl: 'https://www.sur-digital.com/restaurante-batan-casas-del-monte',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante Batán en Casas del Monte',
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
		icon: 'ri-drop-line',
		title: 'Junto a la garganta',
		text: 'Terraza exterior con chill-out junto al agua, en el centro de Casas del Monte.',
	},
	{
		icon: 'ri-water-flash-line',
		title: 'Piscina natural',
		text: 'Una ubicación ideal en verano, al lado de la piscina natural del pueblo.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cocina casera',
		text: 'Comida de la tierra cocinada con cariño: migas, arroces, carnes y raciones.',
	},
	{
		icon: 'ri-time-line',
		title: 'Viernes a domingo',
		text: 'De 12:00 a 24:00. De lunes a jueves permanece cerrado.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Casera' },
	{ label: 'Especialidad', value: 'Asados' },
	{ label: 'Valoración', value: '4,7 ★' },
	{ label: 'Reseñas', value: '287' },
];

export const CARTA = [
	{
		icon: 'ri-bread-line',
		kicker: 'Para compartir',
		title: 'Entrantes de la casa',
		text: 'Torta del Casar, ensalada de tomate, patatas alioli y bravas: lo que suele abrir la mesa en las reseñas.',
	},
	{
		icon: 'ri-restaurant-line',
		kicker: 'De cuchara',
		title: 'Migas extremeñas',
		text: 'Las migas de la tierra, uno de los entrantes que más se repite en las reseñas del restaurante.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'Arroces',
		title: 'Paella y arroces',
		text: 'Arroces y paellas para compartir, servidos en cazuela. En las mesas grandes suelen pedirse dos.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'A la parrilla',
		title: 'Secreto, pluma y abanico ibérico',
		text: 'Carnes ibéricas a la parrilla, los platos que más destacan las reseñas recientes por su punto de cocción.',
	},
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'Del horno',
		title: 'Cachopo',
		text: 'Cachopo empanado y relleno, una de las propuestas de la carta que aparece en las reseñas de la casa.',
	},
	{
		icon: 'ri-knife-line',
		kicker: 'Barbacoa',
		title: 'Costillas a la barbacoa',
		text: 'Costillas de cerdo a la barbacoa, para pedir al centro y comer sin prisa en la terraza.',
	},
	{
		icon: 'ri-bread-line',
		kicker: 'De la plancha',
		title: 'Hamburguesa clásica',
		text: 'La hamburguesa de la casa, otra de las propuestas que las reseñas recientes destacan por su ejecución.',
	},
	{
		icon: 'ri-cake-3-line',
		kicker: 'Postres',
		title: 'Volcán de queso',
		text: 'El postre que más llamó la atención en las reseñas: un volcán con el queso como protagonista.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-drop-line', title: 'Terraza junto a la garganta' },
	{ icon: 'ri-water-flash-line', title: 'Piscina natural' },
	{ icon: 'ri-sun-line', title: 'Chill-out de verano' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
];

export const REVIEWS = [
	{
		text: 'Muy buena comida, con buena compañía y una camarera muy atenta y simpática.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Paella y entrantes como migas, bravas.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'El secreto, la pluma, el abanico ibérico y una sorprendentemente bien ejecutada hamburguesa brillaron por su calidad, punto de cocción y presentación.',
		rating: 4,
		author: 'Reseña en DondeComí',
		source: 'DondeComí',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Batán?',
		a: 'En Avenida Ambroz, 10, 10730 Casas del Monte (Cáceres), en el centro del pueblo y junto a la garganta, en pleno Valle del Ambroz. Puedes abrir la ruta directamente en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre viernes, sábado y domingo de 12:00 a 24:00 y permanece cerrado de lunes a jueves. La terraza funciona según temporada, así que conviene confirmar por teléfono antes de hacer el viaje.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'Las reservas se gestionan por teléfono, en el 722 76 15 80. La web no tramita reservas. Los fines de semana y en temporada alta es recomendable llamar con antelación.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina casera de la tierra: migas extremeñas, paellas y arroces, secreto, pluma y abanico ibérico a la parrilla, cachopo, costillas a la barbacoa, hamburguesas y entrantes para compartir como la Torta del Casar o las patatas bravas. De postre, el volcán de queso.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. El restaurante tiene una terraza exterior con chill-out junto a la garganta para el verano, y un comedor y un bar para la época de invierno. La terraza puede abrirse solo en temporada, así que confirma al reservar.',
	},
	{
		q: '¿Hay piscina natural?',
		a: 'El restaurante está junto a la garganta y la piscina natural del pueblo, un espacio público de Casas del Monte, no una instalación privada del local. En verano es una zona muy concurrida, por lo que conviene reservar mesa con tiempo.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta en la mesa, avisa al reservar por teléfono.',
	},
	{
		q: '¿Se puede ir solo a tomar algo?',
		a: 'Sí. Funciona también como bar-cafetería, con carta y raciones, así que puedes parar a tomar algo sin comer el menú completo.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoPortada,
		alt: 'Restaurante Batán en Casas del Monte, fachada y entorno',
	},
	{ src: IMAGES.fotoVertical2, alt: 'Interior del restaurante Batán en Casas del Monte' },
	{ src: IMAGES.fotoVertical3, alt: 'Comedor de El Batán, en el Valle del Ambroz' },
	{ src: IMAGES.fotoVertical4, alt: 'Detalle de la mesa en Restaurante Batán' },
	{ src: IMAGES.fotoApaisada5, alt: 'Ambiente del restaurante Batán en Casas del Monte' },
	{ src: IMAGES.fotoPanoramica6, alt: 'Terraza de El Batán junto a la garganta' },
	{ src: IMAGES.fotoVertical7, alt: 'Rincón del restaurante Batán, en Cáceres' },
	{ src: IMAGES.fotoApaisada8, alt: 'Fotografía de la ficha de Google Maps de El Batán' },
	{ src: IMAGES.fotoPanoramica9, alt: 'Vistas del entorno de Casas del Monte desde El Batán' },
	{ src: IMAGES.fotoVertical10, alt: 'Otra imagen de Restaurante Batán en Casas del Monte' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34722761580',
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina extremeña', 'Cocina casera', 'Asados', 'Arroces', 'Carnes a la parrilla'],
	areaServed: [
		{ '@type': 'City', name: 'Casas del Monte' },
		{ '@type': 'TouristAttraction', name: 'Valle del Ambroz' },
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
	sameAs: [],
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
