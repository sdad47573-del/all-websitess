/**
 * Datos de La Coquette, Peluquería y Estética — Avenida José Ribera
 * (El Romeral, Teatinos-Universidad, 29071 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: La Coquette, Peluquería y Estética,
 *   36.7219209,-4.4730013, feature 0xd72f7365b60ff75:0x9162cd496b2e2d80
 * - Reverse-geocode OSM (Nominatim): Avenida José Ribera, El Romeral,
 *   Teatinos-Universidad, Málaga 29071.
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

import fotoPortada from '../assets/fotos/la-coquette-malaga.svg';
import fotoSalon from '../assets/fotos/la-coquette-salon.svg';
import fotoPelo from '../assets/fotos/la-coquette-facial.svg';
import fotoEstetica from '../assets/fotos/la-coquette-corporal.svg';
import logo from '../assets/fotos/la-coquette-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoSalon,
	fotoCejas: fotoPelo,
	fotoCalle: fotoEstetica,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/La+Coquette,+Peluquer%C3%ADa+y+Est%C3%A9tica/@36.7219209,-4.4730013,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7365b60ff75:0x9162cd496b2e2d80!8m2!3d36.7219209!4d-4.4730013!16s%2Fg%2F11hbvb4y3j?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'La Coquette, Peluquería y Estética',
	shortName: 'La Coquette',
	tagline: 'Peluquería y estética en Teatinos, Málaga',
	claim: 'Pelo y estética en El Romeral',
	summary:
		'La Coquette, Peluquería y Estética es un salón de peluquería y estética en Avenida José Ribera (El Romeral, Teatinos-Universidad, 29071 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Avenida José Ribera',
	district: 'El Romeral',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29071',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref: GOOGLE_MAPS,
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20Jos%C3%A9%20Ribera%2C%2029071%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7219209, lng: -4.4730013 },
	featureId: '0xd72f7365b60ff75:0x9162cd496b2e2d80',
	priceRange: '€€',
	categories: ['Peluquería', 'Centro de estética', 'Corte de pelo', 'Cuidado facial'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del salón para ver apertura actual y festivos.',
	siteUrl: 'https://la-coquette.vercel.app',
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
		title: 'Peluquería y estética',
		text: 'Pelo y estética en un mismo salón en El Romeral, Teatinos.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Av. José Ribera',
		text: 'Avenida José Ribera · 29071 Málaga. En El Romeral.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Pelo y facial',
		text: 'Áreas habituales: corte, color, facial y belleza. Confirma tu servicio en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Corte, color y peinado. Pide información y precio en la ficha de Google del salón.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Limpieza, hidratación y luminosidad. Confirma protocolo antes de reservar.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal y belleza',
		text: 'Tratamientos corporales y belleza. Consulta disponibilidad en la ficha.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada',
		text: 'Cejas y pestañas. La ficha no publica carta: pregunta antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En El Romeral (29071). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte', precio: 'A consultar' },
			{ nombre: 'Color / mechas', precio: 'A consultar' },
			{ nombre: 'Peinado', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Estética y belleza',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En El Romeral',
		text: 'Av. José Ribera: barrio de El Romeral, Teatinos, con vida de barrio.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Dos en uno',
		text: 'Peluquería y estética en el mismo sitio: pelo y piel sin ir a dos centros.',
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
		text: 'En Teatinos-Universidad: ideal si vives, estudias o trabajas en la zona oeste de Málaga.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Si tienes alergias (tintes, cosmética) o un caso especial, pregunta antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Coquette?',
		a: 'En Avenida José Ribera (El Romeral, Teatinos-Universidad, 29071 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El salón no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, peluquería (corte, color, peinado) y estética (facial, corporal, mirada y belleza). La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
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
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-sparkling-2-line', label: 'Estética' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'La Coquette, peluquería y estética en Teatinos (Málaga)' },
	{ src: IMAGES.fotoInterior, alt: 'Salón La Coquette en Av. José Ribera' },
	{ src: IMAGES.fotoCejas, alt: 'Peluquería en La Coquette (Málaga)' },
	{ src: IMAGES.fotoCalle, alt: 'Estética en La Coquette (Málaga)' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'La Coquette Teatinos Málaga',
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
