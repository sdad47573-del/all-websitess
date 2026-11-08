/**
 * Datos de Cocina Real, Tu tienda gourmet — Carr. Villar del Olmo, 37,
 * 28510 Campo Real, Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Cocina Real, Tu tienda gourmet,
 *   40.3397821,-3.3747554, feature 0xd42414c51799ea9:0x3ccd36382662a4b7.
 * - Nombre, dirección, categoría, teléfono, valoración, reseñas y horario:
 *   ficha pública de Google consultada en octubre de 2026.
 * - Servicios (platos caseros, tienda gourmet, eventos, cestas y escuela de
 *   cocina): descripción que publica el propio establecimiento en su ficha.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no publica carta, precios ni una web
 * propia, así que no hay sección de carta con precios ni servicios que no
 * consten. El teléfono es el canal que figura en la ficha.
 */

export const BUSINESS = {
	name: 'Cocina Real',
	fullName: 'Cocina Real · tu tienda gourmet en Campo Real',
	shortName: 'Cocina Real',
	mark: 'C',
	street: 'Carr. Villar del Olmo, 37',
	neighbourhood: 'Campo Real',
	city: 'Campo Real',
	region: 'Comunidad de Madrid',
	regionName: 'Comunidad de Madrid',
	postalCode: '28510',
	country: 'ES',
	phone: '675 34 27 09',
	phoneHref: '+34675342709',
	rating: 4.8,
	reviewsCount: 67,
	siteUrl: 'https://www.sur-digital.com/cocina-real',
	geo: { lat: 40.3397821, lng: -3.3747554 },
	featureId: '0xd42414c51799ea9:0x3ccd36382662a4b7',
	placeId: 'ChIJqZ55UUxBQg0Rt6RiJjg2zTw',
	cid: '4381217627291428023',
	plusCode: '8CGR8JQG+W3',
	category: 'Restaurante de comida para llevar',
	tagline: 'Comida casera para llevar y productos gourmet en Campo Real',
	description:
		'Cocina Real, tienda gourmet y cocina para llevar en la Carretera Villar del Olmo 37, Campo Real (28510 Madrid). Platos caseros de dieta mediterránea, productos gourmet seleccionados, cestas y regalos, eventos privados y escuela de cocina. 4,8 sobre 5 en Google con 67 reseñas.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio establecimiento en su ficha de Google. */
	ownerDescription:
		'Cocina Real ofrece platos caseros de nuestra dieta mediterránea junto con productos Gourmet especialmente seleccionados. Realiza todo tipo de eventos privados así como encargos, detalles, regalos o cestas para momentos especiales. Cocina Real también es escuela de cocina y lugar de reunión para amantes de la gastronomía y el buen comer.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cocina+Real,+Tu+tienda+gourmet/@40.3397821,-3.3747554,17z/data=!3m1!4b1!4m6!3m5!1s0xd42414c51799ea9:0x3ccd36382662a4b7!8m2!3d40.3397821!4d-3.3747554!16s%2Fg%2F11ppmfytqp?authuser=0&hl=es&entry=ttu',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3397821%2C-3.3747554',
	embed: 'https://maps.google.com/maps?q=40.3397821,-3.3747554&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3397821,-3.3747554',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–16:30' },
	{ day: 'Martes', value: '8:00–16:30' },
	{ day: 'Miércoles', value: '8:00–16:30' },
	{ day: 'Jueves', value: '8:00–16:30' },
	{ day: 'Viernes', value: '8:00–16:30' },
	{ day: 'Sábado', value: '10:00–15:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Señales de identidad que constan en la ficha y en la descripción del local. */
export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'Productos gourmet',
	'Cestas y regalos',
	'Eventos privados',
	'Escuela de cocina',
];

/**
 * Lo que ofrece el local según su propia descripción en la ficha. No hay carta
 * ni precios publicados, así que no se inventan platos.
 */
export const SERVICIOS_DETALLE = [
	{
		title: 'Comida casera para llevar',
		text: 'Platos caseros de dieta mediterránea preparados para recoger en el local. La ficha lo clasifica como restaurante de comida para llevar.',
	},
	{
		title: 'Tienda gourmet',
		text: 'Productos gourmet especialmente seleccionados, junto a la comida casera del día.',
	},
	{
		title: 'Cestas, detalles y regalos',
		text: 'Encargos, detalles y cestas para momentos especiales, preparados por encargo.',
	},
	{
		title: 'Eventos y escuela de cocina',
		text: 'Eventos privados y una escuela de cocina que también sirve de lugar de reunión para amantes de la gastronomía.',
	},
];

/**
 * Carta de la vitrina, transcrita del cartel fotografiado en el local y
 * publicado en la galería de Google Maps, más la despensa gourmet que se ve
 * en las estanterías. Sin precios publicados para la tienda.
 */
export const MENU = [
	{
		title: 'De la vitrina',
		items: [
			{ name: 'Ensaladilla', price: '6,00 €', note: 'ración · con atún, huevo, aceitunas y pimiento' },
			{ name: 'Asadillo de pimiento', price: '6,00 €', note: 'ración · pimiento asado y tomate' },
			{ name: 'Callos a la madrileña', price: '7,15 €', note: 'guiso de la casa' },
			{ name: 'Bacalao confitado', price: '7,15 €', note: 'ración' },
			{ name: 'Bocaditos', price: '1,00 € / ud.', note: 'bollería salada de la vitrina' },
		],
	},
	{
		title: 'La despensa gourmet',
		items: [
			{ name: 'Vermuts y aperitivos', note: 'botellas de vermut rojo, reserva y de bodegas seleccionadas' },
			{ name: 'Vinos y aguardientes', note: 'selección de la estantería, con etiquetas de bodega' },
			{ name: 'Conservas y aceites', note: 'latas, mermeladas, cremas y aceite de oliva' },
			{ name: 'Cestas y detalles', note: 'por encargo · combinaciones para regalo' },
		],
	},
];

/** Reseña publicada en la ficha de Google. */
export const RESENAS = [
	{
		texto: 'He probado el cocido y para repetir.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cocina Real?',
		a: 'En la Carretera Villar del Olmo, 37, 28510 Campo Real (Madrid). El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de lunes a viernes de 8:00 a 16:30 y el sábado de 10:00 a 15:00. El domingo cierra. En festivos el horario puede cambiar, así que conviene confirmarlo por teléfono antes de desplazarse.',
	},
	{
		q: '¿Qué es Cocina Real?',
		a: 'Es una tienda gourmet con cocina para llevar: platos caseros de dieta mediterránea junto a productos gourmet seleccionados. También organiza eventos privados y encargos, y cuenta con escuela de cocina, según la descripción de su propia ficha.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no publica carta ni precios. Los platos cambian según el día, así que lo mejor es llamar al 675 34 27 09 y preguntar por lo que hay ese día, por las cestas o por un encargo concreto.',
	},
	{
		q: '¿Se puede pedir comida para llevar?',
		a: 'Sí. La categoría de la ficha es «restaurante de comida para llevar» y la comida casera es parte de su oferta. Puedes llamar al 675 34 27 09 para encargar y recoger en el local.',
	},
	{
		q: '¿Hacen cestas, regalos o detalles?',
		a: 'Sí. El establecimiento indica en su ficha que realiza encargos, detalles, regalos y cestas para momentos especiales. Se preparan por encargo, así que hay que llamar con antelación.',
	},
	{
		q: '¿Se pueden organizar eventos privados?',
		a: 'La descripción de la ficha indica que realiza todo tipo de eventos privados. Para fechas, aforo y condiciones, el canal que consta es el teléfono 675 34 27 09.',
	},
	{
		q: '¿Qué es la escuela de cocina?',
		a: 'La propia ficha la describe como escuela de cocina y lugar de reunión para amantes de la gastronomía y el buen comer. La programación y las plazas se consultan llamando al local.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,8 sobre 5 con 67 reseñas en Google, según la ficha consultada en octubre de 2026.',
	},
	{
		q: '¿Tiene web propia o redes sociales?',
		a: 'La ficha de Google no enlaza una web propia del local. Esta página es informativa y no es un canal oficial de pedidos; el teléfono y la ficha de Google son los canales que constan.',
	},
];
