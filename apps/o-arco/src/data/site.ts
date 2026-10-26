/**
 * Datos de O Arco — R. de São Pedro 30, 1100-543 Lisboa (Alfama).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «O Arco», 38.7109588,-9.1289307,
 *   feature 0xd193474280d4341:0xf09f3cd64e4e3633 (dirección, teléfono, horario,
 *   categorías, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha no publica carta con precios ni web propia: solo el teléfono. Los
 * platos que recoge la web son los que aparecen en las fotos del perfil del
 * restaurante, sin inventar nombres ni precios.
 */

export const BUSINESS = {
	name: 'O Arco',
	shortName: 'O Arco',
	mark: 'OA',
	street: 'R. de São Pedro, 30',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Área Metropolitana de Lisboa',
	postalCode: '1100-543',
	country: 'PT',
	phoneDisplay: '21 886 3806',
	phoneHref: 'tel:+351218863806',
	rating: 4.3,
	reviewsCount: 356,
	siteUrl: 'https://o-arco.vercel.app',
	geo: { lat: 38.7109588, lng: -9.1289307 },
	featureId: '0xd193474280d4341:0xf09f3cd64e4e3633',
	placeId: 'ChIJQUMNKHQ0GQ0RMzZOTtY8n_A',
	cid: '17338643981534115379',
	/** Categorías con las que Google describe el local. */
	googleCats: ['Restaurante portugués', 'Restaurante'],
	/** Lo que se lee en el cartel de forja de la fachada. */
	signText: 'RESTAURANTE O TINO ARCO',
	tagline: 'Cocina portuguesa en Alfama',
	description:
		'O Arco, restaurante portugués en la Rua de São Pedro 30 (1100-543 Lisboa, Alfama): sardinhas assadas, arroz de marisco, gambas ao alho y bitoque, en una tasca con mesas en la calle. 4,3 en Google con 356 reseñas. Tel. 21 886 3806.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/O+Arco/@38.7109588,-9.1289307,17z/data=!3m1!4b1!4m6!3m5!1s0xd193474280d4341:0xf09f3cd64e4e3633!8m2!3d38.7109588!4d-9.1289307!16s%2Fg%2F11df0fpx06',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7109588%2C-9.1289307',
	embed: 'https://maps.google.com/maps?q=38.7109588,-9.1289307&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: solo cenas, y el domingo cierra. */
export const HOURS = [
	{ day: 'Lunes', value: '17:00–24:00' },
	{ day: 'Martes', value: '17:00–24:00' },
	{ day: 'Miércoles', value: '17:00–24:00' },
	{ day: 'Jueves', value: '17:00–24:00' },
	{ day: 'Viernes', value: '17:00–24:00' },
	{ day: 'Sábado', value: '17:00–1:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Señas de identidad que constan en la ficha y en las fotos del perfil. */
export const SERVICIOS = [
	'Cocina portuguesa',
	'Marisco',
	'Pescado a la brasa',
	'Petiscos',
	'Tasca de barrio',
	'Mesas en la calle',
	'Asientos accesibles',
];

/**
 * Carta. No hay carta publicada con precios: estos son los platos que se ven en
 * las fotos del perfil del restaurante en Google Maps.
 */
export const MENU = [
	{
		title: 'Para começar',
		items: [
			{
				name: 'Pão e azeitonas',
				note: 'lo que llega a la mesa al sentarse: pan, aceitunas y aceite de oliva',
			},
			{
				name: 'Gambas ao alho',
				note: 'gambas en salsa de ajo y aceite, servidas en cazuela con limón',
			},
			{
				name: 'Salada da casa',
				note: 'lechuga, zanahoria rallada y col morada, con aceite de oliva',
			},
		],
	},
	{
		title: 'Do mar',
		items: [
			{
				name: 'Sardinhas assadas',
				note: 'sardinas a la brasa con patata cocida y ensalada, en plato llano',
			},
			{
				name: 'Arroz de marisco',
				note: 'arroz caldoso con gambas, almejas y mejillones, servido en la olla',
			},
			{
				name: 'Peixe grelhado com polvo',
				note: 'pescado y pulpo a la brasa con patatas cocidas, aceite y ensalada',
			},
		],
	},
	{
		title: 'Da terra',
		items: [
			{
				name: 'Bife com ovo',
				note: 'el bitoque de la casa: filete con huevo frito, patatas fritas y arroz',
			},
			{
				name: 'Feijão com abóbora',
				note: 'guiso de alubias blancas con calabaza y carne, en cuenco de barro',
			},
			{
				name: 'Frango grelhado',
				note: 'pollo a la brasa con ensalada de col y zanahoria',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está O Arco?',
		a: 'En la Rua de São Pedro, 30, en plena Alfama de Lisboa (código postal 1100-543). Es una callejuela empedrada que sube hacia el castillo de São Jorge; se llega andando desde Santa Apolónia (metro) o bajando desde el castillo. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre solo por la tarde-noche: de lunes a viernes de 17:00 a 24:00, el sábado de 17:00 a 1:00 y el domingo cierra. Es el horario que publica su ficha de Google, que avisa de que en festivos puede cambiar: si vas en una fecha señalada, llama antes al 21 886 3806.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina portuguesa de tasca. En las fotos del perfil se ven sardinhas assadas con patata cocida, arroz de marisco con gambas, almejas y mejillones, gambas ao alho, pescado y pulpo a la brasa, bife com ovo (bitoque con huevo frito, patatas y arroz) y un guiso de alubias con calabaza. Antes, pan, aceitunas y una ensalada de lechuga, zanahoria y col morada.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha de Google no publica carta ni precios, y esta web no los inventa. Es una tasca de barrio de Alfama: pregunta por los platos del día y por el precio al llamar al 21 886 3806 o al llegar.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reserva online. El teléfono del restaurante es el 21 886 3806. Al ser una sala pequeña con pocas mesas dentro, si vais en grupo conviene llamar antes.',
	},
	{
		q: '¿Se puede comer fuera?',
		a: 'Sí. Las fotos del perfil muestran mesas con mantel en la propia Rua de São Pedro, junto a la puerta, con sillas de plástico y la luz de las farolas. Es lo que más se ve en las imágenes nocturnas del restaurante.',
	},
	{
		q: 'En la fachada pone «O Tino Arco», ¿es el mismo sitio?',
		a: 'Sí. El cartel de forja que cuelga sobre la puerta dice «RESTAURANTE O TINO ARCO», con el dibujo de un arco, y Google lista el local como «O Arco». Es una tasca de toda la vida en el mismo número 30 de la Rua de São Pedro, con la puerta de piedra y la placa «30» en el dintel.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca asientos adaptados para sillas de ruedas. No confirma entrada adaptada ni aseo adaptado, y la calle es de piedra y con desnivel, así que si lo necesitas es mejor llamar antes.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,3 sobre 5 con 356 reseñas. Es una nota alta para una tasca de barrio con una sala pequeña.',
	},
];
