/**
 * Datos de «Soga bar» — Pl. de la Provincia, número 5, 13001 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9822345, -3.9301013, feature
 *   0xd6bc314f03159b9:0x56062909311065c1 (nombre, dirección, categorías,
 *   teléfono, valoración, accesibilidad y Plus Code), consultada el 2 de
 *   noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - Google lo clasifica como restaurante, bar y bar de tapas, con la etiqueta
 *   «Brunch». La ficha no publica horario, carta, precios ni web propia.
 * - La web no inventa franjas horarias: dice que la ficha no las publica y da el
 *   teléfono como canal directo.
 * - Los platos de esta página son los que se ven en las fotos del perfil y los
 *   que nombran las reseñas (tomate escaldado, pimientos con bacalao, suprema de
 *   bacalao, ensaladas, pastas y arroces).
 */

export const BUSINESS = {
	name: 'Soga bar',
	fullName: 'Soga bar',
	mark: 'SB',
	street: 'Pl. de la Provincia, 5',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13001',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/soga-bar',
	geo: { lat: 38.9822345, lng: -3.9301013 },
	featureId: '0xd6bc314f03159b9:0x56062909311065c1',
	placeId: 'ChIJuVkx8BTDaw0RwWUQMQkpBlY',
	channel: '/g/11g9dlfr96',
	plusCode: '8CCRX3J9+VX Ciudad Real',
	category: 'Bar de tapas',
	categories: ['Restaurante', 'Bar', 'Bar de tapas'],
	phone: '926 92 13 68',
	phoneHref: 'tel:+34926921368',
	tagline: 'Tapas, arroces y mantel en la Plaza de la Provincia',
	description:
		'Soga bar, restaurante y bar de tapas en la Plaza de la Provincia, 5, de Ciudad Real (13001). Tapas, ensaladas, pastas, arroces, carnes y postres de casa, también con brunch. 4,2 sobre 5 con 827 reseñas en Google.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Soga+bar/@38.9822345,-3.9301013,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc314f03159b9:0x56062909311065c1!8m2!3d38.9822345!4d-3.9301013!16s%2Fg%2F11g9dlfr96',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9822345%2C-3.9301013',
	embed: 'https://maps.google.com/maps?q=38.9822345,-3.9301013&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9822345%2C-3.9301013',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 4.2,
	count: 827,
	label: '4,2',
};

/**
 * La ficha no publica horario, así que la tabla recoge lo que sí consta: el
 * teléfono y los datos de accesibilidad.
 */
export const HOURS = [
	{ day: 'Horario', value: 'No publicado en Google Maps' },
	{ day: 'Teléfono', value: '926 92 13 68' },
	{ day: 'Entrada y aseo', value: 'Adaptados para sillas de ruedas' },
	{ day: 'Aparcamiento', value: 'Sin plazas adaptadas' },
];

export const HORARIO_AVISO =
	'La ficha de Google no publica horario de apertura, así que esta web no puede confirmar cuándo abre. Lo que sí marca: entrada, aseo y asientos adaptados para sillas de ruedas, y ninguna plaza de aparcamiento adaptada. Para horario y mesa, llama al 926 92 13 68.';

export const SERVICIOS = [
	'Bar de tapas',
	'Restaurante',
	'Brunch',
	'Tapas y raciones',
	'Ensaladas y pastas',
	'Arroces',
	'Acceso adaptado',
	'Aseo adaptado',
	'Mantel y comedor',
];

export const HIGHLIGHTS = [
	{
		title: '827 reseñas y un 4,2',
		text: 'No es una ficha pequeña: 827 opiniones y una media de 4,2 sobre 5. En un bar de tapas de plaza eso significa que ha pasado mucha gente por la mesa, y que la mayoría repite la nota alta. Las reseñas destacadas hablan de las tapas, de la cerveza y de las raciones.',
	},
	{
		title: 'Tapas, pero también mantel',
		text: 'El local tiene dos velocidades: la barra de tapas que anuncia Google y un comedor con mantel blanco, banqueta de cuero y pared de madera iluminada, con plantas colgando del techo. La foto del perfil lo enseña tal cual, sin filtro.',
	},
	{
		title: 'Ensaladas, pastas y arroces',
		text: 'Una de las reseñas lo dice con claridad: «Trabajan muy bien las ensaladas, pastas y arroces». En las fotos hay ensalada de gambas con láminas de pato y frutos rojos, otra de pollo escabechado con arándanos y tortellini de calabaza con rabo de toro.',
	},
	{
		title: 'Brunch y accesibilidad',
		text: 'La ficha le añade la etiqueta «Brunch», además de restaurante, bar y bar de tapas. También marca entrada, aseo y asientos adaptados para sillas de ruedas, y aclara que no hay aparcamiento adaptado. No publica horario ni web propia.',
	},
];

