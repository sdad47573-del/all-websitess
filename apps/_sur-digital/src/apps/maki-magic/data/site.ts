/**
 * Datos de Maki magic sushi restaurante & bar — R. Garcia da Orta 545 r/c,
 * 2975-275 Quinta do Conde (Sesimbra, Setúbal).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Maki magic sushi restaurante & bar»,
 *   38.572039,-9.0402419, feature 0xd19494b5382b5a9:0x364a4d7232e23ae7
 *   (dirección, teléfono, horario, categorías, nota, reseñas, accesibilidad y
 *   la descripción del propio local).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha no publica carta con precios ni web propia: solo el teléfono. Los
 * platos que recoge la web son los que aparecen en las fotos del perfil, sin
 * inventar nombres ni precios.
 */

export const BUSINESS = {
	name: 'Maki Magic',
	fullName: 'Maki magic sushi restaurante & bar',
	shortName: 'Maki Magic',
	mark: 'MM',
	street: 'R. Garcia da Orta, 545 r/c',
	city: 'Quinta do Conde',
	municipality: 'Sesimbra',
	region: 'Setúbal',
	regionName: 'Área Metropolitana de Lisboa',
	postalCode: '2975-275',
	country: 'PT',
	phoneDisplay: '21 015 0807',
	phoneHref: 'tel:+351210150807',
	rating: 4.5,
	reviewsCount: 457,
	siteUrl: 'https://www.sur-digital.com/maki-magic',
	geo: { lat: 38.572039, lng: -9.0402419 },
	featureId: '0xd19494b5382b5a9:0x364a4d7232e23ae7',
	placeId: 'ChIJqbWCU0tJGQ0R5zriMnJNSjY',
	cid: '3912024379199994599',
	/** Categorías con las que Google describe el local. */
	googleCats: ['Restaurante de sushi', 'Restaurante japonés'],
	/** Descripción que publica el propio restaurante en su ficha. */
	ownDescription:
		'um restaurante de sushi completo com frescura, criatividade e originalidade.',
	tagline: 'Sushi y bar en la Quinta do Conde',
	description:
		'Maki Magic, restaurante de sushi y bar en la R. Garcia da Orta 545 r/c (2975-275 Quinta do Conde, Sesimbra): combinados, sashimi, nigiri y hot rolls. 4,5 en Google con 457 reseñas. Tel. 21 015 0807.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Maki+magic+sushi+restaurante+%26+bar/@38.572039,-9.0402419,17z/data=!3m1!4b1!4m6!3m5!1s0xd19494b5382b5a9:0x364a4d7232e23ae7!8m2!3d38.572039!4d-9.0402419!16s%2Fg%2F11qfz4bz6r',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.572039%2C-9.0402419',
	embed: 'https://maps.google.com/maps?q=38.572039,-9.0402419&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: dos turnos, con el lunes cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Miércoles', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Jueves', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Viernes', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Sábado', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Domingo', value: '12:00–15:00 · 19:00–23:00' },
];

/** Señas de identidad que constan en la ficha y en las fotos del perfil. */
export const SERVICIOS = [
	'Sushi y cocina japonesa',
	'Combinados para compartir',
	'Bar',
	'Takeaway',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
	'Aseo adaptado',
];

/**
 * Carta. No hay carta publicada con precios: estos son los platos que se ven en
 * las fotos del perfil del restaurante en Google Maps.
 */
export const MENU = [
	{
		title: 'Combinados',
		items: [
			{
				name: 'Combinado de la casa',
				note: 'bandeja redonda con anillos de uramaki alrededor y un plato central de sashimi',
			},
			{
				name: 'Bandeja para grupo',
				note: 'la tabla grande de las fotos: abanico de aguacate, sashimi, nigiri, maki y rolls',
			},
		],
	},
	{
		title: 'Al corte',
		items: [
			{
				name: 'Sashimi',
				note: 'salmón, atún y pescado blanco en abanico, con pepino, limón y hojas verdes',
			},
			{
				name: 'Nigiri',
				note: 'con un punto de crema de queso y topping dulce, o con el pescado a la brasa',
			},
			{
				name: 'Gunkan y piezas de salmón',
				note: 'las piezas altas de las fotos, con sésamo, cebollino y salsa de anguila',
			},
		],
	},
	{
		title: 'Rolls',
		items: [
			{
				name: 'Uramaki',
				note: 'arroz por fuera, con aguacate, pepino y salmón, y sésamo negro',
			},
			{
				name: 'Hot rolls rebozados',
				note: 'fritos, con mayonesa picante, chile y cebollino por encima',
			},
			{
				name: 'Rolls con salsa de anguila',
				note: 'el acabado brillante de las fotos, con copos crujientes y sésamo',
			},
		],
	},
	{
		title: 'Para acompañar',
		items: [
			{ name: 'Gari', note: 'jengibre encurtido, en el cuenco blanco que sale en las fotos' },
			{ name: 'Wasabi y soja', note: 'lo clásico, para las piezas al corte' },
			{ name: 'Bar', note: 'el local se anuncia como «sushi restaurante & bar»' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Maki Magic?',
		a: 'En la R. Garcia da Orta, 545 r/c, en la Quinta do Conde (2975-275), municipio de Sesimbra, en la margen sur del Tajo. Está al lado de la EN-10, con parada de autobús a unos 800 metros y la estación de Coina a unos 3,5 km. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. De martes a domingo sirve dos turnos: mediodía de 12:00 a 15:00 y cena de 19:00 a 23:00. Es el horario de su ficha de Google, que avisa de que en festivos puede cambiar: si vas en una fecha señalada, llama antes al 21 015 0807.',
	},
	{
		q: '¿Qué se come?',
		a: 'Sushi y cocina japonesa. En las fotos del perfil se ven combinados en bandeja (con anillos de uramaki y un plato central de sashimi), sashimi de salmón, atún y pescado blanco, nigiri con crema de queso y topping dulce, uramaki con sésamo negro, hot rolls rebozados con mayonesa picante y rolls con salsa de anguila, además de gari y wasabi.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha de Google no publica carta ni precios, y esta web no los inventa. El restaurante sí anuncia en sus redes un menú de sushi con precios propios, así que lo más rápido es llamar al 21 015 0807 y preguntar por la carta del día o pedirla al llegar.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí, el local anuncia servicio de takeaway en sus redes sociales y aparece en plataformas de reparto con entrega y recogida. La ficha de Google no publica un sistema propio de pedidos, así que para encargar lo más directo es llamar al 21 015 0807.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reserva online. El teléfono es el 21 015 0807; conviene llamar si vais en grupo o un fin de semana, porque el comedor es amplio pero se llena a la hora de cenar.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Sí, y de forma completa: su ficha de Google marca acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas. Es uno de los pocos locales de la zona que lo detalla entero.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,5 sobre 5 con 457 reseñas, una nota alta y con muchas opiniones para un restaurante de sushi fuera del centro de Lisboa.',
	},
	{
		q: '¿Se puede ir solo a tomar algo?',
		a: 'El local se presenta como «sushi restaurante & bar», y en la ficha tiene servicio de barra y bar. Si solo quieres una copa o una cerveza, lo mejor es llamar y confirmar el horario del bar, que no está publicado aparte del del restaurante.',
	},
];
