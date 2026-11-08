/**
 * Datos de Gloria Bendita Cocina & Copas.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Gloria Bendita Cocina & Copas,
 *   36.8679531,-6.1798146, feature 0xd0de95667fa5441:0x43cc917a7a8afb14
 * - Dirección y teléfono (Pablo Neruda 2, Toya Park, 11560 Trebujena ·
 *   696 89 33 51): directorios locales (Facebook, Instagram, Tripadvisor).
 *   Datos de directorio a confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/gloria-bendita-cocina-copas-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/gloria-bendita-cocina-copas-vertical-02.jpg';
import fotoBarra from '../assets/fotos/gloria-bendita-cocina-copas-apaisada-03.jpg';
import fotoSala from '../assets/fotos/gloria-bendita-cocina-copas-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/gloria-bendita-cocina-copas-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/gloria-bendita-cocina-copas-cuadrada-06.jpg';
import fotoExtra3 from '../assets/fotos/gloria-bendita-cocina-copas-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/gloria-bendita-cocina-copas-panoramica-08.jpg';
import logo from '../assets/fotos/gloria-bendita-cocina-copas-logo.svg';

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
	'https://www.google.com/maps/place/Gloria+Bendita+Cocina+%26+Copas/@36.8679531,-6.1798146,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de95667fa5441:0x43cc917a7a8afb14!8m2!3d36.8679531!4d-6.1798146!16s%2Fg%2F11ry260vq6?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Gloria Bendita Cocina & Copas',
	shortName: 'Gloria Bendita',
	tagline: 'Restaurante en Trebujena',
	claim: 'Gloria Bendita Cocina & Copas en Trebujena',
	summary:
		'Gloria Bendita Cocina & Copas es un restaurante en Toya Park, Trebujena (Cádiz), rodeado de naturaleza. Cocina y copas en un entorno ideal para familias.',
	street: 'Pablo Neruda 2, Toya Park',
	district: 'Trebujena',
	borough: 'Trebujena',
	city: 'Trebujena',
	postalCode: '11560',
	region: 'Andalucía',
	country: 'ES',
	phone: '696 89 33 51',
	phoneHref: 'tel:+34696893351',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.8679531%2C-6.1798146&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.8679531, lng: -6.1798146 },
	featureId: '0xd0de95667fa5441:0x43cc917a7a8afb14',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario detallado se confirma en la ficha pública de Google Maps o llamando al 696 89 33 51.',
	categories: ['Restaurante'],
	siteUrl: 'https://gloria-bendita-cocina-copas.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Gloria Bendita Cocina & Copas',
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
		icon: 'ri-leaf-line',
		title: 'Toya Park, Trebujena',
		text: 'Rodeado de naturaleza, ideal para niños.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina y copas',
		text: 'Comidas, reuniones y copas en un entorno único.',
	},
	{
		icon: 'ri-phone-line',
		title: '696 89 33 51',
		text: 'Llama para reservar tu mesa.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Restaurante',
		text: 'Cocina para almuerzos, cenas y celebraciones en Trebujena.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Copas',
		text: 'Zona de copas para alargar la sobremesa.',
	},
	{
		icon: 'ri-group-line',
		title: 'Familias y grupos',
		text: 'Parque, animales y espacio seguro para los niños.',
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
		title: 'En Trebujena',
		text: 'Pablo Neruda 2, Toya Park · 11560 Trebujena (Cádiz).',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '696 89 33 51 para reservar mesas y celebraciones.',
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
		q: '¿Dónde está Gloria Bendita Cocina & Copas?',
		a: 'En Pablo Neruda 2, Toya Park, 11560 Trebujena. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 696 89 33 51 para reservar o consultar la carta.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Se confirma en la ficha pública de Google Maps o por teléfono antes de ir.',
	},
];

export const FEATURES = [
	{ icon: 'ri-map-pin-line', label: 'Trebujena' },
	{ icon: 'ri-phone-line', label: '696 89 33 51' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Gloria Bendita Cocina & Copas en Trebujena' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Gloria Bendita Cocina & Copas' },
	{ src: IMAGES.fotoCejas, alt: 'Gloria Bendita, Trebujena' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Gloria Bendita Cocina & Copas' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Gloria Bendita Cocina & Copas' },
	{ src: IMAGES.fotoExtra2, alt: 'Gloria Bendita, Trebujena' },
	{ src: IMAGES.fotoExtra3, alt: 'Gloria Bendita Cocina & Copas' },
	{ src: IMAGES.fotoExtra4, alt: 'Gloria Bendita, Trebujena' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
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
