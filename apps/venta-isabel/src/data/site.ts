/**
 * Datos de Venta Isabel (Av. José María Pizarro, 28 · 10613 Navaconcejo, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Venta Isabel.
 *   Feature 0xd3e49c372158b2f:0x1670330e7784514a.
 * - Dirección, teléfono, categoría, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: bio de Instagram del restaurante («especialistas en ternera y
 *   cerdo ibérico, hamburguesas artesanales y comida para llevar») y web propia
 *   (iseeqr.github.io/VentaIsabel).
 * - Platos: reseñas y cartas publicadas en TripAdvisor, Gastroranking y Toppings & Salads.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado. Los platos citados son los que más se repiten en las fuentes públicas.
 */

import fotoApaisada2 from '../assets/fotos/venta-isabel-apaisada-02.jpg';
import fotoApaisada3 from '../assets/fotos/venta-isabel-apaisada-03.jpg';
import fotoApaisada5 from '../assets/fotos/venta-isabel-apaisada-05.jpg';
import fotoApaisada10 from '../assets/fotos/venta-isabel-apaisada-10.jpg';
import fotoVertical1 from '../assets/fotos/venta-isabel-vertical-01.jpg';
import fotoVertical4 from '../assets/fotos/venta-isabel-vertical-04.jpg';
import fotoVertical6 from '../assets/fotos/venta-isabel-vertical-06.jpg';
import fotoVertical7 from '../assets/fotos/venta-isabel-vertical-07.jpg';
import fotoVertical8 from '../assets/fotos/venta-isabel-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/venta-isabel-vertical-09.jpg';
import logo from '../assets/fotos/venta-isabel-logo.svg';

export const IMAGES = {
	fotoApaisada2,
	fotoApaisada3,
	fotoApaisada5,
	fotoApaisada10,
	fotoVertical1,
	fotoVertical4,
	fotoVertical6,
	fotoVertical7,
	fotoVertical8,
	fotoVertical9,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Venta+Isabel/@40.1741168,-5.8396069,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e49c372158b2f:0x1670330e7784514a!8m2!3d40.1741168!4d-5.8396069!16s%2Fg%2F11c1_vpztx?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Venta Isabel',
	shortName: 'Venta Isabel',
	tagline: 'Carnes a la brasa en el Valle del Jerte',
	claim: 'Ternera, cerdo ibérico y cocina extremeña en Navaconcejo',
	summary:
		'Bar restaurante familiar en Navaconcejo (Cáceres), en el Valle del Jerte: especialistas en ternera y cerdo ibérico, hamburguesas artesanales, cocina extremeña, postres caseros, terraza y tienda de productos de la zona.',
	street: 'Av. José María Pizarro, 28',
	city: 'Navaconcejo',
	postalCode: '10613',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Valle del Jerte',
	phone: '643 33 50 63',
	phoneHref: 'tel:+34643335063',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=40.1741168%2C-5.8396069&t=&z=16&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 40.1741168, lng: -5.8396069 },
	featureId: '0xd3e49c372158b2f:0x1670330e7784514a',
	placeId: 'ChIJL4sVcsNJPg0RSlGEdw4zcBY',
	plusCode: '55F6+J5',
	rating: 4.7,
	reviewCount: 1904,
	hours: [
		{ days: 'Lunes', hours: '13:00 – 16:00 · 20:00 – 22:30' },
		{ days: 'Martes', hours: '13:00 – 16:00 · 20:00 – 22:30' },
		{ days: 'Miércoles', hours: 'Cerrado' },
		{ days: 'Jueves', hours: '13:00 – 16:00 · 20:00 – 22:30' },
		{ days: 'Viernes', hours: '13:00 – 16:00 · 20:00 – 22:30' },
		{ days: 'Sábado', hours: '13:00 – 16:00 · 20:00 – 22:30' },
		{ days: 'Domingo', hours: '13:00 – 16:00 · 20:00 – 22:30' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026: comidas de 13:00 a 16:00 y cenas de 20:00 a 22:30, de jueves a martes. Cierra los miércoles. En temporada de cerezo en flor, verano y puentes conviene llamar antes.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '13:00',
			closes: '16:00',
		},
		{
			days: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '20:00',
			closes: '22:30',
		},
	],
	categories: ['Restaurante', 'Cocina extremeña', 'Carnes a la brasa', 'Hamburguesas'],
	social: {
		instagram: 'https://www.instagram.com/bar_venta_isabel/',
	},
	siteUrl: 'https://venta-isabel.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Venta Isabel',
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
		icon: 'ri-fire-line',
		title: 'Ternera y cerdo ibérico',
		text: 'Chuletón, solomillo, pluma y presa a la parrilla, con patatas caseras y pimientos.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Hamburguesas artesanales',
		text: 'Pan casero y carne de la casa, también en versión vegana de soja.',
	},
	{
		icon: 'ri-cake-3-line',
		title: 'Postres caseros',
		text: 'Tarta de queso con cerezas, perrunillas con chocolate y serradura.',
	},
	{
		icon: 'ri-store-2-line',
		title: 'Terraza y tienda',
		text: 'Comer fuera con el perro y llevarse embutidos, quesos y vinos de Extremadura.',
	},
];

