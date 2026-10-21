/**
 * Datos de Restaurante Casa Laura (Av. de San Javier, 22A · 30570 Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Casa Laura.
 *   Feature 0xd6382a906281805:0x76fb46dd33613703.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Especialidades, menú del día y comida para llevar: resumen público de las
 *   reseñas del restaurante y página de opiniones gastronómicas.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * La carta y los precios no están publicados: no se inventan platos ni importes.
 */

import fotoFachada from '../assets/fotos/casa-laura-apaisada-01.jpg';
import fotoInterior from '../assets/fotos/casa-laura-apaisada-04.jpg';
import fotoMesa from '../assets/fotos/casa-laura-apaisada-06.jpg';
import fotoPulpo from '../assets/fotos/casa-laura-cuadrada-08.jpg';
import fotoGambas from '../assets/fotos/casa-laura-panoramica-02.jpg';
import fotoPostre from '../assets/fotos/casa-laura-panoramica-05.jpg';
import fotoMigas from '../assets/fotos/casa-laura-panoramica-09.jpg';
import fotoCafe from '../assets/fotos/casa-laura-vertical-03.jpg';
import fotoBrasa from '../assets/fotos/casa-laura-vertical-07.jpg';
import fotoTorrijas from '../assets/fotos/casa-laura-vertical-10.jpg';
import logo from '../assets/fotos/casa-laura-logo.svg';

export const IMAGES = {
	fotoBrasa,
	fotoCafe,
	fotoFachada,
	fotoGambas,
	fotoInterior,
	fotoMesa,
	fotoMigas,
	fotoPostre,
	fotoPulpo,
	fotoTorrijas,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Casa+Laura/@37.9764484,-1.0651796,17z/data=!4m6!3m5!1s0xd6382a906281805:0x76fb46dd33613703!8m2!3d37.9764484!4d-1.0651796!16s%2Fg%2F11b72f6j0g?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Casa Laura',
	fullName: 'Restaurante Casa Laura',
	shortName: 'Casa Laura',
	tagline: 'Café, bar y restaurante · Beniaján, Murcia',
	claim: 'La mesa de todos los días',
	summary:
		'Café, bar y restaurante de cocina española en Beniaján. Desayunos desde las 8:00, menú del día, tapas, brasa y comida para llevar en una casa de barrio con mesas para todos los días.',
	street: 'Av. de San Javier, 22A',
	borough: 'Beniaján',
	city: 'Murcia',
	postalCode: '30570',
	region: 'Murcia',
	province: 'Murcia',
	country: 'ES',
	phone: '868 08 26 55',
	phoneHref: 'tel:+34868082655',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.9764484%2C-1.0651796&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 37.9764484, lng: -1.0651796 },
	featureId: '0xd6382a906281805:0x76fb46dd33613703',
	placeId: 'ChIJBRgoBqmCYw0RAzdhM91G-3Y',
	rating: 4.5,
	reviewCount: 560,
	hours: [
		{ days: 'Lunes', hours: '8:00 – 17:00' },
		{ days: 'Martes a viernes', hours: '8:00 – 23:00' },
		{ days: 'Sábado', hours: '8:30 – 23:00' },
		{ days: 'Domingo', hours: '8:00 – 17:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. Abre desde las 8:00 y no cierra a mediodía; los lunes y domingos termina a las 17:00. En festivos puede cambiar, así que conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Monday'], opens: '08:00', closes: '17:00' },
		{ days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '23:00' },
		{ days: ['Saturday'], opens: '08:30', closes: '23:00' },
		{ days: ['Sunday'], opens: '08:00', closes: '17:00' },
	],
	categories: ['Restaurante de cocina española', 'Café', 'Bar'],
	siteUrl: 'https://casa-laura.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante Casa Laura',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La mesa', href: '#cocina' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-cup-line',
		title: 'Desayunos desde las 8:00',
		text: 'Café y tostada para empezar el día, también los fines de semana.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Menú del día',
		text: 'Comida casera de mediodía, con la brasa y la huerta como base.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Brasa y tapas',
		text: 'Pollo, cordero y chuletas, además de raciones para picar en la barra.',
	},
	{
		icon: 'ri-shopping-bag-3-line',
		title: 'Para llevar',
		text: 'Pollos asados, cordero, croquetas y platos combinados para casa.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Española' },
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '560' },
	{ label: 'Zona', value: 'Beniaján' },
];

