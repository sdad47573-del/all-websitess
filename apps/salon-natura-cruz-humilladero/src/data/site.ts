/**
 * Datos de Salón de belleza Natura — Avenida Nehemías
 * (Cortijo de Torres, Cruz de Humilladero, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salón de belleza Natura,
 *   36.70443,-4.455783, feature 0xd72f9d8cc5cb5d3:0xc922e8244b8f9b61
 * - Reverse-geocode OSM (Nominatim): Avenida Nehemías, Cortijo de Torres,
 *   Cruz de Humilladero, Málaga 29006.
 *
 * Nota: existe otro negocio distinto, "Natura Belleza" (Camino del Pato 22,
 * Puerta Blanca), con su propia web en apps/natura-belleza. No confundir.
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

import fotoPortada from '../assets/fotos/salon-natura-malaga.svg';
import fotoSalon from '../assets/fotos/salon-natura-salon.svg';
import fotoFacial from '../assets/fotos/salon-natura-facial.svg';
import fotoCorporal from '../assets/fotos/salon-natura-corporal.svg';
import logo from '../assets/fotos/salon-natura-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoSalon,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Sal%C3%B3n+de+belleza+Natura/@36.70443,-4.455783,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9d8cc5cb5d3:0xc922e8244b8f9b61!8m2!3d36.70443!4d-4.455783!16s%2Fg%2F11b6nk8wh2?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Salón de belleza Natura',
	shortName: 'Natura',
	tagline: 'Salón de belleza en Cruz de Humilladero, Málaga',
	claim: 'Belleza natural en Cortijo de Torres',
	summary:
		'Salón de belleza Natura es un salón de belleza en Avenida Nehemías (Cortijo de Torres, Cruz de Humilladero, 29006 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Avenida Nehemías',
	district: 'Cortijo de Torres',
	borough: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29006',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref: GOOGLE_MAPS,
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20Nehem%C3%ADas%2C%2029006%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.70443, lng: -4.455783 },
	featureId: '0xd72f9d8cc5cb5d3:0xc922e8244b8f9b61',
	priceRange: '€€',
	categories: ['Salón de belleza', 'Cuidado facial', 'Cuidado corporal', 'Belleza'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del salón para ver apertura actual y festivos.',
	siteUrl: 'https://salon-natura-cruz-humilladero.vercel.app',
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
		icon: 'ri-leaf-line',
		title: 'Belleza natural',
		text: 'Salón de belleza en Cortijo de Torres, Cruz de Humilladero.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Av. Nehemías',
		text: 'Avenida Nehemías · 29006 Málaga. En Cortijo de Torres.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-sparkling-2-line',
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
		text: 'En Cortijo de Torres (29006). Abre “Cómo llegar” para navegar con Google Maps.',
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
		title: 'En Cruz de Humilladero',
		text: 'Av. Nehemías: zona de Cortijo de Torres, bien comunicada.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Enfoque natural',
		text: 'El nombre anuncia belleza natural: trato personalizado y diagnóstico previo.',
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
		icon: 'ri-car-line',
		title: 'Zona accesible',
		text: 'En Cruz de Humilladero: ideal si vives o trabajas en la zona norte de Málaga.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Si tienes alergias o un caso especial, pregunta al salón antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Salón de belleza Natura?',
		a: 'En Avenida Nehemías (Cortijo de Torres, Cruz de Humilladero, 29006 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
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
	{ icon: 'ri-leaf-line', label: 'Salón de belleza' },
	{ icon: 'ri-sparkling-2-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Cruz de Humilladero, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Salón de belleza Natura en Cruz de Humilladero (Málaga)' },
	{ src: IMAGES.fotoInterior, alt: 'Salón Natura en Av. Nehemías, Málaga' },
	{ src: IMAGES.fotoCejas, alt: 'Tratamiento facial en Salón Natura' },
	{ src: IMAGES.fotoCalle, alt: 'Tratamiento corporal en Salón Natura' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Natura Cruz de Humilladero Málaga',
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
