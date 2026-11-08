/**
 * Datos de Restaurante Paco (Carril Palmeral, 1 · Santa Cruz · 30162 Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Paco.
 *   Feature 0xd639cc4f2722c99:0x88cbd86a412c543f.
 * - Dirección, teléfono, valoración, horario y accesibilidad: ficha pública de
 *   Google (octubre de 2026).
 * - Salón de celebraciones: presentación pública del restaurante y reseñas.
 * - Reseñas: opiniones publicadas en la ficha de Google.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No hay carta publicada: no se inventan platos ni importes. La ficha de turismo
 * de la Región de Murcia sitúa el restaurante también en Calle Mayor, 197.
 */

import fotoPatio from '../assets/fotos/restaurante-paco-apaisada-03.jpg';
import fotoJardin from '../assets/fotos/restaurante-paco-vertical-07.jpg';
import fotoPaella from '../assets/fotos/restaurante-paco-apaisada-09.jpg';
import fotoEntrantes from '../assets/fotos/restaurante-paco-apaisada-02.jpg';
import fotoCarpaccio from '../assets/fotos/restaurante-paco-apaisada-04.jpg';
import fotoCarne from '../assets/fotos/restaurante-paco-apaisada-05.jpg';
import fotoMesa from '../assets/fotos/restaurante-paco-vertical-06.jpg';
import fotoEmbutidos from '../assets/fotos/restaurante-paco-apaisada-08.jpg';
import logo from '../assets/fotos/restaurante-paco-logo.svg';

export const IMAGES = {
	fotoCarpaccio,
	fotoCarne,
	fotoEmbutidos,
	fotoEntrantes,
	fotoJardin,
	fotoMesa,
	fotoPaella,
	fotoPatio,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Paco/@38.0266893,-1.0470074,17z/data=!4m6!3m5!1s0xd639cc4f2722c99:0x88cbd86a412c543f!8m2!3d38.0266893!4d-1.0470074!16s%2Fg%2F11dym8vnw8?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Paco',
	fullName: 'Restaurante Paco',
	shortName: 'Paco',
	tagline: 'Cocina y celebraciones · Santa Cruz, Murcia',
	claim: 'La mesa de la huerta',
	summary:
		'Restaurante de cocina española y salón de celebraciones en Santa Cruz, a las afueras de Murcia. Comida de mediodía, cenas los viernes y sábados y una casa preparada para bodas, bautizos y comidas de grupo.',
	street: 'Carril Palmeral, 1',
	borough: 'Santa Cruz',
	city: 'Santa Cruz',
	postalCode: '30162',
	region: 'Murcia',
	province: 'Murcia',
	country: 'ES',
	phone: '968 81 24 70',
	phoneHref: 'tel:+34968812470',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=38.0266893%2C-1.0470074&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 38.0266893, lng: -1.0470074 },
	featureId: '0xd639cc4f2722c99:0x88cbd86a412c543f',
	placeId: 'ChIJmSxy8sScYw0RP1QsQWrYy4g',
	rating: 4.6,
	reviewCount: 156,
	hours: [
		{ days: 'Lun, mar, mié y dom', hours: '10:00 – 17:00' },
		{ days: 'Jueves', hours: 'Cerrado' },
		{ days: 'Viernes', hours: '10:00 – 17:00 · 20:00 – 23:30' },
		{ days: 'Sábado', hours: '10:00 – 17:00 · 20:00 – 23:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. La casa cierra los jueves y abre para cenar solo viernes y sábado. En festivos puede cambiar, así que conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'],
			opens: '10:00',
			closes: '17:00',
		},
		{ days: ['Friday'], opens: '10:00', closes: '17:00' },
		{ days: ['Friday'], opens: '20:00', closes: '23:30' },
		{ days: ['Saturday'], opens: '10:00', closes: '17:00' },
		{ days: ['Saturday'], opens: '20:00', closes: '23:00' },
	],
	categories: ['Restaurante', 'Salón de celebraciones'],
	siteUrl: 'https://www.sur-digital.com/restaurante-paco',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante Paco',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La cocina', href: '#cocina' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-goblet-line',
		title: 'Salón de celebraciones',
		text: 'Bodas, bautizos, comuniones y comidas de grupo con reserva.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cocina española',
		text: 'La cocina de casa, con la huerta de Santa Cruz como telón.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Comida de mediodía',
		text: 'De 10:00 a 17:00, de domingo a miércoles y también el viernes.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Cenas de fin de semana',
		text: 'Viernes y sábado, desde las 20:00.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Española' },
	{ label: 'Valoración', value: '4,6 ★' },
	{ label: 'Reseñas', value: '156' },
	{ label: 'Salón', value: 'Celebraciones' },
];

