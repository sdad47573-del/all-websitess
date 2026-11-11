/**
 * Datos de Restaurante La Parrilla (Av. Salamanca, 61 · 10600 Plasencia, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante la parrilla.
 *   Feature 0xd3e16416ce122d1:0xc633baa30b8dd4.
 * - Dirección, teléfono, categorías, valoración, horario, descripción y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Especialidades y terraza: reseñas de Google y TripAdvisor, GastroRanking y Turismo Cáceres.
 * - Menús para empresas y grupos: página de Facebook del restaurante.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado.
 */

import fotoApaisada1 from '../assets/fotos/restaurante-la-parrilla-apaisada-01.jpg';
import fotoVertical2 from '../assets/fotos/restaurante-la-parrilla-vertical-02.jpg';
import fotoVertical3 from '../assets/fotos/restaurante-la-parrilla-vertical-03.jpg';
import fotoVertical4 from '../assets/fotos/restaurante-la-parrilla-vertical-04.jpg';
import fotoApaisada5 from '../assets/fotos/restaurante-la-parrilla-apaisada-05.jpg';
import fotoVertical6 from '../assets/fotos/restaurante-la-parrilla-vertical-06.jpg';
import fotoVertical7 from '../assets/fotos/restaurante-la-parrilla-vertical-07.jpg';
import fotoApaisada8 from '../assets/fotos/restaurante-la-parrilla-apaisada-08.jpg';
import fotoVertical9 from '../assets/fotos/restaurante-la-parrilla-vertical-09.jpg';
import fotoApaisada10 from '../assets/fotos/restaurante-la-parrilla-apaisada-10.jpg';
import logo from '../assets/fotos/restaurante-la-parrilla-logo.svg';

export const IMAGES = {
	fotoApaisada1,
	fotoVertical2,
	fotoVertical3,
	fotoVertical4,
	fotoApaisada5,
	fotoVertical6,
	fotoVertical7,
	fotoApaisada8,
	fotoVertical9,
	fotoApaisada10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+la+parrilla/@40.0428352,-6.0924964,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e16416ce122d1:0xc633baa30b8dd4!8m2!3d40.0428352!4d-6.0924964!16s%2Fg%2F11bbw_fyz0?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante La Parrilla',
	shortName: 'La Parrilla',
	tagline: 'Brasa, producto y terraza en Plasencia',
	claim: 'Carnes y pescados a la brasa en la Avenida de Salamanca',
	summary:
		'Restaurante de brasa en Plasencia (Cáceres): carnes y pescados al fuego, cochinillo, cordero, chuletón y pulpo, con terraza y desayunos. Comidas y cenas, con el martes cerrado.',
	street: 'Av. Salamanca, 61',
	city: 'Plasencia',
	postalCode: '10600',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Zona norte · Plasencia',
	phone: '685 52 29 88',
	phoneHref: 'tel:+34685522988',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=40.0428352%2C-6.0924964&t=&z=16&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 40.0428352, lng: -6.0924964 },
	featureId: '0xd3e16416ce122d1:0xc633baa30b8dd4',
	placeId: 'ChIJ0SLhbEEWPg0R1I0Lo7ozxgA',
	plusCode: '2WV5+42',
	rating: 4.5,
	reviewCount: 641,
	hours: [
		{ days: 'Lunes', hours: '13:00 – 17:00' },
		{ days: 'Martes', hours: 'Cerrado' },
		{ days: 'Miércoles', hours: '9:00 – 17:00' },
		{ days: 'Jueves', hours: '13:30 – 16:30 · 20:30 – 23:30' },
		{ days: 'Viernes', hours: '13:00 – 16:30 · 20:30 – 23:30' },
		{ days: 'Sábado', hours: '13:30 – 16:30 · 20:30 – 23:30' },
		{ days: 'Domingo', hours: '13:00 – 17:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026: cierra los martes; los miércoles abre a las 9:00; de jueves a sábado hay comidas y cenas; lunes y domingo, solo mediodía. Es un horario irregular: conviene llamar antes de venir.',
	openingHours: [
		{ days: ['Monday'], opens: '13:00', closes: '17:00' },
		{ days: ['Wednesday'], opens: '09:00', closes: '17:00' },
		{ days: ['Thursday'], opens: '13:30', closes: '16:30' },
		{ days: ['Thursday'], opens: '20:30', closes: '23:30' },
		{ days: ['Friday'], opens: '13:00', closes: '16:30' },
		{ days: ['Friday'], opens: '20:30', closes: '23:30' },
		{ days: ['Saturday'], opens: '13:30', closes: '16:30' },
		{ days: ['Saturday'], opens: '20:30', closes: '23:30' },
		{ days: ['Sunday'], opens: '13:00', closes: '17:00' },
	],
	categories: ['Parrilla', 'Brasa', 'Cocina española', 'Terraza'],
	social: {
		facebook: 'https://www.facebook.com/p/La-Parrilla-de-Manu-61593960341854/',
	},
	siteUrl: 'https://www.sur-digital.com/restaurante-la-parrilla',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'Restaurante La Parrilla',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
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
		icon: 'ri-fire-line',
		title: 'Todo a la brasa',
		text: 'Carnes y pescados con producto de mercado, trabajados al fuego.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Terraza',
		text: 'Una de las terrazas mejor valoradas de Plasencia para comer al aire.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cochinillo y cordero',
		text: 'Los clásicos del asador, junto al chuletón, el entrecot y el pulpo.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Miércoles desde las 9:00',
		text: 'El día que la cocina madruga: desayunos y comida hasta las 17:00.',
	},
];

