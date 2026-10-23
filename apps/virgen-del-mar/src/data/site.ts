/**
 * Datos de Virgen del Mar — Pl. de San Nicolás, 3, bajo (30005 Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Virgen del Mar, 37.9857508,-1.134696,
 *   feature 0xd6383e477a7255b:0xdb656aaccac69cc0 (nota, reseñas, teléfono y web).
 * - Horario: el que publica la propia web del restaurante
 *   (https://restaurantevirgendelmar.com/), porque la ficha de Google no lo
 *   muestra en la respuesta pública.
 *
 * Lo que la web NO inventa: precios ni carta cerrada. La carta se resume a
 * partir de los platos que citan las reseñas de Google.
 */

export const BUSINESS = {
	name: 'Virgen del Mar',
	mark: 'VM',
	street: 'Pl. de San Nicolás, 3, bajo',
	city: 'Murcia',
	region: 'Murcia',
	regionName: 'Región de Murcia',
	postalCode: '30005',
	country: 'ES',
	phoneDisplay: '968 21 66 79',
	phoneHref: 'tel:+34968216679',
	rating: 4.5,
	reviewsCount: 530,
	priceRange: '€€',
	siteUrl: 'https://virgen-del-mar.vercel.app',
	officialSite: 'https://restaurantevirgendelmar.com/',
	geo: { lat: 37.9857508, lng: -1.134696 },
	featureId: '0xd6383e477a7255b:0xdb656aaccac69cc0',
};

const CID_DECIMAL = '15809159357322927296';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Virgen+del+Mar/@37.9857508,-1.134696,17z/data=!3m1!4b1!4m6!3m5!1s0xd6383e477a7255b:0xdb656aaccac69cc0!8m2!3d37.9857508!4d-1.134696!16s%2Fg%2F11j8k3j7_d',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=37.9857508%2C-1.134696',
	embed: 'https://maps.google.com/maps?q=37.9857508,-1.134696&z=17&hl=es&output=embed',
};

/** Horario publicado por el restaurante en su web oficial. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '13:30–16:00 · 20:30–23:00' },
	{ day: 'Miércoles', value: '13:30–16:00 · 20:30–23:00' },
	{ day: 'Jueves', value: '13:30–16:00 · 20:30–23:00' },
	{ day: 'Viernes', value: '13:30–16:00 · 20:30–23:00' },
	{ day: 'Sábado', value: '13:30–16:00 · 20:30–23:00' },
	{ day: 'Domingo', value: '13:30–16:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Buenísimo, croquetas, 4 cervezas, croquetas, buñuelos y paella.',
	},
	{
		rating: 4,
		text: 'Trabajan con productos de muy buena calidad, mención especial a la gamba roja.',
	},
	{
		rating: 5,
		text: 'La ensaladilla de merluza muy rica, y las cocochas al ajillo un manjar.',
	},
];

export const SERVICIOS = [
	'Marisco fresco',
	'Pescados de la costa',
	'Arroces',
	'Guisos de Murcia',
	'Tapas y raciones',
	'Menú del día',
	'Comidas de empresa',
	'Centro de Murcia',
	'Reserva por teléfono',
];

/** Carta resumida a partir de los platos de las fotos y de las reseñas de Google. */
export const MENU = [
	{
		title: 'Para picar',
		items: [
			{ name: 'Buñuelos', note: 'de bacalao, con salsa rosa para mojar' },
			{ name: 'Croquetas', note: 'de las que más se repiten en las reseñas' },
			{ name: 'Ensaladilla de merluza', note: '«muy rica», según los clientes' },
			{ name: 'Cocochas al ajillo', note: 'un manjar para quien las pide' },
		],
	},
	{
		title: 'Marisco',
		items: [
			{ name: 'Gamba roja', note: 'la mención especial de las reseñas' },
			{ name: 'Ostras', note: 'abiertas al momento, sobre hielo con limón' },
			{ name: 'Vieiras a la plancha', note: 'con un chorro de limón' },
			{ name: 'Almejas a la marinera', note: 'en salsa, con un blanco de Rías Baixas' },
			{ name: 'Marisco de vitrina', note: 'gamba, cigalas y mejillones según lonja' },
		],
	},
	{
		title: 'Pescado y carne',
		items: [
			{ name: 'Pescado a la plancha', note: 'con patatas paja y limón' },
			{ name: 'Carpaccio de atún', note: 'con aguacate y huevas' },
			{ name: 'Solomillo a la plancha', note: 'con patatas panadera y pimiento' },
		],
	},
	{
		title: 'Arroces y guisos',
		items: [
			{ name: 'Paella de marisco', note: 'con gamba, mejillón y almeja' },
			{ name: 'Arroces de la casa', note: 'pregunta qué arroz hay ese día' },
			{ name: 'Guisos de Murcia', note: 'cocina de la tierra, según su web' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Virgen del Mar?',
		a: 'En la Plaza de San Nicolás, 3, bajo, en pleno centro de Murcia (30005), a pocos minutos de la Catedral. Es una zona de calles estrechas: lo más cómodo es aparcar en alguno de los parking del centro y llegar andando.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Según su propia web, abre de martes a sábado de 13:30 a 16:00 y de 20:30 a 23:00, y los domingos solo a mediodía, de 13:30 a 16:00. Los lunes cierra. La ficha de Google no publica horario, así que confirma por teléfono si vas en festivo.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'Se reserva por teléfono en el 968 21 66 79. Es un restaurante de centro con 530 reseñas y nota 4,5, así que para cenar el fin de semana conviene llamar con antelación.',
	},
	{
		q: '¿Qué se come?',
		a: 'Marisco fresco y pescados de la costa, arroces y guisos de Murcia. En las reseñas se repiten las croquetas, los buñuelos, la ensaladilla de merluza, las cocochas al ajillo, la paella y, sobre todo, la gamba roja.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes: se consultan en el local. Es un restaurante de marisco, así que el ticket depende mucho de lo que se pida de lonja.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. El local está en una plaza del casco antiguo; si necesitas una mesa concreta, avisa al reservar.',
	},
];
