/**
 * Datos de Panadería Pastelería Suárez — Pl. de la Trinidad, Centro, 14003 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panaderia Pasteleria Suarez,
 *   37.8827936,-4.7830999, feature 0xd6cdf000e9b3d21:0xba02b069e2f1e370.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas, horario,
 *   accesibilidad y descripción del negocio: ficha pública de Google
 *   consultada en octubre de 2026.
 * - Fotos: galería del perfil de Google Maps del establecimiento. De la propia
 *   galería salen el rótulo (panadería, croissantera, bocadillos, bebidas,
 *   paninis, dulces), la pizarra de la puerta con algunos precios, los paninis,
 *   las pizzas y los bocadillos.
 *
 * La ficha escribe el nombre sin tildes («Panaderia Pasteleria Suarez»); en la
 * web se usa la grafía correcta y se conserva la original como nombre alterno.
 *
 * Lo que la ficha NO publica: web propia, correo, redes sociales, métodos de
 * pago ni reparto. Los importes que se citan son los de la pizarra que aparece
 * en una foto de la galería, con el aviso de que pueden haber cambiado.
 */

export const BUSINESS = {
	name: 'Panadería Pastelería Suárez',
	legalName: 'Panaderia Pasteleria Suarez',
	shortName: 'Suárez',
	mark: 'S',
	street: 'Pl. de la Trinidad',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14003',
	country: 'ES',
	phone: '664 80 87 51',
	phoneHref: 'tel:+34664808751',
	rating: 3.8,
	reviewsCount: 20,
	siteUrl: 'https://www.sur-digital.com/panaderia-pasteleria-suarez',
	geo: { lat: 37.8827936, lng: -4.7830999 },
	featureId: '0xd6cdf000e9b3d21:0xba02b069e2f1e370',
	placeId: 'ChIJIT2bDgDfbA0RcOPx4mmwAro',
	plusCode: '8C9QV6M8+4Q',
	googleCategory: 'Panadería',
	tagline: 'Panadería, cafetería y bocadillos en la Trinidad',
	description:
		'Panadería Pastelería Suárez, en la plaza de la Trinidad (Centro, 14003 Córdoba). Panadería, cafetería y bocadillos: paninis, pizzas, dulces y bebidas frías, con precios económicos según el propio negocio. 3,8 sobre 5 con 20 reseñas. Teléfono 664 80 87 51.',
	hoursSummary: 'L–V 8:30–14:30 y 17:30–19:30 · S 8:30–14:30 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaderia+Pasteleria+Suarez/@37.8827936,-4.7830999,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf000e9b3d21:0xba02b069e2f1e370!8m2!3d37.8827936!4d-4.7830999!16s%2Fg%2F11ld1ctjp5?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJIT2bDgDfbA0RcOPx4mmwAro',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8827936%2C-4.7830999',
	embed: 'https://maps.google.com/maps?q=37.8827936,-4.7830999&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8827936,-4.7830999',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:30–14:30 · 17:30–19:30' },
	{ day: 'Sábado', value: '8:30–14:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026: de lunes a viernes abre de 8:30 a 14:30 y vuelve por la tarde de 17:30 a 19:30; el sábado solo por la mañana y el domingo cierra. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Cafetería',
	'Bocadillos',
	'Paninis y pizzas',
	'Bebidas frías',
];

export const HIGHLIGHTS = [
	{
		title: 'En plena Trinidad',
		text: 'El local está en la plaza de la Trinidad, en el Centro de Córdoba, con acceso para sillas de ruedas según la ficha pública de Google.',
	},
	{
		title: 'Bocadillos al momento',
		text: 'Una reseña lo cuenta así: «hacen bocadillos variados buenísimos al momento, con mucho cariño». La galería enseña paninis, pizzas y bocadillos recién hechos.',
	},
	{
		title: 'La pizarra de la puerta',
		text: 'Las pizarras de las fotos anuncian el desayuno completo por 6 €, el bocadillo del día con bebida por 5 € y el café con tostada desde 2,50 €. Son los precios de esas fotos: pueden haber cambiado.'
	},
];

export const MENU_GROUPS = [
	{
		title: 'La pizarra',
		items: [
			{
				name: 'Desayuno completo',
				note: 'Tostada o mollete, zumo de naranja natural y café por 6 € en la pizarra de la terraza.',
			},
			{
				name: 'Bocadillo del día + bebida',
				note: '5 € en la pizarra fotografiada; el ejemplo de esa pizarra era de tortilla de patatas.',
			},
			{
				name: 'Café + tostada',
				note: 'Desde 2,50 € con tomate o mantequilla; 3,50 € con jamón, según la misma pizarra.',
			},
			{
				name: 'Proto del día',
				note: 'Café + croissant, napolitana o donuts por 2,60 € en la pizarra de la foto.',
			},
			{
				name: 'Bocata + bebida',
				note: '4 € para las opciones de jamón, york o queso que anuncia la pizarra.',
			},
			{
				name: 'Zumos naturales',
				note: '2 € y 2,50 € en la pizarra. El precio puede variar.',
			},
		],
	},
	{
		title: 'El mostrador',
		items: [
			{
				name: 'Pan y bollería',
				note: 'El rótulo del local anuncia panadería y croissantera; la vitrina y los carteles muestran croissants, napolitanas y donuts.',
			},
			{
				name: 'Dulces y pastelería',
				note: 'El nombre del negocio incluye pastelería. La ficha no publica catálogo completo ni precios de dulces.',
			},
			{
				name: 'Paninis y pizzas',
				note: 'El rótulo anuncia paninis y las fotos muestran pizzas por porciones y paninis gratinados.',
			},
		],
	},
	{
		title: 'Bebidas frías',
		items: [
			{
				name: 'Cerveza y vino',
				note: 'La descripción del negocio los nombra expresamente.',
			},
			{
				name: 'Refrescos y agua',
				note: '«Tienen un poco de todo: cervezas, agua, refrescos, bollería», resume una reseña.',
			},
			{
				name: 'Café Catunambú',
				note: 'La taza y el cartel de la galería son de Catunambú, «el café de Andalucía».',
			},
		],
	},
];

export const RESENAS = [
	{ texto: 'Tienen un poco de todo: cervezas, agua, refrescos, bollería, etc.', valor: 5 },
	{ texto: 'Hacen bocadillos variados buenísimos al momento, con mucho cariño.', valor: 5 },
	{ texto: 'Te quieren cobrar como si fueras extranjero.', valor: 1 },
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Pastelería Suárez?',
		a: 'En la plaza de la Trinidad, en el Centro de Córdoba (14003). El mapa de esta página abre el punto exacto y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 8:30 a 14:30 y de 17:30 a 19:30; el sábado, solo de 8:30 a 14:30, y el domingo permanece cerrado. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Qué se puede tomar?',
		a: 'La ficha lo describe como panadería, cafetería y pastelería con bocadillos, dulces y bebidas frías: cerveza, vino, refrescos y agua. El rótulo añade paninis y la galería muestra pizzas, croissants, napolitanas y bocadillos.',
	},
	{
		q: '¿Hacen bocadillos?',
		a: 'Sí, según la descripción del negocio y las reseñas: «hacen bocadillos variados buenísimos al momento, con mucho cariño». La ficha no publica una lista completa de bocadillos.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios, pero las pizarras de las fotos marcan el desayuno completo a 6 €, el bocadillo del día con bebida a 5 €, el café con tostada desde 2,50 €, el proto del día a 2,60 € y el bocata con bebida a 4 €. También el café solo a 1,60 €, los bollos a 1,20 € y las tostadas a 1,80 €. Son los importes de esas fotos y pueden haber cambiado: confírmalos en el local.'
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha de Google es el 664 80 87 51. No consta página web propia, correo ni perfiles sociales, así que esta página no enlaza ninguno.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,8 sobre 5 con 20 reseñas en Google (octubre de 2026). Hay opiniones muy buenas sobre los bocadillos y la variedad de bebidas, y también alguna crítica con el cobro, como la que se reproduce en esta página.',
	},
	{
		q: '¿Se puede pagar con tarjeta o pedir a domicilio?',
		a: 'La ficha pública no indica métodos de pago ni servicio de reparto, así que esta web no los afirma. Se consulta en el local o por teléfono.',
	},
	{
		q: '¿Los precios son económicos?',
		a: 'Es lo que afirma el propio negocio en su descripción de Google («Precios económicos»). Los importes concretos que se ven en la web son los de la pizarra fotografiada; la ficha no publica una tarifa oficial.',
	},
];
