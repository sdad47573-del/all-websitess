/**
 * Datos de Bar El Teide (C. Santiago, 26 · 10666 Santibáñez el Bajo, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: El Teide.
 *   Feature 0xd3e6d7163f0a155:0x6225900f7bafec14.
 * - Dirección, teléfono, categorías, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: reseñas de Google y prensa local (Universo Viajero, 2013):
 *   bar desde 1967, tapeo de día, comidas por encargo y copas de noche.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado. Se describen las familias de la carta, no platos concretos.
 */

import fotoApaisada1 from '../assets/fotos/bar-el-teide-apaisada-01.jpg';
import fotoApaisada2 from '../assets/fotos/bar-el-teide-apaisada-02.jpg';
import fotoPanoramica3 from '../assets/fotos/bar-el-teide-panoramica-03.jpg';
import fotoApaisada4 from '../assets/fotos/bar-el-teide-apaisada-04.jpg';
import fotoApaisada5 from '../assets/fotos/bar-el-teide-apaisada-05.jpg';
import fotoVertical6 from '../assets/fotos/bar-el-teide-vertical-06.jpg';
import fotoPanoramica7 from '../assets/fotos/bar-el-teide-panoramica-07.jpg';
import fotoVertical8 from '../assets/fotos/bar-el-teide-vertical-08.jpg';
import fotoApaisada9 from '../assets/fotos/bar-el-teide-apaisada-09.jpg';
import fotoApaisada10 from '../assets/fotos/bar-el-teide-apaisada-10.jpg';
import logo from '../assets/fotos/bar-el-teide-logo.svg';

export const IMAGES = {
	fotoApaisada1,
	fotoApaisada2,
	fotoPanoramica3,
	fotoApaisada4,
	fotoApaisada5,
	fotoVertical6,
	fotoPanoramica7,
	fotoVertical8,
	fotoApaisada9,
	fotoApaisada10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/El+Teide/@40.17614,-6.2217104,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e6d7163f0a155:0x6225900f7bafec14!8m2!3d40.17614!4d-6.2217104!16s%2Fg%2F12qh5r7k4?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Bar El Teide',
	shortName: 'El Teide',
	tagline: 'Tapas, desayunos y copas en Santibáñez el Bajo',
	claim: 'En la calle Santiago desde 1967',
	summary:
		'Bar de tapas y cafetería en Santibáñez el Bajo (Cáceres): desayunos, pinchos y raciones, comidas por encargo, terraza y copas hasta la madrugada. Abre de martes a domingo.',
	street: 'C. Santiago, 26',
	city: 'Santibáñez el Bajo',
	postalCode: '10666',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Valle del Alagón · Cáceres',
	phone: '643 72 38 15',
	phoneHref: 'tel:+34643723815',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=40.17614%2C-6.2217104&t=&z=16&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 40.17614, lng: -6.2217104 },
	featureId: '0xd3e6d7163f0a155:0x6225900f7bafec14',
	placeId: 'ChIJVaHwY3FtPg0RFOyvew-QJWI',
	plusCode: '5QGH+F8',
	rating: 4.7,
	reviewCount: 197,
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes', hours: '8:00 – 24:00' },
		{ days: 'Miércoles', hours: '8:00 – 24:00' },
		{ days: 'Jueves', hours: '8:00 – 24:00' },
		{ days: 'Viernes', hours: '8:00 – 24:00' },
		{ days: 'Sábado', hours: '8:00 – 3:00' },
		{ days: 'Domingo', hours: '8:00 – 3:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026: cierra los lunes; de martes a viernes, de 8:00 a 24:00; sábados y domingos, de 8:00 a 3:00 de la madrugada. En fiestas y puentes conviene llamar antes.',
	openingHours: [
		{
			days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '08:00',
			closes: '24:00',
		},
		{
			days: ['Saturday', 'Sunday'],
			opens: '08:00',
			closes: '03:00',
		},
	],
	categories: ['Bar de tapas', 'Cafetería', 'Terraza', 'Copas'],
	social: {
		facebook:
			'https://www.facebook.com/p/BAR-El-Teide-Santib%C3%A1%C3%B1ez-el-bajo-100063662944031/',
	},
	siteUrl: 'https://www.sur-digital.com/bar-el-teide',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'Bar El Teide',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La barra', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-cup-line',
		title: 'Desayunos desde las 8:00',
		text: 'Café, tostadas y bollería para empezar el día en la calle Santiago.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Tapas y pinchos',
		text: 'La barra de siempre, con aperitivos variados y raciones para compartir.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Comidas por encargo',
		text: 'Se encarga la comida o la cena en el bar y se come como en casa.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Copas y terraza',
		text: 'Al caer la noche el bar cambia de ritmo: música, terraza y copas.',
	},
];

export const CASA_FACTS = [
	{ label: 'En la calle Santiago', value: '1967' },
	{ label: 'La barra', value: 'Tapas' },
	{ label: 'Valoración', value: '4,7 ★' },
	{ label: 'Reseñas', value: '197' },
];

