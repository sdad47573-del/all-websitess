/**
 * Datos de B'bells Salón de Belleza — Calle Salzillo, 5
 * (La Luz, Carretera de Cádiz, 29004 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: B'bells Salón de Belleza,
 *   36.6977613,-4.4552113, feature 0xd72f9df6afec81f:0x7ad051b0b6cf46f2
 * - Reverse-geocode OSM (Nominatim): Calle Salzillo 5, La Luz,
 *   Carretera de Cádiz, Málaga 29004.
 *
 * Lo que la web NO inventa:
 * - La ficha no aporta teléfono, horario, web propia, carta de servicios,
 *   precios ni recuento de reseñas verificable desde fuera, así que no se
 *   publican. Todo remite a "consultar la ficha de Google Maps".
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web usa imágenes de recurso
 * de Pexels (licencia libre, sin atribución) que no son fotos del local. Ver
 * README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/bbells-malaga.jpg';
import fotoSalon from '../assets/fotos/bbells-salon.jpg';
import fotoPelu from '../assets/fotos/bbells-peluqueria.jpg';
import fotoEstetica from '../assets/fotos/bbells-estetica.jpg';
import logo from '../assets/fotos/bbells-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoSalon,
	fotoCejas: fotoPelu,
	fotoCalle: fotoEstetica,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/B%27bells+Sal%C3%B3n+de+Belleza/@36.6977613,-4.4552113,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9df6afec81f:0x7ad051b0b6cf46f2!8m2!3d36.6977613!4d-4.4552113!16s%2Fg%2F11h_820ncr?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: "B'bells Salón de Belleza",
	shortName: "B'bells",
	tagline: 'Salón de belleza en La Luz, Málaga',
	claim: 'Peluquería y belleza en Carretera de Cádiz',
	summary:
		"B'bells Salón de Belleza es un salón de belleza en Calle Salzillo, 5 (La Luz, Carretera de Cádiz, 29004 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.",
	street: 'Calle Salzillo, 5',
	district: 'La Luz',
	borough: 'Carretera de Cádiz',
	city: 'Málaga',
	postalCode: '29004',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref: GOOGLE_MAPS,
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Salzillo%2C%205%2C%2029004%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6977613, lng: -4.4552113 },
	featureId: '0xd72f9df6afec81f:0x7ad051b0b6cf46f2',
	priceRange: '€€',
	categories: ['Salón de belleza', 'Peluquería', 'Cuidado facial', 'Belleza'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del salón para ver apertura actual y festivos.',
	siteUrl: 'https://www.sur-digital.com/bbells-salon-belleza',
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
	{ label: 'Servicios', href: '/bbells-salon-belleza/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/bbells-salon-belleza/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería y belleza',
		text: "Salón de belleza en La Luz, Carretera de Cádiz.",
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Salzillo, 5',
		text: 'Calle Salzillo, 5 · 29004 Málaga. En La Luz.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Pelo y facial',
		text: 'Áreas habituales: peluquería, facial y belleza. Confirma tu servicio en la ficha.',
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
		text: 'En La Luz (29004). Abre “Cómo llegar” para navegar con Google Maps.',
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
		grupo: 'Belleza',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En La Luz',
		text: 'Salzillo, 5: barrio de La Luz, Carretera de Cádiz, con vida de barrio.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Pelo y belleza',
		text: 'Peluquería y belleza en el mismo sitio: corte, color y cuidado de la piel.',
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
		text: 'En Carretera de Cádiz: ideal si vives o trabajas en la zona oeste de Málaga.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Si tienes alergias (tintes, cosmética) o un caso especial, pregunta antes de reservar.',
	},
];

export const FAQ = [
	{
		q: "¿Dónde está B'bells Salón de Belleza?",
		a: 'En Calle Salzillo, 5 (La Luz, Carretera de Cádiz, 29004 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El salón no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, peluquería y belleza (corte, color, facial y cuidado de la piel). La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
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
		q: '¿Las fotos son del salón?',
		a: 'No. Son imágenes de recurso de un salón de belleza (Pexels, licencia libre) y se usan como apoyo visual: las fotos reales del local están en su ficha de Google Maps. Las de Maps no se pueden copiar por derechos de autor.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-sparkling-2-line', label: 'Salón de belleza' },
	{ icon: 'ri-map-pin-line', label: 'La Luz, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Interior de un salón de belleza con puestos de peluquería' },
	{ src: IMAGES.fotoInterior, alt: 'Cabina de tratamientos de estética' },
	{ src: IMAGES.fotoCejas, alt: 'Clienta con el pelo peinado en un salón de belleza' },
	{ src: IMAGES.fotoCalle, alt: 'Tratamiento facial en una cabina de estética' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: "B'bells La Luz Málaga",
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
