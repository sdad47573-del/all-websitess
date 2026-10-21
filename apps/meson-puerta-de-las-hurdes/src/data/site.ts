/**
 * Datos de Mesón Puerta de las Hurdes (C. Pósito, 17 · 10813 Pozuelo de Zarzón, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Mesón Puerta delas Hurdes.».
 *   Feature 0xd3ddfda64fdcf29:0xecc3875286812faa.
 * - Dirección, categoría, valoración, reseñas y accesibilidad: ficha pública de Google
 *   (octubre de 2026). La ficha no publica teléfono ni horario.
 * - Carta y servicios: reseñas de Google recogidas en Toppings & Salads (cachopo, magro con
 *   verduras, orejas a la brasa, platos combinados, hamburguesas, bocadillos, pizzas, tostas,
 *   desayunos, terraza, zona de juegos, karaoke, comida para llevar y reservas).
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios, teléfono ni horario: el titular no los ha facilitado y Google no los
 * muestra. Los platos citados son los que más se repiten en las fuentes públicas.
 */

import fotoApaisada1 from '../assets/fotos/meson-puerta-de-las-hurdes-apaisada-01.jpg';
import fotoApaisada4 from '../assets/fotos/meson-puerta-de-las-hurdes-apaisada-04.jpg';
import fotoApaisada8 from '../assets/fotos/meson-puerta-de-las-hurdes-apaisada-08.jpg';
import fotoApaisada9 from '../assets/fotos/meson-puerta-de-las-hurdes-apaisada-09.jpg';
import fotoVertical2 from '../assets/fotos/meson-puerta-de-las-hurdes-vertical-02.jpg';
import fotoVertical3 from '../assets/fotos/meson-puerta-de-las-hurdes-vertical-03.jpg';
import fotoVertical5 from '../assets/fotos/meson-puerta-de-las-hurdes-vertical-05.jpg';
import fotoVertical6 from '../assets/fotos/meson-puerta-de-las-hurdes-vertical-06.jpg';
import fotoVertical7 from '../assets/fotos/meson-puerta-de-las-hurdes-vertical-07.jpg';
import fotoVertical10 from '../assets/fotos/meson-puerta-de-las-hurdes-vertical-10.jpg';
import logo from '../assets/fotos/meson-puerta-de-las-hurdes-logo.svg';

export const IMAGES = {
	fotoApaisada1,
	fotoApaisada4,
	fotoApaisada8,
	fotoApaisada9,
	fotoVertical2,
	fotoVertical3,
	fotoVertical5,
	fotoVertical6,
	fotoVertical7,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Mes%C3%B3n+Puerta+delas+Hurdes./@40.1488905,-6.41489,17z/data=!3m1!4b1!4m6!3m5!1s0xd3ddfda64fdcf29:0xecc3875286812faa!8m2!3d40.1488905!4d-6.41489!16s%2Fg%2F11lc9hh3fs?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Mesón Puerta de las Hurdes',
	shortName: 'Puerta de las Hurdes',
	tagline: 'Comida casera y terraza en el Valle del Alagón',
	claim: 'Cachopo, platos combinados y karaoke en Pozuelo de Zarzón',
	summary:
		'Restaurante familiar y bar en Pozuelo de Zarzón (Cáceres), en el Valle del Alagón: cachopo, magro con verduras, orejas a la brasa, platos combinados, hamburguesas, raciones y desayunos, con terraza, zona de juegos y karaoke.',
	street: 'C. Pósito, 17',
	city: 'Pozuelo de Zarzón',
	postalCode: '10813',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Valle del Alagón',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=40.1488905%2C-6.41489&t=&z=16&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 40.1488905, lng: -6.41489 },
	featureId: '0xd3ddfda64fdcf29:0xecc3875286812faa',
	placeId: 'ChIJKc_9ZNrfPQ0Rqi-BhlKHw-w',
	plusCode: '4HXP+H2',
	rating: 4.5,
	reviewCount: 77,
	hoursNote:
		'La ficha de Google no publica un horario. Los clientes hablan de desayunos, comidas y cenas, y de noches de karaoke, pero conviene comprobar la ficha antes de ir.',
	categories: ['Restaurante', 'Restaurante familiar', 'Bar', 'Cocina casera'],
	social: {},
	siteUrl: 'https://meson-puerta-de-las-hurdes.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Mesón Puerta de las Hurdes',
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
		icon: 'ri-restaurant-2-line',
		title: 'Cachopo y magro',
		text: 'Cachopo generoso y magro con verduras, los dos platos que más se repiten en las reseñas.',
	},
	{
		icon: 'ri-bread-line',
		title: 'Platos combinados',
		text: 'Platos combinados, hamburguesas, bocadillos, tostas y raciones para todos los gustos.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Desayunos',
		text: 'Café, bollería y tostadas con jamón para empezar el día antes de la ruta.',
	},
	{
		icon: 'ri-music-line',
		title: 'Terraza y karaoke',
		text: 'Terraza, zona de juegos para niños y noches de música en un mesón familiar.',
	},
];

export const CASA_FACTS = [
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '77' },
	{ label: 'La cocina', value: 'Casera' },
	{ label: 'Entorno', value: 'Alagón' },
];

