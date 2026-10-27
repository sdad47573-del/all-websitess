/**
 * Datos de Tres Amigos Mexican Restaurant & Cocktailbar — Av. Gen. Humberto
 * Delgado, 13A, 2825-286 Costa de Caparica (Almada).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Tres Amigos Mexican Restaurant & Cocktailbar»,
 *   38.6389083,-9.2340896, feature 0xd1ecbb46b823363:0xd2e00782b3d16eeb
 *   (dirección, teléfono, horario, categoría, nota, reseñas, accesibilidad y la
 *   descripción del propio local).
 * - Descripción del local: «After running successfully in Lisbon, now we are open
 *   at Costa da Caparica with fresh and delicious Mexican cuisine and exotic
 *   cocktails».
 * - Reseñas públicas y carta de reparto: margaritas, nachos, quesadillas,
 *   burritos, tacos y caipirinhas.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * El local no tiene web propia ni publica carta con precios en Google. Ojo: la
 * marca tiene además un restaurante en Lisboa (R. da Rosa); esta web es solo la
 * de la ficha de Costa da Caparica.
 */

export const BUSINESS = {
	name: 'Tres Amigos',
	fullName: 'Tres Amigos Mexican Restaurant & Cocktailbar',
	shortName: 'Tres Amigos',
	mark: '3A',
	street: 'Av. Gen. Humberto Delgado, 13A',
	city: 'Costa de Caparica',
	municipality: 'Almada',
	region: 'Setúbal',
	regionName: 'Área Metropolitana de Lisboa',
	postalCode: '2825-286',
	country: 'PT',
	phoneDisplay: '21 395 2171',
	phoneHref: 'tel:+351213952171',
	rating: 4.5,
	reviewsCount: 387,
	siteUrl: 'https://tres-amigos.vercel.app',
	geo: { lat: 38.6389083, lng: -9.2340896 },
	featureId: '0xd1ecbb46b823363:0xd2e00782b3d16eeb',
	placeId: 'ChIJYzOCa7TLHg0R627Rs4IH4NI',
	cid: '15195153400692043499',
	/** Categoría con la que Google describe el local. */
	googleCats: ['Restaurante mexicano'],
	/** Descripción que publica el propio restaurante en su ficha. */
	ownDescription:
		'After running successfully in Lisbon, now we are open at Costa da Caparica with fresh and delicious Mexican cuisine and exotic cocktails.',
	tagline: 'Mexicanos y cócteles a dos pasos de la playa',
	description:
		'Tres Amigos, restaurante mexicano y cocktail bar en la Av. Gen. Humberto Delgado 13A (2825-286 Costa de Caparica, Almada): tacos, burritos, quesadillas, nachos y margaritas, a dos pasos de la playa. 4,5 en Google con 387 reseñas. Tel. 21 395 2171.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Tres+Amigos+Mexican+Restaurant+%26+Cocktailbar/@38.6389083,-9.2340896,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ecbb46b823363:0xd2e00782b3d16eeb!8m2!3d38.6389083!4d-9.2340896!16s%2Fg%2F11t6ghw19d',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6389083%2C-9.2340896',
	embed: 'https://maps.google.com/maps?q=38.6389083,-9.2340896&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: lunes y domingo cerrados. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '14:00–23:30' },
	{ day: 'Miércoles', value: '14:00–23:30' },
	{ day: 'Jueves', value: '14:00–23:30' },
	{ day: 'Viernes', value: '14:00–00:00' },
	{ day: 'Sábado', value: '13:00–00:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Señas de identidad que constan en la ficha y en sus perfiles públicos. */
export const SERVICIOS = [
	'Cocina mexicana',
	'Cocktail bar',
	'Margaritas y caipirinhas',
	'Tacos y burritos',
	'Opciones vegetarianas',
	'Comer en el local',
	'Para llevar',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
];

/**
 * Carta. No hay carta publicada con precios: los apartados salen de las reseñas
 * públicas, de la carta de reparto y de lo que aparece en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{ name: 'Nachos', note: 'con queso fundido, guacamole y pico de gallo, para compartir' },
			{ name: 'Guacamole', note: 'machacado al momento, con totopos' },
			{ name: 'Quesadillas', note: 'de carne o de verduras, a la plancha' },
		],
	},
	{
		title: 'Tacos y burritos',
		items: [
			{ name: 'Tacos', note: 'tortilla de maíz con carne, cebolla, cilantro y lima' },
			{ name: 'Pollo burrito', note: 'el burrito de pollo que citan las reseñas, con arroz y frijoles' },
			{ name: 'Burrito de carne', note: 'envuelto en tortilla de harina, con guacamole' },
		],
	},
	{
		title: 'Del comal',
		items: [
			{ name: 'Fajitas', note: 'carne o verduras a la plancha, servidas con tortillas' },
			{ name: 'Enchiladas', note: 'rellenas y gratinadas con salsa y queso' },
			{ name: 'Chili con carne', note: 'picante, con arroz o totopos' },
		],
	},
	{
		title: 'De la barra',
		items: [
			{ name: 'Margarita', note: 'la de la casa, servida en las rocas o congelada' },
			{ name: 'Caipirinha', note: 'la brasileira que también repiten las reseñas' },
			{ name: 'Cócteles de la casa', note: 'la carta de cócteles exóticos que anuncia el local' },
			{ name: 'Cerveza y refrescos', note: 'para acompañar los tacos' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tres Amigos?',
		a: 'En la Av. Gen. Humberto Delgado, 13A (2825-286 Costa de Caparica), en el municipio de Almada, en la avenida que baja hacia la playa de Costa da Caparica. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Es el mismo Tres Amigos que hay en Lisboa?',
		a: 'Es la misma marca. El propio restaurante explica en su ficha que, después de funcionar en Lisboa, abrió en Costa da Caparica con cocina mexicana y cócteles. Esta web es solo la de la ficha de Costa da Caparica: la dirección, el teléfono y el horario son los de aquí.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra lunes y domingo. De martes a jueves abre de 14:00 a 23:30; los viernes de 14:00 a 24:00 y los sábados de 13:00 a 24:00. Es el horario de su ficha de Google; en festivos puede cambiar, así que si vas en una fecha señalada conviene llamar al 21 395 2171.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina mexicana: nachos con guacamole, quesadillas, tacos, burritos —el de pollo es el más citado en las reseñas—, fajitas, enchiladas y chili. Hay opciones vegetarianas y también carta de reparto para llevar.',
	},
	{
		q: '¿Qué hay para beber?',
		a: 'Es restaurante y cocktail bar a la vez. Las reseñas repiten las margaritas, servidas en las rocas o congeladas, y las caipirinhas; el local anuncia además una carta de cócteles exóticos, cerveza y refrescos.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Se atiende por teléfono, en el 21 395 2171. En verano y los fines de semana la zona se llena, así que avisar antes evita esperas.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí, el local está en las plataformas de reparto de la zona con servicio de recogida y entrega. Esta web no enlaza a ninguna plataforma concreta: para encargar, lo más directo es llamar al 21 395 2171.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Sí: su ficha de Google marca acceso, aparcamiento y asientos adaptados para sillas de ruedas. No detalla el aseo, así que si lo necesitas llama antes al 21 395 2171.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,5 sobre 5 con 387 reseñas, una nota alta y con volumen suficiente para fiarse: los comentarios destacan los cócteles, los nachos y el trato del equipo.',
	},
];
