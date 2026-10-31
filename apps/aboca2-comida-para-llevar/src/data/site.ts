/**
 * Datos de Aboca2 - Comida para llevar — Carretera de Loeches, 13,
 * 28850 Torrejón de Ardoz (Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Aboca2 - Comida para llevar»,
 *   40.4530318,-3.4727163, feature 0xd42379361a89cc5:0x22ee5c176d0c8d3f.
 * - Nombre, dirección, teléfono, descripción, valoración, horario, reseñas y
 *   datos de accesibilidad: ficha pública de Google consultada el 31 de
 *   octubre de 2026.
 * - La ficha no enlaza una web propia ni publica carta ni precios.
 *
 * Google registra la dirección como «Carr. de Loeches, 13»; aquí se usa la
 * forma desarrollada «Carretera de Loeches, 13».
 */

export const BUSINESS = {
	name: 'Aboca2',
	fullName: 'Aboca2 - Comida para llevar',
	shortName: 'Aboca2',
	mark: 'A2',
	street: 'Carretera de Loeches, 13',
	district: 'Torrejón de Ardoz',
	city: 'Torrejón de Ardoz',
	region: 'Comunidad de Madrid',
	postalCode: '28850',
	country: 'ES',
	siteUrl: 'https://aboca2-comida-para-llevar.vercel.app',
	geo: { lat: 40.4530318, lng: -3.4727163 },
	featureId: '0xd42379361a89cc5:0x22ee5c176d0c8d3f',
	placeId: 'ChIJxZyoYZM3Qg0RP40MbRdc7iI',
	plusCode: '8CGRFG3G+6W',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '910 41 06 26',
	phoneHref: 'tel:+34910410626',
	tagline: 'Comida casera y pollos asados en Torrejón de Ardoz',
	description:
		'Aboca2, en Carretera de Loeches, 13 (28850 Torrejón de Ardoz, Madrid). Comida casera tradicional para llevar, especialidad en pollos asados, croquetas, san jacobos, flamenquines y tortillas de patata. Abre de martes a domingo, de 11:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Aboca2+-+Comida+para+llevar/@40.4530318,-3.4727163,17z/data=!3m1!4b1!4m6!3m5!1s0xd42379361a89cc5:0x22ee5c176d0c8d3f!8m2!3d40.4530318!4d-3.4727163!16s%2Fg%2F11pv0h6r2_?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4530318%2C-3.4727163',
	embed: 'https://maps.google.com/maps?q=40.4530318,-3.4727163&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4530318,-3.4727163',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.9,
	count: 121,
	label: '4,9',
};

/** Horario que publica la ficha: de martes a domingo, con el lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '11:00–16:00' },
	{ dia: 'Miércoles', horas: '11:00–16:00' },
	{ dia: 'Jueves', horas: '11:00–16:00' },
	{ dia: 'Viernes', horas: '11:00–16:00' },
	{ dia: 'Sábado', horas: '11:00–16:00' },
	{ dia: 'Domingo', horas: '11:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Comida para llevar',
	'Comida casera',
	'Pollos asados',
	'Tortilla de patata',
	'Croquetas caseras',
	'Flamenquín cordobés',
	'San jacobo granadino',
	'Cachopo',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollos asados',
		text: 'Es la especialidad que anuncia la ficha. Una reseña lo dice sin dudar: «el mejor pollo que he probado». Se venden para llevar, enteros o por piezas, según lo que haya en el mostrador.',
	},
	{
		title: 'Croquetas caseras',
		text: 'Otra opinión las pone a la altura del pollo: «sus croquetas son espectaculares». También aparecen en la descripción del local, junto a los san jacobos y los flamenquines.',
	},
	{
		title: 'Tortilla, cachopo y flamenquín',
		text: 'La fachada anuncia la lista completa: pollo asado, tortilla de patatas, cachopo, croquetas, flamenquín cordobés y san jacobo granadino. Las reseñas añaden que la tortilla está «muy rica».',
	},
	{
		title: 'Precio y trato',
		text: 'Con 121 reseñas, la ficha le da 4,9 sobre 5. Las opiniones repiten el mismo argumento: «comida casera excelente, precios increíbles y sobre todo trato inmejorable».',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'La tortillas muy ricas y las croquetas igual, que es lo que hemos probado.',
		valor: 5,
	},
	{
		texto: 'El mejor pollo que he probado..y sus croquetas son espectaculares..',
		valor: 5,
	},
	{
		texto: 'Comida casera excelente, precios increíbles y sobre todo trato inmejorable.',
		valor: 5,
	},
];

/**
 * Especialidades que publica la ficha. No hay carta ni precios: la ficha solo
 * enumera lo que se cocina en el local.
 */
export const MENU = [
	{
		title: 'La especialidad',
		items: [
			{ name: 'Pollo asado', note: 'la especialidad de la casa' },
			{ name: 'Tortilla de patata', note: 'de las que se piden por ración' },
			{ name: 'Croquetas caseras', note: 'hechas en el local' },
			{ name: 'Flamenquín cordobés', note: 'de la cocina tradicional' },
			{ name: 'San jacobo granadino', note: 'empanado y a la plancha' },
			{ name: 'Cachopo', note: 'de ternera, jamón y queso' },
		],
	},
	{
		title: 'Platos de casa',
		items: [{ name: 'Platos cocinados', note: 'una variedad que cambia cada día' }],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Tarta de queso con Lotus', note: 'vista en las fotos del local' },
			{ name: 'Tarta de queso de pistacho', note: 'vista en las fotos del local' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Aboca2?',
		a: 'En la Carretera de Loeches, 13, 28850 Torrejón de Ardoz (Madrid). Google registra la dirección como «Carr. de Loeches, 13». El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de martes a domingo, de 11:00 a 16:00, con el lunes cerrado. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida casera tradicional para llevar. La ficha y la fachada señalan como especialidades el pollo asado, la tortilla de patata, las croquetas, el flamenquín cordobés, el san jacobo granadino y el cachopo, además de «una gran variedad de platos cocinados como en tu casa». En las fotos también aparecen tartas de queso de Lotus y de pistacho. No publica una carta con todos los platos ni los precios.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 910 41 06 26. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar y el nombre de la ficha lo deja claro: «Comida para llevar». La ficha no anuncia servicio de mesa, terraza ni reservas, así que lo previsible es recoger el pedido.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. Las reseñas hablan de «precios increíbles» y de una relación calidad-precio muy buena, pero la única forma de saber el precio del día es preguntar por teléfono al hacer el pedido.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha indica que el local tiene acceso para sillas de ruedas en la entrada, pero también que no hay aparcamiento adaptado ni asientos adaptados para sillas de ruedas. Si necesitas ayuda para recoger un pedido grande, conviene llamar antes.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha no publica reparto a domicilio ni plataformas de entrega asociadas. Lo que consta es la recogida en el local y el teléfono de contacto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,9 sobre 5 con 121 reseñas en el momento de consultarla (31 de octubre de 2026). Las opiniones elogian el pollo asado, las croquetas, la tortilla, el precio y el trato.',
	},
];
