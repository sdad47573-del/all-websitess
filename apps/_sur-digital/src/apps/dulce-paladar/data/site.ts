/**
 * Datos de Dulce paladar — Av. de Alemania, 5 (41012 Sevilla).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps consultada en octubre de 2026: nombre, dirección,
 *   teléfono, horario, categoría, accesibilidad, valoración y reseñas.
 * - Fotografías del perfil público del establecimiento.
 *
 * La ficha no publica carta ni precios. Los platos que se citan son los que
 * nombran el propio negocio y sus reseñas, y los que aparecen en las fotos.
 */

export const BUSINESS = {
	name: 'Dulce paladar',
	shortName: 'Dulce Paladar',
	mark: 'DP',
	street: 'Av. de Alemania, 5',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41012',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/dulce-paladar',
	geo: { lat: 37.345875, lng: -5.9774444 },
	featureId: '0xd126f0016c9a287:0x78c20e250d06725d',
	placeId: 'ChIJh6LJFgBvEg0RXXIGDSUOwng',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '646 63 27 76',
	phoneHref: 'tel:+34646632776',
	tagline: 'Comida casera para llevar en la Avenida de Alemania',
	description:
		'Dulce paladar, comida casera para llevar en Av. de Alemania, 5 (41012 Sevilla). Tortillas, salmorejo, guisos de cuchara y platos de siempre, de martes a domingo a mediodía.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Dulce+paladar/@37.345875,-5.9774444,17z/data=!3m1!4b1!4m6!3m5!1s0xd126f0016c9a287:0x78c20e250d06725d!8m2!3d37.345875!4d-5.9774444!16s%2Fg%2F11y3yb5870',
	cid: 'https://www.google.com/maps?cid=8699848877454226013',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.345875%2C-5.9774444',
	embed: 'https://maps.google.com/maps?q=37.345875,-5.9774444&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.345875,-5.9774444',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = { value: 4.9, count: 110, label: '4,9' };

/** Horario que publica la ficha: mediodía, con cierre los lunes. */
export const HORARIO = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes a viernes', value: '11:00 – 15:30' },
	{ day: 'Sábado', value: '11:30 – 16:00' },
	{ day: 'Domingo', value: '11:30 – 15:30' },
];
export const HORARIO_AVISO =
	'La ficha marca cierre los lunes y servicio de mediodía el resto de la semana. En el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto: conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'Tortillas',
	'Guisos de cuchara',
	'Encargos por teléfono',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'La tortilla de berenjenas',
		text: 'Es lo primero que destaca una de las reseñas de la ficha: «la tortilla de berenjenas buenísima y el salmorejo también». No es la tortilla de patata de siempre, y eso se nota.',
	},
	{
		title: 'Comida de cuchara',
		text: 'Las opiniones hablan de lentejas, puchero y tortillas empanadas. Es cocina casera de mediodía, la que se compra ya hecha para comer en casa o en el trabajo.',
	},
	{
		title: 'Un 4,9 en Google',
		text: `La ficha reúne ${RATING.label} sobre 5 con ${RATING.count} reseñas, casi todas de cinco estrellas. Abre de martes a domingo y cierra los lunes.`,
	},
];

/**
 * La ficha no publica carta. Este surtido sale de lo que nombran las reseñas
 * y de lo que se ve en las fotografías del propio local.
 */
export const MENU = [
	{
		title: 'Lo que nombran las reseñas',
		items: [
			{
				name: 'Tortilla de berenjenas',
				note: 'la más citada en las opiniones de la ficha',
			},
			{
				name: 'Salmorejo',
				note: '«el salmorejo también», en la misma reseña',
			},
			{
				name: 'Tortillas empanadas',
				note: 'aparecen junto a las lentejas y el puchero en otra opinión',
			},
			{
				name: 'Lentejas',
				note: 'guiso de cuchara de los que se ven en la vitrina',
			},
			{
				name: 'Puchero',
				note: 'plato de cuchara citado por los clientes',
			},
		],
	},
	{
		title: 'En la vitrina',
		items: [
			{
				name: 'Tortilla de patata',
				note: 'entera, recién cuajada, en las fotos del local',
			},
			{
				name: 'Guiso de carne en salsa',
				note: 'bandeja de la vitrina fotografiada por el establecimiento',
			},
			{
				name: 'Champiñones en salsa',
				note: 'otra de las bandejas que aparecen en la galería',
			},
			{
				name: 'Patatas en salsa con alioli',
				note: 'preparadas en bandeja para llevar',
			},
			{
				name: 'Pollo guisado',
				note: 'con su salsa, en las fotografías del perfil',
			},
			{
				name: 'Pisto',
				note: 'tomate y pimiento cocinados despacio',
			},
		],
	},
];

/** Reseñas publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{
		texto: '«Todo lo que he probado está buenísimo, tortillas empanadas lentejas puchero...»',
		valor: 5,
	},
	{
		texto: '«Espectacular, la tortilla de berenjenas buenísima y el salmorejo también.»',
		valor: 5,
	},
	{
		texto: '«Fui ayer con mi padre a recoger comida y nos encantó, volveremos sin duda.»',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Dulce paladar?',
		a: 'En la Avenida de Alemania, 5, 41012 Sevilla. Desde esta página puedes abrir la ficha de Google o lanzar la ruta hasta la puerta.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El de la ficha pública es el 646 63 27 76. Es un móvil, así que lo normal es llamar para preguntar qué hay ese día y encargar.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. De martes a viernes abre de 11:00 a 15:30, el sábado de 11:30 a 16:00 y el domingo de 11:30 a 15:30. Solo servicio de mediodía.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no publica carta ni precios, y esta web no los inventa. El menú cambia según el día, así que lo mejor es llamar y preguntar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Las reseñas nombran la tortilla de berenjenas, el salmorejo, las tortillas empanadas, las lentejas y el puchero. En las fotos del local aparecen además bandejas de guisos y platos preparados.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar y el nombre del negocio lo deja claro: «Dulce Paladar comidas para llevar». La ficha no describe servicio de mesa.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no detalla reparto ni zonas de entrega. Los pedidos se hacen por teléfono y se recogen en el establecimiento.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso para sillas de ruedas. En cambio, indica que no hay aparcamiento adaptado ni asientos adaptados.',
	},
];
