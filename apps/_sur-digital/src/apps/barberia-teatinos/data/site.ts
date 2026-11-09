/**
 * Datos de La Barbería de Teatinos — Av. Plutarco, 83, Loc 2 (Finca La Palma,
 * Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: La Barbería de Teatinos,
 *   36.7209134,-4.4728015, feature 0xd72f736372655af:0x2096b7484de5aceb
 * - Ficha pública leída el 16-10-2026 desde /maps/preview/place: nombre,
 *   dirección (Av. Plutarco, 83, Loc 2), teléfono 690 17 96 99, valoración
 *   4,7 con 233 reseñas, horario L–V 9:00–14:00 y 16:00–20:00 / S 9:00–14:00 /
 *   D cerrado, placeid ChIJr1UmNzb3cg0R66zlTUi3liA.
 *
 * Lo que la web NO inventa:
 * - La ficha no publica web propia, carta de servicios ni precios, así que no
 *   se publican. Todo remite a la ficha de Google Maps y al teléfono verificado.
 *
 * Nota sobre fotos: 10 fotos descargadas de la ficha con
 * scripts/fetch-maps-photos.mjs (ver .maps-manifest.json). Se muestran
 * optimizadas con enlace a la ficha original. Ver README_IMAGENES.md.
 */

import fotoHero from '../assets/fotos/barberia-teatinos-apaisada-01.jpg';
import fotoLocal2 from '../assets/fotos/barberia-teatinos-apaisada-02.jpg';
import fotoLocal3 from '../assets/fotos/barberia-teatinos-apaisada-04.jpg';
import fotoLocal4 from '../assets/fotos/barberia-teatinos-apaisada-10.jpg';
import fotoVert1 from '../assets/fotos/barberia-teatinos-vertical-03.jpg';
import fotoVert2 from '../assets/fotos/barberia-teatinos-vertical-05.jpg';
import fotoVert3 from '../assets/fotos/barberia-teatinos-vertical-06.jpg';
import logo from '../assets/fotos/barberia-teatinos-logo.svg';

export const IMAGES = {
	fotoFachada: fotoHero,
	fotoInterior: fotoVert1,
	fotoCejas: fotoVert2,
	fotoCalle: fotoVert3,
	logo,
};

export const PHOTOS_MANIFEST_NOTE =
	'Fotos de la ficha pública de Google Maps, alojadas aquí para servirlas optimizadas.';

