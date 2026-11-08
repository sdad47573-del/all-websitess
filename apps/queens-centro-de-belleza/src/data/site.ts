/**
 * Datos de Queens Centro de Belleza — Carrer del Rosselló 55
 * (Nova Esquerra de l'Eixample, Eixample, 08029 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Queens Centro de Belleza,
 *   41.3847304,2.1455229, feature 0x12a4999113970303:0x2fb3cdc04d326db9
 * - Instagram del centro: Carrer Rosselló 55/57, L'Eixample, CP 08029,
 *   Metro L5 Entença.
 * - LPG Group / Endermologie: ROSELLÓ 55, 08029 BARCELONA, tel 656766891.
 * - mispelus (verificado 04-sep-2026): Carrer del Rosselló 55, Eixample,
 *   08029 Barcelona; tel +34656766891; 4.8 (237 opiniones);
 *   L-V 10:00–20:00, Sáb 10:00–15:00, Dom cerrado.
 */

import fotoPortada from '../assets/fotos/queens-centro-de-belleza-panoramica-01.jpg';
import fotoCentro from '../assets/fotos/queens-centro-de-belleza-vertical-02.jpg';
import fotoFacial from '../assets/fotos/queens-centro-de-belleza-panoramica-03.jpg';
import fotoCorporal from '../assets/fotos/queens-centro-de-belleza-panoramica-04.jpg';
import fotoExtra1 from '../assets/fotos/queens-centro-de-belleza-panoramica-05.jpg';
import fotoExtra2 from '../assets/fotos/queens-centro-de-belleza-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/queens-centro-de-belleza-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/queens-centro-de-belleza-vertical-08.jpg';
import logo from '../assets/fotos/queens-centro-de-belleza-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	fotoExtra1,
	fotoExtra2,
	fotoExtra3,
	fotoExtra4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Queens+Centro+de+Belleza/@41.3847304,2.1455229,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4999113970303:0x2fb3cdc04d326db9!8m2!3d41.3847304!4d2.1455229!16s%2Fg%2F11qmct4h_x?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Queens Centro de Belleza',
	shortName: 'Queens',
	tagline: 'Belleza en Eixample, Barcelona',
	claim: 'Tu centro de belleza en Rosselló 55',
	summary:
		'Queens Centro de Belleza es un centro de belleza y peluquería en Carrer del Rosselló 55 (Nova Esquerra de l’Eixample, Eixample, 08029 Barcelona): peluquería, facial, corporal, depilación láser y uñas. Llama al 656 76 68 91 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'Carrer del Rosselló, 55',
	district: "Nova Esquerra de l'Eixample",
	borough: 'Eixample',
	city: 'Barcelona',
	postalCode: '08029',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '656 76 68 91',
	phoneHref: 'tel:+34656766891',
	whatsapp:
		'https://wa.me/34656766891?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Queens.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.3847304%2C2.1455229&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.3847304, lng: 2.1455229 },
	featureId: '0x12a4999113970303:0x2fb3cdc04d326db9',
	priceRange: '€€',
	rating: 4.8,
	reviewCount: 237,
	categories: [
		'Centro de belleza',
		'Peluquería',
		'Estética facial',
		'Depilación láser',
		'Uñas',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–20:00' },
		{ days: 'Sábado', hours: '10:00–15:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario verificado en septiembre de 2026 desde fuentes públicas. Confirma en la ficha de Google o llamando al 656 76 68 91, porque puede variar en festivos.',
	siteUrl: 'https://queens-centro-de-belleza.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Queens Centro de Belleza',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El centro', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza en Eixample',
		text: 'Centro de belleza en Rosselló 55, Nova Esquerra de l’Eixample.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Rosselló 55',
		text: 'Carrer del Rosselló 55 · 08029 Barcelona. Metro L5 Entença.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 con 237 reseñas',
		text: 'Valoración de 4,8 sobre 5 en Google con 237 opiniones.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Pelo, piel y uñas',
		text: 'Peluquería, facial, láser y uñas. Pide cita en el 656 76 68 91.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería',
		text: 'Mechas naturales, corte y peinado. Paula, tu estilista en Eixample.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'LPG facial y radiofrecuencia facial: firmeza, colágeno y luminosidad.',
	},
	{
		icon: 'ri-flashlight-line',
		title: 'Depilación láser',
		text: 'Depilación láser con trato profesional y experiencia cómoda y relajante.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas',
		text: 'Manicura y uñas con Patricia: acabado cuidado que repiten las clientas.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y bienestar, incluido LPG Cellu M6®.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: llama o escribe al 656 76 68 91.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería y color',
		items: [
			{ nombre: 'Mechas naturales', precio: 'A consultar' },
			{ nombre: 'Corte y peinado', precio: 'A consultar' },
			{ nombre: 'Tratamiento capilar a medida', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Facial y corporal',
		items: [
			{ nombre: 'LPG facial + radiofrecuencia', precio: 'A consultar' },
			{ nombre: 'Depilación láser', precio: 'A consultar' },
			{ nombre: 'Uñas y manicura', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Eixample',
		text: 'Rosselló 55-57, frente al ascensor del metro Entença (L5).',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 en Google',
		text: '237 opiniones destacan el trato amable, profesional y cercano.',
	},
	{
		icon: 'ri-team-line',
		title: 'Equipo conocido',
		text: 'Paula en peluquería, Patricia en uñas, Adelia en láser.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 656 76 68 91 o escribe por WhatsApp para reservar.',
	},
	{
		icon: 'ri-wheelchair-line',
		title: 'Accesible',
		text: 'Acceso para sillas de ruedas, pago con móvil y tarjetas.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Queens Centro de Belleza?',
		a: 'En Carrer del Rosselló 55 (Nova Esquerra de l’Eixample, Eixample, 08029 Barcelona), junto al metro Entença (L5). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 656 76 68 91 o escribe por WhatsApp. También puedes usar el teléfono y el botón de contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería (mechas, corte, peinado), facial (LPG + radiofrecuencia), depilación láser, corporal y uñas. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 656 76 68 91.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 10:00 a 20:00, sábados de 10:00 a 15:00 y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Qué opinan las clientas?',
		a: 'Tiene un 4,8 sobre 5 con 237 opiniones en Google: destacan las mechas naturales, el láser, las uñas y el trato profesional y cercano.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de belleza' },
	{ icon: 'ri-scissors-line', label: 'Peluquería' },
	{ icon: 'ri-flashlight-line', label: 'Depilación láser' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Queens Centro de Belleza en Eixample, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Queens en Rosselló 55, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en Queens (Barcelona)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Cuidado corporal y bienestar en Queens',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de Queens Centro de Belleza',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Tratamientos de belleza en Queens Eixample',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Peluquería en Queens Centro de Belleza',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Estética en Carrer del Rosselló 55',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Queens Eixample Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34656766891',
	currenciesAccepted: 'EUR',
	knowsAbout: BUSINESS.categories,
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
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '10:00',
			closes: '15:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Queens Centro de Belleza',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'BeautySalon', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