export const CASA_FACTS = [
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '641' },
	{ label: 'La brasa', value: 'Producto' },
	{ label: 'Terraza', value: 'Sí' },
];

export const CARTA = [
	{
		icon: 'ri-fire-line',
		kicker: 'Del asador',
		title: 'Cochinillo y cordero',
		text: 'El cochinillo, jugoso por dentro y crujiente por fuera, y el cordero: los dos clásicos que más se repiten en las reseñas.',
	},
	{
		icon: 'ri-restaurant-line',
		kicker: 'A la brasa',
		title: 'Chuletón y entrecot',
		text: 'Chuletón, entrecot de vaca Morucha y abanico ibérico a la brasa, con el punto justo y producto de calidad.',
	},
	{
		icon: 'ri-anchor-line',
		kicker: 'Del mar',
		title: 'Pulpo y bacalao',
		text: 'Pulpo con parmentier y bacalao. El pescado tiene tanto peso en la carta como la carne.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'Para empezar',
		title: 'Croquetas, calamares y tortilla',
		text: 'Entrantes de siempre: croquetas, calamares, tortilla y ensalada de la huerta para compartir en el centro de la mesa.',
	},
	{
		icon: 'ri-cup-line',
		kicker: 'Los miércoles',
		title: 'Desayunos',
		text: 'El miércoles la cocina abre a las 9:00. Café y desayuno para empezar el día antes de la brasa del mediodía.',
	},
	{
		icon: 'ri-cake-3-line',
		kicker: 'Postres',
		title: 'Postres de la casa',
		text: 'La carta se cierra con postres caseros. Pregunta por el del día: cambian con la temporada.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-fire-line', title: 'Brasa' },
	{ icon: 'ri-sun-line', title: 'Terraza' },
	{ icon: 'ri-cup-line', title: 'Desayunos' },
	{ icon: 'ri-group-line', title: 'Grupos' },
];

export const REVIEWS = [
	{
		text: 'Muy rico también el rollito de morcilla, las milhojas de foie y manzana...',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'La comida sabrosa, en especial los calamares muy ricos, la tortilla buenísima.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Sólo fui a desayunar pero tiene todo una pinta fabulosa.',
		rating: 4,
		author: 'Reseña en Google',
		source: 'Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante La Parrilla?',
		a: 'En la Avenida de Salamanca, 61, 10600 Plasencia (Cáceres), en la zona norte de la ciudad, cerca del hospital. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google: lunes de 13:00 a 17:00; martes cerrado; miércoles de 9:00 a 17:00; jueves de 13:30 a 16:30 y de 20:30 a 23:30; viernes de 13:00 a 16:30 y de 20:30 a 23:30; sábado de 13:30 a 16:30 y de 20:30 a 23:30; domingo de 13:00 a 17:00. Es irregular, así que conviene llamar antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 685 52 29 88. La web no tramita reservas. Para grupos, empresas y fines de semana es recomendable llamar con antelación.',
	},
	{
		q: '¿Cuáles son las especialidades?',
		a: 'La brasa manda: cochinillo, cordero, chuletón, entrecot de vaca Morucha, abanico ibérico, pulpo, bacalao, croquetas, calamares y tortilla. La carta cambia con el mercado.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. La Parrilla cuenta con terraza, una de las mejor valoradas de Plasencia, para comer al aire en los meses de buen tiempo.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Los miércoles la cocina abre a las 9:00 y hay desayunos. El resto de días el servicio empieza al mediodía.',
	},
	{
		q: '¿Se puede celebrar una comida de empresa o de grupo?',
		a: 'Sí. La casa prepara menús para empresas, reuniones y grupos. Se concreta por teléfono, en el 685 52 29 88.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta en la mesa, avisa al reservar.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoApaisada1,
		alt: 'Restaurante La Parrilla, en Plasencia',
	},
	{ src: IMAGES.fotoVertical3, alt: 'Detalle de la mesa en La Parrilla' },
	{ src: IMAGES.fotoApaisada5, alt: 'Interior del restaurante La Parrilla' },
	{ src: IMAGES.fotoVertical6, alt: 'Rincón de La Parrilla en Plasencia' },
	{ src: IMAGES.fotoApaisada8, alt: 'Ambiente del restaurante La Parrilla' },
	{ src: IMAGES.fotoVertical9, alt: 'Fotografía de la ficha de Google Maps de La Parrilla' },
	{ src: IMAGES.fotoVertical2, alt: 'La Parrilla, en la Avenida de Salamanca' },
	{ src: IMAGES.fotoVertical4, alt: 'Otra imagen de Restaurante La Parrilla' },
	{ src: IMAGES.fotoVertical7, alt: 'El comedor de La Parrilla' },
	{ src: IMAGES.fotoApaisada10, alt: 'La Parrilla de Plasencia' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34685522988',
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Brasa', 'Carnes', 'Pescados', 'Cocina española'],
	areaServed: [
		{ '@type': 'City', name: 'Plasencia' },
		{ '@type': 'AdministrativeArea', name: 'Norte de Cáceres' },
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
	sameAs: [BUSINESS.social.facebook],
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
			name: 'Terraza',
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
