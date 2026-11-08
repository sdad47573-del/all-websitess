/**
 * Datos del Obrador panadería y confitería Martos y Pérez (MayPe) — Cam. San
 * Rafael, 7 (Carretera de Cádiz, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: MayPe, 36.7111759,-4.4420733,
 *   feature 0xd72f7776c213cb7:0x7e4e390110fee931.
 * - Dirección, teléfono, valoración, reseñas, horario, accesibilidad,
 *   descripción del negocio y fotos: ficha pública de Google (octubre de 2026).
 * - Horario de domingo y encargos: perfil de Instagram @panaderia_myp, que el
 *   propio negocio enlaza y donde se presenta como «Obrador MayPe».
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web propia ni
 * métodos de pago. El mostrador recoge solo lo que dice la descripción del
 * negocio y lo que se ve en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Obrador panadería y confitería Martos y Pérez (MayPe)',
	shortName: 'MayPe',
	// El nombre comercial que usa el propio negocio en su perfil.
	commercialName: 'MayPe · Martos y Pérez',
	mark: 'M',
	street: 'Cam. San Rafael, 7',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '951 69 47 03',
	phoneHref: 'tel:+34951694703',
	rating: 4.7,
	reviewsCount: 64,
	siteUrl: 'https://www.sur-digital.com/maype-obrador',
	geo: { lat: 36.7111759, lng: -4.4420733 },
	featureId: '0xd72f7776c213cb7:0x7e4e390110fee931',
	placeId: 'ChIJtzwhbHf3cg0RMen-EAE5Tn4',
	googleCategory: 'Panadería',
	instagram: 'https://www.instagram.com/panaderia_myp/',
	instagramHandle: '@panaderia_myp',
	tagline: 'Pan 100% artesanal y dulces artesanales en el Camino de San Rafael',
	description:
		'Obrador panadería y confitería Martos y Pérez (MayPe), en Cam. San Rafael, 7 (Carretera de Cádiz, 29006 Málaga). Pan artesanal hecho a diario, bollería, confitería y tartas por encargo. 4,7 sobre 5 en Google con 64 reseñas. Teléfono 951 69 47 03.',
	hoursSummary: 'L–V 7:00–21:00 · S 7:30–20:30 · D 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Obrador+panader%C3%ADa+y+confiter%C3%ADa+Martos+y+P%C3%A9rez+(MayPe)/@36.7111759,-4.4420733,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7776c213cb7:0x7e4e390110fee931!8m2!3d36.7111759!4d-4.4420733!16s%2Fg%2F1thn6w9m?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7111759%2C-4.4420733',
	embed: 'https://maps.google.com/maps?q=36.7111759,-4.4420733&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:00–21:00' },
	{ day: 'Sábado', value: '7:30–20:30' },
	{ day: 'Domingo', value: '8:00–15:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google (octubre de 2026). El perfil de Instagram del obrador anuncia de lunes a sábado de 7:00 a 21:00 y el domingo de 8:00 a 15:00, así que el sábado conviene confirmarlo. Para el 1 y el 2 de noviembre, Día de Todos los Santos, la ficha marca 8:00–15:00.';

/** Reseñas destacadas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Todos los dulces en general tienen una pinta buenísima.',
	},
	{
		rating: 5,
		text: 'Muy buen servicio 🥰 y todo buenísimo ☺️.muy buen trato son super amables.',
	},
];

export const REVIEWS_NOTE =
	'La ficha mezcla opiniones: entre las destacadas también hay una de una estrella por un pedido que no se pudo recoger. Se citan las dos de cinco estrellas tal como están publicadas.';

/** Lo que la descripción del negocio y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pan del día',
	'Bollería',
	'Confitería',
	'Tartas por encargo',
	'Torrijas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan',
		text: 'La ficha del negocio lo dice sin rodeos: «pan 100% artesanal y hecho a diario». En las fotos se ven barras, hogazas y panes con semillas en cestas y bolsas.',
	},
	{
		title: 'El mostrador dulce',
		text: 'Napolitanas de chocolate, cañas y xuxos, torrijas con cartel propio, pasteles de nata y chocolate, tartaletas de crema y tartas de queso.',
	},
	{
		title: 'Las tartas de encargo',
		text: 'Dos de las fotos son tartas con dedicatoria escrita a mano y otra lleva una imagen impresa en la superficie. El perfil del obrador anuncia tartas con y sin encargo.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Panadería',
		items: [
			{
				name: 'Barra y hogaza',
				note: 'El pan de cada día, en cestas y bolsas en las fotos del perfil.',
			},
			{
				name: 'Panes con semillas',
				note: 'Panes ovalados y rústicos cubiertos de semillas, junto a las barras.',
			},
			{
				name: 'Hogazas de corte',
				note: 'Panes grandes con corte profundo y miga abierta, en la cesta de la primera foto.',
			},
		],
	},
	{
		title: 'Bollería',
		items: [
			{
				name: 'Napolitanas de chocolate',
				note: 'En la vitrina, con el glaseado de chocolate y las líneas de azúcar.',
			},
			{
				name: 'Cañas y xuxos',
				note: 'Rellenos y glaseados, junto a los lazos y las caracolas de la bandeja.',
			},
			{
				name: 'Torrijas',
				note: 'La vitrina lleva un cartel escrito a mano que dice «Torrijas azúcar».',
			},
		],
	},
	{
		title: 'Confitería',
		items: [
			{
				name: 'Tartas de cumpleaños',
				note: 'Con dedicatoria escrita a mano, como las dos tartas «Felicidades» de las fotos.',
			},
			{
				name: 'Tartas con foto',
				note: 'Una de las fotos muestra una tarta con una imagen impresa en la superficie. No se puede saber desde la foto si la impresión es comestible.'
			},
			{
				name: 'Pasteles y tartaletas',
				note: 'Pasteles de nata y chocolate, tartaletas de crema con cereza o albaricoque y tartas de queso.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está MayPe?',
		a: 'En el Camino de San Rafael, 7, en la Carretera de Cádiz (29006 Málaga), junto a Primor, como indica el perfil del propio obrador. El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google marca de lunes a viernes de 7:00 a 21:00, el sábado de 7:30 a 20:30 y el domingo de 8:00 a 15:00. El perfil de Instagram anuncia de lunes a sábado de 7:00 a 21:00, así que el sábado conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono, en el 951 69 47 03, o a través del perfil de Instagram @panaderia_myp. La ficha de Google no publica página web propia ni correo electrónico.',
	},
	{
		q: '¿Hacen tartas por encargo?',
		a: 'Sí. El perfil del obrador anuncia tartas «con y sin encargo» y en las fotos del perfil hay tartas de cumpleaños con dedicatoria y una con una imagen impresa en la superficie. El encargo se hace por teléfono o en el propio local; no hay pedidos online.',
	},
	{
		q: '¿Qué pan venden?',
		a: 'La descripción del negocio habla de «pan 100% artesanal y hecho a diario». En las fotos se ven barras, hogazas, panes ovalados y panes rústicos con semillas. La ficha no publica la lista completa ni los precios.',
	},
	{
		q: '¿Se puede desayunar o comer allí?',
		a: 'La ficha describe una panadería y confitería con obrador y mostrador, y no publica mesas, terraza ni servicio de cafetería. Esta página no lo afirma; si buscas eso, llama antes al 951 69 47 03.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica acceso para sillas de ruedas. También marca que no hay aparcamiento adaptado para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 64 reseñas en Google. Esta página cita dos de las reseñas destacadas, ambas de cinco estrellas; entre las destacadas también hay una de una estrella.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
];
