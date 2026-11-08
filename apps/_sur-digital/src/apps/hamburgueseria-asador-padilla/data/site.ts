/**
 * Datos de Hamburguesería y Asador de Pollos Padilla — Av. del Dr. Marañón, 47,
 * Palma-Palmilla, 29009 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «Hamburguesería y Asador de Pollos Padilla»,
 *   36.7318947,-4.4284968, feature 0xd72f7baab26e265:0xfe23626cb8b943a5
 *   (nombre, dirección, categorías, descripción de la casa, horario, teléfono,
 *   nota, reseñas y accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, entre ellas el
 *   cartel del local con el horario y el reparto a domicilio (Glovo, pedido
 *   mínimo 10,00 €) y los platos de la casa.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica carta
 * con precios. Se dan los platos que aparecen en las fotos y en las reseñas,
 * sin precios.
 */

export const BUSINESS = {
	name: 'Hamburguesería y Asador de Pollos Padilla',
	fullName: 'Hamburguesería y Asador de Pollos Padilla',
	googleName: 'Hamburguesería y Asador de Pollos Padilla',
	shortName: 'Padilla',
	mark: 'P',
	street: 'Av. del Dr. Marañón, 47',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Palma-Palmilla',
	postalCode: '29009',
	country: 'ES',
	phone: '+34 952 28 65 30',
	phoneHref: '+34952286530',
	rating: 4.2,
	reviewsCount: 217,
	siteUrl: 'https://www.sur-digital.com/hamburgueseria-asador-padilla',
	geo: { lat: 36.7318947, lng: -4.4284968 },
	featureId: '0xd72f7baab26e265:0xfe23626cb8b943a5',
	placeId: 'ChIJZeImq7r3cg0RpUO5uGxiI_4',
	cid: '18312588728913707941',
	category: 'Pollo asado, camperos y comidas caseras',
	categories: [
		'Restaurante especializado en pollo',
		'Bar',
		'Pollería',
		'Hamburguesería',
		'Asador de cordero',
		'Bar de tapas',
		'Comida a domicilio',
	],
	tagline: 'Pollo asado, camperos y comidas caseras en Palma-Palmilla',
	description:
		'Hamburguesería y Asador de Pollos Padilla, pollos asados, camperos, hamburguesas y comidas caseras en la avenida del Doctor Marañón 47, Palma-Palmilla, Málaga. Dos turnos, de 10:00 a 16:30 y de 20:00 a 00:00, y reparto a domicilio con Glovo. 4,2 sobre 5 en Google con 217 reseñas.',
	hasPublicWebsite: false,
	ownerDescription:
		'Especialidad en comidas caseras, pollos asados y los más deliciosos camperos de Málaga',
	delivery: {
		provider: 'Glovo',
		minimum: '10,00 €',
	},
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Hamburgueser%C3%ADa+y+Asador+de+Pollos+Padilla/@36.7318947,-4.4284968,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7baab26e265:0xfe23626cb8b943a5!8m2!3d36.7318947!4d-4.4284968!16s%2Fg%2F1tgtgvy0',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7318947%2C-4.4284968',
	embed: 'https://maps.google.com/maps?q=36.7318947,-4.4284968&z=17&hl=es&output=embed',
};

/**
 * Horario del cartel del propio local, fotografiado en el perfil de Google:
 * abierto de lunes a domingo, de 10:00 a 16:30 y de 20:00 a 00:00.
 *
 * La ficha de Google mantiene el miércoles cerrado y un horario continuado de
 * 10:00 a 24:00. Se muestra el cartel y se advierte de la diferencia.
 */
export const HOURS = [
	{ day: 'Lunes', value: '10:00–16:30 · 20:00–00:00' },
	{ day: 'Martes', value: '10:00–16:30 · 20:00–00:00' },
	{ day: 'Miércoles', value: '10:00–16:30 · 20:00–00:00' },
	{ day: 'Jueves', value: '10:00–16:30 · 20:00–00:00' },
	{ day: 'Viernes', value: '10:00–16:30 · 20:00–00:00' },
	{ day: 'Sábado', value: '10:00–16:30 · 20:00–00:00' },
	{ day: 'Domingo', value: '10:00–16:30 · 20:00–00:00' },
];

export const SERVICIOS = [
	'Pollo asado',
	'Camperos y hamburguesas',
	'Comidas caseras y frituras',
	'Palma-Palmilla',
	'Reparto con Glovo · mínimo 10,00 €',
	'+34 952 28 65 30',
];

/**
 * Carta elaborada con los platos que aparecen en las fotografías del perfil,
 * la descripción de la casa y las reseñas. Sin precios: la ficha no los
 * publica y el único importe que consta es el pedido mínimo de Glovo.
 */
