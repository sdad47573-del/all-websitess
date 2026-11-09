/**
 * Datos de KUGO Restaurante Sushi & Japo — Es Caló (07829 Sant Josep de sa
 * Talaia, bahía de Sant Antoni, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «KUGO RESTAURANTE SUSHI & JAPO»,
 *   38.9674759,1.2945592, feature 0x129949379228e067:0xb380005d9b36969f
 *   (dirección, teléfono, horario, categoría, nota, reseñas, accesibilidad y
 *   descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha no publica carta ni precios: «La carta» recoge solo lo que se ve en
 * las fotos del perfil y lo que citan las reseñas. No se inventan platos ni
 * precios.
 */

export const BUSINESS = {
	name: 'KUGO Restaurante Sushi & Japo',
	shortName: 'KUGO',
	mark: 'K',
	street: 'Es Caló',
	city: 'Sant Josep de sa Talaia',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07829',
	country: 'ES',
	phoneDisplay: '696 56 68 49',
	phoneHref: 'tel:+34696566849',
	rating: 4.9,
	reviewsCount: 1642,
	siteUrl: 'https://www.sur-digital.com/kugo-restaurante-sushi-japo',
	geo: { lat: 38.9674759, lng: 1.2945592 },
	featureId: '0x129949379228e067:0xb380005d9b36969f',
	placeId: 'ChIJZ-AokjdJmRIRn5Y2m10AgLM',
	cid: '12934338531844069023',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/KUGO+RESTAURANTE+SUSHI+%26+JAPO/@38.9674759,1.2945592,17z/data=!3m1!4b1!4m6!3m5!1s0x129949379228e067:0xb380005d9b36969f!8m2!3d38.9674759!4d1.2945592!16s%2Fg%2F11txzvkd2q',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9674759%2C1.2945592',
	embed: 'https://maps.google.com/maps?q=38.9674759,1.2945592&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: todos los días de 18:00 a 23:30, salvo el
 * martes, que cierra.
 */
export const HOURS = [
	{ day: 'Lunes', value: '18:00–23:30' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '18:00–23:30' },
	{ day: 'Jueves', value: '18:00–23:30' },
	{ day: 'Viernes', value: '18:00–23:30' },
	{ day: 'Sábado', value: '18:00–23:30' },
	{ day: 'Domingo', value: '18:00–23:30' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Mezcla de sabores increíbles, como el roll de Shoft Crab con atún!!',
	'El uramaki de salmón picante y el de langostino en tempura no pueden faltar.',
	'Todo muy rico, muy buena calidad, trato excelente, volveré seguro lo recomiendo',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica el
 * local, lo que cuenta la descripción del negocio, lo que se ve en las fotos del
 * perfil, lo que citan sus reseñas y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante de sushi',
	'Rolls de autor',
	'Tempura y gyozas',
	'Producto fresco',
	'Para llevar',
	'Entrega a domicilio',
	'Catering',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Sushi y rolls',
		items: [
			{
				name: 'Roll de atún flameado',
				note: 'en las fotos del perfil, con soplete sobre la mesa',
			},
			{
				name: 'Uramaki de salmón picante',
				note: '«no pueden faltar», según una reseña',
			},
			{
				name: 'Roll de langostino en tempura',
				note: 'citado en la misma reseña y en las fotos del perfil',
			},
			{
				name: 'Roll de mango',
				note: 'en las fotos del perfil, con salsa de mango y sésamo',
			},
			{
				name: 'Roll de anguila con sésamo',
				note: 'en las fotos del perfil, con salsa teriyaki',
			},
			{
				name: 'Soft crab roll con atún',
				note: '«mezcla de sabores increíbles», según una reseña',
			},
			{
				name: 'Nigiri de salmón, atún y langostino',
				note: 'en las fotos del perfil',
			},
		],
	},
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Gyozas fritas con teriyaki',
				note: 'en las fotos del perfil, con salsa y sésamo',
			},
		],
	},
	{
		title: 'Para compartir',
		items: [
			{
				name: 'Bandeja de sushi variada',
				note: 'en las fotos del perfil, con nigiri, rolls y salsa de soja',
			},
			{
				name: 'Caja de sushi para llevar',
				note: 'en las fotos del perfil, con rolls, gyozas y salsas',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está KUGO?',
		a: 'En Es Caló, en la bahía de Sant Antoni (07829 Sant Josep de sa Talaia, Ibiza). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 18:00 a 23:30, salvo el martes, que cierra. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa o encargar comida hay que llamar al 696 56 68 49.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'Sí. El propio negocio lo cuenta en su descripción: «puedes llamar, hacer tu pedido y pasarte a recogerlo cuando quieras. Y si te apetece, también te lo llevamos a casa». También ofrece catering.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Sushi y cocina japonesa, según la categoría de su ficha de Google. La descripción del negocio añade que trabajan con «productos frescos y locales» y que les gusta «innovar y sorprender» con sus creaciones de sushi.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'En las fotos del perfil aparecen rolls de atún flameado, uramaki de salmón con queso crema, rolls de langostino en tempura, rolls de mango, rolls de anguila con sésamo, nigiri de salmón, atún y langostino, bandejas variadas y gyozas con teriyaki. Sus reseñas citan el roll de soft crab con atún, el uramaki de salmón picante y el de langostino en tempura. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,9 sobre 5 con 1.642 reseñas. Las publicadas destacan la mezcla de sabores, la calidad del producto y el trato.',
	},
];
