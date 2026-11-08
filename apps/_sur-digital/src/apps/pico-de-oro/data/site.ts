/**
 * Datos de Freiduría y Pollos al Carbón Pico de Oro — C. Pablo Coso Calero, 107,
 * 41930 Bormujos (Sevilla).
 *
 * Fuente pública:
 * - Ficha de Google Maps indicada: 37.3679994,-6.0805493,
 *   feature 0xd1213aef6313135:0x4807fbb20677de7c (nombre, dirección, categorías,
 *   horario, teléfono, nota, reseñas, accesibilidad y la descripción que publica
 *   el propio negocio), más su place id y su CID.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la ficha NO publica y esta web no inventa: carta con precios y dominio
 * propio (el campo de web apunta a un enlace corto de Google). Los platos y el
 * reparto salen de la descripción que firma el negocio, no de una suposición.
 */

export const BUSINESS = {
	name: 'Pico de Oro',
	fullName: 'Freiduría y Pollos al Carbón Pico de Oro',
	shortName: 'Pico de Oro',
	mark: 'PO',
	street: 'C. Pablo Coso Calero, 107',
	city: 'Bormujos',
	region: 'Andalucía',
	regionName: 'Andalucía',
	province: 'Sevilla',
	neighbourhood: '41930',
	postalCode: '41930',
	country: 'ES',
	phone: '+34 614 10 84 96',
	phoneHref: '+34614108496',
	rating: 4,
	reviewsCount: 163,
	siteUrl: 'https://www.sur-digital.com/pico-de-oro',
	geo: { lat: 37.3679994, lng: -6.0805493 },
	featureId: '0xd1213aef6313135:0x4807fbb20677de7c',
	placeId: 'ChIJNTEx9q4TEg0RfN53BrL7B0g',
	cid: '5190393837599055484',
	/** Categorías con las que Google clasifica el local. */
	category: 'Freiduría, pollos al carbón y comida para llevar',
	categories: [
		'Restaurante de comida para llevar',
		'Pollería',
		'Freiduría',
		'Hamburguesería',
		'Comida a domicilio',
		'Bar de tapas',
		'Tortillería',
		'Pastelería',
		'Panadería',
	],
	tagline: 'Pollo al carbón, pescados fritos y comida casera',
	description:
		'Pico de Oro, freiduría y pollos al carbón en la calle Pablo Coso Calero 107, 41930 Bormujos (Sevilla). Pollo al carbón, pescados fritos y comida casera.',
	hasPublicWebsite: false,
	/** Texto que publica el propio negocio en su ficha, resumido en sus datos. */
	ownerDescription:
		'PICO DE ORO es un negocio que abriría sus puertas en plena pandemia, el 14/10/2020, y que ofrece a sus clientes una amplia carta, especializado en pollo al carbón, pescados fritos, arroces, comidas caseras, tapas, paellas y migas (domingos). Intentando ofrecer el mejor servicio y atención a sus clientes a la hora de hacer pedidos con días de antelación o eventos. Repartimos a domicilio con las apps Glovo y Uber Eats de lunes a domingo de 11:00 a 16:00 y de 18:30 a 23:30. Abierto de lunes a domingo, mañanas, tardes y festivos. Martes tarde cerrado por descanso. Terraza para degustar en colaboración con Café Bar Bohemia.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/FREIDURIA+Y+POLLOS+AL+CARB%C3%93N+PICO+DE+ORO/@37.3679994,-6.0805493,17z/data=!4m6!3m5!1s0xd1213aef6313135:0x4807fbb20677de7c!8m2!3d37.3679994!4d-6.0805493!16s%2Fg%2F11qnd75smx',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3679994%2C-6.0805493',
	embed: 'https://maps.google.com/maps?q=37.3679994,-6.0805493&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google. El negocio abre todos los días en dos
 * turnos, salvo el martes (solo mediodía) y el miércoles (cerrado).
 */
export const HOURS = [
	{ day: 'Lunes', value: '10:30–16:00 · 19:00–23:30' },
	{ day: 'Martes', value: '10:30–15:00' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '10:30–16:00 · 19:00–23:30' },
	{ day: 'Viernes', value: '10:30–16:00 · 19:00–24:00' },
	{ day: 'Sábado', value: '10:30–16:00 · 19:00–24:00' },
	{ day: 'Domingo', value: '10:30–16:00 · 19:00–23:30' },
];

/** Lo que declara el negocio, sin añadidos. */
export const SERVICIOS = [
	'Pollo al carbón',
	'Pescados fritos',
	'Migas los domingos',
	'Terraza',
	'Glovo y Uber Eats',
];

/** Reseñas destacadas en la ficha pública, con la puntuación de su autor. */
export const REVIEWS = [
	{
		quote: 'El pollo riquísimo, acompañado de una buena ración de patatas y pimientos.',
		rating: 4,
	},
	{
		quote: 'Pollos ricos y sabrosos. Mejor trato. Repetiremos.',
		rating: 5,
	},
	{
		quote: 'Está seco y la «salsa» que lo acompaña es aceite con pimentón.',
		rating: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pico de Oro?',
		a: 'En la calle Pablo Coso Calero 107, en el 41930 de Bormujos, en la provincia de Sevilla. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Hay dos turnos, de 10:30 a 16:00 y de 19:00 a 23:30, de lunes a domingo, con dos excepciones: el martes solo abre al mediodía, de 10:30 a 15:00, y el miércoles figura cerrado. Viernes y sábado alargan la noche hasta las 24:00.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'Sí. El propio negocio lo cuenta en su ficha: reparte con las aplicaciones Glovo y Uber Eats de lunes a domingo, de 11:00 a 16:00 y de 18:30 a 23:30. Los pedidos grandes o para eventos se encargan con días de antelación por teléfono.',
	},
	{
		q: '¿Qué se come en Pico de Oro?',
		a: 'El negocio se presenta como especialista en pollo al carbón, pescados fritos, arroces, comidas caseras y tapas. La descripción de su ficha añade paellas y migas los domingos. Google lo clasifica además como pollería, freiduría, hamburguesería y tortillería.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. La ficha explica que la terraza para degustar funciona en colaboración con el Café Bar Bohemia, junto al local. No publica número de mesas ni reserva de terraza.',
	},
	{
		q: '¿Se puede pedir por teléfono?',
		a: 'El teléfono publicado es el 614 10 84 96. El negocio pide antelación para pedidos grandes y eventos, así que si necesitas una paella o comida para un grupo, llama con días de margen.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas y aparcamiento adaptado. Es de los pocos locales de la zona que declara las dos cosas, y no publica más detalles sobre aseos o recorridos interiores.',
	},
	{
		q: '¿Desde cuándo está abierto?',
		a: 'El negocio cuenta en su ficha que abrió el 14 de octubre de 2020, en plena pandemia. En 2026 son seis años de pollo al carbón y freiduría en Bormujos.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza un dominio del restaurante: el campo de sitio web apunta a un enlace corto de Google. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro sobre cinco con 163 reseñas. La ficha destaca comentarios sobre el pollo, las patatas y el trato; también hay alguna crítica sobre la salsa. Puedes leerlas todas en la ficha de Google.',
	},
];
