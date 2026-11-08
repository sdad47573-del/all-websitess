/**
 * Datos de «Sabor Kebab Ciudad Real» — C. Corazón de María, 3, Bajo, 13003.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9867218, -3.925712, feature
 *   0xd6bc3fec43fbb7b:0xa7ab500f55e52a8f (nombre, dirección, categorías, teléfono,
 *   valoración, horario y accesibilidad), consultada el 2 de noviembre de 2026.
 * - Fotografías del perfil del establecimiento, entre ellas la fachada con el
 *   cartel de ofertas y el rótulo de «Teléfono pedidos».
 * - Reseñas destacadas.
 *
 * Avisos importantes:
 * - La ficha no publica descripción, carta ni web propia: solo la clasifica como
 *   restaurante turco y bar.
 * - Los precios que aparecen aquí son los del cartel de ofertas de la fachada,
 *   leídos en la foto del perfil: combos de dürüm y platos. El resto de la carta
 *   no está publicada y no se copia.
 * - El rótulo de la fachada anuncia dos números para pedidos: el fijo de la ficha
 *   y un móvil.
 * - Abre a las 13:00 y cierra a la 1:00 de la madrugada todos los días.
 * - Accesibilidad publicada: solo acceso para sillas de ruedas.
 */

export const BUSINESS = {
	name: 'Sabor Kebab Ciudad Real',
	fullName: 'Sabor Kebab Ciudad Real',
	mark: 'SK',
	street: 'C. Corazón de María, 3, Bajo',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13003',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/sabor-kebab-ciudad-real',
	geo: { lat: 38.9867218, lng: -3.925712 },
	featureId: '0xd6bc3fec43fbb7b:0xa7ab500f55e52a8f',
	placeId: 'ChIJe7s_xP7Daw0RjyrlVQ9Qq6c',
	channel: '/g/11fj6n2sh4',
	plusCode: 'X3PF+MP Ciudad Real',
	category: 'Restaurante turco',
	categories: ['Restaurante turco', 'Bar'],
	phone: '926 09 39 34',
	phoneHref: 'tel:+34926093934',
	ordersPhone: '622 53 90 31',
	ordersPhoneHref: 'tel:+34622539031',
	tagline: 'Kebab turco en la calle Corazón de María',
	description:
		'Sabor Kebab Ciudad Real, restaurante turco y bar en la calle Corazón de María, 3, bajo, de Ciudad Real (13003). Dürums, kebabs, platos y patatas, de 13:00 a 1:00 de la madrugada todos los días. La ficha de Google le da 3,4 sobre 5 con 128 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sabor+Kebab+Ciudad+Real/@38.9867218,-3.925712,17z/data=!4m6!3m5!1s0xd6bc3fec43fbb7b:0xa7ab500f55e52a8f!8m2!3d38.9867218!4d-3.925712!16s%2Fg%2F11fj6n2sh4',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9867218%2C-3.925712',
	embed: 'https://maps.google.com/maps?q=38.9867218,-3.925712&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9867218%2C-3.925712',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 3.4,
	count: 128,
	label: '3,4',
};

/** Horario que publica la ficha: un solo turno, de 13:00 a la 1:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–1:00' },
	{ dia: 'Martes', horas: '13:00–1:00' },
	{ dia: 'Miércoles', horas: '13:00–1:00' },
	{ dia: 'Jueves', horas: '13:00–1:00' },
	{ dia: 'Viernes', horas: '13:00–1:00' },
	{ dia: 'Sábado', horas: '13:00–1:00' },
	{ dia: 'Domingo', horas: '13:00–1:00' },
];

/** Lo mismo, con los nombres que espera el componente de visita. */
export const HOURS = HORARIO.map((row) => ({
	day: row.dia,
	value: row.horas,
	closed: row.closed,
}));

export const HORARIO_AVISO =
	'La ficha publica «13:00–1:00» todos los días, sin día de cierre: la 1:00 es ya la madrugada del día siguiente. En festivos puede cambiar.';

export const SERVICIOS = [
	'Restaurante turco',
	'Bar',
	'Dürums',
	'Kebab',
	'Patatas fritas',
	'Combos para compartir',
	'Pedidos por teléfono',
	'Abierto hasta la 1:00',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Dos pinchos, todo el día',
		text: 'En la foto de la barra se ven los dos pinchos girando en la máquina, uno de pollo y otro de carne, con las bandejas de lechuga y tomate al lado. Abre de 13:00 a 1:00 todos los días, sin descanso semanal.',
	},
	{
		title: 'Combos con precio en la fachada',
		text: 'El cartel de ofertas de la puerta publica los combos: dos dürüm con patatas y bebida de 2 litros por 12,50 €, tres por 15,00 €, cinco por 25,00 € y dos platos con patatas y bebida por 13,50 €.',
	},
	{
		title: 'Pedidos por teléfono',
		text: 'El rótulo de la fachada anuncia «Teléfono pedidos» con dos números: el 926 09 39 34 y el móvil 622 53 90 31. La ficha de Google solo recoge el fijo.',
	},
	{
		title: 'Dürüm a la plancha',
		text: 'El dürüm sale marcado por la plancha y se sirve con patatas, lechuga, tomate y pepinillos, en bandeja. Es el plato que nombra una de las reseñas: «Hoy pedimos dos durums y patatas y estaban muy ricos».',
	},
];

