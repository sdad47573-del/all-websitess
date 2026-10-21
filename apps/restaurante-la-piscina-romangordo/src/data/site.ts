/**
 * Datos de Restaurante La Piscina-Romangordo (C. Carretera, s/n · 10359 Romangordo,
 * Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante La Piscina-Romangordo.
 *   Feature 0xd157998f1913351:0x3b151067ad00b296.
 * - Dirección, teléfono, valoración, horario y descripción: ficha pública de Google
 *   (octubre de 2026). La descripción es del propio restaurante.
 * - Correo y ubicación en las dependencias de la piscina municipal: web de turismo de
 *   Romangordo y Ayuntamiento de Romangordo.
 * - Cocina extremeña, productos locales y aromáticas: descripción de la casa y reportaje
 *   de Mundo Rural sobre Romangordo.
 * - Platos (nachos, cachopo, callos, guisos, carnes, paellas por encargo y menú del día):
 *   reseñas de Google recogidas en fichas públicas del restaurante.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado.
 */

import fotoVertical1 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-01.jpg';
import fotoVertical2 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-02.jpg';
import fotoVertical3 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-03.jpg';
import fotoVertical4 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-04.jpg';
import fotoVertical5 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-05.jpg';
import fotoVertical6 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-06.jpg';
import fotoVertical7 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-07.jpg';
import fotoVertical8 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/restaurante-la-piscina-romangordo-vertical-09.jpg';
import logo from '../assets/fotos/restaurante-la-piscina-romangordo-logo.svg';

export const IMAGES = {
	fotoVertical1,
	fotoVertical2,
	fotoVertical3,
	fotoVertical4,
	fotoVertical5,
	fotoVertical6,
	fotoVertical7,
	fotoVertical8,
	fotoVertical9,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+La+Piscina-Romangordo/@39.7418517,-5.6962766,17z/data=!3m1!4b1!4m6!3m5!1s0xd157998f1913351:0x3b151067ad00b296!8m2!3d39.7418517!4d-5.6962766!16s%2Fg%2F11nk0qf662?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante La Piscina',
	shortName: 'La Piscina',
	tagline: 'Cocina extremeña junto a la piscina de Romangordo',
	claim: 'Producto local y recetas de siempre, en Monfragüe',
	summary:
		'Restaurante de cocina extremeña en Romangordo (Cáceres), en las dependencias de la piscina municipal y dentro de la reserva de la biosfera de Monfragüe: productos locales, recetas de siempre y un toque contemporáneo.',
	street: 'C. Carretera, s/n',
	city: 'Romangordo',
	postalCode: '10359',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Reserva de la biosfera de Monfragüe',
	phone: '626 72 92 74',
	phoneHref: 'tel:+34626729274',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.7418517%2C-5.6962766&t=&z=16&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.7418517, lng: -5.6962766 },
	featureId: '0xd157998f1913351:0x3b151067ad00b296',
	placeId: 'ChIJUTOR8Zh5FQ0RlrIArWcQFTs',
	plusCode: 'P8R3+PF',
	rating: 4.8,
	reviewCount: 25,
	hours: [
		{ days: 'Lunes', hours: '12:00 – 20:00' },
		{ days: 'Martes', hours: '12:00 – 20:00' },
		{ days: 'Miércoles', hours: 'Cerrado' },
		{ days: 'Jueves', hours: '12:00 – 20:00' },
		{ days: 'Viernes', hours: '12:00 – 23:00' },
		{ days: 'Sábado', hours: '12:00 – 23:00' },
		{ days: 'Domingo', hours: '12:00 – 23:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026: cierra los miércoles; de lunes a jueves abre de 12:00 a 20:00; viernes, sábado y domingo, de 12:00 a 23:00. En verano y en puentes conviene llamar antes.',
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Thursday'], opens: '12:00', closes: '20:00' },
		{ days: ['Friday', 'Saturday', 'Sunday'], opens: '12:00', closes: '23:00' },
	],
	categories: ['Restaurante', 'Cocina extremeña', 'Producto local', 'Terraza'],
	social: {},
	siteUrl: 'https://restaurante-la-piscina-romangordo.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante La Piscina',
	nif: '[pendiente de completar]',
	email: 'restauranteromangordo@gmail.com',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La carta', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-plant-line',
		title: 'Producto local',
		text: 'Recetas de siempre con productos de la tierra y aromáticas del entorno.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Terraza cubierta',
		text: 'Comer al aire, a cubierto, junto a las piscinas municipales.',
	},
	{
		icon: 'ri-water-flash-line',
		title: 'Junto a la piscina',
		text: 'En las dependencias de la piscina municipal, en la carretera de Higuera.',
	},
	{
		icon: 'ri-landscape-line',
		title: 'Puerta de Monfragüe',
		text: 'Parada natural en la ruta por la reserva de la biosfera.',
	},
];

