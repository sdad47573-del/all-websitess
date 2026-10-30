/**
 * Datos de La Tostona - Comida para llevar — C. Carlos Cañal, 10, Casco Antiguo, Sevilla.
 * Ficha pública de Google Maps consultada en octubre de 2026.
 * Carta y precios no constan en la ficha: solo se citan las categorías que la
 * propia ficha describe y los platos mencionados en reseñas públicas.
 */

export const BUSINESS = {
	name: 'La Tostona - Comida para llevar',
	shortName: 'La Tostona',
	mark: 'LT',
	street: 'C. Carlos Cañal, 10',
	district: 'Casco Antiguo',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41001',
	country: 'ES',
	siteUrl: 'https://la-tostona.vercel.app',
	geo: { lat: 37.3895224, lng: -5.9970051 },
	featureId: '0xd126db682419889:0xc922b3ea60592265',
	placeId: 'ChIJiZhBgrZtEg0RZSJZYOqzIsk',
	plusCode: '8C9P92Q3+R5',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '955 76 95 17',
	phoneHref: 'tel:+34955769517',
	tagline: 'Comida casera para recoger en el centro de Sevilla',
	description:
		'La Tostona, tienda de comidas caseras en C. Carlos Cañal, 10, Casco Antiguo (41001 Sevilla). Guisos, aliños, fritos, brasa, marisco cocido, pescado frito y bocadillos para recoger en el local. Consulta la oferta del día por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Tostona+-+Comida+para+llevar/@37.3895224,-5.9970051,17z/data=!3m1!4b1!4m6!3m5!1s0xd126db682419889:0xc922b3ea60592265!8m2!3d37.3895224!4d-5.9970051!16s%2Fg%2F11sd2z571y',
	cid: 'https://www.google.com/maps?cid=115290596789507106399',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3895224%2C-5.9970051',
	embed: 'https://maps.google.com/maps?q=37.3895224,-5.9970051&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3895224,-5.9970051',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.8, count: 218, label: '4,8' };

/** La ficha marca el mismo horario para toda la semana. */
export const HORARIO = [
	{ day: 'Lunes a domingo', value: '10:00 – 16:30' },
];
export const HORARIO_AVISO =
	'La ficha de Google marca 10:00–16:30 todos los días. Los festivos pueden cambiar el horario, así que conviene confirmarlo por teléfono antes de acercarse.';

export const SERVICIOS = [
	'Comida para llevar',
	'Menú del día',
	'Guisos',
	'Aliños',
	'Fritos',
	'Brasa',
	'Marisco cocido',
	'Pescado frito',
	'Bocadillos calientes',
];

/**
 * Precio y composición del menú del día que anuncia el cartel de pizarra de la
 * puerta, visible en una de las fotos de la ficha (11 €). Puede cambiar.
 */
export const MENU_DIA = {
	price: '11 €',
	label: 'Menú del día',
	detail:
		'Primero y segundo a elegir entre los platos fríos y calientes de la vitrina, con bebida, postre, pan, cubiertos y servilletas.',
};

export const INSTAGRAM = 'https://www.instagram.com/latostonasevilla/';

export const HIGHLIGHTS = [
	{
		title: 'Cocina casera del día',
		text: 'La ficha describe La Tostona como tienda de comidas caseras y enumera guisos, aliños, fritos, brasa y marisco cocido.',
	},
	{
		title: 'Se recoge en el local',
		text: 'El servicio es para recoger en C. Carlos Cañal, 10. No consta reparto a domicilio en la información consultada.',
	},
	{
		title: 'En pleno centro',
		text: 'Está en el Casco Antiguo de Sevilla, a un paso de la Campana y de la plaza Nueva, con acceso para sillas de ruedas según la ficha.',
	},
];

/** Categorías descritas por la ficha, el cartel de la puerta y las reseñas. */
export const MENU = [
	{
		title: 'Menú del día',
		items: [
			{
				name: 'Menú completo',
				price: MENU_DIA.price,
				note: 'primero y segundo a elegir entre los platos fríos y calientes de la vitrina, con bebida, postre, pan, cubiertos y servilletas; el cartel invita a preguntar por el postre del día',
			},
		],
	},
	{
		title: 'La vitrina',
		items: [
			{
				name: 'Ensaladillas y aliños',
				note: 'en el mostrador aparecen ensaladilla rusa, aliño de pimientos, remolacha y ensalada de pasta',
			},
			{
				name: 'Guisos y cuchareo',
				note: 'categoría que la ficha enumera entre sus comidas caseras; en las fotos se ven garbanzos con chorizo',
			},
			{
				name: 'Fritos y pescado frito',
				note: 'la ficha cita fritos y pescado frito entre su oferta',
			},
		],
	},
	{
		title: 'Brasa, marisco y bocadillos',
		items: [
			{
				name: 'Brasa',
				note: 'carnes a la brasa según la descripción de la ficha',
			},
			{
				name: 'Marisco cocido',
				note: 'referido también en la descripción del local',
			},
			{
				name: 'Bocadillos calientes',
				note: 'anunciados en el cartel de la puerta, junto con las bebidas',
			},
		],
	},
	{
		title: 'Citado en reseñas',
		items: [
			{
				name: 'Tortilla y ensaladilla',
				note: 'platos que menciona una reseña pública de Google',
			},
			{
				name: 'Empanada',
				note: 'citada en la misma reseña, sin detallar el relleno',
			},
			{
				name: 'Croquetas de bacalao',
				note: 'la reseña las destaca como «deliciosas»; en las fotos aparecen recién hechas',
			},
		],
	},
];

/** Temas de las opiniones públicas visibles al consultar la ficha. */
export const RESENAS = [
	{
		texto: '«Tortilla, ensaladilla, empanada y unas croquetas de bacalao deliciosas.»',
		valor: 5,
	},
	{
		texto: '«Todo muy limpio, buen trato, buena comida y Laura muy atenta.»',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Tostona?',
		a: 'En C. Carlos Cañal, 10, Casco Antiguo, 41001 Sevilla, en pleno centro de la ciudad. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono que figura en la ficha pública es el 955 76 95 17. Llama para consultar la comida del día y encargar.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha marca 10:00 a 16:30 de lunes a domingo. En festivos el horario puede variar; confírmalo llamando antes de ir.',
	},
	{
		q: '¿Qué tipo de comida preparan?',
		a: 'La ficha describe una tienda de comidas caseras con guisos, aliños, fritos, brasa, marisco cocido, pescado frito, bocadillos y bebidas para recoger en el local.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'El cartel de la puerta anuncia menú del día por 11 €: primero y segundo a elegir entre los platos fríos y calientes de la vitrina, con bebida, postre, pan, cubiertos y servilletas. Confirma el precio y los platos del día al llamar.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El nombre y la categoría de Google hablan de comida para llevar y de recogida en el local. La ficha no detalla servicio de mesa ni terraza.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'No consta reparto a domicilio en la información consultada. El servicio que se describe es la recogida del pedido en el establecimiento.',
	},
	{
		q: '¿Cuál es la valoración?',
		a: 'Al consultar la ficha en octubre de 2026 mostraba 4,8 sobre 5 con 218 reseñas. La puntuación puede cambiar con nuevas opiniones.',
	},
];
