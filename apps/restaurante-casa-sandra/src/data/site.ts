/**
 * Datos de RESTAURANTE CASA SANDRA — Av. de Madrid, 25, Loc 9,
 * 12594 Oropesa del Mar (Castelló).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «RESTAURANTE CASA SANDRA», 40.0874961,
 *   0.1428078, feature 0x12a005561a777533:0xf368e41f8ceb6b4f (dirección,
 *   teléfono, horario, categoría, nota, reseñas, accesibilidad y fotos).
 * - Descripción del propio establecimiento en Google: «Restaurante Casa
 *   Sandra abierto todo el año, ofreciendo desayunos, almuerzos, menús y
 *   carta».
 * - Carta del local fotografiada en su perfil de Google Maps: ensaladas,
 *   platos combinados, desayunos, bebidas y cafés con sus precios. Los
 *   importes de esta web son los de esa carta.
 * - Reseñas públicas de Google citadas en la web.
 *
 * El único precio que no está en la carta fotografiada es el menú del día:
 * los 12 € son los que cita una reseña. No se inventan importes.
 */

export const BUSINESS = {
	name: 'Casa Sandra',
	fullName: 'Restaurante Casa Sandra',
	shortName: 'Casa Sandra',
	mark: 'CS',
	street: 'Av. de Madrid, 25, local 9',
	city: 'Oropesa del Mar',
	province: 'Castelló',
	region: 'Comunitat Valenciana',
	comarca: 'Plana Alta',
	postalCode: '12594',
	country: 'ES',
	phoneDisplay: '964 82 05 46',
	phoneHref: 'tel:+34964820546',
	rating: 4.1,
	reviewsCount: 291,
	siteUrl: 'https://restaurante-casa-sandra.vercel.app',
	geo: { lat: 40.0874961, lng: 0.1428078 },
	featureId: '0x12a005561a777533:0xf368e41f8ceb6b4f',
	placeId: 'ChIJM3V3GlYFoBIRT2vrjB_kaPM',
	cid: '17539519572953754447',
	googleCats: ['Restaurante de cocina española'],
	tagline: 'Desayunos, almuerzos y menú del día en Oropesa',
	description:
		'Restaurante Casa Sandra, en la Avenida de Madrid 25 de Oropesa del Mar (Castelló): desayunos desde las 6:30, almuerzos, menú del día, paellas y platos combinados, abierto todo el año. 4,1 en Google con 291 reseñas. Tel. 964 82 05 46.',
};

const DEST = `${BUSINESS.geo.lat}%2C${BUSINESS.geo.lng}`;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/RESTAURANTE+CASA+SANDRA/@40.0874961,0.1428078,17z/data=!3m1!4b1!4m6!3m5!1s0x12a005561a777533:0xf368e41f8ceb6b4f!8m2!3d40.0874961!4d0.1428078!16s%2Fg%2F11sx53y40t?authuser=0&hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=ES`,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${DEST}`,
	embed: 'https://maps.google.com/maps?q=40.0874961,0.1428078&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: de madrugada al mediodía, todo el año. */
export const HOURS = [
	{ day: 'Lunes', value: '6:30–16:00' },
	{ day: 'Martes', value: '6:30–16:00' },
	{ day: 'Miércoles', value: '6:30–16:00' },
	{ day: 'Jueves', value: '6:30–16:00' },
	{ day: 'Viernes', value: '6:30–16:00' },
	{ day: 'Sábado', value: '6:30–16:00' },
	{ day: 'Domingo', value: '8:00–16:00' },
];

export const SERVICIOS = [
	'Desayunos desde las 6:30',
	'Almuerzos',
	'Menú del día',
	'Paellas y arroces',
	'Platos combinados',
	'Raciones',
	'Ensaladas',
	'Cocina casera',
	'Comedor',
	'Terraza',
	'Abierto todo el año',
	'Accesible',
];

/**
 * Carta. Los precios son los de la carta fotografiada en el perfil de Google
 * Maps; el menú del día a 12 € es el que cita una reseña.
 */
