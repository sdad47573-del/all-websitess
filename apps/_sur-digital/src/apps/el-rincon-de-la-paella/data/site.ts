/**
 * Datos de «El rincón de la paella» — C. Francisco Fernández Ordóñez, 5, 13170
 * Miguelturra (Ciudad Real).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9585893, -3.8858188, feature
 *   0xd6bdd2ac03c36db:0x62747519dbf9f796 (nombre, dirección, categoría,
 *   teléfono, valoración y Plus Code), consultada el 2 de noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - La ficha clasifica el negocio como «Restaurante de comida para llevar» y no
 *   publica horario, carta, precios ni web propia.
 * - Los platos de esta web son los que se ven en las fotos del perfil y los que
 *   nombran las reseñas: no hay precios ni carta oficial que copiar.
 * - La valoración es 5,0 sobre 5 con 33 reseñas, sin ninguna por debajo de 5.
 */

export const BUSINESS = {
	name: 'El rincón de la paella',
	fullName: 'El rincón de la paella',
	mark: 'RP',
	street: 'C. Francisco Fernández Ordóñez, 5',
	city: 'Miguelturra',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13170',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-rincon-de-la-paella',
	geo: { lat: 38.9585893, lng: -3.8858188 },
	featureId: '0xd6bdd2ac03c36db:0x62747519dbf9f796',
	placeId: 'ChIJ2zY8wCrdaw0Rlvf52xl1dGI',
	channel: '/g/11nc8xv40t',
	plusCode: '8CCRX457+CM Miguelturra',
	category: 'Restaurante de comida para llevar',
	categories: ['Restaurante de comida para llevar'],
	phone: '672 60 17 17',
	phoneHref: 'tel:+34672601717',
	tagline: 'Paellas, arroces y guisos por encargo en Miguelturra',
	description:
		'El rincón de la paella, restaurante de comida para llevar en la calle Francisco Fernández Ordóñez, 5, de Miguelturra (13170). Paellas, arroces, fideuá y guisos por encargo. 5,0 sobre 5 con 33 reseñas en Google.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+rinc%C3%B3n+de+la+paella/@38.9585893,-3.8858188,17z/data=!4m6!3m5!1s0xd6bdd2ac03c36db:0x62747519dbf9f796!8m2!3d38.9585893!4d-3.8858188!16s%2Fg%2F11nc8xv40t',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9585893%2C-3.8858188',
	embed: 'https://maps.google.com/maps?q=38.9585893,-3.8858188&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9585893,-3.8858188',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 5,
	count: 33,
	label: '5,0',
};

/**
 * La ficha no publica horario: no hay ni una fila con horas. En lugar de
 * inventarlo, la web dice justo eso y manda al teléfono.
 */
export const HOURS = [
	{ day: 'Horario', value: 'No publicado en Google Maps' },
	{ day: 'Encargos', value: 'Por teléfono, en el 672 60 17 17' },
	{ day: 'Comida', value: 'Paellas, arroces y guisos por encargo' },
];

export const HORARIO_AVISO =
	'La ficha de Google no publica horario de apertura. Para saber cuándo recoger un encargo o si hay mesa, llama al 672 60 17 17 antes de acercarte a Miguelturra.';

export const SERVICIOS = [
	'Comida para llevar',
	'Paellas por encargo',
	'Arroces y fideuá',
	'Guisos de cazuela',
	'Cordero asado',
	'Cocina para grupos',
	'5,0 en Google',
	'Por teléfono',
];

export const HIGHLIGHTS = [
	{
		title: 'La paella, por encargo',
		text: 'Las fotos del perfil son casi todas la misma escena: la paella recién sacada del fuego, con las gambas colocadas en corona y el arroz suelto. La ficha clasifica el negocio como restaurante de comida para llevar, así que lo natural es encargarla y recogerla.',
	},
	{
		title: 'Cinco sobre cinco',
		text: '33 reseñas y una media de 5,0: no hay ninguna opinión por debajo. Las tres destacadas hablan de lo mismo: la paella mixta para cinco, las croquetas y el trato. Es una nota poco habitual en una ficha con esa cantidad de opiniones.',
	},
	{
		title: 'Más que arroz',
		text: 'En el perfil también hay fideuá con pollo, arroz con verduras, arroz negro con gambas, garbanzos con chorizo y morcilla, cordero asado en cazuela y pollo guisado. Y ensaladilla rusa para completar la mesa.',
	},
	{
		title: 'En Miguelturra',
		text: 'Está en la calle Francisco Fernández Ordóñez, 5, en Miguelturra, a cinco minutos del centro de Ciudad Real. Plus Code 8CCRX457+CM para llegar sin pérdida con el móvil.',
	},
];

