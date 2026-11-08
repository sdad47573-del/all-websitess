/**
 * Datos de Comidas Caseras para llevar Be&Ro — C. Conde de Halcón, 13 (41008 Sevilla).
 * Ficha pública de Google Maps y pizarra del local consultadas en octubre de 2026.
 *
 * La carta y los precios están tomados de las fotografías de la pizarra que
 * publica el propio establecimiento. Cambian a diario, así que la web los
 * presenta como orientativos y remite al teléfono para encargar.
 */

export const BUSINESS = {
	name: 'Comidas Caseras para llevar Be&Ro',
	shortName: 'Be&Ro',
	mark: 'B&R',
	street: 'C. Conde de Halcón, 13',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41008',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/comidas-caseras-be-ro',
	geo: { lat: 37.40452, lng: -5.9786473 },
	featureId: '0xd12695490066b1d:0xcfad08e174a7c6a2',
	placeId: 'ChIJHWsGkFRpEg0RosandOEIrc8',
	googleCategory: 'Establecimiento de comida preparada',
	phone: '691 98 78 63',
	phoneHref: 'tel:+34691987863',
	tagline: 'Comida casera tradicional para llevar en Sevilla',
	description:
		'Comidas Caseras para llevar Be&Ro, cocina tradicional española en C. Conde de Halcón, 13 (41008 Sevilla). Un guiso distinto cada día, raciones generosas y precios de barrio, para recoger y comer en casa.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Comidas+Caseras+para+llevar+Be%26Ro/@37.40452,-5.9786473,17z/data=!3m1!4b1!4m6!3m5!1s0xd12695490066b1d:0xcfad08e174a7c6a2!8m2!3d37.40452!4d-5.9786473!16s%2Fg%2F11cspjy38j',
	cid: 'https://www.google.com/maps?cid=149655801480322350031',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.40452%2C-5.9786473',
	embed: 'https://maps.google.com/maps?q=37.40452,-5.9786473&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.40452,-5.9786473',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.2, count: 325, label: '4,2' };

/** Horario publicado en la ficha y en el cartel del local. */
export const HORARIO = [
	{ day: 'Lunes', value: '10:00 – 16:00' },
	{ day: 'Martes', value: '10:00 – 15:00' },
	{ day: 'Miércoles', value: '10:00 – 16:00' },
	{ day: 'Jueves', value: '10:00 – 16:00' },
	{ day: 'Viernes', value: '10:00 – 16:00' },
	{ day: 'Sábado', value: '10:00 – 16:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];
export const HORARIO_AVISO =
	'La ficha marca el servicio de 10:00 a 16:00, el martes hasta las 15:00 y cierre los domingos. El cartel del local lo resume en «abrimos todos los días de 10:00 a 16:00». En festivos el horario puede variar, así que conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida casera diaria',
	'Para llevar',
	'Cocina tradicional española',
	'Pollo asado',
	'Hamburguesas y serranitos',
	'Encargos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Un guiso distinto cada día',
		text: 'La pizarra del local lo anuncia así: «todos los días hacemos un guiso diferente». Cocina tradicional española, preparada para el mismo día y servida desde el mostrador.',
	},
	{
		title: 'Precios de barrio',
		text: `Las raciones de 1/4 van de 2,50 a 5,50 € y la tortilla entera de unos 800 g cuesta 8,00 €. Una de las reseñas lo resume: «precios económicos y raciones generosas». La ficha marca ${RATING.label} sobre 5 con ${RATING.count} reseñas.`,
	},
	{
		title: 'Encargos al 691 98 78 63',
		text: 'El cartel pide encargos por teléfono. Para el pollo asado, la paella de los sábados o comida para varios, llama antes y pasa a recoger por la calle Conde de Halcón.',
	},
];

/**
 * Selección de la pizarra del local, con los precios tal como aparecen en las
 * fotografías. Carnes, pescados y aliños se sirven por raciones de 1/4.
 */