export const MENU = [
	{
		title: 'Para picar',
		items: [
			{
				name: 'Croquetas',
				note: 'Cuatro piezas doradas en plato de cerámica azul, según la foto del perfil',
			},
			{
				name: 'Jamón ibérico',
				note: 'En láminas sobre patata y con cebollino, servido en plato blanco',
			},
			{
				name: 'Tomate escaldado',
				note: 'Lo pide una de las reseñas destacadas junto a los pimientos con bacalao',
			},
			{
				name: 'Pimientos con bacalao',
				note: 'De las tapas que nombran las reseñas de cinco estrellas',
			},
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{
				name: 'Ensalada de gambas y pato',
				note: 'Con láminas de magret, frambuesas, arándanos y brotes',
			},
			{
				name: 'Ensalada de pollo escabechado',
				note: 'Con tomate, arándanos, frambuesas y brotes verdes',
			},
		],
	},
	{
		title: 'Pastas y arroces',
		items: [
			{
				name: 'Tortellini de calabaza con rabo de toro',
				note: 'La pasta rellena naranja con la carne guisada y su salsa',
			},
			{
				name: 'Arroces de la casa',
				note: 'Una de las reseñas destaca los arroces junto a ensaladas y pastas',
			},
		],
	},
	{
		title: 'Carnes y pescado',
		items: [
			{
				name: 'Carne a la plancha con crema de calabaza',
				note: 'Lonchas de ternera sobre la crema, en plato de cerámica',
			},
			{
				name: 'Suprema de bacalao',
				note: 'El plato que pide una de las reseñas destacadas',
			},
			{
				name: 'Lomo de ternera en salsa',
				note: 'Con pisto y su jugo, servido en fuente blanca',
			},
		],
	},
	{
		title: 'Postres',
		items: [
			{
				name: 'Tarta de merengue con helado',
				note: 'Con azúcar en polvo y helado blanco al lado',
			},
			{
				name: 'Tarta de chocolate',
				note: 'Con crema inglesa y fresas en láminas',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Soga bar?',
		a: 'En la Plaza de la Provincia, número 5, de Ciudad Real (13001), con Plus Code 8CCRX3J9+VX y coordenadas 38.9822345, -3.9301013. Está en pleno centro, junto a la plaza y a un paso de la calle Toledo. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 926 92 13 68, el número publicado en la ficha del establecimiento. Sirve para preguntar por el horario, reservar mesa o consultar el menú del día. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario de apertura: no hay ninguna franja con horas. Como los datos públicos no lo dicen, esta página no lo inventa. Para saber cuándo abre, llama al 926 92 13 68.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Google lo clasifica como restaurante, bar y bar de tapas, y le añade la etiqueta «Brunch». En las fotos del perfil hay croquetas, jamón ibérico, ensaladas con fruta y brotes, tortellini de calabaza con rabo de toro, carne a la plancha y postres de tarta. Las reseñas añaden tomate escaldado, pimientos con bacalao y suprema de bacalao.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. El local no tiene carta colgada en su ficha de Google ni web propia, así que esta página no publica importes. Los platos que aparecen son los de las fotos del perfil y los que nombran las reseñas, sin precios. Para el precio del día, llama al 926 92 13 68.',
	},
	{
		q: '¿Se puede comer en mesa o solo en la barra?',
		a: 'Hay comedor. La foto del perfil enseña mesas vestidas con mantel blanco, banqueta de cuero corrida, pared de madera con luces lineales y plantas colgando del techo. También es bar de tapas, así que la barra es la otra opción.',
	},
	{
		q: '¿Sirven brunch?',
		a: 'La ficha de Google le pone la etiqueta «Brunch» al establecimiento. Ni la ficha ni esta web publican el contenido, el precio ni el horario del brunch: eso se pregunta en el 926 92 13 68.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. Lo que no tiene es aparcamiento adaptado. Si necesitas un detalle concreto, llama antes al 926 92 13 68.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,2 sobre 5 con 827 reseñas (consultado el 2 de noviembre de 2026). Es una nota alta con un volumen grande de opiniones. Las reseñas destacadas alaban las tapas y las raciones («Tapas fantásticas, la cerveza excelente, y las raciones inmejorables») y el trabajo de ensaladas, pastas y arroces.',
	},
	{
		q: '¿Esta web es del bar?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio bar.',
	},
];

export const LEGAL = {
	razonSocial: 'Soga bar',
	actualizado: 'Noviembre de 2026',
};
