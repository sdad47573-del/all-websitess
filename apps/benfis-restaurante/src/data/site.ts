/**
 * Datos de Benfis Restaurante — Calle Nº 10, 3 (03316 Benferri, Alicante).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Benfis Restaurante, 38.1464329,-0.9623564,
 *   feature 0xd639760a9f5b3d3:0x6205c284665833b6.
 * - La ficha publica teléfono, horario, nota (4,4 con 903 reseñas), categorías,
 *   accesibilidad y reseñas; de ahí salen todos los datos operativos de esta web.
 * - La carta sale de LA FOTO DE LA CARTA IMPRESA que el propio restaurante subió a
 *   su ficha (src/assets/fotos/…-vertical-07.jpg), no de una invención. Esa carta no
 *   lleva precios impresos, así que aquí no se publican importes.
 */

export const BUSINESS = {
	name: 'Benfis Restaurante',
	shortName: 'Benfis',
	mark: 'BF',
	brandLine: 'Bar restaurante · Benferri',
	tagline: 'Bar restaurante con terraza en Benferri, Alicante',
	summary:
		'Benfis Restaurante es un bar restaurante de Benferri (Alicante), con terraza y aparcamiento en la puerta, que sirve desayunos, almuerzos y comidas de martes a domingo desde las 8:00.',
	street: 'Calle Nº 10, 3',
	city: 'Benferri',
	region: 'Alicante',
	regionName: 'Comunidad Valenciana',
	postalCode: '03316',
	country: 'ES',
	phoneDisplay: '966 19 44 64',
	phoneHref: 'tel:+34966194464',
	rating: 4.4,
	reviewsCount: 903,
	categories: ['Bar restaurante', 'Restaurante mediterráneo'],
	siteUrl: 'https://benfis-restaurante.vercel.app',
	geo: { lat: 38.1464329, lng: -0.9623564 },
	featureId: '0xd639760a9f5b3d3:0x6205c284665833b6',
};

/** CID del lugar en Google: identifica la ficha para enlazar reseñas. */
const CID_DECIMAL = '7063265464509019062';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Benfis+Restaurante/@38.1464329,-0.9623564,17z/data=!3m1!4b1!4m6!3m5!1s0xd639760a9f5b3d3:0x6205c284665833b6!8m2!3d38.1464329!4d-0.9623564!16s%2Fg%2F1tkkw6ly',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.1464329%2C-0.9623564',
	embed: 'https://maps.google.com/maps?q=38.1464329,-0.9623564&z=17&hl=es&output=embed',
};

export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '8:00–18:00' },
	{ day: 'Miércoles', value: '8:00–18:00' },
	{ day: 'Jueves', value: '8:00–18:00' },
	{ day: 'Viernes', value: '8:00–18:00' },
	{ day: 'Sábado', value: '8:00–1:00' },
	{ day: 'Domingo', value: '8:00–18:00' },
];

