/**
 * Datos de Restaurante Camping Jaizkibel — Ctra. de Guadalupe, km 22
 * (Camping Jaizkibel, 20280 Hondarribia, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Camping Jaizkibel,
 *   43.3663455,-1.8045277, feature 0xd51099645af7e9d:0x5d473df018820db6
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. Una de ellas es la carta impresa del menú del día, de la
 *   que sale la sección «La carta» con su precio y sus suplementos.
 *
 * Lo que la web NO inventa: nada. La dirección aparece truncada en Google
 * («Ctra Guadalupe km22 (En el camping jaizkibel»), por eso se escribe completa
 * y sin el paréntesis abierto.
 */

export const BUSINESS = {
	name: 'Restaurante Camping Jaizkibel',
	shortName: 'Jaizkibel',
	mark: 'CJ',
	street: 'Ctra. de Guadalupe, km 22',
	city: 'Hondarribia',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20280',
	country: 'ES',
	phoneDisplay: '943 58 23 63',
	phoneHref: 'tel:+34943582363',
	rating: 4.5,
	reviewsCount: 176,
	siteUrl: 'https://www.sur-digital.com/restaurante-camping-jaizkibel',
	geo: { lat: 43.3663455, lng: -1.8045277 },
	featureId: '0xd51099645af7e9d:0x5d473df018820db6',
	placeId: 'ChIJnX6vRZYJUQ0Rtg2CGPA9R10',
	cid: '6721409070286376374',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Camping+Jaizkibel/@43.3663455,-1.8045277,17z/data=!3m1!4b1!4m6!3m5!1s0xd51099645af7e9d:0x5d473df018820db6!8m2!3d43.3663455!4d-1.8045277!16s%2Fg%2F11h541wzs9',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3663455%2C-1.8045277',
	embed: 'https://maps.google.com/maps?q=43.3663455,-1.8045277&z=15&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: todos los días de 9:00 a 23:00, sin cierre a
 * mediodía ni descanso entre semana.
 */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–23:00' },
	{ day: 'Martes', value: '9:00–23:00' },
	{ day: 'Miércoles', value: '9:00–23:00' },
	{ day: 'Jueves', value: '9:00–23:00' },
	{ day: 'Viernes', value: '9:00–23:00' },
	{ day: 'Sábado', value: '9:00–23:00' },
	{ day: 'Domingo', value: '9:00–23:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Un trato excelente, camareros muy educados y amables, se agradece mucho.',
	},
	{ rating: 4, text: 'Los macarrones bastante buenos, las albóndigas con arroz blanco delicioso.' },
	{ rating: 3, text: 'Muy buena atención, los pinchos muy ricos.' },
];

/**
 * Servicios y señas de identidad que sí constan: las dos categorías con las que
 * Google clasifica el local, su horario continuado, el menú del día de su carta
 * y los datos de accesibilidad que publica la ficha.
 */
export const SERVICIOS = [
	'Restaurante y bar',
	'Menú del día 12 €',
	'Cocina casera',
	'Pinchos y raciones',
	'Abierto todos los días',
	'Acceso para sillas de ruedas',
];

/**
 * Carta del menú del día tal como aparece en la carta impresa fotografiada en el
 * perfil de Google: entrante, principal y postre a elegir, 12,00 € con IVA
 * incluido y suplementos de 1 a 5 € en seis de los principales.
 */
export const MENU = [
	{
		title: 'Entrantes',
		items: [
			{ name: 'Ensalada mixta', note: '' },
			{ name: 'Ensalada de pasta', note: '' },
			{ name: 'Alubia pinta con chorizo y morcilla', note: '' },
			{ name: 'Espaguetis roquefort', note: '' },
			{ name: 'Lasaña de pollo', note: '' },
			{ name: 'Alcachofas rebozadas con vinagreta y jamón', note: '' },
			{ name: 'Lacón a gallega', note: '' },
			{ name: 'Pimientos rellenos de bacalao', note: '' },
		],
	},
	{
		title: 'Principales',
		items: [
			{ name: 'Atún plancha con cebolla pochada y patata panadera', note: '' },
			{ name: 'Albóndigas en salsa con arroz blanco', note: '' },
			{ name: 'Solomillo de cerdo con salsa pimienta y patatas fritas', note: '' },
			{ name: 'Callos con morros', note: '' },
			{ name: 'Cachopo de ternera con patatas fritas y piquillos', note: '+1 €' },
			{ name: 'Codillo de cerdo con puré de patata', note: '+2 €' },
			{ name: 'Manchón de pato con champiñones y patatas fritas', note: '+3 €' },
			{ name: 'Bacalao con piperrada y patata panadera', note: '+3 €' },
			{ name: 'Entrecot con patatas fritas y padrones', note: '+4 €' },
			{ name: 'Chuletillas de cordero con patatas fritas y piquillos', note: '+5 €' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Tarta de queso', note: '' },
			{ name: 'Yogur natural azucarado', note: '' },
			{ name: 'Fondant de chocolate', note: '' },
			{ name: 'Cuajada con miel o azúcar', note: '' },
			{ name: 'Profiteroles de nata', note: '' },
			{ name: 'Pastel vasco', note: '' },
			{ name: 'Flan con nata', note: '' },
			{ name: 'Helado', note: '' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Restaurante Camping Jaizkibel?',
		a: 'En el kilómetro 22 de la carretera de Guadalupe, dentro del Camping Jaizkibel, en el 20280 Hondarribia (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 9:00 a 23:00, de lunes a domingo, sin cerrar a mediodía. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes de ir.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 58 23 63. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Cuánto cuesta el menú del día?',
		a: '12,00 € con IVA incluido, según la carta impresa que aparece en su perfil de Google. Incluye entrante, principal y postre, y la bebida y el café se cobran aparte. Algunos principales llevan suplemento: cachopo +1 €, codillo +2 €, manchón de pato y bacalao +3 €, entrecot +4 € y chuletillas de cordero +5 €.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Menú del día con entrantes como la alubia pinta con chorizo y morcilla, la lasaña de pollo o los pimientos rellenos de bacalao; principales como el atún a la plancha, las albóndigas con arroz blanco, el codillo con puré o el entrecot; y postres como la tarta de queso, el pastel vasco o el fondant de chocolate. Además, pinchos y raciones en la barra.',
	},
	{
		q: '¿Se puede ir a desayunar o a tomar algo?',
		a: 'Sí. Google lo clasifica como restaurante y bar, y abre a las 9:00, así que sirve desayunos, cafés y pinchos además de comidas y cenas.',
	},
	{
		q: '¿Hay que estar alojado en el camping?',
		a: 'No. El restaurante está dentro del Camping Jaizkibel, pero es un establecimiento abierto: su ficha es pública y sus reseñas son de clientes que van a comer o a tomar algo.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Tiene 4,5 sobre 5 con 176 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas y asientos adaptados. No publica datos sobre aparcamiento adaptado.',
	},
];