export const PLATOS = [
	{
		icon: 'ri-anchor-line',
		title: 'Pulpo roquero',
		text: 'El plato que más se repite en las reseñas: pulpo a la brasa con patata y pimentón.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Carne a la brasa',
		text: 'Pollo, cordero y chuletas a la parrilla, el otro gran motivo para sentarse a la mesa.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Arroz con conejo y caracoles',
		text: 'Receta de la huerta, para compartir y para los domingos de mantel largo.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Menú del día',
		text: 'Cocina casera a mediodía, con raciones generosas según las opiniones publicadas.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Tapas y marineras',
		text: 'Croquetas caseras, marineras, zamburiñas y caballitos para picar en la barra.',
	},
	{
		icon: 'ri-cake-3-line',
		title: 'Postres caseros',
		text: 'Tartas y torrijas de la casa; también tartas por encargo para celebraciones.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-roadster-line', title: 'En la Av. de San Javier' },
	{ icon: 'ri-restaurant-2-line', title: 'Menú del día' },
	{ icon: 'ri-shopping-bag-3-line', title: 'Comida para llevar' },
	{ icon: 'ri-calendar-check-line', title: 'Reservas por teléfono' },
];

export const REVIEWS = [
	{
		title: 'El pulpo roquero',
		text: 'Es el plato que más se repite cuando se habla de Casa Laura: pulpo a la brasa, patata y pimentón. Muchas reseñas lo señalan como uno de los mejores de la zona.',
		author: 'Resumen de reseñas en Google',
	},
	{
		title: 'La brasa y el pollo',
		text: 'Pollo, cordero y chuletas salen de la parrilla. La carne a la brasa aparece una y otra vez entre los motivos para volver.',
		author: 'Resumen de reseñas en Google',
	},
	{
		title: 'Comida casera y trato cercano',
		text: 'Menú del día, raciones abundantes y un servicio familiar. El restaurante también prepara platos para llevar y tartas por encargo.',
		author: 'Resumen de reseñas en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Casa Laura?',
		a: 'En Av. de San Javier, 22A, 30570 Murcia, en Beniaján. Puedes abrir la ruta exacta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre a las 8:00 los lunes, martes, miércoles, jueves, viernes y domingos, y a las 8:30 los sábados. Cierra a las 17:00 los lunes y domingos, y a las 23:00 de martes a sábado.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. La casa abre a las 8:00 (8:30 el sábado) y sirve desayunos, café y tapas durante la mañana.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí, es uno de los servicios habituales de la casa. La composición y el precio se consultan en el local o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿Se puede comer para llevar?',
		a: 'Según la información pública del restaurante, sí: pollos asados, cordero, croquetas y platos combinados. Llama al 868 08 26 55 para confirmar disponibilidad y recogida.',
	},
	{
		q: '¿Se puede reservar o celebrar una comida de grupo?',
		a: 'La web no gestiona reservas. Llama al 868 08 26 55 para consultar mesa, grupos o una celebración.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. No consta aparcamiento adaptado.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Fachada de Restaurante Casa Laura en la Av. de San Javier' },
	{ src: IMAGES.fotoPulpo, alt: 'Pulpo roquero a la brasa en Restaurante Casa Laura' },
	{ src: IMAGES.fotoInterior, alt: 'Interior del restaurante con mesas y sillas de madera' },
	{ src: IMAGES.fotoMesa, alt: 'Mesa con platos y bebidas en el interior de Casa Laura' },
	{ src: IMAGES.fotoBrasa, alt: 'Carne y pollo a la brasa recién hechos' },
	{ src: IMAGES.fotoMigas, alt: 'Migas con tropezones servidas en Casa Laura' },
	{ src: IMAGES.fotoGambas, alt: 'Gambas y ensalada en la mesa' },
	{ src: IMAGES.fotoTorrijas, alt: 'Torrijas caseras con nata' },
	{ src: IMAGES.fotoPostre, alt: 'Postre casero de la casa' },
	{ src: IMAGES.fotoCafe, alt: 'Café con leche servido en Casa Laura' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.fullName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34868082655',
	priceRange: '€€',
	servesCuisine: ['Española', 'Murciana'],
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
	acceptsReservations: true,
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
