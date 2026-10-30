/**
 * Datos de Las Columnas - Comida para llevar — C. Conde de Barajas, 6,
 * Casco Antiguo (41002 Sevilla).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps (octubre de 2026): nombre, dirección, categoría,
 *   teléfono, horario y valoración.
 * - Fotografías del perfil público: la carta impresa con precios y las bandejas
 *   del local. La ficha no publica descripción ni reseñas destacadas.
 *
 * Los precios y platos salen de esa carta fotografiada; pueden cambiar, por eso
 * la web invita a confirmarlos por teléfono.
 */

export const BUSINESS = {
	name: 'Las Columnas - Comida para llevar',
	shortName: 'Las Columnas',
	mark: 'LC',
	street: 'C. Conde de Barajas, 6',
	district: 'Casco Antiguo',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41002',
	country: 'ES',
	siteUrl: 'https://las-columnas.vercel.app',
	geo: { lat: 37.3966286, lng: -5.9949384 },
	featureId: '0xd126db3ac3581e9:0xd2157ea38160f3c8',
	placeId: 'ChIJ6YE1rLNtEg0RyPNggaN-FdI',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '955 95 26 14',
	phoneHref: 'tel:+34955952614',
	secondaryPhone: '694 455 234',
	secondaryPhoneHref: 'tel:+34694455234',
	tagline: 'Comida para llevar y pollo asado en el Casco Antiguo de Sevilla',
	description:
		'Las Columnas, comida para llevar en C. Conde de Barajas, 6, Casco Antiguo (41002 Sevilla). Pollo asado, guisos de cuchara, ensaladas, tortillas y postres caseros, con precios desde 2,75 €. Abierto todos los días de 9:00 a 22:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Las+Columnas+-+Comida+para+llevar/@37.3966286,-5.9949384,17z/data=!3m1!4b1!4m6!3m5!1s0xd126db3ac3581e9:0xd2157ea38160f3c8!8m2!3d37.3966286!4d-5.9949384!16s%2Fg%2F11zzyk2330',
	cid: 'https://www.google.com/maps?cid=113198872631743913277',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3966286%2C-5.9949384',
	embed: 'https://maps.google.com/maps?q=37.3966286,-5.9949384&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3966286,-5.9949384',
};

/** Red social impresa en la carta del local. */
export const INSTAGRAM = 'https://www.instagram.com/lascolumnasparallevar/';

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.8, count: 21, label: '4,8' };

/** Horario publicado: jornada continua todos los días. */
export const HORARIO = [{ day: 'Lunes a domingo', value: '9:00 – 22:00' }];
export const HORARIO_AVISO =
	'La ficha marca apertura de 9:00 a 22:00 todos los días, sin día de cierre. En festivos el horario puede variar: conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida para llevar',
	'Pollo asado',
	'Guisos de cuchara',
	'Para picar',
	'Postres caseros',
	'Encargos por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo asado',
		text: 'La carta incluye pollo asado entero por 12,00 €, medio pollo por 6,50 € y contramuslo a 4,50 €. También pollo al ajillo y pollo empanado.',
	},
	{
		title: 'Guisos de cuchara',
		text: 'Lentejas, cocido, berza con garbanzos, carrillada, cola de toro o albóndigas: raciones desde 3,95 € para llevar en el mismo día.',
	},
	{
		title: 'Abierto todo el día',
		text: `De 9:00 a 22:00 todos los días, en la esquina de Conde de Barajas con Feria. La ficha muestra ${RATING.label} sobre 5 con ${RATING.count} reseñas.`,
	},
];

/**
 * Carta tomada de las fotografías que el local publica en su ficha de Google.
 * Los precios son los impresos en esa carta y pueden cambiar.
 */
