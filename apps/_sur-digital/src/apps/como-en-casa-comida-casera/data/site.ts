/**
 * Datos de Como en Casa - Comida casera para llevar — C. Jorge Luis Borges, 15,
 * 28806 Alcalá de Henares (Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Como en Casa - Comida casera para llevar»,
 *   40.49502,-3.3736737, feature 0xd42497a1a4a06d5:0x54b9b5324d7e9aa3.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas y
 *   fotografías: ficha pública de Google consultada en octubre de 2026.
 * - Menú diario, hamburguesas, bocadillos, año de apertura, teléfonos, WhatsApp,
 *   redes y formas de pago: web del propio local (comoencasa.tilda.ws),
 *   consultada en octubre de 2026.
 *
 * La web del local indica 28051 en la dirección, pero la ficha de Google y el
 * callejero sitúan Jorge Luis Borges, 15, en 28806. Esta página usa el código
 * postal de Google.
 *
 * Lo que no se publica: carta completa con precios de todos los platos,
 * reparto a domicilio, pedidos online ni datos de accesibilidad. Las raciones y
 * sus precios son los de la pizarra que aparece en las fotos del perfil; el
 * precio del menú de la pizarra (5,50 €) no coincide con el de la web actual
 * (7,50 €), así que la web explica la diferencia y remite a confirmarlo.
 */

export const BUSINESS = {
	name: 'Como en Casa',
	fullName: 'Como en Casa - Comida casera para llevar',
	shortName: 'Como en Casa',
	mark: 'CE',
	street: 'C. Jorge Luis Borges, 15',
	district: 'Alcalá de Henares',
	city: 'Alcalá de Henares',
	region: 'Comunidad de Madrid',
	postalCode: '28806',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/como-en-casa-comida-casera',
	geo: { lat: 40.49502, lng: -3.3736737 },
	featureId: '0xd42497a1a4a06d5:0x54b9b5324d7e9aa3',
	placeId: 'ChIJ1QZKGnpJQg0Ro5p-TTK1uVQ',
	plusCode: '8CGRFJWG+2G',
	googleCategory: 'Restaurante de cocina española',
	phone: '678 33 29 50',
	phoneHref: 'tel:+34678332950',
	secondPhone: '919 12 47 03',
	secondPhoneHref: 'tel:+34919124703',
	whatsapp: '671 17 12 57',
	whatsappHref: 'https://wa.me/34671171257',
	website: 'http://comoencasa.tilda.ws/',
	instagram: 'https://www.instagram.com/comoencasa15/',
	facebook: 'https://www.facebook.com/comoencasa.casero',
	tagline: 'Comida casera para llevar en Alcalá de Henares',
	description:
		'Como en Casa, en C. Jorge Luis Borges, 15 (28806 Alcalá de Henares). Menú diario, raciones y comida casera para llevar. Martes a domingo, de 10:30 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Como+en+Casa+-+Comida+casera+para+llevar/@40.49502,-3.3736737,17z/data=!3m1!4b1!4m6!3m5!1s0xd42497a1a4a06d5:0x54b9b5324d7e9aa3!8m2!3d40.49502!4d-3.3736737!16s%2Fg%2F11hb38bdbl?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.49502%2C-3.3736737',
	embed: 'https://maps.google.com/maps?q=40.49502,-3.3736737&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.49502,-3.3736737',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 217,
	label: '4,7',
};

/** Horario que publican la ficha y la web del local. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '10:30–16:00' },
	{ dia: 'Miércoles', horas: '10:30–16:00' },
	{ dia: 'Jueves', horas: '10:30–16:00' },
	{ dia: 'Viernes', horas: '10:30–16:00' },
	{ dia: 'Sábado', horas: '10:30–16:00' },
	{ dia: 'Domingo', horas: '10:30–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, la web y las fotos del perfil permiten afirmar. */
export const SERVICIOS = [
	'Menú diario',
	'Comida casera',
	'Raciones',
	'Bocadillos',
	'Hamburguesas',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'Menú diario a 7,50 €',
		text: 'De martes a viernes, tres primeros y tres segundos a elegir más media barra de pan por 7,50 €. La casa publica los menús de cada día en Facebook e Instagram; aquí no se inventa la lista.',
	},
	{
		title: 'Raciones de fin de semana',
		text: 'Sábados y domingos la vitrina y la pizarra se llenan de raciones para compartir: pimientos asados, ensaladilla, tortilla, calamares, cazón adobado, pollo al ajillo o paella, entre otras.',
	},
	{
		title: 'Bocadillos y hamburguesas',
		text: 'Bocadillos de pollo empanado, tortilla, bacon y queso o lomo por 3,50 €, con oferta de estudiantes a 2,00 €. Las hamburguesas cuestan 2,50 € la básica y 3,50 € la completa, con patatas.',
	},
	{
		title: 'Una casa desde 2017',
		text: 'Es un negocio familiar que abrió en 2017. Cocina platos caseros para llevar y atiende pedidos por teléfono, WhatsApp, correo o redes sociales; no consta pedido online ni reparto a domicilio.',
	},
];

