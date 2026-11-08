/**
 * Datos de Sora Tilde — C. Huéscar, 2, Distrito Centro, 29007 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Sora Tilde», 36.7182189,-4.4311978,
 *   feature 0xd72f7310c7d0dbf:0xdea97bc4c69b7d9, place id ChIJvw19DDH3cg0R2bdpTLyX6g0.
 * - Nombre, dirección, teléfono, categorías, valoración, horario, atributos de
 *   accesibilidad, descripción del local y reseñas: ficha pública consultada en
 *   octubre de 2026.
 *
 * La ficha no publica carta ni precios, así que esta web no inventa platos ni
 * tarifas: solo nombra lo que aparece en la descripción del propio local, en
 * sus categorías y en las reseñas.
 */

export const BUSINESS = {
	name: 'Sora Tilde',
	fullName: 'Sora Tilde',
	shortName: 'Sora Tilde',
	mark: 'ST',
	street: 'C. Huéscar, 2',
	district: 'Distrito Centro',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29007',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/sora-tilde',
	geo: { lat: 36.7182189, lng: -4.4311978 },
	featureId: '0xd72f7310c7d0dbf:0xdea97bc4c69b7d9',
	placeId: 'ChIJvw19DDH3cg0R2bdpTLyX6g0',
	category: 'Cocina romana y pizzería',
	phone: '685 28 62 03',
	phoneHref: 'tel:+34685286203',
	tagline: 'Ristorante romano y pizzería tradicional en el centro de Málaga',
	description:
		'Sora Tilde, en C. Huéscar, 2 (Distrito Centro, 29007 Málaga). Cocina romana y pizzería tradicional: pizzas de masa fina, carbonara y cacio e pepe, también para llevar y a domicilio. 4,6 sobre 5 con 160 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sora+Tilde/@36.7182189,-4.4311978,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7310c7d0dbf:0xdea97bc4c69b7d9!8m2!3d36.7182189!4d-4.4311978!16s%2Fg%2F11ybrtmz4d?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7182189%2C-4.4311978',
	embed: 'https://maps.google.com/maps?q=36.7182189,-4.4311978&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7182189,-4.4311978',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 160,
	label: '4,6',
};

/**
 * Horario publicado en la ficha: dos turnos, mediodía y noche, de lunes a
 * sábado. El domingo cierra.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–16:30 · 20:00–23:30', closed: false },
	{ dia: 'Martes', horas: '13:00–16:30 · 20:00–23:30', closed: false },
	{ dia: 'Miércoles', horas: '13:00–16:30 · 20:00–23:30', closed: false },
	{ dia: 'Jueves', horas: '13:00–16:30 · 20:00–23:30', closed: false },
	{ dia: 'Viernes', horas: '13:00–16:30 · 20:00–23:30', closed: false },
	{ dia: 'Sábado', horas: '13:00–16:30 · 20:00–23:30', closed: false },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente. Llama al 685 28 62 03 antes de bajar en festivo.';

export const HIGHLIGHTS = [
	{
		title: 'Roma, en el plato y en el neón',
		text: 'El letrero de la portada lo dice en italiano: «La vera Roma nel piato». Dentro, cocina romana de la que el propio local destaca la carbonara y la cacio e pepe.',
	},
	{
		title: 'Masa fina, borde aireado',
		text: 'Las reseñas coinciden: «masa fina y combinaciones sorprendentes». En las fotos, pizzas con mortadela y pistacho, prosciutto y rúcula o setas, todas con el borde marcado por el horno.',
	},
	{
		title: 'Terraza, para llevar y a domicilio',
		text: 'Las fotos muestran mesas altas en una terraza de calle, con el neón rosa encendido de noche. La ficha lo marca además como pizzería a domicilio y pizza para llevar.',
	},
];

/**
 * Platos que se ven en las fotos de la ficha y se citan en las reseñas. No son
 * los nombres oficiales de la carta —que no está publicada— y no llevan precio.
 */
