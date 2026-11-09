/**
 * Datos de Restaurante Bom Garfo Bairro Alto — R. do Diário de Notícias 51,
 * 1200-142 Lisboa.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Bom Garfo Bairo Alto»
 *   (así, con la errata, en Google), 38.7119489,-9.1441651,
 *   feature 0xd19347f94bc841f:0x89bd8e39732a7727 (dirección, teléfono, horario,
 *   categoría, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 */

export const BUSINESS = {
	name: 'Bom Garfo Bairro Alto',
	shortName: 'Bom Garfo',
	mark: 'BG',
	street: 'R. do Diário de Notícias, 51',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Portugal',
	postalCode: '1200-142',
	country: 'PT',
	phoneDisplay: '215 944 881',
	phoneHref: 'tel:+351215944881',
	rating: 4,
	reviewsCount: 201,
	siteUrl: 'https://www.sur-digital.com/bom-garfo',
	geo: { lat: 38.7119489, lng: -9.1441651 },
	featureId: '0xd19347f94bc841f:0x89bd8e39732a7727',
	placeId: 'ChIJH4S8lH80GQ0RJ3cqczmOvYk',
	cid: '9925245531190884135',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Bom+Garfo+Bairo+Alto/@38.7119489,-9.1441651,17z/data=!3m1!4b1!4m6!3m5!1s0xd19347f94bc841f:0x89bd8e39732a7727!8m2!3d38.7119489!4d-9.1441651!16s%2Fg%2F11dxckzf8x',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7119489%2C-9.1441651',
	embed: 'https://maps.google.com/maps?q=38.7119489,-9.1441651&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días, de 18:00 a 01:00. */
export const HOURS = [
	{ day: 'Lunes', value: '18:00–1:00' },
	{ day: 'Martes', value: '18:00–1:00' },
	{ day: 'Miércoles', value: '18:00–1:00' },
	{ day: 'Jueves', value: '18:00–1:00' },
	{ day: 'Viernes', value: '18:00–1:00' },
	{ day: 'Sábado', value: '18:00–1:00' },
	{ day: 'Domingo', value: '18:00–1:00' },
];

/**
 * Señas de identidad que sí constan: la categoría de Google, lo que anuncia el
 * escaparate (FADO LIVE, cozinha típica portuguesa), la carta de la puerta
 * (portuguesa e italiana) y lo que se ve en las fotos del perfil.
 */
export const SERVICIOS = [
	'Cocina típica portuguesa',
	'Fado live',
	'Cocina italiana',
	'Cenas con música',
	'En Bairro Alto',
	'Después de cenar',
];

/**
 * La ficha no publica carta ni precios. Los platos salen de las fotos del perfil
 * y de los carteles de la fachada; por eso no hay precios.
 */
export const MENU = [
	{
		title: 'Da nossa mesa',
		items: [
			{
				name: 'Arroz negro com gambas',
				note: 'arroz de tinta de choco con gambas a la plancha (foto del perfil)',
			},
			{ name: 'Amêijoas com coentros', note: 'almejas al estilo de la casa, con cilantro' },
			{ name: 'Sopa da casa', note: 'sopa con pan frito, servida en la mesa' },
		],
	},
	{
		title: 'Cozinha portuguesa',
		items: [
			{ name: 'Entradas', note: 'pão, azeitonas e queijo, según la carta de la puerta' },
			{ name: 'Omeletes', note: 'en la pizarra junto a la puerta' },
			{ name: 'Carnes', note: 'bife, escalopes y frango, en la sección Meat de la carta' },
			{ name: 'Peixes', note: 'bacalhau, dourada y lulas, en la sección Fish de la carta' },
		],
	},
	{
		title: 'Cozinha italiana',
		items: [
			{ name: 'Massas', note: 'spaghetti, penne, lasanha y ravioli, en la carta de la fachada' },
			{ name: 'Sobremesas', note: 'la sección Dolci de la carta italiana' },
		],
	},
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Comida boa e músicos excelentes mas pouca gente no atendimento',
	'A comida veio extremamente seca, tivemos que pedir para porem molho',
	'Bom sabor e boa música',
];

export const FAQ = [
	{
		q: '¿Dónde está Bom Garfo?',
		a: 'En la Rua do Diário de Notícias, 51, del 1200-142 Lisboa, en pleno Bairro Alto. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días, de 18:00 a 1:00, según su ficha de Google. Es horario de cenas y después de cenar; la ficha avisa de que puede cambiar en festivos, así que conviene llamar antes.',
	},
	{
		q: '¿Hay fado en directo?',
		a: 'Sí. El escaparate del restaurante anuncia «FADO LIVE» bajo el rótulo de «Cozinha Típica Portuguesa», y en las fotos del perfil se ve a una fadista cantando entre las mesas. Las reseñas hablan de «músicos excelentes» y «boa música». El horario de las actuaciones no se publica: se confirma al llamar al 215 944 881.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina típica portuguesa con una segunda carta italiana. En las fotos del perfil aparecen arroz negro con gambas, amêijoas con cilantro y sopa de la casa; los carteles de la fachada organizan la carta en entradas, omeletes, carnes, pescados, pastas y postres.',
	},
	{
		q: '¿Cuánto cuesta cenar?',
		a: 'La ficha de Google no publica carta ni precios, y esta web no los inventa. Junto a la puerta hay carteles con la carta y sus precios; para el precio del día, llama al 215 944 881.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reserva online y esta web no tiene formulario. Para reservar mesa hay que llamar al 215 944 881, sobre todo si quieres cenar mientras hay fado.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google solo marca estacionamiento accesible para personas en sillas de ruedas. No confirma entrada, asientos ni aseo adaptados, así que para eso lo mejor es llamar antes.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,0 sobre 5 con 201 reseñas. Las que se publican en la ficha son variadas: elogian la música y el sabor y mencionan también un servicio escaso o algún plato seco.',
	},
];
