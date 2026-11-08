/**
 * Datos de Comidas Para Llevar Como en casa — C. Asilo de San Diego, 1,
 * 30800 Lorca (Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Comidas Para Llevar Como en casa»,
 *   37.6806562,-1.6880528, feature 0xd64e63a88fe5cc5:0x4a0eaf2f9a6628ed.
 * - Nombre, dirección, categoría, teléfono, valoración, horario y reseñas:
 *   ficha pública de Google consultada en noviembre de 2026.
 * - Platos y precios: pizarra del local que aparece en las fotos del perfil.
 *   El rótulo de la fachada reza «Pollos asados · pan · Paqui · Comidas».
 *
 * Lo que no se publica: la ficha no enlaza web propia ni redes sociales, no
 * ofrece carta completa fuera de la pizarra fotografiada, no publica reparto a
 * domicilio y en accesibilidad solo declara que no hay asientos adaptados.
 * Los precios de la pizarra son de la fecha que figura en ella y pueden haber
 * cambiado: la página lo advierte y remite al teléfono.
 */

export const BUSINESS = {
	name: 'Comidas Para Llevar Como en casa',
	fullName: 'Comidas Para Llevar Como en casa',
	shortName: 'Como en casa',
	mark: 'CE',
	street: 'C. Asilo de San Diego, 1',
	district: 'Lorca',
	city: 'Lorca',
	region: 'Región de Murcia',
	postalCode: '30800',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/comidas-para-llevar-como-en-casa',
	geo: { lat: 37.6806562, lng: -1.6880528 },
	featureId: '0xd64e63a88fe5cc5:0x4a0eaf2f9a6628ed',
	placeId: 'ChIJxVz-iDrmZA0R7Shmmi-vDko',
	plusCode: '8C9WM8J6+7Q',
	googleCategory: 'Restaurante',
	phone: '618 59 33 34',
	phoneHref: 'tel:+34618593334',
	tagline: 'Pollos asados y comida para llevar en Lorca',
	description:
		'Comidas Para Llevar Como en casa, en C. Asilo de San Diego, 1 (30800 Lorca). Pollos asados, pan y comida casera para llevar de martes a sábado, de 8:00 a 18:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Comidas+Para+Llevar+Como+en+casa/@37.6806562,-1.6880528,17z/data=!4m6!3m5!1s0xd64e63a88fe5cc5:0x4a0eaf2f9a6628ed!8m2!3d37.6806562!4d-1.6880528!16s%2Fg%2F11bwcydqvl?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.6806562%2C-1.6880528',
	embed: 'https://maps.google.com/maps?q=37.6806562,-1.6880528&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.6806562,-1.6880528',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.6,
	count: 178,
	label: '4,6',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '8:00–18:00' },
	{ dia: 'Miércoles', horas: '8:00–18:00' },
	{ dia: 'Jueves', horas: '8:00–18:00' },
	{ dia: 'Viernes', horas: '8:00–18:00' },
	{ dia: 'Sábado', horas: '8:00–18:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente, aunque ese día figura cerrado. El horario puede cambiar sin previo aviso; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, el rótulo y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Pollos asados',
	'Pan',
	'Cocina casera',
	'Raciones',
	'Solo recogida en el local',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollos asados y pan',
		text: 'El rótulo de la fachada lo anuncia sin rodeos: «Pollos asados · pan · Paqui · Comidas». El asador se ve al fondo del mostrador y el pollo asado figura en la pizarra a 9 €.',
	},
	{
		title: 'Pizarra del día',
		text: 'Cada jornada se escribe lo que hay: arroz de costillejas, cocido, tallarines, migas, pisto, macarrones, carnes en salsa, pescado y guisos. Los precios de esta página son los de la pizarra fotografiada en el perfil.',
	},
	{
		title: 'Raciones grandes',
		text: 'Una reseña lo resume así: «Comida exquisita a un precio muy bueno y grandes raciones». La mayoría de los platos de la pizarra cuestan entre 3 y 4,50 €.',
	},
	{
		title: 'El arroz, su especialidad',
		text: 'Otra opinión destaca el arroz: «Uno de los platos que mejor les sale, el arroz en cualquiera de sus variedades». En las fotos hay arroz de costillejas y paellas recién hechas.',
	},
];