export const MENU = [
	{
		title: 'Carnes y guisos',
		items: [
			{ name: 'Albóndigas mixtas', note: 'ración de 1/4', price: '3,75 €' },
			{ name: 'Solomillo al whisky', note: 'con su salsa de ajo y limón', price: '4,75 €' },
			{ name: 'Carrillá de cerdo', note: 'guiso de la casa', price: '5,50 €' },
			{ name: 'Pollo al ajillo', note: 'ración de 1/4', price: '3,75 €' },
			{ name: 'Cola de toro', note: 'ración de 1/4', price: '4,75 €' },
			{ name: 'Conejo en salsa', note: 'ración de 1/4', price: '3,75 €' },
			{ name: 'Sangre encebollada', note: 'ración de 1/4', price: '2,50 €' },
		],
	},
	{
		title: 'Pescados',
		items: [
			{ name: 'Bacalao dorado', note: 'ración de 1/4', price: '4,75 €' },
			{ name: 'Merluza a la marinera', note: 'ración de 1/4', price: '4,35 €' },
			{ name: 'Atún encebollado', note: 'ración de 1/4', price: '5,50 €' },
			{ name: 'Calamares a la riojana', note: 'ración de 1/4', price: '3,75 €' },
			{ name: 'Cazón en amarillo', note: 'ración de 1/4', price: '3,75 €' },
			{ name: 'Albóndigas de choco', note: 'ración de 1/4', price: '4,50 €' },
		],
	},
	{
		title: 'Verduras y aliños',
		items: [
			{ name: 'Espinacas', note: 'ración', price: '2,50 €' },
			{ name: 'Habas con jamón', note: 'ración', price: '2,50 €' },
			{ name: 'Pisto de verduras', note: 'ración', price: '3,25 €' },
			{ name: 'Ensaladilla', note: 'ración de 1/4', price: '3,00 €' },
			{ name: 'Papas aliñadas', note: 'ración de 1/4', price: '2,50 €' },
			{ name: 'Salmorejo', note: 'según mercado', price: 's/m' },
		],
	},
	{
		title: 'Especialidades de la casa',
		items: [
			{ name: 'Pastel de berenjena', note: 'especialidad de la casa', price: '3,75 €' },
			{ name: 'Croquetas caseras', note: 'especialidad de la casa', price: '4,75 €' },
			{ name: 'Tortilla de patatas', note: 'tortilla entera, 800 g aprox.', price: '8,00 €' },
			{ name: 'Pollo asado + patatas fritas', note: 'para recoger', price: '11,80 €' },
			{ name: 'Paella', note: 'solo sábados, plato', price: '4,50 €' },
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{ texto: '«Gran variedad de platos para elegir, precios económicos y raciones generosas.»', valor: 5 },
	{ texto: '«Es todo comida casera tradicional, muy buena calidad y muy buenos precios.»', valor: 5 },
	{ texto: '«No dudes en visitarlos y disfrutar de una deliciosa comida casera.»', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Be&Ro?',
		a: 'En la calle Conde de Halcón, 13, 41008 Sevilla. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cómo se encarga la comida?',
		a: 'El cartel del local pide encargos en el 691 98 78 63. Lo habitual es llamar, encargar y pasar a recoger por el mostrador.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 10:00 a 16:00, el martes hasta las 15:00, y cierra los domingos. En festivos el horario puede cambiar, así que conviene confirmarlo al llamar.',
	},
	{
		q: '¿Qué tipo de comida prepara?',
		a: 'Cocina tradicional española, con un guiso distinto cada día. En la pizarra hay carnes y guisos, pescados, verduras, aliños, tortillas, hamburguesas, serranitos y pollo asado. Los sábados añaden paella.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'Sí: la pizarra del local tiene los platos numerados y sus precios. En esta web reproducimos una selección de esa pizarra; la oferta cambia a diario, así que los precios y los platos disponibles se confirman al llamar.',
	},
	{
		q: '¿Las raciones son individuales?',
		a: 'Las carnes, los pescados y los aliños se venden por raciones de 1/4, como indica la pizarra. Las tortillas son enteras, de unos 800 g, y se pueden pedir con ingredientes extra por 1 € más.',
	},
	{
		q: '¿Hay opciones sin carne?',
		a: 'La pizarra incluye verduras y aliños como pisto, espinacas, habas con jamón, ensaladilla o papas aliñadas. Pregunta por teléfono por las opciones del día y por los ingredientes de cada plato.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, que destacan la variedad, las raciones y los precios.`,
	},
];