export const MENU = [
	{
		title: 'Combos del cartel',
		items: [
			{
				name: '2 dürüm + patatas + bebida 2 L',
				note: 'El combo de dos, con patatas y refresco grande',
				price: '12,50 €',
			},
			{
				name: '3 dürüm + patatas + bebida 2 L',
				note: 'Para tres, con patatas y refresco grande',
				price: '15,00 €',
			},
			{
				name: '5 dürüm + patatas + bebida 2 L',
				note: 'La bandeja grande, para compartir',
				price: '25,00 €',
			},
			{
				name: '2 platos + patatas + bebida 2 L',
				note: 'Dos platos de la casa con guarnición y refresco',
				price: '13,50 €',
			},
		],
	},
	{
		title: 'Kebab y dürüm',
		items: [
			{
				name: 'Dürüm',
				note: 'Kebab enrollado en pan fino y marcado en la plancha, con verduras y salsa',
			},
			{ name: 'Kebab en pan', note: 'Con lechuga, tomate y cebolla, para comer o para llevar' },
			{
				name: 'Pincho de pollo o de carne',
				note: 'Los dos pinchos que giran en la máquina, cortados al momento',
			},
			{ name: 'Patatas fritas', note: 'Ración de acompañamiento, la que piden con el dürüm' },
		],
	},
	{
		title: 'Platos y barra',
		items: [
			{
				name: 'Plato de carne turca',
				note: 'Carne guisada con tomate, pimiento y especias, con ensalada al lado',
			},
			{ name: 'Ensalada', note: 'Lechuga, tomate y verduras frescas de la bandeja' },
			{
				name: 'Salsas de la casa',
				note: 'Se eligen en el mostrador; la ficha no publica la lista',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sabor Kebab Ciudad Real?',
		a: 'En la calle Corazón de María, 3, bajo, de Ciudad Real (13003), con Plus Code X3PF+MP y coordenadas 38.9867218, -3.925712. Está en el centro de la ciudad, a pocos minutos de la Plaza Mayor. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De 13:00 a 1:00 de la madrugada todos los días, de lunes a domingo, según la ficha de Google. La 1:00 es ya la madrugada del día siguiente. No figura ningún día de cierre semanal. En festivos puede cambiar, así que llama antes si vas en fecha señalada.',
	},
	{
		q: '¿Cuánto cuestan los combos?',
		a: 'El cartel de ofertas de la fachada publica estos precios: 2 dürüm con patatas y bebida de 2 litros, 12,50 €; 3 dürüm con patatas y bebida, 15,00 €; 5 dürüm con patatas y bebida, 25,00 €; y 2 platos con patatas y bebida, 13,50 €. Son los precios leídos en la foto del cartel, así que pueden haber cambiado: confírmalos al pedir.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'Al 926 09 39 34, el fijo que publica la ficha de Google. El rótulo de la fachada añade un segundo número para pedidos, el móvil 622 53 90 31. Cualquiera de los dos sirve para preguntar por la carta, encargar comida o confirmar el horario. Esta web no gestiona pedidos.',
	},
	{
		q: '¿Abre todos los días?',
		a: 'Sí. La ficha publica el mismo horario para los siete días de la semana, sin descanso: de 13:00 a 1:00. Si vas a última hora, conviene llamar para confirmar que la cocina sigue abierta.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Google lo clasifica como restaurante turco y bar. La base es el kebab: dürüm enrollado a la plancha, kebab en pan y los dos pinchos —pollo y carne— que se ven girando en la máquina. Las fotos del perfil muestran también patatas, ensalada y platos de carne guisada con tomate y especias.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí, es un kebab de barra y mostrador: se pide en el local o por teléfono y se recoge. El rótulo de la fachada anuncia expresamente «Teléfono pedidos» con dos números, el 926 09 39 34 y el 622 53 90 31. La ficha no publica un servicio de reparto a domicilio, así que eso hay que preguntarlo al llamar.',
	},
	{
		q: '¿Se puede ver la carta completa?',
		a: 'La carta completa está en el póster de la pared y en el cartel de la entrada, pero no está publicada en Google ni en esta web. Aquí aparecen los combos con precio del cartel de ofertas y los platos que se ven en las fotos del perfil; el resto se pregunta en el mostrador o por teléfono.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas. No publica asientos adaptados, aseo adaptado ni aparcamiento adaptado, así que esta web no los da por hechos. Si necesitas un detalle concreto del local, lo mejor es llamar antes de ir.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,4 sobre 5 con 128 reseñas (consultado el 2 de noviembre de 2026). Hay opiniones muy buenas sobre la comida y el trato —«muy buen servicio, muy rica y buena atención»— y también quejas por la atención en algún momento concreto. Merece la pena leer las reseñas recientes.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps, las fotos del perfil y los carteles de la fachada. No gestiona pedidos ni reservas y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio local.',
	},
];

export const LEGAL = {
	razonSocial: 'Sabor Kebab Ciudad Real',
	actualizado: 'Noviembre de 2026',
};