export type Plato = { name: string; note: string; foto: string };

export const CARTA: Plato[] = [
	{
		name: 'Pizza de mortadela, burrata y pistacho',
		note: 'Mortadela en rosas, burrata y pistacho sobre masa blanca. La más llamativa de la galería.',
		foto: 'apaisada-06',
	},
	{
		name: 'Pizza de prosciutto, rúcula y parmesano',
		note: 'Jamón curado, rúcula, virutas de parmesano y un hilo de reducción de módena.',
		foto: 'vertical-05',
	},
	{
		name: 'Pizza de setas y pollo',
		note: 'Base blanca con champiñones laminados y trozos de pollo asado.',
		foto: 'vista-4-04',
	},
	{
		name: 'Pizza de salami y queso crema',
		note: 'Salami en lonchas y puntos de queso crema sobre tomate y mozzarella.',
		foto: 'vertical-02',
	},
	{
		name: 'Pizza de salchicha y pecorino',
		note: 'Salchicha, tomate cherry y lascas de queso curado. La que aparece junto al menú de mesa.',
		foto: 'cuadrada-03',
	},
	{
		name: 'Rigatoni a la carbonara',
		note: 'Pasta con bacon crujiente, huevo y pecorino rallado, servida en cuenco de cerámica.',
		foto: 'vertical-07',
	},
];

export const NOTA_CARTA =
	'La ficha de Google no publica carta ni precios, y esta web no los inventa: los nombres describen lo que se ve en sus fotos, no son la carta oficial. Para la carta del día y las tarifas, llama al 685 28 62 03.';

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Pedimos la pizza Amorosa y fue la mejor pizza que me he tomado en mi vida 🤤🤤🤤',
		valor: 5,
	},
	{
		texto: 'Las pizzas exquisitas, masa fina y combinaciones sorprendentes.',
		valor: 5,
	},
	{
		texto: 'Pizzas y pasta estupendas',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sora Tilde?',
		a: 'En la calle Huéscar, 2, en el Distrito Centro de Málaga (29007). El mapa de esta página abre las coordenadas exactas de la ficha y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué tipo de cocina hace?',
		a: 'Cocina romana y pizzería tradicional. La ficha lo describe como «Ristorante Romano y Pizzeria Tradizionale» y cita pizzas crujientes, carbonara y cacio e pepe. Google lo clasifica como restaurante italiano, pizzería, pizzería a domicilio, pizza para llevar y restaurante de cocina romana.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado, con dos turnos: 13:00–16:30 y 20:00–23:30. El domingo cierra. La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente.',
	},
	{
		q: '¿Tiene carta publicada?',
		a: 'No. La ficha de Google no incluye carta ni precios, y esta web no los inventa: describe los platos que se ven en las fotos (pizzas de mortadela y pistacho, prosciutto y rúcula, setas; rigatoni a la carbonara; tablas de embutidos), además de la pizza Amorosa, la carbonara y la cacio e pepe que citan las reseñas y la descripción. Para la carta completa hay que llamar al 685 28 62 03.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'La ficha lo marca como pizzería a domicilio y pizza para llevar, así que sí se trabaja el pedido fuera del local. No publica plataformas, horarios de reparto ni importe mínimo: conviene llamar antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no ofrece reservas online ni un teléfono específico para ellas. Si vais en grupo, lo prudente es llamar antes al 685 28 62 03.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados. También indica que no hay bucle magnético asistencial.',
	},
	{
		q: '¿Hay aparcamiento?',
		a: 'La ficha marca aparcamiento adaptado para sillas de ruedas, pero no detalla plazas propias ni tarifas. Es una calle del Distrito Centro, así que hay que buscar sitio en la zona.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,6 sobre 5 con 160 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres reseñas publicadas son de cinco estrellas y hablan de las pizzas y la pasta.',
	},
];
