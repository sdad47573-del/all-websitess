/**
 * Datos de FRY. — A-42, 28021, Villaverde, 28021 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: FRY., 40.3390569,-3.67798,
 *   feature 0xd42276d90fe7989:0x64aa75269dc6a9bd.
 * - Nombre, dirección, categoría, teléfono, valoración, reseñas y horario:
 *   ficha pública de Google consultada en octubre de 2026.
 * - Descripción del negocio: la que publica el propio establecimiento en su
 *   ficha de Google.
 * - Carta y precios: web oficial enlazada desde la ficha
 *   (https://fry-deb.github.io/Fry.-Website/), consultada en octubre de 2026.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: es un negocio solo de reparto (la ficha lo
 * clasifica como «comida a domicilio») y no publica local para comer allí. El
 * envío es gratuito en Villaverde y se consulta fuera de zona, según su web.
 */

export const BUSINESS = {
	name: 'FRY.',
	fullName: 'FRY. · pollo frito picante a domicilio en Madrid',
	shortName: 'FRY.',
	mark: 'F',
	street: 'A-42, 28021',
	neighbourhood: 'Villaverde',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	regionName: 'Comunidad de Madrid',
	postalCode: '28021',
	country: 'ES',
	phone: '669 76 57 85',
	phoneHref: '+34669765785',
	rating: 5,
	reviewsCount: 24,
	siteUrl: 'https://www.sur-digital.com/fry',
	geo: { lat: 40.3390569, lng: -3.67798 },
	featureId: '0xd42276d90fe7989:0x64aa75269dc6a9bd',
	placeId: 'ChIJiXn-kG0nQg0RvanGnSZ1qmQ',
	cid: '7253738958549854653',
	plusCode: '8CGR88QC+JR',
	category: 'Comida a domicilio',
	tagline: 'Pollo frito picante, crujiente y hecho al momento',
	description:
		'FRY. es pollo frito picante y crujiente hecho al momento, con hamburguesas, tiras y salsas caseras, solo con pedidos a domicilio en Madrid. 5,0 sobre 5 en Google con 24 reseñas. Abre todos los días de 19:30 a 23:30.',
	hasPublicWebsite: true,
	website: 'https://fry-deb.github.io/Fry.-Website/',
	/** Descripción que publica el propio establecimiento en su ficha de Google. */
	ownerDescription:
		'FRY. es pollo frito, burguers y mucho sabor. Una propuesta de comida urbana con recetas crujientes, contundentes y una identidad atrevida. Aquí venimos a comer bien, disfrutar y repetir',
	/** Aviso publicado en su web: solo reparto, sin sala. */
	deliveryOnly: true,
	deliveryFee: 'Envío Villaverde: 2 € · Fuera de zona: consultar',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/FRY./@40.3390569,-3.67798,17z/data=!3m1!4b1!4m6!3m5!1s0xd42276d90fe7989:0x64aa75269dc6a9bd!8m2!3d40.3390569!4d-3.67798!16s%2Fg%2F11zx45pghc?authuser=0&hl=es&entry=ttu',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3390569%2C-3.67798',
	embed: 'https://maps.google.com/maps?q=40.3390569,-3.67798&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3390569,-3.67798',
	/** Web oficial del local, enlazada desde su ficha de Google. */
	website: 'https://fry-deb.github.io/Fry.-Website/',
};

/** Horario publicado en la ficha de Google: todos los días, 19:30–23:30. */
export const HOURS = [
	{ day: 'Lunes', value: '19:30–23:30' },
	{ day: 'Martes', value: '19:30–23:30' },
	{ day: 'Miércoles', value: '19:30–23:30' },
	{ day: 'Jueves', value: '19:30–23:30' },
	{ day: 'Viernes', value: '19:30–23:30' },
	{ day: 'Sábado', value: '19:30–23:30' },
	{ day: 'Domingo', value: '19:30–23:30' },
];

/** Señales de identidad que constan en la ficha y en la web del local. */
export const SERVICIOS = [
	'Pollo frito picante',
	'Doble rebozado',
	'Hamburguesas',
	'Tiras de pollo',
	'Salsas caseras',
	'Solo a domicilio',
];

/**
 * Carta publicada en la web oficial del local. Los precios son los de esa
 * web; pueden cambiar, así que se invita a confirmarlos al hacer el pedido.
 */
