/**
 * Datos de Cafetería Restaurante Fezur — Av. de la Constitución, 12
 * (10400 Jaraíz de la Vera, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Cafetería Restaurante Fezur,
 *   40.0620708,-5.7518574, feature 0xd3e33156d308655:0x5ea0a5be4d0d1987
 *   (dirección, teléfono, horario, reseñas, categorías y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. Los platos salen de las reseñas publicadas
 * en esa ficha; si en las fotos aparece la carta, se transcribe desde ahí.
 */

export const BUSINESS = {
	name: 'Cafetería Restaurante Fezur',
	mark: 'FZ',
	street: 'Av. de la Constitución, 12',
	city: 'Jaraíz de la Vera',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10400',
	country: 'ES',
	phoneDisplay: '927 17 07 91',
	phoneHref: 'tel:+34927170791',
	rating: 4.4,
	reviewsCount: 621,
	siteUrl: 'https://cafeteria-restaurante-fezur.vercel.app',
	geo: { lat: 40.0620708, lng: -5.7518574 },
	featureId: '0xd3e33156d308655:0x5ea0a5be4d0d1987',
};

const CID_DECIMAL = '6818632072594004359';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cafeter%C3%ADa+Restaurante+Fezur/@40.0620708,-5.7518574,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e33156d308655:0x5ea0a5be4d0d1987!8m2!3d40.0620708!4d-5.7518574!16s%2Fg%2F11b6d0lqm9',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=40.0620708%2C-5.7518574',
	embed: 'https://maps.google.com/maps?q=40.0620708,-5.7518574&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: lunes de 10:00 a 17:30 y de martes a domingo de 10:00 a 18:00. */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–17:30' },
	{ day: 'Martes', value: '10:00–18:00' },
	{ day: 'Miércoles', value: '10:00–18:00' },
	{ day: 'Jueves', value: '10:00–18:00' },
	{ day: 'Viernes', value: '10:00–18:00' },
	{ day: 'Sábado', value: '10:00–18:00' },
	{ day: 'Domingo', value: '10:00–18:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Buen secreto, paella y berenjenas y riquísimo el codillo asado.',
	},
	{
		rating: 5,
		text: 'Si pasas por aquí, buen sitio para comer a precios asequibles y buena cocina.',
	},
	{
		rating: 4,
		text: 'Muestro una foto de una tartaleta con huevo, verdura, morcilla y chorizo.',
	},
];

/** Servicios y datos que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Restaurante en Jaraíz de la Vera',
	'Comida a precios asequibles',
	'Abierto de 10:00 a 18:00',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
	'Asientos adaptados',
];

/**
 * Carta resumida de lo que las reseñas de la ficha nombran y de lo que se ve
 * en las fotos del propio perfil. Sin precios: la ficha no publica ninguno.
 */
export const MENU = [
	{
		title: 'Lo que citan las reseñas',
		items: [
			{ name: 'Codillo asado', note: '«riquísimo el codillo asado», escribe una reseña de la ficha' },
			{ name: 'Paella', note: 'el plato que abre la primera reseña destacada' },
			{ name: 'Berenjenas', note: 'junto a la paella, entre los platos que repiten' },
			{
				name: 'Tartaleta con huevo, verdura, morcilla y chorizo',
				note: 'la describen en una reseña con su foto',
			},
		],
	},
	{
		title: 'Lo que se ve en las fotos',
		items: [
			{ name: 'Migas con huevo frito', note: 'en cazuela de hierro, tal y como aparecen en la ficha' },
			{ name: 'Garbanzos guisados con tabla de chacina', note: 'garbanzos al tomate con jamón, chorizos y quesos' },
			{ name: 'Carne a la brasa con patatas', note: 'la presa con patatas fritas que protagoniza una de sus fotos' },
			{ name: 'Guisos de cuchara', note: 'carne y pollo en salsa con patatas caseras' },
		],
	},
	{
		title: 'La casa de siempre',
		items: [
			{ name: 'Cocina de comedor', note: '«buen sitio para comer a precios asequibles y buena cocina»' },
			{ name: 'Postres caseros', note: 'de los que se sirven en tarro, en la pizarra de la mesa' },
			{ name: 'Cafetería y bar', note: 'parada natural en la Av. de la Constitución de Jaraíz' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cafetería Restaurante Fezur?',
		a: 'En la Avenida de la Constitución, 12, 10400 Jaraíz de la Vera (Cáceres), avenida principal del pueblo. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo, de 10:00 a 18:00; el lunes, de 10:00 a 17:30. Es el horario que publica su ficha de Google, así que para comida tardía o cena conviene llamar antes al 927 17 07 91.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 17 07 91. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se come en Fezur?',
		a: 'Según sus reseñas: codillo asado («riquísimo»), paella y berenjenas, y tartaletas con huevo, verdura, morcilla y chorizo. Una reseña lo resume como «buen sitio para comer a precios asequibles y buena cocina». La ficha no publica carta ni precios, así que se consultan en el local.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,4 sobre 5 con 621 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados, tanto en la entrada como en el comedor.',
	},
];
