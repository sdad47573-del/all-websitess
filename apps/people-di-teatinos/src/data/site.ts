/**
 * Datos de Centro de Depilación Láser y Belleza People DI - Teatinos —
 * Calle Sófocles, 11 (El Cónsul, Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Centro de Depilación Láser y Belleza
 *   People DI - Teatinos, 36.7224056,-4.4805699,
 *   feature 0xd72f0cb210158af:0x2873cbd150a8c709
 * - Reverse-geocode OSM (Nominatim): Calle Sófocles 11, El Cónsul,
 *   Teatinos-Universidad, Málaga 29010.
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

import fotoPortada from '../assets/fotos/peopledi-malaga.svg';
import fotoCentro from '../assets/fotos/peopledi-centro.svg';
import fotoLaser from '../assets/fotos/peopledi-laser.svg';
import fotoBelleza from '../assets/fotos/peopledi-belleza.svg';
import logo from '../assets/fotos/peopledi-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoLaser,
	fotoCalle: fotoBelleza,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Centro+de+Depilaci%C3%B3n+L%C3%A1ser+y+Belleza+People+DI+-+Teatinos/@36.7224056,-4.4805699,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f0cb210158af:0x2873cbd150a8c709!8m2!3d36.7224056!4d-4.4805699!16s%2Fg%2F11g81v8n1_?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Centro de Depilación Láser y Belleza People DI - Teatinos',
	shortName: 'People DI',
	tagline: 'Depilación láser y belleza en Teatinos, Málaga',
	claim: 'Láser y belleza en El Cónsul',
	summary:
		'Centro de Depilación Láser y Belleza People DI - Teatinos es un centro de depilación láser y belleza en Calle Sófocles, 11 (El Cónsul, Teatinos-Universidad, 29010 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Calle Sófocles, 11',
	district: 'El Cónsul',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref: GOOGLE_MAPS,
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20S%C3%B3focles%2C%2011%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7224056, lng: -4.4805699 },
	featureId: '0xd72f0cb210158af:0x2873cbd150a8c709',
	priceRange: '€€',
	categories: ['Depilación láser', 'Centro de belleza', 'Cuidado facial', 'Belleza'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del centro para ver apertura actual y festivos.',
	siteUrl: 'https://people-di-teatinos.vercel.app',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El centro', href: '#salon' },
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
		title: 'Depilación láser',
		text: 'Centro de depilación láser y belleza en El Cónsul, Teatinos.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Sófocles, 11',
		text: 'Calle Sófocles, 11 · 29010 Málaga. En El Cónsul.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Láser y belleza',
		text: 'Áreas habituales: láser, facial y belleza. Confirma tu servicio en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-flashlight-line',
		title: 'Depilación láser',
		text: 'Depilación láser por zonas. Pide información y precio en la ficha de Google del centro.',
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
		text: 'En El Cónsul (29010). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Depilación láser',
		items: [
			{ nombre: 'Láser por zonas', precio: 'A consultar' },
			{ nombre: 'Bono de sesiones', precio: 'A consultar' },
			{ nombre: 'Diagnóstico previo', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En El Cónsul',
		text: 'Sófocles, 11: barrio de El Cónsul, Teatinos, con vida de barrio.',
	},
	{
		icon: 'ri-flashlight-line',
		title: 'Especialistas en láser',
		text: 'Centro dedicado a depilación láser: diagnóstico previo y plan de sesiones.',
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
		text: 'El láser tiene contraindicaciones (embarazo, fototipos, medicación): pregunta antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está People DI Teatinos?',
		a: 'En Calle Sófocles, 11 (El Cónsul, Teatinos-Universidad, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El centro no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, depilación láser y belleza (facial, corporal y cuidado de la piel). La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el centro según zona y sesiones.',
	},
	{
		q: '¿Duele la depilación láser?',
		a: 'Depende de la zona, el fototipo y el equipo. Pregunta al centro por su tecnología, contraindicaciones y cuidados antes y después.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales del centro (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-flashlight-line', label: 'Depilación láser' },
	{ icon: 'ri-sparkling-2-line', label: 'Belleza' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'People DI, depilación láser y belleza en Teatinos (Málaga)' },
	{ src: IMAGES.fotoInterior, alt: 'Centro People DI en Calle Sófocles' },
	{ src: IMAGES.fotoCejas, alt: 'Depilación láser en People DI (Málaga)' },
	{ src: IMAGES.fotoCalle, alt: 'Belleza en People DI (Málaga)' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'People DI Teatinos Málaga',
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
