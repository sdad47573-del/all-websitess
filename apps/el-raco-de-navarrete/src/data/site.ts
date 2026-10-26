/**
 * Datos de El Racó de Navarrete — Avenida España, 1 (Pol. Ind. Pont de
 * Cabanes), 12180 Cabanes, Castellón.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «El Racó de Navarrete», 40,1469542 /
 *   0,0340983, feature 0x12a0087f1856b009:0xa4459e5603d604a4 (categorías,
 *   teléfono, nota, reseñas, accesibilidad y fotos del perfil).
 * - Turisme Comunitat Valenciana: hotel de 1 estrella, 11 habitaciones y 20
 *   plazas, abierto todo el año, terraza, bar, restaurante, wifi y parking
 *   gratuitos, zona de juegos infantil y correo de contacto.
 * - Páginas Amarillas: horario 06:00–00:00 todos los días, cocina mediterránea
 *   y casera, precio medio 20 €, menú del día desde 10 €, menú infantil 8 € y
 *   especialidades a la brasa.
 * - Reseñas publicadas en la ficha de Google y en TripAdvisor.
 *
 * La ficha de Google no publica horario ni carta completa: lo que aparece aquí
 * sale de esas fuentes y se presenta como orientativo.
 */

export const BUSINESS = {
	name: 'El Racó de Navarrete',
	shortName: 'El Racó de Navarrete',
	mark: 'RN',
	street: 'Av. España, 1 (Pol. Ind. Pont de Cabanes)',
	city: 'Cabanes',
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	postalCode: '12180',
	country: 'ES',
	phoneDisplay: '964 33 20 60',
	phoneHref: 'tel:+34964332060',
	email: 'elracodenavarrete@gmail.com',
	emailHref: 'mailto:elracodenavarrete@gmail.com',
	rating: 4.2,
	reviewsCount: 2566,
	siteUrl: 'https://el-raco-de-navarrete.vercel.app',
	geo: { lat: 40.1469542, lng: 0.0340983 },
	featureId: '0x12a0087f1856b009:0xa4459e5603d604a4',
	placeId: 'ChIJCbBWGH8IoBIRpATWA1aeRaQ',
	cid: '11837041287881950372',
	/** Categorías con las que Google describe el local. */
	categories: ['Restaurante', 'Hotel'],
	tagline: 'Restaurante y hotel de carretera en Cabanes',
	description:
		'El Racó de Navarrete, restaurante y hotel en la Avenida España 1 de Cabanes (Castellón): cocina casera mediterránea, carnes a la brasa, almuerzos, menú del día desde 10 € y 11 habitaciones. 4,2 en Google con 2.566 reseñas. Tel. 964 33 20 60.',
	hasPublicWebsite: false,
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Rac%C3%B3+de+Navarrete/@40.1469542,0.0340983,17z/data=!3m1!4b1!4m9!3m8!1s0x12a0087f1856b009:0xa4459e5603d604a4!5m2!4m1!1i2!8m2!3d40.1469542!4d0.0340983!16s%2Fg%2F1tmv078f',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.1469542%2C0.0340983',
	embed: 'https://maps.google.com/maps?q=40.1469542,0.0340983&z=17&hl=es&output=embed',
} as const;

