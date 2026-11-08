/**
 * Datos de Restaurante El Gato (C. Pez Espada, 9 · 11550 Chipiona, Cádiz).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante El Gato, Chipiona.
 *   Feature 0xd0e75a44df04667:0xc30b9cc37e6e22ff.
 * - Dirección, teléfono, categorías, valoración, horario, accesibilidad y reseñas:
 *   ficha pública de Google (octubre de 2026).
 * - Texto de la casa: descripción del propio titular en su ficha de Google.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * La web no publica carta ni precios: la ficha no los ofrece.
 */

import fotoPortada from '../assets/fotos/restaurante-el-gato-chipiona-apaisada-01.jpg';
import fotoApaisada from '../assets/fotos/restaurante-el-gato-chipiona-apaisada-07.jpg';
import fotoCuadrada from '../assets/fotos/restaurante-el-gato-chipiona-cuadrada-03.jpg';
import fotoBarra from '../assets/fotos/restaurante-el-gato-chipiona-vertical-02.jpg';
import fotoInterior from '../assets/fotos/restaurante-el-gato-chipiona-vertical-04.jpg';
import fotoMesa from '../assets/fotos/restaurante-el-gato-chipiona-vertical-05.jpg';
import fotoMuseo from '../assets/fotos/restaurante-el-gato-chipiona-vertical-06.jpg';
import fotoDetalle1 from '../assets/fotos/restaurante-el-gato-chipiona-vertical-08.jpg';
import fotoDetalle2 from '../assets/fotos/restaurante-el-gato-chipiona-vertical-09.jpg';
import fotoDetalle3 from '../assets/fotos/restaurante-el-gato-chipiona-vertical-10.jpg';
import logo from '../assets/fotos/restaurante-el-gato-chipiona-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoApaisada,
	fotoCuadrada,
	fotoBarra,
	fotoInterior,
	fotoMesa,
	fotoMuseo,
	fotoDetalle1,
	fotoDetalle2,
	fotoDetalle3,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+El+Gato/@36.7300864,-6.4362973,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e75a44df04667:0xc30b9cc37e6e22ff!8m2!3d36.7300864!4d-6.4362973!16s%2Fg%2F1tks7kl8?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante El Gato',
	shortName: 'El Gato',
	tagline: 'Restaurante, bar y cafetería en Chipiona',
	claim: 'Medio siglo de desayunos, guisos y vinos de barril',
	summary:
		'Restaurante, bar y cafetería en la calle Pez Espada de Chipiona. Desayunos de cachito, guisos de la zona, pescados y vino de barril, con más de medio siglo de historia y un museo fotográfico propio.',
	street: 'C. Pez Espada, 9',
	district: 'Chipiona',
	borough: 'Chipiona',
	city: 'Chipiona',
	postalCode: '11550',
	region: 'Cádiz',
	country: 'ES',
	phone: '664 87 71 25',
	phoneHref: 'tel:+34664877125',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7300864%2C-6.4362973&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7300864, lng: -6.4362973 },
	featureId: '0xd0e75a44df04667:0xc30b9cc37e6e22ff',
	placeId: 'ChIJZ0bwTaR1Dg0R_yJufsOcC8M',
	rating: 4,
	reviewCount: 920,
	hours: [
		{ days: 'Lunes a domingo', hours: '9:00 – 17:00' },
		{ days: 'Noches', hours: '20:30 – 24:00' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google: abre todos los días, con servicio de mediodía y de noche. En festivos puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '09:00', closes: '17:00' },
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '20:30', closes: '24:00' },
	],
	categories: ['Restaurante', 'Bar', 'Cafetería'],
	siteUrl: 'https://www.sur-digital.com/restaurante-el-gato-chipiona',
};

