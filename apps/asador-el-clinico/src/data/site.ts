/**
 * Datos de Asador de pollos El Clínico — C. de Antígona, 4, Teatinos
 * (Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador de pollos- El clínico. Agustín Pineda»,
 *   36.7196689,-4.4770769, feature 0xd72f7358118def3:0xd62ac351481b7d8d.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La web
 * no inventa esos datos. El surtido que se cita es el que nombran la descripción del
 * negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Asador de pollos El Clínico',
	fullName: 'Asador de pollos- El clínico. Agustín Pineda',
	shortName: 'El Clínico',
	mark: 'EC',
	street: 'C. de Antígona, 4',
	district: 'Teatinos',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://asador-el-clinico.vercel.app',
	geo: { lat: 36.7196689, lng: -4.4770769 },
	featureId: '0xd72f7358118def3:0xd62ac351481b7d8d',
	placeId: 'ChIJ894YgTX3cg0RjX0bSFHDKtY',
	plusCode: '8C8QPG9F+V5',
	googleCategory: 'Restaurante especializado en pollo · Comida para llevar',
	phone: '952 10 93 07',
	phoneHref: 'tel:+34952109307',
	tagline: 'Pollos asados y comida casera junto al Clínico, en Teatinos',
	description:
		'Asador de pollos El Clínico, en C. de Antígona, 4, Teatinos (Málaga). Pollos asados, raciones de comida casera y menú del miércoles, de 9:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+pollos-+El+cl%C3%ADnico.+Agust%C3%ADn+Pineda/@36.7196689,-4.4770769,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7358118def3:0xd62ac351481b7d8d!8m2!3d36.7196689!4d-4.4770769!16s%2Fg%2F11cnsfqfyp?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=15432361827007954317',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7196689%2C-4.4770769',
	embed: 'https://maps.google.com/maps?q=36.7196689,-4.4770769&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7196689,-4.4770769',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 402,
	label: '4,7',
};

/** Horario que publica la ficha: mediodía de martes a domingo, lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '9:00–16:00' },
	{ dia: 'Miércoles', horas: '9:00–16:00' },
	{ dia: 'Jueves', horas: '9:00–16:00' },
	{ dia: 'Viernes', horas: '9:00–16:00' },
	{ dia: 'Sábado', horas: '9:00–16:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollos asados',
	'Comida casera',
	'Raciones preparadas',
	'Para llevar',
	'Menú del miércoles',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'El negocio se presenta en Google como «los mejores pollos asados de Málaga (eso dicen nuestros clientes)». Una reseña lo confirma: «pollos asados muy buenos, buena comida elaborada».',
	},
	{
		title: 'Negocio familiar',
		text: 'La descripción de la ficha habla de un negocio familiar en la zona del Hospital Clínico, Teatinos y El Consul, con comida preparada «sana y elaborada por nosotros».',
	},
	{
		title: 'El menú del miércoles',
		text: 'La propia casa anuncia una oferta de miércoles para llevarse el menú de pollo asado «al mejor precio». La ficha no publica la cifra: se pregunta por teléfono.',
	},
	{
		title: 'Para llevar',
		text: 'Google lo clasifica como restaurante especializado en pollo y como restaurante de comida para llevar. Las raciones se preparan para recoger en el local.',
	},
];

/**
 * Solo las familias de producto que nombran la descripción del negocio y las
 * reseñas. No hay carta ni precios publicados.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'el plato que da nombre a la casa y el que destaca la descripción del negocio',
			},
			{
				name: 'Menú El Clínico',
				price: '13,00 €',
				note: 'pollo con patatas y a elegir pimientos, croquetas o miniflamenquín; es el precio del cartel del local',
			},
			{
				name: 'Miércoles, día del pollo',
				note: 'la oferta que anuncia la propia casa para llevarse el pollo; el importe se consulta por teléfono',
			},
			{
				name: 'Pollo para llevar',
				note: 'la ficha lo clasifica como restaurante de comida para llevar',
			},
		],
	},
	{
		title: 'Comida de casa',
		items: [
			{
				name: 'Raciones de comida casera',
				note: '«sana y elaborada por nosotros», según la descripción de la ficha',
			},
			{
				name: 'Platos preparados',
				note: '«mil combinaciones de comida preparada», dice una de las reseñas',
			},
			{
				name: 'Patatas y pimientos',
				note: 'las guarniciones que aparecen en las opiniones de la ficha',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Pollos asados muy buenos, buena comida elaborada y súper limpio, volveremos....',
		valor: 5,
	},
	{ texto: 'Mil combinaciones de comida preparada y el pollo buenísimo.', valor: 5 },
	{
		texto: 'Pollos con poco sabor, patatas fritas regulares y pimientos fritos muy malos...',
		valor: 3,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Clínico?',
		a: 'En la calle Antígona, 4, en Teatinos (Teatinos-Universidad, 29010 Málaga), junto al Hospital Clínico. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de martes a domingo, de 9:00 a 16:00, y el lunes como día de cierre. En el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. Google lo clasifica como restaurante de comida para llevar, además de especializado en pollo. Para encargar, el teléfono publicado en la ficha es el 952 10 93 07.',
	},
	{
		q: '¿Qué es el menú del miércoles?',
		a: 'La descripción del negocio en Google anuncia «una oferta irresistible» los miércoles para llevarse el menú de pollo asado al mejor precio. El escaparate del local lo anuncia como el día del pollo, pero el importe cambia: se pregunta por teléfono.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta. El único precio que se puede leer en las fotografías del local es el menú de pollo con patatas y un acompañamiento por 13,00 €. El resto de la carta y los precios se consultan en el mostrador o por teléfono, porque cambian.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No hay sistema de reservas online ni página web propia. Para mesas o encargos, el canal que publica la ficha es el teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado ni asientos adaptados. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 402 reseñas en el momento de consultarla (octubre de 2026). Hay opiniones muy buenas sobre el pollo y los platos preparados, y también alguna crítica con el sabor y las guarniciones.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
