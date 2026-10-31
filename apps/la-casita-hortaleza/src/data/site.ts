/**
 * Datos de La Casita — Calle de Montalbos, 3, local 13 A,
 * 28043 Madrid (Hortaleza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «La Casita», 40.4647336,-3.6405312,
 *   feature 0xd422fbb785d8151:0x6af54f8854eafd84.
 * - Nombre, dirección, teléfono, descripción, valoración, horario, reseñas y
 *   datos de accesibilidad: ficha pública de Google consultada el 31 de
 *   octubre de 2026.
 * - La ficha no enlaza una web propia, aunque su descripción invita a ver la
 *   carta y hacer el pedido. No publica carta, precios ni plataforma de
 *   reparto.
 *
 * Google registra la dirección como «C. de Montalbos, 3, Loc 13 A»; aquí se
 * usa la forma desarrollada «Calle de Montalbos, 3, local 13 A».
 */

export const BUSINESS = {
	name: 'La Casita',
	fullName: 'La Casita',
	shortName: 'La Casita',
	mark: 'LC',
	street: 'Calle de Montalbos, 3, local 13 A',
	district: 'Hortaleza',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28043',
	country: 'ES',
	siteUrl: 'https://la-casita-hortaleza.vercel.app',
	geo: { lat: 40.4647336, lng: -3.6405312 },
	featureId: '0xd422fbb785d8151:0x6af54f8854eafd84',
	placeId: 'ChIJUYFdeLsvQg0RhP3qVIhP9Wo',
	plusCode: '8CGRF975+VQ',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '654 75 93 70',
	phoneHref: 'tel:+34654759370',
	tagline: 'Pollo a la brasa y cocina peruana y española en Hortaleza',
	description:
		'La Casita, en Calle de Montalbos, 3, local 13 A (28043 Madrid, Hortaleza). Comida para llevar y a domicilio: pollo a la brasa, paellas y platos caseros peruanos y españoles, con opciones vegetarianas. De martes a domingo, de 10:00 a 22:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Casita/@40.4647336,-3.6405312,17z/data=!3m1!4b1!4m6!3m5!1s0xd422fbb785d8151:0x6af54f8854eafd84!8m2!3d40.4647336!4d-3.6405312!16s%2Fg%2F11nmj3qyd1?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4647336%2C-3.6405312',
	embed: 'https://maps.google.com/maps?q=40.4647336,-3.6405312&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4647336,-3.6405312',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.1,
	count: 55,
	label: '4,1',
};

/** Horario que publica la ficha: de martes a domingo, con el lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '10:00–22:00' },
	{ dia: 'Miércoles', horas: '10:00–22:00' },
	{ dia: 'Jueves', horas: '10:00–22:00' },
	{ dia: 'Viernes', horas: '10:00–22:00' },
	{ dia: 'Sábado', horas: '10:00–22:00' },
	{ dia: 'Domingo', horas: '10:00–22:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Comida a domicilio',
	'Pollo a la brasa',
	'Paellas',
	'Cocina peruana',
	'Platos caseros',
	'Opciones vegetarianas',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo a la brasa',
		text: 'Es lo primero que anuncia la ficha. Una reseña lo confirma: «un pollo riquísimo y unos platos preparados muy buenos». Se vende para llevar y también con reparto a domicilio.',
	},
	{
		title: 'Cocina peruana y española',
		text: 'La ficha habla de «auténticos sabores peruanos y españoles» y de «la fusión de tradición y hogar en cada plato». Una reseña lo resume: «me encantó la comida peruana, está muy exquisita».',
	},
	{
		title: 'Fideuá y ensaladas',
		text: 'Otra opinión destaca «la fideuá, muy jugosa y calentita, y la ensalada mixta fenomenal». La ficha añade paellas y una selección de platos caseros para todos los gustos.',
	},
	{
		title: '4,1 sobre 5',
		text: 'Con 55 reseñas, la ficha de Google le da 4,1 sobre 5 (octubre de 2026). Google la clasifica como restaurante de comida para llevar y también como comida a domicilio.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Muy rica la fidegua, muy jugosa y calentita y la ensalada mixta fenomenal.',
		valor: 5,
	},
	{
		texto: 'Me encantó la comida peruana está muy exquisita.',
		valor: 5,
	},
	{
		texto: 'Un pollo riquísimo y unos platos preparados muy buenos',
		valor: 5,
	},
];

/**
 * Platos que anuncia la ficha y citan las reseñas. No hay carta ni precios
 * publicados: la ficha invita a pedir la carta, pero no enlaza ninguna.
 */
