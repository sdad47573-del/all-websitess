/**
 * Datos de Restaurante "El Rocío" — Av. Narciso Yepes, 22 (30620 Fortuna, Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante "El Rocio", 38.1842754,-1.1260929,
 *   feature 0xd638f280253b527:0x46cd0bff789c1c99.
 * - La ficha publica teléfono, horario, nota y reseñas; de ahí salen todos los
 *   datos operativos de esta web.
 *
 * Lo que la web NO inventa: precios, carta cerrada ni servicios que la ficha no
 * publique. La carta se resume a partir de los platos que se ven en las fotos de
 * la ficha; las reseñas se citan tal cual, también la crítica.
 */

export const BUSINESS = {
	name: 'Restaurante "El Rocío"',
	mark: 'ER',
	street: 'Av. Narciso Yepes, 22',
	city: 'Fortuna',
	region: 'Murcia',
	regionName: 'Región de Murcia',
	postalCode: '30620',
	country: 'ES',
	phoneDisplay: '868 68 03 03',
	phoneHref: 'tel:+34868680303',
	rating: 4.4,
	reviewsCount: 464,
	priceRange: '€€',
	siteUrl: 'https://www.sur-digital.com/restaurante-el-rocio',
	geo: { lat: 38.1842754, lng: -1.1260929 },
	featureId: '0xd638f280253b527:0x46cd0bff789c1c99',
};

const CID_DECIMAL = '5101747144748702873';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+%22El+Rocio%22/@38.1842754,-1.1260929,17z/data=!3m1!4b1!4m6!3m5!1s0xd638f280253b527:0x46cd0bff789c1c99!8m2!3d38.1842754!4d-1.1260929!16s%2Fg%2F11cntmptng',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.1842754%2C-1.1260929',
	embed: 'https://maps.google.com/maps?q=38.1842754,-1.1260929&z=17&hl=es&output=embed',
};

export const HOURS = [
	{ day: 'Lunes', value: '9:00–18:00' },
	{ day: 'Martes', value: '9:00–18:00' },
	{ day: 'Miércoles', value: '9:00–18:00' },
	{ day: 'Jueves', value: '9:00–18:00' },
	{ day: 'Viernes', value: '9:00–18:00' },
	{ day: 'Sábado', value: '9:00–18:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Pedimos 3 entrantes (chorizo, alcachofas con torreznos y almejas) buenísimos.',
	},
	{
		rating: 5,
		text: 'Lo valoro tan positivamente por su deliciosa paella.',
	},
	{
		rating: 2,
		text: 'Las raciones son enormes y caras.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante "El Rocío"?',
		a: 'En la Avenida Narciso Yepes, 22, en Fortuna (30620, Murcia). Es una avenida amplia a la entrada del municipio, con acceso en coche y aparcamiento en la zona. Con «Cómo llegar» se abre la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de lunes a sábado, de 9:00 a 18:00, y cierra los domingos. Es el horario publicado en la ficha de Google, así que en festivos o puentes puede cambiar: llama antes si vienes de lejos.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'No hay reserva online: se reserva por teléfono en el 868 68 03 03. Para grupos y fines de semana conviene llamar con antelación.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina española: entrantes y raciones (mejillones, almejas a la marinera, gambas al ajillo, calamares, patatas con alioli), arroces como el arroz con conejo y caracoles o la paella, carnes a la brasa y platos de cuchara como el potaje de alubias con chorizo y morcilla.',
	},
	{
		q: '¿Las raciones son grandes?',
			a: 'Sí, y es lo que más se repite en las reseñas: hay quien dice que son «enormes». También hay opiniones que las consideran caras para el tamaño. Si vais pocos, pregunta por media ración o comparte: se suele pedir de más.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google indica acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas. Si necesitas una mesa concreta, avisa al reservar por teléfono.',
	},
];

export const SERVICIOS = [
	'Cocina española',
	'Entrantes y raciones',
	'Arroces y paellas',
	'Carnes a la brasa',
	'Platos de cuchara',
	'Menú del día',
	'Reserva por teléfono',
	'Aparcamiento',
	'Acceso adaptado',
];

/** Carta resumida a partir de los platos que se ven en las fotos de la ficha. */
export const MENU = [
	{
		title: 'Entrantes y raciones',
		items: [
			{ name: 'Mejillones', note: 'al vapor, en cazuela de barro, con limón' },
			{ name: 'Almejas a la marinera', note: 'en salsa, con limón y picatoste de ajo y perejil' },
			{ name: 'Gambas al ajillo', note: 'en cazuela, con el aceite aún borboteando' },
			{ name: 'Calamares a la plancha', note: 'con ensalada, limón y salsa verde' },
			{ name: 'Patatas fritas con alioli', note: 'para picar mientras llega el resto' },
		],
	},
	{
		title: 'Arroces',
		items: [
			{ name: 'Arroz con conejo y caracoles', note: 'arrocejo de la casa, con romero y limón' },
			{ name: 'Paella', note: 'el plato que más se repite en los comentarios de Google' },
		],
	},
	{
		title: 'Brasa y cuchara',
		items: [
			{ name: 'Entrecot a la brasa', note: 'con patatas, pimientos y sal en escamas' },
			{ name: 'Potaje de alubias con chorizo y morcilla', note: 'plato de cuchara de los de antes' },
			{ name: 'Pollo asado con patatas', note: 'habitual en el menú del día' },
		],
	},
	{
		title: 'Menú del día',
		items: [
			{ name: 'Primero, segundo y postre', note: 'sopa o ensalada, plato principal, flan o postre casero, pan y café' },
			{ name: 'Raciones generosas', note: 'los clientes avisan: son enormes, valora compartir' },
			{ name: 'Precio', note: 'la ficha no publica carta ni importes: confírmalo al reservar' },
		],
	},
];
