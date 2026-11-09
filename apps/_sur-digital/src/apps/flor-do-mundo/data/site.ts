/**
 * Datos de Flor do Mundo — R. da Misericórdia 87, 1200-284 Lisboa (Chiado).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Flor do Mundo», 38.7120727,-9.1430905,
 *   feature 0xd19347f9e9e602d:0x7e13829403834377 (dirección, teléfono, horario,
 *   categorías, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 */

export const BUSINESS = {
	name: 'Flor do Mundo',
	shortName: 'Flor do Mundo',
	mark: 'FM',
	street: 'R. da Misericórdia, 87',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Portugal',
	postalCode: '1200-284',
	country: 'PT',
	phoneDisplay: '21 346 9589',
	phoneHref: 'tel:+351213469589',
	rating: 4.4,
	reviewsCount: 755,
	siteUrl: 'https://www.sur-digital.com/flor-do-mundo',
	geo: { lat: 38.7120727, lng: -9.1430905 },
	featureId: '0xd19347f9e9e602d:0x7e13829403834377',
	placeId: 'ChIJLWCenn80GQ0Rd0ODA5SCE34',
	cid: '9084748445562127223',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Flor+do+Mundo/@38.7120727,-9.1430905,17z/data=!3m1!4b1!4m6!3m5!1s0xd19347f9e9e602d:0x7e13829403834377!8m2!3d38.7120727!4d-9.1430905!16s%2Fg%2F11c56732mn',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7120727%2C-9.1430905',
	embed: 'https://maps.google.com/maps?q=38.7120727,-9.1430905&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: de lunes a sábado, de 7:00 a medianoche. */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–24:00' },
	{ day: 'Martes', value: '7:00–24:00' },
	{ day: 'Miércoles', value: '7:00–24:00' },
	{ day: 'Jueves', value: '7:00–24:00' },
	{ day: 'Viernes', value: '7:00–24:00' },
	{ day: 'Sábado', value: '7:00–24:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Fomos em 5 pessoas e a conta deu 56 €, com comida, bebida e uma sobremesa.',
	'Comi meia porção de carne de porco à alentejana e estava delicioso!',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, el atributo de brunch y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante',
	'Café',
	'Brunch',
	'Cocina portuguesa',
	'Comidas y cenas',
	'Desayunos y meriendas',
	'Abierto de 7:00 a 24:00',
	'Asientos accesibles para sillas de ruedas',
];

/**
 * La ficha no publica carta: los platos salen de las fotos del perfil (vitrina de
 * pastelería, frango piri-piri, peixe grelhado, polvo, bacalhau, arroz de marisco)
 * y de los carteles de la fachada (café Delta, Ginja Serra da Estrela).
 */
export const MENU = [
	{
		title: 'De la cocina',
		items: [
			{ name: 'Frango piri-piri com batatas e arroz', note: 'en las fotos del perfil' },
			{ name: 'Peixe grelhado com batatas a murro', note: 'en las fotos del perfil' },
			{ name: 'Bacalhau à lagareiro', note: 'en las fotos del perfil' },
			{ name: 'Polvo à lagareiro', note: 'en las fotos del perfil' },
			{ name: 'Arroz de marisco', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Para começar',
		items: [
			{ name: 'Salada de polvo', note: 'con aceitunas, zanahoria y cilantro, en las fotos del perfil' },
			{ name: 'Cesto de pão', note: 'en la mesa, en las fotos del perfil' },
		],
	},
	{
		title: 'Pastelería y café',
		items: [
			{ name: 'Pastéis de nata y bollería', note: 'en la vitrina, según las fotos del perfil' },
			{ name: 'Tartas y pasteles', note: 'en la vitrina, según las fotos del perfil' },
			{ name: 'Café Delta', note: 'el letreiro de la fachada' },
			{ name: 'Ginja Serra da Estrela', note: 'el local se anuncia como socio oficial en el escaparate' },
		],
	},
	{
		title: 'A cualquier hora',
		items: [
			{ name: 'Desayuno y café', note: 'abre a las 7:00 de lunes a sábado' },
			{ name: 'Brunch', note: 'atributo «Brunch» de la ficha de Google' },
			{ name: 'Comidas y cenas', note: 'cocina abierta hasta las 00:00, según el toldo' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Flor do Mundo?',
		a: 'En la Rua da Misericórdia, 87, del 1200-284 Lisboa, en pleno Chiado. El mapa de esta página lleva directo al local y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado, de 7:00 de la mañana a medianoche, sin cerrar a mediodía. Los domingos cierra. El toldo de la fachada concreta que la cocina abre de 10:00 a 00:00, así que la pastelería y el café arrancan antes que los platos. Es el horario que publica su ficha de Google: conviene confirmarlo llamando antes, sobre todo en festivos.',
	},
	{
		q: '¿Se puede desayunar y hacer brunch?',
		a: 'Sí. La ficha lo clasifica como restaurante y café, y marca «brunch» entre sus atributos. Con el horario de 7:00 a 24:00 cubre desayuno, comida, merienda y cena.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina portuguesa de restaurante y café. Sus reseñas citan la carne de porco à alentejana —«comi meia porção... e estava delicioso»— y comidas completas para grupos. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'Una reseña deja una referencia: «fomos em 5 pessoas e a conta deu 56 €, com comida, bebida e uma sobremesa». La ficha no publica carta, así que los precios actuales se confirman en el propio local o llamando al 21 346 9589.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online y esta web no tiene formulario. Para reservar mesa hay que llamar al 21 346 9589.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca asientos accesibles para personas en sillas de ruedas. No confirma entrada ni aseo adaptados, así que para eso lo mejor es llamar antes al 21 346 9589.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 755 reseñas. Las publicadas destacan la relación calidad-precio y platos como la carne de porco à alentejana.',
	},
];
