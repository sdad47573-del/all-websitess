/**
 * Datos de Restaurante Marcos Jatetxea — barrio de Ugaldetxo (20180 Oiartzun,
 * Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Marcos Jatetxea,
 *   43.2974287,-1.8815223, feature 0xd51a893b6b74c8b:0x5e886c3b5dba5971
 *   (teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Código plus de la propia ficha: 74W9+X9 Ugaldetxo, Elizalde, que sitúa el
 *   local en el barrio de Ugaldetxo, en Oiartzun.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. Google no publica una dirección con calle
 * para esta ficha (solo el código postal 20180 y la provincia), así que la web
 * dice Ugaldetxo y remite al mapa para llegar. Tampoco publica carta ni
 * precios: la sección «La carta» resume lo que citan las reseñas y lo que se ve
 * en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante Marcos Jatetxea',
	shortName: 'Marcos',
	mark: 'RM',
	street: 'Barrio de Ugaldetxo',
	city: 'Oiartzun',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20180',
	country: 'ES',
	plusCode: '74W9+X9',
	phoneDisplay: '943 49 43 90',
	phoneHref: 'tel:+34943494390',
	rating: 4.4,
	reviewsCount: 87,
	siteUrl: 'https://www.sur-digital.com/restaurante-marcos-jatetxea',
	geo: { lat: 43.2974287, lng: -1.8815223 },
	featureId: '0xd51a893b6b74c8b:0x5e886c3b5dba5971',
	placeId: 'ChIJi0y3tpOoUQ0RcVm6XTtsiF4',
	cid: '6811813438629239153',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Marcos+Jatetxea/@43.2974287,-1.8815223,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a893b6b74c8b:0x5e886c3b5dba5971!8m2!3d43.2974287!4d-1.8815223!16s%2Fg%2F1tj4ctbb',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2974287%2C-1.8815223',
	embed: 'https://maps.google.com/maps?q=43.2974287,-1.8815223&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: de lunes a viernes de 7:30 a 21:00, sábado de
 * 7:30 a 15:30 y domingo cerrado.
 */
export const HOURS = [
	{ day: 'Lunes', value: '7:30–21:00' },
	{ day: 'Martes', value: '7:30–21:00' },
	{ day: 'Miércoles', value: '7:30–21:00' },
	{ day: 'Jueves', value: '7:30–21:00' },
	{ day: 'Viernes', value: '7:30–21:00' },
	{ day: 'Sábado', value: '7:30–15:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Trato excelente y familiar. pintxos,raciones ,menú.. todo muy bueno',
	},
	{
		rating: 4,
		text: 'Excelente café,pinchos , bocadillos . variedad y precio de menú del día.',
	},
	{
		rating: 5,
		text: 'Trato agradable y camareras y camareros simpaticos y educafos',
	},
];

/**
 * Servicios y señas de identidad que sí constan: la categoría con la que Google
 * clasifica el local, la etiqueta de brunch, lo que citan las reseñas y sus
 * datos de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante',
	'Menú del día',
	'Pintxos y raciones',
	'Bocadillos y café',
	'Brunch',
	'Aparcamiento adaptado',
];

/**
 * Carta del menú del día tal como aparece en la hoja impresa fotografiada en el
 * perfil de Google: primeros, segundos y postre, por 12 euros. La ficha no
 * publica el resto de la carta: los pintxos, raciones y bocadillos salen de las
 * reseñas.
 */
export const MENU = [
	{
		title: 'Primeros',
		items: [
			{ name: 'Lentejas con txorizo y morcilla', note: '' },
			{ name: 'Arroz negro con ali oli', note: '' },
			{ name: 'Berza con patatas', note: '' },
			{ name: 'Puré de verduras', note: '' },
			{ name: 'Ensalada de tomate con bonito', note: '' },
			{ name: 'Ensalada mixta', note: '' },
			{ name: 'Espárragos vinagreta', note: '' },
			{ name: 'Cogollos vinagreta', note: '' },
		],
	},
	{
		title: 'Segundos',
		items: [
			{ name: 'Txuleta de cerdo con patatas', note: '' },
			{ name: 'Lomo asado relleno de ciruela', note: '' },
			{ name: 'Callos con patatas', note: '' },
			{ name: 'Gallo a la plancha', note: '' },
			{ name: 'Costilla de cerdo asada con patatas', note: '' },
			{ name: 'Pollo asado con patatas', note: '' },
			{ name: 'Filete de ternera con patatas', note: '' },
			{ name: 'Lomo plancha con patatas', note: '' },
			{ name: 'Pechuga de pollo con patatas', note: '' },
		],
	},
	{
		title: 'Postre y barra',
		items: [
			{ name: 'Postre', note: 'incluido en el menú del día' },
			{ name: 'Pintxos', note: 'citados en dos de las reseñas publicadas' },
			{ name: 'Raciones', note: '«pintxos, raciones, menú… todo muy bueno»' },
			{ name: 'Bocadillos', note: 'en la carta que citan sus reseñas' },
			{ name: 'Café', note: '«excelente café», en palabras de una reseña' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Marcos Jatetxea?',
		a: 'En el barrio de Ugaldetxo, en el 20180 Oiartzun (Gipuzkoa). Google no publica una dirección con calle para esta ficha: da el código postal 20180 y el código plus 74W9+X9 Ugaldetxo, Elizalde. El botón «Cómo llegar» de esta página abre la ubicación exacta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 21:00, el sábado de 7:30 a 15:30 y el domingo cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 49 43 90. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Menú del día, pintxos, raciones y bocadillos. Sus reseñas hablan del menú del día y de su precio, de los pintxos y las raciones y del café. La ficha no publica la carta completa: el menú del día se conoce por la hoja fotografiada en su perfil de Google.',
	},
	{
		q: '¿Cuánto cuesta el menú del día?',
		a: '12 euros, según la hoja del menú fotografiada en su perfil de Google. Incluye un primero de la lista, un segundo de la lista y postre. En los primeros aparecen las lentejas con txorizo y morcilla, el arroz negro con ali oli, la berza con patatas o la ensalada de tomate con bonito; en los segundos, la txuleta de cerdo, el lomo asado relleno de ciruela, los callos, el gallo a la plancha, la costilla asada, el pollo asado o el filete de ternera, todos con patatas.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. Abre a las 7:30 y sus reseñas citan el café y los bocadillos, así que sirve desayunos además de comidas.',
	},
	{
		q: '¿Hay brunch?',
		a: 'Google etiqueta el establecimiento con la opción de brunch. Al no publicar carta, conviene llamar al 943 49 43 90 para saber qué incluye y en qué horario se sirve.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Tiene 4,4 sobre 5 con 87 reseñas en Google. Las publicadas destacan el trato «excelente y familiar» y lo «agradable» de camareras y camareros.',
	},
	{
		q: '¿Hay acceso adaptado y aparcamiento?',
		a: 'La ficha de Google marca acceso para sillas de ruedas, asientos adaptados y aparcamiento adaptado.',
	},
];
