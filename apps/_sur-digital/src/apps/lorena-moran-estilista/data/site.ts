/**
 * Datos de Lorena Morán Estilista — peluquería y color en Av. José Ribera, 3
 * (Teatinos, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Google Maps (enlace aportado): Lorena Morán Estilista, 36.7212936,-4.4721716
 * - Booksy: LORENA MORÁN ESTILISTA, Av. Jose Ribera 3, 29010 Málaga,
 *   5.0 con 117 reseñas, carta completa de servicios con precios y horarios.
 * - Instagram: @lorenamoran.estilista — Balayage, Babylights, Color, Tratamientos, Corte.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de la
 * ficha (copyright de sus autores + condiciones de Google). Por eso esta web trae
 * imágenes propias de marcador (SVG en src/assets/fotos/) con nombres descriptivos.
 * Para poner las fotos reales del salón: guarda tus fotos como JPG en esa carpeta
 * con el mismo nombre y reconstruye. Ver README_IMAGENES.md.
 */

import fotoSalon from '../assets/fotos/lorena-moran-estilista-salon-teatinos-malaga.svg';
import fotoBalayage from '../assets/fotos/lorena-moran-balayage-babylights-malaga.svg';
import fotoCorte from '../assets/fotos/lorena-moran-corte-peinado-malaga.svg';
import fotoTratamiento from '../assets/fotos/lorena-moran-tratamiento-keratina-malaga.svg';
import logo from '../assets/fotos/lorena-moran-estilista-logo.svg';

export const IMAGES = {
	fotoFachada: fotoSalon,
	fotoInterior: fotoCorte,
	fotoCejas: fotoBalayage,
	fotoCalle: fotoTratamiento,
	logo,
};

