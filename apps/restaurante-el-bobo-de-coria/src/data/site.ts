/**
 * Datos de Restaurante El Bobo de Coria — C. de las Monjas, 6 (10800 Coria, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante El Bobo de Coria, 39.9832617,-6.5359759,
 *   feature 0xd3de4e02af9a9eb:0xa2b7306a370e0bf3 (dirección, teléfono, horario,
 *   nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: precios ni carta cerrada. La carta se resume a
 * partir de los platos que se ven en las fotos y de lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante El Bobo de Coria',
	shortName: 'El Bobo de Coria',
	mark: 'EB',
	street: 'C. de las Monjas, 6',
	city: 'Coria',
	region: 'Cáceres',
	regionName: 'Cáceres',
	postalCode: '10800',
	country: 'ES',
	phoneDisplay: '927 50 07 95',
	phoneHref: 'tel:+34927500795',
	rating: 4.4,
	reviewsCount: 642,
	priceRange: '€€',
	siteUrl: 'https://restaurante-el-bobo-de-coria.vercel.app',
	geo: { lat: 39.9832617, lng: -6.5359759 },
	featureId: '0xd3de4e02af9a9eb:0xa2b7306a370e0bf3',
};

const CID_DECIMAL = '11724893387630709747';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+El+Bobo+de+Coria/@39.9832617,-6.5359759,17z/data=!3m1!4b1!4m6!3m5!1s0xd3de4e02af9a9eb:0xa2b7306a370e0bf3!8m2!3d39.9832617!4d-6.5359759!16s%2Fg%2F1v_z5m76',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=39.9832617%2C-6.5359759',
	embed: 'https://maps.google.com/maps?q=39.9832617,-6.5359759&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google Maps: dos servicios, mediodía y cena. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '13:30–16:00 · 21:00–22:30' },
	{ day: 'Miércoles', value: '13:30–16:00 · 21:00–22:30' },
	{ day: 'Jueves', value: '13:30–16:00 · 21:00–22:30' },
	{ day: 'Viernes', value: '13:30–16:00 · 21:00–22:30' },
	{ day: 'Sábado', value: '13:30–16:00 · 21:00–22:30' },
	{ day: 'Domingo', value: '13:30–16:00 · 21:00–22:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Pedimos boletus, gazpacho, bacalao riquísimo y pluma ibérica. Todo buenísimo.',
	},
	{
		rating: 5,
		text: 'Magnífico los platos de setas de temporada, la crema de boletus extraordinaria.',
	},
	{
		rating: 5,
		text: 'Comida casera y abundante. Deliciosa tarta de almendras.',
	},
];

export const SERVICIOS = [
	'Cocina casera',
	'Setas de temporada',
	'Carnes a la plancha',
	'Pescado y guisos',
	'Postres caseros',
	'Mesón tradicional',
	'Comedor de paredes rojas',
	'Terraza en el jardín',
	'Aseo adaptado',
	'Asientos adaptados',
	'Reserva por teléfono',
];

/** Carta resumida a partir de los platos de las fotos y de las reseñas de Google. */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Setas de temporada al ajillo',
				note: 'boletus a la plancha con ajos laminados',
			},
			{ name: 'Crema de boletus', note: '«extraordinaria», según las reseñas' },
			{ name: 'Gazpacho', note: 'uno de los entrantes que citan las reseñas' },
		],
	},
	{
		title: 'Carnes',
		items: [
			{ name: 'Entrecot a la plancha', note: 'con patatas y pimiento verde' },
			{ name: 'Carne en salsa', note: 'con la salsa de la casa' },
			{ name: 'Pluma ibérica', note: 'citada en las reseñas de la ficha' },
		],
	},
	{
		title: 'Pescado y cuchara',
		items: [
			{ name: 'Bacalao', note: '«riquísimo», cuentan en Google' },
			{ name: 'Fideos dorados', note: 'plato de cuchara al estilo de la casa' },
			{ name: 'Guisos caseros', note: 'comida de siempre, abundante y según el día' },
		],
	},
	{
		title: 'Postres',
		items: [
			{
				name: 'Tarta de almendras',
				note: 'casera; la que más se repite en las reseñas',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Bobo de Coria?',
		a: 'En la calle de las Monjas, 6, 10800 Coria (Cáceres), en el casco histórico de la ciudad. Lo más cómodo es abrir «Cómo llegar» y seguir el mapa hasta la puerta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo, con dos servicios: comidas de 13:30 a 16:00 y cenas de 21:00 a 22:30. El lunes cierra. Entre ambos servicios la cocina para, así que no se puede comer a media tarde.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 50 07 95. La ficha de Google no ofrece reserva online. Para fin de semana, puentes o grupos conviene llamar con tiempo.',
	},
	{
		q: '¿Qué se come en El Bobo de Coria?',
		a: 'Cocina casera y abundante. Destacan las setas de temporada —boletus al ajillo y crema de boletus—, el gazpacho, el bacalao, la pluma ibérica y las carnes a la plancha, con la tarta de almendras de postre. No publicamos precios porque el restaurante no los tiene publicados.',
	},
	{
		q: '¿Tiene terraza o jardín?',
		a: 'Las fotos de la ficha muestran un jardín con mesas bajo los árboles, además del comedor de paredes rojas. No hay información pública de cuándo se monta, así que conviene preguntar al reservar.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'La ficha de Google marca aseo adaptado y asientos adaptados para sillas de ruedas. No indica acceso adaptado, y el local está en una casa del casco histórico con puerta de arco, así que si lo necesitas llama antes de ir.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El restaurante no publica precios ni carta con importes en su ficha de Google, así que esta web no los inventa. Se consultan al llamar o en el propio local.',
	},
];