/** Platos y precios de la pizarra del local que aparece en las fotos. */
export const MENU = [
	{
		title: 'Del día, en la pizarra',
		items: [
			{ name: 'Arroz de costillejas', note: 'pizarra del local', price: '3,50 €' },
			{ name: 'Cocido', note: 'la pizarra marcaba 3,60 € y lo dejaba en 3,50 €', price: '3,50 €' },
			{ name: 'Tallarines', note: 'pizarra del local', price: '3 €' },
			{ name: 'Migas', note: 'pizarra del local', price: '3,50 €' },
			{ name: 'Pisto', note: 'pizarra del local', price: '3,50 €' },
			{ name: 'Macarrones', note: 'pizarra del local', price: '3 €' },
			{ name: 'Patatas a lo pobre', note: 'pizarra del local', price: '3 €' },
			{ name: 'Brócoli gratinado', note: 'pizarra del local', price: '3,50 €' },
			{ name: 'Sangre frita', note: 'pizarra del local', price: '3,50 €' },
		],
	},
	{
		title: 'Carnes, pescados y asador',
		items: [
			{ name: 'Pollo asado', note: 'del asador, como anuncia el rótulo', price: '9 €' },
			{ name: 'Conejo al ajillo', note: 'pizarra del local', price: '4 €' },
			{ name: 'Ternera en salsa', note: 'pizarra del local', price: '4 €' },
			{ name: 'Magra al vino', note: 'pizarra del local', price: '3 €' },
			{ name: 'Pollo a la cerveza', note: 'pizarra del local', price: '3,50 €' },
			{ name: 'Merluza con tomate', note: 'pizarra del local', price: '4 €' },
			{ name: 'Merluza empanada', note: 'pizarra del local', price: '3,50 €' },
			{ name: 'Boquerón frito', note: 'pizarra del local', price: '3,50 €' },
			{ name: 'Pechuga empanada', note: 'pizarra del local', price: '3 €' },
			{ name: 'Calamares', note: 'pizarra del local', price: '4,50 €' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Croquetas', note: 'pizarra del local', price: '3,50 €' },
			{ name: 'Fingers', note: 'pizarra del local', price: '3 €' },
			{ name: 'Pollo empanado', note: 'en las bandejas del mostrador' },
			{ name: 'Huevos fritos', note: 'en las bandejas del mostrador' },
			{ name: 'Ensaladas envasadas', note: 'en la vitrina' },
			{ name: 'Pan', note: 'el rótulo de la fachada lo anuncia con las comidas' },
		],
	},
	{
		title: 'Postres de la vitrina',
		items: [
			{ name: 'Tarta de queso', note: 'al horno y con mermelada de fresa, en la vitrina' },
			{ name: 'Tarta de chocolate', note: 'en la vitrina' },
			{ name: 'Flan', note: 'en tarrinas, en la vitrina' },
			{ name: 'Natillas', note: 'en tarrinas, en la vitrina' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Comida exquisita a un precio muy bueno y grandes raciones.',
		valor: 5,
	},
	{
		texto: 'Uno de los platos que mejor les sale, el arroz en cualquiera de sus variedades.',
		valor: 4,
	},
	{
		texto: 'El único problema es que suele haber mucha gente y hay que hacer bastante cola.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Comidas Para Llevar Como en casa?',
		a: 'En la calle Asilo de San Diego, 1, en Lorca (30800 Murcia), en la esquina con la calle donde está el rótulo de «Paqui · Comidas». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a sábado, de 8:00 a 18:00. Los lunes y los domingos figura cerrado. El horario puede cambiar en festivos: llama antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Lo que se escribe cada día en la pizarra. En la pizarra fotografiada en el perfil aparecen arroz de costillejas, cocido, tallarines, migas, pisto, macarrones, patatas a lo pobre, brócoli gratinado, sangre frita, conejo al ajillo, ternera en salsa, magra al vino, pollo a la cerveza, merluza con tomate, merluza empanada, boquerón frito, pechuga empanada, calamares, croquetas y fingers.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La mayoría de los platos de la pizarra van de 3 a 4,50 €; el pollo asado figura a 9 €. Son los precios de la pizarra que aparece en las fotos del perfil y pueden haber cambiado: confírmalos al llamar.',
	},
	{
		q: '¿Hacen pollos asados?',
		a: 'Sí. El rótulo de la fachada anuncia «Pollos asados · pan · Paqui · Comidas» y el asador se ve al fondo del mostrador en las fotos. En la pizarra, el pollo asado cuesta 9 €.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El nombre y la ficha lo presentan como comida para llevar, y no consta servicio de mesa ni terraza. La ficha tampoco publica datos de accesibilidad salvo que no hay asientos adaptados para sillas de ruedas.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono, en el 618 59 33 34, y se recoge en el local. La ficha no enlaza ninguna tienda online ni plataforma de reparto, así que esta página no tramita pedidos.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Ni la ficha de Google ni las fotos del perfil publican reparto a domicilio, zona de reparto ni pedido mínimo. Lo que sí aparece es el teléfono y la dirección. Pregunta al llamar si necesitas entrega.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'En una de las fotos del local se lee un cartel que avisa de que no se aceptan pagos con tarjeta por cantidades inferiores a 10 €. Es la única información pública sobre el pago: confirma el resto al hacer el pedido.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo declara que no hay asientos adaptados para sillas de ruedas y no publica más datos de accesibilidad. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 178 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones destacadas elogian la comida, el precio y las raciones, y avisan de que suele haber cola.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web propia ni perfiles sociales del negocio. Toda la información de esta página procede de esa ficha pública y de las fotos de su perfil.',
	},
];
