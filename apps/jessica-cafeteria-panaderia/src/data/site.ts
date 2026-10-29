/**
 * Datos de Jessica Cafetería Panadería — Centro, 14004 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Jessica Cafetería Panadería,
 *   37.876759,-4.785144, feature 0xd6d209eaf72f353:0x2a2e3ce1c2b43ec6.
 * - Categoría, valoración, reseñas y horario: ficha pública de Google
 *   (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica calle ni número, teléfono,
 * descripción, carta, precios, métodos de pago ni reparto. El surtido se
 * describe solo con las fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'Jessica Cafetería Panadería',
	shortName: 'Jessica',
	mark: 'J',
	street: 'Centro',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14004',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.4,
	reviewsCount: 102,
	siteUrl: 'https://jessica-cafeteria-panaderia.vercel.app',
	geo: { lat: 37.876759, lng: -4.785144 },
	featureId: '0xd6d209eaf72f353:0x2a2e3ce1c2b43ec6',
	placeId: 'ChIJU_Nyr54gbQ0Rxj60wuE8Lio',
	googleCategory: 'Panadería',
	tagline: 'Panadería y cafetería para desayunar en el Centro',
	description:
		'Jessica Cafetería Panadería, en el Centro de Córdoba (14004). Panadería y cafetería para desayunar, con tostadas y pan del día. Abre de lunes a sábado de 7:00 a 15:00; domingo cerrado. 4,4 sobre 5 con 102 reseñas en Google.',
	hoursSummary: 'L–S 7:00–15:00 · domingo cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Jessica+Cafeter%C3%ADa+Panader%C3%ADa/@37.876759,-4.785144,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d209eaf72f353:0x2a2e3ce1c2b43ec6!8m2!3d37.876759!4d-4.785144!16s%2Fg%2F11cmg18rkj?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=3039433738853564102',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.876759%2C-4.785144',
	embed: 'https://maps.google.com/maps?q=37.876759,-4.785144&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.876759,-4.785144',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '7:00–15:00' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre a las 7:00 de lunes a sábado y cierra a las 15:00; el domingo descansa. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Panadería',
	'Cafetería',
	'Desayunos',
	'Tostadas',
	'Molletes',
	'Café',
];

export const HIGHLIGHTS = [
	{
		title: 'Desayunos',
		text: '«Buen sitio para desayunar y buen aceite para las tostadas», cuenta una reseña. Es lo que más se repite en las opiniones de Google.',
	},
	{
		title: 'Media de jamón York',
		text: 'Otra reseña concreta lo que pidió: «media de jamón York con mantequilla y una Coca-Cola, 2,80 €». La ficha no publica carta ni precios.',
	},
	{
		title: 'Trato cercano',
		text: '«Los dueños, una pareja joven, son muy cordiales, amables y serviciales», dice otra de las 102 reseñas que suman 4,4 sobre 5.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'El pan',
		items: [
			{
				name: 'Pan del día',
				note: 'Es panadería además de cafetería; la ficha no detalla variedades ni precios.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: esta web no los indica.',
			},
		],
	},
	{
		title: 'Desayunos',
		items: [
			{
				name: 'Tostadas',
				note: '«Buen aceite para las tostadas», según una reseña de Google.',
			},
			{
				name: 'Molletes con tomate',
				note: 'En las fotos del perfil, con el tomate rallado y el aceite aparte.',
			},
			{
				name: 'Media de jamón York con mantequilla',
				note: 'La reseña que la menciona habla de 2,80 € con una Coca-Cola; el precio no está publicado en la ficha.',
			},
			{
				name: 'Café',
				note: 'Es cafetería; la ficha no publica carta de cafés ni precios.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Jessica Cafetería Panadería?',
		a: 'En el distrito Centro de Córdoba (14004). La ficha de Google no publica calle ni número, solo la zona y las coordenadas; el mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 7:00 a 15:00 y el domingo cierra. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google no publica teléfono, web propia, correo ni redes. La única vía que figura es la propia ficha de Google Maps y el local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan y desayunos: tostadas, café y bocadillos como la media de jamón York con mantequilla que menciona una reseña. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica datos de accesibilidad (ni acceso, ni aseo, ni aparcamiento), así que esta página no afirma nada al respecto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,4 sobre 5 con 102 reseñas en Google, que la clasifica como panadería. Las reseñas destacan el desayuno, el aceite de las tostadas y el trato de los dueños.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'No. Según la ficha de Google, el domingo está cerrado; de lunes a sábado abre de 7:00 a 15:00.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
