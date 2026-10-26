/**
 * Datos de Sushi TOKYO Ramen Restaurant — Rua do Forno do Tijolo 36C D,
 * 1170-137 Lisboa.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Sushi TOKYO Ramen Restaurant»,
 *   38.7253177,-9.1334658, feature 0xd193390147ae1f9:0x9c3f3b05057abcc3
 *   (dirección, teléfono, horario, categoría, nota, reseñas, descripción del
 *   propio restaurante y enlace de WhatsApp).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * El enlace que Google muestra como «sitio web» es wa.me: el restaurante atiende
 * pedidos por WhatsApp. No hay web propia, ni carta con precios publicada.
 */

export const BUSINESS = {
	name: 'Sushi TOKYO Ramen Restaurant',
	shortName: 'Sushi TOKYO',
	mark: 'ST',
	street: 'Rua do Forno do Tijolo, 36C D',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Portugal',
	postalCode: '1170-137',
	country: 'PT',
	phoneDisplay: '920 163 272',
	phoneHref: 'tel:+351920163272',
	rating: 4.7,
	reviewsCount: 252,
	siteUrl: 'https://sushi-tokyo-ramen.vercel.app',
	geo: { lat: 38.7253177, lng: -9.1334658 },
	featureId: '0xd193390147ae1f9:0x9c3f3b05057abcc3',
	placeId: 'ChIJ-eF6FJAzGQ0Rw7x6BQU7P5w',
	cid: '11258782486202334403',
	/** Enlace que Google publica como web del restaurante. */
	whatsapp: 'https://wa.me/351920163272',
	/** Categoría con la que Google describe el local. */
	googleBlurb: 'Restaurante japonés',
	/** Descripción que publica el propio restaurante en su ficha. */
	ownDescription:
		'Cocina japonesa de fusión: sushi elaborado al momento, platos japoneses auténticos y bebidas para acompañar. Se puede comer en el local o pedir a domicilio.',
	tagline: 'Sushi y ramen en Lisboa',
	description:
		'Sushi TOKYO Ramen Restaurant, restaurante japonés en la Rua do Forno do Tijolo 36C D (1170-137 Lisboa): sushi, ramen y platos japoneses, en sala o a domicilio. Abre todos los días, con mediodía y cena. 4,7 en Google con 252 reseñas. Tel. 920 163 272.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sushi+TOKYO+Ramen+Restaurant/@38.7253177,-9.1334658,17z/data=!3m1!4b1!4m6!3m5!1s0xd193390147ae1f9:0x9c3f3b05057abcc3!8m2!3d38.7253177!4d-9.1334658!16s%2Fg%2F1tdgljbb',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7253177%2C-9.1334658',
	embed: 'https://maps.google.com/maps?q=38.7253177,-9.1334658&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: mediodía y cena, con el cierre de madrugada. */
export const HOURS = [
	{ day: 'Lunes', value: '12:30–16:00 · 18:30–1:00' },
	{ day: 'Martes', value: '12:30–16:00 · 18:30–1:00' },
	{ day: 'Miércoles', value: '12:30–16:00 · 18:30–1:00' },
	{ day: 'Jueves', value: '12:30–16:00 · 18:30–1:00' },
	{ day: 'Viernes', value: '18:30–2:00' },
	{ day: 'Sábado', value: '12:30–16:00 · 18:30–2:00' },
	{ day: 'Domingo', value: '18:30–23:30' },
];

/** Señas de identidad que constan en la ficha y en la descripción del local. */
export const SERVICIOS = [
	'Cocina japonesa',
	'Sushi',
	'Ramen',
	'Platos japoneses',
	'Para comer en sala',
	'A domicilio',
	'Pedidos por WhatsApp',
];

/**
 * La ficha no publica carta ni precios. Lo que sigue sale de la descripción del
 * propio restaurante y de las fotos del perfil (sushi, ramen, arroz frito,
 * sopa de miso y ensalada de wakame).
 */
export const MENU = [
	{
		title: 'Sushi',
		items: [
			{ name: 'Sashimi de salmón', note: 'lonchas de salmón sobre hoja de bambú, con wasabi' },
			{ name: 'Nigiri de salmón', note: 'arroz y salmón, en fila, como en las fotos del perfil' },
			{ name: 'Surtido de sushi', note: 'bandeja con nigiri, maki y rollos para compartir' },
		],
	},
	{
		title: 'Ramen y calientes',
		items: [
			{
				name: 'Ramen de la casa',
				note: 'caldo, fideos, chashu, huevo, nori y enoki',
			},
			{ name: 'Arroz frito', note: 'con huevo, jamón y verduras, al wok' },
			{ name: 'Sopa de miso', note: 'tofu, alga wakame y cebolleta' },
		],
	},
	{
		title: 'Para acompañar',
		items: [
			{ name: 'Ensalada de wakame', note: 'alga aliñada con sésamo, fresca y ligera' },
			{ name: 'Bebidas', note: 'el restaurante anuncia bebidas para acompañar la comida' },
			{ name: 'Pedidos a domicilio', note: 'por WhatsApp, en el 920 163 272' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sushi TOKYO Ramen?',
		a: 'En la Rua do Forno do Tijolo, 36C D, en Lisboa (1170-137), junto a Intendente y Almirante Reis. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Hace servicio de mediodía y de cena de lunes a jueves (12:30–16:00 y 18:30–1:00). El viernes solo abre por la noche, de 18:30 a 2:00. El sábado repite los dos turnos (12:30–16:00 y 18:30–2:00) y el domingo solo cena, de 18:30 a 23:30.',
	},
	{
		q: '¿Qué se come?',
			a: 'Es cocina japonesa de fusión: sushi y sashimi, ramen con chashu y huevo, arroz frito, sopa de miso y ensalada de wakame. La ficha lo resume como «sushi rolls, authentic japanese dishes y bebidas para acompañar».',
	},
	{
		q: '¿Se puede pedir a domicilio?',
			a: 'Sí. El propio restaurante anuncia servicio de reparto en su descripción de Google, y el enlace que publica como web es su WhatsApp: 920 163 272. Se pide por ahí, sin intermediarios.',
	},
	{
		q: '¿Se puede reservar?',
			a: 'La ficha no ofrece reserva online. El teléfono y el WhatsApp del restaurante son el 920 163 272, así que lo más rápido es escribir o llamar para reservar mesa.',
	},
	{
		q: '¿Tiene web propia?',
			a: 'No. El enlace que Google muestra como «sitio web» es wa.me, el WhatsApp del restaurante. Esta página es una ficha informativa hecha con los datos públicos de Google Maps.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
			a: '4,7 sobre 5 con 252 reseñas. Es una nota alta y con muchas opiniones, lo que la hace bastante representativa.',
	},
	{
		q: '¿Abre los festivos?',
			a: 'La ficha avisa de que el horario puede cambiar en festivos. Para no encontrarte la puerta cerrada, escribe antes por WhatsApp al 920 163 272.',
	},
];
