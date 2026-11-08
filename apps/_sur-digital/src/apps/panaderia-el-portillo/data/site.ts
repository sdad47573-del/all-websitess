/**
 * Datos de Panadería El Portillo S.L. — Extrarradio Llanos del Castillo, 1B,
 * 14005 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería El Portillo S.L.,
 *   37.8585527,-4.8456148, feature 0xd6d273d41bfebd5:0xd7ae8c6f453abd30.
 * - Categoría, valoración, reseñas, horario, teléfono y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web, correo, redes, carta ni
 * precios. El mapa y las indicaciones llevan al punto exacto. El mostrador
 * recoge solo lo que muestran las fotos y lo que cuentan las reseñas, sin
 * importes.
 */

export const BUSINESS = {
	name: 'Panadería El Portillo S.L.',
	shortName: 'El Portillo',
	mark: 'P',
	street: 'Extrarradio Llanos del Castillo, 1B',
	district: 'Córdoba',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14005',
	country: 'ES',
	phone: '957 32 91 29',
	phoneHref: 'tel:+34957329129',
	rating: 4.4,
	reviewsCount: 697,
	siteUrl: 'https://www.sur-digital.com/panaderia-el-portillo',
	geo: { lat: 37.8585527, lng: -4.8456148 },
	featureId: '0xd6d273d41bfebd5:0xd7ae8c6f453abd30',
	placeId: 'ChIJ1eu_QT0nbQ0RML06RW-Mrtc',
	googleCategory: 'Panadería',
	tagline: 'Panadería, confitería y desayunos en Córdoba',
	description:
		'Panadería El Portillo S.L., panadería, confitería y desayunos en el Extrarradio Llanos del Castillo, 1B (14005 Córdoba). Pan, tostadas, café, bollería, tartas y dulces. Abierta todos los días. 4,4 sobre 5 con 697 reseñas en Google.',
	hoursSummary: 'L–J 6:00–15:00 · V–S 6:00–19:00 · D 7:00–19:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+El+Portillo+S.L./@37.8585527,-4.8456148,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d273d41bfebd5:0xd7ae8c6f453abd30!8m2!3d37.8585527!4d-4.8456148!16s%2Fg%2F1th4brgz?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=15541513773632896304',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8585527%2C-4.8456148',
	embed: 'https://maps.google.com/maps?q=37.8585527,-4.8456148&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8585527,-4.8456148',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '6:00–15:00' },
	{ day: 'Viernes y sábado', value: '6:00–19:00' },
	{ day: 'Domingo', value: '7:00–19:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. De lunes a jueves cierra a las 15:00; viernes, sábados y domingos alarga hasta las 19:00. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Desayunos',
	'Meriendas',
	'Café',
	'Tartas y dulces',
];

export const HIGHLIGHTS = [
	{
		title: 'Desayunos variados',
		text: 'El toldo de la fachada anuncia «Desayunos variados». Las reseñas lo confirman: «Se desayuna muy bien, las trabajadoras son muy atentas y las tostadas, enormes».',
	},
	{
		title: 'Confitería',
		text: 'El rótulo de la entrada dice «Panadería - Confitería». En las vitrinas hay milhojas, napolitanas, tartas y dulces de crema.',
	},
	{
		title: 'Meriendas y postres',
		text: 'Las fotos del perfil muestran mesas con café y tartas, y un gofre con helado, nata y chocolate para merendar.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan del día',
				note: 'Pan de panadería, a la venta en el mostrador mientras dura la mañana.',
			},
			{
				name: 'Tostadas',
				note: '«Las tostadas, enormes», según una de las reseñas de Google.',
			},
		],
	},
	{
		title: 'La confitería',
		items: [
			{
				name: 'Milhojas y napolitanas',
				note: 'En las vitrinas del local, junto a los dulces de crema y chocolate.',
			},
			{
				name: 'Tartas y pasteles',
				note: 'En las fotos aparecen tartas de queso, de manzana y pasteles de nata.',
			},
			{
				name: 'Mitad y mitad',
				note: '«Se pueden pedir de distintos sabores mitad/mitad (trufa, nata, merengue, etc)», cuenta una reseña.',
			},
		],
	},
	{
		title: 'Desayunos y meriendas',
		items: [
			{
				name: 'Café',
				note: 'Una reseña resume el desayuno así: «tostada o dulces y buen café».',
			},
			{
				name: 'Gofres y postres',
				note: 'En las fotos del perfil aparece un gofre con helado, nata, chocolate y galleta.',
			},
			{
				name: 'Terraza',
				note: 'La fachada tiene mesas fuera, bajo el toldo de «Desayunos variados».',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería El Portillo?',
		a: 'En el Extrarradio Llanos del Castillo, 1B, en Córdoba (14005). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 6:00 a 15:00; los viernes y sábados de 6:00 a 19:00, y los domingos de 7:00 a 19:00. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 32 91 29. No indica página web, correo ni redes sociales, así que las consultas se atienden en el local o por teléfono.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'Las reseñas describen desayunos en el local: tostadas, dulces y café. Una de ellas dice: «Se desayuna muy bien, las trabajadoras son muy atentas y las tostadas, enormes». La ficha no publica carta ni precios.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería, dulces y tartas. Google clasifica el negocio como panadería. La ficha no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Se pueden pedir dulces de dos sabores?',
		a: 'Sí, según una reseña de Google: «Se pueden pedir de distintos sabores mitad/mitad (trufa, nata, merengue, etc)». La ficha no detalla el surtido completo ni los precios; se pregunta en el mostrador.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. En la foto de la fachada se ven mesas fuera, bajo el toldo rojo que anuncia «Desayunos variados». La ficha no detalla el número de mesas ni si se puede reservar.',
	},
	{
		q: '¿Se puede merendar?',
		a: 'Las fotos del perfil muestran mesas con café y tartas, y un gofre con helado, nata y chocolate. La ficha no publica una carta de meriendas ni precios, así que conviene preguntar en el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y aparcamiento adaptado. No publica información sobre el mostrador o el aseo, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,4 sobre 5 con 697 reseñas en Google. Las reseñas destacadas hablan del desayuno, las tostadas, el café y los dulces.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local o por teléfono.',
	},
];