export const LEGAL = {
	razonSocial: 'Restaurante El Gato',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La barra', href: '#barra' },
	{ label: 'El museo', href: '#museo' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/aviso-legal' }];

export const HIGHLIGHTS = [
	{
		icon: 'ri-time-line',
		title: 'Abierto todos los días',
		text: 'De 9:00 a 17:00 y de 20:30 a 24:00, también los domingos.',
	},
	{
		icon: 'ri-bread-line',
		title: 'Desayunos de cachito',
		text: 'Tostadas con cachitos de jamón y chacinas, recién hechas.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Vino de barril',
		text: 'El castoras fresquito, servido desde la barra.',
	},
	{
		icon: 'ri-camera-lens-line',
		title: 'Museo fotográfico',
		text: 'Un museo de interés fotográfico único en Chipiona.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-bread-line',
		title: 'Desayunos',
		text: 'Tostada de cachito con jamón, chicharrón, caña de lomo, chorizo o butifarra. También con queso.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Guisos y pescados',
		text: 'Cocina de la zona y pescado. Las reseñas mencionan el atún encebollado y el revuelto de gambas.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Vinos de barril',
		text: 'Vino fresco de barril, con el castoras como protagonista de la casa.',
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-history-line',
		title: 'Más de medio siglo',
		text: 'El propio local presenta su historia como más de cincuenta años de calidad y precio.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'En Chipiona',
		text: 'En la calle Pez Espada, 9, a un paso del centro.',
	},
	{
		icon: 'ri-wheelchair-line',
		title: 'Acceso adaptado',
		text: 'Entrada, asientos y aseo accesibles para sillas de ruedas.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Trato directo',
		text: 'Sin reservas por internet: se llama al 664 87 71 25 y se habla con el local.',
	},
];

export const REVIEWS = [
	{
		text: 'Terraza para desayunar churros y tostadas de cachitos de jamón. Ideal.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Pedimos atún encebollado, tomate y revuelto de gambas.',
		rating: 4,
		author: 'Reseña en Google',
	},
];

export const MUSEO = {
	kicker: 'Único en Chipiona',
	title: 'Un museo entre mesas',
	text: 'El Gato no es solo una barra y un comedor. El local cuenta con un museo de gran interés fotográfico que su propio titular describe como único en Chipiona. Una razón más para sentarse con calma y mirar alrededor.',
	note: 'Pregunta en el restaurante por el museo y cómo visitarlo.',
};

export const FAQ = [
	{
		q: '¿Dónde está Restaurante El Gato?',
		a: 'En la calle Pez Espada, 9, 11550 Chipiona (Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 9:00 a 17:00 y de 20:30 a 24:00, según su ficha de Google. En festivos conviene llamar antes.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La web no gestiona reservas. Llama al 664 87 71 25 para preguntar por mesa, por el menú del día o por el museo.',
	},
	{
		q: '¿Qué se puede desayunar?',
		a: 'El local describe tostadas de cachito con cachitos de jamón y chacinas como chicharrón, caña de lomo, chorizo o butifarra, con opción de añadir queso.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y el menú del día se consultan en el local o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, asientos y aseo adaptados para sillas de ruedas.',
	},
];

export const FEATURES = [
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
	{ icon: 'ri-wheelchair-line', label: 'Acceso adaptado' },
	{ icon: 'ri-time-line', label: 'Abierto todos los días' },
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Restaurante El Gato en Chipiona' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante El Gato' },
	{ src: IMAGES.fotoBarra, alt: 'La barra de El Gato' },
	{ src: IMAGES.fotoMesa, alt: 'Mesa de Restaurante El Gato' },
	{ src: IMAGES.fotoApaisada, alt: 'Ambiente en Restaurante El Gato' },
	{ src: IMAGES.fotoMuseo, alt: 'Rincón del museo fotográfico de El Gato' },
	{ src: IMAGES.fotoDetalle1, alt: 'Detalle del local de El Gato' },
	{ src: IMAGES.fotoDetalle2, alt: 'Restaurante El Gato por dentro' },
	{ src: IMAGES.fotoDetalle3, alt: 'Rincón de Restaurante El Gato' },
	{ src: IMAGES.fotoCuadrada, alt: 'Bar restaurante El Gato, Chipiona' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34664877125',
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
		{ '@type': 'LocationFeatureSpecification', name: 'Aseo adaptado', value: true },
	],
};
