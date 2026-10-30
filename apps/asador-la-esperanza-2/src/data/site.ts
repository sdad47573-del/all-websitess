/**
 * Datos de Asador la Esperanza 2 - Los Corazones — Barrio de los Corazones,
 * C. Corregidor Francisco de Molina, 7, Cruz de Humilladero, 29006 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: Asador la Esperanza 2 - Los Corazones,
 *   36.7128924,-4.4501864, feature 0xd72f76e4f0b5739:0xb6a6f47744fa20ab
 *   (nombre, dirección, categorías, horario, teléfono, nota, reseñas y
 *   accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica carta
 * con precios. No se dan cifras ni se prometen servicios que no consten.
 */

export const BUSINESS = {
	name: 'Asador la Esperanza 2',
	fullName: 'Asador la Esperanza 2 - Los Corazones',
	shortName: 'La Esperanza 2',
	mark: 'E',
	street: 'C. Corregidor Francisco de Molina, 7',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Los Corazones · Cruz de Humilladero',
	postalCode: '29006',
	country: 'ES',
	phone: '+34 952 31 49 33',
	phoneHref: '+34952314933',
	rating: 4.7,
	reviewsCount: 90,
	siteUrl: 'https://asador-la-esperanza-2.vercel.app',
	geo: { lat: 36.7128924, lng: -4.4501864 },
	featureId: '0xd72f76e4f0b5739:0xb6a6f47744fa20ab',
	placeId: 'ChIJOVcLT273cg0RqyD6RHf0prY',
	cid: '13161475754132381867',
	category: 'Restaurante especializado en pollo y parrilla',
	categories: ['Restaurante especializado en pollo', 'Parrilla'],
	tagline: 'Pollo asado y parrilla en Los Corazones',
	description:
		'Asador la Esperanza 2, pollo asado y parrilla en la calle Corregidor Francisco de Molina 7, barrio de los Corazones, Málaga. Abre de miércoles a domingo de 10:30 a 15:30. 4,7 sobre 5 en Google con 90 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+la+Esperanza+2+-+Los+Corazones/@36.7128924,-4.4501864,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f76e4f0b5739:0xb6a6f47744fa20ab!8m2!3d36.7128924!4d-4.4501864!16s%2Fg%2F1hc5867vc',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7128924%2C-4.4501864',
	embed: 'https://maps.google.com/maps?q=36.7128924,-4.4501864&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: miércoles a domingo, de 10:30 a
 * 15:30, en horario continuado. Lunes y martes aparecen cerrados.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '10:30–15:30' },
	{ day: 'Jueves', value: '10:30–15:30' },
	{ day: 'Viernes', value: '10:30–15:30' },
	{ day: 'Sábado', value: '10:30–15:30' },
	{ day: 'Domingo', value: '10:30–15:30' },
];

/**
 * Señales de identidad que sí constan: las categorías de la ficha (pollo y
 * parrilla), el barrio, el horario, el teléfono y el acceso adaptado.
 */
export const SERVICIOS = [
	'Pollo asado',
	'Parrilla',
	'Menú 1 · 5,00 €',
	'10:30–15:30 · miércoles a domingo',
	'Encargos para celebraciones',
	'+34 952 31 49 33',
];

/**
 * La carta está copiada de la pizarra grande del local que se ve en las fotos
 * del perfil: menús 1, 2 y 3, precios de pollo y guarniciones, especiales de
 * cada día y platos combinados. Los precios pueden haber cambiado desde que se
 * hizo la foto; la web pide confirmarlos por teléfono.
 */
