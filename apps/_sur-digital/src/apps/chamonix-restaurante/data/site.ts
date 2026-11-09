/**
 * Datos de Chamonix Restaurante — Avinguda d'Isidor Macabich, 15 (07820 Sant Antoni
 * de Portmany, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Chamonix Restaurante»,
 *   38.9852517,1.2986321, feature 0x129936035310f9d3:0x694d36fa09dce93f
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/: la terraza, la fachada con los rótulos «CHAMONIX»,
 *   «Restaurante · carnes a la brasa» y «Chamonix Grill», la pizarra del menú del
 *   día, la carta impresa y los platos.
 *
 * La carta reproduce los precios que se leen en la carta impresa de la ficha. Los
 * dos platos que aparecen con el precio tachado a mano se muestran como «a
 * consultar» en lugar de inventar la corrección.
 */

export const BUSINESS = {
	name: 'Chamonix Restaurante',
	shortName: 'Chamonix',
	mark: 'CH',
	street: 'Avinguda d’Isidor Macabich, 15',
	city: 'Sant Antoni de Portmany',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07820',
	country: 'ES',
	phoneDisplay: '971 34 07 17',
	phoneHref: 'tel:+34971340717',
	rating: 4.2,
	reviewsCount: 586,
	siteUrl: 'https://www.sur-digital.com/chamonix-restaurante',
	geo: { lat: 38.9852517, lng: 1.2986321 },
	featureId: '0x129936035310f9d3:0x694d36fa09dce93f',
	placeId: 'ChIJ0_kQUwM2mRIRP-ncCfo2TWk',
	cid: '7587781394724350271',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Chamonix+Restaurante/@38.9852517,1.2986321,17z/data=!3m1!4b1!4m6!3m5!1s0x129936035310f9d3:0x694d36fa09dce93f!8m2!3d38.9852517!4d1.2986321!16s%2Fg%2F11dxdksrkn',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9852517%2C1.2986321',
	embed: 'https://maps.google.com/maps?q=38.9852517,1.2986321&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días de 8:00 a 24:00. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–24:00' },
	{ day: 'Martes', value: '8:00–24:00' },
	{ day: 'Miércoles', value: '8:00–24:00' },
	{ day: 'Jueves', value: '8:00–24:00' },
	{ day: 'Viernes', value: '8:00–24:00' },
	{ day: 'Sábado', value: '8:00–24:00' },
	{ day: 'Domingo', value: '8:00–24:00' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Sitio perfecto para comer paella y arroz con bogavante, muy rico todo ello',
	'Me encanta desayunar ahí y pedir una tostada de mantequilla, York y queso',
	'Fuimos varias veces y cada camarera fue súper atenta y simpática con nosotras',
];

/**
 * Lo que consta: las categorías con las que Google clasifica el local, lo que
 * anuncian sus rótulos, lo que se lee en la carta y lo que marca la ficha.
 */
export const SERVICIOS = [
	'Carnes a la brasa',
	'Parrilla',
	'Cocina española',
	'Cocina mediterránea',
	'Arroces y pescado',
	'Desayunos',
	'Menú del día',
	'Terraza',
	'Asientos adaptados',
	'Amigable con la comunidad LGBTQ+',
];

/**
 * Carta transcrita de la fotografía de la carta impresa (src/assets/fotos/
 * chamonix-restaurante-apaisada-10.jpg). La numeración salta porque es la
 * numeración de la carta original.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Patatas rústicas con alioli de sobrasada', note: '7,00 €' },
			{ name: 'Boquerones en vinagre', note: '8,00 € · 10 unidades' },
			{ name: 'Queso provolone al horno', note: '8,00 €' },
			{ name: 'Gambón rebozado con panko', note: '8,00 €' },
			{ name: 'Guacamole de la casa con totopos', note: '10,00 €' },
			{ name: 'Carpaccio de calabacín', note: '11,00 €' },
			{ name: 'Carpaccio de buey', note: '13,00 €' },
			{ name: 'Calamar a la andaluza con mayonesa de lima', note: '11,00 €' },
			{ name: 'Frita de pulpo', note: '14,00 €' },
			{ name: 'Navajas en salsa', note: '12,00 €' },
			{ name: 'Parrillada de verduras', note: '13,00 €' },
			{ name: 'Gambas a la plancha', note: 'Precio a consultar' },
			{ name: 'Gambas al estilo Chamonix', note: '16,00 €' },
			{ name: 'Plato de jamón ibérico de bellota', note: '25,00 €' },
			{ name: 'Plato de queso manchego', note: '15,00 €' },
			{ name: 'Pulpo a la gallega', note: '22,00 €' },
			{ name: 'Espaguetis a la bolonesa', note: '10,00 €' },
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{ name: 'Ensalada de queso de cabra', note: '14,00 €' },
			{ name: 'Ensalada de atún', note: '13,00 €' },
			{ name: 'Ensalada de burrata, melocotón y jamón serrano', note: '14,00 €' },
		],
	},
	{
		title: 'Brasa y pescado',
		items: [
			{ name: 'Calamar a la plancha', note: '22,00 €' },
			{ name: 'Lenguado meunière', note: '17,00 €' },
			{ name: 'Lenguado a la plancha', note: '16,00 €' },
			{ name: 'Sirvia a la plancha', note: '26,00 €' },
			{ name: 'Entrecot de novilla (premium)', note: '25,00 €' },
			{ name: 'Entraña de Angus', note: 'Precio a consultar' },
			{ name: 'Solomillo de ternera', note: '28,00 €' },
			{ name: 'Secreto ibérico al romero', note: '19,00 €' },
			{ name: 'Chuletas de cordero', note: '20,00 €' },
		],
	},
	{
		title: 'Desayunos y menú del día',
		items: [
			{
				name: 'Tostada de mantequilla, York y queso',
				note: 'Desayuno citado en las reseñas, desde las 8:00',
			},
			{
				name: 'Menú del día',
				note: 'En la pizarra de la fachada, cambia cada jornada',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Chamonix Restaurante?',
		a: 'En Avinguda d’Isidor Macabich, 15, en Sant Antoni de Portmany (07820, Ibiza), en la misma acera que los apartamentos El Moro y a pocos minutos del puerto. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 8:00 a 24:00, sin día de cierre. Al abrir tan temprano sirve desayunos, y por la noche mantiene la cocina hasta medianoche. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa o preguntar por el menú del día hay que llamar al 971 34 07 17.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Carnes a la brasa y a la parrilla (entrecot de novilla, entraña de Angus, solomillo de ternera, secreto ibérico al romero y chuletas de cordero), pescado y marisco (lenguado, calamar, sirvia, pulpo a la gallega y gambas), ensaladas, y arroces como la paella y el arroz con bogavante que cita una de sus reseñas.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. Abre a las 8:00 y una de las reseñas publicadas habla de desayunar allí con una tostada de mantequilla, York y queso.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'En la carta impresa los entrantes van de 7,00 a 25,00 € y los platos principales de 16,00 a 28,00 €. Dos platos aparecen con el precio corregido a mano en la fotografía, por eso figuran como «precio a consultar». Los precios pueden cambiar: confírmalos al llamar.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran una terraza cubierta con toldos blancos junto a la pared de piedra del edificio, con mesas y sillas blancas, y también mesas dentro ante los ventanales de madera.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca asientos adaptados para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,2 sobre 5 con 586 reseñas. Las publicadas destacan el arroz con bogavante, los desayunos y el trato del equipo.',
	},
];
