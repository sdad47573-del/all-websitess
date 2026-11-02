/**
 * Datos de La Cocina Del Hogar — C. Morería, 19, 13002 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «La Cocina Del Hogar»,
 *   38.9860163,-3.9328581, feature 0xd6bc3003d93cc1f:0xb02f967d4684cc0a.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, descripción del
 *   negocio y reseñas: ficha pública de Google consultada en noviembre de 2026.
 *
 * Descripción del propio negocio (texto de Google): «Establecimiento de comida
 * casera para llevar, pollos asados, arroces y migas por encargo...».
 *
 * Lo que no se publica: la ficha no enlaza web propia ni redes sociales, no
 * tiene carta con precios, no detalla las formas de pago ni los datos de
 * accesibilidad. Los platos salen de la descripción del negocio y de las
 * reseñas; no hay importes que mostrar sin inventarlos.
 */

export const BUSINESS = {
	name: 'La Cocina Del Hogar',
	fullName: 'La Cocina Del Hogar',
	shortName: 'La Cocina Del Hogar',
	mark: 'CH',
	street: 'C. Morería, 19',
	district: 'Ciudad Real',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13002',
	country: 'ES',
	siteUrl: 'https://la-cocina-del-hogar.vercel.app',
	geo: { lat: 38.9860163, lng: -3.9328581 },
	featureId: '0xd6bc3003d93cc1f:0xb02f967d4684cc0a',
	placeId: 'ChIJH8yTPQDDaw0RCsyERn2WL7A',
	plusCode: '8CCRX3P8+CV',
	googleCategory: 'Comida a domicilio',
	phone: '926 72 16 60',
	phoneHref: 'tel:+34926721660',
	tagline: 'Comida casera, pollos asados y arroces en Ciudad Real',
	description:
		'La Cocina Del Hogar, en C. Morería, 19 (13002 Ciudad Real). Comida casera para llevar, pollos asados, arroces y migas por encargo. De 12:00 a 15:30.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/La+Cocina+Del+Hogar/@38.9860163,-3.9328581,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3003d93cc1f:0xb02f967d4684cc0a!8m2!3d38.9860163!4d-3.9328581!16s%2Fg%2F11z1tdygb6?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9860163%2C-3.9328581',
	embed: 'https://maps.google.com/maps?q=38.9860163,-3.9328581&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9860163,-3.9328581',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.8,
	count: 65,
	label: '4,8',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–15:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:00–15:30' },
	{ dia: 'Jueves', horas: '12:00–15:30' },
	{ dia: 'Viernes', horas: '12:00–15:30' },
	{ dia: 'Sábado', horas: '12:00–15:30' },
	{ dia: 'Domingo', horas: '12:00–15:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, su descripción y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Comida para llevar',
	'Pollos asados',
	'Arroces',
	'Migas por encargo',
	'Comida a domicilio',
];

export const HIGHLIGHTS = [
	{
		title: 'Menú del día a 9,90 €',
		text: 'El cartel de la casa lo anuncia así: dos platos con postre a elegir por 9,90 €. El de la imagen es el del 26 de octubre: garbanzos con sepia, patatas con carne, macarrones con chorizo y jamón, tortilla de calabacín, merluza en salsa y alitas de pollo al ajillo, entre otros.',
	},
	{
		title: 'Pollo asado con patatas',
		text: 'El otro pilar del local. El mismo cartel lo marca a 12 € el pollo entero con patatas y a 7,50 € el medio pollo. La pizarra de la puerta pide «reservar tu pollo asado»: conviene llamar antes.',
	},
	{
		title: 'Migas y arroces por encargo',
		text: 'La ficha describe el negocio como «comida casera para llevar, pollos asados, arroces y migas por encargo». Las migas no salen todos los días, así que hay que pedirlas con antelación. En la foto del perfil aparecen en su bandeja, con chorizo y pimiento verde.',
	},
	{
		title: 'Postres caseros',
		text: 'La pizarra de «MENÚ HOY» termina con un «¡POSTRES CASEROS!» y el menú del día incluye postre a elegir. En las fotos del perfil se ven tartas recién horneadas en sus moldes y un bizcocho con glaseado blanco y canela.',
	},
];

/**
 * Carta construida con el cartel promocional del propio negocio y la pizarra
 * de la entrada. Los importes son los que aparecen impresos en ese cartel y
 * pueden cambiar: se advierte en la página.
 */
export const MENU = [
	{
		title: 'Menú del día',
		items: [
			{
				name: 'Dos platos con postre a elegir',
				note: '9,90 € según el cartel del local',
			},
			{ name: 'Garbanzos con sepia', note: 'en el menú del 26 de octubre' },
			{ name: 'Patatas con carne', note: 'en el menú del 26 de octubre' },
			{ name: 'Macarrones con chorizo y jamón', note: 'en el menú del 26 de octubre' },
			{ name: 'Tortilla de calabacín', note: 'en el menú del 26 de octubre' },
			{ name: 'Huevos turcos', note: 'en el menú del 26 de octubre' },
			{ name: 'Magro con tomate', note: 'en el menú del 26 de octubre' },
			{ name: 'Merluza en salsa', note: 'en el menú del 26 de octubre' },
			{ name: 'Alitas de pollo al ajillo', note: 'en el menú del 26 de octubre' },
		],
	},
	{
		title: 'Pollos asados',
		items: [
			{ name: 'Pollo asado con patatas', note: '12 € según el cartel del local' },
			{ name: 'Medio pollo con patatas', note: '7,50 € según el cartel del local' },
			{ name: 'Pollo al ajillo', note: 'en la pizarra de «MENÚ HOY» de la entrada' },
			{ name: 'Alitas de pollo al ajillo', note: 'en el menú del 26 de octubre' },
		],
	},
	{
		title: 'Por encargo',
		items: [
			{ name: 'Migas', note: 'por encargo, según la descripción de la propia ficha' },
			{ name: 'Arroces', note: 'por encargo; en las fotos aparece una paella mixta' },
			{ name: 'Paella mixta', note: 'en la pizarra de «MENÚ HOY» de la entrada' },
			{ name: 'Bacalao a la plancha', note: 'en la misma pizarra' },
			{ name: 'Secreto a la jardinera', note: 'en la misma pizarra' },
			{ name: 'Revuelto de champiñones', note: 'en la misma pizarra' },
			{ name: 'Gazpacho y ensalada mixta', note: 'en la misma pizarra' },
		],
	},
	{
		title: 'Dulces y cómo pedir',
		items: [
			{ name: 'Postres caseros', note: 'la pizarra los anuncia y el menú incluye uno a elegir' },
			{ name: 'Tortilla de patata y croquetas', note: 'en las fotos del perfil, listas para llevar' },
			{ name: 'Por teléfono', note: `llama al ${BUSINESS.phone} para el menú del día y los encargos` },
			{ name: 'Recogida en el local', note: 'C. Morería, 19, de 12:00 a 15:30' },
			{ name: 'A domicilio', note: 'la ficha incluye la categoría «comida a domicilio»; pregunta zona y condiciones' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Excelente trato y comida casera buenísima y económica',
		valor: 5,
	},
	{
		texto: 'La comida estaba deliciosa, bien presentada y con raciones generosas.',
		valor: 5,
	},
	{
		texto: 'Muy recomendable cocina tradicional y muy rica y las cocineras las mejores',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Cocina Del Hogar?',
		a: 'En la calle Morería, 19, en Ciudad Real (13002). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De 12:00 a 15:30, de lunes y de miércoles a domingo. El martes figura cerrado. En festivos puede cambiar: llama antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Comida casera para llevar: menú del día con dos platos y postre, pollo asado con patatas, arroces, migas por encargo y platos de pizarra como gazpacho, paella mixta, bacalao a la plancha o secreto a la jardinera. El menú cambia cada día; se consulta en el 926 72 16 60.',
	},
	{
		q: '¿Cuánto cuesta el menú del día?',
		a: 'El cartel promocional del local marca 9,90 € por dos platos con postre a elegir. El mismo cartel pone el pollo asado con patatas a 12 € y el medio pollo a 7,50 €. Son los importes impresos en esa imagen y pueden cambiar: confírmalos al llamar.',
	},
	{
		q: '¿Hay que encargar las migas?',
		a: 'Sí. El propio local las anuncia «por encargo», así que no están disponibles sin avisar. Llama al 926 72 16 60 con antelación si las quieres.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha la clasifica como comida a domicilio y el negocio se presenta como establecimiento de comida casera para llevar. No publica si hay mesas ni datos de accesibilidad: si quieres sentarte, confírmalo al llamar.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La ficha incluye la categoría «comida a domicilio» y el cartel del local invita a disfrutar la comida «en casa», así que el reparto consta como opción. No se publica zona de reparto, horario de entrega ni pedido mínimo: pregúntalo al llamar. Esta página no tramita pedidos.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha no publica las formas de pago del local. Pregúntalo al hacer el pedido por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica ningún dato de accesibilidad: ni acceso adaptado, ni aseos, ni aparcamiento. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,8 sobre 5 con 65 reseñas en el momento de consultarla (noviembre de 2026). Las tres opiniones que destaca elogian el trato, la cocina tradicional, la presentación y el tamaño de las raciones.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web propia ni perfiles sociales del negocio; solo aporta una descripción escrita por el propio local. Toda la información de esta página procede de esa ficha pública y de las fotos de su perfil.',
	},
];
