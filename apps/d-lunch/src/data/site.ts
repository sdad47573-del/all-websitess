/**
 * Datos de D'LUNCH — C. Eugenio Gross, 16, Distrito Centro, 29009 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: D'LUNCH, 36.7227959,-4.4356522,
 *   feature 0xd72f7ba521fccaf:0xf366c599b4b9728b (nombre, dirección, categoría,
 *   teléfono, nota, reseñas y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 * - Página pública de Facebook de la casa, para la lista de croquetas caseras.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia y no publica
 * horario, por eso no se da ninguno. Tampoco se publican precios.
 */

export const BUSINESS = {
	name: "D'LUNCH",
	shortName: 'D’Lunch',
	mark: 'D’',
	street: 'C. Eugenio Gross, 16',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Distrito Centro',
	postalCode: '29009',
	country: 'ES',
	phone: '+34 951 15 28 75',
	phoneHref: '+34951152875',
	rating: 4.4,
	reviewsCount: 21,
	siteUrl: 'https://d-lunch.vercel.app',
	geo: { lat: 36.7227959, lng: -4.4356522 },
	featureId: '0xd72f7ba521fccaf:0xf366c599b4b9728b',
	placeId: 'ChIJr8wfUrr3cg0Ri3K5tJnFZvM',
	cid: '17538923062793695883',
	category: 'Pollería',
	categories: ['Pollería'],
	tagline: 'Pollo asado y croquetas caseras',
	description:
		"D'LUNCH, pollería y comida casera para llevar en la calle Eugenio Gross 16, Distrito Centro, Málaga. Pollo asado, patatas y croquetas caseras. 4,4 sobre 5 en Google con 21 reseñas.",
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		"https://www.google.com/maps/place/D'LUNCH/@36.7227959,-4.4356522,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ba521fccaf:0xf366c599b4b9728b!8m2!3d36.7227959!4d-4.4356522!16s%2Fg%2F11fk14lvhq",
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7227959%2C-4.4356522',
	embed: 'https://maps.google.com/maps?q=36.7227959,-4.4356522&z=17&hl=es&output=embed',
};

/**
 * La ficha de Google no publica horario (el bloque de horarios viene vacío).
 * Mejor decirlo que inventar unas horas: la web pide llamar antes de ir.
 */
export const HOURS = [{ day: 'Horario', value: 'No consta en la ficha de Google' }];

/**
 * Señales de identidad que sí constan: la categoría de pollería, el barrio, el
 * teléfono, el acceso adaptado y las croquetas caseras que anuncia la casa.
 */
export const SERVICIOS = [
	'Pollo asado',
	'Comidas caseras',
	'Cuscús y tajine',
	'Croquetas caseras',
	'Comida para llevar',
	'+34 951 15 28 75',
];

/**
 * La ficha no publica carta ni precios. El pollo y las patatas salen de las
 * reseñas del perfil; las croquetas, de la lista que publica la propia casa en
 * su página de Facebook. No se dan precios porque no hay carta pública.
 */
/**
 * Los carteles amarillos del local son la única carta pública: pollos asados,
 * menús, comidas caseras a 2,50 €, ensaladas y cuscús. Los precios se copian de
 * esos carteles y pueden estar desactualizados (algunos ya aparecen tapados en
 * las fotos), así que la web pide confirmarlos por teléfono.
 */
export const MENU = [
	{
		title: 'Pollo asado',
		items: [
			{ name: 'Pollo asado entero', note: 'el cartel del local lo marca a 8,00 €', price: '8,00 €' },
			{ name: 'Medio pollo asado', note: 'la ración de media unidad', price: '4,50 €' },
			{ name: 'Medio pollo con patatas', note: 'la combinación que repiten las reseñas', price: '5,00 €' },
			{ name: 'Oferta del miércoles', note: 'día del cliente: pollo asado a 5,90 €, según el cartel', price: '5,90 €' },
		],
	},
	{
		title: 'Menús',
		items: [
			{ name: 'Menú 1', note: 'pollo asado, ración de patatas y ración de comida o ensalada; el precio del cartel aparece tapado' },
			{ name: 'Menú 2', note: 'pollo asado, patatas, refresco de 1,5 l o cerveza de 1 l y pan o aceitunas' },
			{ name: 'Comida casera y ensalada', note: 'ración del día del mostrador', price: '2,50 €' },
			{ name: 'Cuscús', note: '«el mejor cuscús», según el cartel de la casa', price: '8,50 €' },
		],
	},
	{
		title: 'Comidas caseras',
		items: [
			{ name: 'Pisto con pollo', note: 'de la lista del cartel de comidas caseras' },
			{ name: 'Berenjenas rellenas', note: 'ración casera del mostrador' },
			{ name: 'Pollo al curry', note: 'otra de las raciones de la lista' },
			{ name: 'Tajine de pollo', note: 'la receta marroquí de la casa' },
			{ name: 'Albóndigas con tomate o en salsa de almendras', note: 'dos versiones en el mismo cartel' },
			{ name: 'Callos con garbanzos', note: 'cuchara de la casa' },
			{ name: 'Macarrones con tomate y paella mixta', note: 'platos del día del mostrador' },
		],
	},
	{
		title: 'Ensaladas y para picar',
		items: [
			{ name: 'Ensaladilla rusa', note: 'de la vitrina de comidas caseras' },
			{ name: 'Ensalada de pimientos asados', note: 'con el pimiento asado de la casa' },
			{ name: 'Ensalada mixta o salsa rosa', note: 'las ensaladas del cartel' },
			{ name: 'Patatas con ali-oli', note: 'para picar o acompañar el pollo' },
			{ name: 'Huevos rellenos', note: 'entrante del mostrador' },
			{ name: 'Croquetas caseras', note: 'la especialidad que anuncia la casa' },
		],
	},
];

export const FAQ = [
	{
		q: "¿Dónde está D'LUNCH?",
		a: 'En la calle Eugenio Gross 16, en el Distrito Centro de Málaga (29009). El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: `La ficha de Google no publica horario para este local. Para no inventarlo, esta web no da horas: llama al ${BUSINESS.phone} antes de ir y confirma cuándo está abierto.`,
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pollo asado entero o medio, los menús 1 y 2, raciones de comida casera a 2,50 € (pisto con pollo, berenjenas rellenas, pollo al curry, albóndigas, callos, paella mixta), ensaladas, croquetas caseras, tajine y cuscús. La lista está copiada de los carteles amarillos del local.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. La ficha lo clasifica como pollería y las reseñas hablan de pollos asados y patatas para llevar. Para encargar, lo más directo es llamar al teléfono publicado.',
	},
	{
		q: '¿Hay menú del día o precios publicados?',
		a: 'Google Maps no publica carta ni precios. Los carteles del local sí marcan el pollo entero a 8,00 €, el medio a 4,50 €, el medio con patatas a 5,00 €, la ración de comida casera a 2,50 € y el cuscús a 8,50 €. Los precios del Menú 1 y del Menú 2 aparecen tapados en las fotos, y todos pueden haber cambiado: confírmalos por teléfono.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. No publica otros datos de accesibilidad, así que conviene llamar si necesitas una condición concreta.',
	},
	{
		q: '¿Qué opinan los clientes?',
		a: 'Tiene 4,4 sobre 5 con 21 reseñas en Google. Las reseñas destacan el pollo asado con patatas y el trato del personal.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del local y ofrece la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
];
