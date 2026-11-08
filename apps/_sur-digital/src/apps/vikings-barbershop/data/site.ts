/**
 * Datos de Vikings Barbershop — Calle Sondalezas, 14 (Bailén-Miraflores,
 * 29010 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: Vikings barbershop,
 *   36.7236202,-4.4411333, feature 0xd72f7ce0eba386d:0x293b476aaf7eb1e8
 * - Booksy: https://booksy.com/es-es/77885_vikings-barbershop_barberia_29485_malaga
 *   (dirección Calle Sondalezas 14, precios con cejas y barba spa,
 *   barbero Ouchen / Mohammed Ouchen, 4.7 con 71 reseñas,
 *   horario publicado 10:00–22:00; wifi, mascotas y acceso adaptado)
 * - Málaga Directory: C. Sondalezas, Bailén-Miraflores; 4,6 con 53 reseñas;
 *   contacto +34 951 99 62 58; L-J 10:00–22:00
 * - Facebook: Vikings BarberShop (@vikingsbshop)
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/vikings-barbershop-malaga.svg';
import fotoCentro from '../assets/fotos/vikings-barbershop-sondalezas.svg';
import fotoCorte from '../assets/fotos/vikings-barbershop-corte.svg';
import fotoBarba from '../assets/fotos/vikings-barbershop-barba.svg';
import logo from '../assets/fotos/vikings-barbershop-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'Vikings Barbershop',
	shortName: 'Vikings',
	tagline: 'Barbería en Bailén-Miraflores, Málaga',
	claim: 'Tu ritual vikingo en Sondalezas',
	summary:
		'Vikings Barbershop es una barbería en Calle Sondalezas, 14 (Bailén-Miraflores, 29010 Málaga). Corte + barba + cejas 15 € y ritual con barba spa de vapor desde 20 €, con reserva online en Booksy.',
	street: 'Calle Sondalezas, 14',
	district: 'Bailén-Miraflores',
	borough: 'Bailén-Miraflores',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '951 99 62 58',
	phoneHref: 'tel:+34951996258',
	booksy:
		'https://booksy.com/es-es/77885_vikings-barbershop_barberia_29485_malaga',
	facebook: 'https://www.facebook.com/vikingsbshop/',
	googleMaps:
		'https://www.google.com/maps/place/Vikings+barbershop/@36.7236202,-4.4411333,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ce0eba386d:0x293b476aaf7eb1e8!8m2!3d36.7236202!4d-4.4411333!16s%2Fg%2F11vb8jq2vq?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Sondalezas%2C%2014%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7236202, lng: -4.4411333 },
	featureId: '0xd72f7ce0eba386d:0x293b476aaf7eb1e8',
	priceRange: '€',
	ratingBooksy: '4,7',
	reviewsBooksy: '71',
	categories: [
		'Barbería',
		'Corte de pelo',
		'Arreglo de barba',
		'Barba spa',
	],
	hours: [
		{ days: 'Lunes – Viernes', hours: '10:00–22:00' },
		{ days: 'Fin de semana', hours: 'Consultar en Booksy' },
	],
	hoursNote:
		'Horario publicado en Booksy (octubre 2026): 10:00–22:00 de lunes a viernes. Confirma el sábado y el domingo en Booksy o Google antes de ir, puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/vikings-barbershop',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La barbería', href: '#salon' },
	{ label: 'Servicios y precios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios y precios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Barbería en Sondalezas',
		text: 'Corte, barba, cejas y barba spa en Bailén-Miraflores.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,7 en Booksy',
		text: '71 reseñas en Booksy (oct 2026).',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Cita 24/7 en Booksy o por teléfono 951 99 62 58.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precios claros',
		text: 'Corte + barba + cejas 15 €; ritual spa desde 20 €.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte + barba + cejas',
		text: 'Cortar + lavar + peinar + barba + cejas, 30 min. 15 €.',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Barba spa vapor',
		text: 'Corte + barba spa con vapor + cejas, 40 min. 20 €.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Arreglo de barba',
		text: 'Arreglo de barba + cejas, 15 min. 6 €; con vaporizador 10 €.',
	},
	{
		icon: 'ri-vip-crown-line',
		title: 'Ritual completo + mask',
		text: 'Corte + barba spa vapor + mask + cejas, 50 min. 25 €.',
	},
	{
		icon: 'ri-scissors-cut-line',
		title: 'Solo corte',
		text: 'Cortar + lavar + peinar + cejas, 15 min. 10 €.',
	},
	{
		icon: 'ri-wifi-line',
		title: 'Sin cita al mediodía',
		text: 'Sin cerrar al mediodía, con wifi gratis. Reserva en Booksy.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Corte',
		items: [
			{ nombre: 'Cortar + lavar + peinar + cejas (15 min)', precio: '10 €' },
			{ nombre: 'Corte + barba + cejas (30 min)', precio: '15 €' },
		],
	},
	{
		grupo: 'Barba',
		items: [
			{ nombre: 'Arreglo de barba + cejas (15 min)', precio: '6 €' },
			{ nombre: 'Arreglo de barba spa con vaporizador + cejas (30 min)', precio: '10 €' },
		],
	},
	{
		grupo: 'Rituales spa',
		items: [
			{ nombre: 'Corte + barba spa vapor + cejas (40 min)', precio: '20 €' },
			{ nombre: 'Corte + barba spa vapor + mask + cejas (50 min)', precio: '25 €' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Bailén-Miraflores',
		text: 'Calle Sondalezas, 14: 29010 Málaga.',
	},
	{
		icon: 'ri-time-line',
		title: 'Sin cerrar al mediodía',
		text: 'Jornada continua 10:00–22:00 entre semana.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,7 en Booksy',
		text: '64 de 71 reseñas son de 5 estrellas (oct 2026).',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio antes de empezar',
		text: 'Carta publicada en Booksy: sin sorpresas en caja.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita fácil',
		text: 'Booksy 24/7, teléfono 951 99 62 58 o ficha de Google.',
	},
	{
		icon: 'ri-wifi-line',
		title: 'Wifi y mascotas',
		text: 'Wifi gratis, se permiten mascotas y acceso adaptado.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Vikings Barbershop?',
		a: 'En Calle Sondalezas, 14 (Bailén-Miraflores, 29010 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Online 24/7 en Booksy, por teléfono en el 951 99 62 58 o desde la ficha de Google Maps. Barbero: Ouchen.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según la carta de Booksy (oct 2026): corte + cejas 10 €, corte + barba + cejas 15 €, arreglo de barba + cejas 6 €, ritual con barba spa de vapor 20 € y ritual completo con mask 25 €. Confirma antes de reservar por si cambia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El horario publicado es 10:00–22:00 de lunes a viernes, sin cerrar al mediodía. Confirma el fin de semana en Booksy o Google, puede variar en festivos.',
	},
	{
		q: '¿Qué opinan los clientes?',
		a: '4,7/5 con 71 reseñas en Booksy (oct 2026). Destacan la atención profesional y el trato.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Barbería' },
	{ icon: 'ri-sparkling-line', label: 'Barba spa vapor' },
	{ icon: 'ri-map-pin-line', label: 'Bailén-Miraflores, Málaga' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva en Booksy' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Vikings Barbershop en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Vikings Barbershop en Sondalezas, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte y barba en Vikings Barbershop (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Barba spa en Vikings Barbershop',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Vikings Sondalezas Málaga',
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
		ratingValue: '4.7',
		reviewCount: '71',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Vikings Barbershop',
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
				priceSpecification: {
					'@type': 'PriceSpecification',
					priceCurrency: 'EUR',
					price: item.precio,
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
			opens: '10:00',
			closes: '22:00',
		},
	],
};
