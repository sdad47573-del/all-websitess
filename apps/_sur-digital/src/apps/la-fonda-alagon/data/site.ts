/**
 * Datos de La Fonda (C. Guadalquivir, 18 · 10690 Alagón del Río, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La fonda.
 *   Feature 0xd3e0f562b9c2c4b:0x3e6e3e4845909c45.
 * - Dirección, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Teléfono: listado de servicios turísticos de la comarca (ADESVAL).
 *   Google no publica teléfono para esta ficha; conviene confirmarlo antes de publicar.
 * - Carácter del local: reseñas de Google y ficha de bar-restaurante en directorios.
 * - Fiestas del pueblo (Cristo en septiembre y Carnaval): ficha municipal en ADESVAL.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: la cocina y el menú cambian según el día y el
 * titular no los ha confirmado.
 */

import fotoVertical1 from '../assets/fotos/la-fonda-alagon-vertical-01.jpg';
import fotoApaisada2 from '../assets/fotos/la-fonda-alagon-apaisada-02.jpg';
import fotoVertical3 from '../assets/fotos/la-fonda-alagon-vertical-03.jpg';
import fotoApaisada4 from '../assets/fotos/la-fonda-alagon-apaisada-04.jpg';
import fotoVertical5 from '../assets/fotos/la-fonda-alagon-vertical-05.jpg';
import fotoVertical6 from '../assets/fotos/la-fonda-alagon-vertical-06.jpg';
import fotoPanoramica7 from '../assets/fotos/la-fonda-alagon-panoramica-07.jpg';
import fotoApaisada8 from '../assets/fotos/la-fonda-alagon-apaisada-08.jpg';
import fotoVertical9 from '../assets/fotos/la-fonda-alagon-vertical-09.jpg';
import fotoVertical10 from '../assets/fotos/la-fonda-alagon-vertical-10.jpg';
import logo from '../assets/fotos/la-fonda-alagon-logo.svg';

export const IMAGES = {
	fotoVertical1,
	fotoApaisada2,
	fotoVertical3,
	fotoApaisada4,
	fotoVertical5,
	fotoVertical6,
	fotoPanoramica7,
	fotoApaisada8,
	fotoVertical9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/La+fonda/@39.9737726,-6.3148098,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e0f562b9c2c4b:0x3e6e3e4845909c45!8m2!3d39.9737726!4d-6.3148098!16s%2Fg%2F11f01pl58t?authuser=0&hl=es';

export const BUSINESS = {
	name: 'La Fonda',
	shortName: 'La Fonda',
	tagline: 'El bar de siempre en Alagón del Río',
	claim: 'Café, barra y sobremesa hasta la medianoche',
	summary:
		'Bar y restaurante en Alagón del Río (Cáceres): café y cerveza en la barra, cocina casera y sobremesa hasta la medianoche. Abre de martes a domingo desde las 12:00 y cierra los lunes.',
	street: 'C. Guadalquivir, 18',
	city: 'Alagón del Río',
	postalCode: '10690',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Valle del Alagón · Cáceres',
	phone: '637 85 92 23',
	phoneHref: 'tel:+34637859223',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.9737726%2C-6.3148098&t=&z=16&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.9737726, lng: -6.3148098 },
	featureId: '0xd3e0f562b9c2c4b:0x3e6e3e4845909c45',
	placeId: 'ChIJSyycK1YPPg0RRZyQRUg-bj4',
	plusCode: 'XMFP+G3',
	rating: 4.5,
	reviewCount: 94,
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes', hours: '12:00 – 24:00' },
		{ days: 'Miércoles', hours: '12:00 – 24:00' },
		{ days: 'Jueves', hours: '12:00 – 24:00' },
		{ days: 'Viernes', hours: '12:00 – 24:00' },
		{ days: 'Sábado', hours: '12:00 – 24:00' },
		{ days: 'Domingo', hours: '12:00 – 24:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026: abre de martes a domingo, de 12:00 a 24:00, y cierra los lunes. La cocina y el menú del día dependen de la jornada; si vienes a comer, confirma antes por teléfono.',
	openingHours: [
		{
			days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '12:00',
			closes: '24:00',
		},
	],
	categories: ['Bar', 'Restaurante', 'Cocina casera', 'Copas'],
	social: {},
	siteUrl: 'https://www.sur-digital.com/la-fonda-alagon',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'La Fonda',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La barra', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-time-line',
		title: 'Hasta las 24:00',
		text: 'Martes a domingo, desde el mediodía hasta la medianoche. Los lunes cierra.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'En la calle Guadalquivir',
		text: 'En el centro de Alagón del Río, a un paso de la plaza del pueblo.',
	},
	{
		icon: 'ri-chat-smile-2-line',
		title: 'Trato de pueblo',
		text: '«Muy buen trato» y ambiente agradable: lo que más repiten las reseñas.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Barra y sobremesa',
		text: 'Café, cerveza, vino y copas para alargar la tarde sin mirar el reloj.',
	},
];

