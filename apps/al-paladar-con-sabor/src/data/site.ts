/**
 * Datos de Al paladar con sabor — C. de los Hermanos García Noblejas, 182,
 * Ciudad Lineal, 28037 Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Al paladar con sabor», 40.4206035,-3.6261145,
 *   feature 0xd422f72462a11c3:0xf9d9ae2b44b801ee, place id ChIJwxEqRnIvQg0R7gG4RCuu2fk.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, atributos de
 *   accesibilidad, descripción del local y reseñas: ficha pública consultada en
 *   octubre de 2026.
 *
 * La ficha no publica carta ni precios. Esta web solo nombra lo que aparece en
 * la descripción del local, en sus fotos y en las reseñas: no inventa platos ni
 * tarifas.
 */

export const BUSINESS = {
	name: 'Al paladar con sabor',
	fullName: 'Al paladar con sabor',
	shortName: 'Al paladar',
	mark: 'A',
	street: 'C. de los Hermanos García Noblejas, 182',
	district: 'Ciudad Lineal',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28037',
	country: 'ES',
	siteUrl: 'https://al-paladar-con-sabor.vercel.app',
	geo: { lat: 40.4206035, lng: -3.6261145 },
	featureId: '0xd422f72462a11c3:0xf9d9ae2b44b801ee',
	placeId: 'ChIJwxEqRnIvQg0R7gG4RCuu2fk',
	category: 'Comida para llevar · brasa y cocina casera',
	phone: '691 77 37 64',
	phoneHref: 'tel:+34691773764',
	tagline: 'Pollo al carbón, costillas y comida casera para llevar en Ciudad Lineal',
	description:
		'Al paladar con sabor, en C. de los Hermanos García Noblejas, 182 (Ciudad Lineal, 28037 Madrid). Pollo al carbón, costillas, cochinillo y comida casera para llevar, con ingredientes frescos y trato cercano. 4,7 sobre 5 con 59 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Al+paladar+con+sabor/@40.4206035,-3.6261145,17z/data=!3m1!4b1!4m6!3m5!1s0xd422f72462a11c3:0xf9d9ae2b44b801ee!8m2!3d40.4206035!4d-3.6261145!16s%2Fg%2F11y0qg1np5?authuser=0&hl=es&entry=ttu',
	reviews: `https://www.google.com/maps/place/Al+paladar+con+sabor/@40.4206035,-3.6261145,17z/data=!4m8!3m7!1s0xd422f72462a11c3:0xf9d9ae2b44b801ee!8m2!3d40.4206035!4d-3.6261145!9m1!1b1`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4206035%2C-3.6261145',
	embed: 'https://maps.google.com/maps?q=40.4206035,-3.6261145&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4206035,-3.6261145',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 59,
	label: '4,7',
};

/**
 * Horario publicado en la ficha: miércoles a domingo, con dos turnos de 10:00 a
 * 15:30 y de 19:00 a 22:00. Lunes y martes cierra.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '10:00–15:30 · 19:00–22:00', closed: false },
	{ dia: 'Jueves', horas: '10:00–15:30 · 19:00–22:00', closed: false },
	{ dia: 'Viernes', horas: '10:00–15:30 · 19:00–22:00', closed: false },
	{ dia: 'Sábado', horas: '10:00–15:30 · 19:00–22:00', closed: false },
	{ dia: 'Domingo', horas: '10:00–15:30 · 19:00–22:00', closed: false },
];

export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente. Llama al 691 77 37 64 antes de bajar en festivo.';

export const HIGHLIGHTS = [
	{
		title: 'Pollo al carbón de verdad',
		text: 'La descripción del local lo dice sin rodeos: «especialistas en pollo al carbón». Las fotos enseñan los pollos ensartados girando sobre la brasa, con las costillas en la parrilla de arriba.',
	},
	{
		title: 'También cochinillo y costillas',
		text: 'Además del pollo, el asador trabaja costillas y cochinillo entero. En una de las fotos, la cocinera sostiene un cochinillo recién asado en la bandeja, junto al horno de carbón.',
	},
	{
		title: 'Casero y para llevar',
		text: 'La fachada anuncia «comida para llevar» y Google lo clasifica como restaurante de comida para llevar. La carta incluye croquetetas, tortilla, paella y empanadas, según las fotos y las reseñas.',
	},
];

/** Platos que aparecen en las fotos o en las reseñas. Sin precios: la carta no está publicada. */
export type Plato = { name: string; note: string };
export type Grupo = { title: string; note: string; items: Plato[] };

