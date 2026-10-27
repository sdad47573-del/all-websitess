/**
 * Datos de Taberna la New — Av. de Gregorio Prieto 19, local 2
 * (Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps facilitada: Taberna la New, 36.7160292,-4.4632347,
 *   feature 0xd72f75569404245:0xda688774cee8fdc0 (nombre, dirección, categoría,
 *   horario, teléfono, nota y reseñas).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la ficha NO publica: web propia, carta ni precios. Muestra la opción
 * «Añadir sitio web», lo que confirma que no hay ninguna publicada. Por eso no
 * hay precios en esta web.
 */

export const BUSINESS = {
	name: 'Taberna la New',
	shortName: 'La New',
	mark: 'LN',
	street: 'Av. de Gregorio Prieto 19',
	local: 'Local 2',
	city: 'Málaga',
	region: 'Málaga',
	regionName: 'Málaga',
	postalCode: '29010',
	country: 'ES',
	phone: '+34 611 67 21 97',
	phoneHref: '+34611672197',
	rating: 4.7,
	reviewsCount: 326,
	siteUrl: 'https://taberna-lanew.vercel.app',
	geo: { lat: 36.7160292, lng: -4.4632347 },
	featureId: '0xd72f75569404245:0xda688774cee8fdc0',
	placeId: 'ChIJRUJAaVX3cg0RwP3oznSHaNo',
	/** Categoría con la que Google clasifica el local. */
	category: 'Restaurante',
	/** Barrio que publica la ficha. */
	district: 'Teatinos-Universidad',
	tagline: 'Taberna en Teatinos',
	description:
		'Taberna la New, restaurante de barrio en la Av. de Gregorio Prieto 19, local 2 (Teatinos-Universidad, Málaga). Abierto todos los días de 12:00 a 16:00 y de 20:00 a 24:00. 4,7 sobre 5 en Google con 326 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Taberna+la+New/@36.7160292,-4.4632347,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f75569404245:0xda688774cee8fdc0!8m2!3d36.7160292!4d-4.4632347!16s%2Fg%2F11x8w9xvdk',
	cid: 'https://www.google.com/maps?cid=15737977833603530176',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7160292%2C-4.4632347',
	embed: 'https://maps.google.com/maps?q=36.7160292,-4.4632347&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: todos los días, de 12:00 a 16:00 y
 * de 20:00 a 24:00. La ficha avisa de que en festivos el horario puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–16:00 · 20:00–24:00' },
	{ day: 'Martes', value: '12:00–16:00 · 20:00–24:00' },
	{ day: 'Miércoles', value: '12:00–16:00 · 20:00–24:00' },
	{ day: 'Jueves', value: '12:00–16:00 · 20:00–24:00' },
	{ day: 'Viernes', value: '12:00–16:00 · 20:00–24:00' },
	{ day: 'Sábado', value: '12:00–16:00 · 20:00–24:00' },
	{ day: 'Domingo', value: '12:00–16:00 · 20:00–24:00' },
];

/**
 * Señas de identidad: la categoría de la ficha, el horario y el teléfono
 * publicados, y lo que muestra el letrero del local (el nombre y el lema
 * «Tradición & Actualidad»).
 */
export const SERVICIOS = [
	'Restaurante y taberna',
	'Jamón cortado a cuchillo',
	'Ostras y tartares',
	'Bodega con Rioja',
	'12:00–16:00 · 20:00–24:00',
	'+34 611 67 21 97',
];

/**
 * La ficha no publica carta ni precios y el local no tiene web propia. Lo que
 * sigue se describe a partir de las fotografías del perfil: los platos que
 * aparecen servidos en las mesas y la bodega que se ve en la estantería.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Jamón cortado a cuchillo',
				note: 'platos de jamón recién cortado, en las fotografías del perfil',
			},
			{
				name: 'Ostras sobre hielo',
				note: 'servidas en una bola de bronce con el cuchillo de abrir',
			},
			{
				name: 'Alcachofas con jamón',
				note: 'corazones de alcachofa con lonchas de jamón y sésamo negro',
			},
			{
				name: 'Tartar sobre aguacate',
				note: 'con aliño de aioli y migas negras, en plato de porcelana',
			},
		],
	},
	{
		title: 'De la cocina',
		items: [
			{
				name: 'Timbale de gambas',
				note: 'con salsa rosa y una capa de tartar por encima, en las fotos',
			},
			{
				name: 'Carne guisada con patatas',
				note: 'servida con su salsa y patatas fritas, con pan aparte',
			},
			{
				name: 'Lonchas de lomo con mostaza',
				note: 'en la mesa que aparece con el pan y la Coca-Cola',
			},
			{
				name: 'Postres y pan de la casa',
				note: 'en una de las mesas se ven panecillos dulces junto a los platos',
			},
		],
	},
	{
		title: 'Bodega',
		items: [
			{
				name: 'Vinos de Rioja',
				note: 'etiquetas de Rioja en la estantería del fondo, en las fotografías',
			},
			{
				name: 'Vino por copa',
				note: 'en la galería se ve cómo se sirve una copa de tinto',
			},
			{
				name: 'Cerveza y refrescos',
				note: 'el letrero del local lleva el logotipo de Cruzcampo',
			},
			{
				name: 'Carta y precios',
				note: 'la ficha no publica carta; lo que se conoce son los platos fotografiados',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Taberna la New?',
		a: 'En la Av. de Gregorio Prieto 19, local 2, en el barrio de Teatinos-Universidad, en Málaga (29010). El mapa de esta página lleva hasta la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google publica un horario partido todos los días: de 12:00 a 16:00 y de 20:00 a 24:00. La propia ficha avisa de que en festivos el horario podría ser diferente, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo reservo o hago un pedido?',
		a: `El único contacto que publica la ficha es el teléfono ${BUSINESS.phone}. No hay reservas ni pedidos en línea: el local no tiene web propia y la ficha invita a «añadir sitio web». En el letrero de la pared aparece el logotipo de una plataforma de reservas, pero la ficha no enlaza ninguna.`,
	},
	{
		q: '¿Qué se sirve?',
		a: 'Cocina de taberna, según lo que muestran las fotografías del perfil: jamón cortado a cuchillo, ostras sobre hielo, alcachofas con jamón, tartar sobre base de aguacate, un timbale de gambas con salsa rosa, carne guisada con patatas y lonchas de lomo con mostaza. La ficha no publica la carta.',
	},
	{
		q: '¿Tiene web propia o carta en línea?',
		a: 'No. La ficha de Google muestra la opción de añadir un sitio web, lo que confirma que no hay ninguno publicado, y tampoco publica carta. En el local se ve su nombre y su lema «Tradición & Actualidad» en el letrero iluminado del comedor.',
	},
	{
		q: '¿Cómo es el local?',
		a: 'Las fotografías muestran un comedor con suelo de madera, mesas de tablero claro y sillas de terciopelo granate, con lámparas de tubo de madera y una pared de azulejo granate con relieve de botellas. Hay también una mesa junto al ventanal y otra zona con un mural de vino y la estantería de botellas al fondo.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 326 reseñas en Google, según la ficha consultada.',
	},
];
