/**
 * Datos de ROYAL FAST FOOD Shawarma House Kebab Ciudad real — C. Feria, 8,
 * 13001 Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bc32189a1ed13:0x263aadc175bf11f1, place id
 * ChIJE-2hiSHDaw0R8RG_dcGtOiY, código /g/11xm_4mwzp).
 *
 * La ficha publica: «ROYAL FAST FOOD Shawarma House Kebab Ciudad real»,
 * categorías «Pizzería», «Restaurante especializado en döner kebab»,
 * «Restaurante de pollo frito para llevar» y «Taquería», teléfono
 * 613 39 41 91, 4,4 sobre 5 con 172 reseñas, horario de comidas y cenas, web
 * propia para pedir online y botón «Hacer un pedido». No publica carta.
 */

export const BUSINESS = {
	name: 'ROYAL FAST FOOD Shawarma House Kebab',
	shortName: 'Royal Fast Food',
	mark: 'RF',
	street: 'C. Feria, 8',
	district: 'Ciudad Real',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	postalCode: '13001',
	country: 'ES',
	siteUrl: 'https://royal-fast-food-shawarma.vercel.app',
	geo: { lat: 38.9858602, lng: -3.9288998 },
	featureId: '0xd6bc32189a1ed13:0x263aadc175bf11f1',
	placeId: 'ChIJE-2hiSHDaw0R8RG_dcGtOiY',
	plusCode: '8CCRX3PC+8C',
	category: 'Restaurante especializado en döner kebab',
	categories: ['Pizzería', 'Restaurante especializado en döner kebab', 'Pollo frito para llevar', 'Taquería'],
	phone: '613 39 41 91',
	phoneHref: '+34613394191',
	rating: 4.4,
	reviewsCount: 172,
	/** Web del propio negocio que enlaza la ficha, con pedidos online. */
	website: 'http://royalfast.foodyservice.com/',
	tagline: 'Kebab, shawarma y pizza en el centro de Ciudad Real',
	description:
		'ROYAL FAST FOOD Shawarma House Kebab, en la calle Feria, 8, 13001 Ciudad Real. Döner kebab, shawarma, durum, pollo frito y pizza, para comer allí o pedir a domicilio en su web. De 19:30 a 1:00 y mediodía de miércoles a domingo. Teléfono 613 39 41 91.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/ROYAL+FAST+FOOD+Shawarma+House+Kebab+Ciudad+real/@38.9858602,-3.9288998,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc32189a1ed13:0x263aadc175bf11f1!8m2!3d38.9858602!4d-3.9288998!16s%2Fg%2F11xm_4mwzp',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9858602%2C-3.9288998',
	embed: 'https://maps.google.com/maps?q=38.9858602,-3.9288998&z=17&hl=es&output=embed',
};

/** Horario que publica la ficha: cenas todos los días y mediodía de miércoles a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '19:30–1:00' },
	{ dia: 'Martes', horas: '19:30–1:00' },
	{ dia: 'Miércoles', horas: '13:00–17:00 · 19:30–1:00' },
	{ dia: 'Jueves', horas: '13:00–17:00 · 19:30–1:00' },
	{ dia: 'Viernes', horas: '13:00–17:00 · 19:30–1:00' },
	{ dia: 'Sábado', horas: '13:00–17:00 · 19:30–1:00' },
	{ dia: 'Domingo', horas: '13:00–17:00 · 19:30–1:00' },
];

export const HORARIO_AVISO =
	'La ficha abre todas las noches de 19:30 a 1:00 y, de miércoles a domingo, también de 13:00 a 17:00. Lunes y martes solo hay servicio de noche. En festivos puede cambiar: la propia ficha avisa de que en el Día de Todos los Santos el horario podría ser distinto.';

/** Lo que la ficha y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Döner kebab',
	'Shawarma',
	'Durum',
	'Pizza',
	'Pollo frito',
	'Pedidos online',
];

/** Reseñas destacadas en la ficha, con la puntuación de su autor. */
export const RESENAS = [
	{
		quote: 'Muy buena pizza, kebab pollo muy bueno, pan crujiente, muy sabroso.',
		rating: 5,
	},
	{
		quote: 'Todo Muy Rico Pan de Durum con masa Fresca',
		rating: 5,
	},
	{
		quote: 'Un sitio nefasto, me gasto 30e y me ponen lo que quieren menos lo que he pedido.',
		rating: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Royal Fast Food?',
		a: 'En la calle Feria, 8, 13001 Ciudad Real, en pleno centro. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Todas las noches de 19:30 a 1:00. De miércoles a domingo también abre a mediodía, de 13:00 a 17:00. Los lunes y los martes solo hay servicio de noche.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo clasifica como pizzería, restaurante especializado en döner kebab, restaurante de pollo frito para llevar y taquería. Las reseñas que Google destaca hablan de la pizza, del kebab de pollo, del pan crujiente y del durum con masa fresca.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'La ficha enlaza la web del propio restaurante, que es donde se hacen los pedidos online, y tiene botón «Hacer un pedido». Esta página no tramita encargos: enlaza a esa web y al teléfono 613 39 41 91.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes. Una de las reseñas habla de un pedido de 30 €, pero eso es un caso puntual: los precios se consultan en la web del local o al llamar.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'Sí. La ficha de Google enlaza royalfast.foodyservice.com, la web del restaurante con su sistema de pedidos. Esta página es informativa y enlaza allí.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma cuatro sobre cinco con 172 reseñas. Google destaca tres: dos de cinco estrellas y una de una estrella por un pedido equivocado, y las tres están recogidas en esta página con su puntuación.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha no publica datos de accesibilidad, así que esta página no los afirma. Si necesitas confirmarlo, lo mejor es llamar al 613 39 41 91.',
	},
];