/** Extractos literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ text: 'Buen lugar para almorzar y comer con raciones generosas y precio razonable.' },
	{ text: 'Comida deliciosa, precio asequible y un trato excelente un placer para repetir.' },
	{ text: 'Un lugar escelente buen servicio y muy buena cocina' },
];

/**
 * Carta transcrita de la carta impresa que el restaurante tiene en su ficha de
 * Google Maps. Se respetan los nombres tal y como están escritos allí. No hay
 * precios en esa carta, así que no se publica ninguno.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Gazpacho manchego con costillar y pollo' },
			{ name: 'Arroz y costra de la casa' },
			{ name: 'Macarrones con salsa pesto y pollo' },
			{ name: 'Arroz a la cubana con carne y huevos fritos' },
			{ name: 'Canelones de carne con mozzarella gratinada al horno' },
			{ name: 'Crema de calabaza y zanahoria', note: 'con queso parmesano y picatostes' },
			{ name: 'Milhoja de berenjena y carne mechada', note: 'con queso fundido' },
			{ name: 'Lasaña de espinacas y alcachofas gratinada' },
			{ name: 'Ensaladilla variada' },
			{ name: 'Pelotas caseras con caldo' },
			{ name: 'Sopa de marisco de la casa' },
		],
	},
	{
		title: 'Carnes',
		items: [
			{ name: 'Costillar de cerdo asado al horno' },
			{ name: 'Muslo de pollo asado al horno' },
			{ name: 'Carrillera estofada al oporto' },
			{ name: 'Lomo de cerdo a la parrilla con salsa pimienta' },
			{ name: 'Contramuslo de pollo deshuesado a la plancha' },
			{ name: 'Pechuga empanada' },
			{ name: 'Solomillo de cerdo a las finas hierbas' },
			{ name: 'Hamburguesas de ternera con huevo' },
			{ name: 'Pechuga de pollo a la parrilla' },
			{ name: 'Secreto de cerdo a la parrilla' },
		],
	},
	{
		title: 'Pescado',
		items: [
			{ name: 'Lenguado a la romana' },
			{ name: 'Filete de dorada a la plancha' },
			{ name: 'Atún a la plancha con salsa verde' },
			{ name: 'Filete de merluza a la plancha o a la romana' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Tarta de queso', note: 'con mermelada de frutos rojos y nata' },
			{ name: 'Café de la casa', note: 'el remate de los menús y almuerzos' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Benfis Restaurante?',
		a: 'En la calle Nº 10, 3, en Benferri (03316, Alicante), un municipio de la Vega Baja junto a Orihuela y Albatera. Tiene aparcamiento en la puerta, delante del edificio. Con el botón «Cómo llegar» se abre la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de martes a domingo a las 8:00 de la mañana. De martes a viernes y el domingo cierra a las 18:00, y el sábado alarga hasta la 1:00 de la madrugada. Los lunes cierra. Es el horario publicado en la ficha de Google, así que en festivos puede cambiar: llama antes si vienes de lejos.',
	},
	{
		q: '¿Se puede desayunar o almorzar?',
		a: 'Sí. Abre a las 8:00, así que se puede ir a desayunar, a almorzar y a comer. Las reseñas hablan de «almorzar y comer» con raciones generosas, y el local tiene carta de entrantes, carnes y pescado.',
	},
	{
		q: '¿Qué se come en Benfis Restaurante?',
		a: 'Cocina casera de bar restaurante, con entrantes, carnes y pescado: gazpacho manchego con costillar y pollo, arroz y costra de la casa, pelotas caseras con caldo, carrillera estofada al oporto, costillar asado al horno, lomo a la parrilla, lenguado a la romana o dorada a la plancha, entre otros. La carta completa, transcrita de la que el restaurante tiene impresa, está en esta misma página.',
	},
	{
		q: '¿Hay terraza?',
		a: 'Sí. El restaurante tiene una terraza con mesas y sombrillas en alto, con barandilla, sobre el aparcamiento, y también mesas dentro del comedor. En las fotos de la ficha se ven las dos zonas.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'No hay reserva online: se habla con el restaurante por teléfono en el 966 19 44 64. Para grupos y fines de semana conviene llamar con antelación.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La carta impresa del restaurante no lleva precios, así que esta web no publica ninguno para no dar una cifra falsa. Las reseñas de Google coinciden en que el precio es razonable y asequible. Para saberlo con certeza, pregunta al llamar o en el local.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google indica aseo adaptado y asientos adaptados para sillas de ruedas. La terraza está en alto, sobre el aparcamiento, así que si necesitas una mesa sin escalones pide sitio en el comedor y avisa por teléfono antes de ir.',
	},
];

export const SERVICIOS = [
	'Bar restaurante',
	'Cocina casera',
	'Terraza',
	'Aparcamiento en la puerta',
	'Desayunos',
	'Almuerzos',
	'Comidas',
	'Aseo adaptado',
];