export const MENU = [
	{
		title: 'Del asador y la brasa',
		items: [
			{ name: 'Pollo a la brasa', note: 'la especialidad de la casa' },
			{ name: 'Paellas', note: 'de la cocina española' },
			{ name: 'Fideuá', note: 'mencionada en las reseñas' },
			{ name: 'Arroz con pollo', note: 'de la carta peruana' },
		],
	},
	{
		title: 'Cocina peruana',
		items: [
			{ name: 'Lomo saltado', note: 'con arroz, patatas y cebolla roja' },
			{ name: 'Tallarines salteados', note: 'de la carta del local' },
			{ name: 'Chicharrón de pollo', note: 'con patatas fritas y arroz' },
			{ name: 'Saltado de calamar', note: 'de la carta del local' },
			{ name: 'Causa peruana', note: 'de la carta del local' },
			{ name: 'Pan con chicharrón', note: 'de la carta del local' },
			{ name: 'Seco de cordero', note: 'de la carta del local' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{
				name: 'Croquetas de jamón, pollo, setas y trufa',
				note: '4 unidades 6,50 € · 8 unidades 10,00 €',
			},
			{ name: 'Tortilla de patatas', note: 'de la carta del local' },
			{ name: 'Ensaladilla rusa', note: 'vista en las fotos del perfil' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Tarta de queso', note: 'anunciada en el escaparate' },
			{ name: 'Picarones', note: 'postre peruano' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Casita?',
		a: 'En la Calle de Montalbos, 3, local 13 A, 28043 Madrid, en el distrito de Hortaleza. Google registra la dirección como «C. de Montalbos, 3, Loc 13 A». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de martes a domingo, de 10:00 a 22:00, con el lunes cerrado. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo a la brasa, paellas, fideuá, arroces y una selección de platos caseros peruanos y españoles, con opciones vegetarianas. El escaparate anuncia lomo saltado, tallarines salteados, chicharrón de pollo, saltado de calamar, causa peruana, pan con chicharrón, seco de cordero y picarones. Las reseñas añaden la fideuá y la ensalada mixta.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'Por teléfono, en el 654 75 93 70. La descripción de la ficha invita a «revisar nuestra carta y hacer tu pedido», pero no enlaza ninguna web ni plataforma. La fachada, además, anuncia reservas en ese mismo número.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google la clasifica también como «comida a domicilio», así que el reparto está entre los servicios que anuncia la ficha. Lo que no publica es una plataforma concreta ni un horario de entrega: conviene preguntar por teléfono antes de contar con ello.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google la clasifica como restaurante de comida para llevar, pero la fachada anuncia «reservas» en el 654 75 93 70 y en las fotos se ven mesas y taburetes dentro, así que también se puede comer allí. La ficha no publica terraza ni condiciones de reserva: confírmalo por teléfono.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. La oferta de croquetas que aparece en una foto del local es de 6,50 € por 4 unidades y 10,00 € por 8, en sabores de jamón, pollo, setas y trufa. Para el resto de platos hay que preguntar por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha indica que no hay aparcamiento adaptado para sillas de ruedas ni asientos adaptados, y no aclara si la entrada es accesible. Conviene llamar antes si necesitas ayuda para recoger un pedido grande.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,1 sobre 5 con 55 reseñas en el momento de consultarla (31 de octubre de 2026). Las opiniones elogian el pollo a la brasa, la comida peruana, la fideuá y la ensalada mixta.',
	},
];
