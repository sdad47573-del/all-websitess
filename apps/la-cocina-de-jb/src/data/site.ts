/**
 * Datos de LA COCINA DE JB — Calle Prof. Manuel Clavero Arévalo, 41020 Sevilla
 * (Pino Montano).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «La Cocina de JB»,
 *   37.4022755,-5.919011, feature 0xd126f0045069bbf:0x9ddbf8ba39c3d4ee.
 * - Nombre, dirección, categorías, valoración y reseñas: ficha pública de Google
 *   consultada en octubre de 2026.
 * - Teléfono, carta y precios: el rótulo y la carta fotografiados en el perfil de
 *   Google Maps. Pueden haber cambiado.
 *
 * Lo que la ficha NO publica: horario, página web, redes sociales ni reparto a
 * domicilio. La web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'La Cocina de JB',
	fullName: 'LA COCINA DE JB',
	shortName: 'JB',
	mark: 'JB',
	street: 'Calle Prof. Manuel Clavero Arévalo',
	district: 'Pino Montano',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41020',
	country: 'ES',
	siteUrl: 'https://la-cocina-de-jb.vercel.app',
	geo: { lat: 37.4022755, lng: -5.919011 },
	featureId: '0xd126f0045069bbf:0x9ddbf8ba39c3d4ee',
	placeId: 'ChIJv5sGRQBvEg0R7tTDObr4250',
	plusCode: '8C9PC32J+W9',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '646 59 41 55',
	phoneHref: 'tel:+34646594155',
	tagline: 'Pollo asado, guisos y freiduría para llevar',
	description:
		'La Cocina de JB, en Calle Prof. Manuel Clavero Arévalo (41020 Sevilla). Pollo asado, arroces y guisos caseros, pescado, freiduría, bocadillos y hamburguesas para llevar.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Cocina+de+JB/@37.4022755,-5.919011,17z/data=!4m6!3m5!1s0xd126f0045069bbf:0x9ddbf8ba39c3d4ee!8m2!3d37.4022755!4d-5.919011!16s%2Fg%2F11ldkt_m2t?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.4022755%2C-5.919011',
	embed: 'https://maps.google.com/maps?q=37.4022755,-5.919011&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.4022755,-5.919011',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 5,
	count: 10,
	label: '5,0',
};

/** La ficha no publica horario: solo el teléfono del rótulo. */
export const HORARIO_NOTA =
	'La ficha de Google no publica horario. El rótulo del local da un teléfono para pedidos (646 59 41 55): llama antes para confirmar el horario del día.';

/** Lo que anuncia el rótulo y la carta. */
export const SERVICIOS = [
	'Pollo asado',
	'Arroces y guisos',
	'Comida casera',
	'Pescado',
	'Freiduría',
	'Bocadillos',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'El rótulo lo pone primero: pollo asado, arroces, guiso, comida casera, pescado y freiduría. La carta lo vende entero desde 10 €, y con patatas, ensalada o croquetas sube hasta 15 €.',
	},
	{
		title: 'Los guisos del día',
		text: 'En el mostrador se ven bandejas de guisos caseros: lentejas con chorizo, potaje de garbanzos, guisantes con jamón y pollo al curry. Cambian según el día.',
	},
	{
		title: 'Freiduría y bocadillos',
		text: 'La carta tiene fritos por cuarto de kilo (chocos, boquerones, adobo, puntillitas), serranitos desde 4,50 € y baguettes desde 3 €. También hamburguesas desde 3 €.',
	},
	{
		title: 'Para llevar',
		text: 'Google lo clasifica como restaurante de comida para llevar y establecimiento de comida preparada. Se pide por teléfono, en el 646 59 41 55, que es el número del rótulo.',
	},
];