export const PLATOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina española',
		text: 'La base de la casa, según la ficha de Google y sus reseñas.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Cocina de casa',
		text: '«Comida exquisita», resumen de una de las opiniones de la ficha.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Salón de celebraciones',
		text: 'Un espacio propio para bodas, bautizos, comuniones y reuniones.',
	},
	{
		icon: 'ri-cake-2-line',
		title: 'Bodas y bautizos',
		text: 'La casa organiza celebraciones familiares; se habla al reservar.',
	},
	{
		icon: 'ri-team-line',
		title: 'Comidas de grupo',
		text: 'Mesas grandes para familias y grupos, con reserva previa.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Cenas viernes y sábado',
		text: 'Segundo servicio desde las 20:00 para cerrar la semana.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Santa Cruz, Murcia' },
	{ icon: 'ri-parking-box-line', title: 'Aparcamiento adaptado' },
	{ icon: 'ri-calendar-check-line', title: 'Reserva de mesa' },
	{ icon: 'ri-goblet-line', title: 'Salón de celebraciones' },
];

export const REVIEWS = [
	{
		text: 'Comida exquisita lo recomiendo si quieres disfrutar de la buena cocina',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Muy buen sitio para celebraciones y buena comida',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'El mes pasado hicimos el bautizo de nuestro hijo, y todo fue genial.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Paco?',
		a: 'En Carril Palmeral, 1, 30162 Santa Cruz (Murcia). La ficha de turismo de la Región también recoge la dirección de Calle Mayor, 197. Puedes abrir la ruta exacta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de 10:00 a 17:00 los lunes, martes, miércoles, viernes, sábados y domingos. Cierra los jueves. Los viernes y sábados vuelve por la noche: de 20:00 a 23:30 y de 20:00 a 23:00, respectivamente.',
	},
	{
		q: '¿Se puede cenar?',
		a: 'Solo viernes y sábado, desde las 20:00. El resto de días el servicio termina a las 17:00.',
	},
	{
		q: '¿Se pueden celebrar bodas o bautizos?',
		a: 'Sí. La casa cuenta con salón de celebraciones y organiza bodas, bautizos, comuniones y reuniones familiares. Llama al 968 81 24 70 para hablar del menú y la disponibilidad.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La web no publica una carta ni un precio cerrado. La composición del menú y las condiciones para grupos se consultan en el restaurante o por teléfono.',
	},
	{
		q: '¿Se puede reservar una mesa?',
		a: 'La web no gestiona reservas. Llama al 968 81 24 70 para consultar disponibilidad, una comida de grupo o una celebración.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha de Google indica acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoPatio, alt: 'Patio de Restaurante Paco iluminado para una celebración' },
	{ src: IMAGES.fotoJardin, alt: 'Jardín de Restaurante Paco preparado para una ceremonia' },
	{ src: IMAGES.fotoPaella, alt: 'Paella de marisco con langostinos' },
	{ src: IMAGES.fotoEntrantes, alt: 'Entrantes y aperitivos en la mesa' },
	{ src: IMAGES.fotoCarpaccio, alt: 'Carpaccio con lascas de queso' },
	{ src: IMAGES.fotoCarne, alt: 'Carne con patatas y verduras' },
	{ src: IMAGES.fotoMesa, alt: 'Mesa preparada para un banquete de celebración' },
	{ src: IMAGES.fotoEmbutidos, alt: 'Tabla de embutidos y quesos' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.fullName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34968812470',
	servesCuisine: ['Española'],
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
			name: 'Aparcamiento adaptado para sillas de ruedas',
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
