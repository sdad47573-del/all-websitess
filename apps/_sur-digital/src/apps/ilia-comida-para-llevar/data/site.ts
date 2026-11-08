/**
 * Datos de ILIA comida para llevar — Calle Aragón, 11, 03300 Orihuela (Alicante).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «ILIA COMIDA PARA LLEVAR», 38.0816933,-0.949617,
 *   feature 0xd63999b06a191fd:0x838f74f614455f63.
 * - Nombre, dirección, teléfono, categoría, valoración, horario y reseñas: ficha
 *   pública de Google consultada el 1 de noviembre de 2026. La ficha no enlaza
 *   una web propia ni publica carta ni precios.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs).
 */

export const BUSINESS = {
	name: 'ILIA Comida para Llevar',
	fullName: 'ILIA COMIDA PARA LLEVAR',
	shortName: 'ILIA',
	mark: 'IL',
	street: 'Calle Aragón, 11',
	district: 'Orihuela',
	city: 'Orihuela',
	region: 'Comunidad Valenciana',
	postalCode: '03300',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/ilia-comida-para-llevar',
	geo: { lat: 38.0816933, lng: -0.949617 },
	featureId: '0xd63999b06a191fd:0x838f74f614455f63',
	placeId: 'ChIJ_ZGhBpuZYw0RY19FFPZ0j4M',
	plusCode: '8CCX33J2+M5',
	googleCategory: 'Restaurante',
	phone: '621 05 49 78',
	phoneHref: 'tel:+34621054978',
	tagline: 'Cocina casera y postres caseros para llevar en Orihuela',
	description:
		'ILIA Comida para Llevar, en la Calle Aragón, 11 (03300 Orihuela, Alicante). Cocina casera en táper —arroces, guisos y lentejas—, postres caseros y tartas personalizadas. De miércoles a domingo, de 10:00 a 15:30; el martes cierra.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/ILIA+COMIDA+PARA+LLEVAR/@38.0816933,-0.949617,17z/data=!3m1!4b1!4m6!3m5!1s0xd63999b06a191fd:0x838f74f614455f63!8m2!3d38.0816933!4d-0.949617!16s%2Fg%2F11vdw4c9kv?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.0816933%2C-0.949617',
	embed: 'https://maps.google.com/maps?q=38.0816933,-0.949617&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.0816933,-0.949617',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 5,
	count: 86,
	label: '5,0',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–15:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '10:00–15:30' },
	{ dia: 'Jueves', horas: '10:00–15:30' },
	{ dia: 'Viernes', horas: '10:00–15:30' },
	{ dia: 'Sábado', horas: '10:00–15:30' },
	{ dia: 'Domingo', horas: '10:00–15:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. Se sirve solo a mediodía: si vas a última hora, llama antes por si se ha acabado algo.';

/** Lo que la ficha, las reseñas y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Comida para llevar',
	'Arroces',
	'Guisos de cuchara',
	'Postres caseros',
	'Tartas personalizadas',
];

export const HIGHLIGHTS = [
	{
		title: '5,0 sobre 5 con 86 reseñas',
		text: 'No es habitual una media perfecta con tantas opiniones: la ficha de Google le da 5,0 sobre 5 con 86 reseñas (noviembre de 2026). Las que se ven hablan del cariño en cada plato, de los ingredientes y de los postres.',
	},
	{
		title: 'Cocina de cuchara',
		text: 'Una reseña lo cuenta sin adornos: «ricos los tallarines con trufa y ricas las lentejas con chorizo». Son los guisos de casa que se ven en las tarrinas del expositor y en las fotos del perfil.',
	},
	{
		title: 'Postres que se recuerdan',
		text: 'Otra reseña lo remata: «los postres INCREÍBLES». En las fotos aparecen una tarta de queso cubierta de chocolate blanco y Kinder y tartas personalizadas con nombre, del tipo que se encargan para un cumpleaños.',
	},
	{
		title: 'Arroces para llevar',
		text: 'En el perfil hay paellas grandes en su paellera y tarrinas de arroz amarillo con carne. Se preparan para llevar, así que conviene encargarlos con tiempo si es para un grupo.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{ texto: 'Ricos los tallarines con trufa y ricas las lentejas con chorizo.' },
	{ texto: 'Se nota el cariño en cada plato, ingredientes de primera y sabor inigualable.' },
	{ texto: 'Súper bien de precio, muy buenas raciones… ¡los postres increíbles!' },
];

/**
 * Lo que se puede contar sin carta publicada: lo que citan las reseñas y los
 * platos que se reconocen en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Arroces y guisos',
		items: [
			{ name: 'Arroz amarillo con carne', note: 'en tarrina de aluminio, como en las fotos' },
			{ name: 'Lentejas con chorizo', note: '«ricas», según una reseña de la ficha' },
			{ name: 'Tallarines con trufa', note: '«ricos», según la misma reseña' },
			{ name: 'Paella', note: 'en paellera grande, para encargar' },
		],
	},
	{
		title: 'En el expositor',
		items: [
			{ name: 'Tápers del día', note: 'platos preparados listos para llevar' },
			{ name: 'Raciones', note: '«muy buenas raciones», según las reseñas' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Tarta de queso con Kinder', note: 'cubierta de chocolate blanco y trozos de Kinder' },
			{ name: 'Tartas personalizadas', note: 'con nombre y decoración, para cumpleaños' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está ILIA comida para llevar?',
		a: 'En la Calle Aragón, 11, 03300 Orihuela (Alicante). La ficha de Google sitúa el local en las coordenadas 38.0816933, -0.949617. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 10:00 a 15:30 de lunes a domingo, con el martes cerrado. Solo se sirve a mediodía: no hay turno de noche. El día que se consultó la ficha Google advertía de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Cocina casera para llevar: arroces (hay arroz amarillo con carne y paellas en las fotos), guisos de cuchara como las lentejas con chorizo y los tallarines con trufa que citan las reseñas, y postres caseros. No hay carta con todos los platos ni precios publicados.',
	},
	{
		q: '¿Hacen tartas por encargo?',
		a: 'En las fotos del perfil aparece una tarta personalizada con nombre y decoración de cumpleaños, y otra de queso con chocolate blanco y Kinder. Lo que no publica la ficha es un catálogo ni un plazo de encargo, así que hay que preguntar por teléfono.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Es un local de comida para llevar: dentro hay un expositor con los tápers y una zona de espera con pufs y plantas, pero no consta servicio de mesa. La ficha lo clasifica solo como «restaurante», sin bar ni comedor.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'La ficha no lo anuncia ni enlaza ninguna plataforma de entrega, así que no se puede afirmar. El pedido se recoge en la Calle Aragón, 11. Si necesitas reparto, pregúntalo al llamar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Ni la ficha ni las fotos publican precios. Las reseñas hablan de «súper bien de precio» y de «muy buenas raciones», pero el importe del táper, del arroz o de la tarta solo se sabe preguntando.',
	},
	{
		q: '¿Tiene web propia o pedidos online?',
		a: 'No. La ficha de Google no enlaza ninguna página web del establecimiento. Esta página es informativa: reúne los datos y las fotos públicas del local. Los pedidos se hacen por teléfono, en el 621 05 49 78, o en el propio mostrador.',
	},
];
