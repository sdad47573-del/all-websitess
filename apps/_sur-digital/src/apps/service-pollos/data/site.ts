/**
 * Datos de ServicePollos — C. del Carmen, 17, 30110 Murcia.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «ServicePollos», 38.0245943,-1.1244408,
 *   feature 0xd6383cfbfc72aab:0xc1cf10e929bc97e7.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, atributos de
 *   accesibilidad, descripción del negocio y reseñas: ficha pública de Google
 *   consultada en noviembre de 2026.
 *
 * Lo que no se publica: la ficha no enlaza web propia ni redes sociales, no
 * tiene carta con precios, no detalla la zona de reparto ni el pedido mínimo y
 * solo declara acceso adaptado, sin más datos de accesibilidad. Incluye la
 * categoría «comida a domicilio», de modo que esta página la menciona pero no
 * promete reparto propio. Los platos salen de las reseñas destacadas: no hay
 * importes que mostrar sin inventarlos.
 */

export const BUSINESS = {
	name: 'ServicePollos',
	fullName: 'ServicePollos',
	shortName: 'ServicePollos',
	mark: 'SP',
	street: 'C. del Carmen, 17',
	district: 'Murcia',
	city: 'Murcia',
	region: 'Región de Murcia',
	postalCode: '30110',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/service-pollos',
	geo: { lat: 38.0245943, lng: -1.1244408 },
	featureId: '0xd6383cfbfc72aab:0xc1cf10e929bc97e7',
	placeId: 'ChIJqyrHv8-DYw0R55e8KekQz8E',
	plusCode: '8CCW2VFG+R6',
	googleCategory: 'Comida a domicilio',
	phone: '868 97 32 76',
	phoneHref: 'tel:+34868973276',
	tagline: 'Asador de pollos y comida para llevar en Murcia',
	description:
		'ServicePollos, en C. del Carmen, 17 (30110 Murcia). Asador de pollos, arroces, fideuá y comidas para llevar, de martes a domingo de 9:30 a 16:30.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/ServicePollos/@38.0245943,-1.1244408,17z/data=!3m1!4b1!4m6!3m5!1s0xd6383cfbfc72aab:0xc1cf10e929bc97e7!8m2!3d38.0245943!4d-1.1244408!16s%2Fg%2F11ddwx11b9?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.0245943%2C-1.1244408',
	embed: 'https://maps.google.com/maps?q=38.0245943,-1.1244408&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.0245943,-1.1244408',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.1,
	count: 131,
	label: '4,1',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '9:30–16:30' },
	{ dia: 'Miércoles', horas: '9:30–16:30' },
	{ dia: 'Jueves', horas: '9:30–16:30' },
	{ dia: 'Viernes', horas: '9:30–16:30' },
	{ dia: 'Sábado', horas: '9:30–16:30' },
	{ dia: 'Domingo', horas: '9:30–16:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, sus categorías y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Asador de pollos',
	'Comida para llevar',
	'Arroces y fideuá',
	'Pollo por encargo',
	'Postres',
	'Comida a domicilio',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Asador de pollos',
		text: 'El propio negocio se define así en su ficha: «Asador de pollos y comidas para llevar con responsabilidad y seguridad». El pollo a la brasa es la casa.',
	},
	{
		title: 'Arroces y fideuá',
		text: 'Una de las reseñas lo cuenta: «Arroces buenos y fideuá muy buenos y el pollo brasa también muy rico». No es solo asador: también hay arrocería.',
	},
	{
		title: 'Dulces de la casa',
		text: '«Los dulces son deliciosos, en especial la tarta de queso y la de tres chocolates», dice otra opinión. La ficha no los detalla más allá de las reseñas.',
	},
	{
		title: 'Comida a domicilio',
		text: 'La ficha incluye la categoría «comida a domicilio» junto a la de parrilla, así que el reparto existe al menos como servicio del local. No publica zona, horarios de reparto ni pedido mínimo.',
	},
];

