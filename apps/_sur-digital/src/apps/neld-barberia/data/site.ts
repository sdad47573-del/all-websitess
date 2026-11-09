/**
 * Datos de Barbería & Peluquería NELD — Calle Doctor Miguel Díaz Recio, 38
 * (Teatinos, 29010 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: Barbería & Peluquería - NELD,
 *   36.7207181,-4.4646552, feature 0xd72f78e8acca3b3:0xcb70ffa956a732a8
 * - Booksy: https://booksy.com/es-es/122391_neld_peluqueria_29485_malaga
 *   (dirección, precios, equipo NELD / NELSON, 5.0 con 322 reseñas,
 *   horario publicado 09:30–14:00 y 17:00–20:00; aparcamiento,
 *   acceso adaptado y adaptado para niños)
 *
 * La ficha no publica teléfono verificado fuera de Booksy/Google, así que no
 * se publica ninguno: todo remite a reservar en Booksy o a la ficha.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/neld-barberia-malaga.svg';
import fotoCentro from '../assets/fotos/neld-barberia-diaz-recio.svg';
import fotoCorte from '../assets/fotos/neld-barberia-corte.svg';
import fotoBarba from '../assets/fotos/neld-barberia-barba.svg';
import logo from '../assets/fotos/neld-barberia-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'Barbería & Peluquería NELD',
	shortName: 'NELD',
	tagline: 'Barbería y peluquería en Teatinos, Málaga',
	claim: 'Donde tu imagen es nuestra responsabilidad',
	summary:
		'Barbería & Peluquería NELD, en Calle Doctor Miguel Díaz Recio, 38 (Teatinos, 29010 Málaga). Corte de caballero 12 €, corte + barba 20 € y corte + barba + cejas 23 €, con reserva online en Booksy.',
	street: 'Calle Doctor Miguel Díaz Recio, 38',
	district: 'Teatinos',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	booksy:
		'https://booksy.com/es-es/122391_neld_peluqueria_29485_malaga',
	googleMaps:
		'https://www.google.com/maps/place/Barber%C3%ADa+%26+Peluquer%C3%ADa+-+NELD/@36.7207181,-4.4646552,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f78e8acca3b3:0xcb70ffa956a732a8!8m2!3d36.7207181!4d-4.4646552!16s%2Fg%2F11wppm139x?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Doctor%20Miguel%20D%C3%ADaz%20Recio%2C%2038%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7207181, lng: -4.4646552 },
	featureId: '0xd72f78e8acca3b3:0xcb70ffa956a732a8',
	priceRange: '€',
	ratingBooksy: '5,0',
	reviewsBooksy: '322',
	categories: [
		'Barbería',
		'Peluquería',
		'Corte de caballero',
		'Arreglo de barba',
	],
	hours: [
		{ days: 'Lunes – Viernes', hours: '09:30–14:00 · 17:00–20:00' },
		{ days: 'Fin de semana', hours: 'Consultar en Booksy' },
	],
	hoursNote:
		'Horario publicado en Booksy (octubre 2026): 09:30–14:00 y 17:00–20:00 entre semana. Confirma el fin de semana en Booksy o Google antes de ir, puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/neld-barberia',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El salón', href: '#salon' },
	{ label: 'Servicios y precios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios y precios', href: '/neld-barberia/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/neld-barberia/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Barbería y peluquería',
		text: 'Corte, barba y cejas en Doctor Miguel Díaz Recio, 38.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Booksy',
		text: '322 reseñas en Booksy (oct 2026), 320 de 5 estrellas.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Cita 24/7 en Booksy o desde la ficha de Google.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precios claros',
		text: 'Corte 12 €, corte + barba 20 €, completo + cejas 23 €.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte de caballero',
		text: 'Corte de caballero, 30 min. 12 €.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Corte + barba',
		text: 'Corte de pelo y barba, 1 h. 20 € (con cejas 23 €).',
	},
	{
		icon: 'ri-eye-line',
		title: 'Corte + cejas',
		text: 'Corte de pelo + cejas, 30 min. 15 €.',
	},
	{
		icon: 'ri-ruler-line',
		title: 'Recorte de barba',
		text: 'Recorte de barba, 30 min. 8 € (con cejas 11 €).',
	},
	{
		icon: 'ri-bear-smile-line',
		title: 'Adaptado para niños',
		text: 'Local adaptado para niños y con aparcamiento.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva en Booksy',
		text: 'Elige a NELD o NELSON al reservar online.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Corte',
		items: [
			{ nombre: 'Corte de caballero (30 min)', precio: '12 €' },
			{ nombre: 'Corte de pelo + cejas (30 min)', precio: '15 €' },
		],
	},
	{
		grupo: 'Corte + barba',
		items: [
			{ nombre: 'Corte de pelo & barba (1 h)', precio: '20 €' },
			{ nombre: 'Corte + barba + cejas (1 h)', precio: '23 €' },
		],
	},
	{
		grupo: 'Barba',
		items: [
			{ nombre: 'Recorte de la barba (30 min)', precio: '8 €' },
			{ nombre: 'Recorte de la barba + cejas (30 min)', precio: '11 €' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Doctor Miguel Díaz Recio, 38: 29010 Málaga.',
	},
	{
		icon: 'ri-team-line',
		title: 'Trato personalizado',
		text: 'NELD y NELSON: cortes a medida de cada estilo.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Booksy',
		text: '320 de 322 reseñas son de 5 estrellas (oct 2026).',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio antes de empezar',
		text: 'Carta publicada en Booksy: sin sorpresas en caja.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita fácil',
		text: 'Booksy 24/7 o desde la ficha de Google Maps.',
	},
	{
		icon: 'ri-parking-line',
		title: 'Aparcamiento',
		text: 'Con plaza de aparcamiento y acceso adaptado.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está NELD?',
		a: 'En Calle Doctor Miguel Díaz Recio, 38 (Teatinos, 29010 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Online 24/7 en Booksy o desde la ficha de Google Maps. Equipo: NELD y NELSON.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según la carta de Booksy (oct 2026): corte de caballero 12 €, corte + cejas 15 €, recorte de barba 8 € (con cejas 11 €), corte + barba 20 € y corte + barba + cejas 23 €. Confirma antes de reservar por si cambia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El horario publicado es 09:30–14:00 y 17:00–20:00 entre semana. Confirma el fin de semana en Booksy o Google, puede variar en festivos.',
	},
	{
		q: '¿Qué opinan los clientes?',
		a: '5,0/5 con 322 reseñas en Booksy (oct 2026). Destacan el trato y la calidad del corte.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Barbería y peluquería' },
	{ icon: 'ri-star-fill', label: '5,0 en Booksy' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva en Booksy' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Barbería NELD en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Barbería NELD en Doctor Miguel Díaz Recio, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte de caballero en NELD (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Arreglo de barba en NELD',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'NELD Teatinos Málaga',
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '5.0',
		reviewCount: '322',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de NELD',
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
	openingHoursSpecification: [],
};
