/**
 * Datos de Asador Fuente De Colores — Av. Jorge Luis Borges, 7, local 5,
 * Teatinos-Universidad (29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador Fuente De Colores»,
 *   36.7197018,-4.4607396, feature 0xd72f739aaaaaaab:0x7f20ee4ef085198d.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas y
 *   galería: ficha pública de Google consultada en noviembre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, carta, precios ni datos de accesibilidad. La web no inventa esos
 * datos: solo cita lo que dicen las reseñas y lo que muestran las fotos.
 */

export const BUSINESS = {
	name: 'Asador Fuente de Colores',
	fullName: 'Asador Fuente De Colores',
	shortName: 'Fuente de Colores',
	mark: 'FC',
	street: 'Av. Jorge Luis Borges, 7, local 5',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-fuente-de-colores',
	geo: { lat: 36.7197018, lng: -4.4607396 },
	featureId: '0xd72f739aaaaaaab:0x7f20ee4ef085198d',
	placeId: 'ChIJq6qqqjn3cg0RjRmF8E7uIH8',
	plusCode: '8C8QPG9Q+VP',
	googleCategory: 'Establecimiento de comida preparada',
	phone: '952 61 15 80',
	phoneHref: 'tel:+34952611580',
	tagline: 'Pollo asado y menús variados en Teatinos',
	description:
		'Asador Fuente de Colores, en Av. Jorge Luis Borges, 7, local 5 (Teatinos-Universidad, 29010 Málaga). Pollo asado, patatas y menús variados a precios económicos, de miércoles a domingo de 12:30 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+Fuente+De+Colores/@36.7197018,-4.4607396,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f739aaaaaaab:0x7f20ee4ef085198d!8m2!3d36.7197018!4d-4.4607396!16s%2Fg%2F11dxkz03bs?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7197018%2C-4.4607396',
	embed: 'https://maps.google.com/maps?q=36.7197018,-4.4607396&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7197018,-4.4607396',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.3,
	count: 231,
	label: '4,3',
};

/** Horario que publica la ficha: mediodía de miércoles a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:30–16:00' },
	{ dia: 'Jueves', horas: '12:30–16:00' },
	{ dia: 'Viernes', horas: '12:30–16:00' },
	{ dia: 'Sábado', horas: '12:30–16:00' },
	{ dia: 'Domingo', horas: '12:30–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollo asado',
	'Menús variados',
	'Patatas',
	'Precios económicos',
	'Comida preparada',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'Es el plato que da nombre al asador y el que repiten las reseñas: «El pollo nos ha encantado y las patatas deliciosas» y «Pollo muy rico».',
	},
	{
		title: 'Menús de todo tipo',
		text: 'Una reseña lo cuenta tal cual: «tienen menús de todo tipo y a precios económicos». Otra añade que son «muy variados y de buena calidad».',
	},
	{
		title: 'Precios económicos',
		text: 'Las reseñas insisten en el precio: «a precios económicos». La ficha no publica importes, así que la cuenta se consulta en el local.',
	},
	{
		title: 'Patatas y trato',
		text: '«Las patatas deliciosas» y «personal muy agradable» son dos de las frases que dejan las reseñas de la ficha.',
	},
];

/** Solo lo que nombran las reseñas de la ficha. */
export const MENU = [
	{
		title: 'Los menús del cartel',
		items: [
			{ name: 'Menú 1', note: 'pollo y patatas pequeñas' },
			{ name: 'Menú 2', note: 'pollo y envase de patatas' },
			{ name: 'Menú 3', note: 'pollo, patatas y pimientos' },
			{ name: 'Menú 4', note: 'medio pollo y patatas' },
			{
				name: 'Menú 5',
				note: 'pollo, patatas pequeñas, bebida, pan y alioli',
			},
			{
				name: 'Menú 6',
				note: 'pollo, patatas grandes, bebida, pan y alioli',
			},
			{ name: 'Menú 7', note: 'medio pollo, patatas y bebida' },
			{
				name: 'Menú de comida',
				note: 'primer plato, segundo plato, postre y bebida',
			},
		],
	},
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: '«Pollo muy rico» y «el pollo nos ha encantado», según las reseñas; también se vende suelto',
			},
			{
				name: 'Pollo de corral ecológico',
				note: 'por encargo, según el cartel del local',
			},
			{
				name: 'Patatas y pimientos',
				note: '«las patatas deliciosas», dice una reseña; los pimientos entran en el Menú 3 y en la vitrina',
			},
		],
	},
	{
		title: 'Especialidades de la vitrina',
		items: [
			{ name: 'Croquetas caseras', note: 'en la vitrina y en el cartel de especialidades' },
			{ name: 'Albóndigas', note: 'en salsa, en la vitrina y en el cartel' },
			{ name: 'Migas y callos', note: 'las dos especialidades que anuncia el cartel' },
			{
				name: 'Ensaladas, lomo al horno y solomillo',
				note: 'en el cartel de especialidades y en la vitrina del local',
			},
			{ name: 'Bacalao', note: 'en la vitrina fría y en el cartel de especialidades' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Pollo muy rico, tienen menus de todo tipo y a precios económicos.',
		valor: 5,
	},
	{
		texto: 'Menús muy variados y de buena calidad, personal muy agradable',
		valor: 5,
	},
	{
		texto: 'El pollo nos ha encantado y las patatas deliciosas.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Fuente de Colores?',
		a: 'En la avenida Jorge Luis Borges, 7, local 5, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de miércoles a domingo, de 12:30 a 16:00, y el lunes y el martes como días de cierre. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo clasifica como establecimiento de comida preparada y las reseñas nombran el pollo asado, las patatas y unos menús «muy variados». La ficha no publica la carta completa ni los precios.',
	},
	{
		q: '¿Es caro?',
		a: 'Las reseñas hablan de «precios económicos» y de menús «de buena calidad». La ficha no publica importes; la cuenta se consulta en el local o por teléfono.',
	},
	{
		q: '¿Cómo se encarga la comida?',
		a: 'El canal que publica la ficha es el teléfono: 952 61 15 80. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad: no marca acceso, asientos ni aparcamiento adaptados. Conviene llamar antes si necesitas acceso para silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,3 sobre 5 con 231 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones destacadas elogian el pollo, las patatas, la variedad de menús y el trato.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
