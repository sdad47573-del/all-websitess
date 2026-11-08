/**
 * Datos de Bar Restaurant La Cabaneta — Carretera General 2, 75, AD100 Canillo
 * (parroquia de Canillo, Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «BAR RESTAURANT LA CABANETA», 42.5835359,1.6631495,
 *   feature 0x12af63242308dc07:0x403566c6ef5b2ef0.
 * - Nombre, dirección, teléfono, categoría, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026 (4,3 · 660 reseñas).
 * - La ficha no enlaza web propia («Añadir sitio web»).
 * - Platos: fotos del perfil (pollo a la brasa, costillas, parrillada mixta,
 *   calçots en la brasa, calamares, hamburguesa, bocadillo y una coca de fruta
 *   confitada) y la descripción de la ficha: «menú diario, bocadillos y tapas».
 */

export const BUSINESS = {
	name: 'Bar Restaurant La Cabaneta',
	fullName: 'Bar Restaurant La Cabaneta',
	shortName: 'La Cabaneta',
	mark: 'LC',
	street: 'Carretera General 2, 75',
	district: 'Canillo',
	city: 'Canillo',
	region: 'Canillo',
	postalCode: 'AD100',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/bar-restaurant-la-cabaneta',
	geo: { lat: 42.5835359, lng: 1.6631495 },
	featureId: '0x12af63242308dc07:0x403566c6ef5b2ef0',
	placeId: 'ChIJB9wIIyRjrxIR8C5b78ZmNUA',
	plusCode: 'HMM7+C7 Canillo',
	googleCategory: 'Parrilla',
	phone: '+376 727 999',
	phoneHref: 'tel:+376727999',
	tagline: 'Parrilla y menú diario en Canillo',
	description:
		'Bar Restaurant La Cabaneta, Carretera General 2, 75 (AD100 Canillo). Parrilla de brasa con pollo, costillas y calçots, además de menú diario, bocadillos y tapas, y terraza de madera. 4,3 sobre 5 con 660 reseñas. Abre todos los días de 12:00 a 24:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/BAR+RESTAURANT+LA+CABANETA/@42.5835359,1.6631495,17z/data=!4m6!3m5!1s0x12af63242308dc07:0x403566c6ef5b2ef0!8m2!3d42.5835359!4d1.6631495!16s%2Fg%2F1ptwq42mn?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5835359%2C1.6631495',
	embed: 'https://maps.google.com/maps?q=42.5835359,1.6631495&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5835359,1.6631495',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.3,
	count: 660,
	label: '4,3',
};

/** Horario que publica la ficha: todos los días, de mediodía a medianoche. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–24:00' },
	{ dia: 'Martes', horas: '12:00–24:00' },
	{ dia: 'Miércoles', horas: '12:00–24:00' },
	{ dia: 'Jueves', horas: '12:00–24:00' },
	{ dia: 'Viernes', horas: '12:00–24:00' },
	{ dia: 'Sábado', horas: '12:00–24:00' },
	{ dia: 'Domingo', horas: '12:00–24:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El resto del año abre los siete días, de 12:00 a medianoche.';

export const SERVICIOS = [
	'Parrilla',
	'Menú diario',
	'Bocadillos',
	'Tapas',
	'Terraza',
	'Se admiten perros',
	'Cocina de montaña',
	'Comer en el local',
];

export const HIGHLIGHTS = [
	{
		title: 'Brasa de verdad',
		text: 'En el perfil hay calçots sobre la parrilla con la llama viva, pollo dorado, costillas de cerdo y una parrillada mixta con butifarra. Google clasifica el local con una sola categoría: «Parrilla».',
	},
	{
		title: 'Menú diario, bocadillos y tapas',
		text: 'La descripción de la ficha lo resume así: «menú diario, bocadillos y tapas». Es un bar de carretera con cocina de mediodía y de noche, no solo parrilla: también hay bocadillos como el de bacon y queso que aparece en las fotos.',
	},
	{
		title: 'Terraza de madera',
		text: 'La terraza es una tarima de madera con mesas altas, sillas de plástico y dos tumbonas rojas junto a las piedras y la vegetación de la ladera. Hay macetas de geranios y hortensias sobre el muro.',
	},
	{
		title: 'Se admiten perros',
		text: 'La ficha marca «Se admiten perros», y con terraza y aparcamiento al pie de la carretera es un sitio cómodo para parar con el perro de camino al Pas de la Casa o a Andorra la Vella.',
	},
];

/**
 * Lo que se ve en las fotos del perfil y lo que anuncia la descripción de la
 * ficha. No se copian importes: la ficha no los publica y no hay carta enlazada.
 */