export const MENU = [
	{
		title: 'Pollo asado',
		items: [
			{ name: 'Pollo asado entero', note: 'unidad', price: '12,00 €' },
			{ name: 'Medio pollo asado', note: 'unidad', price: '6,50 €' },
			{ name: 'Contramuslo asado', note: 'unidad', price: '4,50 €' },
			{ name: 'Pollo al ajillo', note: 'unidad', price: '3,50 €' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Ensaladilla rusa', note: 'ración de 1/4', price: '2,75 €' },
			{ name: 'Aliño de melva', note: 'ración de 1/4', price: '3,50 €' },
			{ name: 'Salpicón de marisco', note: 'ración de 1/4', price: '3,80 €' },
			{ name: 'Patatas alioli con langostinos', note: 'ración de 1/4', price: '3,25 €' },
			{ name: 'Cocktail de marisco', note: 'unidad', price: '5,00 €' },
			{ name: 'Salmorejo · Gazpacho', note: '1 litro', price: '4,95 €' },
		],
	},
	{
		title: 'Guisos de cuchara',
		items: [
			{ name: 'Lentejas', note: 'ración', price: '4,50 €' },
			{ name: 'Cocido', note: 'ración', price: '4,50 €' },
			{ name: 'Berza con garbanzos', note: 'ración', price: '4,50 €' },
			{ name: 'Fideos a la cazuela', note: 'ración', price: '4,50 €' },
			{ name: 'Costillas con chícharos o alubias blancas', note: 'ración', price: '4,50 €' },
		],
	},
	{
		title: 'Guisos y varios',
		items: [
			{ name: 'Carrillada', note: 'ración de 1/4', price: '3,95 €' },
			{ name: 'Albóndigas mixtas de cerdo y ternera', note: 'ración de 1/4', price: '5,00 €' },
			{ name: 'Solomillo al whisky, al roquefort o al PX', note: 'ración de 1/4', price: '6,50 €' },
			{ name: 'Cola de toro', note: 'ración de 1/4', price: '5,00 €' },
			{ name: 'Espinacas con garbanzos', note: 'ración de 1/4', price: '3,90 €' },
			{ name: 'Paella de marisco', note: 'ración de 1/4', price: '5,50 €' },
		],
	},
	{
		title: 'Ensaladas y tortillas',
		items: [
			{ name: 'Ensalada mixta', note: 'ración', price: '4,50 €' },
			{ name: 'Ensalada griega', note: 'ración', price: '4,50 €' },
			{ name: 'Tortilla de patatas', note: 'unidad', price: '8,50 €' },
			{ name: 'Tortilla de patatas y cebolla', note: 'unidad', price: '9,00 €' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Arroz con leche', note: 'unidad', price: '3,25 €' },
			{ name: 'Natillas con galletas', note: 'unidad', price: '3,25 €' },
			{ name: 'Tarta de la abuela', note: 'unidad', price: '5,00 €' },
			{ name: 'Tarta de queso', note: 'unidad', price: '5,50 €' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Las Columnas?',
		a: 'En la calle Conde de Barajas, 6, Casco Antiguo, 41002 Sevilla, en la esquina con la calle Feria. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 955 95 26 14. La carta impresa añade otro número para pedidos: 694 455 234.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha marca de 9:00 a 22:00 todos los días, sin día de cierre. En festivos el horario puede cambiar, así que conviene confirmarlo al llamar.',
	},
	{
		q: '¿Cuánto cuesta el pollo asado?',
		a: 'Según la carta que el local publica en la ficha, el pollo asado entero cuesta 12,00 € y el medio pollo 6,50 €. Confirma el precio al encargar, porque la carta puede cambiar.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La carta fotografiada no anuncia menú del día: se pide por platos y raciones, con precios desde 2,75 €. Llama para saber qué guisos hay ese día.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar. La carta habla de pedidos y recogida, no de servicio de mesa.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'La ficha no menciona reparto. Los pedidos se hacen por teléfono y se recogen en el local, en pleno Casco Antiguo.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas. Puedes leer las opiniones actualizadas en Google desde los enlaces de esta página.`,
	},
];
