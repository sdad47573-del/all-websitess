/**
 * Datos de Namaste Índia — R. da Junqueira, 266A, 1300-598 Lisboa (Belém).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Namaste Índia», 38.6975408,-9.1942413,
 *   feature 0xd1ecb4deb08177b:0x7efaa350e12a0a08 (dirección, teléfono, horario,
 *   categoría, nota, reseñas y accesibilidad).
 * - Descripción del propio restaurante en sus perfiles («one of the best Indian
 *   restaurant in Belem… we offer delicious Indian food and Italian dishes»).
 * - Carta de reparto (Uber Eats) y reseñas públicas: chicken tikka masala,
 *   garlic naan, biryani, korma, massaman curry y platos vegetarianos.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * El restaurante no tiene web propia activa y no publica carta con precios en
 * Google: los platos de esta web salen de su carta de reparto y de las fotos.
 */

export const BUSINESS = {
	name: 'Namaste Índia',
	fullName: 'Namaste Índia',
	shortName: 'Namaste Índia',
	mark: 'NI',
	street: 'R. da Junqueira, 266A',
	city: 'Lisboa',
	municipality: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Área Metropolitana de Lisboa',
	postalCode: '1300-598',
	country: 'PT',
	phoneDisplay: '21 014 0685',
	phoneHref: 'tel:+351210140685',
	rating: 4.2,
	reviewsCount: 488,
	/** Nombre con el que el restaurante aparece en plataformas de reparto. */
	alsoKnownAs: 'Namaste India A',
	siteUrl: 'https://www.sur-digital.com/namaste-india',
	geo: { lat: 38.6975408, lng: -9.1942415 },
	featureId: '0xd1ecb4deb08177b:0x7efaa350e12a0a08',
	placeId: 'ChIJexcI603LHg0RCAoq4VCj-n4',
	cid: '9149805160726923784',
	/** Categoría con la que Google describe el local. */
	googleCats: ['Restaurante indio'],
	tagline: 'Cocina india a dos pasos de Belém',
	description:
		'Namaste Índia, restaurante indio en la R. da Junqueira 266A (1300-598 Lisboa), junto a Belém: tandoori, curris, biryani, naan y platos vegetarianos, con reparto a domicilio. 4,2 en Google con 488 reseñas. Tel. 21 014 0685.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Namaste+%C3%8Dndia/@38.6975408,-9.1942415,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ecb4deb08177b:0x7efaa350e12a0a08!8m2!3d38.6975408!4d-9.1942415!16s%2Fg%2F11cs5y6n7s',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6975408%2C-9.1942415',
	embed: 'https://maps.google.com/maps?q=38.6975408,-9.1942415&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días, sin pausa. */
export const HOURS = [
	{ day: 'Lunes', value: '11:00–23:00' },
	{ day: 'Martes', value: '11:00–23:00' },
	{ day: 'Miércoles', value: '11:00–23:00' },
	{ day: 'Jueves', value: '11:00–23:00' },
	{ day: 'Viernes', value: '11:00–23:00' },
	{ day: 'Sábado', value: '11:00–23:00' },
	{ day: 'Domingo', value: '11:00–23:00' },
];

/** Señas de identidad que constan en la ficha y en sus perfiles públicos. */
export const SERVICIOS = [
	'Cocina india',
	'Tandoori y curris',
	'Platos vegetarianos',
	'Para llevar',
	'Reparto a domicilio',
	'Comer en el local',
	'Acceso para sillas de ruedas',
	'Abierto todos los días',
];

/**
 * Carta. No hay carta publicada con precios en Google: los platos salen de la
 * carta de reparto del restaurante y de lo que aparece en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Samosa', note: 'empanadilla triangular rellena de patata y guisantes' },
			{ name: 'Pakora', note: 'verduras rebozadas con harina de garbanzo' },
			{ name: 'Papadum', note: 'tortita crujiente de lenteja, con sus salsas' },
		],
	},
	{
		title: 'Del tandoor',
		items: [
			{ name: 'Chicken tikka', note: 'pollo marinado en yogur y especias, a la brasa' },
			{ name: 'Tandoori chicken', note: 'pollo al tandoor con arroz y ensalada' },
			{
				name: 'Garlic naan',
				note: 'pan plano con ajo y cilantro, recién hecho y aún marcado de la brasa',
			},
		],
	},
	{
		title: 'Curris',
		items: [
			{
				name: 'Chicken tikka masala',
				note: 'el plato que más repiten las reseñas, con salsa de tomate y especias',
			},
			{ name: 'Korma', note: 'curri suave con leche de coco y anacardos' },
			{ name: 'Massaman curry', note: 'curri tailandés de patata, cacahuete y coco' },
			{
				name: 'Curri de verduras',
				note: 'patata y guisantes en salsa amarilla, servido en el cuenco de latón con hornillo',
			},
		],
	},
	{
		title: 'Arroces y horno',
		items: [
			{
				name: 'Biryani',
				note: 'arroz basmati especiado con almendra laminada y pasas, en cuenco de barro con tomate y pepino',
			},
			{ name: 'Pizza', note: 'la cocina italiana que el propio restaurante anuncia' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Namaste Índia?',
		a: 'En la R. da Junqueira, 266A (1300-598 Lisboa), en la zona de Belém, junto a la ribera del Tajo y a un paso del Mosteiro dos Jerónimos y de la Torre de Belém. Es una calle larga que sale de Alcântara hacia Belém, con paradas de autobús y tranvía cerca. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 11:00 a 23:00, sin cerrar al mediodía. Es el horario de su ficha de Google; en festivos puede cambiar, así que si vas en una fecha señalada conviene llamar antes al 21 014 0685.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina india: tandoori y chicken tikka, curris como el tikka masala, el korma o el massaman, biryani, naan con ajo y platos vegetarianos. El restaurante anuncia además cocina italiana, con pizza en la carta.',
	},
	{
		q: '¿Hay opciones vegetarianas?',
		a: 'Sí. La casa tiene una parte vegetariana con curris de verduras, samosa, pakora y papadum, además del naan y el arroz como acompañamiento.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'Sí. El restaurante está en las plataformas de reparto de Lisboa y también atiende pedidos para llevar. La web no enlaza a ninguna plataforma concreta: para encargar, lo más directo es llamar al 21 014 0685.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha de Google no ofrece reserva online. El teléfono es el 21 014 0685; conviene llamar si vais en grupo o un fin de semana, porque la zona de Belém se llena de visitantes a la hora de comer.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas. Es el único dato de accesibilidad que publica, así que si necesitas aparcamiento adaptado o un aseo accesible, llama antes al 21 014 0685 y te lo confirman.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,2 sobre 5 con 488 reseñas, una nota sólida para un indio de barrio en una ciudad con mucha oferta. En las plataformas de reparto ronda también el 4,4.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha de Google no publica precios y esta web no los inventa. Es un restaurante de precio medio, con platos para compartir: un curri, un arroz y un naan salen a cuenta entre dos. Para la carta con precios del día, llama al 21 014 0685.',
	},
];