export const CASA_FACTS = [
	{ label: 'Abre', value: '12:00' },
	{ label: 'Cierra', value: '24:00' },
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '94' },
];

export const CARTA = [
	{
		icon: 'ri-cup-line',
		kicker: 'La barra',
		title: 'Café, cerveza y vino',
		text: 'La barra de un bar de pueblo, para tomar algo a cualquier hora de la tarde. Café de después de comer, cañas y una copa de vino.',
	},
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'La mesa',
		title: 'Cocina casera',
		text: 'Platos sencillos y de siempre, con menú que cambia según el día. La cocina no abre igual todas las jornadas: llama antes si vienes a comer.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'Para picar',
		title: 'Tapas y raciones',
		text: 'Lo que se pide con la bebida: tapas, raciones y algo para compartir en el centro de la mesa.',
	},
	{
		icon: 'ri-moon-line',
		kicker: 'De noche',
		title: 'Copas y sobremesa',
		text: 'El local aguanta hasta la medianoche. Sobremesa larga, copas y ese ambiente de bar donde siempre hay alguien conocido.',
	},
	{
		icon: 'ri-football-line',
		kicker: 'El pueblo',
		title: 'El equipo de La Fonda',
		text: 'La Fonda da nombre a un equipo de fútbol sala del CD Valle del Alagón. Los fines de semana, el bar también juega.',
	},
	{
		icon: 'ri-calendar-event-line',
		kicker: 'Fiestas',
		title: 'Cristo y Carnaval',
		text: 'Las Fiestas del Cristo, a partir del 12 de septiembre, y el Martes de Carnaval son las citas grandes del pueblo. La Fonda, punto de encuentro.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-cup-line', title: 'Café' },
	{ icon: 'ri-restaurant-2-line', title: 'Cocina casera' },
	{ icon: 'ri-moon-line', title: 'Copas' },
	{ icon: 'ri-time-line', title: 'Hasta las 24:00' },
];

export const REVIEWS = [
	{
		text: 'Buen sitio para tomar algo, un trato muy bueno y un lugar buenísimo para comer.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Local agradable, buen trato y divertido.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Fonda?',
		a: 'En la calle Guadalquivir, 18, 10690 Alagón del Río (Cáceres), en el Valle del Alagón. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre de martes a domingo de 12:00 a 24:00 y cierra los lunes. En fiestas y puentes conviene confirmar por teléfono.',
	},
	{
		q: '¿Se puede comer?',
		a: 'La Fonda es bar y restaurante, con cocina casera, pero la cocina no abre igual todos los días. Si vienes a comer, llama antes al 637 85 92 23 para confirmar que hoy hay mesa y menú.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Cuando la cocina está abierta se trabaja con un menú casero que cambia según el día. El precio y los platos se consultan en el local o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 637 85 92 23. La web no tramita reservas. Para grupos y fines de semana es recomendable llamar con antelación.',
	},
	{
		q: '¿Se puede ir de copas?',
		a: 'Sí. El bar alarga el servicio hasta la medianoche, de martes a domingo, con copas y sobremesa.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta en la mesa, avisa al llamar.',
	},
	{
		q: '¿Cuándo son las fiestas del pueblo?',
		a: 'Las Fiestas del Cristo se celebran a partir del 12 de septiembre y el Martes de Carnaval es la otra cita grande. Son los días de más ambiente en Alagón del Río.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoApaisada4,
		alt: 'La Fonda, en Alagón del Río (Cáceres)',
	},
	{ src: IMAGES.fotoVertical1, alt: 'Interior de La Fonda' },
	{ src: IMAGES.fotoVertical3, alt: 'Detalle de La Fonda en Alagón del Río' },
	{ src: IMAGES.fotoApaisada2, alt: 'Rincón del bar La Fonda' },
	{ src: IMAGES.fotoVertical5, alt: 'Ambiente de La Fonda' },
	{ src: IMAGES.fotoVertical6, alt: 'Fotografía de la ficha de Google Maps de La Fonda' },
	{ src: IMAGES.fotoPanoramica7, alt: 'La Fonda, en el Valle del Alagón' },
	{ src: IMAGES.fotoApaisada8, alt: 'Barra de La Fonda' },
	{ src: IMAGES.fotoVertical9, alt: 'La Fonda de noche' },
	{ src: IMAGES.fotoVertical10, alt: 'Otra imagen de La Fonda en Cáceres' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarOrPub',
	'@id': `${BUSINESS.siteUrl}/#bar`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34637859223',
	priceRange: '€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina casera', 'Tapas'],
	areaServed: [
		{ '@type': 'City', name: 'Alagón del Río' },
		{ '@type': 'AdministrativeArea', name: 'Valle del Alagón' },
	],
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
	acceptsReservations: 'True',
	openingHoursSpecification: BUSINESS.openingHours.map((tramo) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: tramo.days,
		opens: tramo.opens,
		closes: tramo.closes,
	})),
	amenityFeature: [
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Acceso para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Aseo adaptado para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Asientos adaptados para sillas de ruedas',
			value: true,
		},
	],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
		worstRating: 1,
	},
};
