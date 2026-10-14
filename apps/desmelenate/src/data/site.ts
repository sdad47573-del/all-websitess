/**
 * Datos de Desmelenate — Calle Escritora Carmen Conde, 3 (Torre Atalaya,
 * Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Desmelenate,
 *   36.7252201,-4.4731599, feature 0xd72f76b64470123:0x2a8da6883a2439dd
 * - Reverse-geocode OSM (Nominatim): Calle Escritora Carmen Conde 3,
 *   Torre Atalaya, Teatinos-Universidad, Málaga 29010.
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

import fotoPortada from '../assets/fotos/desmelenate-malaga.svg';
import fotoCentro from '../assets/fotos/desmelenate-teatinos.svg';
import fotoPelu from '../assets/fotos/desmelenate-peluqueria.svg';
import fotoColor from '../assets/fotos/desmelenate-color.svg';
import logo from '../assets/fotos/desmelenate-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoPelu,
	fotoCalle: fotoColor,
	logo,
};

export const BUSINESS = {
	name: 'Desmelenate',
	shortName: 'Desmelenate',
	tagline: 'Peluquería en Teatinos, Málaga',
	claim: 'Tu peluquería en Teatinos',
	summary:
		'Desmelenate es una peluquería en la Calle Escritora Carmen Conde, 3 (Torre Atalaya, Teatinos-Universidad, 29010 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Calle Escritora Carmen Conde, 3',
	district: 'Torre Atalaya',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref:
		'https://www.google.com/maps/place/Desmelenate/@36.7252201,-4.4731599,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f76b64470123:0x2a8da6883a2439dd!8m2!3d36.7252201!4d-4.4731599!16s%2Fg%2F11gk8wl7vw?authuser=0&hl=es&entry=ttu',
	googleMaps:
		'https://www.google.com/maps/place/Desmelenate/@36.7252201,-4.4731599,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f76b64470123:0x2a8da6883a2439dd!8m2!3d36.7252201!4d-4.4731599!16s%2Fg%2F11gk8wl7vw?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Escritora%20Carmen%20Conde%2C%203%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7252201, lng: -4.4731599 },
	featureId: '0xd72f76b64470123:0x2a8da6883a2439dd',
	priceRange: '€€',
	categories: [
		'Peluquería',
		'Coloración',
		'Peinados',
		'Cuidado del cabello',
	],
	hours: [
		{ days: 'Horario', hours: 'Consultar ficha de Google Maps' },
	],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha de la peluquería para ver apertura actual y festivos.',
	siteUrl: 'https://desmelenate.vercel.app',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La pelu', href: '#salon' },
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
		title: 'Peluquería en Teatinos',
		text: 'Peluquería de barrio en Escritora Carmen Conde, Torre Atalaya.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Carmen Conde, 3',
		text: 'Calle Escritora Carmen Conde, 3 · 29010 Málaga.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Corte y color',
		text: 'Áreas habituales: corte, color y peinado. Confirma tu caso en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte',
		text: 'Corte para mujer y hombre. Confirma estilo y precio en la ficha de Google.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color y mechas',
		text: 'Tinte, mechas y matices adaptados a tu pelo. Confirma diagnóstico antes de ir.',
	},
	{
		icon: 'ri-windy-line',
		title: 'Peinado',
		text: 'Peinados para el día a día y ocasiones. Consulta disponibilidad en la ficha.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Tratamientos',
		text: 'Cuidado e hidratación del cabello. Pregunta por el tratamiento indicado.',
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
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte de pelo', precio: 'A consultar' },
			{ nombre: 'Peinado', precio: 'A consultar' },
			{ nombre: 'Recogidos y ocasiones', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Color y cuidado',
		items: [
			{ nombre: 'Tinte y color', precio: 'A consultar' },
			{ nombre: 'Mechas', precio: 'A consultar' },
			{ nombre: 'Tratamiento capilar', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Carmen Conde, 3: Teatinos-Universidad, zona universitaria y familiar.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Pelu de barrio',
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
		text: 'Pregunta siempre a la peluquería por tu caso antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Desmelenate?',
		a: 'En la Calle Escritora Carmen Conde, 3 (Torre Atalaya, Teatinos-Universidad, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'La peluquería no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, peluquería (corte, color, peinado). La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con la peluquería.',
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
	{ icon: 'ri-scissors-line', label: 'Peluquería' },
	{ icon: 'ri-palette-line', label: 'Color y mechas' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Desmelenate, peluquería en Teatinos (Málaga)',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Desmelenate en Calle Escritora Carmen Conde, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte y peinado en Desmelenate (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Color y mechas en Desmelenate',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Desmelenate Teatinos Málaga',
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
		name: 'Servicios de Desmelenate',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'HairSalon', name: BUSINESS.name },
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