/** Platos y precios de la web del local y de la pizarra de las fotos. */
export const MENU = [
	{
		title: 'Menú diario',
		items: [
			{
				name: 'Menú del día',
				note: 'tres primeros y tres segundos a elegir + media barra de pan · de martes a viernes',
				price: '7,50 €',
			},
		],
	},
	{
		title: 'Raciones',
		items: [
			{ name: 'Pimientos asados', note: 'pizarra del local', price: '2,50 €' },
			{ name: 'Ensaladilla rusa', note: 'pizarra del local', price: '3,00 €' },
			{ name: 'Pisto manchego', note: 'pizarra del local', price: '4,50 €' },
			{ name: 'Tortilla de patatas', note: 'pizarra del local', price: '6,50 €' },
			{ name: 'Calamares', note: 'pizarra del local', price: '6,00 €' },
			{ name: 'Cazón adobado', note: 'pizarra del local', price: '6,00 €' },
			{ name: 'Alitas de pollo', note: 'pizarra del local', price: '4,50 €' },
			{ name: 'Magro con tomate', note: 'pizarra del local', price: '4,50 €' },
			{ name: 'Ragout de ternera', note: 'pizarra del local', price: '6,00 €' },
			{ name: 'Pollo al ajillo', note: 'pizarra del local', price: '5,50 €' },
			{ name: 'Paella', note: 'pizarra del local', price: '5,50 €' },
			{ name: 'Pollo asado', note: 'pizarra del local', price: '7,00 €' },
			{ name: 'Conejo al ajillo', note: 'pizarra del local', price: '12,00 €' },
		],
	},
	{
		title: 'Bocadillos y hamburguesas',
		items: [
			{ name: 'Bocadillo de pollo empanado', note: 'también tortilla, bacon y queso o lomo', price: '3,50 €' },
			{ name: 'Oferta estudiantes', note: 'en los bocadillos de la casa', price: '2,00 €' },
			{ name: 'Hamburguesa básica', note: 'carne, queso y patatas', price: '2,50 €' },
			{ name: 'Hamburguesa completa', note: 'carne, queso, bacon, huevo y patatas', price: '3,50 €' },
		],
	},
	{
		title: 'Postres de la vitrina',
		items: [
			{ name: 'Tarta de queso con frutos rojos', note: 'en la vitrina; precio no publicado en las fotos' },
			{ name: 'Arroz con leche', note: 'en la vitrina; precio no publicado en las fotos' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'El cachopo estaba muy rico y venia con patatas, son bastante rápidos atendiendo.',
		valor: 4,
	},
	{
		texto: 'Hemos probado el menú del día, algunas raciones y la paella.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Como en Casa?',
		a: 'En la calle Jorge Luis Borges, 15, en Alcalá de Henares (28806 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a domingo, de 10:30 a 16:00. El lunes figura cerrado. La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Cuánto cuesta el menú del día?',
		a: 'La web del local anuncia 7,50 € por tres primeros y tres segundos a elegir, más media barra de pan, de martes a viernes. En una foto de la pizarra aparece 5,50 €, un precio anterior o de otra fórmula: prevalece el de la web, pero confírmalo por teléfono.',
	},
	{
		q: '¿Qué platos tiene el menú?',
		a: 'No hay una lista fija. La casa publica cada día los menús de martes a viernes en Facebook (@comoencasa.casero) e Instagram (@comoencasa15), y también se pueden preguntar por teléfono o WhatsApp. Esta web no inventa los platos de cada jornada.',
	},
	{
		q: '¿Qué hay los fines de semana?',
		a: 'Sábados y domingos la oferta se centra en raciones para llevar. La pizarra del local lista pimientos asados, ensaladilla rusa, pisto manchego, tortilla de patatas, calamares, cazón adobado, alitas de pollo, magro con tomate, ragout de ternera, pollo al ajillo, paella, pollo asado y conejo al ajillo.',
	},
	{
		q: '¿Qué bocadillos y hamburguesas hay?',
		a: 'Bocadillos de pollo empanado, tortilla de patatas, bacon y queso o lomo por 3,50 €, con oferta para estudiantes a 2,00 €. Las hamburguesas son de carne, queso y patatas por 2,50 €, o completas con bacon y huevo por 3,50 €.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono en el 678 33 29 50 o el 919 12 47 03, por WhatsApp en el 671 17 12 57, por correo o por redes sociales. La web del local enlaza a WhatsApp para pedir. También se puede comprar en el local; no consta una tienda online.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Ni la ficha de Google ni la web del local publican reparto a domicilio, zona de reparto ni pedido mínimo. Lo que sí aparece es la recogida en el local y la atención por teléfono y WhatsApp. Pregunta al hacer el pedido si necesitas entrega.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La web del local indica efectivo, tarjeta de crédito o débito y Bizum. No publica otras condiciones de pago.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica datos de accesibilidad del local: ni acceso adaptado, ni aseos, ni aparcamiento. Si necesitas una condición concreta, llama antes de desplazarte.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 217 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el cachopo, la rapidez, el menú del día, las raciones y la paella.',
	},
	{
		q: '¿Desde cuándo existe?',
		a: 'La web del propio local explica que abrió en 2017 como negocio familiar y que desde entonces prepara comida casera para llevar.',
	},
];
