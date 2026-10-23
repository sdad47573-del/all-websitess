/**
 * Datos de Bar El Guapo — Carr. Orilla del Azarbe, 64 (30162 Santa Cruz, Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bar El Guapo, 38.0268646,-1.0667353,
 *   feature 0xd639c97ab3c0993:0xd91d63eea503730c, place ID ChIJkwk8q5ecYw0RDHMDpe5jHdk.
 * - La ficha publica teléfono, horario, nota (4,2 con 1.539 reseñas), categorías
 *   (parrilla, bar, restaurante especializado en barbacoa), accesibilidad y reseñas.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que aquí no
 * hay una carta cerrada ni importes. Lo que se describe sale de las categorías de
 * Google, de sus fotos y de lo que dicen las reseñas.
 */

export const BUSINESS = {
	name: 'Bar El Guapo',
	shortName: 'El Guapo',
	mark: 'EG',
	street: 'Carr. Orilla del Azarbe, 64',
	city: 'Santa Cruz',
	region: 'Murcia',
	regionName: 'Región de Murcia',
	postalCode: '30162',
	country: 'ES',
	phoneDisplay: '968 85 04 30',
	phoneHref: 'tel:+34968850430',
	rating: 4.2,
	reviewsCount: 1539,
	categories: ['Parrilla', 'Bar', 'Restaurante especializado en barbacoa'],
	siteUrl: 'https://bar-el-guapo.vercel.app',
	geo: { lat: 38.0268646, lng: -1.0667353 },
	featureId: '0xd639c97ab3c0993:0xd91d63eea503730c',
	placeId: 'ChIJkwk8q5ecYw0RDHMDpe5jHdk',
};

/** CID del lugar en Google: identifica la ficha para enlazar reseñas. */
const CID_DECIMAL = '15644770557176804108';

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+El+Guapo/@38.0268646,-1.0667353,17z/data=!3m1!4b1!4m6!3m5!1s0xd639c97ab3c0993:0xd91d63eea503730c!8m2!3d38.0268646!4d-1.0667353!16s%2Fg%2F11xv78tdj',
	cid: `https://www.google.com/maps?cid=${CID_DECIMAL}`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.0268646%2C-1.0667353',
	embed: 'https://maps.google.com/maps?q=38.0268646,-1.0667353&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha: abre todos los días y cierra tarde de miércoles a sábado. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–18:00' },
	{ day: 'Martes', value: '8:00–18:00' },
	{ day: 'Miércoles', value: '8:00–24:00' },
	{ day: 'Jueves', value: '8:00–18:00' },
	{ day: 'Viernes', value: '8:00–24:00' },
	{ day: 'Sábado', value: '8:00–24:00' },
	{ day: 'Domingo', value: '8:00–19:00' },
];

/** Extractos literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'El abc de un merendero, ensalada, embutidos, carne brasa con sus patatas asadas.',
	},
	{ rating: 5, text: 'Buena cocina, buen servicio, buen ambiente y buena gente.' },
	{ rating: 4, text: 'Pollo brasa muy bueno lo demas regular' },
];

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La brasa', href: '#carta' },
	{ label: 'Fotos', href: '#galeria' },
	{ label: 'Visítanos', href: '#visitanos' },
	{ label: 'Preguntas', href: '#preguntas' },
];

export const FAQ = [
	{
		q: '¿Dónde está Bar El Guapo?',
		a: 'En la carretera de la Orilla del Azarbe, 64, 30162 Santa Cruz (Murcia), junto al canal del Azarbe. Se llega en coche y la ficha de Google indica aparcamiento adaptado. Con «Cómo llegar» se abre la ruta directamente en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días a las 8:00. Lunes, martes y jueves cierra a las 18:00; miércoles, viernes y sábado alarga hasta las 24:00, y el domingo cierra a las 19:00. Es el horario publicado en la ficha de Google, así que en festivos puede cambiar: llama antes si vienes de lejos.',
	},
	{
		q: '¿Qué se come en Bar El Guapo?',
		a: 'Es una parrilla: la ficha de Google lo clasifica como parrilla, bar y restaurante especializado en barbacoa, y el cartel de la fachada anuncia «carne a la brasa». En sus fotos aparecen pollo asado, calamares a la brasa, tabla de embutidos, ensalada mixta, patatas con alioli y tarta de queso. La ficha no publica la carta completa ni los precios, así que aquí no se inventan platos ni importes: se pregunta en el local o por teléfono.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'El bar abre a las 8:00 y en sus fotos aparece el café, así que hay margen para desayunar o tomar algo a primera hora. La ficha no detalla la oferta de desayunos; si buscas algo concreto, llama al 968 85 04 30.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'No hay reserva online: se habla con el bar por teléfono en el 968 85 04 30. Para grupos y fines de semana conviene llamar con antelación, sobre todo si vais a comer a la brasa.',
	},
	{
		q: '¿Se puede ir con niños o en grupo?',
		a: 'El comedor es amplio, con mesas grandes y manteles naranjas, y en sus fotos se ve una trona, así que es un sitio cómodo para ir en familia o en grupo. Si vais muchos, avisad por teléfono antes para que os guarden sitio.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google indica acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas. Si necesitas una mesa concreta, avisa por teléfono antes de ir.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha de Google no publica carta ni precios, así que esta web no da ninguna cifra para no inventarla. Con 1.539 reseñas y un 4,2 de nota media, lo más repetido es la carne a la brasa con patatas asadas y el pollo; para el precio, pregunta al llamar.',
	},
];

export const SERVICIOS = [
	'Parrilla',
	'Carne a la brasa',
	'Pollo asado',
	'Embutidos',
	'Ensaladas',
	'Raciones',
	'Postres caseros',
	'Café',
	'Comedor amplio',
	'Acceso adaptado',
];

/**
 * Resumen de lo que se sirve, sacado de la categoría del negocio en Google, de sus
 * fotos y de lo que citan sus reseñas. No es la carta completa: no está publicada.
 */
export const MENU = [
	{
		title: 'De la parrilla',
		items: [
			{
				name: 'Pollo a la brasa',
				note: 'entero y con limón, el plato que más se repite en las reseñas',
			},
			{
				name: 'Carne a la brasa',
				note: 'el cartel de la fachada anuncia «carne a la brasa»',
			},
			{
				name: 'Calamares a la brasa',
				note: 'a la plancha con ensalada, en las fotos de la ficha',
			},
		],
	},
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Tabla de embutidos',
				note: 'jamón, chorizo, mortadela y queso, según las fotos',
			},
			{
				name: 'Ensalada mixta',
				note: 'lechuga, tomate, atún, huevo, maíz, zanahoria y aceitunas',
			},
			{
				name: 'Patatas asadas con alioli',
				note: 'el acompañamiento que citan las reseñas de la brasa',
			},
		],
	},
	{
		title: 'Postre y café',
		items: [
			{ name: 'Tarta de queso', note: 'con cobertura de frutos rojos, en las fotos' },
			{ name: 'Café', note: 'servido en vaso, con el sobre de Bar El Guapo' },
			{
				name: 'Consulta la carta del día',
				note: 'la ficha no publica platos ni precios: se piden en el local',
			},
		],
	},
];
