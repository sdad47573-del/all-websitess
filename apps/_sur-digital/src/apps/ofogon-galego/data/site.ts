/**
 * Datos de Ofogón Galego — C. Anita Martínez, 12, 28918 Leganés, Madrid.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Ofogón Galego Comida para llevar,
 *   40.3447721,-3.7729959, feature 0xd41893cabaab87f:0xd0b5658401a35aab.
 * - Nombre, dirección, categoría, teléfono, valoración, reseñas y horario:
 *   ficha pública de Google consultada en octubre de 2026.
 * - Carta y precios: menú publicado por el establecimiento en Uber Eats,
 *   consultado en octubre de 2026. En el local los precios pueden variar.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no publica una web propia y no consta
 * servicio de reparto propio (el reparto lo gestiona Uber Eats). No se prometen
 * servicios ni condiciones que no consten en las fuentes.
 */

export const BUSINESS = {
	name: 'Ofogón Galego',
	fullName: 'Ofogón Galego · comida gallega casera para llevar',
	shortName: 'Ofogón',
	mark: 'O',
	street: 'C. Anita Martínez, 12',
	neighbourhood: 'Solagua',
	city: 'Leganés',
	region: 'Comunidad de Madrid',
	regionName: 'Comunidad de Madrid',
	postalCode: '28918',
	country: 'ES',
	phone: '652 83 81 43',
	phoneHref: '+34652838143',
	rating: 4.7,
	reviewsCount: 83,
	siteUrl: 'https://www.sur-digital.com/ofogon-galego',
	geo: { lat: 40.3447721, lng: -3.7729959 },
	featureId: '0xd41893cabaab87f:0xd0b5658401a35aab',
	placeId: 'ChIJf7iqqzyJQQ0Rq1qjAYRltdA',
	cid: '15039038148311210667',
	plusCode: '8CGR86VG+WR',
	category: 'Restaurante de comida para llevar',
	tagline: 'Comida gallega casera para llevar en Leganés',
	description:
		'Ofogón Galego, comida gallega casera para llevar en la calle Anita Martínez 12, Leganés (28918 Madrid). Empanada gallega, tortilla de patata, croquetas caseras, pollo asado al pimentón y paellas por encargo. 4,7 sobre 5 en Google con 83 reseñas.',
	hasPublicWebsite: false,
	/** Descripción que publica el propio establecimiento en sus perfiles. */
	ownerDescription: 'Comida casera 100% natural',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Ofog%C3%B3n+Galego+Comida+para+llevar/@40.3447721,-3.7729959,17z/data=!3m1!4b1!4m6!3m5!1s0xd41893cabaab87f:0xd0b5658401a35aab!8m2!3d40.3447721!4d-3.7729959!16s%2Fg%2F11mv636d5l?authuser=0&hl=es&entry=ttu',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3447721%2C-3.7729959',
	embed: 'https://maps.google.com/maps?q=40.3447721,-3.7729959&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3447721,-3.7729959',
	/** Menú publicado por el local en Uber Eats (también gestiona el reparto). */
	delivery: 'https://www.ubereats.com/es/store/ofogon-galego/Vm96SMaYWHq1-9rQW_Vk4g',
};

/** Horario publicado en la ficha de Google: miércoles a domingo, 11:30–16:00. */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '11:30–16:00' },
	{ day: 'Jueves', value: '11:30–16:00' },
	{ day: 'Viernes', value: '11:30–16:00' },
	{ day: 'Sábado', value: '11:30–16:00' },
	{ day: 'Domingo', value: '11:30–16:00' },
];

/** Señales de identidad que constan en la ficha y en la carta del local. */
export const SERVICIOS = [
	'Empanada gallega',
	'Tortilla de patata',
	'Croquetas caseras',
	'Pollo al pimentón',
	'Paella por encargo',
	'Comida para llevar',
];

/**
 * Carta publicada por el establecimiento en Uber Eats. Los precios son los de
 * esa plataforma; en el local pueden variar y algunos platos son por encargo.
 */