export const MENU = [
	{
		title: 'Arroces y paellas',
		items: [
			{
				name: 'Paella mixta',
				note: 'Con pollo y gambas; es la que pide una de las reseñas para cinco personas',
			},
			{
				name: 'Paella de marisco',
				note: 'Gambas en corona sobre el arroz, como en las fotos del perfil',
			},
			{
				name: 'Arroz negro',
				note: 'Con gambas y sepia, servido en la paella del fuego',
			},
			{
				name: 'Arroz con verduras',
				note: 'Judía verde, calabacín y berenjena en trozos grandes',
			},
			{
				name: 'Fideuá',
				note: 'Fideos finos con pollo y un sofrito de tomate bien trabado',
			},
		],
	},
	{
		title: 'De cazuela',
		items: [
			{
				name: 'Cordero asado',
				note: 'En cazuela de barro, con su jugo y ajos enteros',
			},
			{
				name: 'Pollo guisado',
				note: 'Con la salsa ligada al final, para mojar pan',
			},
			{
				name: 'Garbanzos con chorizo y morcilla',
				note: 'Con pimiento rojo y cebolla, en cazuela de barro',
			},
		],
	},
	{
		title: 'Para completar',
		items: [
			{
				name: 'Croquetas',
				note: '«Muy ricas», según dos de las reseñas destacadas',
			},
			{
				name: 'Ensaladilla rusa',
				note: 'Con huevo cocido y tiras de pimiento, en bandeja de barro',
			},
		],
	},
	{
		title: 'Para grupos',
		items: [
			{
				name: 'Paella por encargo',
				note: 'La ficha no publica tamaños ni precios: se pregunta al llamar',
			},
			{
				name: 'Comida para llevar',
				note: 'Es la categoría con la que Google clasifica el negocio',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El rincón de la paella?',
		a: 'En la calle Francisco Fernández Ordóñez, 5, de Miguelturra (13170), en la provincia de Ciudad Real. Plus Code 8CCRX457+CM y coordenadas 38.9585893, -3.8858188. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google no publica horario de apertura. No hay ni una fila con horas, así que esta web no lo inventa: para saber cuándo se puede recoger un encargo o si hay mesa, llama al 672 60 17 17.',
	},
	{
		q: '¿Cómo se encarga una paella?',
		a: 'Por teléfono, en el 672 60 17 17. Google clasifica el negocio como restaurante de comida para llevar, y las fotos del perfil enseñan paellas grandes recién hechas, así que lo habitual es encargarla y recogerla. Esta web no gestiona encargos ni reservas.',
	},
	{
		q: '¿Hay que reservar mesa?',
		a: 'La ficha no publica sistema de reservas, web propia ni horario, así que no se puede confirmar desde aquí. Si quieres comer en el local, lo más seguro es llamar antes al 672 60 17 17 y preguntar disponibilidad.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Lo que muestran las fotos del perfil: paella mixta con pollo y gambas, paella de marisco, arroz negro con gambas, arroz con verduras, fideuá, cordero asado, pollo guisado, garbanzos con chorizo y morcilla, ensaladilla y croquetas. Las reseñas destacadas hablan de la paella mixta y de las croquetas.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. El establecimiento no tiene carta colgada en su ficha de Google ni web propia, así que esta página no publica importes. El precio de la paella, del arroz o de los guisos se pregunta por teléfono, en el 672 60 17 17.',
	},
	{
		q: '¿Sirven para grupos o celebraciones?',
		a: 'Las fotos del perfil incluyen paellas muy grandes y una reseña cuenta que pidieron «una paella mixta para 5». Para un grupo mayor, el tamaño y el plazo se confirman por teléfono: la ficha no publica esa información.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '5,0 sobre 5 con 33 reseñas (consultado el 2 de noviembre de 2026). Las tres reseñas destacadas son de cinco estrellas y hablan de la paella mixta, de las croquetas y del trato: «Trato excelente, y la comida inmejorable».',
	},
	{
		q: '¿Se puede llegar en coche?',
		a: 'Sí. Está en la calle Francisco Fernández Ordóñez, 5, de Miguelturra, con acceso directo desde la travesía del pueblo. El botón «Cómo llegar» abre la ruta en Google Maps con las coordenadas exactas.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona encargos, reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono 672 60 17 17.',
	},
];

export const LEGAL = {
	razonSocial: 'El rincón de la paella',
	actualizado: 'Noviembre de 2026',
};