export const MENU = [
	{
		title: 'El menú del día',
		items: [
			{
				name: 'Menú del día',
				price: '12,00 €',
				note: 'el precio que cita una reseña de Google; el menú cambia cada día y se pregunta en la mesa',
			},
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{ name: 'Ensalada valenciana', price: '8,00 €', note: '' },
			{ name: 'Ensalada de la casa', price: '10,00 €', note: '' },
			{ name: 'Ensalada mediterránea', price: '12,00 €', note: '' },
			{ name: 'Ensalada césar', price: '12,50 €', note: '' },
		],
	},
	{
		title: 'Platos combinados · con patatas y guarnición',
		items: [
			{ name: 'Hamburguesa', price: '10,00 €', note: '' },
			{ name: 'Filete de pechuga', price: '11,50 €', note: '' },
			{ name: 'Pechuga crujiente', price: '10,00 €', note: '' },
			{ name: 'Lomo', price: '10,00 €', note: '' },
			{ name: 'Bacon', price: '10,00 €', note: '' },
			{ name: 'Sepia', price: '15,00 €', note: '' },
			{ name: 'Emperador', price: '16,00 €', note: '' },
			{ name: 'Chuletas de cordero', price: '18,00 €', note: '' },
			{ name: 'Calamares', price: '15,00 €', note: '' },
			{ name: 'Parrillada de carne para dos', price: '25,00 €', note: '' },
			{ name: 'Chuletón de 500 g', price: '25,00 €', note: '' },
		],
	},
	{
		title: 'Desayunos',
		items: [
			{ name: 'Torrijas', price: '', note: '' },
			{ name: 'Croissant', price: '', note: '' },
			{ name: 'Croissant de jamón y queso', price: '', note: '' },
			{ name: 'Bizcocho de chocolate', price: '', note: '' },
			{ name: 'Bizcocho de yogur', price: '', note: '' },
		],
	},
	{
		title: 'Bebidas y copas',
		items: [
			{ name: 'Refresco en lata', price: '2,00 €', note: '' },
			{ name: 'Refresco, botella de 350 ml', price: '2,00 €', note: '' },
			{ name: 'Zumo natural', price: '2,50 €', note: '' },
			{ name: 'Jarra de cerveza', price: '2,50 €', note: '' },
			{ name: 'Tanque de cerveza', price: '3,50 €', note: '' },
			{ name: 'Tercio de cerveza', price: '2,50 €', note: '' },
			{ name: 'Copa de Rioja', price: '3,00 €', note: '' },
			{ name: 'Copa de Crianza', price: '3,00 €', note: '' },
			{ name: 'Copa de Rueda', price: '2,50 €', note: '' },
			{ name: 'Tinto de verano', price: '3,00 €', note: '' },
			{ name: 'Botella de Rioja crianza', price: '15,00 €', note: '' },
			{ name: 'Botella de Verdejo', price: '10,00 €', note: '' },
			{ name: 'Jarra de sangría', price: '8,00 €', note: '' },
			{ name: 'Combinado', price: '4,00 / 6,00 €', note: '' },
			{ name: 'Tubo de Martini', price: '3,50 €', note: '' },
			{ name: 'Cubata', price: '6,00 €', note: '' },
			{ name: 'Cubata especial', price: '8,00 €', note: '' },
		],
	},
	{
		title: 'Cafés',
		items: [
			{ name: 'Café solo', price: '1,10 €', note: '' },
			{ name: 'Cortado', price: '1,40 €', note: '' },
			{ name: 'Café con leche', price: '1,50 €', note: '' },
			{ name: 'Bombón', price: '1,60 €', note: '' },
			{ name: 'Americano', price: '1,40 €', note: '' },
			{ name: 'Carajillo', price: '2,00 €', note: '' },
			{ name: 'Carajillo quemado', price: '2,50 €', note: '' },
			{ name: 'Infusión', price: '1,50 €', note: '' },
			{ name: 'Colacao', price: '1,50 €', note: '' },
			{ name: 'Café tocado', price: '+0,30 €', note: '' },
		],
	},
];

export const REVIEWS = [
	{ text: 'Comida casera, platos abundantes, buen servicio y la dueña es un encanto.', rating: 5 },
	{ text: 'Yo pedí arroz meloso de marisco y solomillo al roquefort.', rating: 5 },
	{ text: 'Restaurante de menú a 12 € y carta con raciones, platos combinados y paellas.', rating: 4 },
];

export const FAQ = [
	{
		q: '¿Dónde está Casa Sandra?',
		a: 'En el número 25 de la Avenida de Madrid, local 9, en Oropesa del Mar (12594), en la Plana Alta. Está en plena avenida, en el casco urbano y a un paso de la playa. El botón «Cómo llegar» abre la ruta exacta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado abre de 6:30 a 16:00 y el domingo de 8:00 a 16:00. El restaurante anuncia que está abierto todo el año, también fuera de temporada. En festivos el horario puede cambiar, así que conviene llamar antes al 964 82 05 46.',
	},
	{
		q: '¿Cuánto cuesta el menú del día?',
		a: 'Una reseña de Google sitúa el menú del día en 12 €. La carta que el local tiene expuesta no detalla el menú, que cambia cada día, así que lo mejor es preguntarlo en la mesa o llamando al 964 82 05 46. El resto de precios de esta web son los de esa carta: ensaladas desde 8 €, combinados desde 10 € y cafés desde 1,10 €.',
	},
	{
		q: '¿Qué se come en Casa Sandra?',
		a: 'Cocina española y casera, con platos abundantes. La carta tiene ensaladas, platos combinados con patatas y guarnición, parrillada de carne, chuletón, sepia, calamares y chuletas de cordero. Las reseñas citan además el arroz meloso de marisco, el solomillo al roquefort y las paellas.',
	},
	{
		q: '¿Se puede desayunar o almorzar?',
		a: 'Sí. Abre a las 6:30 de lunes a sábado, y en la carta de desayunos hay torrijas, croissant, croissant de jamón y queso y bizcocho de chocolate o de yogur, además de café y tostadas. Es la parada de primera hora para quien madruga o va a la playa.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. En las fotos de su perfil de Google se ven mesas y sillas en la acera, bajo el toldo de la fachada, con la máquina de chuches al lado. La terraza se ocupa por orden de llegada; para asegurar mesa en verano, mejor llamar.',
	},
	{
		q: '¿Se puede reservar mesa?',
		a: 'Por teléfono, en el 964 82 05 46, el mismo número que el local anuncia para reservas en su carta. No hay reserva online ni formulario en esta web. Para grupos o en temporada alta conviene llamar con antelación.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google marca acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas una mesa concreta, avisa al llamar y te indican cuál viene mejor.',
	},
	{
		q: '¿Hay aparcamiento cerca?',
		a: 'El local no tiene aparcamiento propio: se aparca en la Avenida de Madrid y en las calles del entorno, en superficie. En temporada alta y a la hora del mediodía conviene llegar con un poco de margen.',
	},
];
