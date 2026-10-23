/**
 * Datos de The Cut - Salon Men — Calle Teseo, 2 (Teatinos,
 * Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: The Cut -Salon Men,
 *   36.720243,-4.4752066, feature 0xd72f735fb45beaf:0x38e355f79da0d334
 * - Booksy: https://booksy.com/es-es/78573_the-cut-salon-men_barberia_29485_malaga
 *   (dirección Calle Teseo 2, precios, horario, equipo María/Luis/Mario,
 *   5.0 con 331 reseñas)
 * - Instagram: @thecut_salon_men — Calle Teseo 2, Teatinos, citas 952 62 97 51
 * - Google: 4,6 con ~240 reseñas; horario L-V 10:00–14:00 y 15:00–18:00, S-D cerrado
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/the-cut-salon-men-malaga.svg';
import fotoCentro from '../assets/fotos/the-cut-salon-men-teseo.svg';
import fotoCorte from '../assets/fotos/the-cut-salon-men-corte.svg';
import fotoBarba from '../assets/fotos/the-cut-salon-men-barba.svg';
import logo from '../assets/fotos/the-cut-salon-men-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'The Cut - Salon Men',
	shortName: 'The Cut',
	tagline: 'Barbería en Teatinos, Málaga',
	claim: 'Tu barbería en Calle Teseo',
	summary:
		'The Cut - Salon Men es una barbería en Calle Teseo, 2 (Teatinos, 29010 Málaga). Corte, degradado, barba y rapado con precios claros y reserva online en Booksy.',
	street: 'Calle Teseo, 2',
	district: 'Teatinos',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '952 62 97 51',
	phoneHref: 'tel:+34952629751',
	booksy:
		'https://booksy.com/es-es/78573_the-cut-salon-men_barberia_29485_malaga',
	instagram: 'https://www.instagram.com/thecut_salon_men/',
	googleMaps:
		'https://www.google.com/maps/place/The+Cut+-Salon+Men/@36.720243,-4.4752066,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f735fb45beaf:0x38e355f79da0d334!8m2!3d36.720243!4d-4.4752066!16s%2Fg%2F11cmg1fhg9?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Teseo%2C%202%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.720243, lng: -4.4752066 },
	featureId: '0xd72f735fb45beaf:0x38e355f79da0d334',
	priceRange: '€',
	ratingGoogle: '4,6',
	reviewsGoogle: '240',
	ratingBooksy: '5,0',
	reviewsBooksy: '331',
	categories: [
		'Barbería',
		'Corte de pelo',
		'Degradado',
		'Arreglo de barba',
	],
	hours: [
		{ days: 'Lunes – Viernes', hours: '10:00–14:00 · 15:00–18:00' },
		{ days: 'Sábado – Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha (octubre 2026): L-V 10:00–14:00 y 15:00–18:00, fin de semana cerrado. Confirma en Google o Booksy antes de ir, puede variar en festivos.',
	siteUrl: 'https://the-cut-salon-men.vercel.app',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El salón', href: '#salon' },
	{ label: 'Servicios y precios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios y precios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Barbería en Teatinos',
		text: 'Corte, degradado y barba en Calle Teseo, 2.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,6 en Google · 5,0 en Booksy',
		text: '240 reseñas en Google y 331 en Booksy (oct 2026).',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Cita 24/7 en Booksy o por teléfono 952 62 97 51.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precios claros',
		text: 'Rapado desde 8 €, corte 13 €, corte + barba 18 €.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte completo + lavado',
		text: 'Corte de pelo completo con lavado, 30 min. 13 €.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Corte + barba completa',
		text: 'Corte completo + barba completa + lavado, 30 min. 18 €.',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Degradado / fade',
		text: 'Solo degradado + lavado 10 €; con barba completa 16 €.',
	},
	{
		icon: 'ri-ruler-line',
		title: 'Rapado',
		text: 'Rapado + lavado 8 €; rapado con degradado + lavado 10 €.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Barba',
		text: 'Barba completa 7 €; perfilado de barba 5 €.',
	},
	{
		icon: 'ri-bear-smile-line',
		title: 'Corte niño (-10 años)',
		text: 'Corte de pelo niño hasta 10 años, 30 min. 11 €.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Corte',
		items: [
			{ nombre: 'Corte de pelo completo + lavado (30 min)', precio: '13 €' },
			{ nombre: 'Solo degradado + lavado (30 min)', precio: '10 €' },
			{ nombre: 'Rapado + lavado (30 min)', precio: '8 €' },
			{ nombre: 'Rapado con degradado + lavado (30 min)', precio: '10 €' },
			{ nombre: 'Corte niño hasta 10 años (30 min)', precio: '11 €' },
			{ nombre: 'Mechas con gorro (desde, +1 h)', precio: 'desde 25 €' },
		],
	},
	{
		grupo: 'Corte + barba',
		items: [
			{ nombre: 'Corte completo + barba completa + lavado', precio: '18 €' },
			{ nombre: 'Corte completo + perfilado de barba + lavado', precio: '16 €' },
			{ nombre: 'Degradado + barba completa + lavado', precio: '16 €' },
			{ nombre: 'Degradado + perfilado de barba + lavado', precio: '14 €' },
			{ nombre: 'Rapado con degradado + barba + lavado', precio: '16 €' },
			{ nombre: 'Rapado con degradado + perfilado + lavado', precio: '13 €' },
		],
	},
	{
		grupo: 'Barba',
		items: [
			{ nombre: 'Barba completa (30 min)', precio: '7 €' },
			{ nombre: 'Perfilado de barba (30 min)', precio: '5 €' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Calle Teseo, 2: Teatinos-Universidad, zona universitaria.',
	},
	{
		icon: 'ri-team-line',
		title: 'Equipo conocido',
		text: 'María, Luis y Mario: los clientes los nombran en las reseñas.',
	},
	{
		icon: 'ri-time-line',
		title: 'Puntualidad',
		text: 'Uno de los puntos fuertes que destacan las reseñas.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio antes de empezar',
		text: 'Carta publicada en Booksy: sin sorpresas en caja.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita fácil',
		text: 'Booksy 24/7, teléfono 952 62 97 51 o ficha de Google.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Trato cercano',
		text: 'Profesionalidad y trato amable, lo más valorado.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está The Cut - Salon Men?',
		a: 'En Calle Teseo, 2 (Teatinos, Teatinos-Universidad, 29010 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Online 24/7 en Booksy, por teléfono en el 952 62 97 51 o desde la ficha de Google Maps. Equipo: María, Luis y Mario.',
	},
	{
		q: '¿Cuánto cuesta cortarse el pelo?',
		a: 'Según la carta de Booksy (oct 2026): rapado + lavado 8 €, degradado + lavado 10 €, corte completo + lavado 13 €, corte + barba completa + lavado 18 €, barba completa 7 € y perfilado 5 €. Confirma antes de reservar por si cambia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 10:00–14:00 y 15:00–18:00; sábado y domingo cerrado. Puede variar en festivos: confirma en Google o Booksy.',
	},
	{
		q: '¿Qué opinan los clientes?',
		a: '4,6/5 con unas 240 reseñas en Google y 5,0/5 con 331 reseñas en Booksy (oct 2026). Destacan profesionalidad, trato amable y puntualidad.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Barbería' },
	{ icon: 'ri-sparkling-line', label: 'Degradado y fade' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva en Booksy' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'The Cut - Salon Men en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'The Cut - Salon Men en Calle Teseo, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte y degradado en The Cut - Salon Men (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Arreglo de barba en The Cut - Salon Men',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'The Cut Teatinos Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
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
	telephone: BUSINESS.phoneHref,
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '4.6',
		reviewCount: '240',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de The Cut - Salon Men',
		itemListElement: SERVICIOS_DETALLE.flatMap((seccion) =>
			seccion.items.map((item) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: item.nombre,
					description: `${item.nombre} en ${BUSINESS.name}`,
					areaServed: BUSINESS.city,
					provider: { '@type': 'BarberShop', name: BUSINESS.name },
				},
				priceSpecification: {
					'@type': 'PriceSpecification',
					priceCurrency: 'EUR',
					price: item.precio,
				},
			})),
		),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '14:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '15:00',
			closes: '18:00',
		},
	],
};