export const CARTA = [
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'La especialidad',
		title: 'Cachopo',
		text: 'Cachopo generoso y bien preparado, el plato que más se recomienda en las reseñas de la casa.',
	},
	{
		icon: 'ri-time-line',
		kicker: 'Cuchara',
		title: 'Magro con verduras',
		text: 'Magro con verduras, un guiso de los de siempre elogiado por su sabor y por la cantidad.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'A la brasa',
		title: 'Orejas a la brasa',
		text: 'Orejas a la brasa, una de las raciones que más sorprende a quien se sienta a la mesa.',
	},
	{
		icon: 'ri-restaurant-line',
		kicker: 'Combinados',
		title: 'Platos combinados',
		text: 'Platos combinados con bebida, uno de los pilares de la carta para comer sin complicarse.',
	},
	{
		icon: 'ri-bread-line',
		kicker: 'Barra',
		title: 'Hamburguesas y bocadillos',
		text: 'Hamburguesas, bocadillos y tostas, además de tostadas con aceite y jamón para el desayuno.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'Para compartir',
		title: 'Pizzas y raciones',
		text: 'Pizzas, raciones y entrantes para compartir, con opciones para todos los gustos.',
	},
	{
		icon: 'ri-cup-line',
		kicker: 'Desde primera hora',
		title: 'Desayunos completos',
		text: 'Café, bollería y tostadas: los clientes destacan el desayuno antes de retomar el viaje.',
	},
	{
		icon: 'ri-shopping-bag-3-line',
		kicker: 'Para llevar',
		title: 'Comida para llevar',
		text: 'La casa prepara comida para llevar, una opción cómoda si vas de paso por el Valle del Alagón.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-sun-line', title: 'Terraza' },
	{ icon: 'ri-gamepad-line', title: 'Zona de juegos' },
	{ icon: 'ri-music-line', title: 'Karaoke' },
	{ icon: 'ri-shopping-bag-3-line', title: 'Para llevar' },
];

export const VALORES = [
	{
		icon: 'ri-heart-3-line',
		title: 'Trato familiar',
		text: 'Los dueños y el equipo aparecen en casi todas las reseñas por su amabilidad y su trato cercano.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Terraza y juegos',
		text: 'Terraza para comer al aire y zona de juegos para que los niños tengan su espacio.',
	},
	{
		icon: 'ri-music-line',
		title: 'Noches de karaoke',
		text: 'El mesón se anima por la noche con música y karaoke, además de las comidas y cenas.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Parada de carretera',
		text: 'A la salida del pueblo, junto a la carretera y con aparcamiento en las inmediaciones.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mesón Puerta de las Hurdes?',
		a: 'En la calle Pósito, 17, 10813 Pozuelo de Zarzón (Cáceres), en el Valle del Alagón, a la salida del pueblo y junto a la carretera. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Su ficha de Google no publica horario. Los clientes hablan de desayunos, comidas y cenas, y de noches de karaoke, pero conviene comprobar la ficha antes de ir o acercarse al local.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'La ficha de Google tampoco publica teléfono. Las reseñas indican que el mesón acepta reservas, así que lo más directo es acercarse al local o consultar la ficha de Google, donde aparecen los datos actualizados.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina casera y de bar: cachopo, magro con verduras, orejas a la brasa, platos combinados, hamburguesas, bocadillos, tostas, pizzas, raciones y desayunos con café, bollería y tostadas.',
	},
	{
		q: '¿Hay opciones para niños?',
		a: 'Sí, el local cuenta con zona de juegos para niños y una carta con platos combinados, hamburguesas y raciones que funcionan bien con los más pequeños.',
	},
	{
		q: '¿Se puede ir con perro?',
		a: 'Sí, la terraza es pet-friendly: las reseñas cuentan que han servido bocadillos en la terraza para que los clientes pudieran estar con su perro.',
	},
	{
		q: '¿Hay aparcamiento?',
		a: 'El mesón está a la salida del pueblo, junto a la carretera, y hay aparcamiento en las inmediaciones. Es una parada cómoda si vas de ruta por el Valle del Alagón, Sierra de Gata o Las Hurdes.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'Su ficha de Google indica asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta en la mesa, lo mejor es comprobarlo al llegar o desde la ficha de Google.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoVertical3,
		alt: 'Mesón Puerta de las Hurdes, en Pozuelo de Zarzón',
	},
	{ src: IMAGES.fotoApaisada1, alt: 'Comedor del mesón en el Valle del Alagón' },
	{ src: IMAGES.fotoVertical5, alt: 'Detalle de la mesa en el Mesón Puerta de las Hurdes' },
	{ src: IMAGES.fotoApaisada4, alt: 'Ambiente familiar del restaurante' },
	{ src: IMAGES.fotoVertical6, alt: 'Rincón del mesón en Pozuelo de Zarzón' },
	{ src: IMAGES.fotoApaisada8, alt: 'Platos de la cocina del Mesón Puerta de las Hurdes' },
	{ src: IMAGES.fotoVertical7, alt: 'Interior del restaurante familiar' },
	{ src: IMAGES.fotoVertical10, alt: 'Fotografía de la ficha de Google Maps del mesón' },
	{ src: IMAGES.fotoApaisada9, alt: 'Mesón Puerta de las Hurdes, junto a la carretera' },
	{ src: IMAGES.fotoVertical2, alt: 'Otra imagen del Mesón Puerta de las Hurdes' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: 'Mesón Puerta delas Hurdes',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina casera', 'Cocina extremeña', 'Platos combinados', 'Carnes a la brasa'],
	areaServed: [
		{ '@type': 'City', name: 'Pozuelo de Zarzón' },
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
	amenityFeature: [
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Asientos adaptados para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Terraza',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Zona de juegos para niños',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Karaoke',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Comida para llevar',
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