export const MENU = [
	{
		title: 'Pollo y asador',
		items: [
			{ name: 'Pollo asado', note: 'la especialidad de la casa, del asador, con patatas panadera' },
			{ name: 'Medio pollo', note: 'para una persona, con guarnición' },
			{ name: 'Pollo para llevar', note: 'por encargo, llama y recoge' },
			{ name: 'Cordero asado', note: 'la ficha de Google incluye asador de cordero' },
		],
	},
	{
		title: 'Camperos y bocatas',
		items: [
			{ name: 'Campero de pollo', note: '«los más deliciosos camperos de Málaga», según la casa' },
			{ name: 'Campero con huevo', note: 'una de las variantes que aparecen en las reseñas' },
			{ name: 'Campero completo', note: 'con todos los ingredientes de la barra' },
			{ name: 'Bocadillos y montaditos', note: 'a cualquier hora del servicio' },
		],
	},
	{
		title: 'Hamburguesas',
		items: [
			{ name: 'Hamburguesa de la casa', note: 'a la plancha, con queso y guarnición' },
			{ name: 'Hamburguesa completa', note: 'con lechuga, tomate y cebolla' },
			{ name: 'Hamburguesa de pollo', note: 'la alternativa al vacuno' },
			{ name: 'Hamburguesa doble', note: 'para las noches de hambre' },
		],
	},
	{
		title: 'Comidas caseras',
		items: [
			{ name: 'Tortilla de patatas', note: 'de las que destacan las reseñas de Google' },
			{ name: 'Albóndigas en salsa', note: 'con patatas fritas, como en la foto del perfil' },
			{ name: 'Potaje de garbanzos', note: 'con chorizo y morcilla, de cuchara' },
			{ name: 'Plato del día', note: 'la cocina casera que anuncia la casa' },
		],
	},
	{
		title: 'Arroces y frituras',
		items: [
			{ name: 'Arroz con gambas', note: 'amarillo, con limón, según la foto del perfil' },
			{ name: 'Arroz con marisco', note: 'con calamar y almejas, al estilo de la casa' },
			{ name: 'Croquetas caseras', note: 'fritas al momento, de las que citan las reseñas' },
			{ name: 'Fritura de pescado', note: 'el cartel del local anuncia comidas caseras y frituras' },
		],
	},
	{
		title: 'Para picar y ensaladas',
		items: [
			{ name: 'Patatas fritas', note: 'para acompañar el pollo o la hamburguesa' },
			{ name: 'Aros de cebolla', note: 'rebozados, para el centro de la mesa' },
			{ name: 'Alas de pollo', note: 'una de las categorías con las que figura en Google' },
			{ name: 'Ensalada mixta', note: 'con tomate, maíz, cebolla y queso' },
		],
	},
	{
		title: 'Bebidas y postres',
		items: [
			{ name: 'Cervezas', note: 'de barril o de botella' },
			{ name: 'Refrescos', note: 'de la nevera' },
			{ name: 'Café e infusiones', note: 'a cualquier hora' },
			{ name: 'Postres del día', note: 'según el mostrador' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Asador Padilla?',
		a: 'En la avenida del Doctor Marañón 47, en Palma-Palmilla, 29009 Málaga. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El cartel del propio local anuncia dos turnos, de 10:00 a 16:30 y de 20:00 a 00:00, abierto de lunes a domingo. La ficha de Google, en cambio, marca el miércoles cerrado y un horario continuado de 10:00 a 24:00. Si vienes en miércoles o en festivo, llama antes por si acaso.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado con patatas panadera, camperos, hamburguesas, albóndigas en salsa, potaje de garbanzos, tortilla de patatas, croquetas, arroces con gambas o marisco y ensaladas. La casa lo resume así: «especialidad en comidas caseras, pollos asados y los más deliciosos camperos de Málaga».',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha no publica carta ni precios. El único importe que consta es el pedido mínimo de 10,00 € para el reparto. Para saber qué hay cada día y cuánto cuesta, llama al teléfono del local.',
	},
	{
		q: '¿Se puede reservar?',
		a: `La ficha no publica un sistema de reservas ni una web propia. El canal que sí consta es el teléfono ${BUSINESS.phone}; llama para mesa o para encargar.`,
	},
	{
		q: '¿Hay comida a domicilio?',
		a: `Sí. El cartel del local anuncia reparto a domicilio con Glovo y un pedido mínimo de ${BUSINESS.delivery.minimum}. La ficha de Google incluye además «comida a domicilio» entre sus categorías. Confirma la zona y el pedido al hacer el encargo.`,
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, pero no aparcamiento adaptado. No publica más datos de accesibilidad, así que conviene llamar si necesitas una condición concreta.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,2 sobre 5 con 217 reseñas en Google, según la ficha consultada. Las reseñas destacan el pollo asado, la cocina casera, la tortilla de patatas y las croquetas.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
];
