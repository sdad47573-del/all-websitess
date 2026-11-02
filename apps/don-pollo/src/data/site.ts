/**
 * Datos de Don Pollo — C. la Sirena Varada, 41013 Sevilla.
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: Don Pollo, 37.3617984,-5.9677116,
 *   feature 0xd126e89f4a6b563:0x2b33cb67cc2234a1 (nombre, dirección, categoría,
 *   horario, teléfono, nota, reseñas y accesibilidad), más su place id y su CID.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. La pizarra de precios del local sale de una de ellas: de
 *   ahí vienen la carta, los precios y el aviso de reparto.
 *
 * Lo que la ficha NO publica y esta web no inventa: web propia, aforo, reservas
 * y plataforma de reparto. Las citas de reseñas van con la puntuación que les
 * dio su autor y solo se les ha normalizado la puntuación del texto.
 */

export const BUSINESS = {
	name: 'Don Pollo',
	shortName: 'Don Pollo',
	mark: 'DP',
	street: 'C. la Sirena Varada',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: '41013',
	postalCode: '41013',
	country: 'ES',
	phone: '+34 955 09 52 78',
	phoneHref: '+34955095278',
	rating: 4.3,
	reviewsCount: 51,
	siteUrl: 'https://don-pollo.vercel.app',
	geo: { lat: 37.3617984, lng: -5.9677116 },
	featureId: '0xd126e89f4a6b563:0x2b33cb67cc2234a1',
	placeId: 'ChIJY7Wm9IluEg0RoTQizGfLMys',
	cid: '3113055414110008481',
	/** Categoría con la que Google clasifica el local. */
	category: 'Restaurante especializado en pollo',
	categories: ['Restaurante especializado en pollo'],
	tagline: 'Pollo, pizzas y kebab, hasta las dos',
	description:
		'Don Pollo, pollo, pizzas y kebab en la calle Sirena Varada, 41013 Sevilla. Abre de 21:00 a 2:00 de lunes a sábado y hace reparto con 10 € de pedido mínimo.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Don+Pollo/@37.3617984,-5.9677116,17z/data=!4m6!3m5!1s0xd126e89f4a6b563:0x2b33cb67cc2234a1!8m2!3d37.3617984!4d-5.9677116!16s%2Fg%2F11bzz1v9jd',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3617984%2C-5.9677116',
	embed: 'https://maps.google.com/maps?q=37.3617984,-5.9677116&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: solo noche, de 21:00 a 2:00, de
 * lunes a sábado. El domingo figura cerrado.
 */
export const HOURS = [
	{ day: 'Lunes', value: '21:00–2:00' },
	{ day: 'Martes', value: '21:00–2:00' },
	{ day: 'Miércoles', value: '21:00–2:00' },
	{ day: 'Jueves', value: '21:00–2:00' },
	{ day: 'Viernes', value: '21:00–2:00' },
	{ day: 'Sábado', value: '21:00–2:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Lo que declara el local: categoría, pizarra de precios, horario y teléfono. */
export const SERVICIOS = [
	'Especialistas en pollo',
	'Pizzas y kebab',
	'Papas asadas',
	'Pedidos a domicilio',
	'Abierto de 21:00 a 2:00',
];

/**
 * Reseñas que aparecen destacadas en la ficha pública. Se citan con la
 * puntuación que les dio su autor; solo se ha normalizado el texto.
 */
export const REVIEWS = [
	{
		quote: 'Buena comida, servicio rápido y precios muy buenos. Todo muy limpio, lo recomiendo.',
		rating: 5,
	},
	{
		quote: 'Bueno, tiene un buen servicio de comida rápida, el típico empanado del barrio.',
		rating: 3,
	},
	{
		quote: 'No está mal, barato y rápido.',
		rating: 4,
	},
];

/**
 * Carta transcrita de la pizarra de precios del local, que aparece en una de las
 * fotos del perfil de Google. Los precios son los del cartel: pueden cambiar y
 * conviene confirmarlos por teléfono. El kebab se anuncia «con patatas y
 * bebida», pero la pizarra no muestra importe para cada variedad.
 */
export const MENU = [
	{
		title: 'Pizzas · un solo tamaño, 5 €',
		items: [
			{ name: 'Don Pollo', note: 'tomate, beicon, jamón york, pollo, champiñones y queso', price: '5,00 €' },
			{ name: 'Mediterránea', note: 'mozzarella, tomate, orégano y jamón york', price: '5,00 €' },
			{ name: 'Margarita', note: 'jamón york, tomate, chorizo y queso', price: '5,00 €' },
			{ name: 'Rápida', note: 'tomate, mozzarella, atún, jamón york y champiñones', price: '5,00 €' },
			{ name: 'Cuatro', note: 'tomate, jamón york y queso', price: '5,00 €' },
			{ name: 'Sorrento', note: 'tomate, pollo, jamón york, beicon y queso', price: '5,00 €' },
			{ name: 'Sicilia', note: 'pollo, atún, champiñones, salchichas, tomate y queso', price: '5,00 €' },
			{ name: 'Diablo', note: 'tomate, chorizo, carne picada, mayonesa y queso', price: '5,00 €' },
			{ name: 'Estaciones', note: 'tomate picante, carne picada, mozzarella y jamón york', price: '5,00 €' },
			{ name: 'Ranchera', note: 'tomate, carne, beicon, champiñones, jamón york y queso', price: '5,00 €' },
			{ name: 'Pobre', note: 'tomate, mozzarella, aceitunas negras, atún, orégano y queso', price: '5,00 €' },
			{ name: 'Especial', note: 'tomate, mozzarella, gouda, pollo, beicon, champiñones y queso', price: '5,00 €' },
			{ name: 'Fabulosa', note: 'tomate, mozzarella, carne picada, jamón york, atún y queso', price: '5,00 €' },
			{ name: 'Súper', note: 'barbacoa, tomate, mozzarella, beicon, pollo y queso', price: '5,00 €' },
			{ name: 'Cerillo', note: 'tomate, beicon, pollo, jamón york, chorizo, bechamel y queso', price: '5,00 €' },
			{ name: 'Campesina', note: 'tomate, jamón york y queso', price: '5,00 €' },
			{ name: 'La Jitana', note: 'tomate, beicon, kebab, jamón york y queso', price: '5,00 €' },
			{ name: 'Yanira', note: 'tomate, atún, kebab y queso', price: '5,00 €' },
			{ name: 'Arabia', note: 'tomate, jamón york, kebab, extra de kebab y queso', price: '5,00 €' },
			{ name: 'Diego', note: 'tomate, kebab e ingredientes a tu gusto', price: '5,00 €' },
			{ name: 'Nacho', note: 'jamón york, queso, queso chedar y nachos', price: '5,00 €' },
		],
	},
	{
		title: 'Hamburguesas y bocatas',
		items: [
			{ name: 'Hamburguesa', note: 'beicon, huevo, lechuga, tomate y bebida', price: '3,00 €' },
			{ name: 'Hamburguesa simple', note: 'la de siempre, sin extras', price: '2,00 €' },
			{ name: 'Hamburguesa con queso', note: 'queso, beicon, lechuga, tomate y bebida', price: '2,80 €' },
			{ name: 'Hamburguesa crujiente', note: 'con patatas fritas', price: '3,50 €' },
			{ name: 'Hamburguesa de buey', note: '200 g con beicon, huevo, lechuga, tomate y bebida', price: '4,50 €' },
			{ name: 'Empanado de pollo', note: 'lechuga, tomate, patatas y bebida', price: '2,50 €' },
			{ name: 'Pepito de pollo', note: 'lechuga, tomate y bebida', price: '2,50 €' },
			{ name: 'Pepito de lomo', note: 'lechuga, tomate y bebida', price: '2,50 €' },
			{ name: 'Serranito de pollo', note: 'patatas, tortilla, pimiento, jamón, lechuga y tomate, con bebida', price: '3,00 €' },
			{ name: 'Serranito de lomo', note: 'patatas, tortilla, pimiento, jamón, lechuga y tomate, con bebida', price: '3,00 €' },
			{ name: 'Perrito', note: 'el clásico de la pizarra', price: '1,50 €' },
		],
	},
	{
		title: 'Kebab · 4,50 € con patatas y bebida',
		items: [
			{ name: 'Kebab', note: 'lechuga, tomate, patata y salsa de yogur' },
			{ name: 'Kebab de atún', note: 'lechuga, tomate y atún' },
			{ name: 'Kebab de pollo', note: 'lechuga, cebolla y patatas' },
			{ name: 'Kebab de queso', note: 'tomate, queso y salsa' },
			{ name: 'Kebab mixto', note: 'queso y patatas' },
			{ name: 'Kebab de beicon', note: 'queso, beicon, lechuga y salsa' },
			{ name: 'Kebab de pollo con salsa india', note: 'la variedad más picante de la pizarra' },
			{ name: 'Kebab de huevo', note: 'huevo, lechuga y tomate' },
			{ name: 'Kebab de jamón york y huevo', note: 'para quien no quiere carne de kebab' },
			{ name: 'Kebab con arroz', note: 'la versión con arroz en vez de pan' },
		],
	},
	{
		title: 'Revueltos, tortillas y paninis',
		items: [
			{ name: 'Revuelto de salchicha, jamón y beicon', note: 'a la plancha', price: '3,50 €' },
			{ name: 'Revuelto de huevo, jamón york, beicon y patatas', note: 'el completo', price: '3,50 €' },
			{ name: 'Revuelto de morcilla, cebolla y chorizo', note: 'con el toque de la morcilla', price: '3,50 €' },
			{ name: 'Revuelto especial', note: 'con kebab', price: '4,00 €' },
			{ name: 'Revuelto de costilla a la barbacoa', note: 'el más contundente', price: '4,50 €' },
			{ name: 'Pizza con borde de queso', note: 'la pizza del apartado de revueltos', price: '5,50 €' },
			{ name: 'Tortilla', note: 'pollo, jamón york, queso, lechuga, tomate, patatas, beicon y bebida', price: '3,50 €' },
			{ name: 'Tortilla de pizza', note: 'la tortilla con lo de una pizza', price: '2,00 €' },
			{ name: 'Panini de queso y jamón york', note: 'a la plancha', price: '1,50 €' },
			{ name: 'Panini de queso y beicón', note: 'a la plancha', price: '1,50 €' },
		],
	},
	{
		title: 'Papas asadas',
		items: [
			{ name: 'Papa nº 1', note: 'maíz, huevo, pollo, queso, atún, jamón york, alioli, pimiento frito y tomate', price: '6,00 €' },
			{ name: 'Papa nº 2', note: 'maíz, jamón york, huevo, tomate, alioli y queso', price: '4,50 €' },
			{ name: 'Papa nº 3', note: 'maíz, queso, jamón york, atún, tomate y alioli', price: '4,00 €' },
			{ name: 'Papa nº 4', note: 'maíz, alioli, tomate, atún y jamón york', price: '3,50 €' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Don Pollo?',
		a: 'En la calle Sirena Varada, en el código postal 41013 de Sevilla. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De 21:00 a 2:00, de lunes a sábado. Es un horario de noche: abre a las nueve y sirve hasta las dos de la madrugada. El domingo figura cerrado.',
	},
	{
		q: '¿Hacen pedidos a domicilio?',
		a: 'Sí. La pizarra de precios del local, que aparece en una de las fotos de su perfil de Google, anuncia pedidos a domicilio con un incremento de 1,50 € y un pedido mínimo de 10 €. El teléfono para encargar es el 955 09 52 78.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Pizzas de un solo tamaño a 5 €, kebab con patatas y bebida, hamburguesas, pepitos, serranitos, empanado de pollo, revueltos, tortillas, paninis y papas asadas con distintos ingredientes. La carta completa está en esta misma página.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Las pizzas cuestan 5 € y la pizza con borde de queso, 5,50 €. Cualquier kebab sale a 4,50 € con patatas y bebida. Las papas asadas van de 3,50 a 6 €, y los bocatas y hamburguesas, entre 1,50 y 4,50 €. Son los precios de la pizarra del local y pueden cambiar: confírmalos al pedir.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante especializado en pollo y las fotos del perfil enseñan mesas y sillas metálicas dentro del local, así que hay servicio en mesa. La ficha no publica aforo ni terraza.',
	},
	{
		q: '¿Hay que reservar mesa?',
		a: 'La ficha no publica un sistema de reservas. El teléfono publicado es el canal directo para preguntar por mesa o por cualquier encargo.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca que no hay aparcamiento adaptado para sillas de ruedas. No publica ningún otro dato de accesibilidad, como el acceso o los aseos, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del restaurante y ofrece al titular la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma tres sobre cinco, con 51 reseñas. Es una muestra amplia para un local de barrio y la media se mantiene alta; las citas de esta página salen de esas mismas reseñas.',
	},
];
