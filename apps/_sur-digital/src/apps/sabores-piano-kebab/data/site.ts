/**
 * Datos de «Sabores Piano Kebab» — Ronda de Calatrava, 14, 13003 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9903045, -3.9219522, feature
 *   0xd6bc343f9084d23:0x78e91e28916bf505 (nombre, dirección, categoría,
 *   teléfono, valoración y accesibilidad), consultada el 2 de noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento, entre ellas
 *   los carteles de precios de la pared y varias fotos de platos.
 *
 * Avisos importantes:
 * - Google lo clasifica como restaurante turco y bocatería. La ficha no publica
 *   horario, carta con precios ni web propia: nada de eso se inventa aquí.
 * - La media de la ficha es 2,8 sobre 5 con 811 reseñas, baja para el volumen que
 *   tiene. Esta web la da tal cual y no la maquilla.
 */

export const BUSINESS = {
	name: 'Sabores Piano Kebab',
	fullName: 'Sabores Piano Kebab',
	mark: 'SP',
	street: 'Ronda de Calatrava, 14',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13003',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/sabores-piano-kebab',
	geo: { lat: 38.9903045, lng: -3.9219522 },
	featureId: '0xd6bc343f9084d23:0x78e91e28916bf505',
	channel: '/g/1tfzj37g',
	category: 'Restaurante turco',
	categories: ['Restaurante turco', 'Bocatería'],
	phone: '926 92 22 87',
	phoneHref: 'tel:+34926922287',
	tagline: 'Kebab, dürüm, calzone y pizza en la Ronda de Calatrava',
	description:
		'Sabores Piano Kebab, restaurante turco y bocatería en la Ronda de Calatrava, 14, de Ciudad Real (13003). Kebab, dürüm, calzone, pizzas, falafel y pollo a la brasa. 2,8 sobre 5 con 811 reseñas en Google.',
	hasPublicWebsite: false,
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sabores+Piano+Kebab/@38.9903045,-3.9219522,17z/data=!4m6!3m5!1s0xd6bc343f9084d23:0x78e91e28916bf505!8m2!3d38.9903045!4d-3.9219522!16s%2Fg%2F1tfzj37g',
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.9903045%2C-3.9219522',
	embed: 'https://maps.google.com/maps?q=38.9903045,-3.9219522&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9903045%2C-3.9219522',
} as const;

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 2.8,
	count: 811,
	label: '2,8',
} as const;

/** La ficha no publica horario: la tabla recoge lo que sí consta. */
export const HOURS = [
	{ day: 'Horario', value: 'No publicado en Google Maps' },
	{ day: 'Teléfono', value: '926 92 22 87' },
	{ day: 'Aparcamiento adaptado', value: 'No disponible' },
	{ day: 'Comida', value: 'Kebab, dürüm, calzone y pizza' },
] as const;

export const HORARIO_AVISO =
	'La ficha de Google no publica horario de apertura, así que esta web no puede confirmar cuándo abre. Lo único que marca en accesibilidad es que no hay aparcamiento adaptado. Para horario, mesa o encargos, llama al 926 92 22 87.';

export const SERVICIOS = [
	'Restaurante turco',
	'Bocatería',
	'Kebab y dürüm',
	'Calzone y pizza',
	'Pollo a la brasa',
	'Comida para llevar',
	'Raciones grandes',
	'Precios ajustados',
] as const;

export const HIGHLIGHTS = [
	{
		title: 'El döner, en el mostrador',
		text: 'Dos fotos del perfil enseñan el pincho de döner girando junto a la campana, con la carne dorada por fuera y el corte fino. Es la pieza central de la casa: de ahí salen los platos, los dürüm y los bocadillos que se ven en el resto de las imágenes.',
	},
	{
		title: 'Calzone con menú',
		text: 'Una de las reseñas destacadas lo cuenta con detalle: «Dos menús calzone grandes que incluyen patatas con dos salsas y refrescos, 22€». En las fotos aparecen las dos cajas abiertas, la masa dorada y la bandeja de patatas con kétchup y salsa de ajo.',
	},
	{
		title: 'Raciones que llenan',
		text: '«Buenos precios y raciones muy generosas» es la reseña de cinco estrellas. El plato de kebab de las fotos va cargado de carne, patatas, ensalada y las dos salsas de siempre, y el pollo a la brasa se sirve con arroz y ensalada en el mismo plato.',
	},
	{
		title: '2,8 sobre 5 con 811 reseñas',
		text: 'La media de la ficha es 2,8, baja para un local con 811 reseñas, y las tres que Google destaca son de cuatro y cinco estrellas. Conviene leer el conjunto de opiniones antes de decidir: esta web no oculta la nota ni la edita.',
	},
];