export const MENU = [
	{
		title: 'Pollo asado en horno de piedra',
		items: [
			{
				name: 'Pollo entero con salsa de pimentón',
				price: '13,50 €',
				note: '1,3 kg aprox. · sin gluten',
			},
			{
				name: 'Medio pollo con salsa de pimentón',
				price: '7,90 €',
				note: '600 g aprox. · sin gluten',
			},
		],
	},
	{
		title: 'Platos de cuchara',
		items: [
			{ name: 'Tortilla de patata con cebolla y huevos', price: '11,90 €', note: 'jugosa por dentro' },
			{ name: 'Tortilla de patata con huevos', price: '11,50 €', note: 'la clásica, sin cebolla' },
			{ name: 'Albóndigas con salsa de verduras', price: '7,50 €', note: '8 unidades' },
			{ name: 'Callos con garbanzos', price: '7,90 €', note: 'ración de 400 g aprox.' },
			{ name: 'Oreja en salsa', price: '7,90 €', note: '400 g aprox.' },
			{ name: 'Pimientos fritos', price: '7,90 €', note: '4-5 unidades' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Croquetas caseras de jamón ibérico', price: '8,50 €', note: '6 unidades' },
			{ name: 'Croquetas de morcilla caramelizada', price: '8,50 €', note: '6 unidades, caseras' },
			{ name: 'Croque pollo caseras', price: '8,50 €', note: '6 unidades' },
			{ name: 'Croquetas de pollo y mermelada de pimientos', price: '8,50 €', note: '6 unidades, caseras' },
			{ name: 'Croquetas variadas caseras', price: '8,50 €', note: '6 unidades, surtido de la casa' },
			{ name: 'Patatas bravas', price: '7,90 €', note: 'en dados, salsa brava y perejil' },
			{ name: 'Patatas fritas grandes', price: '6,90 €', note: 'ración para compartir' },
			{ name: 'Patata gajo', price: '6,90 €', note: 'ración' },
			{ name: 'Patatas fritas medianas', price: '3,90 €', note: 'bastones dorados' },
			{ name: 'Ensaladilla rusa', price: '6,90 €', note: 'estilo tradicional' },
		],
	},
	{
		title: 'Menús de pollo',
		items: [
			{ name: 'Oferta 1', price: '25,25 €', note: 'pollo asado, pimientos y tortilla' },
			{ name: 'Oferta 2', price: '22,90 €', note: 'pollo asado, patatas y 6 croquetas variadas' },
		],
	},
	{
		title: 'Empanada gallega artesana',
		items: [
			{ name: 'Empanada de pulpo', note: 'por encargo · precio según tamaño' },
			{ name: 'Empanada de atún', note: 'por encargo · precio según tamaño' },
			{ name: 'Empanada de carne', note: 'por encargo · precio según tamaño' },
			{ name: 'Empanada vegetal', note: 'por encargo · precio según tamaño' },
		],
	},
	{
		title: 'Paellas y arroces',
		items: [
			{ name: 'Paella de verduras', price: '7,90 €', note: 'pimiento rojo, verde, brócoli, judías y zanahoria · por encargo' },
			{ name: 'Paella de verduras y pollo', price: '8,90 €', note: 'con contramuslos de pollo · por encargo' },
			{ name: 'Arroz a banda', price: '8,90 €', note: 'gamba pelada y sepia · por encargo' },
			{ name: 'Paella mixta', price: '9,90 €', note: 'sepia, pollo, langostinos, mejillones y almejas' },
			{ name: 'Paella de marisco', price: '10,95 €', note: 'sepia, langostinos, cigalas, mejillones y almejas' },
			{ name: 'Arroz caldoso de pollo', price: '9,95 €', note: 'pollo, mejillones, gamba pelada y sepia' },
			{ name: 'Arroz con bogavante', price: '14,25 €', note: 'bogavante, 250 g por persona y sepia' },
			{ name: 'Arroz negro', price: '8,90 €', note: 'gamba pelada, sepia y tinta de calamar' },
			{ name: 'Fideuá mixta', price: '8,90 €', note: 'sepia, pollo, mejillones y langostinos' },
		],
	},
	{
		title: 'Postres caseros',
		items: [
			{ name: 'Tarta de queso y castaña', note: 'de la vitrina' },
			{ name: 'Arroz con leche', note: 'postre de cuchara' },
			{ name: 'Postres del día', note: 'pregunta por la vitrina al llamar' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Ofogón Galego?',
		a: 'En la calle Anita Martínez, 12, en el barrio de Solagua, 28918 Leganés (Madrid). El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de miércoles a domingo, de 11:30 a 16:00, y cierra los lunes y los martes. En festivos el horario puede cambiar, así que conviene confirmarlo por teléfono antes de desplazarse.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo asado en horno de piedra con salsa de pimentón, tortilla de patata, croquetas caseras de jamón, morcilla, pollo o variadas, empanada gallega, albóndigas, callos con garbanzos, oreja en salsa, pimientos, patatas caseras y postres de la vitrina. La carta está en esta página con los precios del menú publicado en Uber Eats.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí, es la especialidad de la casa: el nombre completo de la ficha es «Ofogón Galego Comida para llevar». Puedes llamar al 652 83 81 43 para encargar y recoger en el local.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'El local publica su carta en Uber Eats y esa plataforma gestiona la entrega en Leganés. La disponibilidad y la zona dependen de Uber Eats; para recogida o encargos conviene llamar directamente al local.',
	},
	{
		q: '¿Hay que encargar la empanada o la paella?',
		a: 'Sí. La empanada gallega y las paellas se preparan por encargo, y el propio establecimiento recomienda avisar con antelación porque cocina fresco cada día. Llama al 652 83 81 43 para concretar cantidad, tamaño y recogida.',
	},
	{
		q: '¿Se pueden encargar comidas para grupos o celebraciones?',
		a: 'Sí. Los clientes de la ficha cuentan encargos para reuniones familiares y celebraciones con paellas, tortillas, empanadas y croquetas. Al prepararse en el día, hay que reservar con antelación llamando al local.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según el menú publicado en Uber Eats: 13,50 € el pollo entero con salsa de pimentón, 7,90 € el medio, 11,90 € la tortilla de patata con cebolla, 8,50 € las seis croquetas caseras y 3,90 € la ración mediana de patatas. En el local los precios pueden variar.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 83 reseñas en Google, según la ficha consultada en octubre de 2026.',
	},
	{
		q: '¿Tiene web propia o redes sociales?',
		a: 'La ficha de Google no enlaza una web propia del local. Esta página es informativa y no es un canal oficial de pedidos; el teléfono y la ficha de Google son los canales que constan.',
	},
];
