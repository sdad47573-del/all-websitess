/**
 * Datos de Restaurante SOS — Carrer des Munt Aconcagua (07849 Cala Llonga,
 * Santa Eulària des Riu, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante SOS»,
 *   38.9520456,1.5188087, feature 0x12994020d3fbdfc7:0x3b2492b3ca6346a8
 *   (dirección, teléfono, horario, categorías, nota, reseñas, accesibilidad y
 *   descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La ficha no publica carta ni precios, así que
 * la sección «La carta» resume lo que citan las reseñas, lo que cuenta la
 * descripción del negocio y lo que se ve en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante SOS',
	shortName: 'SOS',
	mark: 'SOS',
	street: 'Carrer des Munt Aconcagua',
	city: 'Cala Llonga',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07849',
	country: 'ES',
	phoneDisplay: '971 19 64 60',
	phoneHref: 'tel:+34971196460',
	rating: 4.7,
	reviewsCount: 900,
	siteUrl: 'https://www.sur-digital.com/restaurante-sos',
	geo: { lat: 38.9520456, lng: 1.5188087 },
	featureId: '0x12994020d3fbdfc7:0x3b2492b3ca6346a8',
	placeId: 'ChIJx9_70yBAmRIRqEZjyrOSJDs',
	cid: '15607512033170749369',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+SOS/@38.9520456,1.5188087,17z/data=!3m1!4b1!4m6!3m5!1s0x12994020d3fbdfc7:0x3b2492b3ca6346a8!8m2!3d38.9520456!4d1.5188087!16s%2Fg%2F11c0xdvs1r',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9520456%2C1.5188087',
	embed: 'https://maps.google.com/maps?q=38.9520456,1.5188087&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: todos los días de 12:30 a 23:00 salvo el
 * martes, que cierra.
 */
export const HOURS = [
	{ day: 'Lunes', value: '12:30–23:00' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '12:30–23:00' },
	{ day: 'Jueves', value: '12:30–23:00' },
	{ day: 'Viernes', value: '12:30–23:00' },
	{ day: 'Sábado', value: '12:30–23:00' },
	{ day: 'Domingo', value: '12:30–23:00' },
];

/** Frases de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Los camareros amabilísimos, pedimos el arroz de marisco y riquísimo',
	'Las mejores almejas que he comido hace tiempo, la sangría de cava buenísima.',
	'Todo buenísimo, bien atendido y raciones contundentes',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, lo que cuenta la descripción del negocio, lo que citan sus reseñas
 * y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante mediterráneo',
	'Primera línea de playa',
	'Terraza con vistas a Cala Llonga',
	'Pescado fresco del día',
	'Arroces',
	'Opciones healthy',
	'Desayunos, comidas y cenas',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las reseñas,
 * de la descripción del negocio y de lo que se ve en las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Arroces y pescado',
		items: [
			{ name: 'Arroz de marisco', note: '«riquísimo», según una reseña y en las fotos del perfil' },
			{ name: 'Paella de marisco', note: 'en las fotos del perfil' },
			{ name: 'Pescado fresco del día', note: 'en la descripción del negocio' },
			{ name: 'Pescado a la sal', note: 'en las fotos del perfil' },
			{ name: 'Almejas', note: '«las mejores que he comido hace tiempo», según una reseña' },
		],
	},
	{
		title: 'Marisco y brasa',
		items: [
			{ name: 'Bogavante con espaguetis', note: 'en las fotos del perfil' },
			{ name: 'Bogavante guisado', note: 'en las fotos del perfil' },
			{ name: 'Mariscada', note: 'en las fotos del perfil' },
			{ name: 'Entrecot', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Cocina mediterránea',
		items: [
			{ name: 'Cocina mediterránea saludable', note: 'en la descripción del negocio' },
			{ name: 'Productos locales', note: 'en la descripción del negocio' },
			{ name: 'Opciones healthy', note: 'en la descripción del negocio' },
			{ name: 'Sangría de cava', note: '«buenísima», según una reseña' },
			{ name: 'Desayunos', note: 'en la descripción del negocio' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante SOS?',
		a: 'En Carrer des Munt Aconcagua, del 07849 Cala Llonga, en el municipio de Santa Eulària des Riu (Ibiza). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 12:30 a 23:00, salvo el martes, que cierra. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 971 19 64 60.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina mediterránea saludable con productos locales, pescado fresco del día, arroces y opciones healthy, según la descripción del propio negocio. Sus reseñas citan el arroz de marisco, las almejas y la sangría de cava, y en las fotos del perfil aparecen la paella, el bogavante con espaguetis, el bogavante guisado, la mariscada, el pescado a la sal y el entrecot. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Tiene terraza y vistas al mar?',
		a: 'Sí. La ficha lo describe en primera línea de playa, con una terraza con vistas a Cala Llonga, y las fotos del perfil muestran el comedor, la terraza y un rincón chill-out.',
	},
	{
		q: '¿Sirve desayunos?',
		a: 'Sí. La descripción del negocio habla de desayunos, comidas, cenas y atardeceres en su terraza.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,7 sobre 5 con 900 reseñas. Las publicadas destacan el arroz de marisco, las almejas, la sangría de cava, el trato del personal y el tamaño de las raciones.',
	},
];