export const CARTA = [
	{
		icon: 'ri-cup-line',
		kicker: 'Desde las 8:00',
		title: 'Desayunos',
		text: 'El bar abre a las 8:00 con café, tostadas y bollería. Es el primer alto del día para el pueblo y para quien va de paso por la carretera.',
	},
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'En la barra',
		title: 'Tapas y pinchos',
		text: 'Pinchos y aperitivos variados, de los que se piden de pie. Las reseñas de Google destacan los aperitivos «ricos y contundentes».',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'Para compartir',
		title: 'Raciones',
		text: 'Raciones generosas de cocina casera para el centro de la mesa. «Las raciones están deliciosas y muy bien preparadas», cuentan en Google.',
	},
	{
		icon: 'ri-calendar-check-line',
		kicker: 'Con reserva',
		title: 'Comidas por encargo',
		text: 'Comidas y cenas por encargo: se habla en el bar, se reserva el día y se prepara el menú. Para grupos y celebraciones, mejor avisar con tiempo.',
	},
	{
		icon: 'ri-moon-line',
		kicker: 'De noche',
		title: 'Copas y terraza',
		text: 'Cuando cae la noche, El Teide se convierte en bar de copas: luces, música, terraza y buen ambiente hasta la madrugada.',
	},
	{
		icon: 'ri-music-2-line',
		kicker: 'Tradición',
		title: 'Fiestas y aniversario',
		text: 'El bar celebra su aniversario cada 23 de agosto, desde 1967, con fiesta en la calle. Un clásico del verano en Santibáñez el Bajo.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-cup-line', title: 'Desayunos' },
	{ icon: 'ri-restaurant-2-line', title: 'Tapas' },
	{ icon: 'ri-sun-line', title: 'Terraza' },
	{ icon: 'ri-moon-line', title: 'Copas' },
];

export const REVIEWS = [
	{
		text: 'Cervezas fresquitas, buenos vinos, aperitivos ricos y contundentes.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Las raciones están deliciosas y muy bien preparadas.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Muy buenos pinchos y buen ambiente.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar El Teide?',
		a: 'En la calle Santiago, 26, 10666 Santibáñez el Bajo (Cáceres), en el Valle del Alagón. Puedes abrir la ruta directamente en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, cierra los lunes. De martes a viernes abre de 8:00 a 24:00 y los sábados y domingos, de 8:00 a 3:00 de la madrugada. En fiestas y puentes conviene confirmar por teléfono.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. El bar abre a las 8:00 y sirve desayunos con café, tostadas y bollería, además de tapas y pinchos a lo largo de la mañana.',
	},
	{
		q: '¿Sirven comidas?',
		a: 'Sí, con cocina casera: tapas, pinchos y raciones, y comidas o cenas por encargo. El menú se acuerda en el bar, así que lo mejor es llamar al 643 72 38 15 y reservar con antelación.',
	},
	{
		q: '¿Hay que reservar para comer?',
		a: 'Para tapear no hace falta reserva. Para una comida o cena por encargo sí: se reserva el día y se concreta el menú. Llama al 643 72 38 15 para hablarlo.',
	},
	{
		q: '¿Se puede ir de copas?',
		a: 'Sí. Por la noche El Teide funciona como bar de copas, con música y terraza. Los fines de semana alarga el horario hasta las 3:00.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, el local cuenta con terraza, además de la barra y el interior. En verano es la zona más buscada al caer la noche.',
	},
	{
		q: '¿Es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta, avisa al llamar.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoApaisada1,
		alt: 'Bar El Teide, en Santibáñez el Bajo (Cáceres)',
	},
	{ src: IMAGES.fotoApaisada2, alt: 'Interior de Bar El Teide, en el Valle del Alagón' },
	{ src: IMAGES.fotoPanoramica3, alt: 'Vista del bar El Teide en Santibáñez el Bajo' },
	{ src: IMAGES.fotoApaisada4, alt: 'Rincón de Bar El Teide' },
	{ src: IMAGES.fotoApaisada5, alt: 'Detalle de la galería de El Teide' },
	{ src: IMAGES.fotoVertical6, alt: 'El Teide, bar de tapas de Santibáñez el Bajo' },
	{ src: IMAGES.fotoPanoramica7, alt: 'Ambiente de Bar El Teide' },
	{ src: IMAGES.fotoVertical8, alt: 'Fotografía de la ficha de Google Maps de El Teide' },
	{ src: IMAGES.fotoApaisada9, alt: 'El Teide de noche, en Santibáñez el Bajo' },
	{ src: IMAGES.fotoApaisada10, alt: 'Imagen de Bar El Teide en Cáceres' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarOrPub',
	'@id': `${BUSINESS.siteUrl}/#bar`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34643723815',
	priceRange: '€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Tapas', 'Cocina casera', 'Desayunos'],
	areaServed: [
		{ '@type': 'City', name: 'Santibáñez el Bajo' },
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
	sameAs: [BUSINESS.social.facebook],
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
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Terraza',
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