export const CASA_FACTS = [
	{ label: 'Valoración', value: '4,7 ★' },
	{ label: 'Reseñas', value: '1.904' },
	{ label: 'La cocina', value: 'Extremeña' },
	{ label: 'Especialidad', value: 'Carnes' },
];

export const CARTA = [
	{
		icon: 'ri-restaurant-line',
		kicker: 'Para empezar',
		title: 'Alcachofas confitadas con foie',
		text: 'Alcachofas confitadas con mousse de foie, uno de los entrantes que más se repiten en las reseñas.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'Entrantes',
		title: 'Revuelto de salmón y nueces',
		text: 'Revueltos de huevo con salmón y nueces, tabla de quesos extremeños y ensaladilla de encurtidos con salmón.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'La parrilla',
		title: 'Chuletón de ternera',
		text: 'La carne es la protagonista: chuletón, entrecot, lagarto y solomillo, con guarnición de patatas y pimientos.',
	},
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'Ibéricos',
		title: 'Solomillo y pluma ibérica',
		text: 'Presa, pluma y solomillo de cerdo ibérico, también con salsa roquefort para quien busca algo distinto.',
	},
	{
		icon: 'ri-bread-line',
		kicker: 'Hamburguesas',
		title: 'Hamburguesa extremeña',
		text: 'Hamburguesas artesanales de ternera, pollo o rulo de cabra, con pan casero y patatas de la casa.',
	},
	{
		icon: 'ri-leaf-line',
		kicker: 'Para compartir',
		title: 'Parrillada de verduras',
		text: 'Verduras frescas a la parrilla y opciones vegetarianas, además de una hamburguesa vegana de soja.',
	},
	{
		icon: 'ri-cake-3-line',
		kicker: 'Postres',
		title: 'Tarta de queso con cerezas',
		text: 'Tarta de queso con mermelada de cerezas, perrunillas con chocolate, serradura y mousse de limón.',
	},
	{
		icon: 'ri-shopping-bag-3-line',
		kicker: 'Para llevar',
		title: 'Tienda de productos extremeños',
		text: 'Embutidos de bellota, quesos de la zona, mermeladas artesanales, licores y vinos para llevarse a casa.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-fire-line', title: 'Carnes' },
	{ icon: 'ri-sun-line', title: 'Terraza' },
	{ icon: 'ri-shopping-bag-3-line', title: 'Para llevar' },
	{ icon: 'ri-parking-box-line', title: 'Aparcamiento' },
];

