/**
 * Datos de El Racó de l'Arròs — Av. Madrid, 3, 03724 Moraira (Alicante).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «El Racó de l'Arròs», 38.6874808, 0.133785,
 *   feature 0x129e07c91a55ff39:0x5317665fef675a11.
 * - Nombre, dirección, teléfono, categorías, valoración, horario, accesibilidad
 *   y reseñas: ficha pública de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs).
 *
 * La ficha no publica carta, precios ni web propia: lo que aparece en la web
 * es lo que dice la ficha y lo que se reconoce en las fotos del perfil.
 */

export const BUSINESS = {
	name: "El Racó de l'Arròs",
	fullName: "El Racó de l'Arròs",
	shortName: "El Racó de l'Arròs",
	mark: 'RA',
	street: 'Av. Madrid, 3',
	district: 'Moraira',
	city: 'Moraira',
	region: 'Comunidad Valenciana',
	postalCode: '03724',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-raco-de-l-arros',
	geo: { lat: 38.6874808, lng: 0.133785 },
	featureId: '0x129e07c91a55ff39:0x5317665fef675a11',
	placeId: 'ChIJOf9VGskHnhIREVpn719mF1M',
	plusCode: '8FC2M4PM+XG',
	googleCategory: 'Restaurante mediterráneo, de cocina española y valenciana',
	phone: '965 74 43 72',
	phoneHref: 'tel:+34965744372',
	tagline: 'Arroces y cocina valenciana en Moraira',
	description:
		"El Racó de l'Arròs, en la Avenida de Madrid, 3 (03724 Moraira, Alicante). Arroces y paellas de cocina valenciana y mediterránea, con terraza en la acera y comedor de mantel blanco. De miércoles a domingo al mediodía, y también por la noche de jueves a sábado. Martes cerrado.",
};

export const MAPS = {
	place:
		"https://www.google.com/maps/place/El+Rac%C3%B3+de+l%27Arr%C3%B2s/@38.6874808,0.133785,17z/data=!4m7!3m6!1s0x129e07c91a55ff39:0x5317665fef675a11!8m2!3d38.6874808!4d0.133785!16s%2Fg%2F1tg975wq?authuser=0&hl=es",
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6874808%2C0.133785',
	embed: 'https://maps.google.com/maps?q=38.6874808,0.133785&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.6874808,0.133785',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.5,
	count: 1194,
	label: '4,5',
};

/**
 * Horario que publica la ficha: mediodía de miércoles a domingo, y cena
 * jueves, viernes y sábado. El martes cierra todo el día.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–15:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '13:00–15:30' },
	{ dia: 'Jueves', horas: '13:00–15:30 · 19:00–22:00' },
	{ dia: 'Viernes', horas: '13:00–15:30 · 19:00–22:00' },
	{ dia: 'Sábado', horas: '13:00–15:30 · 19:00–22:00' },
	{ dia: 'Domingo', horas: '13:00–15:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advertía de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin aviso; confírmalo por teléfono antes de ir.';

/** Lo que la ficha y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Cocina valenciana',
	'Restaurante mediterráneo',
	'Arroces y paellas',
	'Arroz negro',
	'Arroz con bogavante',
	'Entrantes de marisco',
	'Comedor con mesas',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina valenciana',
		text: 'La ficha clasifica el restaurante como mediterráneo, de cocina española y de cocina valenciana. En Moraira, a un paso del mar, eso se traduce en arroces y pescado: la base de la carta que se ve en las fotos del perfil.',
	},
	{
		title: 'Arroz en paellera',
		text: 'Las fotos del perfil enseñan la paellera en la mesa: arroz amarillo con pollo y judía verde, arroz negro con sepia y arroz caldoso con bogavante. El arroz se sirve para compartir, recién hecho.',
	},
	{
		title: 'Terraza en la avenida',
		text: 'La fachada azul de la Avenida de Madrid tiene mesas en la acera bajo el toldo, con sillas de rejilla oscura, y una puerta de madera y cristal con el rótulo del restaurante en la luna. En verano, la terraza es la primera opción.',
	},
	{
		title: '4,5 sobre 5 con 1.194 reseñas',
		text: 'La ficha de Google le da 4,5 sobre 5 con 1.194 opiniones (noviembre de 2026). Las reseñas que se ven hablan del trato, del arroz, de los mejillones al vapor y de los entrantes de pulpo y clochinas.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Excelente trato, muy rico arroz y unos mejillones al vapor sabrosos.',
		valor: 5,
	},
	{
		texto: 'Buena comida..entrantes pulpo, clochinas y calamares.',
		valor: 5,
	},
	{
		texto: 'La ensalada de queso cabra excelente y el pollo de la paella lo mismo.',
		valor: 5,
	},
];

/**
 * Lo que se reconoce en las fotos del perfil y en las reseñas. La ficha no
 * publica carta ni precios, así que no se ponen importes.
 */
