/**
 * Datos de Restaurante Chino Xi An — Av. Plutarco, 20,
 * Teatinos-Universidad, 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Chino Xi An»,
 *   36.7211592,-4.4778201, feature 0xd72f7350c0e6095:0x8fc6826e14ab0dbe,
 *   place id ChIJlWAODDX3cg0Rvg2rFG6Cxo8.
 * - Nombre, categoría, dirección, teléfono, valoración, horario,
 *   accesibilidad y reseñas: ficha pública de Google consultada en octubre
 *   de 2026.
 *
 * La ficha no publica página web, carta ni precios. La web no inventa esos
 * datos: los platos que se citan son los que nombran las reseñas del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante Chino Xi An',
	fullName: 'Restaurante Chino Xi An',
	shortName: 'Xi An',
	mark: '西',
	street: 'Av. Plutarco, 20',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/restaurante-chino-xi-an',
	geo: { lat: 36.7211592, lng: -4.4778201 },
	featureId: '0xd72f7350c0e6095:0x8fc6826e14ab0dbe',
	placeId: 'ChIJlWAODDX3cg0Rvg2rFG6Cxo8',
	googleCategory: 'Restaurante chino',
	phone: '952 62 93 68',
	phoneHref: 'tel:+34952629368',
	tagline: 'Cocina china en Teatinos, a mediodía y por la noche',
	description:
		'Restaurante Chino Xi An, en Av. Plutarco, 20 (Teatinos-Universidad, 29010 Málaga). Cocina china de 13:00 a 16:30 y de 20:00 a 23:30, martes cerrado. 3,9 sobre 5 con 429 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Chino+Xi+An/@36.7211592,-4.4778201,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7350c0e6095:0x8fc6826e14ab0dbe!8m2!3d36.7211592!4d-4.4778201!16s%2Fg%2F11bxdybw4d?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7211592%2C-4.4778201',
	embed: 'https://maps.google.com/maps?q=36.7211592,-4.4778201&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7211592,-4.4778201',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.9,
	count: 429,
	label: '3,9',
};

/** Horario que publica la ficha: mediodía y noche, con el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–16:30 · 20:00–23:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '13:00–16:30 · 20:00–23:30' },
	{ dia: 'Jueves', horas: '13:00–16:30 · 20:00–23:30' },
	{ dia: 'Viernes', horas: '13:00–16:30 · 20:00–23:30' },
	{ dia: 'Sábado', horas: '13:00–16:30 · 20:00–23:30' },
	{ dia: 'Domingo', horas: '13:00–16:30 · 20:00–23:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. Confirma la apertura en Google o por teléfono antes de desplazarte.';

export const HIGHLIGHTS = [
	{
		title: 'Pollo picante y tallarines',
		text: 'Una de las reseñas de la ficha resume lo que destaca de la casa: «pollo picante, los tallarines Wenzhoumes y el arroz de la casa».',
	},
	{
		title: 'Comida y cena',
		text: 'El restaurante abre a mediodía, de 13:00 a 16:30, y vuelve por la noche, de 20:00 a 23:30. El martes descansa.',
	},
	{
		title: 'En Teatinos',
		text: 'Está en la avenida Plutarco, 20, junto a la zona universitaria. Google lo clasifica como restaurante chino.',
	},
];

/**
 * La ficha no publica la carta, pero una de sus fotos reproduce la página
 * «Arroz y tallarines» del menú impreso. Esos son los únicos precios que se
 * pueden citar; el resto de platos sale de las reseñas.
 */
export const MENU = [
	{
		title: 'Arroz y tallarines',
		source: 'precios de la página «Arroz y tallarines» de la carta, fotografiada en la ficha',
		items: [
			{ name: 'Tallarines wenzhou', cn: '温州拌面', price: '7,80 €', note: 'nº 16 de la carta' },
			{ name: 'Tallarines con verdura', cn: '素炒面', price: '5,00 €', note: 'nº 17 de la carta' },
			{ name: 'Fideos de arroz con verdura', cn: '素粉干', price: '6,00 €', note: 'nº 18 de la carta' },
			{ name: 'Tallarines con pollo', cn: '鸡肉炒面', price: '6,80 €', note: 'nº 19 de la carta' },
			{ name: 'Tallarines con ternera', cn: '牛肉炒面', price: '6,80 €', note: 'nº 20 de la carta' },
			{ name: 'Tallarines con gamba', cn: '虾炒面', price: '7,80 €', note: 'nº 21 de la carta' },
			{
				name: 'Sopa de tallarines',
				cn: '汤面（鸡，鸭，虾）',
				price: '8,50 €',
				note: 'nº 22, con pollo, pato o gamba',
			},
			{
				name: 'Fideos de arroz con pollo',
				cn: '鸡肉炒粉干',
				price: '7,80 €',
				note: 'nº 23 de la carta',
			},
			{
				name: 'Fideos de arroz con ternera',
				cn: '牛肉炒粉干',
				price: '7,80 €',
				note: 'nº 24 de la carta',
			},
		],
	},
	{
		title: 'Lo que piden las reseñas',
		source: 'platos que nombran las reseñas de la ficha; sin precio publicado',
		items: [
			{
				name: 'Pollo picante',
				note: 'el plato que una reseña pone por delante de todo lo demás',
			},
			{
				name: 'Arroz de la casa',
				note: 'el arroz que completa ese trío de recomendaciones',
			},
			{
				name: 'Ensalada china con jamón cocido',
				note: 'la ensalada que aparece en otra de las reseñas de la ficha',
			},
		],
	},
];

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'A destacar: pollo picante, los tallarines Wenzhoumes y el arroz de la casa.',
		valor: 5,
	},
	{
		texto: 'Ensalada china con jamón cocido, salsa..',
		valor: 5,
	},
	{
		texto: 'En definitiva no volveremos a ir Y es una pena porque éramos clientes habituales',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Xi An?',
		a: 'En la avenida Plutarco, 20, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica dos turnos: de 13:00 a 16:30 y de 20:00 a 23:30, de lunes a domingo, con el martes cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es un restaurante chino. Las reseñas de la ficha destacan el pollo picante, los tallarines Wenzhoumes, el arroz de la casa y la ensalada china con jamón cocido. La carta completa no está publicada.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha no publica la carta completa, pero una de sus fotos reproduce la página de arroz y tallarines del menú, con platos de 5,00 a 8,50 €. Del resto de la carta no hay lista ni precios publicados: se pregunta por teléfono.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no publica un sistema de reservas ni un teléfono específico para ellas. Si vais en grupo, lo prudente es llamar antes al 952 62 93 68.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. Indica que no hay aparcamiento accesible con silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,9 sobre 5 con 429 reseñas en el momento de consultar la ficha (octubre de 2026). Hay opiniones muy distintas: las hay que destacan platos concretos y otras que cuentan que han dejado de ir.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza un sitio propio ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