export const REVIEWS = [
	{
		text: 'La comida genial, la carne estaba muy buena, tierna y jugosa, también los entrantes muy ricos.',
		rating: 5,
		author: 'Reseña en TripAdvisor',
		source: 'TripAdvisor',
	},
	{
		text: 'Comida casera riquísima, con productos frescos y trato de 10, cercano y profesional desde el momento de reservar.',
		rating: 5,
		author: 'Reseña en TripAdvisor',
		source: 'TripAdvisor',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Venta Isabel?',
		a: 'En la avenida José María Pizarro, 28, 10613 Navaconcejo (Cáceres), en la entrada del pueblo y junto al río Jerte. Puedes abrir la ruta directamente en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre de 13:00 a 16:00 y de 20:00 a 22:30 de jueves a martes, y cierra los miércoles. En temporada de cerezo en flor, verano y puentes conviene llamar antes.',
	},
	{
		q: '¿Cómo se reserva una mesa?',
		a: 'Las reservas se gestionan por teléfono, en el 643 33 50 63. La web no tramita reservas. Para grupos y fines de semana es recomendable llamar con antelación.',
	},
	{
		q: '¿Cuál es la especialidad de la casa?',
		a: 'La carne: ternera y cerdo ibérico. Chuletón, entrecot, lagarto, solomillo, presa y pluma, a la parrilla y con guarnición de patatas caseras y pimientos. También las hamburguesas artesanales.',
	},
	{
		q: '¿Hay opciones vegetarianas o veganas?',
		a: 'Sí. La carta incluye parrillada de verduras, ensaladas y una hamburguesa vegana de soja, además de entrantes como las alcachofas. Avisa al personal si necesitas alguna adaptación.',
	},
	{
		q: '¿Se puede ir con perro?',
		a: 'Sí, los perros son bienvenidos en la terraza. El comedor interior queda para quien prefiera comer a cubierto.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'Su ficha de Google indica acceso para sillas de ruedas, aparcamiento adaptado, aseo accesible y asientos adaptados. Si necesitas alguna condición concreta en la mesa, avisa al reservar.',
	},
	{
		q: '¿Hay comida para llevar y tienda?',
		a: 'Sí. La casa prepara comida para llevar y tiene una pequeña tienda con embutidos de bellota, quesos extremeños, mermeladas artesanales, licores y vinos de la zona.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoVertical6,
		alt: 'Venta Isabel, restaurante de Navaconcejo en el Valle del Jerte',
	},
	{ src: IMAGES.fotoApaisada3, alt: 'Interior del restaurante Venta Isabel' },
	{ src: IMAGES.fotoVertical4, alt: 'Detalle de la mesa en Venta Isabel' },
	{ src: IMAGES.fotoApaisada2, alt: 'Comedor y ambiente de Venta Isabel' },
	{ src: IMAGES.fotoVertical9, alt: 'Rincón del restaurante en Navaconcejo' },
	{ src: IMAGES.fotoApaisada5, alt: 'Platos de la cocina de Venta Isabel' },
	{ src: IMAGES.fotoVertical7, alt: 'Terraza y entorno de Venta Isabel' },
	{ src: IMAGES.fotoVertical8, alt: 'Fotografía de la ficha de Google Maps de Venta Isabel' },
	{ src: IMAGES.fotoVertical1, alt: 'Venta Isabel, en la avenida José María Pizarro' },
	{ src: IMAGES.fotoApaisada10, alt: 'Otra imagen de Venta Isabel en Navaconcejo' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: 'Bar Venta Isabel',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34643335063',
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina extremeña', 'Carnes a la brasa', 'Cocina casera', 'Hamburguesas'],
	areaServed: [
		{ '@type': 'City', name: 'Navaconcejo' },
		{ '@type': 'AdministrativeArea', name: 'Valle del Jerte' },
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
	sameAs: [BUSINESS.social.instagram],
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
			name: 'Terraza',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Admite perros en la terraza',
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
