/**
 * Datos del Restaurante Salón Diamante — C. Islas Baleares, 7 (polígono de Onda, Castellón).
 *
 * Fuente: ficha pública de Google Maps facilitada para el proyecto
 * (https://www.google.com/maps/place/Restaurante+Sal%C3%B3n+Diamante/, 39.966033,-0.2370636,
 * feature 0xd600b3d8bfdd54d:0x4f55180c6533c5c2). De ahí salen el nombre, la dirección, la
 * categoría «Restaurante de cocina valenciana», el teléfono, el horario, la nota (4,5) con
 * sus 188 reseñas, los servicios de accesibilidad y la descripción que publica el propio
 * local («realizamos almuerzos, comidas, cualquier tipo de evento, bodas, bautizos,
 * cumpleaños…»).
 *
 * Lo que la ficha NO publica: web propia (muestra la opción «Añadir sitio web»), carta ni
 * precios. Por eso esta web no inventa ni carta ni precios.
 *
 * Las fotografías de src/assets/fotos/ son las que publica el perfil del establecimiento en
 * Google Maps.
 */

export const BUSINESS = {
	name: 'Restaurante Salón Diamante',
	shortName: 'Salón Diamante',
	mark: 'D',
	street: 'C. Islas Baleares, 7',
	city: 'Onda',
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	geoRegion: 'ES-VC',
	postalCode: '12200',
	country: 'ES',
	phone: '+34 642 25 40 89',
	phoneHref: '+34642254089',
	rating: 4.5,
	reviewsCount: 188,
	siteUrl: 'https://restaurante-salon-diamante.vercel.app',
	geo: { lat: 39.966033, lng: -0.2370636 },
	featureId: '0xd600b3d8bfdd54d:0x4f55180c6533c5c2',
	placeId: 'ChIJTdX9iz0LYA0RwsUzZQwYVU8',
	/** Categoría con la que Google clasifica el local. */
	category: 'Restaurante de cocina valenciana',
	/** Zona que publica la ficha. */
	district: 'polígono de Onda',
	tagline: 'Almuerzos, comidas y celebraciones en Onda',
	description:
		'Restaurante de cocina valenciana en el polígono de Onda (Castellón): almuerzos, comidas y todo tipo de eventos, bodas y bautizos. C. Islas Baleares 7. 4,5 sobre 5 en Google con 188 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Sal%C3%B3n+Diamante/@39.966033,-0.2370636,17z/data=!3m1!4b1!4m6!3m5!1s0xd600b3d8bfdd54d:0x4f55180c6533c5c2!8m2!3d39.966033!4d-0.2370636!16s%2Fg%2F11rwy253vl',
	cid: 'https://www.google.com/maps?cid=5716501743533278658',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=39.966033%2C-0.2370636',
	embed: 'https://maps.google.com/maps?q=39.966033,-0.2370636&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: de 8:00 a 18:00 de lunes a sábado. El domingo
 * aparece cerrado y la ficha avisa de que en festivos el horario podría ser diferente.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–18:00' },
	{ day: 'Martes', value: '8:00–18:00' },
	{ day: 'Miércoles', value: '8:00–18:00' },
	{ day: 'Jueves', value: '8:00–18:00' },
	{ day: 'Viernes', value: '8:00–18:00' },
	{ day: 'Sábado', value: '8:00–18:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/**
 * Señas de identidad: la categoría de la ficha, lo que el local declara en su propia
 * descripción y los servicios de accesibilidad que publica Google.
 */
export const SERVICIOS = [
	'Cocina valenciana',
	'Almuerzos',
	'Comidas',
	'Bodas, bautizos y eventos',
	'Acceso y aseo adaptados',
	'+34 642 25 40 89',
];

/**
 * La ficha no publica carta ni precios. Lo que sigue sale de la descripción del propio local
 * y de las reseñas destacadas de la ficha, no de una carta oficial.
 */
export const MENU = [
	{
		title: 'Almuerzos',
		items: [
			{
				name: 'Bocadillos y almuerzo',
				note: 'una reseña destaca que son «bocadillos buenos para almorzar»',
			},
			{
				name: 'Almuerzo de la casa',
				note: 'el local declara almuerzos en su descripción; a las 8:00 ya está abierto',
			},
		],
	},
	{
		title: 'Comidas',
		items: [
			{
				name: 'Arroz meloso de secreto',
				note: 'una reseña de cinco estrellas lo puntúa como «de 10»',
			},
			{
				name: 'Menú de mediodía',
				note: 'la ficha no publica la carta, así que conviene preguntar qué hay cada día',
			},
		],
	},
	{
		title: 'Celebraciones',
		items: [
			{
				name: 'Bodas, bautizos y cumpleaños',
				note: 'la descripción del local anuncia todo tipo de eventos en su salón',
			},
			{
				name: 'Tarta de queso',
				note: 'otra reseña la describe como «superior»',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Salón Diamante?',
		a: 'En la calle Islas Baleares 7, en el polígono de Onda (12200, Castellón). El mapa de esta página lleva hasta la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google publica un horario continuo de 8:00 a 18:00 de lunes a sábado. El domingo aparece como cerrado y la ficha avisa de que en festivos el horario podría ser diferente, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo reservo una comida o un evento?',
		a: `El único contacto que publica la ficha es el teléfono ${BUSINESS.phone}. No hay reservas ni pedidos en línea: el local no tiene web propia y la ficha muestra la opción de «añadir sitio web». Para bodas, bautizos o celebraciones conviene llamar y hablarlo con tiempo.`,
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina valenciana, según lo que publican la descripción del propio local y las reseñas destacadas: almuerzos (una reseña destaca los bocadillos), comidas con arroz meloso de secreto y postres como la tarta de queso. La ficha no publica carta ni precios, así que lo mejor es preguntar por teléfono qué hay ese día.',
	},
	{
		q: '¿Se puede celebrar un evento?',
		a: 'Sí. La descripción que el local publica en su ficha dice que realizan almuerzos, comidas y cualquier tipo de evento: bodas, bautizos, cumpleaños y demás celebraciones. El teléfono es el canal para pedir presupuesto y disponibilidad.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca el acceso para sillas de ruedas, el aparcamiento adaptado, el aseo adaptado y asientos adaptados. Conviene confirmarlo al llamar, porque son datos de la ficha y pueden cambiar.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 188 reseñas en Google, según la ficha consultada. Entre los comentarios destacados aparecen «buen sitio, muy buen trato y buena calidad precio», el arroz meloso de secreto y la tarta de queso.',
	},
];
