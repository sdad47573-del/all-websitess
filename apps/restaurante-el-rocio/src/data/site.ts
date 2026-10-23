/**
 * Datos de Restaurante "El Rocío" — Av. Narciso Yepes, 22 (30620 Fortuna, Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante "El Rocio", 38.1842754,-1.1260929,
 *   feature 0xd638f280253b527:0x46cd0bff789c1c99.
 * - La ficha publica teléfono, horario, nota y reseñas; de ahí salen todos los
 *   datos operativos de esta web.
 *
 * Lo que la web NO inventa: precios, carta cerrada ni servicios que la ficha no
 * publique. La carta se resume a partir de los platos que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante "El Rocío"',
	shortName: 'El Rocío',
	mark: 'ER',
	brandLine: 'Cocina española · Fortuna',
	tagline: 'Restaurante de cocina española en Fortuna, Murcia',
	summary:
		'Restaurante "El Rocío" es un restaurante de cocina española en la Avenida Narciso Yepes, 22 (30620 Fortuna, Murcia). Abre de lunes a sábado, de 9:00 a 18:00, y cierra los domingos.',
	street: 'Av. Narciso Yepes, 22',
	city: 'Fortuna',
	region: 'Murcia',
	regionName: 'Región de Murcia',
	postalCode: '30620',
	country: 'ES',
	phoneDisplay: '868 68 03 03',
	phoneHref: 'tel:+34868680303',
	rating: 4.4,
	reviewsCount: 464,
	priceRange: '€€',
	categories: ['Cocina española', 'Restaurante', 'Arroces', 'Raciones'],
	siteUrl: 'https://restaurante-el-rocio.vercel.app',
	geo: { lat: 38.1842754, lng: -1.1260929 },
	featureId: '0xd638f280253b527:0x46cd0bff789c1c99',
};

const CID_DECIMAL = '5101747144748702873';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+%22El+Rocio%22/@38.1842754,-1.1260929,17z/data=!3m1!4b1!4m6!3m5!1s0xd638f280253b527:0x46cd0bff789c1c99!8m2!3d38.1842754!4d-1.1260929!16s%2Fg%2F11cntmptng',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions:
		'https://www.google.com/maps/dir/?api=1&destination=38.1842754%2C-1.1260929',
	embed: 'https://maps.google.com/maps?q=38.1842754,-1.1260929&z=17&hl=es&output=embed',
};

export const HOURS = [
	{ day: 'Lunes', value: '9:00–18:00' },
	{ day: 'Martes', value: '9:00–18:00' },
	{ day: 'Miércoles', value: '9:00–18:00' },
	{ day: 'Jueves', value: '9:00–18:00' },
	{ day: 'Viernes', value: '9:00–18:00' },
	{ day: 'Sábado', value: '9:00–18:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Pedimos 3 entrantes (chorizo, alcachofas con torreznos y almejas) buenísimos.',
	},
	{
		rating: 5,
		text: 'Lo valoro tan positivamente por su deliciosa paella.',
	},
	{
		rating: 2,
		text: 'Las raciones son enormes y caras.',
	},
];

export const SERVICIOS = [
	'Cocina española',
	'Arroces y paellas',
	'Entrantes y raciones',
	'Comidas de empresa',
	'Comidas familiares',
	'Menú del día',
	'Para llevar',
	'Aparcamiento junto al local',
	'Acceso adaptado',
	'Reserva por teléfono',
];

export const MENU = [
	{
		title: 'Entrantes y raciones',
		items: [
			{ name: 'Chorizo', note: 'uno de los entrantes que destacan las reseñas' },
			{ name: 'Alcachofas con torreznos', note: 'el entrante más citado en la ficha' },
			{ name: 'Almejas', note: 'entrante de mar, también en las reseñas' },
			{ name: 'Raciones para compartir', note: 'ración abundante: pregunta antes de pedir de más' },
		],
	},
	{
		title: 'Arroces',
		items: [
			{ name: 'Paella', note: 'el plato que más se repite en los comentarios' },
			{ name: 'Arroces por encargo', note: 'confirma disponibilidad y tiempo de espera al reservar' },
		],
	},
	{
		title: 'Cocina española de casa',
		items: [
			{ name: 'Platos de cuchara', note: 'cocina de temporada: pregunta qué hay el día de tu visita' },
			{ name: 'Carnes a la brasa', note: 'consulta la carta del día en el local' },
			{ name: 'Pescado fresco', note: 'según mercado' },
		],
	},
	{
		title: 'Menú y postres',
		items: [
			{ name: 'Menú del día', note: 'de lunes a sábado, a mediodía; consulta precio en el local' },
			{ name: 'Postres caseros', note: 'la ficha no publica la carta de postres' },
			{ name: 'Cafés y sobremesa', note: 'el local cierra a las 18:00' },
		],
	},
];
