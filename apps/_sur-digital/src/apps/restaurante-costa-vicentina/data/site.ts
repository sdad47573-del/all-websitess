/**
 * Datos de Restaurante Costa Vicentina — R. dos Correeiros, 37,
 * 1100-166 Lisboa (São Nicolau, Baixa pombalina).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Costa Vicentina»,
 *   38.7101335,-9.1369933, feature 0xd193479a64b3ab5:0x785ccd230b910bc0
 *   (dirección, teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Ficha de All About Portugal (precio medio, tipo de cocina y servicios:
 *   para llevar, reparto, catering, aire acondicionado y tarjetas).
 * - Reseñas y fichas de directorio (bacalhau, polvo y camarões entre los platos
 *   más citados).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * El dominio antiguo del restaurante (costa-vicentina.pt) ya no responde y la
 * web que enlaza Google es un entorno de pruebas de agencia: esta web no la usa
 * como fuente ni la enlaza. No hay carta publicada con precios.
 */

export const BUSINESS = {
	name: 'Costa Vicentina',
	fullName: 'Restaurante Costa Vicentina',
	shortName: 'Costa Vicentina',
	mark: 'CV',
	street: 'R. dos Correeiros, 37',
	city: 'Lisboa',
	municipality: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Área Metropolitana de Lisboa',
	postalCode: '1100-166',
	country: 'PT',
	phoneDisplay: '21 346 0905',
	phoneHref: 'tel:+351213460905',
	rating: 2.5,
	reviewsCount: 312,
	/** Precio medio orientativo que publican las guías locales. */
	averagePrice: '15 €',
	siteUrl: 'https://www.sur-digital.com/restaurante-costa-vicentina',
	geo: { lat: 38.7101335, lng: -9.1369933 },
	featureId: '0xd193479a64b3ab5:0x785ccd230b910bc0',
	placeId: 'ChIJtTpLpnk0GQ0RwAuRCyPNXHg',
	cid: '8673032532810337216',
	/** Categoría con la que Google describe el local. */
	googleCats: ['Restaurante'],
	tagline: 'Cocina portuguesa en plena Baixa, a dos pasos de la Rua Augusta',
	description:
		'Costa Vicentina (BonaVentura Wine & Food), restaurante de cocina portuguesa e internacional en la R. dos Correeiros 37 (1100-166 Lisboa), en la Baixa pombalina: arroz de marisco, polvo grelhado, cataplana y carnes a la brasa, con servicio de sala y para llevar. 2,5 en Google con 312 reseñas. Tel. 21 346 0905.',
	/** Rótulo con el que el local se anuncia hoy en la fachada y en la calle. */
	alsoKnownAs: 'BonaVentura Wine & Food',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Costa+Vicentina/@38.7101335,-9.1369933,17z/data=!3m1!4b1!4m6!3m5!1s0xd193479a64b3ab5:0x785ccd230b910bc0!8m2!3d38.7101335!4d-9.1369933!16s%2Fg%2F11fylpqjww',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7101335%2C-9.1369933',
	embed: 'https://maps.google.com/maps?q=38.7101335,-9.1369933&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: lunes cerrado, de martes a domingo sin pausa. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '11:45–23:45' },
	{ day: 'Miércoles', value: '11:45–23:45' },
	{ day: 'Jueves', value: '11:45–23:45' },
	{ day: 'Viernes', value: '11:45–23:45' },
	{ day: 'Sábado', value: '11:45–23:45' },
	{ day: 'Domingo', value: '11:45–23:45' },
];

/** Servicios que constan en la ficha y en guías locales. */
export const SERVICIOS = [
	'Cocina portuguesa',
	'Pescado y marisco',
	'Comer en el local',
	'Para llevar',
	'Reparto a domicilio',
	'Catering',
	'Aire acondicionado',
	'Tarjetas y cajero',
	'Zona de fumadores',
];

/**
 * Carta. No hay carta publicada con precios: los apartados salen de los platos
 * que citan las reseñas y de lo que aparece en las fotos del perfil de Google.
 */