export const MENU = [
	{
		title: 'De la parrilla',
		items: [
			{
				name: 'Pollo a la brasa',
				note: 'medio pollo dorado con patatas fritas y pimientos de Padrón',
			},
			{
				name: 'Parrillada mixta',
				note: 'costillas de cerdo, pollo y butifarra con ensalada rusa, patata al horno y verduras',
			},
			{
				name: 'Costillas a la brasa',
				note: 'servidas en sartén de hierro con patatas y cebolla asada',
			},
			{
				name: 'Calçots a la brasa',
				note: 'de temporada, asados sobre la parrilla con llama viva',
			},
		],
	},
	{
		title: 'Menú diario y tapas',
		items: [
			{
				name: 'Menú diario',
				note: 'la ficha lo anuncia junto a bocadillos y tapas',
			},
			{
				name: 'Calamares a la romana',
				note: 'con dos gajos de limón, recién fritos',
			},
			{
				name: 'Aceitunas y aperitivos',
				note: 'cuenco de aceitunas con pepinillos en la mesa, antes de comer',
			},
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{
				name: 'Bocadillo de bacon y queso',
				note: 'pan de bocadillo con bacon a la plancha y queso fundido',
			},
			{
				name: 'Bocadillos de la casa',
				note: 'la ficha anuncia bocadillos; la variedad se pregunta en la barra',
			},
		],
	},
	{
		title: 'Postre',
		items: [
			{
				name: 'Coca de fruta confitada y piñones',
				note: 'masa de bollo con cerezas y naranja confitada, piñones y azúcar',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Restaurant La Cabaneta?',
		a: 'En la Carretera General 2, número 75, AD100 Canillo (Principado de Andorra), al pie de la CG-2. La ficha de Google sitúa el local en las coordenadas 42.5835359, 1.6631495, con el Plus Code HMM7+C7 Canillo.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 12:00 a 24:00, de lunes a domingo. La ficha advierte de que el 1 de noviembre el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 727 999. Es el número para preguntar por el menú del día, reservar mesa o encargar algo para recoger.',
	},
	{
		q: '¿Qué se come en La Cabaneta?',
		a: 'Cocina de brasa y de bar: pollo a la brasa con patatas y pimientos de Padrón, costillas de cerdo, parrillada mixta con butifarra, calçots de temporada, calamares a la romana, hamburguesa, bocadillos y tapas. La descripción de la ficha resume la oferta como «menú diario, bocadillos y tapas».',
	},
	{
		q: '¿Cuál es la especialidad?',
		a: 'La parrilla. Google clasifica el local con una única categoría, «Parrilla», y en las fotos del perfil aparecen calçots asándose sobre la brasa, medio pollo con patatas y una parrillada de costillas, pollo y butifarra con guarnición.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha lo anuncia en su descripción («menú diario, bocadillos y tapas»), pero no publica el contenido ni el precio. Conviene llamar al +376 727 999 por la mañana para saber qué hay ese día y cuánto cuesta.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran una terraza de madera con mesas altas, sillas y dos tumbonas rojas, junto a las piedras y la vegetación de la ladera, con macetas de geranios y hortensias. También hay mesas dentro, en un comedor de madera.',
	},
	{
		q: '¿Se puede ir con perro?',
		a: 'La ficha de Google marca expresamente «Se admiten perros». Con terraza exterior y aparcamiento al pie de la carretera, es una parada práctica si se viaja con el perro.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica precios y el local no tiene web ni carta en línea enlazada desde Google. Los importes del menú diario y de la parrilla se consultan por teléfono, en el +376 727 999.',
	},
	{
		q: '¿Tiene página web o carta online?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento; esta página es informativa y se ha hecho con los datos y las fotos públicos de esa ficha. Para carta, precios y reservas, el canal es el teléfono.',
	},
];

export const LEGAL = {
	razonSocial: 'Bar Restaurant La Cabaneta',
	actualizado: 'Noviembre de 2026',
};
