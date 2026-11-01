/**
 * Datos de CAN TU Rostisseria — Cap del Carrer, 16, AD500 Andorra la Vella
 * (Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «CAN TU Rostisseria», 42.5079726,1.522468,
 *   feature 0x12a58ba78f2b4e85:0x855dd52bb1c46944.
 * - Nombre, dirección, teléfono, categorías, valoración, horario y el atributo
 *   «Amigable con la comunidad LGBTQ+»: ficha pública de Google consultada el
 *   1 de noviembre de 2026 (4,0 · 5 reseñas, una ficha todavía muy pequeña).
 * - Platos: fotos del perfil del local (pollo asado en bandeja con patatas,
 *   cebolla y tomate; gratinados en barqueta; calabaza rellena de garbanzos y
 *   butifarra negra; pimientos y cebollas rellenos; mostrador de platos).
 *
 * La ficha no publica carta ni precios: no se copian importes.
 */

export const BUSINESS = {
	name: 'CAN TU Rostisseria',
	fullName: 'CAN TU Rostisseria',
	shortName: 'Can Tu',
	mark: 'CT',
	street: 'Cap del Carrer, 16',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://can-tu-rostisseria.vercel.app',
	geo: { lat: 42.5079726, lng: 1.522468 },
	featureId: '0x12a58ba78f2b4e85:0x855dd52bb1c46944',
	placeId: 'ChIJhU4rj6eLpRIRRGnEsSvVXYU',
	plusCode: 'GG5C+5X Andorra la Vella',
	googleCategory: 'Restaurante',
	phone: '+376 740 000',
	phoneHref: 'tel:+376740000',
	tagline: 'Rostisseria y platos preparados en Andorra la Vella',
	description:
		'CAN TU Rostisseria, en Cap del Carrer, 16 (AD500 Andorra la Vella). Pollo asado en bandeja con patatas y verduras, gratinados, calabaza rellena y platos preparados para llevar. Abre de martes a domingo al mediodía y las noches de martes a sábado; lunes cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/CAN+TU+Rostisseria/@42.5079726,1.522468,17z/data=!4m6!3m5!1s0x12a58ba78f2b4e85:0x855dd52bb1c46944!8m2!3d42.5079726!4d1.522468!16s%2Fg%2F11mvp3fwwz?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5079726%2C1.522468',
	embed: 'https://maps.google.com/maps?q=42.5079726,1.522468&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5079726,1.522468',
};

/**
 * Valoración publicada en la ficha (1 de noviembre de 2026). Solo tiene cinco
 * reseñas: la web lo dice expresamente para no darle más peso del que tiene.
 */
export const RATING = {
	value: 4,
	count: 5,
	label: '4,0',
};