export const MENU = [
	{
		title: 'Kebab y dürüm',
		items: [
			{
				name: 'Plato de kebab',
				note: 'Carne de döner, patatas fritas, ensalada y salsa de ajo y picante',
			},
			{
				name: 'Dürüm de kebab',
				note: 'Tortilla de trigo enrollada con carne, lechuga, tomate y cebolla',
			},
			{
				name: 'Bocadillo de kebab',
				note: 'En pan de barra, para comer de pie o para llevar',
			},
			{
				name: 'Dürüm de falafel',
				note: 'La opción sin carne que nombra una de las reseñas del perfil',
			},
		],
	},
	{
		title: 'Horno',
		items: [
			{
				name: 'Calzone',
				note: 'Masa al horno cerrada y rellena; en menú con patatas y refresco',
			},
			{
				name: 'Pizza',
				note: '«Pizzas riquísimas», según una de las reseñas destacadas',
			},
			{
				name: 'Patty',
				note: 'La empanada rellena que aparece en el cartel de la pared',
			},
		],
	},
	{
		title: 'Para picar',
		items: [
			{
				name: 'Patatas con dos salsas',
				note: 'Kétchup y salsa de ajo, la guarnición que acompaña los menús',
			},
			{
				name: 'Alitas de pollo',
				note: 'Por unidades o por docena, según el cartel de precios',
			},
			{
				name: 'Nuggets y aros',
				note: 'Fritos para completar la mesa o el pedido para llevar',
			},
			{
				name: 'Ensalada',
				note: 'Lechuga, tomate, cebolla y zanahoria, con salsa aparte',
			},
		],
	},
	{
		title: 'De la casa',
		items: [
			{
				name: 'Pollo a la brasa con arroz',
				note: 'Medio pollo asado con arroz, patatas y ensalada en el mismo plato',
			},
			{
				name: 'Curry de pollo con naan',
				note: 'Pollo guisado con verduras, pan naan y ensalada fresca al lado',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sabores Piano Kebab?',
		a: 'En la Ronda de Calatrava, 14, de Ciudad Real (13003), con coordenadas 38.9903045, -3.9219522. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 926 92 22 87, el número publicado en la ficha del establecimiento. Sirve para preguntar horario o encargar comida para llevar. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google no publica horario de apertura: no hay ninguna franja con horas. Como los datos públicos no lo dicen, esta página no lo inventa. Para saber cuándo abre, llama al 926 92 22 87.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Kebab en plato, dürüm y bocadillo; calzone y pizza de horno; patty; patatas con dos salsas, alitas, nuggets y ensalada; y de la casa, pollo a la brasa con arroz y curry de pollo con pan naan. Las fotos del perfil enseñan el pincho de döner, el plato con patatas y salsa, los calzones y el pollo asado.',
	},
	{
		q: '¿Hay precios publicados?',
		a: 'La ficha no publica la carta con precios. Lo único que da una cifra es una reseña: dos menús de calzone con patatas, dos salsas y refrescos por 22 €. Esta web no copia ese importe como tarifa porque es una opinión antigua, no la carta del local.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'El local se describe como bocatería y las fotos enseñan cajas de calzone, bandejas de patatas y dürüm envueltos para llevar. La ficha no publica reparto a domicilio ni plataforma de pedidos, así que lo más fiable es llamar al 926 92 22 87.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '2,8 sobre 5 con 811 reseñas (consultado el 2 de noviembre de 2026). Es una media baja para el volumen de opiniones que tiene. Las tres reseñas que Google destaca son buenas: «Dos menús calzone grandes que incluyen patatas con dos salsas y refrescos, 22€», «Buenos precios y raciones muy generosas» y «Tienen también durum de falafel y pizzas riquísimas».',
	},
	{
		q: '¿Hay opciones sin carne?',
		a: 'Sí, el dürüm de falafel, que una de las reseñas destacadas menciona expresamente. También hay pizza, patatas, ensalada y calzone, aunque la ficha no detalla ingredientes ni alérgenos: pregúntalo en el local si tienes una intolerancia.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha solo marca un dato de accesibilidad y es negativo: no hay aparcamiento adaptado. No publica si la entrada o los asientos están adaptados, así que no se puede confirmar desde aquí.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio restaurante.',
	},
];