export const BUSINESS = {
	name: 'La Barbería de Teatinos',
	shortName: 'Barbería Teatinos',
	tagline: 'Barbería en Teatinos, Málaga',
	claim: 'Tu barbería en Teatinos',
	summary:
		'La Barbería de Teatinos es una barbería en la Av. Plutarco, 83, Loc 2 (Finca La Palma, Teatinos-Universidad, 29010 Málaga). 4,7 sobre 5 con 233 reseñas. Llama al 690 17 96 99.',
	street: 'Av. Plutarco, 83, Loc 2',
	district: 'Finca La Palma',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '+34 690 17 96 99',
	phoneHref: 'tel:+34690179699',
	reviewsUrl:
		'https://search.google.com/local/reviews?placeid=ChIJr1UmNzb3cg0R66zlTUi3liA&hl=es',
	placeId: 'ChIJr1UmNzb3cg0R66zlTUi3liA',
	rating: 4.7,
	reviewCount: 233,
	mapsHref:
		'https://www.google.com/maps/place/La+Barber%C3%ADa+de+Teatinos/@36.7209134,-4.4728015,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f736372655af:0x2096b7484de5aceb!8m2!3d36.7209134!4d-4.4728015!16s%2Fg%2F11gb3r28gf?authuser=0&hl=es&entry=ttu',
	googleMaps:
		'https://www.google.com/maps/place/La+Barber%C3%ADa+de+Teatinos/@36.7209134,-4.4728015,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f736372655af:0x2096b7484de5aceb!8m2!3d36.7209134!4d-4.4728015!16s%2Fg%2F11gb3r28gf?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Av.%20Plutarco%2C%2083%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7209134, lng: -4.4728015 },
	featureId: '0xd72f736372655af:0x2096b7484de5aceb',
	priceRange: '€€',
	categories: [
		'Barbería',
		'Corte de pelo',
		'Arreglo de barba',
		'Cuidado masculino',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:00–14:00 y 16:00–20:00' },
		{ days: 'Sábado', hours: '9:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google Maps (16-10-2026). Puede cambiar en festivos: ante la duda, llama al 690 17 96 99.',
	siteUrl: 'https://www.sur-digital.com/barberia-teatinos',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La barbería', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/barberia-teatinos/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/barberia-teatinos/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Barbería en Teatinos',
		text: 'Barbería de barrio en Av. Plutarco, Finca La Palma.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Plutarco, 83',
		text: 'Av. Plutarco, 83, Loc 2 · 29010 Málaga. Teatinos-Universidad.',
	},
	{
		icon: 'ri-phone-line',
		title: '690 17 96 99',
		text: 'Llama para pedir cita. 4,7 sobre 5 con 233 reseñas en Google.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Corte y barba',
		text: 'Áreas habituales: corte, barba y cuidado masculino. Confirma en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte de pelo',
		text: 'Corte clásico y moderno para hombre. Confirma estilo y precio en la ficha de Google.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Arreglo de barba',
		text: 'Perfilado y cuidado de barba. Consulta disponibilidad en la ficha.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Afeitado',
		text: 'Afeitado con toalla. Pregunta por el servicio antes de reservar.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color y matices',
		text: 'Matices y cobertura de canas. Confirma diagnóstico antes de ir.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Teatinos-Universidad (29010). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Barbería',
		items: [
			{ nombre: 'Corte de pelo', precio: 'A consultar' },
			{ nombre: 'Arreglo de barba', precio: 'A consultar' },
			{ nombre: 'Afeitado', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Cuidado',
		items: [
			{ nombre: 'Matices y color', precio: 'A consultar' },
			{ nombre: 'Cuidado facial masculino', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Plutarco, 81: Teatinos-Universidad, zona universitaria.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Barbería de barrio',
		text: 'Atención personal, sin prisas y con precio claro antes de empezar.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha verificable',
		text: 'Todo lo operativo (horario, teléfono, cita) enlaza a su ficha pública de Google.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-walk-line',
		title: 'Accesible',
		text: 'Ideal si vives o estudias en Teatinos-Universidad.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Pregunta siempre a la barbería por tu caso antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Barbería de Teatinos?',
		a: 'En la Av. Plutarco, 83, Loc 2 (Finca La Palma, Teatinos-Universidad, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 690 17 96 99, el teléfono publicado en su ficha de Google Maps. La barbería no publica web propia, así que la vía fiable es ese teléfono o su ficha pública de Google.'
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, barbería (corte, barba, afeitado). La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con la barbería.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Según su ficha de Google (16-10-2026): lunes a viernes 9:00–14:00 y 16:00–20:00, sábado 9:00–14:00 y domingo cerrado. Puede cambiar en festivos: llama antes de salir.'
	},
	{
		q: '¿De dónde son las fotos?',
		a: 'Son 10 fotos de la ficha pública de Google Maps del propio negocio, descargadas con scripts/fetch-maps-photos.mjs y servidas aquí optimizadas, con enlace a la ficha original (ver README_IMAGENES.md).'
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Barbería' },
	{ icon: 'ri-user-smile-line', label: 'Corte y barba' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: fotoHero,
		alt: 'La Barbería de Teatinos en Málaga, foto de su ficha de Google Maps',
	},
	{
		src: fotoLocal2,
		alt: 'Interior de La Barbería de Teatinos en Av. Plutarco, Málaga',
	},
	{
		src: fotoLocal3,
		alt: 'Detalle del local de La Barbería de Teatinos (Málaga)',
	},
	{
		src: fotoLocal4,
		alt: 'La Barbería de Teatinos, barbería en Teatinos-Universidad',
	},
	{
		src: fotoVert1,
		alt: 'Corte de pelo en La Barbería de Teatinos (Málaga)',
	},
	{
		src: fotoVert2,
		alt: 'Servicio de barbería en La Barbería de Teatinos',
	},
	{
		src: fotoVert3,
		alt: 'Arreglo de barba en La Barbería de Teatinos',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Barbería Teatinos Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: BUSINESS.phoneHref,
	image: `${BUSINESS.siteUrl}/og.jpg`,
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de La Barbería de Teatinos',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'BarberShop', name: BUSINESS.name },
			},
		})),
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
			opens: '09:00',
			closes: '14:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:00',
		closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '09:00',
		closes: '14:00',
		},
	],
};
