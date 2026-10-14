/**
 * Datos de La Barbería de Teatinos — Av. Plutarco, 81 (Finca La Palma,
 * Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: La Barbería de Teatinos,
 *   36.7209134,-4.4728015, feature 0xd72f736372655af:0x2096b7484de5aceb
 * - Reverse-geocode OSM (Nominatim): Av. Plutarco 81, Finca La Palma,
 *   Teatinos-Universidad, Málaga 29010.
 *
 * Lo que la web NO inventa:
 * - La ficha no aporta teléfono, horario, web propia, carta de servicios,
 *   precios ni recuento de reseñas verificable desde fuera, así que no se
 *   publican. Todo remite a "consultar la ficha de Google Maps".
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/barberia-teatinos-malaga.svg';
import fotoCentro from '../assets/fotos/barberia-teatinos-plutarco.svg';
import fotoCorte from '../assets/fotos/barberia-teatinos-corte.svg';
import fotoBarba from '../assets/fotos/barberia-teatinos-barba.svg';
import logo from '../assets/fotos/barberia-teatinos-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'La Barbería de Teatinos',
	shortName: 'Barbería Teatinos',
	tagline: 'Barbería en Teatinos, Málaga',
	claim: 'Tu barbería en Teatinos',
	summary:
		'La Barbería de Teatinos es una barbería en la Av. Plutarco, 81 (Finca La Palma, Teatinos-Universidad, 29010 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Av. Plutarco, 81',
	district: 'Finca La Palma',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref:
		'https://www.google.com/maps/place/La+Barber%C3%ADa+de+Teatinos/@36.7209134,-4.4728015,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f736372655af:0x2096b7484de5aceb!8m2!3d36.7209134!4d-4.4728015!16s%2Fg%2F11gb3r28gf?authuser=0&hl=es&entry=ttu',
	googleMaps:
		'https://www.google.com/maps/place/La+Barber%C3%ADa+de+Teatinos/@36.7209134,-4.4728015,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f736372655af:0x2096b7484de5aceb!8m2!3d36.7209134!4d-4.4728015!16s%2Fg%2F11gb3r28gf?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Av.%20Plutarco%2C%2081%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
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
		{ days: 'Horario', hours: 'Consultar ficha de Google Maps' },
	],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha de la barbería para ver apertura actual y festivos.',
	siteUrl: 'https://barberia-teatinos.vercel.app',
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
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Barbería en Teatinos',
		text: 'Barbería de barrio en Av. Plutarco, Finca La Palma.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Plutarco, 81',
		text: 'Av. Plutarco, 81 · 29010 Málaga. Teatinos-Universidad.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
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
		a: 'En la Av. Plutarco, 81 (Finca La Palma, Teatinos-Universidad, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'La barbería no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
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
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha para ver apertura actual, festivos y cambios.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
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
		src: IMAGES.fotoFachada,
		alt: 'La Barbería de Teatinos en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'La Barbería de Teatinos en Av. Plutarco, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte de pelo en La Barbería de Teatinos (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
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
	openingHoursSpecification: [],
};