export const BUSINESS = {
	name: 'Lorena Morán Estilista',
	shortName: 'Lorena Morán',
	tagline: 'Peluquería y color en Teatinos, Málaga',
	claim: 'Balayage, babylights y corte con +18 años de oficio',
	summary:
		'Lorena Morán Estilista es una peluquería en la Avenida José Ribera, 3 (Teatinos, Málaga). Especialista en colorimetría, balayage y babylights, con productos Montibello, Redken y Wella. Reserva online en Booksy o por WhatsApp al 618 24 36 01. Valoración 5,0 con 117 reseñas en Booksy.',
	street: 'Avenida José Ribera, 3',
	district: 'Teatinos – Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '618 24 36 01',
	phoneHref: 'tel:+34618243601',
	whatsapp: 'https://wa.me/34618243601?text=Hola%20Lorena%2C%20quiero%20pedir%20cita',
	instagram: 'https://www.instagram.com/lorenamoran.estilista/',
	booksy:
		'https://booksy.com/es-es/33826_lorena-moran-estilista_peluqueria_29485_malaga',
	googleMaps:
		'https://www.google.com/maps/place/Lorena+Mor%C3%A1n+Estilista/@36.7212936,-4.4721716,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49973090e091d:0xfe5d697713a6fa94!8m2!3d36.7212936!4d-4.4721716!16s%2Fg%2F11y5jcwnp8?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20Jos%C3%A9%20Ribera%2C%203%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7212936, lng: -4.4721716 },
	rating: 5.0,
	ratingDisplay: '5,0',
	reviewCount: 117,
	priceRange: '€€',
	categories: [
		'Peluquería',
		'Balayage',
		'Babylights',
		'Coloración',
		'Corte',
		'Keratina',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00 – 19:00' },
		{ days: 'Sábado', hours: 'Con cita — consulta en Booksy' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario orientativo según Booksy (10:00–19:00). La peluquería trabaja con cita: reserva online en Booksy o confirma por WhatsApp antes de venir.',
	siteUrl: 'https://www.sur-digital.com/lorena-moran-estilista',
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
	{ label: 'Servicios y precios', href: '/lorena-moran-estilista/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/lorena-moran-estilista/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-star-line',
		title: '5,0 en Booksy',
		text: '117 reseñas con la nota máxima. Las clientas destacan el asesoramiento y el trato.',
	},
	{
		icon: 'ri-scissors-line',
		title: '+18 años de oficio',
		text: 'Especialista en colorimetría y corte, con formación continua en balayage y babylights.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva en Booksy',
		text: 'Cita online 24/7 con precio y duración claros, o por WhatsApp al 618 24 36 01.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'En Teatinos',
		text: 'Av. José Ribera, 3: junto a la Universidad, fácil de llegar y con bus a la puerta.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Balayage',
		text: 'Balayage con matiz, tratamiento y peinado. Medio 140 € · Largo 150 € · Extra largo 160 €.',
		price: 'desde 140 €',
	},
	{
		icon: 'ri-sun-line',
		title: 'Babylights y mechas',
		text: 'Mechas ultrafinas fundidas con matiz. Corto 60 € · Medio 75 € · Largo 85 € · Extra 95 €.',
		price: 'desde 60 €',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color',
		text: 'Raíz desde 38 € y color completo desde 45 €, con champú específico y peinado.',
		price: 'desde 38 €',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Corte y peinado',
		text: 'Lavar + corte + peinado: corto 20 € · medio 29 € · largo 35 € · extra largo 45 €.',
		price: 'desde 20 €',
	},
	{
		icon: 'ri-drop-line',
		title: 'Tratamientos y keratina',
		text: 'Hidratación 35–40 €, anticaída 35–40 €, keratina 100–200 € según largo.',
		price: 'desde 35 €',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Hombre y niños',
		text: 'Corte caballero 12 €, niños 8–10 €, rapado 7 €. Mechas caballero desde 40 €.',
		price: 'desde 7 €',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Balayage y mechas',
		items: [
			{ nombre: 'Balayage cabello medio (matiz + tratamiento + peinado, 3 h)', precio: '140 €' },
			{ nombre: 'Balayage cabello largo (5 h)', precio: '150 €' },
			{ nombre: 'Balayage cabello extra largo (5 h 30)', precio: '160 €' },
			{ nombre: 'Babylights corto / medio / largo / extra largo', precio: '60 / 75 / 85 / 95 €' },
			{ nombre: 'Contorno frontal con matiz y peinado', precio: '60 €' },
			{ nombre: 'Gloss / matiz sin amoniaco', precio: '15 – 30 €' },
		],
	},
	{
		grupo: 'Color',
		items: [
			{ nombre: 'Color raíz + secado exprés', precio: '38 €' },
			{ nombre: 'Color raíz corto / medio / largo / extra largo', precio: '41 / 45 / 49 / 59 €' },
			{ nombre: 'Color completo corto / medio / largo / extra largo', precio: '45 / 55 / 65 / 75 €' },
			{ nombre: '2 en 1 y falsa raíz', precio: '15 € / 10 €' },
		],
	},
	{
		grupo: 'Corte y peinado',
		items: [
			{ nombre: 'Lavar + corte + peinado corto / medio / largo / extra largo', precio: '20 / 29 / 35 / 45 €' },
			{ nombre: 'Lavado + peinado corto / medio / largo / extra largo', precio: '20 / 25 / 30 / 40 €' },
			{ nombre: 'Corte adicional a color o mechas', precio: '18 €' },
			{ nombre: 'Flequillo', precio: '8 €' },
		],
	},
	{
		grupo: 'Tratamientos',
		items: [
			{ nombre: 'Hidratación intensa / premium', precio: '35 / 40 €' },
			{ nombre: 'Anticaída medio / largo + ampolla', precio: '35 / 40 € + 5 €' },
			{ nombre: 'Keratina corto / medio / largo / extra largo', precio: '100 / 160 / 170 / 200 €' },
			{ nombre: 'Permanente / decoloración', precio: 'desde 50 € / desde 70 €' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-star-line',
		title: '5,0 con 117 reseñas',
		text: 'Nota máxima en Booksy: trato de 10, escucha y resultados tal como se piden.',
	},
	{
		icon: 'ri-flask-line',
		title: 'Producto profesional',
		text: 'Montibello, Redken y Wella: primera calidad en color y tratamientos.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Precio y tiempo claros',
		text: 'Cada servicio publica precio y duración en Booksy: sin sorpresas en caja.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Atención personalizada',
		text: 'Asesoramiento honesto: si tu pelo necesita hidratación antes del color, te lo dice.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Color y corte en uno',
		text: 'Especialista en colorimetría y corte: el corte adicional al color cuesta 18 €.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Teatinos, junto a la uni',
		text: 'Av. José Ribera, 3: ideal si estudias o trabajas en Teatinos o el Clínico.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Lorena Morán Estilista?',
		a: 'En la Avenida José Ribera, 3 (Teatinos – Universidad, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Lo más rápido es reservar online en Booksy (24/7, con precio y duración) o escribir por WhatsApp al 618 24 36 01. También puedes llamar a ese número.',
	},
	{
		q: '¿Qué servicios hace?',
		a: 'Balayage, babylights y mechas, color de raíz y completo, corte y peinado, tratamientos de hidratación y anticaída, keratina, permanente, recogidos, y servicios de hombre y niños.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Ejemplos: corte + peinado desde 20 €, color raíz desde 38 €, babylights desde 60 €, balayage desde 140 € y keratina desde 100 €. El precio exacto depende del largo: lo ves en Booksy antes de reservar.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Horario orientativo de lunes a viernes de 10:00 a 19:00 con cita. El sábado con cita según disponibilidad y el domingo cerrado. Confírmalo en Booksy o por WhatsApp.',
	},
	{
		q: '¿Qué productos usa?',
		a: 'Productos profesionales de primera calidad: Montibello, Redken y Wella.',
	},
	{
		q: '¿Tiene buenas reseñas?',
		a: 'Sí: 5,0 sobre 5 con 117 reseñas en Booksy. Las clientas repiten por el asesoramiento, la puntualidad y el resultado del color.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 618 24 36 01 (llamada y WhatsApp). Para reservar online usa el enlace a Booksy de esta página.',
	},
];

export const FEATURES = [
	{ icon: 'ri-star-line', label: '5,0 en Booksy con 117 reseñas' },
	{ icon: 'ri-scissors-line', label: 'Especialista en balayage y color' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva online en Booksy' },
	{ icon: 'ri-flask-line', label: 'Montibello, Redken y Wella' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Salón Lorena Morán Estilista en Teatinos, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Balayage y babylights en Lorena Morán Estilista, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Corte y peinado en la peluquería de Teatinos',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Tratamientos de keratina e hidratación en Málaga',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Lorena Morán Salón de Belleza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 618 24 36 01',
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
	sameAs: [BUSINESS.instagram, BUSINESS.booksy],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Lorena Morán Estilista',
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
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '19:00',
		},
	],
};
