/**
 * Datos de Restaurante las Trebedes — C. Pósito, 10
 * (10813 Pozuelo de Zarzón, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante las Trebedes,
 *   40.1487568,-6.4149769, feature 0xd3ddff3af42558f:0x2cc60a35b0cbb021
 *   (dirección, teléfono, horario, reseñas, categorías y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. Los platos salen de las reseñas publicadas
 * en esa ficha; si en las fotos aparece la carta, se transcribe desde ahí.
 */

export const BUSINESS = {
	name: 'Restaurante las Trebedes',
	mark: 'LT',
	street: 'C. Pósito, 10',
	city: 'Pozuelo de Zarzón',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10813',
	country: 'ES',
	phoneDisplay: '927 44 81 65',
	phoneHref: 'tel:+34927448165',
	rating: 4.2,
	reviewsCount: 244,
	siteUrl: 'https://www.sur-digital.com/restaurante-las-trebedes',
	geo: { lat: 40.1487568, lng: -6.4149769 },
	featureId: '0xd3ddff3af42558f:0x2cc60a35b0cbb021',
	placeId: 'ChIJj1VCr_PfPQ0RIbDLsDUKxiw',
};

const CID_DECIMAL = '3226277408773222433';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+las+Trebedes/@40.1487568,-6.4149769,17z/data=!3m1!4b1!4m6!3m5!1s0xd3ddff3af42558f:0x2cc60a35b0cbb021!8m2!3d40.1487568!4d-6.4149769!16s%2Fg%2F1vwlqd_2',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.1487568%2C-6.4149769',
	embed: 'https://maps.google.com/maps?q=40.1487568,-6.4149769&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: de lunes a viernes, con la mañana y la comida
 * seguidas; el lunes cierra un poco antes y el fin de semana descansa.
 */
export const HOURS = [
	{ day: 'Lunes', value: '7:30–17:00' },
	{ day: 'Martes', value: '7:30–17:45' },
	{ day: 'Miércoles', value: '7:30–17:45' },
	{ day: 'Jueves', value: '7:30–17:45' },
	{ day: 'Viernes', value: '7:30–17:45' },
	{ day: 'Sábado', value: 'Cerrado' },
	{ day: 'Domingo', value: 'Cerrado' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Buen lugar para desayunar o tomar una cerveza y tapitas.....cómodo .',
	},
	{
		rating: 5,
		text: 'Muy contentos, muy buena comida y muy bien atendidos, volveremos',
	},
	{
		rating: 5,
		text: 'Un lugar agradable,donde prima la buena cocina y el buen hacer de los dueños.',
	},
];

/** Servicios y datos que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Restaurante en Pozuelo de Zarzón',
	'Cafetería y taberna',
	'Cocina mediterránea',
	'Desayunos desde las 7:30',
	'Acceso para sillas de ruedas',
	'Asientos adaptados',
];

/**
 * Carta transcrita de las dos fotografías de la carta que el restaurante tiene
 * publicadas en su ficha de Google (raciones y bocadillos, y el menú de fin de
 * semana, festivos o especiales a 18 €). Los precios son los impresos en esa
 * carta y pueden cambiar: en el local manda la pizarra del día.
 */
export const MENU = [
	{
		title: 'Raciones',
		items: [
			{ name: 'Prueba de cerdo', note: '7,00 €' },
			{ name: 'Carne asada', note: '7,00 €' },
			{ name: 'Lomo a la plancha', note: '7,50 €' },
			{ name: 'Jamón serrano', note: '10,00 €' },
			{ name: 'Patatas fritas, ali oli o bravas', note: '6,00 €' },
			{ name: 'Orejas o morros en salsa', note: '7,00 €' },
			{ name: 'Rabas de calamar', note: '7,00 €' },
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{ name: 'Jamón', note: '5,00 €' },
			{ name: 'Jamón, tomate y aceite', note: '5,70 €' },
			{ name: 'Tortilla francesa', note: '5,50 €' },
			{ name: 'Bacon', note: '6,00 €' },
			{ name: 'Bacon queso', note: '6,70 €' },
			{ name: 'Lomo fresco', note: '7,00 €' },
			{ name: 'Lomo con pimientos', note: '7,50 €' },
		],
	},
	{
		title: 'Menú de fin de semana o festivos · 18 € · Primeros',
		items: [
			{ name: 'Risotto de boletus y huevos de rey', note: 'primero' },
			{ name: 'Lasaña vegetal', note: 'primero' },
			{ name: 'Revuelto de setas', note: 'primero' },
			{ name: 'Revuelto de espárragos', note: 'primero' },
			{ name: 'Ensalada César', note: 'primero' },
			{ name: 'Ensalada de frutos secos y rulo de cabra', note: 'primero' },
		],
	},
	{
		title: 'Menú de fin de semana o festivos · Segundos',
		items: [
			{ name: 'Secreto ibérico con ensalada y patatas', note: 'segundo' },
			{ name: 'Tosta de jamón ibérico con huevo y tomate deshidratado', note: 'segundo' },
			{
				name: 'Solomillo al rulo de cabra y cebolla caramelizada con patatas panaderas',
				note: 'segundo',
			},
			{ name: 'Escalopines de cerdo a la torta del Casar con patatas y ensalada', note: 'segundo' },
			{ name: 'Pez espada a la plancha', note: 'segundo' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante las Trebedes?',
		a: 'En la calle Pósito, 10, del 10813 Pozuelo de Zarzón (Cáceres), en la comarca del Valle del Alagón. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes: los lunes de 7:30 a 17:00 y de martes a viernes de 7:30 a 17:45. Sábados y domingos está cerrado. Es el horario que publica su ficha de Google, así que para comer fuera de esa franja conviene llamar antes al 927 44 81 65.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 927 44 81 65. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer en las Trebedes?',
		a: 'La carta de la casa es de taberna: raciones (prueba de cerdo, carne asada, lomo a la plancha, jamón serrano, patatas, orejas o morros en salsa, rabas de calamar) y bocadillos. Además hay un menú de fin de semana, festivos o especiales por 18 €, con primero, segundo, pan, postre, vino o agua y café; entre los platos están el risotto de boletus, el secreto ibérico, el solomillo al rulo de cabra y el pez espada a la plancha. Sus reseñas destacan los desayunos y la cerveza con tapitas.',
	},
	{
		q: '¿Abre los fines de semana?',
		a: 'No. La ficha de Google marca de lunes a viernes y cierra sábados y domingos, así que el menú de fin de semana y festivos que aparece en su carta se sirve en días señalados: conviene llamar al 927 44 81 65 para confirmarlo.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,2 sobre 5 con 244 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
];
