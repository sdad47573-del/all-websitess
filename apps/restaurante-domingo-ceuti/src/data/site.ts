/**
 * Datos de Restaurante Domingo Ceutí — C. Isaac Peral, 2 (30563 Ceutí, Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Domingo Ceutí, 38.098631,-1.2816181,
 *   feature 0xd64798283d6ca89:0x60053bbd9f49bab0.
 * - La ficha publica teléfono, horario, nota, categorías, accesibilidad y reseñas;
 *   de ahí salen todos los datos operativos de esta web.
 *
 * Lo que la web NO inventa: precios, carta cerrada ni servicios que la ficha no
 * publique. La carta se resume a partir de los platos que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante Domingo Ceutí',
	shortName: 'Domingo Ceutí',
	mark: 'DC',
	brandLine: 'Arroces y brasa · Ceutí',
	tagline: 'Bar restaurante, arrocería y cocina mediterránea en Ceutí, Murcia',
	summary:
		'Restaurante Domingo Ceutí es un bar restaurante de cocina mediterránea y española en la calle Isaac Peral, 2 (30563 Ceutí, Murcia), con arroces al fuego, brasa y terraza con parque infantil. Abre de martes a domingo, de 13:00 a 18:30, y cierra los lunes.',
	street: 'C. Isaac Peral, 2',
	city: 'Ceutí',
	region: 'Murcia',
	regionName: 'Región de Murcia',
	postalCode: '30563',
	country: 'ES',
	phoneDisplay: '968 69 12 38',
	phoneHref: 'tel:+34968691238',
	rating: 4.4,
	reviewsCount: 663,
	categories: [
		'Bar restaurante',
		'Restaurante mediterráneo',
		'Arrocería',
		'Restaurante de cocina española',
	],
	siteUrl: 'https://restaurante-domingo-ceuti.vercel.app',
	geo: { lat: 38.098631, lng: -1.2816181 },
	featureId: '0xd64798283d6ca89:0x60053bbd9f49bab0',
};

const CID_DECIMAL = '6919002088131902128';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Domingo+Ceut%C3%AD/@38.098631,-1.2816181,17z/data=!3m1!4b1!4m6!3m5!1s0xd64798283d6ca89:0x60053bbd9f49bab0!8m2!3d38.098631!4d-1.2816181!16s%2Fg%2F1tdbs6bm',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.098631%2C-1.2816181',
	embed: 'https://maps.google.com/maps?q=38.098631,-1.2816181&z=17&hl=es&output=embed',
};

export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '13:00–18:30' },
	{ day: 'Miércoles', value: '13:00–18:30' },
	{ day: 'Jueves', value: '13:00–18:30' },
	{ day: 'Viernes', value: '13:00–18:30' },
	{ day: 'Sábado', value: '13:00–18:30' },
	{ day: 'Domingo', value: '13:00–18:30' },
];

/** Extractos literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		text: 'Pulpo, calamares, arroz y la carne a la brasa todo exquisito.',
	},
	{
		text: 'Espectacular en todo y en la buena comida que nos hicieron, volveré a repetir.',
	},
	{
		text: 'Tome un buen menú con aperitivo, cerveza y vino por 33 €.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Domingo Ceutí?',
		a: 'En la calle Isaac Peral, 2, en Ceutí (30563, Murcia). Es una calle céntrica del municipio, con acceso en coche desde la Avenida de Murcia. Con «Cómo llegar» se abre la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de martes a domingo, de 13:00 a 18:30, y cierra los lunes. Es el horario publicado en la ficha de Google, así que en festivos o puentes puede cambiar: llama antes si vienes de lejos.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'No hay reserva online: se habla con el restaurante por teléfono en el 968 69 12 38. Para grupos y fines de semana conviene llamar con antelación.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina mediterránea y española, con la arrocería como una de sus señas. Las reseñas de Google destacan el pulpo, los calamares, el arroz y la carne a la brasa, y hay quien cita el menú con aperitivo, cerveza y vino.',
	},
	{
		q: '¿Se puede comer menú del día?',
		a: 'Sí, la ficha y las reseñas lo mencionan. Una reseña cifra el menú con aperitivo, cerveza y vino en 33 €, pero el precio puede haber cambiado: confírmalo al llamar, porque aquí no se publican importes.',
	},
	{
		q: '¿Se puede ir con niños?',
		a: 'La ficha tiene fotos de una terraza exterior con césped artificial y un parque infantil con columpios y tobogán, así que es una opción cómoda para ir en familia. El comedor de dentro es amplio, con mesas grandes para grupos.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas una mesa concreta, avisa por teléfono antes de ir.',
	},
];

export const SERVICIOS = [
	'Bar restaurante',
	'Cocina mediterránea',
	'Cocina española',
	'Arrocería',
	'Arroces y paellas',
	'Carnes a la brasa',
	'Pescados y mariscos',
	'Menú del día',
	'Terraza',
	'Parque infantil',
	'Acceso adaptado',
	'Aseo adaptado',
];

/**
 * Carta resumida a partir de los platos que citan las reseñas de la ficha. No es la
 * carta completa: el restaurante no la tiene publicada en Google.
 */
export const MENU = [
	{
		title: 'Arroces y paellas',
		items: [
			{ name: 'Paella de marisco', note: 'con gambas, langostinos, mejillones y calamar' },
			{ name: 'Arroz al fuego de leña', note: 'en paella grande sobre el fuego, como se ve en las fotos de la ficha' },
		],
	},
	{
		title: 'De la brasa',
		items: [
			{ name: 'Chuletillas a la brasa', note: 'a la parrilla sobre carbón, con patatas y pimientos de Padrón' },
			{ name: 'Carne a la brasa', note: 'el plato que repiten las reseñas de Google' },
		],
	},
	{
		title: 'Para empezar y compartir',
		items: [
			{ name: 'Calamares a la romana', note: 'rebozados, con pimientos de Padrón y limón' },
			{ name: 'Pulpo', note: 'uno de los platos que destacan las reseñas' },
			{ name: 'Patatas en salsa con pimentón', note: 'de guarnición o para compartir' },
		],
	},
	{
		title: 'Menú del día',
		items: [
			{ name: 'Menú con aperitivo, cerveza y vino', note: 'una reseña lo cifra en 33 €; confirma el precio actual' },
			{ name: 'Sin carta publicada', note: 'la ficha no publica carta ni importes: se piden en el local' },
		],
	},
];
