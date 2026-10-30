/**
 * Datos de Que Comemos Hoy — C. de Antonio de Leyva, 20, Carabanchel
 * (28019 Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Que Comemos Hoy»,
 *   40.3946437,-3.7158675, feature 0xd4227c70077f325:0x7285e756b08d1d58.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas y
 *   fotografías: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, menú del día ni una carta con unidades. Los platos y precios de
 * esta web son los de la pizarra del local que aparece en las fotos del perfil.
 * La pizarra mezcla importes por unidad y por kilo; la web no los convierte.
 */

export const BUSINESS = {
	name: 'Que Comemos Hoy',
	fullName: 'Que Comemos Hoy',
	shortName: 'Que Comemos Hoy',
	mark: 'QH',
	street: 'C. de Antonio de Leyva, 20',
	district: 'Carabanchel',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28019',
	country: 'ES',
	siteUrl: 'https://que-comemos-hoy.vercel.app',
	geo: { lat: 40.3946437, lng: -3.7158675 },
	featureId: '0xd4227c70077f325:0x7285e756b08d1d58',
	placeId: 'ChIJJfN3AMcnQg0RWB2NsFbnhXI',
	plusCode: '8CGR97VM+VM',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '915 69 77 09',
	phoneHref: 'tel:+34915697709',
	tagline: 'Pollo asado y comida casera para llevar en Carabanchel',
	description:
		'Que Comemos Hoy, en C. de Antonio de Leyva, 20 (Carabanchel, 28019 Madrid). Pollo asado y comida casera para llevar, de martes a domingo, de 10:00 a 15:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Que+Comemos+Hoy/@40.3946437,-3.7158675,17z/data=!3m1!4b1!4m6!3m5!1s0xd4227c70077f325:0x7285e756b08d1d58!8m2!3d40.3946437!4d-3.7158675!16s%2Fg%2F11tctyvz2?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3946437%2C-3.7158675',
	embed: 'https://maps.google.com/maps?q=40.3946437,-3.7158675&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3946437,-3.7158675',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 76,
	label: '4,7',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '10:00–15:30' },
	{ dia: 'Miércoles', horas: '10:00–15:30' },
	{ dia: 'Jueves', horas: '10:00–15:30' },
	{ dia: 'Viernes', horas: '10:00–15:30' },
	{ dia: 'Sábado', horas: '10:00–15:30' },
	{ dia: 'Domingo', horas: '10:00–15:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y la pizarra del local permiten afirmar. */
export const SERVICIOS = [
	'Pollo asado',
	'Comida casera',
	'Para llevar',
	'Guisos',
	'Fritos y empanados',
	'Ensaladas',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado',
		text: 'Es la especialidad de la casa: Google clasifica el local como restaurante especializado en pollo. La pizarra marca 7 € el pollo asado y 4 € el medio, y una reseña lo confirma: «El pollo asado esta buenisimo».',
	},
	{
		title: 'Comida casera',
		text: 'La pizarra llena el mostrador de guisos, fritos, ensaladas y platos de cuchara: albóndigas, ternera en salsa, croquetas, empanada casera, berenjenas rellenas, paella o macarrones, entre otros.',
	},
	{
		title: 'El trato de Belén',
		text: 'Las reseñas se acuerdan de la dueña: «Belén es genial, muy simpática» y «buen trato y servicio de la dueña». La ficha no publica más datos del equipo ni del local.',
	},
	{
		title: 'Precios a la vista',
		text: 'La pizarra expone los precios sin esconderlos: pollo asado 7 €, medio 4 €, postres 2,50 €. Algunos productos se venden al peso y el importe es por kilo, como el redondo de ternera (28 €).',
	},
];