export const CARTA: Grupo[] = [
	{
		title: 'De la brasa',
		note: 'La ficha presenta el local como especialista en pollo al carbón, costillas y comida casera. No publica precios.',
		items: [
			{
				name: 'Pollo al carbón',
				note: 'Entero, girando en el asador. La reseña más directa: «pollo bastante grande, todo está buenísimo».',
			},
			{
				name: 'Costillas a la brasa',
				note: 'En la parrilla, con salsa BBQ aparte y acompañadas de patatas y ensalada en las fotos.',
			},
			{
				name: 'Cochinillo asado',
				note: 'La cocinera lo muestra entero, recién sacado del horno de carbón.',
			},
		],
	},
	{
		title: 'De la cocina',
		note: 'Platos caseros que se ven en la galería o citan las reseñas. Tampoco hay precios publicados.',
		items: [
			{ name: 'Croquetas caseras', note: 'Ocho en la tarrina de la foto, bien doradas.' },
			{ name: 'Tortilla de patata', note: 'Entera, en la foto de la galería.' },
			{ name: 'Paella', note: 'Citada en una reseña de cinco estrellas, junto al pollo y las empanadas.' },
			{ name: 'Empanadas', note: 'La misma reseña las menciona como parte de lo probado.' },
			{ name: 'Patatas fritas y ensalada', note: 'El acompañamiento que aparece en los platos y en las reseñas.' },
		],
	},
];

export const NOTA_CARTA =
	'La ficha de Google no publica carta ni precios, y esta web no los inventa: los platos son los que aparecen en la descripción del local, en sus fotos y en las reseñas. Para saber qué hay hoy y cuánto cuesta, llama al 691 77 37 64.';

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Las raciones son ENORMES, Pollo bastante grande, todo está buenísimo.',
		valor: 5,
	},
	{
		texto: 'La comida está muy rica, he probado la paella, el pollo y las empanadas.',
		valor: 5,
	},
	{
		texto: 'Acompañado con patatas y ensalada que está muy rico.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Al paladar con sabor?',
		a: 'En la calle de los Hermanos García Noblejas, 182, en Ciudad Lineal (28037 Madrid). El mapa de esta página abre las coordenadas exactas de la ficha y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De miércoles a domingo, con dos turnos: 10:00–15:30 y 19:00–22:00. Lunes y martes cierra. La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'El local se presenta como especialista en pollo al carbón, costillas y comida casera. En las fotos aparecen pollo asado, costillas, cochinillo, croquetas, tortilla de patata, patatas y ensalada; las reseñas añaden paella y empanadas.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no los inventa. Para conocer el precio del pollo, las costillas o el menú del día hay que llamar al 691 77 37 64.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Google lo clasifica como restaurante de comida para llevar y la fachada anuncia «comida para llevar». En las fotos no se ve sala de mesas, así que lo seguro es contar con pedir y recoger. Si quieres sentarte, pregúntalo por teléfono.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no enlaza ninguna plataforma de reparto ni publica condiciones de envío. Lo que sí está claro es la comida para llevar: se pide por teléfono y se recoge en el local.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no ofrece reservas online ni un teléfono específico para ellas. Si quieres encargar comida para un grupo, llama con antelación al 691 77 37 64.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, aparcamiento adaptado y asientos adaptados. En cambio, indica que no hay aseo adaptado.',
	},
	{
		q: '¿Hay aparcamiento?',
		a: 'La ficha marca aparcamiento adaptado para sillas de ruedas, aunque no detalla plazas propias ni tarifas. Es una avenida de Ciudad Lineal, así que hay que buscar sitio en la zona.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 59 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres reseñas publicadas son de cinco estrellas y destacan el tamaño de las raciones y el sabor.',
	},
];