export const MENU = [
	{
		title: 'Menús',
		items: [
			{ name: 'Menú 1', note: '½ pollo + patatas + pimientos o berenjenas + una lata', price: '5,00 €' },
			{ name: 'Menú 2', note: '1 pollo + patatas + pimientos o berenjenas + dos latas', price: '10,00 €' },
			{ name: 'Menú 3', note: '1 pollo + patatas + pimientos o berenjenas + ración de ensalada + botella de 2 l', price: '13,00 €' },
			{ name: 'Pollo + patatas', note: 'ración suelta, sin menú', price: '3,75 € / 7,25 €' },
		],
	},
	{
		title: 'Especiales del día',
		items: [
			{ name: 'Paella de arroz', note: 'todos los martes y domingos' },
			{ name: 'Estofado de ternera', note: 'todos los jueves' },
			{ name: 'Callos', note: 'todos los sábados y domingos' },
			{ name: 'Pollo + patatas', note: 'lunes, miércoles y viernes, a 6 €', price: '6,00 €' },
		],
	},
	{
		title: 'Pollo y guarniciones',
		items: [
			{ name: 'Pollo asado', note: 'el plato que repiten las reseñas' },
			{ name: 'Patatas', note: 'ración o media ración', price: '1,50 € / 2,50 €' },
			{ name: 'Pimientos o berenjenas', note: 'la guarnición del menú', price: '1,50 € / 2,50 €' },
			{ name: 'Croquetas', note: 'ración de la vitrina', price: '2,00 € / 3,20 €' },
			{ name: 'Ensaladilla rusa, salsa rosa o ensalada malagueña', note: 'las ensaladas de la pizarra', price: '2,00 € / 3,20 €' },
			{ name: 'Filetes de pollo empanado o tortilla de patatas', note: 'ración o unidad', price: '1,00 € / 3,50 €' },
		],
	},
	{
		title: 'Platos combinados',
		items: [
			{ name: 'Filete de pollo empanado con patatas', note: 'de la lista de combinados' },
			{ name: 'Flamenquín de cerdo, jamón serrano y queso con patatas', note: 'el combinado de la casa' },
			{ name: 'Lomo, patatas y huevo / patatas, pimientos y huevo', note: 'los combinados clásicos' },
			{ name: 'Carne mechada, albóndigas, alitas o nuggets con patatas', note: 'opciones de la pizarra' },
			{ name: 'Rosada, calamares o san jacobo con patatas', note: 'pescado y rebozados' },
			{ name: 'Encargos para celebraciones', note: 'bautizos, comuniones y cumpleaños; se piden por teléfono' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador la Esperanza 2?',
		a: 'En la calle Corregidor Francisco de Molina 7, en el barrio de los Corazones, Cruz de Humilladero, 29006 Málaga. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de miércoles a domingo, de 10:30 a 15:30, en horario continuado. Lunes y martes está cerrado. La ficha de Google avisa de que en festivos puede cambiar, así que conviene llamar antes.',
	},
	{
		q: '¿Se puede cenar?',
		a: 'No, según la ficha: el único horario publicado es de 10:30 a 15:30, de miércoles a domingo. Para una cena, busca otra opción o llama para confirmar que no haya cambiado.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado, patatas, pimientos o berenjenas, croquetas y ensaladas, además de platos combinados y guisos. La casa tiene especiales por día: paella los martes y domingos, estofado de ternera los jueves y callos los sábados y domingos. Las reseñas destacan el pollo asado, las patatas con pimientos, la atención y los precios ajustados.',
	},
	{
		q: '¿Cuánto cuesta el menú?',
		a: 'La pizarra del local marca el Menú 1 a 5,00 € (½ pollo, patatas, pimientos o berenjenas y una lata), el Menú 2 a 10,00 € (1 pollo y dos latas) y el Menú 3 a 13,00 € (con ración de ensalada y botella de 2 l). Son precios de la pizarra fotografiada y pueden haber cambiado.',
	},
	{
		q: '¿Hacen encargos para celebraciones?',
		a: 'Sí. La pizarra anuncia encargos para bautizos, comuniones, cumpleaños y todo tipo de celebraciones. Se piden por teléfono y se recogen en el local.',
	},
	{
		q: '¿Hay que reservar?',
		a: `La ficha no publica un sistema de reservas ni una web propia. El canal que sí consta es el teléfono ${BUSINESS.phone}; llama para mesa o para encargar pollo.`,
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no asientos adaptados ni aparcamiento adaptado. Si necesitas una condición concreta, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 90 reseñas en Google, según la ficha consultada.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del asador y ofrece la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
];
