/**
 * Datos de Panadería La Casadiya — Cam. de Suárez, 29 (Bailén-Miraflores,
 * 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panaderia La CASADIYA Malaga,
 *   36.7271197,-4.436846, feature 0xd72f7002c5b66e1:0x78a777abf1da3ee.
 * - Dirección, categoría, valoración, reseñas, horario, descripción del negocio
 *   y fotos: ficha pública de Google (octubre de 2026).
 * - Precios: las tres cartas fotografiadas por el propio negocio en esa misma
 *   ficha (desayunos, sabores marroquíes y salado, café y bebidas). Son precios
 *   publicados, no estimaciones; pueden cambiar.
 *
 * Lo que la web NO inventa: la ficha de Google no publica teléfono, web ni
 * accesibilidad. El teléfono que aparece en la web es el 851 841 842 que el
 * propio negocio rotula en su fachada y en sus cartas. La carta recoge una
 * selección literal de esas fotos, sin añadir platos ni importes que no
 * aparezcan en ellas.
 */

export const BUSINESS = {
	name: 'Panadería La Casadiya',
	shortName: 'La Casadiya',
	mark: 'C',
	street: 'Cam. de Suárez, 29',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	/** Teléfono rotulado en la fachada y en las cartas del local; Google no lo publica. */
	phone: '851 841 842',
	phoneHref: 'tel:+34851841842',
	rating: 4.8,
	reviewsCount: 24,
	siteUrl: 'https://panaderia-la-casadiya.vercel.app',
	geo: { lat: 36.7271197, lng: -4.436846 },
	featureId: '0xd72f7002c5b66e1:0x78a777abf1da3ee',
	placeId: 'ChIJ4WZbLAD3cg0R7qMdv3p3igc',
	cid: '543378074127672302',
	googleCategory: 'Panadería',
	tagline: 'Pan artesano, pastelería y sabores marroquíes en Bailén-Miraflores',
	description:
		'Panadería La Casadiya, en Cam. de Suárez, 29 (Bailén-Miraflores, 29010 Málaga). Pan recién horneado, bollería, tartas, especialidades marroquíes y café. 4,8 sobre 5 en Google.',
	hoursSummary: 'Todos los días 7:30–22:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaderia+La+CASADIYA+Malaga/@36.7271197,-4.436846,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7002c5b66e1:0x78a777abf1da3ee!8m2!3d36.7271197!4d-4.436846!16s%2Fg%2F11nvzm10pj?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=543378074127672302',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7271197%2C-4.436846',
	embed: 'https://maps.google.com/maps?q=36.7271197,-4.436846&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7271197,-4.436846',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:30–22:00' },
	{ day: 'Sábado', value: '7:30–22:00' },
	{ day: 'Domingo', value: '7:30–22:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: abre todos los días, de 7:30 a 22:00. El 1 de noviembre (Día de Todos los Santos) el horario podría variar.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Tienen pan, dulces, comida para llevar, bocadillos...',
	},
	{
		rating: 5,
		text: 'Buenísimo todo. Tenemos que repetir.',
	},
	{
		rating: 5,
		text: 'Muy buena atención.',
	},
];