/** Platos y precios que aparecen en la pizarra del local. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{ name: 'Pollo asado', note: 'entero, el plato que da nombre a la casa', price: '7,00 €' },
			{ name: 'Pollo medio', note: 'media unidad, según la pizarra', price: '4,00 €' },
			{ name: 'Pollo relleno', note: 'en la pizarra del local', price: '24,00 €' },
			{ name: 'Pollo al ajillo', note: 'en la pizarra del local', price: '12,50 €' },
		],
	},
	{
		title: 'Guisos y carnes',
		items: [
			{ name: 'Albóndigas', note: 'en la pizarra, junto a la ternera en salsa', price: '15,75 €' },
			{ name: 'Ternera en salsa', note: 'uno de los guisos de la pizarra', price: '19,50 €' },
			{ name: 'Redondo de ternera', note: 'precio por kilo en la pizarra', price: '28,00 €' },
			{ name: 'Pastel de carne', note: 'en la pizarra del local', price: '14,50 €' },
			{ name: 'Berenjenas rellenas', note: 'en la pizarra del local', price: '14,50 €' },
			{ name: 'Lasaña', note: 'en la pizarra del local', price: '14,50 €' },
			{ name: 'Bacalao con tomate', note: 'en la pizarra del local', price: '30,00 €' },
		],
	},
	{
		title: 'Fritos y ensaladas',
		items: [
			{ name: 'Croquetas', note: 'en la pizarra del local', price: '13,75 €' },
			{ name: 'Empanada casera', note: 'en la pizarra del local', price: '14,50 €' },
			{ name: 'Empanadillas', note: 'en la pizarra del local', price: '16,50 €' },
			{ name: 'San Jacobos', note: 'en la pizarra del local', price: '18,00 €' },
			{ name: 'Boquerones fritos', note: 'en la pizarra del local', price: '18,00 €' },
			{ name: 'Ensalada rusa', note: 'en la pizarra de las ensaladas', price: '13,75 €' },
			{ name: 'Ensalada campera', note: 'en la pizarra de las ensaladas', price: '12,75 €' },
			{ name: 'Pimientos asados', note: 'en la pizarra del local', price: '18,00 €' },
		],
	},
	{
		title: 'Arroces, pasta y postres',
		items: [
			{ name: 'Paella', note: 'en la pizarra del local', price: '15,50 €' },
			{ name: 'Macarrones', note: 'en la pizarra del local', price: '12,50 €' },
			{ name: 'Espagueti', note: 'en la pizarra del local', price: '12,50 €' },
			{ name: 'Pisto', note: 'en la pizarra del local', price: '12,75 €' },
			{ name: 'Postres', note: 'el precio que marca la pizarra', price: '2,50 €' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Belén es genial, muy simpática La comida casera, muy rica y a precios contenidos.',
		valor: 5,
	},
	{
		texto: 'El pollo asado esta buenisimo, como todo lo que hacen, super recomendables',
		valor: 5,
	},
	{
		texto: 'Buen trato y servicio de la dueña.',
		valor: 4,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Que Comemos Hoy?',
		a: 'En la calle de Antonio de Leyva, 20, en el distrito de Carabanchel (28019 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de martes a domingo, de 10:00 a 15:30, con el lunes cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cuál es la especialidad?',
		a: 'El pollo asado. Google clasifica el local como restaurante especializado en pollo y una de las reseñas lo deja claro: «El pollo asado esta buenisimo, como todo lo que hacen». La pizarra marca 7 € el pollo entero y 4 € el medio.',
	},
	{
		q: '¿Qué más se puede pedir?',
		a: 'Comida casera para llevar: albóndigas, ternera en salsa, pastel de carne, berenjenas rellenas, lasaña, bacalao con tomate, croquetas, empanada casera, empanadillas, boquerones fritos, ensaladas, paella, macarrones y postres, entre otros platos de la pizarra.',
	},
	{
		q: '¿Los precios son por ración o por kilo?',
		a: 'La pizarra mezcla las dos cosas: el pollo asado son 7 € y el medio 4 €, mientras que el redondo de ternera marca 28 € por kilo y el magro de cerdo 19,50 € por kilo. En el resto de platos el cartel no aclara la unidad, así que conviene preguntar al pedir.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha de Google no publica menú del día y la pizarra que aparece en las fotos no lo anuncia. Lo que hay es una carta de platos caseros y pollo asado para llevar; el menú del día, si existe, se consulta en el local o por teléfono.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 915 69 77 09. No consta página web propia, red social, aplicación ni sistema de pedidos online.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica un acceso adaptado y marca expresamente que no hay aparcamiento ni asientos adaptados para sillas de ruedas. Conviene llamar antes si necesitas acceso para silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 76 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el pollo asado, la comida casera, los precios y el trato de la dueña.',
	},
];
