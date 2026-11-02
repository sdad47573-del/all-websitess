/**
 * Datos de «Restaurante Egaña Bar» — Egaña Kalea, 14, Abando, 48010 Bilbao.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 43.258444, -2.9387189, feature
 *   0xd4e50298d23b5a7:0xa8db09ed719ba3be (nombre, dirección, categorías,
 *   teléfono, valoración, horario, accesibilidad y descripción del local),
 *   consultada el 2 de noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - Google lo clasifica como «Bar» y «Restaurante vasco». La ficha sí publica
 *   horario semanal y la descripción que firma el propio local, pero no carta con
 *   precios ni web propia.
 * - La ficha marca que no hay acceso adaptado para sillas de ruedas ni
 *   aparcamiento adaptado.
 * - La media es 4,2 sobre 5 con 564 reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante Egaña Bar',
	fullName: 'Restaurante Egaña Bar',
	mark: 'EB',
	street: 'Egaña Kalea, 14',
	city: 'Bilbao',
	province: 'Bizkaia',
	region: 'País Vasco',
	postalCode: '48010',
	country: 'ES',
	siteUrl: 'https://restaurante-egana-bar.vercel.app',
	geo: { lat: 43.258444, lng: -2.9387189 },
	featureId: '0xd4e50298d23b5a7:0xa8db09ed719ba3be',
	placeId: 'ChIJp7UjjSlQTg0RvqObce0J26g',
	channel: '/g/1tqnmyw8',
	plusCode: '8CMV7356+9G Bilbao',
	category: 'Bar',
	categories: ['Bar', 'Restaurante vasco'],
	phone: '685 92 95 84',
	phoneHref: 'tel:+34685929584',
	tagline: 'Pintxos caseros, menú y vinos en el barrio de Abando',
	description:
		'Restaurante Egaña Bar, bar y restaurante vasco en Egaña Kalea, 14, Abando, Bilbao (48010). Pintxos caseros, menú del día, raciones para llevar y selección de vinos. 4,2 sobre 5 con 564 reseñas en Google.',
	hasPublicWebsite: false,
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Ega%C3%B1a+Bar/@43.258444,-2.9387189,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e50298d23b5a7:0xa8db09ed719ba3be!8m2!3d43.258444!4d-2.9387189!16s%2Fg%2F1tqnmyw8',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.258444%2C-2.9387189',
	embed: 'https://maps.google.com/maps?q=43.258444,-2.9387189&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.258444%2C-2.9387189',
} as const;

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 4.2,
	count: 564,
	label: '4,2',
} as const;

/** Horario que publica la ficha: abre a las 7:00 y cierra a las 22:30, domingo cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: '7:00 – 22:30' },
	{ day: 'Martes', value: '7:00 – 22:30' },
	{ day: 'Miércoles', value: '7:00 – 22:30' },
	{ day: 'Jueves', value: '7:00 – 22:30' },
	{ day: 'Viernes', value: '7:00 – 22:30' },
	{ day: 'Sábado', value: '8:00 – 22:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
] as const;

export const HORARIO_AVISO =
	'Horario copiado de la ficha de Google Maps el 2 de noviembre de 2026: de lunes a viernes de 7:00 a 22:30, sábado desde las 8:00 y domingo cerrado. En accesibilidad la ficha marca que no hay acceso adaptado para sillas de ruedas ni aparcamiento adaptado.';

export const SERVICIOS = [
	'Bar',
	'Restaurante vasco',
	'Pintxos caseros',
	'Menú del día',
	'Raciones para llevar',
	'Selección de vinos',
	'Café',
	'Abando',
] as const;

export const HIGHLIGHTS = [
	{
		title: 'Pintxos de barra',
		text: 'El propio local se define así en su ficha: «pintxos caseros y una cuidada selección de vinos». Una de las reseñas de cinco estrellas lo confirma con sus palabras: «Ambiente tranquilo y amigable, buen café y gran variedad de pinchos».',
	},
	{
		title: 'Menú del día',
		text: '«Sitio agradable, con buen servicio y las camareras muy simpáticas, buenos menús», dice otra de las reseñas destacadas. La ficha no publica la carta ni los precios del menú, así que aquí no se copia ninguno: se pregunta en la barra o por teléfono.',
	},
	{
		title: 'Raciones para llevar',
		text: 'Una reseña de cuatro estrellas enumera lo que se puede pedir para casa: «También raciones para llevar: ensalada, ensaladilla, callos etc.». Es un bar de barrio con cocina de cuchara, no solo de pintxo y café.',
	},
	{
		title: '4,2 sobre 5 con 564 reseñas',
		text: 'La media de la ficha es 4,2 con 564 opiniones (2 de noviembre de 2026), alta para un bar de barrio con este volumen. Las tres reseñas que Google destaca son de cuatro y cinco estrellas y hablan de servicio, menús y pinchos.',
	},
];

export const MENU = [
	{
		title: 'Barra',
		items: [
			{
				name: 'Pintxos caseros',
				note: 'Bocadillos de tortilla y jamón, la bandera que anuncia la propia ficha',
			},
			{
				name: 'Gildas',
				note: 'Aceituna, anchoa y cebolleta en brocheta, como en la foto del perfil',
			},
			{
				name: 'Café',
				note: '«Buen café», en palabras de una de las reseñas destacadas',
			},
		],
	},
	{
		title: 'Del menú y la mesa',
		items: [
			{
				name: 'Entrecot con patatas y pimientos',
				note: 'A la plancha, con patatas fritas y pimientos de Padrón',
			},
			{
				name: 'Pescado a la plancha',
				note: 'Con limón y patatas, tal como aparece en la foto del perfil',
			},
			{
				name: 'Gambas cocidas',
				note: 'Servidas en plato alargado, para compartir en el centro',
			},
			{
				name: 'Callos',
				note: 'En salsa de tomate; también se pueden pedir para llevar',
			},
			{
				name: 'Paté con pan tostado',
				note: 'Con el nombre Egaña escrito en chocolate en el plato',
			},
			{
				name: 'Tarta de queso',
				note: 'Con nata y salsa de frutos rojos, el postre de las fotos',
			},
		],
	},
	{
		title: 'Para llevar',
		items: [
			{
				name: 'Ensalada',
				note: 'De la lista de raciones para llevar que menciona una reseña',
			},
			{
				name: 'Ensaladilla',
				note: 'También para llevar, según esa misma reseña',
			},
			{
				name: 'Callos',
				note: 'Cocina de cuchara para recoger en el bar',
			},
		],
	},
	{
		title: 'Bebidas',
		items: [
			{
				name: 'Vinos',
				note: 'La «cuidada selección de vinos» que anuncia la descripción del local',
			},
			{
				name: 'Café y barra',
				note: 'Abren a las 7:00 de lunes a viernes, así que hay cafetería de mañana',
			},
			{
				name: 'Refrescos',
				note: 'La ficha no publica precios de ninguna bebida',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Egaña Bar?',
		a: 'En Egaña Kalea, 14, barrio de Abando, 48010 Bilbao (Bizkaia), con Plus Code 8CMV7356+9G y coordenadas 43.258444, -2.9387189. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 685 92 95 84, el número publicado en la ficha del establecimiento. Sirve para preguntar por el menú del día, reservar mesa o encargar raciones para llevar. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a viernes de 7:00 a 22:30, sábado de 8:00 a 22:30 y domingo cerrado, según la ficha de Google (consultada el 2 de noviembre de 2026). Abre muy temprano, así que funciona también como cafetería de mañana.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pintxos caseros en la barra, menú del día y raciones para llevar. Las reseñas mencionan ensalada, ensaladilla y callos entre lo que se puede recoger. La ficha no publica la carta completa ni los platos del menú, así que esta web no los inventa.',
	},
	{
		q: '¿Hay precios publicados?',
		a: 'No. La ficha de Google no publica carta ni importes, y esta página no copia precios de otras fuentes. Para saber cuánto cuesta el menú o las raciones, hay que preguntar en el bar o llamar al 685 92 95 84.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí, al menos raciones: una de las reseñas destacadas habla de «raciones para llevar: ensalada, ensaladilla, callos etc.». La ficha no publica reparto a domicilio ni plataforma de pedidos, así que lo lógico es llamar antes.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,2 sobre 5 con 564 reseñas (consultado el 2 de noviembre de 2026). Las tres destacadas son buenas: «También raciones para llevar: ensalada, ensaladilla, callos etc.», «Ambiente tranquilo y amigable, buen café y gran variedad de pinchos» y «Sitio agradable, con buen servicio y las camareras muy simpáticas, buenos menús».',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha es explícita en los dos datos que publica: no hay acceso para sillas de ruedas y no hay aparcamiento adaptado. Si necesitas acceso sin escalones, conviene llamar antes al 685 92 95 84 para confirmarlo.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica sistema de reservas ni web propia, así que no se puede confirmar desde aquí. Para grupos o comidas, lo más seguro es llamar al 685 92 95 84.',
	},
	{
		q: '¿Esta web es del bar?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio bar.',
	},
];