/** Horario que publica la ficha: mediodía todos los días salvo el lunes, y noches de martes a sábado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '11:00–15:00 · 19:30–22:30' },
	{ dia: 'Miércoles', horas: '10:30–15:00' },
	{ dia: 'Jueves', horas: '10:30–15:00 · 19:30–22:00' },
	{ dia: 'Viernes', horas: '10:30–15:00 · 19:30–22:00' },
	{ dia: 'Sábado', horas: '10:30–15:00 · 19:30–22:30' },
	{ dia: 'Domingo', horas: '10:30–15:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. Los miércoles y domingos solo abre al mediodía; el lunes cierra todo el día.';

export const SERVICIOS = [
	'Pollo asado',
	'Platos preparados',
	'Para llevar',
	'Gratinados',
	'Comida casera',
	'Mostrador',
	'Barrio',
	'Abierto por la noche',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado en bandeja',
		text: 'El pollo sale entero, con la piel dorada, sobre una bandeja de acero con patatas en rodajas, calabacín, tomate asado y una cebolla morada entera. Es el plato que más se repite en el perfil del local.',
	},
	{
		title: 'Platos para llevar',
		text: 'En el mostrador se ven bandejas de gratinados en barqueta de aluminio, carne con bacon y verduras, y pimientos y cebollas rellenos de arroz y pollo. Es comida de casa preparada para recoger, del tipo que se compra al salir del trabajo.',
	},
	{
		title: 'Calabaza rellena',
		text: 'Una de las fotos enseña una calabaza entera horneada y rellena de garbanzos, butifarra negra, pasas y tomate. Es cocina catalana de temporada, la clase de plato que cambia según el día y lo que haya en el mercado.',
	},
	{
		title: 'En Cap del Carrer',
		text: 'El local está en el número 16 de Cap del Carrer, una calle del centro de Andorra la Vella, con el rótulo negro de «Rostisseria CAN TU» sobre la puerta y el cartel de la pizarra en la acera. Dentro, horno y mostrador de cristal.',
	},
];

/**
 * Lo que se ve en las fotos del perfil. La ficha no publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Del horno',
		items: [
			{ name: 'Pollo asado', note: 'entero, en bandeja, con patatas, calabacín, tomate y cebolla' },
			{ name: 'Pollo con patatas', note: 'la ración de la casa, para llevar' },
			{ name: 'Calabaza rellena', note: 'horneada, con garbanzos, butifarra negra y pasas' },
		],
	},
	{
		title: 'Gratinados y bandejas',
		items: [
			{ name: 'Gratinado de la casa', note: 'en barqueta de aluminio, con queso gratinado' },
			{ name: 'Carne con bacon', note: 'albondigón o carne picada envuelta en bacon, con ciruelas' },
			{ name: 'Verduras al horno', note: 'calabacín, cebolla y tomate asados' },
		],
	},
	{
		title: 'Rellenos',
		items: [
			{ name: 'Pimientos rellenos', note: 'de arroz y pollo, rojos y verdes' },
			{ name: 'Cebollas rellenas', note: 'horneadas, con el relleno de la casa' },
			{ name: 'Butifarra negra', note: 'en la calabaza rellena y en el mostrador' },
		],
	},
	{
		title: 'Mostrador',
		items: [
			{ name: 'Platos preparados', note: 'lo que haya ese día en el mostrador de cristal' },
			{ name: 'Para llevar', note: 'todo se puede pedir en bandeja para casa' },
			{ name: 'Pan y picos', note: 'para acompañar el pollo' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Can Tu Rostisseria?',
		a: 'En Cap del Carrer, 16, AD500 Andorra la Vella (Principado de Andorra). La ficha de Google sitúa el local en las coordenadas 42.5079726, 1.522468, en una calle del centro con el rótulo negro de «Rostisseria CAN TU» y una pizarra en la acera.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre al mediodía de martes a domingo (el martes desde las 11:00 y el resto desde las 10:30, hasta las 15:00) y vuelve por la noche de martes a sábado, de 19:30 a 22:00 o 22:30 según el día. Los miércoles y domingos solo abre al mediodía, y el lunes cierra.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 740 000. El local no tiene web propia ni pedidos online, así que el teléfono es la vía para encargar el pollo o preguntar qué hay en el mostrador.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pollo asado en bandeja con patatas y verduras, gratinados en barqueta, calabaza rellena de garbanzos y butifarra negra, pimientos y cebollas rellenos, y platos preparados del mostrador. Todo se puede pedir para llevar.',
	},
	{
		q: '¿Es un restaurante o una tienda de comida para llevar?',
		a: 'La ficha lo clasifica como restaurante, pero también como proveedor mayorista de alimentos y empresa de procesado de alimentos, y el local tiene horno y mostrador de cristal más que mesas. Lo práctico es pensar en él como rostisseria de barrio: se compra la comida y se lleva a casa.',
	},
	{
		q: '¿Cuánta valoración tiene?',
		a: 'La ficha da 4,0 sobre 5, pero con solo 5 reseñas: es una muestra demasiado pequeña para sacar conclusiones, y la web no lo presenta como una media consolidada.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Las fotos del perfil muestran el mostrador y las bandejas, no mesas de comedor, y la ficha no da datos de servicio en sala. Si se quiere comer en el local, conviene preguntar al llamar.',
	},
	{
		q: '¿Hay opciones vegetarianas?',
		a: 'La ficha no publica carta ni alérgenos. En el mostrador aparecen platos de verdura (calabacín, tomate, cebolla asada, garbanzos), pero muchos van con butifarra o carne, así que hay que preguntar por teléfono o en el propio local.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios ni hay carta en el perfil. El importe se consulta en el mostrador o por teléfono, en el +376 740 000.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del local. Esta web es informativa: reúne los datos y las fotos públicas del establecimiento y no gestiona pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'CAN TU Rostisseria',
	actualizado: 'Noviembre de 2026',
};