/** Platos que citan las reseñas y las categorías del local, sin precios inventados. */
export const MENU = [
	{
		title: 'Del asador y la cocina',
		items: [
			{ name: 'Pollo a la brasa', note: 'del horno rotativo; el cartel de la fachada anuncia pollo por encargo' },
			{ name: 'Pollo con garbanzos', note: 'en las bandejas del mostrador' },
			{ name: 'Arroces', note: '«arroces buenos», en una reseña destacada; paellas en el mostrador' },
			{ name: 'Fideuá', note: '«fideuá muy buenos», en la misma reseña' },
			{ name: 'Pescado rebozado con pimientos asados', note: 'en las bandejas del mostrador' },
			{ name: 'Carbonara', note: 'citada en la reseña crítica de la ficha' },
		],
	},
	{
		title: 'Para completar',
		items: [
			{ name: 'Patatas asadas', note: 'como guarnición del pollo, en las fotos del perfil' },
			{ name: 'Croquetas', note: 'en las bandejas del mostrador' },
			{ name: 'Empanadillas', note: 'en las bandejas del mostrador' },
			{ name: 'Pasta', note: 'en las bandejas del mostrador' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Tarta de queso', note: 'destacada en una reseña' },
			{ name: 'Tarta de tres chocolates', note: 'destacada en la misma reseña' },
		],
	},
	{
		title: 'Cómo se pide',
		items: [
			{
				name: 'Por teléfono',
				note: `llama al ${BUSINESS.phone} para preguntar qué hay y encargar`,
			},
			{
				name: 'Recogida en el local',
				note: 'en C. del Carmen, 17, Murcia',
			},
			{
				name: 'A domicilio',
				note: 'la ficha incluye la categoría «comida a domicilio»; pregunta zona y condiciones',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Arroces buenos y fideua muy buenos y el pollo brasa también muy rico',
		valor: 3,
	},
	{
		texto: 'Los dulces son deliciosos en especial la tarta de queso y la de tres chocolates.',
		valor: 5,
	},
	{
		texto: '8,5€ unos carbonara y una bolsa de patatas, ahí lo dejo',
		valor: 2,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está ServicePollos?',
		a: 'En la calle del Carmen, 17, en Murcia (30110). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo, de 9:30 a 16:30. Los lunes figura cerrado. En festivos puede cambiar: llama antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha no publica una carta con precios. El negocio se define como asador de pollos y comidas para llevar, y las reseñas destacadas citan arroces, fideuá, pollo a la brasa, carbonara y postres como la tarta de queso y la de tres chocolates. Para saber qué hay cada día, llama al 868 97 32 76.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha incluye la categoría «comida a domicilio», así que el servicio consta al menos como opción del local. No publica zona de reparto, horarios de entrega ni pedido mínimo: pregúntalo al llamar. Esta página no tramita pedidos.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha lo clasifica como comida a domicilio y parrilla, y el nombre habla de asador y comida para llevar. No declara servicio de mesa: si quieres sentarte, confírmalo por teléfono.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono, en el 868 97 32 76. La ficha no enlaza ninguna tienda online, así que los pedidos no se hacen desde esta página.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha no publica las formas de pago del local. Pregúntalo al hacer el pedido por teléfono para no llevarte una sorpresa.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google declara acceso para sillas de ruedas y no publica más datos de accesibilidad, ni aseos ni aparcamiento adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,1 sobre 5 con 131 reseñas en el momento de consultarla (noviembre de 2026). Las reseñas destacadas elogian los arroces, la fideuá, el pollo a la brasa y los postres; otra, de dos estrellas, se queja del precio de unos carbonara.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web propia ni perfiles sociales del negocio; solo aporta una descripción escrita por el propio local. Toda la información de esta página procede de esa ficha pública y de las fotos de su perfil.',
	},
];