export const MENU = [
	{
		title: 'Combos mixtos',
		items: [
			{
				name: 'Fiesta Mixta',
				price: '56,90 €',
				note: '4 piezas de pechuga + 4 hamburguesas + 2 patatas medianas + bebida de 2 l + 4 tarrinas de Salsa FRY. · para compartir',
			},
		],
	},
	{
		title: 'Piezas de pollo',
		items: [
			{
				name: 'Ración de 2 piezas',
				price: '11,50 €',
				note: 'pechuga entera marinada en buttermilk y doble rebozado picante · incluye salsa FRY. · 1-2 personas',
			},
			{
				name: 'Ración de 4 tiras',
				price: '9,50 €',
				note: '4 tiras grandes de pollo, unos 150 g cada una · incluye salsa FRY.',
			},
		],
	},
	{
		title: 'FRY BITES',
		items: [
			{ name: 'FRY BITES — 10 uds', price: '4,50 €', note: 'bocaditos de pollo rebozado, para picar' },
			{ name: 'FRY BITES — 20 uds', price: '7,50 €', note: 'incluye 1 tarrina de Salsa FRY.' },
			{ name: 'FRY BITES — 30 uds', price: '10,50 €', note: 'para compartir · incluye 1 tarrina de Salsa FRY.' },
		],
	},
	{
		title: 'Hamburguesas',
		items: [
			{
				name: 'Hamburguesa FRY.',
				price: '9,00 €',
				note: '150 g de pollo rebozado entero, queso, pepinillos agridulces, salsa FRY. y pan brioche · incluye salsa',
			},
			{ name: 'Fillette extra', price: '+2,50 €', note: 'añade una pieza de pollo a la hamburguesa' },
		],
	},
	{
		title: 'Guarniciones',
		items: [
			{
				name: 'Patatas Especiales FRY.',
				price: '5,20 €',
				note: 'patatas con sazón cajún, tarrina de Ranch FRY y tarrina de miel aparte',
			},
			{
				name: 'Patatas Especiales Grandes',
				price: '10,00 €',
				note: '2 uds + salsas',
			},
			{ name: 'Box alitas BBQ picante', price: '6,50 €', note: '10 unidades' },
			{ name: 'Patatas fritas — pequeña', price: '3,40 €', note: 'para 1-2 personas' },
			{ name: 'Patatas fritas — mediana', price: '5,20 €', note: 'para 2-3 personas' },
			{ name: 'Patatas fritas — grande', price: '6,50 €', note: 'para 4-5 personas' },
		],
	},
	{
		title: 'Nuestras salsas',
		items: [
			{
				name: 'Tarrina de Salsa FRY.',
				price: '2,50 €',
				note: 'cremosa, con paprika, mostaza y un toque de miel · ≈100 g',
			},
			{
				name: 'Tarrina de Salsa Ranch FRY.',
				price: '2,50 €',
				note: 'mayonesa, yogur griego, limón, pepinillo y cilantro fresco · ≈100 g',
			},
			{ name: 'Miel', price: '1,50 €', note: 'tarrina de 30 g, para mojar o echar por encima' },
			{ name: 'Salsa Bourbon', note: 'próximamente · glaseado dulce y ahumado con bourbon' },
			{ name: 'Salsa Sweet Chilli', note: 'próximamente · dulce y picante' },
			{ name: 'Salsa Habanero Mango', note: 'próximamente · mango fresco y habanero' },
		],
	},
	{
		title: 'Bebidas',
		items: [
			{ name: 'Refrescos de 2 litros', price: '3,50 €', note: 'para compartir · elige sabor (Nestea es de 1,5 l)' },
		],
	},
];

/** Alérgenos que declara la carta del local. */
export const ALERGENOS =
	'La carta del local declara gluten (rebozado y pan), huevo, leche, mostaza y pescado (Salsa FRY). Es información orientativa: si tienes alguna alergia, confírmala al hacer el pedido.';

/** Redes y canales que publica el propio local. */
export const SOCIALS = {
	instagram: 'https://www.instagram.com/fry_group',
	tiktok: 'https://www.tiktok.com/@fry0815',
	whatsapp: 'https://wa.me/34669765785?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20FRY.',
};

/** Reseña publicada en la ficha de Google. */
export const RESENAS = [
	{
		texto: 'La hamburguesa de pollo increíble, la salsa bourbon mi favorita.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está FRY.?',
		a: 'La ficha lo sitúa en la A-42, 28021, en Villaverde (28021 Madrid). Es un negocio de reparto: funciona solo con pedidos a domicilio, sin servicio de sala. El mapa de esta página lleva a la ubicación de la ficha de Google.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días de 19:30 a 23:30, según la ficha de Google. En festivos el horario puede cambiar, así que conviene confirmarlo al hacer el pedido.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo frito picante con doble rebozado, hamburguesas como la Hamburguesa FRY. con pollo rebozado, tiras de pollo, patatas y salsas caseras. La carta está en esta página con los precios de la web del local.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'No consta. La ficha lo clasifica como «comida a domicilio» y su propia web avisa de que solo hace pedidos a domicilio. Esta página no ofrece reservas ni mesa.',
	},
	{
		q: '¿Dónde reparten y cuánto cuesta el envío?',
		a: 'Según su web, el envío en Villaverde cuesta 2 € y fuera de zona hay que consultarlo. La disponibilidad depende de la dirección, así que lo mejor es llamar al 669 76 57 85 o consultar la web antes de pedir.',
	},
	{
		q: '¿Cómo se pide?',
		a: 'Por teléfono, en el 669 76 57 85, o a través de la web oficial que enlaza su ficha de Google. Esta página es informativa y no gestiona pedidos.',
	},
	{
		q: '¿Hay opciones de salsas?',
		a: 'La carta publica la Salsa FRY. (paprika, mostaza y miel), el Ranch FRY (mayonesa, yogur griego, limón, pepinillo y cilantro) y miel. Bourbon, Sweet Chilli y Habanero Mango aparecen como próximamente.',
	},
	{
		q: '¿Se pueden pedir combos para grupos?',
		a: 'Sí, la carta incluye la Fiesta Mixta con 4 piezas, 4 hamburguesas, 2 patatas medianas, bebida de 2 litros y 4 tarrinas de Salsa FRY. Para pedidos grandes conviene avisar con antelación.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '5,0 sobre 5 con 24 reseñas en Google, según la ficha consultada en octubre de 2026.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'Sí. La ficha de Google enlaza la web oficial del local, que también se puede abrir desde esta página. Es el canal donde publica la carta completa.',
	},
];