export const MENU = [
	{
		title: 'Do mar',
		items: [
			{
				name: 'Arroz de marisco',
				note: 'arroz caldoso con marisco, servido en la paellera negra con limón',
			},
			{
				name: 'Polvo grelhado',
				note: 'pulpo a la brasa con patata cocida, cebolla y aceite de oliva',
			},
			{
				name: 'Cataplana de marisco',
				note: 'cataplana de cobre con patata, almejas y mejillones, con cilantro',
			},
			{ name: 'Mexilhões', note: 'mejillones, uno de los platos que citan las reseñas' },
		],
	},
	{
		title: 'Da brasa',
		items: [
			{
				name: 'Bife com batatas fritas',
				note: 'entrecot a la parrilla con patatas fritas y ensalada, como el de la pizarra',
			},
			{
				name: 'Mixed meat grill',
				note: 'parrillada mixta para dos, la que anuncia la pizarra de la calle',
			},
			{ name: 'Carnes a la brasa', note: 'bife y carnes de la parrilla, con guarnición' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Azeitonas e manteiga', note: 'aceitunas y mantequilla, lo primero que llega a la mesa' },
			{ name: 'Pão', note: 'pan del día, para la espera' },
			{ name: 'Vinho português', note: 'tintos y blancos de la carta de vinos' },
			{ name: 'Cerveza y sangria', note: 'Super Bock bien fría o una jarra de sangría' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Sobremesas', note: 'los postres portugueses de la casa' },
			{ name: 'Café', note: 'para cerrar la comida' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Costa Vicentina?',
		a: 'En la R. dos Correeiros, 37 (1100-166 Lisboa), en la freguesia de São Nicolau, en plena Baixa pombalina. La calle va de la Rua Augusta a la Praça da Figueira, así que queda a pocos minutos del Terreiro do Paço, del Elevador de Santa Justa y de la estación de Baixa-Chiado. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Cierra los lunes. De martes a domingo abre de 11:45 a 23:45, sin pausa entre la comida y la cena. Es el horario de su ficha de Google; en festivos puede cambiar, así que si vas en una fecha señalada conviene llamar antes al 21 346 0905.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina portuguesa e internacional, con el pescado y el marisco como protagonistas. En las fotos de su perfil se ven el arroz de marisco servido en paellera, el polvo grelhado con patata y cebolla, la cataplana de marisco con almejas y mejillones, los mexilhões y el bife con patatas fritas. La pizarra de la calle anuncia también parrillada mixta. Las guías locales le dan un precio medio de unos 15 € por persona.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha de Google no publica carta ni precios, y esta web no los inventa. El precio medio que manejan las guías de la ciudad ronda los 15 € por persona; para la carta del día lo más rápido es llamar al 21 346 0905 o preguntar al llegar.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reserva online. El teléfono es el 21 346 0905, y conviene llamar si vais en grupo o en fin de semana, porque está en una de las calles más transitadas de la Baixa y el comedor se llena a la hora de comer.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. El local anuncia servicio para llevar y reparto a domicilio, además de catering para grupos. La ficha de Google no tiene sistema propio de pedidos, así que lo directo es llamar al 21 346 0905.',
	},
	{
		q: '¿Está adaptado para sillas de ruedas?',
		a: 'La ficha de Google solo marca un dato de accesibilidad, y es negativo: no hay aparcamiento adaptado. En la Baixa pombalina el aparcamiento es complicado en general, y lo habitual es llegar andando o en metro hasta Baixa-Chiado. Si necesitas acceso sin escalones, llama antes al 21 346 0905 y te lo confirman.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '2,5 sobre 5 con 312 reseñas. Es una nota baja para un restaurante en el centro de Lisboa, y las opiniones se reparten entre quien valora el servicio y quien critica la comida: conviene leer las reseñas recientes antes de decidir.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No hay una web operativa. El dominio antiguo (costa-vicentina.pt) ya no responde y la dirección que enlaza Google es un entorno de pruebas, no una página publicada. Los canales reales son el teléfono y su perfil de Google Maps.',
	},
	{
		q: '¿Por qué en la fachada pone BonaVentura?',
		a: 'Porque el local se anuncia hoy como BonaVentura Wine & Food en el rótulo y en las pizarras de la calle, mientras la ficha de Google mantiene el nombre histórico, Restaurante Costa Vicentina. Son la misma casa en la R. dos Correeiros, 37: la dirección, el teléfono y las fotos del perfil coinciden. Si buscas el restaurante en un directorio, puede aparecer con cualquiera de los dos nombres.',
	},
];