/** Lo que enumera la descripción del negocio y lo que muestran las fotos. */
export const SERVICIOS = [
	'Pan artesano',
	'Bollería',
	'Pastelería',
	'Productos marroquíes',
	'Café y bebidas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan',
		text: 'La fachada lo anuncia como «pan artesano, cada día» y la ficha describe pan recién horneado. En las fotos, las estanterías del local están llenas.',
	},
	{
		title: 'Lo marroquí',
		text: 'Msemen, baghrir, chebakia, cuernos de gacela y briouat. La carta del local dedica una página entera a los sabores marroquíes, dulces y salados.',
	},
	{
		title: 'La barra',
		text: 'La ficha habla de café, zumo de naranja natural y bebidas para desayunar o merendar. Hay mesas dentro y combos de desayuno desde 3,00 €.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Desayunos',
		items: [
			{ name: 'Café + croissant', price: '3,00 €', note: 'El combo más sencillo de la carta.' },
			{ name: 'Desayuno clásico', price: '3,90 €', note: 'Café y tostada, según la carta del local.' },
			{ name: 'Desayuno andaluz', price: '4,50 €', note: 'Café y tostada con aceite.' },
			{ name: 'Zumo natural + croissant', price: '4,50 €', note: 'Zumo de naranja recién hecho.' },
			{
				name: 'Desayuno La Casadiya',
				price: '8,90 €',
				note: 'El más completo de la carta de desayunos.',
			},
		],
	},
	{
		title: 'Del obrador marroquí',
		items: [
			{ name: 'Msemen', price: '1,50 €', note: 'La masa plana de hojaldre, a la plancha.' },
			{ name: 'Msemen con miel', price: '2,00 €', note: 'Con miel por encima.' },
			{ name: 'Baghrir', price: '2,00 €', note: 'La tortita de los mil agujeros.' },
			{ name: 'Chebakia', price: '1,80 €', note: 'Dulce de sésamo y miel.' },
			{ name: 'Cuerno de gacela', price: '1,80 €', note: 'Pastita de almendra en forma de media luna.' },
			{ name: 'Surtido marroquí, 6 piezas', price: '9,90 €', note: 'Surtido de la vitrina.' },
		],
	},
	{
		title: 'Salado',
		items: [
			{ name: 'Croissant mixto', price: '3,50 €', note: 'Del apartado de salado.' },
			{ name: 'Pastela de pollo', price: '4,50 €', note: 'La pastilla marroquí, en formato individual.' },
			{ name: 'Sandwich pollo', price: '5,50 €', note: 'De la carta de sándwiches.' },
			{ name: 'Sandwich La Casadiya', price: '6,50 €', note: 'El de la casa.' },
			{ name: 'Tostada de aguacate', price: '4,50 €', note: 'De la carta de tostadas.' },
		],
	},
	{
		title: 'Café y bebidas',
		items: [
			{ name: 'Café con leche', price: '1,80 €', note: 'Café de la carta de bebidas.' },
			{ name: 'Cappuccino', price: '2,50 €', note: '' },
			{ name: 'Té marroquí', price: '2,50 €', note: 'Té con hierbabuena.' },
			{
				name: 'Zumo de naranja natural, grande',
				price: '3,50 €',
				note: 'También hay formato pequeño.',
			},
			{ name: 'Batido', price: '3,50 €', note: 'Chocolate, fresa o vainilla.' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Casadiya?',
		a: 'En Cam. de Suárez, 29, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 7:30 a 22:00, según la ficha de Google. El 1 de noviembre el horario podría variar.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'Sí. La ficha describe un espacio «moderno y acogedor» para desayunar o merendar, y la carta del local incluye combos de desayuno desde 3,00 €, café, zumo de naranja natural y bebidas.',
	},
	{
		q: '¿Qué productos marroquíes hay?',
		a: 'La carta del local incluye msemen, baghrir, harcha, chebakia, briouat, cuernos de gacela, ghriba, fekkas y baklava, además de pastela y un surtido de 6 o 12 piezas. Es lo que el propio negocio fotografía en su ficha.',
	},
	{
		q: '¿Hay comida para llevar?',
		a: 'Sí. La descripción del negocio habla de «opciones saladas, sándwiches y productos preparados», y una reseña menciona «comida para llevar, bocadillos».',
	},
	{
		q: '¿Cuánto cuesta desayunar?',
		a: 'La carta fotografiada en la ficha tiene combos desde 3,00 € (café + croissant) y el desayuno más completo a 8,90 €. Los precios pueden cambiar; confírmalos en el local.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono, en el 851 841 842, el número que el local rotula en su fachada y en sus cartas. La ficha de Google no lo publica y tampoco hay página web propia; la cuenta que aparece en la fachada es @lacasadiyamalaga.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,8 sobre 5 con 24 reseñas en Google. Las tres que se citan en esta página son las destacadas de la ficha y todas son de cinco estrellas.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha pública no publica información sobre accesibilidad, así que esta página no la afirma. La entrada de la fotografía está a pie de calle, sin escalones visibles.',
	},
];
