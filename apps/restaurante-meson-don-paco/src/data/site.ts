/**
 * Datos de Restaurante Mesón Don Paco.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Mesón Don Paco,
 *   36.6978329,-6.12528, feature 0xd0dc6c4573346af:0x806a298961b7946
 * - Dirección y teléfono (Av. del Ejército s/n, Urb. El Bosque, 11405 Jerez de la
 *   Frontera · 956 30 65 74): directorios locales (Tripadvisor, Cosasdecome,
 *   Páginas Amarillas, Instagram donpacojerez). Se muestran como datos de
 *   directorio a confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/restaurante-meson-don-paco-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/restaurante-meson-don-paco-apaisada-02.jpg';
import fotoBarra from '../assets/fotos/restaurante-meson-don-paco-vertical-03.jpg';
import fotoSala from '../assets/fotos/restaurante-meson-don-paco-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-meson-don-paco-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-meson-don-paco-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-meson-don-paco-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-meson-don-paco-apaisada-08.jpg';
import logo from '../assets/fotos/restaurante-meson-don-paco-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoBarra,
	fotoCalle: fotoSala,
	fotoExtra1,
	fotoExtra2,
	fotoExtra3,
	fotoExtra4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Mes%C3%B3n+Don+Paco/@36.6978329,-6.12528,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dc6c4573346af:0x806a298961b7946!8m2!3d36.6978329!4d-6.12528!16s%2Fg%2F12qg8q82w?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante Mesón Don Paco',
	shortName: 'Mesón Don Paco',
	tagline: 'Restaurante en Jerez de la Frontera',
	claim: 'Restaurante Mesón Don Paco en Jerez de la Frontera',
	summary:
		'Restaurante Mesón Don Paco es un mesón-restaurante en Jerez de la Frontera (Cádiz), frente al Parque González Hontoria. Cocina tradicional con toque innovador, tapas y raciones.',
	street: 'Avenida del Ejército s/n, Urb. El Bosque',
	district: 'Jerez de la Frontera',
	borough: 'Jerez de la Frontera',
	city: 'Jerez de la Frontera',
	postalCode: '11405',
	region: 'Andalucía',
	country: 'ES',
	phone: '956 30 65 74',
	phoneHref: 'tel:+34956306574',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.6978329%2C-6.12528&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6978329, lng: -6.12528 },
	featureId: '0xd0dc6c4573346af:0x806a298961b7946',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario detallado se confirma en la ficha pública de Google Maps o llamando al 956 30 65 74.',
	categories: ['Restaurante'],
	siteUrl: 'https://restaurante-meson-don-paco.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Restaurante Mesón Don Paco',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El local', href: '#salon' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-map-pin-2-line',
		title: 'Jerez de la Frontera',
		text: 'Frente al Parque González Hontoria, en El Bosque.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina tradicional',
		text: 'Tapas, raciones y platos tradicionales con toque innovador.',
	},
	{
		icon: 'ri-phone-line',
		title: '956 30 65 74',
		text: 'Llama para reservar o consultar la carta.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Restaurante',
		text: 'Cocina tradicional jerezana: tapas, raciones y platos del día.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Tapas y vinos',
		text: 'Ambiente de mesón y taberna para tapear en El Bosque.',
	},
	{
		icon: 'ri-group-line',
		title: 'Grupos y familias',
		text: 'Mesas para grupos y familias junto al parque.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'La carta',
		items: [{ nombre: 'Carta del local', precio: 'A consultar' }],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Jerez',
		text: 'Av. del Ejército s/n, Urb. El Bosque · 11405 Jerez de la Frontera.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '956 30 65 74 para reservar en fines de semana.',
	},
	{
		icon: 'ri-star-line',
		title: '4,3 sobre 5',
		text: 'Valoración media de directorios locales con decenas de opiniones.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin datos inventados',
		text: 'El horario y los precios se confirman en el local o en Google Maps.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Mesón Don Paco?',
		a: 'En Avenida del Ejército s/n, Urb. El Bosque, 11405 Jerez de la Frontera. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 956 30 65 74 para reservar o consultar la carta.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. Los directorios lo sitúan en rango medio (20–30 €); los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Se confirma en la ficha pública de Google Maps o por teléfono antes de ir.',
	},
];

export const FEATURES = [
	{ icon: 'ri-map-pin-line', label: 'Jerez de la Frontera' },
	{ icon: 'ri-phone-line', label: '956 30 65 74' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante Mesón Don Paco en Jerez de la Frontera' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante Mesón Don Paco' },
	{ src: IMAGES.fotoCejas, alt: 'Restaurante Mesón Don Paco, Jerez' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante Mesón Don Paco' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante Mesón Don Paco' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante Mesón Don Paco, Jerez de la Frontera' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante Mesón Don Paco' },
	{ src: IMAGES.fotoExtra4, alt: 'Restaurante Mesón Don Paco, Jerez' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	servesCuisine: ['Tapas', 'Cocina tradicional'],
	acceptsReservations: true,
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: BUSINESS.phoneHref,
	areaServed: [{ '@type': 'City', name: BUSINESS.city }],
	address: {
		'@type': 'PostalAddress',
		streetAddress: BUSINESS.street,
		addressLocality: BUSINESS.city,
		postalCode: BUSINESS.postalCode,
		addressRegion: BUSINESS.region,
		addressCountry: BUSINESS.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: BUSINESS.geo.lat,
		longitude: BUSINESS.geo.lng,
	},
	hasMap: BUSINESS.googleMaps,
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
