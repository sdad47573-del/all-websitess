/**
 * Datos de Salón De Belleza Isaro - Córdoba — Av. de Manolete 14
 * (Poniente Sur, 14005 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salón De Belleza Isaro - Córdoba,
 *   37.879831,-4.7969215, feature 0xd6d20a76a505a3b:0x7928dc3aa5de2075
 * - Fresha: Av. de Manolete, 14, Poniente Sur, 14005 Córdoba;
 *   servicios Manicure / Men's Manicure / Pedicure;
 *   horario lun–vie 9:30-19:00, sáb 9:00-14:00, dom cerrado.
 * - Instagram/TikTok @salon_debellezaisaro y Facebook salondebellezaisaro:
 *   peluquería y belleza, Avda Manolete 14 Córdoba,
 *   638 25 92 41 / 957 46 82 04.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios publicada, no se publican importes.
 */

import fotoPortada from '../assets/fotos/salon-belleza-isaro-vertical-01.jpg';
import fotoEstudio from '../assets/fotos/salon-belleza-isaro-vertical-02.jpg';
import fotoFacial from '../assets/fotos/salon-belleza-isaro-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/salon-belleza-isaro-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/salon-belleza-isaro-vertical-05.jpg';
import fotoGaleria2 from '../assets/fotos/salon-belleza-isaro-vertical-06.jpg';
import fotoGaleria3 from '../assets/fotos/salon-belleza-isaro-vertical-07.jpg';
import fotoGaleria4 from '../assets/fotos/salon-belleza-isaro-vertical-08.jpg';
import logo from '../assets/fotos/salon-belleza-isaro-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoEstudio,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	fotoGaleria1,
	fotoGaleria2,
	fotoGaleria3,
	fotoGaleria4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Sal%C3%B3n+De+Belleza+Isaro+-+C%C3%B3rdoba/@37.879831,-4.7969215,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d20a76a505a3b:0x7928dc3aa5de2075!8m2!3d37.879831!4d-4.7969215!16s%2Fg%2F1q5bmyzhj?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Salón De Belleza Isaro - Córdoba',
	shortName: 'Isaro',
	tagline: 'Peluquería, manicura y pedicura en Poniente Sur',
	claim: 'Cuidamos tu imagen con cariño',
	summary:
		'Salón De Belleza Isaro - Córdoba es una peluquería y centro de belleza en Av. de Manolete 14 (Poniente Sur, 14005 Córdoba): peluquería, manicura y pedicura. Llama al 638 25 92 41 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'Av. de Manolete 14',
	district: 'Poniente Sur',
	borough: 'Distrito Poniente Sur',
	city: 'Córdoba',
	postalCode: '14005',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '638 25 92 41',
	phoneHref: 'tel:+34638259241',
	phoneSecondary: '957 46 82 04',
	whatsapp: 'https://wa.me/34638259241?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Isaro.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	instagram: 'https://www.instagram.com/salon_debellezaisaro/',
	tiktok: 'https://www.tiktok.com/@salon_debellezaisaro',
	facebook: 'https://www.facebook.com/salondebellezaisaro/',
	fresha: 'https://www.fresha.com/lvp/salon-de-belleza-isaro-avenida-de-manolete-cordoba-LkZ17J',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.879831%2C-4.7969215&z=17&output=embed',
	geo: { lat: 37.879831, lng: -4.7969215 },
	featureId: '0xd6d20a76a505a3b:0x7928dc3aa5de2075',
	priceRange: '€€',
	categories: ['Peluquería', 'Manicura', 'Pedicura', 'Belleza'],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:30–19:00' },
		{ days: 'Sábado', hours: '9:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según ficha agregada (Fresha). Confirma en la ficha de Google o llamando al 638 25 92 41, porque puede variar en festivos.',
	siteUrl: 'https://salon-belleza-isaro.vercel.app',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El salón', href: '#salon' },
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
		icon: 'ri-scissors-2-line',
		title: 'Peluquería y belleza',
		text: 'Cuidan tu imagen con cariño en Poniente Sur.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Manolete 14',
		text: 'Av. de Manolete 14 · 14005 Córdoba.',
	},
	{
		icon: 'ri-phone-line',
		title: '638 25 92 41',
		text: 'Cita por teléfono o WhatsApp. Domingos cerrado.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura y pedicura',
		text: 'Manicura de hombre y mujer + pedicura.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería y belleza. Confirma servicio y precio en el 638 25 92 41.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura',
		text: 'Manicura de mujer y de hombre. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-footprint-line',
		title: 'Pedicura',
		text: 'Pedicura completa. Consulta disponibilidad.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 638 25 92 41 (o 957 46 82 04) o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Poniente Sur (14005). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Peluquería', precio: 'A consultar' },
			{ nombre: 'Peinado eventos', precio: 'A consultar' },
			{ nombre: 'Color', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Uñas',
		items: [
			{ nombre: 'Manicura', precio: 'A consultar' },
			{ nombre: 'Manicura de hombre', precio: 'A consultar' },
			{ nombre: 'Pedicura', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Poniente Sur',
		text: 'Av. de Manolete 14: zona Poniente Sur de Córdoba.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería de barrio',
		text: 'Peluquería y belleza con trato cercano.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Dos teléfonos',
		text: '638 25 92 41 y 957 46 82 04, más WhatsApp.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Lun–vie 9:30–19:00',
		text: 'Sábados 9:00–14:00. Domingo cerrado.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manos y pies',
		text: 'Manicura (también de hombre) y pedicura.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Salón De Belleza Isaro?',
		a: 'En Av. de Manolete 14 (Poniente Sur, 14005 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 638 25 92 41 (o al 957 46 82 04) o por WhatsApp. También puedes usar el teléfono de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería y belleza: manicura (de mujer y de hombre) y pedicura. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el salón según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 9:30–19:00, sábado 9:00–14:00 y domingo cerrado, según ficha agregada. Confirma festivos por teléfono.',
	},
	{
		q: '¿Tienen redes?',
		a: 'Sí: Instagram y TikTok (@salon_debellezaisaro) y Facebook (salondebellezaisaro).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-hand-heart-line', label: 'Manicura y pedicura' },
	{ icon: 'ri-map-pin-line', label: 'Poniente Sur, Córdoba' },
	{ icon: 'ri-phone-line', label: '638 25 92 41' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Salón De Belleza Isaro en Poniente Sur (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Isaro en Av. de Manolete 14 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Isaro Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Isaro Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Isaro en Manolete — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Isaro (14005 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Isaro, Poniente Sur — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Isaro Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Isaro Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34638259241',
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
	sameAs: [BUSINESS.instagram, BUSINESS.tiktok, BUSINESS.facebook, BUSINESS.fresha],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:30',
			closes: '19:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '09:00',
			closes: '14:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: `Servicios de ${BUSINESS.shortName}`,
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
};
