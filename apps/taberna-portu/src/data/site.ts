/**
 * Datos de Taberna Portu — Calle Maestro Pablo Luna 4, Local 10,
 * 29010 Málaga (Bailén-Miraflores).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Taberna Portu», 36.7249717,-4.4434246,
 *   feature 0xd72f7aade1b6fdd:0x6cb287be5afed6e1 (dirección, teléfono, horario,
 *   categoría, nota, reseñas, accesibilidad y la descripción del propio local).
 * - Críticas publicadas en la misma ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha no publica carta completa ni precios: el menú se apoya en la
 * descripción del restaurante, en lo que citan las reseñas y en las fotos.
 */

export const BUSINESS = {
	name: 'Taberna Portu',
	shortName: 'Taberna Portu',
	mark: 'TP',
	street: 'C. Maestro Pablo Luna, 4 (Local 10)',
	city: 'Málaga',
	region: 'Málaga',
	regionName: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phoneDisplay: '641 38 77 12',
	phoneHref: 'tel:+34641387712',
	rating: 5,
	reviewsCount: 209,
	siteUrl: 'https://taberna-portu.vercel.app',
	geo: { lat: 36.7249717, lng: -4.4434246 },
	featureId: '0xd72f7aade1b6fdd:0x6cb287be5afed6e1',
	placeId: 'ChIJ3W8b3qr3cg0R4db-Wr6Hsmw',
	cid: '7832471953590900449',
	/** Categoría con la que Google describe el local. */
	googleBlurb: 'Restaurante',
	/** Descripción que publica el propio restaurante en su ficha. */
	ownDescription:
		'Cocina portuguesa y española en Málaga, con platos caseros y tapas exquisitas. Ambiente acogedor, producto fresco y sabor auténtico.',
	tagline: 'Cocina portuguesa y española en Málaga',
	description:
		'Taberna Portu, cocina portuguesa y española en la calle Maestro Pablo Luna 4 (29010 Málaga, Bailén-Miraflores): bacalhau à Brás, pica-pau, croquetas y tapas caseras. 5,0 en Google con 209 reseñas. Tel. 641 38 77 12.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Taberna+Portu/@36.7249717,-4.4434246,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7aade1b6fdd:0x6cb287be5afed6e1!8m2!3d36.7249717!4d-4.4434246!16s%2Fg%2F11ys9wx7c1',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7249717%2C-4.4434246',
	embed: 'https://maps.google.com/maps?q=36.7249717,-4.4434246&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: noches entre semana y mediodía el fin de semana. */
export const HOURS = [
	{ day: 'Lunes', value: '19:00–23:00' },
	{ day: 'Martes', value: '19:00–23:00' },
	{ day: 'Miércoles', value: '19:00–23:00' },
	{ day: 'Jueves', value: '19:00–23:00' },
	{ day: 'Viernes', value: '13:00–24:00' },
	{ day: 'Sábado', value: '13:00–24:00' },
	{ day: 'Domingo', value: '13:00–23:00' },
];

/** Críticas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Pedimos unas patatas bravas, croquetas y unos montaditos, todo muy rico.',
	'La camarera y el cocinero encantadores, muy atentos y cercanos.',
	'Volveremos y agradecemos el trato de las camareras, sonriendo y atentas a todo.',
];

/** Señas de identidad que constan en la ficha y en la descripción del local. */
export const SERVICIOS = [
	'Cocina portuguesa',
	'Cocina española',
	'Tapas',
	'Platos caseros',
	'Producto fresco',
	'Ambiente acogedor',
	'Accesible',
];

export const MENU = [
	{
		title: 'De la pizarra',
		items: [
			{
				name: 'Bacalhau à Brás',
				note: 'bacalao desmigado con patata paja, huevo y olivas negras',
			},
			{ name: 'Bacalhau com natas', note: 'bacalao gratinado con nata y patata, al horno' },
			{ name: 'Pica-pau', note: 'tacos de carne salteados, para mojar pan' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Croquetas caseras', note: 'fritas al momento, con ensalada de canónigos' },
			{ name: 'Pastéis de bacalhau', note: 'buñuelos portugueses de bacalao' },
			{ name: 'Montaditos', note: 'de jamón, lomo, chorizo o salchichón' },
			{ name: 'Patatas bravas', note: 'citadas en una de las reseñas de Google' },
		],
	},
	{
		title: 'Tortillas al momento',
		items: [
			{ name: 'De bacalao', note: 'la pizarra las anuncia hechas al momento' },
			{ name: 'De calabacín y queso', note: 'opción sin carne' },
			{ name: 'De chorizo', note: 'para los que van a lo clásico' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Postre de la casa', note: 'crema en tarro con almendras laminadas' },
			{ name: 'Vino de la casa', note: 'para acompañar el bacalao y el pica-pau' },
			{ name: 'Café', note: 'para cerrar la sobremesa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Taberna Portu?',
		a: 'En la calle Maestro Pablo Luna, 4 (Local 10), en el barrio de Bailén-Miraflores, en Málaga (29010). El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre solo por la noche, de 19:00 a 23:00. El viernes y el sábado sirve desde la 13:00 hasta medianoche, y el domingo de 13:00 a 23:00. En festivos el horario puede cambiar.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina portuguesa y española, con platos caseros y tapas. La pizarra de la puerta anuncia bacalhau à Brás, bacalhau com natas, pica-pau, pastéis de bacalhau, tortillas hechas al momento y montaditos, y las reseñas de Google citan las patatas bravas, las croquetas y los montaditos.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha de Google no ofrece reserva online. El teléfono del restaurante es el 641 38 77 12, así que conviene llamar para reservar mesa, sobre todo el fin de semana, cuando abre también al mediodía.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica precios ni una carta completa, y esta web no los inventa. Al ser una taberna de tapas, lo normal es pedir varias para compartir; confirma precios al llamar o en el local.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca entrada y asientos accesibles para personas en sillas de ruedas. No confirma aseo adaptado.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '5,0 sobre 5 con 209 reseñas. Es una puntuación perfecta con muchas opiniones, y las publicadas destacan la comida y el trato del equipo.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'La ficha no lo indica. Si te importa comer fuera, pregunta al llamar al 641 38 77 12 antes de ir.',
	},
];