export const MENU = [
	{
		title: 'Arroces y paellas',
		items: [
			{ name: 'Paella de pollo y judía verde', note: 'arroz amarillo con trozos de pollo y tavella, en paellera' },
			{ name: 'Arroz negro', note: 'con sepia y gambas, servido en la paellera con limón' },
			{ name: 'Arroz con bogavante', note: 'caldoso, con medio bogavante por comensal' },
			{ name: 'Arroz del día', note: 'la ficha no publica carta; el arroz se pregunta en el local' },
		],
	},
	{
		title: 'Entrantes y marisco',
		items: [
			{ name: 'Mejillones al vapor', note: 'citados en una de las reseñas de la ficha' },
			{ name: 'Gambas al ajillo', note: 'en cazuela de barro, con el aceite y el perejil' },
			{ name: 'Calamares a la romana', note: 'rebozados, con limón y perejil' },
			{ name: 'Pulpo y clochinas', note: 'entrantes que menciona una reseña de Google' },
		],
	},
	{
		title: 'Ensaladas y para compartir',
		items: [
			{ name: 'Ensalada mixta', note: 'con atún, huevo, aceitunas y verduras en juliana' },
			{ name: 'Ensalada de queso de cabra', note: 'citada en una de las reseñas' },
			{ name: 'Pan y alioli', note: 'para la mesa, junto al arroz' },
		],
	},
	{
		title: 'Postres y sobremesa',
		items: [
			{ name: 'Postres caseros', note: 'la ficha no publica carta de postres' },
			{ name: 'Café y copa', note: 'la ficha no publica carta de bebidas' },
		],
	},
];

export const FAQ = [
	{
		q: "¿Dónde está El Racó de l'Arròs?",
		a: 'En la Avenida de Madrid, 3, 03724 Moraira (Alicante). La ficha de Google sitúa el restaurante en las coordenadas 38.6874808, 0.133785, en plena avenida y a pocos minutos del puerto de Moraira. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, el mediodía se sirve de 13:00 a 15:30 de miércoles a domingo, y también el lunes. Jueves, viernes y sábado abre además por la noche, de 19:00 a 22:00. El martes está cerrado todo el día. El día que se consultó la ficha (1 de noviembre) Google advertía de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el 965 74 43 72. No tiene web propia ni reservas online, así que el teléfono es la vía para preguntar por mesa, por el arroz del día o por un grupo.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reservas online y el restaurante no tiene página propia, así que la mesa se pide por teléfono, en el 965 74 43 72. En verano Moraira se llena, y las noches de jueves a sábado son las de más demanda: conviene llamar con tiempo.',
	},
	{
		q: '¿Qué arroces se pueden pedir?',
		a: 'En las fotos del perfil aparecen una paella de pollo con judía verde, un arroz negro con sepia y gambas y un arroz caldoso con bogavante. Las reseñas hablan del arroz y del pollo de la paella. La ficha no publica carta, así que el resto de arroces y el precio se preguntan en el local.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran mesas en la acera, delante de la fachada azul, bajo el toldo y con sillas de rejilla. El comedor de dentro tiene mantel blanco, sillas de madera con asiento azul y azulejos verdes en la pared.',
	},
	{
		q: '¿Se puede ir en silla de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas y aseo adaptado. Si necesitas una mesa concreta o la terraza, coméntalo al llamar para que te la reserven.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'Ni la ficha ni las fotos publican precios ni menú del día. El precio del arroz, de los entrantes y de la bebida solo se sabe preguntando en el restaurante.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del restaurante. Esta web es informativa: reúne los datos y las fotos públicas del local y no gestiona reservas ni pedidos.',
	},
];

export const LEGAL = {
	razonSocial: "El Racó de l'Arròs",
	actualizado: 'Noviembre de 2026',
};