/** Horario publicado en Páginas Amarillas: bar y restaurante de 06:00 a 00:00. */
export const HOURS = [
	{ day: 'Lunes', value: '06:00–00:00' },
	{ day: 'Martes', value: '06:00–00:00' },
	{ day: 'Miércoles', value: '06:00–00:00' },
	{ day: 'Jueves', value: '06:00–00:00' },
	{ day: 'Viernes', value: '06:00–00:00' },
	{ day: 'Sábado', value: '06:00–00:00' },
	{ day: 'Domingo', value: '06:00–00:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Hemos estado comiendo varias veces y nos ha gustado mucho y volveremos a ir.',
	'Paramos a almorzar y comimos un bocadillo de secreto a la brasa, bien generoso.',
	'Buen servicio y comida casera de muy buena calidad... todo muy rico.',
];

/** Señas de identidad que constan en las fuentes públicas. */
export const SERVICIOS = [
	'Cocina casera',
	'Cocina mediterránea',
	'Carnes a la brasa',
	'Almuerzos',
	'Menú del día',
	'Tapas',
	'Terraza',
	'Bar',
	'Hotel',
	'Parking gratuito',
	'Wifi gratis',
	'Accesible',
];

export const MENU = [
	{
		title: 'Almuerzos y bocadillos',
		items: [
			{
				name: 'Bocadillo de secreto a la brasa',
				note: 'el que cita una reseña de Google: bien generoso',
			},
			{
				name: 'Bocadillo de longaniza y chorizo',
				note: 'embutido hecho a la brasa, como el de las fotos del perfil',
			},
			{ name: 'Plato de bacalao frito', note: 'casero, crujiente y con su punto de sal' },
			{ name: 'Callos', note: 'guiso de cuchara para los almuerzos de carretera' },
		],
	},
	{
		title: 'A la brasa y parrilla',
		items: [
			{ name: 'Solomillo a la brasa', note: 'especialidad de la casa según Páginas Amarillas' },
			{ name: 'Chuletón a la brasa', note: 'para compartir, al punto que se pida' },
			{
				name: 'Surtido de embutidos a la brasa',
				note: 'longaniza, chorizo y morcilla con patatas',
			},
			{ name: 'Chuletilla de cordero', note: 'a la parrilla, como la que sale en las fotos' },
		],
	},
	{
		title: 'Cocina casera',
		items: [
			{ name: 'Arroz con pollo', note: 'amarillo, con el pollo troceado, como el de las fotos' },
			{ name: 'Sardinas fritas con verduras', note: 'pescado de temporada, frito y con patata' },
			{ name: 'Ensalada completa', note: 'con tomate, huevo, zanahoria y remolacha' },
			{ name: 'Tapas y raciones', note: 'para picar en la barra o acompañar la mesa' },
		],
	},
	{
		title: 'Menú del día y desayunos',
		items: [
			{
				name: 'Menú del día desde 10 €',
				note: 'una reseña de TripAdvisor incluye bebida, postre y café',
			},
			{ name: 'Menú infantil 8 €', note: 'precio publicado en Páginas Amarillas' },
			{ name: 'Precio medio de 20 €', note: 'orientativo, según Páginas Amarillas' },
			{ name: 'Desayuno bufé', note: 'para los huéspedes del hotel; el bar abre a las 06:00' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Racó de Navarrete?',
		a: 'En la Avenida España, 1, en el polígono Pont de Cabanes, 12180 Cabanes (Castellón). El mapa de esta página lleva directo al establecimiento y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Páginas Amarillas publica un horario de 06:00 a 00:00 de lunes a domingo. Es un horario de bar y restaurante de carretera, pensado también para el almuerzo temprano; la ficha de Google no lo detalla y la cocina puede cerrar entre servicios, así que confirma por teléfono antes de ir.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'El menú del día aparece desde 10 € y el menú infantil en 8 €, con un precio medio orientativo de 20 € según Páginas Amarillas. Una reseña de TripAdvisor del menú de 10 € incluía bebida, postre y café. Confirma precios al llamar: cambian con la temporada y con lo que haya en la carta.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina casera y mediterránea, con las carnes a la brasa como especialidad: solomillo y chuletón. También hay almuerzos, bocadillos como el de secreto a la brasa, bacalao frito, callos, tapas y platos a la carta. El restaurante sirve además el desayuno bufé de los huéspedes.',
	},
	{
		q: '¿Se puede dormir en el hotel?',
		a: 'Sí. Turisme Comunitat Valenciana lo registra como hotel de 1 estrella con 11 habitaciones y 20 plazas, abierto todo el año, con baño privado, escritorio y televisión. Las reservas se gestionan por teléfono en el 964 33 20 60 o por correo en elracodenavarrete@gmail.com.',
	},
	{
		q: '¿Hay parking y wifi?',
		a: 'El alojamiento anuncia parking gratuito y wifi gratuito en todas sus instalaciones, además de terraza, bar y zona de juegos infantil. La ficha de Google marca aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas. Si necesitas una habitación adaptada, conviene confirmarlo al reservar.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,2 sobre 5 con 2.566 reseñas. Las opiniones publicadas destacan la comida casera, el servicio y la parada de carretera: un sitio para almorzar bien sin desviarse.',
	},
];