/** Carta fotografiada en la ficha: precios tal cual aparecen. */
export const MENU = [
	{
		title: 'Pollo asado',
		items: [
			{ name: 'Pollo asado', note: 'entero · 10,00 €' },
			{ name: 'Pollo + patatas fritas', note: '10,50 €' },
			{ name: 'Pollo + patatas + ensalada mixta', note: '12,00 €' },
			{ name: 'Pollo + patatas + ½ croquetas', note: '13,00 €' },
			{ name: 'Pollo + patatas + ½ pescado + aliño', note: '15,00 €' },
		],
	},
	{
		title: 'Serranitos y bocadillos',
		items: [
			{
				name: 'Serranito',
				note: 'de lomo, pollo, lomo adobado o pollo empanado · 4,50 €',
			},
			{ name: 'Súper serranito', note: 'con tortilla y salsa a elegir · 5,50 €' },
			{ name: 'Baguette de pollo asado', note: '3,50 €' },
			{ name: 'Baguette de filete de pollo', note: '3,00 €' },
			{ name: 'Baguette de calamares y alioli', note: '4,50 €' },
			{ name: 'Baguette carbonara', note: '3,80 €' },
			{ name: 'Perrito caliente', note: '2,75 €' },
			{ name: 'Tortilla de patatas', note: '3,00 €' },
		],
	},
	{
		title: 'Freiduría, ¼ kg',
		items: [
			{ name: 'Chocos', note: '7,50 €' },
			{ name: 'Boquerones', note: '7,00 €' },
			{ name: 'Adobo', note: '7,50 €' },
			{ name: 'Merluza a rodajas', note: '7,00 €' },
			{ name: 'Puntillitas', note: '7,50 €' },
			{ name: 'Lagrimitas de pollo', note: '6,00 €' },
			{ name: 'Croquetas de jamón o pollo', note: '5,00 €' },
			{ name: 'Nuggets de pollo', note: '5,00 €' },
			{ name: 'Alitas de pollo', note: '½ kg · 5,00 €' },
		],
	},
	{
		title: 'Hamburguesas',
		items: [
			{ name: 'De pollo', note: '3,00 €' },
			{ name: 'Crispis', note: '4,00 €' },
			{ name: 'De ternera', note: '5,00 €' },
			{ name: 'De buey 200 g', note: '6,50 €' },
			{ name: 'Con huevo y bacon', note: '1,00 € más' },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Arroces y guisos', note: 'del día, en bandejas' },
			{ name: 'Ensaladilla rusa', note: 'precio no publicado' },
			{ name: 'Ensalada de langostinos', note: 'precio no publicado' },
			{ name: 'Ensalada de patatas', note: 'precio no publicado' },
		],
	},
];

/** Las dos reseñas que publica la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Pedimos unas hamburguesas para llevar y la verdad que estaban muy buenas.',
		valor: 5,
	},
	{
		texto: 'Comida deliciosa y trato exquisito.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Cocina de JB?',
		a: 'En la calle Prof. Manuel Clavero Arévalo, 41020 Sevilla, en Pino Montano. El mapa de esta página abre las coordenadas exactas (37.4022755, -5.919011) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario. El rótulo del local da el teléfono de pedidos, el 646 59 41 55, así que conviene llamar antes para confirmar la apertura del día.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado en combos, arroces y guisos caseros, pescado y freiduría por cuarto de kilo, serranitos, baguettes, hamburguesas y ensaladas del mostrador. La carta de las fotos de la ficha tiene los precios.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según la carta fotografiada en la ficha, el pollo asado va de 10 € a 15 € con guarniciones; los serranitos, desde 4,50 €; las baguettes, desde 3 €; los fritos, entre 5 € y 7,50 € el cuarto de kilo; y las hamburguesas, desde 3 €. Los precios pueden haber cambiado.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google lo clasifica como restaurante de comida para llevar. La ficha no publica reparto a domicilio ni pedidos online; el canal que aparece es el teléfono, el 646 59 41 55, así que el reparto se confirma llamando.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad. Conviene llamar antes si necesitas acceso para silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 5,0 sobre 5 con 10 reseñas en el momento de consultar la ficha (octubre de 2026). Las dos opiniones que muestra elogian las hamburguesas, la comida y el trato.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