export const CASA_FACTS = [
	{ label: 'Valoración', value: '4,8 ★' },
	{ label: 'Reseñas', value: '25' },
	{ label: 'La cocina', value: 'Extremeña' },
	{ label: 'Entorno', value: 'Monfragüe' },
];

export const CARTA = [
	{
		icon: 'ri-restaurant-line',
		kicker: 'Para picar',
		title: 'Nachos y entrantes',
		text: 'Los nachos son el imprescindible que más repiten las reseñas, junto a una carta amplia de entrantes y ensaladas.',
	},
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'La especialidad',
		title: 'Cachopo',
		text: 'Cachopo con la carne en su punto y un relleno generoso. Uno de los platos que más se piden en la casa.',
	},
	{
		icon: 'ri-time-line',
		kicker: 'A fuego lento',
		title: 'Callos y guisos',
		text: 'Guisos caseros y callos preparados a la manera de siempre, de los que se cocinan despacio.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'A la plancha',
		title: 'Carnes',
		text: 'Carnes de la tierra cocinadas al punto que pide el cliente, con guarnición y sin complicaciones.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'Por encargo',
		title: 'Arroces y paellas',
		text: 'Arroces y paellas que se encargan con antelación. Para una comida de familia o un grupo, mejor avisar.',
	},
	{
		icon: 'ri-calendar-check-line',
		kicker: 'De lunes a domingo',
		title: 'Menú del día',
		text: 'Menú del día con platos generosos y buena relación calidad-precio, muy valorado por los vecinos y por quien va de paso.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-plant-line', title: 'Producto local' },
	{ icon: 'ri-sun-line', title: 'Terraza' },
	{ icon: 'ri-bowl-line', title: 'Arroces' },
	{ icon: 'ri-group-line', title: 'Familias' },
];

export const REVIEWS = [
	{
		text: 'Buena cocina, buen ambiente, buen servicio y precios razonables.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'La comida estaba bastante buena y las cantidades generosas.',
		rating: 4,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'La comida es fabulosa y el trato excelente.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante La Piscina?',
		a: 'En la calle Carretera, s/n, 10359 Romangordo (Cáceres), en las dependencias de la piscina municipal, junto a la carretera de Higuera. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, cierra los miércoles. De lunes a jueves abre de 12:00 a 20:00 y de viernes a domingo, de 12:00 a 23:00. En verano y en puentes conviene llamar antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 626 72 92 74, o por correo en restauranteromangordo@gmail.com. La web no tramita reservas. Para grupos, arroces y paellas es necesario encargarlo con antelación.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina extremeña con producto local: nachos y entrantes, cachopo, callos y guisos, carnes a la plancha, arroces y paellas por encargo y menú del día. La carta cambia con la temporada.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí, la casa trabaja con menú del día. El precio y los platos se consultan en el restaurante o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, cuenta con terraza cubierta junto a las piscinas municipales, una opción cómoda para comer al aire en los meses de calor.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'El recinto de las piscinas municipales dispone de rampa para el acceso de personas en silla de ruedas. Para el comedor, lo mejor es llamar antes y contar qué necesitas.',
	},
	{
		q: '¿Cómo se llega desde la A-5?',
		a: 'Desde la A-5 se toma el desvío a Higuera de Albalat por Romangordo. El restaurante está en la carretera de Higuera, en el mismo recinto de la piscina municipal, con aparcamiento en la zona.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoVertical1,
		alt: 'Restaurante La Piscina, en Romangordo (Cáceres)',
	},
	{ src: IMAGES.fotoVertical2, alt: 'Interior del restaurante La Piscina' },
	{ src: IMAGES.fotoVertical3, alt: 'Detalle de la mesa en La Piscina' },
	{ src: IMAGES.fotoVertical4, alt: 'Rincón del restaurante en Romangordo' },
	{ src: IMAGES.fotoVertical5, alt: 'Ambiente de La Piscina' },
	{ src: IMAGES.fotoVertical6, alt: 'Fotografía de la ficha de Google Maps de La Piscina' },
	{ src: IMAGES.fotoVertical7, alt: 'La Piscina, junto a las piscinas municipales' },
	{ src: IMAGES.fotoVertical8, alt: 'Terraza y entorno de La Piscina' },
	{ src: IMAGES.fotoVertical9, alt: 'Otra imagen de Restaurante La Piscina' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: 'La Piscina-Romangordo',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34626729274',
	email: LEGAL.email,
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina extremeña', 'Producto local', 'Cocina casera'],
	areaServed: [
		{ '@type': 'City', name: 'Romangordo' },
		{ '@type': 'AdministrativeArea', name: 'Reserva de la biosfera de Monfragüe' },
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
			name: 'Terraza cubierta',
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
