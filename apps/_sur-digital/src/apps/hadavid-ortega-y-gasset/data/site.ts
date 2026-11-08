/** Datos públicos de Hadavid Ortega y Gasset, avenida José Ortega y Gasset, 111, Málaga.
 * Fuente: ficha de Google Maps indicada, consultada el 28 de octubre de 2026.
 * La ficha indica teléfono, dirección, categoría y horario; no muestra página web.
 */
export const BUSINESS = {
	name: 'Hadavid Ortega y Gasset',
	shortName: 'Hadavid',
	mark: 'H',
	street: 'Av. de José Ortega y Gasset, 111',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29006',
	country: 'ES',
	phone: '632 94 79 21',
	phoneHref: 'tel:+34632947921',
	rating: null,
	reviewsCount: 22,
	siteUrl: 'https://www.sur-digital.com/hadavid-ortega-y-gasset',
	geo: { lat: 36.7100405, lng: -4.4517398 },
	featureId: '0xd72f7ebdd73918d:0xe8fbff33099d69f7',
	placeId: 'ChIJjZFz3ev3cg0R92mdCTP_--g',
	googleCategory: 'Panadería',
	tagline: 'Panadería en la avenida José Ortega y Gasset, Málaga',
	description:
		'Hadavid Ortega y Gasset, panadería en Av. de José Ortega y Gasset, 111, Cruz de Humilladero, 29006 Málaga. Teléfono 632 94 79 21. Consulta horarios y ubicación en Google Maps.',
	hoursSummary: 'L–V 8:30–21:00 · S 8:30–15:00 · D cerrado',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/Hadavid+Ortega+y+Gasset/@36.7100405,-4.4517398,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ebdd73918d:0xe8fbff33099d69f7!8m2!3d36.7100405!4d-4.4517398!16s%2Fg%2F11nvv4vcw1?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=16788292630623382007',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7100405%2C-4.4517398',
	embed: 'https://maps.google.com/maps?q=36.7100405,-4.4517398&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7100405,-4.4517398',
};

/** Horario visible en la ficha de Maps consultada el 28 de octubre de 2026. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:30–21:00' },
	{ day: 'Sábado', value: '8:30–15:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario publicado en la ficha de Google. Para confirmar cambios o festivos, llama al 632 94 79 21.';

export const SERVICIOS = ['Panadería', 'Pan del día', 'Bollería'];

export const HIGHLIGHTS = [
	{
		title: 'Una panadería en el barrio',
		text: 'Hadavid Ortega y Gasset está en el número 111 de la avenida, en Cruz de Humilladero, Málaga.',
	},
	{
		title: 'Fotos de la ficha',
		text: 'Las imágenes publicadas en Maps corresponden a esta dirección y muestran el propio establecimiento.',
	},
	{
		title: 'Consulta antes de ir',
		text: 'Llama al 632 94 79 21 para preguntar por el horario de festivos y el surtido disponible.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'En la ficha',
		items: [
			{ name: 'Panadería', note: 'Categoría publicada para Hadavid Ortega y Gasset en Google Maps.' },
			{ name: 'Fotografías del local', note: 'La galería pública permite ver las imágenes subidas a la ficha de esta dirección.' },
			{ name: 'Surtido del día', note: 'La ficha no publica un catálogo completo; llama para consultar la disponibilidad.' },
		],
	},
	{
		title: 'Información',
		items: [
			{ name: 'Lunes a viernes', note: '8:30–21:00, según el horario publicado en Google Maps.' },
			{ name: 'Sábado', note: '8:30–15:00, según el horario publicado en Google Maps.' },
			{ name: 'Domingo', note: 'Cerrado, según el horario publicado en Google Maps.' },
		],
	},
	{
		title: 'Contacto',
		items: [
			{ name: 'Llamar a la panadería', note: 'Teléfono publicado: 632 94 79 21.' },
			{ name: 'Cómo llegar', note: 'Av. de José Ortega y Gasset, 111, Cruz de Humilladero, 29006 Málaga.' },
			{ name: 'Google Maps', note: 'Abre la ficha para consultar la información más reciente.' },
		],
	},
];

export const FAQ = [
	{ q: '¿Dónde está Hadavid Ortega y Gasset?', a: 'En Av. de José Ortega y Gasset, 111, Cruz de Humilladero, 29006 Málaga. El mapa y el enlace para llegar corresponden a la ubicación de la ficha de Google Maps.' },
	{ q: '¿Cuál es el teléfono?', a: 'El número publicado en Google Maps es 632 94 79 21.' },
	{ q: '¿Cuál es su horario?', a: 'La ficha consultada muestra de lunes a viernes de 8:30 a 21:00, los sábados de 8:30 a 15:00 y los domingos cerrado. Llama antes para confirmar posibles cambios.' },
	{ q: '¿Cuántas reseñas tiene?', a: 'La ficha de Google Maps muestra 22 reseñas. El perfil no muestra una puntuación global en los datos consultados.' },
	{ q: '¿Qué productos ofrece?', a: 'Google Maps clasifica el establecimiento como panadería, pero la ficha no incluye un catálogo completo de productos o precios. Llama al 632 94 79 21 para preguntar por el surtido del día.' },
	{ q: '¿Es el mismo establecimiento que Hadavid Teatinos?', a: 'No: esta ficha corresponde a la dirección Av. de José Ortega y Gasset, 111. La sucursal de Teatinos tiene otra ubicación y su propia ficha.' },
];
