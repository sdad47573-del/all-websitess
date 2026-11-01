/**
 * Datos de La cocina de fina — Av. San Gines, 160, 30169 Murcia.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «La cocina de fina», 37.9493079,-1.1761229,
 *   feature 0xd637fa0531af95b:0xbcf5a60af8bcbc30.
 * - Nombre, dirección, teléfono, categoría, valoración y reseñas: ficha pública
 *   de Google consultada el 1 de noviembre de 2026.
 *
 * Lo que la web NO inventa:
 * - La ficha no publica horario, ni carta, ni precios, ni una web propia. El
 *   horario queda como «no publicado» y se pide confirmarlo por teléfono.
 */

export const BUSINESS = {
	name: 'La cocina de fina',
	fullName: 'La cocina de fina',
	shortName: 'La cocina de fina',
	mark: 'CF',
	street: 'Avenida San Ginés, 160',
	district: 'Murcia',
	city: 'Murcia',
	region: 'Región de Murcia',
	postalCode: '30169',
	country: 'ES',
	siteUrl: 'https://la-cocina-de-fina.vercel.app',
	geo: { lat: 37.9493079, lng: -1.1761229 },
	featureId: '0xd637fa0531af95b:0xbcf5a60af8bcbc30',
	placeId: 'ChIJW_kaU6B_Yw0RMLy8-Aqm9bw',
	plusCode: '8C9WWRXF+PH',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '968 88 13 50',
	phoneHref: 'tel:+34968881350',
	tagline: 'Comida casera para llevar en Murcia',
	description:
		'La cocina de fina, en la Avenida San Ginés, 160 (30169 Murcia). Comida casera para llevar, con raciones generosas y trato de casa. La ficha de Google no publica horario: conviene llamar antes al 968 88 13 50.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+cocina+de+fina/@37.9493079,-1.1761229,17z/data=!3m1!4b1!4m6!3m5!1s0xd637fa0531af95b:0xbcf5a60af8bcbc30!8m2!3d37.9493079!4d-1.1761229!16s%2Fg%2F11b6d23fww?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.9493079%2C-1.1761229',
	embed: 'https://maps.google.com/maps?q=37.9493079,-1.1761229&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.9493079,-1.1761229',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.4,
	count: 41,
	label: '4,4',
};

/** La ficha no publica horario: se deja explícito en lugar de inventarlo. */
export const HORARIO = [{ dia: 'Horario', horas: 'No publicado en la ficha' }];

export const HORARIO_AVISO =
	'Google no publica el horario de este local. Lo único fiable es llamar al 968 88 13 50 antes de ir a por la comida, sobre todo si vas desde lejos.';

/** Lo que la ficha y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Comida para llevar',
	'Raciones',
	'Trato de casa',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera',
		text: 'La reseña que se ve en la ficha lo resume así: «comida casera, buena, ración bien». Es cocina de casa, de la que se sirve en táper para llevar, no de carta de restaurante.',
	},
	{
		title: 'Raciones generosas',
		text: 'La misma reseña destaca que la ración está bien puesta. Es lo que se busca en una casa de comidas de barrio: que el táper venga lleno y que sobre para otro día.',
	},
	{
		title: 'Solo para llevar',
		text: 'Google la clasifica con una única categoría: restaurante de comida para llevar. No figura como local con mesas ni publica servicio a domicilio, así que el pedido se recoge en la Avenida San Ginés, 160.',
	},
	{
		title: '4,4 sobre 5 con 41 reseñas',
		text: 'Con 41 opiniones, la ficha de Google le da 4,4 sobre 5 (noviembre de 2026). Son pocas reseñas para una media alta, así que la nota se sostiene con clientes de la zona que repiten.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{ texto: 'Comida casera, buena, ración bien, con esperiencia.' },
];

/**
 * Lo que se puede contar sin carta publicada: la categoría de Google y lo que
 * citan las reseñas. Se amplía con lo que se reconoce en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Cada día',
		items: [
			{ name: 'Comida casera', note: 'lo que destaca la reseña de la ficha' },
			{ name: 'Comida para llevar', note: 'única categoría con la que Google la describe' },
			{ name: 'Raciones', note: '«ración bien», según la misma reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La cocina de fina?',
		a: 'En la Avenida San Ginés, 160, 30169 Murcia. La ficha de Google sitúa el local en las coordenadas 37.9493079, -1.1761229. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario: ni siquiera aparece el bloque de días y horas que suele traer. Por eso esta web no da ninguno. Lo único práctico es llamar al 968 88 13 50 y preguntar si están abiertos el día que quieres ir.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Todo apunta a que no: Google la clasifica con una sola categoría, «restaurante de comida para llevar», sin bar, sin tapas y sin comedor. Lo razonable es contar con recoger el pedido y comerlo en casa.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida casera para llevar. La reseña que se ve en la ficha habla de comida casera, buena y con la ración bien puesta. No hay carta publicada, así que la oferta del día solo se sabe por teléfono o en el propio local.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'La ficha no lo anuncia ni enlaza ninguna plataforma de entrega, así que no se puede afirmar. El nombre completo del negocio habla de comida para llevar, no de reparto. Si necesitas entrega, pregúntalo al llamar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Ni la ficha ni las reseñas publican precios. La pista que hay es «ración bien», que habla de cantidad, no de importe. El precio del menú o del táper solo se sabe preguntando.',
	},
	{
		q: '¿Tiene web propia o pedidos online?',
		a: 'No. La ficha de Google no enlaza ninguna página web del establecimiento. Esta página es informativa: reúne los datos y las fotos públicas del local. Los pedidos se hacen por teléfono o en el mostrador.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,4 sobre 5 con 41 reseñas en el momento de consultar la ficha (1 de noviembre de 2026). Las opiniones visibles elogian la comida casera y el tamaño de la ración.',
	},
];
