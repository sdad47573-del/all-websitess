/**
 * Datos de Peluquería de Caballeros Bartolí — Av. de Lope de Vega, 19, bajo
 * (Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: Peluquería Bartolí,
 *   36.7301844,-4.4684813, feature 0xd72f73aca4dd945:0x7aeb24e388ba03bd
 * - PeluqueriaMaster: Av. de Lope de Vega, 19; 4,8 con 410 reseñas en Google;
 *   tel. 952 61 82 61; L-V 9:00–21:00, S-D cerrado
 * - Fresha (Barber Shop Bartolí): misma dirección y horario; "Call to book";
 *   servicios de corte caballero e infantil
 * - Instagram @peluqueriadecaballerobartoli y Facebook "Peluqueria de
 *   caballeros Bartoli" (Av. Lope de Vega 19)
 *
 * La ficha no publica carta de precios, así que no se inventan importes:
 * todo remite a llamar por teléfono.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/peluqueria-bartoli-malaga.svg';
import fotoCentro from '../assets/fotos/peluqueria-bartoli-lope-de-vega.svg';
import fotoCorte from '../assets/fotos/peluqueria-bartoli-corte.svg';
import fotoBarba from '../assets/fotos/peluqueria-bartoli-barba.svg';
import logo from '../assets/fotos/peluqueria-bartoli-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'Peluquería Bartolí',
	shortName: 'Bartolí',
	tagline: 'Peluquería de caballeros en Teatinos, Málaga',
	claim: 'Tu peluquería en Lope de Vega',
	summary:
		'Peluquería de Caballeros Bartolí, en Av. de Lope de Vega, 19, bajo (Teatinos, 29010 Málaga). Corte de caballero e infantil y arreglo de barba, con 4,8 sobre 5 en Google. Cita por teléfono.',
	street: 'Av. de Lope de Vega, 19, bajo',
	district: 'Teatinos',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '952 61 82 61',
	phoneHref: 'tel:+34952618261',
	instagram: 'https://www.instagram.com/peluqueriadecaballerobartoli/',
	facebook: 'https://www.facebook.com/p/Peluqueria-de-caballeros-Bartoli-100063608285075/',
	fresha: 'https://www.fresha.com/lvp/barber-shop-bartoli-avenida-de-lope-de-vega-malaga-P2kWA4',
	googleMaps:
		'https://www.google.com/maps/place/Peluquer%C3%ADa+Bartol%C3%AD/@36.7301844,-4.4684813,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73aca4dd945:0x7aeb24e388ba03bd!8m2!3d36.7301844!4d-4.4684813!16s%2Fg%2F1z44dgjmn?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Av.%20Lope%20de%20Vega%2C%2019%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7301844, lng: -4.4684813 },
	featureId: '0xd72f73aca4dd945:0x7aeb24e388ba03bd',
	priceRange: '€',
	ratingGoogle: '4,8',
	reviewsGoogle: '410',
	categories: [
		'Peluquería de caballeros',
		'Corte de pelo',
		'Arreglo de barba',
		'Corte infantil',
	],
	hours: [
		{ days: 'Lunes – Viernes', hours: '09:00–21:00' },
		{ days: 'Sábado – Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en PeluqueriaMaster y Fresha (octubre 2026): L-V 09:00–21:00, fin de semana cerrado. Confirma por teléfono antes de ir, puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/peluqueria-bartoli',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La peluquería', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/peluqueria-bartoli/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/peluqueria-bartoli/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería de caballeros',
		text: 'Corte de caballero e infantil en Lope de Vega, 19.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 en Google',
		text: '410 reseñas en Google (oct 2026), el 98 % de 5 estrellas.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Reserva llamando al 952 61 82 61.',
	},
	{
		icon: 'ri-time-line',
		title: 'L-V 09:00–21:00',
		text: 'Jornada amplia entre semana; fin de semana cerrado.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte de caballero',
		text: 'Corte clásico y moderno para hombre. Precio a consultar.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Arreglo de barba',
		text: 'Perfilado y cuidado de barba. Precio a consultar.',
	},
	{
		icon: 'ri-bear-smile-line',
		title: 'Corte infantil',
		text: 'Corte para niños en peluquería de barrio. Precio a consultar.',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Afeitado',
		text: 'Afeitado de barbería. Pregunta por el servicio al reservar.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: 'Llama al 952 61 82 61 y te confirman servicio, precio y hora.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Av. de Lope de Vega, 19, bajo. Abre “Cómo llegar” para navegar.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte de caballero', precio: 'A consultar' },
			{ nombre: 'Arreglo de barba', precio: 'A consultar' },
			{ nombre: 'Afeitado', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Familia',
		items: [
			{ nombre: 'Corte infantil', precio: 'A consultar' },
			{ nombre: 'Corte + barba', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Av. de Lope de Vega, 19, bajo: Teatinos-Universidad.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 en Google',
		text: '410 reseñas con un 98 % de 5 estrellas (oct 2026).',
	},
	{
		icon: 'ri-team-line',
		title: 'Trato de barrio',
		text: 'Profesionalidad y trato amable, lo más valorado.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario amplio',
		text: 'De 09:00 a 21:00 entre semana, ideal tras el trabajo.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva directa',
		text: 'Teléfono 952 61 82 61, sin intermediarios.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio claro',
		text: 'Sin carta publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Peluquería Bartolí?',
		a: 'En Av. de Lope de Vega, 19, bajo (Teatinos, Teatinos-Universidad, 29010 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Por teléfono en el 952 61 82 61 o desde la ficha de Google Maps. Es una peluquería de barrio: llama y te dan hora.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería de caballeros: corte de hombre, corte infantil y arreglo de barba. Confirma el servicio concreto al llamar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta de precios, y esta web no inventa importes. Llama al 952 61 82 61 y te confirman el precio antes de empezar.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El horario publicado es de lunes a viernes 09:00–21:00, con sábado y domingo cerrado. Confirma por teléfono, puede variar en festivos.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Peluquería de caballeros' },
	{ icon: 'ri-bear-smile-line', label: 'Corte infantil' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-phone-line', label: 'Cita por teléfono' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Peluquería Bartolí en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Peluquería Bartolí en Lope de Vega, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte de caballero en Peluquería Bartolí (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Arreglo de barba en Peluquería Bartolí',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería de Caballeros Bartolí Teatinos Málaga',
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
	telephone: BUSINESS.phoneHref,
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '4.8',
		reviewCount: '410',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Peluquería Bartolí',
		itemListElement: SERVICIOS_DETALLE.flatMap((seccion) =>
			seccion.items.map((item) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: item.nombre,
					description: `${item.nombre} en ${BUSINESS.name}`,
					areaServed: BUSINESS.city,
					provider: { '@type': 'BarberShop', name: BUSINESS.name },
				},
			})),
		),
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
			opens: '09:00',
			closes: '21:00',
		},
	],
};
