/**
 * Datos de Belleza de Yuliana — Avenida Pedro Salinas, 5
 * (Florisol, Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Belleza de Yuliana,
 *   36.7303968,-4.4472339, feature 0xd72f715a8bed777:0xaf51e3c60ebb7e0f
 * - Reverse-geocode OSM (Nominatim): Avenida Pedro Salinas 5, Florisol,
 *   Bailén-Miraflores, Málaga 29010.
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

import fotoPortada from '../assets/fotos/belleza-yuliana-malaga.svg';
import fotoSalon from '../assets/fotos/belleza-yuliana-salon.svg';
import fotoFacial from '../assets/fotos/belleza-yuliana-facial.svg';
import fotoCorporal from '../assets/fotos/belleza-yuliana-corporal.svg';
import logo from '../assets/fotos/belleza-yuliana-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoSalon,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Belleza+de+Yuliana/@36.7303968,-4.4472339,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f715a8bed777:0xaf51e3c60ebb7e0f!8m2!3d36.7303968!4d-4.4472339!16s%2Fg%2F11s0yg_m27?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Belleza de Yuliana',
	shortName: 'Yuliana',
	tagline: 'Salón de belleza en Bailén-Miraflores, Málaga',
	claim: 'Belleza y cuidado en Florisol',
	summary:
		'Belleza de Yuliana es un salón de belleza en Avenida Pedro Salinas, 5 (Florisol, Bailén-Miraflores, 29010 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Avenida Pedro Salinas, 5',
	district: 'Florisol',
	borough: 'Bailén-Miraflores',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref: GOOGLE_MAPS,
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20Pedro%20Salinas%2C%205%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7303968, lng: -4.4472339 },
	featureId: '0xd72f715a8bed777:0xaf51e3c60ebb7e0f',
	priceRange: '€€',
	categories: ['Salón de belleza', 'Cuidado facial', 'Cuidado corporal', 'Belleza'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del salón para ver apertura actual y festivos.',
	siteUrl: 'https://belleza-de-yuliana.vercel.app',
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
		icon: 'ri-sparkling-2-line',
		title: 'Salón de belleza',
		text: 'Salón de belleza en Florisol, Bailén-Miraflores.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Pedro Salinas, 5',
		text: 'Avenida Pedro Salinas, 5 · 29010 Málaga. En Florisol.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Facial y corporal',
		text: 'Áreas habituales: facial, corporal y belleza. Confirma tu servicio en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Limpieza, hidratación y luminosidad. Confirma protocolo y precio en la ficha de Google.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y bienestar. Consulta disponibilidad en la ficha.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada',
		text: 'Cejas y pestañas. La ficha no publica carta: pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma técnica y precio antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Florisol (29010). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Facial y mirada',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Limpieza facial', precio: 'A consultar' },
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Corporal y belleza',
		items: [
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Florisol',
		text: 'Pedro Salinas, 5: barrio de Florisol, Bailén-Miraflores, con vida de barrio.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Trato personalizado',
		text: 'Salón de belleza cercano: diagnóstico previo y asesoramiento según tu piel.',
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
		title: 'Barrio accesible',
		text: 'En Bailén-Miraflores: ideal si vives o trabajas en la zona norte de Málaga.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Si tienes alergias o un caso especial, pregunta al salón antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Belleza de Yuliana?',
		a: 'En Avenida Pedro Salinas, 5 (Florisol, Bailén-Miraflores, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El salón no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre y el tipo de negocio, belleza facial, corporal y cuidado de la piel (mirada incluida). La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el salón según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha para ver apertura actual, festivos y cambios.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales del salón (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Salón de belleza' },
	{ icon: 'ri-heart-pulse-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Bailén-Miraflores, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Belleza de Yuliana en Florisol (Málaga)' },
	{ src: IMAGES.fotoInterior, alt: 'Salón Belleza de Yuliana en Av. Pedro Salinas' },
	{ src: IMAGES.fotoCejas, alt: 'Tratamiento facial en Belleza de Yuliana' },
	{ src: IMAGES.fotoCalle, alt: 'Tratamiento corporal en Belleza de Yuliana' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Yuliana Florisol Málaga',
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
		name: `Servicios de ${BUSINESS.shortName}`,
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
	openingHoursSpecification: [],
};
