/**
 * Datos de Belleza · Mi Belle Peluquería & Estética — C. Martínez de la Rosa, 43
 * (Suárez / Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Google Maps (enlace aportado): «Belleza», 36.7271655,-4.4410212 (el pin cae
 *   en C. Martínez de la Rosa, verificado por geocodificación inversa).
 * - Instagram del salón (publicaciones propias y activas): «Mi Belle Peluquería
 *   & Estética, Tu Belleza es Nuestra Pasión», C. Martínez de la Rosa, 43,
 *   teléfonos 675 205 935 y 602 370 271, servicios de manicura, pedicura,
 *   peluquería y depilación.
 *
 * Nota de honestidad: la ficha de Maps solo publica el nombre «Belleza» y la
 * ubicación; la dirección exacta, los teléfonos y los servicios se toman de las
 * publicaciones del salón en Instagram. Si el titular detecta un dato erróneo,
 * debe corregirse en `BUSINESS` antes de publicar.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoSalon from '../assets/fotos/belleza-martinez-rosa-malaga.svg';
import fotoPeluqueria from '../assets/fotos/belleza-peluqueria-color-malaga.svg';
import fotoUnas from '../assets/fotos/belleza-manicura-pedicura-malaga.svg';
import fotoDepi from '../assets/fotos/belleza-depilacion-malaga.svg';
import logo from '../assets/fotos/belleza-salon-logo.svg';

export const IMAGES = {
	fotoFachada: fotoSalon,
	fotoInterior: fotoPeluqueria,
	fotoCejas: fotoUnas,
	fotoCalle: fotoDepi,
	logo,
};

export const BUSINESS = {
	name: 'Belleza · Mi Belle Peluquería & Estética',
	shortName: 'Mi Belle',
	tagline: 'Peluquería y estética en Suárez, Málaga',
	claim: 'Tu belleza es nuestra pasión',
	summary:
		'Mi Belle Peluquería & Estética, en la Calle Martínez de la Rosa, 43 (Suárez, 29010 Málaga). Peluquería, manicura, pedicura y depilación con trato cercano. Cita por WhatsApp al 675 205 935.',
	street: 'Calle Martínez de la Rosa, 43',
	district: 'Suárez · Bailén-Miraflores',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '675 205 935',
	phoneHref: 'tel:+34675205935',
	phone2Display: '602 370 271',
	phone2Href: 'tel:+34602370271',
	whatsapp: 'https://wa.me/34675205935?text=Hola%20Mi%20Belle%2C%20quiero%20pedir%20cita',
	googleMaps:
		'https://www.google.com/maps/place/Belleza/@36.7271655,-4.4410212,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7144937b07f:0xecb0e9e95cebfe82!8m2!3d36.7271655!4d-4.4410212!16s%2Fg%2F11fm6p63fy?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Mart%C3%ADnez%20de%20la%20Rosa%2C%2043%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7271655, lng: -4.4410212 },
	priceRange: '€€',
	categories: [
		'Peluquería',
		'Salón de belleza',
		'Manicura y pedicura',
		'Depilación',
		'Estética',
	],
	hours: [
		{ days: 'Lunes a sábado', hours: 'A confirmar por WhatsApp' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'El salón no publica horario: confirma apertura y pide cita por WhatsApp al 675 205 935.',
	siteUrl: 'https://www.sur-digital.com/belleza-peluqueria-estetica',
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
	{ label: 'Servicios', href: '/belleza-peluqueria-estetica/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/belleza-peluqueria-estetica/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería',
		text: 'Corte, color y peinado con el cuidado que tu pelo merece.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Manicura y pedicura',
		text: 'Cuidado completo de manos y pies, la especialidad de la casa.',
	},
	{
		icon: 'ri-scissors-cut-line',
		title: 'Depilación',
		text: 'Depilación por zonas. Pregunta precio por WhatsApp.',
	},
	{
		icon: 'ri-whatsapp-line',
		title: 'Cita por WhatsApp',
		text: 'Escríbenos al 675 205 935: confirman servicio y hora.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería',
		text: 'Corte, color y peinado para un cambio de look completo. Precio a confirmar.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Manicura',
		text: 'Manicura y esmaltado con acabado cuidado. Consulta diseños por WhatsApp.',
	},
	{
		icon: 'ri-footprint-line',
		title: 'Pedicura',
		text: 'Pedicura completa y cuidado de pies. Pide cita al 675 205 935.',
	},
	{
		icon: 'ri-scissors-cut-line',
		title: 'Depilación',
		text: 'Depilación por zonas según tu piel. Te confirman precio al reservar.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Estética',
		text: 'Tratamientos de belleza y cuidado personal en el salón.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Asesoramiento',
		text: 'Cuéntales tu caso por WhatsApp y te orientan sin compromiso.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte y peinado', precio: 'A consultar' },
			{ nombre: 'Color y cambio de look', precio: 'A consultar' },
			{ nombre: 'Tratamientos del cabello', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Uñas, depilación y estética',
		items: [
			{ nombre: 'Manicura', precio: 'A consultar' },
			{ nombre: 'Pedicura', precio: 'A consultar' },
			{ nombre: 'Depilación por zonas', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-hand-2',
		title: 'Uñas cuidadas',
		text: 'Manicura y pedicura como especialidad: manos y pies siempre a punto.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Pelo y estética juntos',
		text: 'No vayas a dos sitios: corte, color, uñas y depilación en una visita.',
	},
	{
		icon: 'ri-whatsapp-line',
		title: 'Reserva por WhatsApp',
		text: 'Sin llamadas perdidas: escribe al 675 205 935 y te confirman.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Precio claro antes',
		text: 'Sin carta publicada: precio cerrado por WhatsApp antes de empezar.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'En Suárez',
		text: 'Martínez de la Rosa, 43: salón de barrio en Bailén-Miraflores.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Trato cercano',
		text: 'Tu belleza es su pasión: atención personalizada de verdad.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el salón?',
		a: 'En la Calle Martínez de la Rosa, 43 (Suárez, Bailén-Miraflores, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Por WhatsApp al 675 205 935 o llamando al 602 370 271. Te confirman servicio y hora.',
	},
	{
		q: '¿Qué servicios hace?',
		a: 'Peluquería (corte, color, peinado), manicura, pedicura, depilación y estética.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'El salón no publica precios, así que esta web no inventa importes. Pide precio cerrado por WhatsApp al 675 205 935.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'No publican horario: confirma apertura por WhatsApp. El domingo habitualmente cerrado.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'WhatsApp 675 205 935 y llamadas 602 370 271.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Peluquería y color' },
	{ icon: 'ri-hand-2', label: 'Manicura y pedicura' },
	{ icon: 'ri-scissors-cut-line', label: 'Depilación' },
	{ icon: 'ri-whatsapp-line', label: 'Cita por WhatsApp' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Mi Belle Peluquería y Estética en Martínez de la Rosa, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Peluquería y color en el salón de Suárez',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Manicura y pedicura en Mi Belle, Málaga',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Depilación y estética en Bailén-Miraflores',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Mi Belle Peluquería & Estética',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 675 20 59 35',
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
		name: 'Servicios de Mi Belle',
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
